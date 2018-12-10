//Contact me via Kongregate as GreenSatellite, reddit on /r/Trimps, or Email at trimpsgame@gmail.com
//This UI layout was made possible by bootstrap http://www.getbootstrap.com, and the icons are from Glyphicons http://www.glyphicons.com and Icomoon https://icomoon.io
//If you want to learn how to make javascript games, this is the short tutorial that got me started: http://dhmholley.co.uk/incrementals.html

/*		Trimps
		Copyright (C) 2016 Zach Hood

		This program is free software: you can redistribute it and/or modify
		it under the terms of the GNU General Public License as published by
		the Free Software Foundation, either version 3 of the License, or
		(at your option) any later version.

		This program is distributed in the hope that it will be useful,
		but WITHOUT ANY WARRANTY; without even the implied warranty of
		MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
		GNU General Public License for more details.

		You should have received a copy of the GNU General Public License
		along with this program (if you are reading this on the original
		author's website, you can find a copy at
		<trimps.github.io/license.txt>). If not, see
		<http://www.gnu.org/licenses/>. */
"use strict";
if (typeof kongregate === 'undefined' && document.getElementById("boneBtn") !== null) {
	var boneBtn = document.getElementById("getBonesBtn");
	boneBtn.onclick = "";
	boneBtn.innerHTML = "Kongregate API没有加载！ 您不能提交高分或花费Kreds。 尝试刷新或联系Kongregate支持！";
	boneBtn.style.backgroundColor = "#d9534f";
	document.getElementById("getBundleBtn").style.display = "none";
}
document.getElementById("versionNumber").innerHTML = game.global.stringVersion;

function autoSave() {
    if (game.options.menu.autoSave.enabled) save();
    setTimeout(autoSave, 60000);
}

var lastOnlineSave = -1800000;
var isSaving = false;
var disableSaving = false;
function save(exportThis, fromManual) {
	isSaving = true;
    var saveString = JSON.stringify(game);
    var saveGame = JSON.parse(saveString);
	isSaving = false;
    delete saveGame.worldUnlocks;
    delete saveGame.badGuys;
    delete saveGame.mapConfig;
	delete saveGame.global.prestige;
	delete saveGame.worldText;
	delete saveGame.trimpDeathTexts;
	delete saveGame.badGuyDeathTexts;
	delete saveGame.tierValues;
	delete saveGame.workspaces;
	delete saveGame.resources.trimps.employed;
    for (var item in saveGame.equipment) {
		delete saveGame.equipment[item].tooltip;
		delete saveGame.equipment[item].blocktip;
        delete saveGame.equipment[item].cost;
    }
    for (var itemA in saveGame.buildings) {
        delete saveGame.buildings[itemA].tooltip;
        delete saveGame.buildings[itemA].cost;
		delete saveGame.buildings.Barn.increase;
		delete saveGame.buildings.Forge.increase;
		delete saveGame.buildings.Shed.increase;
		delete saveGame.buildings.origTime;
    }
    for (var itemB in saveGame.upgrades) {
        delete saveGame.upgrades[itemB].tooltip;
        delete saveGame.upgrades[itemB].cost;
		delete saveGame.upgrades[itemB].prestiges;
		delete saveGame.upgrades[itemB].modifier;
    }
    for (var itemC in saveGame.jobs) {
        delete saveGame.jobs[itemC].tooltip;
        delete saveGame.jobs[itemC].cost;
    }
    for (var itemD in saveGame.triggers) {
        delete saveGame.triggers[itemD].message;
        delete saveGame.triggers[itemD].cost;
    }
	for (var itemE in saveGame.mapUnlocks){
		var unlock = saveGame.mapUnlocks[itemE];
		delete unlock.level;
		delete unlock.message;
		delete unlock.icon;
		delete unlock.world;
		delete unlock.repeat;
		delete unlock.startAt;
	}
	for (var itemP in saveGame.portal){
		var portal = saveGame.portal[itemP];
		delete portal.modifier;
		delete portal.priceBase;
		delete portal.tooltip;
		delete portal.otherModifier;
		delete portal.additiveInc;
		delete portal.specialGrowth;
	}
	for (var itemS in saveGame.options.menu){
		var settingItem = saveGame.options.menu[itemS];
		delete settingItem.description;
		delete settingItem.titles;
		delete settingItem.locked;
		delete settingItem.secondLocation;
		delete settingItem.extraTags;
	}
	var challenge = saveGame.global.challengeActive;
	if (challenge == "Mapocalypse") challenge = "Electricity";
	for (var itemF in saveGame.challenges){
		if (itemF != challenge){
			delete saveGame.challenges[itemF];
			continue;
		}
		var challenge = saveGame.challenges[itemF];
		delete challenge.unlockString;
		delete challenge.squaredDescription;
		delete challenge.replaceSquareFreq;
		delete challenge.replaceSquareReward;
		delete challenge.replaceSquareThresh;
		delete challenge.replaceSquareGrowth;
		delete challenge.zoneScaling;
		delete challenge.scaleModifier;
		delete challenge.zoneScaleFreq;
		delete challenge.description;
		delete challenge.heliumThrough;
	}
	for (var itemG in saveGame.achievements){
		var achievement = saveGame.achievements[itemG];
		delete achievement.tiers;
		delete achievement.breakpoints;
		delete achievement.names;
		delete achievement.descriptions;
		delete achievement.title;
		delete achievement.icon;
		delete achievement.newStuff;
		delete achievement.filters;
		delete achievement.timed;
	}
	delete saveGame.heirlooms.values;
	delete saveGame.heirlooms.defaultSteps;
	delete saveGame.heirlooms.rarityNames;
	delete saveGame.heirlooms.rarities;
	delete saveGame.heirlooms.rarityBreakpoints;
	for (var itemHT in saveGame.heirlooms){
		for (var itemHI in saveGame.heirlooms[itemHT]){
			var heirloom = saveGame.heirlooms[itemHT][itemHI];
			delete heirloom.name;
			delete heirloom.steps;
		}
	}
	for (var itemTL in saveGame.talents){
		var talent = saveGame.talents[itemTL];
		delete talent.icon;
		delete talent.description;
		delete talent.tier;
		delete talent.requires;
		delete talent.name;
	}
	for (var itemGU in saveGame.generatorUpgrades){
		var genUp = saveGame.generatorUpgrades[itemGU];
		delete genUp.base;
		delete genUp.baseCost;
		delete genUp.baseIncrease;
	}
	for (var itemPGU in saveGame.permanentGeneratorUpgrades){
		var genUp = saveGame.permanentGeneratorUpgrades[itemPGU];
		delete genUp.description;
		delete genUp.cost;
	}
	for (var itemEmp in saveGame.empowerments){
		var empUp = saveGame.empowerments[itemEmp];
		delete empUp.baseModifier;
		delete empUp.color;
	}
	for (var itemSrb in saveGame.singleRunBonuses){
		itemSrb = saveGame.singleRunBonuses[itemSrb];
		delete itemSrb.name;
		delete itemSrb.text;
		delete itemSrb.cost;
		delete itemSrb.confirmation;
	}
	for (var itemStat in saveGame.stats){
		itemStat = saveGame.stats[itemStat];
		delete itemStat.title;
	}
	saveGame.playerSpire = playerSpire.save();
    saveString = LZString.compressToBase64(JSON.stringify(saveGame));
    if (exportThis) return saveString;
	if (disableSaving) {
		message("由于发生错误，已禁用保存以防止损坏", "Notices");
		postMessages();
		return;
	}
	try{
		localStorage.setItem("trimpSave1",saveString);
		if (localStorage.getItem("trimpSave1") == saveString){
			message("游戏已保存!", "Notices");
		}
		else {
			message("出于某些原因,你的游戏未能保存。请确保你已经导出并备份你的存档！", "Notices");
		}
	}
	catch(e){
		if(e.name == "NS_ERROR_FILE_CORRUPTED") {
        message("对不起，您的浏览器存储看起来已损坏。 请通过转到工具 - >清除最近历史记录 - > Cookies清除存储空间，并将时间范围设置为“一切”。 这将删除所有站点上损坏的浏览器存储。", "Notices");
		}
		else
		message("由于某些原因，您的游戏不会保存。 确保导出并备份您的存档！", "Notices");
		}

	if (game.options.menu.usePlayFab.enabled == 1 && playFabId){
		var timeSinceSave = performance.now() - lastOnlineSave;
		if ((timeSinceSave < 1800000 && !fromManual) || timeSinceSave < 60000){
			return;
		}
		saveToPlayFab(saveString);
	}

}

function load(saveString, autoLoad, fromPf) {
	var savegame;
	//oldVersion mostly deprecated, but still used for compat with saves from before stringVersion
	var oldVersion = 0;
	var oldStringVersion = '';
	var betaV = -1;
	var fromImport = false;
	if (saveString === true) fromImport = true
    if (saveString) {
        savegame = JSON.parse(LZString.decompressFromBase64(((fromImport) ? document.getElementById("importBox").value.replace(/(\r\n|\n|\r|\s)/gm,"") : saveString)));
        tooltip('hide');
		if (!savegame) {
			message("看起来您的导入代码不能正常工作。请确保您的导出代码保存在与所有字符兼容的文本文件中。如果您认为这段代码应该有效，您可以将它发送到Trimpsgame@gmail.com，我将尽我最大的努力为您恢复它!", "Notices");
			return false;
		}
		else if (fromImport){
			game.options.menu.usePlayFab.enabled = 0;
			toggleSetting("usePlayFab", null, false, true);
			playFabId = -1;
		}
    } else  {
		var unparsedSave;
		try {
			unparsedSave = localStorage.getItem("trimpSave1");
		}
		catch (e) {
			message("您的浏览器正在阻止脆皮访问浏览器的本地存储，您将无法保存或加载您的进程。请检查您的浏览器设置，以确保第三方cookie没有被禁用，并且您没有使用任何可能中断存储的插件! <br/><br/> 自动保存已被禁用，以防止对您的存档造成损害。如果您以前有一个保存文件，它应该还在等待您修复您的浏览器设置。", "Notices");
			game.options.menu.autoSave.enabled = 0;
			game.options.menu.autoSave.onToggle();
			return false;
		}
        if (unparsedSave !== null) savegame = JSON.parse(LZString.decompressFromBase64(unparsedSave));
		else {
			tooltip("欢迎", null, "update");
			return false;
		}
    }
	if (typeof savegame === 'undefined' || savegame === null || typeof savegame.global === 'undefined') {
		tooltip("欢迎", null, "update");
		return false;
	}
	oldVersion = savegame.global.version;
	oldStringVersion = (savegame.global.stringVersion) ? savegame.global.stringVersion.split('.') : null;
	betaV = savegame.global.betaV;
	if (savegame.global.isBeta && !game.global.isBeta){
		message("您不能把beta版的存档导入到这个版本!", "Notices");
		return false;
	}
	if ((oldStringVersion && oldStringVersion.length && (compareVersion(oldStringVersion, game.global.stringVersion.split('.'))))) {
		message("您的存档文件来自一个比你当前脆皮的版本更新的 (v" + savegame.global.stringVersion + ") ，当前脆皮版本是 (v" + game.global.stringVersion + ")。请刷新或者重启你的浏览器以价值最新版！", "Notices");
		return false;
	}
	resetGame();

    if (game.global.killSavesBelow > oldVersion) {
		if (savegame.global.version == 0.07){
			game.global.kongBonusMode = true;
			activateKongBonus(savegame.global.world);
			return false;
		}
        message("我很抱歉,但是你以前保存的游戏 （版本 " + savegame.global.version + "） 无法在新版本中运行。这应该是最后一次重置！", "Notices");
        return false;
    }
	else if (game.global.isBeta) {
		message("注意:您正在使用beta/dev版本。您将无法将您的save从这个版本导出到live版本，并且此服务器可能会在没有警告的情况下进行更改或更改。感谢您的帮助测试!", "Notices");
		savegame.global.isBeta = true;
	}
	savegame.global.version = game.global.version;
	savegame.global.stringVersion = game.global.stringVersion;
	savegame.global.betaV = game.global.betaV;
	//Compatibility to new message filter config. Separated from other compatibility as it needs to go into effect before game has the old booleans copied over it.
	if (oldVersion < 3.51){
		addNewSetting("timestamps");
		var oldMsg = savegame.global.messages;
		savegame.global.messages = game.global.messages;
		for (var item in oldMsg){
			savegame.global.messages.enabled = oldMsg[item];
		}
	}
	//Load global
	if (typeof savegame.global !== 'undefined') {
        for (var item in game.global) {
            if (item == "time" || item == "start" || item == "lastFightUpdate" || item == "prestige") continue;
            if (typeof savegame.global[item] !== 'undefined') game.global[item] = savegame.global[item];
            if (item == "buildingsQueue") {
                for (var itemA in game.global.buildingsQueue) {
                    addQueueItem(game.global.buildingsQueue[itemA]);
                }
				game.global.nextQueueId = game.global.buildingsQueue.length;
            }
        }
	}
	//c^2
	if (typeof savegame.c2 !== 'undefined'){
		for (var item in game.c2){
			if (savegame.c2[item]) game.c2[item] = savegame.c2[item];
		}
	}
	//Load the rest of the game.categories
    for (var a in game) { //global, resources, jobs, buildings, upgrades, triggers, equipment, settings, options
        if (a == "global") continue;
        if (a == "badGuys") continue;
        if (a == "worldUnlocks") continue;
        if (a == "mapConfig") continue;
		if (a == "options" && savegame.options){
			for (var itemO in savegame.options.menu){
				if (game.options.menu[itemO]) game.options.menu[itemO].enabled = savegame.options.menu[itemO].enabled;
				if (itemO == "mapAtZone") game.options.menu.mapAtZone.setZone = savegame.options.menu.mapAtZone.setZone;
			}
			if (typeof savegame.options.menu.GeneticistassistTarget !== 'undefined' && savegame.options.menu.GeneticistassistTarget.disableOnUnlock) game.options.menu.GeneticistassistTarget.disableOnUnlock = true;
			if (savegame.options.menu.pauseGame && savegame.options.menu.pauseGame.timeAtPause) game.options.menu.pauseGame.timeAtPause = savegame.options.menu.pauseGame.timeAtPause;
			continue;
		}
        var topSave = savegame[a];
        if (typeof topSave === 'undefined' || topSave === null) continue;
		if (savegame.global.brokenPlanet) game.global.prestige.cost = 53;
		if (a == "equipment"){
			loadEquipment(topSave);
			continue;
		}
		var topGame = game[a];
        for (var b in topGame) { //each item in main category (resource names, job names, etc)
            var midSave = topSave[b];
            if (typeof midSave === 'undefined' || midSave === null) continue;
            var midGame = topGame[b];
            if (typeof midSave !== 'object') midGame = midSave;
            else
                for (var c in midGame) { //purchased, cost, etc
                    if (c == "cost") continue;
                    if (c == "tooltip") continue;
					if (a == "mapUnlocks" && c == "repeat") continue;
					if (a == "stats" && c == "title") continue; //title is being deleted from stats now, but I guess this has to stay forever for 4.8 compatibility.
					if (a == "resources" && b == "trimps" && c == "employed") {
						continue;
					}
					if (a == "resources" && c == "owned"){
						//check bad entries here.
					}
					if (a == "buildings" && c == "purchased"){
						if (savegame.buildings[b].purchased < 0) savegame.buildings[b].purchased = 0;
					}
                    var botSave = midSave[c];
                    if (typeof botSave === 'undefined' || botSave === null) continue;
					if (a == "heirlooms"){
						if (typeof botSave.currentBonus !== 'undefined')
							midGame[c].currentBonus = botSave.currentBonus;
						continue;
					}

                    midGame[c] = botSave;
                }
        }
    }
	game.global.lockTooltip = false;
	playerSpire.resetToDefault();
	if (savegame.playerSpire) playerSpire.load(savegame.playerSpire)
	//Compatibility

	if (oldVersion === 1.0){
		var hasPortal = false;
		for (var portItem in game.portal){
			var portUpgrade = game.portal[portItem];
			if (portUpgrade.level > 0) hasPortal = true;
			if (typeof portUpgrade.level === 'undefined') continue;
			for (var d = 0; d < portUpgrade.level; d++){
				portUpgrade.heliumSpent += Math.ceil((d / 2) + portUpgrade.priceBase * Math.pow(1.3, d));
			}
		}
		if (hasPortal) game.global.totalPortals = 1;
	}
	if (oldVersion === 1.01){
		game.jobs.Dragimp.modifier = (0.5 * Math.pow(1.05, game.buildings.Tribute.owned));
	}
	if (oldVersion <= 1.02){
		for (var checkResourceMax in game.resources){
			var toCheckMax = game.resources[checkResourceMax];
			if (toCheckMax.max == -1) continue;
			toCheckMax.max = parseFloat(toCheckMax.max);
		}
	}
	if (oldVersion <= 1.06){
		game.resources.trimps.max += (game.buildings.Mansion.owned * 2);
		game.buildings.Mansion.increase.by = 10;
	}
	if (oldVersion <= 1.07){
		game.global.highestLevelCleared = game.global.world;
		game.resources.trimps.max += (game.buildings.Wormhole.owned * 500);
		game.buildings.Wormhole.increase.by = "1000";
		if (game.global.world >= 33) game.worldUnlocks.Doom.fire();
	}
	if (oldVersion < 1.1){
		if (game.global.world >= 25){
			for (var mys = 0; mys < Math.floor((game.global.world - 20) / 5); mys++){
				unlockUpgrade("Gymystic");
			}
		}
	}
	if (oldVersion < 2.213) {
		for (var item in game.options.menu){
			game.options.menu[item].enabled = (game.options.menu[item].enabled) ? 1 : 0;
		}
	}
	if (oldVersion < 2.3){
		if (game.global.highestLevelCleared >= 80) game.global.prisonClear++;
		if (game.global.world >= 70) {
			message("欢迎来到 2.3! 截止现在你已经达到区域70了，你已经自动开启了新的挑战——“猎人”和新工作——“遗传学家”", "Notices");
			unlockJob("Geneticist");
		}
		else if (game.global.highestLevelCleared >= 69){
			message("欢迎来到 2.3! 因为你之前已经清理了至少70区，你已经打开了新的挑战——“猎人”!", "Notices");
		}
	}
	if (oldVersion < 2.7){
		for (var statName in game.stats){
			var statItem = game.stats[statName];
			if (typeof statItem.valueTotal !== 'undefined' && typeof statItem.value !== 'undefined') {
				statItem.valueTotal = statItem.value;
				statItem.value = 0;
			}
			else if (typeof statItem.valueTotal !== 'undefined' && typeof statItem.valueTotal !== 'function' && typeof savegame.stats !== 'undefined'){
				if (typeof savegame.stats[statName] !== 'undefined') {
					statItem.valueTotal = savegame.stats[statName].value;
					}
			}
		}
		if (game.global.totalHeliumEarned > 0){
			var totalHelium = 0;
			for (var item in game.portal){
				if (game.portal[item].locked) continue;
				var portUpgrade = game.portal[item];
				if (typeof portUpgrade.level === 'undefined' || portUpgrade.level <= 0) continue;
				totalHelium += portUpgrade.heliumSpent;
			}
			var newTHV = totalHelium + game.global.heliumLeftover + game.resources.helium.owned;
			if (game.global.totalHeliumEarned - newTHV > 0) game.stats.spentOnWorms.valueTotal = game.global.totalHeliumEarned - newTHV;
			game.global.totalHeliumEarned = newTHV;
		}
	}
	var noOfflineTooltip = false;
	if (oldVersion < 2.72){
		achievementCompatibilityUnlock();
		noOfflineTooltip = true;
	}
	if (oldVersion < 2.73){
		if (game.jobs.Geneticist.owned > 0) game.global.lastLowGen = (game.global.lowestGen > 0) ? game.global.lowestGen : game.jobs.Geneticist.owned;
	}
	if (oldVersion < 2.75){
		game.buildings.Wormhole.increase.by = 1500;
	}
	if (oldVersion < 2.81 && typeof game.global.lootAvgs !== 'undefined'){
		game.global.lootAvgs.fragments = {average:0, accumulator: 0}
	}
	if (oldVersion < 2.9){
		if (game.options.menu.showFullBreed.enabled == 2) game.options.menu.showFullBreed.enabled = 1;
		if (game.global.totalPortals >= 5) message("对传送门的大量使用创造了一个机会让它渗入你的世界。保持警惕。", "Story", null, "voidMessage");
	}
	if (oldVersion < 3){
		game.global.heirloomSeed = getRandomIntSeeded(game.global.voidSeed, 0, 1000000);
	}
	if (oldVersion < 3.1){
		game.global.heirloomBoneSeed = getRandomIntSeeded(game.global.heirloomSeed, 0, 1000000);
	}
	/* if (oldVersion < 3.11){
		game.global.eggSeed = getRandomIntSeeded(game.global.heirloomBoneSeed, 0, 1000000);
		cancelTooltip();
		noOfflineTooltip = true;
		tooltip("Eggs", null, 'update');
	} */
	if (oldVersion < 3.2){
		game.global.researched = true;
	}
	if (oldVersion < 3.21){
		game.achievements.oneOffs.finished.push(false);
		game.achievements.oneOffs.filters.push(-1);
	}
	if (oldVersion < 3.23){
		game.global.autoPrestiges = (game.global.autoPrestiges === true) ? 1 : 0;
		game.global.voidMaxLevel = game.global.highestLevelCleared;
	}
	if (oldVersion < 3.3){
		if (game.global.highestLevelCleared >= 59) game.global.autoUpgradesAvailable = true;
		if (game.global.sLevel >= 4) game.buildings.Warpstation.craftTime = 0;
	}
	if (oldVersion < 3.6){
		if (game.achievements.oneOffs.finished.length > 12)
			game.achievements.oneOffs.finished.splice(12, game.achievements.oneOffs.finished.length - 12);
		var newFinished = game.achievements.oneOffs.finished;
		var removed = newFinished.splice(10, 2);
		for (var x = 0; x < 12; x++) newFinished.push(false);
		newFinished.splice(18, 0, removed[0]);
		newFinished.splice(19, 0, removed[1]);
		game.achievements.oneOffs.finished = newFinished;
		addNewSetting("tinyButtons");
	}
	if (oldVersion < 3.7){
		game.global.messages.Loot.essence = true;
		if (game.global.highestLevelCleared >= 180) addNewSetting('masteryTab');
	}
	if (oldVersion < 3.71){
		checkAchieve("totalHelium");
	}
	if (oldVersion < 3.81){
		for (var x = 0; x < game.global.gridArray.length; x++){
			if (game.global.gridArray[x].corrupted) game.global.gridArray[x].mutation = "Corruption";
		}
	}
	if (oldVersion < 3.811){
		game.global.messages.Loot.events = true;
	}
	if (oldVersion < 4){
		if (game.global.world >= 230) game.global.canMagma = false;
		else if (game.global.highestLevelCleared > 229){
			game.global.highestLevelCleared = 229;
			if (game.global.roboTrimpLevel > 8)
				game.global.roboTrimpLevel = 8;
		}
		game.resources.trimps.potency = 0.0085;
		if (game.global.spentEssence > 0){
			for (var item in game.talents){
				game.talents[item].purchased = false;
				if (item == "foreman") continue;
				if (game.talents[item].purchased && typeof game.talents[item].onRespec === 'function') game.talents[item].onRespec();
			}
			if (typeof savegame.talents.foreman !== 'undefined' && savegame.talents.foreman.purchased) game.global.autoCraftModifier -= 1250;
			if (typeof savegame.talents.foreman2 !== 'undefined' && savegame.talents.foreman2.purchased) game.global.autoCraftModifier -= 3750;
			game.global.essence += game.global.spentEssence;
			game.global.spentEssence = 0;
			message("由于现在的Masteries的返工，所有您所使用的Dark Essence已经免费退还！ 不要忘了回购你的师父！", "Notices");
			updateTalentNumbers();
		}
		game.global.messages.Loot.magma = true;
	}
	if (oldVersion < 4.01){
		game.global.messages.Loot.events = true;
		if (game.stats.trimpsGenerated.value > 0){
			game.global.trimpsGenerated = game.stats.trimpsGenerated.value;
			game.stats.trimpsGenerated.value = scaleNumberForBonusHousing(game.stats.trimpsGenerated.value);
		}
		if (game.stats.highestVoidMap.valueTotal > 230)
			game.stats.highestVoidMap.valueTotal = 230;
	}
	if (oldVersion < 4.1){
		game.achievements.humaneRun.earnable = false;
		game.achievements.humaneRun.lastZone = -1;
	}
	if (oldVersion < 4.2){
		if (game.global.highestLevelCleared > 64){
			tooltip("UnlockedChallenge2", null, 'update');
			noOfflineTooltip = true;
		}
	}
	if (oldVersion == 4.2){
		countChallengeSquaredReward();
	}
	if (oldVersion < 4.3){
		if (game.global.Geneticistassist)
			addNewSetting("geneSend");
		addNewSetting('fireForJobs');
		if (game.global.highestLevelCleared >= 59)
			addNewSetting('ctrlGigas');
		if (game.global.spentEssence > 0)
			respecTalents(false, true);
	}
	if (oldVersion < 4.31 && game.global.world >= 230){
		game.stats.decayedNurseries.value = game.buildings.Nursery.purchased - game.buildings.Nursery.owned;
	}
	if (oldVersion < 4.5 && typeof game.portal.Looting_II !== 'undefined' && game.portal.Looting_II.locked == false){
		game.global.spiresCompleted = 1;
		game.global.b += 20;
		message("Welcome to Patch 4.5! Since you have already cleared Spire I, you have been given 20 bones and earned 5% Zone Liqufication. Click 'What's New' to see what's new!", "Story");
	}
	if (oldVersion < 4.6){
		if (game.global.highestLevelCleared >= 79) addNewSetting('bigPopups');
		if (game.talents.bionic.purchased) game.talents.bionic.onPurchase();
		// sessionMapValues Will break things after 4.7
		// preset.specMod = "0";
		// preset.perf = false;
		// preset.extra = 0;
		game.jobs.Explorer.modifier *= 4;
		var booksNeeded = Math.floor((game.global.world - 10) / 10);
		if (booksNeeded > 0){
			for (var x = 0; x < booksNeeded; x++) {
				unlockUpgrade("Speedexplorer");
				game.mapUnlocks.Speedexplorer.next += 10;
			}
		}
		for (var item in game.c2){
			if (savegame.challenges[item] && savegame.challenges[item].highestSquared) game.c2[item] = savegame.challenges[item].highestSquared;
		}
		addNewFeats([3, 6, 19, 20, 25, 26, 30, 31, 32, 33, 34, 35]);
		countChallengeSquaredReward();
		if (checkLowestHeirloom() >= 7) giveSingleAchieve("Swagmatic");
	}
	else if (oldVersion < 4.601) {
		//only run if game was already on 4.6
		game.mapUnlocks.Speedexplorer.next -= 10;
	}
	if (oldVersion < 4.602){
		game.global.messages.Loot.cache = true;
	}
	if (oldVersion < 4.603 && typeof game.global.messages.Loot.token === 'undefined'){
		game.global.messages.Loot.token = true;
	}
	if (oldVersion < 4.7){
		if (oldVersion >= 4.6) game.global.mapPresets.p1 = savegame.global.sessionMapValues;
		if (game.global.spiresCompleted >= 2) game.portal.Capable.locked = false;
		if (game.global.spiresCompleted >= 3) game.portal.Cunning.locked = false;
		if (game.global.spiresCompleted >= 4) game.portal.Curious.locked = false;
		addNewSetting("smallPerks");
		if (game.options.menu.masteryTab.lockUnless()) addNewSetting("masteryTab");
		game.global.messages.Loot.bone = true;
	}
	if (oldVersion < 4.71){
		if (game.global.challengeActive == "Trimp" && game.global.world >= 230){
			if (game.upgrades.Coordination.done > 0){
				game.global.capTrimp = true;
				message("I'm terribly sorry, but your Trimp<sup>2</sup> run appears to have more than one Trimp fighting, which kinda defeats the purpose. Your score for this Challenge<sup>2</sup> will be capped at 230.", "Notices")
			}
			else {
				game.upgrades.Coordination.allowed = 0;
				game.upgrades.Coordination.locked = true;
				game.challenges.Trimp.heldBooks += 100;
			}
		}
		if (game.c2.Trimp > 230) game.c2.Trimp = 230;
		countChallengeSquaredReward();
	}
	if (oldVersion < 4.8){
		game.options.menu.mapAtZone.setZone = [game.options.menu.mapAtZone.setZone];
		if (savegame.unlocks.quickTrimps) game.singleRunBonuses.quickTrimps.owned = true;
		if (savegame.unlocks.goldMaps) game.singleRunBonuses.goldMaps.owned = true;
		checkAchieve("dailyHelium");
		checkAchieve("totalHeirlooms");
		reevaluateTimedAchieve("spireTimed");
		reevaluateTimedAchieve("spire2Timed");
		reevaluateTimedAchieve("spire4Timed");
		addNewFeats([0, 33, 38, 39, 40, 41]);
		calculateAchievementBonus();
	}
	if (oldVersion < 4.801){
		if (countPurchasedTalents() == 40) game.global.essence = 0;
	}
	if (oldVersion < 4.813){
		//Fix for people who haven't played since the 2016 Trimpmas event, with the old style TrimpmasSnow.
		for (var x = 0; x < game.global.gridArray.length; x++){
			if (game.global.gridArray[x].mutation == "TrimpmasSnow") delete game.global.gridArray[x].mutation;
		}
	}
	if (oldVersion < 4.814) {
		if (oldVersion > 2.8){
			var resources = ['food', 'wood', 'metal', 'gems', 'fragments'];
			var newAvgs = {};
			for (var x = 0; x < resources.length; x++) {
				var res = resources[x];
				newAvgs[res] = {
					accumulator: 0,
					average: game.global.lootAvgs[res].reduce(function(a, b) {
						return a + b;
					}, 0)
					/ (game.global.lootAvgs[res].length || 1)
				};
			}
			game.global.lootAvgs = newAvgs;
		}
		game.settings.ewma_alpha = 0.05;
		game.settings.ewma_ticks = 10;
	}
	if (oldVersion < 4.9){
		if (game.global.spentEssence > 0){
			respecTalents(true, true);
			message("<span style='color: #1ab1d6; font-size: 1.2em;'>WELCOME TO 4.9!</span> Due to a rework of the current Masteries, all of your spent Dark Essence has been refunded for free! Don't forget to repurchase your Masteries!", "Notices", null, "patchNotice");
		}
		if (game.global.spiresCompleted >= 5){
			game.portal.Classy.locked = false;
			message("Since you've previously cleared Spire V, you've unlocked the brand new <b>Classy</b> perk!", "Notices", null, "patchNotice");
		}
		game.global.mapPresets.p1.offset = 'd';
		game.global.mapPresets.p2.offset = 'd';
		game.global.mapPresets.p3.offset = 'd';
		addNewFeats([8, 20, 28, 43, 46, 47]);
		if (game.global.spiresCompleted >= 1){
			var bonus = Math.pow(4, game.global.spiresCompleted);
			message("Since you've previously cleared " + game.global.spiresCompleted + " Spires, you've gained a " + bonus + "x bonus to all Dark Essence drops! Each new Spire you clear will increase this by another 4x.", "Notices", null, "patchNotice");
		}
		Fluffy.calculateInfo();
		if (Fluffy.isRewardActive('void')){
			var mapsRemoved = 0;
			for (var x = game.global.mapsOwnedArray.length; x >= 0; x--){
				var thisMap = game.global.mapsOwnedArray[x];
				if (!thisMap) continue;
				if (game.global.lookingAtMap == thisMap.id || game.global.currentMapId == thisMap.id) continue;
				if (thisMap.location != "Void") continue;
				game.global.totalVoidMaps--;
				game.global.mapsOwnedArray.splice(x, 1);
				game.global.mapsOwned--;
				mapsRemoved++;
			}
			for (var y = 0; y < mapsRemoved; y++){
				createVoidMap(false, false, true);
			}
		}
	}
	if (oldStringVersion == null){
		//Last version was pre 4.10.0. Run compat code for 4.10.0
		if (game.global.spiresCompleted >= 1){
			playerSpire.init();
			playerSpire.spirestones = 20;
			playerSpire.openPopup();
		}
		if (game.achievements.oneOffs.finished.length < 48){
			for (var x = game.achievements.oneOffs.finished.length; x < 48; x++){
				game.achievements.oneOffs.finished[x] = false;
			}
		}
		addNewFeats([9, 30, 31, 36, 48, 49, 50, 51, 56, 57, 58, 59]);
		if (game.global.recentDailies.length >= 7) giveSingleAchieve("Now What");
	}
	else {
		//Last version was at least 4.10.0, continue as normal
		// if (compareVersion([4, 10, 0], oldStringVersion)){
		// 	//example compat for 4.10.1
		// 	console.log('test');
		// }
	}
	//End compatibility
	//Test server only

	//End test server only
	//Temporary until next patch
	//End Temporary
	Fluffy.handleBox();
	if (!getCurrentMapObject()) {
		game.global.currentMapId = "";
		game.global.mapGridArray = [];
		game.global.lastClearedMapCell = -1;
	}

    if (game.buildings.Gym.locked === 0) document.getElementById("blockDiv").style.visibility = "visible";

    if (game.global.gridArray.length > 0) {
        document.getElementById("battleContainer").style.visibility = "visible";
		fadeIn("equipmentTab", 10);
		fadeIn("equipmentTitleDiv", 10);
        drawGrid();
		if (checkIfSpireWorld() && !game.global.spireActive) clearSpireMetals();
        document.getElementById('metal').style.visibility = "visible";
        for (var x = 0; x <= game.global.lastClearedCell; x++) {
            swapClass("cellColor", "cellColorBeaten", document.getElementById("cell" + x));
        }
        if (game.global.battleClock > 0) document.getElementById("battleTimer").style.visibility = "visible";
    }
    if (game.global.mapGridArray.length > 0 && game.global.currentMapId !== "") {
        drawGrid(true);
        for (var y = 0; y <= game.global.lastClearedMapCell; y++) {
            swapClass("cellColor", "cellColorBeaten", document.getElementById("mapCell" + y));
        }
    } else if (game.global.mapGridArray.length === 0 && game.global.mapsActive) game.global.mapsActive = false;
    if (game.resources.trimps.owned > 0 || game.buildings.Trap.owned > 0) game.buildings.Trap.first();
    if (game.global.autoBattle) {
        fadeIn("pauseFight", 1);
        pauseFight(true);
    }
    for (var itemC in game.global.mapsOwnedArray) {
		if (game.global.mapsOwnedArray[itemC].name == "Dimension of Anger") game.global.mapsOwnedArray[itemC].level = 20;
        unlockMap(itemC);
    }
	for (var messageBool in game.global.messages){
		if (!game.global.messages[messageBool].enabled){
			filterMessage(messageBool, true);
		}
	}
	game.global.buyTab = "all";
	filterTabs("all");
	if (game.global.mapsUnlocked) unlockMapStuff();
	repeatClicked(true);
	document.getElementById("worldNumber").innerHTML = game.global.world;
    mapsSwitch(true);
    checkTriggers(true);
	toggleAutoTrap(true);
	toggleAutoStructure(true);
	toggleAutoJobs(true);
	toggleAutoGolden(true);
    setGather(game.global.playerGathering);
    numTab(1);
	if (!fromPf && game.options.menu.usePlayFab.enabled == 1) {
		game.options.menu.usePlayFab.enabled = 0;
		toggleSetting("usePlayFab", null, false, true);
		if (!enablePlayFab()) noOfflineTooltip = true;
	}
	if (fromPf){
		game.options.menu.usePlayFab.enabled = 1;
		toggleSetting("usePlayFab", null, false, true);
	}
	if (game.global.portalActive) {fadeIn("portalBtn", 10); fadeIn("helium", 10);}
	else if (game.resources.helium.owned > 0) fadeIn("helium", 10);
	if (game.jobs.Explorer.locked === 0) fadeIn("fragmentsPs", 10);
	if (game.buildings.Tribute.locked === 0 || game.options.menu.useAverages.enabled) fadeIn("gemsPs", 10);
    if (game.global.autoCraftModifier > 0)
        document.getElementById("foremenCount").innerHTML = (game.global.autoCraftModifier * 4) + " 工头";
    if (game.global.fighting) startFight();
	if (!game.options.menu.pauseGame.enabled) {
		//If not paused and offline progress is enabled, run offline progress
		if (game.options.menu.offlineProgress.enabled)
			checkOfflineProgress(noOfflineTooltip);
		//If not paused and offline progress is disabled, fix clock
		else {
			var timeToAdd = (new Date().getTime() - game.global.lastOnline);
			game.global.portalTime += timeToAdd;
			game.global.zoneStarted += timeToAdd;
		}
	}
	//If paused, set clock pulse
	else {
		handlePauseMessage(true);
		updatePortalTimer();
		document.getElementById("portalTimer").className = "timerPaused";
	}
	if (game.options.menu.darkTheme.enabled != 1) game.options.menu.darkTheme.onToggle();
	updateLabels();
	if (game.global.viewingUpgrades){
		viewPortalUpgrades();
		if (game.global.respecActive) respecPerks();
	}
	else game.global.respecActive = false;
	if (game.global.kongBonusMode) activateKongBonus();

	if (game.global.challengeActive && typeof game.challenges[game.global.challengeActive].onLoad !== 'undefined') game.challenges[game.global.challengeActive].onLoad();
	if (game.global.challengeActive != "Scientist") document.getElementById("scienceCollectBtn").style.display = "block";
	if (game.global.brokenPlanet) {
		document.getElementById("wrapper").style.background = "url(css/bg2_vert.png) center repeat-y";
		document.getElementById("wrapper").className = "wrapperBroken";
		if (game.global.roboTrimpLevel > 0) displayRoboTrimp();
	}
	if (game.global.challengeActive == "Balance"){
		updateBalanceStacks();
	}
	if (game.global.spireActive) handleExitSpireBtn();
	game.options.displayed = false;
	game.options.menu.barOutlines.onToggle();
	game.options.menu.progressBars.onToggle();
	game.options.menu.autoSave.onToggle();
	game.options.menu.tinyButtons.onToggle();

	displayPerksBtn();
	displayGoldenUpgrades();
	if (game.global.highestLevelCleared >= 180) updateTalentNumbers();
	//3.6 bug fix
	if (getAchievementStrengthLevel() <= 0) {
		game.global.goldenUpgrades = 0;
		for (var item in game.goldenUpgrades){
			game.goldenUpgrades[item].currentBonus = 0;
		}
	}
	fireMode(true);

	if (game.global.autoUpgradesAvailable){
		document.getElementById("autoUpgradeBtn").style.display = "block";
		toggleAutoUpgrades(true);
	}
	if (game.global.sLevel >= 4){
		document.getElementById("autoPrestigeBtn").style.display = "block";
		toggleAutoPrestiges(true);
	}
	if (game.global.autoStorageAvailable){
		document.getElementById("autoStorageBtn").style.display = "block";
		toggleAutoStorage(true);
	}
	unlockFormation("all");
	setFormation();
	toggleSetting("mapLoot", null, false, true);
	toggleSetting("repeatUntil", null, false, true);
	toggleSetting("exitTo", null, false, true);
	toggleSetting("repeatVoids", null, false, true);
	toggleSetting("mapAtZone", null, false, true);
	game.global.removingPerks = false;
	game.global.switchToMaps = false;

	if (game.global.voidBuff) setVoidBuffTooltip();
	if (game.upgrades.Gigastation.done >= 1) loadGigastations();
	checkChallengeSquaredAllowed();

	if (oldVersion < 2){
		if (game.global.world == 59){
			game.global.gridArray[99].name = "Improbability";
			message("Your Scientists have detected an anomaly at the end of this Zone. Exercise caution.", "Notices");
		}
		else if (game.global.world == 60 && game.global.lastClearedCell <= 10){
			planetBreaker();
			game.global.world = 59;
			nextWorld();
		}
		else if (game.global.world >= 60){
			message("There is a new anomaly at 59, but you are too far past to reach it. You will have to use your portal to see the changes it brings. It looks like you have access to a new challenge, however!", "Notices");
		}
		else {
			message("Your scientists have detected an anomaly at the end of Zone 59. They warn you to be careful if you intend to approach it.", "Notices");
		}
	}
	document.getElementById("tab5Text").innerHTML = "+" + prettify(game.global.lastCustomAmt);
	game.global.lastUnlock = 0;
	if (game.resources.gems.owned > 0) fadeIn("gems", 10);
	if (game.global.lastSkeletimp > 0) updateSkeleBtn();
	if (game.talents.turkimp4.purchased || game.global.turkimpTimer > 0) document.getElementById("turkimpBuff").style.display = "block";
	if (game.global.totalPortals >= 5) document.getElementById("heirloomBtnContainer").style.display = "block";
	calculateAchievementBonus();
	if(game.global.firing)
		swapClass("fireBtn", "fireBtnFiring", document.getElementById("fireBtn"));
	else
		swapClass("fireBtn", "fireBtnNotFiring", document.getElementById("fireBtn"));
	loadSingleBonusColors()
	handlePoisonDebuff();
	handleIceDebuff();
	handleWindDebuff();
	setEmpowerTab();
	refreshMaps();
	if (game.global.totalVoidMaps > 0 && !game.global.mapsActive) addVoidAlert();
	return true;
}

function compareVersion(compareTo, compare){
	//Returns true if compareTo is greater than compare
	//Use case like 'compareVersion([4,11,0], [4,10,0])' to see if compat code for 4.11.0 should run on a save from 4.10.0. Would be true.

	//4.10.3 vs 4.11.0
	//5.8.1 vs 4.6.1

	if (parseInt(compare[0], 10) < parseInt(compareTo[0], 10)) return true;
	if (parseInt(compare[0], 10) > parseInt(compareTo[0], 10)) return false;
	if (parseInt(compare[1], 10) < parseInt(compareTo[1], 10)) return true;
	if (parseInt(compare[1], 10) > parseInt(compareTo[1], 10)) return false;
	if (parseInt(compare[2], 10) < parseInt(compareTo[2], 10)) return true;

	return false;
}

function handlePauseMessage(send){
	//post the message
	if (send){
		postMessages();
		if (document.getElementsByClassName('pauseMsg').length == 0){
			var text = "<b>YOUR GAME IS PAUSED!</b> Click the flashing timer in the bottom right" + ((game.options.menu.hotkeys.enabled) ? ", or press the spacebar" : "") + " to unpause.";
			message(text, "Notices", null, 'pauseMsg');
			postMessages();
		}
		return;
	}
	//clear the message
	postMessages();
	var pauseMsgs = document.getElementsByClassName('pauseMsg');
	var log = document.getElementById('log');
	for (var x = 0; x < pauseMsgs.length; x++){
		log.removeChild(pauseMsgs[x]);
	}
}

function reevaluateTimedAchieve(achieveName){
	var best = 0;
	var achieve = game.achievements[achieveName];
	if (!achieve) return;
	if (achieve.highest == 0 && achieve.finished == 0) return;
	for (var x = achieve.breakpoints.length - 1; x >= 0; x--){
		if (achieve.highest < achieve.breakpoints[x]) {
			best = x + 1;
			break;
		}
	}
	achieve.finished = best;
}

function addNewFeats(indexArray){
	//After adding new feats, call this with the index of the new feats
	var newFeats = [];
	var inserted = 0;
	var oldFeats = game.achievements.oneOffs.finished;
	for (var x = 0; x < (oldFeats.length + indexArray.length); x++){
		if (indexArray.length > inserted && indexArray[inserted] == x){
			 newFeats.push(false);
			 inserted++;
		}
		else {
			newFeats.push(oldFeats[x - inserted]);
		}
	}
	game.achievements.oneOffs.finished = newFeats;
}

function loadGigastations() {
	var modifier = Math.pow(1.75, game.upgrades.Gigastation.done);
	game.buildings.Warpstation.cost.gems[0] *= modifier;
	game.buildings.Warpstation.cost.metal[0] *= modifier;
}

function addMapModifier(location, modifier, clear){
	for (var x = 0; x < game.global.mapsOwnedArray.length; x++){
		var map = game.global.mapsOwnedArray[x];
		if (map.location != location) continue;
		map.bonus = (clear) ? "" : modifier;
		var parent = document.getElementById(map.id);
		if (!parent) continue;
		var levelSpan = parent.getElementsByClassName('mapLevel')[0];
		if (!clear){
			levelSpan.innerHTML += getMapSpecTag(modifier);
			continue;
		}
		var mapSpec = levelSpan.getElementsByClassName('mapSpec')[0];
		if (mapSpec != null)
			levelSpan.removeChild(mapSpec);
	}
}

var trimpStatsDisplayed = false;
function toggleStats(toggleMode){
	if (toggleMode) {
		game.global.statsMode = toggleMode;
		trimpStatsDisplayed = !trimpStatsDisplayed;
	}
	if (game.global.totalPortals == 0) document.getElementById("statsBtnRow").style.display = "none";
	document.getElementById("statsWrapper").style.display = (trimpStatsDisplayed) ? "none" : "block";
	document.getElementById("wrapper").style.display = (trimpStatsDisplayed) ? "block" : "none";
	trimpStatsDisplayed = !trimpStatsDisplayed;
	var mode = game.global.statsMode;
	if (mode == "current") {
		document.getElementById("currentSelectBtn").style.border = "5px solid yellow";
		document.getElementById("totalSelectBtn").style.border = "5px solid black";
	}
	else {
		document.getElementById("totalSelectBtn").style.border = "5px solid yellow";
		document.getElementById("currentSelectBtn").style.border = "5px solid black";
	}
	if (trimpStatsDisplayed){
		displayAllStats(true);
	}
}

function displayRoboTrimp() {
	if (game.global.roboTrimpLevel <= 0) return;
	var elem = document.getElementById("chainHolder");
	elem.style.visibility = "visible";
	if (game.global.roboTrimpCooldown > 0){
		swapClass("shriekState", "shriekStateCooldown", elem);
		document.getElementById('roboTrimpTurnsLeft').innerHTML = game.global.roboTrimpCooldown;
	}
	else {
		document.getElementById('roboTrimpTurnsLeft').innerHTML = "";
		var swapIn = (game.global.useShriek) ? 'shriekStateEnabled' : 'shriekStateDisabled';
		swapClass("shriekState", swapIn, elem);
	}
}

function magnetoShriek() {
	if (game.global.roboTrimpCooldown > 0 || !game.global.roboTrimpLevel || game.global.world < 60) return;
	game.global.useShriek = !game.global.useShriek;
	displayRoboTrimp();
	if (game.global.useShriek && !game.global.mapsActive){
        var cell = getCurrentWorldCell();
		if (cell.name == "Improbability" || cell.name  == "Omnipotrimp"){
			activateShriek();
		}
	}
}

function activateShriek() {
	game.global.usingShriek = true;
	game.global.useShriek = false;
	game.global.roboTrimpCooldown = 5;
	displayRoboTrimp();
	updateAllBattleNumbers();
}

function disableShriek() {
	game.global.usingShriek = false;
	game.global.useShriek = false;
	swapClass("dmgColor", "dmgColorWhite", document.getElementById("badGuyAttack"));
}

function displayAllStats(buildAll) {
	if (buildAll) document.getElementById("statsRow").innerHTML = '<div class="col-xs-3" id="statCol1"></div><div class="col-xs-3" id="statCol2"></div><div class="col-xs-3" id="statCol3"></div><div class="col-xs-3" id="statCol4"></div>';
	var mode = game.global.statsMode;
	var column = 1;
	for (var item in game.stats){
		var stat = game.stats[item];
		if (typeof stat.display === 'function'){
			if (!stat.display()) continue;
		}
		if (typeof stat.value === 'undefined' && mode == 'current') continue;
		if (typeof stat.valueTotal == 'undefined' && mode == 'total') continue;
		var value = (mode == 'current') ? stat.value : stat.valueTotal;
		value = (typeof value === 'function') ? value() : value;
		if (mode == 'total' && typeof stat.valueTotal !== 'function' && typeof stat.value !== 'undefined' && !stat.noAdd) value += stat.value;
		if (!stat.noFormat) value = prettify(value);
		if (buildAll){
//            console.log(stat.title);
//            stat.title
			document.getElementById("statCol" + column).innerHTML += '<div class="statContainer" id="stat' + item + 'Container"><span class="statTitle">' + cnstat(stat.title) + '</span><br/><span class="statValue" id="stat' + item + 'Value">' + value + '</span></div>'
			column++;
			if (column == 5) column = 1;
		}
		else {
			var elem = document.getElementById("stat" + item + "Value");
			if (elem && value) elem.innerHTML = value;
		}
	}
}

function countChallengeSquaredReward(){
	var reward = 0;
	for (var item in game.challenges){
		var challenge = game.challenges[item];
		if (!challenge.allowSquared) continue;
		reward += getIndividualSquaredReward(item);
	}
	if (reward >= 2000) giveSingleAchieve("Challenged");
	game.global.totalSquaredReward = reward;
}

var squaredConfig = {
		rewardFreq: 10,
		rewardEach: 1,
		rewardGrowth: 1,
		thresh: 100,
}

function getIndividualSquaredReward(challengeName, forceHighest){
	if (!forceHighest) forceHighest = game.c2[challengeName];
	if (forceHighest < 1) return 0;
	var challenge = game.challenges[challengeName];
	var bonus = 0;
	var thresh = (challenge.replaceSquareThresh) ? challenge.replaceSquareThresh : squaredConfig.thresh;
	var reward = (challenge.replaceSquareReward) ? challenge.replaceSquareReward : squaredConfig.rewardEach;
	var rewardGrowth = (challenge.replaceSquareGrowth) ? challenge.replaceSquareGrowth : squaredConfig.rewardGrowth;
	var freq = (challenge.replaceSquareFreq) ? challenge.replaceSquareFreq : squaredConfig.rewardFreq;
	var addedBonuses = 0;
	var loops = Math.ceil(forceHighest / thresh);
	for (var x = 0; x < loops; x++){
		var count = (x == loops - 1) ? forceHighest - addedBonuses : thresh;
		addedBonuses += count - (count % freq);
		count = Math.floor(count / freq);
		bonus += count * ((rewardGrowth * x) + reward);
	}
	return Math.round(bonus);
}

var portalWindowOpen = false;
var challengeSquaredMode = false;
var savedBuyAmt = -1;
function portalClicked() {
	if (game.global.runningChallengeSquared && !game.global.challengeActive) game.global.runningChallengeSquared = false;
	challengeSquaredMode = false;
	portalWindowOpen = true;
	cancelTooltip();
	game.global.viewingUpgrades = false;
	game.global.respecActive = false;
	resetPresets();
	game.global.tempHighHelium = game.resources.helium.owned;
	game.resources.helium.respecMax = game.resources.helium.owned + game.global.heliumLeftover;
	game.resources.helium.totalSpentTemp = 0;
	document.getElementById("wrapper").style.display = "none";
	var bgColor = "";
	if (game.global.sLevel == 1) bgColor = "#00b386";
	else if (game.global.sLevel == 2) bgColor = "#3db0f8";
	else if (game.global.sLevel == 3) bgColor = "#2a6a93";
	else bgColor = "green";
	swapClass("portalMk", "portalMk" + (game.global.sLevel + 1), document.getElementById("portalWrapper"));
	fadeIn("portalWrapper", 10);
	var titleText = "时间传送门";
	if (game.global.sLevel >= 1) titleText += " Mk. " + romanNumeral(game.global.sLevel + 1);
	var portalStory = (game.global.sLevel >= 1) ? "氦进去了，胜利就出来了" : "嗯,你做到了。你通过这个奇怪的世界跟随你的直觉,使你在Dimension of Anger,并获得这个传送门。但是为什么呢?也许通过这个门户会有答案……你的科学家告诉你，他们可以把时间过得很长，以便带回更多的记忆和物品，但他们需要氦气来冷却。";
	document.getElementById("portalTitle").innerHTML = titleText;
	document.getElementById("portalStory").innerHTML = portalStory;
	document.getElementById("portalHelium").innerHTML = '<span id="portalHeliumOwned">' + prettify(game.resources.helium.owned + game.global.heliumLeftover) + '</span> 氦';
	document.getElementById("totalHeliumEarned").innerHTML = prettify(game.global.totalHeliumEarned);
	document.getElementById("totalHeliumSpent").innerHTML = prettify(countHeliumSpent());
	document.getElementById("totalPortals").innerHTML = game.global.totalPortals;
	document.getElementById("activatePortalBtn").style.display = "inline-block";
	document.getElementById("activatePortalBtn").innerHTML = "激活传送门";
	document.getElementById("challengeSquaredBonusAmt").innerHTML = prettify(game.global.totalSquaredReward);
	document.getElementById("challengeDescription").style.height = (game.global.sLevel >= 1) ? "19vw" : "22.5vw";
	document.getElementById("challengeDescriptionPre").innerHTML = (game.global.sLevel >= 1) ? "别忘了带个挑战。<br/>" : '在使用传送门之前，还可以选择激活一个挑战。完成挑战会给你永久的奖励。您可以通过单击“查看能力”按钮随时放弃或查看进行的挑战。';
	if (game.global.canRespecPerks) {
		document.getElementById("respecPortalBtn").innerHTML = "天赋";
		document.getElementById("respecPortalBtn").style.display = "inline-block";
	}
	document.getElementById('swapToCurrentChallengeBtn').style.display = (game.global.challengeActive) ? 'inline-block' : 'none';
	swapToCurrentChallenge(true);
	displayChallenges();
	savedBuyAmt = game.global.buyAmt;
	numTab(1, true);
	game.global.buyAmt = 1;
	displayPortalUpgrades();
	game.global.removingPerks = false;
	if (game.global.canRespecPerks && game.global.totalPortals > 0)
		respecPerks(true);
}

function toggleChallengeSquared(){
	challengeSquaredMode = !challengeSquaredMode;
	displayChallenges();
}

function displayChallenges() {
	var challengeCount = 0;
	game.global.selectedChallenge = "";
	var challengesHere = document.getElementById("challengesHere");
	document.getElementById("specificChallengeDescription").innerHTML = "<br/><br/><br/>点击下面的挑战来了解更多和/或运行它！";
	var challengeHTML = '<div class="noselect pointer challengeThing thing" id="challenge0" onclick="selectChallenge(0)"><span class="thingName">一个也没有</span></div>';
	var firstFail = false;
	var extraClass = "";
	for (var what in game.challenges){
		var thisFail = false;
		var name = "";
		var challenge = game.challenges[what];
		if (!challengeSquaredMode && challenge.onlySquared) continue;
		if (challengeSquaredMode && !challenge.allowSquared) continue;
		if (!challenge.filter(true)) {
			if (firstFail || what == "Daily" || challengeSquaredMode) continue;
			firstFail = true;
			thisFail = true;
		}
		challengeCount++;
		var done = false;
		if (game.portal[game.challenges[what].unlocks]) done = (game.portal[game.challenges[what].unlocks].locked) ? false : true;
		else if (what == "Scientist" && game.global.sLevel > 0) {
			if (game.global.sLevel >= 4 && game.global.highestLevelCleared >= 129){
				name = "Scientist V";
				if (game.global.sLevel == 5) done = true;
			}
			else if (game.global.sLevel >= 3 && game.global.highestLevelCleared >= 109) {
				if (game.global.highestLevelCleared < 124 && game.global.sLevel == 4) {
					firstFail = false;
					thisFail = false;
				}
				name = (thisFail) ? "Scientist V" : "Scientist IV";
				if (game.global.sLevel == 4) done = true;
			}
			else if (game.global.sLevel >= 2 && game.global.highestLevelCleared >= 89){
				name = (thisFail) ? "Scientist IV" : "Scientist III";
				if (game.global.sLevel == 3) done = true;
			}
			else if (game.global.sLevel == 1 && game.global.highestLevelCleared < 44){
				done = true;
				name = "Scientist I";
				thisFail = false;
				firstFail = false;
			}
			else if (game.global.sLevel >= 1 && game.global.highestLevelCleared >= 49){
				name = (thisFail) ? "Scientist III" : "Scientist II";
				if (game.global.sLevel == 2) done = true;
			}
			else if (thisFail) name = "Scientist II";
			else done = true;
		}
		else if (what == "Decay") done = game.global.decayDone;
		else if (what == "Frugal") done = game.global.frugalDone;
		else if (what == "Slow") done = game.global.slowDone;
		done = (done) ? "finishedChallenge" : "";
		if (challenge.heliumThrough) done = "challengeRepeatable";
		if (challengeSquaredMode) done = '" style="background-color: ' + getChallengeSquaredButtonColor(what);
		if (thisFail) done = "nextChallenge";
		if (!name) name = what;
		//make sure the challengeSquaredMode color still works after messing with line below
		challengeHTML += '<div class="noselect pointer challengeThing thing ' + done + '" id="challenge' + what + '" onclick="selectChallenge(\'' + what + '\')"><span class="thingName">' + cntequan(name) + '</span></div>';
//        console.log(what.replace('_', ' '))
	}
	challengesHere.innerHTML = challengeHTML;
	if (challengeCount > 0) document.getElementById("challenges").style.display = "block";
	document.getElementById("flagMustRestart").style.display = "none";
	swapClass('challengeDescription', 'challengeDescriptionLg', document.getElementById('specificChallengeDescription'));

}

function getChallengeSquaredButtonColor(challenge){
	var percent = game.c2[challenge] / game.global.highestLevelCleared;
	var r = parseInt(255 - (percent * 102), 10);
	var g = parseInt(255 - (percent * 255), 10);
	//var b = parseInt(255 - (percent * 102)); commenting this out and reusing r is technically an optimization
	var rgb = "rgb(" + r + "," + g + "," + r + ")";
	if (percent < .5) rgb += "; color: black; border-color: black";
	return rgb;
}

function selectChallenge(what) {
	cancelTooltip();
	displayChallenges();
	document.getElementById("challenge" + what).className += " cBorderOn";
	document.getElementById('activatePortalBtn').style.display = 'inline-block';
	var addChallenge = document.getElementById("addChallenge");
	if (what === 0){
		game.global.selectedChallenge = "";
		document.getElementById("specificChallengeDescription").innerHTML = "<br/><br/><br/>点击下面的挑战了解更多相关信息，或运行它！";
		document.getElementById("flagMustRestart").style.display = "none";
		swapClass('challengeDescription', 'challengeDescriptionLg', document.getElementById('specificChallengeDescription'));
		if (addChallenge !== null) addChallenge.innerHTML = "";
		return;
	}
	if (!game.challenges[what].filter()){
		var unlockString = (typeof game.challenges[what].unlockString === 'function') ? game.challenges[what].unlockString() : game.challenges[what].unlockString;
		document.getElementById("specificChallengeDescription").innerHTML = "你会解锁这个挑战" + unlockString;
		game.global.selectedChallenge = "";
		document.getElementById("flagMustRestart").style.display = "none";
		swapClass('challengeDescription', 'challengeDescriptionLg', document.getElementById('specificChallengeDescription'));
		if (addChallenge !== null) addChallenge.innerHTML = "";
		return;
	}
	var desc = (challengeSquaredMode) ? game.challenges[what].squaredDescription + " " + getSpecialSquaredRewards(game.challenges[what]) : game.challenges[what].description;
	desc += "<b>";
	if (challengeSquaredMode) {
		var reward = getIndividualSquaredReward(what);
		desc += " 您达到了这个挑战<sup>2</sup> 的最高区域是 Z" + game.c2[what] + ", 为你增加了 " + prettify(reward) + "% 额外的攻击和生命, 还有 " + prettify(reward / 10) + "% 更多来自所有来源的氦。";
	}
	else if (game.portal[game.challenges[what].unlocks]) desc += (game.portal[game.challenges[what].unlocks].locked) ? " 你也会赚到一个新的额外奖励！" : " 你不会赚到一个新的额外奖励";
	else if (what == "Scientist") {
		var sciLev = getScientistLevel();
		if (sciLev == game.global.sLevel) desc += " 你已经完成了这个挑战!";
		desc = desc.replace("_", getScientistInfo(sciLev));
		desc = desc.replace("*", getScientistInfo(sciLev, true));
	}
	desc += "</b>";
	document.getElementById("specificChallengeDescription").innerHTML = desc;
	game.global.selectedChallenge = what;
	document.getElementById("flagMustRestart").style.display = (game.challenges[what].mustRestart) ? "inline" : "none";
	var descSize = (game.challenges[what].mustRestart) ? "challengeDescriptionSm" : "challengeDescriptionLg";
	swapClass('challengeDescription', descSize, document.getElementById('specificChallengeDescription'));

	if (addChallenge !== null){
		addChallenge.innerHTML = "你有 <b>" + what + " 个挑战</b> 激活。";
		addChallenge.className = (challengeSquaredMode) ? "colorSquared" : "";
	}
	if (what == "Daily") updateDailyClock();
}

function getScientistLevel() {
	if (game.global.sLevel == 0) return 1;
	if (game.global.highestLevelCleared >= 49 && game.global.sLevel == 1) return 2;
	if (game.global.highestLevelCleared >= 89 && game.global.sLevel == 2) return 3;
	if (game.global.highestLevelCleared >= 109 && game.global.sLevel == 3) return 4;
	if (game.global.highestLevelCleared >= 129 && game.global.sLevel >= 4) return 5;
	return game.global.sLevel;
}

function getScientistInfo(number, reward){
	switch (number){
		case 1: {
			return (reward) ? "从5000科学，100食物，100木，10陷阱和1工头开始" : 11500;
		}
		case 2: {
			return (reward) ? "启动5个谷仓，5个棚屋，5个锻造，T2装备解锁。" : 8000;
		}
		case 3: {
			return (reward) ? "以完整的脆皮和200%的手动效率开始" : 1500;
		}
		case 4: {
			return (reward) ? "打一次地图可以获得两个等级的锻造书, 解锁自动进阶,并且你的经纱站将被迅速建好,跳过了建造队列的过程" : 70;
		}
		case 5: {
			return (reward) ? "永久增加氦获得，倍数随层数增加，增加后变为\'(1+0.005)^层数\'倍。开始时将拥有1000%的手动效率，以及谷仓、窝棚、锻造室各50个" : 1500;
		}
	}
}

function confirmAbandonChallenge(){
	if (game.global.challengeActive == "Daily"){
		tooltip("Finish Daily", null, 'update');
		return;
	}
	var text = "Are you sure you want to abandon this challenge?";
	if (game.challenges[game.global.challengeActive].mustRestart) text += " <b>Abandoning this challenge will cause the portal to become unstable and start you from the beginning of this run. (You'll keep your permanent rewards like helium and perks)</b><br/><br/>Click Confirm to abandon the challenge and restart at Z1, Cancel to go back, or Restart to go back to Z1 with the same challenge.";
	tooltip('confirm', null, 'update', text, 'abandonChallenge()', 'Abandon Challenge');
	if (game.challenges[game.global.challengeActive].mustRestart) document.getElementById("confirmTipCost").innerHTML += '<div class="btn btn-success" onclick="abandonChallenge(true); cancelTooltip()">重新挑战</div>';
}

function abandonChallenge(restart){
	var challengeName = game.global.challengeActive;
	var challenge = game.challenges[challengeName];
	if (game.global.runningChallengeSquared){
		if (game.global.world > game.c2[game.global.challengeActive])
			game.c2[game.global.challengeActive] = game.global.world;
		if (game.global.capTrimp && game.c2.Trimp > 230) game.c2.Trimp = 230;
		countChallengeSquaredReward();
		if (!restart) {
			fadeIn("helium", 10);
			game.global.runningChallengeSquared = false;
		}
	}
	game.global.challengeActive = "";
	if (challenge.fireAbandon && typeof challenge.abandon !== 'undefined') challenge.abandon();
	cancelPortal();
	if (challengeName == "Scientist"){
		document.getElementById("scienceCollectBtn").style.display = "block";
	}
	if (game.challenges[challengeName].mustRestart){
		if (restart) game.global.selectedChallenge = challengeName;
		resetGame(true);
	}
	if (challengeName != "Daily")
		message("Your challenge has been abandoned.", "Notices");
	refreshMaps();
}

function checkChallengeSquaredAllowed(){
	document.getElementById('challengeTitleSquared').style.display = (game.global.highestLevelCleared >= 64) ? "block" : "none";
	document.getElementById('challengeTitleNoSquared').style.display = (game.global.highestLevelCleared >= 64) ? "none" : "block";
}

function formatDailySeedDate(){
	if (!game.global.dailyChallenge.seed) return "";
	var seed = String(game.global.dailyChallenge.seed);
	return seed.substr(0, 4) + '-' + seed.substr(4, 2) + '-' + seed.substr(6);
}

function getSpecialSquaredRewards(challenge){
	var description = "";
	if (challenge.replaceSquareReward || challenge.replaceSquareThresh || challenge.replaceSquareFreq || challenge.replaceSquareGrowth){
		var threshes = (challenge.replaceSquareThresh) ? challenge.replaceSquareThresh : squaredConfig.thresh;
		var reward = (challenge.replaceSquareReward) ? challenge.replaceSquareReward : squaredConfig.rewardEach;
		var freq = (challenge.replaceSquareFreq) ? challenge.replaceSquareFreq : squaredConfig.rewardFreq;
		var rewardIncrease = (challenge.replaceSquareGrowth) ? challenge.replaceSquareGrowth : squaredConfig.rewardGrowth;
		description += "<span class='colorSquared'>本挑战的奖励分配与其他大多数的挑战<sup>2</sup>不同。";
		description += ((challenge.replaceSquareReward) ? "<b>" : "")  + " 你将获得 " + reward + "% 的攻击与生命, 以及" + prettify(reward / 10) + "% 的氦获得。" + ((challenge.replaceSquareReward) ? "</b>" : "");
		description += ((challenge.replaceSquareFreq) ? "<b>" : "") + " 每达到 " + freq + " 区域" + needAnS(freq) + "。" + ((challenge.replaceSquareFreq) ? "</b>" : "");
		description += ((challenge.replaceSquareThresh) ? "<b>" : "") + " 每达到 " + threshes + " 区域" + needAnS(threshes) + "。" + ((challenge.replaceSquareThresh) ? "</b>" : "");
		description += ((challenge.replaceSquareGrowth) ? "<b>" : "") + " 每次的奖励都会增加 " + rewardIncrease + "% 的攻击与生命,以及 " + prettify(rewardIncrease / 10) + "%的氦获取。</span> " + ((challenge.replaceSquareGrowth) ? "</b>" : "");
	}
	return description;
}

function needAnS(number){
	//this will save so many lines if I don't forget about it
	return (number == 1) ? "" : "";
}

function getSquaredDescriptionInRun(hideDesc){
	if (!game.global.runningChallengeSquared) return "";
	var challenge = game.challenges[game.global.challengeActive];
	var description = "";
	if (!hideDesc){
		description = "\"" + challenge.squaredDescription + "\" " + getSpecialSquaredRewards(challenge);
	}
	description += "<b>你现在位于区域" + game.global.world;
	var portalText = (game.global.viewingUpgrades) ? "放弃挑战" : "使用传送门";
	var dif = getIndividualSquaredReward(game.global.challengeActive, game.global.world) - getIndividualSquaredReward(game.global.challengeActive);
	var highest = game.c2[game.global.challengeActive];
	if (highest > 0){
		if (dif >= 1){
			description += ", <span class='greenText'>你在这个挑战中，先前的最高区域为" + highest + "。如果你现在" + portalText + "，你将会增加" + prettify(dif) + "% 伤害和生命到你的总挑战<sup>2</sup> 加成中，你的总伤害和生命加成增长到" + prettify(dif + game.global.totalSquaredReward) + "%。</span>";
		}
		else {
			description += ", <span class='redText'>你在本挑战的最高区域为" + highest + "。如果你现在" + portalText + "，你的总挑战<sup>2</sup>攻击与生命加成仍然保持在" + prettify(game.global.totalSquaredReward) + "%。</span>";
		}
	}
	else{
		if (dif <= 0)
			description += ". <span class='redText'>你至少要到达区域" + ((challenge.replaceSquareFreq) ? challenge.replaceSquareFreq : squaredConfig.rewardFreq) + "才能获取任何挑战<sup>2</sup>加成。现在攻击与生命加成为" + prettify(game.global.totalSquaredReward) + "%。</span>";
		else
			description += ". <span class='greenText'>如果你现在" + portalText + "，你将会增加" + prettify(dif) + "%伤害和生命到你的总挑战<sup>2</sup>的加成中，你的总伤害和生命加成增长到" + prettify(dif + game.global.totalSquaredReward) + "%。</span>";
		}
	description += "</b>";
	return description;
}

function viewPortalUpgrades() {
	if (game.global.totalPortals == 0) return;
	var c2Btn = document.getElementById('challengeSquaredViewBtn');
	if (c2Btn){
		if (game.global.highestLevelCleared >= 64 && game.global.runningChallengeSquared){
			c2Btn.style.display = 'inline-block';
			document.getElementById('challengeSquaredBonusAmtView').innerHTML = prettify(game.global.totalSquaredReward);
		}
		else
			c2Btn.style.display = 'none';
	}

	cancelTooltip();
	game.global.viewingUpgrades = true;
	game.resources.helium.respecMax = game.global.heliumLeftover;
	document.getElementById("viewChallenge").style.display = "block";
	resetPresets();
	var challengeText = "";
	if (game.global.challengeActive){
		challengeText = getCurrentChallengePane();
	}
	else
		challengeText = "你没有进行中的挑战。";
	document.getElementById("viewChallengeText").innerHTML = challengeText;
	document.getElementById("wrapper").style.display = "none";
	swapClass("portalMk", "portalMkPreview", document.getElementById("portalWrapper"));
	fadeIn("portalWrapper", 10);
	document.getElementById("portalTitle").innerHTML = "查看能力";
	document.getElementById("portalHelium").innerHTML = '<span id="portalHeliumOwned">' + prettify(parseInt(game.global.heliumLeftover, 10)) + '</span> 氦剩余';
	document.getElementById("portalStory").innerHTML = "这些都是你的福利！你每运行一次可以重置他们。";
	document.getElementById("totalHeliumSpent").innerHTML = prettify(countHeliumSpent());
	document.getElementById("totalHeliumEarned").innerHTML = prettify(game.global.totalHeliumEarned);
	document.getElementById("totalPortals").innerHTML = game.global.totalPortals;
	document.getElementById("cancelPortalBtn").innerHTML = "取消";
	document.getElementById("activatePortalBtn").style.display = "none";
	if (game.global.canRespecPerks) {
		document.getElementById("respecPortalBtn").innerHTML = "修改";
		document.getElementById("respecPortalBtn").style.display = "inline-block";
	}
	document.getElementById("swapToCurrentChallengeBtn").style.display = "none";
	savedBuyAmt = game.global.buyAmt;
	numTab(1, true);
	game.global.buyAmt = 1;
	displayPortalUpgrades();
	updatePortalChallengeAbandonButton();
}

var lookingAtCurrentChallenge = false;
function swapToCurrentChallenge(updateOnly){
	if (!updateOnly) lookingAtCurrentChallenge = !lookingAtCurrentChallenge;
	var btnElem = document.getElementById('swapToCurrentChallengeBtn');
	var viewChallengeElem = document.getElementById('viewChallenge');
	var challengesElem = document.getElementById('challenges');
	if (lookingAtCurrentChallenge){
		viewChallengeElem.style.display = 'block';
		challengesElem.style.display = 'none';
		document.getElementById('viewChallengeText').innerHTML = getCurrentChallengePane();
		updatePortalChallengeAbandonButton();
		btnElem.innerHTML = "选择新的挑战";
		var c2Reward = document.getElementById('challengeSquaredBonusAmtView');
		if (c2Reward !== null)
			c2Reward.innerHTML = prettify(game.global.totalSquaredReward);
	}
	else {
		viewChallengeElem.style.display = 'none';
		challengesElem.style.display = 'block';
		btnElem.innerHTML = "查看当前的挑战";
	}
}

function getCurrentChallengePane(){
	var challengeText = "";
	var description;
	if (game.global.challengeActive == "Daily")
		description = getCurrentDailyDescription();
	else if (game.global.runningChallengeSquared)
		description = getSquaredDescriptionInRun();
	else
		description = game.challenges[game.global.challengeActive].description;
	if (game.global.challengeActive == "Scientist"){
		var sciLevel = getScientistLevel();
		description = description.replace('_', getScientistInfo(sciLevel));
		description = description.replace('*', getScientistInfo(sciLevel, true));
	}
	challengeText = "你正在进行 ";
	challengeText += (game.global.challengeActive == "Daily") ? formatDailySeedDate() + " " + game.global.challengeActive + " 挑战激活. " + description : game.global.challengeActive + " 挑战激活. " + description;
	return challengeText;
}

function updatePortalChallengeAbandonButton(){
	var abandonElem = document.getElementById("cancelChallengeBtn");
	if (game.global.challengeActive){
		abandonElem.style.display = "inline-block";
		if (game.global.challengeActive == "Daily") {
			swapClass('btn-', 'btn-success', abandonElem);
			abandonElem.innerHTML = "完成日常";
		}
		else{
			abandonElem.innerHTML = "放弃挑战";
			swapClass('btn-', 'btn-warning', abandonElem);
		}
	}
	else abandonElem.style.display = 'none';
}

function displayPortalUpgrades(fromTab){
	document.getElementById('ptabInfoText').innerHTML = (game.options.menu.detailedPerks.enabled) ? "较少信息" : "更多信息";
	toggleRemovePerks(true);
	var elem = document.getElementById("portalUpgradesHere");
	elem.innerHTML = "";
	if (!fromTab) game.resources.helium.totalSpentTemp = 0;
	for (var what in game.portal){
		if (game.portal[what].locked) continue;
		var portUpgrade = game.portal[what];
		if (typeof portUpgrade.level === 'undefined') continue;
		if (!fromTab){
			portUpgrade.levelTemp = 0;
			portUpgrade.heliumSpentTemp = 0;
		}
		var html = '<div onmouseover="tooltip(\'' + what + '\',\'portal\',event)" onmouseout="tooltip(\'hide\')" class="noselect pointer portalThing thing perkColorOff';
		if (game.options.menu.detailedPerks.enabled == 1) html += " detailed";
		if (game.options.menu.smallPerks.enabled) html += (game.options.menu.smallPerks.enabled == 1) ? " smallPerk" : " tinyPerk";
		if (portUpgrade.additive) html += " 附加的";
        //能力汉化
		html += " 改变关闭";
		html += '" id="' + what + '" onclick="buyPortalUpgrade(\'' + what + '\')"><span class="thingName">' + cntequan(what.replace('_', ' ')) + '</span>';

		if (game.options.menu.detailedPerks.enabled == 1){
		html += '<br/>等级:&nbsp;<span class="thingOwned"><b><span id="' + what + 'Owned">' + ((game.options.menu.formatPerkLevels.enabled) ? prettify(portUpgrade.level) : portUpgrade.level) + '</span></b>';
		if (!portUpgrade.max || portUpgrade.max > portUpgrade.level + portUpgrade.levelTemp) html += "<br/>价格: <span id='" + what + "Price'>" + prettify(getPortalUpgradePrice(what)) + "</span>";
		else html += "<br/>价格: <span id='" + what + "Price'>最大</span>";
		html += '<br/>花费: <span id="' + what + 'Spent">' + prettify(portUpgrade.heliumSpent + portUpgrade.heliumSpentTemp) + '</span>';
		}
		else html += '<br/><span class="thingOwned">等级:&nbsp;<span id="' + what + 'Owned">' + ((game.options.menu.formatPerkLevels.enabled) ? prettify(portUpgrade.level) : portUpgrade.level) + '</span>';
		html += '</span></div>';
		elem.innerHTML += html;
		updatePerkColor(what);
		updatePerkLevel(what);
	}
}

function updatePerkColor(what){
	var elem = document.getElementById(what);
	if (!elem) return;
	var perk = game.portal[what];
	var perkClass;
	if (game.global.removingPerks){
		var removableLevel = (game.global.respecActive) ? (perk.level + perk.levelTemp) : perk.levelTemp;
		perkClass = (removableLevel > 0) ? "perkColorOn" : "perkColorOff";
	}
	else
	{
		var buyAmt = (game.global.buyAmt == "Max") ? 1 : game.global.buyAmt;
		var price = getPortalUpgradePrice(what, false, buyAmt);
		var canSpend = game.resources.helium.respecMax - game.resources.helium.totalSpentTemp;
		if (perk.max && (perk.max < perk.level + perk.levelTemp + buyAmt)) perkClass = "perkColorMaxed";
		else
		perkClass = ((canSpend >= price)) ? "perkColorOn" : "perkColorOff";
	}
	swapClass("perkColor", perkClass, elem);
}

function updateAllPerkColors(){
	for (var item in game.portal){
			if (game.portal[item].locked) continue;
			updatePerkColor(item);
	}
}

function activateKongBonus(oldWorld){
	var helium = 0;
	var addText = "";
	if (oldWorld > 0){
		helium = Math.floor(oldWorld / 2);
		addText = "You earned " + helium + " bonus points for reaching World " + oldWorld + ".";
	}
	else {
		helium = game.resources.helium.owned;
		addText = "You still have " + helium + " bonus points to spend!";
	}
	document.getElementById("wrapper").style.display = "none";
	var portalWrapper = document.getElementById("portalWrapper");
	portalWrapper.style.backgroundColor = "black";
	portalWrapper.style.color = "white";
	document.getElementById("portalTitle").innerHTML = "测试奖励";
	document.getElementById("portalStory").innerHTML = "非常感谢你帮助测试脆皮的beta版本。所有的支持和反馈是惊人的！这个版本仍然需要一些反馈和调整，在这之前它并不是是完美的,不过不会故意再次重置。所以享受吧! " + addText;
	document.getElementById("portalHelium").innerHTML = '<span id="portalHeliumOwned">' + helium + '</span> Bonus Points';
	document.getElementById("cancelPortalBtn").innerHTML = "不用谢";
	document.getElementById("activatePortalBtn").innerHTML = "已完成";
		document.getElementById("activatePortalBtn").style.display = "inline-block";

	fadeIn("portalWrapper", 10);
	game.resources.helium.owned = helium;
	game.resources.helium.respecMax = helium;
	displayPortalUpgrades();
	numTab(1, true);
}

//48 hours = 172800
var savedOfflineText = "";
function checkOfflineProgress(noTip){
	if (!game.global.lastOnline) return;
	var rightNow = new Date().getTime();
	var textArray = [];
	if (game.global.lastOfflineProgress > rightNow){
		game.global.lastOfflineProgress = rightNow;
		return;
	}
	game.global.lastOfflineProgress = rightNow;
	var dif = rightNow - game.global.lastOnline;
	dif = Math.floor(dif / 1000);
	if (dif < 60) return;
	var textString = "";
	var storageBought = [];
	var compatible = ["Farmer", "Lumberjack", "Miner", "Dragimp", "Explorer"];
	var storages = ['Barn', 'Shed', 'Forge'];
	for (var x = 0; x < compatible.length; x++){
		var job = game.jobs[compatible[x]];
		var resName = job.increase;
		var resource = game.resources[resName];
		var amt = job.owned * job.modifier;
		amt += (amt * game.portal.Motivation.level * game.portal.Motivation.modifier);
		if (game.portal.Motivation_II.level > 0) amt *= (1 + (game.portal.Motivation_II.level * game.portal.Motivation_II.modifier));
		if (game.portal.Meditation.level > 0 || (game.jobs.Magmamancer.owned > 0 && resName == "metal")) {
			var toAlter;
			var originalAmt = amt;
			//Find how many stacks of 10 minutes were already stacked before logging out
			var timeAtLastOnline = Math.floor((game.global.lastOnline - game.global.zoneStarted) / 600000);
			//Figure out what percentage of the total time offline one 10 minute chunk is. This will be used to modify amt to the proper amount in 10 minute chunks in order to mimic stacks
			var chunkPercent = 60000 / dif;
			//Start at 100% untouched
			var remaining = 100;
			//if a 10 minute chunk is larger than the time offline, no need to scale in chunks, skip to the end.
			var loops = 6;
			if (game.jobs.Magmamancer.owned && resName == "metal") loops = 12;
			if (timeAtLastOnline < loops && chunkPercent < 100){
				//Start from however many stacks were held before logging out. End at 5 stacks, the 6th will be all time remaining rather than chunks and handled at the end
				for (var z = timeAtLastOnline; z < loops; z++){
					//If no full chunks left, let the final calculation handle it
					if (remaining < chunkPercent) break;
					//Remove a chunk from remaining, as it is about to be calculated
					remaining -= chunkPercent;
					//Check for z == 0 after removing chunkPercent, that way however much time was left before the first stack doesn't get calculated as having a stack
					if (z == 0) continue;
					//Find out exactly how much of amt needs to be modified to make up for this chunk
					toAlter = (originalAmt * chunkPercent / 100);
					//Remove it from toAlter
					amt -= toAlter;
					//Modify and add back
					if (game.portal.Meditation.level && z < 6)
						amt += (toAlter * (1 + (z * 0.01 * game.portal.Meditation.level)));
					//loops will only set to 72 if the current resource is metal and the player has Magmamancers
					if (loops == 12)
						amt += (toAlter * game.jobs.Magmamancer.getBonusPercent(false, z));
				}
			}
			if (remaining){
				//Check again how much needs to be altered
				toAlter = (originalAmt * (remaining / 100));
				//Remove
				amt -= toAlter;
				//Modify and add back the final amount
				if (game.portal.Meditation.level)
					amt += (toAlter) * (1 + (game.portal.Meditation.getBonusPercent() * 0.01));
				if (loops == 12)
					amt += (toAlter * game.jobs.Magmamancer.getBonusPercent());
			}
		}
		if (game.global.challengeActive == "Decay"){
			amt *= 10;
			amt *= Math.pow(0.995, game.challenges.Decay.stacks);
		}
		if (game.global.challengeActive == "Meditate") amt *= 1.25;
		if (game.global.challengeActive == "Balance") amt *= game.challenges.Balance.getGatherMult();
		if (game.global.challengeActive == "Daily"){
			if (typeof game.global.dailyChallenge.famine !== 'undefined' && x < 4){
				amt *= dailyModifiers.famine.getMult(game.global.dailyChallenge.famine.strength);
			}
			if (typeof game.global.dailyChallenge.dedication !== 'undefined'){
				amt *= dailyModifiers.dedication.getMult(game.global.dailyChallenge.dedication.strength);
			}
		}
		amt = calcHeirloomBonus("Staff", compatible[x] + "Speed", amt);
		amt *= dif;
		if (x < 3){
			var newMax = resource.max + (resource.max * game.portal.Packrat.modifier * game.portal.Packrat.level);
			newMax = calcHeirloomBonus("Shield", "storageSize", newMax);
			var allowed = (newMax - resource.owned);
			if (amt > allowed){
				if (!game.global.autoStorage) {
					amt = allowed;
				}
				else {
					var storageBuilding = game.buildings[storages[x]];
					var count;
					for (count = 1; count < 300; count++){
						amt -= storageBuilding.cost[resName]();
						storageBuilding.owned++;
						storageBuilding.purchased++;
						resource.max *= 2;
						newMax = resource.max + (resource.max * game.portal.Packrat.modifier * game.portal.Packrat.level);
						newMax = calcHeirloomBonus("Shield", "storageSize", newMax);
						if (newMax > (resource.owned + amt)) break;
					}
					var s = (count > 1) ? "" : "";
					storageBought.push(count + " " + cnresourcetype(storages[x]) + s + ", ");
				}
			}
		}
		if (amt > 0){
			resource.owned += amt;
			textString = prettify(amt) + " " + cnresourcetype(resName) + ", ";
			textArray.push(textString);
			if (resName == "gems") game.stats.gemsCollected.value += amt;
		}
	}
	if (textArray.length === 0) return;
	textString = "当你离开时，你的脆皮生产了 ";
	for (var y = 0; y < textArray.length; y++){
		textString += textArray[y];
		if (y == textArray.length -2) textString += "和 ";
	}
	textString = textString.slice(0, -2);
	if (storageBought.length) {
		textString += " <b>购买了</b> ";
		for (var z = 0; z < storageBought.length; z++){
			textString += storageBought[z];
			if (z == storageBought.length - 2) textString += "和 ";
		}
		textString = textString.slice(0, -2);
	}
	textString += ".";
	if (playerSpire.initialized && playerSpire.lootAvg.average){
		var avg = playerSpire.getRsPs();
		if (!isNumberBad(avg)){
			var rsReward = (dif * 0.75 * avg);
			playerSpire.runestones += rsReward;
			textString += "<br/>你的尖顶陷阱和塔也产生了 <b>" + prettify(rsReward) + "</b> 符文石，在你离开的时候!";
		}
	}
	if (!noTip) tooltip("守信的脆皮", null, "update", textString);
	else savedOfflineText = textString;
}

function respecPerks(fromPortal){
	if (!game.global.canRespecPerks) return;
	//if (!game.global.viewingUpgrades) return;
	game.global.respecActive = true;
	displayPortalUpgrades(true);
	numTab(1, true);
	game.resources.helium.respecMax = (game.global.viewingUpgrades) ? game.global.heliumLeftover : game.global.heliumLeftover + game.resources.helium.owned;
	document.getElementById("portalHeliumOwned").innerHTML = prettify(game.resources.helium.respecMax - game.resources.helium.totalSpentTemp);
	document.getElementById("respecPortalBtn").style.display = "none";
	if (!fromPortal){
		document.getElementById("portalStory").innerHTML = "你每次运行只能替换一次。点击取消不会消耗这次使用。";
		document.getElementById("portalTitle").innerHTML = "替换能力";
	}
	document.getElementById("ptabRemove").style.display = "table-cell";
	document.getElementById("clearPerksBtn").style.display = "inline-block";
	if (selectedPreset)
		swapClass('tab', 'tabNotSelected', document.getElementById('presetTabLoad'));
}

function clearPerks(){
	if (!game.global.respecActive) return;
	game.resources.helium.respecMax = (game.global.viewingUpgrades) ? game.global.heliumLeftover : game.global.heliumLeftover + game.resources.helium.owned;
	game.resources.helium.totalSpentTemp = 0;
	for (var item in game.portal){
		if (game.portal[item].locked) continue;
		var portUpgrade = game.portal[item];
		if (typeof portUpgrade.level === 'undefined') continue;
		portUpgrade.levelTemp = 0;
		portUpgrade.levelTemp -= portUpgrade.level;
		game.resources.helium.respecMax += portUpgrade.heliumSpent;
		portUpgrade.heliumSpentTemp = 0;
		portUpgrade.heliumSpentTemp -= portUpgrade.heliumSpent;
	}
	displayPortalUpgrades(true);
	document.getElementById("portalHeliumOwned").innerHTML = prettify(game.resources.helium.respecMax);
	if (game.global.viewingUpgrades) {
		document.getElementById("respecPortalBtn").style.display = "none";
		document.getElementById("activatePortalBtn").innerHTML = "确定";
		document.getElementById("activatePortalBtn").style.display = "inline-block";
	}
	document.getElementById("totalHeliumSpent").innerHTML = prettify(countHeliumSpent(true));
}

function countHeliumSpent(checkTemp){
	var count = 0;
	for (var item in game.portal){
		item = game.portal[item];
		count += item.heliumSpent;
		if (checkTemp && item.heliumSpentTemp) count += item.heliumSpentTemp;
	}
	return count;
}

function activateClicked(){
	if (game.global.viewingUpgrades){
		var refund = game.resources.helium.respecMax - game.resources.helium.totalSpentTemp;
		if (!commitPortalUpgrades()) return;
		game.global.heliumLeftover = refund;
		if (game.global.respecActive) game.global.canRespecPerks = false;
		cancelPortal();
		game.resources.helium.respecMax = 0;
		return;
	}
	var newText = "";
	if (game.global.selectedChallenge){
		if (challengeSquaredMode)
			newText += " <span id='addChallenge' class='colorSquared'>你即将进行 <b style='font-size: 1.1em'>" + cntequan(game.global.selectedChallenge) + " 挑战<sup>2</sup></b></span><br/>";
		else
			newText += " <span id='addChallenge'>你即将进行<b style='font-size: 1.1em'>" + cntequan(game.global.selectedChallenge) + "挑战</b></span><br/>";
	}
	else newText += " <span id='addChallenge'></span>";
	if (game.global.kongBonusMode){
		newText = "All set?";
	}
	else newText += "<div id='portalConfirmStory'>你确定你想要进入传送门吗? 你将失去所有进度，除了你所获得的能通过传送门的升级，比如氦、能力、骨头以及外来物种。谁知道这些东西将在哪里或是在何时才能给你。</div><br/>";

	if (game.global.challengeActive == "Daily") newText += "<span class='dailyError portalError'>You still have the Daily challenge active! If you portal right now, your reward will be applied at the beginning of your next run. Alternatively, click 'Finish Daily' in the World or inside 'View Perks' to get the bonus now.</span>";
	if (game.global.runningChallengeSquared) newText += "<div class='squaredError portalError'>" + getSquaredDescriptionInRun(true) + "</div>";
	if (game.global.heirloomsExtra.length){
		var s = (game.global.heirloomsExtra.length > 1) ? "s" : "";
		newText += "<div class='heirloomRecycleWarning portalError'>你拥有" + game.global.heirloomsExtra.length + "个额外传家宝。如果你现在传送，它们将会被回收成" + prettify(recycleAllExtraHeirlooms(true)) + "虚空物质。确保携带你想要的传家宝来保留它!</div>";
	}
	if (game.global.world >= 230 && canAffordGeneratorUpgrade()){
		newText += "<div class='magmiteError portalError'>You have " + prettify(game.global.magmite) + " Magmite, which is enough purchase an upgrade for your Dimensional Generator! If you portal now, " + ((game.permanentGeneratorUpgrades.Shielding.owned) ? "20" : "30") + "% of your Magmite will decay.<div style='text-align: center'><span onclick='cancelTooltip(); tooltip(\"Upgrade Generator\", null, \"update\")' class='btn btn-lg btn-success'>Spend Magmite</span></div></div><br/>";
	}
	var btnText = "<div class='btn btn-info btn-lg' onclick='activatePortal()'>就这么干。</div>&nbsp;<div class='btn btn-lg btn-warning' onclick='cancelTooltip()'>等等, 我还没准备好!</div>";
	tooltip('运行传送门', 'customText', 'update', newText, btnText);
	game.global.lockTooltip = true;
	var tooltipElem = document.getElementById('tooltipDiv');
	tooltipElem.style.left = "33.75%";
	tooltipElem.style.top = "25%";
}

function enablePerkConfirmBtn(){
	if (portalWindowOpen && game.global.selectedChallenge == "Daily") return;
	document.getElementById("activatePortalBtn").innerHTML = "确认";
	document.getElementById("activatePortalBtn").style.display = "inline-block";
}

function getPerkBuyCount(perkName){
	var perk = game.portal[perkName];
	if (!perk) return 0;
	if (game.global.buyAmt != "Max") return game.global.buyAmt;
	var heliumAvailable = (game.resources.helium.respecMax - game.resources.helium.totalSpentTemp) * game.global.maxSplit;
	var toBuy = 0;
	if (!perk.additive){
		var growth = (perk.specialGrowth) ? perk.specialGrowth : 1.3;
		var toSpend = 0;
		var currentLevel = perk.level + perk.levelTemp;
		var priceBase = perk.priceBase;
		while (toBuy < 1000 && toSpend < heliumAvailable){
			if (toBuy > 1000) return Infinity;
			var nextLevel = currentLevel + toBuy;
			toSpend += Math.ceil(((nextLevel) / 2) + priceBase * Math.pow(growth, nextLevel));
			if (isNumberBad(toSpend)) return 1;
			toBuy++;
		}
		toBuy--;
	}
	else {
		//Let it be known that buy max on additive perks only exists because The Amazing GhostFrog is a math wizard. 
		//I spent hours bashing my head against a wall trying to figure it out, and she came up with this formula in a few minutes.
		var levels = perk.level + perk.levelTemp;
		var increase = perk.additiveInc
		var nextPurchaseCost = perk.priceBase + (levels * increase);
		var A = (increase / 2);
		var B = (nextPurchaseCost - A);
		var C = heliumAvailable * -1;
		var affordableLevels = ((B * -1) + Math.sqrt(Math.pow(B, 2) - (4 * A * C))) / (2 * A);
		toBuy = Math.floor(affordableLevels);
	}
	if (toBuy <= 0) toBuy = 1;
	if (perk.max && ((perk.level + perk.levelTemp + toBuy) > perk.max)) toBuy = perk.max - perk.level - perk.levelTemp;
	return toBuy;
}

function buyPortalUpgrade(what){
	if (!game.global.kongBonusMode && !game.global.portalActive && !game.global.respecActive && !game.global.viewingUpgrades) return;
	if (game.global.buyAmt != "Max" && isNaN(game.global.buyAmt)) {
		numTab(1);
		return;
	}
	var toBuy = game.portal[what];
	if (game.global.removingPerks){
		removePerk(what);
		updateAllPerkColors();
		enablePerkConfirmBtn();
		document.getElementById("totalHeliumSpent").innerHTML = prettify(countHeliumSpent(true));
		return;
	}
	var levelsToAdd = getPerkBuyCount(what);
	if (toBuy.max < toBuy.level + toBuy.levelTemp + levelsToAdd) return;
	var price = getPortalUpgradePrice(what, false, levelsToAdd);
	var canSpend = game.resources.helium.respecMax - game.resources.helium.totalSpentTemp;
	if (canSpend >= price){
		document.getElementById("ptabRemove").style.display = "table-cell";
		toBuy.levelTemp += levelsToAdd;
		game.resources.helium.totalSpentTemp += price;
		toBuy.heliumSpentTemp += price;
		canSpend -= price;
		updatePerkLevel(what);
		tooltip(what, "portal", "update");
		document.getElementById("portalHeliumOwned").innerHTML = prettify(canSpend);
		enablePerkConfirmBtn();
		if (game.global.buyAmt == "Max") displayPortalUpgrades(true);
		else updateAllPerkColors();
	}
	document.getElementById("totalHeliumSpent").innerHTML = prettify(countHeliumSpent(true));
}

var selectedPreset = 0;
function presetTab(tabNum){
	swapClass('tab', 'tabNotSelected', document.getElementById('presetTabSave'));
	if (game.global.respecActive)
		swapClass('tab', 'tabNotSelected', document.getElementById('presetTabLoad'));
	swapClass('tab', 'tabNotSelected', document.getElementById('presetTabRename'));
	swapClass('tab', 'tabSelected', document.getElementById('presetTab' + tabNum));
	if (selectedPreset > 0) swapClass('tab', 'tabNotSelected', document.getElementById('presetTab' + selectedPreset));
	selectedPreset = tabNum;
}

function resetPresets(){
	swapClass('tab', 'tabNotEnabled', document.getElementById('presetTabSave'));
	swapClass('tab', 'tabNotEnabled', document.getElementById('presetTabLoad'));
	swapClass('tab', 'tabNotEnabled', document.getElementById('presetTabRename'));
	selectedPreset = 0;
	for (var x = 1; x <= 3; x++){
		var preset = game.global["perkPreset" + x];
		swapClass('tab', 'tabNotSelected', document.getElementById('presetTab' + x));
		document.getElementById('presetTab' + x + 'Text').innerHTML = (preset.Name) ? preset.Name : "预设 " + x;
	}
}

function savePerkPreset(){
	var to = selectedPreset;
	if (to == 0) return;
	var saved = {};
	for(var item in game.portal){
		var temp = (game.portal[item].levelTemp) ? game.portal[item].levelTemp : 0;
		if (game.portal[item].locked || game.portal[item].level + temp == 0) continue;
		saved[item] = game.portal[item].level + temp;
	}
	if (game.global["perkPreset" + to].Name) saved.Name = game.global["perkPreset" + to].Name;
	game.global["perkPreset" + to] = saved;
	document.getElementById('presetTab' + to + 'Text').innerHTML = ((saved.Name) ? saved.Name : "预设 " + to);
}

function renamePerkPreset(needTooltip, name){
	if (selectedPreset == 0) return;
	if (game.global["perkPreset" + selectedPreset] == {}) return;
	if (needTooltip){
		tooltip("Rename Preset", null, "update");
		return;
	}
	var elem = document.getElementById('renamePresetBox');
	if (!elem || !elem.value) return;
	game.global["perkPreset" + selectedPreset].Name = htmlEncode(elem.value.substring(0, 25));
	cancelTooltip();
	for (var x = 1; x <= 3; x++){
		var preset = game.global["perkPreset" + x];
		document.getElementById('presetTab' + x + 'Text').innerHTML = (preset.Name) ? preset.Name : "预设 " + x;
	}
}

function loadPerkPreset(){
	if (!game.global.respecActive) return;
	if (selectedPreset == 0) return;
	var presetNumber = selectedPreset;
	var perkSetting = game.global["perkPreset" + presetNumber];
	if (isObjectEmpty(perkSetting)) return;
	clearPerks();
	for (var item in perkSetting){
		if (!game.portal[item] || game.portal[item].locked) continue;
		var changeAmt = perkSetting[item] - game.portal[item].level - game.portal[item].levelTemp;
		var price = (changeAmt != 0) ? getPortalUpgradePrice(item, (changeAmt < 0), changeAmt) : 0;
		game.portal[item].levelTemp += changeAmt;
		game.resources.helium.totalSpentTemp += price;
		game.portal[item].heliumSpentTemp += price;
		updatePerkLevel(item);
	}
	document.getElementById("portalHeliumOwned").innerHTML = prettify(game.resources.helium.respecMax - game.resources.helium.totalSpentTemp);
	enablePerkConfirmBtn();
	updateAllPerkColors();
	document.getElementById("totalHeliumSpent").innerHTML = prettify(countHeliumSpent(true));
}

function exportPerks(){
	//First, make a blank object to hold the perk info
	var exportPerks = {};
	for (var item in game.portal){
		//For smaller strings and backwards compatibility, perks not added to the object will be treated as if the perk is supposed to be level 0.
		if (game.portal[item].locked || game.portal[item].level <= 0) continue;
		//Add the perk to the object with the desired level
		exportPerks[item] = game.portal[item].level;
	}

	//At this point you should have an object like this:
	//{
	//	Looting: 10,
	//	Toughness: 5,
	//	Power: 7
	//} This would set Looting to 10, Toughness to 5, Power to 7, and all other unlocked perks to level 0.

	//JSON.stringify() the object
	exportPerks = JSON.stringify(exportPerks);
	//And finally, compress it to base 64 with LZString. I suggest grabbing a copy of LZString.js from github.com/trimps to ensure there are no differences between our versions (beta 1.5).
	return LZString.compressToBase64(exportPerks);
}

function importPerks() {
	//This function was written by the brilliant Grimy. Thanks Grimy!
	var levels;
	try {
		levels = JSON.parse(LZString.decompressFromBase64(document.getElementById('perkImportBox').value.replace(/\s/gm, '')));
	} catch (e) { return "Something went really wrong, what did you even just try to do?!"}
	if (!levels)
		return "This doesn't look like a valid perk string.";
	if (levels.global)
		return "This looks like a save string, rather than a perk string. To import a save string, use the Import button on the main screen.";
	// Check that everything is in order. Don't touch anything yet.
	var respecNeeded = false;
	var heNeeded = 0;
	var changeAmt = {};
	var price = {};

	for (var perk in game.portal) {
		if (!levels[perk]){
			if (game.portal[perk].locked) continue;
			if (game.portal[perk].level + game.portal[perk].levelTemp == 0) continue;
			levels[perk] = 0;
		}
		// parseInt parses "1e6" as 1, so we use parseFloat then floor as a replacement
		var level = Math.floor(parseFloat(levels[perk]));

		if (game.portal[perk].locked || level > game.portal[perk].max || isNumberBad(level))
			return "Cannot set " + perk + " to level " + level + ".";

		if (level < game.portal[perk].level)
			respecNeeded = true;

		changeAmt[perk] = level - game.portal[perk].level - game.portal[perk].levelTemp;
		price[perk] = changeAmt[perk] > 0 ? getPortalUpgradePrice(perk, false, changeAmt[perk]) :
					  changeAmt[perk] < 0 ? -getPortalUpgradePrice(perk, true, -changeAmt[perk]) : 0;
		heNeeded += price[perk];
	}
	if (heNeeded > game.resources.helium.respecMax - game.resources.helium.totalSpentTemp)
		return "You don't have enough Helium to afford this perk setup.";

	if (respecNeeded && !game.global.canRespecPerks)
		return "This perk setup would require a respec, but you don't have one available.";

	// Okay, now we can actually set the perks.
	cancelTooltip();
	if (respecNeeded && !game.global.respecActive)
		respecPerks();

	for (perk in changeAmt) {
		game.portal[perk].levelTemp += changeAmt[perk];
		game.resources.helium.totalSpentTemp += price[perk];
		game.portal[perk].heliumSpentTemp += price[perk];
		updatePerkLevel(perk);
	}

	document.getElementById("portalHeliumOwned").innerHTML = prettify(game.resources.helium.respecMax - game.resources.helium.totalSpentTemp);
	enablePerkConfirmBtn();
	updateAllPerkColors();
	document.getElementById("totalHeliumSpent").innerHTML = prettify(countHeliumSpent(true));
}

function removePerk(what) {
	var removeAmt = game.global.buyAmt;
	if (removeAmt == "Max") removeAmt = Math.ceil((game.portal[what].level + game.portal[what].levelTemp) * game.global.maxSplit);
	if (isNumberBad(removeAmt)){
		console.log("Remove Amount is " + removeAmt);
		return;
	}
	var toBuy = game.portal[what];
	var realTemp = (game.global.respecActive) ? toBuy.levelTemp + toBuy.level : toBuy.levelTemp;
	var forceZeroSpent = false;
	if (realTemp < removeAmt) removeAmt = realTemp;
	var refund = getPortalUpgradePrice(what, true, removeAmt);
	//Error Checking
	var tempLevelTemp = toBuy.level + toBuy.levelTemp - removeAmt;
	if (isNumberBad(tempLevelTemp)) {
		console.log("Trying to set perk level to " + tempLevelTemp);
		return;
	}
	var tempHeliumSpentTemp = toBuy.heliumSpent + toBuy.heliumSpentTemp - refund;
	if (isNumberBad(tempHeliumSpentTemp)){
		if (!isNaN(tempHeliumSpentTemp) && tempHeliumSpentTemp < 0 && (game.global.totalHeliumEarned > Math.abs(tempHeliumSpentTemp) * 1e14)){
			forceZeroSpent = true;
		}
		else{
			console.log("Trying to set helium spent on perk to " + tempHeliumSpentTemp);
			return;
		}
	}
	var tempTotalSpentTemp = game.resources.helium.totalSpentTemp - refund;
	if (isNaN(tempTotalSpentTemp) || !isFinite(tempTotalSpentTemp)){
		console.log("Trying to set spent helium to " + tempTotalSpentTemp);
		return;
	}
	toBuy.levelTemp -= removeAmt;
	toBuy.heliumSpentTemp -= refund;
	if (forceZeroSpent) {
		toBuy.heliumSpentTemp = toBuy.heliumSpent * -1;
		toBuy.levelTemp = toBuy.level * -1;
	}
	game.resources.helium.totalSpentTemp -= refund;
	updatePerkLevel(what);
	tooltip(what, "portal", "update");
	var canSpend = game.resources.helium.respecMax;
	document.getElementById("portalHeliumOwned").innerHTML = prettify(canSpend - game.resources.helium.totalSpentTemp);
}

function isNumberBad(number) {
	return (isNaN(number) || typeof number === 'undefined' || number < 0 || !isFinite(number));
}

function updatePerkLevel(what){
	var textElem = document.getElementById(what + "Owned");
	var nextCostElem = document.getElementById(what + "Price");
	var spentElem = document.getElementById(what + "Spent");
	var perkElem = document.getElementById(what);
	var toBuy = game.portal[what];
	var text = toBuy.level + toBuy.levelTemp;
	if (game.options.menu.formatPerkLevels.enabled) text = prettify(text);
	if (toBuy.levelTemp){
		if (game.options.menu.smallPerks.enabled){
			text += "<br/>(";
		}
		else text += "&nbsp;("
		if (toBuy.levelTemp > 0) text += "+";
		text += ((game.options.menu.formatPerkLevels.enabled) ? prettify(toBuy.levelTemp) : toBuy.levelTemp) + ")";
		swapClass('changing', 'changingOn', perkElem);
	}
	else {
		swapClass('changing', 'changingOff', perkElem);
	}
	if (spentElem !== null){
		spentElem.innerHTML = prettify(toBuy.heliumSpent + toBuy.heliumSpentTemp);
		nextCostElem.innerHTML = (!toBuy.max || toBuy.max > toBuy.level + toBuy.levelTemp) ? prettify(getPortalUpgradePrice(what)) : "Max";
	}
	textElem.innerHTML = text;
}

function toggleRemovePerks(noUpdate){
	var perkElem = document.getElementById("ptabRemove");
	var perkTextElem = document.getElementById("ptabRemoveText");
	if (!noUpdate) game.global.removingPerks = !game.global.removingPerks;
	if (!game.global.removingPerks){
		perkElem.style.background = "rgba(255, 255, 255, 0.25)";
		perkTextElem.style.color = "red";
	}
	else {
		perkElem.style.background = "rgba(214, 29, 29, 0.75)";
		perkTextElem.style.color = "white";
	}
	updateAllPerkColors();
}

function unlockMapStuff(){
	fadeIn("fragments", 10);
	fadeIn("gems", 10);
	fadeIn("mapsBtn", 10);
}

function getPortalUpgradePrice(what, removing, forceAmt){
	var toCheck = game.portal[what];
	var tempLevel;
	var nextLevel;
	var toAmt;
	if (!removing){
		toAmt = (forceAmt) ? forceAmt : getPerkBuyCount(what);
		nextLevel = tempLevel + toAmt;
	}
	tempLevel = toCheck.level + toCheck.levelTemp;
	var amt = 0;
	if (toCheck.additive){
		if (removing)
			nextLevel = tempLevel - forceAmt;
		else
			nextLevel = tempLevel + toAmt;
		amt = getAdditivePrice(nextLevel, toCheck) - getAdditivePrice(tempLevel, toCheck);
		if (removing) amt = Math.abs(amt);
	}
	else {
		if (removing){
			toAmt = forceAmt;
			tempLevel -= forceAmt;
		}
		if (toAmt > 1000) return Infinity;
		var growth = (toCheck.specialGrowth) ? toCheck.specialGrowth : 1.3;
		for (var x = 0; x < toAmt; x++){
			amt += Math.ceil(((tempLevel + x) / 2) + toCheck.priceBase * Math.pow(growth, tempLevel + x));
		}
	}
	return amt;
}

function getAdditivePrice(atLevel, portalUpgrade){
	return (((atLevel - 1) * atLevel) / 2 * portalUpgrade.additiveInc) + (portalUpgrade.priceBase * atLevel);
}

function commitPortalUpgrades(usingPortal){
	if (!usingPortal && !canCommitCarpentry()) return false; //And coordinated
	checkHandleResourcefulRespec();
	for (var item in game.portal){
		if (game.portal[item].locked) continue;
		var portUpgrade = game.portal[item];
		if (typeof portUpgrade.level === 'undefined') continue;
		portUpgrade.level += portUpgrade.levelTemp;
		if (portUpgrade.levelTemp !== 0 && portUpgrade.onChange) portUpgrade.onChange();
		portUpgrade.levelTemp = 0;
		portUpgrade.heliumSpent += portUpgrade.heliumSpentTemp;
		portUpgrade.heliumSpentTemp = 0;

	}
	if (game.global.respecActive || game.global.viewingUpgrades){
		game.global.heliumLeftover = game.resources.helium.maxRespec - game.resources.helium.totalSpentTemp;
		game.resources.helium.totalSpentTemp = 0;
		return true;
	}
	game.resources.helium.owned -= (game.resources.helium.totalSpentTemp);
	game.resources.helium.totalSpentTemp = 0;
	return true;
}

function canCommitCarpentry(){ //Uh, and Coordinated. This checks coordinated too.
	var newMax = game.resources.trimps.max * game.resources.trimps.maxMod;
	newMax = Math.floor(newMax * (Math.pow(1 + game.portal.Carpentry.modifier, game.portal.Carpentry.level + game.portal.Carpentry.levelTemp)));
	if (typeof game.portal.Carpentry_II.levelTemp !== 'undefined') newMax = Math.floor(newMax * (1 + (game.portal.Carpentry_II.modifier * (game.portal.Carpentry_II.level + game.portal.Carpentry_II.levelTemp))));
	var error = document.getElementById("portalError");
	error.innerHTML = "";
	var good = true;
	var soldiers = game.resources.trimps.getCurrentSend(true);
    if (newMax < (soldiers * 2.4)) {
        error.innerHTML += "You do not have enough max Trimps with this Perk setup to sustain your Coordination. ";
		error.style.display = "block";
		good = false;
    }
	if (Math.ceil(newMax / 2) < game.resources.trimps.employed){
		error.innerHTML += "你有太多的工作人员分配给这个额外津贴设置。";
		error.style.display = "block";
		good = false;
	}
	return good;
}

function checkHandleResourcefulRespec(){
	if (game.portal.Resourceful.level > game.portal.Resourceful.levelTemp) clearQueue();
}

function clearQueue(specific) {
	var existing = 0;
	for (var x = 0; x < game.global.nextQueueId; x++){
		if (!document.getElementById("queueItem" + x)) continue;
		existing++;
		if (specific && game.global.buildingsQueue[existing - 1].split('.')[0] != specific) continue;
		else existing--;
		removeQueueItem("queueItem" + x, true);
	}
}

function activatePortal(){
	if (game.global.selectedChallenge == "Daily"){
		if (getDailyChallenge(readingDaily, false, true) !== nextDaily) {
			document.getElementById("portalStory").innerHTML = "<span style='color: red'>自从你看以后，日常的挑战已经改变了。 挑战描述已刷新，点击激活传送门运行它！</span>";
			getDailyChallenge();
			return;
			}
	}
	if (game.global.challengeActive == "Daily"){
		abandonDaily();
	}
	if (game.global.runningChallengeSquared && game.global.challengeActive){
		if (game.global.world > game.c2[game.global.challengeActive])
			game.c2[game.global.challengeActive] = game.global.world;
		game.global.challengeActive = "";
		if (game.global.capTrimp && game.c2.Trimp > 230) game.c2.Trimp = 230;
	}
	game.global.runningChallengeSquared = (game.global.selectedChallenge) ? challengeSquaredMode : false;
	var refund = game.resources.helium.respecMax - game.resources.helium.totalSpentTemp;
	if (!commitPortalUpgrades(true)) return;
	game.global.heliumLeftover = refund;
	cancelPortal(true);
	game.resources.helium.respecMax = 0;
	game.global.totalPortals++;
	resetGame(true);
	displayPerksBtn();
	handleFinishDailyBtn();
	document.getElementById("portalUpgradesHere").innerHTML = "";
	message("绿色微光一闪而过，你摔在了地上。看起来你很饿...", "Story");
}

function cancelPortal(keep){
	portalWindowOpen = false;
	if (game.global.kongBonusMode){
		game.global.kongBonusMode = false;
		if (!keep) resetGame();
		message("绿色微光一闪而过，你摔在了地上。看起来你很饿...", "Story");
	}
	game.global.viewingUpgrades = false;
	game.global.respecActive = false;
	if (!keep)
		game.global.selectedChallenge = "";
	resetPresets();
	document.getElementById("clearPerksBtn").style.display = "none";
	document.getElementById("respecPortalBtn").style.display = "none";
	document.getElementById("portalUpgradesHere").innerHTML = "";
	document.getElementById("portalWrapper").style.display = "none";
	fadeIn("wrapper", 10);
	document.getElementById("challenges").style.display = "none";
	document.getElementById("viewChallenge").style.display = "none";
	document.getElementById("cancelChallengeBtn").style.display = "none";
	document.getElementById("portalError").style.display = "none";
	document.getElementById("ptabRemove").style.display = "none";
	document.getElementById("swapToCurrentChallengeBtn").style.display = "none";
	lookingAtCurrentChallenge = false;
	game.global.removingPerks = false;
	game.resources.helium.respecMax = 0;
	restoreNumTab();
}

function restoreNumTab(){
	if (savedBuyAmt == -1)
		return;
	game.global.buyAmt = savedBuyAmt;
	switch(savedBuyAmt){
		case 1:
			numTab(1);
			break;
		case 10:
			numTab(2);
			break;
		case 25:
			numTab(3);
			break;
		case 100:
			numTab(4);
			break;
		case "Max":
			game.global.buyAmt = 1;
			numTab(6);
			break;
		default:
			numTab(5);
			break;
	}
}

function loadEquipment(oldEquipment){
	//Now with 100% less save breaking on balance tweaks! Flexibility ftw.
	var newEquipment = game.equipment;
	for (var item in oldEquipment){
		//Name changes would go here, I suppose

		if (typeof newEquipment[item] === 'undefined') continue;
		var oldEquip = oldEquipment[item];
		var newEquip = newEquipment[item];
		newEquip.locked = oldEquip.locked;
		newEquip.modifier = oldEquip.modifier;
		newEquip.level = oldEquip.level;
		newEquip.prestige = oldEquip.prestige;
		var stat;
		if (oldEquip.blockNow){
			stat = "block";
			newEquip.blockNow = true;
			newEquip.tooltip = newEquip.blocktip;
		}
		else stat = (typeof newEquip.health !== 'undefined') ? "health" : "attack";

		if (newEquip.prestige > 1) prestigeEquipment(item, newEquip.prestige);

		if (typeof oldEquip[stat + "Calculated"] === 'undefined') oldEquip[stat + "Calculated"] = oldEquip[stat];
		if (newEquip[stat + "Calculated"] != oldEquip[stat + "Calculated"]){
			var dif = newEquip[stat + "Calculated"] - oldEquip[stat + "Calculated"];
			//Leaving the debug stuff for this just in case. This function could be nasty if stuff goes wrong.
/*			console.log("Equipment: " + item + ". Updated from:");
			console.log(oldEquip);
			console.log("Updated to: ");
			console.log(newEquip);
			console.log("dif is " + dif); */
			game.global[stat] += dif * newEquip.level;
		}
	}
}


function getCurrentMapObject() {
    return game.global.mapsOwnedArray[getMapIndex(game.global.currentMapId)];
}

function scaleLootLevel(level, mapLevel) {
    var world = game.global.world;
    if (mapLevel > 0) world = mapLevel;
    level += ((world - 1) * 100);
    return level;
}

function rewardResource(what, baseAmt, level, checkMapLootScale, givePercentage){
    var map;
	var world;
	var cell = level;
    if (checkMapLootScale) {
        map = getCurrentMapObject();
        level = scaleLootLevel(level, map.level);
		world = map.level;
    } else {
        level = scaleLootLevel(level);
		world = game.global.world;
    }
	var amt = 0;
	if (what == "food" || what == "metal" || what == "wood"){
		//Base * speed books
		var tempModifier = 0.5 * Math.pow(1.25, (game.global.world >= 59) ? 59 : game.global.world);
		//Mega books
		if (game.global.world >= 60) {
			if (game.global.frugalDone) tempModifier *= Math.pow(1.6, game.global.world - 59);
			else tempModifier *= Math.pow(1.5, game.global.world - 59);
		}
		//Bounty
		if (game.global.world >= 15) tempModifier *= 2;
		//Whipimp
		if (game.unlocks.impCount.Whipimp) tempModifier *= Math.pow(1.003, game.unlocks.impCount.Whipimp);
		if ((game.talents.turkimp4.purchased || game.global.turkimpTimer > 0) && (game.global.playerGathering == "food" || game.global.playerGathering == "metal" || game.global.playerGathering == "wood")) tempModifier *= (game.talents.turkimp3.purchased) ? ((game.talents.turkimp4.purchased) ? 1.333 : 1.249) : 1.166;
		//Half of max can work, a little less than third on average are applied to one of these 3 jobs. 0.16 is pretty average.
		var avgSec = tempModifier * (game.resources.trimps.realMax() * 0.16);
		//Base is 7 seconds at 1 baseAmt
		if (game.global.world < 100)
			amt = avgSec * 7 * baseAmt;
		else
			amt = avgSec * 10 * baseAmt;
	}
	else if (what == "fragments"){
		if (game.options.menu.useAverages.enabled && document.getElementById("fragmentsPs").style.opacity == 0) fadeIn("fragmentsPs", 10);
		amt = Math.floor(Math.pow(1.15, game.global.world) * game.global.world * game.global.world * 0.02);
		if (baseAmt > 1) {
			amt *= baseAmt;
		}
	}
	else{
		if (what == "helium") level = Math.round((level - 1900) / 100);
		else if (what == "gems"){
			level = level - 400;
			//Adding 3 seconds worth of dragimp production on top of normal gem resource gains
			amt = game.jobs.Dragimp.modifier * 3 * baseAmt;
		}
		level *= 1.35;
		if (level < 0) level = 0;
		amt += Math.round(baseAmt * Math.pow(1.23, Math.sqrt(level)));
		amt += Math.round(baseAmt * level);
	}
	//Scale 20% across the Zone, depending on cell number
	if (what != "helium" && what != "fragments"){
		amt = (amt * .8) + ((amt * .002) * (cell + 1));
	}
	if (checkMapLootScale){
		var compare = game.global.world;
		if (world > compare && map.location != "Bionic"){
			amt *= Math.pow(1.1, (world - compare));
		}
		else {
			if (game.talents.mapLoot.purchased)
				compare--;
			if (world < compare){
				//-20% loot compounding for each level below world
				amt *= Math.pow(0.8, (compare - world));
			}
		}
		//Add map loot bonus
		amt = Math.round(amt * map.loot);

	}
	//Add Looting
	if (game.portal.Looting.level) amt += (amt * game.portal.Looting.level * game.portal.Looting.modifier);
	if (game.portal.Looting_II.level) amt *= (1 + (game.portal.Looting_II.level * game.portal.Looting_II.modifier));
	var spireRowBonus = (game.talents.stillRowing.purchased) ? 0.03 : 0.02;
	if (game.global.spireRows > 0) amt *= 1 + (game.global.spireRows * spireRowBonus);
	if (game.global.totalSquaredReward > 0 && what == "helium") amt *= ((game.global.totalSquaredReward / 1000) + 1);
	if (game.unlocks.impCount.Magnimp && what != "helium") amt *= Math.pow(1.003, game.unlocks.impCount.Magnimp);
	if (game.global.challengeActive == "Toxicity"){
		var toxMult = (game.challenges.Toxicity.lootMult * game.challenges.Toxicity.stacks) / 100;
		amt *= (1 + toxMult);
	}
	if (what != "helium") {
		if (game.global.challengeActive == "Decay"){
			amt *= 10;
			amt *= Math.pow(0.995, game.challenges.Decay.stacks);
		}
		amt = calcHeirloomBonus("Staff", what + "Drop", amt);
		if (isScryerBonusActive()) amt *= 2;
		if (game.global.challengeActive == "Daily"){
			if (typeof game.global.dailyChallenge.famine !== 'undefined' && what != "fragments"){
				amt *= dailyModifiers.famine.getMult(game.global.dailyChallenge.famine.strength);
			}
			if (typeof game.global.dailyChallenge.karma !== 'undefined'){
				amt *= dailyModifiers.karma.getMult(game.global.dailyChallenge.karma.strength, game.global.dailyChallenge.karma.stacks);
			}
		}
	}
	//Yes, Lead giving double helium and Watch not reducing helium is on purpose!
	if (game.global.challengeActive == "Watch" && what != "helium") amt /= 2;
	if (game.global.challengeActive == "Lead" && ((game.global.world % 2) == 1)) amt *= 2;
	if (getEmpowerment() == "Wind"){
		if (what == "helium"){
			if (!game.global.mapsActive){
				amt *= (1 + game.empowerments.Wind.getCombatModifier(true));
			}
		}
		else if (what != "fragments")
			amt *= (1 + (game.empowerments.Wind.getCombatModifier()));
	}
	if (what == "helium"){
		if (game.singleRunBonuses.heliumy.owned) amt *= 1.25;
		if (game.global.sLevel >= 5) amt *= Math.pow(1.005, game.global.world);
		if (game.goldenUpgrades.Helium.currentBonus > 0) amt *= 1 + game.goldenUpgrades.Helium.currentBonus;
		if (playerSpireTraps.Condenser.owned) amt *= (1 + (playerSpireTraps.Condenser.getWorldBonus() / 100));
		var fluffyBonus = Fluffy.isRewardActive("helium");
		amt += (amt * (fluffyBonus * 0.25));
	}
	if (givePercentage > 0) amt *= givePercentage;
	amt = Math.floor(amt);
	if (what == "helium"){
		addHelium(amt);
	}
	else
		addResCheckMax(what, amt);
	if (game.options.menu.useAverages.enabled){
		addAvg(what, amt);
	}
    return amt;
};

function isScryerBonusActive(){
	if (game.global.formation != 4) return false;
	if (game.global.mapsActive && game.global.waitToScryMaps) return false;
	if (!game.global.mapsActive && game.global.waitToScry) return false;
	return true;
}

function addHelium(amt){
	if (game.global.challengeActive) distributeToChallenges(amt);
	game.resources.helium.owned += amt;
	game.global.totalHeliumEarned += amt;
	if (portalWindowOpen){
		var heElem = document.getElementById('portalHelium');
		game.resources.helium.respecMax += amt;
		game.global.tempHighHelium += amt;
		if (heElem != null) heElem.innerHTML = '<span id="portalHeliumOwned">' + prettify(game.resources.helium.respecMax - game.resources.helium.totalSpentTemp) + '</span> Helium';
	}
	checkAchieve("totalHelium");
}

function addResCheckMax(what, number, noStat, fromGather, nonFilteredLoot) {
	var res = game.resources[what];
	if (nonFilteredLoot && game.options.menu.useAverages.enabled){
		addAvg(what, number);
	}
	if (res.max == -1) {
		res.owned += number;
		if (!noStat && what == "gems") game.stats.gemsCollected.value += number;
		return;
	}
	var newMax = getMaxForResource(what);
    if (res.owned + number <= newMax) res.owned += number;
    else {
		if (game.global.autoStorage && game.global.improvedAutoStorage && (what == "food" || what == "wood" || what == "metal")){
			var storage = (what == "food") ? "Barn" : (what == "wood") ? "Shed" : (what == "metal") ? "Forge" : "";
			res.owned += number;
			while (res.owned > newMax){
				if (!buyBuilding(storage, true, true, 1))
					break;
				newMax *= 2;
			}
		}
		else
			res.owned = newMax;
	}
}

function getMaxForResource(what){
	var res = game.resources[what];
	if (!res.max) return 0;
	var newMax = res.max + (res.max * game.portal.Packrat.modifier * game.portal.Packrat.level);
	newMax = calcHeirloomBonus("Shield", "storageSize", newMax);
	return newMax;
}

// Exponentially weighted moving average is less jumpy than a normal
// moving average, so we can include jestimps.
// https://en.wikipedia.org/wiki/Moving_average
//
// Averaging smoothness is controlled by `game.settings.ewma_alpha`,
// which should be between 0 and 1 (exclusive). Lower values provide
// more smoothness, higher values have less lag. Default value of 0.05
//
// The time between average updates is now controlled by
// `game.settings.ewma_ticks`, which is the number of ticks between
// updates. The default value is 10, i.e. every 1 second.

function addAvg(what, number) {
	var avgA = game.global.lootAvgs[what];
	if (typeof avgA === 'undefined') return;
	avgA.accumulator += number;
}

function getAvgLootSecond(what) {
	var avgA = game.global.lootAvgs[what];
	if (typeof avgA === 'undefined') return 0;
	return (avgA.average > 0.01) ? avgA.average : 0;
}

function curateAvgs() {
	for (var what in game.global.lootAvgs) {
            if (typeof game.global.lootAvgs[what] !== 'object') continue;
            var avgA = game.global.lootAvgs[what];
            avgA.average = avgA.average * (1 - game.settings.ewma_alpha)
                         + avgA.accumulator
                           * game.settings.ewma_alpha
                           / game.settings.ewma_ticks
                           * game.settings.speed;
            avgA.accumulator = 0;
	}
}

function fireMode(noChange) {
    if (!noChange) game.global.firing = !game.global.firing;
    var elem = document.getElementById("fireBtn");
    if (game.global.firing) {
        elem.className = elem.className.replace("fireBtnNotFiring", "fireBtnFiring");
        elem.innerHTML = "解雇中";
    } else {
        elem.className = elem.className.replace("fireBtnFiring", "fireBtnNotFiring");
        elem.innerHTML = "解雇";
    }
    if (!noChange && !game.global.lockTooltip)
		 tooltip("解雇脆皮", null, "update");
}

function setGather(what, updateOnly) {
	if (what == "science" && game.global.challengeActive == "Scientist") return;
	if (game.options.menu.pauseGame.enabled && !updateOnly) return;
    var toGather = game.resources[what];
    var colorOn = "workColorOn";
	var btnText = "";
	var collectBtn;
	if ((game.talents.turkimp4.purchased || game.global.turkimpTimer > 0) && (what == "food" || what == "wood" || what == "metal")){
		colorOn = "workColorTurkimp";
		btnText = "<span class='icomoon icon-spoon-knife'></span>";
	}
    if (typeof toGather === 'undefined' && what != "buildings") return;
	var toUpdate = (updateOnly) ? what : game.global.playerGathering;
    if (toUpdate !== "") {
		collectBtn = document.getElementById(toUpdate + "CollectBtn");
        collectBtn.innerHTML = setGatherTextAs(toUpdate, false);
        swapClass("workColor", "workColorOff", collectBtn);
    }
    if (updateOnly) return;
	game.global.playerGathering = what;
	updateBuildSpeed();
	collectBtn = document.getElementById(what + "CollectBtn");
    collectBtn.innerHTML = btnText + setGatherTextAs(what, true);
    swapClass("workColor", colorOn, collectBtn);
}

function updateBuildSpeed(){
	var modifier = (game.global.autoCraftModifier > 0) ? game.global.autoCraftModifier : 0;
    if (game.global.playerGathering == "buildings") modifier += getPlayerModifier();
	document.getElementById("buildSpeed").innerHTML = (modifier > 0) ? prettify(Math.floor(modifier * 100)) + "%" : "";
}

function setGatherTextAs(what, on) {
	if (what == "science") game.global.researched = true;
    var trimpTrapText = '(<span id="trimpTrapText">' + prettify(game.buildings.Trap.owned) + '</span>)';
    switch (what) {
    case "food":
        return (on) ? "收集中" : "采集";
    case "wood":
        return (on) ? "砍伐中" : "伐木";
    case "metal":
        return (on) ? "采矿中" : "采矿";
    case "science":
        return (on) ? "研究中" : "研究";
    case "buildings":
        return (on) ? "建造中" : "建造";
    case "trimps":
        return (on) ? ("诱捕中 " + trimpTrapText) : ("检查陷阱 " + trimpTrapText);
    }
}

function gather() {
    var what = game.global.playerGathering;
    var amount;
	if (game.talents.turkimp4.purchased || game.global.turkimpTimer > 0){
		updateTurkimpTime();
	}
    for (var job in game.jobs) {
		var perSec = 0;
		var increase = game.jobs[job].increase;
		if (increase == "custom") continue;
        if (game.jobs[job].owned > 0){
			perSec = (game.jobs[job].owned * game.jobs[job].modifier);
			if (game.portal.Motivation.level > 0) perSec += (perSec * game.portal.Motivation.level * game.portal.Motivation.modifier);
			if (game.portal.Motivation_II.level > 0) perSec *= (1 + (game.portal.Motivation_II.level * game.portal.Motivation_II.modifier));
			if (game.portal.Meditation.level > 0) perSec *= (1 + (game.portal.Meditation.getBonusPercent() * 0.01));
			if (game.jobs.Magmamancer.owned > 0 && increase == "metal") perSec *= game.jobs.Magmamancer.getBonusPercent();
			if (game.global.challengeActive == "Meditate") perSec *= 1.25;
			else if (game.global.challengeActive == "Size") perSec *= 1.5;
			if (game.global.challengeActive == "Toxicity"){
				var toxMult = (game.challenges.Toxicity.lootMult * game.challenges.Toxicity.stacks) / 100;
				perSec *= (1 + toxMult);
			}
			if (game.global.challengeActive == "Balance"){
				perSec *= game.challenges.Balance.getGatherMult();
			}
			if (game.global.challengeActive == "Decay"){
				perSec *= 10;
				perSec *= Math.pow(0.995, game.challenges.Decay.stacks);
			}
			if (game.global.challengeActive == "Daily"){
				if (typeof game.global.dailyChallenge.dedication !== 'undefined')
					perSec *= dailyModifiers.dedication.getMult(game.global.dailyChallenge.dedication.strength);
				if (typeof game.global.dailyChallenge.famine !== 'undefined' && increase != "fragments" && increase != "science")
					perSec *= dailyModifiers.famine.getMult(game.global.dailyChallenge.famine.strength);
			}
			if (game.global.challengeActive == "Watch") perSec /= 2;
			if (game.global.challengeActive == "Lead" && ((game.global.world % 2) == 1)) perSec*= 2;
			if (job != "Explorer" && getEmpowerment() == "Wind"){
				perSec *= (1 + (game.empowerments.Wind.getCombatModifier()));
			}
			perSec = calcHeirloomBonus("Staff", job + "Speed", perSec);
		}
		if (what && increase == what){
			if ((game.talents.turkimp4.purchased || game.global.turkimpTimer > 0) && (what == "food" || what == "wood" || what == "metal")){
				var tBonus = 1.5;
				if (game.talents.turkimp4.purchased) tBonus = 2;
				else if (game.talents.turkimp3.purchased) tBonus = 1.75;
				perSec *= tBonus;
			}
			perSec += getPlayerModifier();
		}
        amount = perSec / game.settings.speed;
		if (game.options.menu.useAverages.enabled) perSec += getAvgLootSecond(increase);
		if (game.resources[increase].max > 0){
			var timeToFillElem = document.getElementById(increase + "TimeToFill");
			if (timeToFillElem) timeToFillElem.textContent = calculateTimeToMax(game.resources[increase], perSec, null, true);
		}
		addResCheckMax(increase, amount, null, true);
    }
    if (what === "" || what == "buildings") return;
    if (what == "trimps") {
        trapThings();
        return;
    }
}

function getPlayerModifier(){
	var playerModifier = game.global.playerModifier;
	return calcHeirloomBonus("Shield", "playerEfficiency", playerModifier);
}

function calculateTimeToMax(resource, perSec, toNumber, fromGather) {
	if (perSec <= 0) return "";
	var remaining = (toNumber != null) ? toNumber : calcHeirloomBonus("Shield", "storageSize", ((resource.max * (1 + game.portal.Packrat.modifier * game.portal.Packrat.level)))) - resource.owned;
	if (remaining <= 0) return "";
	var toFill = Math.floor(remaining / perSec);
	var years = Math.floor(toFill / 31536000);
	var days = Math.floor(toFill / 86400) % 365;
	var hours = Math.floor( toFill / 3600) % 24;
	var minutes = Math.floor(toFill / 60) % 60;
	var seconds = (toFill % 60) + 1;
	if (seconds == 60){
		minutes++;
		seconds = 0;
		toFill++;
	}
	if (minutes == 60 && hours == 0){
		hours = 1;
		minutes = 0;
		toFill++;
	}
	if (!isFinite(years)) return "很长时间";
	if (toFill < 60) {
		if (toFill < 1 && fromGather) return "";
		return Math.floor(seconds) + " 秒" + ((Math.floor(seconds) == 1) ? "" : "");
	}
	if (toFill < 3600) return minutes + " 分" + ((minutes == 1) ? "" : "") + " " + seconds + " 秒" + ((seconds == 1) ? "" : "");
	if (toFill < 86400) return hours + " 时" + ((hours == 1) ? "" : "") + " " + minutes + " 分" + ((minutes == 1) ? "" : "");
	if (toFill < 31536000) return days + " 天" + ((days == 1) ? "" : "") + " " + hours + " 时" + ((hours == 1) ? "" : "");
	return prettify(years) + " 年" + ((years == 1) ? "" : "") + " " + days + " 天" + ((days == 1) ? "" : "");
}

function checkTriggers(force) {
    for (var item in game.triggers) {
        var trigger = game.triggers[item];
        if (force) {
            if ((trigger.done == 1) && (typeof trigger.once === 'undefined')) trigger.fire();
            else if (typeof trigger.once == 'function' && trigger.done == 1) {
                trigger.once();
            }
            continue;
        }
        if (trigger.done === 0 && canAffordTwoLevel(game.triggers[item])) {
            trigger.fire();
            trigger.done = 1;
			if (typeof trigger.message == 'function') message(trigger.message(), "Story");
            else if (typeof trigger.message !== 'undefined') message(trigger.message, "Story");
        }
    }
}

function canAffordTwoLevel(whatObj, takeEm) {
	if (whatObj.specialFilter && !whatObj.specialFilter()) return false;
	if (whatObj.prestiges && game.equipment[whatObj.prestiges].locked) return false;
    for (var costGroup in whatObj.cost) {
        if (costGroup == "special") {
            var toReturn = whatObj.cost.special();
            return toReturn;
        }
        var group = game[costGroup];
        var whatObjCost = whatObj.cost[costGroup];
        for (var res in whatObjCost) {
			if (typeof group === 'undefined') return false;
            var realItem = group[res];
            var cost = whatObjCost[res];
            if (typeof cost === 'function') cost = cost();
            if (typeof cost[1] !== 'undefined') cost = resolvePow(cost, whatObj);
			var artMult = Math.pow(1 - game.portal.Artisanistry.modifier, game.portal.Artisanistry.level);
			if (game.global.challengeActive == "Daily" && typeof game.global.dailyChallenge.metallicThumb !== 'undefined'){
				artMult *= dailyModifiers.metallicThumb.getMult(game.global.dailyChallenge.metallicThumb.strength);
			}
			if (game.global.challengeActive == "Obliterated"){
				artMult = (artMult == -1) ? 1e12 : (1e12 * artMult);
			}
			if (game.global.challengeActive == "Eradicated"){
				var mod = game.challenges.Eradicated.scaleModifier
				artMult = (artMult == -1) ? mod : (mod * artMult);
			}
			if (whatObj.prestiges && (res == "metal" || res == "wood")) cost *= artMult;
            if (group[res].owned < cost) return false;
            if (takeEm) group[res].owned -= cost;
        }
    }
    return true;
}

function resolvePow(cost, whatObj, addOwned) {
	if (!addOwned) addOwned = 0;
    var compare;
    if (typeof whatObj.done !== 'undefined') compare = 'done';
    if (typeof whatObj.level !== 'undefined') compare = 'level';
    if (typeof whatObj.owned !== 'undefined') compare = 'owned';
	if (typeof whatObj.purchased !== 'undefined') compare = 'purchased';
    return (Math.floor(cost[0] * Math.pow(cost[1], (whatObj[compare] + addOwned))));
}

//Now with equipment! buyAmt
function canAffordBuilding(what, take, buildCostString, isEquipment, updatingLabel, forceAmt, autoPerc){
	var costString = "";
	var toBuy;
	if (!isEquipment) toBuy = game.buildings[what];
	else toBuy = game.equipment[what];
	var purchaseAmt = 1;
	if (forceAmt) purchaseAmt = forceAmt;
	else {
		if (game.global.buyAmt == "Max"){
			if (!updatingLabel) purchaseAmt = calculateMaxAfford(toBuy, !isEquipment, isEquipment);
		}
		else purchaseAmt = game.global.buyAmt;
	}
	if (typeof toBuy === 'undefined') return false;
	for (var costItem in toBuy.cost) {
		var color = "green";
		var price = 0;
		price = parseFloat(getBuildingItemPrice(toBuy, costItem, isEquipment, purchaseAmt));
		if (isEquipment){
			var artMult = Math.pow(1 - game.portal.Artisanistry.modifier, game.portal.Artisanistry.level);
			if (game.global.challengeActive == "Daily" && typeof game.global.dailyChallenge.metallicThumb !== 'undefined'){
				artMult *= dailyModifiers.metallicThumb.getMult(game.global.dailyChallenge.metallicThumb.strength);
			}
			if (game.global.challengeActive == "Obliterated"){
				artMult = (artMult == -1) ? 1e12 : (1e12 * artMult);
			}
			if (game.global.challengeActive == "Eradicated"){
				var mod = game.challenges.Eradicated.scaleModifier
				artMult = (artMult == -1) ? mod : (mod * artMult);
			}
			price = Math.ceil(price * artMult);
		}
		else if (game.portal.Resourceful.level) price = Math.ceil(price * (Math.pow(1 - game.portal.Resourceful.modifier, game.portal.Resourceful.level)));
		if (autoPerc > 0){
			if (price > game.resources[costItem].owned * (autoPerc / 100))
				return false;
			continue;
		}
		else if (price > game.resources[costItem].owned || !(isFinite(price))) {
			if (buildCostString) color = "red";
			else return false;
		}
		if (buildCostString) {
			var percent;
			if (color == "red"){
				if ((costItem == "food" || costItem == "wood" || costItem == "metal") && price > getMaxForResource(costItem))
					color = "orange";
				var thisPs = getPsString(costItem, true);
				if (thisPs > 0)
				{
					percent = calculateTimeToMax(null, thisPs, (price - game.resources[costItem].owned));
					percent = "(" + percent + ")";
				}
				else percent = "(<span class='icomoon icon-infinity'></span>)";
			}
			else{
				percent = (game.resources[costItem].owned > 0) ? prettify(((price / game.resources[costItem].owned) * 100).toFixed(1)) : 0;
				percent = "(" + percent + "%)";
			}
			costString += '<span class="' + color + '">' + cnitem(costItem) + ':&nbsp;' + prettify(price) + '&nbsp;' + percent + '</span>, ';
		}
		if (take) game.resources[costItem].owned -= price;
	}
	if (buildCostString) {
		costString = costString.slice(0, -2);
		return costString;
	}
	return true;
}

function getBuildingItemPrice(toBuy, costItem, isEquipment, purchaseAmt){
	var price = 0;
	var compare = (isEquipment) ? "level" : "purchased";
	var thisCost = toBuy.cost[costItem];
		if (typeof thisCost[1] !== 'undefined'){
			price =  Math.floor((thisCost[0] * Math.pow(thisCost[1], toBuy[compare])) * ((Math.pow(thisCost[1], purchaseAmt) - 1) / (thisCost[1] - 1)));
		}
		else if (typeof thisCost === 'function') {
			price = thisCost();
		}
		else {
			price = thisCost * purchaseAmt;
		}
	return price;
}

function buyBuilding(what, confirmed, fromAuto, forceAmt) {
	if (game.options.menu.pauseGame.enabled) return false;
	if (!forceAmt && !confirmed && game.options.menu.lockOnUnlock.enabled == 1 && (new Date().getTime() - 1000 <= game.global.lastUnlock)) return false;
	var toBuy = game.buildings[what];
	var purchaseAmt = 1;
	if (forceAmt) purchaseAmt = Math.min(forceAmt, calculateMaxAfford(toBuy, true, false, false, true));
	else if (!toBuy.percent) purchaseAmt = (game.global.buyAmt == "Max") ? calculateMaxAfford(toBuy, true, false) : game.global.buyAmt;
    if (typeof toBuy === 'undefined') return false;
	var canAfford = ((forceAmt) ? canAffordBuilding(what, false, false, false, false, purchaseAmt) : canAffordBuilding(what));
	if (purchaseAmt == 0) return false;
	if (canAfford){
		if (what == "Wormhole" && !confirmed && game.options.menu.confirmhole.enabled && !fromAuto){
			tooltip('Confirm Purchase', null, 'update', '你将要购买 ' + purchaseAmt + ' 虫洞, <b>需要消耗氦</b>. 请确保你有能力去赚回你花费的氦气!', 'buyBuilding(\'Wormhole\', true, false, ' + purchaseAmt + ')');
			return false;
		}
		((forceAmt) ? canAffordBuilding(what, true, false, false, false, purchaseAmt) : canAffordBuilding(what, true));
		game.buildings[what].purchased += purchaseAmt;
		if (getCraftTime(game.buildings[what]) == 0) {
			for (var x = 0; x < purchaseAmt; x++) buildBuilding(what);
		}
		else
		startQueue(what, purchaseAmt);
	}
	else
		return false;
	if (!fromAuto) tooltip(what, "buildings", "update");
	return true;
}

function getCraftTime(buildingObj){
	var time = buildingObj.craftTime;
	if (time == 0 && game.options.menu.forceQueue.enabled == 1) {
		return buildingObj.origTime;
	}
	return time;
}

function refundQueueItem(what) {
	var name = what.split('.');
    var struct = game.buildings[name[0]];
	struct.purchased -= parseInt(name[1], 10);
    for (var costItem in struct.cost) {
		var thisCostItem = struct.cost[costItem];
		var refund = 0;
		if (typeof thisCostItem[1] !== 'undefined')
			refund =  Math.floor((thisCostItem[0] * Math.pow(thisCostItem[1], struct.purchased)) * ((Math.pow(thisCostItem[1], name[1]) - 1) / (thisCostItem[1] - 1)));
		else if (typeof struct.cost[costItem] === 'function') refund += struct.cost[costItem]();
		else
			refund = thisCostItem * name[1];
		if (game.portal.Resourceful.level) refund = Math.ceil(refund * (Math.pow(1 - game.portal.Resourceful.modifier, game.portal.Resourceful.level)));
		addResCheckMax(costItem, parseFloat(refund), true);
    }
}

function startQueue(what, count) {
    game.global.buildingsQueue.push(what + "." + (count));
    addQueueItem(what + "." + count);
}

function craftBuildings(makeUp) {
    var buildingsBar = document.getElementById("animationDiv");
	if (buildingsBar == null) return;
	var timeRemaining = document.getElementById("queueTimeRemaining");
    var speedElem = document.getElementById("buildSpeed");
    if (game.global.crafting === "" && game.global.buildingsQueue.length > 0) {
        setNewCraftItem();
    }
    if ((game.global.autoCraftModifier <= 0 && game.global.playerGathering != "buildings") || game.global.crafting === "") {
        speedElem.innerHTML = "";
        return;
    }
    var modifier = (game.global.autoCraftModifier > 0) ? game.global.autoCraftModifier : 0;
    if (game.global.playerGathering == "buildings") modifier += getPlayerModifier();
    if (!makeUp) {
        speedElem.innerHTML = prettify(Math.floor(modifier * 100)) + "%";
        game.global.timeLeftOnCraft -= ((1 / game.settings.speed) * modifier);
		var percent = 1 - (game.global.timeLeftOnCraft / getCraftTime(game.buildings[game.global.crafting]));

		var timeLeft = (game.global.timeLeftOnCraft / modifier).toFixed(1);
		if (timeLeft < 0.1 || isNumberBad(timeLeft)) timeLeft = 0.1;
        if (timeRemaining) timeRemaining.textContent = " - " + timeLeft + " 秒";
		if (game.options.menu.queueAnimation.enabled) buildingsBar.style.opacity = percent;
		else buildingsBar.style.opacity = "0";
        if (game.global.timeLeftOnCraft > 0) return;
    }
	buildBuilding(game.global.crafting);
	if (game.global.trapBuildToggled && game.global.trapBuildAllowed && game.global.buildingsQueue.length == 1 && game.global.buildingsQueue[0] == "Trap.1"){
		autoTrap();
		return;
	}
    removeQueueItem("first");
	if (game.global.buildingsQueue.length === 0){
		checkEndOfQueue();
	}
	else{
		setNewCraftItem();
	}
}

function buildBuilding(what) {
    var building = game.buildings[what];
    var toIncrease;
	building.owned++;
	checkAchieve("housing", what);
    if (building.owned == 1 && typeof building.first !== 'undefined') building.first();
	var ownedElem = document.getElementById(what + "Owned");
	if (ownedElem)
		ownedElem.innerHTML = building.owned;
	if (typeof building.increase === 'undefined') return;
	if (building.increase.what == "trimps.max"){
		addMaxHousing(building.increase.by, game.talents.autoStructure.purchased);
	}
	else {
		var buildingSplit = building.increase.what.split('.');
		if (buildingSplit[0] == "global") toIncrease = game.global;
		else if (buildingSplit[0] == "Dragimp") toIncrease = game.jobs.Dragimp;
		else
			toIncrease = game.resources[buildingSplit[0]];
		if (buildingSplit[2] == "mult") toIncrease[buildingSplit[1]] = parseFloat(toIncrease[buildingSplit[1]]) * parseFloat(building.increase.by).toFixed(5);
		else
			toIncrease[buildingSplit[1]] += parseFloat(building.increase.by);
	}
	if (typeof building.fire !== 'undefined') building.fire();
		if (what == "Wormhole"){
			var spent = Math.floor((building.cost.helium[0] * Math.pow(building.cost.helium[1], building.owned - 1)));
			if (game.portal.Resourceful.level) spent = Math.ceil(spent * (Math.pow(1 - game.portal.Resourceful.modifier, game.portal.Resourceful.level)));
			game.global.totalHeliumEarned -= parseFloat(spent);
			game.stats.spentOnWorms.value += parseFloat(spent);
			if (game.stats.spentOnWorms.value + game.stats.spentOnWorms.valueTotal > 250000) giveSingleAchieve("Holey");
	}
    numTab();
}

function setNewCraftItem() {
    var queueItem = game.global.buildingsQueue[0].split('.')[0];
    game.global.crafting = queueItem;
    game.global.timeLeftOnCraft = getCraftTime(game.buildings[queueItem]);
	var elem = document.getElementById("queueItemsHere").firstChild;
	var timeLeft = (game.global.timeLeftOnCraft / (game.global.autoCraftModifier + getPlayerModifier())).toFixed(1);
	if (elem){
		var timeElem = document.getElementById("queueTimeRemaining");
		if (timeLeft < 0.1 || isNumberBad(timeLeft)) timeLeft = 0.1;
		if (!timeElem) elem.innerHTML += "<span id='queueTimeRemaining'> - " + timeLeft + " Seconds</span><div id='animationDiv'></div>";
		else timeElem.textContent = " - " + timeLeft + " 秒";
	}
	if (elem && timeLeft <= 0.1) {timeLeft = 0.1; if (game.options.menu.queueAnimation.enabled) document.getElementById("animationDiv").style.opacity = '1'}
}

function calculatePercentageBuildingCost(what, resourceToCheck, costModifier, replaceMax){
	var struct = game.buildings[what];
	var res = game.resources[resourceToCheck];
	var dif = struct.purchased - struct.owned;
	var max = (replaceMax) ? replaceMax : res.max;
	return Math.floor(costModifier * max * Math.pow(struct.increase.by, dif));
}

function trapThings() {
    var trap = game.buildings.Trap;
    var trimps = game.resources.trimps;
	var trimpsMax = trimps.realMax();
	var TrapOwned = document.getElementById("TrapOwned");
    if (game.global.timeLeftOnTrap == -1) {
        if (trimps.owned < trimpsMax && trap.owned >= 1)
            game.global.timeLeftOnTrap = trimps.speed;
        else {
            document.getElementById("trappingBar").style.width = "0%";
            if (TrapOwned) TrapOwned.innerHTML = trap.owned;
            return;
        }
    }
    game.global.timeLeftOnTrap -= ((1 / game.settings.speed) * getPlayerModifier());
    if (game.global.timeLeftOnTrap <= 0 && trimps.owned < trimpsMax && trap.owned >= 1) {
        trap.owned--;
        trimps.owned++;
		//portal Bait
		if (game.portal.Bait.level > 0) trimps.owned += (game.portal.Bait.level * game.portal.Bait.modifier);
		if (trimps.owned > trimpsMax) trimps.owned = trimpsMax;
        game.global.timeLeftOnTrap = -1;
        if (TrapOwned) TrapOwned.innerHTML = trap.owned;
    }
    if (game.options.menu.progressBars.enabled) document.getElementById("trappingBar").style.width = (100 - ((game.global.timeLeftOnTrap / trimps.speed) * 100)) + "%";
}


function toggleAutoJobsHelp(){
	var btnElem = document.getElementById('autoJobsHelpBtn');
	var helpElem = document.getElementById('autoJobsHelpDiv');
	if (!btnElem || !helpElem) return;
	if (helpElem.style.display == "block"){
		helpElem.style.display = "none";
		btnElem.innerHTML = "Help";
	}
	else {
		helpElem.style.display = "block";
		btnElem.innerHTML = "Hide Help";
	}
	verticalCenterTooltip();
}

var lastAutoJob = 0;
function buyAutoJobs(allowRatios){
	if (game.options.menu.pauseGame.enabled)
		return;
	var setting = game.global.autoJobsSetting;
	if (!setting.enabled || !game.talents.autoJobs.purchased) return;
	if (new Date().getTime() - lastAutoJob < 2000) return;
	if (allowRatios) lastAutoJob = new Date().getTime();
	var trimps = game.resources.trimps;
	var breedCount = (trimps.owned - trimps.employed > 2) ? Math.floor(trimps.owned - trimps.employed) : 0;
	var workspaces = game.workspaces;
	if (breedCount < workspaces) workspaces = Math.floor(breedCount * 0.1);
	//Non-ratio jobs
	var others = ["Trainer", "Explorer", "Magmamancer"];
	for (var x = 0; x < others.length; x++){
		var thisSetting = setting[others[x]];
		if (!thisSetting || !thisSetting.enabled) continue;
		var item = others[x];
		if (game.jobs[item].locked) continue;
		autoBuyJob(item, false, thisSetting.value, thisSetting.buyMax);
	}
	//Ratio jobs
	if (!allowRatios || workspaces <= 0) return;
	var ratios = ["Farmer", "Lumberjack", "Miner", "Scientist"];
	var totalRatio = 0;
	//Check all settings and calculate total ratio
	for (var x = 0; x < ratios.length; x++){
		if (game.jobs[ratios[x]].locked) continue;
		var thisSetting = setting[ratios[x]];
		if (!thisSetting || !thisSetting.enabled) continue;
		if (ratios[x] == "Scientist" && thisSetting.buyMax && game.jobs.Scientist.owned >= thisSetting.buyMax) continue;
		totalRatio += thisSetting.ratio;
	}
	//Assign ratio jobs
	for (var x = 0; x < ratios.length; x++){
		var thisSetting = setting[ratios[x]];
		if (!thisSetting || !thisSetting.enabled) continue;
		var item = ratios[x];
		if (game.jobs[item].locked) continue;
		var toBuy = workspaces * (setting[item].ratio / totalRatio);
		if (isNumberBad(toBuy)) {
			console.log('wanted to buy ' + toBuy + ' ' + ratios[x] + 's.');
			continue;
		}
		var useMax = (ratios[x] == "Scientist" && thisSetting.buyMax) ? thisSetting.buyMax : false; 
		autoBuyJob(item, true, Math.floor(toBuy), useMax);
	}
}

function autoBuyJob(what, isRatio, purchaseAmt, max){
	var owned = game.jobs[what].owned;
	var job = game.jobs[what];
	if (max && owned >= max) return;
	var buyAmt = (isRatio) ? purchaseAmt : calculateMaxAfford(job, false, false, true, false, purchaseAmt);
	if (buyAmt <= 0) return;
	var workspaces = game.workspaces;
	var checkAndFix = false;
	var fireAmt = 0;
	if (max && (owned + buyAmt > max)) buyAmt = max - owned;
	if (!isRatio && workspaces < buyAmt) {
		workspaces = game.workspaces;
		fireAmt = buyAmt - workspaces;
		// Check to see if there are enough workers to fire
		if (!((game.jobs.Miner.owned + game.jobs.Farmer.owned + game.jobs.Lumberjack.owned) < fireAmt)) {
			var freed = freeWorkspace(fireAmt);
			if (!freed) {
				return;
			}
			if (workspaces < buyAmt && freed){
				workspaces = buyAmt;
				checkAndFix = true;
			}	
		}
	}
	for (var costItem in job.cost) {
        if (checkJobItem(what, true, costItem, null, buyAmt) !== true) return false;
    }
	job.owned += buyAmt;
	if (checkAndFix){
		workspaces = game.workspaces;
		if (workspaces < 0)
			freeWorkspace(Math.abs(workspaces));
	}
}

function buyJob(what, confirmed, noTip) {
	if (what == "Amalgamator") return;
	var checkAndFix = false;
	if (game.options.menu.pauseGame.enabled) return;
	if (game.global.challengeActive == "Scientist" && what == "Scientist") return;
	if (game.global.challengeActive == "Corrupted" && what == "Geneticist") game.challenges.Corrupted.hiredGenes = true;
	if (!confirmed && game.options.menu.lockOnUnlock.enabled == 1 && (new Date().getTime() - 1000 <= game.global.lastUnlock)) return;
	var purchaseAmt;
	if (game.global.firing){
		if (game.jobs[what].owned < 1) return;
		purchaseAmt = (game.global.buyAmt == "Max") ? calculateMaxAfford(game.jobs[what], false, false, true) : game.global.buyAmt;
		game.jobs[what].owned -= purchaseAmt;
		game.stats.trimpsFired.value += purchaseAmt;
		if (game.jobs[what].owned < 0) game.jobs[what].owned = 0;
		return;
	}
	var workspaces = game.workspaces;
	var firingForJobs = false;
	var fireAmt;
	if (game.options.menu.fireForJobs.enabled && game.jobs[what].allowAutoFire){
		purchaseAmt = (game.global.buyAmt == "Max") ? calculateMaxAfford(game.jobs[what], false, false, true) : game.global.buyAmt;
		if (workspaces < purchaseAmt) {
			workspaces = game.workspaces;
			fireAmt = purchaseAmt - workspaces;
			// Check to see if there are enough workers to fire
			if (!((game.jobs.Miner.owned + game.jobs.Farmer.owned + game.jobs.Lumberjack.owned) < fireAmt)) {
				firingForJobs = true;
			}
			// Fire later in case the purchase cannot be afforded
		}
	}


	// Don't explicitly check if workspaces <= 0, delegate that to canAffordJob
	// That way, firingForJobs is accounted for
	// canAffordJob will check workspaces <= 0 anyway

	if (!canAffordJob(what, false, workspaces, firingForJobs)) return;

	if (firingForJobs) {
		// Now that we know if can afford the purchase, we can fire workers

		var freed = freeWorkspace(fireAmt);
		if (!freed) {
			return;
		}

		if (workspaces < purchaseAmt && freed){
			workspaces = purchaseAmt;
			checkAndFix = true;
		}
	}
	var added = canAffordJob(what, true, workspaces);
	game.jobs[what].owned += added;


	if (!noTip) tooltip(what, "jobs", "update");
	if (checkAndFix){
		workspaces = game.workspaces;
		if (workspaces < 0)
			freeWorkspace(Math.abs(workspaces));
	}
}

function addGeneticist(amount){
	if (game.global.challengeActive == "Corrupted") game.challenges.Corrupted.hiredGenes = true;
	var workspaces = game.workspaces;
	var owned = game.resources.trimps.owned - game.resources.trimps.employed;
	if (owned < 1) return;
	if (owned < amount)
		amount = owned;
	if (workspaces <= 0) {
		if (!game.options.menu.gaFire.enabled) return;
		//try to free up a workspace if possible
		if (!freeWorkspace(amount)){
			amount = 1;
			if (!freeWorkspace(amount))
				return;
		}
	}
	var cost = game.jobs.Geneticist.cost.food;
	var price = Math.floor((cost[0] * Math.pow(cost[1], game.jobs.Geneticist.owned)) * ((Math.pow(cost[1], amount) - 1) / (cost[1] - 1)));
	if (game.resources.food.owned < price) {
		price = getNextGeneticistCost();
		if (game.resources.food.owned < price) return;
		amount = 1;
	}
	game.resources.food.owned -= price;
	game.jobs.Geneticist.owned += amount;
}

function removeGeneticist(amount){
	if (game.jobs.Geneticist.owned < amount) return;
	game.jobs.Geneticist.owned -= amount;
}

function getNextGeneticistCost(){
	var geneticist = game.jobs.Geneticist;
	return resolvePow(geneticist.cost.food, geneticist, 1);
}

function freeWorkspace(amount, getAmtFreed){
	if (!amount) amount = 1;
	var toCheck = [];
	if (game.jobs.Miner.owned >= amount) toCheck.push('Miner');
	if (game.jobs.Farmer.owned >= amount) toCheck.push('Farmer');
	if (game.jobs.Lumberjack.owned >= amount) toCheck.push('Lumberjack');
	if (toCheck.length == 0) return false;
	var selected = toCheck[Math.floor(Math.random() * toCheck.length)];
	game.jobs[selected].owned -= amount;
	return true;
}



function calculateMaxAfford(itemObj, isBuilding, isEquipment, isJob, forceMax, forceRatio){ //don't use forceMax for jobs until you fix that second return. forceMax and forceRatio indicate that they're from an auto, and ignore firing
	if (!itemObj.cost){
		console.log("no cost");
		return 1;
	}
	var mostAfford = -1;
	var currentOwned = (itemObj.purchased) ? itemObj.purchased : ((itemObj.level) ? itemObj.level : itemObj.owned);
	if (!currentOwned) currentOwned = 0;
	if (isJob && game.global.firing && !forceRatio) return Math.floor(currentOwned * game.global.maxSplit);
	//if (itemObj == game.equipment.Shield) console.log(currentOwned);
	for (var item in itemObj.cost){
		var price = itemObj.cost[item];
		var toBuy;
		var resource = game.resources[item];
		var resourcesAvailable = resource.owned;
		if (game.global.maxSplit != 1 && !forceMax && !forceRatio) resourcesAvailable = Math.floor(resourcesAvailable * game.global.maxSplit);
		else if (forceRatio) resourcesAvailable = Math.floor(resourcesAvailable * forceRatio);
		if (!resource || typeof resourcesAvailable === 'undefined'){
			console.log("resource " + item + " not found");
			return 1;
		}
		if (typeof price[1] !== 'undefined'){
			var start = price[0];
			if (isEquipment){
				var artMult = Math.pow(1 - game.portal.Artisanistry.modifier, game.portal.Artisanistry.level);
				if (game.global.challengeActive == "Daily" && typeof game.global.dailyChallenge.metallicThumb !== 'undefined'){
					artMult *= dailyModifiers.metallicThumb.getMult(game.global.dailyChallenge.metallicThumb.strength);
				}
				if (game.global.challengeActive == "Obliterated"){
					artMult = (artMult == -1) ? 1e12 : (1e12 * artMult);
				}
				if (game.global.challengeActive == "Eradicated"){
					var mod = game.challenges.Eradicated.scaleModifier
					artMult = (artMult == -1) ? mod : (mod * artMult);
				}
				start = Math.ceil(start * artMult);
			}
			if (isBuilding && game.portal.Resourceful.level) start = Math.ceil(start * (Math.pow(1 - game.portal.Resourceful.modifier, game.portal.Resourceful.level)));
			toBuy = Math.floor(log10(((resourcesAvailable / (start * Math.pow(price[1], currentOwned))) * (price[1] - 1)) + 1) / log10(price[1]));
			//if (itemObj == game.equipment.Shield) console.log(toBuy);
		}
		else if (typeof price === 'function') {
			return 1;
		}
		else {
			if (isBuilding && game.portal.Resourceful.level) price = Math.ceil(price * (Math.pow(1 - game.portal.Resourceful.modifier, game.portal.Resourceful.level)));
			toBuy = Math.floor(resourcesAvailable / price);
		}
		if (mostAfford == -1 || mostAfford > toBuy) mostAfford = toBuy;
	}
	if (forceRatio && (mostAfford <= 0 || isNaN(mostAfford))) return 0;
	if (isBuilding && mostAfford > 1000000000) return 1000000000;
	if (mostAfford <= 0) return 1;
	return mostAfford;
}

function getTooltipJobText(what, toBuy) {
    var job = game.jobs[what];
	if (toBuy <= 0) toBuy = game.global.buyAmt;
	if (toBuy == "Max") toBuy = calculateMaxAfford(job, false, false, true);
	var fullText = "";
    for (var item in job.cost) {
		var result = (checkJobItem(what, false, item, false, toBuy))
        var color =  (result === 0) ? "orange" : ((result == true) ? "green" : "red");
        fullText += '<span class="' + color + '">' + cnitems(item) + ':&nbsp;' + checkJobItem(what, false, item, true, toBuy) + '</span>, ';
    }
    fullText = fullText.slice(0, -2);
    return fullText;
}

function canAffordJob(what, take, workspaces, updatingLabel, fromAuto) {
	var ignoreWorkspaces = (game.jobs[what].allowAutoFire && ((game.options.menu.fireForJobs.enabled && updatingLabel) || fromAuto));
	if (workspaces <= 0 && !ignoreWorkspaces) return false;
    var trimps = game.resources.trimps;
	var toBuy = 1;
	if (game.global.buyAmt == "Max"){
		workspaces = Math.floor(workspaces * game.global.maxSplit);
		if (workspaces <= 0) workspaces++;
		if (!updatingLabel) toBuy = calculateMaxAfford(game.jobs[what], false, false, true);
	}
	else toBuy = game.global.buyAmt;
    if (!ignoreWorkspaces && workspaces >= 0 && workspaces < toBuy) toBuy = workspaces;
    if (!ignoreWorkspaces && (trimps.owned - trimps.employed - toBuy < 0)) return false;
    var job = game.jobs[what];
    for (var costItem in job.cost) {
        if (checkJobItem(what, take, costItem, null, toBuy) !== true) return false;
    }
	if (take) return toBuy;
    return true;
}

function checkJobItem(what, take, costItem, amtOnly, toBuy) {
    var job = game.jobs[what];
    var cost = job.cost[costItem];
    var price = 0;
	if (!toBuy) toBuy = game.global.buyAmt;
	if (typeof cost[1] !== 'undefined')
		price =  Math.floor((cost[0] * Math.pow(cost[1], job.owned)) * ((Math.pow(cost[1], toBuy) - 1) / (cost[1] - 1)));
	else
		price = cost * toBuy;
    if (amtOnly) {
		var percent;
		if (game.resources[costItem].owned < price){
			var thisPs = getPsString(costItem, true);
			if (thisPs > 0)
			{
				percent = calculateTimeToMax(null, thisPs, (price - game.resources[costItem].owned));
				percent = "(" + percent + ")";
			}
			else percent = "(<span class='icomoon icon-infinity'></span>)";
		}
		else{
			percent = (game.resources[costItem].owned > 0) ? prettify(((price / game.resources[costItem].owned) * 100).toFixed(1)) : 0;
			percent = "(" + percent + "%)";
		}
		return prettify(price) + "&nbsp;" + percent;
	}
    if (take) {
        game.resources[costItem].owned -= price;
        return true;
    }
	if (game.resources[costItem].max > 0 && getMaxForResource(costItem) < price){
		return 0;
	}
    if (game.resources[costItem].owned < price) {
        return false;
    }
    return true;
}

function canAffordCoordinationTrimps(){
	return (game.resources.trimps.realMax() >= (game.resources.trimps.getCurrentSend() * 3))
}

function buyUpgrade(what, confirmed, noTip, heldCtrl) {
	if (game.options.menu.pauseGame.enabled) return;
	if (!confirmed && !noTip && game.options.menu.lockOnUnlock.enabled == 1 && (new Date().getTime() - 1000 <= game.global.lastUnlock)) return;
    if (what == "Coordination") {
       if (!canAffordCoordinationTrimps()) return false;
    }
    var upgrade = game.upgrades[what];
	if (upgrade.locked == 1) return;
    var canAfford = canAffordTwoLevel(upgrade);
    if (!canAfford) return false;
	var usingCtrl = (typeof heldCtrl !== 'undefined') ? heldCtrl : (game.options.menu.ctrlGigas.enabled && what == "Gigastation") ? true : ctrlPressed;
	if (what == "Gigastation" && !confirmed && !noTip && game.options.menu.confirmhole.enabled){
		tooltip('Confirm Purchase', null, 'update', 'You are about to purchase a Gigastation, <b>which is not a renewable upgrade</b>. Make sure you have purchased all of the Warpstations you can afford first!', 'buyUpgrade(\'Gigastation\', true, false, ' + usingCtrl + ')');
		return;
	}
	if (what == "Shieldblock" && !confirmed && game.options.menu.confirmhole.enabled && game.global.highestLevelCleared >= 30){
		tooltip('Confirm Purchase', null, 'update', 'You are about to modify your Shield, causing it to block instead of grant health until your next portal. Are you sure?', 'buyUpgrade(\'Shieldblock\', true)');
		return;
	}
	canAfford = canAffordTwoLevel(upgrade, true);
    upgrade.fire(usingCtrl, noTip);
	upgrade.done++;
	if (upgrade.prestiges){
		var resName = (what == "Supershield") ? "wood" : "metal";
		upgrade.cost.resources[resName] = getNextPrestigeCost(what);
	}
	if ((upgrade.allowed - upgrade.done) <= 0) upgrade.locked = 1;
    var dif = upgrade.allowed - upgrade.done;
    if (dif > 1) {
		dif -= 1;
        document.getElementById(what + "Owned").innerHTML = upgrade.done + "(+" + dif + ")";
		if (!noTip) tooltip(what, "upgrades", "update");
        return true;
    } else if (dif == 1) {
		if (!noTip) tooltip(what, "upgrades", "update");
        document.getElementById(what + "Owned").innerHTML = upgrade.done;
        return true;
    }
    document.getElementById("upgradesHere").removeChild(document.getElementById(what));
    if (!noTip) tooltip("hide");
	return true;
}

function getDesiredGenes(ovr){
	var breed_speed = 0.00085 * Math.pow(1.1,game.upgrades.Potency.done) * Math.pow(1.01,game.buildings.Nursery.owned) * (1 + 0.1*game.portal.Pheromones.level) * Math.pow(1.003,game.unlocks.impCount.Venimp);
	var maxGenes = (Math.floor(Math.log(12 * breed_speed * game.resources.trimps.owned / game.resources.trimps.soldiers) / -Math.log(0.98)));
	return maxGenes;
}

var DecimalBreed = Decimal.clone({precision: 30, rounding: 4});
var missingTrimps = new DecimalBreed(0);
function breed() {
    var trimps = game.resources.trimps;
	checkAchieve("trimps", trimps.owned);
    
	var trimpsMax = trimps.realMax();
	var maxBreedable = new DecimalBreed(trimpsMax).minus(trimps.employed);
	var decimalOwned = missingTrimps.add(trimps.owned);
	var breeding = decimalOwned.minus(trimps.employed);
    if (breeding.cmp(2) == -1 || game.global.challengeActive == "Trapper") {
        updatePs(0, true);
		document.getElementById("trimpsTimeToFill").innerHTML = "";
        return;
	}
	var potencyMod = new DecimalBreed(trimps.potency);
	//Add potency (book)
	if (game.upgrades.Potency.done > 0) potencyMod = potencyMod.mul(Math.pow(1.1, game.upgrades.Potency.done));
	//Add Nurseries
	if (game.buildings.Nursery.owned > 0) potencyMod = potencyMod.mul(Math.pow(1.01, game.buildings.Nursery.owned));
	//Add Venimp
	if (game.unlocks.impCount.Venimp > 0) potencyMod = potencyMod.mul(Math.pow(1.003, game.unlocks.impCount.Venimp));
	//Broken Planet
	if (game.global.brokenPlanet) potencyMod = potencyMod.div(10);
	//Pheromones
	potencyMod = potencyMod.mul(1+ (game.portal.Pheromones.level * game.portal.Pheromones.modifier));

	//Quick Trimps
	if (game.singleRunBonuses.quickTrimps.owned) potencyMod = potencyMod.mul(2);
	//Challenges
	if (game.global.challengeActive == "Daily"){
		if (typeof game.global.dailyChallenge.dysfunctional !== 'undefined'){
			potencyMod = potencyMod.mul(dailyModifiers.dysfunctional.getMult(game.global.dailyChallenge.dysfunctional.strength));
		}
		if (typeof game.global.dailyChallenge.toxic !== 'undefined'){
			potencyMod = potencyMod.mul(dailyModifiers.toxic.getMult(game.global.dailyChallenge.toxic.strength, game.global.dailyChallenge.toxic.stacks));
		}
	}
	if (game.global.challengeActive == "Toxicity" && game.challenges.Toxicity.stacks > 0){
		potencyMod = potencyMod.mul(Math.pow(game.challenges.Toxicity.stackMult, game.challenges.Toxicity.stacks));
	}
	if (game.global.voidBuff == "slowBreed"){
		potencyMod = potencyMod.mul(0.2);
	} 
	potencyMod = calcHeirloomBonusDecimal("Shield", "breedSpeed", potencyMod);
	//console.log(getDesiredGenes(potencyMod.toNumber()));

	//Geneticist
	if (game.jobs.Geneticist.owned > 0) potencyMod = potencyMod.mul(Math.pow(.98, game.jobs.Geneticist.owned));
	
	breeding = potencyMod.mul(breeding);
    updatePs(breeding.toNumber(), true);
	potencyMod = potencyMod.div(10).add(1);
	var timeRemaining = DecimalBreed.log10(maxBreedable.div(decimalOwned.minus(trimps.employed))).div(DecimalBreed.log10(potencyMod)).div(10);
	
	//Calculate full breed time
	var fullBreed = "";
	var currentSend = game.resources.trimps.getCurrentSend();
	var totalTime = DecimalBreed.log10(maxBreedable.div(maxBreedable.minus(currentSend))).div(DecimalBreed.log10(potencyMod)).div(10);
	//breeding, potencyMod, timeRemaining, and totalTime are DecimalBreed
	game.global.breedTime = currentSend / breeding.toNumber();
	if (game.jobs.Geneticist.locked == false && game.global.Geneticistassist && game.global.GeneticistassistSetting > 0){
		var target = new Decimal(game.global.GeneticistassistSetting);
		//tired of typing Geneticistassist
		var GAElem = document.getElementById('Geneticistassist');
		var GAIndicator = document.getElementById('GAIndicator');
		var canRun = false;
		var now = new Date().getTime();
		if (lastGAToggle == -1) canRun = true;
		else if (new Date().getTime() > lastGAToggle + 2000){
			lastGAToggle = -1;
			canRun = true;
		}
		if (GAElem && canRun){
			var thresh = new DecimalBreed(totalTime.mul(0.02));
			var compareTime;
			if (timeRemaining.cmp(1) > 0 && timeRemaining.cmp(target.add(1)) > 0){
				compareTime = new DecimalBreed(timeRemaining.add(-1));
			}
			else {
				compareTime = new DecimalBreed(totalTime);
			}
			if (!thresh.isFinite()) thresh = new Decimal(0);
			if (!compareTime.isFinite()) compareTime = new Decimal(999);
			var genDif = new DecimalBreed(Decimal.log10(target.div(compareTime)).div(Decimal.log10(1.02))).ceil();

			if (compareTime.cmp(target) < 0) {
				swapClass("state", "stateHiring", GAElem);
				if (game.resources.food.owned * 0.01 < getNextGeneticistCost()){
					GAIndicator.innerHTML = " (<span style='font-size: 0.8em' class='glyphicon glyphicon-apple'></span>)";
				}
				else if (timeRemaining.cmp(1) < 0 || target.minus((now - game.global.lastSoldierSentAt) / 1000).cmp(timeRemaining) > 0){
					if (genDif.cmp(0) > 0){
						if (genDif.cmp(10) > 0) genDif = new Decimal(10);
						addGeneticist(genDif.toNumber());
					}
					GAIndicator.innerHTML = " (+)";
				}
				else GAIndicator.innerHTML = " (<span style='font-size: 0.8em' class='icmoon icon-clock3'></span>)";
			}
			else if (compareTime.add(thresh.mul(-1)).cmp(target) > 0  || (potencyMod.cmp(1) == 0)){
				if (!genDif.isFinite()) genDif = new Decimal(-1);
				swapClass("state", "stateFiring", GAElem);
				GAIndicator.innerHTML = " (-)";
				if (genDif.cmp(0) < 0 && game.options.menu.gaFire.enabled != 2){
					if (genDif.cmp(-10) < 0) genDif = new Decimal(-10);
					removeGeneticist(genDif.abs().toNumber());
				}
			}
			else {
				swapClass("state", "stateHappy", GAElem);
				GAIndicator.innerHTML = "";
			}
			
		}
	}
	
	timeRemaining = timeRemaining.toNumber();
	totalTime = totalTime.toNumber();
	decimalOwned = decimalOwned.add(breeding.div(10));
	timeRemaining = (game.options.menu.showFullBreed.enabled > 0) ? timeRemaining.toFixed(1) : Math.ceil(timeRemaining);
	var remainingTime = timeRemaining;
	timeRemaining += " 秒";
		//Display full breed time if desired
	var totalTimeText = Math.ceil(totalTime * 10) / 10;
	if (game.options.menu.showFullBreed.enabled){
		fullBreed = totalTimeText + " 秒";
		timeRemaining += " / " + fullBreed;
	}

	if (decimalOwned.cmp(trimpsMax) >= 0 && trimps.owned >= trimpsMax) {
		trimps.owned = trimpsMax;
		missingTrimps = new DecimalBreed(0);
		var updateGenes = false;
		if (game.options.menu.geneSend.enabled == 3 && game.global.lastBreedTime / 1000 < game.global.GeneticistassistSetting){
			game.global.lastBreedTime += 100;
			if (remainingTime == 0.0)
				updateGenes = true;
		}
		document.getElementById("trimpsTimeToFill").innerHTML = (fullBreed) ? fullBreed : "";
		if (updateGenes || (!game.global.fighting && totalTimeText == "0.0")){
			updateStoredGenInfo(breeding.toNumber());
		}
        return;
    }
	document.getElementById("trimpsTimeToFill").innerHTML = timeRemaining;
	var oldTrimps = trimps.owned;
	trimps.owned = decimalOwned.toNumber();
	if (decimalOwned.cmp(trimps.owned) != 0 && breeding.cmp(0) > 0){
		missingTrimps = decimalOwned.minus(trimps.owned);
	}
	else {
		missingTrimps = new DecimalBreed(0);
	}
	if (trimps.owned >= trimpsMax) trimps.owned = trimpsMax;
	else game.global.realBreedTime += 100;
	game.global.lastBreedTime += 100;
	updateStoredGenInfo(breeding);
}

function updateStoredGenInfo(breeding){
	if (game.jobs.Geneticist.locked == 0) {
		if (game.global.breedBack > 0) game.global.breedBack -= breeding / game.settings.speed;
		if (game.global.lowestGen == -1) game.global.lowestGen = game.jobs.Geneticist.owned;
		else if (game.jobs.Geneticist.owned < game.global.lowestGen) game.global.lowestGen = game.jobs.Geneticist.owned;
	}
}

var lastGAToggle = -1;
var GATimeout;
function toggleGeneticistassist(updateOnly){
	if (ctrlPressed && !updateOnly) {
		cancelTooltip();
		tooltip('Geneticistassist Settings', null, 'update');
		return;
	}
	var steps = game.global.GeneticistassistSteps;
	var currentStep = steps.indexOf(game.global.GeneticistassistSetting);
	var indicatorElem = document.getElementById('GAIndicator');
	if (indicatorElem == null) return;
	if (currentStep == -1){
		game.global.GeneticistassistSetting = steps[0];
		updateOnly = true;
	}
	indicatorElem.innerHTML = "";
	if (!updateOnly){
		currentStep++;
		if (currentStep > (steps.length - 1)) currentStep = 0;
		game.global.GeneticistassistSetting = steps[currentStep];
		if (currentStep > 0){
			indicatorElem.innerHTML = ' (2)';
			clearTimeout(GATimeout);
			GATimeout = setTimeout(function(){ indicatorElem.innerHTML = ' (1)' }, 1000);
			lastGAToggle = new Date().getTime();
		}
		else {lastGAToggle = -1; clearTimeout(GATimeout)};
	}
	var elem = document.getElementById('Geneticistassist');
	if (ctrlPressed) swapClass("thingColor", "thingColorCtrl", elem);
	else swapClass("thingColor", "thingColorNone", elem);
	currentStep = steps[currentStep];
	var text = "";
	if (currentStep == -1) {
		text = "禁用";
		swapClass("state", "stateDanger", elem);
	}
	else text = "<span class='icomoon icon-target'></span> " + currentStep + " 秒" + ((currentStep > 1) ? "" : "");
	document.getElementById("GeneticistassistSetting").innerHTML = text;
}

function customizeGATargets(){
	var error = "";
	var toKeep = [-1];
	var disableCheck = document.getElementById('disableOnUnlockCheck');
	if (disableCheck != null){
		var checked = readNiceCheckbox(disableCheck);
		game.options.menu.GeneticistassistTarget.disableOnUnlock = checked;
		if (checked && game.jobs.Geneticist.locked) game.global.GeneticistassistSetting = -1;
	}
	for (var x = 1; x <= 3; x++){
		var elem = document.getElementById('target' + x);
		if (!elem) {
			error = "Unable to pull info from input boxes. Try saving and refreshing?";
			break;
		}
		var val = parseFloat(elem.value);
		if (toKeep.indexOf(val) != -1) {
			error = val + " cannot be used twice. Please choose unique numbers!";
			break;
		}
		if (isNumberBad(val)){
			error = elem.value + " seconds would be really difficult to target. Could you pick a slightly more... numerical number?";
			break;
		}
		if (val < 0.5) {
			error = "All numbers must be greater than 0.5. " + elem.value + " is not.";
			break;
		}
		toKeep.push(val);
	}
	if (error){
		document.getElementById("GATargetError").innerHTML = error;
		return;
	}
	var currentStep = game.global.GeneticistassistSteps.indexOf(game.global.GeneticistassistSetting);
	if (currentStep == -1) currentStep = 0;
	cancelTooltip();
	game.global.GeneticistassistSteps = toKeep;
	game.global.GeneticistassistSetting = toKeep[currentStep];
	toggleGeneticistassist(true);
}

function log10(val) {
  return Math.log(val) / Math.LN10;
}

function testGymystic(oldPercent) {
	var number = game.buildings.Gym.increase.by;
	game.buildings.Gym.increase.by *= Math.pow(1 - oldPercent, game.buildings.Gym.owned);

	game.buildings.Gym.increase.by *= Math.pow(game.upgrades.Gymystic.modifier, game.buildings.Gym.owned);
	game.global.block -= (game.buildings.Gym.increase.by - number) * game.buildings.Gym.owned;

}

function prestigeEquipment(what, fromLoad, noInc) {
    var equipment = game.equipment[what];
	if (!fromLoad && !noInc) equipment.prestige++;
	var resource = (what == "Shield") ? "wood" : "metal";
	var cost = equipment.cost[resource];
	var prestigeMod = 0;
	if (equipment.prestige >= 4) prestigeMod = (((equipment.prestige - 3) * 0.85) + 2);
	else prestigeMod = (equipment.prestige - 1);
    cost[0] = Math.round(equipment.oc * Math.pow(1.069, ((prestigeMod) * game.global.prestige.cost) + 1));
	var stat;
	if (equipment.blockNow) stat = "block";
	else stat = (typeof equipment.health !== 'undefined') ? "health" : "attack";
	if (!fromLoad) game.global[stat] -= (equipment[stat + "Calculated"] * equipment.level);
	if (!fromLoad) game.global.difs[stat] -= (equipment[stat + "Calculated"] * equipment.level);
    equipment[stat + "Calculated"] = Math.round(equipment[stat] * Math.pow(1.19, ((equipment.prestige - 1) * game.global.prestige[stat]) + 1));
	//No need to touch level if it's newNum
	if (fromLoad) return;
	equipment.level = 0;
	if (!noInc && !fromLoad) levelEquipment(what, 1);
    if (document.getElementById(what + "Numeral") !== null) document.getElementById(what + "Numeral").innerHTML = romanNumeral(equipment.prestige);
}

function getNextPrestigeCost(what){
	var equipment = game.equipment[game.upgrades[what].prestiges];
	var prestigeMod;
	var nextPrestigeCount = equipment.prestige + 1;
	if (nextPrestigeCount >= 4) prestigeMod = (((nextPrestigeCount - 3) * 0.85) + 2);
	else prestigeMod = (nextPrestigeCount - 1);
    return Math.round(equipment.oc * Math.pow(1.069, ((prestigeMod) * game.global.prestige.cost) + 1));
}

function getNextPrestigeValue(what){
	var name = game.upgrades[what].prestiges;
	var equipment = game.equipment[name];
	var stat;
	if (equipment.blockNow) stat = "block";
	else stat = (typeof equipment.health !== 'undefined') ? "生命" : "攻击";
	var toReturn = Math.round(equipment[stat] * Math.pow(1.19, ((equipment.prestige) * game.global.prestige[stat]) + 1));
	return prettify(toReturn) + " " + stat;
}

function getHighestPrestige(){
	var lowest = -1;
	for (var item in game.equipment) {
		var prestige = game.equipment[item].prestige;
		if (lowest == -1) lowest = prestige;
		else if (lowest < prestige) lowest = prestige;
	}
	return lowest;
}

function createMap(newLevel, nameOverride, locationOverride, lootOverride, sizeOverride,  difficultyOverride, setNoRecycle, messageOverride) {
    game.global.mapsOwned++;
    game.global.totalMapsEarned++;
    var world = (newLevel) ? newLevel : game.global.world;
	//(newLevel > 5 && newLevel <= game.global.world) ? newLevel : game.global.world;
    var mapName = getRandomMapName();
	mapName = mapName.split('.');
	var lootg = parseFloat(getRandomMapValue("loot"));
	if (game.singleRunBonuses.goldMaps.owned) lootg += 1;
	if (lootOverride && game.singleRunBonuses.goldMaps.owned) lootOverride += 1;
	if (typeof mapName[1] === 'undefined') mapName[1] = "All";
	if (nameOverride) mapName[0] = nameOverride;
	else world += getExtraMapLevels();
	var mapDifficulty = (difficultyOverride) ? difficultyOverride : getRandomMapValue("difficulty");
	if (game.global.challengeActive == "Mapocalypse") mapDifficulty = parseFloat(mapDifficulty) + game.challenges.Mapocalypse.difficultyIncrease;
    var newMap = {
        id: "map" + game.global.totalMapsEarned,
        name: mapName[0],
		location: (locationOverride) ? locationOverride : mapName[1],
        clears: 0,
        level: world,
        difficulty: mapDifficulty,
        size: (sizeOverride) ? sizeOverride : Math.floor(getRandomMapValue("size")),
		loot: (lootOverride) ? lootOverride : lootg,
		noRecycle: setNoRecycle ? true : false
	};
	var maxLoot = getMapMinMax('loot', 0)[1];
	if (game.singleRunBonuses.goldMaps.owned) maxLoot++;
	if (!nameOverride && newMap.difficulty == getMapMinMax('difficulty', 0)[0] && newMap.size == getMapMinMax('size', 0)[0] && newMap.loot == maxLoot)
		giveSingleAchieve('Maptastic')
	if (newMap.location == 'Plentiful' && game.global.decayDone){
		newMap.loot += .25;
	}
	var specialModifier = getSpecialModifierSetting();
	if (!nameOverride && specialModifier != "0"){
		newMap.bonus = specialModifier;
	}
	if (locationOverride == "Bionic" && game.talents.bionic.purchased){
		newMap.bonus = "fa";
	}
	game.global.mapsOwnedArray.push(newMap);
    if (!messageOverride) message("你制作了 " + mapName[0] + "!", "Loot", "th-large", null, 'secondary');
    unlockMap(game.global.mapsOwnedArray.length - 1);
}

function checkMapLevelInput(elem){
	var value = parseInt(elem.value, 10);
	if (isNaN(value)) elem.value = game.global.world;
	if (value < 6) elem.value = 6;
	if (value > game.global.world) elem.value = game.global.world;
	updateMapCost();
}

function incrementMapLevel(amt){
	var elem = document.getElementById("mapLevelInput");
	var newNum = parseInt(elem.value, 10) + amt;
	if (newNum < 6 || isNaN(newNum)) elem.value = 6;
	else if (newNum > game.global.world) elem.value = game.global.world;
	else elem.value = newNum;
	updateMapCost();
	hideAdvMaps(true);
}

function saveAdvMaps(){
	var preset = getMapPreset();
	preset.loot = getMapSliderValue('loot');
	preset.size = getMapSliderValue('size');
	preset.difficulty = getMapSliderValue('difficulty');
	preset.biome = getMapBiomeSetting();
	preset.specMod = getSpecialModifierSetting();
	preset.perf = checkPerfectChecked();
	preset.extra = getExtraMapLevels();
	preset.offset = getMapZoneOffset();
}

function getMapPreset(){
	return game.global.mapPresets["p" + game.global.selectedMapPreset];
}

function selectAdvMapsPreset(num){
	game.global.selectedMapPreset = num;
	resetAdvMaps();
}

function updatePresetColor(){
	for (var x = 1; x <= 3; x++){
		var elem = document.getElementById("advMapsPreset" + x);
		var newClass = (game.global.selectedMapPreset == x) ? "presetSelectionOn" : "presetSelectionOff";
		swapClass("presetSelection", newClass, elem);
	}
}

function getMapZoneOffset(){
	var worldInput = (parseInt(document.getElementById('mapLevelInput').value, 10));
	var offset = worldInput - game.global.world;
	return offset;
}

function resetAdvMaps(fromClick) {
	//if !fromClick, loads saved map settings. Otherwise resets to 0
	var preset = getMapPreset();
	//level
	var levelValue = game.global.world;
	if (!fromClick && preset.offset != 'd') levelValue += preset.offset;
	if (fromClick) preset.offset = 'd';
	document.getElementById("mapLevelInput").value = levelValue;
	//sliders
	var inputs = ["loot", "difficulty", "size"];
	for (var x = 0; x < inputs.length; x++){
		var thisVal = (!fromClick && preset[inputs[x]]) ? preset[inputs[x]] : 0;
		document.getElementById(inputs[x] + "AdvMapsRange").value = thisVal;
	}
	//biome
	var biomeElem = document.getElementById("biomeAdvMapsSelect");
	if (game.global.decayDone && document.getElementById('gardenOption') === null) 
		biomeElem.innerHTML += "<option id='gardenOption' value='Plentiful'>花园</option>";
	biomeElem.value = (preset.biome && !fromClick) ? preset.biome : "Random";
	//bottom row
	hideAdvMaps(true);
	document.getElementById('advSpecialSelect').value = (!fromClick && preset.specMod) ? preset.specMod : "0";
	swapNiceCheckbox(document.getElementById('advPerfectCheckbox'), (!fromClick && preset.perf));
	document.getElementById('advExtraLevelSelect').value = (!fromClick && preset.extra > 0) ? preset.extra.toString() : "0";
	updatePresetColor();
	updateMapNumbers();
}

function updateMapNumbers(){
	adjustMap('loot', getMapSliderValue('loot'));
	adjustMap('difficulty', getMapSliderValue('difficulty'));
	adjustMap('size', getMapSliderValue('size'));
	updateMapCost();
}


function hideAdvMaps(displayOnly, hideForVoid){
	if (!displayOnly) game.global.hideMapRow = !game.global.hideMapRow;
	var hidden = (hideForVoid) ? true : game.global.hideMapRow;
	document.getElementById('advMapsHideBtn').className = (hidden) ? "icomoon icon-plus-circle pointer" : "icomoon icon-minus-circle pointer";
	document.getElementById('advMapsRow').style.display = (hidden) ? "none" : "block";
	document.getElementById('mapsCreateRow').style.paddingBottom = (hidden) ? "1vw" : "0";
	var maps2 = checkAdvMaps2(hidden);
	var mapSize = (hidden) ? "0" : ((maps2) ? "2" : "1");
	swapClass('mapSize', 'mapSize' + mapSize, document.getElementById('mapsHere'));
}

function checkAdvMaps2(hidden){
	var elem2 = document.getElementById('advMapsRow2');
	var elem = document.getElementById('advMapsRow');
	var enabled2 = (game.global.highestLevelCleared >= 59);
	if (hidden){
		elem2.style.display = 'none';
		return false;
	}
	if (!enabled2) {
		elem.style.paddingBottom = '1vw';
		elem2.style.display = 'none';
		return false;
	}
	document.getElementById('advPerfectLocked').style.display = (game.global.highestLevelCleared >= 109) ? 'none' : 'block';
	document.getElementById('advPerfectUnlocked').style.display = (game.global.highestLevelCleared >= 109) ? 'block' : 'none';
	document.getElementById('advExtraLevelLocked').style.display = (game.global.highestLevelCleared >= 209) ? 'none' : 'block';
	document.getElementById('advExtraLevelUnlocked').style.display = (game.global.highestLevelCleared >= 209) ? 'block' : 'none';
	if (game.global.highestLevelCleared >= 209) setAdvExtraZoneText();
	if (game.global.highestLevelCleared >= 109) checkSlidersForPerfect();
	populateSpecialModifiers();
	elem2.style.display = 'block';
	elem.style.paddingBottom = '0.5vw';
	return true;
}

function populateSpecialModifiers(){
	var elem = document.getElementById('advSpecialSelect');
	var setting = elem.value;
	if (!setting) setting = "0";
	elem.innerHTML = "";
	var newOptions = "<option value='0'>No Modifier</option>";
	for (var item in mapSpecialModifierConfig){
		var bonusItem = mapSpecialModifierConfig[item];
		if (game.global.highestLevelCleared + 1 < bonusItem.unlocksAt){
			break;
		}
		newOptions += "<option value='" + item + "'>" + bonusItem.name + "</option>";
	}
	elem.innerHTML = newOptions;
	elem.value = setting;
}

function setAdvExtraZoneText(){
	var enabled = (parseInt(document.getElementById('mapLevelInput').value, 10) == game.global.world);
	var elem = document.getElementById('advExtraLevelSelect');
	elem.style.display = enabled ? 'inline-block' : 'none';
	if (!enabled) return;
	if (elem.innerHTML == ""){
		var text = ""
		for (var x = 0; x <= 10; x++){
			var className = (affordMaxLevelsPerfect(x)) ? "mapExtraAfford1" : ((affordMaxLevelsCheap(x) ? "mapExtraAfford2" : "mapExtraNoAfford"));
			text += '<option class="' + className + '" id="advExtra' + x + '" value="'+ x + '">+' + x + '</option>';
		}
		elem.innerHTML = text;
	}
	for (var x = 0; x <= 10; x++){
		document.getElementById("advExtra" + x).innerHTML = "+" + x + " (区域 " + (game.global.world + x) + ")";
	}
}

function updateExtraLevelColors(){
	for (var x = 0; x <= 10; x++){
		var elem = document.getElementById('advExtra' + x);
		if (!elem) continue;
		var className = (affordMaxLevelsPerfect(x)) ? "mapExtraAfford1" : ((affordMaxLevelsCheap(x) ? "mapExtraAfford2" : "mapExtraNoAfford"));
		swapClass('mapExtra', className, elem);
	}
}

function affordMaxLevelsPerfect(levels){
	var baseCost = 0;
	baseCost += 27; //sliders
	baseCost *= (game.global.world >= 60) ? 0.74 : 1;
	baseCost += 6; //perfect checkbox
	if (levels > 0) baseCost += (10 * levels);
	if (game.resources.fragments.owned >= updateMapCost(true, baseCost)) return true;
	return false;
}

function affordMaxLevelsCheap(levels){
	var baseCost = 0;
	if (levels > 0) baseCost += (10 * levels);
	if (game.resources.fragments.owned >= updateMapCost(true, baseCost)) return true;
	return false;
}

function getMapSliderValue(what){
	//returns 0-9 as an int
	var val = parseInt(document.getElementById(what + "AdvMapsRange").value, 10);
	if (val >= 0 && val <= 9)
		return val;
	return 0
}

function getMapBiomeSetting(){
	//returns a biome or "Random" as a string
	var val = document.getElementById("biomeAdvMapsSelect").value;
	if (!val) return "Random";
	return val;
}

function getSpecialModifierSetting(){
	//Returns either "0" or the name of the object in mapSpecialModifierConfig
	if (game.global.highestLevelCleared < 59) return "0";
	var setting = document.getElementById('advSpecialSelect').value;
	if (!setting) return "0";
	return setting;
}

function checkPerfectChecked(){
	//Returns true or false
	if (game.global.highestLevelCleared < 109) return false;
	if (!checkSlidersForPerfect()) return false;
	return (readNiceCheckbox(document.getElementById('advPerfectCheckbox')));
}

function getExtraMapLevels(){
	//Returns an int, 0-10
	if (game.global.highestLevelCleared < 209) return 0;
	if (parseInt(document.getElementById('mapLevelInput').value, 10) != game.global.world) return 0;
	var value = document.getElementById('advExtraLevelSelect').value;
	if (!value) return 0;
	return parseInt(value, 10);
}

function checkSlidersForPerfect(){
	var enabled = checkMaxSliders();
	document.getElementById('advPerfectCheckbox').style.display = (enabled) ? 'inline-block' : 'none';
	return enabled;
}

function adjustMap(what, value) {
	var minMax = getMapMinMax(what, value);
	if (what != "size") {
		minMax[0] = Math.floor(minMax[0] * 100) + "%";
		minMax[1] = Math.floor(minMax[1] * 100) + "%";
	}
	var text = "";
	if (checkPerfectChecked())
		text = (what == "loot") ? minMax[1] : minMax[0];
	else 
		text = "Min " + minMax[0] + ", Max " + minMax[1];
	document.getElementById(what + "AdvMapsText").innerHTML = text;
	updateMapCost();
	hideAdvMaps(true);
}

function initializeInputText() {
	adjustMap('loot', 0);
	adjustMap('size', 0);
	adjustMap('difficulty', 0);
}

var mapSpecialModifierConfig = {
	fa: {
		name: "Fast Attacks",
		unlocksAt: 60,
		get description(){
			var text = "这张地图上的所有攻击速度都要快100毫秒。";
			if (game.talents.hyperspeed2.purchased) text += " <span style='color: red'>Does not stack with Hyperspeed II</span>";
			return text;
		},
		costIncrease: 7,
		abv: "FA"
	},
	lc: {
		name: "Large Cache",
		unlocksAt: 60,
		description: "在每次完成此地图时，随机获得食物、木头或金属的20秒产量。",
		costIncrease: 7,
		cache: true,
		onCompletion: function (){
			cacheReward("random", 20, this.name);
		},
		abv: "LC"
	},
	ssc: {
		name: "Small Savory Cache",
		unlocksAt: 85,
		description: "每次完成这张地图，你就能获得10秒的食物产量。",
		costIncrease: 10,
		cache: true,
		onCompletion: function () {
			cacheReward("food", 10, this.name);
		},
		abv: "SSC"
	},
	swc: {
		name: "Small Wooden Cache",
		unlocksAt: 85,
		description: "每次完成这张地图，你都可以获得10秒的木材产量。",
		costIncrease: 10,
		cache: true,
		onCompletion: function () {
			cacheReward("wood", 10, this.name);
		},
		abv: "SWC"
	},
	smc: {
		name: "Small Metal Cache",
		unlocksAt: 85,
		description: "每次完成这张地图，你都可以获得10秒钟的金属产量。",
		costIncrease: 10,
		cache: true,
		onCompletion: function () {
			cacheReward("metal", 10, this.name);
		},
		abv: "SMC"
	},
	p: {
		name: "Prestigious",
		unlocksAt: 135,
		description: "这张地图可以有两种不同的装备声望升级，如果有两种的话。",
		costIncrease: 10,
		abv: "P"
	},
	hc: {
		name: "Huge Cache",
		unlocksAt: 160,
		description: "Earn 40 seconds of production for either food, wood, or metal at random each time you complete this map.",
		costIncrease: 14,
		cache: true,
		onCompletion: function () {
			cacheReward("random", 40, this.name);
		},
		abv: "HC"
	},
	lsc: {
		name: "Large Savory Cache",
		unlocksAt: 185,
		description: "Earn 20 seconds of food production each time you complete this map.",
		costIncrease: 18,
		cache: true,
		onCompletion: function () {
			cacheReward("food", 20, this.name);
		},
		abv: "LSC"
	},
	lwc: {
		name: "Large Wooden Cache",
		unlocksAt: 185,
		description: "Earn 20 seconds of wood production each time you complete this map.",
		costIncrease: 18,
		cache: true,
		onCompletion: function () {
			cacheReward("wood", 20, this.name);
		},
		abv: "LWC"
	},
	lmc: {
		name: "Large Metal Cache",
		unlocksAt: 185,
		description: "Earn 20 seconds of metal production each time you complete this map.",
		costIncrease: 18,
		cache: true,
		onCompletion: function () {
			cacheReward("metal", 20, this.name);
		},
		abv: "LMC"
	}
};

function cacheReward(resourceName, time, cacheName){
	if (resourceName == "random"){
		var eligible = ["food", "wood", "metal"];
		var roll = Math.floor(Math.random() * eligible.length);
		resourceName = eligible[roll];
	}
	var amt = simpleSeconds(resourceName, time);
	amt = scaleToCurrentMap(amt, false, !game.global.canScryCache);
	addResCheckMax(resourceName, amt, null, null, true);
	message("你在地图的终点打开了 " + cacheName + " 去寻找 " + prettify(amt) + " " + resourceName + "!", "Loot", "*dice", null, "cache");
	if (Fluffy.isRewardActive("lucky")){
		if (Math.floor(Math.random() * 100) < 25) {
			addResCheckMax(resourceName, amt, null, null, true);
			message("蓬松发现了另一个 " + cacheName + " 和另外一个 " + prettify(amt) + " " + resourceName + "!", "Loot", "*dice", null, "cache");
		}
	}
}

function updateMapCost(getValue, forceBaseCost){
	var mapLevel =  parseInt(document.getElementById("mapLevelInput").value, 10);
	var baseCost = 0;
	if (mapLevel > game.global.world || mapLevel < 6 || isNaN(mapLevel)) return;
	if (getValue && forceBaseCost != null){
		baseCost = forceBaseCost;
	}
	else{
		//Sliders: 27 total * 0.74 = ~20
		baseCost += getMapSliderValue("size");
		baseCost += getMapSliderValue("loot");
		baseCost += getMapSliderValue("difficulty");
		baseCost *= (game.global.world >= 60) ? 0.74 : 1;
		//Perfect Checkbox
		if (checkPerfectChecked()){
			baseCost += 6;
		}
		//Extra Levels
		var extraLevels = getExtraMapLevels();
		if (extraLevels > 0){
			baseCost += (10 * extraLevels);
		}
	}
	//Special Modifier
	var specialModifier = getSpecialModifierSetting();
	if (specialModifier != "0"){
		baseCost += mapSpecialModifierConfig[specialModifier].costIncrease;
	}
	baseCost += mapLevel;
	baseCost = Math.floor((((baseCost / 150) * (Math.pow(1.14, baseCost - 1))) * mapLevel * 2) * Math.pow((1.03 + (mapLevel / 50000)), mapLevel));
	if (document.getElementById("biomeAdvMapsSelect").value != "Random") baseCost *= 2;
	if (getValue) return baseCost;
	document.getElementById("mapCostFragmentCost").innerHTML = prettify(baseCost);
	if (game.global.highestLevelCleared >= 209) updateExtraLevelColors();
}

function checkMaxSliders(){
	var total = getMapSliderValue("size") + getMapSliderValue("loot") + getMapSliderValue("difficulty");
	if (total == 27) return true;
	return false;
}


function getRandomMapValue(what) { //sliders only. what can be loot, size or difficulty;
	var advValue = getMapSliderValue(what);
	if (advValue > 9) advValue = 9;
	else if (advValue < 0) advValue = 0;
	var minMax = getMapMinMax(what, advValue);
	var min = minMax[0];
	var max = minMax[1];
	if (checkPerfectChecked()) {
		if (what == "loot") return max;
		return min;
	}
	min *= 100;
	max *= 100;
	var x;
	var x = Math.floor(Math.random() * (max + 1 - min)) + min;
	return (x / 100).toFixed(3)
}

function getMapMinMax(what, value){
	var base = game.mapConfig[what + "Base"];
	var range = game.mapConfig[what + "Range"];
	if (what == "size" && game.talents.mapLoot2.purchased) base -= 5;
	var minMax = [base - range, base + range];
	if (what == "loot"){
		minMax[0] += ((range / 5) * value);
	}
	else{
		minMax[1] -= ((range / 5) * value);
		if (what == "size") minMax[1] = Math.floor(minMax[1]);
	}
	return minMax;
}

function buyMap() {
	if (game.options.menu.pauseGame.enabled == 1) return;
	var cost = updateMapCost(true);
	var newLevel = parseInt(document.getElementById("mapLevelInput").value, 10);
	if (!newLevel || newLevel <= 5 || newLevel > game.global.world || isNaN(newLevel) || isNaN(cost)) {
		message("你必须在第6级和你的最高区域之间创建一张地图， " + game.global.world + ".", "Notices");
		return -1;
	}
	if (cost > 0 && game.resources.fragments.owned >= cost){
		if (game.global.mapsOwnedArray.length >= 100) {
			message("哇，地图真多啊。你可以肯定，如果你再多做一些，你的科学家就会失去它们。最好回收其中的一些，这对环境有好处。", "Notices");
			return -2;
		}
		game.resources.fragments.owned -= cost;
		createMap(newLevel);
		if (!game.global.currentMapId) selectMap(game.global.mapsOwnedArray[game.global.mapsOwnedArray.length - 1].id);
		return 1;
	}
	else message("你负担不起这张地图! 你需要 " + prettify(cost) + " 碎片。", "Notices");
	return -3;
}

function checkVoidMap() {
	if (game.global.totalPortals < 5) return;
	var dif = game.global.lastVoidMap;
	var max = game.global.voidMaxLevel;
	if (game.global.lastPortal != -1){
			if (game.global.voidMaxLevel < game.global.world){
				game.global.voidMaxLevel = game.global.world;
				if ((game.global.lastPortal + 25) < game.global.world)
					game.global.voidMaxLevel = game.global.highestLevelCleared;
			}
		if ((max - game.global.lastPortal) < 25) {
			max = game.global.lastPortal;
		}
	}
	if (max > 200) max = 200;
	var min = (max > 80) ? (1000 + ((max - 80) * 13)) : 1000;
	min *= (1 - (game.heirlooms.Shield.voidMaps.currentBonus / 100));
	min *= (1 - (game.goldenUpgrades.Void.currentBonus));
	var chance = (Math.floor((game.global.lastVoidMap - min) / 10) / 50000);
	game.global.lastVoidMap++;
	if (chance < 0) return;
	if (seededRandom(game.global.voidSeed++) >= chance) return;
	createVoidMap();
	game.global.lastVoidMap = 0;
	return 1;
}

function seededRandom(seed){
	var x = Math.sin(seed++) * 10000;
	return parseFloat((x - Math.floor(x)).toFixed(7));
}

function getRandomIntSeeded(seed, minIncl, maxExcl) {
	var toReturn = Math.floor(seededRandom(seed) * (maxExcl - minIncl)) + minIncl;
	return (toReturn === maxExcl) ? minIncl : toReturn;
}

function createVoidMap(forcePrefix, forceSuffix, skipMessage) {
	var prefixes = ['Deadly', 'Poisonous', 'Heinous', 'Destructive']; //Must match size of void specials
	var suffixes = ['Nightmare', 'Void', 'Descent', 'Pit'];
	//Size/loot/dif
	var profiles = [[100, 3, 4], [90, 2.5, 4], [100, 2.5, 3.5], [85, 2, 4.5]]; //If a difficulty below 3.5 or above 5.5 is ever added, don't forget to work something out with planetBreaker and buffVoidMaps first. Sorry! -Past you
	var voidSpecials = ['doubleAttack', 'slowBreed', 'getCrit', 'bleed'];
	game.global.totalMapsEarned++;
	var prefixNum = (forcePrefix && prefixes.indexOf(forcePrefix) >= 0) ? prefixes.indexOf(forcePrefix) : Math.floor(Math.random() * prefixes.length);
	var suffixNum = (forceSuffix && suffixes.indexOf(forceSuffix) >= 0) ? suffixes.indexOf(forceSuffix) : Math.floor(Math.random() * suffixes.length);
	profiles = profiles[suffixNum];
	if (game.global.world <= 59) {
		profiles[2] -= 2;
		profiles[1] -= 1;
	}
	if (game.global.challengeActive == "Mapocalypse") profiles[2] = profiles[2] + game.challenges.Mapocalypse.difficultyIncrease;
	var mapName = prefixes[prefixNum] + " " + suffixes[suffixNum];
	var stackedMap = false;
	var stackCount = Fluffy.getVoidStackCount();
	if (game.global.totalVoidMaps > 0 && stackCount > 1){
		for (var x = 0; x < game.global.mapsOwnedArray.length; x++){
			var newMap = game.global.mapsOwnedArray[x];
			if (newMap.location != "Void" || newMap.name != mapName || (newMap.stacked + 1) >= stackCount) continue;
			newMap.stacked = (newMap.stacked) ? newMap.stacked + 1 : 1;
			stackedMap = true;
			var mapElem = document.getElementById(newMap.id);
			if (mapElem){
				var innerElem = mapElem.getElementsByClassName('stackedVoids');
				if (innerElem.length){
					innerElem[0].innerHTML = "(x" + (newMap.stacked + 1) + ") ";
				}
			}
			break;
		}
	}
	if (!stackedMap){
		var map = ({
			id: "map" + game.global.totalMapsEarned,
			name: mapName,
			location: "Void",
			clears: 0,
			level: -1,
			size: profiles[0],
			loot: (game.singleRunBonuses.goldMaps.owned) ? (profiles[1] + 1) : profiles[1],
			difficulty: profiles[2],
			noRecycle: true,
			voidBuff: voidSpecials[prefixNum],
			stacked: 0
		});
		if (game.talents.voidPower3.purchased)
			map.bonus = 'fa';	
		game.global.mapsOwnedArray.push(map);
	}
	game.global.totalVoidMaps++;
	if (!skipMessage){
		message("A chill runs down your spine, and the Bad Guy quickly frosts over. A purple glow radiates from the ground in front of you, and a Void Map appears.", "Loot", "th-large", "voidMessage", 'secondary');
		addVoidAlert();
	}
	if (!stackedMap)
		unlockMap(game.global.mapsOwnedArray.length - 1);
	return mapName;
}

function buffVoidMaps(){
	var difficultyCap = 3.5;
	if (game.global.challengeActive == "Mapocalypse") {
		difficultyCap += 3;
	}
	for (var x = 0; x < game.global.mapsOwnedArray.length; x++){
		var map = game.global.mapsOwnedArray[x];
		if (map.location != "Void" || map.difficulty >= difficultyCap) continue;
		map.loot += 1;
		map.difficulty += 2;
	}
	refreshMaps();
	if (game.global.currentMapId === "") clearMapDescription();
}

function addVoidAlert(){
	if (game.global.switchToMaps || game.global.preMapsActive) return;
	var alert = document.getElementById('voidAlert')
	if (alert !== null) {
		alert.innerHTML = game.global.totalVoidMaps;
		return;
	}
	document.getElementById('mapsBtnText').innerHTML += ' <span id="voidAlert" class="alert badge">' + game.global.totalVoidMaps + '</span>';
}

var voidBuffConfig = {
		doubleAttack: {
			icon: 'icomoon icon-pushpin',
			text: '这个坏家伙攻击两次，一次在你之前，一次在你之后。',
			title: '虚空攻击',
		},
		slowBreed: {
			icon: 'icomoon icon-cloudy2',
			text: '这张地图将脆皮的繁殖速度降低了80％。',
			title: '虚空气体',
		},
		getCrit: {
			icon: 'icomoon icon-heart6',
			text: '这个坏家伙有25％的几率对你造成400％的额外伤害。',
			title: '虚空力量',
		},
		bleed: {
			icon: "icomoon icon-drop",
			text: '每次当这个坏家伙攻击时，你就会失去 <b>当前</b> 20％的生命。',
			title: '虚空流血',
		}
}

function setVoidBuffTooltip(){
	var buff = voidBuffConfig[game.global.voidBuff];
	var stackCount = "";
	var elem = document.getElementById('voidBuff');
	elem.innerHTML = '<span class="badge badBadge voidBadge" onmouseover="tooltip(\'' + buff.title + '\', \'customText\', event, \'' + buff.text + '\')" onmouseout="tooltip(\'hide\')"><span class="' + buff.icon + '"></span></span>&nbsp;';
}

var heirloomsShown = false;
var selectedMod;
function toggleHeirlooms(){
	heirloomsShown = !heirloomsShown;
	document.getElementById("heirloomWrapper").style.display = (heirloomsShown) ? "block" : "none";
	document.getElementById("wrapper").style.display = (heirloomsShown) ? "none" : "block";
	if (heirloomsShown) populateHeirloomWindow();
	else {
		game.global.selectedHeirloom = [];
		if (game.options.menu.autoSave.enabled == 1) save();
	}
}

function calcHeirloomBonusDecimal(type, name, number, getValueOnly){
	var mod = game.heirlooms[type][name];
	if (!mod) return number;
	if (getValueOnly) return mod.currentBonus;
	if (mod.currentBonus <= 0) return number;
	return number.mul((mod.currentBonus / 100) + 1);
}

function calcHeirloomBonus(type, name, number, getValueOnly){
	var mod = game.heirlooms[type][name];
	if (!mod) return number;
	if (getValueOnly) return mod.currentBonus;
	if (mod.currentBonus <= 0) return number;
	return (number * ((mod.currentBonus / 100) + 1));
}

function populateHeirloomWindow(){
	//Reset
	hideHeirloomSelectButtons();
	//Equipped hat
	document.getElementById("ShieldEquipped").innerHTML = generateHeirloomIcon(game.global.ShieldEquipped, "Equipped");
	document.getElementById("ShieldEquippedName").innerHTML = (typeof game.global.ShieldEquipped.name !== 'undefined') ? game.global.ShieldEquipped.name : "无.";
	//Equipped staff
	document.getElementById("StaffEquipped").innerHTML = generateHeirloomIcon(game.global.StaffEquipped, "Equipped");
	document.getElementById("StaffEquippedName").innerHTML = (typeof game.global.StaffEquipped.name !== 'undefined') ? game.global.StaffEquipped.name : "无.";
	displayAddCarriedBtn();
	displayCarriedHeirlooms();
	displayExtraHeirlooms();
	document.getElementById("nullifiumCount").innerHTML = prettify(game.global.nullifium);
	document.getElementById("recycleAllHeirloomsBtn").style.display = (game.global.heirloomsExtra.length) ? "inline-block" : "none";
	if (game.options.menu.showHeirloomAnimations.enabled){
		var fidgetSpinners = document.getElementsByClassName('heirloomRare8');
		for (var x = 0; x < fidgetSpinners.length; x++){
			fidgetSpinners[x].style.animationDelay = "-" + ((new Date().getTime() / 1000) % 30).toFixed(1) + "s";
		}
	}
}

function displayCarriedHeirlooms(){
	var tempHtml = "";
	for (var x = 0; x < game.global.heirloomsCarried.length; x++){
		if (game.global.heirloomsCarried[x] == null) {
			game.global.heirloomsCarried.splice(x, 1);
			x--;
			continue;
		}
		tempHtml += generateHeirloomIcon(game.global.heirloomsCarried[x], "Carried", x);
	}
	if (!tempHtml) tempHtml += "你没有携带任何传家宝";
	document.getElementById("carriedHeirloomsHere").innerHTML = tempHtml;
}

function getNextCarriedCost(){
	return (game.heirlooms.values[game.global.maxCarriedHeirlooms - 1] * 4);
}

function displayAddCarriedBtn(){
	var s = (game.global.maxCarriedHeirlooms > 1) ? "" : "";
	document.getElementById("carriedHeirloomsText").innerHTML = " - 通过传送门时你可以随身携带 <b>" + game.global.maxCarriedHeirlooms + "</b> 额外的传家宝" + s + "。";
	var elem = document.getElementById("addCarriedBtn");
	if (game.global.maxCarriedHeirlooms > game.heirlooms.values.length){
		elem.style.display = "none";
		return;
	}
	elem.style.display = "inline-block";
	var cost = getNextCarriedCost();
	elem.innerHTML = "添加插槽 (" + cost + " 虚空物质)";
	if (game.global.nullifium < cost) swapClass("heirloomBtn", "heirloomBtnInactive", elem);
	else swapClass("heirloomBtn", "heirloomBtnActive", elem);
}

function addCarried(confirmed){
	if (game.global.maxCarriedHeirlooms > game.heirlooms.values.length){
		elem.style.display = "none";
		return;
	}
	var cost = getNextCarriedCost();
	if (game.global.nullifium < cost) return;
	if (!confirmed) {
		tooltip('confirm', null, 'update', '你正要花费' + cost + '虚空物质，来增加一个额外的传家宝携带栏，以携带传家宝通过传送门。你确定吗？' , 'addCarried(true)', '升级携带栏');
		return;
	}
	game.global.nullifium -= cost;
	game.global.maxCarriedHeirlooms++;
	populateHeirloomWindow();
}

function toggleHeirloomHelp(){
	var elem = document.getElementById("heirloomHelp");
	elem.style.display = (elem.style.display == "block") ? "none" : "block";
}

function displayExtraHeirlooms(){
	var tempHtml = "";
	var extraExtraText = game.global.heirloomsExtra.length;
	if (!extraExtraText) {
		document.getElementById("extraHeirloomsHere").innerHTML = "你没有多余的传家宝。";
		document.getElementById("extraHeirloomsText").innerHTML = "";
		return;
	}
	for (var y = 0; y < extraExtraText; y++){
		tempHtml += generateHeirloomIcon(game.global.heirloomsExtra[y], "Extra", y);
	}
	document.getElementById("extraHeirloomsHere").innerHTML = tempHtml;
	var s = (extraExtraText > 1) ? "" : "";
	document.getElementById("extraHeirloomsText").innerHTML = " - " + extraExtraText + " 传家宝" + s + ", 回收可以得到 " + recycleAllExtraHeirlooms(true) + " Nu 在传送门";
	document.getElementById("recycleAllHeirloomsBtn").style.display = (game.global.heirloomsExtra.length) ? "inline-block" : "none";
	if (game.options.menu.showHeirloomAnimations.enabled){
		var fidgetSpinners = document.getElementById("extraHeirloomsHere").getElementsByClassName('heirloomRare8');
		for (var x = 0; x < fidgetSpinners.length; x++){
			fidgetSpinners[x].style.animationDelay = "-" + ((new Date().getTime() / 1000) % 30).toFixed(1) + "s";
		}
	}
}

function selectHeirloom(number, location, noScreenUpdate){
	hideHeirloomSelectButtons();
	game.global.selectedHeirloom = [number, location];
	if (!noScreenUpdate) populateHeirloomWindow();
	var heirloom = game.global[location];
	if (number > -1) heirloom = heirloom[number];
	switch (location){
		case "StaffEquipped":
		case "ShieldEquipped":
			document.getElementById("equippedHeirloomsBtnGroup").style.visibility = "visible";
			break;
		case "heirloomsCarried":
			document.getElementById("carriedHeirloomsBtnGroup").style.visibility = "visible";
			document.getElementById("equipHeirloomBtn").innerHTML = (typeof game.global[heirloom.type + "Equipped"].name === 'undefined') ? "装备" : "交换";
			break;
		case "heirloomsExtra":
			document.getElementById("extraHeirloomsBtnGroup").style.visibility = "visible";
			document.getElementById("equipHeirloomBtn2").innerHTML = (typeof game.global[heirloom.type + "Equipped"].name === 'undefined') ? "装备" : "交换";
			if (game.global.heirloomsCarried.length < game.global.maxCarriedHeirlooms) swapClass("heirloomBtn", "heirloomBtnActive", document.getElementById("carryHeirloomBtn"));
			document.getElementById("recycleHeirloomBtn").innerHTML = "回收 (+" + prettify(getTotalHeirloomRefundValue(heirloom)) + " Nullifium)";
			break;
	}
	displaySelectedHeirloom();
}

function recycleHeirloom(confirmed){
	var heirloom = getSelectedHeirloom();
	if (game.global.selectedHeirloom[0] == -1 || game.global.selectedHeirloom[1] == "heirloomsCarried") return;
	var value = Math.floor(getTotalHeirloomRefundValue(heirloom));
	if (!confirmed) {
		tooltip('confirm', null, 'update', '你正在回收 ' + heirloom.name + ' 以得到 ' + prettify(value) + ' 虚空物质。 你确定吗?' , 'recycleHeirloom(true)', 'Recycle Heirloom');
		return;
	}
	game.global.nullifium += value;
	game.global.heirloomsExtra.splice(game.global.selectedHeirloom[0], 1);
	populateHeirloomWindow();
}

function recycleAllExtraHeirlooms(valueOnly){
	var extraHeirlooms = game.global.heirloomsExtra;
	var value = 0;
	for (var item in extraHeirlooms){
		value += getTotalHeirloomRefundValue(extraHeirlooms[item]);
	}
	if (valueOnly) return value;
	game.global.nullifium += value;
	game.global.heirloomsExtra = [];
}

function recycleAllHeirloomsClicked(confirmed){
	if (!confirmed){
		var s = (game.global.heirloomsExtra.length == 1) ? "" : "s";
		var messageString = "You have " + game.global.heirloomsExtra.length + " extra Heirloom" + s + ", which will be recycled for " + prettify(recycleAllExtraHeirlooms(true)) + " Nullifium. Are you sure?";
		tooltip("confirm", null, "update", messageString, "recycleAllHeirloomsClicked(true)", "Recycle All Heirlooms");
		return;
	}
	recycleAllExtraHeirlooms();
	populateHeirloomWindow();
}

function recalculateHeirloomBonuses(){
	for (var item in game.heirlooms.Staff) game.heirlooms.Staff[item].currentBonus = 0;
	for (var item in game.heirlooms.Shield) game.heirlooms.Shield[item].currentBonus = 0;
	if (game.global.StaffEquipped){
		for (var item in game.global.StaffEquipped.mods){
			var mod = game.global.StaffEquipped.mods[item];
			game.heirlooms.Staff[mod[0]].currentBonus = mod[1];
		}
	}
	if (game.global.ShieldEquipped){
		for (var item in game.global.ShieldEquipped.mods){
			var mod = game.global.ShieldEquipped.mods[item];
			game.heirlooms.Shield[mod[0]].currentBonus = mod[1];
		}
	}
}


function unequipHeirloom(heirloom, toLocation, noScreenUpdate){
	if (!noScreenUpdate) cancelTooltip();
	if (!heirloom) heirloom = getSelectedHeirloom();
	if (!toLocation) toLocation = "heirloomsCarried";
	if (toLocation == "heirloomsCarried" && game.global.heirloomsCarried.length >= game.global.maxCarriedHeirlooms){
		tooltip("Unequip Heirloom", null, 'update');
		return;
	}
	game.global[heirloom.type + "Equipped"] = {};
	if (toLocation == "heirloomsCarried") game.global.heirloomsCarried.push(heirloom);
	else game.global.heirloomsExtra.push(heirloom);
	//Remove bonuses
	for (var item in game.heirlooms[heirloom.type]){
		game.heirlooms[heirloom.type][item].currentBonus = 0;
	}
	if (!noScreenUpdate) populateHeirloomWindow();

}

function equipHeirloom(noScreenUpdate){
	var heirloom = getSelectedHeirloom();
	if (heirloom == game.global.ShieldEquipped || heirloom == game.global.StaffEquipped) return;
	if (game.global.selectedHeirloom[1] == "heirloomsExtra") game.global.heirloomsExtra.splice(game.global.selectedHeirloom[0], 1);
	else game.global.heirloomsCarried.splice(game.global.selectedHeirloom[0], 1);
	if (typeof game.global[heirloom.type + "Equipped"].name !== 'undefined') unequipHeirloom(game.global[heirloom.type + "Equipped"], game.global.selectedHeirloom[1], noScreenUpdate);
	game.global[heirloom.type + "Equipped"] = heirloom;
	//Add bonuses
	for (var item in heirloom.mods){
		game.heirlooms[heirloom.type][heirloom.mods[item][0]].currentBonus += heirloom.mods[item][1];
	}
	if (!noScreenUpdate) populateHeirloomWindow();
	if (checkLowestHeirloom() >= 5) giveSingleAchieve("Swag");
	if (checkLowestHeirloom() >= 7) giveSingleAchieve("Swagmatic");
}

function checkLowestHeirloom(){
	if (typeof game.global.StaffEquipped.rarity === 'undefined' || typeof game.global.ShieldEquipped.rarity === 'undefined') return -1;
	var lowest = game.global.StaffEquipped.rarity;
	if (lowest > game.global.ShieldEquipped.rarity) lowest = game.global.ShieldEquipped.rarity;
	return lowest;
}

function carryHeirloom(){
	var heirloom = getSelectedHeirloom();
	if (game.global.heirloomsCarried.length >= game.global.maxCarriedHeirlooms) return;
	game.global.heirloomsExtra.splice(game.global.selectedHeirloom[0], 1);
	game.global.heirloomsCarried.push(heirloom);
	populateHeirloomWindow();
}

function stopCarryHeirloom(){
	var heirloom = getSelectedHeirloom();
	game.global.heirloomsCarried.splice(game.global.selectedHeirloom[0], 1);
	game.global.heirloomsExtra.push(heirloom);
	populateHeirloomWindow();
}

function getSelectedHeirloom(locationOvr, indexOvr){
	if (typeof locationOvr === 'undefined') locationOvr = game.global.selectedHeirloom[1];
	if (typeof indexOvr === 'undefined') indexOvr = game.global.selectedHeirloom[0];
	var heirloom = game.global[locationOvr];
	if (indexOvr > -1) heirloom = heirloom[indexOvr];
	return heirloom;
}

function hideHeirloomSelectButtons(){
	document.getElementById("equippedHeirloomsBtnGroup").style.visibility = "hidden";
	document.getElementById("carriedHeirloomsBtnGroup").style.visibility = "hidden";
	document.getElementById("extraHeirloomsBtnGroup").style.visibility = "hidden";
	swapClass("heirloomBtn", "heirloomBtnInactive", document.getElementById("carryHeirloomBtn"));
	document.getElementById("selectedHeirloom").innerHTML = "";
	document.getElementById("modBreakdown").style.display = "none";
}

function generateHeirloomIcon(heirloom, location, number){
	if (typeof heirloom.name === 'undefined') return "<span class='icomoon icon-sad3'></span>";
	var icon = (heirloom.type == "Shield") ? 'icomoon icon-shield3' : 'glyphicon glyphicon-grain';
	var animated = (game.options.menu.showHeirloomAnimations.enabled) ? "animated " : "";
	var html = '<span class="heirloomThing ' + animated + 'heirloomRare' + heirloom.rarity;
	if (location == "Equipped") html += ' equipped';
	var locText = "";
	if (location == "Equipped") locText += '-1,\'' + heirloom.type + 'Equipped\'';
	else locText += number + ', \'heirlooms' + location + '\'';
	html += '" onmouseover="tooltip(\'Heirloom\', null, event, null, ' + locText + ')" onmouseout="tooltip(\'hide\')" onclick="selectHeirloom(';
	html += locText + ', this)"> <span class="' + icon + '"></span></span>';
	return html;
}

function htmlEncode(text) {
	text = replaceAll(text, "&", "&amp;");
	text = replaceAll(text, "'", "&apos;");
	text = replaceAll(text, '"', "&quot;");
	text = replaceAll(text, "<", "&lt;");
	text = replaceAll(text, ">", "&gt;");
	return text;
}

//from stackoverflow.com/questions/1144783
function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

var lastDisplayedHeirloom = new Date().getTime();
function displaySelectedHeirloom(modSelected, selectedIndex, fromTooltip, locationOvr, indexOvr, fromPopup){
	if (fromPopup && !game.options.menu.voidPopups.enabled) return;
	var heirloom = getSelectedHeirloom(locationOvr, indexOvr);
	var icon = (heirloom.type == "Shield") ? 'icomoon icon-shield3' : 'glyphicon glyphicon-grain';
	var animated = (game.options.menu.showHeirloomAnimations.enabled) ? "animated " : "";
	var html = '<div class="selectedHeirloomItem ' + animated + 'heirloomRare' + heirloom.rarity + '"><div class="row selectedHeirloomRow"><div class="col-xs-2 selectedHeirloomIcon" id="' + ((fromTooltip) ? 'tooltipHeirloomIcon' : 'selectedHeirloomIcon') + '"><span class="' + icon + '"></span></div><div class="col-xs-10"><span onclick="renameHeirloom(';
	if (fromPopup) html += 'false, true';
	html += ')" id="selectedHeirloomTitle">' + heirloom.name + '</span> '
	if (!fromTooltip) html += '<span id="renameContainer"></span>';
	html+= '</div></div>';
	if (!fromPopup && !fromTooltip && (game.global.selectedHeirloom[1] == "StaffEquipped" || game.global.selectedHeirloom[1] == "ShieldEquipped")) html += '<span class="heirloomEquipped">已装备</span><br/>';
	var noneEmpty = true;
	var opacity = (modSelected) ? 'style="opacity: 0.5" ' : '';
	for (var x = 0; x < heirloom.mods.length; x++){
		if (heirloom.mods[x][0] == "empty"){
				html += '- <span class="heirloomMod heirloomModEmpty" ';
				if (modSelected && selectedIndex != x) html += opacity;
				html += 'onclick="selectMod(' + x;
				if (fromPopup) html += ', true';
				html+= ')">空</span><br/>';
			}
		else{
			html += '&bull; <span class="heirloomMod" ';
			if (modSelected && selectedIndex != x) html += opacity;
			html += 'onclick="selectMod(' + x;
			if (fromPopup) html += ', true';
			html += ')">' + heirloom.mods[x][1] + '% ' + game.heirlooms[heirloom.type][heirloom.mods[x][0]].name + '</span><br/>';
		}
	}
	if (fromTooltip) return html;
	if (fromPopup){
		document.getElementById("heirloomsPopupHere").innerHTML = html;
		document.getElementById("heirloomsPopup").style.display = "inline-block";
		return;
	}
	document.getElementById("selectedHeirloom").innerHTML = html;
	if (heirloom.rarity == 8 && animated)
		document.getElementById('selectedHeirloomIcon').style.animationDelay = "-" + ((new Date().getTime() / 1000) % 30).toFixed(1) + "s";
}

function renameHeirloom(cancel, fromPopup){
	if (fromPopup && !swapFromPopup()) return;
	var inputText = document.getElementById("heirloomNameInput");
	var heirloom = getSelectedHeirloom();
	var titleElem = document.getElementById("selectedHeirloomTitle");
	var containerElem = document.getElementById("renameContainer");
	if (cancel){
		containerElem.innerHTML = "";
		titleElem.innerHTML = heirloom.name;
		return;
	}
	if (!inputText){
		containerElem.innerHTML = "<input maxlength='25' id='heirloomNameInput' value='" + heirloom.name + "'/> <span onclick='renameHeirloom()' class='renameHeirloomBtn'>Save</span><span class='renameHeirloomBtn' onclick='renameHeirloom(true)'>Cancel</span>";
		titleElem.innerHTML = "";
		return;
	}
	var value = inputText.value;
	if (value.length < 1) return;
	value = htmlEncode(value.substring(0, 25));
	heirloom.name = value;
	titleElem.innerHTML = value;
	if (game.global.selectedHeirloom[1] == (heirloom.type + "Equipped")) document.getElementById(heirloom.type + "EquippedName").innerHTML = value;
	containerElem.innerHTML = "";
}

function closeHeirPopup(){
	document.getElementById("heirloomsPopup").style.display = "none";
}

function swapFromPopup(){
	closeHeirPopup();
	if (!heirloomsShown) toggleHeirlooms();
	if (game.global.heirloomsExtra.length) {
		game.global.selectedHeirloom = [game.global.heirloomsExtra.length - 1, "heirloomsExtra"];
		displaySelectedHeirloom();
		return true;
	}
	return false;
}

function selectMod(which, fromPopup){
	if (fromPopup && !swapFromPopup()) return;
	selectedMod = which;
	displaySelectedHeirloom(true, which);
	var heirloom = getSelectedHeirloom();
	var mod = heirloom.mods[which];
	var modConfig = game.heirlooms[heirloom.type][mod[0]];
	document.getElementById("modBreakdown").style.display = "block";
	buildModOptionDdl(heirloom.type, heirloom.rarity, mod[0]);
	document.getElementById("modUpgradeBox").style.display = (mod[0] == "empty" || checkModCap(mod, modConfig, heirloom)) ? "none" : "block";
	var replaceCost = getModReplaceCost(heirloom, mod);
	var upgradeCost = getModUpgradeCost(heirloom, which);
	var replaceBtn = document.getElementById("modReplaceBtn");
	var upgradeBtn = document.getElementById("modUpgradeBtn");
	var upgradeBtn10 = document.getElementById("modUpgradeBtn10");
	var upgradeCost10 = getModUpgradeCost(heirloom, which, 10);
	var newClass = (replaceCost > game.global.nullifium) ? "heirloomBtnInactive" : "heirloomBtnActive";
	swapClass("heirloomBtn", newClass, replaceBtn);
	newClass = (upgradeCost > game.global.nullifium) ? "heirloomBtnInactive" : "heirloomBtnActive";
	swapClass("heirloomBtn", newClass, upgradeBtn);
	newClass = (upgradeCost10 > game.global.nullifium) ? "heirloomBtnInactive" : "heirloomBtnActive";
	swapClass("heirloomBtn", newClass, upgradeBtn10);
	replaceBtn.innerHTML = (mod[0] == "empty") ? "增加 (" + prettify(replaceCost) + " Nu)" : "替换 (" + prettify(replaceCost) + " Nu)";
	var step = (typeof modConfig.steps !== 'undefined') ? modConfig.steps : game.heirlooms.defaultSteps;
	step = step[heirloom.rarity];
	var upgradeCostText = "Each upgrade adds " + step[2] + "%";
	if (modConfig.max){
		if (mod[1] < modConfig.max[heirloom.rarity])
			upgradeCostText = "<span class='upgradeCostTextMax'><span>" + upgradeCostText + "</span><span>Max of " + modConfig.max[heirloom.rarity] + "%</span></span>"
		else upgradeCostText = "At Max!";
	}
	document.getElementById("modUpgradeCost").innerHTML = upgradeCostText;
	upgradeBtn.innerHTML = "Upgrade x1<br/>(" + prettify(upgradeCost) + " Nu)";
	upgradeBtn10.innerHTML = "Upgrade x10<br/>(" + prettify(upgradeCost10) + " Nu)";
	var modDescElem = document.getElementById("specialModDescription");
	if (modConfig.specialDescription){
		modDescElem.style.display = "block";
		modDescElem.innerHTML = modConfig.specialDescription(mod[1]);
		modDescElem.className = "specDesc" + heirloom.rarity;
	}
	else modDescElem.style.display = "none";
}

function checkModCap(mod, modConfig, heirloom){
	if (!modConfig.cap) return false;
	var steps = (modConfig.steps) ? modConfig.steps : game.heirlooms.defaultSteps;
	steps = steps[heirloom.rarity];
	if (mod[1] >= steps[1]) return true;
	return false;
}

function getModUpgradeValue(heirloom, modIndex, count){
	if (!count) count = 1;
	var mod = heirloom.mods[modIndex]
	var modConfig = game.heirlooms[heirloom.type][mod[0]];
	var step = (typeof modConfig.steps !== 'undefined') ? modConfig.steps : game.heirlooms.defaultSteps;
	step = step[heirloom.rarity];
	var result = parseFloat(mod[1] + (step[2] * count));
	if (modConfig.max && result > modConfig.max[heirloom.rarity]) return false;
	result = (Math.round(result * 100) / 100);
	return (result);
}

function getModUpgradeCost(heirloom, modIndex, count){
	if (!count) count = 1;
	var mod = heirloom.mods[modIndex];
	var modConfig = game.heirlooms[heirloom.type][mod[0]];
	if (modConfig.max && getModUpgradeValue(heirloom, modIndex, count) === false) return Infinity;
	var cost = 0;
	for (var x = 0; x < count; x++){
		var tempCost = (game.heirlooms.values[heirloom.rarity] / 2);
		tempCost *= getStepPriceIncrease(heirloom, mod, x);
		cost += Math.floor(tempCost);
	}
	return Math.floor(cost);
}

function getStepPriceIncrease(heirloom, mod, add){
	if (!add) add = 0;
	var modConfig = game.heirlooms[heirloom.type][mod[0]];
	var priceIncrease = game.heirlooms.priceIncrease;
	var step = (typeof modConfig.steps !== 'undefined') ? modConfig.steps : game.heirlooms.defaultSteps;
	step = step[heirloom.rarity];
	if (mod[1] + (step[2] * add) <= step[1]) return 1;
	return Math.pow(priceIncrease[heirloom.rarity], (((mod[1] - step[1]) / step[2]) + add));
}

function getTotalHeirloomRefundValue(heirloom){
	var total = 0;
	for (var x = 0; x < heirloom.mods.length; x++){
		var thisMod = heirloom.mods[x];
		//Create a dummy heirloom with a copy of this mod at 0 upgrades to count price
		var dummyHeirloom = setupDummyHeirloom(heirloom, thisMod);
		total += countPriceOfUpgrades(dummyHeirloom, heirloom.mods[x][3]);
	}
	var result = Math.floor(total) + Math.floor(game.heirlooms.values[heirloom.rarity] / 2);
	if (isNumberBad(result)) return 0;
	return result;
}

//Dummy heirloom for mod recycle price calculating
function setupDummyHeirloom(heirloom, mod){
	var modConfig = game.heirlooms[heirloom.type][mod[0]];
	var step = (typeof modConfig.steps !== 'undefined') ? modConfig.steps : game.heirlooms.defaultSteps;
	step = step[heirloom.rarity];
	var dummyMod = [mod[0], mod[1] - (mod[3] * step[2]), mod[2], 0, mod[4]];
	var dummyHeirloom = {rarity: heirloom.rarity, step: step[2], type: heirloom.type, mods: [dummyMod]};
	return dummyHeirloom;
}

function countPriceOfUpgrades(dummyHeirloom, count){
	var total = 0;
	for (var x = 0; x < count; x++){
		var newTotal = Math.ceil(getModUpgradeCost(dummyHeirloom, 0));
		if (newTotal == Infinity){
			console.log(dummyHeirloom); break;
		}
		total += newTotal;
		dummyHeirloom.mods[0][3]++;
		dummyHeirloom.mods[0][1] += dummyHeirloom.step;
		dummyHeirloom.mods[0][1] = (Math.round(dummyHeirloom.mods[0][1] * 100) / 100); //Damn you, javascript
	}
	return total;
}

function upgradeMod(confirmed, count){
	var heirloom = getSelectedHeirloom();
	if (!count) count = 1;
	var cost = Math.ceil(getModUpgradeCost(heirloom, selectedMod, count));
	if (cost == Infinity) return;
	if (game.global.nullifium < cost) return;
	if (!confirmed && game.options.menu.boneAlerts.enabled == 1) {
		tooltip('confirm', null, 'update', 'You are about to upgrade ' + game.heirlooms[heirloom.type][heirloom.mods[selectedMod][0]].name + ((count > 1) ? ' 10 times' : '') + ' for ' + prettify(cost) + ' Nullifium. Are you sure?' , 'upgradeMod(true, ' + count + ')', 'Upgrade Mod');
		return;
	}
	game.global.nullifium -= cost;
	var newBonus = getModUpgradeValue(heirloom, selectedMod, count);
	var mod = heirloom.mods[selectedMod];
	mod[1] = newBonus;
	mod[3] += count;
	if (game.global.selectedHeirloom[1] == "ShieldEquipped" || game.global.selectedHeirloom[1] == "StaffEquipped"){
		game.heirlooms[heirloom.type][heirloom.mods[selectedMod][0]].currentBonus = newBonus;
	}
	displaySelectedHeirloom();
	selectHeirloom(game.global.selectedHeirloom[0], game.global.selectedHeirloom[1]);
	selectMod(selectedMod);
	document.getElementById("nullifiumCount").innerHTML = prettify(game.global.nullifium);
}

function getModReplaceCost(heirloom, mod){
	var value = game.heirlooms.values[heirloom.rarity];
	return (mod[0] == "empty") ? value : (value * 3);
}

function replaceMod(confirmed){
	var heirloom = getSelectedHeirloom();
	var mod = heirloom.mods[selectedMod];
	if (!game.heirlooms.canReplaceMods[heirloom.rarity] && mod[0] != "empty") return;
	var cost = getModReplaceCost(heirloom, mod);
	var newModName = document.getElementById("modReplaceSelect").value;
	if (newModName == -1) return;
	var newMod = game.heirlooms[heirloom.type][newModName];
	if (typeof newMod === 'undefined'){
		console.log("something broke");
		return;
	}
	if (game.global.nullifium < cost) return;
	if (!confirmed && game.options.menu.boneAlerts.enabled == 1) {
		var oldName = game.heirlooms[heirloom.type][heirloom.mods[selectedMod][0]].name;
		var text = (oldName == "Empty") ? "你准备要增加 " : "你准备要替换 " + oldName + " 用 ";
		text += newMod.name + ' 花费 ' + prettify(cost) + ' Nullifium. ';
		if (oldName != "Empty"){
			if (mod[3] > 0){
				var cost = countPriceOfUpgrades(setupDummyHeirloom(heirloom, mod), mod[3]);
				text += "<br/><br/><b>你已经购买了 " + mod[3] + " 升级 " + oldName + " 累计消耗了 " + prettify(cost) + " Nullifium. <span style='color:red'>Replacing this mod will not refund your Nu, and it will be permanently lost</span></b>.";
			}
		}
		text += " 你确定吗?";
		var tipName = (oldName == "Empty") ? "Add Mod" : "Replace Mod";
		tooltip('confirm', null, 'update', text, 'replaceMod(true)', tipName);
		return;
	}
	game.global.nullifium -= cost;
	var steps = (typeof newMod.steps !== 'undefined') ? newMod.steps : game.heirlooms.defaultSteps;
	steps = steps[heirloom.rarity];
	mod[0] = newModName;
	if (!heirloom.repSeed)
		heirloom.repSeed = getRandomIntSeeded(game.global.heirloomSeed, 1, 10e6);
	mod[4] = getRandomIntSeeded(heirloom.repSeed++, 1, 10e6);
	steps = getRandomBySteps(steps, mod);
	mod[1] = steps[0];
	mod[2] = steps[1];
	mod[3] = 0;
	if (!game.heirlooms.canReplaceMods[heirloom.rarity]) {
		heirloom.mods.sort(function(a, b){
			a = a[0].toLowerCase();
			b = b[0].toLowerCase();
			if (a == "empty") return 1;
			if (b == "empty" || b > a) return -1;
			return a > b
		})
		var newIndex = heirloom.mods.indexOf(mod);
		if (newIndex >= 0) selectedMod = newIndex;
	}
	recalculateHeirloomBonuses();
	displaySelectedHeirloom();
	selectMod(selectedMod);
	document.getElementById("nullifiumCount").innerHTML = prettify(game.global.nullifium);
}

function buildModOptionDdl(type, rarity, selectedMod){
	if (!game.heirlooms.canReplaceMods[rarity] && selectedMod != "empty"){
		document.getElementById('modReplaceBtn').style.display = 'none';
		document.getElementById('modReplaceSelect').style.display = 'none';
		document.getElementById('modCantReplace').style.display = 'block';
		document.getElementById('modCantReplace').innerHTML = "Can't replace mods other than 'Empty' at this tier."
		return;
	}
	else {
		document.getElementById('modReplaceBtn').style.display = 'block';
		document.getElementById('modReplaceSelect').style.display = 'inline-block';
		document.getElementById('modCantReplace').style.display = 'none';
	}
	var html = '';
	var baseValue = game.heirlooms.values[rarity] * 5;
	html += '<option value="-1">选择一个模式</option>';
	for (var item in game.heirlooms[type]){
		if (item == 'empty') continue;
		if (checkSelectedModsFor(item)) continue;
		var thisMod = game.heirlooms[type][item];
		if (thisMod.steps && thisMod.steps[rarity] === -1) continue;
		if (typeof thisMod.filter !== 'undefined' && !thisMod.filter()) continue;
		html += '<option value="' + item + '">' + thisMod.name + '</option>';
	}
	document.getElementById("modReplaceSelect").innerHTML = html;
}

function setHeirRareText(forBones){
	var rarityBreakpoint = (forBones) ? getHeirloomZoneBreakpoint(game.global.highestLevelCleared + 1) : getHeirloomZoneBreakpoint();
	var nextAt = "";
	var html = "";
	if (!forBones){
		var breakpoint = getHeirloomZoneBreakpoint();
		if (breakpoint == game.heirlooms.rarityBreakpoints.length) nextAt = "Max Rarity";
		else nextAt = "Next Rarity Increase at Z" + game.heirlooms.rarityBreakpoints[breakpoint];
		html = "<b>Current Heirloom Drop Rates</b> - " + nextAt + "<br/>";
	}
	var rarities = (!forBones) ? getHeirloomRarityRanges(game.global.world) : getHeirloomRarityRanges(game.global.highestLevelCleared + 1);
	var canLower = (Fluffy.isRewardActive("stickler")) ? 500 : 0;
	for (var x = 0; x < rarities.length; x++){
		var rarity = rarities[x];
		if (rarity == -1) continue;
		if (!forBones) html += "<div class='rarityBdBox heirloomRare" + x + "'>" + game.heirlooms.rarityNames[x] + "<br/>" + (rarity / 100) + "%</div>";
		else html += "<div class='rarityBdBox heirloomRare" + x + " forBones' title='" + game.heirlooms.rarityNames[x] + "'>" + (rarity / 100) + "%</div>";
	}
	if (forBones) document.getElementById("heirloomRarityMisc").innerHTML = html;
	else	document.getElementById("heirRare").innerHTML = html;
}

function checkSelectedModsFor(what){
	var heirloom = getSelectedHeirloom();
	for (var mod in heirloom.mods){
		if (heirloom.mods[mod][0] == what) return true;
	}
	return false;
}

function createHeirloom(zone, fromBones){
	var slots = game.heirlooms.slots;
	var rarityNames = game.heirlooms.rarityNames;
	//Determine Type
	var seed = (fromBones) ? game.global.heirloomBoneSeed : game.global.heirloomSeed;
	var type = (getRandomIntSeeded(seed++, 0, 2) == 0) ? "Shield" : "Staff";
	//Determine type rarity
	var rarity = getHeirloomRarity(zone, seed++);
	//Sort through modifiers and build a list of eligible items. Check filters if applicable
	var eligible = [];
	for (var item in game.heirlooms[type]){
		var heirloom = game.heirlooms[type][item];
		if (typeof heirloom.filter !== 'undefined' && !heirloom.filter()) continue;
		if (heirloom.steps && heirloom.steps[rarity] === -1) continue;
		eligible.push(item);
	}

	slots = slots[rarity];
	var name = rarityNames[rarity] + " " + type;
	//Heirloom configuration
	//{name: "", type: "", rarity: #, mods: [[ModName, value, createdStepsFromCap, upgradesPurchased, seed]]}
	var buildHeirloom = {name: name, type: type, repSeed: getRandomIntSeeded(seed++, 1, 10e6), rarity: rarity, mods: []};
	var x = 0;
	if (!game.heirlooms.canReplaceMods[rarity]){
		x++;
		buildHeirloom.mods.push(["empty", 0, 0, 0, getRandomIntSeeded(seed++, 0, 1000)]);
	}
	for (x; x < slots; x++){
		var roll = getRandomIntSeeded(seed++, 0, eligible.length);
		var thisMod = eligible[roll];
		eligible.splice(roll, 1);
		var steps = (typeof game.heirlooms[type][thisMod].steps !== 'undefined') ? game.heirlooms[type][thisMod].steps : game.heirlooms.defaultSteps;
		steps = getRandomBySteps(steps[rarity], null, fromBones);
		buildHeirloom.mods.push([thisMod, steps[0], steps[1], 0, getRandomIntSeeded(seed++, 0, 1000)]);
	}
	seed += 6 - (x * 2);
	buildHeirloom.mods.sort(function(a, b){
		a = a[0].toLowerCase();
		b = b[0].toLowerCase();
		if (a == "empty") return 1;
		if (b == "empty" || b > a) return -1;
		return a > b
	})
	game.global.heirloomsExtra.push(buildHeirloom);
	displaySelectedHeirloom(false, 0, false, "heirloomsExtra", game.global.heirloomsExtra.length - 1, true);
	game.stats.totalHeirlooms.value++;
	checkAchieve("totalHeirlooms");
	if (heirloomsShown) displayExtraHeirlooms();
	if (fromBones) game.global.heirloomBoneSeed = seed;
	else game.global.heirloomSeed = seed;
}

function getRandomBySteps(steps, mod, fromBones){
		var seed;
		if (mod && typeof mod[4] !== 'undefined'){
			seed = mod[4]++;
		}
		else {
			seed = (fromBones) ? game.global.heirloomBoneSeed++ : game.global.heirloomSeed++;
		}
		var possible = ((steps[1] - steps[0]) / steps[2]);
		var roll = getRandomIntSeeded(seed, 0, possible + 1);
		var result = steps[0] + (roll * steps[2]);
		result = Math.round(result * 100) / 100;
		return ([result, Math.round(possible - roll)]);
}

function getHeirloomZoneBreakpoint(zone){
	if (!zone) zone = game.global.world;
	var rarityBreakpoints = game.heirlooms.rarityBreakpoints;
	for (var x = 0; x < rarityBreakpoints.length; x++){
		if (zone < rarityBreakpoints[x]) return x;
	}
	return rarityBreakpoints.length;
}

function getHeirloomRarityRanges(zone){
	var rarities = game.heirlooms.rarities[getHeirloomZoneBreakpoint(zone)];
	var canLower = 0;
	var addBonus = false;
	if (Fluffy.isRewardActive("stickler")){
		canLower = 500;
		addBonus = true;
	}
	var newRarities = [];
	for (var x = 0; x < rarities.length; x++){
		if (rarities[x] == -1) {
			newRarities.push(-1);
			continue;
		}
		var newRarity = rarities[x];
		if (canLower > 0){
			if (newRarity > canLower){
				newRarity -= canLower;
				canLower = 0;
			}
			else {
				canLower -= newRarity;
				newRarities.push(-1);
				continue;
			}
		}
		if (addBonus && ((rarities.length - 1 == x) || rarities[x + 1] == -1)){
			newRarity += 500;
		}
		newRarities.push(newRarity);
	}
	return newRarities;
}

function getHeirloomRarity(zone, seed){ //Zone is optional, and will override world
	if (!zone) zone = game.global.world;
	var rarities = getHeirloomRarityRanges(zone);
	var nextTest = 0;
	var selectedRarity;
	var rarityRoll = getRandomIntSeeded(seed, 0, 10000);
	for (var y = 0; y < rarities.length; y++){
		if (rarities[y] == -1) continue;
		nextTest += rarities[y];
		if (rarityRoll < nextTest) {
			selectedRarity = y;
			break;
		}
	}
	if (zone >= 146 && selectedRarity == 1) giveSingleAchieve("Consolation Prize");
	return selectedRarity;
}

function getRandomMapName() {
    var namesObj = game.mapConfig.names;
    var roll = Math.floor(Math.random() * (namesObj.prefix.length - 1));
    var name = namesObj.prefix[roll];
	var suffix;
	var biome = document.getElementById("biomeAdvMapsSelect").value;
	if (biome != "Random"){
		var possibilities = [];
		for (var item in namesObj.suffix){
			if (namesObj.suffix[item].split('.')[1] == biome) possibilities.push(namesObj.suffix[item]);
		}
		roll = Math.floor(Math.random() * (possibilities.length - 1));
		suffix = possibilities[roll];
	}
	else{
		roll = Math.floor(Math.random() * (namesObj.suffix.length - 1));
		suffix = namesObj.suffix[roll];
	}
    return name + " " + suffix;
}

function buildMapGrid(mapId) {
	if (game.global.formation == 4) game.global.canScryCache = true;
	game.global.mapStarted = getGameTime();
    var map = game.global.mapsOwnedArray[getMapIndex(mapId)];
    var array = [];
	var imports = [];
	for (var item in game.unlocks.imps){
		if (!game.unlocks.imps[item]) continue;
		var badGuy = game.badGuys[item];
		if (badGuy.location == "Maps" && badGuy.world <= map.level){
			imports.push(item);
		}
	}
    for (var i = 0; i < map.size; i++) {
        var cell = {
            level: i + 1,
            maxHealth: -1,
            health: -1,
            attack: -1,
            special: "",
            text: "",
            name: getRandomBadGuy(map.location, i + 1, map.size, map.level, imports)
		};
		if (game.badGuys.Presimpt.locked == 0 && game.options.menu.showSnow.enabled){
			if (map.location == "Void") cell.vm = "CorruptSnow";
			else cell.vm = "TrimpmasSnow"
		}
		array.push(cell);
    }
    game.global.mapGridArray = array;
    addSpecials(true);
}

function getMapIndex(mapId) {
	for (var x = 0; x < game.global.mapsOwnedArray.length; x++) {
		if (game.global.mapsOwnedArray[x].id == mapId) return x;
	}
}

function getEmpowerment(adjust, getNaming){
	var natureStartingZone = (game.global.challengeActive == "Eradicated") ? 1 : 236;
	var adjWorld = game.global.world;
	if (typeof adjust !== 'undefined') adjWorld += adjust;
	if (adjWorld < natureStartingZone) return false;
	var activeEmpowerments = ["Poison", "Wind", "Ice"];
	var naming = ["Toxic", "Gusty", "Frozen"];
	adjWorld = Math.floor((adjWorld - natureStartingZone) / 5);
	adjWorld = adjWorld % activeEmpowerments.length;
	if (getNaming) return naming[adjWorld];
	return activeEmpowerments[adjWorld];
}

function stackPoison(trimpAttack){
	game.empowerments.Poison.currentDebuffPower += Math.ceil(game.empowerments.Poison.getModifier() * trimpAttack);
	if (game.empowerments.Poison.currentDebuffPower > trimpAttack * 1000) giveSingleAchieve("Infected");
	handlePoisonDebuff();
}

function handlePoisonDebuff(){
	var elem = document.getElementById('poisonEmpowermentIcon');
	if (getEmpowerment() != "Poison"){
		game.empowerments.Poison.currentDebuffPower = 0;
		if (elem == null) return;
		elem.style.display = 'none';
		return;
	}
	if (elem == null){
		document.getElementById('badDebuffSpan').innerHTML += '<span class="badge badBadge" id="poisonEmpowermentIcon" onmouseover="tooltip(\'Poisoned\', null, event)" onmouseout="tooltip(\'hide\')"><span id="poisonEmpowermentText"></span><span class="icomoon icon-flask"></span></span>';
		elem = document.getElementById('poisonEmpowermentIcon');
	}
	elem.style.display = 'inline-block';
	document.getElementById('poisonEmpowermentText').innerHTML = prettify(game.empowerments.Poison.currentDebuffPower);
}

function handleIceDebuff() {
	var elem = document.getElementById('iceEmpowermentIcon');
	if (getEmpowerment() != "Ice"){
		game.empowerments.Ice.currentDebuffPower = 0;
		if (elem == null) return;
		elem.style.display = 'none';
		return;
	}
	if (elem == null){
		document.getElementById('badDebuffSpan').innerHTML += '<span class="badge badBadge" id="iceEmpowermentIcon" onmouseover="tooltip(\'Chilled\', null, event)" onmouseout="tooltip(\'hide\')"><span id="iceEmpowermentText"></span><span class="glyphicon glyphicon-certificate"></span></span>';
		elem = document.getElementById('iceEmpowermentIcon');
	}
	elem.style.display = 'inline-block';
	document.getElementById('iceEmpowermentText').innerHTML = prettify(game.empowerments.Ice.currentDebuffPower);
}

function handleWindDebuff() {
	if (game.empowerments.Wind.currentDebuffPower > game.empowerments.Wind.maxStacks)
		game.empowerments.Wind.currentDebuffPower = game.empowerments.Wind.maxStacks;
	var elem = document.getElementById('windEmpowermentIcon');
	if (getEmpowerment() != "Wind"){
		game.empowerments.Wind.currentDebuffPower = 0;
		if (elem == null) return;
		elem.style.display = 'none';
		return;
	}
	if (elem == null){
		document.getElementById('badDebuffSpan').innerHTML += '<span class="badge badBadge" id="windEmpowermentIcon" onmouseover="tooltip(\'Breezy\', null, event)" onmouseout="tooltip(\'hide\')"><span id="windEmpowermentText"></span><span class="icomoon icon-air"></span></span>';
		elem = document.getElementById('windEmpowermentIcon');
	}
	elem.style.display = 'inline-block';
	document.getElementById('windEmpowermentText').innerHTML = prettify(game.empowerments.Wind.currentDebuffPower);
}

function handleDominationDebuff() {
	var dominating = false;
	var enemy = (game.global.mapsActive) ? getCurrentMapCell() : getCurrentWorldCell();
	if (game.global.mapsActive){
		if (game.global.lastClearedMapCell + 2 == getCurrentMapObject().size) dominating = true;
	}
	else if (game.global.lastClearedCell == 98) dominating = true;
	var elem = document.getElementById('dominationDebuffContainer');
	if (!game.global.challengeActive || enemy.name == "Liquimp"){
		if (elem == null) return;
		elem.style.display = 'none';
		return;
	}
	if (elem == null){
		document.getElementById('badDebuffSpan').innerHTML += '<span class="badge badBadge" id="dominationDebuffContainer" onmouseover="tooltip(\'Domination' + ((dominating) ? 'Dominating' : 'Weak') + '\', null, event)" onmouseout="tooltip(\'hide\')"><span id="dominationDebuffIcon" class="icomoon icon-' + ((dominating) ? 'podcast' : 'feed') + '"></span></span>';
		return;
	}
	elem.style.display = 'inline-block';
	var iconElem = document.getElementById('dominationDebuffIcon');
	if (!iconElem) return;
	if (dominating && iconElem.className != 'icomoon icon-podcast') {
		iconElem.className = 'icomoon icon-podcast';
		elem.onmouseover = function (){tooltip("DominationDominating", null, event)}
	}
	else if (!dominating && iconElem.className != 'icomoon icon-feed'){
		iconElem.className = 'icomoon icon-feed';
		elem.onmouseover = function (){tooltip("DominationWeak", null, event)}
	}
}

function setEmpowerTab(){
	var empowerMod = getEmpowerment();
	var empowerTab = document.getElementById('natureTab');
	if (game.global.highestLevelCleared < 235) {
		empowerTab.style.display = 'none';
		return;
	}
	empowerTab.style.display = 'table-cell';
	if (empowerMod == false){
		swapClass("empowerTab", "empowerTabNone", empowerTab);
		document.getElementById('natureA').innerHTML = "Nature";
		return;
	}
	var icons = {
		Poison: "icomoon icon-flask",
		Ice: "glyphicon glyphicon-certificate",
		Wind: "icomoon icon-air"
	}
	swapClass("empowerTab", "empowerTab" + empowerMod, empowerTab);
	document.getElementById('natureA').innerHTML = "<span class='" + icons[empowerMod] + "'></span>自然";
}

function updateEmpowerCosts(){
	var empowers = ["Poison", "Wind", "Ice"];
	for (var x = 0; x < empowers.length; x++){
		var emp = empowers[x];
		document.getElementById('natureUpgrade' + emp + 'Cost').innerHTML = checkAndFormatTokens(getNextNatureCost(emp), emp);
		document.getElementById('natureStackTransfer' + emp + 'Cost').innerHTML = (game.empowerments[emp].retainLevel >= 80) ? "<span class='red'>Max</span>" : checkAndFormatTokens(getNextNatureCost(emp, true), emp);
		for (var y = 0; y < empowers.length; y++){
			var empY = empowers[y];
			if (empY == emp) continue;
			var amount = ctrlPressed ? Math.floor(game.empowerments[emp].tokens / 10) * 10 : 10;
			document.getElementById('nature' + emp + empY + 'Cost').innerHTML = checkAndFormatTokens(amount, emp);
		}
	}
}

function checkAndFormatTokens(tokenCost, empowerment){
	var canAfford = (game.empowerments[empowerment].tokens >= tokenCost);
	return "<span class='" + ((canAfford) ? "green" : "red") + "'>" + prettify(tokenCost) + "&nbsp;符记</span>";
}

function getRetainModifier(empowermentName){
	var empowerment = game.empowerments[empowermentName];
	var bonusLevels = (game.talents.nature3.purchased) ? 5 : 0;
	if (empowermentName == "Poison" && Fluffy.isRewardActive('naturesWrath')) bonusLevels += 10;
	return 0.01 * (empowerment.retainLevel + bonusLevels);
}

function resetEmpowerStacks(){
	var empowerment = getEmpowerment();
	for (var item in game.empowerments){
		if (item == empowerment){
			game.empowerments[item].currentDebuffPower = 1 + (Math.ceil(game.empowerments[item].currentDebuffPower * getRetainModifier(item)));
			continue;
		}
		game.empowerments[item].currentDebuffPower = 1;
	}
	handlePoisonDebuff();
	handleWindDebuff();
	handleIceDebuff();
}

function natureTooltip(event, doing, spending, convertTo){
	var tipTitle = "";
	var tipText = "";
	var tipCost = 0;
	if (doing == 'upgrade'){
		tipTitle = "升级 " + spending + " 的效果";
		tipText = game.empowerments[spending].upgradeDescription();
		tipCost = getNextNatureCost(spending);
	}
	else if (doing == 'description'){
		tipTitle = "Empowerment of " + spending;
		tipText = game.empowerments[spending].description();
	}
	else if (doing == 'convert'){
		tipTitle = "转换 " + spending + " 为 " + convertTo;
		tipCost = ctrlPressed ? Math.floor(game.empowerments[spending].tokens / 10) * 10 : 10;
		var convertRate = (game.talents.nature.purchased) ? ((game.talents.nature2.purchased) ? 8 : 6) : 5;
		tipText = "<p>花费" + tipCost+spending + "符记交易得到 " + (tipCost / 10 * convertRate) + convertTo + "符记。</p>";
		if (!ctrlPressed) tipText += "<p><b>按住Ctrl键可以一次转换所有令牌。</b></p>";
	}
	else if (doing == 'stackTransfer'){
		tipTitle = "升级 " + spending + " 效果的传递比例";
		var retainLevel = game.empowerments[spending].retainLevel;
		var cap = 80;
		if (game.talents.nature3.purchased){
			retainLevel += 5;
			cap += 5;
		}
		if (spending == "Poison" && Fluffy.isRewardActive('naturesWrath')){
			retainLevel += 10;
			cap += 10;
		}
		if (retainLevel >= cap){
			tipText = "您目前处于该效果传递比例的最高水平, 可以传递 <b>" + cap + "%</b> 的赋权Debuff。";
			tipCost = 0;
		}
		else{
			tipText = "现在，当你击败一个敌人后，<b>" + prettify(getRetainModifier(spending) * 100) + "%</b>的 " + spending + "的效果会传递给下一个敌人，升级会使这个传递比例增加 <b>1%</b>, 也就是会达到 <b>" + prettify((getRetainModifier(spending) + 0.01) * 100) + "%</b>。这个传递的最高等级是 " + ((game.talents.nature3.purchased) ? "85" : "80") + " 级。";
			tipCost = getNextNatureCost(spending, true);
		}
	}
	if (tipCost == 0) tipCost = "";
	else tipCost = (game.empowerments[spending].tokens < tipCost) ? "<span class='red'>" + prettify(tipCost) + spending +"符记"+"</span>" : "<span class='green'>" + prettify(tipCost) + " 符记 " + spending + "</span>";
	tooltip(tipTitle, 'customText', event, tipText, tipCost, null, null, null, null, true);
	tooltipUpdateFunction = function () {natureTooltip(event, doing, spending, convertTo)}
}

function displayNature(){
	updateNatureInfoSpans();
}

function rewardToken(empowerment){
	var tokens = Math.floor((game.global.world - 241) / 15) + 1;
	game.empowerments[empowerment].tokens += tokens;
	message("你找到了 " + prettify(tokens) + " 符记" + ((tokens == 1) ? "" : "") + " of " + empowerment + "!", "Loot", "*medal2", "empoweredCell" + empowerment, 'token');
	if (game.global.buyTab == "nature")
		updateNatureInfoSpans();
	game.stats.bestTokens.value += tokens;
	return tokens;
}

function updateNatureInfoSpans(){
	for (var item in game.empowerments){
		var emp = game.empowerments[item];
		document.getElementById('infoSpan' + item).innerHTML = "<span class='icomoon icon-info2'></span>&nbsp" + emp.formatModifier(emp.getModifier(0, true)) + "%";
		document.getElementById('tokenCount' + item).innerHTML = prettify(emp.tokens);
		var bonusLevels = (game.talents.nature3.purchased) ? 5 : 0;
		if (item == "Poison" && Fluffy.isRewardActive('naturesWrath')) bonusLevels += 10;
		document.getElementById('natureUpgrade' + item + 'Level').innerHTML = "等级: " + prettify(emp.level + bonusLevels);
		document.getElementById('natureStackTransfer' + item + 'Level').innerHTML = "等级: " + prettify(emp.retainLevel + bonusLevels);
	}
	updateEmpowerCosts();
}

function naturePurchase(doing, spending, convertTo){
	if (doing == 'upgrade'){
		var cost = getNextNatureCost(spending);
		var empowerment = game.empowerments[spending];
		if (empowerment.tokens < cost) return;
		empowerment.tokens -= cost;
		empowerment.level++;
		updateNatureInfoSpans();
		natureTooltip('update', doing, spending);
		return;
	}
	if (doing == "convert"){
		var spendEmp = game.empowerments[spending];
		var amount = ctrlPressed ? Math.floor(game.empowerments[spending].tokens / 10) * 10 : 10;
		if (spendEmp.tokens < amount) return;
		spendEmp.tokens -= amount;
		var convertRate = (game.talents.nature.purchased) ? ((game.talents.nature2.purchased) ? 8 : 6) : 5;
		game.empowerments[convertTo].tokens += amount / 10 * convertRate;
		updateNatureInfoSpans();
		natureTooltip('update', doing, spending, convertTo);
		return;
	}
	if (doing == "stackTransfer"){
		var empowerment = game.empowerments[spending];
		if (empowerment.retainLevel >= 80)
			return;
		var cost = getNextNatureCost(spending, true);
		if (empowerment.tokens < cost) return;
		empowerment.tokens -= cost;
		empowerment.retainLevel++;
		updateNatureInfoSpans();
		natureTooltip('update', doing, spending);
		return;
	}
}

function getNextNatureCost(empowerment, forRetain){
	empowerment = game.empowerments[empowerment];
	var scale = ((forRetain) ? 2 : 4);
	var level = ((forRetain) ? empowerment.retainLevel + 1 : empowerment.level);
	return scale + ((level - 1) * scale);
}

var mutations = {
	Living: {
		active: function () {
			return game.global.challengeActive == "Life";
		},
		randomStart: function (currentArray, fromPattern){
			var seed = game.global.world * 20;
			var directions = [-11, -10, -9, -1, 1, 9, 10, 11];
			var count = 0;
			var passes = 0;
			var last = getRandomIntSeeded(seed++, 0, 100);
			var rolls = getRandomIntSeeded(seed++, 4, 30);
			currentArray[last] = "Living";
			for (var x = 0; x < rolls; x++){
				var dirRoll = getRandomIntSeeded(seed++, 0, 8);
				last = this.checkDirection(directions[dirRoll], last);
				currentArray[last] = "Living";
			}
			if (!fromPattern) this.updateGrid(currentArray);
			this.savePattern(currentArray, true);	
			return currentArray;
		},
		checkDirection: function (amt, x){
			var toCheck = x;
			if ((amt == -11 || amt == 9 || amt == -1) && (x % 10 == 0)){
				if (amt == -1) toCheck += 9;
				else if (amt == -11) toCheck--;
				else toCheck += 19;
			}
			else if ((amt == -9 || amt == 11 || amt == 1) && (x % 10 == 9)){
				if (amt == 1) toCheck -= 9;
				else if (amt == -9) toCheck -= 19;
				else toCheck++;
			}
			else toCheck += amt;
			if (toCheck > 99) toCheck -= 100;
			else if (toCheck < 0) toCheck += 100;
			return toCheck;
		},
		change: function () {
			if (!game.upgrades.Battle.done) return;
			if (game.global.mapsActive || game.global.preMapsActive) return;
			var newArray = [];
			for (var x = 0; x < 100; x++){
				newArray[x] = "";
			}
			if (game.challenges.Life.arrayHolder[0].length == 0 || (game.challenges.Life.arrayHolder.length == 4 && this.checkDuplicates())){
				this.randomStart(newArray);
				return;
			}
			newArray = this.nextMove(newArray);
			this.updateGrid(newArray);
			this.savePattern(newArray);
		},
		savePattern: function (newArray, reset){
			if (reset) game.challenges.Life.arrayHolder = [];
			var toSave = [];
			for (var x = 0; x < 100; x++){
				if (newArray[x] == "Living")
					toSave.push(x);
			}
			game.challenges.Life.arrayHolder.unshift(toSave);
			if (game.challenges.Life.arrayHolder.length > 4)
				game.challenges.Life.arrayHolder = game.challenges.Life.arrayHolder.slice(0, 4);
		},
		getLastArray: function(){
			var lastArray = game.challenges.Life.arrayHolder[0];
			var newArray = [];
			for (var x = 0; x < 100; x++){
				newArray.push("");
			}
			for (var y = 0; y < lastArray.length; y++){
				newArray[lastArray[y]] = "Living";
			}
			return newArray;
		},
		checkDuplicates: function () {
			var arrayHolder = game.challenges.Life.arrayHolder;
			for (var x = 0; x < arrayHolder.length - 1; x++){
				var comparing = arrayHolder[x];
				mid: 
				for (var y = x + 1; y < arrayHolder.length; y++) {
					var compareTo = arrayHolder[y];
					if (comparing.length != compareTo.length) continue;
					for (var z = 0; z < comparing.length; z++){
						if (comparing[z] != compareTo[z])
							continue mid;
					}
					return true;
				}
			}
			return false;
		},
		updateGrid: function (newArray) {
			var lastArray = this.getLastArray();
			for (var y = 0; y < 100; y++){
				var wasAlive = (lastArray[y] == "Living");
				var isAlive = (newArray[y] == "Living");
				if (isAlive && !wasAlive){
					document.getElementById('cell'+ y).className += " Living";
					game.global.gridArray[y].mutation = "Living";
					if (game.global.lastClearedCell + 1 == y){
						var elem = document.getElementById('livingMutationContainer');
						if (elem != null){
							document.getElementById('livingMutationContainer').className = "badNameMutation Living"
							document.getElementById('livingMutationName').innerHTML = "Living ";
						}
					}
				}
				if (wasAlive && !isAlive){
					var elem = document.getElementById('cell' + y);
					var oldClassName = elem.className.split(' Living');
					var newClassName = oldClassName[0];
					if (oldClassName.length > 1) newClassName += oldClassName[1];
					elem.className = newClassName;
					game.global.gridArray[y].mutation = "";
					if (game.global.lastClearedCell + 1 == y){
						var elem = document.getElementById('livingMutationContainer');
						if (elem != null){
							document.getElementById('livingMutationContainer').className = ""
							document.getElementById('livingMutationName').innerHTML = "";
						}
					}
				}			
			}
		},
		nextMove: function (currentArray){
			var lastPattern = this.getLastArray();
			var activeCells = 0;
			for (var x = 0; x < lastPattern.length; x++){
				var neighborCount = 0;
				var directions = [-11, -10, -9, -1, 1, 9, 10, 11];
				for (var y = 0; y < directions.length; y++){
					if (lastPattern[this.checkDirection(directions[y], x)] == "Living")
						neighborCount++;
				}
				if (neighborCount == 3 || (neighborCount == 2 && lastPattern[x] == "Living")){
					currentArray[x] = "Living";
					activeCells++;
				}
			}
			return currentArray;
		},
		pattern: function (currentArray){
			return this.randomStart(currentArray, true);
		}
	},
	Corruption: {
		start: function (ignoreCorrupted){
			if (game.global.challengeActive == "Eradicated") return 1;
			var start = (game.talents.headstart.purchased && !game.global.runningChallengeSquared) ? ((game.talents.headstart2.purchased) ? ((game.talents.headstart3.purchased) ? 151 : 166) : 176) : 181;
			if (ignoreCorrupted) return start;
			return (game.global.challengeActive == "Corrupted") ? 60 : start;
		},
		active: function (){
			return (game.global.world >= this.start());
		},
		cellCount: function(){
			var possible = Math.floor((game.global.world - this.start()) / 3) + 2;
			if (possible > 80) possible = 80;
			return possible;
		},
		pattern: function (currentArray) {
		   var possible = this.cellCount();
		   var spread = (Math.floor(possible / 6) + 1) * 10;
		   if (spread > 100) spread = 100;
		   var addCorrupteds = getAmountInRange(spread, possible);
		   for (var a = 0; a < addCorrupteds.length; a++){
			if (currentArray[addCorrupteds[a]] != "") continue;
			currentArray[addCorrupteds[a]] = "Corruption";
		   }
		   return currentArray;
		  },
		attack: function (cellNum, name) {
			return game.global.getEnemyAttack(cellNum, name, true) * this.statScale(3);
		},
		health: function (cellNum, name) {
			return game.global.getEnemyHealth(cellNum, name, true) * this.statScale(10);
		},
		statScale: function (base){
			var startPoint = (game.global.challengeActive == "Corrupted" || game.global.challengeActive == "Eradicated") ? 1 : 150;
			var scales = Math.floor((game.global.world - startPoint) / 6);
			base *= Math.pow(1.05, scales);
			return base;
		},
		reward: function (effect) {
			if (game.global.world < 20 || game.global.runningChallengeSquared) return;
			var percentage = (game.global.challengeActive == "Corrupted") ? 0.075 : 0.15;
			var baseValue = (game.global.world >= this.start(true)) ? 10 : 5;
			if (mutations.Magma.active()) baseValue *= 3;
			var amt = rewardResource("helium", baseValue, 99, false, percentage);
			var text = "The corruption quickly swirls into the air and dissipates. <span class='helium'>You see " + prettify(amt) + " canisters of Helium left on the ground and pick them up. Useful!</span>";
			message(text, "Loot", "oil", "voidMessage", "helium");
		},
		tooltip: function (effectName) {
			var mutText = mutationEffects[effectName].text;
			var text = "";
			if (game.global.spireActive){
				if (effectName == "none") return "This enemy is missing an effect thanks to Fluffy! It will still drop " + ((game.global.challengeActive == "Corrupted") ? "7.5%" : "15%") + " of the helium you would normally get from completing this Zone.";
				text = mutText[0].toUpperCase() + mutText.substring(1);
			}
			else {
				text = "所有腐化敌人现在拥有" + prettify(this.statScale(3)) + "倍攻击并拥有" + prettify(this.statScale(10)) + "倍生命值。此外，" + mutText;
			}
			text += " 它也会掉落你在该区域所得氦的 " + ((game.global.challengeActive == "Corrupted") ? "7.5%" : "15%") + "。";
			return text;
		},
		effects: ['corruptDbl', 'corruptBleed', 'corruptStrong', 'corruptTough', 'corruptDodge', 'corruptCrit'],
		namePrefix: 'Corrupt'
	},
	Magma: {
		start: function (){
			if (game.global.challengeActive == "Eradicated") return 1;
			return 230;
		},
		active: function (){
			return (game.global.canMagma && game.global.world >= this.start());
		},
        minBranchLength : 1,
        maxBranchLength : 2,
        get targetCells () {return (game.talents.magmaFlow.purchased) ? 18 : 16},
        get singlePathMaxSize () {return (game.talents.magmaFlow.purchased) ? 18 : 16},
        discardMultiplePaths: true,
        discardMaxThreshold: 20,
		multiplier: -1,
		lastCalculatedMultiplier: -1,
		getTrimpDecay: function (demandRecount){
			if (!this.active) return;
			if (this.multiplier == -1 || demandRecount) {
				var start = this.start();
				var zones = game.global.world - this.start() + 1;
				this.multiplier = 1;
				for (var x = 0; x < zones; x++){
					this.multiplier *= this.getTrimpDecayMult(x + start);
				}
				this.lastCalculatedMultiplier = game.global.world;
			}
			return this.multiplier;
		},
		increaseTrimpDecay: function () {
			if (this.lastCalculatedMultiplier >= game.global.world) return;
			if (this.multiplier == -1) {
				this.getTrimpDecay(true);
				return;
			}
			var newMult = this.getTrimpDecayMult();
			this.multiplier *= newMult;
			this.lastCalculatedMultiplier = game.global.world;
		},
		getTrimpDecayMult: function (world){
			return 0.8;
		},
        getEligibleOrigin: function(currentArray, riversPrior) {
			if(game.global.world % 5 === 0 && riversPrior === 0) {
				if (game.global.spireActive){
					return {x: 0, y: 0};
				}
				return {x: 9, y: 9};
			}
            var b,i,x,y;

            loop:
            for(b = 0; b < 100; b++) { //random a position on the edge
                var random = getRandomIntSeeded(game.global.mutationSeed++, 0, 10);
                var side = getRandomIntSeeded(game.global.mutationSeed++, 0, 4);

                var originX, originY;

                switch(side) {
                    case 0:
                        originX = 0;
                        originY = random;
                        break;
                    case 1:
                        originX = 9;
                        originY = random;
                        break;
                    case 2:
                        originX = random;
                        originY = 0;
                        break;
                    default:
                        originX = random;
                        originY = 9;
                }

                for(x = originX - 1; x <= originX + 1; x++) { //check all 9 cells around the randomed origin; retry if any of them is occupied
                    for(y = originY - 1; y <= originY + 1; y++) {
                        if(x < 0 || x > 9 || y < 0 || y > 9)
                            continue;

                        if(currentArray[x * 10 + y] == "Magma")
                            continue loop;
                    }
                }

                return {x: originX, y: originY};
            }

            return null; //if there is no space available on edges
        },
        addBranch: function(currentArray, arr, length, direction) {
            var count = 0;

            if(direction !== undefined) {
                for(var i = 0; i < length; i++) {
                    var vector; //this is the x,y of the next cell to occupy
                    switch(direction) { //translate direction
                        case 0:
                            vector = {x: arr[arr.length - 1].x + 1, y: arr[arr.length - 1].y}; //up
                            break;
                        case 1:
                            vector = {x: arr[arr.length - 1].x - 1, y: arr[arr.length - 1].y}; //down
                            break;
                        case 2:
                            vector = {x: arr[arr.length - 1].x, y: arr[arr.length - 1].y + 1}; //right
                            break;
                        default:
                            vector = {x: arr[arr.length - 1].x, y: arr[arr.length - 1].y - 1}; //mystery
                    }

                    if(vector.x < 0 || vector.x > 9 || vector.y < 0 || vector.y > 9) //end the branch if out of bounds
                        return count;

                    switch(direction) { //check the 5 cells in the direction of which we're going
                                        //for example going up we'll be checking these cells:
                                        //-----
                                        //-XXX-
                                        //-X|X-
                                        //-----
                        case 0:
                            for(var x = vector.x; x <= vector.x + 1; x++) { //iterating over the 6 cells
                                for(var y = vector.y - 1; y <= vector.y + 1; y++) {
                                    if(x == vector.x && y == vector.y) //ignore origin
                                        continue;

                                    if(x < 0 || x > 9 || y < 0 || y > 9) //ignore out of bounds
                                        continue;

                                    if(currentArray[x * 10 + y] == "Magma") //end the branch if one of the cells is occupied
                                        return count;
                                }
                            }
                            break;
                        case 1:
                            for(var x = vector.x; x >= vector.x - 1; x--) {
                                for(var y = vector.y - 1; y <= vector.y + 1; y++) {
                                    if(x == vector.x && y == vector.y)
                                        continue;

                                    if(x < 0 || x > 9 || y < 0 || y > 9)
                                        continue;

                                    if(currentArray[x * 10 + y] == "Magma")
                                        return count;
                                }
                            }
                            break;
                        case 2:
                            for(var x = vector.x - 1; x <= vector.x + 1; x++) {
                                for(var y = vector.y; y <= vector.y + 1; y++) {
                                    if(x == vector.x && y == vector.y)
                                        continue;

                                    if(x < 0 || x > 9 || y < 0 || y > 9)
                                        continue;

                                    if(currentArray[x * 10 + y] == "Magma")
                                        return count;
                                }
                            }
                            break;
                        default:
                            for(var x = vector.x - 1; x <= vector.x + 1; x++) {
                                for(var y = vector.y; y >= vector.y - 1; y--) {
                                    if(x == vector.x && y == vector.y)
                                        continue;

                                    if(x < 0 || x > 9 || y < 0 || y > 9)
                                        continue;

                                    if(currentArray[x * 10 + y] == "Magma")
                                        return count;
                                }
                            }
                    }

                    currentArray[vector.x * 10 + vector.y] = "Magma"; //if all is okay, continue the branch
                    arr.push(vector);
                    count++;
                }
            }

            return count; //return the number of cells this branch succesfully occupied
        },
        addPrettyRiver: function(currentArray, origin, length) {
            var arr = [origin]; //this is the full array of vectors of the path just as a helper to other functions
            var i,j,l;

            var branchLength, previousDirection = -1, pathDone;

            for(i = 0; i < 100; i++) {
                branchLength = getRandomIntSeeded(game.global.mutationSeed++,
                length < this.minBranchLength ? length : this.minBranchLength,
                length > this.maxBranchLength ? this.maxBranchLength + 1 : length + 1);

                var dirArr;

                if(i == 0) { //always generate first branch facing outwards from edge origin point
                    dirArr = [];
                    dirArr[0] = origin.x == 0 ? 0 : (origin.x == 9 ? 1 : (origin.y == 0 ? 2 : 3));
                }
                else { //next branches use a viable direction determined by this
                    dirArr = getAmountInRange(4, 4); //get a random array of directions
                    l = dirArr.length;
                    for(j = 0; j < l; j++) {
                        if(dirArr[j] == previousDirection ||
                           (dirArr[j] == 0 && previousDirection == 1) ||
                           (dirArr[j] == 1 && previousDirection == 0) ||
                           (dirArr[j] == 2 && previousDirection == 3) ||
                           (dirArr[j] == 3 && previousDirection == 2)
                           ) // don't go the same way as before or opposite
                            dirArr[j] = null;
                    }

                    for(j = 0; j < 4; j++) { //delete the thrown away directions
                        l = dirArr.indexOf(null);
                        if(l > -1)
                            dirArr.splice(l, 1);
                        else
                            break;
                    }

                    if(dirArr[0] === undefined) //if all directions were not viable, quit out of the entire river
                        return length;          //return leftover length
                }


                for(j = 0; j < 4; j++) {
                    pathDone = this.addBranch(currentArray, arr, branchLength, dirArr[0]); //try doing a branch in one of the directions from the array of directions
                    if(pathDone > 0) { //if the branch placed at least one cell, break out and do another branch
                        length -= pathDone; //reduce length leftover by number of cells done by branch
                        previousDirection = dirArr[0];
                        break;
                    }

                    dirArr.splice(0, 1); //if the branch did not place any cells, remove the direction from the direction array

                    if(dirArr[0] === undefined) //if all directions were not viable, quit out of the entire river
                        return length;          //return leftover length
                }

                if(length <= 0) //if there's no leftover length, we're done
                    break;
            }

            return length;
        },
        generateRivers : function (currentArray) {
            var i, origin, riversAmt = 0;

            var targetCells = this.targetCells;
			var singlePathMaxSize = this.singlePathMaxSize;
            for(var i = 0; i < 20; i++) {
                if(targetCells > 0) { //if we're still supposed to be adding cells
                    var newTarget = targetCells > singlePathMaxSize ? singlePathMaxSize : targetCells; //determine target river length

                    origin = this.getEligibleOrigin(currentArray, riversAmt);
                    if(origin === null) { //this will never occur unless the edges of the map are completely filled up
                        return riversAmt;
                    }

                    currentArray[origin.x * 10 + origin.y] = "Magma"; //the origin is not part of the path, so we're adding it here

                    riversAmt++;

                    if(newTarget - 1 <= 0 && targetCells - 1 <= 0) { // if there's only 1 length left to make a path, just do the origin, then leave
                        break;
                    }

                    var cellsLeftOver = this.addPrettyRiver(currentArray, origin, newTarget - 1);
                    targetCells -= newTarget - cellsLeftOver;
                }
                else break;
            }

            return riversAmt;
        },
        pattern: function (currentArray) {
            var i, j, rivers;

            var tempCurrentArray = [];
            for(i = 0; i < currentArray.length; i++)
                tempCurrentArray[i] = currentArray[i];

            var threshold = this.discardMultiplePaths ? this.discardMaxThreshold : 1;

            for(i = 0; i <= threshold; i++) {
                rivers = this.generateRivers(currentArray);
				if(rivers == Math.ceil(this.targetCells / this.singlePathMaxSize))
					break;
                else if(i != threshold) {
                    for(j = 0; j < tempCurrentArray.length; j++)
                        currentArray[j] = tempCurrentArray[j];
                }
            }
           var replacedCorruptions = 0;

            for(i = 0; i < tempCurrentArray.length; i++) {
                if(tempCurrentArray[i] == "Corruption" && currentArray[i] == "Magma")
                    replacedCorruptions++;
            }

            if (replacedCorruptions > 0) {
                for(i = 0; i < currentArray.length; i++) {
                   if(currentArray[i] == "") {
                        currentArray[i] = "Corruption";
                        replacedCorruptions--;

                        if(replacedCorruptions <= 0)
                            break;
                    }
                }
            }
           return currentArray;
          },
		attack: function (cellNum, name) {
			return game.global.getEnemyAttack(cellNum, name);
		},
		health: function (cellNum, name) {
			return game.global.getEnemyHealth(cellNum, name);
		},
		statScale: function (base){
			return base;
		},
		reward: function (effect) {
			if (game.global.genPaused && game.global.challengeActive == "Eradicated") return;
			var amt;
			var text;
			if (!game.global.genPaused && (game.global.generatorMode == 1 || (game.global.generatorMode == 2 && (getGeneratorFuelCap(false, true) - game.global.magmaFuel > 0.01)))){
				amt = game.generatorUpgrades.Supply.modifier;
				var zoneCap = 0.2 + ((game.global.world - this.start()) * 0.01);
				amt = Math.min(amt, zoneCap);
				game.global.magmaFuel = Math.round((game.global.magmaFuel + amt) * 100) / 100;
				var cap = getGeneratorFuelCap(true);
				if (game.global.magmaFuel > cap){
					if (game.generatorUpgrades.Overclocker.upgrades > 0){
						var rate = getFuelBurnRate();
						var aboveCap = game.global.magmaFuel - cap;
						rate = Math.ceil(aboveCap / rate);
						text = "You earned " + prettify(amt) + " fuel, triggering " + rate + " Overclock" + ((rate > 1) ? "s" : "") + "!";
						for (var x = 0; x < rate; x++){
							generatorTick(true);
						}
						if (game.global.magmaFuel > cap)
							game.global.magmaFuel = cap;
					}
					else {
						var dif = game.global.magmaFuel - cap;
						if (dif <= 0) dif = 0;
						amt -= dif;
						if (amt <= 0.001) amt = 0;
						text = "You earned " + prettify(amt) + " fuel! (" + prettify(dif) + " destroyed, not enough capacity)";
						game.global.magmaFuel = cap;
					}
				}
				else
					text = "You earned " + prettify(amt) + " fuel!";
				changeGeneratorState(null, true);
			}
			else{
				amt = getMagmiteReward();
				text = "You earned " + prettify(amt) + " Magmite!";
				game.global.magmite += amt;
				updateGeneratorUpgradeHtml();
				document.getElementById('upgradeMagmiteTotal').innerHTML = prettify(game.global.magmite) + " Mi";
			}
			updateGeneratorInfo();
			message(text, "Loot", "oil", "Magma", "magma");
		},
		effects: ['none'],
		namePrefix: 'Magma'
	},
	Healthy: {
		active: function (){
			return (game.global.lastSpireCleared >= 2);
		},
		cellCount: function(){
			var lastSpire = game.global.lastSpireCleared;
			var world = game.global.world;
			if (lastSpire < 2) 
				return 0;
			lastSpire *= 100;
			if (world > lastSpire + 199) 
				world = lastSpire + 199;
			var possible = Math.floor((world - 300) / 15) + 2;
			if (possible > 80) possible = 80;
			return possible;
		},
		pattern: function (currentArray) {
			var possible = this.cellCount();
			var spread = (Math.floor(possible / 6) + 1) * 10;
			if (spread > 100) spread = 100;
			var corruptions = [];
			for (var x = 0; x < currentArray.length; x++){
				if (currentArray[x] == "Corruption") corruptions.push(x);
				if (corruptions.length >= spread) break;
			}
			var addCorrupteds = getAmountInRange(corruptions.length, possible);
			for (var a = 0; a < currentArray.length; a++){
			 currentArray[corruptions[addCorrupteds[a]]] = "Healthy";
			}
			return currentArray;
		  },
		attack: function (cellNum, name) {
			return game.global.getEnemyAttack(cellNum, name, true) * this.statScale(5);
		},
		health: function (cellNum, name) {
			return game.global.getEnemyHealth(cellNum, name, true) * this.statScale(14);
		},
		statScale: function (base){
			var scales = Math.floor((game.global.world - 150) / 6);
			base *= Math.pow(1.05, scales);
			return base;
		},
		reward: function (effect) {
			if (game.empowerments.Wind.currentDebuffPower == 200) giveSingleAchieve("Mother Lode");
			if (game.global.world < 20 || game.global.runningChallengeSquared) return;
			var percentage = 0.45;
			var baseValue = 30;
			var amt = rewardResource("helium", baseValue, 99, false, percentage);
			var text = "The land looks even healthier now that the Bad Guy is dead! <span class='helium'>You find " + prettify(amt) + " canisters of Helium and figure it was worth it.</span>";
			message(text, "Loot", "oil", "Healthy", "helium");
		},
		tooltip: function (effectName) {
			var mutText = mutationEffects[effectName].text;
			var text = "";
			if (game.global.spireActive){
				if (effectName == "none") return "This enemy is missing an effect thanks to Fluffy! It will still drop 45% of the helium you would normally get from completing this Zone.";
				text = mutText[0].toUpperCase() + mutText.substring(1);
			}
			else {
				text = "All Healthy enemies currently deal " + prettify(this.statScale(5)) + "X damage and have " + prettify(this.statScale(14)) + "X health. In addition, " + mutText;
			}
			text += " It will also drop 45% of the helium you would normally get from completing this Zone.";
			return text;
		},
		effects: ['healthyDbl', 'healthyBleed', 'healthyStrong', 'healthyTough', 'healthyCrit'],
		namePrefix: 'Healthy'
	}
}

var mutationEffects = {
	corruptDbl: {
		icon: 'icomoon icon-pushpin',
		text: '这个敌人攻击两次，一次在你之前，一次在你之后。',
		title: '腐化耐力'
	},
	corruptCrit: {
		icon: 'icomoon icon-heart6',
		text: '这个敌人有25％的几率对你造成400％的额外伤害。',
		title: '腐化精准'
	},
	corruptBleed: {
		icon: "icomoon icon-drop",
		text: '每次当这个敌人攻击时，你就会失去<b>当前</b>生命值的20％。',
		title: '腐化锋利'
	},
	corruptStrong: {
		icon: 'icomoon icon-hammer',
		text: '这个敌人有额外的2倍攻击。',
		title: '腐化力量'
	},
	corruptTough: {
		icon: 'icomoon icon-shield2',
		text: '这个敌人有额外的5倍生命值。',
		title: '腐化坚韧'
	},
	corruptDodge: {
		icon: 'icomoon icon-air',
		text: '这个敌人有30%的几率闪躲你的攻击。',
		title: '腐化敏捷'
	},
	healthyDbl: {
		icon: 'icomoon icon-pushpin',
		text: '这个敌人以1.5倍伤害攻击你两次，一次在你之前，一次在你之后。',
		title: 'Healthy and Tireless'
	},
	healthyCrit: {
		icon: 'icomoon icon-heart6',
		text: '这个敌人有25%的概率以600%的额外伤害对你暴击。',
		title: 'Healthy and Precise'
	},
	healthyBleed: {
		icon: "icomoon icon-drop",
		text: '每次这个敌人攻击时，你都会损失你<b>当前</b>生命值的30%。',
		title: 'Healthy and Sharp'
	},
	healthyStrong: {
		icon: 'icomoon icon-hammer',
		text: '这个敌人有额外2.5倍的伤害。',
		title: 'Healthy and Strong'
	},
	healthyTough: {
		icon: 'icomoon icon-shield2',
		text: '这个敌人有额外7.5倍的生命值。',
		title: 'Healthy and Tough'
	},
	none: {
		icon: 'glyphicon glyphicon-star-empty',
		text: '',
		title: 'Emptiness'
	}
}

var visualMutations = {
	Pumpkimp: {
		active: function (){
			return false;

			if (game.global.world == 1) return false;
			if (checkIfSpireWorld()) return false;
			return (getRandomIntSeeded(game.global.holidaySeed++, 0, 100) < 5);
		},
		pattern: function(currentArray) {
			var loc = getRandomIntSeeded(game.global.mutationSeed++, 0, 4);
			var design = [1,2,3,4,5,10,11,12,13,14,15,16,20,21,25,26,30,32,33,34,36,40,41,42,44,45,46,50,51,52,53,54,55,56,60,61,63,65,66,71,72,73,74,75,82,83,84,93];
			for (var x = 0; x < 100 - loc; x++){
				if (currentArray[x + loc] == "" && design.indexOf(x) != -1) currentArray[x + loc] = "Pumpkimp";
			}
            return currentArray;
		},
		highlightMob: "Pumpkimp"
	},
	TrimpmasSnow: {
		active: function() {
			return false;
			return (game.options.menu.showSnow.enabled);
		},
		pattern: function(currentArray, mutationArray) {
			var winner, i, l = currentArray.length;
			for(i = 0; i < l; i++) {
				winner = "";
				if (mutationArray[i] === ""){
					if ((i % 10) > 0 && mutationArray[i - 1]){
						winner = mutationArray[i - 1];
					}
					if (winner != "Healthy" && i > 9 && mutationArray[i - 10]){
						winner = mutationArray[i - 10];
					}
					if (winner != "Healthy" && i < 90 && mutationArray[i + 10]){
						winner = mutationArray[i + 10];
					}
					if (winner != "Healthy" && (i % 10 < 9) && mutationArray[i + 1]){
						winner = mutationArray[i + 1];
					}
					if (winner == "Healthy")
						winner = "HealthySnow";
					else if (winner == "Magma")
						winner = "HotSnow";
					else if (winner == "Corruption")
						winner = "CorruptSnow";
					else winner = "";
					currentArray[i] = (winner) ? winner : "TrimpmasSnow";
				}
				else currentArray[i] = "TrimpmasSnow";
			}
			return currentArray;
		},
		namePrefix: "Snowy"
	},
	CorruptSnow: {
		active: function () {
			return false;
		},
		namePrefix: "Snowy"
	},
	HotSnow: {
		active: function () {
			return false;
		},
		namePrefix: "Snowy"
	},
	HealthySnow: {
		active: function () {
			return false;
		},
		namePrefix: "Snowy"
	},
	
}

function startTheMagma(){
	if (game.global.challengeActive == "Obliterated") giveSingleAchieve("Melted");
	var reward = (game.global.runningChallengeSquared) ? 0 : rewardResource("helium", 60, 99);
	tooltip('The Magma', null, 'update', reward);
	var genSetting = game.options.menu.generatorStart.enabled;
	if (game.global.challengeActive == "Eradicated") game.global.generatorMode = 1;
	else if (genSetting){
		if (genSetting == 3 && game.permanentGeneratorUpgrades.Hybridization.owned) game.global.generatorMode = 2;
		else if (genSetting == 2) game.global.generatorMode = 0;
		else if (genSetting == 1) game.global.generatorMode = 1;
		else {
			game.global.generatorMode = 0;
			game.options.menu.generatorStart.enabled = 0;
		}
	}
	drawAllBuildings();
	if (game.global.challengeActive == "Eradicated") return;
	if (game.global.challengeActive != 'Trimp')
		game.upgrades.Coordination.allowed += 100;
	else game.challenges.Trimp.heldBooks += 100;
	drawAllUpgrades();
}

function decayNurseries(){
	if (game.buildings.Nursery.owned <= 0) return;
	var afterDecay = Math.floor(game.buildings.Nursery.owned * 0.9);
	var decayed = (game.buildings.Nursery.owned - afterDecay)
	game.stats.decayedNurseries.value += decayed;
	if (decayed >= 750) giveSingleAchieve("Wildfire");
	game.buildings.Nursery.owned = afterDecay;

}

function getMagmiteReward(){
/* 	var amt = game.global.world - 230;
	amt = Math.floor(amt / 5) + 1;
	return amt; */
	return 1;
}

function canAffordGeneratorUpgrade(){
	for (var unlock in game.generatorUpgrades){
		if (game.global.magmite >= game.generatorUpgrades[unlock].cost())
			return true;
	}
	for (var permUnlock in game.permanentGeneratorUpgrades){
		if (!game.permanentGeneratorUpgrades[permUnlock].owned && game.global.magmite >= game.permanentGeneratorUpgrades[permUnlock].cost)
			return true;
	}
	return false;
}


function getGeneratorFuelCap(includeStorage, checkingHybrid){
	var cap = game.generatorUpgrades.Capacity.modifier;
	if (game.permanentGeneratorUpgrades.Supervision.owned && game.global.supervisionSetting < 100){
		cap *= (game.global.supervisionSetting / 100);
	}
	if (checkingHybrid && game.permanentGeneratorUpgrades.Storage.owned){
		return cap * 1.5;
	}
	if (includeStorage && game.permanentGeneratorUpgrades.Storage.owned){
		return cap * 2;
	}
	else return cap;
}

function increaseTheHeat(){
	if (game.resources.trimps.soldiers > 0) {
		var newMult = mutations.Magma.getTrimpDecayMult(game.global.world);
		game.global.soldierCurrentAttack *= newMult;
		game.global.soldierHealthMax *= newMult;
		if (game.global.soldierHealth > game.global.soldierHealthMax)
			game.global.soldierHealth = game.global.soldierHealthMax;
		if (game.global.soldierHealth <= 0) game.global.soldierHealth = 0;
	}
}

function updateGeneratorInfo(){
	if (!mutations.Magma.active()) return;
	var elem = document.getElementById('generatorWindow');
	//update fuel
	var currentFuel = game.global.magmaFuel;
	//update efficiency
	var nextTickAmount = getGeneratorTickAmount();

	//get state
	var state = ['Passive', 'Active', 'Hybrid'];
	state = state[game.global.generatorMode];
	if (elem == null){
		document.getElementById('buildingsHere').innerHTML += getGeneratorHtml(true);
	}
	changeGeneratorState(null, true);
	if (game.permanentGeneratorUpgrades.Hybridization.owned) document.getElementById('generatorHybridBtn').style.display = 'inline-block';
	if (game.permanentGeneratorUpgrades.Supervision.owned) document.getElementById('generatorStateConfigBtn').style.display = 'inline-block';
	updateGeneratorFuel();
	document.getElementById('generatorTrimpsPs').innerHTML = prettify(scaleNumberForBonusHousing(nextTickAmount));
	document.getElementById('upgradeMagmiteTotal').innerHTML = prettify(game.global.magmite) + " 岩浆岩";
}

function saveGenStateConfig(){
	var errorElem = document.getElementById('genStateConfigError');
	if (!errorElem) return;
	var inputs = document.getElementsByClassName("genStateConfigInput");
	for (var x = 0; x < inputs.length; x++){
		var scrollElem = document.getElementById('genStateConfigScroll' + x);
		if (!scrollElem || !inputs[x]) return;
		var newSetting = [parseInt(scrollElem.dataset.value, 10), parseInt(inputs[x].value, 10)];
		if (isNumberBad(newSetting[1])){
			errorElem.innerHTML = scrollElem.value + " is not a valid number";
			return;
		}
		if (newSetting[1] < 231 && newSetting[1] != 0) {
			errorElem.innerHTML = "Must use either 0 or a Zone number larger than 230";
			return;
		}
		if (game.global.genStateConfig.length <= x) game.global.genStateConfig.push(newSetting)
		else game.global.genStateConfig[x] = newSetting;
	}
	refreshGenStateConfigTooltip();
	cancelTooltip();
}

function getGenStateConfigTooltip(){
	var tooltipText = "<div id='genStateConfigTop'><div style='font-size: 1.2vw; text-align: right; width: 40%; margin-right: 10%; display: inline-block;'>Starting Setting: </div>" + getSettingHtml(game.options.menu.generatorStart, 'generatorStart', null, "Popup") + "</div>";
	var savedSettings = game.global.genStateConfig;
	var btnsAllowed = 2;
	for (var x = 0; x < btnsAllowed; x++){
		var thisSetting;
		if (savedSettings.length <= x) thisSetting = [-1, 0];
		else thisSetting = savedSettings[x];
		tooltipText += "<div>";
		tooltipText += '<div style="text-align: right; width: 40%; margin-right: 10%; display: inline-block; font-size: 1.2vw;">At Zone <input class="genStateConfigInput" type="number" style="width: 50%; padding-left: 0.6vw;" id="genStateConfigInput' + x + '" value="' + thisSetting[1] + '">: </div>'
		tooltipText += '<div data-value="' + thisSetting[0] + '" style="display: inline-block; width: 50%;" id="genStateConfigScroll' + x + '" class="genStateConfigScroll noselect settingsBtn settingBtn' + (thisSetting[0] + 1) + '" onclick="toggleGenStateConfig(this, ' + x + ')">' + getGenStateConfigBtnText(thisSetting[0]) + '</div>';
		tooltipText += "</div>";
	}
	tooltipText += "</div>";
	return tooltipText;
}

function refreshGenStateConfigTooltip(){
	var elem = document.getElementById('genStateConfigTooltip');
	if (elem) elem.innerHTML = getGenStateConfigTooltip();
}

function toggleGenStateConfig(elem, num){
	var currentSetting = parseInt(elem.dataset.value, 10);
	currentSetting++;
	if (currentSetting == 3) currentSetting = -1;
	elem.dataset.value = currentSetting;
	swapClass('settingBtn', 'settingBtn' + (currentSetting + 1), elem);
	elem.innerHTML = getGenStateConfigBtnText(currentSetting);
}

function getGenStateConfigBtnText(num){
	var text;
	switch(num){
		case -1: text = "Don't Change At Zone"; break;
		case 0: text = "Set to Gain Fuel"; break;
		case 1: text = "Set to Gain Mi"; break;
		case 2: text = "Set to Hybrid"; break;
	}
	return text;
}

function checkGenStateSwitch(){
	if (game.global.genStateConfig.length < 1) return -1;
	if (!game.permanentGeneratorUpgrades.Supervision.owned) return;
	if (game.global.world < 231) return;
	var world = game.global.world;
	for (var x = 0; x < game.global.genStateConfig.length; x++){
		if (game.global.genStateConfig[x][1] == world) {
			var setTo = game.global.genStateConfig[x][0];
			//great, changeGeneratorState has fuel on 1 and mi on 0, and the settings are the opposite.
			if (setTo == 0) setTo = 1;
			else if (setTo == 1) setTo = 0;
			if (setTo >= 0 && setTo <= 2) changeGeneratorState(setTo);
			return;
		}
	}
	
}

function getGeneratorHtml(getContainer){
	var html = "";
	if (getContainer)
		html += "<div class='thing generatorState' id='generatorWindow'>"
	html += "<div id='genTitleContainer'><div id='generatorTitle'>维度发生器</div>";
	html += "<div id='dgChangeBtnContainer'" + ((game.global.challengeActive == "Eradicated") ? " class='eradicatedBtns'" : "") + "><span id='generatorActiveBtn' onclick='changeGeneratorState(1)' class='dgChangeBtn pointer noselect colorDanger hoverColor'>获得燃料</span> <span onclick='changeGeneratorState(0)' id='generatorPassiveBtn' class='dgChangeBtn pointer noselect colorPrimary hoverColor'>获得岩浆岩</span> <span onclick='changeGeneratorState(2)' id='generatorHybridBtn' class='dgChangeBtn pointer noselect colorTeal hoverColor' style='display: none'>混合动力</span> <span style='display: none' onclick='tooltip(\"Configure Generator State\", null, \"update\")' id='generatorStateConfigBtn' class='pointer noselect hoverColor dgChangeBtn colorDefault'><span class='glyphicon glyphicon-cog'></span></span></div>";
	html += "<div id='generatorUpgradeBtn' onclick='tooltip(\"Upgrade Generator\", null, \"update\")'class='workBtn pointer noselect colorDark hoverColor'>升级 (<span id='upgradeMagmiteTotal'></span>)</div></div><div id='genGaugeContainer'><div class='row'><div class='col-xs-4'><div id='fuelContainer'><div id='fuelBar'></div><div id='fuelStorageBar'></div><div id='fuelGlass'></div><div id='fuelOwnedText'>燃料<br/><span id='generatorFuelOwned'>0</span> / <span id='generatorFuelMax'>0</span></div></div></div>"
	if (game.permanentGeneratorUpgrades.Supervision.owned)
		html += "<div class='col-xs-4 hasSlider' id='generatorProducingColumn'><div id='generatorProducingContainer'>Producing<br/><span id='generatorTrimpsPs'>0</span><br/>Housing/Tick</div><div id='generatorSliderBox'><input id='generatorSlider' onchange='saveSupervisionSetting()' type='range' min='1' max='100' value='" + game.global.supervisionSetting + "' /></div></div>";
	else
		html += "<div class='col-xs-4' id='generatorProducingColumn'><div id='generatorProducingContainer'>生产<br/><span id='generatorTrimpsPs'>0</span><br/>人口上限/次</div></div>";
	html += "<div class='col-xs-4'><div id='generatorTickContainer' onclick='pauseGenerator()' onmouseover='updatePauseBtn(true)' onmouseout='updatePauseBtn(false)'" + ((game.permanentGeneratorUpgrades.Supervision.owned) ? " style='cursor: pointer'" : "") + "> <div id='generatorRadialContainer' class='radial-progress'> <div class='radial-progress-circle'> <div class='radial-progress-arrow static''></div></div><div id='generatorRadial' class='radial-progress-circle'> <div class='radial-progress-arrow mobile'></div> </div> <div id='clockKnob' class='radial-progress-knob generatorState'></div></div><span id='generatorNextTick' style='pointer-events: none;'>0</span></div></div></div></div>";
	if (getContainer) html += "</div>";
	return html;
}

var mousedOverClock = false;
function updatePauseBtn(show){
	if (!game.permanentGeneratorUpgrades.Supervision.owned) return;
	mousedOverClock = show;
	if (show && !game.global.genPaused){
		document.getElementById('generatorNextTick').innerHTML = "<span class='icomoon icon-pause3'></span>";
	}
	else if (show){
		document.getElementById('generatorNextTick').innerHTML = "<span class='icomoon icon-controller-play'></span>";
	}
	else {
		updateNextGeneratorTickTime();
	}
	
}

function pauseGenerator(updateOnly){
	if (!game.permanentGeneratorUpgrades.Supervision.owned) return;
	if (!updateOnly) game.global.genPaused = !game.global.genPaused;
	updateNextGeneratorTickTime();
	changeGeneratorState(null, true);
}

function saveSupervisionSetting(){
	var elem = document.getElementById('generatorSlider');
	if (!elem) return;
	var value = parseInt(elem.value, 10);
	if (isNaN(value)) return;
	value = Math.round(value);
	if (value < 1) value = 1;
	if (value > 100) value = 100;
	game.global.supervisionSetting = value;
	updateGeneratorInfo();
}

function scaleNumberForBonusHousing(num){
	if (game.portal.Carpentry.level > 0) num = Math.floor(num * (Math.pow(1 + game.portal.Carpentry.modifier, game.portal.Carpentry.level)));
	if (game.portal.Carpentry_II.level > 0) num = Math.floor(num * (1 + (game.portal.Carpentry_II.modifier * game.portal.Carpentry_II.level)));
	if (game.global.challengeActive == "Daily" && typeof game.global.dailyChallenge.large !== "undefined")
		num = Math.floor(num * dailyModifiers.large.getMult(game.global.dailyChallenge.large.strength));
	if (game.global.challengeActive == "Size")
		num *= 0.5;
	return num;
}

function buyGeneratorUpgrade(item){
	if (item == "Overclocker" && (!game.permanentGeneratorUpgrades.Hybridization.owned || !game.permanentGeneratorUpgrades.Storage.owned))
		return;
	var upgrade = game.generatorUpgrades[item];
	if (typeof upgrade === 'undefined') {
		buyPermanentGeneratorUpgrade(item);
		return;
	}
	var cost = upgrade.cost();
	if (game.global.magmite < cost) return;
	game.global.magmite -= cost;
	if (game.global.magmite <= 0) game.global.magmite = 0;
	if (typeof upgrade.nextModifier !== 'undefined')
		upgrade.modifier = upgrade.nextModifier();
	upgrade.upgrades++;
	updateGeneratorUpgradeHtml();
	updateGeneratorInfo();
	showGeneratorUpgradeInfo(item);
}

function buyPermanentGeneratorUpgrade(item){
	var upgrade = game.permanentGeneratorUpgrades[item];
	if (typeof upgrade === 'undefined') return;
	var cost = upgrade.cost;
	if (game.global.magmite < cost) return;
	if (upgrade.owned) return;
	game.global.magmite -= cost;
	if (game.global.magmite <= 0) game.global.magmite = 0;
	upgrade.owned = true;
	updateGeneratorUpgradeHtml();
	updateGeneratorInfo();
	showGeneratorUpgradeInfo(item, true);
	if (typeof upgrade.onPurchase !== 'undefined') upgrade.onPurchase();
}

function getGeneratorUpgradeHtml(){
		var tooltipText = "<div id='generatorUpgradeTooltip'>";
		tooltipText += "<div class='generatorUpgradeTitle'>多次升级项</div>";
		for (var item in game.generatorUpgrades){
			tooltipText += "<div class='thing pointer noselect thingColor' onclick='showGeneratorUpgradeInfo(\"" + item + "\")' id='generatorUpgrade" + item + "'></div>";
		}
		tooltipText += "<div class='generatorUpgradeTitle'>单次升级项</div>";
		for (var item in game.permanentGeneratorUpgrades){
			tooltipText += "<div class='thing pointer noselect thingColor permGenUpgrade' onclick='showGeneratorUpgradeInfo(\"" + item + "\", true)' id='generatorUpgrade" + item + "'></div>";
		}
		tooltipText += "<br/><div id='generatorUpgradeDescription' class='noselect'><b>点击一项升级来了解更多!</b><br/></div>";
		tooltipText += "</div>";
		return tooltipText;
}

function updateGeneratorUpgradeHtml(){
	if (document.getElementById('generatorUpgradeTooltip') == null) return;
	for (var item in game.generatorUpgrades){
		var elem = document.getElementById('generatorUpgrade' + item);
		if (elem == null) continue;
		var upgrade = game.generatorUpgrades[item];
		var cost = upgrade.cost();
		var text = cngen(item) + "<br/>" + upgrade.upgrades;
		elem.innerHTML = text;
		var state = (game.global.magmite >= cost) ? "CanAfford" : "CanNotAfford";
		if (item == "Overclocker" && (!game.permanentGeneratorUpgrades.Hybridization.owned || !game.permanentGeneratorUpgrades.Storage.owned))
			state = "CanNotAfford";
		swapClass('thingColor', 'thingColor' + state, elem);
	}
	for (var item in game.permanentGeneratorUpgrades){
		var elem = document.getElementById('generatorUpgrade' + item);
		if (elem == null) continue;
		var upgrade = game.permanentGeneratorUpgrades[item];
		var cost = upgrade.cost;
		var text = cngen(item) + "<br/>";
		text += (upgrade.owned) ? "已完成" : prettify(cost) + " 岩浆岩";
		elem.innerHTML = text;
		var state;
		if (upgrade.owned)
			state = "Done";
		else
			state = (game.global.magmite >= cost) ? "CanAfford" : "CanNotAfford";
		swapClass('thingColor', 'thingColor' + state, elem);
	}
	var magmiteElem = document.getElementById('magmiteOwned');
	if (magmiteElem != null) magmiteElem.innerHTML = "岩浆岩: " + prettify(game.global.magmite) + "<br/>";
	if (document.getElementById('magmiteCost') != null && lastViewedDGUpgrade)
		showGeneratorUpgradeInfo(lastViewedDGUpgrade[0], lastViewedDGUpgrade[1]);
}


function getGeneratorTickTime(){
	var baseTick = 60;
	var zoneMult = (game.talents.quickGen.purchased) ? 1.03 : 1.02;
	var tickTime = Math.ceil(1 / Math.pow(zoneMult, Math.floor((game.global.world - mutations.Magma.start()) / 3)) * baseTick * 10) / 10;
	return (tickTime < 5) ? 5 : tickTime;
}

function canGeneratorTick(){
	return (game.global.timeSinceLastGeneratorTick >= (getGeneratorTickTime() * 1000));
}

var lastViewedDGUpgrade;
function showGeneratorUpgradeInfo(item, permanent){
	var elem = document.getElementById('generatorUpgradeDescription');
	if (elem == null) return;
	var description;
	var cost;
	if (permanent) {
		description = game.permanentGeneratorUpgrades[item].description;
		cost = game.permanentGeneratorUpgrades[item].cost;
	}
	else {
		description = game.generatorUpgrades[item].description();
		cost = game.generatorUpgrades[item].cost();
	}
	var color = (game.global.magmite >= cost) ? "Success" : "Danger";
	if (item == "Overclocker" && (!game.permanentGeneratorUpgrades.Hybridization.owned || !game.permanentGeneratorUpgrades.Storage.owned))
			color = "Danger";
	var text;
	if (permanent && game.permanentGeneratorUpgrades[item].owned){
		color = "Grey";
		text = "已完成";
	}
	else text = "购买: " + prettify(cost) + " 岩浆岩";
	elem.innerHTML = "<div id='generatorUpgradeName'>" + cngen(item) + "</div><div onclick='buyGeneratorUpgrade(\"" + item + "\")' id='magmiteCost' class='pointer noSelect hoverColor color" + color + "'>" + text + "</div>" + description + "<br/>";
	lastViewedDGUpgrade = [item, permanent];
	verticalCenterTooltip();
}

var thisTime = 0;
function updateNextGeneratorTickTime(){
	//update tick time
	if (game.global.genPaused){
		document.getElementById('generatorNextTick').innerHTML = (mousedOverClock) ? "<span class='icomoon icon-controller-play'></span>" : '<span class="icomoon icon-pause3"></span>';
		return;
	}
    var tickTime = getGeneratorTickTime();
    var nextTickIn = (tickTime * 1000) - game.global.timeSinceLastGeneratorTick;
    var framesPerVisual = 10;
    nextTickIn /= 1000;
    nextTickIn = (isNumberBad(nextTickIn)) ? 0 : nextTickIn;
    nextTickIn = Math.round(nextTickIn * 10) / 10;
	if(Math.round((nextTickIn + 0.1) * 10) / 10 == tickTime) {
		thisTime = framesPerVisual - 1;
	}
    document.getElementById('generatorNextTick').innerHTML = (mousedOverClock && game.permanentGeneratorUpgrades.Supervision.owned) ? "<span class='icomoon icon-pause3'></span>" : prettify(Math.floor(nextTickIn + 1));
    var countingTick = Math.round((tickTime - nextTickIn) * 10) / 10;
    countingTick = Math.round(countingTick * 10) / 10;
	if (thisTime >= framesPerVisual - 1) {
		thisTime = 0;
		var timeRemaining = tickTime - countingTick;
		if(timeRemaining != 0 && timeRemaining <= framesPerVisual / 10) {
			timeRemaining -= 0.1;
			timeRemaining = Math.round(timeRemaining * 10) / 10;
			thisTime = framesPerVisual;
			framesPerVisual = timeRemaining * 10;
			thisTime -= framesPerVisual;
		}
		goRadial(document.getElementById('generatorRadial'), countingTick, tickTime, 100 * framesPerVisual);
	}
    else thisTime++;
}

function updateGeneratorFuel(){
	var currentFuel = game.global.magmaFuel;
	var maxFuel = getGeneratorFuelCap();
	document.getElementById('generatorFuelOwned').innerHTML = prettify(currentFuel);
	document.getElementById('generatorFuelMax').innerHTML = prettify(maxFuel);
	var bar = document.getElementById('fuelStorageBar');
	var percent;
	if (currentFuel > maxFuel) {
		var storageCap = getGeneratorFuelCap(true);

		percent = Math.ceil(((currentFuel - maxFuel) / (storageCap - maxFuel)) * 100);
		if (percent > 100) percent = 100;
		if (percent < 0) percent = 0;
		//bar.style.top = (100 - percent) + "%";
		bar.style.height = percent + "%";
	}
	else {
		//bar.style.top = "100%";
		bar.style.height = "0%";
	}
	bar = document.getElementById('fuelBar');
	percent = Math.ceil((currentFuel / maxFuel) * 100);
	if (percent > 100) percent = 100;
	//bar.style.top = (100 - percent) + "%";
	bar.style.height = percent + "%";

}

function changeGeneratorState(to, updateOnly){
	//0 passive, 1 active, 2 hybrid
	if (game.global.challengeActive == "Eradicated") to = 1;
	if (!updateOnly)
		game.global.generatorMode = to;
	to = game.global.generatorMode;
	if (game.global.genPaused) to = 0;
	if (game.global.genPaused && game.global.challengeActive == "Eradicated") to = 1;
	if (to == 2){
		if (game.global.magmaFuel < getGeneratorFuelCap(false, true)){
			to = 3;
		}
	}
	var state = ['Passive', 'Active', 'HybridPassive', 'HybridActive'];
	state = state[to];
	swapClass('generatorState', 'generatorState' + state, document.getElementById('generatorWindow'));
	swapClass('generatorState', 'generatorState' + state, document.getElementById('clockKnob'));
}

function generatorTick(fromOverclock){
	if (!mutations.Magma.active()) return;
	if (game.global.genPaused){
		updateNextGeneratorTickTime();
		return;
	}
	var fuelRate = getFuelBurnRate();
	if (!fromOverclock){
		if (game.global.magmaFuel < fuelRate) return;
		game.global.timeSinceLastGeneratorTick += 100;
		updateNextGeneratorTickTime();
		if (!canGeneratorTick()) {
			return;
		}
	}
	checkAchieve("housing", "Generator");
	var tickAmt = getGeneratorTickAmount();
	if (fromOverclock) tickAmt *= (1 - game.generatorUpgrades.Overclocker.modifier);
	var scaledTick = addMaxHousing(tickAmt, game.permanentGeneratorUpgrades.Simulacrum.owned);
	game.stats.trimpsGenerated.value += scaledTick;
	game.global.trimpsGenerated += tickAmt;
	game.global.magmaFuel = Math.round((game.global.magmaFuel - fuelRate) * 100) / 100;
	if (!fromOverclock){
		if (game.global.magmaFuel >= fuelRate)
			game.global.timeSinceLastGeneratorTick = 0;
		else {
			game.global.timeSinceLastGeneratorTick = 0;
			goRadial(document.getElementById('generatorRadial'), 0, 10, 0);
			document.getElementById('generatorNextTick').innerHTML = 0;
		}
	}
	updateGeneratorInfo();
	changeGeneratorState(null, true);
}

function addMaxHousing(amt, giveTrimps){
	var wasFull = (game.resources.trimps.owned == game.resources.trimps.realMax());
	game.resources.trimps.max += amt;
	amt = scaleNumberForBonusHousing(amt);
	if (game.global.challengeActive == "Trapper") return amt;
	if (!giveTrimps) return amt;
	if (wasFull){
		game.resources.trimps.owned = game.resources.trimps.realMax();
		return amt;
	}
	game.resources.trimps.owned += amt;
	return amt;
}

function getGeneratorTickAmount(){
	var fuelAmt = getGeneratorFuelCap();
	fuelAmt = (game.global.magmaFuel > fuelAmt) ? fuelAmt : game.global.magmaFuel;
	return game.generatorUpgrades.Efficiency.tickAtFuel(fuelAmt);
}

function getFuelBurnRate(){
	var rate = 0.5;
	if (game.permanentGeneratorUpgrades.Slowburn.owned) rate -= 0.1;
	return rate;
}

function getMagmiteDecayAmt(){
	var rate = 30;
	if (game.permanentGeneratorUpgrades.Shielding.owned)
		rate -= 10;
	return rate;
}

var canSkeletimp = false;
function buildGrid() {
    var world = game.global.world;
    var array = [];
	var imports = [];
	for (var item in game.unlocks.imps){
		if (!game.unlocks.imps[item]) continue;
		var badGuy = game.badGuys[item];
		if (badGuy.location == "World" && badGuy.world <= world){
			imports.push(item);
		}
	}
	canSkeletimp = false;
	var skeleMin = 2700000;
	if (game.talents.skeletimp2.purchased) skeleMin -= 600000
	if ((new Date().getTime() - game.global.lastSkeletimp) >= skeleMin) canSkeletimp = true;
	var corrupteds = [];
	for (var w = 0; w < 100; w++){
		corrupteds.push("");
	}
	for (var item in mutations){
		if (mutations[item].active()){
			corrupteds = mutations[item].pattern(corrupteds);
		}
	}
	var vms = [];
	for (var y = 0; y < 100; y++){
		vms.push("");
	}
	for (var vmItem in visualMutations){
		if (visualMutations[vmItem].active()){
			vms = visualMutations[vmItem].pattern(vms, corrupteds);
		}
	}
	var needsEmpower = false;
	if (game.global.challengeActive != "Eradicated" && game.global.world > 236 && game.global.world % 5 == 1)
		needsEmpower = true;
    for (var i = 0; i < 100; i++) {
        var newCell = {
            level: i + 1,
            maxHealth: -1,
            health: -1,
            attack: -1,
            special: "",
            text: "",
            name: getRandomBadGuy(null, i + 1, 100, world, imports, corrupteds[i], vms[i])
        };
		if (corrupteds[i] != "") {
			newCell.mutation = corrupteds[i];
			if ((typeof mutations[corrupteds[i]].effects !== 'undefined'))
				newCell.corrupted = getSeededRandomFromArray(game.global.mutationSeed++, mutations[corrupteds[i]].effects);
		}
		if (vms[i] != "") {
			newCell.vm = vms[i];
		}
		if ((i >= 50 && needsEmpower && typeof newCell.corrupted === 'undefined') || (i == 98 && needsEmpower)){
			newCell.empowerment = getEmpowerment(-1);
			needsEmpower = false;
		}
		array.push(newCell);
    }
    game.global.gridArray = array;
    addSpecials();
}

function getSeededRandomFromArray(seed, array){
	return array[getRandomIntSeeded(seed, 0, array.length)];
}

function getAmountInRange(maxRange, toKeep)
{
	var toShuffle = [];
	for (var w = 0; w < maxRange; w++){
		if (w != 99) toShuffle.push(w);
	}
    for (var x = Math.floor(toShuffle.length / 2); x < toShuffle.length; x++)
    {
        var random = getRandomIntSeeded(game.global.mutationSeed++, 0, toShuffle.length);
        var hold = toShuffle[x];
        toShuffle[x] = toShuffle[random];
        toShuffle[random] = hold;
    }
    return toShuffle.slice(0, toKeep);
}

function setMutationTooltip(which, mutation){
	var elem = document.getElementById('corruptionBuff');
	var effect = mutationEffects[which];
	if (typeof effect === 'undefined') return;
	if (typeof mutations[mutation].tooltip === 'undefined') return;
	elem.innerHTML = '<span class="badge badBadge ' + mutation + '" onmouseover="tooltip(\'' + effect.title + '\', \'customText\', event, \'' + mutations[mutation].tooltip(which) + '\')" onmouseout="tooltip(\'hide\')"><span class="' + effect.icon + '"></span></span>&nbsp;';
}

function setVoidCorruptionIcon(regularMap){
	var attackScale = "";
	var healthScale = "";
	if (regularMap || !mutations.Magma.active()){
		attackScale = (mutations.Corruption.statScale(3) / 2);
		healthScale = (mutations.Corruption.statScale(10) / 2);
	}
	else {
		attackScale = (mutations.Corruption.statScale(3));
		healthScale = (mutations.Corruption.statScale(10));
	}
	var text = "这个 " + ((regularMap) ? "地图" : "虚空地图") + "因为腐化而变得不稳定。敌人的攻击增长" + prettify(attackScale) + "倍,生命值增长" + prettify(healthScale) + "倍。";
	var title = "";
	if (!regularMap){
		text += "地图末尾的氦现在变为你在世界区域赚得的两倍，包括腐化房间！";
		title = "虚空腐化";
	}
	else title = "地图腐化";
	document.getElementById('corruptionBuff').innerHTML = '<span class="badge badBadge voidBadge" onmouseover="tooltip(\'' + title + '\', \'customText\', event, \'' + text + '\')" onmouseout="tooltip(\'hide\')"><span class="glyphicon glyphicon-plus"></span></span>&nbsp;';
}

function getRandomBadGuy(mapSuffix, level, totalCells, world, imports, mutation, visualMutation) {
	var selected;
	var force = false;
	var enemySeed = (mapSuffix) ? Math.floor(Math.random() * 10000000) : game.global.enemySeed;
    var badGuysArray = [];
    for (var item in game.badGuys) {
		var badGuy = game.badGuys[item];
		if (badGuy.locked) continue;
		if (badGuy.location == "Maps" && !mapSuffix) continue;
		var locationMatch = false;
		if (mapSuffix && badGuy.location2 && badGuy.location2 == mapSuffix) locationMatch = true;
		if (mapSuffix && badGuy.location == mapSuffix) locationMatch = true;
		if (level == totalCells && badGuy.last && (locationMatch || (!mapSuffix && badGuy.location == "World")) && world >= badGuy.world) {
			if (item == "Blimp" && (world != 5 && world  != 10 && world < 15)) continue;
			if (!mapSuffix && (game.global.brokenPlanet || game.global.world == 59) && item == "Blimp"){
				if (mutations.Magma.active())
					item = "Omnipotrimp";
				else
					item = "Improbability";
			}
			selected = item;
			force = true;
			break;
		}
		if (!badGuy.last && (typeof badGuy.world === 'undefined' || game.global.world >= game.badGuys[item].world) && (badGuy.location == "All" || (mapSuffix && (badGuy.location == "Maps" || locationMatch)) || (!mapSuffix && badGuy.location == "World"))){
			badGuysArray.push(item);
		}
	}
	if (!mapSuffix && canSkeletimp && !force && (getRandomIntSeeded(enemySeed++, 0, 100) < 5)) {
		canSkeletimp = false;
		game.global.enemySeed = enemySeed;
		return (getRandomIntSeeded(game.global.skeleSeed++, 0, 100) < ((game.talents.skeletimp.purchased) ? 20 : 10)) ? "Megaskeletimp" : "Skeletimp";
	}
	if (imports.length && !force && (getRandomIntSeeded(enemySeed++, 0, 100) < (imports.length * 3))){
		game.global.enemySeed = enemySeed;
		return imports[getRandomIntSeeded(enemySeed++, 0, imports.length)];
	}
	if (!mapSuffix && !force) {
		var chance = .35 * (1 / (100 - 1 - (3 * imports.length)));

		chance = Math.round(chance * 100000);
		if (game.talents.turkimp2.purchased) chance *= 1.33;
		var roll = getRandomIntSeeded(enemySeed++, 0, 100000);
		if (roll < chance) {
			if (!mapSuffix) game.global.enemySeed = enemySeed;
			return "Turkimp";
		}
	}
	//Halloween
	if (!mapSuffix && !force && visualMutation == 'Pumpkimp'){
		if (getRandomIntSeeded(enemySeed++, 0, 10) < 5){
			game.global.enemySeed = enemySeed;
			 return "Pumpkimp";
		}
	}
	if (game.global.challengeActive == "Daily"  && typeof game.global.dailyChallenge.mutimps !== 'undefined' && !mapSuffix && !force){
		var mutStr = game.global.dailyChallenge.mutimps.strength;
		if (level <= dailyModifiers.mutimps.getMaxCellNum(mutStr)){
			var mobName = mutStr < 6 ? "Mutimp" : "Hulking_Mutimp";
			if (getRandomIntSeeded(enemySeed++, 0, 10) < 4){
				game.global.enemySeed = enemySeed;
				return mobName;
			}
		}
	}
	if (!force) selected = badGuysArray[getRandomIntSeeded(enemySeed++, 0, badGuysArray.length)];
	if (!mapSuffix) game.global.enemySeed = enemySeed;
	return selected;

}

function convertUnlockIconToSpan(special){
	var title = "";
	if (special.title) title = "title='" + special.title + "' ";
	var prefix = "";
	var icon = special.icon;
		if (icon && icon.charAt(0) == "*") {
			icon = icon.replace("*", "");
			prefix =  "icomoon icon-"
		}
		else prefix = "glyphicon glyphicon-";
    return '<span ' + title + 'class="' + prefix + icon + '"></span>';
}

function addSpecialToLast(special, array, item) {
    array[array.length - 1].text = convertUnlockIconToSpan(special);
    array[array.length - 1].special = item;
    return array;
}

function addSpecialToNthLast(special, array, item, n){
	array[array.length - n].text = convertUnlockIconToSpan(special);
	array[array.length - n].special = item;
	return array;
}

function addSpecials(maps, countOnly, map, getPrestiges) { //countOnly must include map. Only counts upgrades set to spawn on "last".
	var specialCount = 0;
	var array;
	var unlocksObj;
	var world;
	var max;
	var prestigeArray = [];
	var hasPrestigious = false;
	if (getPrestiges) map = {location: "All", level: game.global.world, size: 100}
    if (maps) {
        array = game.global.mapGridArray;
        unlocksObj = game.mapUnlocks;
		if (!countOnly) map = game.global.mapsOwnedArray[getMapIndex(game.global.currentMapId)];
		hasPrestigious = (game.global.mapExtraBonus == "p" || (map.location == "Bionic" && game.talents.bionic2.purchased));
		world = map.level;
        max = map.size;
    } else {
        array = game.global.gridArray;
        unlocksObj = game.worldUnlocks;
        world = game.global.world;
        max = 100;
	}
    var canLast = 1;
	var prestigeItemsAvailable = [];
    for (var item in unlocksObj) {
        var special = unlocksObj[item];
		if (special.locked) continue;
		if (item == "easterEgg"){
			game.global.eggSeed += 3;
			if (seededRandom(game.global.eggSeed) >= special.chance) continue;
		}
		if (special.brokenPlanet && ((special.brokenPlanet == 1 && !game.global.brokenPlanet) || special.brokenPlanet == -1 && game.global.brokenPlanet)) continue;
		if (map && game.global.challengeActive == "Frugal" && special.prestige) continue;
		if (special.startAt < 0) continue;
		if (special.lastAt < game.global.world) continue;
		if ((maps) && (special.filterUpgrade)){
			var mapConfigLoc = game.mapConfig.locations[map.location];
			if (typeof mapConfigLoc.upgrade === 'object'){
				var usable = false;
				for (var x = 0; x < mapConfigLoc.upgrade.length; x++){
					if (mapConfigLoc.upgrade[x] != item) continue;
					usable = true;
					break;
				}
				if (!usable) continue;
			}
			else if (mapConfigLoc.upgrade != item) continue;
		}
        if ((special.level == "last" && canLast > 0 && special.world <= world && (special.canRunOnce || special.canRunWhenever))) {
			if (canLast == 2 && !special.prestige) continue;
			if (typeof special.specialFilter !== 'undefined'){
				if (!special.specialFilter(world)) continue;
			}
			if (special.startAt > world) continue;
			if (countOnly){
					specialCount++;
					continue;
				}
			array = addSpecialToLast(special, array, item);
			if (hasPrestigious && canLast == 1 && item == "roboTrimp")
				canLast = 3;
			else
				canLast = 0;
			continue;
        }

        if (typeof special.canRunOnce !== 'undefined' && !special.canRunOnce) continue;

        if (special.world != world && special.world > 0) continue;
        if ((special.world == -2) && ((world % 2) !== 0)) continue;
        if ((special.world == -3) && ((world % 2) != 1)) continue;
        if ((special.world == -5) && ((world % 5) !== 0)) continue;
        if ((special.world == -33) && ((world % 3) !== 0)) continue;
		if ((special.world == -10) && ((world % 10) !== 0)) continue;
		if ((special.world == -20) && ((world % 20) !== 0)) continue;
		if ((special.world == -25) && ((world % 25) !== 0)) continue;
		if ((maps) && (special.filter) && game.mapConfig.locations[map.location].resourceType != item) continue;
		if (typeof special.specialFilter !== 'undefined'){
			if (!special.specialFilter(world)) continue;
		}
        if ((typeof special.startAt !== 'undefined') && (special.startAt > world)) continue;
        if (typeof special.canRunOnce === 'undefined' && (special.level == "last") && canLast > 0 && (special.last <= (world - 5))) {
			if (!countOnly)
			if (canLast == 2 && !special.prestige) continue;
			if (countOnly){
				specialCount += Math.floor((world - special.last) / 5);
				if (getPrestiges && special.prestige) prestigeArray.push(item);
				continue;
			}
			if (special.prestige && maps && game.options.menu.mapLoot.enabled == 0) {
				prestigeItemsAvailable.push(item);
				continue;
			}
			if (hasPrestigious && special.prestige){
				if (canLast == 1) {
					array = addSpecialToLast(special, array, item);
					canLast = 2;
				}
				else if (canLast == 2){
					addSpecialToNthLast(special, array, item, 2);
					canLast = 0;
				}
				else if (canLast == 3){
					addSpecialToNthLast(special, array, item, 3);
					canLast = 2;
				}
				continue;	
			}
			array = addSpecialToLast(special, array, item);
            canLast = 0;
            continue;
        }
		if (special.level == "last") continue;
		if (special.canRunOnce === true && countOnly) {specialCount++; continue;}
		if (!countOnly)  findHomeForSpecial(special, item, array, max);
		//for repeating items that should be counted
		else if (special.addToCount) specialCount++;
    }
	if (getPrestiges) return prestigeArray;
	if (countOnly) return specialCount;
	if (canLast && prestigeItemsAvailable.length && maps){
		//tier first
		var bestIndex = 0;
		var secondBestIndex = 0;
		var bestZone = game.mapUnlocks[prestigeItemsAvailable[0]].last;
		var secondBestZone = bestZone;
		for (var x = 1; x < prestigeItemsAvailable.length; x++){
			var thisUpgrade = game.mapUnlocks[prestigeItemsAvailable[x]];
			if (thisUpgrade.last < bestZone){
				secondBestIndex = bestIndex;
				secondBestZone = bestZone;
				bestIndex = x;
				bestZone = thisUpgrade.last;
			}
			else if (thisUpgrade.last < secondBestZone || bestIndex == secondBestIndex){
				secondBestIndex = x;
				secondBestZone = thisUpgrade.last;
			}
		}
		array = addSpecialToLast(game.mapUnlocks[prestigeItemsAvailable[bestIndex]], array, prestigeItemsAvailable[bestIndex]);
		if (hasPrestigious && secondBestIndex != bestIndex)
			array = addSpecialToNthLast(game.mapUnlocks[prestigeItemsAvailable[secondBestIndex]], array, prestigeItemsAvailable[secondBestIndex], 2);
	}
}

function findHomeForSpecial(special, item, array, max){
	var level;
	var repeat = (typeof special.repeat !== 'undefined');
	var repeatFreq = (repeat) ? special.repeat : 0;
	var x = 0;
	var done = false;
	while (done === false) {
		if (special.prestige) level = array.length - 2;
		else if (typeof special.level === 'object') level = ((Math.floor(Math.random() * (special.level[1] - special.level[0])) + special.level[0]) + (x * repeatFreq));
		else level = special.level + (x * repeatFreq);
		if (level >= max) break;
		//Resolve resource conflicts. Try +5, reverse, -5, then bail out.
		var hax = 5;
		if (typeof array[level] === 'undefined') console.log(level + ", " + item);
		while (array[level].special !== "") {
			if (hax >= 5) {
				hax++;
				level++;
			}
			if (hax <= 4) {
				hax--;
				level--;
			}
			if (hax == 10 || level >= max) {
				hax = 4;
				level -= 6;
			}
			if (hax === 0 || level <= 0) {
				break;
			}
		}
		if (hax !== 0 && level < max) {
			var addClass;
			if (special.addClass) addClass = (typeof special.addClass === 'function') ? special.addClass() : special.addClass;
			else addClass = "";
			var prefix = "";
			var icon = special.icon;
			if (icon && icon.charAt(0) == "*") {
				icon = icon.replace("*", "");
				prefix =  "icomoon icon-"
			}
			else prefix = "glyphicon glyphicon-";
			if (typeof special.title !== 'undefined')
			array[level].text = '<span title="' + special.title + '" class="' + prefix + icon + ' ' + addClass + '"></span>';
			else{
			array[level].text = '<span class="' + prefix + icon + ' ' + addClass +  '"></span>';
			}
			array[level].special = item;
		}
		if (!repeat) done = true;
		x++;
		if (x == max) {
			done = true;
			break;
		}
	}
}

function dropPrestiges(){
	var toDrop = addSpecials(true, true, null, true);
	for (var x = 0; x < toDrop.length; x++){
		unlockUpgrade(toDrop[x]);
		var prestigeUnlock = game.mapUnlocks[toDrop[x]];
		if (game.global.sLevel >= 4 && game.global.challengeActive != "Mapology" && (Math.ceil(prestigeUnlock.last / 5) % 2 == 0)) {
			unlockUpgrade(toDrop[x]);
			prestigeUnlock.last += 10;
		}
		else prestigeUnlock.last += 5;
	}
}

function drawGrid(maps) { //maps t or f. This function overwrites the current grid, be carefulz
	var grid = (maps) ? document.getElementById("mapGrid") : document.getElementById("grid");
	if (!maps && game.global.gridArray[0].name == "Liquimp"){
		grid.className = "liquid";
	}
	else if (!maps && game.global.spireActive) grid.className = "spire";
	else grid.className = "";
	var map;
    grid.innerHTML = "";
    var cols = 10;
	var rows = 10;
	if (maps){
		map = getCurrentMapObject();
		cols = Math.floor(Math.sqrt(map.size));
		if (map.size % cols === 0) rows = map.size / cols;
		else	rows = ((map.size - (cols * cols)) > cols) ? cols + 2 : cols + 1;
	}
	var width = (100 / cols);
    var counter = 0;
    var idText = (maps) ? "mapCell" : "cell";
    var size = 0;
    if (maps) size = game.global.mapGridArray.length;
    for (var i = 0; i < rows; i++) {
        if (maps && counter >= size) return;
        var row = document.createElement("ul");
		grid.insertBefore(row, grid.childNodes[0]);
        row.setAttribute("id", "row" + i);
		row.className = "battleRow";
        for (var x = 0; x < cols; x++) {
            if (maps && counter >= size) return;
			var cell = document.createElement("li");
			cell.setAttribute("id", idText + counter);
			row.appendChild(cell);
			cell.style.width = (100 / cols) + "%";
			cell.style.paddingTop = ((100 / cols) / 19)+ "vh";
			cell.style.paddingBottom = ((100 / cols) / 19) + "vh";
			cell.style.fontSize = ((cols / 14) + 1) + "vh";
			var className = "battleCell cellColorNotBeaten"
			if (maps && game.global.mapGridArray[counter].name == "Pumpkimp") className += " mapPumpkimp";
			if (maps && map.location == "Void") className += " voidCell";
			if (!maps && game.global.gridArray[counter].mutation) className += " " + game.global.gridArray[counter].mutation;
			if (!maps && game.global.gridArray[counter].vm){
				className += " " + game.global.gridArray[counter].vm;
			}
			else if (maps && game.global.mapGridArray[counter].vm){
				className += " " + game.global.mapGridArray[counter].vm;
			}
			if (!maps && game.global.gridArray[counter].empowerment){
				className += " empoweredCell" + game.global.gridArray[counter].empowerment;
				cell.title = "Token of " + game.global.gridArray[counter].empowerment;
			}
			else if (!maps && checkIfSpireWorld() && game.global.spireActive) className += " spireCell";
            cell.className = className;
            cell.innerHTML = (maps) ? game.global.mapGridArray[counter].text : game.global.gridArray[counter].text;
			if (cell.innerHTML === "") cell.innerHTML = "&nbsp;";
			if (!maps && game.global.gridArray[counter].special == "easterEgg"){
				cell.onclick = function () { easterEggClicked(); };
				game.global.eggLoc = counter;
				cell.className += " eggCell";
			}
			counter++;
        }
    }
}

function easterEggClicked(){
	if (game.global.eggLoc == -1) return;
	var elem = document.getElementById("cell" + game.global.eggLoc);
	var gridLoc = game.global.gridArray[game.global.eggLoc];
	elem.innerHTML = "&nbsp;";
	elem.onclick = "";
	gridLoc.special = "";
	gridLoc.text = "";
	var startText;
	if (game.global.lastClearedCell == game.global.eggLoc - 1) startText = ["Oh, there seems to be an egg on the ground. You throw it really hard to break it, and find "];
	else if (game.global.lastClearedCell > game.global.eggLoc) startText = ["You use your amazing sense of hindsight, and send a Trimp to check behind you for eggs. It found one containing ", "You just remembered you wanted to look for treasure. You send a Trimp backwards to check and it found an egg containing "];
	else startText = ["You see a brightly colored egg off in the distance and send a Trimp to retrieve it for you. Inside is ", "You send a Trimp to sneak forward checking for eggs. After getting turned around multiple times, it found an egg that had ", "Hey there's an egg up there! You send a few Trimps to retrieve it and they bring back "];
	startText = startText[Math.floor(Math.random() * startText.length)];
	var roll = seededRandom(game.global.eggSeed - 1);
	if (game.global.totalPortals < 5){ //Give metal if player doesn't have 5 total portals and VM/Heirloom/Nu was rolled
		if (roll > 0.84 && (roll <= 0.92 || game.global.totalPortals == 0)) roll = 0.84;
	}
	if (roll <= 0.84 || (roll > 0.92 && game.global.runningChallengeSquared)){
		var reward = '';
		var rewardRoll = getRandomIntSeeded(game.global.eggSeed - 2, 1, 6);
		if (roll <= 0.25) reward = "food";
		else if (roll <= 0.54) reward = "wood";
		else reward = "metal";
		var amt = rewardResource(reward, (rewardRoll / 1.5), game.global.eggLoc);
		startText += prettify(amt) + " " + reward + "!";
	}
	else if (roll <= 0.89){
		var amt = Math.round(game.global.world / 4);
		if (amt <= 0) amt = 1;
		game.global.nullifium += amt;
		startText += amt + " Nullifium!";
	}
	else if (roll <= 0.91){
		createHeirloom();
		startText += "an Heirloom!";
	}
	else if (roll <= 0.92){
		createVoidMap();
		startText += "a Void Map!";
	}
	else{
		if (game.resources.helium.owned == 0) fadeIn("helium", 10);
		var amt = (game.global.world >= 59) ? 5 : 1;
		amt = rewardResource("helium", amt, 99);
		startText += prettify(amt) + " helium!";
	}
	message(startText, "Loot", "*droplet", "eggMessage easterEgg" + getRandomIntSeeded(game.global.eggSeed + 1, 0, 4));
	game.global.eggLoc = -1;
}

function fightManual() {
	if (game.options.menu.pauseGame.enabled) return;
	if (game.global.time < 1000) return;
    battle(true);
}

function pauseFight(updateOnly) {
    if (!updateOnly) game.global.pauseFight = !game.global.pauseFight;
	var color = (!game.global.pauseFight) ? "btn-success" : "btn-danger";
	var elem = document.getElementById("pauseFight");
	elem.className = "";
	elem.className = "btn fightBtn " + color;
	elem.innerHTML = (!game.global.pauseFight) ? "自动战斗 开启" : "自动战斗 关闭";
}

function recycleBelow(confirmed){
	var level = parseInt(document.getElementById("mapLevelInput").value, 10);
	if (isNaN(level) || level < 6) return;
	if (!confirmed) {
		tooltip('confirm', null, 'update', 'You are about to recycle all maps below level ' + level + '. Are you sure?' , 'recycleBelow(true)', 'Mass Recycle');
		return;
	}
	var refund = 0;
	var total = 0;
	for (var x = game.global.mapsOwnedArray.length - 1; x >= 0; x--){
		var item = game.global.mapsOwnedArray[x];
		if (!item.noRecycle && item.level < level) {
			refund += recycleMap(x, true);
			total++;
			}
	}
	if (total > 0) message("回收 " + total + " 地图 " + prettify(refund) + " 碎片.", "Notices");
}

function recycleMap(map, fromMass, killVoid) {
    if (typeof map === 'undefined' || map == -1) {
		if (game.global.lookingAtMap === "") return;
		map = getMapIndex(game.global.lookingAtMap);
	}
    if (map === null) return;
	var mapObj = game.global.mapsOwnedArray[map];
	var loc = "mapsHere";
	if (killVoid){
		game.global.voidBuff = "";
		document.getElementById("voidBuff").innerHTML = "";
	}
	if (mapObj.location == "Void") loc = "voidMapsHere";
	if (mapObj.noRecycle) {
		game.global.currentMapId = "";
		game.global.lastClearedMapCell = -1;
		game.global.mapGridArray = [];
		mapsSwitch(true);
		return;
	}
    document.getElementById(loc).removeChild(document.getElementById(mapObj.id));
    if (game.global.currentMapId == mapObj.id){
		game.global.lookingAtMap = "";
		game.global.currentMapId = "";
		game.global.lastClearedMapCell = -1;
	}
	else if (game.global.lookingAtMap == mapObj.id) game.global.lookingAtMap = "";
	game.global.mapsOwned--;
	var refund;
	if (!killVoid) {
		refund = getRecycleValue(mapObj.level);
		game.resources.fragments.owned += refund;
		if (!fromMass) message("回收 " + mapObj.name + " 的 " + prettify(refund) + " 碎片.", "Notices");
	}
	game.global.mapsOwnedArray.splice(map, 1);
    if (killVoid) {
		game.global.totalVoidMaps -= (mapObj.stacked) ? mapObj.stacked + 1 : 1;
		return;
	}
	mapsSwitch(true, true);
	return refund;
}

function getRecycleValue(level) {
	var baseCost = level;
	if (baseCost < 6 || isNaN(baseCost)) return;
	baseCost = Math.floor((((baseCost / 150) * (Math.pow(1.14, baseCost - 1))) * baseCost * 2) * Math.pow((1.03 + (baseCost / 50000)), baseCost));
	baseCost *= 0.8;
	return Math.floor(baseCost);
}

function updateMapCredits() {
	var s = (game.challenges.Mapology.credits == 1) ? "" : ""
	document.getElementById("mapCreditsLeft").innerHTML = game.challenges.Mapology.credits + " 地图点数" + s;
}

function messageMapCredits() {
	var s = (game.challenges.Mapology.credits == 1) ? "" : ""
	message("你还剩余" + game.challenges.Mapology.credits + " 地图点数！", "Notices");
}

function mapsClicked(confirmed) {
	if (game.options.menu.pauseGame.enabled) return;
	if (game.global.mapsActive && getCurrentMapObject().location == "Void" && !confirmed && !game.global.switchToMaps){
		tooltip('confirm', null, 'update', '你将放弃这张虚空地图，这将使你失去在这张地图上所有当前的进展。”你确定吗?' , 'mapsClicked(true)', 'Abandon Void Map');
		return;
	}
    if (game.global.switchToMaps || game.global.switchToWorld || game.options.menu.alwaysAbandon.enabled == 1 || confirmed) {
		if (!game.global.preMapsActive){
			if (game.global.spireActive && !game.global.mapsActive && game.global.fighting) deadInSpire();
			game.global.switchToMaps = true;
			if (game.resources.trimps.soldiers > 0){
				game.global.soldierHealth = 0;
				game.stats.trimpsKilled.value += game.resources.trimps.soldiers;
				game.stats.battlesLost.value++;
				game.resources.trimps.soldiers = 0;
			}

			var bar = document.getElementById("goodGuyBar");
			swapClass("percentColor", "percentColorRed", bar);
			bar.style.width = "0%";
			var healthElem = document.getElementById("goodGuyHealth");
			if (healthElem != null) healthElem.innerHTML = 0;
			if (game.global.challengeActive == "Nom") {
				var cell;
				var cellNum;
				if (game.global.mapsActive) {
					cellNum = game.global.lastClearedMapCell + 1;
					cell = game.global.mapGridArray[cellNum];
				} else {
					cellNum = game.global.lastClearedCell + 1;
					cell = game.global.gridArray[cellNum];
				}
				cell.nomStacks = (cell.nomStacks) ? cell.nomStacks + 1 : 1;
				if (cell.nomStacks > 100) cell.nomStacks = 100;
				updateNomStacks(cell.nomStacks);
				if (cell.health > 0) cell.health += (cell.maxHealth * 0.05);
				else cell.health = 0;
				if (cell.health > cell.maxHealth) cell.health = cell.maxHealth;
				updateBadBar(cell);
			}
		}
		mapsSwitch();
        return;
    }
    if (game.global.fighting && !game.global.preMapsActive) {
		message("待你的士兵牺牲后继续前往地图。", "Notices");

		document.getElementById("mapsBtn").className = "btn btn-warning fightBtn shrinkBtnText";
		document.getElementById("mapsBtnText").innerHTML = "抛弃士兵";
	}
    if (game.global.preMapsActive) {
        mapsSwitch();
        return;
    }
	game.global.switchToMaps = true;
}

function mapsSwitch(updateOnly, fromRecycle) {
	game.global.titimpLeft = 0;
	updateTitimp();
    if (!updateOnly) {
		//Coming out of maps or world (not necessarily to map chamber)
		game.global.fighting = false;
        game.global.switchToMaps = false;
        game.global.switchToWorld = false;
		game.global.voidBuff = "";
        if (game.global.preMapsActive) {
            game.global.mapsActive = false;
            game.global.preMapsActive = false;
		} 
		else game.global.preMapsActive = true;
	}
	if (!updateOnly)
		game.global.mapExtraBonus = "";

	var currentMapObj;
	if (game.global.spireActive) handleExitSpireBtn();
	handleFinishDailyBtn();
	if (game.global.currentMapId !== "") currentMapObj = getCurrentMapObject();
	var mapsBtnText = document.getElementById("mapsBtnText");
	var recycleBtn = document.getElementById("recycleMapBtn");
	recycleBtn.innerHTML = "回收地图";
	document.getElementById("mapsBtn").className = "btn btn-warning fightBtn";
    if (game.global.preMapsActive) {
		//Switching to Map Chamber
		if (currentMapObj && currentMapObj.location == "Void") {
			recycleMap(-1, true, true);
			currentMapObj = false;
		}
		game.global.mapsActive = false;
		setNonMapBox();
		document.getElementById("battleHeadContainer").style.display = "none";
		document.getElementById("mapsCreateRow").style.display = "block";
		if (!fromRecycle) resetAdvMaps();
        document.getElementById("grid").style.display = "none";
        document.getElementById("preMaps").style.display = "block";
        toggleMapGridHtml();
        mapsBtnText.innerHTML = "世界";
        if (game.global.lookingAtMap && !game.global.currentMapId) selectMap(game.global.lookingAtMap, true);
		else if (game.global.currentMapId === "") {
			clearMapDescription();
		} 
		else {
            selectMap(game.global.currentMapId, true);
            document.getElementById("selectMapBtn").innerHTML = "Continue";
            document.getElementById("selectMapBtn").style.visibility = "visible";
            recycleBtn.style.visibility = "visible";
			if (currentMapObj.noRecycle) recycleBtn.innerHTML = "Abandon Map";
		}
	}
	else if (game.global.mapsActive) {
		//Switching to maps
		resetEmpowerStacks();
		if (game.global.formation != 4) game.global.waitToScryMaps = true;
		if (game.global.usingShriek) {
			disableShriek();
			game.global.useShriek = true;
		}
		if (currentMapObj.location == "Void"){
			currentMapObj.level = game.global.world;
			document.getElementById("repeatVoidsContainer").style.display = "block";
		}
		else document.getElementById("repeatVoidsContainer").style.display = "none";
		document.getElementById("mapsCreateRow").style.display = "none";
        document.getElementById("grid").style.display = "none";
        document.getElementById("preMaps").style.display = "none";
        toggleMapGridHtml(true, currentMapObj);
	} 
	else {
		//Switching to world
		resetEmpowerStacks();
		if (game.global.formation != 4) game.global.waitToScry = true;
		if (game.global.lastClearedCell == 98 && game.global.useShriek && !game.global.usingShriek)
			activateShriek();
		document.getElementById("battleHeadContainer").style.display = "block";
		document.getElementById("mapsCreateRow").style.display = "none";
        document.getElementById("grid").style.display = "block";
        document.getElementById("preMaps").style.display = "none";
        toggleMapGridHtml();
		setNonMapBox();

    }
	toggleVoidMaps(true);
}

function toggleMapGridHtml(on, currentMapObj){
	var settings = (on) ? ["block", "2", "8", "block"] : ["none", "off", "10", "none"];
	document.getElementById("mapGrid").style.display = settings[0];
	if (game.options.menu.extraMapBtns.enabled){
		swapClass("col-xs", "col-xs-" + settings[1], document.getElementById("extraMapBtns"));
		swapClass("col-xs", "col-xs-" + settings[2], document.getElementById("gridContainer"));
	}
	document.getElementById("repeatBtn").style.display = settings[3];
	if (!on) return;
	document.getElementById("mapsBtnText").innerHTML = (game.global.mapBonus) ? "地图 (" + game.global.mapBonus + ")" : "地图";
	document.getElementById("mapBonus").innerHTML = "";
	document.getElementById("battleHeadContainer").style.display = "block";
	if (!currentMapObj) return;
	var worldNumElem = document.getElementById("worldNumber");
	worldNumElem.style.display = 'inline';
	worldNumElem.innerHTML = "<br/>等级: " + currentMapObj.level;
	document.getElementById("worldName").innerHTML = cnmap(currentMapObj.name);
}

function clearMapDescription(){
	document.getElementById("selectMapBtn").style.visibility = "hidden";
	document.getElementById("recycleMapBtn").style.visibility = "hidden";
	document.getElementById("selectedMapName").innerHTML = "请选择一个地图!";
	document.getElementById("mapStatsSize").innerHTML = "";
	document.getElementById("mapStatsDifficulty").innerHTML = "";
	document.getElementById("mapStatsLoot").innerHTML = "";
	document.getElementById("mapStatsItems").innerHTML = "";
	document.getElementById("mapStatsResource").innerHTML = "";
}

function setNonMapBox(){
	document.getElementById("mapsBtnText").innerHTML = "地图";
	if (game.global.totalVoidMaps > 0) addVoidAlert();
	var worldNumElem = document.getElementById("worldNumber");
	worldNumElem.style.display = (game.global.spireActive) ? 'none' : 'inline';
	document.getElementById("worldNumber").innerHTML = game.global.world;
	var mapBonus = document.getElementById("mapBonus");
	if (game.global.mapBonus > 0) mapBonus.innerHTML = prettify(game.global.mapBonus * 20) + "% 地图奖金";
	else mapBonus.innerHTML = "";
	document.getElementById("worldName").innerHTML = (game.global.spireActive) ? ((checkIfSpireWorld(true) == 1) ? "尖塔" : "尖塔 " + romanNumeral(checkIfSpireWorld(true))) : "区域";	
}

function repeatClicked(updateOnly){
	if (!updateOnly) game.global.repeatMap = !game.global.repeatMap;
	var color = (game.global.repeatMap) ? "btn-success" : "btn-danger";
	var elem = document.getElementById("repeatBtn");
	var elem2 = document.getElementById("repeatBtn2");
	elem.className = "";
	elem.className = "btn fightBtn " + color;
	elem.innerHTML = (game.global.repeatMap) ? "重复:开" : "重复:关";
	if (elem2 !== null){
		color = (game.global.repeatMap) ? "settingBtn1" : "settingBtn0"; 
		swapClass("settingBtn", color, elem2);
		elem2.innerHTML = (game.global.repeatMap) ? "重复:开" : "重复:关";
	}
}

function selectMap(mapId, force) {
	if (game.options.menu.pauseGame.enabled && !force) return;
    if (!force && game.global.currentMapId !== "") {
        message("你必须在完成或移动之前回收当前的地图。", "Notices");
        return;
    }
    var map = getMapIndex(mapId);
    map = game.global.mapsOwnedArray[map];
	if (!map) return;
    //地图名称
    var mapname="";
    if(map.name=="Enchanted Gardens"){
        mapname="魔法花园";
    }else{
        mapname=map.name
    }
    document.getElementById("selectedMapName").innerHTML = cnmap(mapname);

	document.getElementById("mapStatsSize").innerHTML = (Math.floor(map.size));
	document.getElementById("mapStatsDifficulty").innerHTML = Math.floor(map.difficulty * 100) + "%";
	document.getElementById("mapStatsLoot").innerHTML = Math.floor(map.loot * 100) + "%";
	document.getElementById("mapStatsItems").innerHTML = (map.location == "Void") ? "&nbsp;" : addSpecials(true, true, map);
	document.getElementById("mapStatsResource").innerHTML = cnresourcetype(game.mapConfig.locations[map.location].resourceType);
	if (typeof game.global.mapsOwnedArray[getMapIndex(game.global.lookingAtMap)] !== 'undefined') {
		var prevSelected = document.getElementById(game.global.lookingAtMap);
		prevSelected.className = prevSelected.className.replace("mapElementSelected","mapElementNotSelected");
	}
	var currentSelected = document.getElementById(mapId);
	currentSelected.className = currentSelected.className.replace("mapElementNotSelected", "mapElementSelected");
    game.global.lookingAtMap = mapId;
    document.getElementById("selectMapBtn").innerHTML = "运行地图";
    document.getElementById("selectMapBtn").style.visibility = "visible";
	document.getElementById("recycleMapBtn").style.visibility = (map.noRecycle) ? "hidden" : "visible";
}

function runMap() {
	if (game.options.menu.pauseGame.enabled) return;
    if (game.global.lookingAtMap === "") return;
	if (game.global.challengeActive == "Watch") game.challenges.Watch.enteredMap = true;
	if (game.global.challengeActive == "Mapology" && !game.global.currentMapId) {
		if (game.challenges.Mapology.credits < 1){
			message("You are all out of Map Credits! Clear some more Zones to earn some more.", "Notices");
			return;
		}
		game.challenges.Mapology.credits--;
		if (game.challenges.Mapology.credits <= 0) game.challenges.Mapology.credits = 0;
		updateMapCredits();
		messageMapCredits()
	}
	if (game.global.formation != 4) game.global.canScryCache = false;
    var mapId = game.global.lookingAtMap;
    game.global.preMapsActive = false;
    game.global.mapsActive = true;
    game.global.currentMapId = mapId;
	mapsSwitch(true);
	var mapObj = getCurrentMapObject();
	if (mapObj.bonus){
		game.global.mapExtraBonus = mapObj.bonus;
	}
    if (game.global.lastClearedMapCell == -1) {
        buildMapGrid(mapId);
        drawGrid(true);
		
		if (mapObj.location == "Void"){
			game.global.voidDeaths = 0;
			game.global.voidBuff = mapObj.voidBuff;
			setVoidBuffTooltip();
		}
	}
	document.getElementById('togglemapAtZone2').style.display = (game.global.canMapAtZone) ? "block" : "none";
}

function getHousingMultiplier(){
	amt = 1;
	if (game.portal.Carpentry.level) amt *= Math.pow((1 + game.portal.Carpentry.modifier), game.portal.Carpentry.level);
	if (game.portal.Carpentry_II.level > 0) amt *= (1 + (game.portal.Carpentry_II.modifier * game.portal.Carpentry_II.level));
	return amt;
}

function battleCoordinator(makeUp) {
    if (!game.global.fighting) {
        battle(null);
        return;
	}
	if (game.options.menu.pauseGame.enabled) return;
    game.global.battleCounter += (1000 / game.settings.speed);
	var num = (game.portal.Agility.level) ? 1000 * Math.pow(1 - game.portal.Agility.modifier, game.portal.Agility.level) : 1000;
	if (game.talents.hyperspeed.purchased) num -= 100;
	if (game.talents.hyperspeed2.purchased && (game.global.world <= Math.floor((game.global.highestLevelCleared + 1) * 0.5)))
		num -= 100;
	else if (game.global.mapExtraBonus == "fa")
		num -= 100;
	if (!game.global.mapsActive && game.global.gridArray[0].name == "Liquimp" && num < 400)
		num = 400;
	if (game.global.battleCounter >= num) {
        game.global.battleCounter -= num; //Thanks grabz
        fight(makeUp);
    }
}

function battle(force) {
	var trimps = game.resources.trimps;
	var trimpsMax = trimps.realMax();
	if (game.global.fighting) return;
	if (game.global.soldierHealth <= 0) document.getElementById('critSpan').innerHTML = "";
    if ((game.global.switchToMaps || game.global.switchToWorld) && trimps.soldiers === 0) {
        mapsSwitch();
        return;
    }
    if (game.global.preMapsActive) return;
    var pause = (force) ? false : game.global.pauseFight;
    if (!game.global.autoBattle && !force) return;
    if (pause) return;
    if (trimps.soldiers > 0) {
        startFight();
        return;
	}
	var breeding = (trimps.owned - trimps.employed);
	var currentSend = game.resources.trimps.getCurrentSend();
	if (game.global.justAmalged == true && game.resources.trimps.owned < game.resources.trimps.realMax() && game.global.breedBack > 0 && !force){
		return;
	}
	else {
		game.global.justAmalged = false;
	}
	if (checkAmalgamate() && !force){
		return;
	}
	if (breeding < currentSend) return;
	var gensUp = (game.global.GeneticistassistSetting > 0 && game.jobs.Geneticist.owned > 0);
	if (game.options.menu.geneSend.enabled && gensUp){
		if (game.global.lastBreedTime / 1000 >= game.global.GeneticistassistSetting)
			force = true;
	}
    if (force) {
        trimps.soldiers = currentSend;
        trimps.owned -= currentSend;
    } else {
        //var max = Math.ceil((trimpsMax - trimps.employed) * 0.05);
        if ((game.options.menu.geneSend.enabled != 3 || !gensUp) && (trimps.owned >= trimpsMax || (game.global.breedTime <= 0.1 && (game.options.menu.geneSend.enabled != 2 || !gensUp)))) {
            trimps.soldiers = currentSend;
            trimps.owned -= currentSend;
        }
    }
    if (game.resources.trimps.soldiers < currentSend) {
        return;
    }
    startFight();
}

function checkAmalgamate(){
	var amalgJoinTexts = [
		"A small black hole opens up in the sky and a shrill noise echoes across the town. A few moments later, an Amalgamator is standing in front of you. It looks around briefly, grabs a few Trimps, and runs off towards your soldiers.", 
		"While out walking a Trimp, you suddenly find yourself teleported back to your ship, standing face to face with an Amalgamator. You introduce yourself but it doesn't seem up for conversation.",
		"Suddenly, the largest rain drops you've ever seen start falling from the sky - each drop is at least 1000 times larger than normal. One particularly large drop hits the ground and an Amalgamator pops out! It sends out a quick telepathic greeting, then goes off to find your Trimps.",
		"You're sitting down about to enjoy a rare dinner break, when an Amalgamator gets interested in your dimension and replaces the spacetime of your meal with itself. You really hope they don't do that again.",
		"As you're helping your Trimps cross a deeper-than-average stream, you notice a column of bubbles coming up near your Trimps. A gurgling sound begins to grow from the source of the bubbles, and your Trimps start to get a little freaked out. Suddenly an Amalgamator bursts to the surface, spits some water at a Trimp, then teleports to your town."];
	var amalgLeaveTexts = [
		"You hear the second or third most chilling sound you've ever heard, and your Amalgamator pops up in front of you. It smacks you with a small stick to show dissatisfaction, then disappears in a puff of smoke.", 
		"While walking through your town, you notice your Amalgamator throwing a fit, kicking over food carts and anything else not tied down. You approach it but before you can ask what's wrong, it smacks you with a small stick to show dissatisfaction, then it scurries away.", 
		"You watch as your Amalgamator struggles to find enough free Trimps, panic searching in places such as under rocks or between the leaves of trees. It suddenly seems to remember that it doesn't have to be there, smacks you with a small stick to show dissatisfaction, and turns into nothing.",
		"While in town, a Scientist approaches you to let you know that your Amalgamator is getting upset and to keep an eye out for him. Just as you're finishing the conversation, the Amalgamator appears in front of you. It smacks you both with a small stick to show dissatisfaction, then turns into a small puddle of water - which you ask the Scientist to clean up."];
	if (game.global.challengeActive == "Trapper") return false;
	if (game.global.spireActive) return false;
	var ratio = (game.resources.trimps.realMax() / game.resources.trimps.getCurrentSend());
	if (game.jobs.Amalgamator.owned > 0 && ratio < game.jobs.Amalgamator.getFireThresh()){
		game.jobs.Amalgamator.owned--;
		if (game.jobs.Amalgamator.owned == 0){
			 game.jobs.Amalgamator.locked = 1;
			 drawAllJobs();
		}
		var text = amalgLeaveTexts[Math.floor(Math.random() * amalgLeaveTexts.length)];
		if (game.jobs.Amalgamator.owned > 1) text = text.replace(" your Amalgamator ", " one of your Amalgamators ");
		if (game.global.challengeActive == "Trimp") text = toZalgo(text, 10, game.jobs.Amalgamator.owned);
		game.stats.amalgamators.value--;
		message(text, "Notices");
	}
	else {
		if (ratio < game.jobs.Amalgamator.getTriggerThresh()) return false;
		game.jobs.Amalgamator.locked = 0;
		game.jobs.Amalgamator.owned++;
		if (game.global.world == 1) giveSingleAchieve("M'Algamator");
		if (game.jobs.Amalgamator.owned == 1 && game.stats.amalgamators.valueTotal == 0) tooltip("First Amalgamator", null, 'update');
		var text = amalgJoinTexts[Math.floor(Math.random() * amalgJoinTexts.length)];
		if (game.jobs.Amalgamator.owned > 1) text = text.replace(" an ", " another ");
		if (game.global.challengeActive == "Trimp") text = toZalgo(text, Math.floor(Math.random() * 200), game.jobs.Amalgamator.owned);
		game.stats.amalgamators.value++;
		message(text, "Notices");
	}
	game.global.breedBack = game.resources.trimps.getCurrentSend() / 2;
	game.global.lastLowGen = game.global.lowestGen;
	game.global.lowestGen = -1;
	var toTake = game.resources.trimps.getCurrentSend();
	if (game.resources.trimps.owned / 3 < toTake) toTake = game.resources.trimps.owned / 3;
	game.resources.trimps.owned -= toTake;
	game.global.justAmalged = true;
	return true;
}

function getBadCoordLevel(){
	//For Coordinate challenge
	var world = (game.global.mapsActive) ? getCurrentMapObject().level : game.global.world;
	var amt = 1;
	for (var x = 0; x < world - 1; x++){
		amt = Math.ceil(amt * 1.25);
	}
	return amt;
}

function getPierceAmt(){
	var base = 0.2;
	if (game.global.challengeActive == "Lead") base += (Math.min(game.challenges.Lead.stacks, 200) * 0.001);
	if (game.global.formation == 3) base *= 0.5;
	if (game.talents.pierce.purchased) base *= 0.75;
	return base;
}

function startFight() {
	game.global.battleCounter = 0;
    document.getElementById("badGuyCol").style.visibility = "visible";
    var cellNum;
    var cell;
    var cellElem;
	var badCoord;
	var instaFight = false;
	var madeBadGuy = false;
	var map = false;
    if (game.global.mapsActive) {
        cellNum = game.global.lastClearedMapCell + 1;
        cell = game.global.mapGridArray[cellNum];
        cellElem = document.getElementById("mapCell" + cellNum);
		map = game.global.mapsOwnedArray[getMapIndex(game.global.currentMapId)];
    } else {
        cellNum = game.global.lastClearedCell + 1;
        cell = game.global.gridArray[cellNum];
        cellElem = document.getElementById("cell" + cellNum);
		if (cellElem == null){ //Not sure what causes this to be needed, but on very rare occasions, this can prevent some save files from freezing on load
			if (game.global.lastClearedCell != 99) {
				 if (game.global.lastClearedCell == -1){
					buildGrid();
					drawGrid();
					document.getElementById("battleContainer").style.visibility = "visible";
					document.getElementById('metal').style.visibility = "visible";
					console.log("Attempted to fight in World when no grid was initialized. Find an adult");
				}
				return;
			}
			nextWorld();
			game.stats.zonesCleared.value++;
			checkAchieve("totalZones");
			console.log("crisis averted");
			return;
		}
    }
    swapClass("cellColor", "cellColorCurrent", cellElem);
	var badName;
	var displayedName;
	if ((cell.name == "Improbability") && game.global.spireActive){
		displayedName = "德鲁普提";
		if (game.global.challengeActive == "Coordinate") displayedName = "Druopitee and Pals";
	}
	else if (cell.name == "Omnipotrimp" && game.global.spireActive){
		displayedName = "Echo of Druopitee";
		if (game.global.challengeActive == "Coordinate") displayedName = "<span class='smallEnemyName'>Echoes of Druopitee and Pals</span>";
	}
	else if (cell.name == "Improbability" && game.global.challengeActive == "Coordinate") {
		displayedName = "Improbabilities";
	}
	else if (game.global.challengeActive == "Coordinate"){
		displayedName = cell.name.replace('_', ' ');
		displayedName += "s";
	}
	else {
		displayedName = cntime(cell.name.replace('_', ' '));
	}
	if (displayedName == "Mutimp" || displayedName == "Hulking Mutimp"){
		displayedName = "<span class='Mutimp'>" + displayedName + "</span>";
	}
	if (mutations.Living.active()){
		badName = "<span id='livingMutationContainer'" + ((cell.mutation == "Living") ? " class='badNameMutation Living'" : "") + "><span id='livingMutationName'>" + ((cell.mutation == "Living") ? "复活 " : "") + "</span>" + displayedName + "</span>";
	}
	else if (cell.vm && visualMutations[cell.vm].highlightMob && (displayedName == visualMutations[cell.vm].highlightMob)){
		var tempName = (cell.mutation) ? mutations[cell.mutation].namePrefix + " " + displayedName : displayedName;
		badName = "<span class='badNameMutation " + cell.vm + "'>" + tempName + "</span>";
	}
	else if (cell.mutation) {
		badName = "<span class='badNameMutation " + cell.mutation + "'>" + cntime(mutations[cell.mutation].namePrefix) + " " + displayedName + "</span>";
	}
	else if (cell.vm && visualMutations[cell.vm].namePrefix){
		badName = "<span class='badNameMutation " + cell.vm + "'>" + visualMutations[cell.vm].namePrefix + " " + displayedName + "</span>"
	}
	else
		badName = displayedName;
	if (cell.empowerment){
		badName = getEmpowerment(-1, true) + " " + badName;
		badName = "<span class='badNameMutation badName" + getEmpowerment(-1) + "'>" + badName + "</span>";
	}
	if (game.global.challengeActive == "Coordinate"){
		badCoord = getBadCoordLevel();
		badName += " (" + prettify(badCoord) + ")";
	}
	if (cell.name == "Omnipotrimp" && game.global.world % 5 == 0 && !game.global.spireActive){
		badName += ' <span class="badge badBadge Magma" onmouseover="tooltip(\'Superheated\', \'customText\', event, \'这个Omnipotrimp是过热的,并且会在死亡时爆炸\')" onmouseout="tooltip(\'hide\')"><span class="icomoon icon-fire2"></span></span>';
	}
	if (game.global.brokenPlanet && !game.global.mapsActive){
		badName += ' <span class="badge badBadge" onmouseover="tooltip(\'Pierce\', \'customText\', event, \'这个坏家伙造成的伤害包含 ' + prettify(getPierceAmt() * 100) + '% 的穿透伤害。\')" onmouseout="tooltip(\'hide\')"><span class="glyphicon glyphicon-tint"></span></span>';
	}
	if (game.global.challengeActive == "Slow" || ((game.badGuys[cell.name].fast || cell.mutation == "Corruption") && game.global.challengeActive != "Coordinate" && game.global.challengeActive != "Nom"))
		badName += ' <span class="badge badBadge" onmouseover="tooltip(\'Fast\', \'customText\', event, \'这个坏家伙速度非常快，并且会先攻击你\')" onmouseout="tooltip(\'hide\')"><span class="glyphicon glyphicon-forward"></span></span>';
	if ((game.global.challengeActive == "Electricity" || game.global.challengeActive == "Mapocalypse")){
		badName += ' <span class="badge badBadge" onmouseover="tooltip(\'带电\', \'customText\', event, \'这个坏家伙是带电的，并且会给你的脆皮叠加减益效果\')" onmouseout="tooltip(\'hide\')"><span class="icomoon icon-power-cord"></span></span>';
	}
	document.getElementById("badGuyName").innerHTML = badName;
	if (game.global.challengeActive == "Domination") handleDominationDebuff();
	var corruptionStart = mutations.Corruption.start(true);
	if (cell.maxHealth == -1 && checkIfSpireWorld() && game.global.spireActive && !game.global.mapsActive && cell.corrupted){
		if (Fluffy.isRewardActive("eliminator")){
			cell.corrupted = "none";
		}
		else if (Fluffy.isRewardActive("purifier")){
			if (getRandomIntSeeded(game.global.mutationSeed++, 0, 100) < 50) cell.corrupted = "none";
		}
	}
	if (cell.mutation)
		setMutationTooltip(cell.corrupted, cell.mutation);
	else if (map && map.location == "Void" && game.global.world >= corruptionStart){
		setVoidCorruptionIcon();
	}
	else if (map && mutations.Magma.active()){
		setVoidCorruptionIcon(true);
	}
	else
		document.getElementById('corruptionBuff').innerHTML = "";
	if (game.global.challengeActive == "Balance") updateBalanceStacks();
	if (game.global.challengeActive == "Toxicity") updateToxicityStacks();
    if (cell.maxHealth == -1) {
		var overkill = 0;
		var plaguebringer = 0;

		if (cell.health != -1) overkill = cell.health;
		if (cell.mutation && typeof mutations[cell.mutation].attack !== 'undefined')
			cell.attack = mutations[cell.mutation].attack(cell.level, cell.name);
		else
			cell.attack = game.global.getEnemyAttack(cell.level, cell.name);
		if (cell.mutation && typeof mutations[cell.mutation].health !== 'undefined')
			cell.health = mutations[cell.mutation].health(cell.level, cell.name);
		else
			cell.health = game.global.getEnemyHealth(cell.level, cell.name);
		if (game.global.spireActive && checkIfSpireWorld() && !game.global.mapsActive){
			cell.origAttack = cell.attack;
			cell.origHealth = cell.health;
			cell.attack = getSpireStats(cell.level, cell.name, "attack");
			cell.health = getSpireStats(cell.level, cell.name, "health");
		}
		if (cell.corrupted == "corruptStrong") cell.attack *= 2;
		if (cell.corrupted == "healthyStrong") cell.attack *= 2.5;
		if (cell.corrupted == "corruptTough") cell.health *= 5;
		if (cell.corrupted == "healthyTough") cell.health *= 7.5;
		if (cell.empowerment){
			if (cell.mutation != "Corruption"){
				cell.health = mutations.Corruption.health(cell.level, cell.name);
				cell.attack = mutations.Corruption.attack(cell.level, cell.name);
			}
			cell.health *= 4;
			cell.attack *= 1.2;
		}
		if (game.global.challengeActive == "Obliterated" || game.global.challengeActive == "Eradicated"){
			var oblitMult = (game.global.challengeActive == "Eradicated") ? game.challenges.Eradicated.scaleModifier : 1e12;
			var zoneModifier = Math.floor(game.global.world / game.challenges[game.global.challengeActive].zoneScaleFreq);
			oblitMult *= Math.pow(game.challenges[game.global.challengeActive].zoneScaling, zoneModifier);
			cell.health *= oblitMult;
			cell.attack *= oblitMult;
		}
		if (game.global.challengeActive == "Daily"){
			if (typeof game.global.dailyChallenge.badHealth !== 'undefined'){
				cell.health *= dailyModifiers.badHealth.getMult(game.global.dailyChallenge.badHealth.strength);
			}
			if (typeof game.global.dailyChallenge.badMapHealth !== 'undefined' && game.global.mapsActive){
				cell.health *= dailyModifiers.badMapHealth.getMult(game.global.dailyChallenge.badMapHealth.strength);
			}
			if (typeof game.global.dailyChallenge.empower !== 'undefined'){
				if (!game.global.mapsActive)
					cell.health *= dailyModifiers.empower.getMult(game.global.dailyChallenge.empower.strength, game.global.dailyChallenge.empower.stacks);
				updateDailyStacks("empower");
			}
		}
		if (game.global.challengeActive == "Life") {
			cell.health *= 11;
			cell.attack *= 6;
		}
		if (game.global.challengeActive == "Coordinate") cell.health *= badCoord;
        if (game.global.mapsActive) {
            var difficulty = map.difficulty;
            cell.attack *= difficulty;
            cell.health *= difficulty;
			if (game.global.world >= corruptionStart){
				if (mutations.Magma.active() && map.location == "Void"){
					cell.attack *= (mutations.Corruption.statScale(3)).toFixed(1);
					cell.health *= (mutations.Corruption.statScale(10)).toFixed(1);
				}
				else if (map.location == "Void" || mutations.Magma.active()){
					cell.attack *= (mutations.Corruption.statScale(3) / 2).toFixed(1);
					cell.health *= (mutations.Corruption.statScale(10) / 2).toFixed(1);
				}
			}
        }
		if (game.global.challengeActive == "Meditate") cell.health *= 2;
		else if (game.global.challengeActive == "Toxicity"){
			cell.attack *= 5;
			cell.health *= 2;
		}
		else if (game.global.challengeActive == "Balance"){
			cell.attack *= (game.global.mapsActive) ? 2.35 : 1.17;
			cell.health *= 2;
		}
		else if (game.global.challengeActive == "Lead" && (game.challenges.Lead.stacks > 0)){
			cell.health *= (1 + (Math.min(game.challenges.Lead.stacks, 200) * 0.04));
		}
		else if (game.global.challengeActive == "Domination"){
			var dominating = false;
			if (map && map.size == cellNum + 1) dominating = true;
			else if (!map && cellNum == 99) dominating = true;
			if (dominating){
				cell.attack *= 2.5;
				cell.health *= 7.5;
			}
			else{
				cell.attack *= 0.1;
				cell.health *= 0.1;
			}
		}
		if (cell.name == 'Improbability' || cell.name == "Omnipotrimp"){
			if (game.global.roboTrimpLevel && game.global.useShriek) activateShriek();
			if (game.global.world >= corruptionStart) {
				if (game.global.spireActive) {
					cell.origHealth *= mutations.Corruption.statScale(10);
					cell.origAttack *= mutations.Corruption.statScale(3);
				}
				else {
					cell.health *= mutations.Corruption.statScale(10);
					cell.attack *= mutations.Corruption.statScale(3);
				}
			}
		}
		cell.maxHealth = cell.health;
		if (game.portal.Overkill.level && !(!map && game.global.gridArray[0].name == "Liquimp")) cell.health -= (overkill * game.portal.Overkill.level * 0.005);
		if (cell.health < 1) {
			var overkillerCount = Fluffy.isRewardActive("overkiller");
			if (game.talents.overkill.purchased) overkillerCount++;
			if (cell.OKcount <= overkillerCount){
				var nextCell = (game.global.mapsActive) ? game.global.mapGridArray[cellNum + 1] : game.global.gridArray[cellNum + 1];
				if (nextCell){
					nextCell.health = Math.abs(cell.health);
					nextCell.OKcount = cell.OKcount + 1;
				}
			}
			cell.health = 0;
			cell.overkilled = true;
			if (cell.name == "Improbability") giveSingleAchieve("One-Hit Wonder");
			if (cell.name == "Omnipotrimp") giveSingleAchieve("Mighty");
			instaFight = true;
			if (!game.global.mapsActive) game.stats.cellsOverkilled.value++;
		}
		else 
		{
			if (cell.plaguebringer){
				if (cell.health > cell.maxHealth * 0.05){
					cell.health -= cell.plaguebringer;
					if (cell.health < cell.maxHealth * 0.05) cell.health = cell.maxHealth * 0.05;
				}
				var empowerment = getEmpowerment();
				if (empowerment){
					if (empowerment == "Poison"){
						stackPoison(cell.plaguebringer);
						//stackPoison handles the poison debuff
					}
					else{
						game.empowerments[empowerment].currentDebuffPower += Math.ceil(cell.plagueHits);
						if (empowerment == "Wind"){
							handleWindDebuff();
						}
						else {
							handleIceDebuff();
						}
					}
				}
			}
			if (game.global.formation == 4){
				if (game.global.mapsActive) game.global.waitToScryMaps = false;
				else game.global.waitToScry = false;
			}
		}
		madeBadGuy = true;
    }
	else if (game.global.challengeActive == "Nom" && cell.nomStacks){
		updateNomStacks(cell.nomStacks);
	}
    var trimpsFighting = game.resources.trimps.maxSoldiers;
	var currentSend = game.resources.trimps.getCurrentSend();
    if (game.global.soldierHealth <= 0) {
		game.global.battleCounter = 0;
		if (cell.name == "Voidsnimp" && !game.achievements.oneOffs.finished[game.achievements.oneOffs.names.indexOf("Needs Block")]) {
			if (!cell.killCount) cell.killCount = 1;
			else cell.killCount++;
			if (cell.killCount >= 50) giveSingleAchieve("Needs Block");
		}
		if (game.global.realBreedTime >= 600000 && game.jobs.Geneticist.owned >= 1) giveSingleAchieve("Extra Crispy");
		if (game.portal.Anticipation.level){
			game.global.antiStacks = (game.jobs.Amalgamator.owned > 0) ? Math.floor((getGameTime() - game.global.lastSoldierSentAt) / 1000) : Math.floor(game.global.lastBreedTime / 1000);
			if (game.talents.patience.purchased){
				if (game.global.antiStacks >= 45)
					game.global.antiStacks = 45;
			}
			else if (game.global.antiStacks >= 30) game.global.antiStacks = 30;
			updateAntiStacks();
		}
		game.global.lastSoldierSentAt = getGameTime();
		game.global.lastBreedTime = 0;
		game.global.realBreedTime = 0;
		if ((game.global.challengeActive == "Electricity" || game.global.challengeActive == "Mapocalypse")) {
			game.challenges.Electricity.stacks = 0;
			game.challenges.Electricity.attacksInARow = 0;
			updateElectricityStacks();
		}
		if (game.global.challengeActive == "Daily"){
			if (typeof game.global.dailyChallenge.plague !== 'undefined'){
				game.global.dailyChallenge.plague.stacks = 0;
				updateDailyStacks('plague');
			}
			if (typeof game.global.dailyChallenge.weakness !== 'undefined'){
				game.global.dailyChallenge.weakness.stacks = 0;
				updateDailyStacks('weakness');
			}
			if (typeof game.global.dailyChallenge.rampage !== 'undefined'){
				game.global.dailyChallenge.rampage.stacks = 0;
				updateDailyStacks('rampage');
			}
		}
		game.global.difs.attack = 0;
		game.global.difs.health = 0;
		game.global.difs.block = 0;
		game.global.difs.trainers = game.jobs.Trainer.owned;
        game.global.soldierHealthMax = game.global.health;
		game.global.maxSoldiersAtStart = game.resources.trimps.maxSoldiers;
		game.global.soldierCurrentAttack = game.global.attack;
		//Amalgamators
		if (game.jobs.Amalgamator.owned > 0){
			game.global.soldierHealthMax *= game.jobs.Amalgamator.getHealthMult();
		}
		//Magma
		if (mutations.Magma.active()){
			var magMult = mutations.Magma.getTrimpDecay();
			game.global.soldierHealthMax *= magMult;
			game.global.soldierCurrentAttack *= magMult;
		}
		//Soldiers
		game.global.soldierHealthMax *= trimpsFighting;
		game.global.soldierCurrentAttack *= trimpsFighting;	
		//Toughness
		if (game.portal.Toughness.level > 0) game.global.soldierHealthMax += (game.global.soldierHealthMax * game.portal.Toughness.level * game.portal.Toughness.modifier);
		if (game.portal.Toughness_II.level > 0) game.global.soldierHealthMax *= (1 + (game.portal.Toughness_II.modifier * game.portal.Toughness_II.level));
		if (game.global.lowestGen >= 0) {
			if (game.global.breedBack <= 0) {
				game.global.soldierHealthMax *= Math.pow(1.01, game.global.lowestGen);
				game.global.lastLowGen = game.global.lowestGen;
				game.global.lowestGen = -1;
			}
			else game.global.lastLowGen = 0;
			game.global.breedBack = currentSend / 2;
		}
		if (game.goldenUpgrades.Battle.currentBonus > 0){
			game.global.soldierHealthMax *= game.goldenUpgrades.Battle.currentBonus + 1;
		}
		//Resilience
		if (game.portal.Resilience.level > 0) game.global.soldierHealthMax *= Math.pow(game.portal.Resilience.modifier + 1, game.portal.Resilience.level);
		//Power
		if (game.portal.Power.level > 0) game.global.soldierCurrentAttack += (game.global.soldierCurrentAttack * game.portal.Power.level * game.portal.Power.modifier);
        if (game.portal.Power_II.level > 0) game.global.soldierCurrentAttack *= (1 + (game.portal.Power_II.modifier * game.portal.Power_II.level));
		game.global.soldierCurrentBlock = getBaseBlock() * trimpsFighting;
		game.global.soldierHealthMax = calcHeirloomBonus("Shield", "trimpHealth", game.global.soldierHealthMax);
		//block handled in getBaseBlock()
		if (game.global.challengeActive == "Daily" && typeof game.global.dailyChallenge.pressure !== 'undefined') game.global.soldierHealthMax *= dailyModifiers.pressure.getMult(game.global.dailyChallenge.pressure.strength, game.global.dailyChallenge.pressure.stacks);
		if (game.global.formation !== 0){
			game.global.soldierHealthMax *= (game.global.formation == 1) ? 4 : 0.5;
			game.global.soldierCurrentAttack *= (game.global.formation == 2) ? 4 : 0.5;
			//block handled in getBaseBlock()
		}
		if (game.global.challengeActive == "Balance"){
			game.global.soldierHealthMax *= game.challenges.Balance.getHealthMult();
		}
		if (game.global.challengeActive == "Life"){
			game.global.soldierHealthMax *= game.challenges.Life.getHealthMult();
		}		
		if (game.talents.voidPower.purchased && game.global.voidBuff){
			var vpAmt = (game.talents.voidPower2.purchased) ? ((game.talents.voidPower3.purchased) ? 65 : 35) : 15;
			game.global.soldierHealthMax *= ((vpAmt / 100) + 1);
		}
		if (game.global.totalSquaredReward > 0)
			game.global.soldierHealthMax *= ((game.global.totalSquaredReward / 100) + 1);
		game.global.soldierHealth = game.global.soldierHealthMax;
		if (game.global.challengeActive == "Devastation") {
			if (game.challenges.Devastation.lastOverkill != -1) game.global.soldierHealth -= (game.challenges.Devastation.lastOverkill * 7.5);
			game.challenges.Devastation.lastOverkill = -1;
			if (game.global.soldierHealth < 1) game.global.soldierHealth = 0;
		}
		if (game.global.challengeActive == "Lead") manageLeadStacks();
    }
	else {
		if (game.global.challengeActive == "Lead") manageLeadStacks();
		if (game.resources.trimps.soldiers != currentSend && game.global.maxSoldiersAtStart > 0){
			var freeTrimps = (game.resources.trimps.owned - game.resources.trimps.employed);
			var newTrimps = ((game.resources.trimps.maxSoldiers - game.global.maxSoldiersAtStart)  / game.global.maxSoldiersAtStart) + 1;
			var requiredTrimps = (currentSend - game.resources.trimps.soldiers);
			if (freeTrimps >= requiredTrimps) {
				game.resources.trimps.owned -= requiredTrimps;
				var oldHealth = game.global.soldierHealthMax;
				game.global.soldierHealthMax *= newTrimps;
				game.global.soldierHealth += (game.global.soldierHealthMax - oldHealth);
				game.global.soldierCurrentAttack *= newTrimps;
				game.global.soldierCurrentBlock *= newTrimps;
				game.resources.trimps.soldiers = currentSend;
				game.global.maxSoldiersAtStart = game.resources.trimps.maxSoldiers;
			}
		}
		//Check differences in equipment, apply perks, bonuses, and formation
		if (game.global.difs.health !== 0) {
			var healthTemp = trimpsFighting * game.global.difs.health * ((game.portal.Toughness.modifier * game.portal.Toughness.level) + 1);
			if (mutations.Magma.active()){
				healthTemp *= mutations.Magma.getTrimpDecay();
			}
			if (game.portal.Toughness_II.level) healthTemp *= (1 + (game.portal.Toughness_II.modifier * game.portal.Toughness_II.level));
			if (game.jobs.Geneticist.owned > 0) healthTemp *= Math.pow(1.01, game.global.lastLowGen);
			if (game.goldenUpgrades.Battle.currentBonus > 0) healthTemp *= game.goldenUpgrades.Battle.currentBonus + 1;
			if (game.portal.Resilience.level > 0) healthTemp *= Math.pow(game.portal.Resilience.modifier + 1, game.portal.Resilience.level);
			if (game.global.challengeActive == "Daily" && typeof game.global.dailyChallenge.pressure !== 'undefined') healthTemp *= dailyModifiers.pressure.getMult(game.global.dailyChallenge.pressure.strength, game.global.dailyChallenge.pressure.stacks);
			if (game.global.formation !== 0){
				healthTemp *= (game.global.formation == 1) ? 4 : 0.5;
			}
			if (game.global.totalSquaredReward > 0)
				healthTemp *= ((game.global.totalSquaredReward / 100) + 1);
			if (game.global.challengeActive == "Balance"){
				healthTemp *= game.challenges.Balance.getHealthMult();
			}
			if (game.global.challengeActive == "Life"){
				healthTemp *= game.challenges.Life.getHealthMult();
			}
			healthTemp = calcHeirloomBonus("Shield", "trimpHealth", healthTemp);
			if (game.jobs.Amalgamator.owned > 0)
				healthTemp *= game.jobs.Amalgamator.getHealthMult();
			game.global.soldierHealthMax += healthTemp;
			game.global.soldierHealth += healthTemp;
			game.global.difs.health = 0;
			if (game.global.soldierHealth <= 0) game.global.soldierHealth = 0;
		}
		if (game.global.difs.attack !== 0) {
			var attackTemp = trimpsFighting * game.global.difs.attack * ((game.portal.Power.modifier * game.portal.Power.level) + 1);
			if (mutations.Magma.active()){
				attackTemp *= mutations.Magma.getTrimpDecay();
			}
			if (game.portal.Power_II.level) attackTemp *= (1 + (game.portal.Power_II.modifier * game.portal.Power_II.level));
			if (game.global.formation !== 0){
				attackTemp *= (game.global.formation == 2) ? 4 : 0.5;
			}
			game.global.soldierCurrentAttack += attackTemp;
			game.global.difs.attack = 0;
		}
		if (game.global.difs.block !== 0) {
			var blockTemp = (trimpsFighting * game.global.difs.block * ((game.global.difs.trainers * (calcHeirloomBonus("Shield", "trainerEfficiency", game.jobs.Trainer.modifier) / 100)) + 1));
			if (game.global.formation !== 0){
				blockTemp *= (game.global.formation == 3) ? 4 : 0.5;
			}
			blockTemp = calcHeirloomBonus("Shield", "trimpBlock", blockTemp);
			game.global.soldierCurrentBlock += blockTemp;
			game.global.difs.block = 0;
		}
	}
	if (!instaFight) updateAllBattleNumbers(game.resources.trimps.soldiers < currentSend);
    game.global.fighting = true;
    game.global.lastFightUpdate = new Date();
	if (instaFight) fight();
}

function updateAllBattleNumbers (skipNum) {
	var cellNum;
    var cell;
    var cellElem;
    if (game.global.mapsActive) {
        cellNum = game.global.lastClearedMapCell + 1;
        cell = game.global.mapGridArray[cellNum];
        cellElem = document.getElementById("mapCell" + cellNum);
    } else {
        cellNum = game.global.lastClearedCell + 1;
        cell = game.global.gridArray[cellNum];
        cellElem = document.getElementById("cell" + cellNum);
    }
	if (cellElem == null) return;
    swapClass("cellColor", "cellColorCurrent", cellElem);
    document.getElementById("goodGuyHealthMax").innerHTML = prettify(game.global.soldierHealthMax);
	updateGoodBar();
	updateBadBar(cell);
	document.getElementById("badGuyHealthMax").innerHTML = prettify(cell.maxHealth);
	if (!skipNum && game.global.challengeActive == "Trimp" && game.jobs.Amalgamator.owned > 0) document.getElementById("trimpsFighting").innerHTML = toZalgo(prettify(game.resources.trimps.getCurrentSend()), game.global.world);
	else if (!skipNum) document.getElementById("trimpsFighting").innerHTML = prettify(game.resources.trimps.getCurrentSend());
	document.getElementById("goodGuyBlock").innerHTML = prettify(game.global.soldierCurrentBlock);
	document.getElementById("goodGuyAttack").innerHTML = calculateDamage(game.global.soldierCurrentAttack, true, true);
	var badAttackElem = document.getElementById("badGuyAttack");
	badAttackElem.innerHTML = calculateDamage(cell.attack, true, false, false, cell);
	if (game.global.usingShriek) {
		swapClass("dmgColor", "dmgColorRed", badAttackElem);
		badAttackElem.innerHTML += '<span class="icomoon icon-chain"></span>';
	}
}

function toZalgo(string, seed, strength){
	string = string.toString();
	if (!strength) strength = 8;
	var zalgo_table = ['\u0315', '\u031b', '\u0340', '\u0341', '\u0358', '\u0321', '\u0322', '\u0327', '\u0328', '\u0334', '\u0335', '\u0336', '\u034f', '\u035c', '\u035d', '\u035e', '\u035f', '\u0360', '\u0362', '\u0361', '\u0489'];
	seed *= 1000;
	var newString = "";
	for (var x = 0; x < string.length; x++){
		var rand = getRandomIntSeeded(seed - x, 0, 10);
		newString += string[x];
		if (rand < strength){
			newString += zalgo_table[getRandomIntSeeded(seed + x, 0, zalgo_table.length)];
		}
	}
	return newString;
}

function updateGoodBar() {
    document.getElementById("goodGuyHealth").innerHTML = prettify(game.global.soldierHealth);
	if (!game.options.menu.progressBars.enabled) return;
	var barElem = document.getElementById("goodGuyBar");
    var percent = ((game.global.soldierHealth / game.global.soldierHealthMax) * 100);
    barElem.style.width = percent + "%";
    swapClass("percentColor", getBarColorClass(percent), barElem);
}

function updateBadBar(cell) {
	document.getElementById("badGuyHealth").innerHTML = prettify(cell.health);
	if (!game.options.menu.progressBars.enabled) return;
	var barElem = document.getElementById("badGuyBar");
	var percent = ((cell.health / cell.maxHealth) * 100);
    barElem.style.width = percent + "%";
	swapClass("percentColor", getBarColorClass(percent), barElem);
}

function getBaseBlock(){
	var baseBlock = Math.floor((game.global.block * (game.jobs.Trainer.owned * (calcHeirloomBonus("Shield", "trainerEfficiency", game.jobs.Trainer.modifier) / 100)) + game.global.block));
	baseBlock = calcHeirloomBonus("Shield", "trimpBlock", baseBlock);
	if (game.global.formation !== 0){
		baseBlock *= (game.global.formation == 3) ? 4 : 0.5;
	}
	return baseBlock;
}

function calculateDamage(number, buildString, isTrimp, noCheckAchieve, cell) { //number = base attack
    var fluctuation = .2; //%fluctuation
	var maxFluct = -1;
	var minFluct = -1;
	if (isTrimp){
		//Situational Trimp damage increases
		if (game.jobs.Amalgamator.owned > 0){
			number *= game.jobs.Amalgamator.getDamageMult();
		}
		if (game.challenges.Electricity.stacks > 0) { //Electricity
			number *= (1 - (game.challenges.Electricity.stacks * 0.1));
		}
		if (game.global.antiStacks > 0) {
			number *= ((game.global.antiStacks * game.portal.Anticipation.level * game.portal.Anticipation.modifier) + 1);
			updateAntiStacks();
		}
		if (!game.global.mapsActive && game.global.mapBonus > 0){
			number *= ((game.global.mapBonus * .2) + 1);
		}
		if (game.global.titimpLeft >= 1 && game.global.mapsActive){
			number *= 2;
		}
		if (game.global.achievementBonus > 0){
			number *= (1 + (game.global.achievementBonus / 100));
		}
		if (game.global.challengeActive == "Discipline"){
			fluctuation = .995;
		}
		else if (game.portal.Range.level > 0){
			minFluct = fluctuation - (.02 * game.portal.Range.level);
		}
		if (game.global.challengeActive == "Decay"){
			number *= 5;
			number *= Math.pow(0.995, game.challenges.Decay.stacks);
		}
		if (game.global.roboTrimpLevel > 0){
			number *= ((0.2 * game.global.roboTrimpLevel) + 1);
		}
		if (game.global.challengeActive == "Lead" && ((game.global.world % 2) == 1)){
			number *= 1.5;
		}
		if (game.goldenUpgrades.Battle.currentBonus > 0){
			number *= game.goldenUpgrades.Battle.currentBonus + 1;
		}
		if (game.talents.voidPower.purchased && game.global.voidBuff){
			var vpAmt = (game.talents.voidPower2.purchased) ? ((game.talents.voidPower3.purchased) ? 65 : 35) : 15;
			number *= ((vpAmt / 100) + 1);
		}
		if (game.global.totalSquaredReward > 0){
			number *= ((game.global.totalSquaredReward / 100) + 1)
		}
		if (getEmpowerment() == "Ice"){
			number *= 1 + game.empowerments.Ice.getDamageModifier();
		}
		if (game.talents.magmamancer.purchased){
			number *= game.jobs.Magmamancer.getBonusPercent();
		}
		if (game.talents.stillRowing2.purchased){
			number *= ((game.global.spireRows * 0.06) + 1);
		}
		if (game.talents.healthStrength.purchased && mutations.Healthy.active()){
			number *= ((0.15 * mutations.Healthy.cellCount()) + 1);
		}
		if (game.talents.scry.purchased && !game.global.mapsActive && isScryerBonusActive()){
			var worldCell = getCurrentWorldCell();
			if (worldCell.mutation == "Corruption" || worldCell.mutation == "Healthy"){
				number *= 2;
			}
		}
		if (game.talents.daily.purchased && game.global.challengeActive == "Daily"){
			number *= 1.5;
		}
		if (game.global.sugarRush > 0){
			number *= sugarRush.getAttackStrength();
		}
		if (game.global.challengeActive == "Life") {
			number *= game.challenges.Life.getHealthMult();
		}
		if (game.singleRunBonuses.sharpTrimps.owned){
			number *= 1.5;
		}
		if (game.global.mapsActive && game.talents.bionic2.purchased && getCurrentMapObject().level > game.global.world){
			number *= 1.5;
		}
		if (playerSpireTraps.Strength.owned){
			var strBonus = playerSpireTraps.Strength.getWorldBonus();
			number *= (1 + (strBonus / 100));
		}
		if (Fluffy.isRewardActive('voidSiphon') && game.stats.totalVoidMaps.value){
			number *= (1 + (game.stats.totalVoidMaps.value * 0.05));
		}
		if (game.global.challengeActive == "Daily"){
			if (typeof game.global.dailyChallenge.minDamage !== 'undefined'){
				if (minFluct == -1) minFluct = fluctuation;
				minFluct += dailyModifiers.minDamage.getMult(game.global.dailyChallenge.minDamage.strength);
			}
			if (typeof game.global.dailyChallenge.maxDamage !== 'undefined'){
				if (maxFluct == -1) maxFluct = fluctuation;
				maxFluct += dailyModifiers.maxDamage.getMult(game.global.dailyChallenge.maxDamage.strength);
			}
			if (typeof game.global.dailyChallenge.weakness !== 'undefined'){
				number *= dailyModifiers.weakness.getMult(game.global.dailyChallenge.weakness.strength, game.global.dailyChallenge.weakness.stacks);
			}
			if (typeof game.global.dailyChallenge.oddTrimpNerf !== 'undefined' && ((game.global.world % 2) == 1)){
					number *= dailyModifiers.oddTrimpNerf.getMult(game.global.dailyChallenge.oddTrimpNerf.strength);
			}
			if (typeof game.global.dailyChallenge.evenTrimpBuff !== 'undefined' && ((game.global.world % 2) == 0)){
					number *= dailyModifiers.evenTrimpBuff.getMult(game.global.dailyChallenge.evenTrimpBuff.strength);
			}
			if (typeof game.global.dailyChallenge.rampage !== 'undefined'){
				number *= dailyModifiers.rampage.getMult(game.global.dailyChallenge.rampage.strength, game.global.dailyChallenge.rampage.stacks);
			}
		}
		number = calcHeirloomBonus("Shield", "trimpAttack", number);
		if (Fluffy.isActive()){
			number *= Fluffy.getDamageModifier();
		}


	}
	else {
		//Situational Bad Guy damage increases
		if (game.global.challengeActive){
			//Challenge bonuses here
			if (game.global.challengeActive == "Coordinate"){
				number *= getBadCoordLevel();
			}
			else if (game.global.challengeActive == "Meditate"){
				number *= 1.5;
			}
			else if (game.global.challengeActive == "Nom" && typeof cell.nomStacks !== 'undefined'){
				number *= Math.pow(1.25, cell.nomStacks);
			}
			else if (game.global.challengeActive == "Watch") {
				number *= 1.25;
			}
			else if (game.global.challengeActive == "Lead"){
				number *= (1 + (Math.min(game.challenges.Lead.stacks, 200) * 0.04));
			}
			else if (game.global.challengeActive == "Scientist" && getScientistLevel() == 5) {
				number *= 10;
			}
			else if (game.global.challengeActive == "Corrupted"){
				number *= 3;
			}
			if (game.global.challengeActive == "Daily"){
				if (typeof game.global.dailyChallenge.badStrength !== 'undefined'){
					number *= dailyModifiers.badStrength.getMult(game.global.dailyChallenge.badStrength.strength);
				}
				if (typeof game.global.dailyChallenge.badMapStrength !== 'undefined' && game.global.mapsActive){
					number *= dailyModifiers.badMapStrength.getMult(game.global.dailyChallenge.badMapStrength.strength);
				}
				if (typeof game.global.dailyChallenge.bloodthirst !== 'undefined'){
					number *= dailyModifiers.bloodthirst.getMult(game.global.dailyChallenge.bloodthirst.strength, game.global.dailyChallenge.bloodthirst.stacks)
				}
				if (typeof game.global.dailyChallenge.empower !== 'undefined' && !game.global.mapsActive){
					number *= dailyModifiers.empower.getMult(game.global.dailyChallenge.empower.strength, game.global.dailyChallenge.empower.stacks);
				}
			}
		}
		if (game.global.usingShriek) {
			number *= game.mapUnlocks.roboTrimp.getShriekValue();
		}
		//Keep ice last for achievements
		if (getEmpowerment() == "Ice"){
			number *= game.empowerments.Ice.getCombatModifier();
			if (number >= 0 && number < 1 && !game.global.mapsActive) giveSingleAchieve("Brr");
		}
	}
	if (minFluct > 1) minFluct = 1;
	if (maxFluct == -1) maxFluct = fluctuation;
	if (minFluct == -1) minFluct = fluctuation;
	var min = Math.floor(number * (1 - minFluct));
    var max = Math.ceil(number + (number * maxFluct));
    if (buildString) {
		if (isTrimp) {
			if (noCheckAchieve) return max;
			var critChance = getPlayerCritChance();
			if (critChance >= 1){
				var critDamage = getPlayerCritDamageMult();
				number *= critDamage;
				if (critChance >= 3) number *= getMegaCritDamageMult(3);
				else if (critChance >= 2) number *= getMegaCritDamageMult(2);
				min = Math.floor(number * (1 - minFluct));
				max = Math.ceil(number + (number * maxFluct));
			}
			checkAchieve("damage", max);
		}
		return prettify(min) + "-" + prettify(max);
    }

	number = Math.floor(Math.random() * ((max + 1) - min)) + min;
    return number;
}

function updateForemenCount(){
	document.getElementById("foremenCount").innerHTML = (game.global.autoCraftModifier * 4) + " 工头";
	updateBuildSpeed();
}

function tryScry(){
	var roll = getRandomIntSeeded(game.global.scrySeed, 0, 100);
	if (roll < 50 || roll > 52) return;
	var reward = calculateScryingReward();
	if (reward <= 0) return;
	if (countHeliumSpent() == 0) giveSingleAchieve("Unessenceted");
	game.global.essence += reward;
	var maxCost = getTotalTalentCost();
	var talentCount = countPurchasedTalents();
	var maxTalents = Object.keys(game.talents).length;
	if (game.global.spentEssence + game.global.essence > maxCost || talentCount == maxTalents){
		if (talentCount == maxTalents){
			game.global.essence = 0;
		}
		else{
			game.global.essence = Math.max(maxCost - game.global.spentEssence, 0);
			game.global.essence = Math.round(game.global.essence);
		}
		message("You have no more use for Dark Essence!", "Loot", "*cloud3", "essenceMessage", "essence");
	}
	else {
		message("你找到了 " + prettify(reward) + " Dark Essence!", "Loot", "*cloud3", "essenceMessage", "essence");
	}
	updateTalentNumbers();
	return reward;
}

function countRemainingEssenceDrops(){
	var cellsRemaining = 100 - game.global.lastClearedCell - 1;
	var count = 0;
	for (var x = 1; x <= cellsRemaining; x++){
		var roll = getRandomIntSeeded(game.global.scrySeed + x, 0, 100);
		if (roll < 50 || roll > 52) continue;
		count++;
	}
	return count;
}

function calculateScryingReward(){
	var scryableLevels = game.global.world - 180;
	if (scryableLevels <= 0) return 0;
	var modAmt = (game.global.canMagma) ? 1.1683885 : 1.11613; //4.0 compatibility
	var num = (1 * Math.pow(modAmt, scryableLevels)) / 3;
	if (game.talents.scry.purchased && !game.global.mapsActive){
		var worldCell = getCurrentWorldCell();
		if (worldCell.mutation == "Corruption" || worldCell.mutation == "Healthy"){
			num *= 1.5;
		}
	}
	if (game.global.spiresCompleted >= 1){
		num *= Math.pow(4, game.global.spiresCompleted);
	}
	num = Math.floor(num);
	return (num < 1) ? 1 : num;
}

function getHighestUnlockedTalentTier(){
	var totalTiers = getHighestTalentTier();
	var colsPerTier = 6;

	var affordable = checkAffordableTalents();
	var required = 0;
	for (var x = 2; x <= totalTiers; x++){
		var add = (x > colsPerTier) ? colsPerTier : x;
		required += add;
		if (required > affordable) return x;
	}
	return totalTiers;
}

function getHighestIdealRow(){
	var idealPoints = [16, 22, 28, 34, 40, 45, 49, 52, 54];
	var affordable = checkAffordableTalents();
	for (var x = 0; x < idealPoints.length; x++){
		if (affordable < idealPoints[x]) return x;
	}
	return idealPoints.length;
}

function displayTalents(){
	var html = "<div class='talentTierRow talentRowUnlocked'>";
	var currentTier = 1;
	var tiers = getAllowedTalentTiers();
	var purchasePower = getHighestUnlockedTalentTier();
	var highestBuyoutRow = getHighestPurchaseableRow();
	var highestIdealRow = getHighestIdealRow();
	for (var item in game.talents){
		var talent = game.talents[item];
		if (talent.tier > currentTier) {
			currentTier = talent.tier;
			html += "</div><div class='talentTierRow talentRow" + ((tiers[currentTier - 1] > 0) ? 'Unlocked' : 'Locked') + "'>";
		}
		var talentClass = ((ctrlPressed && talent.tier <= highestBuyoutRow) ? ((talent.tier <= highestIdealRow) ? "talentIdealRow " : "talentCanBuyRow ") : "") + "talentItem noselect talent" + ((talent.purchased) ? "Purchased" : "NotPurchased");
		if (talent.requires && !game.talents[talent.requires].purchased) talentClass += " talentReqNeeded";
		var icon = (talent.icon.charAt(0) == "*") ? "icomoon icon-" + talent.icon.substr(1) : "glyphicon glyphicon-" + talent.icon;
		if (currentTier > purchasePower){
			html += "<div class='talentItem noselect talentNotPurchased talentLocked'><span class='talentIcon'><span class='icomoon icon-locked'></span></span></div>";
		}
		else {
			html += "<div class='" + talentClass + "' onmouseover='tooltip(\"" + item + "\", \"talents\", event)' onmouseout='tooltip(\"hide\")' onclick='purchaseTalent(\"" + item + "\")'><span class='talentIcon'><span class='" + icon + "'></span></span><br/><div class='talentName'>" + cntalentname(talent.name) + "</div></div>";
		}
	}
	html += "</div>";
	document.getElementById('talentsHere').innerHTML = html;
	var respecBtn = document.getElementById('talentRespecBtn');
	var respecAvailable = (game.global.b >= 20 || game.global.freeTalentRespecs) ? 'colorDanger' : 'colorBuyOff';
	swapClass('color', respecAvailable, respecBtn)
	if (game.global.freeTalentRespecs > 0) respecBtn.innerHTML = "Respec (" + game.global.freeTalentRespecs + " Free!)";
	else respecBtn.innerHTML = "Respec (20 Bones)";
	updateTalentNumbers();
}

function updateTalentNumbers(){
	var mainEssenceElem = document.getElementById('essenceOwned')
	var nextCostElem = document.getElementById('talentsNextCost')
	var talentsCostElem = document.getElementById('talentsCost');
	var alertElem = document.getElementById('talentsAlert');
	var countElem = document.getElementById('talentsEssenceTotal');
	//Check primary elements, update
	if (mainEssenceElem == null || nextCostElem == null) {return;}

	var nextCost = getNextTalentCost();
	mainEssenceElem.innerHTML = prettify(game.global.essence);
	if (nextCost == -1){
		talentsCostElem.style.display = 'none';
		alertElem.innerHTML = "";
		countElem.innerHTML = "";
		return;
	}
	talentsCostElem.style.display = "block";
	nextCostElem.innerHTML = prettify(nextCost);
	//Check setting elements, update
	if (alertElem == null || countElem == null) return;
	if ((game.options.menu.masteryTab.enabled == 1 || game.options.menu.masteryTab.enabled == 3) && nextCost <= game.global.essence){
		alertElem.innerHTML = "!";
		countElem.innerHTML = "";
		return;
	}
	alertElem.innerHTML = "";
	countElem.innerHTML = (game.options.menu.masteryTab.enabled >= 2) ? " (" + prettify(game.global.essence) + ")" : "";
}

function respecTalents(confirmed, force){
	if (!force && game.global.freeTalentRespecs > 0) {
		if (!confirmed){
			tooltip('Confirm Respec Masteries', null, 'update', true);
			return;
		}
		game.global.freeTalentRespecs--;
	}
	else if (!force){
		if (game.global.b < 20) return;
		if (!confirmed){
			tooltip('Confirm Respec Masteries', null, 'update');
			return;
		}
			game.global.b -= 20;
			updateSkeleBtn();
	}
	for (var item in game.talents){
		if (game.talents[item].purchased && typeof game.talents[item].onRespec === 'function') game.talents[item].onRespec();
		game.talents[item].purchased = false;
		if (game.talents[item].purchased && typeof game.talents[item].afterRespec === 'function') game.talents[item].afterRespec();
	}
	game.global.essence += game.global.spentEssence;
	game.global.spentEssence = 0;
	displayTalents();
}

function purchaseTalent(what){
	//from user click
	var talent = game.talents[what];
	if (ctrlPressed && canPurchaseRow(talent.tier)){
		purchaseTalentRow(talent.tier);
		return;
	}
	completeTalentPurchase(talent);
}

function completeTalentPurchase(talent){
	//from purchaseTalent or other functions
	if (talent.purchased) return;
	if (getAllowedTalentTiers()[talent.tier - 1] <= 0) return;
	if (talent.requires && !game.talents[talent.requires].purchased) return;
	var cost = getNextTalentCost();
	if (game.global.essence < cost && prettify(game.global.essence) != prettify(cost)) return;
	if (game.global.essence < cost) game.global.essence = cost;
	game.global.essence -= cost;
	game.global.spentEssence += cost;
	talent.purchased = true;
	if (typeof talent.onPurchase === 'function') talent.onPurchase();
	if (countPurchasedTalents() == Object.keys(game.talents).length) game.global.essence = 0;
	displayTalents();
}

function purchaseTalentRow(tier){
	for (var item in game.talents){
		var talent = game.talents[item];
		if (talent.tier > tier) return;
		completeTalentPurchase(talent);
	}
}

function canPurchaseRow(tierNumber){
	var totalRequiredPurchases = 0;
	for (var x = tierNumber; x > 0; x--){
		var purchasedThisTier = countPurchasedTalents(x);
		totalRequiredPurchases += (6 - purchasedThisTier);
	}
	if (checkAffordableTalents() - countPurchasedTalents() >= totalRequiredPurchases) 
		return true;
	return false;
}

function getHighestPurchaseableRow(){
	var canBuy = checkAffordableTalents() - countPurchasedTalents();
	var maxTier = getHighestTalentTier();
	var needToSpend = 0;
	for (var x = 1; x <= maxTier; x++){
		needToSpend += (6 - countPurchasedTalents(x));
		if (needToSpend > canBuy) return x - 1;
	}
	return maxTier;
}

function getHighestTalentTier(){
	return game.talents[Object.keys(game.talents)[Object.keys(game.talents).length - 1]].tier;
}

function getAllowedTalentTiers(){
	var totalTiers = 9;
	var colsPerTier = 6;

	var ownedLastTier = countPurchasedTalents(1);
	var allowed = [colsPerTier - ownedLastTier];
	for (var x = 2; x <= totalTiers; x++){
		var ownedThisTier = countPurchasedTalents(x);
		if (ownedLastTier <= 1){
			//-1 means the tier is locked
			allowed.push(-1);
		}
		else if (ownedLastTier == colsPerTier) {
			//previous tier is maxxed out, so anything in this tier can be purchased
			allowed.push(colsPerTier - ownedThisTier);
		}
		else{
			//previous tier is not maxxed out. 0 is possible and means the tier is displayed (not locked), but not greyed out and not purchaseable
			allowed.push(ownedLastTier - ownedThisTier - 1);
		}
		ownedLastTier = ownedThisTier;
	}
	return allowed;
}

function initTalents(){
	for (var item in game.talents){
		if (!game.talents[item].purchased) continue;
		if (typeof game.talents[item].onPurchase === 'function') game.talents[item].onPurchase();
	}
}

function countPurchasedTalents(tier){
	var count = 0;
	for (var item in game.talents){
		if ((!tier || game.talents[item].tier == tier) && game.talents[item].purchased) count++;
	}
	return count;
}

function checkAffordableTalents(){
	var totalEssence = game.global.spentEssence + game.global.essence;
	var talentCount = Object.keys(game.talents).length;
	var totalPrice = 0;
	for (var x = 0; x < talentCount; x++){
		totalPrice += getNextTalentCost(x);
		if (totalPrice > totalEssence) return x;
	}
	return talentCount;
}

function getNextTalentCost(forceAmt){
	var count = (isNaN(forceAmt)) ? countPurchasedTalents() : forceAmt;
	if (count == Object.keys(game.talents).length) return -1;
	if (count >= 25){
		//2824295364810 == Math.floor(10 * Math.pow(3, 24)) == cost of talent 25
		return Math.floor(2824295364810 * Math.pow(6, count - 24));
	}
	return Math.floor(10 * Math.pow(3, count));
}

function getTotalTalentCost(){
	var count = Object.keys(game.talents).length;
	//1412147682400 == 10 * (Math.pow(3, 24) - 1) / 2 == cost of 1-25
	return 1412147682400 + (2824295364810 * (Math.pow(6, count - 24) - 1) / 5);
}


function checkIfSpireWorld(getNumber){
	if (game.global.world >= 200 && (game.global.world % 100) == 0){
		var spireNumber = (Math.round(game.global.world / 100) - 1);
		if (spireNumber > (game.global.lastSpireCleared + 1)){
			return false
		}
		if (getNumber){
			return spireNumber;
		}
		return true;
	}
	return false;
}

function rewardLiquidZone(){
	messageLock = true;
	game.stats.battlesWon.value += 99;
	var voidMaps = 0;
	var unlocks = ["", ""]; //[unique, repeated]
	var food = game.resources.food.owned;
	var wood = game.resources.wood.owned;
	var metal = game.resources.metal.owned;
	var helium = game.resources.helium.owned;
	var fragments = game.resources.fragments.owned;
	var trimpsCount = game.resources.trimps.realMax();
	var tokText;
	var trackedImps = {
		Feyimp: 0,
		Magnimp: 0,
		Tauntimp: 0,
		Venimp: 0,
		Whipimp: 0,
		Skeletimp: 0,
		Megaskeletimp: 0
	};
	var hiddenUpgrades = ["fiveTrimpMax", "Map", "fruit", "groundLumber", "freeMetals", "Foreman", "FirstMap"];
	for (var x = 1; x < 100; x++){
		game.global.voidSeed++;
		game.global.scrySeed++;
		if (isScryerBonusActive()) tryScry();
		if (checkVoidMap() == 1) voidMaps++;
		var cell = game.global.gridArray[x];
		if (cell.special !== ""){
			var unlock = game.worldUnlocks[cell.special];        
			if (typeof unlock !== 'undefined' && typeof unlock.fire !== 'undefined') {
				unlock.fire(x);
				if (hiddenUpgrades.indexOf(cell.special) == -1){
					var index = (unlock.world < 0) ? 1 : 0;
					if (unlocks[index] !== "") unlocks[index] += ", ";
					if (typeof unlock.displayAs !== 'undefined')
						unlocks[index] += unlock.displayAs;
					else
						unlocks[index] += cell.special;	
				}
			} else {
				unlockEquipment(cell.special);
			}
		}
		if (cell.mutation && typeof mutations[cell.mutation].reward !== 'undefined') mutations[cell.mutation].reward(cell.corrupted);
		if (cell.empowerment){
			var tokReward = rewardToken(cell.empowerment);
			if (game.global.messages.Loot.token && game.global.messages.Loot.enabled){
				tokText = "<span class='message empoweredCell" + cell.empowerment + "'>Found " + prettify(tokReward) + " Token" + ((tokReward == 1) ? "" : "s") + " of " + cell.empowerment + "!</span>";
			}
		}
		if (typeof game.badGuys[cell.name].loot !== 'undefined') game.badGuys[cell.name].loot(cell.level);
		if (typeof trackedImps[cell.name] !== 'undefined'){
			trackedImps[cell.name]++;
		}
	}
	messageLock = false;
	var text = "";
	var addUniques = (unlocks[0] !== "" && game.global.messages.Unlocks.unique);
	var addRepeateds = (unlocks[1] !== "" && game.global.messages.Unlocks.repeated);
	if ((addUniques || addRepeateds) && game.global.messages.Unlocks.enabled){
		 text += "解锁发现: ";
		 if (addUniques){
			 text += unlocks[0];
			 if (addRepeateds) text += ", ";
		 }
		if (addRepeateds)
			text += unlocks[1];
		text += "<br/>";
	}
	if (game.global.messages.Loot.enabled && (game.global.messages.Loot.primary || game.global.messages.Loot.secondary)){
		text += "发现资源：";
		var heCount = game.resources.helium.owned - helium;
		if (game.global.messages.Loot.helium && heCount > 0){
			text += " 氦 - " + prettify(heCount) + ",";
		}
		if (game.global.messages.Loot.secondary){
			text += " 脆皮最大上限 - " + prettify(game.resources.trimps.realMax() - trimpsCount) + ",";
			text += " 碎片 - " + prettify(game.resources.fragments.owned - fragments) + ",";
		}
		if (game.global.messages.Loot.primary){
			text += " 食物 - " + prettify(game.resources.food.owned - food) + ",";
			text += " 木头 - " + prettify(game.resources.wood.owned - wood) + ",";
			text += " 金属 - " + prettify(game.resources.metal.owned - metal) + ",";
		}
		
		text = text.slice(0, -1);
		text += "<br/>";
	}
	var trackedList = "";
	var bones = "";
	for (var item in trackedImps){
		if (trackedImps[item] > 0){
			if (item == "Skeletimp" || item == "Megaskeletimp"){
				bones = item;
				continue;
			}
			if (trackedList !== "") trackedList += ", ";
			trackedList += item + " - " + trackedImps[item];
		}
	}
	if (trackedList != "" && game.global.messages.Loot.exotic && game.global.messages.Loot.enabled){
		trackedList = "罕见的小鬼: " + trackedList + "<br/>";
		text += trackedList;
	}
	if (bones != "" && game.global.messages.Loot.bone && game.global.messages.Loot.enabled){
		bones = "找到了一个 " + bones + "!<br/>";
		text += bones;
	}
	if (tokText != null){
		text += tokText + "<br/>";
	}
	if (text){
		text = "You liquified a Liquimp!<br/>" + text;
		text = text.slice(0, -5);
		message(text, "Notices", "star", "LiquimpMessage");
	}
	if (game.global.challengeActive == "Lead"){
		game.challenges.Lead.stacks -= 100;
		manageLeadStacks();
	}
	game.stats.zonesLiquified.value++;
	nextWorld();
}

function checkIfLiquidZone(){
	if (game.options.menu.liquification.enabled == 0 || game.global.challengeActive == "Obliterated" || game.global.challengeActive == "Eradicated") return false;
	var spireCount = game.global.spiresCompleted;
	if (game.talents.liquification.purchased) spireCount++;
	if (game.talents.liquification2.purchased) spireCount++;
	spireCount += (Fluffy.isRewardActive("liquid") * 0.5);
	var liquidAmount = ((spireCount) / 20);
	if (game.global.world > ((game.global.highestLevelCleared + 1) * liquidAmount) || checkIfSpireWorld()){
		return false;
	}
	return true;
}

function liquifyZone(){
	if (!checkIfLiquidZone()) return;
	var grid = game.global.gridArray;
	var trackedImps = {
		Feyimp: 0,
		Tauntimp: 0,
		Whipimp: 0,
		Venimp: 0,
		Magnimp: 0,
		Skeletimp: 0,
		Megaskeletimp: 0
	};
	//Move first resource/unlock
	if (grid[0].special !== ""){
		for (var x = 1; x < grid.length; x++){
			if (grid[x].special === ""){
				grid[x].text = grid[0].text;
				grid[x].special = grid[0].special;
				grid[0].text = "";
				grid[0].special = "";
				break;
			}
		}
	}
	//If the first enemy is important, move it
	if (typeof trackedImps[grid[0].name] !== 'undefined'){
		for (var y = 1; y < grid.length; y++){
			if (typeof trackedImps[grid[y].name] === 'undefined'){
				grid[y].name = grid[0].name;
				break;
			}
		}
	}
	grid[0].name = "Liquimp";
}

function nextWorld() {
	if (game.global.world > game.global.highestLevelCleared){
		game.global.highestLevelCleared = game.global.world;
		game.global.voidMaxLevel = game.global.world;
		if (game.global.world == 199) addNewSetting('mapsOnSpire');
		else if (game.global.world == 180) {
			unlockFormation(4);
			filterTabs('talents');
			addNewSetting('masteryTab');
		}
		else if (game.global.world == 64) tooltip("UnlockedChallenge2", null, 'update');
		else if (game.global.world == 59) addNewSetting("ctrlGigas");
		else if (game.global.world == 79) addNewSetting("bigPopups");
	}
	Fluffy.rewardExp();
    game.global.world++;
    document.getElementById("worldNumber").innerHTML = game.global.world;
	game.global.mapBonus = 0;
	document.getElementById("mapBonus").innerHTML = "";
    game.global.lastClearedCell = -1;
    game.global.gridArray = [];
    document.getElementById("grid").innerHTML = "";
	if (checkIfSpireWorld()) startSpire();
	buildGrid();
	liquifyZone();
	drawGrid();
	buyAutoJobs(true);
	if (game.worldText["w" + game.global.world]) message(game.worldText["w" + game.global.world], "Story");
	if (game.global.canMagma) checkAchieve("zones");
	checkGenStateSwitch();
	if (game.global.challengeActive == "Scientist" && game.global.highestLevelCleared >= 129 && game.global.sLevel >= 4 && game.global.world == 76){
		giveSingleAchieve("AntiScience");
	}
	game.global.zoneStarted = getGameTime();
	if (game.global.challengeActive == "Mapology") {
		game.challenges.Mapology.credits++;
		updateMapCredits();
	}
	if (game.global.roboTrimpLevel && game.global.brokenPlanet) {
		if (game.global.roboTrimpCooldown > 0) game.global.roboTrimpCooldown--;
		displayRoboTrimp();
	}
	if (game.global.challengeActive == "Toxicity") {
		game.challenges.Toxicity.stacks = 0;
		updateToxicityStacks();
	}
	if (game.global.challengeActive == "Watch"){
		if (game.global.world > 6) dropPrestiges();
		if (!game.global.autoJobsSetting.enabled)
			assignExtraWorkers()
	}
	if (game.global.challengeActive == "Lead"){
		if ((game.global.world % 2) == 0) game.challenges.Lead.stacks = 200;
		manageLeadStacks();
	}
	if (game.global.challengeActive == "Decay"){
		game.challenges.Decay.stacks = 0;
		if (game.global.world == 56 && !game.global.runningChallengeSquared){
			game.challenges.Decay.completed = true;
			game.global.decayDone = true;
			game.global.challengeActive = "";
			game.challenges.Decay.abandon();
			message("You have completed the Decay challenge! All stats have been returned to normal, and you can now create more powerful Gardens maps at will!", "Notices")
		}
	}
	if (game.global.challengeActive == "Daily"){
		if (typeof game.global.dailyChallenge.toxic !== 'undefined'){
			game.global.dailyChallenge.toxic.stacks = 0;
			updateDailyStacks('toxic');
		}
		if (typeof game.global.dailyChallenge.karma !== 'undefined'){
			game.global.dailyChallenge.karma.stacks = 0;
			updateDailyStacks('karma');
		}
		if (typeof game.global.dailyChallenge.pressure !== 'undefined'){
			dailyModifiers.pressure.resetTimer();
		}
	}
	if (game.talents.blacksmith.purchased && (game.global.challengeActive != "Mapology" || !game.global.runningChallengeSquared)){
		var smithWorld = .5;
		if (game.talents.blacksmith3.purchased) smithWorld = .9;
		else if (game.talents.blacksmith2.purchased) smithWorld = 0.75;
		smithWorld =  Math.floor((game.global.highestLevelCleared + 1) * smithWorld);
		if (game.global.world <= smithWorld){
			dropPrestiges();
		}
	}
	if (game.talents.bionic.purchased){
		var bTier = ((game.global.world - 126) / 15);
		if (game.global.world >= 126) game.mapUnlocks.BionicWonderland.canRunOnce = false;
		if (bTier % 1 === 0 && bTier == game.global.bionicOwned && game.global.roboTrimpLevel >= bTier) {
			game.mapUnlocks.roboTrimp.createMap(bTier);
			refreshMaps();
		}
	}
	if (game.talents.housing.purchased) {
		autoUnlockHousing();
	}
	if (game.talents.explorers.purchased){
		if (Math.floor((game.global.world - game.mapUnlocks.Speedexplorer.next) / 10)){
			game.mapUnlocks.Speedexplorer.fire(0, true);
			if (game.global.currentMapId){
				for (var x = 0; x < game.global.mapGridArray.length; x++){
					if (game.global.mapGridArray[x].special == "Speedexplorer") game.global.mapGridArray[x].special = "";
				}
			}
		}
	}
	if (game.talents.portal.purchased && game.global.world == 21 && game.mapUnlocks.Portal.canRunOnce){
		game.mapUnlocks.Portal.fire(0, true);
		game.mapUnlocks.Portal.canRunOnce = false;
		refreshMaps();
	}
	if (game.talents.bounty.purchased && game.global.world == 16 && game.mapUnlocks.Bounty.canRunOnce){
		game.mapUnlocks.Bounty.fire();
		game.mapUnlocks.Bounty.canRunOnce = false;
		refreshMaps();
	}
	if (game.global.world == mutations.Corruption.start(true)){
		tooltip("Corruption", null, 'update');
	}
	if (mutations.Magma.active()){
		if (game.global.world == mutations.Magma.start()){
			startTheMagma();
		}
		mutations.Magma.increaseTrimpDecay();
		increaseTheHeat();
		decayNurseries();
	}
	if (game.global.challengeActive == "Eradicated" && game.global.world <= 101) unlockUpgrade("Coordination");
	if (game.global.world == 30 && game.global.canRespecPerks && !game.global.bonePortalThisRun && countHeliumSpent() <= 60) giveSingleAchieve("Underachiever");
	else if (game.global.world == 10 && game.stats.trimpsKilled.value <= 5) giveSingleAchieve("Peacekeeper");
	else if (game.global.world == 60){
		if (game.stats.trimpsKilled.value <= 1000) giveSingleAchieve("Workplace Safety");
		if ((game.stats.cellsOverkilled.value + (game.stats.zonesLiquified.value * 50)) == 2950) giveSingleAchieve("Gotta Go Fast");
		if (getHighestPrestige() <= 3) giveSingleAchieve("Shaggy");
		//Without Hiring Anything
		var jobCount = 0;
		for (var job in game.jobs) jobCount += game.jobs[job].owned; //Dragimp adds 1
		if (jobCount - game.jobs.Dragimp.owned - game.jobs.Amalgamator.owned == 0 && game.stats.trimpsFired.value == 0) giveSingleAchieve("Unemployment");
	}
	else if (game.global.world == 65) checkChallengeSquaredAllowed();
	else if (game.global.world == 75 && checkHousing(true) == 0) giveSingleAchieve("Tent City");
	else if (game.global.world == 120 && !game.global.researched) giveSingleAchieve("No Time for That");
	if (game.global.challengeActive == "Life"){
		if (game.global.world >= 100 && game.challenges.Life.lowestStacks == 150) giveSingleAchieve("Very Sneaky");
		game.challenges.Life.lowestStacks = game.challenges.Life.stacks;
	}
	displayGoldenUpgrades();
	if (game.achievements.humaneRun.earnable){
		if (game.stats.battlesLost.value > game.achievements.humaneRun.lastZone + 1){
			game.achievements.humaneRun.lastZone = game.global.world - 1;
			game.achievements.humaneRun.earnable = false;
		}
		else{
			checkAchieve("humaneRun");
			game.achievements.humaneRun.lastZone = game.stats.battlesLost.value;
			}
	}
	setEmpowerTab();
	if (game.global.world >= 241 && game.global.world % 5 == 1){
		resetEmpowerStacks();
	}
	game.stats.zonesCleared.value++;
	checkAchieve("totalZones");
	if (game.options.menu.mapAtZone.enabled && game.global.canMapAtZone && !game.global.preMapsActive){
		for (var x = 0; x < game.options.menu.mapAtZone.setZone.length; x++){
			if (game.global.world == game.options.menu.mapAtZone.setZone[x])
				mapsClicked(true);
				toggleSetting("mapAtZone", null, false, true);
		}
	}
	if (game.global.capTrimp) message("I'm terribly sorry, but your Trimp<sup>2</sup> run appears to have more than one Trimp fighting, which kinda defeats the purpose. Your score for this Challenge<sup>2</sup> will be capped at 230.", "Notices");
}

function purgeBionics(){
	var bionicMaps = game.global.mapsOwnedArray.filter(function(map){return map.location == "Bionic";});
	if (bionicMaps.length > 3){
		var trim = bionicMaps.length - 3;
		for (var x = 0; x < trim; x++){
			var index = game.global.mapsOwnedArray.indexOf(bionicMaps[x]);
			if (game.global.mapsOwnedArray[index].id == game.global.currentMapId){
				if (game.global.mapsActive) continue;
				game.global.currentMapId = "";
				game.global.mapGridArray = [];
				game.global.lookingAtMap = "";
				game.global.lastClearedMapCell = -1;
			}
			message("Recycled " + bionicMaps[x].name + ".", "Notices");
			game.global.mapsOwnedArray.splice(index, 1);
		}
	}
}

function autoUnlockHousing(){
	var house = "";
		switch (game.global.world) {
			case 9:
				house = "Mansion";
				break;
			case 15:
				house = "Hotel";
				break;
			case 24:
				house = "Nursery";
				break;
			case 26:
				house = "Resort";
				break;
			case 31:
				house = "Gateway";
				break;
			case 37:
				house = "Wormhole";
				break;
			case 51:
				house = "Collector";
				break;
			default: return;
		}
		if (!house) return;
		house = game.mapUnlocks[house];
		if (!house.canRunOnce) return;
		house.fire();
		house.canRunOnce = false;
		message(house.message, "Unlocks", null, null, 'unique', convertUnlockIconToSpan(house));
}

function startSpire(confirmed){
	var spireNum = checkIfSpireWorld(true);
	if (!confirmed){
		game.global.spireDeaths = 0;
		game.global.spireActive = true;
		setNonMapBox();
		var spireSetting = game.options.menu.mapsOnSpire.enabled;
		if (spireSetting){
			var highestSpire = Math.floor((game.global.highestLevelCleared - 99) / 100);
			if (spireSetting == 1 || (spireSetting == 2 && spireNum >= highestSpire - 1) || (spireSetting == 3 && spireNum >= highestSpire)){
				game.global.fighting = false;
				mapsSwitch();
				if (spireNum == 1){
					cancelTooltip();
					tooltip("The Spire", null, 'update');
				}
			}
			else handleExitSpireBtn();
		}
		else handleExitSpireBtn();
		return;
	}
	cancelTooltip();
}

function handleExitSpireBtn(){
	var display = (game.global.spireActive && !game.global.mapsActive && !game.global.preMapsActive) ? "block" : "none";
	document.getElementById('exitSpireBtnContainer').style.display = display;
}

function getSpireStats(cellNum, name, what){
	var base = (what == "attack") ? game.global.getEnemyAttack(100, null, true) : (game.global.getEnemyHealth(100, null, true) * 2);
	var mod = (what == "attack") ? 1.17 : 1.14;
	var spireNum = checkIfSpireWorld(true);
	if (spireNum > 1){
		var modRaiser = 0;
		modRaiser += ((spireNum - 1) / 100);
		if (what == "attack") modRaiser *= 8;
		if (what == "health") modRaiser *= 2;
		mod += modRaiser;
	}
	base *= Math.pow(mod, cellNum);
	base *= game.badGuys[name][what];
	return base;
}

function deadInSpire(){
	game.global.spireDeaths++;
	if (game.global.spireDeaths >= 10) {
		message("你还没准备好。也许你下次能够完成它。", "Story");
		endSpire();
		return;
	}
	var s = (game.global.spireDeaths > 1) ? "s" : "";
	var has = (game.global.spireDeaths > 1) ? "have" : "has";
	message(game.global.spireDeaths + " 组脆皮在尖塔中已被击败。", "Notices");
}

function endSpire(cancelEarly){
	game.global.spireActive = false;
	var cell = getCurrentWorldCell();
	if (!cell) return;
	cell.health = cell.origHealth;
	cell.attack = cell.origAttack;
	cell.maxHealth = cell.origHealth;
	document.getElementById('grid').className = "";
	if (game.global.lastClearedCell == 98) {
		var elem = document.getElementById("badGuyName");
		if (cell.name == "Omnipotrimp") elem.innerHTML = elem.innerHTML.replace("Echo of Druopitee", "Omnipotrimp");
		else elem.innerHTML = elem.innerHTML.replace("Druopitee", "Improbability");
	}
	clearSpireMetals();
	setNonMapBox();
	handleExitSpireBtn();
}

function getCurrentWorldCell(){
	return game.global.gridArray[game.global.lastClearedCell + 1];
}

function getCurrentMapCell(){
	return (game.global.mapGridArray.length > game.global.lastClearedMapCell) ? game.global.mapGridArray[game.global.lastClearedMapCell + 1] : -1;
}

function clearSpireMetals(){
	var spireMetal = document.getElementsByClassName('spireMetals');
	for (var x = 0; x < spireMetal.length; x++){
		spireMetal[x].style.visibility = 'hidden';
	}
}

//Big storyline spoilers in the function below, be careful if you care

function getSpireStory(spireNum, row){
	var spires = {
		spire2: {
			r2: "这座尖塔的一切似乎都没有上一座整洁，他从没想过你能通过第一座尖塔。你在一些虚空物质中发现了一张小纸条。<br/><span class='spirePoem'>健康变异是糟糕的...<br/>它减缓了生物的狂乱</span>嗯，这听起来不是一件坏事。",
			r4: "你逐渐接近了尖塔的中部，没有太多的敌人，此时尖塔似乎有了生命。德鲁普提已死，你不知道是什么将它激活，所以你低下头，看看脚下。<br/><br/>有一些小容器漂浮在地面上，距离地面只有很小的距离，你要去检查一下它们。" ,
			r6: "空气中突然充满了嗡嗡的震动声，从墙壁中传来了低沉有力的声音。<span class='spirePoem'>每一个尖塔中都有一部分我<br/>我将确保腐化永远传播<br/>即使我对你的决心敬佩甚颇<br/>你的小小计划必会将自己打破<br/></span>似乎所有尖塔都被德鲁普提赋予了知觉。你很高兴讲述者不再念诗了。嘿，等等……<br/><br/>",
			r7: "<span class='spirePoem'>我看到你找到我健康变异的笔记<br/>我读你将其作为你的计划所依<br/>拯救这个世界确实令人着迷<br/>但是你的旅途必然结束于失意</span>好吧，你现在确实想接触一些有关健康变异的东西。",
			r8: "这里什么都没有，只有一堆盒子，所以你决定翻翻它们。 ",
			r9: "<span class='spirePoem'>你觉得自己可以，但其实并不<br/>一个健康世界不会加速你的脚步<br/>健康的力量会令你厌恶<br/>未来的更多困难是你自己所筑</span>这个声音似乎试图告诉你，健康变异会使你的敌人拥有更强的力量。尽管如此，释放它仍然是一件正确的事情。",
			r10: "在德鲁普提的回响倒下时，你注意到一个装着棕色液体的大罐子，你看到许多管道从罐子连接到到塔顶。罐子上的标签表明这个是健康突变，并且你不应该触碰它。但是你知道你需要什么，与德鲁普提所要是完全不同的，所以你打开了所有你能找到的喷嘴。一缕细细的棕色薄雾从塔尖开始喷出来，你可以看出世界终于开始复原了。现在你只希望健康突变令敌人强大只是一个谎言……"
		},
		spire3: {
			r2: "每座尖塔似乎都有一个图案，每个图案都比上一座的要废弃得多。墙壁很冷，内部的震动非常微弱。没有人在看你，所以你在周围挖掘，想找到一些材料。 ",
			r4: "墙壁内的振动随着你走向顶部的每一步而变得更加强烈。空气明显变暖了，你认为墙壁能很快开始和你说话。 ",
			r6: "<span class='spirePoem'>什么<br/>谁<br/>如何...</span>这听起来不是很连贯。似乎你在上一座尖塔摧毁的回响已经产生了某种影响。",
			r7: "<span class='spirePoem'>我看到你在试图将星球治好<br/>让我在不适感中倍受煎熬<br/>你的随心所欲与偷窃行为已达到最高<br/>现在跪下臣服或是被我打爆</span>至少他已经恢复了足够的意识继续面对威胁。你知道现在不是退让的时候。",
			r8: "<span class='spirePoem'>明显你想要使腐化减慢<br/>所以我指出你可能还未知的事件<br/>我的尖塔没有终止，它数量无限<br/>你必将失败，这早已预言</span>他的尖塔可能是无限的，但他的意识是不可能的。你决定一旦你打败了德鲁普提所有的意识，你再考虑剩下的塔尖。",
			r9: "<span class='spirePoem'>你还在攀爬，你的力量不会变弱？<br/>你已决定将此星球拯救于灾祸？<br/>停下来想想，我们可以有更宏伟的杰作<br/>或者像一个奴隶，继续旅行于时间枷锁</span>奴隶?! 你的脆皮们都明白只要他们愿意，随时可以离开。他只是想惹你生气！！ ",
			r10: "很好，现在已经打倒了一个德鲁普提和两个德鲁普提的回响。他说他拥有无数的尖塔，也有无数个版本的他，但是在刚才你可以看出他的回响最后失去了力量。你可能只需要再清理一座尖塔就能够使所有尖塔中的他都失去意识！你的目光看向前方的100区域，打开更多喷嘴，向世界各地散布更多的健康，你拿走了氦，在尖塔的地上吐了一口唾沫，然后继续前进。 "
		},
		spire4: {
			r2: "正如你在踏进尖塔之前就猜到的那样，这个塔尖的状况比之前的更差。空气更冷，墙壁更安静，有一种空虚的感觉。或许你可以拿走一些东西!",
			r4: "你想知道德鲁普提的回响是否还能说话。你知道他会在尖塔的顶端等待着你，就像其他无数的尖塔一样，但是可能这次之后他就会永远的离开你了。",
			r6: "尖塔又在警告你了。可能德鲁普提一会就会再来一次最后的现身。",
			r7: "<span class='spirePoem'>请转身离开，这里没什么可看<br/>为何我的死亡就是你的期盼?<br/>我再次求你，请听我的宏愿<br/>永久的时间中，你我统治各半</span>不了，谢谢, 德鲁普提。 看到他这么害怕可真高兴! ",
			r8: "<span class='spirePoem'>接下来是我平常未说之言<br/>因为你似乎不会折返<br/>你杀死的每一个回响都使我的思想腐烂<br/>今天之后我可能就不会交谈</span>是的，这已经很明显了。如果他认为这样的承认除了激励人之外，还能有什么意义的话，那么他的头脑肯定正在迅速腐坏。 ",
			r9: "<span class='spirePoem'>为何你不在意你使事情更加困难?<br/>为了修复这个星球，你使敌人更加强悍?<br/>我带你来这时, 我以为你聪明能干<br/>但是现在似乎已经没有余地可谈</span>不，是无法谈的，你就在那里了。 ",
			r10: "当第三个德鲁普提的回响倒下时，尖塔突然变冷了两倍。德鲁普提曾经和你说在无限的尖塔中有无限个版本的他，但是其他的他应该不会再有意识了。你转动另一组旋钮，向世界释放更多的健康突变，你觉得再没有什么事能比寻找并释放更多健康突变更好的了。不能再次听到德鲁普提的话，你并不感到惊讶，至少不会在这个时间线。 "
		},
		spire5: {
			r2: "While you walk through the Spire, you whistle a tune. You haven't yet tired, your motivations zoom. As Fluffy checks for loot in this dark, dusty room, you suddenly see fire and hear a huge boom. ",
			r6: "Against your better judgment, you continue to climb. Heat fills this dungeon, and doubt fills your mind. You feel a great evil that's long been confined, but with reluctance you move on for the good of Trimpkind. ",			
			r4: "The fires still grow, but they leave a clear path. Just one direction shown, the thought makes you laugh. Unwisely Druopitee tried to rig this booby trap, but the fire shows the way to go so you thank him for the map. ",			
			r7: "You're close to the top of this large, awful tower. Your fearful thoughts drop, your will is empowered. Luckily you have Fluffy to support you in this hour, you two will never stop until these echoes are devoured.",
			r8: "The presence here is unique from what you felt before. You know it can't speak but it's not done for. An intrusive thought knocks on your mind's back door:<br/><span class='spirePoem'>You are weak. I'll be on the top floor.</span> ",
			r9: "Another thought enters your mind, this time louder than before:<br/><span class='spirePoem'>Your death warrant's signed, soon you'll be no more.<br/>I gave you everything you have, it was no easy chore.<br/>Your Trimps are MINE, prepare for war!</span><br/>Even in death this guy's a dick. ",
			r10: "As yet another Echo of Druopitee fades into nothingness, you feel something urging you to check underneath a loose stone in the corner of the room. After lifting it up, you find a small notebook with the words \"Global Domination\" written on it. The text all seems to be in Druopitee's handwriting, which you instantly recognize from the books you've found around the planet. The first few pages all discuss Druopitee's success with various creatures here, followed by multiple pages documenting failures at attempts to control the Trimps. The very last page with any writing in it indicates that Druopitee intended to create leaders they'd be more likely to follow, by creating clones of himself mixed with varying amounts of Trimp DNA. Is this where Fluffy came from?! "
		}
	}
	var spire = spires['spire' + spireNum];
	if (typeof spire == 'undefined') return '';
	var rowText = spire['r' + row];
	if (typeof rowText == 'undefined') return '';
	return rowText;
}

function giveSpireReward(level){
	var spireWorld = checkIfSpireWorld(true);
	if (level != 0 && level % 10 == 0) game.global.spireRows++;
	if (spireWorld == 1){
		rewardSpire1(level);
		return;
	}
	//Spire 2+ only here
	var text = "";
	switch(level){
		case(20):
			var nuReward = 200 * Math.pow(2, spireWorld - 2);
			game.global.nullifium += nuReward;
			message(getSpireStory(spireWorld, 2) + "你找到了 " + nuReward + " 虚空物质!", "Story");
			break;
		case(40):
			if (!game.global.runningChallengeSquared){
				amt = giveHeliumReward(15);
				message(getSpireStory(spireWorld, 4) + "你装走了 " + prettify(amt) + " 氦!", "Story");
			}
			break;
		case(50):
			if (spireWorld == 2){
				if (game.portal.Capable.level > 0){
					message("在你视野的角落，你发现了一个生物，似乎不属于德鲁普提。你走近一看，发现它是蓬松！你转过身，想看到你的另一只蓬松，但是这里只有这一只。你回过头，它正在挥手致意，你感觉有点头晕，但是你在这个星球上已经见到了更奇怪的事情。你决定和这个新的老朋友继续向尖塔高处前进。", "Story");					
				}
				else {
					message("在你视野的角落，你发现了一个生物，似乎不属于德鲁普提。你走近一看，发现它是一只脆皮！只有这一只脆皮是紫色的，而不是蓝色的，显然这是德鲁普提实验的产物，你让它明白已经没有什么好害怕的了，你会保证它的安全。你将它命名为蓬松，并且发誓不会让它受到任何伤害。 <b>获得 1 脆皮!</b>", "Story");
					//I know that adding 1 trimp doesn't do anything at all, but I'm no liar (on purpose)
					game.resources.trimps.owned++;
				}
				Fluffy.handleBox();
			}
			else{
				//Spire III+
				var fluffReward = Fluffy.rewardExp(2);
				if (fluffReward)
					message("蓬松突然四肢着地，开始仔细观察墙壁。过了一会儿，他选定了一个地方，在上面砸了一个洞，然后从洞里拿出了一本小书。他甚至没有把书打开，就把书吃掉了，并且获得 " + prettify(fluffReward) + " 经验!多么华丽的生物。", "Story");
			}
			break;
		case(60):
			var nuReward = 300 * Math.pow(2, spireWorld - 2);
			game.global.nullifium += nuReward;
			message(getSpireStory(spireWorld, 6) + "你找到了 " + nuReward + " 虚空物质!</span>", "Story");
			break;
		case(70):			
			var heirloomLevel = 400;
			if (spireWorld > 3) heirloomLevel = ((spireWorld + 1) * 100);
			message(getSpireStory(spireWorld, 7) + "你找到了区域" + heirloomLevel + "级别的传家宝!", "Story");
			createHeirloom(heirloomLevel);
			break;
		case(80):
			var tokReward = 5 * (spireWorld - 1);
			game.empowerments.Poison.tokens += tokReward;
			game.empowerments.Wind.tokens += tokReward;
			game.empowerments.Ice.tokens += tokReward;
			game.stats.bestTokens.value += (tokReward * 3);
			message(getSpireStory(spireWorld, 8) + "你找到了" + tokReward + "个各种类型的自然符记!", "Story");
			if (game.global.buyTab == "nature")
				updateNatureInfoSpans();
			break;
		case(90):
			if (!game.global.runningChallengeSquared){
				amt = giveHeliumReward(30);
				message(getSpireStory(spireWorld, 9) + "你找到另一个容器，里面有 " + prettify(amt) + " 氦!", "Story");
			}
			break;
		case(100):
			if (game.global.spireDeaths == 0) giveSingleAchieve("Invincible");
			if (spireWorld >= 5 && game.global.spireDeaths == 0) giveSingleAchieve("Invisible");
			var text = getSpireStory(spireWorld, 10);
			if (!game.global.runningChallengeSquared){
				var amt = giveHeliumReward(100);
				text += " 你找到了大量库存的 <b>" + prettify(amt) + " 氦</b> and <b>" + prettify(playerSpire.rewardSpirestones(spireWorld)) + " 尖顶石头</b>!";
			}
			else text += " You find a large stockpile of <b>" + prettify(playerSpire.rewardSpirestones(spireWorld)) + " Spirestones</b>!";
			if (game.global.spiresCompleted < spireWorld){
				game.global.spiresCompleted = spireWorld;
				game.global.b += 20;
				text += " 你第一次在任何时间轴上消灭这个回响，你已经永久地增加了5%的液化加成，增加了你的黑暗本质增益乘以4x，并获得了 <b>20个骨头!</b>"
				switch (spireWorld){
					case 2: 
						text += " 你也解锁了 <b>能力</b> 能力!";
						game.portal.Capable.locked = false;
						break;
					case 3:
						text += " 你也解锁了 <b>狡猾</b> 能力!"
						game.portal.Cunning.locked = false;
						break;
					case 4:
						text += " 你也解锁了 <b>好奇</b> 能力!"
						game.portal.Curious.locked = false;
						break;
					case 5:
						text += " You have also unlocked the <b>Classy</b> perk!<b>";
						game.portal.Classy.locked = false;
				}
			}
			if (spireWorld == 2 && game.global.canRespecPerks && !game.global.bonePortalThisRun && countHeliumSpent() <= 1e9) giveSingleAchieve("Nerfeder");
			if (game.global.challengeActive == "Coordinate") giveSingleAchieve("Hypercoordinated");
			game.global.lastSpireCleared = spireWorld;
			message(text, "Story");
			game.global.spireActive = false;
			setNonMapBox();
			handleExitSpireBtn();
			var spireAchieve = "spire" + spireWorld + "Timed";
			if (typeof game.achievements[spireAchieve] !== 'undefined'){
				checkAchieve(spireAchieve);
			}
			break;
		default:
			if (game.global.runningChallengeSquared) return;
			amt = 0.5;
			amt *= Math.pow(1.01, level);
			amt = giveHeliumReward(amt);
			message("在你离开时，你找到了 " + prettify(amt) + " 氦!", "Loot", "oil", "helium", "helium");
			return;				
	}
}

function rewardSpire1(level){
	var amt = 0;
	var text = "";
	switch(level){
		case 10:
			text = "一阵低沉的声音响起，这声音似乎来源于墙壁本身。<br/><br/><span class='spirePoem'>像是经过了永远,如今相遇于同一轨迹,<br/>我并不奇怪你已经把我忘记。<br/>我相信我就是你所寻觅,<br/>我就是过去的德鲁普提。</span>";
			if (game.portal.Toughness_II.locked) text += "<br/>你很高兴你正确地记得他的名字！当记忆开始恢复的时候让你感觉自己变得更加坚韧，并且<b>解锁 韧性II</b>!";
			message(text, "Story");
			game.portal.Toughness_II.locked = false;
			break;
		case 20:
			message("<span class='spirePoem'>在母星上我们共同研究时间,<br/>我们发现曲速可以影响时间线。<br/>我将成果安置在我的飞船之间,<br/>来测试新范式能做出什么改变。</span><br/>噢，是的。那里就是你认识他的地方！等等，他不是还欠你些钱吗？你从研究桌上取走了<b>40虚空物质</b>，你感觉很公平。", "Story");
			game.global.nullifium += 40;
			break;
		case 30:
			text += "<span class='spirePoem'>那测试使其他维度出现,<br/>某维度中，我发现这星球并飞来这边。<br/>如果不清理，大量敌人在此露面,<br/>在这里发现巨大，但威胁仍然未变。</span><br/>啊，所以你和你的朋友和家人处在一个不同的维度，真是令人安心。";
			if (game.portal.Power_II.locked) text += " 你想要某天回家的愿望让你充满了力量,并且你<b>解锁了 力量II</b>!";
			message(text, "Story");
			game.portal.Power_II.locked = false;
			break;
		case 40:

			text = "<span class='spirePoem'>为了安全，我建造许多尖塔。<br/>爬到顶峰，数小时向外观察。<br/>多年研究，意识被吞噬变化,<br/>突然一天，找到变强的方法。</span><br/>该死的德鲁普提。归根结底这一切都是他的错，不是吗? ";
			if (!game.global.runningChallengeSquared){
				amt = giveHeliumReward(15);
				text += "你帮助自己充满容器，使用 " + prettify(amt) + " 氦, 当你听到更多的消息时，他会比你更感激你。";
				}
			else
				text += "你想要尝试去偷些什么东西，甚至是玩游戏，但什么都找不到。好吧。";
			message(text, "Story");
			break;
		case 50:
			text = "<span class='spirePoem'>经过多年观察的帮助，<br/>我找到了我的救赎。<br/>空气传播诱导变异的化学产物,<br/>腐化便是我新的造物。</span><br/>是的,完全是他的错。";
			if (game.portal.Motivation_II.locked) text += "你想要阻止他的欲望是如此强烈，以至于你解锁了<b>动机 II</b>!"
			message(text, "Story");
			game.portal.Motivation_II.locked = false;
			break;
		case 60:
			game.global.nullifium += 60;
			message("<span class='spirePoem'>我将腐化从尖塔抽出,<br/>看着它像野火蔓延飞速。<br/>它们臣服于我，无数意识连接成束,<br/>我几乎已拥有所要全部。</span><br/>你觉得任何想要把叫做“腐化”的东西注入大气层的人都能叫做超级恶棍。你拿走一个小瓶，其中装着<b>60虚空物质</b>!你觉得你不会后悔。", "Story");
			break;
		case 70:
			message("<span class='spirePoem'>但是脆皮，像岩石般顽固,<br/>从不改变，无法独自收服。<br/>驾驶飞船，回到母星船库,<br/>将你带至，脆皮生活之处。</span><br/>你不记得这些，但你很确定你对这件事很不满。他绑架了你，所以你拿走刚发现的研究用<b>传家宝</b>也是合理的。 ", "Story");
			createHeirloom(201);
			break;
		case 80:
			text = "<span class='spirePoem'>你不满我的计划，我只好强迫,<br/>我抹去你的记忆，规划你的路程经过。<br/>思索出有关装备与帮助的举措,<br/>我写下一切计划，向你诉说。</span><br/>噢，他写下了这些？现在你再想想，你能看到很多方法来改进这个计划。";
			text += (game.portal.Carpentry_II.locked) ? ", 并 <b>解锁木工 II</b>!" : "。";
			message(text, "Story");
			game.portal.Carpentry_II.locked = false;
			break;
		case 90:
			text = "<span class='spirePoem'>当我观察等待，脆皮不断飞跃,<br/>它们非常忠诚，这无法否决。<br/>你不知我的计划，但仍然参与入列,<br/>现在选择臣服，或是选择毁灭。</span><br/>你不太喜欢臣服，你也不会对他臣服。";
			if (!game.global.runningChallengeSquared){
				amt = giveHeliumReward(30);
				text += "你发现有" + prettify(amt) + "氦散落在周围，你会毫不犹豫地使用它们。";
			}
			message(text, "Story");
			break;
		case 100:
			if (game.global.spireDeaths == 0) giveSingleAchieve("Invincible");

			text = "德鲁普提瘫倒在地板上。你希望他能恢复理智。不管怎样，你关闭了腐化装置，并希望这星球能够不久后自我恢复，然后你在他的物品中翻找，找到了一把钥匙，这一定是飞船的钥匙！";
			if (!game.global.runningChallengeSquared){
				amt = giveHeliumReward(100);
				text += "你同时发现了<b>" + prettify(amt) + "氦</b>。";
			}
			if (game.portal.Looting_II.locked) text += "你在尖塔中寻找东西的技巧帮助你<b>解锁掠夺 II</b>.";
			if (game.global.spiresCompleted < 1){
				text += "<br/><br/>你注意到在房间后面有一个旧衣柜，在那里，Druopitee保存着他在很多时间里收集的Skeletimp骨头。 你打开它然后找到了 <b>20个完美的Skeletimp骨头!</b>. 你可以看出，这些骨骼不会下次出现。塔尖的力量给了你一个永久的4x奖励你收集的所有黑暗的本质，而你的传送门也改变了自己现在的区域相当于你的最高区域的5%到达的区域。你不太明白这意味着什么，但是你对这个发现还是很兴奋!"
				game.global.b += 20;
				updateSkeleBtn();
				game.global.spiresCompleted = 1;
				text += "<br/><br/><b>你还在Druopitee后面发现了少量的尖顶石头。 你把它们交给你的科学家，他们开始建造你自己的尖顶！"
				playerSpire.init();
				playerSpire.rewardSpirestones(1);
			}
			else{
				text += "<br/><br/><b>You've also found " + prettify(playerSpire.rewardSpirestones(1)) + " Spirestones!</b>";
			}
			text += "<br/><br/>你帮助脆皮建立了能够流传于世的人口和经济，并且已经击败了使这个世界混乱的人。你现在可以离开，因为你的存在，这个宇宙永远都会变得更好。只要脆皮的文明存在，它们就会为你竖起一座雕像。但是你知道世界上仍然存在其他的尖塔，将腐化释放到这个星球上。如果你留下来并且帮助解决这些问题，或许你的雕像能更大一些？";
			message(text, "Story");
			game.portal.Looting_II.locked = false;
			checkAchieve("spireTimed");
			if (game.global.canRespecPerks && !game.global.bonePortalThisRun && countHeliumSpent() <= 100e6) giveSingleAchieve("Nerfed");
			game.global.spireActive = false;
			game.global.lastSpireCleared = 1;
			setNonMapBox();
			handleExitSpireBtn();
			break;
		default:
			if (game.global.runningChallengeSquared) return;
			amt = 0.5;
			amt *= Math.pow(1.01, level);
			amt = giveHeliumReward(amt);
			message("你找到了 " + prettify(amt) + " helium!", "Loot", "oil", "helium", "helium");
	}
}

var goldenUpgradesShown = false;
function displayGoldenUpgrades(redraw) {
	if (goldenUpgradesShown && !redraw) return false;
	if (getAvailableGoldenUpgrades() <= 0) return false;
	if (!goldenUpgradesShown) game.global.lastUnlock = new Date().getTime();
	var html = "";
	for (var item in game.goldenUpgrades){
		var upgrade = game.goldenUpgrades[item];
		if (item == "Void" && game.global.totalPortals < 5) continue;
		var color = "thingColorGoldenUpgrade";
		if (
			(item == "Void" && (parseFloat((game.goldenUpgrades.Void.currentBonus + game.goldenUpgrades.Void.nextAmt()).toFixed(2)) > 0.72)) ||
			(item == "Helium" && game.global.runningChallengeSquared)
		){
			color = "thingColorCanNotAfford";
		}
        var cnit="";
        if(item=="Void"){
            cnit="虚空"
        }else if(item=="Gigastation"){
            cnit="千兆站"
        }else{
            cnit=item;
        }
		html += '<div onmouseover="tooltip(\'' + item + '\', \'goldenUpgrades\', event)" onmouseout="tooltip(\'hide\')" class="' + color + ' thing goldenUpgradeThing noselect pointer upgradeThing" id="' + item + 'Golden" onclick="buyGoldenUpgrade(\'' + item + '\'); tooltip(\'hide\')"><span class="thingName">金色 ' + cnit + ' ' + romanNumeral(game.global.goldenUpgrades + 1) + '</span><br/><span class="thingOwned" id="golden' + item + 'Owned">' + upgrade.purchasedAt.length + '</span></div>';
	}
	var elem = document.getElementById('upgradesHere');
	elem.innerHTML =  html + elem.innerHTML;
	goldenUpgradesShown = true;
	return true;
}

function removeGoldenUpgrades() {
	if (!goldenUpgradesShown) return false;
	var elems = document.getElementsByClassName('goldenUpgradeThing');
	var parent = document.getElementById('upgradesHere');
	for (var x = elems.length - 1; x >= 0; x--){
		parent.removeChild(elems[x]);
	}
	goldenUpgradesShown = false;
	return true;
}

function getAvailableGoldenUpgrades(){
	var tier = getAchievementStrengthLevel();
	if (tier == 0) return 0;
	return Math.floor(game.global.world / getGoldenFrequency(tier)) - game.global.goldenUpgrades + countExtraAchievementGoldens();
}

function getGoldenFrequency(fluffTier){
	return 50 - ((fluffTier - 1) * 5);
}

function buyGoldenUpgrade(what) {
	if (what == "Helium" && game.global.runningChallengeSquared) return;
	if (game.options.menu.lockOnUnlock.enabled == 1 && (new Date().getTime() - 1000 <= game.global.lastUnlock)) return;
	var totalAvailable = getAvailableGoldenUpgrades();
	if (totalAvailable <= 0) return false;
	if (what == "Void" && (parseFloat((game.goldenUpgrades.Void.currentBonus + game.goldenUpgrades.Void.nextAmt()).toFixed(2)) > 0.72)) return;
	var upgrade = game.goldenUpgrades[what];
	upgrade.currentBonus += upgrade.nextAmt();
	upgrade.purchasedAt.push(game.global.goldenUpgrades);
	game.global.goldenUpgrades++;
	removeGoldenUpgrades();
	game.stats.goldenUpgrades.value++;
	if (game.stats.goldenUpgrades.valueTotal + game.stats.goldenUpgrades.value >= 300 && game.global.autoGolden == -1){
		unlockAutoGolden();
	}
	if (totalAvailable > 1) displayGoldenUpgrades();
	return true;
}

function unlockAutoGolden(){
	tooltip('AutoGolden Unlocked', null, 'update');
	game.global.autoGolden = 0;
	toggleAutoGolden(true);
}

function giveHeliumReward(mod){ //used for spire only
	var amt = rewardResource("helium", mod, 99);
	return amt;
}

function checkHousing(getHighest){
	//returns the lowest number of housing buildings
	var count = -1;
	for (var item in game.buildings){
		var building = game.buildings[item];
		if (building.increase && building.increase.what == "trimps.max") {
			if (count == -1) count = building.owned;
			else if (getHighest){
				if (count < building.owned) count = building.owned;
			}
			else {
				if (count > building.owned) count = building.owned;
			}
		}
	}
	return count;
}

function assignExtraWorkers(){
	var workspaces = game.workspaces;
	var freeTrimps = (game.resources.trimps.owned - game.resources.trimps.employed);
	//Won't leave you with less than 15% of your max as breeders
	if (freeTrimps - workspaces < Math.floor(game.resources.trimps.realMax() * 0.15)) return;
	if (freeTrimps < workspaces) workspaces = freeTrimps;
	if (workspaces <= 0) return;
	var jobs = ["Farmer", "Lumberjack", "Miner"];
	var split = Math.floor(workspaces / 3);
	if (game.resources.food.owned < (split * 30)) split = Math.floor(game.resources.food.owned / 30);
	for (var x = 0; x < jobs.length; x++){
		game.jobs[jobs[x]].owned += split;
	}
	game.resources.food.owned -= (split * 30);
}

function distributeToChallenges(amt) {
	var challenge = game.global.challengeActive;
	if (challenge == "Mapocalypse") challenge = "Electricity";
	if (!challenge || typeof game.challenges[challenge].heliumThrough === 'undefined') return;
	var challengeObj = game.challenges[challenge];
	if (game.global.world <= challengeObj.heliumThrough) challengeObj.heldHelium += amt;
}

var dailyModifiers = {
	minDamage: {
            description: function (str) {
                return "脆皮的最小伤害降低 " + prettify(this.getMult(str) * 100) + "% (附加的)。";
            },
            getMult: function (str) {
                return 0.1 + ((str - 1) * 0.01);
            },
            getWeight: function (str) {
				return (1 / ((1.2 + (1 - this.getMult(str))) / 2 / 1.1)) - 1;
            },
            minMaxStep: [41, 90, 1],
            chance: 1
        },
        maxDamage: {
            description: function (str) {
                return "脆皮最大伤害增加 " + prettify(this.getMult(str) * 100) + "% (附加的)。";
            },
            getMult: function (str) {
                return str;
            },
            getWeight: function (str) {
                return (1 - ((1.2 + (1 + str)) / 2 / 1.1));
            },
            minMaxStep: [1, 5, 0.25],
            chance: 1
        },
		plague: { //Half of electricity
			description: function (str) {
                return "敌人的每次攻击叠加一个负面效果，每层效果在每回合对脆皮造成 " + prettify(this.getMult(str, 1) * 100) + "%总血量的伤害，直到脆皮死亡后重置。"
            },
            getMult: function (str, stacks) {
                return 0.01 * str * stacks;
			},
			getWeight: function (str) {
				var count = Math.ceil((1 + Math.sqrt(1 + 800/str))/2);
				return (6 - (0.1 * count) + (0.8 / count) + (str / 8)) / 1.75;
			},
			minMaxStep: [1, 10, 1],
			chance: 0.3,
			icon: "*bug2",
			incompatible: ["rampage", "weakness"],
			stackDesc: function (str, stacks) {
				return "你的脆皮每次攻击后都会造成 " + prettify(this.getMult(str, stacks) * 100) + "% 伤害。";
			}
        },
		weakness: {
			description: function (str) {
				return "敌人的每次攻击叠加一层负面效果，每层效果减少脆皮" + prettify(100 - this.getMult(str, 1) * 100) + "%的攻击。最高叠加9次，直到脆皮死亡后重置。";
			},
			getMult: function (str, stacks) {
				return 1 - (0.01 * str * stacks);
			},
			getWeight: function (str) {
				return str / 4;
			},
			minMaxStep: [1, 10, 1],
			chance: 0.6,
			icon: "fire",
			incompatible: ["bogged", "plague"],
			stackDesc: function (str, stacks) {
				return "你的脆皮攻击减少 " + prettify(100 - this.getMult(str, stacks) * 100) + "% 。";
			}
		},
		large: {
            description: function (str) {
                return "所有房屋的脆皮容量减少 " + prettify(100 - this.getMult(str) * 100) + "%。";
            },
            getMult: function(str) {
                return 1 - (0.01 * str);
            },
            getWeight: function (str) {
                return (1 / this.getMult(str) - 1) * 2;
            },
            start: function (str) {
                game.resources.trimps.maxMod = this.getMult(str);
            },
            abandon: function (str) {
                game.resources.trimps.maxMod = 1;
            },
            minMaxStep: [10, 60, 1],
            chance: 1
        },
		dedication: {
			description: function (str) {
				return "通过收集获得的资源增加 " + prettify((this.getMult(str) * 100) - 100) + "%";
			},
			getMult: function(str) {
				return 1 + (0.1 * str);
			},
			getWeight: function (str) {
				return 0.075 * str * -1;
			},
			incompatible: ["famine"],
			minMaxStep: [5, 40, 1],
			chance: 0.75
		},
		famine: {
            description: function (str) {
                return "所有来源的金属，食物，木材和宝石收益减少" + prettify(100 - (this.getMult(str) * 100)) + "%。";
            },
            getMult: function (str) {
                return 1 - (0.01 * str);
            },
            getWeight: function (str) {
                return (1 / this.getMult(str) - 1) / 2;
			},
			incompatible: ["dedication"],
            minMaxStep: [40, 80, 1],
            chance: 2
        },
		badStrength: {
			description: function (str) {
				return "敌人攻击增加 " + prettify((this.getMult(str) * 100) - 100) + "%。";
			},
			getMult: function (str) {
				return 1 + (0.2 * str);
			},
			getWeight: function (str){
				return 0.1 * str;
			},
			minMaxStep: [5, 15, 1],
			chance: 1
		},
		badHealth: {
			description: function (str) {
				return "敌人血量增加 " + prettify((this.getMult(str) * 100) - 100) + "%.";
			},
			getMult: function (str) {
				return 1 + (0.2 * str);
			},
			getWeight: function (str){
				return 0.2 * str;
			},
			minMaxStep: [3, 15, 1],
			chance: 1
		},
		badMapStrength: {
            description: function (str) {
                return "地图上的敌人攻击增加 " + prettify((this.getMult(str) * 100) - 100) + "%.";
            },
            getMult: function (str) {
                return 1 + (0.3 * str);
            },
            getWeight: function (str){
                return (0.1 * (1 + 1/3)) * str;
            },
            minMaxStep: [3, 15, 1],
            chance: 1
        },
        badMapHealth: {
            description: function (str) {
                return "地图上的敌人血量增加 " + prettify((this.getMult(str) * 100) - 100) + "%.";
            },
            getMult: function (str) {
                return 1 + (0.3 * str);
            },
            getWeight: function (str){
                return (0.3 * str) * (5 / 8);
            },
            minMaxStep: [3, 10, 1],
            chance: 1
        },
		crits: {
            description: function (str) {
                return "敌人有25%的机率产生重击，为普通伤害的 " + prettify(this.getMult(str) * 100) + "%。";
            },
            getMult: function (str) {
                return 1 + (0.5 * str);
            },
            getWeight: function (str) {
                return 0.15 * this.getMult(str);
            },
            minMaxStep: [1, 24, 1],
            chance: 0.75
		},
		trimpCritChanceUp: {
			description: function (str) {
				return "脆皮的暴击概率增加" + prettify(this.getMult(str) * 100) + "%。";
			},
			getMult: function(str) {
				return str / 10;
			},
			getWeight: function (str) {
				return .25 * str * -1;
			},
			minMaxStep: [5, 10, 1],
			incompatible: ["trimpCritChanceDown"],
			chance: 1.25
		},
		trimpCritChanceDown: {
            description: function (str) {
                return "脆皮的暴击概率减少" + prettify(this.getMult(str) * 100) + "%。";
            },
            getMult: function (str) {
                return str / 10;
            },
            getWeight: function (str) {
				return (str  / 4.5);
            },
			minMaxStep: [2, 7, 1],
			incompatible: ["trimpCritChanceUp"],
            chance: 0.75
		},
        bogged: {
            description: function (str) {
                return "你的脆皮在每次攻击后减少最大生命值的 " + prettify(this.getMult(str) * 100) + "% 血量.";
            },
            getMult: function (str) {
                return 0.01 * str;
            },
            getWeight: function (str) {
                var count = Math.ceil(1 / this.getMult(str));
                return (6 - ((0.2 * (count > 60 ? 60 : count) / 2)) + ((((500 * count + 400) / count) / 500)-1)) / 1.5;
			},
			incompatible: ["rampage", "weakness"],
            minMaxStep: [1, 5, 1],
            chance: 0.3
        },
		dysfunctional: {
            description: function (str) {
                return "减少 " + prettify(100 - (this.getMult(str) * 100)) + "% 的脆皮繁殖速度";
            },
            getMult: function (str) {
                return 1 - (str * 0.05);
            },
            getWeight: function (str){
                return ((1 / this.getMult(str))-1)/6;
            },
            minMaxStep: [10, 18, 1],
            chance: 1
        },
		oddTrimpNerf: {
            description: function (str) {
                return "脆皮在奇数区域减少 " + prettify(100 - (this.getMult(str) * 100)) + "% 攻击";
            },
            getMult: function (str) {
                return 1 - (str * 0.02);
            },
            getWeight: function (str){
                return (1 / this.getMult(str) - 1) / 1.5;
            },
            minMaxStep: [15, 40, 1],
            chance: 1
        },
        evenTrimpBuff: {
            description: function (str) {
                return "脆皮在偶数区域增加 " + prettify((this.getMult(str) * 100) - 100) + "% 攻击";
            },
            getMult: function (str) {
                return 1 + (str * 0.2);
            },
            getWeight: function (str){
                return (this.getMult(str) - 1) * -1;
            },
            minMaxStep: [1, 10, 1],
            chance: 1
        },
		karma: {
			description: function (str) {
				return '每杀死一个敌人获得一层增益效果 , 每层效果增加所有非氦战利品掉落 ' + prettify((this.getMult(str, 1) * 100) - 100) + '%。最多叠加' + this.getMaxStacks(str) + '层, 打通区域后重置。';
			},
			stackDesc: function (str, stacks){
				return "你的脆皮额外找到 " + prettify((this.getMult(str, stacks) * 100) - 100) + "%的战利品!";
			},
			getMaxStacks: function (str) {
				return Math.floor((str % 9) * 25) + 300;
			},
			getMult: function (str, stacks) {
				var realStrength = Math.ceil(str / 9);
				return 1 + (0.0015 * realStrength * stacks);
			},
			getWeight: function (str){
				return (this.getMult(str, this.getMaxStacks(str)) - 1) / -2;
			},
			icon: "*arrow-up",
			minMaxStep: [1, 45, 1],
			chance: 1
		},
		toxic: {
			description: function (str) {
				return "每杀死一个敌人叠一层减益效果,减少" + prettify(100 - (this.getMult(str, 1) * 100)) + '% (叠乘)的繁殖速度。最高叠' + this.getMaxStacks(str) + '层,每打通一个区域效果重置。';
			},
			stackDesc: function (str, stacks){
				return "脆皮的繁殖速度减缓了" + prettify(100 - (this.getMult(str, stacks) * 100)) + "%。";
			},
			getMaxStacks: function (str) {
				return Math.floor((str % 9) * 25) + 300;
			},
			getMult: function (str, stacks) {
				var realStrength = Math.ceil(str / 9);
				return Math.pow((1 - 0.001 * realStrength), stacks);
			},
			getWeight: function (str){
				return (1 / this.getMult(str, this.getMaxStacks(str)) - 1) / 6;
			},
			icon: "*radioactive",
			minMaxStep: [1, 45, 1],
			chance: 1
		},
		bloodthirst: {
			description: function (str) {
				return "当脆皮死后敌人叠加一层嗜血效果。每" + this.getFreq(str) + "层效果，敌人将回满生命，并获得50%的额外攻击。最高叠" + this.getMaxStacks(str) + "层，并在杀死敌人后重置效果。";
			},
			stackDesc: function (str, stacks) {
				var freq = this.getFreq(str);
				var max = this.getMaxStacks(str);
				var text = "这个敌人";
				if (stacks < max) {
					var next = (freq - (stacks % freq));
					text += "再叠" + next + "层嗜血后回满生命并增加攻击" + ((next == 1) ? "" : "") + ", " + ((stacks >= freq) ? "" : "") + "当脆皮死亡后增加一层";
				}
				if (stacks >= freq){
					if (stacks < max) text += ",";
					text += "现在已经增加" + prettify((this.getMult(str, stacks) * 100) - 100) + "%的攻击";
				}
				text += "。";
				return text;
			},
			getMaxStacks: function (str) {
				return (this.getFreq(str) * (2 + Math.floor(str / 2)));
			},
			getFreq: function(str){
				return 10 - str;
			},
			getMult: function (str, stacks){
				var count = Math.floor(stacks / this.getFreq(str));
				return 1 + (0.5 * count);
			},
			getWeight: function (str) {
				return 0.5 + (0.25 * Math.floor(str / 2));
			},
			minMaxStep: [1, 7, 1],
			chance: 1,
			icon: "*flask",
			iconOnEnemy: true
		},
		explosive: {
			description: function (str) {
				var text = "当敌人被杀死时，会瞬间造成相当于其攻击伤害" + prettify(this.getMult(str) * 100) + "%的伤害";
				if (str > 15) {
					text += "，除非你的防御和超过最大生命值";
				}
				text += "。";
				return text;
			},
			getMult: function (str) {
				return str;
			},
			getWeight: function (str) {
				var mult = this.getMult(str);
				if (str <= 15){
					return (3/20 * mult) + (1/4);
				}
				else {
					return (1/14 * mult) - (1/7);
				}
			},
			minMaxStep: [5, 30, 1],
			chance: 1
		},
		slippery: {
			description: function (str) {
				return "敌人有" + prettify(this.getMult(str) * 100) + "%的概率闪躲你的攻击，该效果会在" + ((str <= 15) ? "奇数" : "偶数") + "区域出现。";
			},
			getMult: function (str){
				if (str > 15) str -= 15;
				return 0.02 * str;
			},
			getWeight: function (str) {
				return (1 / (1 - this.getMult(str)) - 1) * 10 / 1.5;
			},
			minMaxStep: [1, 30, 1],
			chance: 1
		},
		rampage: {
			description: function (str) {
				return "每杀死一个敌人叠一层暴怒效果,每层暴怒脆皮的攻击增加" + prettify((this.getMult(str, 1) * 100) - 100) + '% (叠加)。最高叠' + this.getMaxStacks(str) + '层,当脆皮死后效果重置。';
			},
			stackDesc: function (str, stacks){
				return "你的脆皮增加了" + prettify((this.getMult(str, stacks) * 100) - 100) + "%伤害。";
			},
			getMaxStacks: function (str) {
				return Math.floor((str % 10 + 1) * 10);
			},
			getMult: function (str, stacks) {
				var realStrength = Math.ceil(str / 10);
				return 1 + (0.01 * realStrength * stacks);
			},
			getWeight: function (str){
				return (1 - this.getMult(str, 1)) * this.getMaxStacks(str);
			},
			icon: "*fire",
			incompatible: ["plague", "bogged"],
			minMaxStep: [1, 40, 1],
			chance: 1
		},
		mutimps: {
			description: function (str) {
				var size = str % 5;
				if (size == 0) size = "";
				else size = "前" + prettify(size * 2) + "行";

				var name = (str < 4) ? "Mutimps" : "Hulking Mutimps";
				return "世界上" + size + "的敌人将有40%概率变异成" + name + "。";
			},
			getWeight: function (str) {
				return (str / 10) * 1.5;
			},
			getMaxCellNum: function (str) {
				if (str > 5) str -= 5;
				str--;
				var values = [19, 39, 59, 79, 99];
				return values[str];
			},
			minMaxStep: [1, 10, 1],
			chance: 1
		},
		empower: {
			description: function (str) {
				var s = (str == 1) ? "" : "s";
				return "无论何时，当你的脆皮在世界中死亡，所有敌人会获得" + str + " 层赋能效果。每层赋能效果会使世界中的敌人增加0.2%的攻击与生命，最高可以叠9999层，此效果本轮永不重置";
			},
			getWeight: function (str) {
				return (str / 6) * 2;
			},
			stackDesc: function (str, stacks){
				return "这个敌人已被赋能，且增加了" + prettify((this.getMult(str, stacks) * 100) - 100) + "%的攻击与生命值。";
			},
			stacksToAdd: function (str){
				return str;
			},
			getMult: function (str, stacks){
				return 1 + (0.002 * stacks);
			},
			getMaxStacks: function (str) {
				return 9999;
			},
			worldStacksOnly: true,
			iconOnEnemy: true,
			icon: "baby-formula",
			minMaxStep: [1, 10, 1],
			chance: 1
		},
		pressure: {
			description: function (str) {
				return "每过" + Math.round(this.timePerStack(str)) + "秒脆皮们会叠一层压力效果。每层压力会减少脆皮1%的最大生命值。最高叠" + Math.round(this.getMaxStacks(str)) + "层,效果在打通区域后重置";
			},
			getWeight: function(str){
				var time = (105 - this.timePerStack(str));
				var stacks = this.getMaxStacks(str);
				return (((time * 1.3) + stacks) / 200);
			},
			getMult: function(str, stacks){
				return Math.pow(0.99, stacks);
			},
			addSecond: function(){
				var modifier = game.global.dailyChallenge.pressure;
				modifier.timer = (modifier.timer) ? modifier.timer + 1 : 1;
				if (modifier.timer >= 60){
					this.addStack();
					modifier.timer = 0;
				}
				updateDailyStacks('pressure');
			},
			addStack: function() {
				var global = game.global;
				var challenge = global.dailyChallenge.pressure;
				if (this.getMaxStacks(challenge.strength) <= challenge.stacks) {
					return;
				}
				challenge.stacks++;
				if (global.fighting){
					global.soldierHealthMax *= 0.99;
					if (global.soldierHealthMax < global.soldierHealth)
						global.soldierHealth = global.soldierHealthMax;
					if (global.soldierHealth < 0)
						global.soldierHealth = 0;
				}
			},
			timePerStack: function(str){
				var thisStr = Math.ceil(str / 4) - 1;
				return (45 + (thisStr * 5));
			},
			resetTimer: function(){
				var modifier = game.global.dailyChallenge.pressure;
				modifier.timer = 0;
				modifier.stacks = 0;
				updateDailyStacks('pressure');
			},
			stackDesc: function(str, stacks){
				return "你的脆皮正处于巨大的压力当中。最大生命值已经减少" + prettify((1 - this.getMult(str, stacks)) * 100) + "%。";
			},
			getMaxStacks: function(str){
				var thisStr = Math.floor(str % 4);
				return (45 + (thisStr * 5));
			},
			icon: "*heart3",
			minMaxStep: [1, 16, 1],
			chance: 1
		},
		mirrored: {
			description: function (str) {
				var reflectChance = this.getReflectChance(str);
				return "敌人有" + (reflectChance.toString()[0] == '8' ? '' : '') + " " + prettify(reflectChance) + "%的概率反弹一次攻击，将此次伤害的" + prettify(this.getMult(str) * 100) + "%返还给你的脆皮。";
			},
			getReflectChance: function(str){
				return (Math.ceil(str / 10)) * 10;
			},
			getMult: function(str){
				return ((str % 10) + 1) / 10;
			},
			getWeight: function(str){
				return ((((this.getReflectChance(str) + 90) / 100) * 0.85) * ((this.getMult(str) + 0.9) * 0.85));
			},
			testWeights: function(){
				var min = 0;
				var max = 0;
				var results = []
				for (var x = this.minMaxStep[0]; x <= this.minMaxStep[1]; x += this.minMaxStep[2]){
					var result = this.getWeight(x);
					if (min == 0)
						min = result;
					else if (result < min)
						min = result;
					if (result > max)
						max = result;
					results.push(result);
				}
				console.log(results);
				return "Min: " + min + ", Max: " + max;
			},
			reflectDamage: function(str, attack){
				if (Math.floor(Math.random() * 100) >= this.getReflectChance(str))
					return 0;
				return this.getMult(str) * attack;
			},
			minMaxStep: [1, 100, 1],
			chance: 1
		},
		metallicThumb: {
			description: function (str) {
				return "装备的价格下降" + prettify((1 - this.getMult(str)) * 100) + "%。";
			},
			getWeight: function (str) {
				return ((str + 3) / 26);
			},
			getMult: function(str){
				return 1 - (str/100 * 5);
			},
			minMaxStep: [1, 10, 1],
			chance: 1
		}
/* 		disarmed: {
			equipmentList: ["Boots", "Mace", "Helmet", "Polearm", "Pants", "Battleaxe", "Shoulderguards", "Greatsword", "Breastplate", "Arbalest", "Gambeson"],
			description: function (str) {
				return "You can't use something"
			},
			getBannedEquipment(str, checkOne){
				if (checkOne) return (this.equipmentList.indexOf(checkOne) < str);
			},
			minMaxStep: [1, 11, 1],
			chance: 1
		} */
	};

function getCurrentDailyDescription(){
	var daily = game.global.dailyChallenge;
	if (!daily) return "";
	var returnText = "<ul style='text-align: left'>";
	for (var item in daily){
		if (item == 'seed') continue;
		returnText += "<li>" + dailyModifiers[item].description(daily[item].strength) + "</li>";
	}
	returnText += "</ul>挑战没有终点，并在完成时获得<u><b>额外的"  + prettify(getDailyHeliumValue(countDailyWeight())) + "%</b></u>.";
	return returnText;
}

function testAllWeights(){
	for (var item in dailyModifiers){
		console.log(item, dailyModifiers[item].getWeight(dailyModifiers[item].minMaxStep[0]), dailyModifiers[item].getWeight(dailyModifiers[item].minMaxStep[1]));
	}
}

function startDaily(){
	for (var item in game.global.dailyChallenge){
		if (item == "seed") continue;
		if (typeof dailyModifiers[item].start !== 'undefined') dailyModifiers[item].start(game.global.dailyChallenge[item].strength, game.global.dailyChallenge[item].stacks);
	}
	game.global.recentDailies.push(game.global.dailyChallenge.seed);
	if (game.global.recentDailies.length == 7) giveSingleAchieve("Now What");
	handleFinishDailyBtn();
}

function countDailyWeight(dailyObj){
	var weight = 0;
	if (!dailyObj) dailyObj = game.global.dailyChallenge;
	for (var item in dailyObj){
		if (item == "seed") continue;
		weight += dailyModifiers[item].getWeight(dailyObj[item].strength);
	}
	return weight;
}

function getDailyHeliumValue(weight){
	//min 2, max 6
	var value = 75 * weight + 20;
	if (value < 100) value = 100;
	else if (value > 500) value = 500;
	if (Fluffy.isRewardActive("dailies")) value += 100;
	return value;
}

function handleFinishDailyBtn(){
	var display = (game.global.challengeActive == "Daily" && !game.global.mapsActive && !game.global.preMapsActive) ? "block" : "none";
	document.getElementById('finishDailyBtnContainer').style.display = display;
}

//Use abandonChallenge(), not abandonDaily(). abandonChallenge will already call this function, and will also clean up other challenge things.
function abandonDaily(){
	if (Object.keys(game.global.dailyChallenge).length === 0) return;
	for (var item in game.global.dailyChallenge){
		if (item == "seed") continue;
		if (typeof dailyModifiers[item].abandon !== 'undefined') dailyModifiers[item].abandon(game.global.dailyChallenge[item].strength, game.global.dailyChallenge[item].stacks);
		if (typeof dailyModifiers[item].icon !== 'undefined'){
			var stackElem = document.getElementById(item + 'DailyStacks');
			if (stackElem != null) stackElem.style.display = 'none';
		}
	}
	var value = getDailyHeliumValue(countDailyWeight()) / 100;
	var reward = game.resources.helium.owned + game.stats.spentOnWorms.value;
	if (reward > 0) reward = Math.floor(reward * value);
	if (!isNumberBad(reward)){
		addHelium(reward);
		game.global.dailyHelium += reward;
		game.stats.dailyBonusHelium.value += reward;
		checkAchieve('dailyHelium');
	}
	else console.log('attempted to give ' + reward + ' as daily challenge reward.');
	message("你已经完成了每日挑战！ 你得到了回报 " + prettify(reward) + " 额外的氦气!", "Notices");
	game.global.dailyChallenge = {};
	handleFinishDailyBtn();
	return reward;
}

function checkCompleteDailies(){
	var currentCompleteObj = game.global.recentDailies;
	var newCompleteObj = [];
	for (var x = 0; x > -7; x--){
		var timeString = getDailyTimeString(x);
		if (currentCompleteObj.indexOf(timeString) != -1)
			newCompleteObj.push(timeString);
	}
	game.global.recentDailies = newCompleteObj;
}

function updateDailyStacks(what){
	var elem = document.getElementById(what + "DailyStacks");
	if (game.global.dailyChallenge[what].stacks == 0 || (dailyModifiers[what].worldStacksOnly && game.global.mapsActive)){
		if (elem == null) return;
		else elem.style.display = "none";
		return;
	}
	if (elem == null){
		var html = "<span id='" + what + "DailyStacks' class='badge antiBadge' onmouseover='tooltip(\"" + what + "\", \"dailyStack\", event)' onmouseout='tooltip(\"hide\")'><span id='" + what + "DailyStacksCount'>" + game.global.dailyChallenge[what].stacks + "</span>";
		var icon = (dailyModifiers[what].icon.charAt(0) == "*") ? "icomoon icon-" + dailyModifiers[what].icon.substr(1) : "glyphicon glyphicon-" + dailyModifiers[what].icon;
		html += "<span class='" + icon + "'></span></span>";
		var target = (dailyModifiers[what].iconOnEnemy) ? document.getElementById('badDebuffSpan') : document.getElementById('debuffSpan');
		target.innerHTML += html;
		return;
	}
	else document.getElementById(what + "DailyStacksCount").innerHTML = game.global.dailyChallenge[what].stacks;
	elem.style.display = "inline-block";
}

function updateDailyClock(justTime){
	var elem = document.getElementById('dailyResetTimer');
	if (elem == null && !justTime) return;
	var now = new Date();
	var secondsRemaining = 59 - now.getUTCSeconds();
	var minutesRemaining = 59 - now.getUTCMinutes();
	var hoursRemaining = 23 - now.getUTCHours();
	if (secondsRemaining <= 9) secondsRemaining = "0" + secondsRemaining;
	if (minutesRemaining <= 9) minutesRemaining = "0" + minutesRemaining;
	if (hoursRemaining <= 9) hoursRemaining = "0" + hoursRemaining;
	var timeRemaining = hoursRemaining + ":" + minutesRemaining + ":" + secondsRemaining;
	if (justTime) return timeRemaining;
	elem.innerHTML = timeRemaining;
}

function getDailyTimeString(add, makePretty, getDayOfWeek){
	var today = new Date();
	if (!add) add = 0;
	today.setUTCDate(today.getUTCDate() + add + lastAdd);
	if (getDayOfWeek) return today.getUTCDay();
	var year = today.getUTCFullYear();
	var month = today.getUTCMonth() + 1; //For some reason January is month 0? Why u do dis?
	if (month < 10) month = "0" + month;
	var day = today.getUTCDate();
	if (day < 10) day = "0" + day;
	if (makePretty) return year + "-" + month + "-" + day;
	var seedStr = String(year) + String(month) + String(day);
	seedStr = parseInt(seedStr, 10);
	return seedStr;
}

function dayOfWeek(number){
	var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	return days[number];
}

function getDailyTopText(add){
	readingDaily = add;
	var returnText = "";
	returnText += "<div class='row dailyTopRow'>";
	var checkedDayDone = false;
	var todayOfWeek = getDailyTimeString(0, false, true);
	for (var x = 0; x < 7; x++){
		var dayIndex = (todayOfWeek * -1) + x;
		if (dayIndex > 0)
			dayIndex = (x - todayOfWeek) - 7;
		var dayDone = (game.global.recentDailies.indexOf(getDailyTimeString(dayIndex)) != -1);
		if (add == dayIndex) checkedDayDone = dayDone;
		returnText += "<div onmouseover='tooltip(\"Switch Daily\", null, event, " + dayIndex + ")' onmouseout='cancelTooltip()' onclick='getDailyChallenge(" + dayIndex + ")' class='col-xs-1 seventhColumn noselect lowPad pointer dailyTop ";
		if (add == dayIndex)
			returnText += 'colorInfo';
		else if (dayDone)
			returnText += 'colorGrey';
		else
			returnText += 'colorSuccess';
		returnText += "'>" + cntime(dayOfWeek(getDailyTimeString(dayIndex, false, true))).charAt(1);
		if (!dayDone){
			var heliumValue = getDailyHeliumValue(countDailyWeight(getDailyChallenge(dayIndex, true)));
			returnText += "<br/>" + prettify(heliumValue) + "%";
		}
		else returnText += "<br/>完成";
		returnText += "</div>";
	}
	returnText += "</div>";
	//returnText += "<div style='text-align: left; padding: 10px;'><span class='btn btn-md btn-primary' onclick='lastAdd += 7; selectChallenge(\"Daily\");'>Test Server Only - Travel To Next Week</span></div>"
	returnText += "<div class='row' style='margin: 0'><div class='col-xs-6 lowPad dailyTop' style='font-weight: bold'>" + cntime(dayOfWeek(getDailyTimeString(add, false, true))) + " " + getDailyTimeString(add, true) + "</div><div class='col-xs-6 dailyTop lowPad'>" + cntime(dayOfWeek(getDailyTimeString(1, false, true))) + " 重置倒计时 <span id='dailyResetTimer'>00:00:00</span></div></div>";

	if (checkedDayDone)
		returnText += "<b class='redText'>你已经尝试过这个每日挑战！</b><br/><br/>";
	return [returnText, !checkedDayDone];
}

var nextDaily = "";
var lastAdd = 0; //internal starting seed
var readingDaily = 0;
function getDailyChallenge(add, objectOnly, textOnly){
	checkCompleteDailies();
	var now = new Date().getTime();
	var dateSeed  = getDailyTimeString(add);
	var returnText = "";
	if (!objectOnly){
		returnText = getDailyTopText(add);
		if (!returnText[1]){
			//if (document.getElementById('specificChallengeDescription') != null) document.getElementById('specificChallengeDescription').innerHTML = returnText[0];
			document.getElementById('activatePortalBtn').style.display = 'none';
			//return returnText[0];
		}
		else document.getElementById('activatePortalBtn').style.display = 'inline-block';
		returnText = returnText[0];
		returnText += "<ul style='text-align: left'>";
	}
	var seedStr = getRandomIntSeeded(dateSeed + 2, 1, 1e9);
	//seedStr = getRandomIntSeeded(seedStr, 1, 1e9);
	var weightTarget = getRandomIntSeeded(seedStr++, 25, 51) / 10;
	//Build a list of all modifiers to choose from
	var modifierList = [];
	var totalChance = 0;
	var dailyObject = {};

	for (var item in dailyModifiers){
		modifierList.push(item);
		totalChance += dailyModifiers[item].chance;
	}
	var chanceMod = 1000 / totalChance;
	var currentWeight = 0;
	var maxLoops = modifierList.length;
	var sizeCount = [0,0,0];// < 0.3, < 1, >= 1
	var sizeTarget = [getRandomIntSeeded(seedStr++, 0, 2), getRandomIntSeeded(seedStr++, 1, 5), getRandomIntSeeded(seedStr++, 2, 6)]
	if (weightTarget < 2.75) {
		sizeTarget[2] = 0; sizeTarget[0] += 2;
	}
	mainLoop:
	for (var x = 0; x < maxLoops; x++){
		var maxZLoops = modifierList.length;
		var firstChoice = [];
		modLoop:
		for (var z = 0; z < maxZLoops; z++){
			var roll = getRandomIntSeeded(seedStr++, 0, 1000);
			var selectedIndex;
			var checkedTotal = 0;
			lookupLoop:
			for (var y = 0; y < modifierList.length; y++){
				checkedTotal += dailyModifiers[modifierList[y]].chance * chanceMod;
				if ((roll < checkedTotal) || y == modifierList.length - 1){
					totalChance -= dailyModifiers[modifierList[y]].chance;
					chanceMod = 1000 / totalChance;
					selectedIndex = y;
					break lookupLoop;
				}
			}
			var selectedMod = modifierList[selectedIndex];
			var modObj = dailyModifiers[selectedMod];
			var str = modObj.minMaxStep[0] + (getRandomIntSeeded(seedStr++, 0, Math.floor(((modObj.minMaxStep[1] + modObj.minMaxStep[2]) * (1 / modObj.minMaxStep[2]))) - modObj.minMaxStep[0]) * modObj.minMaxStep[2]);
			var modWeight = modObj.getWeight(str);
			var modSize = (modWeight < 0.85) ? 0 : ((modWeight < 1.85) ? 1 : 2);
			if ((modWeight + currentWeight > weightTarget + 1) ) continue;
			if (everythingInArrayGreaterEqual(sizeTarget, sizeCount)){
				//use it and stuff
			}
			else if (sizeCount[modSize] >= sizeTarget[modSize] && z != maxZLoops - 1){
				if (!firstChoice.length) firstChoice = [selectedMod, str, selectedIndex, modSize, modWeight];
				continue modLoop;
			}
			else if (z == maxZLoops - 1 && firstChoice.length){
				selectedMod = firstChoice[0];
				modObj = dailyModifiers[selectedMod];
				selectedIndex = firstChoice[2];
				str = firstChoice[1];
				modSize = firstChoice[3];
				modWeight = firstChoice[4];
			}

			//It's been officially selected by this point
			sizeCount[modSize]++;
			if (!objectOnly) returnText += "<li>" + modObj.description(str) + "</li>";
			dailyObject[modifierList[selectedIndex]] = {strength: str, stacks: 0};
			//console.log(selectedMod + "(strength: " + str + ", weight: " + modObj.getWeight(str) + "): " + modObj.description(str));
			currentWeight += modWeight;
			if (x > 0 && (currentWeight > weightTarget || (currentWeight >= weightTarget - 0.5 && currentWeight <= weightTarget + 0.5))){
				break mainLoop;
			}
			modifierList.splice(selectedIndex, 1);
			if (modObj.incompatible){
				for (var x = 0; x < modObj.incompatible.length; x++){
					var incompatibleIndex = modifierList.indexOf(modObj.incompatible[x]);
					if (incompatibleIndex >= 0){
						modifierList.splice(incompatibleIndex, 1);
					}
				}
			}
			break modLoop;
		}

	}
	dailyObject.seed = dateSeed;
	if (objectOnly) return dailyObject;
	if (countDailyWeight(dailyObject) != currentWeight) console.log('mismatch, objectCount = ' + countDailyWeight(dailyObject) + ", current = " + currentWeight);
	returnText += "</ul>挑战没有终点，并在完成时获得<u><b>额外"  + prettify(getDailyHeliumValue(currentWeight)) + "%</b></u>的氦。 <b>只能运行一次!</b> 奖赏不计入骨头购买传送门数据，也不计入最好的氦/小时统计。";
	if (textOnly) return returnText;
	nextDaily = returnText;
	if (document.getElementById('specificChallengeDescription') != null) document.getElementById('specificChallengeDescription').innerHTML = returnText;
	updateDailyClock();
/* 	console.log("");
	console.log("Attempted challenge with weight of " + weightTarget + ", built challenge with weight of " + currentWeight);
	console.log("Target max for small, medium, large mods were: ", sizeTarget[0], sizeTarget[1], sizeTarget[2]);
	console.log("Actually made for small, medium large: ", sizeCount[0], sizeCount[1], sizeCount[2]);
	console.log("");
	console.log("Took " + (new Date().getTime() - now) + "ms");
	console.log("");
	console.log(""); */
	return returnText;
}

var testLastAdd = 0;
function testDailySpread(){
	for (var x = 0; x < 7; x++){
		var testObj = getDailyChallenge(testLastAdd, true);
		for (var item in testObj){
			if (item == "plague" || item == "bogged") console.log(item, testLastAdd);
		}
		testLastAdd++;
	}
}

function everythingInArrayGreaterEqual(smaller, bigger){
	if (bigger.length < smaller.length) return false;
	for (var x = 0; x < smaller.length; x++){
		if (smaller[x] > bigger[x]) return false;
	}
	return true;
}

var redCritCounter = 0;
function fight(makeUp) {
	var randomText;
    var cellNum;
    var cell;
    var cellElem;
	var currentMapObj;
	var isVoid = false;
	game.global.passive = false;
    if (game.global.mapsActive) {
        cellNum = game.global.lastClearedMapCell + 1;
        cell = game.global.mapGridArray[cellNum];
        cellElem = document.getElementById("mapCell" + cellNum);
		currentMapObj = getCurrentMapObject();
		if (currentMapObj.location == "Void") isVoid = true;
    } else {
        cellNum = game.global.lastClearedCell + 1;
        cell = game.global.gridArray[cellNum];
        cellElem = document.getElementById("cell" + cellNum);
    }
    if (game.global.soldierHealth <= 0) {
		if (isVoid) game.global.voidDeaths++;
		game.stats.trimpsKilled.value += game.resources.trimps.soldiers;
		game.stats.battlesLost.value++;
		if (game.global.challengeActive == "Daily"){
			if (typeof game.global.dailyChallenge.bloodthirst !== 'undefined'){
				game.global.dailyChallenge.bloodthirst.stacks++;
				var maxStacks = dailyModifiers.bloodthirst.getMaxStacks(game.global.dailyChallenge.bloodthirst.strength);
				if (game.global.dailyChallenge.bloodthirst.stacks > maxStacks) {
					game.global.dailyChallenge.bloodthirst.stacks = maxStacks;
				}
				else if (game.global.dailyChallenge.bloodthirst.stacks % dailyModifiers.bloodthirst.getFreq(game.global.dailyChallenge.bloodthirst.strength) == 0){
					cell.health = cell.maxHealth;
				}
				updateDailyStacks('bloodthirst');
			}
			if (!game.global.passive && typeof game.global.dailyChallenge.empower !== 'undefined'){
				if (!game.global.mapsActive){
					game.global.dailyChallenge.empower.stacks += dailyModifiers.empower.stacksToAdd(game.global.dailyChallenge.empower.strength);
					var maxStack = dailyModifiers.empower.getMaxStacks(game.global.dailyChallenge.empower.strength);
					if (game.global.dailyChallenge.empower.stacks >= maxStack) game.global.dailyChallenge.empower.stacks = maxStack;
				}
				updateDailyStacks('empower');
			}
		}
        var s = (game.resources.trimps.soldiers > 1) ? "s " : " ";
		randomText = game.trimpDeathTexts[Math.floor(Math.random() * game.trimpDeathTexts.length)];
        message(prettify(game.resources.trimps.soldiers) + " Trimp" + s + "just " + randomText + ".", "Combat", null, null, 'trimp');
		if (game.global.spireActive && !game.global.mapsActive) deadInSpire();
        game.global.fighting = false;
        game.resources.trimps.soldiers = 0;
		if (game.global.challengeActive == "Nom") {
			cell.nomStacks = (cell.nomStacks) ? cell.nomStacks + 1 : 1;
			if (cell.nomStacks > 100) cell.nomStacks = 100;
			updateNomStacks(cell.nomStacks);
			if (cell.health > 0) cell.health += (cell.maxHealth * 0.05);
			else cell.health = 0;
			if (cell.health > cell.maxHealth) cell.health = cell.maxHealth;
			updateBadBar(cell);
		}
        return;
    }
    if (cell.health <= 0 || !isFinite(cell.health)) {
		game.stats.battlesWon.value++;
		if (!game.global.mapsActive){
			game.global.voidSeed++;
			game.global.scrySeed++;
		}
		if (game.global.formation == 4 && !game.global.mapsActive && !game.global.waitToScry) tryScry();
		if (game.global.challengeActive == "Nom" && cell.nomStacks == 100) giveSingleAchieve("Great Host");
		if (game.global.challengeActive == "Obliterated") giveSingleAchieve("Obliterate");
		if (game.global.challengeActive == "Eradicated") giveSingleAchieve("Eradicate");	
		if (game.global.usingShriek) disableShriek();
		//Death message
		randomText = game.badGuyDeathTexts[Math.floor(Math.random() * game.badGuyDeathTexts.length)];
		var firstChar = cell.name.charAt(0);
		var aAn = (firstChar == "A" || firstChar == "E" || firstChar == "I" || firstChar == "O" || firstChar == "U") ? " an " : " a ";
		var killedText = "You " + randomText + aAn + cell.name;
		if (game.global.challengeActive == "Coordinate") killedText += " group";
		killedText += "!";
        if (!game.global.spireActive || cellNum != 99 || game.global.mapsActive) message(killedText, "Combat", null, null, 'enemy');
		try{
			if (typeof kongregate !== 'undefined' && !game.global.mapsActive) kongregate.stats.submit("HighestLevel", ((game.global.world * 100) + cell.level));
		}
		catch(err){
			console.debug(err);
		}

		//Challenge Shenanigans
		if (game.global.challengeActive == "Lead" && cell.name != "Liquimp") manageLeadStacks(!game.global.mapsActive);
		if (game.global.challengeActive == "Balance" && game.global.world >= 6){
			if (game.global.mapsActive) game.challenges.Balance.removeStack();
			else game.challenges.Balance.addStack();
			updateBalanceStacks();
		}
		if (game.global.challengeActive == "Daily"){
			if (typeof game.global.dailyChallenge.karma !== 'undefined'){
				game.global.dailyChallenge.karma.stacks++;
				var maxStack = dailyModifiers.karma.getMaxStacks(game.global.dailyChallenge.karma.strength);
				if (game.global.dailyChallenge.karma.stacks >= maxStack) game.global.dailyChallenge.karma.stacks = maxStack;
				updateDailyStacks('karma');
			}
			if (typeof game.global.dailyChallenge.toxic !== 'undefined'){
				game.global.dailyChallenge.toxic.stacks++;
				var maxStack = dailyModifiers.toxic.getMaxStacks(game.global.dailyChallenge.toxic.strength);
				if (game.global.dailyChallenge.toxic.stacks >= maxStack) game.global.dailyChallenge.toxic.stacks = maxStack;
				updateDailyStacks('toxic');
			}
			if (typeof game.global.dailyChallenge.rampage !== 'undefined'){
				game.global.dailyChallenge.rampage.stacks++;
				var maxStack = dailyModifiers.rampage.getMaxStacks(game.global.dailyChallenge.rampage.strength);
				if (game.global.dailyChallenge.rampage.stacks >= maxStack) game.global.dailyChallenge.rampage.stacks = maxStack;
				updateDailyStacks('rampage');
			}
			if (typeof game.global.dailyChallenge.bloodthirst !== 'undefined'){
				game.global.dailyChallenge.bloodthirst.stacks = 0;
				updateDailyStacks('bloodthirst');
			}
		}
		//Html stuff
		if (cell.overkilled && game.options.menu.overkillColor.enabled){
			if (game.options.menu.overkillColor.enabled == 2){
				var prevCellElem = document.getElementById(((game.global.mapsActive) ? "mapCell" : "cell") + (cellNum - 1));
				if (prevCellElem) swapClass("cellColor", "cellColorOverkill", prevCellElem);
			}
			swapClass("cellColor", "cellColorOverkill", cellElem);
		}
		else	swapClass("cellColor", "cellColorBeaten", cellElem);
        if (game.global.mapsActive) game.global.lastClearedMapCell = cellNum;
        else {
			game.global.lastClearedCell = cellNum;
		}
        game.global.fighting = false;
        document.getElementById("badGuyCol").style.visibility = "hidden";
		document.getElementById('corruptionBuff').innerHTML = "";
		//Loot!
		if (cell.empowerment){
			rewardToken(cell.empowerment);
		}
        var unlock;
        if (game.global.mapsActive) unlock = game.mapUnlocks[cell.special];
        else {
			checkVoidMap();
			unlock = game.worldUnlocks[cell.special];
		}
        var noMessage = false;
        if (typeof unlock !== 'undefined' && typeof unlock.fire !== 'undefined') {
            unlock.fire(cell.level);
            if (game.global.mapsActive) {
                if (typeof game.mapUnlocks[cell.special].last !== 'undefined') {
					game.mapUnlocks[cell.special].last += 5;
					if (typeof game.upgrades[cell.special].prestige && game.global.sLevel >= 4 && game.global.challengeActive != "Mapology" && (Math.ceil(game.mapUnlocks[cell.special].last / 5) % 2 == 1)){
						unlock.fire(cell.level);
						game.mapUnlocks[cell.special].last += 5;
						message(unlock.message.replace("a book", "two books"), "Unlocks", null, null, 'repeated', cell.text);
						noMessage = true;
					}
				}
                if (typeof game.mapUnlocks[cell.special].canRunOnce !== 'undefined') game.mapUnlocks[cell.special].canRunOnce = false;
				if (unlock.filterUpgrade) refreshMaps();
            }

        } else if (cell.special !== "") {
            unlockEquipment(cell.special);
        }
		if (cell.mutation && typeof mutations[cell.mutation].reward !== 'undefined') mutations[cell.mutation].reward(cell.corrupted);
		var doNextVoid = false;
		if (typeof unlock !== 'undefined' && typeof unlock.message !== 'undefined' && !noMessage) message(unlock.message, "Unlocks", null, null, ((unlock.world > 0) ? 'unique' : 'repeated'), cell.text);
		if (typeof game.badGuys[cell.name].loot !== 'undefined') game.badGuys[cell.name].loot(cell.level);
		if (!game.global.mapsActive && game.global.spireActive && checkIfSpireWorld()) {
			giveSpireReward(cell.level);
		}
		//Post Loot
		resetEmpowerStacks();

		//Map and World split here for non-loot stuff, anything for both goes above
		//Map Only
        if (game.global.mapsActive && cellNum == (game.global.mapGridArray.length - 1)) {
			//ayy you beat a map
			var mapObj = getCurrentMapObject();
			game.stats.mapsCleared.value++;
			checkAchieve("totalMaps");
			var shouldRepeat = (game.global.repeatMap);
			var mapBonusEarned = 0;
			if ((currentMapObj.level >= (game.global.world - game.portal.Siphonology.level)) && game.global.mapBonus < 10) mapBonusEarned = 1;
			game.global.mapBonus += mapBonusEarned;
			var mapBonusReached = (game.global.mapBonus == 10);
			var allItemsEarned = (addSpecials(true, true, mapObj) == 0);
			if (game.options.menu.repeatUntil.enabled == 1 && mapBonusReached) shouldRepeat = false;
			else if (game.options.menu.repeatUntil.enabled == 2 && allItemsEarned) shouldRepeat = false;
			else if (game.options.menu.repeatUntil.enabled == 3 && allItemsEarned && (mapBonusReached || mapBonusEarned == 0)) shouldRepeat = false;
			if (mapObj.bonus && mapSpecialModifierConfig[mapObj.bonus].onCompletion){
				mapSpecialModifierConfig[mapObj.bonus].onCompletion();
			}
			var skip = false;
			if (isVoid) {
				if (currentMapObj.stacked > 0){
					var timeout = 1500;
					if (currentMapObj.stacked > 3) timeout = 1000;
					var mapName = currentMapObj.name;
					for (var x = 0; x < currentMapObj.stacked; x++){
						setTimeout((function(z) {
							return function() {
								createHeirloom(z);
							}
						})(game.global.world), (timeout * (x + 1)));
					}
					game.badGuys.Cthulimp.loot(99, true, currentMapObj.stacked);
				}
				currentMapObj.noRecycle = false;
				recycleMap(-1, true, true);
				if (game.options.menu.repeatVoids.enabled == 1){
					//repeat void maps
					if (game.global.totalVoidMaps > 0) doNextVoid = getNextVoidId();
				}
				skip = true;
			}
			if (shouldRepeat && !game.global.switchToMaps && (game.global.challengeActive != "Mapology" || game.challenges.Mapology.credits >= 1) && !skip){
				if (game.global.mapBonus > 0) document.getElementById("mapsBtnText").innerHTML = "地图 (" + game.global.mapBonus + ")";
				game.global.lastClearedMapCell = -1;
				buildMapGrid(game.global.currentMapId);
				drawGrid(true);
				if (game.global.challengeActive == "Mapology") {
					game.challenges.Mapology.credits--;
					if (game.challenges.Mapology.credits <= 0) game.challenges.Mapology.credits = 0;
					updateMapCredits();
					messageMapCredits();
				}
				fightManual();
				return;
			}
			else{
				if (game.global.switchToMaps){
					game.global.soldierHealth = 0;
					game.resources.trimps.soldiers = 0;
					updateGoodBar();
				}
				game.global.preMapsActive = (game.options.menu.exitTo.enabled) ? false : true;
				game.global.mapsActive = false;
				game.global.lastClearedMapCell = -1;
				game.global.currentMapId = "";
				game.global.mapGridArray = [];
				game.global.fighting = false;
				game.global.switchToMaps = false;
				game.global.mapExtraBonus = "";
				mapsSwitch(true);
				if (doNextVoid !== false){
					game.global.lookingAtMap = doNextVoid;
					runMap();
				}
				else if (isVoid && game.global.preMapsActive && game.global.totalVoidMaps > 0) {
					toggleVoidMaps();
				}
				return;
			}
		}
		//World Only
        if (cellNum == 99) {
			nextWorld();
		}
        if (game.global.soldierHealth > 0)
			battle(true);
        return;
    }
	var cellAttack = calculateDamage(cell.attack, false, false, false, cell);
	if (getEmpowerment() == "Ice"){
		var badAttackElem = document.getElementById("badGuyAttack");
		badAttackElem.innerHTML = calculateDamage(cell.attack, true, false, false, cell);
	}
	var badCrit = false;
	if (game.global.challengeActive == "Crushed"){
		if (checkCrushedCrit()) {
			cellAttack *= 5;
			badCrit = true;
			if (game.global.world > 5) game.challenges.Crushed.critsTaken++;
		}
	}
	if (game.global.voidBuff == "getCrit" || cell.corrupted == 'corruptCrit' || cell.corrupted == 'healthyCrit'){
		if (Math.floor(Math.random() * 4) == 0){
			cellAttack *= (cell.corrupted == 'healthyCrit') ? 7 : 5;
			badCrit = true;
		}
	}
	if (game.global.challengeActive == "Daily"){
		if (typeof game.global.dailyChallenge.crits !== 'undefined'){
			if (Math.floor(Math.random() * 4) == 0){
				cellAttack *= dailyModifiers.crits.getMult(game.global.dailyChallenge.crits.strength);
				badCrit = true;
			}
		}
	}
    var attackAndBlock = (cellAttack - game.global.soldierCurrentBlock);
	var pierce = 0;
	if (game.global.brokenPlanet && !game.global.mapsActive){
		pierce = getPierceAmt();
		var atkPierce = pierce * cellAttack;
		if (attackAndBlock < atkPierce) attackAndBlock = atkPierce;
	}
	if (attackAndBlock < 0) attackAndBlock = 0;
	var trimpAttack = calculateDamage(game.global.soldierCurrentAttack, false, true);
	if (getEmpowerment() == "Ice"){
		document.getElementById('goodGuyAttack').innerHTML = calculateDamage(game.global.soldierCurrentAttack, true, true);
	}
	updateTitimp();
	var critTier = 0;
	var critSpan = document.getElementById("critSpan");
	critSpan.innerHTML = "";
	var critChance = getPlayerCritChance();
	if (critChance > 0){
		critTier = Math.floor(critChance);
		critChance = critChance % 1;
		if (Math.random() < critChance){
			critTier++;
		}
		if (critTier > 0){
			trimpAttack *= getPlayerCritDamageMult();
			if (critTier > 1) trimpAttack *= getMegaCritDamageMult(critTier);
		}
	}
	if (critChance < 0){
		if (Math.random() < Math.abs(critChance)){
			critTier = -1;
			trimpAttack *= 0.2;
		}
	}
	var attacked = false;
	var wasAttacked = false;
	var badDodge = false;
	if (cell.corrupted == "corruptDodge"){
		if (Math.random() < 0.3) badDodge = true;
	}
	if (game.global.challengeActive == "Daily" && typeof game.global.dailyChallenge.slippery !== 'undefined'){
		var slipStr = game.global.dailyChallenge.slippery.strength;
		if ((slipStr > 15 && game.global.world % 2 == 0) || (slipStr <= 15 && game.global.world % 2 == 1)){
			if (Math.random() < dailyModifiers.slippery.getMult(slipStr)) badDodge = true;
		}
	}
	var overkill = 0;
	var plaguebringer = 0;
	var impOverkill = 0;
	var thisKillsTheTrimp = function() {
		impOverkill -= game.global.soldierHealth;
		game.global.soldierHealth = 0;
	};
	var thisKillsTheBadGuy = function() {
		cell.health = 0;
	};
    if (trimpAttack > 0 && (game.global.challengeActive == "Slow" || ((((game.badGuys[cell.name].fast || cell.mutation == "Corruption") && game.global.challengeActive != "Nom") || game.global.voidBuff == "doubleAttack") && game.global.challengeActive != "Coordinate"))) {
        game.global.soldierHealth -= attackAndBlock;
		wasAttacked = true;
        if (game.global.soldierHealth > 0) {
			if (!badDodge){
				if (getEmpowerment() == "Poison"){
					cell.health -= game.empowerments.Poison.currentDebuffPower;
					stackPoison(trimpAttack);
				}
				if (trimpAttack >= cell.health) {
					overkill = trimpAttack - cell.health;
					if (cell.name == "Improbability" && cell.health == cell.maxHealth) giveSingleAchieve("One-Hit Wonder");
				}
				else if (game.heirlooms.Shield.plaguebringer.currentBonus > 0){
					plaguebringer = trimpAttack * (game.heirlooms.Shield.plaguebringer.currentBonus / 100);
				}
				cell.health -= trimpAttack;
				attacked = true;
				if ((game.global.voidBuff == "doubleAttack" || cell.corrupted == 'corruptDbl' || cell.corrupted == 'healthyDbl') && cell.health > 0){
					game.global.soldierHealth -= (cell.corrupted == 'healthyDbl') ? attackAndBlock * 1.5 : attackAndBlock;
					if (game.global.soldierHealth < 0) thisKillsTheTrimp();
				}
			}
		}
        else thisKillsTheTrimp();
        if (cell.health <= 0) {
			thisKillsTheBadGuy();
		}
    }
	else {
		if (game.global.soldierHealth > 0){
			if (!badDodge){
				if (getEmpowerment() == "Poison"){
					cell.health -= game.empowerments.Poison.currentDebuffPower;
					stackPoison(trimpAttack);
				}
				if (trimpAttack >= cell.health){
					overkill = trimpAttack - cell.health;
					if (cell.name == "Improbability" && cell.health == cell.maxHealth) giveSingleAchieve("One-Hit Wonder");
				}
				else if (game.heirlooms.Shield.plaguebringer.currentBonus > 0){
					plaguebringer = trimpAttack * (game.heirlooms.Shield.plaguebringer.currentBonus / 100);
				}
				cell.health -= trimpAttack;
				attacked = true;
			}
			if (cell.health > 0) {
				game.global.soldierHealth -= attackAndBlock;
				wasAttacked = true;
			}
			else
				{
					thisKillsTheBadGuy();
				}
			if (game.global.soldierHealth < 0) thisKillsTheTrimp();
		}
	}
	//After attack stuff
	if (game.global.challengeActive == "Daily" && typeof game.global.dailyChallenge.mirrored !== 'undefined' && attacked && game.global.soldierHealth > 0){
		game.global.soldierHealth -= dailyModifiers.mirrored.reflectDamage(game.global.dailyChallenge.mirrored.strength, trimpAttack);
		if (game.global.soldierHealth <= 0)
			thisKillsTheTrimp();
	}
	if ((game.global.challengeActive == "Electricity" || game.global.challengeActive == "Mapocalypse") && attacked){
		game.global.soldierHealth -= game.global.soldierHealthMax * (game.challenges.Electricity.stacks * 0.1);
		if (game.global.soldierHealth < 0) thisKillsTheTrimp();
		if (game.global.challengeActive == "Electricity"){
			game.challenges.Electricity.attacksInARow++;
			if(game.challenges.Electricity.attacksInARow >= 20) giveSingleAchieve("Grounded");
		}
	}
	if ((game.global.challengeActive == "Electricity" || game.global.challengeActive == "Mapocalypse") && wasAttacked){
		game.challenges.Electricity.stacks++;
		updateElectricityStacks();
	}
	if (getEmpowerment() == "Ice" && attacked){
		game.empowerments.Ice.currentDebuffPower++;
		handleIceDebuff();
	}
	if (getEmpowerment() == "Wind" && attacked) {
		if (game.empowerments.Wind.currentDebuffPower < game.empowerments.Wind.maxStacks)
			game.empowerments.Wind.currentDebuffPower++;
		handleWindDebuff();
	}
	if (game.global.challengeActive == "Daily"){
		if (typeof game.global.dailyChallenge.plague !== 'undefined'){
			if (attacked){
				game.global.soldierHealth -= game.global.soldierHealthMax * dailyModifiers.plague.getMult(game.global.dailyChallenge.plague.strength, game.global.dailyChallenge.plague.stacks);
				if (game.global.soldierHealth < 0) thisKillsTheTrimp();
			}
			if (wasAttacked) {
				game.global.dailyChallenge.plague.stacks++;
				updateDailyStacks('plague');
			}
		}
		if (typeof game.global.dailyChallenge.bogged !== 'undefined'){
			if (attacked){
				game.global.soldierHealth -= game.global.soldierHealthMax * dailyModifiers.bogged.getMult(game.global.dailyChallenge.bogged.strength);
				if (game.global.soldierHealth < 0) thisKillsTheTrimp();
			}
		}
		if (typeof game.global.dailyChallenge.weakness !== 'undefined'){
			if (wasAttacked) {
				game.global.dailyChallenge.weakness.stacks++;
				if (game.global.dailyChallenge.weakness.stacks >= 9) game.global.dailyChallenge.weakness.stacks = 9;
				updateDailyStacks('weakness');
			}
		}
	}
	var dominating = false;
	if (game.global.challengeActive == "Domination"){
		if (game.global.mapsActive && currentMapObj.size == cellNum + 1) dominating = true;
		else if (!game.global.mapsActive && cellNum == 99) dominating = true;
	}
	if (cell.health > 0 && dominating){
		if (cell.health / cell.maxHealth < 0.95)
			cell.health += (cell.maxHealth * 0.05);
		if (cell.health > cell.maxHealth) cell.health = cell.maxHealth;
	}
	if (game.global.challengeActive == "Toxicity" && attacked) {
		var tox = game.challenges.Toxicity;
		tox.stacks++;
		if (tox.stacks > tox.maxStacks) tox.stacks = tox.maxStacks;
		if (tox.stacks > tox.highestStacks) tox.highestStacks = tox.stacks;
		updateToxicityStacks();
	}
	if (!game.global.mapsActive && game.global.challengeActive == "Life" && attacked) {
		var life = game.challenges.Life;
		var oldStacks = life.stacks;
		if (cell.mutation == "Living")
			life.stacks -= 5;
		else
			life.stacks++;
		if (life.stacks > life.maxStacks) life.stacks = life.maxStacks;
		if (life.stacks < 0) life.stacks = 0;
		if (life.stacks != oldStacks){
			game.global.soldierHealthMax = game.global.soldierHealthMax / (1 + (oldStacks / 10)) * (1 + (life.stacks / 10));
			game.global.soldierHealth = game.global.soldierHealth / (1 + (oldStacks / 10)) * (1 + (life.stacks / 10))
			if (game.global.soldierHealthMax < game.global.soldierHealth){
				game.global.soldierHealth = game.global.soldierHealthMax;
			}
			if (game.global.soldierHealth < 0) thisKillsTheTrimp();
			updateAllBattleNumbers();
		}
		updateLivingStacks();
	}
	if ((game.global.challengeActive == "Nom" || game.global.challengeActive == "Toxicity") && attacked){
		game.global.soldierHealth -= game.global.soldierHealthMax * 0.05;
		if (game.global.soldierHealth < 0) thisKillsTheTrimp();
	}
	else if (game.global.challengeActive == "Lead" && attacked && cell.health > 0){
		game.global.soldierHealth -= (game.global.soldierHealthMax * Math.min(game.challenges.Lead.stacks, 200) * 0.0003);
		if (game.global.soldierHealth < 0) thisKillsTheTrimp();
	}
	if ((game.global.voidBuff == "bleed" || cell.corrupted == 'corruptBleed' || cell.corrupted == 'healthyBleed') && wasAttacked) {
		var bleedMod = (cell.corrupted == 'healthyBleed') ? 0.3 : 0.2;
		game.global.soldierHealth -= (game.global.soldierHealth * bleedMod);
		if (game.global.soldierHealth < 1) thisKillsTheTrimp();
	}
	if (critTier == -1) critSpan.innerHTML = "<span style='color: cyan'>微弱!</span>";
	if (critTier == 1) critSpan.innerHTML = "暴击!";
	if (critTier == 2) critSpan.innerHTML = "<span style='color: orange'>暴击!</span>";
	if (critTier == 3){
		 critSpan.innerHTML = "<span style='color: red'>暴击!!</span>";
		redCritCounter++;
		if (redCritCounter >= 10) giveSingleAchieve("Critical Luck");
	}
	else redCritCounter = 0;
	var badCritText;
	if (badDodge) badCritText = "躲闪!";
	else if (badCrit && wasAttacked) badCritText = "暴击!";
	else badCritText = "";
	document.getElementById("badCrit").innerHTML =  badCritText;
    if (cell.health <= 0) game.global.battleCounter = 800;
    if (overkill) {
		var nextCell = (game.global.mapsActive) ? game.global.mapGridArray[cellNum + 1] : game.global.gridArray[cellNum + 1];
		if (nextCell) {
			nextCell.health = overkill;
			nextCell.OKcount = 1;
		}
	}
	else if (plaguebringer > 0) {
		var nextCell = (game.global.mapsActive) ? game.global.mapGridArray[cellNum + 1] : game.global.gridArray[cellNum + 1];
		if (nextCell) {
			if (!nextCell.plaguebringer) nextCell.plaguebringer = plaguebringer;
			else nextCell.plaguebringer += plaguebringer;
			if (!nextCell.plagueHits) nextCell.plagueHits = game.heirlooms.Shield.plaguebringer.currentBonus / 100;
			else nextCell.plagueHits += game.heirlooms.Shield.plaguebringer.currentBonus / 100;
		}		
	}
	if (game.global.challengeActive == "Devastation" && impOverkill){
		game.challenges.Devastation.lastOverkill = impOverkill;
	}
	if (cell.health <= 0 && typeof game.global.dailyChallenge.explosive !== 'undefined'){
		if (game.global.dailyChallenge.explosive.strength <= 15 || game.global.soldierHealthMax > game.global.soldierCurrentBlock){
			var explodeDamage = cellAttack * dailyModifiers.explosive.getMult(game.global.dailyChallenge.explosive.strength);
			var explodeAndBlock = explodeDamage - game.global.soldierCurrentBlock;
			if (explodeAndBlock < 0) explodeAndBlock = 0;
			if (pierce > 0){
				var explodePierce = pierce * explodeDamage;
				if (explodeAndBlock < explodePierce) explodeAndBlock = explodePierce;
			}
			game.global.soldierHealth -= explodeAndBlock;
			if (game.global.soldierHealth <= 0) thisKillsTheTrimp();
		}
	}
    if (makeUp) return;
    updateGoodBar();
	updateBadBar(cell);
}

function getNextVoidId(){
	for (var x = 0; x < game.global.mapsOwnedArray.length; x++){
		 if (game.global.mapsOwnedArray[x].location == "Void") return game.global.mapsOwnedArray[x].id;
	}
	return false;
}

function getPlayerCritChance(){ //returns decimal: 1 = 100%
	var critChance = 0;
	critChance += (game.portal.Relentlessness.modifier * game.portal.Relentlessness.level);
	critChance += (game.heirlooms.Shield.critChance.currentBonus / 100);
	if (game.talents.crit.purchased && game.heirlooms.Shield.critChance.currentBonus) critChance += (game.heirlooms.Shield.critChance.currentBonus * 0.005);
	if (Fluffy.isRewardActive("critChance")) critChance += 0.5;
	if (game.global.challengeActive == "Daily"){
		if (typeof game.global.dailyChallenge.trimpCritChanceUp !== 'undefined'){
			critChance += dailyModifiers.trimpCritChanceUp.getMult(game.global.dailyChallenge.trimpCritChanceUp.strength);
		}
		if (typeof game.global.dailyChallenge.trimpCritChanceDown !== 'undefined'){
			critChance -= dailyModifiers.trimpCritChanceDown.getMult(game.global.dailyChallenge.trimpCritChanceDown.strength);
		}
	}
	if (critChance > 3) critChance = 3;
	return critChance;
}

function getPlayerCritDamageMult(){
	var critMult = (((game.portal.Relentlessness.otherModifier * game.portal.Relentlessness.level) + (game.heirlooms.Shield.critDamage.currentBonus / 100)) + 1);
	if (game.portal.Relentlessness.level > 0) critMult += 1;
	return critMult;
}

function getMegaCritDamageMult(critTier){
	//critTier 1 is yellow and returns 1 from this. critTier 2 is orange, 3 is red.
	var base = 5;
	if (Fluffy.isRewardActive("megaCrit")) base += 2;
	if (game.talents.crit.purchased) base += 1;
	return Math.pow(base, critTier - 1);
}

function manageLeadStacks(remove){
	var challenge = game.challenges.Lead;

	var elem = document.getElementById("leadBuff");

	var determinedBuff = document.getElementById("determinedBuff");
	if ((game.global.world % 2) == 1){
		if (determinedBuff == null) {
			document.getElementById("goodGuyName").innerHTML += '&nbsp<span class="badge antiBadge" id="determinedBuff" onmouseover="tooltip(\'Determined\', \'customText\', event, \'Your Trimps are determined to succeed. They gain 50% attack and earn double resources from all sources.\')" onmouseout="tooltip(\'hide\')"><span class="icomoon icon-sun2"></span></span>';
			determinedBuff = document.getElementById("determinedBuff");
		}
		determinedBuff.style.display = "inline";
	}
	else if (determinedBuff != null) determinedBuff.style.display = "none";

	if (challenge.stacks <= 0){
		return;
	}
	if (remove && challenge.stacks) challenge.stacks--;

	if (elem === null) {
		document.getElementById("badGuyName").innerHTML += '&nbsp;<span class="badge badBadge" id="leadBuff" onmouseover="tooltip(\'Momentum\', null, event)" onmouseout="tooltip(\'hide\')"><span id="leadStacks">' + challenge.stacks + '</span><span id="momentumIcon" class="icomoon icon-hourglass"></span></span>';
	}
	else	document.getElementById("leadStacks").innerHTML = challenge.stacks;
	swapClass('icon-hourglass', 'icon-hourglass-' + (3 - Math.floor(challenge.stacks / 67)), document.getElementById('momentumIcon'));
}

function updateToxicityStacks(){
	var elem = document.getElementById("toxicityBuff");
	var stackCount = game.challenges.Toxicity.stacks;
	if (elem === null) {
		document.getElementById("badGuyName").innerHTML += '&nbsp;<span class="badge badBadge" id="toxicityBuff" onmouseover="tooltip(\'Toxic\', null, event)" onmouseout="tooltip(\'hide\')"><span id="toxicityStacks">' + stackCount + '</span><span class="icomoon icon-radioactive"></span></span>';
		return;
	}
	document.getElementById("toxicityStacks").innerHTML = stackCount;
}

function updateLivingStacks(){
	var elem = document.getElementById("livingBuff");
	var stackCount = game.challenges.Life.stacks;
	if (stackCount < game.challenges.Life.lowestStacks) game.challenges.Life.lowestStacks = stackCount;
	if (elem === null) {
		document.getElementById("goodGuyName").innerHTML += '&nbsp<span class="badge antiBadge" id="livingBuff" onmouseover="tooltip(\'Unliving\', null, event)" onmouseout="tooltip(\'hide\')"><span id="livingStacks">' + stackCount + '</span>&nbsp;<span style="margin-top: 2%" class="icomoon icon-shareable"></span></span>';		
		return;
	}
	document.getElementById("livingStacks").innerHTML = stackCount;
}

function checkCrushedCrit(){
	var badCrit = false;
	var canCritElem = document.getElementById("badCanCrit");
	if (game.global.soldierHealth > game.global.soldierCurrentBlock){
		canCritElem.style.display = "inline-block";
		if (Math.floor(Math.random() * 2) == 0) badCrit = true;
	}
	else canCritElem.style.display = "none";
	return badCrit;
}

function updateElectricityStacks(tipOnly){
	var elem = document.getElementById("debuffSpan");
	if (game.challenges.Electricity.stacks > 0){
		var number = game.challenges.Electricity.stacks * 10;
		var addText = '脆皮的攻击减少' + number + '%，且每个回合扣除' + number + '%的最大生命值数额的生命';
		elem.innerHTML = '<span class="badge trimpBadge" onmouseover="tooltip(\'通电\', \'customText\', event, \'' + addText + '\'); updateElectricityTip()" onmouseout="tooltip(\'hide\')">' + game.challenges.Electricity.stacks + '<span class="icomoon icon-power"></span></span>';
		if (tipOnly){
			document.getElementById('tipText').innerHTML = addText;
			return;
		}
		document.getElementById("goodGuyAttack").innerHTML = calculateDamage(game.global.soldierCurrentAttack, true, true);
	}
	else elem.innerHTML = "";
}

function updateElectricityTip(){
	tooltipUpdateFunction = function () {
		updateElectricityStacks(true);
	};
}

function updateAntiStacks(){
	var elem = document.getElementById("anticipationSpan");
	if (game.global.antiStacks > 0){
		var number = ((game.global.antiStacks * game.portal.Anticipation.level * game.portal.Anticipation.modifier));
		number = Math.floor(number * 100);
		var verb = game.jobs.Amalgamator.owned > 0 ? "prepare" : "populate";
		var s = game.global.antiStacks == 1 ? '' : '';
		elem.innerHTML = '<span class="badge antiBadge" onmouseover="tooltip(\'Anticipation\', \'customText\', event, \'你的脆皮获得了 ' + number + '% 的额外伤害，因为需要 ' + game.global.antiStacks + ' 秒' + s + ' 来生产 ' + verb + '.\')" onmouseout="tooltip(\'hide\')">' + game.global.antiStacks + '<span class="icomoon icon-target2"></span></span>';
	}
	else elem.innerHTML = "";
}

function updateTitimp(){
	var elem = document.getElementById("titimpBuff");
	if (game.global.titimpLeft < 1){
		elem.innerHTML = "";
		return;
	}
		var number = Math.floor(game.global.titimpLeft);
		elem.innerHTML = '<span class="badge antiBadge" onmouseover="tooltip(\'Titimp\', \'customText\', event, \'多亏了Titimp！你的脆皮攻击翻倍\');" onmouseout="tooltip(\'hide\')">' + number + '<span class="icomoon icon-hammer"></span></span>';
}

function updateNomStacks(number){
	var elem = document.getElementById('nomStack');
	if (elem == null){
		document.getElementById('badGuyName').innerHTML += ' <span class="badge badBadge" onmouseover="tooltip(\'Nom\', \'customText\', event, \'这个坏家伙因为吃脆皮而变得丰满。 每堆增加25％攻击伤害\');" onmouseout="tooltip(\'hide\')"><span id="nomStack">' + number + '</span><span class="glyphicon glyphicon-scale"></span></span>';
	}
	else elem.innerHTML = number;
}

function updateBalanceStacks(){
	var elem = document.getElementById('balanceSpan');
	if (elem === null) {
		document.getElementById("goodGuyName").innerHTML += "<span id='balanceSpan'></span>";
		elem = document.getElementById("balanceSpan");
	}
	var stacks = game.challenges.Balance.balanceStacks;
	if (stacks > 0) {
		elem.style.display = "inline-block";
		elem.innerHTML = ' <span class="badge antiBadge" onmouseover="tooltip(\'不平衡\', \'customText\', event, \'你的脆皮的生命值减少' + game.challenges.Balance.getHealthMult(true) + '，但是所有脆皮的收集速度提高' + game.challenges.Balance.getGatherMult(true) + '。 在世界上杀死敌人你将获得一次叠加，在地图上杀死敌人将失去一次叠加。\');" onmouseout="tooltip(\'hide\')"><span id="balanceStack">' + stacks + '</span><span class="icomoon icon-balance-scale"></span></span>';
	}
	else elem.style.display = "none";
}

function buyEquipment(what, confirmed, noTip) {
	if (game.options.menu.pauseGame.enabled) return;
	if (!confirmed && game.options.menu.lockOnUnlock.enabled == 1 && (new Date().getTime() - 1000 <= game.global.lastUnlock)) return;
	var toBuy = game.equipment[what];
	var purchaseAmt = 1;
	if (!toBuy.percent) purchaseAmt = (game.global.buyAmt == "Max") ? calculateMaxAfford(toBuy, false, true) : game.global.buyAmt;
	if (typeof toBuy === 'undefined') return;
	var canAfford = canAffordBuilding(what, null, null, true);
	if (canAfford) {
		canAffordBuilding(what, true, null, true);
		levelEquipment(what, purchaseAmt);
	}
	if (!noTip) tooltip(what, "equipment", "update");
}

function levelEquipment(what, manualNumber) {
	var toBuy = game.equipment[what];
	var number = (manualNumber) ? manualNumber : game.global.buyAmt;
	toBuy.level += number;
	var stat;
	if (toBuy.blockNow) stat = "block";
	else stat = (typeof toBuy.health !== 'undefined') ? "health" : "attack";
	var toAdd = (toBuy[stat + "Calculated"] * number);
	game.global[stat] += toAdd;
	game.global.difs[stat] += toAdd;
}

function affordOneTier(what, whereFrom, take) {
    //take, true/false to take resources or not or something like that probably
    //don't send shit in here to take without checking first though
    var buyFrom = game[whereFrom];
    var toBuy = game.equipment[what];
    for (var item in toBuy.cost) {
        var cost;
        if (typeof toBuy.cost[item] === 'function') cost = toBuy.cost[item]();
        if (typeof toBuy.cost[item][1] !== 'undefined') cost = resolvePow(toBuy.cost[item], toBuy);
        if (cost > buyFrom[item].owned) return false;
        if (take) buyFrom[item].owned -= cost;
    }
    return true;
}

function fadeIn(elem, speed) {
	elem = document.getElementById(elem);
	if (elem.style.display != "none" && elem.style.visibility != "hidden" && elem.style.opacity != 0) return;
    elem.style.opacity = 0;
    if (elem.style.display == "none") elem.style.display = "block";
    if (elem.style.visibility == "hidden") elem.style.visibility = "visible";
	if (typeof game.options.menu.fadeIns && game.options.menu.fadeIns.enabled == 0) {
		elem.style.opacity = 1;
		return;
	}
	var total = 100 * speed;
	var start = performance.now();
    var fadeCallback = function (timer) {
		var opacity = (timer - start) / total;
        elem.style.opacity = opacity;
        if (opacity < 1) {
            requestAnimationFrame(fadeCallback);
        }
    };
	requestAnimationFrame(fadeCallback);
}

function autoTrap() {
	if (game.resources.food.owned >= 10 && game.resources.wood.owned >= 10){
		game.resources.food.owned -= 10;
		game.resources.wood.owned -= 10;
		game.buildings.Trap.purchased++;
		if (game.global.buildingsQueue[0] == "Trap.1"){
			setNewCraftItem();
			return;
		}
		startQueue("Trap", 1);
	}
}

function planetBreaker(){
	if (game.global.challengeActive == "Eradicated") giveSingleAchieve("Screwed");
	if (game.global.roboTrimpLevel > 0) document.getElementById("chainHolder").style.visibility = "visible";
	game.stats.planetsBroken.valueTotal++;
	game.global.brokenPlanet = true;
	document.getElementById("wrapper").style.background = "url(css/bg2_vert.png) center repeat-y";
	document.getElementById("wrapper").className = "wrapperBroken";
	tooltip("The Improbability", null, 'update');
	if (!game.global.autoUpgradesAvailable){
		game.global.autoUpgradesAvailable = true;
		document.getElementById("autoUpgradeBtn").style.display = "block";
	}
	game.global.prestige.cost = 53;
	document.getElementById("upgradesHere").innerHTML = "";
	for (var item in game.equipment){
		prestigeEquipment(item, true, true);
	}
	unlockUpgrade("Formations");
	buffVoidMaps();
	if (game.stats.battlesLost.value <= 5) giveSingleAchieve("Unbroken");
}

function restoreGrid(){
	document.getElementById("extraGridInfo").style.display = "none";
	document.getElementById("grid").style.display = "block";
}

function setFormation(what) {
	if (what) {
		if (game.options.menu.pauseGame.enabled) return;
		what = parseInt(what, 10);
		swapClass("formationState", "formationStateDisabled", document.getElementById("formation" + game.global.formation));
		if (what == 4 && game.global.formation != 4){
			if (game.global.mapsActive) game.global.waitToScryMaps = true;
			else game.global.waitToScry = true;
		}
		if (game.global.mapsActive){
			if (what != 4) game.global.canScryCache = false;
			else if (game.global.lastClearedMapCell == -1) game.global.canScryCache = true;
		}
		if (game.global.soldierHealth > 0) {
			var health = 1;
			var block = 1;
			var attack = 1;
			switch (game.global.formation){
				case 1:
					health /= 4;
					attack *= 2;
					block *= 2;
					break;
				case 2:
					health *= 2;
					attack /= 4;
					block *= 2;
					break;
				case 3:
					health *= 2;
					attack *= 2;
					block /= 4;
					break;
				case 4:
					health *= 2;
					attack *= 2;
					block *= 2;
					break;
			}
			switch (what){
				case 1:
					health *= 4;
					attack /= 2;
					block /= 2;
					break;
				case 2:
					health /= 2;
					attack *= 4;
					block /= 2;
					break;
				case 3:
					health /= 2;
					attack /= 2;
					block *= 4;
					break;
				case 4:
					health /= 2;
					attack /= 2;
					block /= 2;
					break;
			}
			var oldHealth = game.global.soldierHealthMax;
			game.global.soldierHealthMax *= health;
			game.global.soldierHealth -= oldHealth - game.global.soldierHealthMax;
			if (game.global.soldierHealth <= 0) game.global.soldierHealth = 0;
			game.global.soldierCurrentBlock *= block;
			game.global.soldierCurrentAttack *= attack;
			updateAllBattleNumbers(true);
		}
		game.global.formation = what;
	}
	else swapClass("formationState", "formationStateDisabled", document.getElementById("formation0"));
	var toSet = (what) ? what : game.global.formation;
	swapClass("formationState", "formationStateEnabled", document.getElementById("formation" + toSet));
}

function unlockFormation(what){
	if (what != "start" && !game.upgrades.Formations.done) return;
	if (what == "start" || (what == "all" && game.upgrades.Formations.done == 1)){
		document.getElementById("formation0").style.display = "block";
		document.getElementById("formation1").style.display = "block";
	}
	if (what == 2 || (game.upgrades.Dominance.done == 1)){
		document.getElementById("formation2").style.display = "block";
	}
	if (what == 3 || (game.upgrades.Barrier.done == 1)){
		document.getElementById("formation3").style.display = "block";
	}
	if ((game.global.world >= 60 && game.global.highestLevelCleared >= 180) && (what == "start" || what == "all" || what == 4)){
		document.getElementById("formation4").style.display = "block";
	}
}

function hideFormations() {
	for (var x = 0; x < 5; x++){
		document.getElementById("formation" + x).style.display = "none";
	}
}

//Bones

var boneTemp = {
	selectedBoost: 0,
	selectedImport: "",
	selectedMisc: "",
	bundle: [],
	bundleMode: false
};

function showBones() {
	document.getElementById("boneWrapper").style.display = "block";
	selectBoost(0);
	updateBones();
	boneTemp.selectedImport = "";
	updateImports(0);
	hidePurchaseBones();
	boneTemp.bundle = [];
	if (game.global.totalPortals == 0) {
		document.getElementById("buyHeliumArea").style.display = "none";
		document.getElementById("buyHeirloomArea").style.display = "none";
	}
	else {
		if (game.global.totalPortals >= 5) {
			document.getElementById("buyHeirloomArea").style.display = "block";
			setHeirRareText(true);
		}
		else document.getElementById("buyHeirloomArea").style.display = "none";
	}
	updateImportButton("首先，选中一个外来物种", false);
	var heliumGainedArea = document.getElementById("heliumGainedMisc");
	var heDescElem = document.getElementById("bonePortalDescription");
	var heText = "+ " + prettify(boostHe(true)) + " 氦";
	var heDesc = "获取一次氦，";
	if (game.stats.bestTokens.valueTotal >= 3) {
		heDesc += (game.stats.bestFluffyExp.valueTotal > 0) ? ", " : " and ";
		heDesc += "Nature Tokens";
		heText += ", " + prettify(Math.floor(game.stats.bestTokens.valueTotal / 3)) + "x each Token";
	}
	if (game.stats.bestFluffyExp.valueTotal > 0 && Fluffy.getLevel() < 10) {
		heDesc += " and Fluffy Exp";
		heText += ", " + prettify(game.stats.bestFluffyExp.valueTotal) + " Fluffy Exp";
	}
	else document.getElementById('boneBuyRow').style.height = "27vw";
	heDesc += "其数量与你最好的一轮所获取的数量相同。";
	if (game.stats.bestFluffyExp.valueTotal > 0){
		if (Fluffy.getLevel() == 10) {
			heDesc += "<br/><b>Fluffy is at Level 10 and will not gain Exp!";
		}
		else
			heDesc += "<br/>(Fluffy Exp does not include bonuses from Dailies)";
		document.getElementById('boneBuyRow').style.height = "28vw";
	}
	heliumGainedArea.innerHTML = heText;
	heDescElem.innerHTML = heDesc;
	displaySingleRunBonuses();
	if (typeof kongregate === 'undefined') return;
	if (countUnpurchasedImports() < 4) {
		document.getElementById("bundleRow").style.display = "none";
		document.getElementById("getBundleBtn").style.display = "none";
	}
}

function updateImportButton(text, enabled){
	var elem = document.getElementById("importPurchaseBtn");
	elem.innerHTML = text + " (50 骨头)";
	swapClass('boneBtnState', 'boneBtnState' + ((enabled) ? 'On' : 'Off'), elem);
}

function updateImports(which) {
	var count = 0;
	var world = document.getElementById("importsTableWorld" + which);
	var maps = document.getElementById("importsTableMaps" + which);
	world.innerHTML = "";
	maps.innerHTML = "";
	for (var item in game.unlocks.imps){
		var badGuy = game.badGuys[item];
		var elem = (badGuy.location == "World") ? world : maps;
		count++;
		var row = elem.insertRow();
		var toRun = (which == 1) ? 'addToBundle' : 'selectImp';
		toRun += '("' + item + '")';
		if (game.unlocks.imps[item]){
			row.className = 'importOwned';
		}
		else
		row.setAttribute('onclick', toRun);
		row.id = (which == 1) ? item + "1" : item;
		var name = row.insertCell();
		name.className = "importPreviewName";
		name.innerHTML = item;
		var loot = row.insertCell();
		loot.className = "importPreviewLoot";
		loot.innerHTML = badGuy.dropDesc;
	}
}

function selectImp(name){
	if (boneTemp.selectedImport) document.getElementById(boneTemp.selectedImport).className = "";
	document.getElementById(name).className = "tealColor";
	boneTemp.selectedImport = name;
	updateImportButton("购买 " + name, true);

}


function hideBones() {
	document.getElementById("boneWrapper").style.display = "none";
	updateSkeleBtn();
}

function simpleSeconds(what, seconds) {
		var compatible = ["Farmer", "Lumberjack", "Miner", "Dragimp", "Explorer"];
		var jobName;
		switch (what) {
			case "food":
				jobName = "Farmer";
				break;
			case "wood":
				jobName = "Lumberjack";
				break;
			case "metal":
				jobName = "Miner";
				break;
			case "gems":
				jobName = "Dragimp";
				break;
			case "fragments":
				jobName = "Explorer";
				break;
			case "science":
				jobName = "Scientist";
				break;
		}
		var job = game.jobs[jobName];
		var amt = job.owned * job.modifier * seconds;
		amt += (amt * game.portal.Motivation.level * game.portal.Motivation.modifier);
		if (game.portal.Motivation_II.level > 0) amt *= (1 + (game.portal.Motivation_II.level * game.portal.Motivation_II.modifier));
		if (game.portal.Meditation.level > 0) amt *= (1 + (game.portal.Meditation.getBonusPercent() * 0.01));
		if (game.jobs.Magmamancer.owned > 0 && what == "metal") amt *= game.jobs.Magmamancer.getBonusPercent();
		if (game.global.challengeActive == "Meditate") amt *= 1.25;
		else if (game.global.challengeActive == "Size") amt *= 1.5;
		if (game.global.challengeActive == "Toxicity"){
			var toxMult = (game.challenges.Toxicity.lootMult * game.challenges.Toxicity.stacks) / 100;
			amt *= (1 + toxMult);
		}
		if (game.global.challengeActive == "Watch") amt /= 2;
		if (game.global.challengeActive == "Lead" && ((game.global.world % 2) == 1)) amt *= 2;
		if (game.global.challengeActive == "Balance"){
			amt *= game.challenges.Balance.getGatherMult();
		}
		if (game.global.challengeActive == "Daily"){
			if (typeof game.global.dailyChallenge.famine !== 'undefined' && what != "fragments" && what != "science"){
				amt *= dailyModifiers.famine.getMult(game.global.dailyChallenge.famine.strength);
			}
			if (typeof game.global.dailyChallenge.dedication !== 'undefined'){
				amt *= dailyModifiers.dedication.getMult(game.global.dailyChallenge.dedication.strength);
			}
		}
		if (game.global.challengeActive == "Decay"){
			amt *= 10;
			amt *= Math.pow(0.995, game.challenges.Decay.stacks);
		}
		if (getEmpowerment() == "Wind"){
			amt *= (1 + (game.empowerments.Wind.getCombatModifier()));
		}
		amt = calcHeirloomBonus("Staff", jobName + "Speed", amt);
		if (game.global.playerGathering == what){
			if ((game.talents.turkimp4.purchased || game.global.turkimpTimer > 0) && (what == "food" || what == "metal" || what == "wood")){
				var tBonus = 1.5;
				if (game.talents.turkimp4.purchased) tBonus = 2;
				else if (game.talents.turkimp3.purchased) tBonus = 1.75;
				amt *= tBonus;
			}
			amt += getPlayerModifier() * seconds;
		}
		return amt;
}

function scaleToCurrentMap(amt, ignoreBonuses, ignoreScry) {
    var map = getCurrentMapObject();
	var world = map.level;
	var compare = game.global.world;
	if (world > compare && map.location != "Bionic"){
		amt *= Math.pow(1.1, (world - compare));
	}
	else {
		if (game.talents.mapLoot.purchased)
			compare--;
		if (world < compare){
			//-20% loot compounding for each level below world
			amt *= Math.pow(0.8, (compare - world));
		}
	}
	//Add map loot bonus
	amt = Math.round(amt * map.loot);
	if (ignoreBonuses) return amt;
	if (game.unlocks.impCount.Magnimp) amt *= Math.pow(1.003, game.unlocks.impCount.Magnimp);
	if (game.portal.Looting.level) amt += (amt * game.portal.Looting.level * game.portal.Looting.modifier);
	if (game.portal.Looting_II.level) amt *= (1 + (game.portal.Looting_II.level * game.portal.Looting_II.modifier));
	if (!ignoreScry && isScryerBonusActive()) amt *= 2;
	return amt;
}

//12 - 43200
//36 - 129600
function addBoost(level, previewOnly) {
	var compatible = ["Farmer", "Lumberjack", "Miner", "Dragimp", "Explorer"];
	var storage = ["Barn", "Shed", "Forge"];
	var add = 43200;
	if (level == 1) add *= 3;
	for (var x = 0; x < compatible.length; x++){
		var job = game.jobs[compatible[x]];
		var resource = game.resources[job.increase];
		var amt = job.owned * job.modifier * add;
		amt += (amt * game.portal.Motivation.level * game.portal.Motivation.modifier);
		if (game.portal.Motivation_II.level > 0) amt *= (1 + (game.portal.Motivation_II.level * game.portal.Motivation_II.modifier));
		if (game.portal.Meditation.level > 0) amt *= (1 + (game.portal.Meditation.getBonusPercent() * 0.01));
		if (game.jobs.Magmamancer.owned > 0 && job.increase == "metal") amt *= game.jobs.Magmamancer.getBonusPercent();
		if (game.global.challengeActive == "Meditate") amt *= 1.25;
		if (game.global.challengeActive == "Toxicity"){
			var toxMult = (game.challenges.Toxicity.lootMult * game.challenges.Toxicity.stacks) / 100;
			amt *= (1 + toxMult);
		}
		if (game.global.challengeActive == "Watch") amt /= 2;
		if (game.global.challengeActive == "Lead" && ((game.global.world % 2) == 1)) amt *= 2;
		amt = calcHeirloomBonus("Staff", compatible[x] + "Speed", amt);
		if (typeof storage[x] !== 'undefined'){
			var tempTotal = amt + resource.owned;
			var tempMax = resource.max;
			var structCount = 0;
			var storageBuilding = game.buildings[storage[x]];
			var packMod = game.portal.Packrat.level * game.portal.Packrat.modifier;
			while (tempTotal > calcHeirloomBonus("Shield", "storageSize", tempMax + (tempMax * packMod))){
				var nextCost = calculatePercentageBuildingCost(storage[x], job.increase, 0.25, tempMax);
				if (!previewOnly){
					resource.max *= 2;
					storageBuilding.purchased++;
					storageBuilding.owned++;
				}
				tempMax *= 2;
				tempTotal -= nextCost;
				amt -= nextCost;
				structCount++;
			}
			document.getElementById(storage[x] + "Added").innerHTML = structCount;
		}
		if (amt < 0) toggleMinusRes(true);
		if (!previewOnly) resource.owned += amt;
		if (!previewOnly && job.increase == "gems"){
			game.stats.gemsCollected.value += amt;
			checkAchieve("totalGems");
		}
		document.getElementById(job.increase + "BoostPreview").innerHTML = prettify(amt);
	}
}

function toggleMinusRes(on){
	document.getElementById("minusRes").style.display = (on) ? "block" : "none";
	document.getElementById("boostPreview").style.display = (on) ? "none" : "table";
}

function selectBoost(num){
	toggleMinusRes();
	addBoost(num, true);
	var other = (num === 0) ? 1 : 0;
	swapClass('boneBtnState', 'boneBtnStateOff', document.getElementById("boost" + other));
	swapClass('boneBtnState', 'boneBtnStateTeal', document.getElementById("boost" + num));
}

function purchaseBoost(num){
	var cost = (num === 0) ? 20 : 40;
	if (game.global.b < cost) {showPurchaseBones(); return;}
	game.global.b -= cost;
	updateBones();
	addBoost(num);
	addBoost(num, true);
	successPurchaseFlavor();
}

function checkBundleForImp(what, justHighlight){
	for (var x = 0; x < boneTemp.bundle.length; x++) {
		if (boneTemp.bundle[x] == what) {
			if (!justHighlight) return true;
			document.getElementById("what").style.border = "2px solid green";
		}
	}
	return false;
}
//#337ab7
function addToBundle(what) {
	var bundleCount = boneTemp.bundle.length;
	var bundleBtn = document.getElementById("addBundleBtn");
	var bundleTitle = document.getElementById("bundleTitle");
	var bundleBtnColor;
	var bundleBtnText;
	var titleText;
	var rowColor;
	if (checkBundleForImp(what)){
		bundleCount--;
		rowColor = "";
		boneTemp.bundle.splice(boneTemp.bundle.indexOf(what), 1);
	}
	else {
		if (bundleCount == 4) return;
		boneTemp.bundle.push(what);
		bundleCount++;
		rowColor = "tealColor";
	}
	if (bundleCount == 4){
		bundleBtnColor = "#337ab7";
		bundleBtnText = 'Buy Bundle And 100 Bones (100 <span class="kredSpan"><img class="kredImg" src="imgs/kred_single.png"></img></span>)';
		titleText = "Everything seems to be in order here";
	}
	else{
		bundleBtnColor = "grey";
		bundleBtnText = "Select " + (4 - bundleCount) + " more Imps!";
		titleText = "Select " + (4 - bundleCount) + " Exotic Imports!";
	}
	bundleBtn.style.backgroundColor = bundleBtnColor;
	bundleBtn.innerHTML = bundleBtnText;
	bundleTitle.innerHTML = titleText;
	document.getElementById(what + "1").className = rowColor;
}

function purchaseBundleClicked(){
	if (boneTemp.bundle.length != 4) return;
	kredPurchase("0.imports");
}

function purchaseBundle(){
	game.global.b += 100;
	updateBones();
	boneTemp.selectedImport = "";
	for (var x = 0; x < boneTemp.bundle.length; x++){
		game.unlocks.imps[boneTemp.bundle[x]] = true;
	}
	updateImports(0);
	boneTemp.bundle = [];
}

function purchaseImport(){
	if (game.global.b < 50) {showPurchaseBones(); return;}
	if (!boneTemp.selectedImport) return;
	game.global.b -= 50;
	updateBones();
	game.unlocks.imps[boneTemp.selectedImport] = true;
	boneTemp.selectedImport = "";
	updateImports(0);
	boneTemp.bundle = [];
	updateImportButton("First, select an Imp", false);
	try{
	if (typeof ga !== 'undefined') ga('send', 'event', 'MTX', "Import");
		}
	catch(err){
		console.debug(err);
	}
}

function purchaseMisc(what){
	var cost;
	var result;
	switch (what){
		case "helium":
			if (game.global.b < 100) {showPurchaseBones(); return;}
			game.global.b -= 100;
			boostHe();
			break;
		case "heirloom":
			if (game.global.b < 30) return;
			game.global.b -= 30;
			createHeirloom(game.global.highestLevelCleared + 1, true);
			break;
	}
	updateBones();
	successPurchaseFlavor();
}

function purchaseSingleRunBonus(what){
	if (what == "heliumy" && game.global.runningChallengeSquared) return;
	if (what == "quickTrimps" && game.global.challengeActive == "Trapper") return;
	var bonus = game.singleRunBonuses[what];
	if (!bonus) return;
	if (bonus.owned) return;
	if (game.global.b < bonus.cost) {
		showPurchaseBones();
		return;
	}
	game.global.b -= bonus.cost;
	bonus.owned = true;
	if (bonus.fire) bonus.fire();
	updateBones();
	successPurchaseFlavor();
	displaySingleRunBonuses();
}

function displaySingleRunBonuses(){
	var anyPortals = (game.global.totalPortals == 0);
	var html = "<div class='boneBuyTitle'>单轮加成</div><div class='boneBuyDesc'>这些加成本轮生效，下一" + ((anyPortals) ? "soft reset" : "轮") + "停止。明智地使用它们!</div>";
	for (var item in game.singleRunBonuses){
		var bonus = game.singleRunBonuses[item];
		html += "<div id='" + item + "SingleBonusBox' class='singleBonusBox'>";
		document.getElementById('singleRunBonuses').style.marginTop = (anyPortals) ? "0" : "-2.5%";
		var btnClass;
		var btnText;
		if (bonus.owned){
			 btnClass = 'boneBtnStateOff';
			 btnText = 'Active!';
		}
		else {
			if (item == "heliumy" && game.global.runningChallengeSquared){
				btnClass = 'boneBtnStateOff';
				btnText = "Disabled on C<sup>2</sup>";
			}
			else if (item == "quickTrimps" && game.global.challengeActive == "Trapper"){
				btnClass = 'boneBtnStateOff';
				btnText = "Disabled on Trapper";
			}
			else{
				if (game.global.b < bonus.cost)
					btnClass = 'boneBtnStateOff'
				else 
					btnClass = 'boneBtnStateOn';
				btnText = bonus.name + " (" + bonus.cost + " 骨头)";
			}
		}
		html += "<div class='boneBtn " + btnClass + " pointer noselect' id='" + item + "PurchaseBtn'";
		if (btnClass == 'boneBtnStateOn')
			html += " onclick='tooltip(\"Confirm Purchase\", null, \"update\", \"" + bonus.confirmation + "\", \"purchaseSingleRunBonus(&#39;" + item + "&#39;)\", 20)'>" + btnText + "</div>";
		else
			html += ">" + btnText + "</div>";
		html += bonus.text;
		html += "</div>";
	}
	document.getElementById("singleRunBonuses").innerHTML = html;
}

function successPurchaseFlavor(){
	document.getElementById("boneFlavorRow").innerHTML = "骨法商人拿走了骨头，施展法术，然后开始做汤";
}

function updateBones() {
	document.getElementById("bonesOwned").innerHTML = prettify(game.global.b) + " " + ((game.global.b == 1) ? "骨头" : "骨头");
	updateSkeleBtn();
	displaySingleRunBonuses();
	updateBoneBtnColors();
}

function updateBoneBtnColors(){
	var prices = {
		boostPurchaseBtn0: 20,
		boostPurchaseBtn1: 40,
		heliumPurchaseBtn: 100,
		heirloomPurchaseBtn: 30
	}
	for (var item in prices){
		var elem = document.getElementById(item);
		if (!elem) continue;
		var swapTo = game.global.b >= prices[item] ? "boneBtnStateOn" : "boneBtnStateOff";
		swapClass("boneBtnState", swapTo, elem);
	}
}

function boostHe(checkOnly) {
	var level = game.global.highestLevelCleared - 19;
	var amt = 30;
	if (!checkOnly) {
		if (!game.global.canRespecPerks) game.global.bonePortalThisRun = true;
		game.global.canRespecPerks = true;
	}
	if (level <= 0) {
		if (checkOnly) return amt;
		game.global.heliumLeftover += amt;
		game.global.totalPortals++;
		checkAchieve("portals", null, false, true);
		displayPerksBtn();
		return;
	}
	for (var x = 0; x < level; x++) {
		var tempAmt = 0;
		amt += Math.round(Math.pow(1.23, Math.sqrt(x + 1)));
		amt += (x + 1);
	}
	amt = (amt > game.global.bestHelium) ? amt : game.global.bestHelium;
	if (checkOnly) return amt;
	if (amt >= 1189998819991197253) giveSingleAchieve("HeMergency");
	game.global.heliumLeftover += amt;
	game.global.totalHeliumEarned += amt;
	if (game.stats.bestFluffyExp.valueTotal > 0){
		game.global.fluffyExp += game.stats.bestFluffyExp.valueTotal;
		Fluffy.handleBox();
	}
	if (game.stats.bestTokens.valueTotal >= 3){
		var tokenReward = Math.floor(game.stats.bestTokens.valueTotal / 3)
		game.empowerments.Poison.tokens += tokenReward;
		game.empowerments.Wind.tokens += tokenReward;
		game.empowerments.Ice.tokens += tokenReward;
		if (game.global.buyTab == "nature")
			updateNatureInfoSpans();
	}

	game.global.totalPortals++;
	checkAchieve("portals", null, false, true);
	checkAchieve("totalHelium");
	displayPerksBtn();
}

function countUnpurchasedImports(){
	var count = 0;
	for (var item in game.unlocks.imps){
		if (!game.unlocks.imps[item]) count++;
	}
	return count;
}

function showPurchaseBones() {
	if (typeof kongregate === 'undefined') return;
	document.getElementById("boneWrapper0").style.display = "none";
	document.getElementById("boneWrapper1").style.display = "block";
}

function hidePurchaseBones() {
	document.getElementById("boneWrapper0").style.display = "block";
	var elem1 = document.getElementById("boneWrapper1");
	if (elem1){
		elem1.style.display = "none";
		document.getElementById("boneWrapper2").style.display = "none";
	}
}

function kredPurchase(what) {
	if (typeof kongregate === 'undefined') return;
	boneTemp.waitingFor = what;
	if (what == "0.imports" && boneTemp.bundle.length != 4) {
		hidePurchaseBones();
		document.getElementById("addToBundleRow").style.border = "1px solid green";
		return;
	}
	kongregate.mtx.purchaseItems([what], onPurchaseResult);
}

function startBundling(){
	document.getElementById("boneWrapper1").style.display = "none";
	document.getElementById("boneWrapper2").style.display = "block";
	document.getElementById("bundleTitle").innerHTML = "Select 4 Exotic Imports!";
	var btn = document.getElementById("addBundleBtn");
	btn.innerHTML = "First, Select 4 Imps";
	btn.style.backgroundColor = "grey";
	boneTemp.bundle = [];
	updateImports(1);
}

function onPurchaseResult(result) {
	if (!result.success)	{
		boneTemp.waitingFor = "";
		return;
	}
	if (result.success){
		var split = boneTemp.waitingFor.split('.');
		if (split[1] == "bones") game.global.b += parseInt(split[0], 10);
		if (split[1] == "imports") purchaseBundle();
		updateBones();
		hidePurchaseBones();
		var num = (split[0] > 0) ? split[0] : "";
		var tooltipText = "Your purchase of ";
		tooltipText += (split[0] > 0) ? split[0] + " bones has completed successfully!" : "the Exotic Imp-Ort Bundle has completed successfully, and your new Bad Guys will start spawning in your next Zone/map!";
		tooltipText += " Below is the export code for your save file. <b>Please copy, paste, and back this up to somewhere safe, just in case.</b> Thank you for your support!";
		tooltip('导出', null, 'update', tooltipText);
		boneTemp.waitingFor = "";
	}
}

var sugarRush = {
	getAttackStrength: function () {
		return (2 + Math.floor((game.global.world - 200) / 100));
	},
	icon: 'icomoon icon-bag',
	timeEach: 600,
	maxTime: 1500,
	iconEnabled: false,
	start: function () {
		game.global.sugarRush += this.timeEach;
		if (game.global.sugarRush > this.maxTime)
			game.global.sugarRush = this.maxTime;
		this.enableIcon();
	},
	getIconElement: function (){
		return document.getElementById('sugarRushBuff');
	},
	enableIcon: function () {
		var elem = this.getIconElement();
		if (!elem){
			document.getElementById('goodGuyName').innerHTML += ' <span class="badge antiBadge sugarRushBadge" id="sugarRushBuff" onmouseover="tooltip(\'Sugar Rush\', \'customText\', event, sugarRush.tooltipText())" onmouseout="tooltip(\'hide\')"><span class="' + this.icon + '"></span></span>';			
			return;
		}
		elem.style.display = 'inline-block';
		this.iconEnabled = true;
	},
	disableIcon: function () {
		var elem = this.getIconElement();
		if (!elem)
			return;
		elem.style.display = 'none';
		this.iconEnabled = false;
	},
	tick: function () {
		game.global.sugarRush--;
		if (game.global.sugarRush <= 0){
			game.global.sugarRush = 0;
			this.disableIcon();
			return;
		}
		if (!this.iconEnabled) this.enableIcon();
	},
	tooltipText: function () {
		var timeLeft = game.global.sugarRush;
		if (timeLeft < 60) {
			timeLeft += " second" + ((timeLeft == 1) ? "" : "s");
		}
		else {
			timeLeft = Math.floor(timeLeft / 60);
			timeLeft += " minute" + ((timeLeft == 1) ? "" : "s");
		}
		return "Trimps are not at all used to sugar, but they seem to be really enjoying it! <b>Attack is increased " + this.getAttackStrength() + "X for the next " + timeLeft + "</b>.";
	}
}

function givePumpkimpLoot(){
	var eligible = ["food", "food", "food", "nothing", "nothing", "nothing", "nothing", "nothing", "wood", "metal"];
	var success = [
		"Oops, that Pumpkimp just wanted to give you some candy. You found ",
		"When checking the Pumpkimp for loot, you find a pouch that says to take one. You take all ",
		"那个Pumpkimp给了你 ",
		"Right before you finish the Pumpkimp off, it throws a large bag at you and rolls away. Inside, you find ",
		"这个Pumpkimp仍然很好，所以你让你的脆皮雕刻它。在里面,他们发现了 ",
		"那个Pumpkimp被砸得粉碎，他给了你。 ",
		"你挖掘出Pumpkimp的剩余部分，然后找到了 ",
		"Aww man, there's seeds and orange stuff everywhere. At least you found ",
		"You're not wearing a costume, but you'll still take this "
	];
	var failures = [
		"那个Pumpkimp什么也没给你!真是个混蛋!",
		"Lame, this one just has stringy stuff in it.",
		"You crack open your newly captured Pumpkimp and find... Nothing!",
		"Right before you finish the Pumpkimp off, it winks at you and rolls away. That was pretty weird.",
		"As the Pumpkimp takes his final breath, he manages to mutter the word 'Trick'. No loot here.",
		"You search the Pumpkimp for loot, but find nothing. Someone wasn't in the holiday spirit!",
		"That Pumpkimp rolled away before you could finish him off, yelling stuff about tricks."
	];
	var attackBuff = [
		"The Pumpkimp suddenly bursts, spewing huge amounts of candy into the air. Your Trimps scramble about to pick up all they can and gain Sugar Rush!",
		"This Pumpkimp was so large that your Trimps could feast for weeks on all the candy inside. Oh, nope, looks like they'll be done in about 10 minutes. In the mean time, they should have a bit of extra energy!",
		"This Pumpkimp was totally stuffed with various types of sugary things. You give them all to your Trimps, which results in a huge boost of energy!",
		"Your Trimps have begun carrying pillowcases with them in hopes of a legendary Pumpkimp like the one you just found. Filled to the brim with sugary goodies, this Pumpkimp should sate your Trimps for a few minutes!"
	];
	if (game.jobs.Dragimp.owned > 0) eligible.push("gems");
	if (game.upgrades.Explorers.allowed > 0) eligible.push("fragments");
	if (game.global.world > 200 && !game.global.mapsActive) eligible.push("attack");
	//I really wanted to call it Pumpkin Seed, but this can probably be useful for other holidays without bogging down the save file more.
	var roll = (game.global.mapsActive) ? Math.floor(Math.random() * eligible.length) : getRandomIntSeeded(game.global.holidaySeed++, 0, eligible.length);
	var item = eligible[roll];
	if (item == "nothing") {
		var failNumber = Math.floor(Math.random() * failures.length);
		message(failures[failNumber], "Loot", "*magic-wand", "pumpkimp", "events");
		return;
	}
	if (item == "attack"){
		sugarRush.start();
		var rollNumber = Math.floor(Math.random() * attackBuff.length);
		message(attackBuff[rollNumber], "Loot", "*bag", "pumpkimp", "events");
		return;
	}
	var lootStrength = (game.global.mapsActive) ? 3 : 20;
	var minRoll = (game.global.mapsActive) ? 1 : 30;
	var seconds = Math.floor(Math.random() * lootStrength) + minRoll;
	var lootRoll = Math.floor(Math.random() * lootStrength) + minRoll;
	var amt = simpleSeconds(item, seconds);
	if (item != "science") amt += rewardResource(item, 0.5 * lootRoll, 50);
	if (game.global.mapsActive){
		amt = scaleToCurrentMap(amt, true);
	}
	addResCheckMax(item, amt);
	var messageNumber = Math.floor(Math.random() * success.length);
	message(success[messageNumber] + prettify(amt) + " " + item + "!", "Loot", "*magic-wand", "pumpkimp", "events");
}

function activateTurkimpPowers() {
	//15 mins = 900K ms
	//25 mins = 1.5M ms
	var addEach = (game.talents.turkimp.purchased) ? 1200000 : 900000;
	var maxTurk = (game.talents.turkimp.purchased) ? 2100000 : 1500000;
	var timeToExpire = game.global.turkimpTimer;
	timeToExpire += addEach;
	if (timeToExpire > maxTurk) timeToExpire = maxTurk;
	game.global.turkimpTimer = timeToExpire;
	if (game.talents.turkimp4.purchased) return;
	document.getElementById("turkimpBuff").style.display = "block";
	if (game.global.playerGathering) setGather(game.global.playerGathering);
	var possibilities = [
	"Yum, Turkimp! You eat some and put some in your pockets for later.",
	"You seem very happy to see that this land came with free food too! You gobble up some turkimp.",
	"You're quite grateful to finally eat some protein! You eat a bunch of Turkimp and find a Trimp to carry the rest back for you.",
	"Apparently your scientists are vegetarians. Hurray, more Turkimp for you!",
	"You hear a loud gobbling sound in the distance, it sounds angry. You disregard it because this Turkimp is delicious!",
	"Ah, Turkimp. Nature's version of a Chickimp with a weirder head. Sure is tasty! You eat your fill and save some for later."
	];
	var roll = Math.floor(Math.random() * possibilities.length);
	message(possibilities[roll], "Loot", "*spoon-knife", "turkimp", "secondary");

}

function givePresimptLoot(){
	var eligible = ["food", "food", "wood", "wood", "metal",  "metal", "metal", "metal", "metal", "metal", "metal"];
	var boneTime = 30;
	boneTime *= 60000;
	if (new Date().getTime() > (game.global.lastBonePresimpt + boneTime))
		eligible.push("bones");
	var success = [
		"You run to the motionless Presimpt and give him a good shake. Sounds like ",
		"One of your Trimps excitedly grabs the Presimpt and brings it to you. You let him open it to find ",
		"Nothing like some global conquest during the Holidays! You open your Presimpt and find ",
		"You're a bit curious as to where the Presimpts hide during the rest of the year, but you forget about it when you see your new shiny ",
		"You'll never complain about free stuff, and this Presimpt is full of it! Found ",
		"You hurriedly open up the Presimpt, and find ",
		"Ooh look, a Presimpt! You tear it open and receive ",
		"Nifty! That Presimpt was carrying around ",
		"Presimpts for everyone! Wait there's only one. Presimpt for you! With ",
		"This Presimpt has little snowman markings all over it! Inside, you find "];
	if (game.global.spireRows >= 15){
		success.push("Fluffy seems really excited about all the Presimpts, so you let him open this one to find ");
		success.push("Without even a second of pause, Fluffy zooms to the Presimpt and tears it open. He brings you back the ");
		success.push("Fluffy is too busy eating the purple snow to open this one, so you do it yourself. Inside, you find ");
	}
	if (game.jobs.Dragimp.owned > 0) eligible.push("gems", "gems", "gems", "gems");
	else eligible.push("food", "food", "wood", "metal");
	if (game.upgrades.Explorers.allowed > 0) eligible.push("fragments", "fragments", "fragments");
	else eligible.push("food", "wood", "metal");
	var roll = Math.floor(Math.random() * eligible.length);
	var item = game.global.presimptStore;
	game.global.presimptStore = eligible[roll];
	if (item == "bones") {
		message("You shake the Presimpt before opening it, and can tell there's something special in this one. Yup! That thoughtful Presimpt gave you a perfectly preserved bone!", "Loot", "*gift", "presimpt presimptBones");
		game.global.lastBonePresimpt = new Date().getTime();
		game.global.b++;
		updateSkeleBtn();
		return;
	}
	var randomBoost = Math.floor(Math.random() * 4) + 2;
	var amt = rewardResource(item, randomBoost, (game.global.lastClearedCell + 1));
	var messageNumber = Math.floor(Math.random() * success.length);
	message(success[messageNumber] + prettify(amt) + " " + item + "!", "Loot", "*gift", "presimpt", "events");
}

function updateTurkimpTime() {
	if (game.global.turkimpTimer > 0)
		game.global.turkimpTimer -= 100;
	var timeRemaining = game.global.turkimpTimer;
	var elem = document.getElementById("turkimpTime");
	if (game.talents.turkimp4.purchased){
		elem.innerHTML = "<span class='icomoon icon-infinity'></span>";
		return;
	}
	if (timeRemaining <= 0) {
		game.global.turkimpTimer = 0;
		document.getElementById("turkimpBuff").style.display = "none";
		if (game.global.playerGathering) setGather(game.global.playerGathering);
	}
	timeRemaining /= 1000;
	var mins = Math.floor(timeRemaining / 60);
	var seconds = Math.ceil(timeRemaining % 60);
	if (seconds <= 9) seconds = "0" + seconds;
	if (seconds == 60){
		seconds = "00";
		mins++;
	}
	if (mins < 10) mins = "0" + mins;
	elem.innerHTML = mins + ":" + seconds;
}

function formatMinutesForDescriptions(number){
	var text;
	var minutes = Math.floor(number % 60);
	var hours = Math.floor(number / 60);
	if (hours == 0) text = minutes + " 分钟" + ((minutes == 1) ? "" : "");
	else if (minutes > 0) {
		if (minutes < 10) minutes = "0" + minutes;
		text = hours + ":" + minutes;
	}
	else {
		var s = (hours == 1) ? "" : "";
		text = hours + " 小时" + s;
	}
	return text;
}

function formatSecondsForDescriptions(number){
	var text;
	var seconds = Math.round(number % 60);
	var minutes = Math.floor(number / 60);
	if (minutes == 0) text = seconds + " sec" + ((seconds == 1) ? "" : "s");
	else if (seconds > 0) {
		if (seconds < 10) seconds = "0" + seconds;
		text = minutes + ":" + seconds;
	}
	else {
		var s = (minutes > 1) ? "s" : "";
		text = minutes + " min" + s;
	}
	return text;	
}

function getMinutesThisPortal(){
	var timeSince = getGameTime() - game.global.portalTime;
	timeSince /= 1000;
	return Math.floor(timeSince / 60);
}



//Timeouts
function costUpdatesTimeout() {
	checkButtons("buildings");
    checkButtons("jobs");
    checkButtons("equipment");
    checkButtons("upgrades");
    checkTriggers();
	if (tooltipUpdateFunction) tooltipUpdateFunction();
	setTimeout(costUpdatesTimeout, 250);
}

function toggleVoidMaps(updateOnly){
	var elem = document.getElementById("voidMapsBtn");
	var mapsHere = document.getElementById("mapsHere");
	var voidMapsHere = document.getElementById("voidMapsHere");
	var mapsCreate = document.getElementById("mapsCreateRow");
	var heirRare = document.getElementById("heirRare"); //it rhymes
	if (!updateOnly) game.global.voidMapsToggled = !game.global.voidMapsToggled;
	else if (!game.global.preMapsActive) game.global.voidMapsToggled = false;
	if (!game.global.voidMapsToggled){
		voidMapsHere.style.display = "none";
		mapsHere.style.display = "block";
		mapsCreate.style.display = "block";
		heirRare.style.display = "none";
		elem.innerHTML = "Void Maps (" + game.global.totalVoidMaps + ")";
		elem.style.display = (game.global.totalVoidMaps <= 0 || !game.global.preMapsActive) ? "none" : "block";
		hideAdvMaps(true);
		return;
	}
	elem.style.display = "block";
	voidMapsHere.style.display = "block";
	mapsHere.style.display = "none";
	mapsCreate.style.display = "none";
	heirRare.style.display = "block";
	setHeirRareText();
	hideAdvMaps(true, true);
	elem.innerHTML = "Back";
}

function toggleAutoStructure(noChange, forceOff){
	var setting = game.global.autoStructureSetting;
	if (!noChange) setting.enabled = !setting.enabled;
	var btnElem = document.getElementById('autoStructureBtn');
	if (game.talents.autoStructure.purchased && !forceOff)
		btnElem.style.display = 'block';
	else{
		btnElem.style.display = 'none';
		return;
	}
	var color = (setting.enabled) ? "colorSuccess" : "colorDanger";
	swapClass("color", color, btnElem);
	var text = (setting.enabled) ? "打开自动建筑" : "关闭自动建筑";
	document.getElementById('autoStructureText').innerHTML = text;
}

function toggleAutoJobs(noChange, forceOff){
	var setting = game.global.autoJobsSetting;
	if (!noChange) setting.enabled = !setting.enabled;
	var btnElem = document.getElementById('autoJobsBtn');
	if (game.talents.autoJobs.purchased && !forceOff)
		btnElem.style.display = 'block';
	else{
		btnElem.style.display = 'none';
		return;
	}
	var color = (setting.enabled) ? "colorSuccess" : "colorDanger";
	swapClass("color", color, btnElem);
	var text = (setting.enabled) ? "AutoJobs On" : "AutoJobs Off";
	document.getElementById('autoJobsText').innerHTML = text;
}

var lastAutoGoldenToggle = -1;
function toggleAutoGolden(noChange){
	if (!noChange && game.global.autoGolden != -1){
		game.global.autoGolden++;
		if (game.global.autoGolden == 5)
			game.global.autoGolden = 0;
		lastAutoGoldenToggle = new Date().getTime();
	}
	var setting = game.global.autoGolden;
	var btnElem = document.getElementById('autoGoldenBtn');
	if (setting != -1)
		btnElem.style.display = 'block';
	else{
		btnElem.style.display = 'none';
		return;
	}
	var color = "settingBtn" + setting;
	swapClass("settingBtn", color, btnElem);
	var texts = ["自动金色升级关闭", "自动金色升级-氦", "自动金色升级-战斗", "自动金色升级-虚空", "自动金色升级 空隙"];
	var text = texts[setting];
	if (!noChange && setting != 0) text += ' <span id="autoGoldenTimeLeft">(4)</span>';
	document.getElementById('autoGoldenText').innerHTML = text;
}

function saveAutoJobsConfig(){
	var setting = game.global.autoJobsSetting;
	var checkboxes = document.getElementsByClassName('autoCheckbox');
	var quantboxes = document.getElementsByClassName('jobConfigQuantity');
	var ratios = ["Farmer", "Lumberjack", "Miner", "Scientist"];
	if (!validateJobRatios()) return;
	for(var x = 0; x < checkboxes.length; x++){
		var name = checkboxes[x].id.split('autoJobCheckbox')[1];
		var checked = checkboxes[x].dataset.checked == 'true';
		if (!checked && !setting[name]) continue;
		if (!setting[name]) setting[name] = {};
		setting[name].enabled = checked;
		if (ratios.indexOf(name) != -1){
			setting[name].ratio = parseFloat(quantboxes[x].value);
			if (name == "Scientist") {
				var max = quantboxes[x + 1].value;
				max = convertNotationsToNumber(max);
				max = isNumberBad(max) ? 0 : max;
				setting.Scientist.buyMax = max;
			}
			continue;
		}
		setting[name].value = parseFloat(document.getElementById('autoJobSelect' + name).value) / 100;
		var max = convertNotationsToNumber(quantboxes[x].value);
		max = (isNumberBad(max)) ? 0 : max;
		setting[name].buyMax = max;
	}
	var gatherElem = document.getElementById('autoJobSelfGather');
	if (gatherElem){
		if (gatherElem.value) setting.portalGather = gatherElem.value;
		else delete setting.portalGather;
	}
	cancelTooltip();
}

function validateJobRatios(){
	var ratios = ["Farmer", "Lumberjack", "Miner", "Scientist"];
	var errorElem = document.getElementById('autoJobsError');
	for (var x = 0; x < ratios.length; x++){
		var check = document.getElementById('autoJobCheckbox' + ratios[x]);
		var quant = document.getElementById('autoJobQuant' + ratios[x]);
		if (check == null || quant == null) return false;
		if (!check.checked) continue;
		quant = parseFloat(quant.value);
		if (quant < 0){
			errorElem.innerHTML = "Cannot use a number smaller than 0 for " + ratios[x] + " ratio.";
			return false;
		}
		if (isNumberBad(quant)){
			errorElem.innerHTML = "Must use an actual number for " + ratios[x] + " ratio.";
			return false;
		}
	}
	errorElem.innerHTML = "";
	return true;
}

function saveAutoStructureConfig(){
	var setting = game.global.autoStructureSetting;
	var checkboxes = document.getElementsByClassName('autoCheckbox');
	var quantboxes = document.getElementsByClassName('structConfigQuantity');
	for(var x = 0; x < checkboxes.length; x++){
		var name = checkboxes[x].id.split('structConfig')[1];
		var checked = (checkboxes[x].dataset.checked == 'true');
		if (!checked && !setting[name]) continue;
		if (!setting[name]) setting[name] = {};
		setting[name].enabled = checked;
		setting[name].value = document.getElementById('structSelect' + name).value;
		var max = parseInt(quantboxes[x].value, 10);
		if (max > 10000) max = 10000;
		max = (isNumberBad(max)) ? 0 : max;
		setting[name].buyMax = max;
	}
	if (game.global.highestLevelCleared >= 229){
		var nurseryZoneElem = document.getElementById('structZoneNursery');
		if (nurseryZoneElem !== null && nurseryZoneElem.value >= 1 && !isNumberBad(nurseryZoneElem.value)){
			game.global.autoStructureSetting.NurseryZones = nurseryZoneElem.value;
		}
		else if (typeof game.global.autoStructureSetting.NurseryZones !== 'undefined') 
			delete game.global.autoStructureSetting.NurseryZones;
	}
	cancelTooltip();
}

function buyAutoStructures(){
	if (game.options.menu.pauseGame.enabled)
		return;
	var setting = game.global.autoStructureSetting;
	var maxBuild = 2;
	if (game.talents.deciBuild.purchased) maxBuild = 10;
	if (!setting.enabled || !game.talents.autoStructure.purchased) return;
	var order = ["Tribute", "Nursery", "Gym", "Warpstation", "Hut", "House", "Mansion", "Hotel", "Resort", "Gateway", "Collector", "Wormhole"];
	for (var x = 0; x < order.length; x++){
		var item = order[x];
		if (!setting[item]) continue;
		if (typeof setting.NurseryZones !== 'undefined' && game.global.world < setting.NurseryZones && item == "Nursery")
			continue;
		var building = game.buildings[item];
		var purchased = building.purchased;
		var buyMax = setting[item].buyMax;
		if (item == "Nursery" && game.global.world >= 230)
			purchased -= game.stats.decayedNurseries.value;
		if (typeof buyMax !== 'undefined' && buyMax > 0){
			if (purchased >= buyMax)
				continue;
			if (maxBuild + purchased > buyMax) maxBuild = buyMax - purchased;
		}
		if (!game.buildings[item].locked && setting[item].enabled){
			var settingValue = parseFloat(setting[item].value);
			var wantToBuy = calculateMaxAfford(game.buildings[item], true, false, false, setting[item].buyMax, settingValue / 100);
			if (wantToBuy > maxBuild) wantToBuy = maxBuild;
			if (typeof setting.buyMax )
			if (game.global.buildingsQueue.length < 10 && wantToBuy > 0){
				if (canAffordBuilding(item, false, false, false, false, wantToBuy, settingValue)){
					buyBuilding(item, true, true, wantToBuy);
				}
				else if (canAffordBuilding(item, false, false, false, false, 1, settingValue))
					buyBuilding(item, true, true, 1);
			}
		}
	}
	if (setting.Gigastation && game.upgrades.Gigastation.allowed > game.upgrades.Gigastation.done && game.buildings.Warpstation.owned >= setting.Gigastation.buyMax){
		var costMult = parseFloat(setting.Gigastation.value);
		var costs = game.upgrades.Gigastation.cost.resources;
		var owned = game.upgrades.Gigastation.done;
		if (
			(game.resources.science.owned * costMult) >= (costs.science[0] * Math.pow(costs.science[1], owned)) &&
			(game.resources.gems.owned * costMult) >= (costs.gems[0] * Math.pow(costs.gems[1], owned)) &&
			(game.resources.metal.owned * costMult) >= (costs.metal[0] * Math.pow(costs.metal[1], owned))
		) autoBuyUpgrade('Gigastation');
	}
}


function toggleAutoTrap(updateOnly) {
	var elem = document.getElementById("autoTrapBtn");
	if (!game.global.trapBuildAllowed){
		elem.style.display = "none";
		elem.innerHTML = "关闭自动陷阱";
		swapClass("color", "colorDanger", elem);
		return;
	}
	else if (elem.style.display == "none") fadeIn("autoTrapBtn", 10);
	if (!updateOnly) game.global.trapBuildToggled = !game.global.trapBuildToggled;
	if (game.global.trapBuildToggled){
		swapClass("color", "colorSuccess", elem);
		elem.innerHTML = "打开自动陷阱";
		return;
	}
	swapClass("color", "colorDanger", elem);
	elem.innerHTML = "关闭自动陷阱";
}

function toggleAutoStorage(noChange){
	if (!noChange) game.global.autoStorage = !game.global.autoStorage;
	var elem = document.getElementById("autoStorageBtn");
	if (game.global.autoStorage) {
		swapClass("color", "colorSuccess", elem);
		elem.innerHTML = "打开自动存储";
	}
	else {
		swapClass("color", "colorDanger", elem);
		elem.innerHTML = "关闭自动存储";
	}
}


function autoStorage(){
	var toCheck = ["food", "wood", "metal"];
	var storage = ["Barn", "Shed", "Forge"];
	for (var x = 0; x < 3; x++){
		var resource = game.resources[toCheck[x]];
		var max = Math.floor(resource.max + (resource.max * game.portal.Packrat.modifier * game.portal.Packrat.level));
		max = calcHeirloomBonus("Shield", "storageSize", max);
		if (resource.owned >= (max * 0.99) && canAffordBuilding(storage[x], false)) {
			buyBuilding(storage[x], false, true);
			break;
		}
	}
}

function toggleAutoUpgrades(noChange){
	if (!game.global.autoUpgradesAvailable) {
		game.global.autoUpgrades = false;
		noChange = true;
	}
	var elem = document.getElementById("autoUpgradeBtn");
	if (!noChange) game.global.autoUpgrades = !game.global.autoUpgrades;
	if (game.global.autoUpgrades){
		swapClass("color", "colorSuccess", elem);
		elem.innerHTML = "打开自动升级";
	}
	else {
		swapClass("color", "colorDanger", elem);
		elem.innerHTML = "关闭自动升级";
	}
}

var lastAutoPrestigeToggle = -1;
var pantsMode = false;
function toggleAutoPrestiges(noChange){
	var autoPrestigeToggles = ["自动重铸关闭", "自动重铸所有装备", "只重铸武器", "优先重铸武器"];
	if (pantsMode) autoPrestigeToggles.push("PANTS ONLY");
	if (!noChange) {
		game.global.autoPrestiges++;
		lastAutoPrestigeToggle = new Date().getTime();
	}
	if (game.global.autoPrestiges >= autoPrestigeToggles.length) game.global.autoPrestiges = 0;
	var elem = document.getElementById("autoPrestigeBtn");
	swapClass("settingBtn", "settingBtn" + game.global.autoPrestiges, elem);
	elem.innerHTML = autoPrestigeToggles[game.global.autoPrestiges];
}

function autoUpgrades() {
	autoGoldenUpgrades();
	if (!game.global.autoUpgrades && !game.global.autoPrestiges) return;
	if (game.options.menu.pauseGame.enabled == 1) return;
	var timerCheck = (lastAutoPrestigeToggle == -1 || (new Date().getTime() - lastAutoPrestigeToggle >= 2000));
	if (timerCheck) lastAutoPrestigeToggle = -1;
	var equipmentAvailable = {armor: [], weapons: []}
	var boughtUpgrade = false;
	for (var item in game.upgrades){
		var upgradeObj = game.upgrades[item];
		if (upgradeObj.locked || item == "Shieldblock" || item == "Gigastation") continue;
		if (upgradeObj.prestiges){
			if (game.global.autoPrestiges == 0) continue;
			if (game.equipment[upgradeObj.prestiges].locked == 1) continue;
			var type = (typeof game.equipment[upgradeObj.prestiges].health === 'undefined') ? "weapons" : "armor";
			equipmentAvailable[type].push(item);
			continue;
		}
		if (!game.global.autoUpgrades) continue;
		if ((!boughtUpgrade || game.global.gridArray[0].name == "Liquimp") && autoBuyUpgrade(item)){
			if (game.global.autoPrestiges != 0 && timerCheck)
				boughtUpgrade = true;
			else
				return;
		}
	}
	if (game.global.autoPrestiges != 0 && timerCheck) autoPrestiges(equipmentAvailable);
}

function autoGoldenUpgrades(){
	if (game.global.autoGolden <= 0)
		return;
	if (lastAutoGoldenToggle != -1){
		var timeRemaining = Math.floor((new Date().getTime() - lastAutoGoldenToggle) / 1000);
		var timeLeftElem = document.getElementById('autoGoldenTimeLeft');
		if (timeRemaining <= 3){
			timeRemaining = 4 - timeRemaining;
			if (timeLeftElem === null)
				document.getElementById('autoGoldenText').innerHTML += ' <span id="autoGoldenTimeLeft">(' + timeRemaining + ')</span>';
			else timeLeftElem.innerHTML = '(' + timeRemaining + ')';
			return;
		}
		else{
			lastAutoGoldenToggle = -1;
			if (timeLeftElem !== null)
				timeLeftElem.innerHTML = "";
		}

	}
	if (!goldenUpgradesShown || getAvailableGoldenUpgrades() <= 0)
		return;
	var selections = ["", "Helium", "Battle", "Void", "Void"];
	var selected = selections[game.global.autoGolden];
	if (selected == "Void" && (parseFloat((game.goldenUpgrades.Void.currentBonus + game.goldenUpgrades.Void.nextAmt()).toFixed(2)) > 0.72)){
		if (game.global.autoGolden == 3) selected = "Helium";
		else selected = "Battle";
	}
	if (selected == "Helium" && game.global.runningChallengeSquared){
		return;
	}
	buyGoldenUpgrade(selected);
}

function autoPrestiges(equipmentAvailable) {
	if (typeof game.global.gridArray[0] !== 'undefined' && game.global.gridArray[0].name == "Liquimp"){
		for (var w = 0; w < equipmentAvailable.weapons.length; w++){
			autoBuyUpgrade(equipmentAvailable.weapons[w]);
		}
		if (game.global.autoPrestiges == 2) return;
		for (var a = 0; a < equipmentAvailable.armor.length; a++){
			autoBuyUpgrade(equipmentAvailable.armor[a]);
		}
		return;
	}
	var cheapestWeapon = getCheapestPrestigeUpgrade(equipmentAvailable.weapons);
	if (game.global.autoPrestiges == 2) { //Weapons Only
		if (cheapestWeapon[0])	autoBuyUpgrade(cheapestWeapon[0]);
		return;
	}
	if (game.global.autoPrestiges == 4){ // Pants only
		if (equipmentAvailable.armor.indexOf("Pantastic") != -1) autoBuyUpgrade("Pantastic");
		return;
	}
	var cheapestArmor = getCheapestPrestigeUpgrade(equipmentAvailable.armor);
	if (!cheapestWeapon[0]) {
		if (cheapestArmor[0]){
			if (game.global.autoPrestiges == 3 && ((cheapestArmor[0] == "Supershield" && game.resources.wood.owned < cheapestArmor[1] * 20) || (cheapestArmor[0] != "Supershield" && game.resources.metal.owned < cheapestArmor[1] * 20))) return;
			autoBuyUpgrade(cheapestArmor[0]);
		}
		return;
	}
	else if (!cheapestArmor[0]){
		autoBuyUpgrade(cheapestWeapon[0]);
		return;
	}
	var toBuy;
	if (game.global.autoPrestiges == 1) //All
		toBuy = (cheapestWeapon[1] < cheapestArmor[1]) ? cheapestWeapon[0] : cheapestArmor[0];
	else if (game.global.autoPrestiges == 3) //Weapons First
		toBuy = (cheapestWeapon[1] < (cheapestArmor[1] * 20)) ? cheapestWeapon[0] : cheapestArmor[0];
	if (!toBuy) return;
	var bought = autoBuyUpgrade(toBuy);
	if (toBuy == "Supershield" && !bought && (game.global.autoPrestiges == 1 || game.global.autoPrestiges == 3)) autoBuyUpgrade(cheapestWeapon[0]);
	else if (cheapestArmor[0] == "Supershield" && !bought && game.global.autoPrestiges == 1) autoBuyUpgrade(cheapestArmor[0]);
}

function getCheapestPrestigeUpgrade(upgradeArray) {
	var cheapest = [false, -1]; //0 is name, 1 is cost
	var shieldCheck = false;
	var shieldCost = -1;
	var artMult = (game.portal.Artisanistry.level) ? Math.pow(1 - game.portal.Artisanistry.modifier, game.portal.Artisanistry.level) : -1;
	if (game.global.challengeActive == "Daily" && typeof game.global.dailyChallenge.metallicThumb !== 'undefined'){
		var mtMult = dailyModifiers.metallicThumb.getMult(game.global.dailyChallenge.metallicThumb.strength);
		artMult = (artMult == -1) ? mtMult : artMult * mtMult;
	}
	if (game.global.challengeActive == "Obliterated"){
		artMult = (artMult == -1) ? 1e12 : (1e12 * artMult);
	}
	if (game.global.challengeActive == "Eradicated"){
		var mod = game.challenges.Eradicated.scaleModifier
		artMult = (artMult == -1) ? mod : (mod * artMult);
	}
	for (var x = 0; x < upgradeArray.length; x++) {
		var upgradeObj = game.upgrades[upgradeArray[x]];
		if (!upgradeObj || upgradeObj.locked) continue;
		var res = (typeof upgradeObj.cost.resources.metal !== 'undefined') ? 'metal' : 'wood';
		var thisCost = upgradeObj.cost.resources[res];
		if  (artMult != -1) thisCost *= artMult;
		if (res == "wood" && upgradeArray.length > 1 && game.resources.wood.owned < thisCost)	continue;
		else if (res == "wood") {
			shieldCheck = true;
			shieldCost = thisCost;
		}
		if (cheapest[1] == -1 || thisCost < cheapest[1]) cheapest = [upgradeArray[x], thisCost];
	}
	if (cheapest[0] && cheapest[0] != 'Supershield' && shieldCheck && shieldCost != -1 && game.resources.metal.owned < cheapest[1]) cheapest = ['Supershield', shieldCost];
	return cheapest;
}

function autoBuyUpgrade(item){
	var purchase = buyUpgrade(item, false, true);
	if (!purchase) return false;
	if (game.upgrades[item].locked){
		game.upgrades[item].alert = false;
		if (countAlertsIn("upgrades") <= 0) document.getElementById("upgradesAlert").innerHTML = "";
	}
	return true;
}

var Fluffy = {
	firstLevel: 1000,
	getFirstLevel: function () {
		var prestigeRequire = Math.pow(this.prestigeExpModifier, game.global.fluffyPrestige);	
		return this.firstLevel * prestigeRequire;
	},
	growth: 4,
	specialExpModifier: 1, //For events, test server, etc
	specialModifierReason: "",
	baseExp: 50,
	expGrowth: 1.015,
	currentLevel: 0,
	prestigeDamageModifier: 5,
	prestigeExpModifier: 5,
	currentExp: [],
	damageModifiers: [1, 1.1, 1.3, 1.6, 2, 2.5, 3.1, 3.8, 4.6, 5.5, 6.5],
	rewards: ["stickler", "helium", "liquid", "purifier", "lucky", "void", "helium", "liquid", "eliminator", "overkiller"],
	prestigeRewards: ["dailies", "voidance", "overkiller", "critChance", "megaCrit", "superVoid", "voidelicious", "naturesWrath", "voidSiphon"],
	prestige: function () {
		this.calculateLevel();
		if (this.currentLevel < 10) return;
		game.global.fluffyExp = 0;
		game.global.fluffyPrestige++;
		this.handleBox();
	},
	abortPrestige: function () {
		if (game.global.fluffyPrestige < 1) return;
		game.global.fluffyPrestige--;
		game.global.fluffyExp = Math.floor(this.getFirstLevel() * ((Math.pow(this.growth, 10) - 1) / (this.growth - 1)));
		this.handleBox();
	},
	canGainExp: function () {
		if (this.currentLevel >= game.portal.Capable.level) return false;
		return true;
	},
	isActive: function(){
		return (game.global.spireRows >= 15 || game.portal.Capable.level > 0);
	},
	isMaxLevel: function() {
		return (this.currentLevel == this.rewards.length);
	},
	getFluff: function () {
		var possibilities = [];
		var timeSeed = Math.floor(new Date().getTime() / 1000 / 30);
		if (this.currentLevel == this.rewards.length){
			possibilities = ["Fluffy's just chillin.", "Fluffy can now predict the future, though he won't tell you what's going to happen.", "Fluffy's looking pretty buff.", "FLUFFY SMASH", "Fluffy's smelling great today.", "Fluffy is a model Trimp.", "Fluffy can do anything.", "Fluffy once killed a Snimp with a well-timed insult.", "Fluffy can juggle 3 dozen scientists without breaking a sweat.", "Fluffy does a barrel roll.", "Fluffy's thinking about writing a book."];
		}
		else {
			possibilities = ["He's enjoying the grind.", "He can't wait to get stronger.", "He could probably use a shower.", "He's growing up so fast.", "His fur is looking healthy today.", "He's feeling quite capable.", "He still drools a bit in his sleep.", "He loves a good game of fetch.", "He's been practicing juggling.", "He does a flip.", "He's the only Trimp not scared by your campfire ghost stories."];
		}
		return possibilities[getRandomIntSeeded(timeSeed, 0, possibilities.length)];
	},
	getExp: function(){
		if (this.currentExp.length != 3) this.handleBox();
		return this.currentExp;
	},
	calculateExp: function(){
		var level = this.currentLevel;
		var experience = game.global.fluffyExp;
		var removeExp = 0;
		if (level > 0){
			removeExp = Math.floor(this.getFirstLevel() * ((Math.pow(this.growth, level) - 1) / (this.growth - 1)));
		}
		var totalNeeded = Math.floor(this.getFirstLevel() * ((Math.pow(this.growth, level + 1) - 1) / (this.growth - 1)));
		experience -= removeExp;
		totalNeeded -= removeExp;
		this.currentExp = [level, experience, totalNeeded];
	},
	calculateLevel: function(){
		var level = Math.floor(log10(((game.global.fluffyExp / this.getFirstLevel()) * (this.growth - 1)) + 1) / log10(this.growth));
		var capableLevels = game.portal.Capable.level;
		if (level > capableLevels) level = capableLevels;
		this.currentLevel = level;
	},
	calculateInfo: function(){
		if (!this.isActive()){
			this.currentLevel = 0;
			this.currentExp = [];
			return;
		}
		this.calculateLevel();
		this.calculateExp();
		this.updateExp();
	},
	updateExp: function(){
		var expElem = document.getElementById('fluffyExp');
		var lvlElem = document.getElementById('fluffyLevel');
		var fluffyInfo = this.getExp();
		var width = Math.ceil((fluffyInfo[1] / fluffyInfo[2]) * 100);
		if (width > 100) width = 100;
		expElem.style.width = width + "%";
		lvlElem.innerHTML = fluffyInfo[0];
	},
	rewardExp: function(count){
		if (!this.canGainExp()) return;
		if ((game.global.world < (this.getMinZoneForExp() + 1)) && !count) return;
		var reward = this.getExpReward(true, count);
		game.global.fluffyExp += reward;
		this.handleBox();
		return reward;
	},
	getMinZoneForExp: function(){
		var zone = 300;
		if (game.portal.Classy.level) zone -= (game.portal.Classy.level * game.portal.Classy.modifier);
		return Math.floor(zone);
	},
	getExpReward: function(givingExp, count) {
		var reward = (this.baseExp + (game.portal.Curious.level * game.portal.Curious.modifier)) * Math.pow(this.expGrowth, game.global.world - this.getMinZoneForExp()) * (1 + (game.portal.Cunning.level * game.portal.Cunning.modifier));
		reward *= this.specialExpModifier;
		if (game.talents.fluffyExp.purchased)
			reward *= 1 + (0.25 * game.global.fluffyPrestige);
		if (playerSpireTraps.Knowledge.owned){
			var knowBonus = playerSpireTraps.Knowledge.getWorldBonus();
			reward *= (1 + (knowBonus / 100));
		}
		if (count) reward *= count;
		if (game.heirlooms.Staff.FluffyExp.currentBonus > 0){
			reward *= (1 + (game.heirlooms.Staff.FluffyExp.currentBonus / 100));
		}
		if (givingExp) game.stats.bestFluffyExp.value += reward;
		//----Modifiers below this comment will not apply to best fluffy exp bone portal credit or stats----
		if (game.global.challengeActive == "Daily")
			reward *= (1 + (getDailyHeliumValue(countDailyWeight()) / 100));
		return reward;
	},
	getLevel: function(ignoreCapable){
		if (this.currentExp.length != 3) this.handleBox();
		var level = this.currentLevel;
		var capableLevels = game.portal.Capable.level;
		if (ignoreCapable){
			level = Math.floor(log10(((game.global.fluffyExp / this.getFirstLevel()) * (this.growth - 1)) + 1) / log10(this.growth));
			if (level >= this.rewards.length) level = this.rewards.length;
			return level;
		}
		if (level > capableLevels) level = capableLevels;
		return level;
	},
	getDamageModifier: function () {
		var exp = this.getExp();
		var prestigeBonus = Math.pow(this.prestigeDamageModifier, game.global.fluffyPrestige);
		if (exp[0] < 1 || exp.length != 3) return 1;
		var bonus = this.damageModifiers[exp[0]];
		if (exp[0] >= this.damageModifiers.length || exp[0] == game.portal.Capable.level) return 1 + ((bonus - 1) * prestigeBonus);
		var remaining = (this.damageModifiers[exp[0] + 1] - bonus);
		bonus += ((exp[1] / exp[2]) * remaining);
		return 1 + ((bonus - 1) * prestigeBonus);
	},
	getBonusForLevel: function(level) {
		var prestigeBonus = Math.pow(this.prestigeDamageModifier, game.global.fluffyPrestige);
		var possible = (this.damageModifiers[level] - this.damageModifiers[level - 1]) * 100 * prestigeBonus;
		if (this.currentLevel >= level) {
			return prettify(Math.round(possible)) + "%";
		}
		if (level == this.currentLevel + 1 && game.portal.Capable.level >= level) {
			var earned = possible * (this.currentExp[1] / this.currentExp[2]);
			return prettify(earned) + "% / " + prettify(Math.round(possible)) + "%";
		}
		return "0% / " + prettify(Math.round(possible)) + "%";
	},
	isRewardActive: function(reward){
		var calculatedPrestige = game.global.fluffyPrestige;
		if (game.talents.fluffyAbility.purchased) calculatedPrestige++;
		if (this.currentLevel + calculatedPrestige == 0) return 0;
		var indexes = [];
		for(var x = 0; x < this.rewards.length; x++){
			if (this.rewards[x] == reward)
				indexes.push(x);
		}
		for (var z = 0; z < this.prestigeRewards.length; z++){
			if (this.prestigeRewards[z] == reward)
				indexes.push(this.rewards.length + z)
		}
		var count = 0;
		for (var y = 0; y < indexes.length; y++){
			if (this.currentLevel + calculatedPrestige > indexes[y]) count++;
		}
		return count;
	},
	handleBox: function(){
		var boxElem = document.getElementById('fluffyBox');
		var xpElem = document.getElementById('fluffyExpContainer');
		if (Fluffy.isActive()){
			boxElem.style.display = 'block';
			this.calculateInfo();
			if (this.currentLevel == this.rewards.length)
				xpElem.style.display = 'none';
			else
				xpElem.style.display = 'block';
		}
		else {
			boxElem.style.display = 'none';
		}
	},
	refreshTooltip: function (justOnce) {
		if (openTooltip != "Fluffy") return;
		var fluffyTip = Fluffy.tooltip(true);
		var topElem = document.getElementById('fluffyTooltipTopContainer');
		var bottomElem = document.getElementById('fluffyLevelBreakdownContainer');
		if (topElem && bottomElem) {
			topElem.innerHTML = fluffyTip[0];
			bottomElem.innerHTML = fluffyTip[1];
			if (!justOnce) setTimeout(Fluffy.refreshTooltip, 1000);
		}
		
	},
	checkAndRunVoidance: function() {
		if (!this.isRewardActive('voidance')) return;
		for (var x = 0; x < 2; x++){
			var map = createVoidMap();
			var mapName = map.split(' ');
			createVoidMap(mapName[0], mapName[1]);
		}
	},
	checkAndRunVoidelicious: function () {
		if (!this.isRewardActive('voidelicious')) return;
		var prefixes = ['Deadly', 'Poisonous', 'Heinous', 'Destructive'];
		var suffixes = ['Nightmare', 'Void', 'Descent', 'Pit'];
		for (var x = 0; x < prefixes.length; x++){
			for (var y = 0; y < suffixes.length; y++){
				createVoidMap(prefixes[x], suffixes[y]);
			}
		}

	},
	expBreakdown: function (what) {
		var elem = document.getElementById("fluffyExpBreakdown");
		switch(what){
			case "clear":
				elem.innerHTML = "";
				return;
			case "daily":
				var text = 'Applies when running a Daily Challenge, and matches your Daily\'s extra Helium modifier.' 
				text += ((game.global.challengeActive == "Daily") ? ' Currently ' + prettify(1 + (getDailyHeliumValue(countDailyWeight()) / 100)) + '.' : ' Currently 1.');
				elem.innerHTML = text;
				return;
			case "zone":
				elem.innerHTML = 'Your Zone number. Currently ' + game.global.world + '.';
				return;
			case "cunning":
				elem.innerHTML = 'The amount of levels placed in the Cunning Perk. Currently ' + game.portal.Cunning.level + '.';
				return;
			case "curious":
				elem.innerHTML = 'The amount of levels placed in the Curious Perk. Currently ' + game.portal.Curious.level + '.';
				return;
			case "classy":
				elem.innerHTML = 'The Zone Fluffy can start earning Experience at. This value is normally 301, and is currently reduced by ' + Math.floor(game.portal.Classy.level * game.portal.Classy.modifier) + ' thanks to ' + ((game.portal.Classy.modifier > 1) ? game.portal.Classy.level + " level" + ((game.portal.Classy.level == 1) ? "" : "s") + " of " : "") + 'Classy.';
				return;
			case "special":
				elem.innerHTML = this.specialModifierReason;
				return;
			case "staff":
				elem.innerHTML = 'The bonus modifier applied from "Fluffy Exp" on a Plagued Staff. Currently ' + (1 + (game.heirlooms.Staff.FluffyExp.currentBonus / 100)).toFixed(2) + '.';
				return;
			case "flufffocus":
				elem.innerHTML = 'The bonus modifier from the Flufffocus Mastery (+25% exp per Prestige). Fluffy has evolved ' + game.global.fluffyPrestige + ' time' + ((game.global.fluffyPrestige == 1) ? '' : 's') + ', bringing this modifier to ' + prettify(1 + (0.25 * game.global.fluffyPrestige)) + '.';
				return;
			case "knowledge":
				elem.innerHTML = 'The bonus from your Knowledge Towers. You have ' + playerSpireTraps.Knowledge.owned + ' Knowledge Tower' + needAnS(playerSpireTraps.Knowledge.owned) + ', granting a bonus of ' + playerSpireTraps.Knowledge.getWorldBonus(true) + '% each, bringing this modifier to ' + (1 + (playerSpireTraps.Knowledge.getWorldBonus() / 100)) + ".";
		}
	},
	tooltip: function (big){
		var savedLevel = Fluffy.getLevel(true);
		var fluffyInfo = Fluffy.getExp();
		var calculatedPrestige = game.global.fluffyPrestige;
		if (game.talents.fluffyAbility.purchased) 
			calculatedPrestige++;
		if (calculatedPrestige > Fluffy.prestigeRewards.length) 
			calculatedPrestige = Fluffy.prestigeRewards.length;
		var bottomText = "";
		var topText = "<div style='width: 100%; font-size: 0.95em;'><div class='fluffyThird'>";
		var minZoneForExp = Fluffy.getMinZoneForExp() + 1;
		if (game.global.fluffyPrestige > 0 || this.currentLevel == this.rewards.length) topText += "<span style='color: #740774'>Evolution " + game.global.fluffyPrestige + " </span>";
		topText += "Level " + fluffyInfo[0] + "</div><div class='fluffyThird'>";
		if (savedLevel >= Fluffy.rewards.length) {
			topText += "Max"
		}
		else {
			topText += (Fluffy.canGainExp()) ? "<span>" : "<span class='red'>"
			topText += prettify(fluffyInfo[1]) + " / " + prettify(fluffyInfo[2]) + " 经验";
			topText += "</span>";
		}
		topText += "</div><div class='fluffyThird'>+" + prettify((Fluffy.getDamageModifier() - 1) * 100) + "% 伤害"
		topText += "</div></div>";
		if (!Fluffy.isMaxLevel()){
			if (savedLevel > fluffyInfo[0]) topText += "<span class='red'>- 蓬松的等级和伤害加成现在被降低了. Fluffy 会恢复等级 " + savedLevel + " 当点被放回有能力的时候.</span>";
			else if (!Fluffy.canGainExp()) topText += "<span class='red'>- 蓬松需要 " + ((game.portal.Capable.level == 0) ? "至少一级的能力来获取经验" + ((game.portal.Capable.locked) ? ". 完成塔尖II去解锁能力!" : "") : " 更多的点数能让你获得更高的提升 " + game.portal.Capable.level + ".") + "</span>";
			else {
				if (game.global.world < minZoneForExp) topText += "<span class='red'>- 蓬松不能获得任何经验从低于 " + minZoneForExp + "</span>";
				else{
					var remainingXp = fluffyInfo[2] - fluffyInfo[1];
					var xpReward = Fluffy.getExpReward();
					var remainingRuns = Math.ceil(remainingXp / xpReward);
					topText += "- 蓬松会获得 " + prettify(xpReward) + " 经验每个区域。 蓬松需要 " + prettify(remainingXp) + " more Exp to level, equivalent to clearing this zone about " + prettify(remainingRuns) + " time" + needAnS(remainingRuns) + ".";
					topText += "<br/>- " + Fluffy.getFluff();
				}
			}
			
		}
		else topText += "- " + Fluffy.getFluff();
		topText += "</br>";
		if (!big) return topText;
		//clicked

		if (Fluffy.currentLevel == 10 && game.global.fluffyPrestige < Fluffy.prestigeRewards.length)
			topText += "<span class='fluffyEvolveText'>蓬松准备好进化了! 这将会重置它的伤害加成和所有特殊能力到等级0， 但是，他将会比以往任何时候都更加强大。你可以在任何时候取消这个进化，回到第10级。<br/><span class='btn btn-md btn-success' onclick='Fluffy.prestige(); Fluffy.refreshTooltip(true);'>进化!</span></span><br/>";
		if (Fluffy.canGainExp() && game.global.world >= minZoneForExp) {
			topText += "- 蓬松在每个区域结束时的经验值等于: ";
			var fluffFormula = "<br/><span style='padding-left: 3em'>";
			var startNumber = Fluffy.getMinZoneForExp();
			if (!game.portal.Classy.locked) startNumber = '<span class="fluffFormClassy" onmouseover="Fluffy.expBreakdown(\'classy\')" onmouseout="Fluffy.expBreakdown(\'clear\')">' + (startNumber + 1) + "</span> - 1";
			if (!game.portal.Curious.locked) fluffFormula += "(" + Fluffy.baseExp + " + (Curious * " + game.portal.Curious.modifier + ")) * (" + Fluffy.expGrowth + "^(Zone - " + startNumber + ")) * (1 + (Cunning * " + game.portal.Cunning.modifier + "))";
			else if (!game.portal.Cunning.locked) fluffFormula += Fluffy.baseExp + " * (" + Fluffy.expGrowth + "^(Zone - " + startNumber + ")) * (1 + (Cunning * " + game.portal.Cunning.modifier + "))";
			else fluffFormula += Fluffy.baseExp + " * (" + Fluffy.expGrowth + "^(Zone - " + startNumber + "))";
			fluffFormula += "</span>";
			fluffFormula += ' * <span class="fluffFormDaily" onmouseover="Fluffy.expBreakdown(\'daily\')" onmouseout="Fluffy.expBreakdown(\'clear\')">dailyHeliumModifier</span>';
			if (game.talents.fluffyExp.purchased) fluffFormula += ' * <span class="fluffFormFlufffocus" onmouseover="Fluffy.expBreakdown(\'flufffocus\')" onmouseout="Fluffy.expBreakdown(\'clear\')">Flufffocus</span>';
			if (game.heirlooms.Staff.FluffyExp.currentBonus > 0) fluffFormula += ' * <span class="fluffFormStaff" onmouseover="Fluffy.expBreakdown(\'staff\')" onmouseout="Fluffy.expBreakdown(\'clear\')">Staff</span>';
			if (playerSpireTraps.Knowledge.owned) fluffFormula += ' * <span class="fluffFormKnowledge" onmouseover="Fluffy.expBreakdown(\'knowledge\')" onmouseout="Fluffy.expBreakdown(\'clear\')">Knowledge</span>';
			if (Fluffy.specialExpModifier > 1) fluffFormula += ' * <span class="fluffFormSpecial" onmouseover="Fluffy.expBreakdown(\'special\')" onmouseout="Fluffy.expBreakdown(\'clear\')">' + Fluffy.specialExpModifier + "</span>";
			fluffFormula = fluffFormula.replace('Zone', '<span onmouseover="Fluffy.expBreakdown(\'zone\')" onmouseout="Fluffy.expBreakdown(\'clear\')" class="fluffFormZone">Zone</span>');
			fluffFormula = fluffFormula.replace('Cunning', '<span onmouseover="Fluffy.expBreakdown(\'cunning\')" onmouseout="Fluffy.expBreakdown(\'clear\')" class="fluffFormCunning">Cunning</span>')
			fluffFormula = fluffFormula.replace('Curious', '<span onmouseover="Fluffy.expBreakdown(\'curious\')" onmouseout="Fluffy.expBreakdown(\'clear\')" class="fluffFormCurious">Curious</span>')			
			topText += fluffFormula;
		}
		if (calculatedPrestige > 0 && Fluffy.currentLevel < 10)
			topText += "<br/><span class='btn btn-sm btn-warning' onmousedown='cancelTooltip(); tooltip(\"confirm\", null, \"update\", \"你将中止蓬松的进化。这将使你的蓬松回到10级，但是你将永远失去本次进化中获得的所有经验。你确定要放弃吗?\", \"Fluffy.abortPrestige()\", \"Abort Evolution\")'>终止进化</span>"
		var xpBreakdownFill = (document.getElementById('fluffyExpBreakdown') ? document.getElementById('fluffyExpBreakdown').innerHTML : "");
		topText += "<div id='fluffyExpBreakdown'>" + xpBreakdownFill + "</div>";
		bottomText += "<table id='fluffyLevelBreakdown'><tbody><tr style='font-weight: bold; font-size: 1.25em; text-align: center;'><td style='padding: 0 1em'>Level</td><td>Ability</td><td style='padding: 0 1em'>+Damage</td></tr>";
		for (var x = 0; x < Fluffy.rewards.length; x++){
			bottomText += ((fluffyInfo[0] + calculatedPrestige) >= (x + 1)) ? "<tr class='fluffyRowComplete'>" : "<tr>";
			if (savedLevel < x && calculatedPrestige == 0)
				bottomText += "<td>Lv " + (x + 1) + "</td><td>?</td><td></td>"
			else{
				var levelDisplay = (x + 1) - calculatedPrestige;
				if (levelDisplay < 0) levelDisplay = 0;
				bottomText += "<td>Lv " + levelDisplay + "</td><td>" + Fluffy.rewardConfig[Fluffy.rewards[x]].description + "</td>";
				bottomText += "<td style='text-align: center'>" + ((levelDisplay > 0) ? Fluffy.getBonusForLevel(levelDisplay) : "&nbsp;") + "</td></tr>";
			}
		}
		var countedPrestige = calculatedPrestige;
		if (fluffyInfo[0] == Fluffy.rewards.length) countedPrestige++;
		if (countedPrestige > 0){
			for (var y = 0; y < Fluffy.prestigeRewards.length; y++){
				var levelDisplay = Fluffy.rewards.length + (y + 1) - countedPrestige;
				if (levelDisplay > Fluffy.rewards.length) continue;
				if (levelDisplay < 0) levelDisplay = 0;
				bottomText += (fluffyInfo[0] >= Fluffy.rewards.length - calculatedPrestige + (y + 1)) ? "<tr class='fluffyRowComplete'>" : "<tr>";
				levelDisplay = ((countedPrestige - 1 == y && countedPrestige != calculatedPrestige) ? levelDisplay : ((countedPrestige == calculatedPrestige) ? levelDisplay : levelDisplay + 1));
				var displayedPrestige = y + 1;
				if (calculatedPrestige != game.global.fluffyPrestige) {
					displayedPrestige -= (calculatedPrestige - game.global.fluffyPrestige)
				}
				bottomText += "<td><b>E" + displayedPrestige + "</b> Lv " + levelDisplay + "</td><td>" + Fluffy.rewardConfig[Fluffy.prestigeRewards[y]].description + "</td>";
				bottomText += "<td style='text-align: center'>" + ((levelDisplay > 0 && calculatedPrestige > y) ? Fluffy.getBonusForLevel(levelDisplay) : "&nbsp;") + "</td></tr>";
			}
		}
		bottomText += "</tbody></table>"
		return [topText, bottomText];
	},
	getVoidStackCount: function () {
		var count = 1;
		if (this.isRewardActive('void')) count++;
		if (this.isRewardActive('superVoid')) count += 4;
		if (game.talents.voidSpecial2.purchased) count++;
		return count;
	},
	rewardConfig: {
		stickler: {
			description: "增加5%最高级传家宝的掉落几率, 并降低5%最低级传家宝的掉落几率。"
		},
		purifier: {
			description: "尖塔中的腐败和健康细胞有50%概率失去它们的特性。"
		},
		lucky: {
			description: "当完成地图获得一个隐藏奖励时, 你有25%概率找到第二个。"
		},
		overkiller: {
			description: "超杀有机会击中额外的一个敌人。"
		},
		helium: {
			description: "所有来源获得的氦提高25%"
		},
		void: {
			description: "允许有两个相同名字的空地图粘在一起。在完成了这张2x的空白地图之后，蓬松将会立即清除多余的那张，比正常的和第二次传家宝的氦要多一半的氦。"
		},
		eliminator: {
			description: "尖塔中的腐败和健康细胞会失去它们的所有特性。"
		},
		liquid: {
			description: "增加2.5%的液化奖金。 (半个尖塔)。"
		},
		voidance: {
			description: "每个传送门，从两个双层的虚空地图开始。"
		},
		dailies: {
			description: "所有日常挑战的氦气系数增加100%。"
		},
		critChance: {
			description: "给予你的脆皮额外50%暴击几率。Gives your Trimps an additional 50% crit chance."
		},
		megaCrit: {
			get description(){
				var text = "增加2倍的Mega暴击倍数，增加橙色暴击至 ";
				var current = [getMegaCritDamageMult(2), getMegaCritDamageMult(3)];
				if (!Fluffy.isRewardActive('megaCrit')) current = [current[0] + 2, Math.pow((current[0] + 2), 2)] 
				text += Math.floor(current[0]) + "x 和红色暴击 " + Math.floor(current[1]) + "x."
				return text;
			}
		},
		superVoid: {
			get description(){
				var count = 6;
				if (game.talents.voidSpecial2.purchased) count++;
				return "Allows an additional 4 Void Maps with the same name to stick together, bringing the max stack size to " + count + ". Each map in the stack that Fluffy clears grants an additional 50% Helium to all other maps in the stack, giving a bonus of up to +" + Math.floor((count - 1) * 50) + "% to each of the " + (count - 1) + " Fluffy maps from a " + count + " stack."
			}
		},
		voidelicious: {
			description: "每一个传送门都有一个独一无二的空白地图(总共16个)"
		},
		naturesWrath: {
			description: "Improves Empowerments of Nature! Poison gains +10 to Stack Transfer rate, Helium rewards from Wind are increased by 5x, and the damage bonus from Ice is doubled."
		},
		voidSiphon: {
			description: "Your Trimps gain 5% attack each time you clear a Void Map. This bonus stacks additively and resets on Portal."
		}
	}
}

//PlayFab Stuff

var playFabId = -1;

function enablePlayFab(){
	var loggedIn = (playFabId != -1);
	if (!loggedIn){
		tooltip("PlayFab Login", null, "update");
		loggedIn = tryPlayFabAutoLogin();
	}
	if (playFabId == -1) {
		return false;
	}
	return true;
}

function tryPlayFabAutoLogin(){
	var type = game.global.playFabLoginType;
	//-1 = not set, 1 = Kongregate, 2 = PlayFab
	if (type == -1) return false;
	if (type == 1){
		playFabLoginWithKongregate();
		return true;
	}
	if (type == 2){
		var info = readPlayFabInfo();
		if (!info) return false;
		playFabLoginWithPlayFab(info[0], info[1], (type == 2));
		game.global.playFabLoginType = type;
		return true;
	}
	return false;
}


function getPlayFabLoginHTML(){
	var tipHtml = [];
	tipHtml[0] = "<div id='playFabLoginError'></div><div class='row playFabRow'>";
	if (typeof kongregate !== 'undefined'){
		var userId = (kongregate && kongregate.services && kongregate.services.getUserId) ? kongregate.services.getUserId() : 0;
		tipHtml[0] += "<div id='playFabKongregateContainer' class='col-xs-6'><b>Login With Kongregate</b><br/>"
		if (userId > 0){
			tipHtml[0] += "<div id='playFabKongLoggedIn'>Click the button below to link a PlayFab account to your Kongregate account and begin or resume backing up your save online!<br/><br/><div class='alignCenter'><span class='btn btn-sm btn-primary' onclick='playFabLoginWithKongregate()'>Connect Kongregate<br/>To PlayFab</span></div></div>";
		}
		else
			tipHtml[0] += "<div id='playFabKongNotLoggedIn'>You are playing from Kongregate, but not logged in.<span class='inactiveBtn''>Must Be Logged In</span></div>";
		tipHtml[0] += "</div>";
	}
	else {
	var info = false;
	if (game.global.rememberInfo) {
		info = readPlayFabInfo();
	}
		tipHtml[0] += "<div id='playFabLoginContainer' class='col-xs-6'><b id='playFabLoginTitle'>登录PlayFab</b><br/><span id='playFabEmailHidden' style='display: none'>你的邮箱<br/><span id='emailNotice' style='font-size: 0.8em'>(为了恢复，必需)<br/></span><input type='text' id='registerEmail' /></span><span id='usernameBox'>PlayFab用户名<br/><input type='text' id='loginUserName' " + ((info) ? "value='" + info[0] + "'" : "") + "/></span><span id='playFabPasswordBox'><br/>密码 <span style='font-size: 0.8em'>(6-30 字符 )</span><br/><input type='password' id='loginPassword'" + ((info) ? " value='" + info[1] + "'" : "") + "/></span><br/><div id='playFabConfirmPasswordHidden' style='display: none'>重复密码<br/><input type='password' id='confirmPassword' /><br/></div><span id='rememberInfoBox'>记住账号信息<br/><input type='checkbox' id='rememberInfo' " + ((info) ? "checked='true'" : "") + "/><br/></span><div id='playFabLoginBtn' class='btn btn-sm btn-info' onclick='playFabLoginWithPlayFab()'>登录</div><div id='playFabRegisterBtn' class='btn btn-sm btn-info' style='display: none' onclick='playFabRegisterPlayFabUser()'>注册</div><span style='display: none' id='playFabRecoverBtns'><div class='btn btn-sm btn-info' onclick='playFabRecoverInfo(false)' style='display: none'>找回用户名</div><div class='btn btn-sm btn-primary' onclick='playFabRecoverInfo(true)'>发送密码重置邮件</div></span><div id='playFabSwitchRegisterBtn' onclick='switchForm(true)' class='btn btn-sm btn-primary'>注册Playfab账号</div><div id='playFabSwitchRecoveryBtn' onclick='switchForm(false)' class='btn btn-sm btn-warning'>恢复帐户信息</div></div>"
	}
	tipHtml[0] += "<div id='playFabLoginInfo' class='col-xs-6'><ul><li>连接到PlayFab时，每次手动保存时，每30分钟自动保存<b>一次</ b>，您的存档文件也将发送到PlayFab的服务器。</ li> <li>如果3个月内没有更新存档，存档将被从PlayFab的服务器删除，这不是一个永久保存！</li></ul>"
	tipHtml[1] = "<div class='btn btn-sm btn-danger' onclick='cancelTooltip()'>取消</div>";
	return tipHtml;
}

function switchForm(register){ //true for register, false for recovery
	var title = document.getElementById("playFabLoginTitle");
	var emailInput = document.getElementById("playFabEmailHidden");
	var loginBtn = document.getElementById("playFabLoginBtn");
	var registerBtn = document.getElementById("playFabRegisterBtn");
	var recoverBtn = document.getElementById("playFabRecoverBtns");
	var switchBtn = document.getElementById("playFabSwitchRegisterBtn");
	var passBox = document.getElementById("playFabPasswordBox");
	var nameBox = document.getElementById("usernameBox");
	var rememberBox = document.getElementById("rememberInfoBox");
	var emailNotice = document.getElementById("emailNotice");
	var switchRecoveryBtn = document.getElementById("playFabSwitchRecoveryBtn");
	var confirmPasswordBtn = document.getElementById("playFabConfirmPasswordHidden");
	if (emailInput != null) emailInput.style.display = "block";
	if (loginBtn != null) loginBtn.style.display = "none";
	if (registerBtn != null && register) registerBtn.style.display = "inline-block";
	else if (recoverBtn != null && !register) recoverBtn.style.display = "inline-block";
	if (nameBox != null && !register) nameBox.style.display = "none";
	if (emailNotice != null && !register) emailNotice.style.display = "none";
	if (switchBtn != null) switchBtn.style.display = "none";
	if (passBox != null && !register) passBox.style.display = "none";
	if (rememberBox != null && !register) rememberBox.style.display = "none";
	if (switchRecoveryBtn != null) switchRecoveryBtn.style.display = "none";
	if (confirmPasswordBtn != null && register) confirmPasswordBtn.style.display = "block";
	if (title != null) title.innerHTML = (register) ? "注册一个PlayFab账号" : "恢复帐户信息 - <i>必须在注册期间提供电子邮件</ i>";
}

function playFabRecoverInfo(needsPassword){
	var error = document.getElementById("playFabLoginError");
	var emailElem = document.getElementById("registerEmail");
	var requestData = {
			TitleId: "9186",
			Email: emailElem.value
		}
	if (needsPassword){
		try {
			PlayFab.ClientApi.SendAccountRecoveryEmail(requestData, playFabRecoverCallback);
		}
		catch (e) {
			if (error != null) error.innerHTML = e.errorMessage;
		}
		return;
	}
	try {
		PlayFab.ClientApi.GetAccountInfo(requestData, playFabRecoverCallback);
	}
	catch (e) {
		console.log(e);
		if (error != null) error.innerHTML = e.errorMessage;
	}
}

function playFabRecoverCallback(data, error){
	var errorElem = document.getElementById("playFabLoginError");
	console.log(data, error);
	if (errorElem == null) return;
	if (error) {
		errorElem.innerHTML = error.errorMessage;
		return;
	}
	if (data.Username) {
		errorElem.innerHTML = "<span style='color: green'>Username is " + data.Username + "</span>";
		return;
	}
	if (data.status == "OK") errorElem.innerHTML = "<span style='color: green'>Recovery Email Sent!</span>";

}

function switchFormToRecovery(){
	var title = document.getElementById("playFabLoginTitle");
	if (title != null)
	var emailInput = document.getElementById("playFabEmailHidden");
	if (emailInput != null) emailInput.style.display = block;

}

function playFabRegisterPlayFabUser(){
	var error = document.getElementById("playFabLoginError");
	if (typeof PlayFab === 'undefined' || typeof PlayFab.ClientApi === 'undefined'){
		error.innerHTML = "Unable to Initialize the PlayFab API. Please check to make sure third-party scripts are enabled for Trimps, and that PlayFab is not blocked.";
		return;
	}
	var saveLogin = false;
	var nameElem = document.getElementById("loginUserName");
	var passElem = document.getElementById("loginPassword");
	var emailElem = document.getElementById("registerEmail");
	var rememberElem = document.getElementById("rememberInfo");
	var confirmPasswordElem = document.getElementById("confirmPassword");
	if (rememberElem && rememberElem.checked == true) saveLogin = true;
	if (nameElem == null || passElem == null || emailElem == null || rememberElem == null || confirmPasswordElem == null){
		//Elements required to register are missing, rebuild login screen
		tooltip("PlayFab Login", null, "update");
		return;
	}
	if (confirmPasswordElem.value != passElem.value){
		error.innerHTML = "Passwords do not match!";
		return;
	}
	var requestData = {
		TitleId: "9186",
		Username: nameElem.value,
		Password: passElem.value,
		RequireBothUsernameAndEmail: false
	}
	if (emailElem.value) {
		requestData.Email = emailElem.value;
		requestData.RequireBothUsernameAndEmail = true;
	}
	try {
		PlayFab.ClientApi.RegisterPlayFabUser(requestData, playFabLoginCallback);
		if (saveLogin) {
			storePlayFabInfo(username, pass);
			game.global.playFabLoginType = 2;
		}
		else game.global.playFabLoginType = -1;
	}
	catch (e){
		error.innerHTML = "Unable to send registration request to PlayFab.";
	}
}

function playFabLoginWithPlayFab(username, pass){
	var error = document.getElementById("playFabLoginError");
	if (typeof PlayFab === 'undefined' || typeof PlayFab.ClientApi === 'undefined'){
		error.innerHTML = "Unable to Initialize the PlayFab API. Please check to make sure third-party scripts are enabled for Trimps, and that PlayFab is not blocked.";
		return;
	}
	var saveLogin = false;
	if (!username || !pass){
		var nameElem = document.getElementById("loginUserName");
		var passElem = document.getElementById("loginPassword");
		var rememberElem = document.getElementById("rememberInfo");
		if (rememberElem && rememberElem.checked == true) saveLogin = true;
		if (nameElem == null || passElem == null){
			//Elements required to login are missing, rebuild login screen
			tooltip("PlayFab Login", null, "update");
			return;
		}
		else{
			username = nameElem.value;
			pass = passElem.value;
		}
	}
	var requestData = {
		TitleId: "9186",
		Username: username,
		Password: pass
	}
	try {
		PlayFab.ClientApi.LoginWithPlayFab(requestData, playFabLoginCallback);
		if (saveLogin) {
			storePlayFabInfo(username, pass);
			game.global.playFabLoginType = 2;
			game.global.rememberInfo = true;
		}
		else {
			game.global.playFabLoginType = -1;
			game.global.rememberInfo = false;
			}
	}
	catch (e){
		error.innerHTML = "Unable to send login request to PlayFab.";
	}
}


function playFabLoginWithKongregate(attempt){
	var error = document.getElementById("playFabLoginError");
	if (typeof PlayFab === 'undefined' || typeof PlayFab.ClientApi === 'undefined'){
		error.innerHTML = "Unable to Initialize the PlayFab API. Please check to make sure third-party scripts are enabled for Trimps, and that PlayFab is not blocked.";
		return;
	}
	if (typeof kongregate === 'undefined'){
		console.log("something went wrong... Kongregate defined but not defined?");
		//This should really never get to this function if Kongregate isn't defined
		return;
	}
	var userId = (kongregate && kongregate.services && kongregate.services.getUserId) ? kongregate.services.getUserId() : 0;
	if (userId == 0){
			if (!error) tooltip("PlayFab Login", null, "update");
			if (error) error.innerHTML = "You must be logged in to Kongregate to do that.";
			if (kongregate && (typeof kongregate.services === 'undefined' || typeof kongregate.services.getUserId === 'undefined')) {
				if (!attempt) attempt = 2;
				else attempt++;
				if (attempt < 6) {
					if (error) error.innerHTML += "&nbsp;<span class='greenText'>Attempting to Connect again, attempt: " + attempt + "/5</span>";
					setTimeout(function() {
						playFabLoginWithKongregate(attempt);
					}, 1500)
				}
				else if (error) error.innerHTML += " Unable to connect after 5 tries.";
			}
		return;
	}
	var authTicket = kongregate.services.getGameAuthToken();
	var requestData = {
		TitleId: "9186",
		KongregateId: userId,
		AuthTicket: authTicket,
		CreateAccount: true
	}
	try {
		PlayFab.ClientApi.LoginWithKongregate(requestData, playFabLoginCallback);
		game.global.playFabLoginType = 1;
	}
	catch (e){
		error.innerHTML = "Unable to send login request to PlayFab.";
		//Not sure if this will ever trigger, better safe
	}
}

function playFabLoginCallback(data, error){
	if (error){
		var errorElem = document.getElementById("playFabLoginError");
		if (errorElem != null && error.errorMessage){
			errorElem.style.display = "block";
			errorElem.innerHTML = error.errorMessage;
		}
		return;
	}
	if (data){
		playFabId = data.data.PlayFabId;
		if (playFabSaveErrors > 0) {
			playFabAttemptReconnect(true);
			return;
		}
		cancelTooltip();
		playFabSaveCheck();
	}
}

function cancelPlayFab(){
	cancelTooltip();
	playFabId = -1;
	game.global.playFabLoginType = -1;
}

function playFabSaveCheck(){
	if (playFabId == -1) return false;
	if (typeof PlayFab === 'undefined' || typeof PlayFab.ClientApi === 'undefined'){
		//Should never get this far without the api
		console.log(error);
		return;
	}
	var requestData = {
		Keys: ["totalHeliumEarned", "highestLevelCleared", "totalZones"],
		PlayFabId: playFabId
	}
	try {
		PlayFab.ClientApi.GetUserData(requestData, playFabSaveCheckCallback);
	}
	catch (e){console.log(e);}
}

function playFabSaveCheckCallback(data, error){
	if (error){
		console.log("error checking existing PlayFab data");
		console.log(error);
		return;
	}
	if (data){
		var playFabHelium = (data.data.Data.totalHeliumEarned) ? parseFloat(data.data.Data.totalHeliumEarned.Value) : 0;
		var playFabHighestZone = (data.data.Data.highestLevelCleared) ? parseFloat(data.data.Data.highestLevelCleared.Value) : 0;
		var playFabTotalZones = (data.data.Data.totalZones) ? parseFloat(data.data.Data.totalZones.Value) : 0;
		if (playFabHelium > parseFloat(game.global.totalHeliumEarned) || playFabHighestZone > parseFloat(game.global.highestLevelCleared) || (playFabTotalZones > (game.stats.zonesCleared.value + game.stats.zonesCleared.valueTotal))){
			tooltip("PlayFab Conflict", null, "update", playFabHelium, playFabHighestZone, playFabTotalZones);
			return;
		}
		playFabFinishLogin(false);
	}
}

function playFabFinishLogin(downloadFirst){
	if (downloadFirst){
		loadFromPlayFab();
		return;
	}
	cancelTooltip();
	game.options.menu.usePlayFab.enabled = 1;
	toggleSetting("usePlayFab", null, false, true);
}

function saveToPlayFab(saveString){
	if (game.global.isBeta) return;
	if (!playFabId || typeof PlayFab === 'undefined' || typeof PlayFab.ClientApi === 'undefined') return false;
	var requestData = {
		TitleId: "9186",
		Data: {
			saveString: saveString,
			totalHeliumEarned: game.global.totalHeliumEarned,
			highestLevelCleared: game.global.highestLevelCleared,
			totalZones: (game.stats.zonesCleared.value + game.stats.zonesCleared.valueTotal)
		}
	}
	try{
		PlayFab.ClientApi.UpdateUserData(requestData, saveToPlayFabCallback);
	}
	catch(e){console.log(e);}

}

var playFabSaveErrors = 0;

function saveToPlayFabCallback(data, error){
	if (error){
		playFabSaveErrors++;
		message("无法将您的保存备份到PlayFab！ 仔细检查您的互联网连接，不要忘记手动备份您的保存。", "Notices");
		swapClass("iconState", "iconStateBad", document.getElementById('playFabIndicator'));
		console.log(error);
		if (playFabId != -1) {
			playFabAttemptReconnect();
		}
		return false;
	}
	if (data){
		swapClass("iconState", "iconStateGood", document.getElementById('playFabIndicator'));
		lastOnlineSave = performance.now();
		message("游戏保存并备份到PlayFab！ 下次自动在线保存30分钟。", "Notices", null, "save");
		return true;
	}
}

function playFabAttemptReconnect(reconnected){
	console.log((reconnected) ? "Reconnected" : "Attempting to reconnect");
	if (reconnected){
		playFabSaveErrors = 0;
		message("重新连接到PlayFab！", "Notices", null, "save");
		swapClass("iconState", "iconStateGood", document.getElementById('playFabIndicator'));
		return;
	}
	if (game.global.playFabLoginType >= 1) tryPlayFabAutoLogin();
}

function loadFromPlayFab(){
	if (!playFabId || typeof PlayFab === 'undefined' || typeof PlayFab.ClientApi === 'undefined') return false;
	var requestData = {
		Keys: ["saveString"],
		PlayFabId: playFabId
	}
	try{
		PlayFab.ClientApi.GetUserData(requestData, loadFromPlayFabCallback);
	}
	catch(e){console.log(e);}
}

function loadFromPlayFabCallback(data, error){
	if (error){
		console.log(error);
		return;
	}
	if (data){
		var id = playFabId;
		if (load(data.data.Data.saveString.Value, false, true)){
			playFabId = id;
			playFabFinishLogin();
			game.options.displayed = (document.getElementById('settingsHere').style.display == "block");
			return;
		}
		game.options.menu.usePlayFab.enabled = 0;
		toggleSetting("usePlayFab", null, false, true);
		playFabId = -1;
	}
}

function storePlayFabInfo(name, pass){
	try{
		localStorage.setItem("playFabName", name);
		localStorage.setItem("playFabPass", pass);
	}
	catch(e){console.log(e)}
	return false;
}

function readPlayFabInfo(){
	var info = [false, false];
	try {
		info[0] = localStorage.getItem("playFabName");
		info[1] = localStorage.getItem("playFabPass");
	}
	catch (e) {console.log(e)}
	if (info[0] && info[1]) return info;
	return false;
}

var loops = 0;
function gameLoop(makeUp, now) {
    gather(makeUp);
    craftBuildings();
	if (game.global.trapBuildToggled && game.global.trapBuildAllowed && game.global.buildingsQueue.length === 0) autoTrap();
    breed(makeUp);
    battleCoordinator(makeUp);
	if (game.global.titimpLeft) game.global.titimpLeft -= 0.1;
	loops++;
	//every 400ms
	if (loops % 4 == 0){
		buyAutoStructures();
	}
	//every half second
	if (loops % 5 == 0){
		if (game.global.autoUpgradesAvailable) autoUpgrades();
	}
	//every second
	if (loops % 10 == 0){
		runEverySecond(makeUp);
	}
	//every 2 seconds
	if (loops % 20 == 0){
		if (mutations.Living.active()){
			mutations.Living.change();
		}
	}
	if (game.talents.autoJobs.purchased){
		//Ratio jobs every 30 seconds (or every zone, see nextWorld)
		if (loops % 300 == 0){
			buyAutoJobs(true);
		}
		//Non ratio jobs every 2 seconds (non ratio jobs are still purchased with buyAutoJobs(true))
		else if (loops % 20 == 0){
			buyAutoJobs();
		}
	}
	//loot averages
	if (loops % game.settings.ewma_ticks == 0){
		if (game.options.menu.useAverages.enabled) curateAvgs();
	}

	if (mutations.Magma.active()) generatorTick();
	if (!makeUp) postMessages();
}

function runEverySecond(makeUp){
	//Change game state
	if (game.global.challengeActive == "Decay") updateDecayStacks(true);
	if (game.global.challengeActive == "Daily" && typeof game.global.dailyChallenge.pressure !== 'undefined') dailyModifiers.pressure.addSecond();
	if (game.global.autoStorage == true) autoStorage();
	if (game.global.sugarRush > 0) sugarRush.tick();
	//Achieves
	checkAchieve("totalGems");
	if (game.buildings.Trap.owned > 1000000) giveSingleAchieve("Hoarder");
	if (Math.floor(game.stats.heliumHour.value()) == 1337) giveSingleAchieve("Elite Feat");
	//Display and stats
	if (savedOfflineText && !game.global.lockTooltip) {
		tooltip("守信的脆皮", null, "update", savedOfflineText);
		savedOfflineText = "";
	}
	if (trimpStatsDisplayed) displayAllStats();
	if (game.resources.helium.owned > 0){
		 game.stats.bestHeliumHourThisRun.evaluate();
		 document.getElementById("heliumPh").innerHTML = prettify(game.stats.heliumHour.value()) + "/hr";
		 checkAchieve("heliumHour");
	}
	if (game.stats.bestFluffyExp.value > 0) game.stats.bestFluffyExpHourThisRun.evaluate();
	if (game.global.selectedChallenge == "Daily") updateDailyClock();
	Fluffy.handleBox();
	updatePortalTimer();
	if (playerSpire.initialized)
		playerSpire.moveEnemies(makeUp);
}

function getGameTime(){
	return game.global.start + game.global.time;
}

function gameTimeout() {
	if (game.options.menu.pauseGame.enabled) {
		setTimeout(gameTimeout, 100);
		return;
	}
	var now = new Date().getTime();
	//4432
	if ((now - game.global.start - game.global.time) > 3600000){
		checkOfflineProgress();
		game.global.start = now;
		game.global.time = 0;
		game.global.lastOnline = now;
		setTimeout(gameTimeout, (1000 / game.settings.speed));
		return;
	}
	game.global.lastOnline = now;
    var tick = 1000 / game.settings.speed;
    game.global.time += tick;
	var dif = (now - game.global.start) - game.global.time;
    while (dif >= tick) {
        runGameLoop(true, now);
        dif -= tick;
        game.global.time += tick;
		ctrlPressed = false;
	}
    runGameLoop(null, now);
    updateLabels();
    setTimeout(gameTimeout, (tick - dif));
}

/**
 * Passes parameters to gameLoop, handles errors.
 * @param  {bool} makeUp makeUp causes the function to loop to exhaust ticks
 * @param  {Date} now    Date.now()
 */
function runGameLoop(makeUp, now) {
	try {
		gameLoop(makeUp, now);
	} catch (e) {
		unlockTooltip(); // Override any other tooltips
		tooltip('hide');
		tooltip('Error', null, 'update', e.stack);
		throw(e);
	}
}
function updatePortalTimer(justGetTime) {
	if (game.global.portalTime < 0) return;
	var timeSince = getGameTime() - game.global.portalTime;
	timeSince /= 1000;
	var days = Math.floor(timeSince / 86400);
	var hours = Math.floor( timeSince / 3600) % 24;
	var minutes = Math.floor(timeSince / 60) % 60;
	var seconds = Math.floor(timeSince % 60);
	var timeArray = [days, hours, minutes, seconds];
	var timeString = "";
	for (var x = 0; x < 4; x++){
		var thisTime = timeArray[x];
		thisTime = thisTime.toString();
		timeString += (thisTime.length < 2) ? "0" + thisTime : thisTime;
		if (x != 3) timeString += ":";
	}
	if (justGetTime) return timeString;
	if (game.options.menu.pauseGame.enabled) timeString = timeString + " (PAUSED)";
	document.getElementById("portalTime").textContent = timeString;
}

function preventZoom(elem){
	elem.addEventListener("wheel", zoomShortcut); //add the event
}
  
function zoomShortcut(e){
	if(e.ctrlKey){
		event.preventDefault();
	}
}

function mapLevelHotkey(up){
	if (!game.global.preMapsActive) return;
	if (!game.options.menu.hotkeys.enabled) return;
	var worldInput = (parseInt(document.getElementById('mapLevelInput').value, 10));
	var extraLevelsAvailable = (game.global.highestLevelCleared >= 209);
	var extraElem = document.getElementById('advExtraLevelSelect');
	var extraSetting = parseInt(extraElem.value, 10);
	if (worldInput > game.global.world) {
		document.getElementById("mapLevelInput").value = game.global.world;
		updateMapCost();
		return;
	}
	if (worldInput < 6){
		document.getElementById("mapLevelInput").value = 6;
		updateMapCost();
		return;
	}
	if (up){
		if (worldInput < game.global.world) incrementMapLevel(1);
		else if (extraLevelsAvailable && extraSetting < 10) {
			extraElem.value = extraSetting + 1;
		}
		updateMapCost();
		return;
	}
	if (extraLevelsAvailable && extraSetting > 0){
		extraElem.value = extraSetting - 1;
	}
	else {
		if (worldInput > 6) incrementMapLevel(-1);
	}
	updateMapCost();
}

var shiftPressed = false;
var ctrlPressed = false;
// X = 88, h = 72, d = 68, b = 66
document.addEventListener('keydown', function (e) {
	var checkStatus = function () {
		return game.options.menu.hotkeys.enabled == 1 && !game.global.preMapsActive && !game.global.lockTooltip && !ctrlPressed && !heirloomsShown && !geneMenuOpen && !game.options.displayed && !portalWindowOpen && !trimpStatsDisplayed && !trimpAchievementsOpen;
	};
	var checkLettersOk = function () {
		return game.options.menu.hotkeys.enabled == 1 && !game.global.lockTooltip && !ctrlPressed && !heirloomsShown && !game.options.displayed && !portalWindowOpen && !trimpStatsDisplayed && !trimpAchievementsOpen;
	};
	switch(e.keyCode){
		case 27:
			cancelTooltip();
			break;
		case 16:
			shiftPressed = true;
			if (typeof onShift === 'function') onShift();
			onShift = null;
			break;
		case 17:
		case 224:
		case 91:
		case 93:
			var wasCtrl = ctrlPressed;
			ctrlPressed = true;
			if (!wasCtrl){
				toggleGeneticistassist(true);
				checkButtons("upgrades");
				if (game.global.buyTab == "nature")
					updateNatureInfoSpans();
				if (game.global.buyTab == "talents") displayTalents();
			}
			e.preventDefault();
			break;
		
		case 192: // `
		case 48: //0
		case 96: //num0
			if (playerSpire.popupOpen)
				playerSpire.selectTrap("sell");
			break;
		case 49: //1
		case 97: //num1
			if (playerSpire.popupOpen && !playerSpireTraps.Fire.locked){
				playerSpire.selectTrap("Fire");
				break;
			}
		case 88: //x
			if (checkStatus() && game.upgrades.Formations.done) setFormation('0');
			break;
		case 50: //2
		case 98: //num2
			if (playerSpire.popupOpen && !playerSpireTraps.Frost.locked){
				playerSpire.selectTrap("Frost");
				break;
			}
		case 72: //h
			if (checkStatus() && game.upgrades.Formations.done) setFormation('1');
			break;
		case 51: //3
		case 99: //num3
			if (playerSpire.popupOpen && !playerSpireTraps.Poison.locked){
				playerSpire.selectTrap("Poison");
				break;
			}
		case 68: //d
			if (checkStatus() && game.upgrades.Dominance.done) setFormation('2');
			break;
		case 52: //4
		case 100: //num4
			if (playerSpire.popupOpen && !playerSpireTraps.Lightning.locked){
				playerSpire.selectTrap("Lightning");
				break;
			}
		case 66: //b
			if (checkStatus() && game.upgrades.Barrier.done) setFormation('3');
			break;
		case 53: //5
		case 101: //num5
			if (playerSpire.popupOpen && !playerSpireTraps.Strength.locked){
				playerSpire.selectTrap("Strength");
				break;
			}
		case 83: //s
			if (checkStatus() && game.global.world >= 60 && game.global.highestLevelCleared >= 180) setFormation('4');
			break;
		case 54: //6
		case 102: //num6
			if (playerSpire.popupOpen && !playerSpireTraps.Condenser.locked)
				playerSpire.selectTrap("Condenser");
			break;
		case 55: //7
		case 103: //num7
			if (playerSpire.popupOpen && !playerSpireTraps.Knowledge.locked)
				playerSpire.selectTrap("Knowledge");
			break;
		case 13:
			var confirmCheck = document.getElementById("confirmTooltipBtn");
			if (confirmCheck !== null && typeof confirmCheck.onclick == 'function'){
				confirmCheck.onclick();
			}
			break;
		case 77:
			// M for maps
			if (checkLettersOk() && game.global.mapsUnlocked) {
				mapsClicked();
			}
			break;
		case 82:
			// R for repeat
			if (checkLettersOk() && game.global.mapsActive) {
				repeatClicked();
			}
			break;
		case 65:
			// A for AutoFight
			if (checkLettersOk() && game.global.autoBattle) {
				pauseFight();
			}
			break;
		case 32:
			// Space for pause
			if (checkLettersOk()){
				toggleSetting('pauseGame');
			}
			break;
		case 70:
			// F for fight
			if (checkLettersOk() && game.upgrades.Battle.done) {
				fightManual();
			}
			break;
		case 38: 
			//Up arrow for map levels
			mapLevelHotkey(true);
			break;
		case 40: 
			//Down arrow for map levels
			mapLevelHotkey(false);
			break;
	}
}, true);
document.addEventListener('keyup', function(e) {
	if (e.keyCode == 16){
		if (game.options.menu.tooltips.enabled == false) tooltip('hide');
		shiftPressed = false;
	}
	if (e.keyCode == 17 || e.keyCode == 224 || e.keyCode == 91 || e.keyCode == 93){
		ctrlPressed = false;
		checkButtons("upgrades");
		toggleGeneticistassist(true);
		if (game.global.buyTab == "nature")
			updateNatureInfoSpans();
		if (game.global.buyTab == "talents") 
			displayTalents();
	}

}, true);

function cnstat(stat) {
    //统计汉化
    var cnstat = "";
    var stat = stat;
    if (stat == "Dead Trimps") {
        cnstat = "死去的脆皮"
    } else if (stat == "Battles Won") {
        cnstat = "战斗胜利"
    } else if (stat == "Battles Lost") {
        cnstat = "战斗失败"
    } else if (stat == "Maps Cleared") {
        cnstat = "地图清除"
    } else if (stat == "Zones Cleared") {
        cnstat = "区域清除"
    } else if (stat == "Gems Collected") {
        cnstat = "宝石收集"
    } else if (stat == "Wormholed Helium") {
        cnstat = "虫洞氦气"
    } else if (stat == "He/Hour this Run") {
        cnstat = "本次游戏氦/小时"
    } else if (stat == "Best He/Hr this Run") {
        cnstat = "本轮游戏中最高的氦/小时"
    } else if (stat == "Highest Void Map Clear") {
        cnstat = "最高虚空地图清除"
    } else if (stat == "Golden Upgrades") {
        cnstat = "黄金升级"
    } else if (stat == "Heirlooms Found") {
        cnstat = "传家宝发现"
    } else if (stat == "Daily Challenge Helium") {
        cnstat = "每日的挑战氦"
    } else if (stat == "World Cells Overkilled") {
        cnstat = "超杀世界单元格敌人数量"
    } else if (stat == "Trimps from Generator") {
        cnstat = "维度发生器生产的脆皮"
    } else if (stat == "Nurseries Closed by Magma") {
        cnstat = "由岩浆封闭的幼儿园"
    } else if (stat == "Zones Liquified") {
        cnstat = "区域液化"
    } else if (stat == "Highest Zone") {
        cnstat = "最高区域"
    } else if (stat == "Total Portals Used") {
        cnstat = "使用的总传送门"
    } else if (stat == "Total Helium Earned") {
        cnstat = "获得总氦气"
    } else if (stat == "Best He/Hour all Runs") {
        cnstat = "所有轮游戏中最高的氦/小时"
    } else if (stat == "Planets Broken") {
        cnstat = "行星破碎"
    } else {
        return stat;
    }
    return cnstat;
}
function cnitem(item) {
    //汉化变量
    var cnitem = "";
    var temp = item;
    if (temp == "food") {
        cnitem = "食物";
    } else if (temp == "wood") {
        cnitem = "木头";
    } else if (temp == "metal") {
        cnitem = "金属";
    } else if (temp == "fragments") {
        cnitem = "碎片";
    } else if (temp == "gems") {
        cnitem = "宝石";
    } else if (temp == "helium") {
        cnitem = "氦";
    } else if(temp=="science"){
           cnitem = "科学";   
    } else {
        return item;
    }
    return cnitem;
}

function cntalentname(name){
    //专精汉化
        var cntalentname="";
    var temp=name;
        if(temp=="Bionic Magnet I"){
            cntalentname="仿生磁 I"
        }else if(temp=="Bionic Magnet II"){
            cntalentname="仿生磁 II"
        }else if(temp=="Portal Generator"){
            cntalentname="传送门生成器"
        }else if(temp=="Bounty Hunter"){
            cntalentname="赏金猎人"
        }else if(temp=="Home Detector"){
            cntalentname="家庭探测器"
        }else if(temp=="Turkimp Tamer I"){
            cntalentname="驯兽师 I"
        }else if(temp=="Turkimp Tamer II"){
            cntalentname="驯兽师 II"
        }else if(temp=="Turkimp Tamer III"){
            cntalentname="驯兽师 III"
        }else if(temp=="Turkimp Tamer IV"){
            cntalentname="驯兽师 IV"
        }else if(temp=="Void Power I"){
            cntalentname="虚空力量 I"
        }else if(temp=="Void Power II"){
            cntalentname="虚空力量 II"
        }else if(temp=="Void Power III"){
            cntalentname="虚空力量 III"
        }else if(temp=="Metallic Coat"){
            cntalentname="金属外套"
        }else if(temp=="Headstart I"){
            cntalentname="领先地位 I"
        }else if(temp=="Headstart II"){
            cntalentname="领先地位 II"
        }else if(temp=="Headstart III"){
            cntalentname="领先地位 III"
        }else if(temp=="Foremany"){
            cntalentname="脱颖而出"
        }else if(temp=="Map Reducer I"){
            cntalentname="地图还原剂 I"
        }else if(temp=="Map Reducer II"){
            cntalentname="地图还原剂 II"
        }else if(temp=="Double Build"){
            cntalentname="双重建造"
        }else if(temp=="King of Bones I"){
            cntalentname="骨头之王 I"
        }else if(temp=="King of Bones II"){
            cntalentname="骨头之王 II"
        }else if(temp=="Hyperspeed I"){
            cntalentname="超高速 I"
        }else if(temp=="Hyperspeed II"){
            cntalentname="超高速 II"
        }else if(temp=="Blacksmithery I"){
            cntalentname="黑煅炼 I"
        }else if(temp=="Blacksmithery II"){
            cntalentname="黑煅炼 II"
        }else if(temp=="Blacksmithery III"){
            cntalentname="黑煅炼 III"
        }else if(temp=="Quick Gen"){
            cntalentname="快速第二代"
        }else if(temp=="AutoStructure"){
            cntalentname="自动结构"
        }else if(temp=="Magma Flow"){
            cntalentname="岩浆流"
        }else if(temp=="Natural Diplomacy I"){
            cntalentname="自然外交 I"
        }else if(temp=="Natural Diplomacy II"){
            cntalentname="自然外交 II"
        }else if(temp=="Natural Diplomacy III"){
            cntalentname="自然外交 III"
        }else if(temp=="Liquification I"){
            cntalentname="液化 I"
        }else if(temp=="Liquification II"){
            cntalentname="液化 II"
        }else if(temp=="Magmamancermancy"){
            cntalentname="大巫师"
        }else if(temp=="Patience"){
            cntalentname="忍耐"
        }else if(temp=="Still Rowing I"){
            cntalentname="持续赛艇 I"
        }else if(temp=="Still Rowing II"){
            cntalentname="持续赛艇 II"
        }else if(temp=="Strength in Health"){
            cntalentname="生命的力量"
        }else if(temp=="Void Specialization I"){
            cntalentname="虚空专精 I"
        }else if(temp=="Void Specialization II"){
            cntalentname="虚空专精 II"
        }else{
            return name;
        }
    return cntalentname;
}
function cnresourcetype(type){
    //汉化地图资源类型
    var cnresourcetype="";
    var temp=type;
    if((temp=="Food")||((temp=="food"))){
        cnresourcetype="食物"
    }else if(temp=="Metal"){
        cnresourcetype="金属"
    }else if((temp=="Wood")||((temp=="wood"))){
        cnresourcetype="木头"
    }else if((temp=="Metal")||((temp=="metal"))){
        cnresourcetype="金属"
    }else if((temp=="Barn")||((temp=="barn"))){
        cnresourcetype="仓库"
    }else if((temp=="Shed")||((temp=="shed"))){
        cnresourcetype="木棚"
    }else if((temp=="Forge")||((temp=="forge"))){
        cnresourcetype="锻造"
    }else if((temp=="Gems")||(temp=="gems")){
        cnresourcetype="宝石"
    }else if(temp=="Any"){
        cnresourcetype="所有"
    }else if((temp=="Fragments")||(temp=="fragments")){
        cnresourcetype="碎片"
    }else{
        return type;
    }
    return cnresourcetype;
}
function cntequan(what){
    //汉化地图资源类型
    var cntequan="";
    var temp=what;
    if(temp=="Agility"){
        cntequan="敏捷"
    }else if(temp=="Bait"){
        cntequan="诱饵"
    }else if(temp=="Pheromones"){
        cntequan="信息素"
    }else if(temp=="Packrat"){
        cntequan="包装"
    }else if(temp=="Motivation"){
        cntequan="动机"
    }else if(temp=="Power"){
        cntequan="力量"
    }else if(temp=="Toughness"){
        cntequan="坚韧"
    }else if(temp=="Looting"){
        cntequan="掠夺"
    }else if(temp=="Trumps"){
        cntequan="法宝"
    }else if(temp=="Discipline"){
        //从这里开始是时间传送门下的按钮
        cntequan="纪律"
    }else if(temp=="Daily"){
        cntequan="日常"
    }else if(temp=="Metal"){
        cntequan="金属"
    }else if(temp=="Size"){
        cntequan="尺寸"
    }else if(temp=="Balance"){
        cntequan="平衡"
    }else if(temp=="Scientist V"){
        cntequan="科学家 V"
    }else if(temp=="Scientist"){
        cntequan="科学家"
    }else if(temp=="Looting II"){
        cntequan="劫掠 II"
    }else if(temp=="Carpentry II"){
        cntequan="木工 II"
    }else if(temp=="Power II"){
        cntequan="力量 II"
    }else if(temp=="Toughness II"){
        cntequan="坚韧 II"
    }else if(temp=="Capable"){
        cntequan="能力"
    }else if(temp=="Cunning"){
        cntequan="狡猾"
    }else if(temp=="Curious"){
        cntequan="好奇"
    }else if(temp=="Overkill"){
        cntequan="超杀"
    }else if(temp=="Resourceful"){
        cntequan="足智多谋"
    }else if(temp=="Coordinated"){
        cntequan="协调"
    }else if(temp=="Siphonology"){
        cntequan="虹吸学"
    }else if(temp=="Anticipation"){
        cntequan="预期"
    }else if(temp=="Resilience"){
        cntequan="弹性"
    }else if(temp=="Meditation"){
        cntequan="冥想"
    }else if(temp=="Relentlessness"){
        cntequan="无情"
    }else if(temp=="Carpentry"){
        cntequan="木工"
    }else if(temp=="Artisanistry"){
        cntequan="艺术性"
    }else if(temp=="Range"){
        cntequan="范围"
    }else if(temp=="Motivation II"){
        cntequan="动机 II"
    }else if(temp=="Meditate"){
        cntequan="冥想"
    }else if(temp=="Decay"){
        cntequan="衰变"
    }else if(temp=="Trimp"){
        cntequan="脆皮"
    }else if(temp=="Trapper"){
        cntequan="捕手"
    }else if(temp=="Electricity"){
        cntequan="电流"
    }else if(temp=="Frugal"){
        cntequan="节俭"
    }else if(temp=="Life"){
        cntequan="生命"
    }else if(temp=="Nom"){
        cntequan="美味"
    }else if(temp=="Lead"){
        cntequan="领导"
    }else if(temp=="Watch"){
        cntequan="观望"
    }else if(temp=="Mapocalypse"){
        cntequan="地图的启示"
    }else if(temp=="Mapology"){
        cntequan="地图学"
    }else if(temp=="Coordinate"){
        cntequan="协同"
    }else if(temp=="Crushed"){
        cntequan="粉碎"
    }else if(temp=="Toxicity"){
        cntequan="毒性"
    }else if(temp=="Devastation"){
        cntequan="破坏"
    }else if(temp=="Corrupted"){
        cntequan="腐化"
    }else if(temp=="Slow"){
        cntequan="迟钝"
    }else{
        return what;
    }
    return cntequan;
}

function cntime(time) {
    //汉化时间（加上怪名）
    var cntime = "";
    var temp = time;
    if (temp == "Monday") {
        cntime = "周一";
    } else if (temp == "Tuesday") {
        cntime = "周二";
    } else if (temp == "Wednesday") {
        cntime = "周三";
    } else if (temp == "Thursday") {
        cntime = "周四";
    } else if (temp == "Friday") {
        cntime = "周五";
    } else if (temp == "Saturday") {
        cntime = "周六";
    } else if(temp=="Sunday"){
        cntime = "周日"; 
    } else if(temp=="Improbability"){
        cntime = "无序"; 
    } else if(temp=="Corrupt"){
        cntime = "腐败"; 
    } else {
        console.log("测试"+time)
        return time;
    }
    return cntime;
}

    function cnmap(map) {
    //汉化地图
    var cnmap = "";
    var temp = map;
    if (temp == "Dimension of Anger") {
        cnmap = "愤怒维度";
    } else if (temp == "The Prison") {
        cnmap = "监狱";
    } else if (temp == "Bionic Wonderland") {
        cnmap = "仿生仙境";
    } else if (temp == "The Block") {
        cnmap = "障碍区";
    } else if (temp == "The Wall") {
        cnmap = "高墙";
    } else if (temp == "Trimple Of Doom") {
        cnmap = "末日之神殿";
    } else if(temp=="Imploding Star"){
        cnmap = "爆炸之星";   
    } else {
        return map;
    }
    return cnmap;
}

    function cngen(text) {
    //汉化维度发生器升级标题
    var cngen = "";
    var temp = text;
    if (temp == "Efficiency") {
        cngen = "效率";
    } else if (temp == "Capacity") {
        cngen = "容量";
    } else if (temp == "Supply") {
        cngen = "供给";
    } else if (temp == "Overclocker") {
        cngen = "超频";
    } else if (temp == "Hybridization") {
        cngen = "混合";
    } else if (temp == "Storage") {
        cngen = "存储";
    } else if (temp=="Shielding"){
        cngen = "屏障";   
    } else if (temp=="Slowburn"){
        cngen = "缓慢燃烧";   
    } else if (temp=="Supervision"){
        cngen = "管理";   
    } else if (temp=="Simulacrum"){
        cngen = "复制";   
    } else {
        return text;
    }
    return cngen;
}

load();
displayPerksBtn();

setTimeout(autoSave, 60000);
costUpdatesTimeout();
setTimeout(gameTimeout, (1000 / game.settings.speed));

preventZoom(document.getElementById('talentsContainer'));
document.getElementById('mapLevelInput').addEventListener('keydown', function(e) {
    if (e.which === 38 || e.which === 40) {
        e.preventDefault();
    }
});
