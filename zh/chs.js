/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

var cnItems = {
    _OTHER_: [],
    //段末标点处理
    '.': '。',
    '"': '',
    //段末标点处理结束
    //主界面
    'Gather': '采集',
    'Chop': '砍伐',
    'Mine': '采矿',
    'Science': '科学点',
    'Research': '研究',
    'Fragments': '碎片',
    'Well Fed': '营养充足',
    'Fluffy': '绒绒',
    'Scruffy': '污污',
    'Trapping (': '捕捉中 (',
    'Story': '故事',
    'Loot': '劫掠',
    'Unlocks': '解锁',
    'Combat': '战斗',
    'Message Config': '消息设置',
    'AutoTraps On': '开启自动陷阱捕捉',
    'AutoTraps Off': '关闭自动陷阱捕捉',
    'Build': '建造',
    'Nothing in queue...': '队列空无一物……',
    'All': '全部',
    'Buildings': '建筑',
    'Jobs': '工作',
    'Upgrades': '升级',
    'Equipment': '装备',
    'Mastery': '专精',
    'Nature': '自然',
    'Spire': '尖塔',
    'Custom': '自定义',
    'Max': '最大',
    'Buy Max': '购买最大数量',
    'Switching to this option will spend the majority of your resources with each purchase.': '切换为此选项，则每次购买都会使用绝大部分的资源。',
    'AutoStructure On': '开启自动建造',
    'AutoStructure Off': '关闭自动建造',
    'Click twice to customize.': '双击以自定义。',
    'Configure AutoStructure': '自动建造设置',
    'Enabling this will cause your Trimps to automatically add a storage building to the queue if you reach max capacity. This will work on and offline if enabled.': '启用后，当资源到达上限时，自动建造相应的存储建筑。在线和离线时都可以生效。',
    'AutoStorage On': '开启自动存储',
    'AutoStorage Off': '关闭自动存储',
    'AutoJobs On': '开启自动工作',
    'AutoJobs Off': '关闭自动工作',
    'Configure AutoJobs': '自动工作设置',
    'Fire Trimps': '解雇脆皮',
    'AutoGold': '自动金色升级',
    'AutoGold Off': '关闭自动金色升级',
    'AutoGold Helium': '金色升级氦',
    'AutoGold Battle': '金色升级战斗',
    'AutoGold Voidlium': '金色升级虚空氦',
    'AutoGold Voidtle': '金色升级虚空战斗',
    'AutoGold Radon': '金色升级氡',
    'AutoGold Voidon': '金色升级虚空氡',
    'AutoPrestige': '自动重铸装备',
    'AutoPrestige Off': '关闭自动重铸',
    'AutoPrestige All': '全部自动重铸',
    'Weapons Only': '只重铸武器',
    'Weapons First': '优先重铸武器',
    'AutoUpgrade': '自动升级',
    'AutoUpgrade On': '开启自动升级',
    'AutoUpgrade Off': '关闭自动升级',
    'AutoEquip On': '开启自动装备',
    'AutoEquip Off': '关闭自动装备',
    'Configure AutoEquip': '自动装备设置',
    'Respec Masteries': '专精洗点',
    'Respec (': '洗点(',
    'Your next mastery costs': '下一个专精花费',
    'No Formation': '无阵型',
    'Clear your formations, return to normal stats, and derp around the battlefield. (Hotkeys: X or': '取消阵型，恢复正常状态，在战场上瞎转悠。(快捷键：X或',
    'Heap Formation': '堆叠阵型',
    'Trimps gain 4x health but lose half of their attack and block. (Hotkeys: H or': '脆皮生命值变为4倍，但减少一半的攻击力和格挡。(快捷键：H或',
    'Dominance Formation': '支配阵型',
    'Trimps gain 4x attack but lose half of their health and block. (Hotkeys: D or': '脆皮攻击力变为4倍，但减少一半的生命值和格挡。(快捷键：D或',
    'Barrier Formation': '屏障阵型',
    'Trimps gain 4x block and 50% block pierce reduction but lose half of their health and attack. (Hotkeys: B or': '脆皮格挡变为4倍，并且使敌人的格挡穿透伤害减少50%，但减少一半的生命值和攻击力。(快捷键：B或',
    'Scryer Formation': '占卜者阵型',
    'DMG': '攻击力',
    'BLK': '格挡',
    'MagnetoShriek': '电磁尖啸',
    'Crushing Blows': '粉碎之击',
    'Your current health is higher than your block, making you vulnerable to critical strikes from your enemies. Better fix that...': '您目前的生命值高于格挡，敌人的攻击可能造成暴击。最好修正之……',
    'AutoFight On': '开启自动战斗',
    'AutoFight Off': '关闭自动战斗',
    'Maps': '地图',
    'Configure Maps': '地图设置',
    'Repeat Map': '重复地图',
    'Repeat On': '开启重复',
    'Repeat Off': '关闭重复',
    'Heirlooms': '传家宝',
    'Finish Daily': '完成日常',
    'Exit Spire': '退出尖塔',
    'Show/Hide Map Config': '显示/隐藏地图设置',
    'Map Preset': '地图预设',
    'Save Map Settings': '保存地图设置',
    'Reset Map Settings': '重置地图设置',
    'Recycle All': '全部回收',
    'Difficulty': '难度',
    'Biome': '生物群落',
    'Random': '随机',
    'Special Modifier': '特殊修饰符',
    'Perfect Sliders': '完美滑块',
    'Extra Zones': '额外区域',
    'Items': '物品',
    'Resource': '资源',
    'Continue': '继续',
    'Change Universe': '切换宇宙',
    'Earned All Time': '总获取量',
    'Spent on Perks': '用于特权',
    'Portals Used': '传送次数',
    'Perks': '特权',
    'Preset': '预设',
    'Save': '保存',
    'Load': '加载',
    'Rename': '重命名',
    'Export': '导出',
    'Import': '导入',
	'Less Info': '简略信息',
    'More Info': '详细信息',
    'Remove': '移除',
    '% bonus': '%加成',
    'You do not currently have an active challenge.': '目前没有进行中的挑战。',
    'Abandon Challenge': '放弃挑战',
    'Challenges': '挑战',
    'You can also choose to activate a challenge before using your portal. Completing a challenge will earn you a permanent reward. You can abandon or view an active challenge at any time by clicking the "View Perks" button.': '您还可以在传送前选择一个挑战激活。完成挑战可以获得永久加成。您可以点击“查看特权”按钮来在任何时候放弃或查看激活的挑战。',
    'If you abandon this challenge, the portal will become unstable and the world will restart (you\'ll keep permanent bonuses like helium': '如果您放弃这个挑战，传送门将变得不稳定，整个世界将进行重置(但您仍然可以保留永久的加成，例如氦',
    'Activate Portal': '激活传送门',
    'Cancel': '取消',
    'View Current Challenge': '查看当前的挑战',
    'Swap the Challenge Selection pane to instead display your current challenge, or vice versa': '将挑战选择界面切换为显示您当前的挑战，或者是由显示您当前的挑战切换回挑战选择界面',
    'Clear All Perks': '清空所有特权',
    'Close': '关闭',
    'Achievements': '成就',
    'You are dealing': '您可以多造成',
    '% extra damage': '%伤害',
    'Click on an Achievement on this screen to track it!': '点击任一成就以追踪进度！',
    'Statistics!': '统计!',
    'Trimps Info': '游戏相关信息',
    'Stats': '统计',
    'Achieves': '成就',
    'Settings': '设置',
    'Browse All': '查看全部选项',
    'Choose a Category Below, or Search for a Setting/Keyword': '选择一个类别，或者搜索一个设置/关键字',
    'New': '新获得',
    'General': '常规',
    'Performance': '性能',
    'Quality of Life': '生活质量',
    'Pop-ups and Alerts': '弹出窗口和提醒',
    'Layout': '布局',
    'Other': '其它',
    'Back to Search': '返回搜索',
    'YOUR GAME IS PAUSED!': '游戏已暂停！',
    'Click the flashing timer in the bottom right to unpause.': '点击右下方闪烁的计时器来取消暂停。',
    'Click the flashing timer in the bottom right, or press the spacebar to unpause.': '点击右下方闪烁的计时器，或者按下空格键来取消暂停。',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    //主界面结束
    //建筑相关
    'Trap': '陷阱',
    'Barn': '谷仓',
    'Increases your maximum food by 100%.': '将食物上限增加100%。',
    'Shed': '窝棚',
    'Increases your maximum wood by 100%.': '将木头上限增加100%。',
    'Forge': '锻造厂',
    'Increases your maximum metal by 100%.': '将金属上限增加100%。',
    'Hut': '小屋',
    'House': '宅院',
    'Mansion': '豪宅',
    'Hotel': '宾馆',
    'Resort': '度假村',
    'Gateway': '维度裂隙',
    'Wormhole': '虫洞',
    'This building costs helium to create.': '此建筑需要花费氦来进行建造，请注意。',
    'Collector': '汲能设施',
    'Build a Smithy to help produce better Equipment for your Trimps. Each Smithy in your village increases Trimp Attack and Health by 25% (compounding).': '建造铁匠铺，以帮助制造更好的装备。每个铁匠铺可以使脆皮的攻击力和生命值增加25%(效果叠乘)。',
    'Tribute': '贡品',
    'Pay a tribute of food to your Dragimp, increasing his appetite and his speed. He will gather gems 5% faster (compounding).': '向您的脆皮龙献上贡品，增加它的食欲和速度。它收集宝石的速度将加快5%(效果叠乘)。',
    'Magma is generally not conductive to a healthy Nursery environment. Each Nursery will still increase Trimps per second from breeding by 1% (compounding), but 10% of your active Nurseries will shut down each Zone as the Magma moves closer. Safety first!': '岩浆环境并不适合托儿所。每个托儿所仍然可以增加1%繁殖速度(效果叠乘)，但通过一个区域后，当前数量10%的托儿所将因岩浆逼近而被迫关闭。安全为先！',
    'Construct a gem-powered nursery, where baby Trimps can grow up faster. Increases Trimps per second from breeding by 1% (compounding).': '建造一个宝石供能的托儿所，使脆皮宝宝们成长的更快。每个托儿所可以增加1%繁殖速度(效果叠乘)。',
    'Microchip': '微型芯片',
    'Unlocks a Scientist level, upgrading your portal and': '解锁一级科学家，升级传送门并',
    'Unlocks another Scientist level, upgrading your portal and': '解锁另一级科学家，升级传送门并',
    'allowing you to start with 5000 Science, 100 Food, 100 Wood, 10 Traps, and 1 Foreman every time you Portal to this Universe': '使您在这个宇宙中每次使用传送门后，以5000科学点，100食物，100木头，10陷阱，以及1工头的状态开始游戏',
    'allowing you to start with 5 Barns, 5 Sheds, 5 Forges, and T2 Equipment unlocked every time you Portal to this Universe': '使您在这个宇宙中每次使用传送门后，以5谷仓、5窝棚、5锻造厂，且解锁2级装备的状态开始游戏',
    'allowing you to start with full Trimps and 200% player efficiency every time you Portal to this Universe': '使您在这个宇宙中每次使用传送门后，以满人口脆皮，200%玩家效率的状态开始游戏',
    'allowing you to earn two levels of each prestige upgrade per map. This bonus will apply every time you Portal to this Universe': '使您在这个宇宙中每次使用传送门后，每张地图可以获得两级装备重铸升级',
    'allowing you to permanently increase all Radon found by 0.5% to the power of your current Zone number. You\'ll also start with 1000% player efficiency and 50 Barns, Sheds, and Forges every time you Portal to this Universe': '使您的氡获取量每层区域永久比上一层区域多0.5%。且在这个宇宙中每次使用传送门后，以1000%玩家效率，50谷仓、50窝棚、50锻造厂的状态开始游戏',
    'Microchips attach directly to your Portal Device, and only ever have to be purchased once. Your Portal Device has room for 5 total Microchips.': '微型芯片与传送门装置绑定，只需购买一次即可永久生效。传送门装置一共可以容纳5颗芯片。',
    //建筑相关结束
    //工作相关
    'Farmer': '农民',
    'Lumberjack': '伐木工',
    'Each Geneticist will increase the health of each Trimp by 1% (compounding), but slows the rate at which baby Trimps grow by 2% (compounding).': '每个遗传学家使脆皮的生命值增加1%(效果叠乘)，但使脆皮宝宝的成长速度减少2%(效果叠乘)。',
    'Train a Magmamancer to craft pickaxe heads infused with Gems and Magma, custom for the unique rocks in each Zone. The more Magmamancers you have and the longer you spend in one Zone, the more Metal your Trimps will be able to gather!': '训练一个岩浆巫师来锻造加入宝石和岩浆的镐头，根据每个区域岩石的不同来定制。岩浆巫师越多，或者在当前区域停留的时间越长，脆皮就可以采集更多的金属！',
    'M = Magmamancer count. T = Time on Zone in minutes, divided by 10, rounded down.': 'M=岩浆巫师数量。T=在当前区域停留的分钟数除以10，结果向下取整。',
    'Metal/Sec *= 1 + (((1 - (0.9999 ^ M)) * 3) * ((1.2 ^ T) - 1)': '金属/秒 *= 1 + (((1 - (0.9999 ^ M)) * 3) * ((1.2 ^ T) - 1)',
    'Amalgamator': '合并者',
    'Amalgamators cannot be hired or fired manually. They are magical beings that could barely be considered Trimps anymore, and they will automatically show up to your town whenever your total population to army size ratio rises above': '合并者无法手动雇佣或解雇。它们是已经无法再看成脆皮的神奇存在，当总人口与军队规模的比值超过 ',
    '. At your current army size, you need': '。以目前军队规模来看，您还需要 ',
    'total Trimps to trigger the next Amalgamator.': '总人口，下个合并者才会出现。',
    'Amalgamators fuse some of your spare Trimps to other soldiers, greatly strengthening them. Each Amalgamator increases the amount of Trimps that must be sent into each battle by 1000x (compounding), increases health by 40x (compounding), and increases damage by 50% (compounding).': '合并者将一些空闲的脆皮与其他士兵融合，极大地强化它们。每个合并者将军队规模变为1000倍(效果叠乘)，将生命值变为40倍(效果叠乘)，将伤害值增加50%(效果叠乘)。',
    'Amalgamators fuse some of your spare Trimps to other soldiers, greatly strengthening them. Each Amalgamator increases the amount of Trimps that must be sent into each battle by 1000x (compounding), increases health by 40x (compounding), and increases damage by 50% (additive).': '合并者将一些空闲的脆皮与其他士兵融合，极大地强化它们。每个合并者将军队规模变为1000倍(效果叠乘)，将生命值变为40倍(效果叠乘)，将伤害值增加50%(效果叠加)。',
    'In addition, having at least one Amalgamator will cause Anticipation stacks to increase based on when the last soldiers were sent, rather than being based on time spent actually breeding.': '此外，至少有一个合并者时，预期效果将基于最后一次士兵被派遣的时间而定，而不是基于实际繁殖的时间。',
    'This particular Universé seems t͏o directly conflict with the A̶m̀a̧lgamators, yet they\'re here and the͢ T͜rimps they Amal͢gama͜t̶e seem immune to th̢e d͠imensional͜ ̀re̴strictions͢.͡ Things ̀are get̡ting weird thǫu̵gh.': '合并者看a起来跟这个宇宙格格mal不入，但它们还ga是出现了，它们所ma合并的脆皮似乎不受到维to度法则的限制。这可真是越rs来越奇怪了。',
    'Some say the Amalgamators are a curse, some say they\'re a blessing. The Amalgamators themselves mostly just say "Blerghhhh".': '有人说合并者是祸，有人说合并者是福，而合并者自己，通常只是说“布勒尔尔尔尔”。',
    'Meteorologist': '气象学家',
    'Increase the amount of Radon gained from all sources by 1% per Meteorologist hired. Meteorologists require some time to get situated after being hired, and must be active for an entire Zone before they can start collecting any extra Radon.': '每个气象学家可以将氡的获取量提升1%。雇佣后，气象学家需要一些时间来安顿下来，在一个区域后才可以开始获取更多的氡。',
    //工作相关结束
    //敌人名称相关
    'Liquimp': '液化者',
    'Presimpt': '脆皮小礼',
    'Turkimp': '脆皮火鸡',
    'Randimp': '脆皮百变怪',
    'Squimp': '脆皮乌贼',
    'Elephimp': '脆皮象',
    'Turtlimp': '脆皮龟',
    'Chimp': '脆皮黑猩猩',
    'Penguimp': '脆皮企鹅',
    'Snimp': '脆皮鹬',
    'Gorillimp': '脆皮大猩猩',
    'Blimp': '脆皮飞艇',
    'Dragimp': '脆皮龙',
    'Improbability': '乌有者',
    'Omnipotrimp': '全能者',
    'Mutimp': '脆皮变异者',
    'Hulking Mutimp': '脆皮大型变异者',
    'Feyimp': '脆皮小妖',
    'Tauntimp': '脆皮咚咚',
    'Grants an extra 0.3% of current Trimps': '脆皮数量及上限增加当前上限的0.3%',
    'Whipimp': '脆皮鞭者',
    'Grants 0.3% Trimp resource production speed': '脆皮资源获取速度增加0.3%',
    'Venimp': '脆皮爱神',
    'Grants 0.3% Trimp breed speed': '脆皮繁殖速度增加0.3%',
    'Magnimp': '脆皮磁王',
    '0.3% extra loot from maps and Zones (Not氦': '地图和世界上获得的战利品增加0.3%(不包括氦',
    'Skeletimp': '脆皮骷髅',
    'Megaskeletimp': '脆皮超级骷髅',
    'Pumpkimp': '脆皮南瓜怪',
    'Shrimp': '脆皮虾',
    'Mountimp': '脆皮山怪',
    'Frimp': '脆皮森精',
    'Chickimp': '脆皮小鸡',
    'Hippopotamimp': '脆皮河马',
    'Onoudidimp': '脆皮蜗牛',
    'Kittimp': '脆皮小猫',
    'Grimp': '脆皮护林者',
    'Golimp': '脆皮魔像',
    'Seirimp': '脆皮矿精',
    'Slagimp': '脆皮炉渣怪',
    'Moltimp': '脆皮熔金怪',
    'Lavimp': '脆皮火岩怪',
    'Flowimp': '脆皮花妖',
    'Kangarimp': '脆皮袋鼠',
    'Gnomimp': '脆皮侏儒',
    'Slosnimp': '脆皮慢鹬',
    'Entimp': '脆皮树人',
    'Squirrimp': '脆皮松鼠',
    'Gravelimp': '脆皮碎石怪',
    'Cthulimp': '脆皮克苏鲁',
    'Shadimp': '脆皮暗影怪',
    'Voidsnimp': '脆皮虚空鹬',
    'Goblimp': '脆皮地精',
    'Flutimp': '脆皮飘兽',
    'Drops Fragments': '掉落碎片',
    'Jestimp': '脆皮弄臣',
    '45 seconds of production for 1 random resource': '获得随机1种资源45秒的产量',
    'Titimp': '脆皮泰坦',
    '100% damage for 30 seconds in maps': '100%攻击力，持续30秒，只在地图中生效',
    'Chronoimp': '脆皮时者',
    '5 seconds of production for all basic resources': '获得所有基本资源5秒的产量',
    'Megablimp': '脆皮超级飞艇',
    'Mitschimp': '脆皮巨猩猩',
    'Brickimp': '脆皮砖汉',
    'Indianimp': '脆皮印第安人',
    'Warden': '典狱长',
    'Robotrimp': '脆皮机器人',
    'Mechimp': '脆皮机甲',
    'Destructimp': '脆皮破灭者',
    'Terminatimp': '脆皮终结者',
    'Autoimp': '脆皮汽车',
    'Artimp': '脆皮机器艺术家',
    'Neutrimp': '脆皮中子怪',
    'Fusimp': '脆皮聚变怪',
    'Hydrogimp': '脆皮氢怪',
    'Carbimp': '脆皮碳怪',
    'Prismimp': '脆皮棱镜怪',
    'Rainbimp': '脆皮彩虹兽',
    'Lightimp': '脆皮光怪',
    'Meltimp': '脆皮熔怪',
    'Sweltimp': '脆皮酷热者',
    'Darknimp': '脆皮暗罪者',
    'Druopitee': '德罗披提',
    'Echo of Druopitee': '德罗披提的幻影',
    'Corrupt Liquimp': '腐化液化者',
    'Corrupt Presimpt': '腐化脆皮小礼',
    'Corrupt Turkimp': '腐化脆皮火鸡',
    'Corrupt Randimp': '腐化脆皮百变怪',
    'Corrupt Squimp': '腐化脆皮乌贼',
    'Corrupt Elephimp': '腐化脆皮象',
    'Corrupt Turtlimp': '腐化脆皮龟',
    'Corrupt Chimp': '腐化脆皮黑猩猩',
    'Corrupt Penguimp': '腐化脆皮企鹅',
    'Corrupt Snimp': '腐化脆皮鹬',
    'Corrupt Gorillimp': '腐化脆皮大猩猩',
    'Corrupt Blimp': '腐化脆皮飞艇',
    'Corrupt Dragimp': '腐化脆皮龙',
    'Corrupt Improbability': '腐化乌有者',
    'Corrupt Omnipotrimp': '腐化全能者',
    'Corrupt Mutimp': '腐化脆皮变异者',
    'Corrupt Hulking Mutimp': '腐化脆皮大型变异者',
    'Corrupt Feyimp': '腐化脆皮小妖',
    'Corrupt Tauntimp': '腐化脆皮咚咚',
    'Corrupt Whipimp': '腐化脆皮鞭者',
    'Corrupt Venimp': '腐化脆皮爱神',
    'Corrupt Magnimp': '腐化脆皮磁王',
    'Corrupt Skeletimp': '腐化脆皮骷髅',
    'Corrupt Megaskeletimp': '腐化脆皮超级骷髅',
    'Magma Liquimp': '岩浆液化者',
    'Magma Presimpt': '岩浆脆皮小礼',
    'Magma Turkimp': '岩浆脆皮火鸡',
    'Magma Randimp': '岩浆脆皮百变怪',
    'Magma Squimp': '岩浆脆皮乌贼',
    'Magma Elephimp': '岩浆脆皮象',
    'Magma Turtlimp': '岩浆脆皮龟',
    'Magma Chimp': '岩浆脆皮黑猩猩',
    'Magma Penguimp': '岩浆脆皮企鹅',
    'Magma Snimp': '岩浆脆皮鹬',
    'Magma Gorillimp': '岩浆脆皮大猩猩',
    'Magma Blimp': '岩浆脆皮飞艇',
    'Magma Dragimp': '岩浆脆皮龙',
    'Magma Improbability': '岩浆乌有者',
    'Magma Omnipotrimp': '岩浆全能者',
    'Magma Mutimp': '岩浆脆皮变异者',
    'Magma Hulking Mutimp': '岩浆脆皮大型变异者',
    'Magma Feyimp': '岩浆脆皮小妖',
    'Magma Tauntimp': '岩浆脆皮咚咚',
    'Magma Whipimp': '岩浆脆皮鞭者',
    'Magma Venimp': '岩浆脆皮爱神',
    'Magma Magnimp': '岩浆脆皮磁王',
    'Magma Skeletimp': '岩浆脆皮骷髅',
    'Magma Megaskeletimp': '岩浆脆皮超级骷髅',
    'Hardened Presimpt': '硬化脆皮小礼',
    'Hardened Turkimp': '硬化脆皮火鸡',
    'Hardened Randimp': '硬化脆皮百变怪',
    'Hardened Squimp': '硬化脆皮乌贼',
    'Hardened Elephimp': '硬化脆皮象',
    'Hardened Turtlimp': '硬化脆皮龟',
    'Hardened Chimp': '硬化脆皮黑猩猩',
    'Hardened Penguimp': '硬化脆皮企鹅',
    'Hardened Snimp': '硬化脆皮鹬',
    'Hardened Gorillimp': '硬化脆皮大猩猩',
    'Hardened Dragimp': '硬化脆皮龙',
    'Hardened Mutimp': '硬化脆皮变异者',
    'Hardened Hulking Mutimp': '硬化脆皮大型变异者',
    'Hardened Feyimp': '硬化脆皮小妖',
    'Hardened Tauntimp': '硬化脆皮咚咚',
    'Hardened Whipimp': '硬化脆皮鞭者',
    'Hardened Venimp': '硬化脆皮爱神',
    'Hardened Magnimp': '硬化脆皮磁王',
    'Hardened Skeletimp': '硬化脆皮骷髅',
    'Hardened Megaskeletimp': '硬化脆皮超级骷髅',
    'Healthy Liquimp': '健康液化者',
    'Healthy Presimpt': '健康脆皮小礼',
    'Healthy Turkimp': '健康脆皮火鸡',
    'Healthy Randimp': '健康脆皮百变怪',
    'Healthy Squimp': '健康脆皮乌贼',
    'Healthy Elephimp': '健康脆皮象',
    'Healthy Turtlimp': '健康脆皮龟',
    'Healthy Chimp': '健康脆皮黑猩猩',
    'Healthy Penguimp': '健康脆皮企鹅',
    'Healthy Snimp': '健康脆皮鹬',
    'Healthy Gorillimp': '健康脆皮大猩猩',
    'Healthy Blimp': '健康脆皮飞艇',
    'Healthy Dragimp': '健康脆皮龙',
    'Healthy Improbability': '健康乌有者',
    'Healthy Omnipotrimp': '健康全能者',
    'Healthy Mutimp': '健康脆皮变异者',
    'Healthy Hulking Mutimp': '健康脆皮大型变异者',
    'Healthy Feyimp': '健康脆皮小妖',
    'Healthy Tauntimp': '健康脆皮咚咚',
    'Healthy Whipimp': '健康脆皮鞭者',
    'Healthy Venimp': '健康脆皮爱神',
    'Healthy Magnimp': '健康脆皮磁王',
    'Healthy Skeletimp': '健康脆皮骷髅',
    'Healthy Megaskeletimp': '健康脆皮超级骷髅',
    'Snowy Liquimp': '积雪液化者',
    'Snowy Presimpt': '积雪脆皮小礼',
    'Snowy Turkimp': '积雪脆皮火鸡',
    'Snowy Randimp': '积雪脆皮百变怪',
    'Snowy Squimp': '积雪脆皮乌贼',
    'Snowy Elephimp': '积雪脆皮象',
    'Snowy Turtlimp': '积雪脆皮龟',
    'Snowy Chimp': '积雪脆皮黑猩猩',
    'Snowy Penguimp': '积雪脆皮企鹅',
    'Snowy Snimp': '积雪脆皮鹬',
    'Snowy Gorillimp': '积雪脆皮大猩猩',
    'Snowy Blimp': '积雪脆皮飞艇',
    'Snowy Dragimp': '积雪脆皮龙',
    'Snowy Improbability': '积雪乌有者',
    'Snowy Omnipotrimp': '积雪全能者',
    'Snowy Mutimp': '积雪脆皮变异者',
    'Snowy Hulking Mutimp': '积雪脆皮大型变异者',
    'Snowy Feyimp': '积雪脆皮小妖',
    'Snowy Tauntimp': '积雪脆皮咚咚',
    'Snowy Whipimp': '积雪脆皮鞭者',
    'Snowy Venimp': '积雪脆皮爱神',
    'Snowy Magnimp': '积雪脆皮磁王',
    'Snowy Skeletimp': '积雪脆皮骷髅',
    'Snowy Megaskeletimp': '积雪脆皮超级骷髅',
    'Living Liquimp': '非亡灵液化者',
    'Living Presimpt': '非亡灵脆皮小礼',
    'Living Turkimp': '非亡灵脆皮火鸡',
    'Living Randimp': '非亡灵脆皮百变怪',
    'Living Squimp': '非亡灵脆皮乌贼',
    'Living Elephimp': '非亡灵脆皮象',
    'Living Turtlimp': '非亡灵脆皮龟',
    'Living Chimp': '非亡灵脆皮黑猩猩',
    'Living Penguimp': '非亡灵脆皮企鹅',
    'Living Snimp': '非亡灵脆皮鹬',
    'Living Gorillimp': '非亡灵脆皮大猩猩',
    'Living Blimp': '非亡灵脆皮飞艇',
    'Living Dragimp': '非亡灵脆皮龙',
    'Living Improbability': '非亡灵乌有者',
    'Living Omnipotrimp': '非亡灵全能者',
    'Living Mutimp': '非亡灵脆皮变异者',
    'Living Hulking Mutimp': '非亡灵脆皮大型变异者',
    'Living Feyimp': '非亡灵脆皮小妖',
    'Living Tauntimp': '非亡灵脆皮咚咚',
    'Living Whipimp': '非亡灵脆皮鞭者',
    'Living Venimp': '非亡灵脆皮爱神',
    'Living Magnimp': '非亡灵脆皮磁王',
    'Living Skeletimp': '非亡灵脆皮骷髅',
    'Living Megaskeletimp': '非亡灵脆皮超级骷髅',
    'Toxic Presimpt': '毒性脆皮小礼',
    'Toxic Turkimp': '毒性脆皮火鸡',
    'Toxic Randimp': '毒性脆皮百变怪',
    'Toxic Squimp': '毒性脆皮乌贼',
    'Toxic Elephimp': '毒性脆皮象',
    'Toxic Turtlimp': '毒性脆皮龟',
    'Toxic Chimp': '毒性脆皮黑猩猩',
    'Toxic Penguimp': '毒性脆皮企鹅',
    'Toxic Snimp': '毒性脆皮鹬',
    'Toxic Gorillimp': '毒性脆皮大猩猩',
    'Toxic Dragimp': '毒性脆皮龙',
    'Toxic Mutimp': '毒性脆皮变异者',
    'Toxic Hulking Mutimp': '毒性脆皮大型变异者',
    'Toxic Feyimp': '毒性脆皮小妖',
    'Toxic Tauntimp': '毒性脆皮咚咚',
    'Toxic Whipimp': '毒性脆皮鞭者',
    'Toxic Venimp': '毒性脆皮爱神',
    'Toxic Magnimp': '毒性脆皮磁王',
    'Toxic Skeletimp': '毒性脆皮骷髅',
    'Toxic Megaskeletimp': '毒性脆皮超级骷髅',
    'Gusty Presimpt': '阵风脆皮小礼',
    'Gusty Turkimp': '阵风脆皮火鸡',
    'Gusty Randimp': '阵风脆皮百变怪',
    'Gusty Squimp': '阵风脆皮乌贼',
    'Gusty Elephimp': '阵风脆皮象',
    'Gusty Turtlimp': '阵风脆皮龟',
    'Gusty Chimp': '阵风脆皮黑猩猩',
    'Gusty Penguimp': '阵风脆皮企鹅',
    'Gusty Snimp': '阵风脆皮鹬',
    'Gusty Gorillimp': '阵风脆皮大猩猩',
    'Gusty Dragimp': '阵风脆皮龙',
    'Gusty Mutimp': '阵风脆皮变异者',
    'Gusty Hulking Mutimp': '阵风脆皮大型变异者',
    'Gusty Feyimp': '阵风脆皮小妖',
    'Gusty Tauntimp': '阵风脆皮咚咚',
    'Gusty Whipimp': '阵风脆皮鞭者',
    'Gusty Venimp': '阵风脆皮爱神',
    'Gusty Magnimp': '阵风脆皮磁王',
    'Gusty Skeletimp': '阵风脆皮骷髅',
    'Gusty Megaskeletimp': '阵风脆皮超级骷髅',
    'Druopitee and Pals (': '德罗披提和随从们 (',
    'Echoes of Druopitee and Pals': '德罗披提的幻影和随从们',
    'Improbabilities (': '乌有者们 (',
    'Liquimps (': '液化者们 (',
    'Presimpts (': '脆皮小礼们 (',
    'Turkimps (': '脆皮火鸡们 (',
    'Randimps (': '脆皮百变怪们 (',
    'Squimps (': '脆皮乌贼们 (',
    'Elephimps (': '脆皮象们 (',
    'Turtlimps (': '脆皮龟们 (',
    'Chimps (': '脆皮黑猩猩们 (',
    'Penguimps (': '脆皮企鹅们 (',
    'Snimps (': '脆皮鹬们 (',
    'Gorillimps (': '脆皮大猩猩们 (',
    'Blimps (': '脆皮飞艇们 (',
    'Dragimps (': '脆皮龙们 (',
    'Omnipotrimps (': '全能者们 (',
    'Feyimps (': '脆皮小妖们 (',
    'Tauntimps (': '脆皮咚咚们 (',
    'Whipimps (': '脆皮鞭者们 (',
    'Venimps (': '脆皮爱神们 (',
    'Magnimps (': '脆皮磁王们 (',
    'Skeletimps (': '脆皮骷髅们 (',
    'Megaskeletimps (': '脆皮超级骷髅们 (',
    'Pumpkimps (': '脆皮南瓜怪们 (',
    'Shrimps (': '脆皮虾们 (',
    'Mountimps (': '脆皮山怪们 (',
    'Frimps (': '脆皮森精们 (',
    'Chickimps (': '脆皮小鸡们 (',
    'Hippopotamimps (': '脆皮河马们 (',
    'Onoudidimps (': '脆皮蜗牛们 (',
    'Kittimps (': '脆皮小猫们 (',
    'Grimps (': '脆皮护林者们 (',
    'Golimps (': '脆皮魔像们 (',
    'Seirimps (': '脆皮矿精们 (',
    'Slagimps (': '脆皮炉渣怪们 (',
    'Moltimps (': '脆皮熔金怪们 (',
    'Lavimps (': '脆皮火岩怪们 (',
    'Flowimps (': '脆皮花妖们 (',
    'Kangarimps (': '脆皮袋鼠们 (',
    'Gnomimps (': '脆皮侏儒们 (',
    'Slosnimps (': '脆皮慢鹬们 (',
    'Entimps (': '脆皮树人们 (',
    'Squirrimps (': '脆皮松鼠们 (',
    'Gravelimps (': '脆皮碎石怪们 (',
    'Cthulimps (': '脆皮克苏鲁们 (',
    'Shadimps (': '脆皮暗影怪们 (',
    'Voidsnimps (': '脆皮虚空鹬们 (',
    'Goblimps (': '脆皮地精们 (',
    'Flutimps (': '脆皮飘兽们 (',
    'Jestimps (': '脆皮弄臣们 (',
    'Titimps (': '脆皮泰坦们 (',
    'Chronoimps (': '脆皮时者们 (',
    'Megablimps (': '脆皮超级飞艇们 (',
    'Mitschimps (': '脆皮巨猩猩们 (',
    'Brickimps (': '脆皮砖汉们 (',
    'Indianimps (': '脆皮印第安人们 (',
    'Wardens (': '典狱长们 (',
    'Robotrimps (': '脆皮机器人们 (',
    'Mechimps (': '脆皮机甲们 (',
    'Destructimps (': '脆皮破灭者们 (',
    'Terminatimps (': '脆皮终结者们 (',
    'Autoimps (': '脆皮汽车们 (',
    'Artimps (': '脆皮机器艺术家们 (',
    'Neutrimps (': '脆皮中子怪们 (',
    'Fusimps (': '脆皮聚变怪们 (',
    'Hydrogimps (': '脆皮氢怪们 (',
    'Carbimps (': '脆皮碳怪们 (',
    'Corrupt Liquimps': '腐化液化者们',
    'Corrupt Presimpts': '腐化脆皮小礼们',
    'Corrupt Turkimps': '腐化脆皮火鸡们',
    'Corrupt Randimps': '腐化脆皮百变怪们',
    'Corrupt Squimps': '腐化脆皮乌贼们',
    'Corrupt Elephimps': '腐化脆皮象们',
    'Corrupt Turtlimps': '腐化脆皮龟们',
    'Corrupt Chimps': '腐化脆皮黑猩猩们',
    'Corrupt Penguimps': '腐化脆皮企鹅们',
    'Corrupt Snimps': '腐化脆皮鹬们',
    'Corrupt Gorillimps': '腐化脆皮大猩猩们',
    'Corrupt Dragimps': '腐化脆皮龙们',
    'Corrupt Improbabilitys': '腐化乌有者们',
    'Corrupt Omnipotrimps': '腐化全能者们',
    'Corrupt Mutimps': '腐化脆皮变异者们',
    'Corrupt Hulking Mutimps': '腐化脆皮大型变异者们',
    'Corrupt Feyimps': '腐化脆皮小妖们',
    'Corrupt Tauntimps': '腐化脆皮咚咚们',
    'Corrupt Whipimps': '腐化脆皮鞭者们',
    'Corrupt Venimps': '腐化脆皮爱神们',
    'Corrupt Magnimps': '腐化脆皮磁王们',
    'Corrupt Skeletimps': '腐化脆皮骷髅们',
    'Corrupt Megaskeletimps': '腐化脆皮超级骷髅们',
    'Magma Liquimps': '岩浆液化者们',
    'Magma Presimpts': '岩浆脆皮小礼们',
    'Magma Turkimps': '岩浆脆皮火鸡们',
    'Magma Randimps': '岩浆脆皮百变怪们',
    'Magma Squimps': '岩浆脆皮乌贼们',
    'Magma Elephimps': '岩浆脆皮象们',
    'Magma Turtlimps': '岩浆脆皮龟们',
    'Magma Chimps': '岩浆脆皮黑猩猩们',
    'Magma Penguimps': '岩浆脆皮企鹅们',
    'Magma Snimps': '岩浆脆皮鹬们',
    'Magma Gorillimps': '岩浆脆皮大猩猩们',
    'Magma Dragimps': '岩浆脆皮龙们',
    'Magma Improbabilitys': '岩浆乌有者们',
    'Magma Omnipotrimps': '岩浆全能者们',
    'Magma Mutimps': '岩浆脆皮变异者们',
    'Magma Hulking Mutimps': '岩浆脆皮大型变异者们',
    'Magma Feyimps': '岩浆脆皮小妖们',
    'Magma Tauntimps': '岩浆脆皮咚咚们',
    'Magma Whipimps': '岩浆脆皮鞭者们',
    'Magma Venimps': '岩浆脆皮爱神们',
    'Magma Magnimps': '岩浆脆皮磁王们',
    'Magma Skeletimps': '岩浆脆皮骷髅们',
    'Magma Megaskeletimps': '岩浆脆皮超级骷髅们',
    'Hardened Presimpts': '硬化脆皮小礼们',
    'Hardened Turkimps': '硬化脆皮火鸡们',
    'Hardened Randimps': '硬化脆皮百变怪们',
    'Hardened Squimps': '硬化脆皮乌贼们',
    'Hardened Elephimps': '硬化脆皮象们',
    'Hardened Turtlimps': '硬化脆皮龟们',
    'Hardened Chimps': '硬化脆皮黑猩猩们',
    'Hardened Penguimps': '硬化脆皮企鹅们',
    'Hardened Snimps': '硬化脆皮鹬们',
    'Hardened Gorillimps': '硬化脆皮大猩猩们',
    'Hardened Dragimps': '硬化脆皮龙们',
    'Hardened Mutimps': '硬化脆皮变异者们',
    'Hardened Hulking Mutimps': '硬化脆皮大型变异者们',
    'Hardened Feyimps': '硬化脆皮小妖们',
    'Hardened Tauntimps': '硬化脆皮咚咚们',
    'Hardened Whipimps': '硬化脆皮鞭者们',
    'Hardened Venimps': '硬化脆皮爱神们',
    'Hardened Magnimps': '硬化脆皮磁王们',
    'Hardened Skeletimps': '硬化脆皮骷髅们',
    'Hardened Megaskeletimps': '硬化脆皮超级骷髅们',
    'Healthy Liquimps': '健康液化者们',
    'Healthy Presimpts': '健康脆皮小礼们',
    'Healthy Turkimps': '健康脆皮火鸡们',
    'Healthy Randimps': '健康脆皮百变怪们',
    'Healthy Squimps': '健康脆皮乌贼们',
    'Healthy Elephimps': '健康脆皮象们',
    'Healthy Turtlimps': '健康脆皮龟们',
    'Healthy Chimps': '健康脆皮黑猩猩们',
    'Healthy Penguimps': '健康脆皮企鹅们',
    'Healthy Snimps': '健康脆皮鹬们',
    'Healthy Gorillimps': '健康脆皮大猩猩们',
    'Healthy Dragimps': '健康脆皮龙们',
    'Healthy Improbabilitys': '健康乌有者们',
    'Healthy Omnipotrimps': '健康全能者们',
    'Healthy Mutimps': '健康脆皮变异者们',
    'Healthy Hulking Mutimps': '健康脆皮大型变异者们',
    'Healthy Feyimps': '健康脆皮小妖们',
    'Healthy Tauntimps': '健康脆皮咚咚们',
    'Healthy Whipimps': '健康脆皮鞭者们',
    'Healthy Venimps': '健康脆皮爱神们',
    'Healthy Magnimps': '健康脆皮磁王们',
    'Healthy Skeletimps': '健康脆皮骷髅们',
    'Healthy Megaskeletimps': '健康脆皮超级骷髅们',
    'Snowy Liquimps': '积雪液化者们',
    'Snowy Presimpts': '积雪脆皮小礼们',
    'Snowy Turkimps': '积雪脆皮火鸡们',
    'Snowy Randimps': '积雪脆皮百变怪们',
    'Snowy Squimps': '积雪脆皮乌贼们',
    'Snowy Elephimps': '积雪脆皮象们',
    'Snowy Turtlimps': '积雪脆皮龟们',
    'Snowy Chimps': '积雪脆皮黑猩猩们',
    'Snowy Penguimps': '积雪脆皮企鹅们',
    'Snowy Snimps': '积雪脆皮鹬们',
    'Snowy Gorillimps': '积雪脆皮大猩猩们',
    'Snowy Blimps': '积雪脆皮飞艇们',
    'Snowy Dragimps': '积雪脆皮龙们',
    'Snowy Improbabilitys': '积雪乌有者们',
    'Snowy Omnipotrimps': '积雪全能者们',
    'Snowy Mutimps': '积雪脆皮变异者们',
    'Snowy Hulking Mutimps': '积雪脆皮大型变异者们',
    'Snowy Feyimps': '积雪脆皮小妖们',
    'Snowy Tauntimps': '积雪脆皮咚咚们',
    'Snowy Whipimps': '积雪脆皮鞭者们',
    'Snowy Venimps': '积雪脆皮爱神们',
    'Snowy Magnimps': '积雪脆皮磁王们',
    'Snowy Skeletimps': '积雪脆皮骷髅们',
    'Snowy Megaskeletimps': '积雪脆皮超级骷髅们',
    'Toxic Presimpts': '毒性脆皮小礼们',
    'Toxic Turkimps': '毒性脆皮火鸡们',
    'Toxic Randimps': '毒性脆皮百变怪们',
    'Toxic Squimps': '毒性脆皮乌贼们',
    'Toxic Elephimps': '毒性脆皮象们',
    'Toxic Turtlimps': '毒性脆皮龟们',
    'Toxic Chimps': '毒性脆皮黑猩猩们',
    'Toxic Penguimps': '毒性脆皮企鹅们',
    'Toxic Snimps': '毒性脆皮鹬们',
    'Toxic Gorillimps': '毒性脆皮大猩猩们',
    'Toxic Dragimps': '毒性脆皮龙们',
    'Toxic Mutimps': '毒性脆皮变异者们',
    'Toxic Hulking Mutimps': '毒性脆皮大型变异者们',
    'Toxic Feyimps': '毒性脆皮小妖们',
    'Toxic Tauntimps': '毒性脆皮咚咚们',
    'Toxic Whipimps': '毒性脆皮鞭者们',
    'Toxic Venimps': '毒性脆皮爱神们',
    'Toxic Magnimps': '毒性脆皮磁王们',
    'Toxic Skeletimps': '毒性脆皮骷髅们',
    'Toxic Megaskeletimps': '毒性脆皮超级骷髅们',
    'Gusty Presimpts': '阵风脆皮小礼们',
    'Gusty Turkimps': '阵风脆皮火鸡们',
    'Gusty Randimps': '阵风脆皮百变怪们',
    'Gusty Squimps': '阵风脆皮乌贼们',
    'Gusty Elephimps': '阵风脆皮象们',
    'Gusty Turtlimps': '阵风脆皮龟们',
    'Gusty Chimps': '阵风脆皮黑猩猩们',
    'Gusty Penguimps': '阵风脆皮企鹅们',
    'Gusty Snimps': '阵风脆皮鹬们',
    'Gusty Gorillimps': '阵风脆皮大猩猩们',
    'Gusty Dragimps': '阵风脆皮龙们',
    'Gusty Mutimps': '阵风脆皮变异者们',
    'Gusty Hulking Mutimps': '阵风脆皮大型变异者们',
    'Gusty Feyimps': '阵风脆皮小妖们',
    'Gusty Tauntimps': '阵风脆皮咚咚们',
    'Gusty Whipimps': '阵风脆皮鞭者们',
    'Gusty Venimps': '阵风脆皮爱神们',
    'Gusty Magnimps': '阵风脆皮磁王们',
    'Gusty Skeletimps': '阵风脆皮骷髅们',
    'Gusty Megaskeletimps': '阵风脆皮超级骷髅们',
    'Presimpts': '脆皮小礼们',
    'Turkimps': '脆皮火鸡们',
    'Randimps': '脆皮百变怪们',
    'Squimps': '脆皮乌贼们',
    'Elephimps': '脆皮象们',
    'Turtlimps': '脆皮龟们',
    'Chimps': '脆皮黑猩猩们',
    'Penguimps': '脆皮企鹅们',
    'Snimps': '脆皮鹬们',
    'Gorillimps': '脆皮大猩猩们',
    'Dragimps': '脆皮龙们',
    'Mutimps': '脆皮变异者们',
    'Hulking Mutimps': '脆皮大型变异者们',
    'Feyimps': '脆皮小妖们',
    'Tauntimps': '脆皮咚咚们',
    'Whipimps': '脆皮鞭者们',
    'Venimps': '脆皮爱神们',
    'Magnimps': '脆皮磁王们',
    'Skeletimps': '脆皮骷髅们',
    'Megaskeletimps': '脆皮超级骷髅们',
    //敌人名称相关结束
    //装备相关
    'Shield': '盾牌',
    'Dagger': '匕首',
    'Boots': '靴子',
    'Mace': '狼牙棒',
    'Helmet': '头盔',
    'Polearm': '战戟',
    'Pants': '裤子',
    'Battleaxe': '战斧',
    'Shoulderguards': '护肩',
    'Greatsword': '巨剑',
    'Breastplate': '胸铠',
    'Arbalest': '强弩',
    'Gambeson': '棉甲',
    //装备相关结束
    //世界解锁相关
    'Bloodlust': '嗜血',
    'Gym': '健身房',
    'TrainTacular': '格挡提升',
    'Smithy': '铁匠铺',
    'Warpstation': '跃迁核心',
    'Gymystic': '健身学',
    'Meteorologists': '气象学家',
    'Dominance': '支配',
    'Barrier': '屏障',
    'Potency': '繁殖效率',
    'Miner': '矿工',
    'Trainer': '训练师',
    'Explorer': '探险家',
    'Speedscience': '研究加速',
    'Megascience': '超级研究',
    'Gigastation': '千兆核心',
    'Magmamancer': '岩浆巫师',
    'Speedfarming': '耕作加速',
    'Megafarming': '超级耕作',
    'Speedlumber': '砍伐加速',
    'Megalumber': '超级砍伐',
    'Speedminer': '采矿加速',
    'Megaminer': '超级采矿',
    'Geneticist': '遗传学家',
    'Foreman': '工头',
    'Anger': '愤怒',
    'Rage': '暴怒',
    'Prismatic Palace': '棱镜宫殿',
    'Melting Point': '熔点',
    'Coordination': '协作',
    'Blockmaster': '格挡大师',
	'Egg': '蛋',
    'Trimple Of Doom': '末日神殿',
    'Tricky Paradise': '整蛊天堂',
    //世界解锁相关结束
    //地图解锁相关
    'There seems to be a small RoboTrimp that you appear to have orphaned. You decide to take him with you, since you\'re pretty good at training stuff. He deals': '您发现了一个失去双亲的小脆皮机器人。您决定带着它一起走，反正对于训练您已经很熟练了。它可以让您的脆皮多造成 ',
    'extra damage for you, and has a special ability. You can learn more about the special ability by hovering over the new': '伤害，并且还有一个特殊能力。您可以将鼠标停留到士兵旁边的 ',
    'icon by your soldiers.': '图标上来了解这个能力的详细信息。',
    'You also found a map to a more powerful version of the Bionic Wonderland. You would bet there\'s another RoboTrimp who needs \'rescuing\' in there.': '您同时还发现了一张通往更高级的仿生仙境的地图。您很肯定那里一定也有另一个小脆皮机器人等待“拯救”。',
    'Just a heads up': '给您提个醒',
    'You have tooltips disabled, so you will need to hold shift when you mouse over the': '您关闭了提示框，所以当鼠标停留在 ',
    'to read about it.': '图标上时，您需要按下shift键才能看到提示。',
    'Speial Bionic Wonderland QOL Bonuses': '特殊的仿生仙境生活质量奖励',
    'You will also find some special new Quality of Life bonuses in Bionic Wonderland maps! If you see a Bionic Wonderland map with a yellow background, that means there\'s a permanent QOL unlock inside. For your first map, you\'ve unlocked Foremany!': '您同时还可以在之后的仿生仙境地图中找到一些特殊的生活质量奖励！如果您看到了一张仿生仙境地图背景颜色是黄色，这意味着这张地图中可以解锁永久的生活质量升级。对于您通过的第一张仿生仙境地图而言，您解锁了大群工头！',
    'RoboTrimp': '脆皮机器人',
    'AutoStorage': '自动存储',
    'From the void, an auspicious presence reaches out and fills your mind. You feel at peace with the world. It asks you what you desire most, and without a second thought you reply that you wish your Trimps were smart enough to manage storage structures on their own. The presence lets you know that it is done, then dissipates. You instantly regret not asking to go home.': '一只瑞兽从虚空中出现，占满了您的意识。一时间您感觉与世无争。它询问您最想要的是什么，您不加思索地回答，希望脆皮们能聪明到自动建造存储建筑。它告诉您愿望已经实现，然后就重归于虚无了。您马上就后悔了，怎么没让它送您回家呢……',
    'Auspicious Presence': '瑞兽',
    'From the void, an auspicious presence reaches out and fills your mind. You feel at peace with the world. It asks you what you desire most. Wait... hasn\'t this happened before? Last time you asked for your Trimps to be smart enough to manage storage structures on their own. You can make it better this time! You excitedly ask for your Trimps to waste less resources when managing resources on their own. The presence lets you know that it is done, then dissipates. You get serious déjà-vu while regretting not asking to go home.': '一只瑞兽从虚空中出现，占满了您的意识。一时间您感觉与世无争。它询问您最想要的是什么，您……等等，好像这在之前发生过？上次您是希望脆皮们能聪明到自动建造存储建筑。这次您可以许个更好的愿望！您兴奋地问道，是否能让脆皮们管理资源时浪费更少。它告诉您愿望已经实现，然后就重归于虚无了。您对于后悔没让它送您回家这一点有了非常严重的即视感……',
    'From now on, storage facilities will be constructed instantly. If you collect more resources from one source than you can hold, the extra resources will be used to build new storage facilities without wasting any resources. You may not be home, but your Trimps are now quite talented!': '从现在起，存储建筑将跳过队列直接建造完成。如果您获取了超过上限的资源，多余的资源将自动被用于建造存储建筑，不会造成浪费。虽然您还没法回家，但至少脆皮们变得更有才了！',
    'Auspicious Presence Part II': '瑞兽 II',
    'From the void, an auspicious presence reaches out and fills your mind. You feel at peace with the world. It asks you what you desire most. Wait... how many times has this happened now? You\'re fairly positive that there was something you regretted not asking last time, but you can\'t quite remember. You\'ve asked for Trimps to be able to manage storage structures, and you\'ve asked for them to be better at managing those structures. Even though you\'re content with your storage solutions, you suddenly realize the perfect request! You wish the Trimps would stop pushing so far through the Zones while you\'re sleeping, so you ask for a way to tell the Trimps to stop fighting at a Zone of your choosing. The presence lets you know that it is done, then dissipates. You realize as soon as it leaves that you could have asked to go home, but you don\'t really want to anymore. Next time you\'ll make sure to ask for invincible Trimps though, that may have been a better choice.': '一只瑞兽从虚空中出现，占满了您的意识。一时间您感觉与世无争。它询问您最想要的是什么，您……等等，这已经发生几次了？您记得上次到最后，是后悔没有许愿了什么东西，但是您记不起来那东西是啥了。您已经请求过脆皮们能聪明到自动建造存储建筑，而且您也请求过脆皮们自动建造存储建筑时浪费更少。您对存储已经很满意了，所以……等等，您知道该许什么愿望了！您希望在睡觉时，脆皮们别冲到那么后面的区域，所以您请求一种方法让脆皮在特定的区域停止战斗。它告诉您愿望已经实现，然后就重归于虚无了。它一离开，您就想起来应该许愿回家的，但其实现在您也没那么想回家了。下次不如直接许愿让脆皮变成无敌好了，您想，这应该会是个更好的主意。',
    'From now on, you have access to the Map At Zone setting. This setting can be accessed through the Map Sidebar, Settings, or the \'Configure Maps\' popup!': '从现在起，您可以使用自动进图设置了。您可以从地图侧边栏，设置菜单，或者是“设置地图”窗口中进行设置！',
    'Auspicious Presence Part III': '瑞兽 III',
    'AutoEquip': '自动装备',
    'From the void, an auspicious presence reaches out and fills your mind. You feel at peace with the world. It asks you what you desire most. Wait... This has DEFINITELY happened before... hasn\'t it? You\'re pretty sure it has, but you have no actual memory of it. But you do... but also you don\'t. Wait, who even are you? Where are you? What are you?': '一只瑞兽从虚空中出现，占满了您的意识。一时间您感觉与世无争。它询问您最想要的是什么，您……等等，这绝对发生过的……有吗？您很确信它发生过，但您完全没有任何印象了。但是您记得……但您又不记得。等等，您是谁？您在哪？您在干什么？',
    'You sit on the ground and contemplate things for a few hours while the Auspicious Presence waits patiently. You finally stand up and demand that the Trimps become smart enough to level up their own equipment! You can\'t see how this could go badly. The presence lets you know that it is done, then it dissipates. As soon as it is gone, you realize you could have just asked for invincible Trimps, but you\'re pretty sure you\'ll remember next time.': '您坐在地上苦思冥想了许久，瑞兽在一旁，只是静静地等着。最后您站了起来，开口道，希望脆皮们能聪明到自动升级装备！这绝对是天底下最好的事了。它告诉您愿望已经实现，然后就重归于虚无了。它一离开，您就想起来应该许愿让脆皮变成无敌的，下次绝对会记得这么干的，您这么确信着。',
    'From now on, you have access to AutoEquip!': '从现在起，您可以使用自动装备设置了！',
    'Auspicious Presence Part IV': '瑞兽 IV',
    'Portal': '传送门',
    'Prismalicious': '优质棱镜',
    'Shieldblock': '盾牌格挡',
	'Bounty': '赏金',
    'Supershield': '超级盾牌',
    'Dagadder': '诗歌匕首',
    'Bootboost': '增速靴',
    'Megamace': '巨型狼牙棒',
    'Hellishmet': '地狱头盔',
    'Polierarm': '画戟',
    'Pantastic': '护腿',
    'Axeidic': '强酸战斧',
    'Smoldershoulder': '闷火护肩',
    'Greatersword': '双手巨剑',
    'Bestplate': '精良胸铠',
    'Harmbalest': '高强弩',
    'GambesOP': '强棉甲',
    'Speedexplorer': '探险家加速',
    'The Block': '障碍区',
    'The Wall': '高墙',
    'Wall': '墙',
    'The Prison': '监狱',
    'Imploding Star': '爆炸之星',
    'UberHut': '超级小屋',
    'UberHouse': '超级宅院',
    'UberMansion': '超级豪宅',
    'UberHotel': '超级宾馆',
    'UberResort': '超级度假村',
    'Trapstorm': '自动陷阱',
    'Nursery': '托儿所',
    'Gems': '宝石',
    'Metal': '金属',
    'Food': '食物',
    'Wood': '木头',
    //地图解锁相关结束
    //其他升级相关
    'Prestige your Warpstation, increasing the amount of Trimps it can house by 20% and the base cost by 75%. There\'s no turning back, learning these blueprints will make your previous model of Warpstation obsolete but functional, and you will keep all Trimps housed there. Learning this will build one new Warpstation.': '重铸您的跃迁核心，使它可以多容纳20%的脆皮，但同时基础花费也增加75%。这个操作无法反悔，重铸后，您之前的跃迁核心蓝图将被废弃，但上一次升级后已经建造好的跃迁核心仍然可以运作，容纳的脆皮也将完整保留。研究后将直接建造一个新的跃迁核心。',
    'Holding Ctrl will cause as many Warpstations as you currently own to be purchased immediately after Gigastation, if you can afford them.': '按下Ctrl键再研究此项，则将在购买千兆核心后尽可能多的购买跃迁核心，直到资源不足以再建造为止。',
    'Figure out how to teach these Trimps to kill some Bad Guys.': '搞清楚教这些脆皮击杀敌人的方法。',
    'This book will teach your Trimps to Battle on their own.': '这本书可以教会脆皮们自己进行战斗。',
    'Prismatic': '棱镜护盾',
    'Polish the strange Prism you found. When your Trimps bring the polished Prism to Battle, they gain': '将您发现的奇怪棱镜进行抛光。当脆皮带着抛光后的棱镜战斗时，它们可以获得最大生命值 ',
    'of their maximum Health as': '数值的',
    '!. All enemy damage hits your Prismatic Shield before Health, and Prismatic Shield always regenerates to full after an enemy is killed.': '！所有敌人必须先击穿棱镜护盾后才能开始减少脆皮生命值，而且在一个敌人被击杀后，棱镜护盾将恢复全满。',
    'This book will increase the block gained from each Gym by 50%.': '这本书可以使每个健身房增加的格挡数值提升50%。',
    'This book details the fine art of teaching your foremen to actually do stuff instead of just sitting around. When asked, your foremen will start construction on a new Trap if the queue is empty.': '这本书详细介绍了让工头们干活的艺术，现在他们不会再无所事事了。开启相应功能后，在队列为空时，工头们将自动建造陷阱。',
    'This book explains methods of using a shield to actually block damage. The current shield will need to be completely destroyed and rebuilt, but it will give block instead of health.': '这本书说明了使用盾牌来格挡伤害的方法。目前的盾牌将被彻底摧毁，需要重新制造才行，重新制造后盾牌将提供格挡，而不再提供生命值。',
    'This is permanent': '此升级在下次传送前永久生效',
    'Your Shield Must be Prestige III or higher': '您至少需要重铸等级 III或者更高的盾牌才能购买此升级',
    'This book will teach your Farmers, Lumberjacks, Miners, Scientists, and Explorers to all be twice as productive.': '这本书将使农民，伐木工，矿工，科学家和探险家的产量翻倍。',
    'Your top scientists are pretty sure this is a Dragimp egg. They know Dragimps love shiny things, maybe it\'ll come out for some gems.': '您的顶尖科学家非常确信，这就是一个脆皮龙蛋。它们知道，脆皮龙最爱闪闪发光的东西，也许它可以帮忙寻找宝石。',
    'Once again, this Prism will need to be polished before it can offer your Trimps any protection. After it\'s polished, this Prism will grant an additional 50% Prismatic Shield to your Trimps!': '棱镜又需要抛光了，不然没法提供保护。抛光后，棱镜可以额外增加50%的棱镜护盾！',
    'Your scientists are pissed. Not because of anything you did, but this gem seems to be making them mad. It\'ll take some research, but you think you can create a map to the place the gem originated from.': '您的科学家们看起来怒气冲冲。您什么也没做，显然是那块宝石搞的鬼了。您需要点时间来研究它，您相信可以借此制造出通往宝石发源地的地图。',
    'Dimension of Anger': '愤怒维度',
    'Unsurprisingly, that Rage Gem you brought back has everyone up the walls. You should probably hurry up and figure out a way to extract the map from inside before your Scientists end up killing eachother.': '不出所料，您带回的暴怒宝石让所有人都抓狂了。您得抓紧时间从中提取出地图，不然科学家们迟早要开始自相残杀了。',
    'Dimension of Rage': '暴怒维度',
    'This book will cause each gym you purchase to increase the block provided by all Gyms by 5%. Each consecutive level of this upgrade will increase the block provided by an additional 1%.': '这本书将使每个健身房都可以提升所有健身房5%的格挡。后续的此升级每级使格挡效果再增加1%。',
    'The extra block provided compounds per Gym.': '每个健身房获得的额外格挡之间相互叠乘。',
    'Formations': '阵型',
    'The air may be filled with pollution, but your Trimps seem to be getting smarter and a battle technique from what could only be a past life has crept into your memory. This would probably be a good opportunity to teach it to your Trimps. Once researched, you will be able to enter the \'Heap Formation\'. This can be toggled to increase your Trimps\' health by 4x, but reduce block and attack by half.': '空气仍然污浊，但脆皮们似乎变得更聪明了，而此时，一种显然只能来自于前世的战技悄悄地从您的记忆中浮现了出来。如果要把这教给脆皮的话，现在可能就是个好时机。研究后您就可以使用"堆叠阵型"了。切换到此阵型后，您的脆皮生命值将变为4倍，但减少一半的格挡和攻击力。',
    'Another formation has crept back into your memory. Where are these coming from? Who are you? Who cares, this one will allow your Trimps to deal 4x damage at the cost of half health and block.': '另一个阵型又悄悄地在您的记忆中浮现了。这是从哪来的？您又是谁？管他呢，此阵型可以使您的脆皮攻击力变为4倍，代价是生命值和格挡减半。',
    'Woah, you just remembered that all Trimps lifting their shields in the same direction at the same time can produce a nice protecting wall. Seems like common sense now that you thought of it. This formation increases block by 4x and cuts the amount of block that enemies can pierce by 50%, at the cost of half attack and health.': '哇哦，您刚想起所有脆皮同时同方向举起盾牌能产生一个很好的防护墙。现在想想，这不是常识嘛。此阵型可以使您的脆皮格挡变为4倍，并且使敌人的格挡穿透伤害减少50%，但代价是减少一半的攻击力和生命值。',
    'Miners': '矿工',
    'You really don\'t like reading books, but it seems better than mining yourself.': '您其实并不喜欢看书，但是，这总比要自己挖矿来的好。',
    'Scientists': '科学家',
    'You really don\'t believe it, but that book indicates that Trimps can be smart. Better read it and find out how.': '那本书指出脆皮也可以变聪明，其实您是真不信的。但是最好还是看看它，看看需要怎么做。',
    'Trainers': '训练师',
    'This book holds all of the secrets of upper management. Train your Trimps to train other Trimps.': '这本书包含了高层管理的所有秘密。还可以让脆皮学会训练其他脆皮。',
    'Explorers': '探险家',
    'This book will allow you to hire trimps who can create map fragments for you!': '这本书将允许您雇佣能为您制造地图碎片的脆皮！',
    'Magmamancers': '岩浆巫师',
    'Your scientists think they can study this book to figure out how to train Trimps as Magmamancers. According to your scientists, according to legend, Magmamancers require gems instead of food as sustainance and can increase the rate of Metal gathering more and more as they stay on the same Zone.': '科学家们认为，它们可以通过研究这本书，弄明白将脆皮训练为岩浆巫师的方法。根据科学家们的说法，传说中岩浆巫师需要宝石而不是食物来供养，而且随着它们在同一区域的时间越来越长，金属的产量也会越来越高。',
    'This book will increase the space gained from each Hut by 100%.': '这本书将使每个小屋提供的空间增加100%。',
    'This book will increase the space gained from each House by 100%.': '这本书将使每个宅院提供的空间增加100%。',
    'This book will increase the space gained from each Mansion by 100%.': '这本书将使每个豪宅提供的空间增加100%。',
    'This book will increase the space gained from each Hotel by 100%.': '这本书将使每个宾馆提供的空间增加100%。',
    'This book will increase the space gained from each Resort by 100%.': '这本书将使每个度假村提供的空间增加100%。',
    'You may not want to do this right away.': '您可能不会想马上就这么做的。',
    'Researching this will prestige your shield. This will bring your shield to level 1 and vastly increase the cost of further upgrades, but will vastly increase the amount of stats given.': '此升级将重铸盾牌。使盾牌回到1级，升级成本极大增加，但同时效果也极大增加。',
    'Researching this will prestige your dagger. This will bring your dagger to level 1 and vastly increase the cost of further upgrades, but will vastly increase the amount of attack given.': '此升级将重铸匕首。使匕首回到1级，升级成本极大增加，但同时提升的攻击力也极大增加。',
    'Researching this will prestige your boots. This will bring your boots to level 1 and vastly increase the cost of further upgrades, but will vastly increase the amount of health given.': '此升级将重铸靴子。使靴子回到1级，升级成本极大增加，但同时提升的生命值也极大增加。',
    'Researching this will prestige your mace. This will bring your mace to level 1 and vastly increase the cost of further upgrades, but will vastly increase the amount of attack given.': '此升级将重铸狼牙棒。使狼牙棒回到1级，升级成本极大增加，但同时提升的攻击力也极大增加。',
    'Researching this will prestige your helmet. This will bring your helmet to level 1 and vastly increase the cost of further upgrades, but will vastly increase the amount of health given.': '此升级将重铸头盔。使头盔回到1级，升级成本极大增加，但同时提升的生命值也极大增加。',
    'Researching this will prestige your polearm. This will bring your polearm to level 1 and vastly increase the cost of further upgrades, but will vastly increase the amount of attack given.': '此升级将重铸战戟。使战戟回到1级，升级成本极大增加，但同时提升的攻击力也极大增加。',
    'Researching this will prestige your pants. This will bring your pants to level 1 and vastly increase the cost of further upgrades, but will vastly increase the amount of health given.': '此升级将重铸裤子。使裤子回到1级，升级成本极大增加，但同时提升的生命值也极大增加。',
    'Researching this will prestige your axe. This will bring your axe to level 1 and vastly increase the cost of further upgrades, but will vastly increase the amount of attack given.': '此升级将重铸战斧。使战斧回到1级，升级成本极大增加，但同时提升的攻击力也极大增加。',
    'Researching this will prestige your shoulderguards. This will bring your shoulderguards to level 1 and vastly increase the cost of further upgrades, but will vastly increase the amount of health given.': '此升级将重铸护肩。使护肩回到1级，升级成本极大增加，但同时提升的生命值也极大增加。',
    'Researching this will prestige your greatsword. This will bring your greatsword to level 1 and vastly increase the cost of further upgrades, but will vastly increase the amount of attack given.': '此升级将重铸巨剑。使巨剑回到1级，升级成本极大增加，但同时提升的攻击力也极大增加。',
    'Researching this will prestige your breastplate. This will bring your breastplate to level 1 and vastly increase the cost of further upgrades, but will vastly increase the amount of health given.': '此升级将重铸胸铠。使胸铠回到1级，升级成本极大增加，但同时提升的生命值也极大增加。',
    'Researching this will prestige your arbalest. This will bring your arbalest to level 1 and vastly increase the cost of further upgrades, but will vastly increase the amount of attack given.': '此升级将重铸强弩。使强弩回到1级，升级成本极大增加，但同时提升的攻击力也极大增加。',
    'Researching this will prestige your gambeson. This will bring your gambeson to level 1 and vastly increase the cost of further upgrades, but will vastly increase the amount of health given.': '此升级将重铸棉甲。使棉甲回到1级，升级成本极大增加，但同时提升的生命值也极大增加。',
    'This book will teach your trimps how to be 10% more efficient at making baby Trimps!': '这本书将使脆皮造宝宝的速度更快，提高10%的繁殖速度！',
    'This book will teach your Trainers to increase block by an additional 5%!': '这本书将使训练师额外增加5%的格挡！',
    'This book will teach you how to be twice as productive in everything you do! Hurray!': '这本书将使您自己做事情的效率翻倍！万岁！',
    'Note that this applies only to your productivity, not workers.': '请注意，此升级只对您自己生效，对工人无效。',
    'This book will teach your Trimps how to mine 25% faster!': '这本书将使脆皮采矿速度提高25%！',
    'This book will teach your Trimps how to cut wood 25% faster!': '这本书将使脆皮砍伐速度提高25%！',
    'This book will teach your Trimps how to farm 25% faster!': '这本书将使脆皮耕作速度提高25%！',
    'This book will teach your Trimps how to science things 25% faster!': '这本书将使脆皮研究速度提高25%！',
    'This book will teach your Trimps how to explore 300% more efficiently!': '这本书将使脆皮探险效率提高300%！',
    'This book will teach your Trimps how to mine 50% faster!': '这本书将使脆皮采矿速度提高50%！',
    'This book will teach your Trimps how to mine 60% faster!': '这本书将使脆皮采矿速度提高60%！',
    'This book will teach your Trimps how to chop wood 50% faster!': '这本书将使脆皮砍伐速度提高50%！',
    'This book will teach your Trimps how to chop wood 60% faster!': '这本书将使脆皮砍伐速度提高60%！',
    'This book will teach your Trimps how to farm 50% faster!': '这本书将使脆皮耕作速度提高50%！',
    'This book will teach your Trimps how to farm 60% faster!': '这本书将使脆皮耕作速度提高60%！',
    'This book will teach your Trimps how to science things 50% faster!': '这本书将使脆皮研究速度提高50%！',
    'This book will teach your Trimps how to science things 60% faster!': '这本书将使脆皮研究速度提高60%！',
    'Foremany': '大群工头',
    'Repurpose some of those RoboTrimps you found into an army of Robotic Foremen. Permanently adds 50000 Foreman to your town to aid in construction.': '把一些脆皮机器人改造成机械工头。永久增加50000工头。',
    'AutoJobs': '自动工作',
    'Unlock the Job Automator, the envy of Human Resourceimps across the Universe.': '解锁自动工作功能，全宇宙的脆皮HR们都会羡慕您的。',
    'AutoStructure': '自动建造',
    'Unlock the AutoStructure tool, allowing you to automatically purchase structures. In addition, all housing and battle territory bonuses will come with ready-to-fight Trimps inside (Not including the Dimensional Generator)!': '解锁自动建造功能，可以自动建造建筑。另外，所有住房和战斗领土加成在增加脆皮上限的同时，也会同时增加相应数量的脆皮(不包括维度发生器)！',
    'Unlock the AutoStructure tool, allowing you to automatically purchase structures. In addition, all housing and battle territory bonuses will come with ready-to-fight Trimps inside!': '解锁自动建造功能，可以自动建造建筑。另外，所有住房和战斗领土加成在增加脆皮上限的同时，也会同时增加相应数量的脆皮！',
    'Geneticistassist': '遗传学家助手',
    'Unlock Geneticistassist, the most powerful Geneticist Automator in this side of the galaxy!': '解锁遗传学家助手，在这边星系中是最强大的遗传学家管理者！',
    'DoubleBuild': '二重建造',
    'Stacked items in the Building Queue will be constructed two at a time.': '可以同时建造两个建筑。',
    //其他升级相关结束
    //游戏统计相关
    'Dead Trimps': '脆皮阵亡数',
    'Battles Won': '战斗胜利数',
    'Battles Lost': '战斗失败数',
    'Gems Collected': '宝石收集数',
    'Maps Cleared': '地图通过数',
    'Zones Cleared': '区域通过数',
    'Trimps Fired': '脆皮解雇数',
    'Wormholed氦': '虫洞上消耗的氦',
    'Golden Upgrades': '黄金升级数',
    'He/Hour this Run': '自上次传送后氦/小时',
    'Rn/Hour this Run': '自上次传送后氡/小时',
    'Best He/Hour this Run': '自上次传送后最高的氦/小时',
    'Best Rn/Hour this Run': '自上次传送后最高的氡/小时',
    'Total Helium Earned': '氦总获取量',
    'Best He/Hour all Runs': '所有游戏中最高的氦/小时',
    'Daily Challenge氦': '日常挑战获取的氦',
    'Total Radon Earned': '氡总获取量',
    'Best Rn/Hour all Runs': '所有游戏中最高的氡/小时',
    'Daily Challenge氡': '日常挑战获取的氡',
    'Zones Liquified': '区域液化数',
    'Highest Void Map Clear': '虚空地图最高通过区域',
    'Highest U2 Void Map': '宇宙2虚空地图最高通过区域',
    'Total Void Maps Cleared': '虚空地图通过数',
    'Heirlooms Found': '传家宝收集数',
    'Cores Found': '核心收集数',
    'World Cells Overkilled': '世界格子超杀总数',
    'Trimps from Generator': '维度发生器生产的脆皮数',
    'Burned Nurseries': '岩浆烧掉的托儿所数',
    'Tokens This Run': '自上次传送后获得的符记',
    'Most Tokens': '符记最高数量',
    'Amalgamators Befriended': '合并者数量',
    'Fluffy Exp This Run': '自上次传送后绒绒经验',
    'Best Fluffy Exp': '最高绒绒经验',
    'Scruffy Exp This Run': '自上次传送后污污经验',
    'Best U2 Scruffy Exp': '最高污污经验',
    'Fluffy Exp/Hr this Run': '自上次传送后绒绒经验/小时',
    'Scruffy Exp/Hr this Run': '自上次传送后污污经验/小时',
    'Best Fluffy Exp/Hr this Run': '自上次传送后最高绒绒经验/小时',
    'Best Scruffy Exp/Hr this Run': '自上次传送后最高污污经验/小时',
    'Best Fluffy Exp/Hr': '最高绒绒经验/小时',
    'Best Scruffy Exp/Hr': '最高污污经验/小时',
    'Total Portals Used': '传送门使用次数',
    'Total Radon Portals': '宇宙2传送门使用次数',
    'Planets Broken': '行星破碎数',
    'Highest Zone': '最高区域',
    'Highest Zone U': '最高区域于宇宙',
    'Trap/Tower Kills': '陷阱/塔击杀数',
    //游戏统计相关结束
    //游戏成就相关
    'Zone Progress': '区域进度',
    'Complete Zone': '通过区域',
    'Row Finished! (Highest is': '此类成就全部完成！(最高为',
    'This is Easy': '易如反掌',
    'Blimp Slayer': '脆皮飞艇杀手',
    'Groundbreaker': '开拓者',
    'The Beginning': '自此而始',
    'Determined': '决心已定',
    'Professor': '教授',
    'Trimp Aficionado': '脆皮酷爱者',
    'Slayer of Planets': '行星杀手',
    'Electric': '电气',
    'Stronk': '强大',
    'Endurance': '耐久力',
    'Unwavering': '绝不动摇',
    'Resolved': '坚定不移',
    'Steadfast': '矢志不渝',
    'Grit': '坚毅果敢',
    'Perseverance': '不屈不挠',
    'Persistence': '锲而不舍',
    'The Instigator': '煽动者',
    'The Destroyer': '破坏者',
    'The Eradicator': '歼灭者',
    'The Exterminator': '毁灭者',
    'Heat Maker': '制热者',
    'Heat Hater': '绝热者',
    'Heat Breaker': '断热者',
    'Heat Slayer': '除热者',
    'Heat Expert': '热专家',
    'Heat Bender': '饮热者',
    'Volcanic': '火山',
    'Magma Master': '岩浆大师',
    'Acre of Nature': '自然之地',
    'Aspirer': '野望者',
    'Insane': '癫狂',
    'Spire Master': '尖塔大师',
    'Zone Progress: U': '区域进度：宇宙',
    'This is Harder': '难度上升',
    'Second Coming': '基督复临',
    'Blimp Destroyer': '脆皮飞艇毁灭者',
    'Improbable Again': '乌有再临',
    'Unstoppable': '不可阻挡',
    'Progresser': '继续推进',
    'Fifty Fifty': '五五开',
    'Actually Unbroken': '的确坚不可摧',
    'Lucky': '幸运',
    'Apt': '恰如其分',
    'The Unshocked': '不动如山',
    'Universalist': '博识大贤者',
    'Trimp Damage': '脆皮伤害值',
    'Lead Trimps': '领导脆皮',
    'Silver Trimps': '脆银脆皮',
    'Golden Trimps': '软金脆皮',
    'Copper Trimps': '黄铜脆皮',
    'Platinum Trimps': '白金脆皮',
    'Iron Trimps': '镔铁脆皮',
    'Steel Trimps': '精钢脆皮',
    'Obsidian Trimps': '黑曜石脆皮',
    'Cobalt Trimps': '钴制脆皮',
    'Topaz Trimps': '黄玉脆皮',
    'Diamond Trimps': '钻石脆皮',
    'Transcendental Trimps': '超越脆皮',
    'Trimps Owned': '脆皮总数',
    'Too Many Trimps': '脆皮过量',
    'Overcrowding': '人满为患',
    'This Is Trimp': '这是脆皮',
    'It Takes a Tribe': '部落之力',
    'It Takes a Town': '一镇之力',
    'It Takes a City': '一城之力',
    'A Milli Trimpi': '百万脆皮',
    'Trimpsponential Growth': '脆皮指数增长',
    'MMMEGATRIMPS': '百百万脆皮',
    'It Takes a Nation': '举国之力',
    'It Takes a Planet': '行星之力',
    'It Takes a Universe': '宇宙之力',
    'Real Estate': '不动产',
    'Build your first  Hut': '首次建造小屋',
    'Build your first  House': '首次建造宅院',
    'Build your first  Mansion': '首次建造豪宅',
    'Build your first  Hotel': '首次建造宾馆',
    'Build your first  Resort': '首次建造度假村',
    'Build your first  Gateway': '首次建造维度裂隙',
    'Build your first  Wormhole': '首次建造虫洞',
    'Build your first  Collector': '首次建造汲能设施',
    'Build your first  Warpstation': '首次建造跃迁核心',
    'Use the Dimensional Generator': '使用过维度发生器',
    'Tiny Homes': '小小的家',
    'Residential Development': '住宅开发',
    'Taste for Luxury': '品味奢华',
    'Fancy': '梦想成真',
    'The Skyline': '天际线',
    'Dimensional Drift': '维度漂移',
    'Too Cool For Helium': '氦太酷了',
    'Space From Stars': '星星空间',
    'To Infinity and Beyond': '飞向宇宙，浩瀚无垠',
    'Mass Generation': '质量发生',
    'Total Portals': '传送门总次数',
    'A Trimp Through Time': '穿越时空的一个脆皮',
    'When The Wild Things Are': '狂野时空',
    'A Time Like No Other': '独一无二的时空',
    'Venti Timeachino': '来一大杯时间奇诺',
    'Time of Your Life': '流金岁月',
    'Centennial Trimper': '百重脆皮',
    'Amnesia': '健忘症',
    'Dedicated Traveller': '专注的旅行者',
    'Total Zone Clears': '区域通过总数',
    'Pathfinder': '探路者',
    'Bushwhacker': '荒野旅者',
    'Pioneer': '拓荒者',
    'Seeker': '探求者',
    'Adventurer': '冒险者',
    'Lucky Resolve': '幸运数的信念',
    'GigaClearer': '千区踏破',
    'Globetrotter': '环球旅者',
    'Vanquisher': '审判者',
    'Conquistador': '征服者',
    'Total Map Clears': '地图通过总数',
    'Map Maker': '地图绘制者',
    'Map Runner': '地图运行者',
    'Map Destroyer': '地图毁灭者',
    'Map Annihilator': '地图歼灭者',
    'Map Slaughterer': '地图屠杀者',
    'Map Commander': '地图指挥官',
    'Maptain': '地图队长',
    'Cartographer': '制图宗师',
    'Helium Collection': '氦收集量',
    'Cool': '凉快',
    'Crisp': '凉爽',
    'Brisk': '清凉',
    'Chilly': '冰冷',
    'Frosty': '寒霜',
    'Frigid': '寒冷',
    'Frozen': '冻结',
    'Gelid': '冷冽',
    'Glacial': '冰川',
    'Freaking Cold': '酷寒',
    'Arctic': '极地',
    'Absolute Zero': '绝对零度',
    'Radon Collection': '氡收集量',
    'Radon Runner': '氡之运行者',
    'The Irradiated': '辐照',
    'Radonlicious': '优质氡',
    'Radon Quixote': '氡吉诃德',
    'Radon Racer': '氡之车手',
    'Raging Radon': '氡之暴怒',
    'Radon Wrangler': '氡之牧者',
    'Helium Per Hour': '氦每小时',
    'Row Finished! (Currently at': '此类成就全部完成！(目前为',
    'Coldlector': '汲冷者',
    'Centelium': '百氦长',
    'Frosty Tanker': '寒霜气罐',
    'Blimp Snatcher': '脆皮飞艇掠夺者',
    'Squeaky Dasher': '嘎吱冲锋',
    'Quick N Cool': '快速冷却',
    'Hour Bender': '小时狂欢',
    'Acquired Frost': '后天霜冻',
    'Vacuum': '真空',
    'Levitator': '飘浮者',
    'Soarer': '滑翔者',
    'Cool Runnings': '冰上轻驰',
    'Heirloom Collection': '传家宝收集量',
    'Finder': '发现者',
    'Gatherer': '采集者',
    'Accumulator': '积聚者',
    'Fancier': '爱好者',
    'Aficionado': '酷爱者',
    'Devotee': '狂热信徒',
    'Connoisseur': '鉴定大师',
    'Expert': '专家',
    'Curator': '主管',
    'Gem Collection': '宝石收集量',
    'What\'s This For?': '这是干什么用的？',
    'Collector of Shinies': '亮闪闪收藏家',
    'Dragimp Lover': '脆皮龙爱好者',
    'Expert of Shinies': '亮闪闪专家',
    'Jeweller': '珠宝商',
    'Gemaster': '宝石大师',
    'Daily Bonus': '日常奖励',
    'Daytermined': '日之决意',
    'Daydicated': '日之献身',
    'Daystiny': '日之命运',
    'Daylighted': '日之愉悦',
    'Daystroyer': '日之破坏',
    'Daylusional': '日之妄想',
    'Dayrailed': '日之脱轨',
    'Daypocalyptic': '日之灾变',
    'Humane Run': '仁慈的战斗',
    'Progress: You need to portal to become eligible': '进度：您需要使用传送门后才可以开始尝试成就',
    'Progress: You lost more than once on Z': '进度：您已经战败超过一次了，发生在区域',
    'Progress: You lost too many fights!': '进度：您输了太多次战斗了！',
    'Progress: You\'ve lost once this Zone, be careful!': '进度：此区域您已经战败了一次，请小心了！',
    'Progress: Still Earnable!': '进度：仍然可获得！',
    'Row Finished! (You need to portal to become eligible': '此类成就全部完成！(您需要使用传送门后才可以开始尝试成就',
    'Row Finished! (You lost more than once on Z': '此类成就全部完成！(您已经战败超过一次了，发生在区域',
    'Row Finished! (You lost too many fights!': '此类成就全部完成！(您输了太多次战斗了！',
    'Row Finished! (You\'ve lost once this Zone, be careful!': '此类成就全部完成！(此区域您已经战败了一次，请小心了！',
    'Row Finished! (Still Earnable!': '此类成就全部完成！(仍然可获得！',
    'Sitter': '护工',
    'Watchdog': '看门狗',
    'Nanny': '保姆',
    'Caretaker': '监护人',
    'Supervisor': '主管人',
    'Advocate': '拥护者',
    'Guardian': '守护者',
    'Coddler': '纵容者',
    'Savior': '拯救者',
    'Defender': '防御者', //包括两个成就名称
    'Trimp Lover': '脆皮爱人',
    'Righteous': '公平正义',
    'Mapless Drifter': '无图漂泊者',
    'Progress: You must be in Universe 2!': '进度：您需要在宇宙2中才可以尝试成就！',
    'Progress: You ran a Map on Z': '进度：您运行了地图，发生在区域',
    'Map Misser': '地图思念者',
    'Map Lacker': '地图缺乏者',
    'Mapophobia': '地图恐惧症',
    'GPS': '导航系统',
    'Undisoriented': '方位确定',
    'Need No Map': '无需地图',
    'The Efficient': '高效',
    'Bulldozer': '推土机',
    'Worldly': '世界之子',
    'Shielded': '护盾相关',
    'Progress: Already earned!': '进度：已经获得！',
    'Progress: Still Earnable! Lowest is': '进度：仍然可获得！最低为 ',
    'Crumb of Comfort': '聊可解忧',
    'Common Comfort': '普通慰藉',
    'Controlled Comfort': '可控慰藉',
    'Certain Comfort': '特定慰藉',
    'Copious Comfort': '充裕慰藉',
    'Critical Comfort': '关键慰藉',
    'Cosmic Comfort': '宇宙慰藉',
    'Speed: The Block': '最速: 障碍区',
    'Progress: Best run is': '进度：最快为',
    'Progress: Too slow! Best run is': '进度：因太慢失败了！最快为',
    'Row Finished! (Best run is': '此类成就全部完成！(最快为',
    'Block Hobbyist': '障碍业余爱好者',
    'Block Apprentice': '障碍学徒',
    'Block Professional': '障碍专家',
    'Block Rockstar': '障碍摇滚巨星',
    'Speed: The Wall': '最速: 高墙',
    'Wall Novice': '高墙萌新',
    'Wall Student': '高墙学生',
    'Wall Contender': '高墙争夺者',
    'Wall Scaler': '高墙攀登者',
    'Speed: Anger': '最速: 愤怒维度',
    'Angry Jogger': '愤怒慢跑者',
    'Angry Runner': '愤怒运行者',
    'Angry Sprinter': '愤怒冲刺者',
    'Angry Racer': '愤怒车手',
    'Angry Teleporter': '愤怒传送者',
    'Speed: Doom': '最速: 末日神殿',
    'Walk to Doom': '末日漫步',
    'Trot to Doom': '末日疾走',
    'Canter to Doom': '末日小跑',
    'Gallop to Doom': '末日疾驰',
    'Speed: The Prison': '最速: 监狱',
    'Prison Odyssey': '监狱跋涉',
    'Prison Expedition': '监狱远征',
    'Prison Adventure': '监狱冒险',
    'Prison Trek': '监狱远行',
    'Prison Tour': '监狱之旅',
    'Prison Road Trip': '监狱路途',
    'Prison Hike': '监狱远足',
    'Prison Jog': '监狱慢跑',
    'Prison Sprint': '监狱冲刺',
    'Speed: Bionic': '最速: 仿生仙境',
    'Lover of Bots': '机器人爱人',
    'Friend of Bots': '机器人之友',
    'Acquaintance of Bots': '机器人熟人',
    'Bot Disliker': '机器人厌恶者',
    'Bot Hater': '机器人憎恨者',
    'Bot Slayer': '机器人杀手',
    'Speed: Star': '最速: 爆炸之星',
    'Cosmic Curiosity': '宇宙求知欲',
    'Star Struck': '星际碰撞',
    'Space Speeder': '太空变速器',
    'Intense Inertia': '强大惯性',
    'Stellar Striker': '恒星大冲撞',
    'Insane Imploder': '疯狂爆炸',
    'Born Imploded': '生而爆炸',
    'Speed: Spire': '最速: 尖塔',
    'Spire Trialer': '尖塔试炼者',
    'Spire Rider': '尖塔骑手',
    'Spire Strider': '尖塔漫游者',
    'Spire Glider': '尖塔滑翔者',
    'Spire Flier': '尖塔飞行家',
    'Inspired': '尖塔启迪',
    'Spire Spirer': '尖塔螺旋者',
    'Speed: Spire II': '最速: 尖塔 II',
    'Toxic Treader': '毒之踏破者',
    'Toxic Trotter': '毒之疾走者',
    'Toxic Traveller': '毒之旅行者',
    'Toxic Tempo': '毒之节奏',
    'Toxic Teleporter': '毒之传送者',
    'Speed: Spire III': '最速: 尖塔 III',
    'Chillin': '冰冷刺骨',
    'Arctic Accelerator': '极地加速器',
    'Rimy Runner': '霜冻运行者',
    'Subzero Sprinter': '零下冲刺者',
    'Frigid and Furious': '寒冷之怒',
    'Speed: Spire IV': '最速: 尖塔 IV',
    'Walker': '行者',
    'Gusty Gait': '阵风步法',
    'Breeze Breaker': '微风破坏者',
    'Zippy Zephyr': '迅捷微风',
    'Temporal Tempest': '暂时风暴',
    'Stratus Screamer': '卷云尖啸',
    'Tearin\' Tornado': '撕裂狂风',
    'Speed: Spire V': '最速: 尖塔 V',
    'actiVe': 'V激活',
    'resolVed': 'V决心',
    'traVeler': 'V旅者',
    'driVen': 'V驱动',
    'triVialized': 'V轻视',
    'U2 Speed: Big Wall': '宇宙2最速：巨墙',
    'Wall Crawler': '墙爬行者',
    'Wall Scholar': '墙学者',
    'Wall Mauler': '墙槌手',
    'Wall Baller': '墙土豪',
    'U2 Speed: Palace': '宇宙2最速：棱镜宫殿',
    'Peasant': '佃农',
    'Jester': '弄臣',
    'Advisor': '顾问',
    'Ruler': '支配者',
    'U2 Speed: Melting': '宇宙2最速：熔点',
    'Thawed': '解冻',
    'Tempered': '升温',
    'Melty': '熔化',
    'Molten': '熔融',
    'Feats': '壮举',
    'Forgot Something': '忘了件事',
    'Complete the Dimension of Anger before buying Bounty': '在购买赏金升级前通过愤怒维度地图',
    'Underachiever': '后进者',
    'Reach Z30 with no respec and 60 or less He spent': '在氦花费不超过60，且未在传送后进行特权洗点的前提下到达区域30',
    'Hoarder': '囤积者',
    'Needs Block': '需要格挡',
    'Die 50 times to a single Voidsnimp': '在同一只脆皮虚空鹬上战败50次',
    'Underbalanced': '平衡不足',
    'Beat Balance, never having more than 100 stacks': '在平衡从未超过100层的前提下，完成平衡挑战',
    'Peacekeeper': '和平使者',
    'Reach Zone 10 with 5 or fewer dead Trimps': '在脆皮死亡数未超过5的前提下，到达区域10',
    'Elite Feat': '精英壮举',
    'Reach exactly 1337 He/Hr': '氦/小时正好达到1337',
    'Grounded': '踏实',
    'Attack 20 times without dying in Electricity': '在电流挑战中，连续攻击20次不死亡',
    'Maptastic': '有图有资源',
    'Create a perfect Map': '制造一张完美的地图',
    'Now What': '就这',
    'Use up all 7 Daily Challenges': '完成当前全部的7次日常挑战',
    'Swag': '有型',
    'Equip a magnificent or better Staff and Shield': '同时装备华丽及以上级别的权杖和盾牌',
    'Workplace Safety': '安全生产',
    'Reach Z60 with 1000 or fewer dead Trimps': '在脆皮死亡数未超过1000的前提下，到达区域60',
    'No Time for That': '没空理它',
    'Reach Z120 without using manual research': '在不使用手动研究的前提下，到达区域120',
    'Tent City': '帐篷城',
    'Reach Z75 without buying any housing': '在不建造任何住房的前提下，到达区域75',
    'Consolation Prize': '安慰奖',
    'Find an uncommon heirloom at Z146 or higher': '在区域146及以上获得一个罕见传家宝',
    'Holey': '多洞',
    'Shaggy': '长毛',
    'Reach Z60 with rank III or lower equipment': '在装备未超过III级的前提下，到达区域60',
    'One-Hit Wonder': '一鸣惊人',
    'Kill an Improbability in one hit': '一击杀死一个乌有者',
    'Survivor': '生还者',
    'Beat a Lv 60+ Destructive Void Map with no deaths': '在没有战败过的前提下，通过一张60级以上的破灭虚空地图',
    'Thick Skinned': '皮糙肉厚',
    'Beat Crushed without being crit past Z': '在到达特定区域后未受到过敌人暴击的前提下，完成粉碎挑战。该区域为区域',
    'Great Host': '热情好客的主人',
    'Kill an enemy with 100 stacks of Nom': '杀死一个有100层美味的敌人',
    'Unbroken': '坚不可摧',
    'Break the Planet with 5 or fewer lost battles': '在战败不超过5次的前提下破碎行星',
    'Unemployment': '失业',
    'Reach Z60 without hiring a single Trimp': '在不雇佣脆皮工作的前提下，到达区域60',
    'Very Sneaky': '打枪的不要',
    'Complete a Zone above 99 without falling below 150 stacks on Life': '生命挑战中，在区域99以上的一个区域中从未低于150层亡灵化',
    'Extra Crispy': '嘎蹦脆',
    'Spend at least 10 minutes breeding an army with Geneticists': '利用遗传学家，花费至少10分钟繁殖一队士兵',
    'Trimp is Poison': '脆皮有毒',
    'Beat Toxicity, never having more than 400 stacks': '在毒性从未超过400层的前提下，完成毒性挑战',
    'Realtor': '房产中介',
    'Own 100 of all housing buildings': '所有类型住房的数量都至少为100',
    'Gotta Go Fast': '抓紧时间',
    'Overkill every possible world cell before Z': '在到达特定区域之前，超杀世界上的每个格子。该区域为区域',
    'Grindless': '佛系玩家',
    'Complete Watch without entering maps or buying Nurseries': '在未进入过地图，也没有建造托儿所的前提下，完成守望挑战',
    'Leadership': '领导才能',
    'Complete Lead with 100 or fewer lost battles': '在战败不超过100次的前提下，完成领导挑战',
    'Build your 10th Spire Floor': '建造第10层尖塔',
    'Stoned': '上头了',
    'Swagmatic': '岩浆套装',
    'Equip a Magmatic Staff and Shield': '同时装备岩浆级别的权杖和盾牌',
    'Brr': '冷冷冷冷冷',
    'Bring a world enemy\'s attack below': '让世界上一名敌人的攻击力低于',
    'Unsatisfied Customer': '不满的顾客',
    'Complete Lead with 1 or fewer Gigastations': '在千兆核心不超过1个的前提下，完成领导挑战',
    'Organic Trimps': '有机脆皮',
    'Complete Corrupted without Geneticists': '在不使用遗传学家的前提下，完成腐化挑战',
    'Fhtagn': '克总发糖',
    'Complete a Void Map at Z215 on Domination': '统治挑战中，在区域215通过一张虚空地图',
    'Invincible': '天下无敌',
    'Complete The Spire with 0 deaths': '在无战败的前提下通过尖塔',
    'Mighty': '非凡',
    'Overkill an Omnipotrimp': '超杀一名全能者',
    'Mother Lode': '肥羊',
    'Defeat a Healthy enemy with 200 stacks of wind': '击杀一名有200层风的健康敌人',
    'Infected': '感染者',
    'Build up a Poison debuff that\'s 1000x higher than your attack': '使您毒的效果达到您攻击力的1000倍',
    'Challenged': '挑战达人',
    'Earn a Challenge': '使挑战',
    'bonus of': '的加成达到',
    'Bionic Sniper': '仿生狙击手',
    'Complete a Bionic Wonderland map 45 levels higher than your Zone number': '通过一张地图等级高于您当前区域45级的仿生仙境地图',
    'Nerfed': '弱化',
    'Obliterate': '抹消',
    'Defeat an enemy on Obliterated': '抹杀挑战中，击杀一个敌人',
    'M\'Algamator': '初并者',
    'Find an Amalgamator on Z': '在初始区域就获得一个合并者，也就是在区域',
    'Critical Luck': '暴击豪运',
    'Get 10 Red Crits in a row': '连着10次红色暴击',
    'AntiScience': '科学无用',
    'Beat Z75 on the Scientist V challenge': '科学家 V挑战中，通过区域75',
    'HeMergency': '氦急情况',
    'Gain at least 01189998819991197253 He from one Bone Portal': '一次骨头传送门获得01189998819991197253氦(译者注：即科学记数法下的1.19e18)',
    'Eradicate': '杀绝',
    'Kill an Enemy on Eradicated': '灭绝挑战中，击杀一个敌人',
    'Invisible': '匿迹隐形',
    'Complete Spire V with no deaths': '在塔内没有战败过的前提下，通过尖塔 V',
    'Power Tower': '力量之塔',
    'Build your 20th Spire Floor': '建造第20层尖塔',
    'Bionic Nuker': '仿生爆发',
    'Complete a Bionic Wonderland map 200 levels higher than your Zone number': '通过一张地图等级高于您当前区域200级的仿生仙境地图',
    'Hypercoordinated': '超级协同',
    'Complete Spire II on the Coordinate challenge': '协同挑战中，通过尖塔 II',
    'Nerfeder': '超级弱化',
    'Imploderated': '抹杀爆星',
    'Beat Imploding Star on Obliterated': '抹杀挑战中，通过爆炸之星地图',
    'Wildfire': '野火',
    'Close 750 Nurseries at the same time': '一次性关闭750个托儿所',
    'Unessenceted': '究极精华',
    'Earn Dark Essence with no respec and 0 He spent': '在氦花费为0，且未在传送后进行特权洗点的前提下获得黑暗精华',
    'Melted': '岩杀',
    'Reach Magma on Obliterated': '抹杀挑战中，达到岩浆的区域',
    'Screwed': '万事皆休',
    'Break the Planet on Eradicated': '灭绝挑战中，破碎行星',
    'Eliter Feat': '超精英壮举',
    'Reach exactly 1337 Rn/Hr': '氡/小时正好达到1337',
    'Don\'t Need Luck': '无需运气',
    'One-shot a Dimension of Rage enemy on Unlucky while Unlucky': '不幸挑战中，当最低伤害数值第一位是奇数时，秒杀暴怒维度中的一个敌人',
    'Perfectly Balanced': '完全平衡',
    'Complete Downsize with an equal amount of Huts, Houses, Mansions, Hotels and Resorts': '在小屋、宅院、豪宅、宾馆和度假村数量完全相同的前提下，完成精简挑战',
    'Resourceyphobe': '资源恐惧症',
    'Complete Transmute without hiring a single Trimp': '在不雇佣脆皮工作的前提下，完成变形挑战',
    'Upsized': '增员',
    'Complete Unbalance with 500 stacks of Unbalance': '在拥有500层不平衡的前提下，完成不平衡挑战',
    'Unpoppable': '牢不可破',
    'Complete Bublé without using Prismal or respeccing Perks': '在未加点棱镜化，也未在传送后进行特权洗点的前提下，完成布累挑战',
    'Pwnd': '大获全胜',
    'Complete Duel without ever falling below 20 points': '在从未低于20决斗点数的前提下，完成决斗挑战',
    'Solid': '固体',
    'Complete Melt without ever having more than 150 stacks': '在从未高于150层熔化的前提下，完成熔化挑战',
    'Coastapalooza': '捕手道滑行达人',
    'Complete Trappapalooza without Trapping on or above Z': '在到达特定区域后未使用过陷阱的前提下，完成捕手道达人挑战。该区域为区域',
    'Witherproof': '防止凋零',
    'Close Call': '有惊无险',
    'Complete Revenge with exactly 19 stacks': '在正好拥有19层复仇的前提下，完成复仇挑战',
    'Level Up': '等级提升',
    'Complete 80/80 quests on Quest': '在完成全部80次任务的前提下，完成任务挑战',
    'Unassisted': '一己之力',
    'Complete Archaeology without ever having more than 0 of one Relic': '在任意遗物数量从未超过0的前提下，完成考古学挑战',
    //游戏成就相关结束
    //游戏设置相关
    'Not Saving': '不自动保存',
    'AutoSaving': '自动保存',
    'Automatically save the game once per minute': '每分钟自动保存一次游戏',
    'Not Saving Online': '不在线保存',
    'Saving with PlayFab': '使用PlayFab在线保存',
    'When the game saves, every 30 minutes also back up a copy online with PlayFab. While using this setting, you will be asked if you want to download your online save if it is ever ahead of the version on your computer. You can also manually import your save from PlayFab through the Import menu.': '当游戏保存时，每半小时还会在线备份到PlayFab。如果在线备份存档较为新一些，那么在使用此设置时，系统会询问您是否要下载在线存档替换。您也可以通过“导入”菜单手动从PlayFab导入存档。',
    'Scientific Notation': '科学记数法',
    'Standard Formatting': '标准格式',
    'Engineering Notation': '工程记数法',
    'Alphabetic Notation': '字母记数法',
    'Hybrid Notation': '混合记数法',
    'Logarithmic Notation': '对数记数法',
    'Swap between Standard Formatting (12.7M, 540B), Engineering Notation (12.7e6, 540e9), Scientific Notation (1.27e7, 5.40e11), Alphabetic Notation (12.7b, 540c), Hybrid Notation (Standard up to e96, then Engineering. Mimics Standard pre 4.6), and Logarithmic Notation (10^7.10, 10^8.73). Hold Ctrl while clicking Logarithmic Notation to change the base.': '在标准格式(12.7M, 540B)，工程记数法(12.7e6, 540e9)，字母记数法(12.7b, 540c)，混合记数法(直到e96之前使用标准格式，之后使用工程记数法)，对数记数法(10^7.10, 10^8.73)，以及科学记数法(1.27e7, 5.40e11)之间切换。当使用对数记数法时，按下Ctrl键再点击可以切换底数。',
    'Shift for Tooltips': '按Shift键显示提示框',
    'Showing Tooltips': '显示提示框',
    'will ensure that all tooltips are shown when you mouse over them.': '可以在鼠标划过时显示所有提示框。',
    'will hide most tooltips by default, unless you are holding your shift key. Keep this setting in mind when unlocking new things to do, as much of the game is explained in tooltips!': '将默认隐藏绝大部分提示框，除非按住Shift键。解锁新内容时最好注意一下这边的设置，因为大部分内容都在提示框里进行说明了！',
    'Top Right Tips': '提示框顶部靠右',
    'Center Bottom Tips': '提示框底部居中',
    'Center Top Tips': '提示框顶部居中',
    'Toggle the position of your tooltips between top right, centered above or centered below the mouse.': '切换提示框处于您的鼠标顶部靠右、底部居中还是顶部居中。',
    'No Queue Animation': '关闭队列动画',
    'Queue Animation': '开启队列动画',
    'Toggle on or off the building queue blue color animation.': '切换队列蓝色动画的开关。',
    'No Outline': '无进度条轮廓线',
    'Outline': '有进度条轮廓线',
    'Toggle on or off a black bar at the end of all progress bars. Can help discern where the progress bar ends.': '切换进度条末端是否有一条轮廓线。可以帮助辨识进度条的末端。',
    'No Menu Formatting': '不启用工作及建筑大数字',
    'Formatting Menu': '启用工作及建筑大数字',
    'Toggle on or off large number formatting for jobs and buildings on the left menu.': '切换是否对左端菜单中工作及建筑的大数字启用大数记数法。',
    'No Perk Formatting': '不启用特权等级大数字',
    'Formatting Perk Levels': '启用特权等级大数字',
    'Toggle on or off large number formatting for Perk levels.': '切换是否对特权等级的大数字启用大数记数法。',
    'Large Perk Buttons': '特权按钮布局：大',
    'Small Perk Buttons': '特权按钮布局：小',
    'Tiny Perk Buttons': '特权按钮布局：微小',
    'Shrink the size of perk buttons in the Portal and View Perks windows.': '修改传送门和查看特权界面中特权按钮的大小。',
    'is default and fits 5 buttons per row.': '为默认选项，一行可以容纳5个按钮。',
    'shrinks the size to fit 6 per row, and': '缩小了一些，一行可以容纳6个按钮，而 ',
    'fits 7 per row.': '一行可以容纳7个按钮。',
    'No Progress Bars': '关闭进度条',
    'Progress Bars': '开启进度条',
    'Performance Bars': '开启性能进度条',
    'Toggle progress bars to on, off, or performance. Performance and off will reduce CPU usage.': '切换进度条的开关。性能进度条或关闭进度条可以减少CPU占用。',
    'Not Confirming': '风险购买不弹出确认框',
    'Confirming': '风险购买弹出确认框',
    'Toggles on or off the confirmation popup on scary purchases like Wormholes.': '切换是否在有风险的购买，如建造虫洞、盾牌格挡升级和千兆核心升级时弹出确认框。',
    'Not Locking': '解锁后不锁定队列',
    'Locking': '解锁后锁定队列',
    'Enables/disables the locking of buildings, jobs, upgrades, and equipment for 1 second after unlocking something new. Useful to prevent accidental purchases.': '切换解锁新建筑、工作、升级和装备后是否在1秒内锁定队列。可以有效避免误操作。',
    'No Achieve Popup': '不弹出获得成就提示框',
    'Popup Achievements': '弹出获得成就提示框',
    'Decide whether or not you want popups on completing an achievement.': '切换是否在获得成就以后弹出提示框。',
    'Tier First': '级别优先',
    'Tier first': '级别优先',
    'Equip first': '装备优先',
    'Equip First': '装备优先',
    'Choose which upgrades you want first if it has been a while since you last ran maps.': '选择想要在地图中先获得的升级。',
    'will cause maps to drop all items for the lowest tier before moving to the next. (Greatsword II -> Breastplate II -> Shield III': '地图在掉落更高级升级前会优先掉落所有更低级升级 (巨剑 II -> 胸铠 II -> 盾牌 III',
    'will start from Shield and drop all available Shield prestiges before continuing to Dagger and so on. (Shield III -> Shield IV -> Dagger III': '地图从盾牌的升级开始掉落，全部掉落完以后，再开始掉落匕首的升级，依此类推 (盾牌 III -> 盾牌 IV -> 匕首 III',
    'Repeat Forever': '永远重复',
    'Repeat to': '重复次数：',
    'Repeat for Any': '重复到全满',
    'Repeat for Items': '重复到无特殊',
    'will cause the map to continually repeat if Repeat Maps is enabled.': '启用时，地图将不停重复运行。',
    'will repeat unless there are no more special items left for that level of map.': '启用时，只有在该地图已经获得全部装备以后才关闭重复。',
    'will repeat unless you have 10 Map Bonus stacks.': '启用时，只有在地图奖励层数达到10层后才关闭重复。',
    'will repeat unless there are no special items available AND you can not earn more Map Bonus stacks.': '启用时，只有在该地图已经获得全部特殊掉落(装备、升级及地图奖励)后才关闭重复。',
    'This setting only matters if Repeat is on. Toggling Repeat off will still leave the map when it is finished no matter what.': '只有在开启重复时此设置才会生效。如果关闭重复，那么通过地图以后将会离开。',
    'Exit to Maps': '退回选地图',
    'Exit to World': '退回世界',
    'Choose whether to go to the Maps Screen or World after completing a map.': '在通过地图以后切为选地图界面还是切为世界。',
    'One Void Map': '只运行一张虚空地图',
    'Finish All Voids': '运行所有虚空地图',
    'Decide if you want to continue running the rest of your Void Maps after finishing one.': '切换在通过一张虚空地图后，是否继续运行剩余的虚空地图。',
    'Not Confirming Rare': '不确认稀有资源使用',
    'Confirming Rare Stuff': '确认稀有资源使用',
    'Hide popup confirmation messages when spending rare resources in the Bone Trader or Heirlooms menus.': '切换在骨法商人或传家宝菜单花费稀有资源时，是否弹出提示框。',
    'Not Alerting': '关闭提醒',
    'Alerting': '开启提醒',
    'Toggle on or off the display of yellow alert icons when unlocking something new.': '切换是否在解锁新东西的时候显示黄色感叹号提醒。',
    'Less Breed Timer': '简略繁殖计时',
    'More Breed Timer': '详尽繁殖计时',
    'Display time to breed a full group of soldiers next to the current breed timer.': '切换是否在当前繁殖计时旁边显示一整队士兵繁殖所需的时间。',
    'Background': '背景',
    'Default Theme': '默认主题',
    'Theme': '主题',
    'Gradient Theme': '渐变主题',
    'Toggle between the default Trimps theme, a custom dark theme made by u/Grabarz19, a gradient theme by u/k1d_5h31d0n, and the default theme with a black background.': '在以下主题之间切换：默认脆皮主题，u/Grabarz19创作的黑暗主题，u/k1d_5h31d0n创作的渐变主题，以及黑色背景的默认主题。',
    'Not Fading': '关闭渐隐效果',
    'Fading': '开启渐隐效果',
    'Toggle on or off the fade in effect on elements.': '切换是否开启游戏元素的渐隐效果。',
    'Minimalist Maps': '关闭额外地图信息',
    'Extra Map Info': '开启额外地图信息',
    'Toggle on or off adding extra information to map items.': '切换是否在选地图界面显示额外的地图物品信息。',
    'Not Averaging': '不平均计算劫掠明细',
    'Averaging': '平均计算劫掠明细',
    'Toggle whether or not loot from maps and the world should be counted in the loot breakdown and tooltip calculations. Calculates a moving average of the loot. If you want to clear the average, try toggling it off and on again.': '切换是否在劫掠明细及相应提示框中平均计算地图和世界的战利品。根据当前情况进行计算。如果您想要重新计算，可以关闭再开启此项。',
    'No Heirloom Pop': '不弹出获得传家宝提示框',
    'Popping Heirlooms': '弹出获得传家宝提示框',
    'Decide whether or not you want popups on looting an Heirloom.': '切换是否在获得传家宝以后弹出提示框。',
    'Minimal Perk Info': '简单特权信息',
    'Extra Perk Info': '额外特权信息',
    'Decide whether or not to show extra information on Perk buttons': '切换是否在特权按钮上显示额外的信息。',
    'Wait to Travel': '等待士兵战死',
    'Auto Abandon': '自动放弃士兵',
    'Decide whether or not to wait for soldiers to die on switching between maps and world. Toggling this on will automatically abandon your soldiers.': '切换在世界和地图之间切换时等待士兵战死还是自动放弃士兵。',
    'Less Map Buttons': '关闭额外地图按钮',
    'Extra Map Buttons': '开启额外地图按钮',
    'Toggle the button menu to the right of the map grid': '切换是否开启地图区域右侧的按钮菜单。',
    'Geneticistassist Settings': '遗传学家助手设置',
    'Customize your three available Geneticistassist targets, choose options for firing and sending, and decide whether or not Geneticistassist should start automatically when unlocked each run.': '为您的遗传学家设置三个目标，设置解雇和雇佣的选项，以及设置是否在每轮解锁后立刻启用遗传学家助手。',
    'Liquification Off': '关闭液化',
    'Liquification On': '开启液化',
    'Enable or disable Liquification. Nothing in game should be impossible to complete with Liquification enabled, but if you just want to slow things down then you have every right to do so.': '开启或关闭液化。没有东西是在液化下无法完成的，不过是否关闭您说了算。',
    'No Overcolors': '无超杀效果颜色',
    'Normal Overkill Colors': '普通超杀效果颜色',
    'Connected Overkill Colors': '连带超杀效果颜色',
    'Choose if you would like to see a different cell color for cells that you overkilled.': '选择是否用特别的颜色标记超杀格子。',
    'will not change any colors based on Overkill.': '在超杀时不改变格子颜色。',
    'is the default setting, and shows a special color for cells that were Overkilled.': '为默认选项，会改变被超杀格子的颜色。',
    'will show the Overkill cell colors for all cells while Overkilling.': '在超杀时改变所有格子的颜色。',
    'Not Forcing Queue': '不强制使用队列',
    'Forcing Queue': '强制使用队列',
    'Choose whether or not to force instant-craft buildings to use the queue. Currently applies  only to Warpstation. May be useful for double checking prices before building!': '切换是否强制让直接建造完成的建筑通过队列建造。目前只对跃迁核心生效。可能对于检查建筑成本会有帮助！',
    'Choose whether or not to force instant-craft buildings to use the queue. Currently applies  to Warpstation and AutoStorage. May be useful for double checking prices before building!': '切换是否强制让直接建造完成的建筑通过队列建造。目前对跃迁核心和自动存储生效。可能对于检查建筑成本会有帮助！',
    'Keep Fighting at Spires': '入塔：继续战斗',
    'Map at Spires': '入塔：进图',
    'Map at Top 2 Spires': '入塔：前2塔进图',
    'Map at Top Spire': '入塔：顶塔进图',
    'Choose whether you would like the game to pause combat by sending you to maps when you reach a Spire.': '切换是否在进入尖塔时停止战斗并切换到地图。',
    'will not interrupt you when reaching a Spire,': '不会切换到地图，',
    'will send you to maps on every Spire,': '在每次进入尖塔时都会切换到地图，',
    'will send you to maps at the highest and second highest level Spire reached, and': '在进入曾到达过的最高两个尖塔时切换到地图，而 ',
    'will switch to maps only on the single highest Spire reached.': '只在进入曾到达过的最高尖塔时切换到地图。',
    'No Map At Zone': '不自动进图',
    'Map At Zone': '自动进图',
    'Map At Z': '进图区域：',
    'Map At Zone (A': '自动进图(A',
    'Map At Zone (B': '自动进图(B',
    'When enabled, you will automatically abandon your Trimps in the World and enter the Map Chamber as soon as you hit your specified Zone number.': '切换是否在到达特定层数以后放弃士兵并立刻进入地图界面。',
    'Configure with hotkey Z': '可以使用快捷键：Z来快速设置',
    'Set Map At Zone': '自动进图设置，预设区域必须为10以上，1000以下，且重复区域和预设区域、格子不可冲突，否则下方会有红字报错',
    'No Timestamps': '关闭时间戳',
    'Local Timestamps': '本地时间戳',
    'Run Timestamps': '自上次传送时间戳',
    'Choose whether or not to display timestamps in the message log.': '切换是否在消息框内显示时间戳。',
    'will log the current time according to your computer,': '根据您电脑本地的时间来记录时间，',
    'will log how long it has been since your run started. Note that toggling this setting will not add or remove timestamps from previous messages, but will add or remove them to or from any new ones.': '根据上次使用传送门开始已用的时间来记录时间。此设置只对新的消息生效。',
    'Limited GA Firing': '遗传学家限制解雇',
    'Geneticistassist Fire': '遗传学家解雇',
    'No GA Firing': '遗传学家不解雇',
    'Toggle between': '在以下三者中切换：',
    'and': ' 及 ',
    'will prevent Geneticistassist from firing Farmers, Lumberjacks, or Miners.': '限制遗传学家解雇农民、伐木工和矿工。',
    'is the default value, and allows Geneticistassist to fire anything.': '为默认选项，遗传学家可以解雇任何人。',
    'prevents your Geneticistassist from being able to fire anything at all, including other Geneticists.': '不允许遗传学家解雇任何人，哪怕是它们自己。',
    'Large Buttons': '大按钮',
    'Small Buttons': '小按钮',
    'Tiny Buttons': '微小按钮',
    'Shrink the buttons in the menu where you purchase Buildings, Upgrades, Jobs, and Equipment.': '修改购买建筑、升级、工作和装备菜单的按钮大小。',
    'is default and fits 4 buttons per row.': '为默认选项，一行可以容纳4个按钮。',
    'shrinks the size to fit 5 per row, and': '缩小了一些，一行可以容纳5个按钮，而 ',
    'fits 6 per row. Small and Tiny may not be readable on small screens.': '一行可以容纳6个按钮。小按钮和微小按钮在较小的屏幕上可能无法看清楚。',
    'No Mastery Info': '无专精信息',
    'Alert Mastery': '专精提醒',
    'Show Essence': '显示精华数',
    'Hybrid Alerts': '混合专精提醒',
    'Choose what you would like to see on your Mastery Tab!': '切换您想要在专精选项卡上看到的信息！',
    'will keep the tab clean and static.': '不会显示任何额外信息。',
    'will show an alert on the tab as soon as a new Mastery becomes affordable.': '将在黑暗精华足够升级新的专精时用感叹号进行提醒。',
    'will always show your total amount of unspent essence on the tab.': '在选项卡上一直显示未使用的黑暗精华数量。',
    'Hybrid Essence': '混合专精提醒',
    'will show your total amount of unspent essence on the tab, but will switch to the alert icon once you have enough essence for a new Mastery.': '在选项卡上显示未使用的黑暗精华数量，但当黑暗精华足够升级新的专精时切换为感叹号提醒。',
    'Block Big Popups': '禁止弹出大窗口',
    'Allow Big Popups': '允许弹出大窗口',
    'This setting applies to big popups that occur after hitting certain milestones each portal. This setting will currently block: the Improbability popup': '切换是否在每次传送门到达特定区域后弹出大窗口。此设置目前禁止弹出以下窗口：乌有者提示',
    'This setting applies to big popups that occur after hitting certain milestones each portal. This setting will currently block: the Improbability popup, the popup at Corruption': '切换是否在每次传送门到达特定区域后弹出大窗口。此设置目前禁止弹出以下窗口：乌有者提示，腐化提示',
    'This setting applies to big popups that occur after hitting certain milestones each portal. This setting will currently block: the Improbability popup, the popup at Corruption, the popup at The Spire': '切换是否在每次传送门到达特定区域后弹出大窗口。此设置目前禁止弹出以下窗口：乌有者提示，腐化提示，尖塔提示',
    'This setting applies to big popups that occur after hitting certain milestones each portal. This setting will currently block: the Improbability popup, the popup at Corruption, the popup at The Spire, and the popup on reaching Magma.': '切换是否在每次传送门到达特定区域后弹出大窗口。此设置目前禁止弹出以下窗口：乌有者提示，腐化提示，尖塔提示，岩浆提示。',
    'Note that this setting only blocks large popups once your Highest Zone Reached is 20 Zones past the location of the popup': '注意：此设置只在最高通过区域高于提示所在区域20层以上时禁止弹出大窗口',
    'Default Generator': '默认发生器',
    'Gain Fuel': '得燃料',
    'Gain Mi': '得岩浆岩',
    'Hybrid': '混合型',
    'Choose what mode the Dimensional Generator should start each run on.': '切换每轮游戏维度发生器的初始运行模式。',
    'will continue with whatever setting you were using at the end of your last run.': '将继续使用您上次传送前游戏的设置。',
    'The Rest of The Settings': '剩余的选项',
    'are named by what mode will be set to active at the start of each run.': '决定每轮游戏初始运行在哪个模式下。',
    'Hold Ctrl while clicking to open the Generator State Configuration menu': '按下Ctrl键再点击可以打开维度发生器状态设置菜单',
    'No Snow': '不显示雪',
    'Show Snow': '显示雪',
    'Disable the snow effect in the world.': '切换世界中雪的效果。',
    'This will take effect on the next Zone after this setting is changed': '切换选项后在下个区域才生效',
    '. This setting is temporary, and will melt when the snow does.': '。此设置为临时设置，雪融后将消失。',
    'No Pumpkimps': '无脆皮南瓜怪',
    'Show Pumpkimps': '显示脆皮南瓜怪',
    'Bordered Pumpkimps': '脆皮南瓜怪边框',
    'Choose between': '在以下三者中切换：',
    '. This setting applies only to the visual effect of Pumpkimp Zones in the world, does not apply to maps, and has no impact on how many Pumpkimps or Pumpkimp Zones actually spawn. This setting is temporary and will rot away after the Pumpkimp season!': '此设置只对世界上的脆皮南瓜怪区域显示效果生效，对地图无效，且不会影响脆皮南瓜怪的数量或区域。此设置为临时设置，在脆皮南瓜怪活动期满后将消失！',
    'is the default, and displays Pumpkimp Zones as normal.': '为默认选项，正常显示脆皮南瓜怪区域。',
    'displays Pumpkimp cells by changing the border color instead of the background color.': '不会改变脆皮南瓜怪区域的颜色，取而代之的是改变相应边框的颜色。',
    'will not show any indicator at all that a world Zone is a Pumpkimp Zone. Pumpkimps will still spawn at the same rate.': '不显示脆皮南瓜怪区域。但脆皮南瓜怪仍然正常生成。',
    'No Gene Sending': '无遗传行军',
    'Using Gene Send': '使用遗传行军',
    'Enforce Gene Send': '强制遗传行军',
    'Wait For Gene Send': '等待遗传行军',
    'When': '当 ',
    'is enabled, as long as you have one Geneticist, AutoFight will automatically send soldiers to fight if they have been breeding for longer than your Geneticistassist setting.': '时，只要您拥有遗传学家，就会在士兵繁殖时间超过遗传学家设置时间的情况下开始自动战斗。',
    'is enabled, as long as you have one Geneticist, AutoFight will never send a group of Trimps to fight unless you are at max population or you have reached your set Geneticistassist timer.': '时，如果您拥有遗传学家，那么只在人口到达最大或者士兵繁殖时间超过遗传学家设置时间的情况下开始自动战斗。',
    'Finally, if you choose': '最后，如果选择 ',
    'and have at least one Geneticist, AutoFight will only send Trimps to fight after they have been breeding long enough to reach your set Geneticistassist timer. This guarantees that Anticipation and Geneticist levels build up for as long as your set timer, but may result in no soldiers being sent for some time while you sit at full population.': '并拥有遗传学家，那么只在士兵繁殖时间超过遗传学家设置时间的情况下开始自动战斗。此选项可以保证预期特权和遗传学家尽可能的到达最大效果，但可能导致人口最大时一段时间不自动战斗。',
    'Not Firing For Jobs': '关闭为工作而解雇',
    'Firing For Jobs': '开启为工作而解雇',
    'When enabled, hiring Trimps for jobs with scaling price increases (Trainer, Explorer, etc) while you have no workspaces will attempt to fire Farmers, Lumberjacks and Miners until you have enough room.': '切换是否在没有人手分配给价格累积的工作(训练师，探险家等)时解雇农民、伐木工或矿工腾出人手。',
    'Dynamic Giga Ctrl': '千兆核心动态Ctrl',
    'Always Giga Ctrl': '千兆核心常时Ctrl',
    'When enabled, all Gigastation purchases will act as if the Ctrl key was held, regardless of whether or not it actually was held. When disabled, you will have to hold Ctrl to tell Gigastations to automatically purchase Warpstations (See Gigastation tooltip for more info).': '当开启常时Ctrl时，所有千兆核心视为按下Ctrl再进行升级。当开启动态Ctrl时，您将需要自己按下Ctrl才能自动购买跃迁核心(详情可查看千兆核心提示框)。',
    'No Heirloom Animations': '关闭传家宝动画',
    'Heirloom Animations': '开启传家宝动画',
    'Enable/Disable animations on Heirlooms.': '切换传家宝动画的开关。',
    'Disable Hotkeys': '关闭快捷键',
    'Enable Hotkeys': '开启快捷键',
    'Enable or disable hotkeys.': '切换快捷键的开关。',
    'Don\'t Climb BW': '关闭仿生冲层',
    'Climb BW': '开启仿生冲层',
    'Decide whether or not you want your Trimps to automatically run the next Bionic Wonderland once they\'ve gotten all of the items from their current one. Repeat Maps must be toggled on for Climb BW to work.': '切换是否在获得当前仿生仙境地图全部升级后继续进入下一层仿生仙境地图。必须开启重复地图才能使此选项生效。',
    'No Offline Progress': '关闭离线进度',
    'Hybrid Offline': '混合离线',
    'Time Warp Only': '只使用时间跃迁',
    'Trustworthy Trimps Only': '只使用可信的脆皮',
    'will cause no extra resources to be earned and no time to be warped when you return to the game. The Portal and Zone timers will not advance while offline, and the game will be in the same state you left it when you come back. This can be useful for speedrun achievements or if you just really really don\'t trust your Trimps when you\'re gone.': '当返回游戏时不会获得任何额外资源，也不会触发时间跃迁。传送门和区域计时与离线前一致，游戏状态也保持不变。这在做最速系列成就时很有用，如果您真不信任脆皮的话也可以考虑使用。',
    'combines Time Warp and Trustworthy Trimps into the best offline experience that Science can buy. Time Warp caps at 24 hours, so using Hybrid Offline will grant Trustworthy Trimps at the beginning of your Time Warp for all offline time over 24 hours, and will also grant Trustworthy Trimps for any extra time should you choose to end Time Warp early. Note that the Portal Time and Time in Zone clocks will advance for all time granted by Trustworthy Trimps and by Time Warp.': '把时间跃迁和可信的脆皮结合起来使用。时间跃迁最多可以持续24小时，因此对于超过24小时的部分将启用可信的脆皮，如果中断了时间跃迁，剩余的时间将仍然触发可信的脆皮。传送门计时和区域计时将依照时间跃迁和可信的脆皮生效的时间增加相应数值。',
    'will grant up to 24 hours of your offline progress as Time Warp without granting any extra resources from Trustworthy Trimps at the beginning (for time over 24 hours), or at the end (for canceled Time Warp time). This can also be useful for timed runs or tracking stats, as the time added will be capped to however much time you spend in Time Warp.': '最多可以从时间跃迁中获得24小时的收益，并且不触发可信的脆皮。对于定时游戏或研究数据会很有用，因为游戏时间被时间跃迁限制了。',
    'will skip Time Warp when you come back and grant resources for all time offline from Trustworthy Trimps. For when you want to get back in the game as soon as possible!': '将跳过时间跃迁并从可信的脆皮获取全部离线收益。如果您想要尽快回到游戏中，可以选择这个。',
    'This setting can be changed from the Time Warp screen': '可以在时间跃迁画面中修改此设置',
    'or in Settings -> Other': '在设置的其它选项卡下也可以进行修改',
    'Archaeology Automator': '自动考古',
    'Customize the Archaeology Automator. Has no effect unless running the Archaeology Challenge.': '设置自动考古。只在考古学挑战中有效。',
    'Not Paused': '未暂停',
    'Paused': '已暂停',
    'Pause the game': '暂停游戏',
    'Pause your game. This will pause all resource gathering, offline progress, and timers. (Hotkey: Space': '暂停游戏。所有资源收益、离线进度和计时器都将暂停。(快捷键：空格',
    'Disable Pausing': '禁用暂停键',
    'Enable Pausing': '启用暂停键',
    'You can pause the game by clicking the run timer in the bottom right of the screen. This setting allows you to remove that ability!': '您可以点击右下角的计时器来暂停游戏。此设置决定是否关闭此功能！',
    'Delete Save': '删除存档',
    'Delete your save and start fresh. Your Trimps will not be happy.': '删除存档重新开始。您的脆皮可能不会对这个决定高兴的。',
    //游戏设置相关结束
    //离线相关
    'Starting...': '开始……',
    'Cell': '格子',
    'Wanna run a map?': '想运行地图吗？',
    'World Level Map': '世界等级的地图',
    'Back to World': '返回世界',
    'What is This?!': '这是什么？！',
    'Stop Here': '停止补偿时间',
    'Your Trimps really missed you': '脆皮们真的想您',
    'Your Trimps didn\'t do dishes while you were gone': '您不在的时候脆皮们连碗都不洗',
    'A Scientist has been locked outside all night': '一名科学家一整晚都被锁在了外面',
    'There\'s a Snimp in the pantry': '储藏室冒出来一只脆皮鹬',
    'Your Trimps threw a party while you were out': '您不在的时候脆皮们开了个派对',
    'Your Trimps raided your fridge while you were gone': '您不在的时候脆皮们把冰箱搬空了',
    'Some Trimps toilet papered your ship': '某几个脆皮把您的飞船弄得到处都是厕纸',
    'Your Trimps were a few minutes away from burning the place down': '脆皮们差点就把这地方烧掉了',
    'The Turkimps escaped again': '脆皮火鸡又逃跑了',
    'Your Trimps ran the AC all night': '脆皮们开了一晚上的空调',
    'Wow, such speed': '哇哦，这么快',
    'Your Trimps dinged your ship while out on a joyride': '脆皮们兜风时撞到了您的飞船',
    'One of your Trimps got a tattoo while you were gone': '您不在的时候一个脆皮纹了个身',
    'Fluffy reminds you that he\'s not a babysitter': '绒绒友情提示：它不是保姆',
    'Scruffy reminds you that he\'s not a babysitter': '污污友情提示：它不是保姆',
    'Fluffy wrote a novel while you were gone': '您不在的时候，绒绒写了本小说',
    'Scruffy wrote a novel while you were gone': '您不在的时候，污污写了本小说',
    'Fluffy really missed you': '绒绒真的想您',
    'Scruffy really missed you': '污污真的想您',
    'Fluffy greets you excitedly': '绒绒很兴奋地欢迎了您',
    'Scruffy greets you excitedly': '污污很兴奋地欢迎了您',
    'Fluffy forgives you for leaving': '绒绒原谅了您的离去',
    'Scruffy forgives you for leaving': '污污原谅了您的离去',
    'No maps available': '无可用的地图',
    'Gain 1 map for each 8 hours away': '每离线8个小时可以获得一张地图',
    'Oof, you don\'t have enough fragments to run a map.': '哎呀，您的碎片不够了，无法制造地图。',
    'You can run': '等待时，您可以运行',
    'while you wait!': '！',
    'Use it wisely...': '请善加利用……',
    'Use them wisely...': '请善加利用……',
    'While you were out, your Trimps didn\'t get much done - unless you count destruction of property. Luckily you have a Time Portal! While you can\'t go forward in time, you can go back to keep the Trimps in line and I\'ll wait here for you.': '您不在的时候，脆皮们基本没什么进展——除非您把毁坏也算上。还好您有一个时空传送门！尽管您无法前往未来，您还是可以回到过去管管脆皮们，我会在这里等着您。',
    'While you\'re in the past, everything will progress like normal, just much faster. The temporal displacement effects give you blurry vision and a headache (making fine control impossible), but you can force your Trimps to stop and run 1 map whenever you want for each 8 hours spent offline! Maps created this way will use your first preset settings at your selected level with Repeat for Items and Exit to World.': '当您回到过去时，一切都比正常来得更快。时移效应使您的视线模糊不清，且使您头疼欲裂(因此无法精密控制)，但每离线8个小时，您就可以强制脆皮们停下来运行1张地图！以此方法制造的地图等级与您选择的等级相同，将使用您的地图预设1，且启用重复到无特殊设置和退回世界设置。',
    'If your Trimps look stuck, you can always': '如果脆皮们卡住了，您可以随时 ',
    'to regain full control of your Trimps, and you\'ll still receieve resources from Trustworthy Trimps for any unused Time Warp time!': '来恢复脆皮的控制，而且您仍然可以从可信的脆皮那边获得时间跃迁剩余时间所对应的资源！',
    'You can Time Warp for 100% of the time you spent offline, up to a maximum of 24 hours.': '您可以在离线的全部时间内进行时间跃迁，但上限为24小时。',
    'You can change your Offline Progress setting to suit your needs!': '您可以根据需要，修改离线进度设置！',
    'Creek (': '海湾(',
    'Coast (': '海岸(',
    'Swamp (': '沼泽(',
    'Forest (': '森林(',
    'Mountain (': '山脉(',
    'Beach (': '海滩(',
    'Hill (': '山丘(',
    'Butte (': '孤峰(',
    'Ridge (': '山脊(',
    'Mesa (': '方山(',
    'Valley (': '山谷(',
    'Peak (': '顶峰(',
    'Canyon (': '峡谷(',
    'Plateau (': '高原(',
    'Crag (': '峭壁(',
    'Crater (': '陨坑(',
    'Oaks (': '橡林(',
    'Volcano (': '火山(',
    'Glacier (': '冰川(',
    'Brook (': '小溪(',
    'Cave (': '洞穴(',
    'Sea (': '大海(',
    'Ocean (': '大洋(',
    'Lake (': '湖泊(',
    'Jungle (': '丛林(',
    'Island (': '岛屿(',
    'Ruins (': '遗迹(',
    'Temple (': '神殿(',
    'Bog (': '泥沼(',
    'Grove (': '果林(',
    'Thicket (': '树丛(',
    'Woods (': '树林(',
    'Oasis (': '绿地(',
    'Mineshaft (': '深井(',
    'Tunnel (': '隧道(',
    'Depths (': '深渊(',
    'Cavern (': '山洞(',
    'Gardens (': '花园(',
    'Nightmare (': '梦魇(',
    'Void (': '虚空(',
    'Descent (': '落穴(',
    'Pit (': '深坑(',
    'The Black Bog (': '黑色泥沼(',
    'The Block (': '障碍区(',
    'The Wall (': '高墙(',
    'The Prison (': '监狱(',
    'Imploding Star (': '爆炸之星(',
    'Prismatic Palace (': '棱镜宫殿(',
    'Melting Point (': '熔点(',
    'Trimple Of Doom (': '末日神殿(',
    'Tricky Paradise (': '整蛊天堂(',
    'Dimension of Anger (': '愤怒维度(',
    'Dimension of Rage (': '暴怒维度(',
    'Looks like you still haven\'t cleared this map. If you want to leave and make an easier one, I won\'t count it against you!': '看起来您还没有通过这张地图。如果您想要离开并运行一张更容易的地图，',
    'Sitting in the Map Chamber (lame': '在地图界面无所事事(弱鸡',
    'Starting Offline Progress... (Updates every 2000 processed loops': '离线进度启动中……(每处理2000个循环就刷新一次',
    'Progress has slowed to a crawl!': '进度慢如！',
    '': '',
    '': '',
    '': '',
    '': '',
    //离线相关结束
    //骨头相关
    'Boosts': '提升',
    'Instantly earn the next 12 or 36 hours worth of resources! If you don\'t have enough storage, storage will be purchased (and the cost deducted) automatically.': '立刻获得价值12个小时或36个小时的资源！如果资源上限不足，则会自动购买相应存储建筑(并扣除费用)。',
    'Barns Auto-purchased': '个自动购买的谷仓',
    'Sheds Auto-purchased': '个自动购买的窝棚',
    'Forges Auto-purchased': '个自动购买的锻造厂',
    'Confirm Purchase': '确认购买',
    'You are about to purchase 12 hours of instant production for 20 bones. Is this what you wanted to do?': '您将花费20骨头购买立刻获得12小时的产量。您确定要购买吗？',
    'You are about to purchase 36 hours of instant production for 40 bones. Is this what you wanted to do?': '您将花费40骨头购买立刻获得36小时的产量。您确定要购买吗？',
    'Exotic Imp-orts': '奇异外皮',
    'Exotic Imp-orts will be unlocked permanently once purchased, and will stick around through portals. Each has a 3% chance to spawn per cell and better loot than normal enemies. Collect them all!': '奇异外皮在购买后永久解锁，传送后也仍然存在。对于每种奇异外皮来说，每个格子都分别有3%的概率生成，比起普通敌人来说，战利品更好。尽量全部收集它们！',
    'Spawns in World': '在世界中出现',
    'Spawns in Maps': '在地图中出现',
    'First, select an Imp (50 bones': '首先，选择一个奇异外皮(50骨头',
    'You are about to purchase a new Exotic Import for 50 bones. This new Bad Guy will begin spawning in your next Zone or Map at about an average of 3 spawns per 100 squares. Is this what you wanted to do?': '您将花费50骨头购买新的奇异外皮。它将在下个区域或地图中开始出现，平均100个格子中有3个格子出现。您确定要购买吗？',
    'Other Goodies': '其它的好东西',
    'You are about to purchase one Instant Portal for 100 bones. Your new helium will appear in the View Perks menu at the bottom of the screen. Is this what you wanted to do?': '您将花费100骨头购买骨头传送门。新获得的氦将立刻可用于升级特权。您确定要购买吗？',
    'Automatically gain Helium equal to the amount you earned on your best run.': '自动获得一定数量的氦，该数量与之前单次传送获得最多的数值相等。',
    'Automatically gain Radon equal to the amount you earned on your best run.': '自动获得一定数量的氡，该数量与之前单次传送获得最多的数值相等。',
    'Automatically gain Helium and Nature Tokens equal to the amount you earned on your best run.': '自动获得一定数量的氦和自然符记，该数量分别与之前单次传送获得最多的数值相等。',
    'Automatically gain Helium and Fluffy Exp equal to the amount you earned on your best run.': '自动获得一定数量的氦和绒绒经验，该数量分别与之前单次传送获得最多的数值相等。',
    'Automatically gain Helium, Nature Tokens and Fluffy Exp equal to the amount you earned on your best run.': '自动获得一定数量的氦，自然符记和绒绒经验，该数量分别与之前单次传送获得最多的数值相等。',
    'Automatically gain Radon and Scruffy Exp equal to the amount you earned on your best run.': '自动获得一定数量的氡和污污经验，该数量分别与之前单次传送获得最多的数值相等。',
    'Fluffy is at Level 10 and will not gain Exp!': '绒绒已经达到了10级，无法再获得经验了！',
    'Scruffy is at Level 10 and will not gain Exp!': '污污已经达到了10级，无法再获得经验了！',
    'Fluffy Exp does not include bonuses from Dailies': '绒绒经验不包含日常挑战的加成',
    'Scruffy Exp does not include bonuses from Dailies': '污污经验不包含日常挑战的加成',
    'Single Run Bonuses': '传送后失效的升级',
    'These all last until your next soft reset. Use them wisely!': '以下升级持续到软重置之前。请善加利用！',
    'These all last until your next Portal. Use them wisely!': '以下升级持续到使用传送门之前。请善加利用！',
    'Golden Maps (20 bones': '金色地图(20骨头',
    'You are about to purchase Golden Maps for 20 bones. All of your current and future maps will gain +100% loot added to their normal loot roll': '您将花费20骨头购买金色地图。购买后，所有当前和之后的地图中获取资源加倍，',
    'until your next Portal': '直到您使用传送门为止',
    '. Is this what you wanted to do?': '。您确定要购买吗？',
    'Quick Trimps (20 bones': '快枪手脆皮(20骨头',
    'You are about to purchase Quick Trimps for 20 bones. This will cause your Trimps to breed twice as fast': '您将花费20骨头购买快枪手脆皮。购买后，脆皮繁殖速度将加倍，',
    'Sharp Trimps (25 bones': '锋锐脆皮(25骨头',
    'You are about to purchase Sharp Trimps for 25 bones. This will cause your Trimps to deal 50% more damage': '您将花费25骨头购买锋锐脆皮。购买后，脆皮造成的伤害将增加50%，',
    'Heliumy (100 bones': '氦奇(100骨头',
    'Radonculous (100 bones': '氡丰(100骨头',
    'You are about to purchase Heliumy for 100 bones. This will cause you to earn 25% more Helium from all sources': '您将花费100骨头购买氦奇。购买后，所有获取的氦将增加25%，',
    'You are about to purchase Radonculous for 100 bones. This will cause you to earn 25% more Radon from all sources': '您将花费100骨头购买氡丰。购买后，所有获取的氡将增加25%，',
    'You are about to purchase one Heirloom for 30 bones. This will be created at a random rarity, and will be just like completing a Void Map at your highest ever Zone reached. Are you sure?': '您将花费30骨头购买一个传家宝。购买后产生一个随机稀有度的传家宝，稀有度根据您的最高通过区域决定。您确定要购买吗？',
    //骨头相关结束
    //传家宝相关
    'Heirlooms - Gifts to past you from future you': '传家宝-来自于未来，生效于过去',
    'You have': '您有',
    'Nullifium': '虚空物质',
    ' and': '和 ',
    'Spirestones': '尖塔石头',
    'Help': '帮助',
    'You can click a stat to upgrade or replace it.': '您可以点击某条属性来升级或是替换它。',
    'The currency to upgrade and replace stats,': '用于升级或替换的货币，即',
    'Nullifium, or Nu,': '虚空物质',
    'can only be gathered by recycling an Heirloom.': '只能通过回收传家宝获得。',
    'You can also click on the Heirloom\'s name on this menu to rename it, or click on the icon to change it!': '您还可以点击传家宝名称来重命名，或者点击图标来更改图标！',
    'You can upgrade any Staff and Shield to HALF the value of your total earned Nu. Nu is not spent, but dictates how powerful your Heirlooms can be!': '您可以使用总虚空物质的一半来升级权杖和盾牌。虚空物质不会在此过程中被消耗，它直接决定了传家宝的强度！',
    'Any Heirlooms in the "Temporary" section will be recycled for Nullifium on portal.': '“临时栏”中的传家宝在使用传送门时将被回收为虚空物质。',
    'Unequip': '取消装备',
    'Equip': '装备',
    'Stop Carrying': '不再携带',
    'Carry': '携带',
    'Recycle': '回收',
    'Replace': '替换',
    'Upgrade': '升级',
    'Common Core': '普通核心',
    'Common Shield': '普通盾牌',
    'Common Staff': '普通权杖',
    'Uncommon Core': '罕见核心',
    'Uncommon Shield': '罕见盾牌',
    'Uncommon Staff': '罕见权杖',
    'Rare Core': '稀有核心',
    'Rare Shield': '稀有盾牌',
    'Rare Staff': '稀有权杖',
    'Epic Core': '史诗核心',
    'Epic Shield': '史诗盾牌',
    'Epic Staff': '史诗权杖',
    'Legendary Core': '传奇核心',
    'Legendary Shield': '传奇盾牌',
    'Legendary Staff': '传奇权杖',
    'Staff': '权杖',
    'Ethereal Core': '超凡核心',
    'Ethereal Shield': '超凡盾牌',
    'Ethereal Staff': '超凡权杖',
    'Magmatic Shield': '岩浆盾牌',
    'Magmatic Staff': '岩浆权杖',
    'Plagued Shield': '天灾盾牌',
    'Plagued Staff': '天灾权杖',
    'Radiating Shield': '辐射盾牌',
    'Radiating Staff': '辐射权杖',
    'Empty': '空',
    'ADDS this amount on to your total Prismatic Shield. This modifier can only function in the Radon Universe.': '将此数值加算到棱镜护盾数值中。只在宇宙2内有效。',
    'Charging': '蓄能',
    //传家宝相关结束
    //挑战相关
    'Helium goes in, victory comes out': '有氦者，事竟成',
    'Radon goes in, victory comes out': '得氡者，得天下',
    'Well, you did it. You followed your instincts through this strange world, made your way through the Dimension of Anger, and obtained this portal. But why? Maybe there will be answers through this portal... Your scientists tell you they can overclock it to bring more memories and items back, but they\'ll need helium to cool it.': '很好，您做到了。您凭着直觉在这个奇怪的世界里一路披荆斩棘，通过了愤怒维度，最后获得了这个传送门。但这么做的意义是？或许通过这个传送门以后，您就能找到答案了……科学家们告诉您，它们可以将传送门进行超频，带回更多的记忆和物品，但这么做还需要用到氦来冷却。',
    'The Radon Universe is harsh. Your Portal still retains some information about the Scientist upgrades, but it\'ll need an upgrade of its own to be able to utilize them in this new Universe.': '氡宇宙的环境真的是太严苛了。您的传送门还保留有一些关于科学家升级的信息，但是看来需要在这个宇宙中升级后才能利用这些信息。',
    'Be ready to manually Gather some Food!': '得准备好，要手动收集一些食物了！',
    'Don\'t forget to bring a challenge': '传送前，不要忘了选择挑战',
    'Respec': '洗点',
    'Click a challenge below to learn more about and/or run it!': '点击下方的挑战来获取详细信息及/或运行它！',
    'None': '无',
    'Your highest Zone reached for this Challenge': '您的最高通过区域于此挑战',
    'bonus.': '加成。',
    'bonus!': '加成！',
    'You will not earn a new perk.': '您不会因此获得新的特权。',
    'You will also earn a new Perk!': '您还可以获得一个新的特权！',
    'You have already completed this challenge!': '您已经完成了此挑战！',
    'Are you sure you want to abandon this challenge?': '您确定要放弃此挑战吗？',
    'Abandoning this challenge will cause the portal to become unstable and start you from the beginning of this run. (You\'ll keep your permanent rewards like helium and perks': '放弃挑战后，传送门将变得不稳定，使您从上次传送后的状态重新开始(保留永久的加成，例如氦和特权',
    'Click Confirm to abandon the challenge and restart at Z1, Cancel to go back, or Restart to go back to Z1 with the same challenge.': '点击确认后将放弃挑战并从区域1重新开始游戏，点击取消则返回，点击重新开始挑战则从区域1重新开始此挑战。',
    'Restart Challenge': '重新开始挑战',
    'This challenge issues rewards differently than most other Challenge': '此挑战的加成不同于其他大多数挑战',
    's.': '。',
    'You don\'t have an active challenge.': '您目前未激活任何挑战。',
    'If you can\'t handle this Universe, you can always return to Universe 1. However, returning before finding the Portal Device will invalidate all Scruffy Exp and Radon earned.': '如果您在这个宇宙中感觉力不从心，您可以随时返回宇宙1。但是在找到传送门前就这么做的话，上次传送后获得的污污经验和氡将全部丢失。',
    'Return to Universe': '返回宇宙',
    'Helium Left Over': '剩余的氦',
    'Radon Left Over': '剩余的氡',
    'These are all of your perks! You can reset them once per run.': '以下是您所有的特权。每次传送后您可以洗点一次。',
    'Are you sure you want to return to Universe 1? You will lose any Radon and Scruffy Exp earned so far.': '您确定要返回宇宙1吗？目前获得的氡和污污经验将全部丢失。',
    'Abandon Scruffy': '放弃污污',
    'I\'m sure he\'ll be fine': '它会没事的',
    'Select New Challenge': '选择新的挑战',
    'Level: ': '等级：',
    'Price': '价格',
    'Spent': '已花',
    'Equality Scaling': '平等缩放',
    'Scale Equality Scaling': '平等缩放设置',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',





    'You will unlock this challenge once you reach Zone': '欲解锁此挑战，您需要到达区域',
    'You will unlock this challenge once you  reach Zone': '欲解锁此挑战，您需要到达区域',
	'Daily': '日常',
    'Discipline': '纪律',
    'Tweak the portal to bring you back to a universe where Trimps are less disciplined, in order to teach you how to be a better Trimp trainer. Your Trimps\' minimum damage will be drastically lower, but their high end damage will be considerably higher. Completing The Dimension Of Anger will cause Trimp damage to return to normal.': '调节传送门，将您带到一个脆皮不那么有纪律的宇宙。在那里可以学习如何成为一个更好的脆皮训练师。您的脆皮最低伤害将大大降低，但最高伤害也会大大增加。通过愤怒维度地图后，脆皮的伤害将恢复正常。',
    'Tweak the portal to bring you back to a universe where Trimps are less disciplined, in order to teach you how to be a better Trimp trainer. Your Trimps\' minimum damage will be drastically lower, but their high end damage will be considerably higher.': '调节传送门，将您带到一个脆皮不那么有纪律的宇宙。在那里可以学习如何成为一个更好的脆皮训练师。您的脆皮最低伤害将大大降低，但最高伤害也会大大增加。',
    'Discipline Challenge!': '纪律挑战！',
    'You have unlocked a new perk, and your Trimps have regained their Discipline.': '您解锁了一个新的特权，并且您的脆皮们又重新变得有纪律了。',
    'You have the Discipline challenge active. Tweak the portal to bring you back to a universe where Trimps are less disciplined, in order to teach you how to be a better Trimp trainer. Your Trimps\' minimum damage will be drastically lower, but their high end damage will be considerably higher. Completing The Dimension Of Anger will cause Trimp damage to return to normal.': '您目前正在进行纪律挑战。调节传送门，将您带到一个脆皮不那么有纪律的宇宙。在那里可以学习如何成为一个更好的脆皮训练师。您的脆皮最低伤害将大大降低，但最高伤害也会大大增加。通过愤怒维度地图后，脆皮的伤害将恢复正常。',
    'You have the Discipline challenge active. "Tweak the portal to bring you back to a universe where Trimps are less disciplined, in order to teach you how to be a better Trimp trainer. Your Trimps\' minimum damage will be drastically lower, but their high end damage will be considerably higher."': '您目前正在进行纪律挑战。调节传送门，将您带到一个脆皮不那么有纪律的宇宙。在那里可以学习如何成为一个更好的脆皮训练师。您的脆皮最低伤害将大大降低，但最高伤害也会大大增加。通过愤怒维度地图后，脆皮的伤害将恢复正常。',
    'You will unlock this challenge once you have 30 total Helium': '欲解锁此挑战，您需要一共获得30氦',
    'Tweak the portal to bring you to an alternate reality, where the concept of Miners does not exist, to force yourself to become frugal with equipment crafting strategies. If you complete The Dimension Of Anger without disabling the challenge, miners will re-unlock.': '调节传送门，将您带到一个不存在矿工这个概念的异世界中。在那里可以学习在锻造装备时如何更勤俭节约。如果您在没有放弃挑战的情况下通过了愤怒维度地图，那么矿工将重新解锁。',
    'Tweak the portal to bring you to alternate reality, where the concept of Miners does not exist, to force yourself to become frugal with equipment crafting strategies.': '调节传送门，将您带到一个不存在矿工这个概念的异世界中。在那里可以学习在锻造装备时如何更勤俭节约。',
    'Metal Challenge!': '金属挑战！',
    'You have unlocked a new perk, and Miners have returned to your game.': '您解锁了一个新的特权，并且矿工们又回到了游戏中。',
    'You have the Metal challenge active. Tweak the portal to bring you to an alternate reality, where the concept of Miners does not exist, to force yourself to become frugal with equipment crafting strategies. If you complete The Dimension Of Anger without disabling the challenge, miners will re-unlock.': '您目前正在进行金属挑战。调节传送门，将您带到一个不存在矿工这个概念的异世界中。在那里可以学习在锻造装备时如何更勤俭节约。如果您在没有放弃挑战的情况下通过了愤怒维度地图，那么矿工将重新解锁。',
    'You have the Metal challenge active. "Tweak the portal to bring you to alternate reality, where the concept of Miners does not exist, to force yourself to become frugal with equipment crafting strategies."': '您目前正在进行金属挑战。调节传送门，将您带到一个不存在矿工这个概念的异世界中。在那里可以学习在锻造装备时如何更勤俭节约。如果您在没有放弃挑战的情况下通过了愤怒维度地图，那么矿工将重新解锁。',
    'Size': '尺寸',
    'Tweak the portal to bring you to an alternate reality, where Trimps are bigger and stronger, to force yourself to figure out a way to build larger housing. Your Trimps will gather 50% more resources, but your housing will fit 50% fewer Trimps. If you complete The Dimension of Anger without disabling the challenge, your stats will return to normal.': '调节传送门，将您带到一个脆皮更大更强壮的异世界中。在那里可以学习如何建造更大的房屋。脆皮可以多获取50%的资源，但住房少容纳50%的脆皮。如果您在没有放弃挑战的情况下通过了愤怒维度地图，那么一切将恢复正常。',
    'Tweak the portal to bring you to an alternate reality, where Trimps are bigger and stronger, to force yourself to figure out a way to build larger housing. Your Trimps will gather 50% more resources, but your housing will fit 50% fewer Trimps.': '调节传送门，将您带到一个脆皮更大更强壮的异世界中。在那里可以学习如何建造更大的房屋。脆皮可以多获取50%的资源，但住房少容纳50%的脆皮。',
    'Size Challenge!': '尺寸挑战！',
    'You have unlocked a new perk, and your Trimps have been reduced down to their normal size.': '您解锁了一个新的特权，并且脆皮又回到了正常尺寸。',
    'You have the Size challenge active. Tweak the portal to bring you to an alternate reality, where Trimps are bigger and stronger, to force yourself to figure out a way to build larger housing. Your Trimps will gather 50% more resources, but your housing will fit 50% fewer Trimps. If you complete The Dimension of Anger without disabling the challenge, your stats will return to normal.': '您目前正在进行尺寸挑战。调节传送门，将您带到一个脆皮更大更强壮的异世界中。在那里可以学习如何建造更大的房屋。脆皮可以多获取50%的资源，但住房少容纳50%的脆皮。如果您在没有放弃挑战的情况下通过了愤怒维度地图，那么一切将恢复正常。',
    'You have the Size challenge active. "Tweak the portal to bring you to an alternate reality, where Trimps are bigger and stronger, to force yourself to figure out a way to build larger housing. Your Trimps will gather 50% more resources, but your housing will fit 50% fewer Trimps."': '您目前正在进行尺寸挑战。调节传送门，将您带到一个脆皮更大更强壮的异世界中。在那里可以学习如何建造更大的房屋。脆皮可以多获取50%的资源，但住房少容纳50%的脆皮。',
    'Balance': '平衡',
    'Your scientists have discovered a chaotic dimension filled with helium. All enemies have 100% more health, enemies in world deal 17% more damage, and enemies in maps deal 135% more damage. Starting at Zone 6, every time an enemy in the world is slain you will gain a stack of \'Unbalance\'. Every time an enemy in a map is slain, you will lose a stack of Unbalance. Each stack of Unbalance reduces your health by 1%, but increases your Trimps\' gathering speed by 1%. Unbalance can only stack to 250. Completing': '您的科学家发现了一个充满氦的混沌维度。所有敌人生命值增加100%，世界上的敌人多造成17%伤害，地图中的敌人增加135%伤害。从区域6开始，每在世界上杀死一名敌人，您获得一层“不平衡”。而每在地图中杀死一名敌人，您失去一层“不平衡”。每层不平衡减少1%生命值，但增加脆皮1%资源获取速度。不平衡最高叠加到250层。在此挑战激活的前提下通过 ',
	'Zone': '区域',
    'with this challenge active will grant an additional 100% of all helium earned up to that point. This challenge is repeatable!': '后，可额外获得氦，数值等于本次挑战完成前氦获取量的100%。此挑战可重复完成！',
    'Your scientists have discovered a chaotic dimension filled with unharvestable but pretty helium. All enemies have 100% more health, enemies in world deal 17% more damage, and enemies in maps deal 135% more damage. Starting at Zone 6, every time an enemy in the world is slain you will gain a stack of \'Unbalance\'. Every time an enemy in a map is slain, you will lose a stack of Unbalance. Each stack of Unbalance reduces your health by 1%, but increases your Trimps\' gathering speed by 1%. Unbalance can only stack to 250.': '您的科学家发现了一个充满了氦的混沌维度，这个维度中的氦虽然量很大，但无法收集。所有敌人生命值增加100%，世界上的敌人多造成17%伤害，地图中的敌人增加135%伤害。从区域6开始，每在世界上杀死一名敌人，您获得一层“不平衡”。而每在地图中杀死一名敌人，您失去一层“不平衡”。每层不平衡减少1%生命值，但增加脆皮1%资源获取速度。不平衡最高叠加到250层。',
    'You have the Balance challenge active. Your scientists have discovered a chaotic dimension filled with helium. All enemies have 100% more health, enemies in world deal 17% more damage, and enemies in maps deal 135% more damage. Starting at Zone 6, every time an enemy in the world is slain you will gain a stack of \'Unbalance\'. Every time an enemy in a map is slain, you will lose a stack of Unbalance. Each stack of Unbalance reduces your health by 1%, but increases your Trimps\' gathering speed by 1%. Unbalance can only stack to 250. Completing': '您目前正在进行平衡挑战。您的科学家发现了一个充满氦的混沌维度。所有敌人生命值增加100%，世界上的敌人多造成17%伤害，地图中的敌人增加135%伤害。从区域6开始，每在世界上杀死一名敌人，您获得一层“不平衡”。而每在地图中杀死一名敌人，您失去一层“不平衡”。每层不平衡减少1%生命值，但增加脆皮1%资源获取速度。不平衡最高叠加到250层。在此挑战激活的前提下通过 ',
    'You have the Balance challenge active. "Your scientists have discovered a chaotic dimension filled with unharvestable but pretty helium. All enemies have 100% more health, enemies in world deal 17% more damage, and enemies in maps deal 135% more damage. Starting at Zone 6, every time an enemy in the world is slain you will gain a stack of \'Unbalance\'. Every time an enemy in a map is slain, you will lose a stack of Unbalance. Each stack of Unbalance reduces your health by 1%, but increases your Trimps\' gathering speed by 1%. Unbalance can only stack to 250."': '您目前正在进行平衡挑战。您的科学家发现了一个充满了氦的混沌维度，这个维度中的氦虽然量很大，但无法收集。所有敌人生命值增加100%，世界上的敌人多造成17%伤害，地图中的敌人增加135%伤害。从区域6开始，每在世界上杀死一名敌人，您获得一层“不平衡”。而每在地图中杀死一名敌人，您失去一层“不平衡”。每层不平衡减少1%生命值，但增加脆皮1%资源获取速度。不平衡最高叠加到250层。',
    'Scientist': '科学家',
    'Scientist II': '科学家 II',
    'Scientist III': '科学家 III',
    'Scientist IV': '科学家 IV',
    'Scientist V': '科学家 V',
    'Attempt modifying the portal to retain positive qualities from previous dimensions. Until you perfect the technique, you will start with': '尝试调节传送门来保持之前维度的正面效果。直到您对这项技艺足够精进之前，您将从 ',
    'Attempt modifying the portal to harvest resources when travelling. Until you perfect the technique, you will start with': '尝试调节传送门来在旅途中获取资源。直到您对这项技艺足够精进之前，您将从 ',
    'science but will be unable to research or hire scientists and': '科学点开始，但无法研究或者雇佣科学家。并且',
    'all enemy damage will be 10X higher': '所有敌人的攻击力变为10倍',
    '. Choose your upgrades wisely! Clearing': '。仔细选择您的研究！通过 ',
    'science but will be unable to research or hire scientists. Choose your upgrades wisely! Clearing': '科学点开始，但无法研究或者雇佣科学家。仔细选择您的研究！在此挑战激活的前提下通过 ',
	'\'The Block\' (': '障碍区地图(',
    'with this challenge active will cause you to start with 5000 Science, 100 Food, 100 Wood, 10 Traps, and 1 Foreman each time you use your portal.': '将使您每次使用传送门后，以5000科学点，100食物，100木头，10陷阱，以及1工头的状态开始游戏。',
    'with this challenge active will cause you to start with 5 Barns, 5 Sheds, 5 Forges, and T2 Equipment unlocked each time you use your portal.': '将使您每次使用传送门后，以5谷仓、5窝棚、5锻造厂，且解锁2级装备的状态开始游戏。',
    'with this challenge active will cause you to start with full Trimps and 200% player efficiency each time you use your portal.': '将使您每次使用传送门后，以满人口脆皮，200%玩家效率的状态开始游戏。',
    'with this challenge active will cause you to earn two levels of each prestige upgrade per map, unlock AutoPrestiges, and your Warpstations will build instantly, skipping the queue. This bonus will apply each time you use your portal.': '将使您每次使用传送门后，每张地图可以获得两级装备重铸升级，并解锁自动重铸，而且跃迁核心可以跳过队列直接建造完成。',
    'with this challenge active will cause you to permanently increase all Helium found by 0.5% to the power of your current Zone number. You\'ll also start with 1000% player efficiency and 50 Barns, Sheds, and Forges each time you use your portal.': '将使您的氦获取量每层区域永久比上一层区域多0.5%。且每次使用传送门后，以1000%玩家效率，50谷仓、50窝棚、50锻造厂的状态开始游戏。',
    'Scientist Challenge!': '科学家挑战！',
    'From now on, you\'ll start with 5000 Science, 100 Food, 100 Wood, 10 Traps, and 1 Foreman every time you portal. You\'ve unlocked Scientists, and': '从现在起，您每次使用传送门后，以5000科学点，100食物，100木头，10陷阱，以及1工头的状态开始游戏。您也重新解锁了科学家，并且',
    'From now on, you\'ll start with 5 Barns, 5 Sheds, 5 Forges, and T2 Equipment unlocked every time you portal. You\'ve unlocked Scientists, and': '从现在起，您每次使用传送门后，以5谷仓、5窝棚、5锻造厂，且解锁2级装备的状态开始游戏。您也重新解锁了科学家，并且',
    'From now on, you\'ll start with full Trimps and 200% player efficiency every time you portal. You\'ve unlocked Scientists, and': '从现在起，您每次使用传送门后，以满人口脆皮，200%玩家效率的状态开始游戏。您也重新解锁了科学家，并且',
    'From now on, you\'ll earn two levels of each prestige upgrade per map, unlock AutoPrestiges, and your Warpstations will build instantly, skipping the queue. This bonus will apply every time you portal. You\'ve unlocked Scientists, and': '从现在起，您每次使用传送门后，每张地图可以获得两级装备重铸升级，并解锁自动重铸，而且跃迁核心可以跳过队列直接建造完成。您也重新解锁了科学家，并且',
    'From now on, you\'ll permanently increase all Helium found by 0.5% to the power of your current Zone number. You\'ll also start with 1000% player efficiency and 50 Barns, Sheds, and Forges every time you portal. You\'ve unlocked Scientists, and': '从现在起，您的氦获取量每层区域永久比上一层区域多0.5%。且每次使用传送门后，以1000%玩家效率，50谷仓、50窝棚、50锻造厂的状态开始游戏。您也重新解锁了科学家，并且',
    'Don\'t forget that you can click Research on your Science again!': '不要忘了您又可以进行科学研究了！',
    'You have the Scientist challenge active. Attempt modifying the portal to retain positive qualities from previous dimensions. Until you perfect the technique, you will start with': '您目前正在进行科学家挑战。尝试调节传送门来保持之前维度的正面效果。直到您对这项技艺足够精进之前，您将从 ',
    'You have the Scientist challenge active. Attempt modifying the portal to harvest resources when travelling. Until you perfect the technique, you will start with': '您目前正在进行科学家挑战。尝试调节传送门来在旅途中获取资源。直到您对这项技艺足够精进之前，您将从 ',
    'Meditate': '冥想',
    'Visit a dimension where everything is stronger, in an attempt to learn how to better train your Trimps. All enemies will have +100% health and +50% attack, but your Trimps will gather 25% faster. Completing': '进入一个敌人更加强大的维度来学习如何更好地训练脆皮。所有的敌人生命值增加100%，攻击力增加50%，但脆皮的资源获取速度也会提高25%。通过 ',
    '\'Trimple of Doom\' (': '末日神殿地图(',
	'will return the world to normal.': '后世界将回归正常。',
    'Visit a dimension where everything is stronger, in an attempt to learn how to better train your Trimps. All enemies will have +100% health and +50% attack, but your Trimps will gather 25% faster.': '进入一个敌人更加强大的维度来学习如何更好地训练脆皮。所有的敌人生命值增加100%，攻击力增加50%，但脆皮的资源获取速度也会提高25%。',
    'You have the Meditate challenge active. Visit a dimension where everything is stronger, in an attempt to learn how to better train your Trimps. All enemies will have +100% health and +50% attack, but your Trimps will gather 25% faster. Completing': '您目前正在进行冥想挑战。进入一个敌人更加强大的维度来学习如何更好地训练脆皮。所有的敌人生命值增加100%，攻击力增加50%，但脆皮的资源获取速度也会提高25%。通过 ',
    'You have the Meditate challenge active. Visit a dimension where everything is stronger, in an attempt to learn how to better train your Trimps. All enemies will have +100% health and +50% attack, but your Trimps will gather 25% faster.': '您目前正在进行冥想挑战。进入一个敌人更加强大的维度来学习如何更好地训练脆皮。所有的敌人生命值增加100%，攻击力增加50%，但脆皮的资源获取速度也会提高25%。',
    'Decay': '衰变',
    'Tweak the portal to bring you to an alternate reality, where added chaos will help you learn to create a peaceful place. You will gain 10x loot (excluding helium), 10x gathering, and 5x Trimp attack, but a stack of Decay will accumulate every second. Each stack of Decay reduces loot, gathering, and Trimp attack by 0.5% of the current amount. These stacks reset each time a Blimp is killed and cap at 999. Completing': '调节传送门，将您带到一个更混乱的异世界中。在那里可以学习如何创造一个更安宁的环境。您的战利品获取量变为10倍(氦除外)，资源获取速度变为10倍，且脆皮的攻击力变为5倍，但每秒都会增加一层“衰变”。每层衰变将战利品获取量、资源获取速度和脆皮攻击力减少当前数量的0.5%。当杀死每个区域最后的脆皮飞艇时层数重置，层数最高为999。在此挑战激活的前提下通过 ',
	'with this challenge active will allow you to select the Gardens biome when creating maps, and all future Gardens maps created will gain +25% loot.': '将使您可以在制造地图时选择花园生物群落，且后续所有花园地图战利品获取量增加25%。',
    'You have the Decay challenge active. Tweak the portal to bring you to an alternate reality, where added chaos will help you learn to create a peaceful place. You will gain 10x loot (excluding helium), 10x gathering, and 5x Trimp attack, but a stack of Decay will accumulate every second. Each stack of Decay reduces loot, gathering, and Trimp attack by 0.5% of the current amount. These stacks reset each time a Blimp is killed and cap at 999. Completing': '您目前正在进行衰变挑战。调节传送门，将您带到一个更混乱的异世界中。在那里可以学习如何创造一个更安宁的环境。您的战利品获取量变为10倍(氦除外)，资源获取速度变为10倍，且脆皮的攻击力变为5倍，但每秒都会增加一层“衰变”。每层衰变将战利品获取量、资源获取速度和脆皮攻击力减少当前数量的0.5%。当杀死每个区域最后的脆皮飞艇时层数重置，衰变最高为999层。在此挑战激活的前提下通过 ',
    'Trimp': '脆皮',
    'Tweak the portal to bring you to a dimension where Trimps explode if more than 1 fights at a time. You will not be able to learn Coordination, but completing': '调节传送门，将您带到一个脆皮只能单打独斗的维度中。您将无法研究协作，但通过 ',
	'will teach you how to keep your Trimps alive for much longer.': '后可以学会如何让脆皮存活更久。',
    'Tweak the portal to bring you to a dimension where Trimps explode if more than 1 fights at a time. You will not be able to learn Coordination.': '调节传送门，将您带到一个脆皮只能单打独斗的维度中。您将无法研究协作。',
    'Trimp Challenge!': '脆皮挑战！',
    'You have unlocked the \'Resilience\' perk, and your Trimps can fight together again.': '您解锁了“弹性”特权，并且脆皮又可以共同作战了。',
    'You have the Trimp challenge active. Tweak the portal to bring you to a dimension where Trimps explode if more than 1 fights at a time. You will not be able to learn Coordination, but completing': '您目前正在进行脆皮挑战。调节传送门，将您带到一个脆皮只能单打独斗的维度中。您将无法研究协作，但通过 ',
    'You have the Trimp challenge active. "Tweak the portal to bring you to a dimension where Trimps explode if more than 1 fights at a time. You will not be able to learn Coordination."': '您目前正在进行脆皮挑战。调节传送门，将您带到一个脆皮只能单打独斗的维度中。您将无法研究协作。',
    'Trapper': '捕手',
    'Travel to a dimension where Trimps refuse to breed in captivity, teaching yourself new ways to take advantage of situations where breed rate is low. Clearing': '前往一个被抓住的脆皮拒绝繁殖的维度。在那里可以学习如何利用低繁殖率做些什么。在此挑战激活的前提下通过 ',
    '\'Trimple Of Doom\' (': '末日神殿地图(',
    'with this challenge active will return your breeding rate to normal. Note that any bonuses that cause housing to come prefilled with Trimps will not work in a dimension where Trimps cannot breed.': '后繁殖率将恢复正常。注意，在脆皮无法繁殖的维度中，任何在住房建造完立刻使其获得满人口的加成均无效。',
    'Travel to a dimension where Trimps refuse to breed in captivity, good luck!': '前往一个被抓住的脆皮拒绝繁殖的维度，祝您好运！',
    'bored': '无所事事',
    'breeding': '繁殖中',
    'You have the Trapper challenge active. Travel to a dimension where Trimps refuse to breed in captivity, teaching yourself new ways to take advantage of situations where breed rate is low. Clearing': '您目前正在进行捕手挑战。前往一个被抓住的脆皮拒绝繁殖的维度。在那里可以学习如何利用低繁殖率做些什么。在此挑战激活的前提下通过 ',
    'You have the Trapper challenge active. "Travel to a dimension where Trimps refuse to breed in captivity, good luck!"': '您目前正在进行捕手挑战。前往一个被抓住的脆皮拒绝繁殖的维度，祝您好运！',
    'Electricity': '电流',
	'Use the keys you found in the Prison to bring your portal to an extremely dangerous dimension. In this dimension enemies will electrocute your Trimps, stacking a debuff with each attack that damages Trimps for 10% of total health per turn per stack, and reduces Trimp attack by 10% per stack. Clearing': '使用监狱地图中找到的钥匙，可以将您的传送门导向一个极端危险的维度。此维度中，敌人会电击您的脆皮，每次攻击给它们叠加一层“触电”。每层触电每轮对脆皮造成生命值上限10%的伤害，并且降低脆皮10%攻击力。通过 ',
	'\'The Prison\' (': '监狱地图 (',
	'will reward you with an additional 200% of all helium earned up to but not including Zone 80. This is repeatable!': '后，可额外获得氦，数值等于本次挑战完成前氦获取量的200%(不包含区域80获取的)。此挑战可重复完成！',
    'Use the keys you found in the Prison to bring your portal to an extremely dangerous dimension. In this dimension enemies will electrocute your Trimps, stacking a debuff with each attack that damages Trimps for 10% of total health per turn per stack, and reduces Trimp attack by 10% per stack.': '使用监狱地图中找到的钥匙，可以将您的传送门导向一个极端危险的维度。此维度中，敌人会电击您的脆皮，每次攻击给它们叠加一层“触电”。每层触电每轮对脆皮造成生命值上限10%的伤害，并且降低脆皮10%攻击力。',
    'You will unlock this challenge once you clear \'The Prison\' at Zone': '欲解锁此挑战，您需要通过监狱地图，它在区域',
    'You have the Electricity challenge active. Use the keys you found in the Prison to bring your portal to an extremely dangerous dimension. In this dimension enemies will electrocute your Trimps, stacking a debuff with each attack that damages Trimps for 10% of total health per turn per stack, and reduces Trimp attack by 10% per stack. Clearing': '您目前正在进行电流挑战。使用监狱地图中找到的钥匙，可以将您的传送门导向一个极端危险的维度。此维度中，敌人会电击您的脆皮，每次攻击给它们叠加一层“触电”。每层触电每轮对脆皮造成生命值上限10%的伤害，并且降低脆皮10%攻击力。通过 ',
    'You have the Electricity challenge active. "Use the keys you found in the Prison to bring your portal to an extremely dangerous dimension. In this dimension enemies will electrocute your Trimps, stacking a debuff with each attack that damages Trimps for 10% of total health per turn per stack, and reduces Trimp attack by 10% per stack."': '您目前正在进行电流挑战。使用监狱地图中找到的钥匙，可以将您的传送门导向一个极端危险的维度。此维度中，敌人会电击您的脆皮，每次攻击给它们叠加一层“触电”。每层触电每轮对脆皮造成生命值上限10%的伤害，并且降低脆皮10%攻击力。',
    'Frugal': '节俭',
    'Bring yourself to a dimension where Equipment is cheap but unable to be prestiged, in order to teach yourself better resource and equipment management. Completing': '将您带到一个装备更便宜但无法重铸的维度。在那里可以学习如何更好管理资源和装备。在此挑战激活的前提下通过 ',
	'\'Dimension of Anger\' (': '愤怒维度地图 (',
	'with this challenge active will return missing books to maps, and your new skills in Frugality will permanently cause MegaBooks to increase gather speed by 60% instead of 50%.': '后可重新获得重铸升级，且您新学会的节俭能力可以永久将超级升级由原来的资源获取速度提升50%变为资源获取速度提升60%。',
    'You have the Frugal challenge active. Bring yourself to a dimension where Equipment is cheap but unable to be prestiged, in order to teach yourself better resource and equipment management. Completing': '您目前正在进行节俭挑战。将您带到一个装备更便宜但无法重铸的维度。在那里可以学习如何更好管理资源和装备。在此挑战激活的前提下通过 ',
    'Life': '生命',
	'Explore a dimension that is normally populated by the Undead, but is currently plagued by a quickly moving virus that can bring things back to life. All enemies in this dimension have 500% extra attack and 1000% extra health. Attacking a normal undead enemy gives your Trimps 1 stack of Unliving, which increases Trimp attack and health by 10% (additive) per stack. Trimps can have a maximum of 150 stacks of Unliving, and attacking a Living enemy will remove 5 stacks of Unliving. Completing': '探索一个亡灵盘据的维度，最近此维度一种能够令亡灵复生的病毒正快速传播中。此维度中的所有敌人生命值增加1000%，攻击力增加500%。攻击一个普通的亡灵敌人可以使您的脆皮获得一层“亡灵化”，每层可以使脆皮的攻击力和生命值增加10%(相互叠加)。亡灵化最高为150层。攻击一个非亡灵的敌人将失去5层“亡灵化”。通过 ',
	'will reward you with an additional 400% of all helium earned up to that point. This is repeatable!': '后，可额外获得氦，数值等于本次挑战完成前氦获取量的400%。此挑战可重复完成！',
    'You have the Life challenge active. Explore a dimension that is normally populated by the Undead, but is currently plagued by a quickly moving virus that can bring things back to life. All enemies in this dimension have 500% extra attack and 1000% extra health. Attacking a normal undead enemy gives your Trimps 1 stack of Unliving, which increases Trimp attack and health by 10% (additive) per stack. Trimps can have a maximum of 150 stacks of Unliving, and attacking a Living enemy will remove 5 stacks of Unliving. Completing': '您目前正在进行生命挑战。探索一个亡灵盘据的维度，最近此维度一种能够令亡灵复生的病毒正快速传播中。此维度中的所有敌人生命值增加1000%，攻击力增加500%。攻击一个普通的亡灵敌人可以使您的脆皮获得一层“亡灵化”，每层可以使脆皮的攻击力和生命值增加10%(相互叠加)。亡灵化最高为150层。攻击一个非亡灵的敌人将失去5层“亡灵化”。通过 ',
    'Mapocalypse': '天启地图',
    'Experience a slightly distorted version of the \'Electricity\' dimension, to help understand the relationship between maps and the world. Everything will work exactly the same as Electricity, but all maps will have an extra 300% difficulty. Clearing': '体验一个轻微扭曲的“电流”维度。在那里可以更好理解地图与世界之间的关系。除了所有地图难度增加300%以外，大部分规则与电流挑战相同。通过 ',
	'will cause the world to return to normal. You': '后世界将恢复原样。您同时 ',
	'will': '可以',
	'receive the Helium reward from Electricity.': '获得电流挑战中的氦奖励。',
    'You have the Mapocalypse challenge active. Experience a slightly distorted version of the \'Electricity\' dimension, to help understand the relationship between maps and the world. Everything will work exactly the same as Electricity, but all maps will have an extra 300% difficulty. Clearing': '您目前正在进行天启地图挑战。体验一个轻微扭曲的“电流”维度。在那里可以更好理解地图与世界之间的关系。除了所有地图难度增加300%以外，大部分规则与电流挑战相同。通过 ',
    'Coordinate': '协同',
	'Visit a dimension where Bad Guys are Coordinated but never fast, to allow you to study naturally evolved Coordination. Completing': '造访一个敌人协同作战但没有快速效果的维度。在那里可以研究自然进化出的协作是什么样的。在此挑战激活的前提下通过 ',
	'with this challenge active will cause all enemies to lose their Coordination.': '后，敌人将失去协作效果。',
    'Visit a dimension where Bad Guys are Coordinated but never fast, chip \'em down!': '造访一个敌人协同作战但没有快速效果的维度。嫩死他们！',
    'You have the Coordinate challenge active. Visit a dimension where Bad Guys are Coordinated but never fast, to allow you to study naturally evolved Coordination. Completing': '您目前正在进行协同挑战。造访一个敌人协同作战但没有快速效果的维度。在那里可以研究自然进化出的协作是什么样的。在此挑战激活的前提下通过 ',
    'You have the Coordinate challenge active. "Visit a dimension where Bad Guys are Coordinated but never fast, chip \'em down!"': '您目前正在进行协同挑战。造访一个敌人协同作战但没有快速效果的维度。嫩死他们！',
    'Crushed': '粉碎',
    'Journey to a dimension where the atmosphere is rich in helium, but Bad Guys have a 50% chance to Critical Strike for +400% damage unless your Block is as high as your current Health. Clearing': '前往一个大气中富含氦的维度，此维度中除非您的格挡达到当前生命值，否则敌人有50%概率暴击，多造成400%伤害。通过 ',
    'will reward you with an additional 400% of all helium earned up to but not including Z125. This challenge is repeatable.': '后，可额外获得氦，数值等于本次挑战完成前氦获取量的400%(不包含区域125获取的)。此挑战可重复完成。',
    'You have the Crushed challenge active. Journey to a dimension where the atmosphere is rich in helium, but Bad Guys have a 50% chance to Critical Strike for +400% damage unless your Block is as high as your current Health. Clearing': '您目前正在进行粉碎挑战。前往一个大气中富含氦的维度，此维度中除非您的格挡达到当前生命值，否则敌人有50%概率暴击，多造成400%伤害。通过 ',
    'Slow': '迟缓',
    'Legends tell of a dimension inhabited by incredibly fast Bad Guys, where blueprints exist for a powerful yet long forgotten weapon and piece of armor. All Bad Guys will attack first in this dimension, but clearing': '传说这个维度被极其迅捷的敌人占据了，另外这里还有着强大的武器及护甲的蓝图，就等着您来让它们重见天日了。此维度中，所有敌人都会抢先攻击，但在此挑战激活的前提下通过 ',
    'with this challenge active will forever-after allow you to create these new pieces of equipment.': '后，您可以永久解锁这些新装备。',
    'Legends tell of a dimension inhabited by incredibly fast Bad Guys, and you seem to want to go there to prove something. All Bad Guys will attack first in this dimension, watch your health!': '传说这个维度被极其迅捷的敌人占据了，您看起来也想要证明自己。此维度中，所有敌人都会抢先攻击，注意您的生命值！',
    'You have the Slow challenge active. Legends tell of a dimension inhabited by incredibly fast Bad Guys, where blueprints exist for a powerful yet long forgotten weapon and piece of armor. All Bad Guys will attack first in this dimension, but clearing': '您目前正在进行迟缓挑战。传说这个维度被极其迅捷的敌人占据了，另外这里还有着强大的武器及护甲的蓝图，就等着您来让它们重见天日了。此维度中，所有敌人都会抢先攻击，但在此挑战激活的前提下通过 ',
    'You have the Slow challenge active. "Legends tell of a dimension inhabited by incredibly fast Bad Guys, and you seem to want to go there to prove something. All Bad Guys will attack first in this dimension, watch your health!"': '您目前正在进行迟缓挑战。传说这个维度被极其迅捷的敌人占据了，您看起来也想要证明自己。此维度中，所有敌人都会抢先攻击，注意您的生命值！',
    'Nom': '美味',
    'Travel to a dimension where Bad Guys enjoy the taste of Trimp. Whenever a group of Trimps dies, the Bad Guy will eat them, gaining 25% (compounding) more attack damage and healing for 5% of their maximum health. The methane-rich atmosphere causes your Trimps to lose 5% of their total health after each attack, but the Bad Guys are too big and slow to attack first. Clearing': '前往一个敌人垂涎于脆皮美味的维度。当一队脆皮死亡后，敌人会将它们吃掉，攻击力增加25%(叠乘)，且恢复上限5%的生命值。另外，此维度富含甲烷的大气还会使脆皮在每次攻击后失去上限5%的生命值。不过，敌人体型太大，行动太迟缓，因此它们无法抢先攻击。通过 ',
    'will reward you with an additional 450% of all helium earned up to that point. This is repeatable!': '后，可额外获得氦，数值等于本次挑战完成前氦获取量的450%。此挑战可重复完成！',
    'Travel to a dimension where Bad Guys enjoy the taste of Trimp. Whenever a group of Trimps dies, the Bad Guy will eat them, gaining 25% (compounding) more attack damage and healing for 5% of their maximum health. The methane-rich atmosphere causes your Trimps to lose 5% of their total health after each attack, but the Bad Guys are too big and slow to attack first.': '前往一个敌人垂涎于脆皮美味的维度。当一队脆皮死亡后，敌人会将它们吃掉，攻击力增加25%(叠乘)，且恢复上限5%的生命值。另外，此维度富含甲烷的大气还会使脆皮在每次攻击后失去上限5%的生命值。不过，敌人体型太大，行动太迟缓，因此它们无法抢先攻击。',
    'You have the Nom challenge active. Travel to a dimension where Bad Guys enjoy the taste of Trimp. Whenever a group of Trimps dies, the Bad Guy will eat them, gaining 25% (compounding) more attack damage and healing for 5% of their maximum health. The methane-rich atmosphere causes your Trimps to lose 5% of their total health after each attack, but the Bad Guys are too big and slow to attack first. Clearing': '您目前正在进行美味挑战。前往一个敌人垂涎于脆皮美味的维度。当一队脆皮死亡后，敌人会将它们吃掉，攻击力增加25%(叠乘)，且恢复上限5%的生命值。另外，此维度富含甲烷的大气还会使脆皮在每次攻击后失去上限5%的生命值。不过，敌人体型太大，行动太迟缓，因此它们无法抢先攻击。通过 ',
    'You have the Nom challenge active. "Travel to a dimension where Bad Guys enjoy the taste of Trimp. Whenever a group of Trimps dies, the Bad Guy will eat them, gaining 25% (compounding) more attack damage and healing for 5% of their maximum health. The methane-rich atmosphere causes your Trimps to lose 5% of their total health after each attack, but the Bad Guys are too big and slow to attack first."': '您目前正在进行美味挑战。前往一个敌人垂涎于脆皮美味的维度。当一队脆皮死亡后，敌人会将它们吃掉，攻击力增加25%(叠乘)，且恢复上限5%的生命值。另外，此维度富含甲烷的大气还会使脆皮在每次攻击后失去上限5%的生命值。不过，敌人体型太大，行动太迟缓，因此它们无法抢先攻击。',
    'Mapology': '地图学',
    'Travel to a dimension where maps are scarce, in an attempt to learn to be more resourceful. You will earn one map Credit for each World Zone you clear, and it costs 1 credit to run 1 map. Completing': '前往一个地图稀缺的维度，在那里可以学习如何变得更足智多谋。每通过一个区域，您可以获得一个地图代币，每次开始进入地图后消耗一个地图代币。在此挑战激活的前提下通过 ',
    'with this challenge active will return you to your original dimension. Double prestige from Scientist IV will not work during this challenge.': '可以将您送回原来的维度。科学家 IV 的双倍锻造升级加成在此挑战期间无效。',
    'Travel to a dimension where maps are scarce, in an attempt to learn to be more resourceful. You will earn one map Credit for each World Zone you clear, and it costs 1 credit to run 1 map.': '前往一个地图稀缺的维度，在那里可以学习如何变得更足智多谋。每通过一个区域，您可以获得一个地图代币，每次开始进入地图后消耗一个地图代币。',
    'Double prestige from Scientist IV and the Blacksmithery mastery will not function while this challenge is active.': '科学家 IV 的双倍锻造升级加成和锻铁术系列专精在此挑战期间无效。',
    'You have the Mapology challenge active. Travel to a dimension where maps are scarce, in an attempt to learn to be more resourceful. You will earn one map Credit for each World Zone you clear, and it costs 1 credit to run 1 map. Completing': '您目前正在进行地图学挑战。前往一个地图稀缺的维度，在那里可以学习如何变得更足智多谋。每通过一个区域，您可以获得一个地图代币，每次开始进入地图后消耗一个地图代币。在此挑战激活的前提下通过 ',
    'You have the Mapology challenge active. "Travel to a dimension where maps are scarce, in an attempt to learn to be more resourceful. You will earn one map Credit for each World Zone you clear, and it costs 1 credit to run 1 map.': '您目前正在进行地图学挑战。前往一个地图稀缺的维度，在那里可以学习如何变得更足智多谋。每通过一个区域，您可以获得一个地图代币，每次开始进入地图后消耗一个地图代币。',
    'Toxicity': '毒性',
    'Travel to a dimension rich in helium, but also rich in toxic Bad Guys. All Bad Guys have 5x attack and 2x health. Each time you attack a Bad Guy, your Trimps lose 5% of their health, and toxins are released into the air which reduce the breeding speed of your Trimps by 0.3% (of the current amount), but also increase all resources obtained by 0.15% (including Helium), stacking up to 1500 times. These stacks will reset when you clear a Zone. Completing': '前往一个富含氦，但也富含大量毒性敌人的维度。所有敌人攻击力为5倍，生命值为2倍。每次攻击一个毒性敌人后，脆皮失去5%的生命值，同时毒气排入大气后脆皮繁殖速度会比之前的速度慢0.3%，但资源获取量也会增加0.15%(包括氦)，此效果最高为1500层。在通过一个区域后层数重置。在此挑战激活的前提下通过 ',
    'with this challenge active will reward you with an additional 400% of all helium earned up to that point. This is repeatable!': '后，可额外获得氦，数值等于本次挑战完成前氦获取量的400%。此挑战可重复完成！',
    'Travel to a dimension filled with the glory that comes from killing toxic Bad Guys. All Bad Guys have 5x attack and 2x health. Each time you attack a Bad Guy, your Trimps lose 5% of their health, and toxins are released into the air which reduce the breeding speed of your Trimps by 0.3% (of the current amount), but also increase all loot found by 0.15%, stacking up to 1500 times. These stacks will reset when you clear a Zone.': '前往一个以击杀毒性敌人为荣的维度。所有敌人攻击力为5倍，生命值为2倍。每次攻击一个毒性敌人后，脆皮失去5%的生命值，同时毒气排入大气后脆皮繁殖速度会比之前的速度慢0.3%，但资源获取量也会增加0.15%(包括氦)，此效果最高为1500层。在通过一个区域后层数重置。',
    'You have the Toxicity challenge active. Travel to a dimension rich in helium, but also rich in toxic Bad Guys. All Bad Guys have 5x attack and 2x health. Each time you attack a Bad Guy, your Trimps lose 5% of their health, and toxins are released into the air which reduce the breeding speed of your Trimps by 0.3% (of the current amount), but also increase all resources obtained by 0.15% (including Helium), stacking up to 1500 times. These stacks will reset when you clear a Zone. Completing': '您目前正在进行毒性挑战。前往一个富含氦，但也富含大量毒性敌人的维度。所有敌人攻击力变为5倍，生命值变为2倍。每次攻击一个毒性敌人后，脆皮失去5%的生命值，同时毒气排入大气后脆皮繁殖速度会比之前的速度慢0.3%，但资源获取量也会增加0.15%(包括氦)，此效果最高为1500层。在通过一个区域后层数重置。在此挑战激活的前提下通过 ',
    'You have the Toxicity challenge active. "Travel to a dimension filled with the glory that comes from killing toxic Bad Guys. All Bad Guys have 5x attack and 2x health. Each time you attack a Bad Guy, your Trimps lose 5% of their health, and toxins are released into the air which reduce the breeding speed of your Trimps by 0.3% (of the current amount), but also increase all loot found by 0.15%, stacking up to 1500 times. These stacks will reset when you clear a Zone."': '您目前正在进行毒性挑战。前往一个以击杀毒性敌人为荣的维度。所有敌人攻击力变为5倍，生命值变为2倍。每次攻击一个毒性敌人后，脆皮失去5%的生命值，同时毒气排入大气后脆皮繁殖速度会比之前的速度慢0.3%，但资源获取量也会增加0.15%(包括氦)，此效果最高为1500层。在通过一个区域后层数重置。',
    'Devastation': '破坏',
    'Travel to a harsh dimension where Trimps are penalized for the mistakes of previous generations. If your army is killed at any point, any overkill damage will be applied 750% to the next group of Trimps to fight. Completing': '前往一个脆皮要为前辈们错误买单的严苛维度。如果军队被敌人击杀，下一队脆皮将受到溢出伤害750%的伤害。通过 ',
    'Imploding Star (Zone': '爆炸之星地图 (区域',
    'You have the Devastation challenge active. Travel to a harsh dimension where Trimps are penalized for the mistakes of previous generations. If your army is killed at any point, any overkill damage will be applied 750% to the next group of Trimps to fight. Completing': '您目前正在进行破坏挑战。前往一个脆皮要为前辈们错误买单的严苛维度。如果军队被敌人击杀，下一队脆皮将受到溢出伤害750%的伤害。通过 ',
    'Watch': '守望',
    'Travel to a strange dimension where life is easier but harder at the same time. At the end of each World Zone any available equipment upgrades will drop, and any unassigned Trimps will be split evenly amongst Farmer, Lumberjack, and Miner. However, resource production and drops from all sources will be halved, and all enemies will deal 25% more damage. Completing': '前往一个生活既轻松又艰难的奇怪维度。通过每个区域后，自动获得所有可用的装备重铸升级，且所有未分配工作的脆皮自动平均分配到农民、伐木工和矿工。但是，所有资源获取速度减半，且敌人造成的伤害增加25%。在此挑战激活的前提下通过 ',
    'with this challenge active will reward you with an additional 200% of all helium earned up to that point.': '后，可额外获得氦，数值等于本次挑战完成前氦获取量的200%。',
    'Travel to a strange dimension where life is easier but harder at the same time. At the end of each World Zone any available equipment upgrades will drop, and any unassigned Trimps will be split evenly amongst Farmer, Lumberjack, and Miner. However, resource production and drops from all sources will be halved, and all enemies will deal 25% more damage. Relax and let the Trimps figure it out for themselves, you know you want to.': '前往一个生活既轻松又艰难的奇怪维度。通过每个区域后，自动获得所有可用的装备重铸升级，且所有未分配工作的脆皮自动平均分配到农民、伐木工和矿工。但是，所有资源获取速度减半，且敌人造成的伤害增加25%。您知道您本来就想着打打酱油，看着脆皮们自己来就好了。',
    'You have the Watch challenge active. Travel to a strange dimension where life is easier but harder at the same time. At the end of each World Zone any available equipment upgrades will drop, and any unassigned Trimps will be split evenly amongst Farmer, Lumberjack, and Miner. However, resource production and drops from all sources will be halved, and all enemies will deal 25% more damage. Completing': '您目前正在进行守望挑战。前往一个生活既轻松又艰难的奇怪维度。通过每个区域后，自动获得所有可用的装备重铸升级，且所有未分配工作的脆皮自动平均分配到农民、伐木工和矿工。但是，所有资源获取速度减半，且敌人造成的伤害增加25%。在此挑战激活的前提下通过 ',
    'You have the Watch challenge active. "Travel to a strange dimension where life is easier but harder at the same time. At the end of each World Zone any available equipment upgrades will drop, and any unassigned Trimps will be split evenly amongst Farmer, Lumberjack, and Miner. However, resource production and drops from all sources will be halved, and all enemies will deal 25% more damage. Relax and let the Trimps figure it out for themselves, you know you want to."': '您目前正在进行守望挑战。前往一个生活既轻松又艰难的奇怪维度。通过每个区域后，自动获得所有可用的装备重铸升级，且所有未分配工作的脆皮自动平均分配到农民、伐木工和矿工。但是，所有资源获取速度减半，且敌人造成的伤害增加25%。您知道您本来就想着打打酱油，看着脆皮们自己来就好了。',
    'Lead': '领导',
    'Travel to a dimension where life is easier or harder depending on the time. Odd numbered Zones will cause double resources to be earned from all sources, and will give your Trimps 50% extra attack. Starting an even numbered Zone will cause all enemies to gain 200 stacks of': '前往一个难度由时间决定的维度。在奇数区域中，脆皮资源获取量翻倍，且攻击力提高50%。在偶数区域中，所有敌人获得200层 ',
    'Momentum': '动量',
    '. Clearing a World cell will cause 1 stack to be lost, and each stack will increase the enemy\'s damage and health by 4%, and block pierce by 0.1%. If your Trimps attack without killing their target, they will lose 0.03% of their health per enemy stack. Completing': ' 。在世界中通过一个格子后敌人失去一层动量，每层动量增加敌人4%的伤害和生命值，并且格挡穿透增加0.1%。如果脆皮攻击后没能击杀敌人，它们将根据动量层数，每层受到0.03%生命值的伤害。在此挑战激活的前提下通过 ',
    'with this challenge active will reward you with an additional 300% of all helium earned up to that point.': '后，可额外获得氦，数值等于本次挑战完成前氦获取量的300%。',
    '. Clearing a World cell will cause 1 stack to be lost, and each stack will increase the enemy\'s damage and health by 4%, and block pierce by 0.1%. If your Trimps attack without killing their target, they will lose 0.03% of their health per enemy stack.': ' 。在世界中通过一个格子后敌人失去一层动量，每层动量增加敌人4%的伤害和生命值，并且格挡穿透增加0.1%。如果脆皮攻击后没能击杀敌人，它们将根据动量层数，每层受到0.03%生命值的伤害。',
    'You have the Lead challenge active. Travel to a dimension where life is easier or harder depending on the time. Odd numbered Zones will cause double resources to be earned from all sources, and will give your Trimps 50% extra attack. Starting an even numbered Zone will cause all enemies to gain 200 stacks of': '您目前正在进行领导挑战。前往一个难度由时间决定的维度。在奇数区域中，脆皮资源获取量翻倍，且攻击力提高50%。在偶数区域中，所有敌人获得200层 ',
    'You have the Lead challenge active. "Travel to a dimension where life is easier or harder depending on the time. Odd numbered Zones will cause double resources to be earned from all sources, and will give your Trimps 50% extra attack. Starting an even numbered Zone will cause all enemies to gain 200 stacks of': '您目前正在进行领导挑战。前往一个难度由时间决定的维度。在奇数区域中，脆皮资源获取量翻倍，且攻击力提高50%。在偶数区域中，所有敌人获得200层 ',
    '. Clearing a World cell will cause 1 stack to be lost, and each stack will increase the enemy\'s damage and health by 4%, and block pierce by 0.1%. If your Trimps attack without killing their target, they will lose 0.03% of their health per enemy stack."': ' 。在世界中通过一个格子后敌人失去一层动量，每层动量增加敌人4%的伤害和生命值，并且格挡穿透增加0.1%。如果脆皮攻击后没能击杀敌人，它们将根据动量层数，每层受到0.03%生命值的伤害。',
    'Corrupted': '腐化',
    'with this challenge active will reward you with an extra 200% helium earned from any source up to that point, and will instantly transport you back to your normal dimension.': '后，可额外获得氦，数值等于本次挑战完成前氦获取量的200%，并立刻将您送回原来的维度。',
    'Domination': '统治',
    'Travel to a dimension where the strongest Bad Guys gain strength from those weaker than them. Most Bad Guys have 90% less health and attack, but the final Bad Guy in every World Zone and Map has 2.5x more damage, 7.5x more health, and heals for 5% every time they attack your Trimps. But they also drop three times as much Helium! Clearing': '前往一个最强的敌人从比它们弱小的敌人处吸收力量的维度。大部分敌人的生命值和攻击力减少90%，但每个区域最后一个敌人的伤害变为2.5倍，生命值变为7.5倍，且每次攻击的时候恢复5%的生命值。虽然如此，它们也会掉落三倍的氦！通过 ',
    'will also reward you with an extra 100% of helium earned from any source up to that point, and will instantly teleport you back to your normal dimension!': '后，可额外获得氦，数值等于本次挑战完成前氦获取量的100%，并立刻将您送回原来的维度！',
    'You have the Domination challenge active. Travel to a dimension where the strongest Bad Guys gain strength from those weaker than them. Most Bad Guys have 90% less health and attack, but the final Bad Guy in every World Zone and Map has 2.5x more damage, 7.5x more health, and heals for 5% every time they attack your Trimps. But they also drop three times as much Helium! Clearing': '您目前正在进行统治挑战。前往一个最强的敌人从比它们弱小的敌人处吸收力量的维度。大部分敌人的生命值和攻击力减少90%，但每个区域最后一个敌人的伤害变为2.5倍，生命值变为7.5倍，且每次攻击的时候恢复5%的生命值。虽然如此，它们也会掉落三倍的氦！通过 ',
    'Obliterated': '抹杀',
    'Eradicated': '灭绝',
    'However, you\'ll earn 1 extra Coordination per Zone you clear! Oh and Magma, Corruption, and Nature start at Z1.': '但是，您每通过一个区域，可以多获得一个协作升级！另外，岩浆、腐化和自然赋能均从区域1开始出现。',
    'You will unlock this challenge once you reach 4500% Challenge': '欲解锁此挑战，您需要到达4500%的挑战',
    'bonus': '加成',
    'Unlucky': '不幸', //U2挑战
    'Your Trimps will never get far in this harsh Universe without learning how to control their luck. Tweak your Portal to bring you to a an alternate reality where your Trimps\' minimum damage will be drastically lower, but their high end damage will be considerably higher. Each time your Trimps attack, 5 alternate timelines will open up. If the first digit of your Trimps\' minimum attack is even, the timeline where your Trimps did the most damage will become reality. If the first digit is odd, the timeline where your Trimps did the least amount of damage will instead become reality. Clearing the': '在这个严苛的宇宙中，脆皮如果没有学会控制运气，就走不远。调节传送门，将您带到一个脆皮最低伤害大大降低，但最高伤害也会大大增加的异世界。每次脆皮攻击时，产生5条世界线。如果您的最低伤害数值第一位是偶数，那么最终伤害最高的那条世界线会成为现实。如果您的最低伤害数值第一位是奇数，那么最终伤害最低的那条世界线会成为现实。通过 ',
    'Dimension of Rage (Zone': '暴怒维度 (区域',
    'will complete this Challenge!': '后可以完成此挑战！',
    'Tweak your Portal to bring you to a an alternate reality where your Trimps\' minimum damage will be drastically lower, but their high end damage will be considerably higher. Each time your Trimps attack, 5 alternate timelines will open up. If the first digit of your Trimps\' minimum attack is even, the timeline where your Trimps did the most damage will become reality. If the first digit is odd, the timeline where your Trimps did the least amount of damage will instead become reality.': '调节传送门，将您带到一个脆皮最低伤害大大降低，但最高伤害也会大大增加的异世界。每次脆皮攻击时，产生5条世界线。如果您的最低伤害数值第一位是偶数，那么最终伤害最高的那条世界线会成为现实。如果您的最低伤害数值第一位是奇数，那么最终伤害最低的那条世界线会成为现实。',
    'Unlucky Challenge!': '不幸挑战！',
    'You have unlocked a new perk, and your Trimps\' damage has normalized.': '您解锁了一个新的特权，并且脆皮的伤害又回归正常了。',
    'You have the Unlucky challenge active. Your Trimps will never get far in this harsh Universe without learning how to control their luck. Tweak your Portal to bring you to a an alternate reality where your Trimps\' minimum damage will be drastically lower, but their high end damage will be considerably higher. Each time your Trimps attack, 5 alternate timelines will open up. If the first digit of your Trimps\' minimum attack is even, the timeline where your Trimps did the most damage will become reality. If the first digit is odd, the timeline where your Trimps did the least amount of damage will instead become reality. Clearing the': '您目前正在进行不幸挑战。在这个严苛的宇宙中，脆皮如果没有学会控制运气，就走不远。调节传送门，将您带到一个脆皮最低伤害大大降低，但最高伤害也会大大增加的异世界。每次脆皮攻击时，产生5条世界线。如果您的最低伤害数值第一位是偶数，那么最终伤害最高的那条世界线会成为现实。如果您的最低伤害数值第一位是奇数，那么最终伤害最低的那条世界线会成为现实。通过 ',
    'You have the Unlucky challenge active. "Tweak your Portal to bring you to a an alternate reality where your Trimps\' minimum damage will be drastically lower, but their high end damage will be considerably higher. Each time your Trimps attack, 5 alternate timelines will open up. If the first digit of your Trimps\' minimum attack is even, the timeline where your Trimps did the most damage will become reality. If the first digit is odd, the timeline where your Trimps did the least amount of damage will instead become reality."': '您目前正在进行不幸挑战。调节传送门，将您带到一个脆皮最低伤害大大降低，但最高伤害也会大大增加的异世界。每次脆皮攻击时，产生5条世界线。如果您的最低伤害数值第一位是偶数，那么最终伤害最高的那条世界线会成为现实。如果您的最低伤害数值第一位是奇数，那么最终伤害最低的那条世界线会成为现实。',
    'Downsize': '精简',
    'Tweak the portal to bring you to an alternate reality, where Trimps are incredibly antisocial and refuse to share a house with any other Trimps. Each housing building will only provide 1 Trimp, but the morale boost and smaller society causes all Trimps to gather 5x as many resources per second. Clearing': '调节传送门，将您带到一个脆皮极度孤僻，无法与其他脆皮分享住房的异世界。每个住房只能容纳1个脆皮，但士气和小族群的加成使脆皮的资源获取速度变为5倍。通过 ',
    'Prismatic Palace (Zone': '棱镜宫殿 (区域',
    'Tweak the portal to bring you to an alternate reality, where Trimps are incredibly antisocial and refuse to share a house with any other Trimps. Each housing building will only provide 1 Trimp, but the morale boost and smaller society causes all Trimps to gather 5x as many resources per second.': '调节传送门，将您带到一个脆皮极度孤僻，无法与其他脆皮分享住房的异世界。每个住房只能容纳1个脆皮，但士气和小族群的加成使脆皮的资源获取速度变为5倍。',
    'Downsize Challenge!': '精简挑战！',
    'You have unlocked a new perk, and your Trimps are once again willing to share houses.': '您解锁了一个新的特权，并且脆皮又愿意分享住房了。',
    'You have the Downsize challenge active. Tweak the portal to bring you to an alternate reality, where Trimps are incredibly antisocial and refuse to share a house with any other Trimps. Each housing building will only provide 1 Trimp, but the morale boost and smaller society causes all Trimps to gather 5x as many resources per second. Clearing': '您目前正在进行精简挑战。调节传送门，将您带到一个脆皮极度孤僻，无法与其他脆皮分享住房的异世界。每个住房只能容纳1个脆皮，但士气和小族群的加成使脆皮的资源获取速度变为5倍。通过 ',
    'You have the Downsize challenge active. "Tweak the portal to bring you to an alternate reality, where Trimps are incredibly antisocial and refuse to share a house with any other Trimps. Each housing building will only provide 1 Trimp, but the morale boost and smaller society causes all Trimps to gather 5x as many resources per second."': '您目前正在进行精简挑战。调节传送门，将您带到一个脆皮极度孤僻，无法与其他脆皮分享住房的异世界。每个住房只能容纳1个脆皮，但士气和小族群的加成使脆皮的资源获取速度变为5倍。',
    'Transmute': '变形',
    'Tweak the portal to bring you to an alternate reality where Metal cannot drop or be gathered at all. At the end of each Zone, your Food, Wood, and Science are completely consumed and 75% of the net amount of consumed resources become Metal. Clearing': '调节传送门，将您带到一个金属完全无法通过掉落或者采集获得的异世界。通过每个区域时，木头、食物和科学点会被完全消耗，并以75%的转换率转换为金属。通过 ',
    'Tweak the portal to bring you to an alternate reality where Metal cannot drop or be gathered at all. At the end of each Zone, your Food, Wood, and Science are completely consumed and 75% of the net amount of consumed resources become Metal.': '调节传送门，将您带到一个金属完全无法通过掉落或者采集获得的异世界。通过每个区域时，木头、食物和科学点会被完全消耗，并以75%的转换率转换为金属。',
    'Transmute Challenge!': '变形挑战！',
    'You have the Transmute challenge active. Tweak the portal to bring you to an alternate reality where Metal cannot drop or be gathered at all. At the end of each Zone, your Food, Wood, and Science are completely consumed and 75% of the net amount of consumed resources become Metal. Clearing': '您目前正在进行变形挑战。调节传送门，将您带到一个金属完全无法通过掉落或者采集获得的异世界。通过每个区域时，木头、食物和科学点会被完全消耗，并以75%的转换率转换为金属。通过 ',
    'You have the Transmute challenge active. "Tweak the portal to bring you to an alternate reality where Metal cannot drop or be gathered at all. At the end of each Zone, your Food, Wood, and Science are completely consumed and 75% of the net amount of consumed resources become Metal."': '您目前正在进行变形挑战。调节传送门，将您带到一个金属完全无法通过掉落或者采集获得的异世界。通过每个区域时，木头、食物和科学点会被完全消耗，并以75%的转换率转换为金属。',
    'Unbalance': '不平衡',
    'Your scientists have discovered a new chaotic dimension! All enemies have 50% more attack, enemies in world have 100% more health, and enemies in maps have 200% more health. Starting at Zone 6, every time an enemy in the world is slain you will gain a stack of \'Unbalance\'. Every time an enemy in a map is slain, you will lose a stack of Unbalance. Each stack of Unbalance reduces your attack by 1%, but increases your Trimps\' gathering speed by 1%. Unbalance can stack to 500. Clearing': '科学家发现了一个新的混沌维度！所有敌人的攻击力增加50%，世界上敌人的生命值增加100%，并且地图中敌人的生命值增加200%。从区域6开始，每在世界上杀死一名敌人，您获得一层“不平衡”。而每在地图中杀死一名敌人，您失去一层“不平衡”。每层不平衡减少1%攻击力，但增加脆皮1%资源获取速度。不平衡最高叠加到500层。通过 ',
    'Travel to a fun chaotic dimension! All enemies have 50% more attack, enemies in world have 100% more health, and enemies in maps have 200% more health. Starting at Zone 6, every time an enemy in the world is slain you will gain a stack of \'Unbalance\'. Every time an enemy in a map is slain, you will lose a stack of Unbalance. Each stack of Unbalance reduces your attack by 1%, but increases your Trimps\' gathering speed by 1%.': '前往一个有趣的混沌维度！所有敌人的攻击力增加50%，世界上敌人的生命值增加100%，并且地图中敌人的生命值增加200%。从区域6开始，每在世界上杀死一名敌人，您获得一层“不平衡”。而每在地图中杀死一名敌人，您失去一层“不平衡”。每层不平衡减少1%攻击力，但增加脆皮1%资源获取速度。不平衡最高叠加到500层。',
    'You have the Unbalance challenge active. Your scientists have discovered a new chaotic dimension! All enemies have 50% more attack, enemies in world have 100% more health, and enemies in maps have 200% more health. Starting at Zone 6, every time an enemy in the world is slain you will gain a stack of \'Unbalance\'. Every time an enemy in a map is slain, you will lose a stack of Unbalance. Each stack of Unbalance reduces your attack by 1%, but increases your Trimps\' gathering speed by 1%. Unbalance can stack to 500. Clearing': '您目前正在进行不平衡挑战。科学家发现了一个新的混沌维度！所有敌人的攻击力增加50%，世界上敌人的生命值增加100%，并且地图中敌人的生命值增加200%。从区域6开始，每在世界上杀死一名敌人，您获得一层“不平衡”。而每在地图中杀死一名敌人，您失去一层“不平衡”。每层不平衡减少1%攻击力，但增加脆皮1%资源获取速度。不平衡最高叠加到500层。通过 ',
    'You have the Unbalance challenge active. "Travel to a fun chaotic dimension! All enemies have 50% more attack, enemies in world have 100% more health, and enemies in maps have 200% more health. Starting at Zone 6, every time an enemy in the world is slain you will gain a stack of \'Unbalance\'. Every time an enemy in a map is slain, you will lose a stack of Unbalance. Each stack of Unbalance reduces your attack by 1%, but increases your Trimps\' gathering speed by 1%."': '您目前正在进行不平衡挑战。前往一个有趣的混沌维度！所有敌人的攻击力增加50%，世界上敌人的生命值增加100%，并且地图中敌人的生命值增加200%。从区域6开始，每在世界上杀死一名敌人，您获得一层“不平衡”。而每在地图中杀死一名敌人，您失去一层“不平衡”。每层不平衡减少1%攻击力，但增加脆皮1%资源获取速度。不平衡最高叠加到500层。',
    'Bublé': '布累',
    'Tweak the portal to bring you to an alternate reality where Trimps really really don\'t like taking damage. Your Trimps start in this reality with an extra 250% Prismatic Shield, but as soon as they take any damage to health at all, they will refuse to fight again and the challenge will end. Clearing': '调节传送门，将您带到一个脆皮真的真的不喜欢受伤的异世界。脆皮初始拥有250%的额外棱镜护盾，但只要他们的生命值减少了，他们就将拒绝继续战斗，挑战也将以失败告终。在未失败过的前提下通过 ',
    'without failing will complete this Challenge - granting an additional 300% of all Radon earned up to that point. Failing this Challenge will grant an additional 100% of all Radon earned up to the spot where you failed.': '后可以完成此挑战并额外获得氡，数值等于本次挑战完成前氡获取量的300%。挑战失败的话，可额外获得氡，数值等于本次挑战失败前氡获取量的100%。',
    'You have the Bublé challenge active. Tweak the portal to bring you to an alternate reality where Trimps really really don\'t like taking damage. Your Trimps start in this reality with an extra 250% Prismatic Shield, but as soon as they take any damage to health at all, they will refuse to fight again and the challenge will end. Clearing': '您目前正在进行布累挑战。调节传送门，将您带到一个脆皮真的真的不喜欢受伤的异世界。脆皮初始拥有250%的额外棱镜护盾，但只要他们的生命值减少了，他们就将拒绝继续战斗，挑战也将以失败告终。在未失败过的前提下通过 ',
    'Duel': '决斗',
    'It\'s your Trimps vs the Bad Guys! Both teams start with 50 points, and both teams\' Crit Chance is locked to the amount of points the OTHER team has. Getting a Critical Strike steals 1 point from the other team, winning a battle steals 2 points, and winning a battle in one hit steals 5 points. Any team below 20 points gains 10x health, any team below 10 points always attacks first, and any team above 50 points gains 3x damage. Clearing': '这是脆皮与敌人之间的对决！双方分别以50点决斗点数开始，双方的暴击概率最高为对面的决斗点数。受到暴击的一方从另一方获得1点决斗点数，赢得战斗的一方从另一方获得2点决斗点数，一击赢得战斗的一方从另一方获得5点决斗点数。决斗点数小于20的一方获得10倍生命值，决斗点数小于10的一方永远抢先攻击，而决斗点数大于50的一方造成3倍伤害。通过 ',
    'It\'s your Trimps vs the Bad Guys! Both teams start with 50 points, and both teams\' Crit Chance is locked to the amount of points the OTHER team has. Getting a Critical Strike steals 1 point from the other team, winning a battle steals 2 points, and winning a battle in one hit steals 5 points. Any team below 20 points gains 10x health, Enemies attack first when less than 10 points (': '这是脆皮与敌人之间的对决！双方分别以50点决斗点数开始，双方的暴击概率最高为对面的决斗点数。受到暴击的一方从另一方获得1点决斗点数，赢得战斗的一方从另一方获得2点决斗点数，一击赢得战斗的一方从另一方获得5点决斗点数。决斗点数小于20的一方获得10倍生命值，当敌人决斗点数低于10的时候，它们永远抢先攻击 (',
    'Duel Points': '决斗点数',
    'Trimps cannot become Fast on this Challenge in Challenge': '脆皮无法抢先攻击，因为它们在挑战',
    'mode!': '模式！',
    '), and any team above 50 points gains 3x damage.': ')，而决斗点数大于50的一方造成3倍伤害。',
    'You have the Duel challenge active. It\'s your Trimps vs the Bad Guys! Both teams start with 50 points, and both teams\' Crit Chance is locked to the amount of points the OTHER team has. Getting a Critical Strike steals 1 point from the other team, winning a battle steals 2 points, and winning a battle in one hit steals 5 points. Any team below 20 points gains 10x health, any team below 10 points always attacks first, and any team above 50 points gains 3x damage. Clearing': '您目前正在进行决斗挑战。这是脆皮与敌人之间的对决！双方分别以50点决斗点数开始，双方的暴击概率最高为对面的决斗点数。受到暴击的一方从另一方获得1点决斗点数，赢得战斗的一方从另一方获得2点决斗点数，一击赢得战斗的一方从另一方获得5点决斗点数。决斗点数小于20的一方获得10倍生命值，决斗点数小于10的一方永远抢先攻击，而决斗点数大于50的一方造成3倍伤害。通过 ',
    'You have the Duel challenge active. "It\'s your Trimps vs the Bad Guys! Both teams start with 50 points, and both teams\' Crit Chance is locked to the amount of points the OTHER team has. Getting a Critical Strike steals 1 point from the other team, winning a battle steals 2 points, and winning a battle in one hit steals 5 points. Any team below 20 points gains 10x health, Enemies attack first when less than 10 points (': '您目前正在进行决斗挑战。这是脆皮与敌人之间的对决！双方分别以50点决斗点数开始，双方的暴击概率最高为对面的决斗点数。受到暴击的一方从另一方获得1点决斗点数，赢得战斗的一方从另一方获得2点决斗点数，一击赢得战斗的一方从另一方获得5点决斗点数。决斗点数小于20的一方获得10倍生命值，当敌人决斗点数低于10的时候，它们永远抢先攻击 (',
    '), and any team above 50 points gains 3x damage."': ')，而决斗点数大于50的一方造成3倍伤害。',
    'Melt': '熔化',
    'Tweak the portal to bring you to an alternate reality, where there\'s plenty of risk and Radon. You will gain 10x loot (excluding Radon), 10x gathering, and 5x Trimp attack, but a stack of Melt will accumulate every second. Each stack of Melt reduces loot, gathering, and Trimp attack by 1% of the current amount. These stacks reset each time a Zone is cleared and cap at 500. Clearing': '调节传送门，将您带到一个充满危机，也充满氡的异世界中。您的战利品获取量变为10倍(氡除外)，资源获取速度变为10倍，且脆皮的攻击力变为5倍，但每秒都会增加一层“熔化”。每层熔化将战利品获取量、资源获取速度和脆皮攻击力减少当前数量的1%。当通过每个区域时层数重置，层数最高为500。通过 ',
    'Melting Point (Zone': '熔点 (区域',
    'or': ' 或者',
    'will complete this Challenge - granting an additional 400% of all Radon collected through Z50. This Challenge is repeatable!': '后可以完成此挑战并额外获得氡，数值等于本次挑战到区域50为止氡获取量的400%。此挑战可重复完成！',
    'You have the Melt challenge active. Tweak the portal to bring you to an alternate reality, where there\'s plenty of risk and Radon. You will gain 10x loot (excluding Radon), 10x gathering, and 5x Trimp attack, but a stack of Melt will accumulate every second. Each stack of Melt reduces loot, gathering, and Trimp attack by 1% of the current amount. These stacks reset each time a Zone is cleared and cap at 500. Clearing': '您目前正在进行熔化挑战。调节传送门，将您带到一个充满危机，也充满氡的异世界中。您的战利品获取量变为10倍(氡除外)，资源获取速度变为10倍，且脆皮的攻击力变为5倍，但每秒都会增加一层“熔化”。每层熔化将战利品获取量、资源获取速度和脆皮攻击力减少当前数量的1%。当通过每个区域时层数重置，层数最高为500。通过 ',
    'Trappapalooza': '捕手道达人',
    'Travel to a dimension where Trimps refuse to breed in captivity, teaching you to stop breeding such weak Trimps. Trimps also seem to release an unfortunate burst of radiation when Trapped in this reality, instantly destroying 10% of your stored Food, Wood, Metal, and Science. So like, be careful of that. Clearing': '前往一个被抓住的脆皮拒绝繁殖的维度。在那里可以让您学会停止繁殖这些弱鸡脆皮。另外，在此异世界中脆皮被抓住时，会释放出一种不幸念波，将当前10%的食物、木头、金属和科学点立刻摧毁。所以，请小心这点。通过 ',
    'Travel to a dimension where Trimps refuse to breed in captivity, teaching you to stop breeding such weak Trimps. Trimps also release an unfortunate burst of radiation when Trapped in this reality, instantly destroying 10% of your stored Food, Wood, Metal, and Science. But you know to be careful of that.': '前往一个被抓住的脆皮拒绝繁殖的维度。在那里可以让您学会停止繁殖这些弱鸡脆皮。另外，在此异世界中脆皮被抓住时，会释放出一种不幸念波，将当前10%的食物、木头、金属和科学点立刻摧毁。您知道的，要小心这点。',
    'You have the Trappapalooza challenge active. Travel to a dimension where Trimps refuse to breed in captivity, teaching you to stop breeding such weak Trimps. Trimps also seem to release an unfortunate burst of radiation when Trapped in this reality, instantly destroying 10% of your stored Food, Wood, Metal, and Science. So like, be careful of that. Clearing': '您目前正在进行捕手道达人挑战。前往一个被抓住的脆皮拒绝繁殖的维度。在那里可以让您学会停止繁殖这些弱鸡脆皮。另外，在此异世界中脆皮被抓住时，会释放出一种不幸念波，将当前10%的食物、木头、金属和科学点立刻摧毁。所以，请小心这点。通过 ',
    'You have the Trappapalooza challenge active. "Travel to a dimension where Trimps refuse to breed in captivity, teaching you to stop breeding such weak Trimps. Trimps also release an unfortunate burst of radiation when Trapped in this reality, instantly destroying 10% of your stored Food, Wood, Metal, and Science. But you know to be careful of that."': '您目前正在进行捕手道达人挑战。前往一个被抓住的脆皮拒绝繁殖的维度。在那里可以让您学会停止繁殖这些弱鸡脆皮。另外，在此异世界中脆皮被抓住时，会释放出一种不幸念波，将当前10%的食物、木头、金属和科学点立刻摧毁。您知道的，要小心这点。',
    'Quagmire': '泥淖',
    'Travel to an extremely muddy dimension. It\'s hard to walk out here, making Overkill useless and Agility difficult. Your Trimps start each run with 100 stacks of Motivated, increasing all Loot gained by 40% per stack (including Radon). After each Zone, your Trimps gain 1 stack of Exhausted, reducing Trimp damage and breed speed by 10% per stack in the World, and 5% per stack in maps (compounding). For every 10 stacks of Exhausted, your Trimps will also attack 100ms slower. You\'ll also have access to run a special map called \'The Black Bog\', which will always scale to Zone level and is such a terrifying map that Exotic Imp-orts are unable to spawn there. Completing \'The Black Bog\' will reduce your Trimps\' Exhausted by 1 stack, but will also reduce their Motivated by 1 stack. Exhausted stacks can be negative, and will increase damage and breed speed. Completing Z70 or reaching 0 Motivated stacks with this Challenge active will end the Challenge, returning the World to normal. If the Challenge is ended by completing Z70, you will gain an additional 150% of all Radon earned.': '前往一个异常泥泞的维度。此维度极难行走，所以超杀无法触发，且敏捷变得更加困难。脆皮初始拥有100层“积极前进”，每层增加40%的资源获取量(包括氡)。通过每个区域以后，脆皮获得1层“疲惫不堪”，每层使脆皮的伤害和繁殖速度在世界中减少10%，在地图中减少5%(效果叠乘)。且每有10层疲惫不堪，脆皮攻击就减慢100ms。但同时，您可以进入一张叫做“黑色泥沼”的地图，此地图等级永远等于区域层数，且无法生成奇异外皮。通过一次黑色泥沼将同时减少1层疲惫不堪和1层积极前进。疲惫不堪层数可以为负数，此时它将提高脆皮伤害及繁殖速度。通过区域70或者积极前进层数到达0后，挑战结束，世界将恢复正常。如果挑战以通过区域70结束的话，那么您还可以额外获得氡，数值等于本次挑战完成前氡获取量的150%。',
    'The Black ': '黑色',
    'Motivated': '积极前进', //包括成就描述
    'Exhausted': '疲惫不堪',
    'You have the Quagmire challenge active. Travel to an extremely muddy dimension. It\'s hard to walk out here, making Overkill useless and Agility difficult. Your Trimps start each run with 100 stacks of Motivated, increasing all Loot gained by 40% per stack (including Radon). After each Zone, your Trimps gain 1 stack of Exhausted, reducing Trimp damage and breed speed by 10% per stack in the World, and 5% per stack in maps (compounding). For every 10 stacks of Exhausted, your Trimps will also attack 100ms slower. You\'ll also have access to run a special map called \'The Black Bog\', which will always scale to Zone level and is such a terrifying map that Exotic Imp-orts are unable to spawn there. Completing \'The Black Bog\' will reduce your Trimps\' Exhausted by 1 stack, but will also reduce their Motivated by 1 stack. Exhausted stacks can be negative, and will increase damage and breed speed. Completing Z70 or reaching 0 Motivated stacks with this Challenge active will end the Challenge, returning the World to normal. If the Challenge is ended by completing Z70, you will gain an additional 150% of all Radon earned.': '您目前正在进行泥淖挑战。前往一个异常泥泞的维度。此维度极难行走，所以超杀无法触发，且敏捷更加困难。脆皮初始拥有100层“积极前进”，每层增加40%的资源获取量(包括氡)。通过每个区域以后，脆皮获得1层“疲惫不堪”，每层使脆皮的伤害和繁殖速度在世界中减少10%，在地图中减少5%(效果叠乘)。且每有10层疲惫不堪，脆皮攻击就减慢100ms。但同时，您可以进入一张叫做“黑色泥沼”的地图，此地图等级永远等于区域层数，且无法生成奇异外皮。通过一次黑色泥沼将同时减少1层疲惫不堪和1层积极前进。疲惫不堪层数可以为负数，此时它将提高脆皮伤害及繁殖速度。通过区域70或者积极前进层数到达0层后，挑战结束，世界将恢复正常。如果挑战以通过区域70结束的话，那么您还可以额外获得氡，数值等于本次挑战完成前氡获取量的150%。',
    'Wither': '凋零',
    'Travel to an ultra scary alternate reality with horrific Bad Guys. Enemies heal for 25% of their maximum health before each attack. If an enemy ever heals itself back to 100% health, your army will fall to despair and instantly wither away. Every enemy slain by your Trimps in the World or World-level Maps grants 1 stack of Hardness to your Trimps (stacking up to 10,000 and increasing Health by 0.1% per stack) and 1 stack of Horror to all enemies (increasing Attack by 0.05% per stack). Whenever a group of Trimps is killed by Wither, Trimps lose half of their stacks of Hardness and block the enemy\'s ability to heal and Wither for an amount of cells equal to 10% of the Hardness stacks lost. Clearing': '前往一个充满了极度可怕敌人的异世界。敌人在每次攻击前恢复最大生命值25%的生命值。如果敌人将生命值恢复到了100%，那么军队将因绝望而直接凋零灭绝。在世界上或者是等同于当前区域数等级的地图中杀死1名敌人后，您可以获得一层“硬化”(最高10000层，每层增加0.1%生命值)，并且使所有敌人获得一层“恐惧”(每层增加0.05%攻击力)。如果脆皮死于凋零，那么脆皮将失去一半的硬化层数，并且在失去的层数数值10%的格子内，敌人无法恢复生命值，也无法触发凋零。通过 ',
    'will complete this Challenge.': '后可以完成此挑战。',
    'Travel to an ultra scary alternate reality with horrific Bad Guys. Enemies heal for 25% of their maximum health before each attack. If an enemy ever heals itself back to 100% health, your army will fall to despair and instantly wither away. Every enemy slain by your Trimps in the World or World-level Maps grants 1 stack of Hardness to your Trimps (stacking up to 10,000 and increasing Health by 0.1% per stack) and 1 stack of Horror to all enemies (increasing Attack by 0.05% per stack). Whenever a group of Trimps is killed by Wither, Trimps lose half of their stacks of Hardness and block the enemy\'s ability to heal and Wither for an amount of cells equal to 10% of the Hardness stacks lost.': '前往一个充满了极度可怕敌人的异世界。敌人在每次攻击前恢复最大生命值25%的生命值。如果敌人将生命值恢复到了100%，那么军队将因绝望而直接凋零灭绝。在世界上或者是等同于当前区域数等级的地图中杀死1名敌人后，您可以获得一层“硬化”(最高10000层，每层增加0.1%生命值)，并且使所有敌人获得一层“恐惧”(每层增加0.05%攻击力)。如果脆皮死于凋零，那么脆皮将失去一半的硬化层数，并且在失去的层数数值10%的格子内，敌人无法恢复生命值，也无法触发凋零。',
    'Hardened': '硬化',
    'Horror': '恐惧',
    'Wither Immunity': '免疫凋零',
    'Enemies cannot heal or inflict Wither while your Trimps have Wither Immunity.': '当脆皮免疫凋零时，敌人无法恢复生命值，也无法触发凋零。',
    'You have the Wither challenge active. Travel to an ultra scary alternate reality with horrific Bad Guys. Enemies heal for 25% of their maximum health before each attack. If an enemy ever heals itself back to 100% health, your army will fall to despair and instantly wither away. Every enemy slain by your Trimps in the World or World-level Maps grants 1 stack of Hardness to your Trimps (stacking up to 10,000 and increasing Health by 0.1% per stack) and 1 stack of Horror to all enemies (increasing Attack by 0.05% per stack). Whenever a group of Trimps is killed by Wither, Trimps lose half of their stacks of Hardness and block the enemy\'s ability to heal and Wither for an amount of cells equal to 10% of the Hardness stacks lost. Clearing': '您目前正在进行凋零挑战。前往一个充满了极度可怕敌人的异世界。敌人在每次攻击前恢复最大生命值25%的生命值。如果敌人将生命值恢复到了100%，那么军队将因绝望而直接凋零灭绝。在世界上或者是等同于当前区域数等级的地图中杀死1名敌人后，您可以获得一层“硬化”(最高10000层，每层增加0.1%生命值)，并且使所有敌人获得一层“恐惧”(每层增加0.05%攻击力)。如果脆皮死于凋零，那么脆皮将失去一半的硬化层数，并且在失去的层数数值10%的格子内，敌人无法恢复生命值，也无法触发凋零。通过 ',
    'You have the Wither challenge active. "Travel to an ultra scary alternate reality with horrific Bad Guys. Enemies heal for 25% of their maximum health before each attack. If an enemy ever heals itself back to 100% health, your army will fall to despair and instantly wither away. Every enemy slain by your Trimps in the World or World-level Maps grants 1 stack of Hardness to your Trimps (stacking up to 10,000 and increasing Health by 0.1% per stack) and 1 stack of Horror to all enemies (increasing Attack by 0.05% per stack). Whenever a group of Trimps is killed by Wither, Trimps lose half of their stacks of Hardness and block the enemy\'s ability to heal and Wither for an amount of cells equal to 10% of the Hardness stacks lost."': '您目前正在进行凋零挑战。前往一个充满了极度可怕敌人的异世界。敌人在每次攻击前恢复最大生命值25%的生命值。如果敌人将生命值恢复到了100%，那么军队将因绝望而直接凋零灭绝。在世界上或者是等同于当前区域数等级的地图中杀死1名敌人后，您可以获得一层“硬化”(最高10000层，每层增加0.1%生命值)，并且使所有敌人获得一层“恐惧”(每层增加0.05%攻击力)。如果脆皮死于凋零，那么脆皮将失去一半的硬化层数，并且在失去的层数数值10%的格子内，敌人无法恢复生命值，也无法触发凋零。',
    'Revenge': '复仇',
    'Travel to an exceptionally harsh dimension filled with vengeful creatures, including the Trimps. Enemies have 10x health on even zone numbers. If your army is killed at any point, any overkill damage will be applied 750% to the next group of Trimps to fight. Any time a group of Trimps is killed by this Overkill damage, your Trimps gain a stack of \'Revenge\', increasing their Attack and Health by 20% (additive). However if your Trimps ever reach 20 stacks of Revenge, you will instantly fail the Challenge. Clearing': '前往一个包括脆皮在内所有生物睚眦必报的极端严苛维度。在偶数区域内敌人生命值变为10倍。如果军队被敌人击杀，下一队脆皮将受到溢出伤害750%的伤害。每有一队脆皮死于溢出伤害，脆皮将获得1层“复仇”，每层复仇增加20%攻击力和生命值(相互叠加)。但如果脆皮复仇层数到达了20层，挑战将失败。在复仇层数小于20的前提下通过 ',
    'with less than 20 stacks of Revenge will complete this Challenge.': '后可以完成此挑战。',
    'You have the Revenge challenge active. Travel to an exceptionally harsh dimension filled with vengeful creatures, including the Trimps. Enemies have 10x health on even zone numbers. If your army is killed at any point, any overkill damage will be applied 750% to the next group of Trimps to fight. Any time a group of Trimps is killed by this Overkill damage, your Trimps gain a stack of \'Revenge\', increasing their Attack and Health by 20% (additive). However if your Trimps ever reach 20 stacks of Revenge, you will instantly fail the Challenge. Clearing': '您目前正在进行复仇挑战。前往一个包括脆皮在内所有生物睚眦必报的极端严苛维度。在偶数区域内敌人生命值变为10倍。如果军队被敌人击杀，下一队脆皮将受到溢出伤害750%的伤害。每有一队脆皮死于溢出伤害，脆皮将获得1层“复仇”，每层复仇增加20%攻击力和生命值(相互叠加)。但如果脆皮复仇层数到达了20层，挑战将失败。在复仇层数小于20的前提下通过 ',
    'Quest': '任务',
    'Travel to an alternate reality where Trimps really love questing. Enemies in this reality gain 10% extra health each zone starting at Z6 (compounding). However, you\'ll also get a random Quest each Zone starting at 6. Completing this quest will grant a 2x Radon multiplier for the rest of the Zone (does not stack), and will increase your Trimps\' attack by 10% for the rest of the Challenge (compounding). Check messages or the Zone info tooltip for quest progress. Clearing': '前往一个脆皮喜欢任务的异世界。此异世界中敌人从区域6开始，每层增加10%生命值(相互叠乘)。但同样从区域6开始，您每层也会获得一个随机任务。完成一个任务后，在此区域剩下的格子内氡获取量变为2倍(不叠加)，且脆皮攻击力在挑战期间增加10%(相互叠乘)。任务进度可以在消息框或区域信息提示框处查看。通过 ',
    'will complete this Challenge, returning Trimp Attack and Enemy Health to normal.': '后可以完成此挑战，并使脆皮攻击力和敌人生命值恢复正常。',
    'Travel to an alternate reality where Trimps really love questing. Enemies in this reality gain 10% extra health each zone starting at Z6 (compounding). However, you\'ll also get a random Quest each Zone starting at 6. Completing this quest will grant a 2x Radon multiplier for the rest of the Zone (does not stack), and will increase your Trimps\' attack by 10% for the rest of the Challenge (compounding). Check messages or the Zone info tooltip for quest prorgress.': '前往一个脆皮喜欢任务的异世界。此异世界中敌人从区域6开始，每层增加10%生命值(相互叠乘)。但同样从区域6开始，您每层也会获得一个随机任务。完成一个任务后，在此区域剩下的格子内氡获取量变为2倍(不叠加)，且脆皮攻击力在挑战期间增加10%(相互叠乘)。任务进度可以在消息框或区域信息提示框处查看。',
    'Quintuple (x5) your food': '将食物变为5倍',
    'Quintuple (x5) your wood': '将木头变为5倍',
    'Quintuple (x5) your metal': '将金属变为5倍',
    'Quintuple (x5) your gems': '将宝石变为5倍',
    'Quintuple (x5) your science': '将科学点变为5倍',
    'Double your food': '将食物变为2倍',
    'Double your wood': '将木头变为2倍',
    'Double your metal': '将金属变为2倍',
    'Double your gems': '将宝石变为2倍',
    'Double your science': '将科学点变为2倍',
    'Complete 5 Maps at Zone level': '通过5张等级为区域层数的地图',
    'One-shot 5 world enemies (Overkill is disabled in World until complete)': '秒杀世界上的5名敌人(直到任务完成为止，超杀在世界上暂时失效)',
    'Don\'t let your shield break before Cell': '护盾不可破碎，直到到达格子',
    'Don\'t run a map before Cell': '不进入地图，直到到达格子',
    'Buy a Smithy': '建造一个铁匠铺',
    'Quest: Don\'t let your shield break before Cell 100. Progress: Quest Complete!': '任务内容：护盾不可破碎，直到到达格子100。进度：任务完成！',
    'Quest: Don\'t let your shield break before Cell 100. Progress: Failed!': '任务内容：护盾不可破碎，直到到达格子100。进度：任务失败！',
    'Quest: Don\'t let your shield break before Cell 100. Progress: Still Earnable!': '任务内容：护盾不可破碎，直到到达格子100。进度：仍然可获得！',
    'Quest: Don\'t run a map before Cell 100. Progress: Quest Complete!': '任务内容：不进入地图，直到到达格子100。进度：任务完成！',
    'Quest: Don\'t run a map before Cell 100. Progress: Failed!': '任务内容：不进入地图，直到到达格子100。进度：任务失败！',
    'Quest: Don\'t run a map before Cell 100. Progress: Still Earnable!': '任务内容：不进入地图，直到到达格子100。进度：仍然可获得！',
    'Quest: Buy a Smithy. Progress: Quest Complete!': '任务内容：建造一个铁匠铺。进度：任务完成！',
    'Quest: Buy a Smithy. Progress: 0 / 1': '任务内容：建造一个铁匠铺。进度： 0 / 1',
    '. Good luck!': ' 。祝您好运！',
    'You have the Quest challenge active. Travel to an alternate reality where Trimps really love questing. Enemies in this reality gain 10% extra health each zone starting at Z6 (compounding). However, you\'ll also get a random Quest each Zone starting at 6. Completing this quest will grant a 2x Radon multiplier for the rest of the Zone (does not stack), and will increase your Trimps\' attack by 10% for the rest of the Challenge (compounding). Check messages or the Zone info tooltip for quest progress. Clearing': '您目前正在进行任务挑战。前往一个脆皮喜欢任务的异世界。此异世界中敌人从区域6开始，每层增加10%生命值(相互叠乘)。但同样从区域6开始，您每层也会获得一个随机任务。完成一个任务后，在此区域剩下的格子内氡获取量变为2倍(不叠加)，且脆皮攻击力在挑战期间增加10%(相互叠乘)。任务进度可以在消息框或区域信息提示框处查看。通过 ',
    'You have the Quest challenge active. "Travel to an alternate reality where Trimps really love questing. Enemies in this reality gain 10% extra health each zone starting at Z6 (compounding). However, you\'ll also get a random Quest each Zone starting at 6. Completing this quest will grant a 2x Radon multiplier for the rest of the Zone (does not stack), and will increase your Trimps\' attack by 10% for the rest of the Challenge (compounding). Check messages or the Zone info tooltip for quest prorgress."': '您目前正在进行任务挑战。前往一个脆皮喜欢任务的异世界。此异世界中敌人从区域6开始，每层增加10%生命值(相互叠乘)。但同样从区域6开始，您每层也会获得一个随机任务。完成一个任务后，在此区域剩下的格子内氡获取量变为2倍(不叠加)，且脆皮攻击力在挑战期间增加10%(相互叠乘)。任务进度可以在消息框或区域信息提示框处查看。',
    'Archaeology': '考古学',
    'Travel to a dimension with lots of buried Relics. When starting this challenge, you\'ll be granted access to 5 special new upgrades called Relics that grant a compounding increase to your Attack, Breed Speed, Radon, Resource Gain (Food, Wood, Metal, Science and Gems), and one that decreases Enemy Attack. These upgrades all cost science and increase in cost whenever any of them are purchased. However, your Attack, Breed Speed, Radon, Resource Gain, and Enemy Health Relics all decrease by 1 Relic level every Zone and can go negative. All Radon drops have a base increase of +200% in this dimension, but taking the time to find the relics and extra Radon disables the possibility of using Overkill in the World. Completing': '前往一个埋藏了大量遗物的维度。开始此挑战后，您可以获得5个特殊的遗物升级。遗物升级分别可以提升脆皮攻击力、繁殖速度、氡获取量、非氡资源获取量(食物、木头、金属、科学点和宝石)，另外还有一个减少敌人攻击力的遗物升级。这些升级消耗科学点，且在购买了其中任何一个升级以后，所有的升级花费都会增加。不过，您的攻击力、繁殖速度、氡获取量、非氡资源获取量、敌人攻击力遗物每通过1个区域就降低1级，而且等级可以为负数。此维度中氡基础获取量增加200%，但由于需要花费时间去搜寻遗物和额外的氡，因此无法在世界上触发超杀。在此挑战激活的前提下通过区域 ',
    'with this Challenge active will grant an additional +500% of all Radon earned. After the first time you complete this Challenge, you\'ll gain the ability to create maps with Small and Large Research Caches!': '后，可额外获得氡，数值等于本次挑战完成前氡获取量的500%。并且首次完成此挑战以后，您就可以制造前缀为小研究储藏箱和大研究储藏箱的地图了。',
    'The Archaeology Automator is any Archaeologist\'s best friend (once they figure out how to use it)! Below you\'ll need to enter a string for the Automator to parse. Your string should be separated by commas, and will indicate priority for Relic purchases.': '自动考古是考古学家们最好的朋友(只要他们明白了使用方法)！最下方的输入框中，您可以输入一串字符，让自动考古进行分析。您输入的字符需要用英文逗号来分隔，并且将决定遗物升级的顺序。',
    'An example of a viable string would be \'-10a,5s,5r,10s,10r,5a\'.': '可行的字符串可举例如下：“-10a,5s,5r,10s,10r,5a”。',
    'Use \'a\' for trimp Attack, \'e\' for Enemy attack, \'r\' for Radon, \'s\' for reSource, and \'b\' for Breed speed.': 'a代表脆皮攻击力，e代表敌人攻击力，r代表氡获得量，s代表非氡资源获取量，b代表繁殖速度。',
    'As previously stated, each rule (separated by commas) in this string dictates the priority of that particular upgrade. With the given example string, the Automator will first buy Trimp Attack Relics until they\'re at or above -10, then will attempt to get the Resource Relic up to positive 5 points, then it will do the same with Radon. Once all of these Relics lose a point, the Automator will go back and fill Attack back up to -10 first, then Resource back up to 5, then Radon back to 5, then will move on to trying to get Resource to 10. Each time points are lost in a Relic, or if the Automator string is modified, the Automator will start back at the first rule and work its way back up.': '如上所述，字符串中每一条规则(由逗号分隔开来的)决定了特定升级的顺序。如果输入上面举例的字符串，那么自动考古将会先购买脆皮攻击力遗物，直到它达到或者超过-10级，接下来它将会购买非氡资源获取量遗物，直到5级，最后再购买氡获取量遗物。之后以此类推。当所有遗物等级减少1级以后，或者自动考古字符串变更了以后，自动考古将从头读取字符串，重新按照字符串的顺序从头开始升级，直到字符串末尾。注意：请正确输入字符串(只使用上述五个字母，字母前后正确使用数字和逗号，并且数字不可超过50，规则不可超过25条)，否则上方会有红字报错。',
    'Purchase when the Relic cost is less than or equal to': '当遗物的花费小于或等于总科学点数的',
    'of your total Science': '时，购买遗物升级',
    'Hold Ctrl while clicking any relic upgrade to access the Relic Automator!': '按下Ctrl键再点击任意遗物升级，可进入自动考古设置！',
    'Attack Relic': '脆皮攻击力遗物',
    'Enemy Attack Relic': '敌人攻击力遗物',
    'Radon Relic': '氡获取量遗物',
    'Resource Relic': '非氡资源获取量遗物',
    'Breed Relic': '繁殖速度遗物',
    'You have the Archaeology challenge active. Travel to a dimension with lots of buried Relics. When starting this challenge, you\'ll be granted access to 5 special new upgrades called Relics that grant a compounding increase to your Attack, Breed Speed, Radon, Resource Gain (Food, Wood, Metal, Science and Gems), and one that decreases Enemy Attack. These upgrades all cost science and increase in cost whenever any of them are purchased. However, your Attack, Breed Speed, Radon, Resource Gain, and Enemy Health Relics all decrease by 1 Relic level every Zone and can go negative. All Radon drops have a base increase of +200% in this dimension, but taking the time to find the relics and extra Radon disables the possibility of using Overkill in the World. Completing': '您目前正在进行考古学挑战。前往一个埋藏了大量遗物的维度。开始此挑战后，您可以获得5个特殊的遗物升级。遗物升级分别可以提升脆皮攻击力、繁殖速度、氡获取量、非氡资源获取量(食物、木头、金属、科学点和宝石)，另外还有一个减少敌人攻击力的遗物升级。这些升级消耗科学点，且在购买了其中任何一个升级以后，所有的升级花费都会增加。不过，您的攻击力、繁殖速度、氡获取量、非氡资源获取量、敌人攻击力遗物每通过1个区域就降低1级，而且等级可以为负数。此维度中氡基础获取量增加200%，但由于需要花费时间去搜寻遗物和额外的氡，因此无法在世界上触发超杀。在此挑战激活的前提下通过区域 ',
    'Mayhem': '暴乱',
    'Travel to a very hectic dimension. The final Cell of each Zone is a Poisonous boss enemy, and all Map enemies are also Poisonous. Poisonous Enemies stack 20% of their damage on your Trimps as poison, which is taken as damage after each attack until your Trimps die. Each Zone starts with 1000 stacks of Mayhem, and each stack increases the damage and health of the final Cell Boss Enemy for that Zone by 10%. Completing a map reduces the Mayhem stacks for that Zone by 1 and an additional 1 for each level of the Map above the Zone\'s level (For example, a level 15 map will remove 3 stacks per completion when at Z13). Completing': '前往一个非常狂热的维度。每个区域最后一格的首领敌人是带毒的，地图中的所有敌人同样带毒。带毒的敌人每次攻击后，将它们攻击力的20%累积为毒伤害，脆皮每次攻击后，都会受到相应的毒伤害，直到脆皮死亡后毒伤害清零。您进入每个区域时获得1000层“暴乱”，每层暴乱提升区域最后一格首领10%的攻击力和生命值。完成地图可以减少1层暴乱，且该地图每高于当前区域1级，就可以额外减少1层暴乱(例如：在区域13完成一张15级的地图以后，可以减少3层暴乱)。在此挑战激活的前提下通过区域 ',
    'with this Challenge active will grant your Trimps a permanent, stacking, additive': '后，宇宙2中的氡，及宇宙1和宇宙2中的脆皮攻击力和生命值永久增加 ',
    'bonus to Radon in U2 and to Trimp Attack and Health in Universes 1 and 2. Each time Mayhem is completed, the reward for next time increases by an additional 10% and Enemies gain 3x damage and health for all future runs of Mayhem.': '(相互叠加)。且每完成一次暴乱挑战，下次挑战的奖励就增加20%，但后续暴乱挑战中，敌人也会增加3倍攻击力和生命值。',
    'Your Trimps are Poisoned! They take': '脆皮中毒了！每次攻击后受到 ',
    'damage after each attack. Poison bypasses Prismatic Shield!': '点伤害。毒伤害可以穿透棱镜护盾！',
    'You have the Mayhem challenge active. Travel to a very hectic dimension. The final Cell of each Zone is a Poisonous boss enemy, and all Map enemies are also Poisonous. Poisonous Enemies stack 20% of their damage on your Trimps as poison, which is taken as damage after each attack until your Trimps die. Each Zone starts with 1000 stacks of Mayhem, and each stack increases the damage and health of the final Cell Boss Enemy for that Zone by 10%. Completing a map reduces the Mayhem stacks for that Zone by 1 and an additional 1 for each level of the Map above the Zone\'s level (For example, a level 15 map will remove 3 stacks per completion when at Z13). Completing': '您目前正在进行暴乱挑战。前往一个非常狂热的维度。每个区域最后一格的首领敌人是带毒的，地图中的所有敌人同样带毒。带毒的敌人每次攻击后，将它们攻击力的20%累积为毒伤害，脆皮每次攻击后，都会受到相应的毒伤害，直到脆皮死亡后毒伤害清零。您进入每个区域时获得1000层“暴乱”，每层暴乱提升区域最后一格首领10%的攻击力和生命值。完成地图可以减少1层暴乱，且该地图每高于当前区域1级，就可以额外减少1层暴乱(例如：在区域13完成一张15级的地图以后，可以减少3层暴乱)。在此挑战激活的前提下通过区域 ',
    //挑战相关结束
    //特权相关
    'Looting II': '劫掠 II',
    'Apply your skills at salvaging things from the Spire to increase all loot gained by 0.25% per level. The price for this perk increases additively, and each level will cost exactly 10000 more than the previous level.': '将您搜刮尖塔的本事用在劫掠上，每级提升0.25%劫掠效果。此特权的价格线性增加，每级都比上一级贵10000。',
    'Carpentry II': '木工 II',
    'You\'ve learned to look more objectively at the no longer mysterious building designs, allowing you to increase housing space by 0.25% per level. This multiplies on top of Carpentry I, but the bonus stacks additively. The price for this perk also increases additively, and each level will cost exactly 10000 more than the previous level.': '那些建筑图纸对您来说已经不再神秘了，您也学会了如何更客观地看待它们，每级可以增加0.25%居住空间。此加成与木工的效果叠乘，但加成是线性的。此特权的价格也是线性增加的，每级都比上一级贵10000。',
    'Motivation II': '鼓舞 II',
    'Corruption and impending doom are great motivators to work a bit harder! Increases Trimp gather speed by 1% per level. The price for this perk increases additively, and each level will cost exactly 1000 more than the previous level.': '腐化与死亡威胁可以更好地鼓舞脆皮们工作！每级提升脆皮1%的资源获取速度。此特权的价格线性增加，每级都比上一级贵1000。',
    'Power II': '力量 II',
    'You find strength in the desire to some day return home. Anger your Trimps by making them listen to you talk about it all the time, increasing their damage by 1% per level. The price for this perk increases additively, and each level will cost exactly 500 more than the previous level.': '回家的渴望给了您力量。对着脆皮一直不停地说，以此激怒它们从而每级增加1%攻击力。此特权的价格线性增加，每级都比上一级贵500。',
    'Toughness II': '坚韧 II',
    'You feel more grounded as you remember where you came from. Spread your toughness to your Trimps, increasing health by 1% per level. The price for this perk increases additively, and each level will cost exactly 500 more than the previous level.': '想起故乡在何方以后，您感觉更踏实了。用这些教会脆皮何为坚韧，每级增加1%生命值。此特权的价格线性增加，每级都比上一级贵500。',
    'Capable': '能力',
    'You can sense great power within Fluffy, but he\'ll need some training. Each level of Capable allows Fluffy to gain 1 level of Experience. Respeccing to remove Capable will temporarily remove any bonuses associated with Fluffy\'s level and Experience, but all Exp will be saved until you add points back. Each level of Capable is 10x more expensive than the last, and buying the first level will allow Fluffy to take Portals with you.': '绒绒潜力巨大，但它需要接受训练。每级能力特权都可以让绒绒多获得1级经验值。此特权洗点后，绒绒相应的等级和经验值加成会暂时失效，但重新加点后一切就会恢复。每级能力特权都比上一级贵10倍，购买1级以后，绒绒可以跟您一起通过传送门。',
    'Cunning': '灵巧',
    'Fluffy demands more helium! Each level of Cunning will increase the final amount of Experience Fluffy gains from each Zone by 25% (additive).': '绒绒想要更多的氦！每级灵巧将绒绒每个区域获得的经验值增加25%(相互叠加)。',
    'Curious': '好奇',
    'Fluffy is coming along, but he\'s coming along slowly. Each point of Curious will speed up Fluffy\'s progression by adding 60 Exp to the base amount he gains per Zone clear.': '绒绒在进步, 但还不够快。每级好奇可以将通过区域的基础经验奖励增加60。',
    'Classy': '上等',
    'Overkill': '超杀',
    'You have overcome the otherworldly objective of obtaining Overkill, outstanding! Each level of this perk will allow 0.5% of your overkill damage to harm the next enemy. If this damage kills the next enemy, you will lose no time moving through that cell. Maximum of 30 levels.': '您已经获得了超凡脱俗的超杀升级，非常出色！每级可以将0.5%的溢出伤害用来攻击下个敌人。如果下个敌人被此伤害击杀，那么您就可以直接通过该格子了。最高30级。',
    'Resourceful': '足智多谋',
    'Spending time with limited maps has taught you how to be more resourceful. Each level will allow you to spend 5% fewer resources': '经历过只能制造有限的地图以后，您学会了如何变得更加足智多谋。每级可以让所有建筑 ',
	'per level on all structures.': '少花费5%的资源。',
    'Coordinated': '协同', //包括成就描述
    'Use knowledge gained while studying Coordinated Bad Guys to reduce the amount of Trimps required per level of Coordination by': '通过研究协同作战的敌人，您明白了如何减少协作升级所需的脆皮。每级可以将协作升级所需的脆皮数量减少',
	'of current amount (compounding': '(叠乘',
	'while keeping the stat bonus the same.': '同时协作的加成不变。',
	'Siphonology': '虹吸学',
    'Use strategies discovered in alternate dimensions to siphon Map Bonus Damage stacks from lower level maps. For each level of Siphonology, you will earn stacks from maps one level lower than your current Zone number. Maximum of 3 levels.': '在其他维度中，您找到了从更低级的地图中虹吸地图奖励的方法。每级虹吸学可以从比当前区域低1级的地图中获取地图奖励。最高3级。',
    'Anticipation': '预期',
	'Resilience': '弹性',
    'Use your acquired skills in Trimp strengthening to gain a': '利用您的脆皮强化技能，使脆皮生命值每级增加',
	'compounding': '(效果叠乘)',
	'increase to total Trimp health.': '。',
	'Meditation': '冥想',
    'Your experiences in the Dimension of Strong Things have taught you the value of taking your time. Every level of Meditation will increase your Trimps\' gather speed by 1% for every 10 minutes spent on the same Zone, up to 1 hour, even when offline. This bonus is reset after clearing the current Zone. Maximum of 7 levels.': '经历过那个敌人强化的维度后，您明白了慢条斯理的价值。每在同一个区域停留10分钟，每级冥想就可以使脆皮的资源获取速度增加1%。此加成时间上限1小时，离线生效。通过当前区域后此加成重置。最高7级。',
    'Relentlessness': '无情',
    'You\'ve seen too many Trimps fall, it\'s time for more aggressive training. Bringing back these memories will cause your Trimps to gain a 5% chance to critically strike for +130% damage at level 1, and they will gain an additional 5% crit chance and 30% crit damage per level. Maximum of 10 levels.': '您见过太多脆皮死去了，应该让它们进行更积极的训练。带回这些记忆后，脆皮在第1级可以获得5%暴击率，暴击伤害增加130%，且此后每级增加5%暴击率，暴击伤害30%。最高10级。',
    'Greed': '贪婪',
    'Feeling poor? Just get more resources! Each level increases all loot gained by 2.5% (compounding). Starting once you have 600 Tributes, every Tribute you purchase (up to 1250) will': '感觉太穷了？那就想办法多搞点资源！每级可以使所有战利品获取量增加2.5%(相互叠乘)。而且当拥有600贡品后(效果上限1250贡品)，每个贡品还可以使该加成的数值 ',
    'add': '增加',
    '0.015% to the compounding bonus. Every 25th Tribute you purchase will also add an additional 0.35% to the compounding bonus. For example: If you have 750 Tributes, you\'ll earn a 6.8% compounding Loot bonus for each level of Greed.': '0.015%。另外每25个贡品还会使此数值额外再增加0.35%。举个例子：如果您有750个贡品，那么每级贪婪的叠乘加成为6.8%。',
    'Tenacity': '坚持', //包括成就描述
    'If things seem tough, just try hitting them harder. Each level increases your Trimps\' Attack by 10% (compounding). For every 4 minutes you spend on one Zone, 1% is': '如果敌人皮糙肉厚的话，只需要更用力就行了。每级提升脆皮10%的攻击力(相互叠乘)。并且每在一个区域停留4分钟，该加成的数值再 ',
    'added': '增加',
    'to the compounding bonus, with a max of 2 hours and resetting back to 10% at the start of each new Zone. For example: If you have spent an hour on one Zone, you\'ll earn a 25% compounding Attack bonus for each level of Tenacity.': '1%，此加成时间上限为2小时，进入新区域以后重置回10%。举个例子：如果您在一个区域停留了1个小时，那么每级坚持的叠乘加成为25%。',
    'Criticality': '暴击限界',
    'When your Critical Strikes just aren\'t doing enough, try Criticality! Each level increases your Trimps\' Critical Strike Damage by 10% (additive).': '觉得暴击伤害不够看？试试暴击限界吧！每级提升脆皮10%的暴击伤害(相互叠加)。',
    'Equality': '平等',
    'Produce a Calming Aura from your Portal Device, reducing the Attack of Bad Guys AND Trimps by 10% (compounding). You can enable Equality Scaling, which causes Equality to start inactive and gain one level each time your Trimps die up to your purchased Perk level.': '用传送门装置发出一个镇静力场，同时减少脆皮和敌人10%的攻击力(相互叠乘)。您也可以激活平等缩放，激活后，平等在一开始不生效，而脆皮每阵亡一次，平等效果增加一级，最高等于您的平等特权等级。',
	'Carpentry': '木工',
    'You\'ve built quite a few houses and you\'re getting pretty good at it. Bringing your expertise in construction back through the portal will allow you to house 10% more Trimps per level': '您已经建了很多房子，干这事您已经很熟练了。之前建造的心得使您每级可以比上一级多容纳10%的脆皮',
	'than the current amount (compounds': '(相互叠乘',
    'Artisanistry': '手艺娴熟',
    'You\'re beginning to notice ways to make equally powerful equipment with considerably fewer resources. Bringing back these new ideas will allow you to spend 5% fewer resources': '对于如何用更少的资源制造同样强度的装备，您已经有了头绪。每级可以使您在制造装备时 ',
    'than the current cost': '比上一级',
    'per level on all equipment.': '少花费5%的资源。',
	'Range': '范围',
    'Use your new-found leadership skills in order to increase the minimum damage your Trimps deal by 2% per level. Stacks up to 10 times, doesn\'t affect max damage. At 10 levels, you will get a minimum of 100% benefit from all attack damage per strike.': '您新发现的领导技艺可以帮助提高脆皮的最低伤害。每级提高2%脆皮的最低伤害。最高10级，且不会影响最高伤害。10级时，每次攻击至少造成100%的伤害。',
    'Agility': '敏捷',
    'Crank your portal into overdrive, increasing the clock speed of the Universe. Each level reduces the time between Trimp and Bad Guy attacks by': '把您的传送门调成超速，增加宇宙中的时间流速。每级可使脆皮和敌人的攻击间隔比上一级减少',
	'of the current time (compounds': '(相互叠乘',
	'. Maximum of 20 levels.': '。最高20级。',
    'Bait': '诱饵',
    'A few of these in your traps are sure to bring in extra Trimps. Each level allows traps to catch 1 extra Trimp.': '放点这些东西在陷阱里，就肯定能多抓到一些脆皮。每级使陷阱多抓1个脆皮。',
    'Trumps': '王牌',
    'Practicing aggressive strategizing allows you to earn 1 extra max population from each battle territory bonus.': '实施激进的战略以后，每个战斗领土加成可以额外获得1点人口上限。',
    'Pheromones': '信息素',
    'Bring some pheromones with you to ensure that your Trimps will permanently breed 10% faster.': '带上一些信息素，可以确保脆皮繁殖速度永久增加10%。',
    'Packrat': '囤积成瘾',
    'Study the ancient, secret Trimp methods of hoarding. Each level increases the amount of stuff you can shove in each Barn, Shed, and Forge by 20%.': '研究古老神秘的贮藏方法。谷仓、窝棚和锻造厂每级增加20%存储上限。',
    'Motivation': '鼓舞',
    'Practice public speaking with your Trimps. Each level increases the amount of resources that workers produce by 5%.': '练习在脆皮面前进行演讲。每级增加5%工人的资源获取量。',
    'Power': '力量',
    'Trimps learn through example. Spending some time bench pressing dead Elephimps should inspire any future Trimps to become stronger too. Adds 5% attack permanently to your Trimps.': '脆皮通过实例来学习。花点时间用死去的脆皮象练习卧推可以让它们变得更加强大。永久增加脆皮5%攻击力。',
    'Toughness': '坚韧',
    'Pay your Trimps to knock you around a little bit. By learning to not be such a wuss, your Trimps will be less wussy as well. Adds 5% health permanently to your Trimps.': '让您的脆皮跟您对着比划几下，好好学学什么是纯爷们。永久增加脆皮5%生命值。',
    'Looting': '劫掠',
    'Walk back through the empty Zones, learning how to milk them for every last drop. Each level permanently increases the amount of resources gained from battle by 5%.': '回到之前的区域，学会如何榨干敌人身上的每一个铜板。每级永久增加5%战利品获取量。',
    'Prismal': '棱镜化',
    'Crystallize some Radon, creating an interdimensional Prism that you can carry back through Portals. Each level adds 1% to your Trimps\' Prismatic Shield and makes your Trimps feel 5% more comfortable in battle. Once you have 20 or more points of Prismal, you will automatically collect Prismalicious from the Prismatic Palace after completing Z20.': '将一些氡晶化，制造一个超次元的棱镜，这样就可以带着它通过传送门了。每级增加1%的棱镜护盾，并且可以使脆皮在战斗中舒适度增加5%（译者注：后半句无实际效果）。当棱镜化特权等级到达20级以上后，您就可以在通过区域20后自动获得棱镜宫殿的优质棱镜升级。',
    //特权相关结束
    //专精相关
    'Portal Generator': '传送门发生器',
    'Unlock Portal immediately after clearing Z20.': '通过区域20以后立刻解锁传送门。',
    'Bionic Magnet I': '仿生磁铁 I',
    'Automatically pick up each level of Bionic Wonderland (BW) as you pass a BW Zone. Will not work if you have already missed any BWs this run, or if you reach a Zone higher than any BW you have ever cleared before.': '自动通过仿生仙境，如果之前已经错过仿生仙境，或者之前未手动通过该层仿生仙境，则无效。',
    'In addition, give all current and future copies of Bionic Wonderland the \'Fast Attacks\' special modifier.': '另外，所有仿生仙境地图视为具有“快速进攻”特殊修饰符。',
    'Turkimp Tamer I': '脆皮火鸡饲主 I',
    'Increases the chance of finding a Turkimp by 33%, the bonus time from each Turkimp by 5 minutes, and increases the time cap by 10 minutes.': '脆皮火鸡出现率增加33%，加成持续时间增加5分钟，加成上限时间增加10分钟。',
    'Home Detector': '家园探测器',
    'Unlock Mansion, Hotel, Nursery, Resort, Gateway, Wormhole, and Collector automatically when passing the Zone they drop at.': '通过对应区域后立刻解锁豪宅、宾馆、托儿所、度假村、维度裂隙、虫洞和汲能设施。',
    'Bounty Hunter': '赏金猎人',
    'Unlock Bounty immediately after clearing Z15.': '通过区域15后立刻解锁赏金升级。',
    'Explorer Aura I': '探险家光环 I',
    'Automatically picks up SpeedExplorer books when you pass their Zone.': '通过对应区域后立刻解锁探险家加速升级。',
    'Void Power I': '虚空力量 I',
    'Your Trimps gain 15% attack and health inside Void Maps.': '虚空地图中脆皮增加15%攻击力和生命值。',
    'Metallic Coat': '金属外套',
    'Reduce the amount of enemy damage that can pierce block by 25%.': '降低敌人25%的格挡穿透。',
    'Heirnuum I': '传家虚物 I',
    'You can spend an extra 10% of your Nu on your Heirlooms, bringing the total to 60%.': '每个传家宝的可使用虚空物质上限额外增加10%，总计可达到虚空物质总量的60%。',
    'Herbalist': '神农',
    'Headstart I': '先声夺人 I',
    'Corruption begins 5 levels earlier, at Zone 176.': '腐化提前5个区域，在区域176出现。',
    'Scryhard I': '努力占卜 I',
    'When fighting Corrupted or Healthy cells in Scryer Formation, grants 50% more Dark Essence and doubles your attack.': '当使用占卜者阵型与腐化或健康敌人作战时，黑暗精华获取量额外增加50%，攻击力翻倍。',
    'When fighting Corrupted cells in Scryer Formation, grants 50% more Dark Essence and doubles your attack.': '当使用占卜者阵型与腐化敌人作战时，黑暗精华获取量额外增加50%，攻击力翻倍。',
    'Void Power II': '虚空力量 II',
    'Your Trimps gain an additional 20% attack and health inside Void Maps.': '虚空地图中脆皮再度增加20%攻击力和生命值。',
    'Map Reducer I': '地图减压 I',
    'Reduces the starting point of the Low Map Level Loot Penalty by 1 level. This allows you to earn the same amount of loot by doing a map at your current Zone number, or at your current Zone number minus 1.': '将地图中劫掠的减成起始点降低1层。在跟区域相同层地图或比区域低1层的地图中劫掠的资源量相等。',
    'King of Bones I': '骨头之王 I',
    'Double the chance for a Megaskeletimp to appear instead of a Skeletimp.': '脆皮超级骷髅取代脆皮骷髅出现的概率翻倍。',
    'Safe Mapping': '安全绘图',
    'Your Trimps gain +100% health in maps.': '脆皮在地图中生命值翻倍。',
    'Headstart II': '先声夺人 II',
    'Corruption begins an additional 10 levels earlier, at Zone 166.': '腐化再提前10个区域, 在区域166出现。',
    'Legs for Days': '日残腿法',
    'Gain +50% attack when running a Daily Challenge.': '进行日常挑战时攻击力增加50%。',
    'Hyperspeed I': '风驰电掣 I',
    'Reduce the time in between fights and attacks by 100ms.': '将战斗间隔和攻击间隔减少100ms。',
    'Blacksmithery I': '锻铁术 I',
    'Turkimp Tamer II': '脆皮火鸡饲主 II',
    'Learn to grow your own Turkimp, increasing the bonus from +50% to +100%, and making the Turkimp bonus available permanently.': '学习如何自己饲养脆皮火鸡，加成从50%变为100%，且永久持续。',
    'Grants a 2% chance to find a Randimp in World and Maps. Randimps will grant the bonus of a random World or Map Exotic Import (based on current location) on death.': '脆皮百变怪有2%的概率出现在世界或地图中。脆皮百变怪死亡时随机给予世界或地图(根据当前所在的位置而定)中一个奇异外皮的效果。',
    'Headstart III': '先声夺人 III',
    'Corruption begins an additional 15 levels earlier, at Zone 151.': '腐化再提前15个区域，在区域151出现。',
    'Map Battery': '地图电池',
    'Doubles the Zone bonus for completing maps once you reach 10 stacks.': '当完成十次地图后，地图奖励翻倍。',
    'Hyperspeed II': '风驰电掣 II',
    'Blacksmithery II': '锻铁术 II',
    'King of Bones II': '骨头之王 II',
    'Reduce the minimum time between Skeletimp spawns by 10 minutes.': '将脆皮骷髅的最小生成时间减少10分钟。',
    'Expert Gen': '发生器专家',
    'Increase the amount of speed that the Dimensional Generator gains per Zone by 50%. In addition, completing a Void Map at or above Z230 grants +10 Magmite.': '每通过一个区域，维度发生器产生住房的速度就增加50%。另外，在区域230及以上的区域完成虚空地图可以获得10岩浆岩。',
    'Magma Flow': '岩浆流',
    'Cause two extra Magma cells to appear on any Zone that already has Magma.': '有岩浆的区域额外生成两个岩浆格子。',
    'Explorer Aura II': '探险家光环 II',
    'Start with an extra SpeedExplorer book after each Portal.': '每次使用传送门后起始额外获得1级探险家加速升级。',
    'Void Power III': '虚空力量 III',
    'Your Trimps gain an additional 30% attack and health inside Void Maps, and all current and future Void Maps gain the \'Fast Attacks\' special modifier.': '虚空地图中脆皮再度增加30%攻击力和生命值，且所有虚空地图视为具有“快速进攻”特殊修饰符。',
    'Blacksmithery III': '锻铁术 III',
    'Heirnuum II': '传家虚物 II',
    'You can spend another extra 10% of your Nu on your Heirlooms, bringing the total to 70%.': '每个传家宝的可使用虚空物质上限再额外增加10%，总计可达到虚空物质总量的70%。',
    'Liquification I': '液化 I',
    'This Mastery is currently disabled in Universe': '此专精无法生效，因为目前处于宇宙',
    'Map at Zonier': '自动进图员',
    'Unlock a second preset to use with Map At Zone!': '自动进图可以使用第二套预设！',
    'Scryhard II': '努力占卜 II',
    'Complete an entire Void Map in Scryer Formation to earn an additional 50% Helium.': '全程使用占卜者阵型完成一张虚空地图可以额外获得50%氦。',
    'Magmamancermancy': '岩浆巫师学',
    'Magmamancers will now increase Trimp Attack by the same amount that they increase Metal. In addition, start every post-magma Zone with 5 minutes of credit already applied to your Magmamancers.': '岩浆巫师不仅提高金属获取量，还同时提高脆皮攻击力，二者加成数值相等。另外，进入岩浆以后的区域时，岩浆巫师视为已经获得5分钟的加成。',
    'Map Reducer II': '地图减压 II',
    'Reduces the min and max number of cells by 5 when creating maps.': '制造地图时最大格子和最小格子数均减少5。',
    'Diplomacy I': '斡旋 I',
    'Increase your token trading ratio from 10:5 to 10:8.': '将符记的转换比例由10:5提高到10:8。',
    'Deca Build': '十重建造',
    'Buildings in the queue are constructed 10 at a time. In addition, buildings added to the queue via AutoStructure are added 10 at a time if needed.': '可以同时建造十个建筑。另外，建筑能以10为单位加入队列。',
    'Still Rowing I': '尖塔排行 I',
    'Increase the looting bonus for completing a full row in a Spire by 50%, from 2% extra loot to 3%.': '完成尖塔一行的劫掠加成增加50%，从2%增加为3%。',
    'Patience': '耐心',
    'Anticipation can now reach 45 stacks.': '预期特权时间上限提高为45秒。',
    'Void Specialization I': '虚空特化 I',
    'Receive 1 free Void Map after using your Portal for each 100 Zones cleared last run. Helium from Void Maps is also increased by 0.25% for each Zone cleared last run.': '上次传送前每通过100个区域，传送后就多获得一张虚空地图。上次传送前每通过1个区域，虚空地图中获得的氦就增加0.25%。',
    'Receive 1 free Void Map after using your Portal for each 100 Zones cleared last run. Radon from Void Maps is also increased by 0.25% for each Zone cleared last run.': '上次传送前每通过100个区域，传送后就多获得一张虚空地图。上次传送前每通过1个区域，虚空地图中获得的氡就增加0.25%。',
    'You reached': '您上次传送前最高到达了区域 ',
    'Your value for "Last Portal Zone" only changes if you Portal after Z99 or collect an Heirloom, meaning it won\'t be reset by early restarts.': '上次传送前通过的区域只在上次传送前到达区域99或获得一个传家宝后才会开始计算，早早使用传送门不会对这个数值造成影响。',
    'Strength in Health I': '健康之力 I',
    'Your Trimps gain 15% additive damage per Healthy cell in your current Zone.': '当前区域中每有一个健康的格子，您的脆皮就获得15%额外伤害，伤害叠加。',
    'Diplomacy II': '斡旋 II',
    'Add 5 levels to the Upgrade and Stack Transfer of all 3 Empowerments of Nature, without increasing the costs.': '将全部3种自然赋能的赋能等级和层数传递率等级提高5级，且不增加成本。',
    'Liquification II': '液化 II',
    'Still Rowing II': '尖塔排行 II',
    'Your Trimps will now gain attack equal to 2x their looting bonus from each Spire row cleared.': '完成尖塔一行的劫掠加成现在还可以增加脆皮的攻击力，数值为劫掠加成的2倍。',
    'Amalgagreater': '超级合并者',
    'Causes the 50% damage bonus from each Amalgamator to be compounding rather than additive.': '合并者的50%伤害加成从叠加变为叠乘。',
    'Void Specialization II': '虚空特化 II',
    'Gain a second Void Map per 100 Zones cleared last run, but the first one is earned at Z50 (then 150, 250 etc). In addition, if Fluffy\'s level 6 bonus is active, this allows Fluffy to stack 1 additional Void Map, adding another 50% Helium bonus to the stack.': '在虚空特化 I的基础上，从区域50开始，上次传送前每通过100个区域，传送后就多获得一张虚空地图。另外，绒绒的6级加成如果激活，则绒绒的虚空地图融合上限再增加1。',
    'Bionic Magnet II': '仿生磁铁 II',
    'Adds Prestigious to Bionic Wonderland maps. This will make every Bionic Wonderland have two Prestige upgrades, including your first run that normally just has a RoboTrimp upgrade. In addition, gain +50% attack whenever you\'re in a map that is higher than your current World.': '使仿生仙境地图增加重铸升级，每张仿生仙境地图可以获得两个重铸升级，包括第一次运行某张仿生仙境地图时(通常只有一个脆皮机器人升级)。而且当您进入大于当前区域等级的地图时，攻击力增加50%。',
    'Flufffocus': '绒绒专注',
    'Scrufffocus': '污污专注',
    'Flufffinity': '绒绒限界',
    'Scrufffinity': '污污限界',
    'Gain one extra Fluffy ability. This works as if Fluffy Evolved, but doesn\'t increase Fluffy\'s damage bonus.': '绒绒获得一个额外的能力。效果与多进化了一次类似，不同的是没有伤害加成。',
    'Gain one extra Scruffy ability. This works as if Scruffy Evolved, but doesn\'t increase Scruffy\'s damage bonus.': '污污获得一个额外的能力。效果与多进化了一次类似，不同的是没有伤害加成。',
    'Excessive': '超超杀',
    'Allows you to Overkill yet another cell.': '超杀格子上限增加1个。',
    'Charged Crits': '蓄力暴击',
    'Adds +1 to your MegaCrit modifier, and adds 50% of your Shield Heirloom\'s Crit Chance to your Crit Chance again.': '超暴击倍率加1，并且暴击率增加您盾牌暴击率的50%。',
    'However, you do not currently have Crit Chance on your Shield.': '但目前您的盾牌并没有暴击率的加成。',
    'Master of the ': '掌握',
    'Grants 3 spectacular bonuses to your Void Maps, though the first two are incompatible with Scruffy. Scruffy tries but seriously just can\'t figure out the whole stacking thing yet.': '虚空地图获得以下三个强大的加成，但前两个对污污无效。污污很努力了，但是它真的搞不明白地图融合之类的事。',
    'Grants 3 spectacular bonuses to your Void Maps!': '虚空地图获得以下三个强大的加成！',
    '1. The Fluffy bonus for stacked Void Maps calculates with compounding gains, rather than additive. Each Void Map in the stack increases the Helium gain from the stack by x1.5 rather than +50%.': '1. 绒绒的融合虚空地图加成从叠加变为叠乘。融合每张虚空地图的氦加成从增加50%变为乘以1.5倍。',
    '3. Your Trimps gain 5x damage inside Void Maps': '3. 您的脆皮在虚空地图中获得5倍攻击力。',
    'Strength in Health II': '健康之力 II',
    'Adds 1 extra Healthy cell for every Spire completed this run. Healthy cells will also drop an additional 20% of the Zone\'s value in Helium, bringing the total up to 65%. Spire I will count for 1 Healthy cell once Healthy cells begin to appear in the World, but does not cause them to start spawning earlier.': '自上次传送后每通过1个尖塔，就额外生成1个健康格子。健康格子额外掉落本区域氦数量的20%，将该掉落量总和提升到65%。尖塔 I可以额外生成1个健康格子，但只在健康格子开始出现以后生效(不会使健康格子提前出现)。',
    'On your current run, you have cleared no Spires, so this Mastery is granting 0 extra Healthy cells. On your current Zone, you\'re finding 0 Healthy cells.': '自上次传送后您还没有通过尖塔，此专精可获得 0 个额外健康格子。目前区域中有 0 个健康格子。',
    'Still Magmamancing': '尖塔岩浆巫术',
    'Start every post-magma Zone with an additional 60 seconds of credit already applied to your Magmamancers per Spire row completed this run. In addition, every 2 Spires you complete this run increases the maximum time that Magmamancers can stack by 10 minutes!': '自上次传送后每通过1行尖塔，进入岩浆以后的区域时岩浆巫师就额外获得60秒的加成。另外，自上次传送后每完成2个尖塔，岩浆巫师的时间上限就增加10分钟。',
    'Liquification III': '液化 III',
    'Liquification is disabled in Universe 2, but': '液化在宇宙2中无法生效，但',
    'Increase your Liquification bonus by': '增加液化效果 ',
    'as if you had completed': '等同于额外完成了',
    '2 extra Spires': '2个尖塔',
    '. In addition,': '。另外，',
    'Mesmer': '梅斯梅尔',
    'Triples the Challenge': '将所有 挑战',
    'bonus for all Challenge': '的加成变为三倍，但只对挑战',
    's that have normal reward scaling (Does not include Trappapalooza, Trapper, Coordinate, Trimp, Obliterated or Eradicated).': '中奖励递增正常的生效(不包括捕手道达人、捕手、协同、脆皮、抹杀、灭绝)。',
    's that have normal reward scaling (Does not include Trapper, Coordinate, Trimp, Obliterated or Eradicated).': '中奖励递增正常的生效(不包括捕手、协同、脆皮、抹杀、灭绝)。',
    'You currently have a C': '您目前 挑战',
    'Angelic': '天之赐福',
    'Your Trimps heal for 50% of their remaining health immediately before each attack. Due to the intense amount of evil present, Trimps cannot heal in never-before-cleared Spires.': '每次脆皮被攻击前恢复剩余生命值的50%。由于尖塔中邪恶存在过多，脆皮无法在从未通过的尖塔中恢复生命值。',
    //专精相关结束
    //金色升级相关
    'Helium': '氦',
    'Radon': '氡',
    'Battle': '战斗',
    'Void': '虚空',
    '': '',
    '': '',
    //金色升级相关结束
    //维度发生器相关
    'Efficiency': '效率',
    'Capacity': '容量',
    'Supply': '供给',
    'taking advantage of': '意味着您可以完全获取',
    '2 extra Zones': '额外2个区域的燃料',
    'Overclocker': '超频',
    'Requires Hybridization and Storage.': '需要下方的混合和存储升级。',
    'The first level of this upgrade will cause the Dimensional Generator to overclock instead of wasting fuel whenever you find more fuel than you can store. Overclocking will cause an instant Generator tick at a base of 50% effectiveness.': '首次升级此项后，当您获取了超过上限的燃料时，维度发生器不会将多余的燃料浪费掉，而是会进入超频状态。超频状态将立刻让维度发生器产生一次住房，但效果为正常的50%。',
    'Every upgrade purchased after the first will reduce the Overclocking penalty by 1%, compounding.': '首次升级之后的每次升级都将减少1%的效果惩罚，数值叠乘。',
    'Hybridization': '混合',
    'Unlock the ability to switch your Dimensional Generator to Hybrid mode. Hybrid mode will automatically switch to Gain Fuel when fuel is below max, and Gain Mi when fuel is full.': '解锁维度发生器的混合模式。混合模式下，维度发生器在燃料未满之前得燃料，而燃料满了以后得岩浆岩。',
    'Storage': '存储',
    'Unlock extra fuel storage. This storage will always be equal to your normal fuel cap and will only store extra fuel above your normal cap. Fuel in this extra storage does not increase generator Trimps/tick, but acts as nice padding to help prevent wasted fuel. Hybrid mode will attempt to fill your extra storage halfway.': '解锁额外的燃料存储空间。此空间存储上限总是等于正常燃料上限，只会存储超过正常上限部分的燃料。额外空间中的燃料不会增加产生的住房，只是可以防止浪费燃料。混合模式会先将额外存储空间填充一半，然后再进行切换。',
    'Shielding': '防护',
    'Reduce the amount of Magmite that decays after each portal by 10% (additive': '将每次通过传送门后衰变的岩浆岩数量减少10%(叠减',
    'Slowburn': '慢烧',
    'Reduce the rate of fuel consumption per tick by 0.1, from 0.5 to': '将每次产生住房消耗的燃料减少0.1，从0.5减少为',
    'Supervision': '管理',
    'Gain 3 Automation/Micromanagement tools for your Generator!': '获得3个维度发生器的自动管理工具！',
    'Gain the ability to pause the Dimensional Generator by clicking the clock.': '获得暂停维度发生器的能力，方法是在维度发生器的倒计时上点击。',
    'Get a sweet button to configure specific Zones to switch Generator states at. You\'ll also gain the ability to Ctrl + Click the Generator Start setting in the Settings menu to open up the same interface.': '增加一个很好用的按钮，可以用来设置在特定区域切换模式。在设置菜单中按下Ctrl键再点击维度发生器初始运行模式按钮，也可以进入同样的界面。',
    'Add a Slider to your Generator window, allowing you to lower your maximum fuel capacity and gain greater control over Overclocker. Lowering your capacity below your stored amount of fuel will not waste any fuel, but the first time Overclocker is triggered, all extra fuel will be consumed.': '在维度发生器的方框下方增加一个滑块，可以用于调节燃料存储上限，更好的控制超频。将存储上限降到低于当前燃料数量时，不会有燃料被浪费掉，但当之后触发超频触发时，所有额外的燃料都会被消耗掉。',
    'Simulacrum': '复制',
    'All new generated dimensions now come with copies of your Trimps inside them. Gone are the days of ramping up breeding to fill your dimensions with Trimps!': '维度发生器产生住房的同时，也会产生相同数量的脆皮。费尽心思让脆皮繁殖填满上限的日子过去了！',
    //维度发生器相关结束
    //自然赋能相关
    'When this Empowerment is active, each successful attack by your Trimps stacks a debuff on the enemy, causing it to take': '当此赋能激活时，每次脆皮的攻击都可以使敌人获得一层减益，每次攻击时，敌人受到的伤害增加 ',
    'of the damage you dealt every attack until it dies. Each attack by your Trimps will further add to the poison effect.': '，直到敌人死亡。脆皮每次攻击可以叠加此毒效果。',
    'Increases the percentage of damage that sticks to enemies as poison during the Empowerment of Poison by': '毒赋能生效期间增加敌人 ',
    '. You currently poison for': ' 受到的伤害。您目前的毒赋能效果为 ',
    'and next level will cause you to poison for': '下一级毒赋能效果为 ',
    'While Enlightened, your Trimps deal 3x damage, and Poison Nature stacks deal 2x damage.': '当获得启迪时，您的脆皮伤害变为3倍，毒赋能伤害加倍。',
    'When this Empowerment is active, each successful attack by your Trimps stacks a debuff on the enemy, causing winds to swell and knock extra resources into your reach. Each stack increases Helium gained from the World by': '当此赋能激活时，每次脆皮的攻击都可以使敌人获得一层减益，鼓起大风，将更多的资源吹入您怀中。每层提高 ',
    'and increases all other basic resources gained from all sources by': '世界上获得的氦数量，并将所有基本资源获取量提高 ',
    'until that enemy dies (maximum of 200 stacks). This bonus does not apply to Fragments, and the helium bonus does not apply to maps.': ' ，直到敌人死亡(最高200层)。碎片不受加成，地图中的氦也一样不受加成。',
    'until that enemy dies (maximum of 300 stacks). This bonus does not apply to Fragments, and the helium bonus does not apply to maps.': ' ，直到敌人死亡(最高300层)。碎片不受加成，地图中的氦也一样不受加成。',
    'Increases the amount of extra Helium you find in the World by': '当风赋能激活时，每层提高 ',
    'and non-Helium basic resources from all sources by': '世界上获得的氦数量，并将其他非氦基本资源获取量提高 ',
    'per stack when the Empowerment of Wind is active. Your current bonus is': '。您当前的加成为 ',
    'Helium, and next level will bring your bonus to': '氦，下一级加成变为 ',
    'extra helium. Non-Helium resource gain is always double that of Helium, and the Helium bonus does not apply in maps.': '氦。非氦资源获取量总是氦的两倍，地图中的氦不受加成。',
    'extra helium. Non-Helium resource gain is always 10x that of Helium, and the Helium bonus does not apply in maps.': '氦。非氦资源获取量总是氦的十倍，地图中的氦不受加成。',
    'While Enlightened, you gain a 10x increase in all non-Helium loot, Wind stacks accumulate twice as fast, Wind can stack to 300, Wind gains an additional 5% stack transfer rate, and your Trimps gain access to the Wind Formation. This new Formation prevents any enemies in Wind Zones from falling below 1HP before they have 300 stacks of Wind. Wind Formation also grants all bonuses of Scrying Formation and allows collection of Dark Essence with no Trimp stat penalty.': '当获得启迪时，所有非氦资源获取量变为10倍，风层数叠加速度加倍，并可以叠加到300层，层数传递率增加5%，脆皮可以使用风阵型。此阵型可以使风区域中的敌人在达到300层风之前生命值不会小于1。风阵型可以获得占卜者阵型的全部加成，并允许在无属性惩罚的前提下收集黑暗精华。',
    'You have been Enlightened by Wind! While in this Formation in a Wind Zone, enemies will never fall below 1HP before they have 300 stacks of Wind.': '您已获得风之启迪！当在风区域使用此阵型时，敌人在达到300层风之前生命值不会小于1。',
    'This Formation also allows collection of Dark Essence, and grants all bonuses of the Scryer Formation.': '此阵型可以收集黑暗精华，并拥有占卜者阵型的全部加成。',
    'When this Empowerment is active, enemies will be Chilled each time your Trimps attack. The Chill debuff stacks, reduces the damage that enemy deals by': '当此赋能激活时，每次脆皮的攻击都可以冻结敌人。每层冻结减少 ',
    '(compounding) per stack, and increases the damage your Trimps deal to that enemy by the same amount (with diminishing returns, max of 100%) until it dies.': '敌人的伤害(叠乘)，并且您的脆皮会增加等量的攻击力(效果递减，直到100%)，直到敌人死亡。',
    '(compounding) per stack, and increases the damage your Trimps deal to that enemy by  twice that amount (with diminishing returns, max of +200% attack) until it dies.': '敌人的伤害(叠乘)，并且您的脆皮会增加该数值两倍的攻击力(效果递减，直到200%)，直到敌人死亡。',
    'Reduces the enemy\'s damage dealt from each stack of Chilled when the Empowerment of Ice is active by': '当冰赋能激活时，每层冻结减少 ',
    '(compounding), and increases the damage your Trimps deal to that enemy by the same amount (with diminishing returns, max of 100%). Your current bonus is': '敌人的伤害(叠乘)，并且您的脆皮会增加等量的攻击力(效果递减，直到100%)，您当前的加成为 ',
    '(compounding), and increases the damage your Trimps deal to that enemy by  twice that amount (with diminishing returns, max of +200% attack). Your current bonus is': '敌人的伤害(叠乘)，并且您的脆皮会增加该数值两倍的攻击力(效果递减，直到200%)，您当前的加成为 ',
    'and next level will bring your bonus to': '下一级加成变为 ',
    'You will earn +1 Overkill during Ice Zones once you reach Level 50, and a second Overkill cell at Level 100!': '当您到达50级后在冰区域超杀格子加1，到达100级后超杀格子再加1！',
    'You are earning +1 Overkill during Ice Zones! Earn another at Level 100!': '您已经在冰区域获得了超杀格子加1！到达100级后超杀格子可以再加1！',
    'Your Ice level is over 100, and you are gaining an additional 2 cells of Overkill during Ice Zones!': '您的冰赋能等级超过了100，冰区域中您获得了超杀格子加2！',
    'Your Ice level is 100, and you are gaining an additional 2 cells of Overkill during Ice Zones!': '您的冰赋能等级达到了100，冰区域中您获得了超杀格子加2！',
    'While Enlightened, your Trimps gain +2 maximum Overkill cells  and +0.25% increased Fluffy Exp per Ice level': '当获得启迪时，直到下次传送前超杀格子上限加2，且每级冰赋能增加0.25%绒绒经验 ',
    'currently': '目前',
    'for your entire run. In Ice Zones, Ice stacks accumulate twice as fast, and if an enemy is hit by your Trimps while it has 20 or more stacks of Ice and is below 50% health, it will instantly shatter! The shards of Ice from the shattered enemy destroy everything in their path, triggering your maximum Overkill regardless of your damage.': '。在冰区域中，冰层数叠加速度加倍，攻击一个有20层以上冰，生命值低于50%的敌人将立刻将它打碎。且无论对该敌人造成了多少伤害，该伤害都会触发最大格子数的超杀。',
    'While Enlightened, your Trimps gain +2 maximum Overkill cells  for your entire run. In Ice Zones, Ice stacks accumulate twice as fast, and if an enemy is hit by your Trimps while it has 20 or more stacks of Ice and is below 50% health, it will instantly shatter! The shards of Ice from the shattered enemy destroy everything in their path, triggering your maximum Overkill regardless of your damage.': '当获得启迪时，直到下次传送前超杀格子上限加2。在冰区域中，冰层数叠加速度加倍，攻击一个有20层以上冰，生命值低于50%的敌人将立刻将它打碎。且无论对该敌人造成了多少伤害，该伤害都会触发最大格子数的超杀。',
    '': '',
    '': '',
    //自然赋能相关结束
    //杂项
    'AutoSave has been disabled to prevent damage to your save. If you previously had a save file, it should still be waiting for you once you fix your browser settings.': '为了保护您的存档，自动存档已被关闭。如果您之前有存档文件，在修改完设置以后应该就能恢复使用了。',
    '': '',
    '': '',
    //杂项结束
    //脚本3相关
    'AutoTrimps': '自动脆皮',
    'AutoTrimps off': '自动脆皮 关闭',
    'Its beta time': 'Beta版本',
    'Various bug fixes.': '多个BUG修复。',
    'CHANGED THE WAY TF GATHER WORKS! CHECK TF SETTINGS!': '修改定时刷图的工作机制！详见定时刷图设置！',
    'CHANGED THE WAY MELTING POINT SETTING WORKS PLEASE CHECK SETTING IN MAPS!': '修改熔点设置的工作机制，详见地图设置！',
    'Added Arch. Automated Quest. Fixed bugs. Updated calc.': '增加考古学。增加自动任务。修复BUG。升级计算器。',
    //'Added Quagmire functionality. Added time and tribute farming. Added option to run Dailies in either universe. Added check to c2runner to not run a challenge if you have not unlocked it. Autoallocation sort of fixed. Added Greed to loot dumping. Graphs are still bad when moving between universes. Removed autonu due to being broken.': '增加泥淖挑战相关设置。增加定时刷图和刷祭品。增加在两个宇宙刷日常的选项。增加一个判断条件，如果还没有解锁一个挑战，自动C2挑战将不会尝试它。自动分配修复一些问题。将贪婪加入主加特权列表。切换宇宙时，图表还是会有问题。移除了自动分配虚空物质，因为它无法正常工作。',
    //'CHECK COMBAT FOR BETTERAUTOFIGHT, IF MIGHT BE A BLACK BAR, CLICK IT!': '检查战斗选项下的改良自动战斗选项，它可能变成一个黑条，记得点一下！',
    //'A bunch of U2 stuff added, offline progress still being worked on.': '添加了许多宇宙2相关内容，离线进度仍需要完善。',
    'Report any bugs/problems please': '如果发现BUG或问题，请向我反馈',
    'Talk with the dev': '欲联系开发者，可以联系',
    'Zeks Discord Channel': 'Zeks Discord 频道',
    'See': '查阅 ',
    'ReadMe': '自述文件',
    'Or check': '或者查看 ',
    'the commit history': '提交记录',
    '(if you want).': '(如果您想要的话)。',
    'Script Update Notice': '脚本更新公告',
    'Thank you for playing AutoTrimps. Accept and Continue.': '感谢您使用自动脆皮脚本。点此开始使用。',
    'Graphs': '图表',
    'Helium - He/Hr': '氦 - 氦/小时',
    'Helium - Total': '氦 - 总计',
    'HeHr % / LifetimeHe': '氦小时 % / 氦总量',
    'He % / LifetimeHe': '氦 % / 氦总量',
    'Radon - Rn/Hr': '氡 - 氡/小时',
    'Radon - Total': '氡 - 总计',
    'RnHr % / LifetimeRn': '氡小时 % / 氡总量',
    'Rn % / LifetimeRn': '氡 % / 氡总量',
    'Radon - Rn/Hr Instant': '氡 - 氡/小时 瞬时值',
    'Clear Time': '通过时间',
    'Cumulative Clear Time': '累计通过时间',
    'Run Time': '本轮时间',
    'Map Bonus': '地图奖励',
    'Void Maps': '虚空地图',
    'Void Map History': '虚空地图历史',
    'Loot Sources': '战利品来源',
    'Coordinations': '协作等级',
    'Nullifium Gained': '虚空物质获取量',
    'Essence PerHour': '精华每小时量',
    'OverkillCells': '超杀格子数',
    'Magmite': '岩浆岩',
    'Fluffy XP': '绒绒经验',
    'Fluffy XP PerHour': '每小时绒绒经验',
    'Scruffy XP': '污污经验',
    'Scruffy XP PerHour': '每小时污污经验',
    'Nurseries': '托儿所',
    'Amalgamators': '合并者',
    'Refresh': '刷新',
    'Clear All Previous Data': '清除全部数据',
    'Delete Specific Portal': '删除特定传送门数据',
    'Tips': '提示',
    'Export Graph Database will make a backup of all the graph data to a text string.': '导出图表数据将您的图表数据备份为一串字符。',
    'DISCLAIMER': '免责声明',
    'Takes quite a long time to generate.': '需要花费很长的时间。',
    'Export your Graph Database': '导出图表数据',
    'Add Note/Label': '添加注释/标签',
    'Invert Selection': '选择项反转',
    'All Off/On': '全部关闭/开启',
    'You can zoom by dragging a box around an area. You can turn portals off by clicking them on the legend. Quickly view the last portal by clicking it off, then Invert Selection. Or by clicking All Off, then clicking the portal on. To delete a portal, Type its portal number in the box and press Delete Specific. Using negative numbers in the Delete Specific box will KEEP that many portals (starting counting backwards from the current one), ie: if you have Portals 1000-1015, typing -10 will keep 1005-1015. There is a browser data storage limitation of 10MB, so do not exceed 20 portals-worth of data.': '您可以用鼠标圈选特定区域来放大。在图例上点击后可以关闭特定传送门数据。您可以点击最近一个传送门，然后点击下方的选择项反转来快速单独浏览。您也可以点全部关闭后，再点击它。如果想要删除特定传送门的数据，请在右方输入框内输入编号后，点击删除特定传送门数据。如果在输入框内输入负数再点击删除，那么会保留最近一个传送门之前相应数量的数据。举例：如果您目前图表中有传送门1000至传送门1015的数据，输入-10再点击删除后，剩下的是传送门1005至传送门1015的数据。浏览器数据存储上限为10MB，所以数据条目数不可超过20条。',
    'Tips: Hover for usage tips.': '提示：鼠标停留此处可看到有用的提示。',
    'Try to Remember Which Portals are Selected when switching between Graphs': '切换图表类型时记忆传送门选择状态',
    'ExportGraphs': '导出图表',
    'This is your GRAPH DATABASE save string. There are many like it but this one is yours. Save this save somewhere safe so you can save time next time.': '以下是您的图表数据字符串。只属于您，独一无二。保存好它，这样下次就能省不少事了。',
    'Got it': '知道了',
    'Copy to Clipboard': '复制到剪贴板',
    'Void Maps (completed': '虚空地图 (通过数',
    'Number of Void Maps': '虚空地图数量',
    'Nullifium Gained Per Portal': '每次传送门获得的虚空物质',
    'Average Nullifium Gained Per Portal =': '平均每次传送门获得的虚空物质 =',
    'Current Loot Sources (of all resources gained) - for the last 15 minutes': '目前战利品来源(所有资源) - 过去的15分钟内',
    'Time (every 15 seconds': '时间点(每15秒一次',
    'Ratio of looted to gathered': '战利品与采集的比例(单位%)',
    'Time to clear zone': '区域通过时间',
    'Cumulative Time (at END of zone#': '累计时间(在区域末尾',
    'Total Run Time': '所有轮时间',
    'Time': '时间',
    'Helium/Hour (Cumulative': '氦/小时 (累计',
    'Helium/Hour': '氦/小时',
    'Helium (Lifetime Total': '氦(总量',
    'He/Hr % of LifetimeHe': '氦小时 % / 氦总量',
    'He % of LifetimeHe': '氦 % / 氦总量',
    'Radon/Hour (Cumulative': '氡/小时 (累计',
    'Radon/Hour': '氡/小时',
    'Radon (Lifetime Total': '氡(总量',
    'Rn/Hr % of LifetimeHe': '氡小时 % / 氡总量',
    'Rn % of LifetimeRn': '氡 % / 氡总量',
    'Radon/Hour Instantaneous - between current and last zone.': '氡/小时 瞬时值 - 在当前区域和上一个区域之间。',
    'Radon/Hour per each zone': '氡/小时 每区域',
    'Void Map History (voids finished during the same level acquired (with RunNewVoids) are not counted/tracked': '虚空地图历史 (在获取的同一层通过的虚空地图无法被记录在内',
    'Map Bonus History': '地图奖励历史',
    'Map Bonus Stacks': '地图奖励层数',
    'Coordination History': '协作等级历史',
    'Total Magmite Owned': '岩浆岩总拥有量',
    'Zone (starting at': '区域 (开始于',
    'Total Magmamancers Owned': '岩浆巫师总拥有量',
    'Essence/Hour (Cumulative': '精华/小时 (累计',
    'Essence/Hour': '精华/小时',
    'Nurseries Bought (Total': '托儿所建造数 (总量',
    'Fluffy XP (Lifetime Total': '绒绒经验 (总量',
    'Zone (starts at': '区域 (开始于',
    'Fluffy XP/Hour (Cumulative': '绒绒经验/小时 (总量',
    'Fluffy XP/Hour': '绒绒经验/小时',
    'Scruffy XP (Lifetime Total': '污污经验 (总量',
    'Scruffy XP/Hour (Cumulative': '污污经验/小时 (总量',
    'Scruffy XP/Hour': '污污经验/小时',
    'Overkilled Cells': '超杀格子数',
    'Toggle Automapping': '切换自动地图开关',
    'Toggle automapping on and off.': '切换自动地图是打开还是关闭。',
    'Auto Maps': '自动地图',
    'Health to Damage ratio': '生命伤害比',
    'This status box displays the current mode Automaps is in. The number usually shown here during Farming or Want more Damage modes is the \'HDratio\' meaning EnemyHealth to YourDamage Ratio (in X stance). Above 16 will trigger farming, above 4 will trigger going for Map bonus up to 10 stacks.': '此状态框内显示目前自动地图的模式。在刷资源模式或者需要更多伤害模式下，此处会显示生命伤害比，意思是敌人生命值与您伤害的比值。此数值高于16时，会触发刷资源模式，高于4时，会进入地图获得10层地图奖励。',
    'enoughHealth': '生命值足够',
    'enoughDamage': '伤害足够',
    'shouldFarm': '应该刷资源',
    'H:D ratio =': '生命伤害比 =',
    'true': '条件为真',
    'false': '条件为假',
    'Helium/Hr Info': '氦/小时 信息',
    '1st is Current He/hr % out of Lifetime He(not including current+unspent).': '第1行为目前氦/小时与氦总量的百分比(不包含本轮的和未花费的)。',
    '0.5% is an ideal peak target. This can tell you when to portal...': '0.5%是一个比较理想的目标。在这个数字附近使用传送门会较好……',
    '2nd is Current run Total He earned / Lifetime He(not including current': '第2行为本轮氦获取量与氦总量的比值(不包含本轮的',
    'Radon/Hr Info': '氡/小时 信息',
    '1st is Current Rn/hr % out of Lifetime Rn(not including current+unspent).': '第一行为目前氡/小时与氡总量的百分比(不包含本轮的和未花费的)。',
    '2nd is Current run Total Rn earned / Lifetime Rn(not including current': '第2行为本轮氡获取量与氡总量的比值(不包含本轮的',
    'Reset zoom': '缩放比例还原',
    'Reset zoom level': '缩放比例还原为',
    'Core': '核心',
    'Core - Main Controls for the script': '核心 - 脚本主要内容的控制',
    'Building Settings': '建筑设置',
    'Jobs - Worker Settings': '工作 - 工人设置',
    'Gear': '装备',
    'Gear - Equipment Settings': '装备 - 装备设置',
    'Maps - AutoMaps & VoidMaps Settings': '地图 - 自动地图及虚空地图设置',
    'Spire - Settings for Spires': '尖塔 - 尖塔相关设置',
    'Raiding': '袭劫',
    'Raiding - Settings for Raiding': '袭劫 - 袭劫相关设置',
    'Dailies - Settings for Dailies': '日常 - 日常相关设置',
    'C2': 'C2',
    'C2 - Settings for ': 'C2 - 相关设置：',
    'Challenges - Settings for Specific Challenges': '挑战 - 特定挑战相关设置',
    'Combat & Stance Settings': '战斗及阵型设置',
    'Windstacking': '风层数叠加',
    'Windstacking Settings': '风层数叠加设置',
    'ATGA': '自动遗传学家',
    'Geneticassist Settings': '遗传学家设置',
    'Scryer': '占卜阵型',
    'Scryer Settings': '占卜阵型设置',
    'Magma': '岩浆',
    'Dimensional Generator & Magmite Settings': '维度发生器及岩浆岩设置',
    'Heirloom Settings': '传家宝设置',
    'Golden': '金色',
    'Golden Upgrade Settings': '金色升级设置',
    'Nature Settings': '自然设置',
    'Display': '显示',
    'Display & Spam Settings': '显示及屏蔽设置',
    'Import Export': '导入导出',
    'Import & Export Settings': '导入及导出设置',
    'Minimize all tabs': '最小化所有选项卡',
    'Minimize all AT settings tabs.': '最小化所有脚本设置选项卡。',
    'Maximize all tabs': '最大化所有选项卡',
    'Maximize all AT settings tabs.': '最大化所有脚本设置选项卡。',
    'Exit (duplicate': '退出 (界面',
    'Closes/toggles/hides AutoTrimps (just a UI shortcut': '关闭脚本界面 (只是快捷按钮',
    'Manual Gather/Build': '手动采集和建造',
    'Auto Gather/Build': '自动采集和建造',
    'Mining/Building Only': '只采矿和建造',
    'Science Research OFF': '不进行科学研究',
    'Manual Gather/Build / Auto Gather/Build / Mining/Building Only / Science Research OFF': '手动采集和建造 / 自动采集和建造 / 只采矿和建造 / 不进行科学研究',
    'Controls what you gather/build do. Manual does nothing': '控制您自己资源采集和建造。手动采集和建造不会做任何事。',
    'Auto Gathering of Food,Wood,Metal(w/turkimp) & Science. Auto speed-Builds your build queue.': '自动采集会采集食物，木头，金属(有脆皮火鸡效果的时候)及科学点。自动建造会加速建造队列。',
    'Mining/Building only does exactly what it says. Only use if you are passed the early stages of the game and have the mastery foremany unlocked (No longer need to trap, food and wood are useless).': '只采矿和建造的效果与它的称呼完全一致。建议只在您渡过游戏前期阶段获得50000工头后开启。',
    'You can disable science researching for the achievement: Reach Z120 without using manual research.': '您可以关闭科学研究，以获得成就：在不使用手动研究的前提下，到达区域120。',
    'Metal Only': '只采矿',
    'For use with Mining/Gather Only. Only gathers Metal if you have foremany unlocked.': '用于 只采矿和建造 选项。当有工头以后，只进行采矿。',
    'Manual Upgrades': '手动升级',
    'Buy All Upgrades': '购买所有升级',
    'Upgrades no Coords': '不升级协作',
    'Manual Upgrades / Buy All Upgrades / Upgrades no Coords': '手动升级 / 购买所有升级 / 不升级协作',
    'Autobuys non-equipment upgrades (equipment is controlled in the Gear tab). The second option does NOT buy coordination (use this': '自动购买装备以外的升级(装备升级在装备选项卡下)。最后一个选项不会购买协作升级( ',
    'ONLY': '只',
    'if you know what you\'re doing).': '在您知道这个用途时才选择)。',
    'Amal Boost': '合并者提升',
    'Boost your Amal count for more Mi. Will not buy coords until your H:D ratio is below a certain value. This means that you will get amals quicker. Will not activate higher than your Amal Boost End Zone Setting!': '提升合并者数量，以获得更多的岩浆岩。只在生命伤害比低于特定的值以后才会购买协作。这意味着您可以更快获得合并者。超过您的合并者提升结束区域后不会激活！',
    'Amal Target': '合并者目标',
    'Set the amount of Amals you wish to aim for. Once this target is reached, it will buy coords below your Amal ratio regardless of your H:D, just enough to keep the Amal. -1 to disable and use H:D for entire boost.': '设置合并者的数量目标。当达到目标数量时，将只考虑在保持数量的前提下购买协作升级，忽略掉生命伤害比。设为-1则全程只考虑生命伤害比。',
    'Amal Boost H:D': '合并者提升生命伤害比',
    'Set your H:D for Amal Boost here. The higher it is the less coords AT will buy. 0.0000025 is the default.': '设置合并者提升的生命伤害比。数值越高，脚本购买的协作升级就越少。0.0000025为默认值。',
    'Amal Boost End Z': '合并者提升结束区域',
    'Amal Boost End Zone. Set the zone you want to stop Amal Boosting. -1 to do it infinitely.': '合并者提升结束区域。设置停止使用合并者提升的区域。设为-1则无限持续不会停止。',
    'Auto Allocate Off': '关闭自动分配特权',
    'Auto Allocate On': '打开自动分配特权',
    'Dump into Looting II': '主加劫掠 II',
    'Auto Allocate Off / Auto Allocate On / Dump into Looting II': '关闭自动分配特权 / 打开自动分配特权 / 主加劫掠 II',
    'Uses the AutoPerks ratio based preset system to automatically allocate your perks to spend whatever helium you have when you AutoPortal. Does not change Fixed Perks: siphonology, anticipation, meditation, relentlessness, range, agility, bait, trumps, packrat, capable. NEW: Dump into Looting II, dumps all loot gained from previous portal at specified zone': '自动使用传送门时，根据当前的氦数量自动分配特权。不会修改特定特权的等级：虹吸学，预期，冥想，无情，范围，敏捷，诱饵，王牌，囤积成瘾，能力。新功能：主加劫掠 II，在特定区域将上次传送门获得的资源主加到劫掠 II上。',
    'Fast Allocate': '快速分配',
    'Turn on if your helium is above 500Qa. Not recommended for low amounts of helium.': '当氦超过500Qa(译者注：即5e17)后建议启用。低氦数量时不建议启用。',
    'Trap Trimps': '陷阱捕捉脆皮',
    'Automatically trap trimps when needed, including building traps. (when you turn this off, you may aswell turn off the in-game autotraps button, think of the starving trimps that could eat that food!': '如果有需要，自动捕捉脆皮，也会自动建造陷阱。(关闭此项时，为了保险起见，您最好也同时关闭游戏自带的自动陷阱捕捉功能',
    'AutoEggs': '自动获取彩蛋',
    'Click easter egg if it exists, upon entering a new zone. Warning: Quite overpowered. Please solemnly swear that you are up to no good.': '如果区域内存在彩蛋，在进入新区域前将自动获取它。注意：效果过于强大。请庄严宣誓您没干好事。',
    'Manual Gather/Build / Auto Gather/Build / Mining/Building Only': '手动采集和建造 / 自动采集和建造 / 只采矿和建造',
    'Dump into Looting': '主加劫掠',
    'Auto Allocate Off / Auto Allocate On / Dump into Looting': '关闭自动分配特权 / 打开自动分配特权 / 主加劫掠',
    'Uses the AutoPerks ratio based preset system to automatically allocate your perks to spend whatever helium you have when you AutoPortal. Does not change Fixed Perks: siphonology, anticipation, meditation, relentlessness, range, agility, bait, trumps, packrat, capable. NEW: Dump into Looting, dumps all loot gained from previous portal at specified zone': '自动使用传送门时，根据当前的氡数量自动分配特权。不会修改特定特权的等级：虹吸学，预期，冥想，无情，范围，敏捷，诱饵，王牌，囤积成瘾，能力。新功能：主加劫掠，在特定区域将上次传送门获得的资源主加到劫掠上。',
    'Greed Dump': '主加贪婪',
    'Dump Radon into Greed instead.': '分配氡时改为主加贪婪。',
    'AutoPortal': '自动传送门',
    'Automatically portal. Will NOT auto-portal if you have a challenge active, the challenge setting dictates which challenge it will select for the next run. All challenge settings will portal right after the challenge ends, regardless. Helium Per Hour only': '自动使用传送门。当您还有挑战未完成的时候，不会使用传送门。下拉菜单中的选项表明使用传送门后自动选择的挑战。所有的挑战设置都会在完成相应挑战后立刻使用传送门。选择氦每小时，则只会在氦/小时低于本轮最大值的首个区域时， ',
    'portals at cell': '使用传送门于格子',
    'of the first level where your He/Hr went down even slightly compared to the current runs Best He/Hr. Take note, there is a Buffer option, which is like a grace percentage of how low it can dip without triggering. Setting a buffer will portal mid-zone if you exceed 5x of the buffer.  CAUTION: Selecting He/hr may immediately portal you if its lower-(use Pause AutoTrimps button to pause the script first to avoid this': '。请注意，右侧有一个缓冲值选项，意味着氦/小时可以暂时低于本轮最大值，而不使用传送门。设置缓冲值后，您将在氦/小时低于缓冲值5倍以后，无论当前在区域内何处，自动使用传送门。注意：选择氦每小时选项可能会立刻使用传送门(建议先使用暂停自动脆皮脚本按钮再进行设置',
    'Portal Challenge': '传送后进挑战',
    'Automatically portal into this challenge when using helium per hour or custom autoportal. Custom portals after cell 100 of the zone specified. Do not choose a challenge if you havent unlocked it.': '当使用氦每小时或自定义选项时，使用传送门后自动进入相应挑战。完成相应挑战后自动使用传送门。请不要选择还没解锁的挑战。',
    'Custom Portal': '自定义传送门',
    'Automatically portal AFTER clearing this level.(ie: setting to 200 would portal when you first reach level': '在通过对应区域后，自动使用传送门。(例：设置为200后，将在此之后使用传送门：首次到达区域',
    'Don\'t Portal Before': '自动传送区域',
    'Do NOT allow Helium per Hour AutoPortal setting to portal BEFORE this level is reached. It is an additional check that prevents drops in helium/hr from triggering autoportal. Set to 0 or -1 to completely disable this check. (only shows up with Helium per Hour set': '到达相应区域之前，不自动使用传送门。此选项是为了防止氦/小时的微小波动触发自动传送门。将数值设置为0或者-1可以关闭此选项。(只在氦每小时选项下出现',
    'He/Hr Portal Buffer ': '氦/小时缓冲值 ',
    'He/Hr Portal Buffer %': '氦/小时缓冲值 %',
    'IMPORTANT SETTING. When using the He/Hr Autoportal, it will portal if your He/Hr drops by this amount of % lower than your best for current run, default is 0% (ie: set to 5 to portal at 95% of your best). Now with stuck protection - Allows portaling midzone if we exceed set buffer amount by 5x. (ie a normal 2% buffer setting would now portal mid-zone you fall below 10% buffer).': '重要选项。当使用氦每小时选项时，通过一个区域后，如果氦/小时低于本轮最高值相应百分比，才会自动使用传送门，默认值为0%(例：设置为5后，将在氦/小时低于最高值的95%后才自动使用传送门)。另外，此项还有防卡进度的功能 - 当氦/小时低于本轮最高值5倍相应百分比时，无论当前在区域内何处，自动使用传送门。(例：缓冲值设置为2%后，将在氦/小时低于最高值的90%时，无论当前在区域内何处，自动使用传送门)。',
    'Automatically portal. Will NOT auto-portal if you have a challenge active, the challenge setting dictates which challenge it will select for the next run. All challenge settings will portal right after the challenge ends, regardless. Radon Per Hour only': '自动使用传送门。当您还有挑战未完成的时候，不会使用传送门。下拉菜单中的选项表明使用传送门后自动选择的挑战。所有的挑战设置都会在完成相应挑战后立刻使用传送门。选择氡每小时，则只会在氡/小时低于本轮最大值的首个区域时， ',
    'of the first level where your Rn/Hr went down even slightly compared to the current runs Best Rn/Hr. Take note, there is a Buffer option, which is like a grace percentage of how low it can dip without triggering. Setting a buffer will portal mid-zone if you exceed 5x of the buffer.  CAUTION: Selecting Rn/hr may immediately portal you if its lower-(use Pause AutoTrimps button to pause the script first to avoid this': '。请注意，右侧有一个缓冲值选项，意味着氡/小时可以暂时低于本轮最大值，而不使用传送门。设置缓冲值后，您将在氡/小时低于缓冲值5倍以后，无论当前在区域内何处，自动使用传送门。注意：选择氡每小时选项可能会立刻使用传送门(建议先使用暂停自动脆皮脚本按钮再进行设置',
    'Automatically portal into this challenge when using radon per hour or custom autoportal. Custom portals after cell 100 of the zone specified. Do not choose a challenge if you havent unlocked it.': '当使用氡每小时或自定义选项时，使用传送门后自动进入相应挑战。完成相应挑战后自动使用传送门。请不要选择还没解锁的挑战。',
    'Do NOT allow Radon per Hour AutoPortal setting to portal BEFORE this level is reached. It is an additional check that prevents drops in radon/hr from triggering autoportal. Set to 0 or -1 to completely disable this check. (only shows up with Radon per Hour set': '到达相应区域之前，不自动使用传送门。此选项是为了防止氡/小时的微小波动触发自动传送门。将数值设置为0或者-1可以关闭此选项。(只在氡每小时选项下出现',
    'Rn/Hr Portal Buffer ': '氡/小时缓冲值 ',
    'Rn/Hr Portal Buffer %': '氡/小时缓冲值 %',
    'IMPORTANT SETTING. When using the Rn/Hr Autoportal, it will portal if your Rn/Hr drops by this amount of % lower than your best for current run, default is 0% (ie: set to 5 to portal at 95% of your best). Now with stuck protection - Allows portaling midzone if we exceed set buffer amount by 5x. (ie a normal 2% buffer setting would now portal mid-zone you fall below 10% buffer).': '重要选项。当使用氡每小时选项时，通过一个区域后，氡/小时低于本轮最高值相应百分比后，才会自动使用传送门，默认值为0%(例：设置为5后，将在氡/小时低于最高值的95%后才自动使用传送门)。另外，此项还有防卡进度的功能 - 当氡/小时低于本轮最高值5倍相应百分比时，无论当前在区域内何处，自动使用传送门。(例：缓冲值设置为2%后，将在氡/小时低于最高值的90%时，无论当前在区域内何处，自动使用传送门)。',
    'Pause AutoTrimps': '暂停自动脆皮脚本',
    'Pause AutoTrimps Script (not including the graphs module': '暂停自动脆皮脚本 (不包括图表部分',
    'Helium / Radon': '氦 / 氡',
    'Switch between Helium (U1) and Radon (U2) settings.': '切换氦相关(宇宙1)和氡相关(宇宙2)的设置。',
    'Buy Heliumy ': '氦奇购买 ',
    'Buy Heliumy %': '氦奇购买 %',
    'Buys the Heliumy bonus for': '当日常加成高于此选项中的数值时，购买氦奇加成。需花费 ',
    '100 bones': '100骨头',
    'when Daily bonus is above the value set in this setting. Recommend anything above 475. Will not buy if you cant afford to, or value is -1.': '。建议设置为475以上的值。如果您骨头不够，或者是此选项数值为-1，则不会购买。',
    'DFA: Off': '日常常时战斗：关闭',
    'DFA: Non-Empowered': '日常常时战斗：非赋能',
    'DFA: All Dailies': '日常常时战斗：所有',
    'DFA: Off / DFA: Non-Empowered / DFA: All Dailies': '日常常时战斗：关闭 / 日常常时战斗：非赋能 / 日常常时战斗：所有',
    'Daily Fight Always. Sends trimps to fight if they\'re not fighting in Daily challenges similar to Toxicity/Nom but not on Bloodthirst/Plagued/Bogged Dailies, regardless of BAF. Non-Empowered will only send to fight if the Daily is not Empowered. Essenitally the same as the one in combat, can use either if you wish, except this will only activate in these daily challenges (duh': '设置日常常时战斗。在日常挑战中，当脆皮没有在战斗时，自动让它们开始战斗。设置类似于毒性/美味常时战斗，无视改良自动战斗的设置，但不会在有嗜血(脆皮死亡时敌人恢复全部生命值并增加攻击力)/天灾(敌人每次攻击后使脆皮获得减成，每次攻击减少生命值上限一定比例的生命值)/泥沼(每次脆皮攻击后失去生命值)敌人的日常挑战中激活。非赋能只在日常挑战没有赋能敌人时自动让脆皮开始战斗。实际上跟战斗选项卡下的常时战斗效果类似，日常挑战中启用任意一个均可，但此选项只在日常挑战中生效。',
    'Avoid Empower': '避免赋能敌人变强',
    'Tries to avoid Empower stacks in Empower Dailies. No harm in this being on, so default is On.': '在赋能日常挑战中，尽量避免敌人获得赋能层数。开着没什么坏处，因此该选项默认为开启。',
    'Daily Armor Magic Off': '日常护甲：关闭',
    'DAM: Above': '日常护甲：超过',
    'DAM: H:D': '日常护甲：生命伤害比',
    'DAM: Always': '日常护甲：常时',
    'Daily Armor Magic Off / DAM: Above 80% / DAM: H:D / DAM: Always': '日常护甲：关闭 / 日常护甲：超过 80% / 日常护甲：生命伤害比 / 日常护甲：常时',
    'Will buy Armor to try and prevent death on Bleed/Plague/Bogged Dailies under the 3 conditions.': '在嗜血/天灾/泥沼挑战中，在以下条件时自动购买护甲以尝试生存下来。',
    'Above': '超过',
    'Will activate at and above 80% of your HZE.': '当到达最高通过区域的80%时，激活日常护甲。',
    'H:D': '生命伤害比',
    'Will activate at and above the H:D you have defined in maps.': '当生命伤害比超过地图选项卡下相关设置的数值时，激活日常护甲。',
    'Always': '常时',
    'Will activate always.': '将常时激活。',
    'All options will activate at or': '所有的选项当',
    'below 25% of your health.': '生命值不超过25%时自动激活。',
    'Daily VM Scryer': '日常虚空地图占卜阵型',
    'Only use in Dailies if you have Scryhard II, for er, obvious reasons. Works without the scryer options.': '日常挑战中请只在拥有努力占卜 II专精时开启，原因不用多说。无需占卜阵型相关设置也能生效。',
    'Daily Ignore Spires Until': '日常塔无效层',
    'Spire specific settings like end-at-cell are ignored until at least this zone is reached in Dailies (0 to disable).': '日常挑战中，尖塔的相关设置直到相应层数前无效(设为0则关闭此选项)。',
    'Daily Exit Spire Cell': '日常塔退出格',
    'What cell to exit spire in dailys.': '日常挑战中，在哪一格退出尖塔。',
    'Daily Nurseries pre-Spire': '日常塔托儿所',
    'Set the maximum number of Nurseries to build for Spires in Dailies. Overrides No Nurseries Until z and Max Nurseries so you can keep them seperate! Disable with -1.': '设置在日常挑战中，进入尖塔前的托儿所数量上限。先于建筑选项卡的托儿所起始区和托儿所上限生效，这样您就可以单独管理日常挑战时的设置了！设为-1则关闭此选项。',
    'Daily Windstacking': '日常风层数叠加',
    'This must be on for Daily windstacking settings to appear!': '此选项打开后才能设置日常风层数的详细参数！',
    'Overrides your Autostance settings to use the WS stance on Dailies.': '日常挑战中，先于自动阵型生效，自动使用风阵型。',
    'Daily Windstack Min Zone': '日常风层数叠加最小区域',
    'For use with Windstacking Stance, enables windstacking in zones above and inclusive of the zone set for dailys. (Get specified windstacks then change to D, kill bad guy, then repeat). This is designed to force S use until you have specified stacks in wind zones, overriding scryer settings. All windstack settings apart from Daily WS MAX work off this setting.': '用于风阵型，日常挑战中，在相应数值以上的区域才触发风层数叠加。(达到特定的风层数，然后切换为D阵型，击杀敌人，再重复此流程。)此项先于占卜阵型生效。但后面两个日常风层数叠加的设置会使此选项无效。',
    'Daily Windstack H:D': '日常风层数叠加生命伤害比',
    'For use with Windstacking Stance in Dailies, fiddle with this to maximise your stacks in wind zones for Dailies. If H:D is above this setting it will not use W stance. If it is below it will.': '用于日常挑战的风阵型。此选项可以用来最大化风区域的风层数。当生命伤害比高于相应数值时不会使用风阵型。当低于的时候会使用。',
    'Daily Windstack Stacks': '日常风层数叠加层数',
    'For use with Windstacking Stance in Dailies. Amount of windstacks to obtain before switching to D stance. Default is 200, but I recommend anywhere between 175-190. In Wind Enlightenment it will add 100 stacks to your total automatically. So if this setting is 200 It will assume you want 300 stacks instead during enlightenment.': '用于日常挑战的风阵型。达到相应风层数后，再切换到D阵型。默认值为200，但个人建议设置为175至190之间的数字。如果开启了风之启迪，则自动在此数值上追加100。所以如果您将此项设置为200，那么在风之启迪开启时，会自动叠加到300层。',
    'Daily Wind Damage Cutoff': '日常风装备界限',
    'Set this value to optimise your windstacking in dailys. Can work without Windstacking Stance, but not recommended. AT normally uses 4 as its cutoff. I.e if the cutoff is above 4 it will buy max equipment. If you set this to 160, it will not get more damage till you are above x160. Essentially, the higher the value, the less damage AT wants to get, this will enable you to windstack to incredibly high amounts. -1 to disable/go back to default. Must set your windstacking min zone to use.': '设置数值来优化日常挑战中的风层数叠加。可以在没有风阵型的情况下生效，但不建议。脚本通常使用4作为装备界限数值，例如：界限数值超过4的时候，会购买最大数量的装备。如果您将此项设为160，则只在界限数值超过160的时候才会购买。简而言之，此数值越高，脚本升级装备就越少，此项可以让您将风层数叠加到非常高。设为-1则关闭此选项，恢复默认设置。必须设置日常风层数叠加最小区域才能正常使用。',
    'Daily Wind Map Cutoff': '日常风地图界限',
    'Set this value to optimise your windstacking in dailys. Can work without Windstacking Stance, but not recommended. AT normally uses 4 as its cutoff. I.e if the cutoff is above 4 it will do map bonus. If you set this to 160, it will not do maps till you are above x160. Essentially, the higher the value, the less damage AT wants to get, this will enable you to windstack to incredibly high amounts. -1 to disable/go back to default. Must set your windstacking min zone to use.': '设置数值来优化日常挑战中的风层数叠加。可以在没有风阵型的情况下生效，但不建议。脚本通常使用4作为地图界限数值，例如：界限数值超过4的时候，会去获得地图奖励。如果您将此项设为160，则只在界限数值超过160的时候才会去获得奖励。简而言之，此数值越高，脚本获得地图奖励就越少，此项可以让您将风层数叠加到非常高。设为-1则关闭此选项，恢复默认设置。必须设置日常风层数叠加最小区域才能正常使用。',
    'Stack Liquification': '液化风层数叠加',
    'Stack Wind zones during Wind Enlight during Liquification.': '开启风之启迪并在风区域触发液化时，叠加风层数。',
    'Daily WS MAX': '日常风层数叠加上限',
    'For maximising Windstacking an entire Daily. Withholds damage to try and get your max windstacks every wind zone. Not recommended for terrible Dailies.': '设置日常挑战中风层数叠加层数的上限。每个风区域会控制伤害，尽可能达到最大风层数。不建议在条件过于苛刻的日常挑战中使用。',
    'Daily WSM H:D': '日常风层数叠加上限生命伤害比',
    'Fiddle with this to maximise your DWSM settings. Default is 0.00025.': '此项可以用来最大化日常风层数叠加上限的数值。默认值为0.00025。',
    'Raids Maps for prestiges at zone specified in Dailies. Example: 495, will raid Maps at 501. Once all gear is obtained from the map, it will revert back to regular farming. Extremely helpful for spire. Best used in poison zones.': '日常挑战中，在特定区域袭劫地图以获得重铸升级。例如：输入495，则将在区域501袭劫地图。当获得了所有重铸升级后，将回到正常的刷资源模式。对于通过尖塔的帮助非常大。最好在毒区域中使用。',
    'You can use multiple values like this 495,506,525!': '您可以输入多个数值，格式类似 495,506,525 这样！',
    'Daily P Raiding Cell': '日常重铸袭劫格子',
    'What Cell to start P Raiding at. Recommend below your BW Raiding cell if used together. -1 to Raid at cell 1.': '在哪一个格子开始重铸袭劫。如果与仿生袭劫格子一起使用，建议设置的比仿生袭劫格子低。设为-1则在格子1开始袭劫。',
    'Daily P Raiding HD': '日常重铸袭劫生命伤害比',
    'Checks if you can raid the map. If your HD value (calculated using the maps you will raid) is below this value it will not buy the map and you will stop raiding. The higher this value the higher zones it will raid. Can raid up to +10 depending on the zone. -1 or 0 to remove this check.': '用于确认是否可以袭劫地图。如果生命伤害比(按照将要袭劫的地图进行计算)低于相应数值，则不会制造地图，且会停止袭劫。数值越大，袭劫的地图等级也就越高。根据区域不同，最高可能袭劫高于当前区域10级的地图。设为-1或0则关闭此选项。',
    'Daily P Raiding Poison': '日常重铸袭劫毒上限',
    'Maximum level of map to P Raid at in Poison. If this value is 10 it will be able to go to +10 maps in Poison. You should use this instead of the HD function if you feel the calculations are off, but you can use both if needed. -1 or 0 to have no max.': '进行重铸袭劫的毒区域地图等级超出当前区域的上限。如果相应数值为10，则最大可以在毒区域高于当前区域10级的地图进行重铸袭劫。如果您感觉生命伤害比的计算不靠谱，您可以使用此选项，当然您也可以两边都使用。设为-1或0则无上限。',
    'Daily P Raiding Ice': '日常重铸袭劫冰上限',
    'Maximum level of map to P Raid at in Ice. If this value is 10 it will be able to go to +10 maps in Ice. You should use this instead of the HD function if you feel the calculations are off, but you can use both if needed. -1 or 0 to have no max.': '进行重铸袭劫的冰区域地图等级超出当前区域的上限。如果相应数值为10，则最大可以在冰区域高于当前区域10级的地图进行重铸袭劫。如果您感觉生命伤害比的计算不靠谱，您可以使用此选项，当然您也可以两边都使用。设为-1或0则无上限。',
    'Daily Hardcore P Raiding': '日常重铸硬核袭劫',
    'EXPERIMENTAL) P Raid Harder: When enabled, always buys the highest prestige map we can afford when P raiding, with option to farm fragments for highest available prestige level.': '实验性功能)重铸硬核袭劫：启用后，尽可能在袭劫时制造可以获得最高重铸等级装备的地图。另外还有一个可以选择刷碎片地图的选项。',
    'List of maximum zones to Praid on Dailies corresponding to the list specified in Daily Praiding Z.  e.g. if Daily P raiding Z setting is 491,495 and this setting is 495,505, AT will P raid up to 495 from 491, and 505 from 495.  Set to -1 to always buy highest available prestige map.  If no corrsponding value, or value is invalid, defaults to max available (up to +': '在日常挑战中，根据日常重铸袭劫区域的数值。限制重铸袭劫地图的最大等级。例如：如果日常重铸袭劫区域设为 491,495 ，而此选项设为 495,505 ，那么脚本将会从区域491开始重铸袭劫，并且地图最大等级为495，然后从区域495开始，地图最大等级变为505。设为-1则永远制造最高等级的地图。如果两个选项数值对应不上，或者是数值不合法，则默认设为最高等级 (最高等级为区域层数加',
    'P Raiding harder: List of zones where we should farm fragments until we can afford the highest or target prestige map for P raiding. Set to -1 to never farm fragments.': '重铸硬核袭劫：当有足够资源制造相应重铸地图之前，在相应的区域刷碎片。设为-1则永远不刷碎片。',
    'P Raiding harder: List of zones where we should P Raid as far as we can afford before trying to farm fragments to Praid the highest or target prestige map.  Only occasionally useful, e.g. if it picks up a Speedexplorer or farming fragments is slow due to low damage. Set to -1 to never raid prestiges before farming fragents.': '重铸硬核袭劫：在开始刷碎片之前，在相应的区域进行重铸袭劫。只在有些时候会有用，例如攻击太低获取探险家加速过慢，或者是刷碎片过慢。设为-1则永远不在刷碎片前袭劫区域。',
    'Daily BW Raid': '日常仿生袭劫',
    'Toggle for Daily BW Raid settings.': '切换日常仿生袭劫是打开还是关闭。',
    'Daily BW Raiding Cell': '日常仿生袭劫格子',
    'What Cell to start BW Raiding at. Recommend above your P Raiding cell if used together. -1 to Raid at cell 1.': '在哪一个格子开始仿生袭劫。如果与重铸袭劫格子一起使用，建议设置的比重铸袭劫格子高。设为-1则在格子1开始袭劫。',
    'Raids BWs at zone specified in dailys. Example: 495, will raid all BWs for all gear starting from 495. Will skip lower BWs if you have enough damage. Once all gear is obtained, will return to regular farming. Accepts comma separated lists, and raids up to the value in the corrsponding position in the Max BW to raid setting. So if this is set to 480,495 and Daily Max BW to Raid is set to 500,515 AT will BW raid up to 500 from 480, and 515 from 495. Make sure these lists are the same length or BW raiding may fail.': '日常挑战中，在特定区域袭劫仿生仙境地图。例如：输入495，则将在区域495袭劫所有仿生仙境地图以获得装备升级。如果伤害值足够，则会忽略低级的仿生仙境地图。当获得了所有装备升级后，将回到正常的刷资源模式。可以以括号分隔的形式输入多个数字，袭劫的最大区域与袭劫最大区域选项的设置对应。所以，如果此项设为 480,495 而日常仿生袭劫最大区域设为 500,515 ，那么脚本将会从区域480开始仿生袭劫，并且地图最大等级为500，然后从区域495开始，地图最大等级变为515。请让两者的数值能够一一对应，否则仿生袭劫可能失效。',
    'Raids BWs until zone specified in dailys. Example: 515, will raid all BWs for all gear until 515. Will skip lower BWs if you have enough damage. Once all gear is obtained, will return to regular farming. Now accepts comma separated lists - see description of Daily Z to BW raid setting for details.': '在日常挑战中，限制仿生袭劫地图的最大等级。例如：设为515，则会仿生袭劫地图直到515级。如果伤害值足够，则会忽略低级的仿生仙境地图。当获得了所有装备升级后，将回到正常的刷资源模式。可以以括号分隔的形式输入多个数字，具体设置规则见日常仿生袭劫区域选项的相关说明。',
    'Buy Radonculous ': '氡丰购买 ',
    'Buy Radonculous %': '氡丰购买 %',
    'Buys the Radonculous bonus for': '当日常加成高于此选项中的数值时，购买氡丰加成。需花费 ',
    'DHS: High Damage': '日常传家宝：高伤',
    'HIGH DAMAGE HEIRLOOM': '高伤传家宝',
    'Enter the name of your high damage heirloom. This is your heirloom that you will use normally in dailies.': '输入您较高伤害的传家宝名称。这将是日常挑战中正常情况下使用的传家宝。',
    'DHS: Low Damage': '日常传家宝：低伤',
    'LOW DAMAGE HEIRLOOM': '低伤传家宝',
    'Enter the name of your low damage heirloom. This is the heirloom that you will use for windstacking in dailies.': '输入您较低伤害的传家宝名称。这将是日常挑战中用于风层数叠加的传家宝。',
    'Auto Start Daily': '自动开始日常挑战',
    'Starts Dailies for you. When you portal with this on, it will select the oldest Daily and run it. Use the settings in this tab to decide whats next.': '自动进行日常挑战。当打开此选项并使用传送门后，将自动选择时间最早的日常挑战并进行挑战。使用后面的设置来进一步设置。',
    'Daily in U': '日常挑战进行于宇宙',
    'If this is on, you will do your daily in U2.': '如果打开此选项，则在宇宙2进行日常挑战。',
    'Daily Portal Off': '日常传送门关闭',
    'DP: He/Hr': '日常传送门：氦/小时',
    'DP: Custom': '日常传送门：自定义',
    'Daily Portal Off / DP: He/Hr / DP: Custom': '日常传送门关闭 / 日常传送门：氦/小时 / 日常传送门：自定义',
    'Portals when your world zone is above the minium you set (if applicable) and the buffer falls below the % you have defined.': '在区域超过自动传送区域和资源收益低于缓冲值以后，自动使用传送门。',
    'Portals after clearing the zone you have defined in Daily Custom Portal.': '在通过日常自定义传送门选项设置的区域时，自动使用传送门。',
    'DP: Challenge': '日常传送后进挑战',
    'Automatically portal into this challenge when using helium per hour or custom autoportal in dailies when there are none left. Custom portals after cell 100 of the zone specified. Do not choose a challenge if you havent unlocked it.': '日常挑战中，当使用氦每小时或自定义选项时，使用传送门后自动进入相应挑战。完成相应挑战后自动使用传送门。请不要选择还没解锁的挑战。',
    'Daily Custom Portal': '日常自定义传送门',
    'Automatically portal AFTER clearing this level in dailies. (ie: setting to 200 would portal when you first reach level': '日常挑战中，在通过对应区域后，自动使用传送门。(例：设置为200后，将在此之后使用传送门：首次到达区域',
    'D: Don\'t Portal Before': '自动传送区域',
    'Do NOT allow Helium per Hour Daily AutoPortal setting to portal BEFORE this level is reached in dailies. It is an additional check that prevents drops in helium/hr from triggering autoportal in dailies. Set to 0 or -1 to completely disable this check. (only shows up with Helium per Hour set in dailies': '日常挑战中，到达相应区域之前，不自动使用传送门。此选项是为了防止氦/小时的微小波动触发自动传送门。将数值设置为0或者-1可以关闭此选项。(只在日常传送门：氦每小时选项下出现',
    'D: He/Hr Portal Buffer ': '日常氦/小时缓冲值 ',
    'D: He/Hr Portal Buffer %': '日常氦/小时缓冲值 %',
    'IMPORTANT SETTING. When using the Daily He/Hr Autoportal, it will portal if your He/Hr drops by this amount of % lower than your best for current run in dailies, default is 0% (ie: set to 5 to portal at 95% of your best in dailies). Now with stuck protection - Allows portaling midzone if we exceed set buffer amount by 5x. (ie a normal 2% buffer setting would now portal mid-zone you fall below 10% buffer).': '重要选项。当使用日常传送门：氦每小时选项时，在日常挑战中通过一个区域后，如果氦/小时低于本轮最高值相应百分比，才会自动使用传送门，默认值为0%(例：设置为5后，将在氦/小时低于最高值的95%后才自动使用传送门)。另外，此项还有防卡进度的功能 - 当氦/小时低于本轮最高值5倍相应百分比时，无论当前在区域内何处，自动使用传送门。(例：缓冲值设置为2%后，将在氦/小时低于最高值的90%时，无论当前在区域内何处，自动使用传送门)。',
    'Daily Void Zone': '日常虚空区域',
    'What zone to do void maps in dailies. Disable with -': '日常挑战中，在相应区域运行虚空地图。您也可以关闭此选项，只需输入-',
    'Daily Voids Cell': '日常虚空格子',
    'Run Voids at this Cell. -1 to run them at the default value, which is 70.': '在到达相应格子以后，运行虚空地图。设为-1则在默认值时运行虚空地图，即格子70。',
    'Daily New Voids Mod': '日常新虚空变化值',
    '0 to disable. Positive numbers are added to your Void Map zone. -1 for no cap.': '设为0则关闭此选项。设为正数则增加相应数值。设为-1则无上限。',
    'This allows you to run new Void Maps in Dailies obtained after your Void Map zone by adding this number to your Void Map zone.': '日常挑战中，通过设置此选项，可以在超过日常虚空区域获得虚空地图以后，在相应数值范围内自动运行虚空地图。',
    'Example': '举例',
    'Void map zone=187 and This setting=10. New Voids run until 197).': '如果虚空地图区域为187，此项数值为10，则将运行区域187至区域197之间的新虚空地图。',
    'This means that any new void maps gained until Z197. CAUTION: May severely slow you down by trying to do too-high level void maps. Default 0 (OFF).': '注意：可能会因为尝试过高等级的虚空地图，而严重拖慢进度。默认值为0(关闭)。',
    'New Voids Poison': '毒区域新虚空',
    'Only run new voids in poison zones.': '只在毒区域运行虚空地图。',
    'If this is on, you will do your daily in U1.': '如果打开此选项，则在宇宙1进行日常挑战。',
    'DP: Rn/Hr': '日常传送门：氡/小时',
    'Daily Portal Off / DP: Rn/Hr / DP: Custom': '日常传送门关闭 / 日常传送门：氡/小时 / 日常传送门：自定义',
    'Automatically portal into this challenge when using radon per hour or custom autoportal in dailies when there are none left. Custom portals after cell 100 of the zone specified. Do not choose a challenge if you havent unlocked it.': '日常挑战中，当使用氡每小时或自定义选项时，使用传送门后自动进入相应挑战。完成相应挑战后自动使用传送门。请不要选择还没解锁的挑战。',
    'Do NOT allow Radon per Hour Daily AutoPortal setting to portal BEFORE this level is reached in dailies. It is an additional check that prevents drops in radon/hr from triggering autoportal in dailies. Set to 0 or -1 to completely disable this check. (only shows up with Radon per Hour set in dailies': '日常挑战中，到达相应区域之前，不自动使用传送门。此选项是为了防止氡/小时的微小波动触发自动传送门。将数值设置为0或者-1可以关闭此选项。(只在日常传送门：氡每小时选项下出现',
    'D: Rn/Hr Portal Buffer ': '日常氡/小时缓冲值 ',
    'D: Rn/Hr Portal Buffer %': '日常氡/小时缓冲值 %',
    'IMPORTANT SETTING. When using the Daily Rn/Hr Autoportal, it will portal if your Rn/Hr drops by this amount of % lower than your best for current run in dailies, default is 0% (ie: set to 5 to portal at 95% of your best in dailies). Now with stuck protection - Allows portaling midzone if we exceed set buffer amount by 5x. (ie a normal 2% buffer setting would now portal mid-zone you fall below 10% buffer).': '重要选项。当使用日常传送门：氡每小时选项时，在日常挑战中通过一个区域后，氡/小时低于本轮最高值相应百分比后，才会自动使用传送门，默认值为0%(例：设置为5后，将在氡/小时低于最高值的95%后才自动使用传送门)。另外，此项还有防卡进度的功能 - 当氡/小时低于本轮最高值5倍相应百分比时，无论当前在区域内何处，自动使用传送门。(例：缓冲值设置为2%后，将在氡/小时低于最高值的90%时，无论当前在区域内何处，自动使用传送门)。',
    'Finish Challenge': '自动完成挑战',
    'DONT USE THIS WITH C2 RUNNER': '不要与挑战2自动运行同时使用',
    'Finish / Abandon Challenge2 (any) when this zone is reached, if you are running one. For manual use. Recommended: Zones ending with 0 for most Challenge2. Disable with -1. Does not affect Non-Challenge2 runs.': '到达相应区域后自动完成挑战2并放弃挑战。建议手动选择挑战使用。建议使用以0结尾的区域数值。设为-1则关闭此选项。对于非C2挑战无效。',
    'No F/L/M in C': '不雇佣农/伐/矿于挑战',
    'Buys No Farmers, Lumberjacks or Miners in the C2 challenges Watch and Trapper.': '在守望和捕手挑战中，不雇佣农民、伐木工和矿工。',
    'Tox/Nom Fight Always': '毒性/美味常时战斗',
    'Sends trimps to fight if they\'re not fighting in the Toxicity and Nom Challenges, regardless of BAF. Essenitally the same as the one in combat, can use either if you wish, except this will only activate in these challenges (duh': '在毒性/美味挑战中，当脆皮没有在战斗时，自动让它们开始战斗，无视改良自动战斗的设置。跟战斗选项卡下的常时战斗效果类似，启用任意一个均可，但此选项只在相应挑战中生效。(不然呢？',
    'C2 Armor Magic Off': '挑战2护甲：关闭',
    'CAM: Above': '挑战2护甲：超过',
    'CAM: H:D': '挑战2护甲：生命伤害比',
    'CAM: Always': '挑战2护甲：常时',
    'C2 Armor Magic Off / CAM: Above 80% / CAM: H:D / CAM: Always': '挑战2护甲：关闭 / 挑战2护甲：超过 80% / 挑战2护甲：生命伤害比 / 挑战2护甲：常时',
    'Will buy Armor to try and prevent death on Nom/Tox Challenges under the 3 conditions.': '在美味/毒性挑战中，在以下条件时自动购买护甲以尝试生存下来。',
    'Will activate at and above 80% of your HZE and when your health is sufficiently low.': '当到达最高通过区域的80%，且生命值非常低的时候，激活挑战2护甲。',
    'Mapology H:D': '地图学生命伤害比',
    'Set your H:D ratio for Mapology. Will not go into maps unless your H:D ratio is above this. -1 to use normal behaviour.': '设置地图学挑战专用的生命伤害比。除非生命伤害比高于此数值，才会运行地图。设为-1则使用正常设置。',
    'No VMs': '不运行虚空地图',
    'Turn off VM running for C2s. Handy for the C2 Runner.': '挑战2不自动运行虚空地图。对挑战2自动运行很有帮助。',
    'C2 Runner': '挑战2自动运行',
    'Runs the normal C2s in sequence according to difficulty. See C2Table for list. Once zone you have defined has been reached, will portal into next. I will advise you not to touch the challenges (abandoning, doing a different one, etc) if you are running this, it could break it. Only runs challenges that need updating, will not run ones close-ish to your HZE.': '根据难度，自动运行挑战2。具体可参考挑战2列表。当到达设定的区域时，会自动使用传送门，进入下一个挑战。建议在此过程中不要碰相关内容(如放弃挑战、选择其他挑战等)，可能会使挑战2自动运行失效。只会运行需要更新层数的挑战，不会运行接近最高通过区域的挑战。',
    'C2 Runner Portal': '挑战2传送门',
    'Automatically portal AFTER clearing this level in C2 Runner. (ie: setting to 200 would portal when you first reach level': '挑战2中，在通过对应区域后，自动使用传送门。(例：设置为200后，将在此之后使用传送门：首次到达区域',
    'C2 Runner ': '挑战2运行 ',
    'C2 Runner %': '挑战2运行 %',
    'What percent Threshhold you want C2s to be over. E.g 85, will only run C2s with HZE% below this number. Default is 85%. Must have a value set for C2 Runner to... well, run.': '挑战2结束的阈值。例如设为85，则只会运行区域低于最高通过区域85%的挑战。默认值为85%。必须设置数值后，挑战2自动运行才能正常工作。',
    'C2 Table': '挑战2列表',
    'Display your C2s and C3s in a convenient table which is colour coded.': '将挑战2和挑战3的情况显示在一个列表中。',
    'Green': '绿色',
    '= Not worth updating.': '= 无须更新层数。',
    'Yellow': '黄色',
    '= Consider updating.': '= 需要考虑更新层数。',
    'Red': '红色',
    '= Updating this C2/C3 is worth doing.': '= 需要更新层数。',
    'Blue': '蓝色',
    '= You have not yet done/unlocked this C2/C3 challenge.': '= 挑战未完成过/未解锁。',
    'c2table': '挑战2列表',
    'Hide Buildings': '隐藏建筑',
    'If you have unlocked Autostructure and Decabuild, this setting will appear and enable you to hide the now obsolete building settings, so please use AutoStructure instead. The settings will only disappear if you disable the buy buildings button and turn this on. It will not hide the Gym settings as Autostructure does not allow you to customize how you buy them.': '如果您解锁了自动建造和十重建造，此选项将会出现，您可以使用此项来隐藏过时的建筑设置，之后请使用游戏内的自动建造。相关的设置只会在脚本关闭建造，且开启此项后才会隐藏。不过，此选项不会隐藏健身房的设置，因为游戏内的自动建造无法自定义健身房相关设置。',
    'Buy Neither': '不建造任何建筑',
    'Buy Buildings & Storage': '建造所有建筑',
    'Buy Buildings': '建造非存储建筑',
    'Buy Storage': '建造存储建筑',
    'Buy Neither / Buy Buildings & Storage / Buy Buildings / Buy Storage': '不建造任何建筑 / 建造所有建筑 / 建造非存储建筑 / 建造存储建筑',
    'AutoBuys Storage when it is almost full (it even anticipates Jestimp) and Non-Storage Buildings (As soon as they are available). Takes cost efficiency into account before buying Non-Storage Buildings.': '当相应资源存储将要达到上限时，自动建造存储建筑(甚至会考虑脆皮弄臣处获得的资源)。当非存储建筑达到相应资源时，自动建造，但建造时也会考虑成本效率。',
    'Warpstation Cap': '跃迁核心上限',
    'Do not level Warpstations past Basewarp+DeltaGiga **. Without this, if a Giga wasnt available, it would level infinitely (wastes metal better spent on prestiges instead.) **The script bypasses this cap each time a new giga is bought, when it insta-buys as many as it can afford (since AT keeps available metal/gems to a low, overbuying beyond the cap to what is affordable at that first moment is not a bad thing).': '将跃迁核心的等级限制在基础跃迁核心数加上千兆核心变量的相应数值**。如果关闭此项，那么只要没有新的千兆核心升级，跃迁核心将无限升级下去(会浪费很多金属)。 **脚本在购买新的千兆核心时会忽略此项设置，而会尽可能多的进行购买(因为脚本会将金属和宝石控制在一个较低的数值，因此购买千兆核心后，尽可能的进行建造不会是个坏主意)。',
    'Buy Warp to Hit Coord': '建造跃迁核心达到协作',
    'If we are very close to hitting the next coordination, and we can afford the warpstations it takes to do it, Do it! (even if we are over the Cap/Wall). Recommended with WarpCap/WarpWall. (has no point otherwise': '如果我们离下个协作升级相差很少人口，且我们可以建造相应的跃迁核心来补足人口，那么将建造跃迁核心(即使这么做会超过跃迁核心上限或跃迁核心墙)。建议同时启用跃迁核心上限或跃迁核心墙。(否则就没有设置的意义了',
    'Max Huts': '小屋最大值',
    'Huts': '小屋',
    'Max Houses': '宅院最大值',
    'Houses': '宅院',
    'Max Mansions': '豪宅最大值',
    'Mansions': '豪宅',
    'Max Hotels': '宾馆最大值',
    'Hotels': '宾馆',
    'Max Resorts': '度假村最大值',
    'Resorts': '度假村',
    'Max Gateways': '维度裂隙最大值',
    'Gateways': '维度裂隙',
    'Max Wormholes': '虫洞最大值',
    'WARNING: Wormholes cost helium! Values below 0 do nothing.': '注意：虫洞需要花费氦！设为低于0的值不会进行建造。',
    'Max Collectors': '汲能设施最大值',
    'recommend: -': '建议值：-',
    'Max Gyms': '健身房最大值',
    'Advanced. recommend: -': '进阶设置。建议值：-',
    'Max Tributes': '贡品最大值',
    'Gym Wall': '健身房墙',
    'Conserves Wood. Only buys 1 Gym when you can afford': '节省木头。只在可以建造 ',
    'gyms wood cost (at the first one\'s price, simple math). -1 or 0 to disable. In other words, only allows gyms that cost less than 1/nth your currently owned wood. (to save wood for nurseries for new z230+ Magma nursery strategy). Takes decimal numbers. (Identical to the Warpstation wall setting which is why its called that). Setting to 1 does nothing besides stopping gyms from being bought 2 at a time due to the mastery.': '个健身房(即设置的数值)时才建造1个健身房。设为-1或0则关闭此选项。换句话说，只在健身房成本低于当前木头的1/相应数值时才进行建造(为区域230以上的托儿所节省木头)。可以输入小数(与跃迁核心的设置类似)。设为1则一次只建造一个健身房。',
    'First Gigastation': '首次千兆核心数',
    'How many warpstations to buy before your first gigastation': '在升级首个千兆核心前，建造多少个跃迁核心',
    'Delta Gigastation': '千兆核心变量',
    'YOU MUST HAVE BUY UPGRADES ENABLED!': '必须开启购买升级！',
    'How many extra warpstations to buy for each gigastation. Supports decimal values. For example 2.5 will buy +2/+3/+2/+3...': '每次千兆核心升级时，需要多建造多少个跃迁核心。可以输入小数。例如数值为2.5，则每次需要多建造2个/3个/2个/3个……',
    'Warpstation Wall': '跃迁核心墙',
    'Conserves Metal. Only buys 1 Warpstation when you can afford': '节省金属。只在可以建造 ',
    'warpstations metal cost (at the first one\'s price, simple math). -1, 0, 1 = disable. In other words, only allows warps that cost less than 1/nth your currently owned metal. (to save metal for prestiges': '个跃迁核心(即设置的数值)时才建造1个跃迁核心。设为-1、0或1则关闭此选项。换句话说，只在跃迁核心成本低于当前金属的1/相应数值时才进行建造。(为装备重铸节省金属',
    'Max Nurseries': '托儿所最大值',
    'Advanced. Recommend: -1 until you reach Magma (z230+': '进阶设置。建议值：-1，直到岩浆区(区域230以上',
    'No Nurseries Until z': '托儿所起始区',
    'Builds Nurseries starting from this zone. -1 to build from when they are unlocked.': '从此区域开始建造托儿所。设为-1则在解琐托儿所时就开始建造。',
    'Melt Smithy': '熔点铁匠铺',
    'Run the Melting Point Map to gain one extra Smithy when at or above this value.': '当超过此数值时，进入熔点地图获取额外的铁匠铺。',
    'Smithy Savings': '节约铁匠铺',
    'ABSOLUTELY WILL NOT WORK IN TESTING!': '测试性功能！',
    'Uses Smithy Saving logic when this is turned on. Make sure every SS setting is set above 0 or it wont work. This feature will stop using resources on items needed for Smithy when you have reached the targets you have selected.': '开启此选项后启用节约铁匠铺逻辑。请确保每个节约铁匠铺相关设置的值大于0，否则此选项将无效。此选项当您达到了设置的目标时，会阻止使用铁匠铺需要的资源来购买其他东西。',
    'SS: Number': '节约铁匠铺：数值',
    'Start SS at this number of Smithys. I.e 9, will buy anything regardless of Smithy before having 9 Smithys. After 9 has been reached will start to save up for them.': '从铁匠铺达到此数值后，开始节约铁匠铺。例如设为9，则在拥有9个铁匠铺之前一切照常运行，拥有9个铁匠铺后，开始限制相应资源的使用。',
    'SS: Percent': '节约铁匠铺：百分比',
    'If you have SS enabled this value will allow items below this value to be purchased. I.e if this is set to 1, it will only buy items if that item is 1% of Smithys cost or lower.': '只允许购买成本低于此百分比的东西。例如设为1，则只会购买成本低于铁匠铺成本1%的东西。',
    'SS: Seconds': '节约铁匠铺：秒数',
    'How many seconds SS starts activating at. I.e 120, if your Smithy is 120 seconds away from being purchased SS will kick in.': '激活节约铁匠铺的秒数。例如设为120，则当铁匠铺还有120秒完成时，激活节约铁匠铺。',
    'Hide Jobs': '隐藏工作',
    'Hides obsolete settings when you have obtained the AutoJobs Mastery. It should be far better to use than AT, Especially on c2 Challenges like Watch.': '获得自动工作后，此选项将会出现，您可以使用此项来隐藏过时的工作设置。考虑到C2的守望挑战，可以说自动工作比脚本更好用。',
    'Don\'t Buy Jobs': '不分配工作',
    'Auto Worker Ratios': '自动工人比例',
    'Manual Worker Ratios': '手动工人比例',
    'Don\'t Buy Jobs / Auto Worker Ratios / Manual Worker Ratios': '不分配工作 / 自动工人比例 / 手动工人比例',
    'Manual Worker Ratios buys jobs for your trimps according to the ratios below,': '手动工人比例按照下方设置的比例分配工人，',
    'Make sure they are all different values, if two of them are the same it might causing an infinite loop of hiring and firing!': '请保证它们的值各不相同，否则可能会引发雇佣和解雇的死循环！',
    'Auto Worker ratios automatically changes these ratios based on current progress,': '自动工人比例根据当前进度自动修改比例，',
    'overriding your ratio settings': '忽略相应的比例设置',
    'AutoRatios: 1/1/1 up to 300k trimps, 3/3/5 up to 3mil trimps, then 3/1/4 above 3 mil trimps, then 1/1/10 above 1000 tributes, then 1/2/22 above 1500 tributes, then 1/12/12 above 3000 tributes.': '自动比例如下：1/1/1到3e5脆皮，然后3/3/5到3e6脆皮，然后3/1/4超过3e6脆皮，然后1/1/10超过1000贡品，然后1/2/22超过1500贡品，最后1/12/12超过3000贡品。',
    'CAUTION: You cannot manually assign jobs with this, turn it off if you have to': '注意：开启此项后将无法手动分配工作，如果有需要请关闭此项',
    'Auto Magmamancers': '自动岩浆巫师',
    'Auto Magmamancer Management. Hires Magmamancers when the Current Zone time goes over 10 minutes. Does a one-time spend of at most 10% of your gem resources. Every increment of 10 minutes after that repeats the 10% hiring process. Magmamancery mastery is accounted for, with that it hires them at 5 minutes instead of 10. Disclaimer: May negatively impact Gem count.': '自动分配岩浆巫师。在当前区域停留超过10分钟以后，雇佣岩浆巫师。一次至多使用10%的宝石。在此之后，每再过10分钟，重复一次此过程。当拥有岩浆巫师学专精时，改为5分钟一次。注意：可能对宝石产量有不利影响。',
    'Farmer Ratio': '农民比例',
    'Lumberjack Ratio': '伐木工比例',
    'Miner Ratio': '矿工比例',
    'Max Scientists': '科学家最大值',
    'Advanced. Cap your scientists (This is an absolute number not a ratio). recommend: -1 (infinite still controls itself': '进阶设置。限制科学家数量(不是比例)。建议值：-1 (设为无限仍然会控制数量',
    'Max Explorers': '探险家最大值',
    'Advanced. Cap your explorers (This is an absolute number not a ratio). recommend: -': '进阶设置。限制探险家数量(不是比例)。建议值：-',
    'Max Trainers': '训练师最大值',
    'Advanced. Cap your trainers (This is an absolute number not a ratio). recommend: -': '进阶设置。限制训练师数量(不是比例)。建议值：-',
    'Auto Meteorologists': '自动气象学家',
    'Auto buy Meteorologists. This value is the percent of food you want to spend on them. 100 would hire as soon as you can afford to. 1 would hire at 1% of your food. -1 or 0 to disable.': '自动雇佣气象学家。此项数值表示最多花费的食物比例。设为100则会在可以雇佣时立刻雇佣。设为1则只在雇佣花费低于1%食物时雇佣。设为-1或0则关闭此选项。',
    'Meteorologists Zone': '气象学家区域',
    'What zone to stop buying Meteorologists at. I.e if set to 70 it will not buy any Meteorologists from z70 onwards. Use 0 or -1 to disable this check.': '停止雇佣气象学家的区域。例如设为70，则从区域70开始停止雇佣气象学家。设为0或者-1则跳过此项。',
    'Armor: Buy Neither': '护甲：关闭',
    'Armor: Buy Both': '护甲：全部',
    'Armor: Prestiges': '护甲：重铸',
    'Armor: Levels': '护甲：等级',
    'Armor: Buy Neither / Armor: Buy Both / Armor: Prestiges / Armor: Levels': '护甲：关闭 / 护甲：全部 / 护甲：重铸 / 护甲：等级',
    'AutoBuys Prestiges and Levels up the most cost efficient Armor available. Gymystic buying is controlled under this setting\'s prestige option': '自动购买重铸和升级最佳的护甲。健身学购买由重铸控制',
    'Weapons: Buy Neither': '武器：关闭',
    'Weapons: Buy Both': '武器：全部',
    'Weapons: Prestiges': '武器：重铸',
    'Weapons: Levels': '武器：等级',
    'Weapons: Buy Neither / Weapons: Buy Both / Weapons: Prestiges / Weapons: Levels': '武器：关闭 / 武器：全部 / 武器：重铸 / 武器：等级',
    'AutoBuys Prestiges and Levels up the most cost efficient Weapon available.': '自动购买重铸和升级最佳的武器。',
    'Weapon Level Cap': '武器等级限制',
    'Do not level Weapons past this number. Helps stop wasting metal when the script levels-up equip High, only to prestige right after. Recommended value: earlygame 10, lategame: 100. Disable with -1 or 0.': '限制武器等级，无法超过此数值。可以防止花了大量金属提升等级，然后马上又重铸了。建议值：早期为10，晚期为100。设为-1或0则关闭此选项。',
    'NEW': '新功能',
    'Also sub-caps to 10% of your number during liquified or overkilled(under 25sec) zones. This does not mean the script always hits the cap. Your Equip will now always be leveled to at least 2 since its the most effective level. It will only be leveled however if you dont have enoughDamage. But During Spire, everything will be leveled up to the cap.': '还会将液化或超杀(低于25秒时)区域的等级上限设为此数值的10%。当然这不意味着脚本总能达到此数值。装备至少会升到2级，因为这是性价比最高的等级。之后，只会在伤害不足时才会提升等级。不过尖塔例外，此时所有装备都会被提升到上限。',
    'Hidden var': '隐藏选项',
    'MODULES["equipment"].capDivisor = 10; //number to divide your normal cap by.': '控制台中输入：MODULES["equipment"].capDivisor = 10可以设置液化或超杀的区域等级上限比例，其中10为相应百分比，可自行修改。',
    'Armor Level Cap': '护甲等级限制',
    'Do not level Armor past this number. Helps stop wasting metal when the script levels-up equip High, only to prestige right after. Recommended value: earlygame 10, lategame: 100. Disable with -1 or 0.': '限制护甲等级，无法超过此数值。可以防止花了大量金属提升等级，然后马上又重铸了。建议值：早期为10，晚期为100。设为-1或0则关闭此选项。',
    'Also sub-caps to 10% of your number during liquified or overkilled(under 25sec) zones. This does not mean the script always hits the cap. Your Equip will now always be leveled to at least 2 since its the most effective level. It will only be leveled however if you dont have enoughHealth. But During Spire, everything will be leveled up to the cap.': '还会将液化或超杀(低于25秒时)区域的等级上限设为此数值的10%。当然这不意味着脚本总能达到此数值。装备至少会升到2级，因为这是性价比最高的等级。之后，只会在生命值不足时才会提升等级。不过尖塔例外，此时所有装备都会被提升到上限。',
    'Equipment Cut Off': '装备界限',
    'Decides when to buy gear. 4 is default. This means it will take 1 hit to kill an enemy if in D stance.': '设置购买装备的时机。默认值为4。这意味着可以在D阵型时秒杀敌人。',
    'Dynamic Prestige z': '动态重铸区域',
    'Dynamic Prestige': '动态重铸',
    'Set Target Zone number: Z #. (disable with 0 or -': '设置目标区域数值。(关闭此选项于设为0或-',
    'Skip getting prestiges at first, and Gradually work up to the desired Prestige setting you have set (set the Prestige dropdown to the highest weapon you want to end up on at the target zone you set here). Runs with Dagger to save a significant amount of time until we need better gear, then starts increasing the prestige setting near the end of the run.  Examines which prestiges you have, how many missing ones youd need to achieve the desired target and starts running maps every zone (more maps for higher settings), Until the target prestige is reached.': '一开始不获得重铸升级，之后慢慢获得设置好的重铸选项(右方重铸下拉菜单设置的重铸升级从相应数值区域后失效)。一开始只重铸匕首，可以节省大量时间，直到需要更好的装备以后，再开始重铸设置的相应装备。脚本会考虑已有的重铸升级，需要多少次升级才能达到相应数值，然后在相应的区域起开始运行地图(设置的区域越高，运行的地图就越多)，直到达到相应数值的重铸升级。',
    'Use Dagger or else': '否则将重铸匕首',
    'Prestige': '重铸',
    'Acquire prestiges through the selected item (inclusive) as soon as they are available in maps. Forces equip first mode. Automap must be enabled. THIS IS AN IMPORTANT SETTING related to speed climbing and should probably always be on something. If you find the script getting stuck somewhere, particularly where you should easily be able to kill stuff, setting this to an option lower down in the list will help ensure you are more powerful at all times, but will spend more time acquiring the prestiges in maps.': '只要地图中有相应装备的重铸升级，就立刻获取。强制启用装备优先模式。必须开启自动地图。此设置合理与否可以决定冲层速度快慢。如果感觉设置此项后，游戏在之前轻松通过的层数卡住了，那说明您应该选择更下方的选项。不过这么做的话，在地图中获取重铸升级的时间也会越长。',
    'Force Prestige Z': '强制重铸区域',
    'On and after this zone is reached, always try to prestige for everything immediately, ignoring Dynamic Prestige settings and overriding that of Linear Prestige. Prestige Skip mode will exit this. Disable with -1.': '从此区域开始，忽略其他重铸顺序设置，总是立刻获取所有重铸升级。重铸跳过模式激活后此项失效。设为-1则关闭此选项。',
    'Prestige Skip Off': '关闭重铸跳过',
    'Prestige Skip 1 &': '重铸跳过 1 &',
    'Prestige Skip': '重铸跳过',
    'Prestige Skip Off / Prestige Skip 1 & 2 / Prestige Skip 1 / Prestige Skip': '关闭重铸跳过 / 重铸跳过 1 & 2 / 重铸跳过 1 / 重铸跳过',
    'If there are more than 2 Unbought Prestiges (besides Shield), ie: sitting in your upgrades window but you cant afford them, AutoMaps will not enter Prestige Mode, and/or will exit from it. The amount of unboughts can be configured with this variable MODULES["maps"].SkipNumUnboughtPrestiges = 2;': '如果有2个以上未购买的重铸升级(除盾牌以外)，也就是有2个以上升级在升级窗口中可以看到，但没有足够的资源来购买时，自动地图将不会进入重铸模式，并且会退出重铸模式。未购买的重铸升级数量可以在控制台中输入MODULES["maps"].SkipNumUnboughtPrestiges = 2修改，其中2为相应数值，可自行修改；',
    'If there are 2 or fewer': '如果',
    'Unobtained Weapon Prestiges in maps': '地图中未获得的武器重铸升级',
    'ie: there are less than 2 types to run for, AutoMaps will not enter Prestige Mode, and/or will exit from it. For users who tends to not need the last few prestiges due to resource gain not keeping up. The amount of unboughts can be configured with MODULES.maps.UnearnedPrestigesRequired. If PrestigeSkipMode is enabled, both conditions need to be reached before exiting.': '数量少于2个，也就是少于2种武器重铸升级时，自动地图将不会进入重铸模式，并且会退出重铸模式。此项用来跳过一些成本过高的重铸升级。未获得的武器重铸升级数量可以在控制台中输入MODULES.maps.UnearnedPrestigesRequired = 2修改，其中2为相应数值，可自行修改。如果模式1和模式2都启用了，那么两个条件都必须同时满足才会激活重铸跳过。',
    'Delay Armor Prestige': '延迟护甲重铸',
    'Delays buying armor prestige-upgrades during Want More Damage or Farming automap-modes, Although if you need health AND damage, it WILL buy armor prestiges tho. NOTE': '如果自动地图模式目前是需要更多伤害模式或者刷资源模式，则延迟购买护甲重铸升级。不过在需要更多生命值和伤害模式中仍然会购买护甲重铸升级。注意',
    'Applies to Prestiges only': '只对重铸有效',
    'Buy Shield Block': '购买盾牌格挡',
    'Will buy the shield block upgrade. CAUTION: If you are progressing past zone 60, you probably don\'t want this :': '购买盾牌格挡升级。注意：如果您能够到达区域60以上，您恐怕就不再需要这个升级了 :',
    'Buy Armor on Death': '死亡时购买护甲',
    'Buys 10 levels of Armor when Trimps die. Useful when your trimps die frequentely.': '脆皮死亡时购买10级护甲。脆皮死亡过于频繁时会很有用。',
    'Gear Levels to Buy': '单次装备购买等级',
    'Set the amount of Gear Levels to buy for AT. I.e if set to 1 will buy 1 level at a time. Recommended value 1.': '设置脚本一次购买的装备等级数量。例如：设为1则一次购买1级装备。建议值为1。',
    'MUST ALWAYS HAVE A VALUE GREATER THAN 0!': '必须设置为大于0的数值！',
    'Always Level': '常时等级',
    'Always buys level 2 of weapons and armor regardless of efficiency': '无视效率，常时购买2级武器和护甲',
    'Auto Maps Off': '关闭自动地图',
    'Auto Maps On': '开启自动地图',
    'Auto Maps No Unique': '非独特自动地图',
    'Auto Maps Off / Auto Maps On / Auto Maps No Unique': '关闭自动地图 / 开启自动地图 / 非独特自动地图',
    'Automaps. The no unique setting will not run unique maps such as dimensions of anger. Recommended ON.': '自动地图开关。非独特自动地图不会进入类似愤怒维度的独特地图。建议开启。',
    'AM Portal': '传送后自动地图',
    'Makes sure Auto Maps is on after portalling. Turn this off to disable this and remember your choice.': '使用传送门后开启自动地图。如果关闭了此项，请记得手动开启自动地图。',
    'Dynamic Siphonology': '动态虹吸学',
    'Recommended Always ON. Use the right level of siphonology based on your damage output. IE: Only uses  siphonology if you are weak. With this OFF it means it ALWAYS uses the lowest siphonology map you can create. Siphonology is a perk you get at level 115-125ish, and means you receive map bonus stacks for running maps below your current zone - Up to 3 zones below (1 per perk level).': '建议常时开启。根据您的伤害输出情况自动选择虹吸学对应的地图等级。例如：只在您比较弱小的时候使用虹吸学。如果关闭此项，则永远使用虹吸学对应最低的等级制造地图。虹吸学是区域115至125左右可以获得的一个特权，可以从更低等级的地图获得地图奖励。',
    'Prefer Metal Maps': '倾向于金属地图',
    'Always prefer metal maps, intended for manual use, such as pre-spire farming. Remember to turn it back off after you\'re done farming!': '总是倾向于使用金属地图。用于手动操作，例如尖塔前刷资源。刷完以后记得关闭此项！',
    'Map Selection': '地图选择',
    'Select which you prefer to use. Recommend Plentiful (Gardens) if you have unlocked it.': '选择倾向使用的地图。如果已经解锁花园(或丰饶)，建议选择它。',
    'Max MapBonus After': '最大地图奖励起点',
    'Always gets Max Map Bonus from this zone on. (inclusive and after).': '从此区域开始，总是获取最大地图奖励。',
    'NOTE': '注意',
    'Set -1 to disable entirely (default). Set 0 to use it always.': '设为-1则关闭此选项(默认值)。设为0则总是使用。',
    'Advanced': '进阶设置',
    'User can set a lower number than the default 10 maps with the AT hidden console command: MODULES["maps"].maxMapBonusAfterZ = 9;': '您可以在控制台输入以下命令修改此选项获取的地图奖励数，需要低于10：MODULES["maps"].maxMapBonusAfterZ = 9，其中9为相应数值，可自行修改。',
    'Max MapBonus Limit': '最大地图奖励界限',
    'Limit the amount of Map Bonuses you get. Default is 10.': '限制获取地图奖励的最大值。默认值为10。',
    'Max MapBonus Health': '最大地图奖励生命值',
    'Limit the amount of map bonuses you get when AutoMaps requires more health. Default is 10.': '限制当自动地图处于需要更多生命值模式下，获取地图奖励的最大值。默认值为10。',
    'Map Cut Off': '地图界限',
    'Decides when to get max map bonus. 4 is default. This means it will take 1 hit to kill an enemy if in D stance.': '设置获取最大地图奖励的时机。默认值为4。这意味着可以在D阵型时秒杀敌人。',
    'Farming H:D': '刷资源生命伤害比',
    'If H:D goes above this value, it will farm for Damage & Health. The lower this setting, the more it will want to farm. Default is': '如果生命伤害比高于此数值，则会进入刷资源模式。数值越低，刷资源越频繁。默认值为',
    '1 to disable farming!': '1则关闭刷资源模式！',
    'Lower Farming Zone': '降低刷资源区域',
    'Lowers the zone used during Farming mode. Uses the dynamic siphonology code, to Find the minimum map level you can successfully one-shot, and uses this level for any maps done after the first 10 map stacks. The difference being it goes LOWER than what Siphonology gives you map-bonus for, but after 10 stacks you dont need bonus, you just want to do maps that you can one-shot. Goes as low as 10 below current zone if your damage is that bad, but this is extreme and indicates you should probably portal.': '在刷资源模式中，降低使用的地图等级。在到达最大地图奖励前，会考虑虹吸学对应的等级，尽可能找到秒杀敌人的地图等级，在那之后，会选择任何等级的地图。因为获得最大地图奖励后，您也不需要再考虑地图奖励和虹吸学，只需要秒杀敌人就可以了。最低可以选择低于当前区域10级的地图，但那也意味着您的伤害太低，该使用传送门了。',
    'Farm on >7 NOMstacks': '美味超过7层则刷资源',
    'Optional. If Improbability already has 5 NOMstacks, stack 30 Anticipation. If the Improbability has >7 NOMstacks on it, get +200% dmg from MapBonus. If we still cant kill it, enter Farming mode at 30 stacks, Even with DisableFarming On! (exits when we get under 10x). Farms if we hit 100 stacks in the world. If we ever hit (100) nomstacks in a map (likely a voidmap), farm, (exit the voidmap) and (prevent void from running, until situation is clear). Restarts any voidmaps if we hit 100 stacks.': '可选。如果一个乌有者拥有了5层美味，则尝试获得30层预期。如果乌有者超过7层美味，则尝试获得200%地图奖励。如果仍然无法击杀它，那么在30层美味的时候进入刷资源模式，无视刷资源模式开关(当生命伤害比低于10x时退出)。在世界上，当美味到达100层时进入刷资源模式。如果在地图中到达了100层美味，则进入刷资源模式，并且在完成刷资源之前不进入虚空地图。当到达100层美味时重新开始虚空地图。',
    '0 to disable': '设为0则关闭此选项',
    'The zone at which you want all your void maps to be cleared inclusive of the zone you type. Runs them at Cell 70. Use odd zones on Lead.': '设置通过所有虚空地图的区域数值。在该区域的格子70进入虚空地图。在领导挑战中请设为奇数。',
    'Voids Cell': '虚空格子',
    'New Voids Mod': '新虚空变化值',
    'This allows you to run new Void Maps obtained after your Void Map zone by adding this number to your Void Map zone.': '在超过虚空地图对应区域获得虚空地图以后，在相应数值范围内自动运行虚空地图。',
    'Stacked Voids Only': '只运行融合虚空地图',
    'Only run stacked voids.': '只运行融合的虚空地图。',
    'I don\'t really think doing this automatically is a good idea. You might want to farm for a bit before this, but I\'m not sure if it\'s meaningful at all to make a \'farm X minutes before trimple\' parameter to go along with it. Set it to the zone you want and it will run Trimple of Doom for Ancient Treasure AFTER farming and getting map stacks. If it is a negative number, this will be disabled after a successful run so you can set it differently next time.': '自动末日神殿似乎并不是个好主意。您可能想要在进入末日神殿之前刷一会儿资源，但增加更详细的选项也没什么意义。设置此数值为您想要进入末日神殿的区域，那么在完成刷资源和获取地图奖励后，将在相应区域进入末日神殿。如果此选项设为负数，则在完成一次以后关闭此选项，以便您下次设为不同数字使用。',
    'Map Special Modifier': '地图特殊修饰符',
    'BELOW 300 ONLY': '只在区域300以下有效',
    'Attempt to select the BEST map special modifier. When starting a map for': '尝试选择最好的地图修饰符。当运行地图是为了 ',
    'it will use': '升级时，会使用',
    '. When starting a map for': '修饰符。当运行地图是为了 ',
    'Farming': '刷资源',
    '(for equipment) it will use your best metal cache. In any other case (such as farming for map stacks) it will use': '(升级装备)时，会使用最好的金属储藏箱修饰符。其他情况下(例如获取地图奖励)，会使用',
    '. In all cases it uses the best modifier that can be afforded.': '修饰符。总之，它会尽可能选择最好的修饰符。',
    'VM Scryer': '虚空地图占卜阵型',
    'Only use if you have Scryhard II, for er, obvious reasons. Works without the scryer options.': '请只在拥有努力占卜 II专精时开启，原因不用多说。无需占卜阵型相关设置也能生效。',
    'VM Buy Weps': '虚空地图购买武器',
    'Buys gear in Void maps regardless of your H:D ratio. Useful if you want to overkill as much as possible.': '虚空地图中无视生命伤害比购买装备。对于超杀会有帮助。',
    'Automaps. The no unique setting will not run unique maps such as dimensions of rage. Recommended ON.': '自动地图开关。非独特自动地图不会进入类似暴怒维度的独特地图。建议开启。',
    'Plentiful': '丰饶',
    'Hits Survived': '伤害承受次数',
    'Set this value to tell the script how many enemy attacks you wish to survive for. The default is 10. The lower this is the less health the script will get. If you set this too high it will farm too much so please be careful.': '设置想要承受多少次攻击才死亡。默认值为10。数值越低，脚本的生命值目标就越低。如果设置过高，可能脚本会花过多时间刷资源，所以请小心设置。',
    'Farms for specified minutes in TF: Time at zone according to this settings value. Can use 59,61,62.': '在特定的区域，以定时刷图：数值中设置的时间来刷资源。可以输入多个数值，格式类似 59,61,62 这样。',
    'TF: Cell': '定时刷图：格子',
    'Time Farm at this Cell. -1 to run them at the default value, which is 1.': '在此格子开始定时刷图。设为-1则在默认值时开始定时刷图，即格子1。',
    'TF: Tribute': '定时刷图：贡品',
    'Turn this on if you want to turn TF: Time into Tribute Farming. If this is set to true TF: Time will work as A tribute setting. I.e if TF: Time is set to 750 tributes, it will farm at TF zone till that many tributes as been built. Uses TF Settings.': '如果您想用定时刷图来刷贡品，请开启此选项。开起此项后，定时刷图：数值的作用变为贡品的目标值。例如：如果定时刷图：数值设为750，则直到贡品达到相应数值时，将一直停留在相应区域刷资源。其他定时刷图设置也有效。',
    'TF': '定时刷图',
    'TF：黑色泥沼': '定时刷图：黑色泥沼',
    'Turn this on if you want to use Black Bogs for farming instead of your map selection. Only works at z70. Will abandon Black Bog before completing to preserve stacks.': '如果您想用黑色泥沼代替定时刷图：地图的选项来刷资源，请开启此选项。只在区域70有效。在通过黑色泥沼之前会放弃地图，以保留层数。',
    'How many minutes to farm at zone specified in TF. Can use 2,3,4. These values should match up to your TF zones. If using TF and TF: Times examples (59 and 2) it will farm at z59 for 2 minutes.': '定时刷图时在相应的区域刷多少分钟。可以输入多个数值，格式类似 2,3,4 这样。请让此项的数值与定时刷图的数值能够一一对应。例如：将定时刷图设为59，定时刷图：数值设为2的话，将在区域59刷资源2分钟。',
    'What map level to use. Can use -1,1,2. -1 to use a level down from world (Map Reducer mastery gives loot equal to world one level down), 0 to use world, 1 etc to use +maps. Using 0 by itself will use global level for all maps.': '使用的地图等级。可以输入多个数值，格式类似 -1,1,2 这样。设为-1则地图等级比世界区域数低1，0则相同，1则比世界区域高1，依此类推。',
    'TF: Map Selection': '定时刷图：地图',
    'Select which map you prefer to use.': '选择想要使用的地图。',
    'TF: Special Selection': '定时刷图：修饰符',
    'Select which Special to use. May bug out if you cannot afford selected. Also overrides your autojobs to buy workers relating to the resource you want to farm. I.e if LFC is chosen all workers will be hired as farmers and rest fired for the duration of farm.': '选择想要使用的特殊修饰符。如果碎片不够的话可能会卡死。另外，会强制将自动工作设为雇佣相关的工人。例如：选择大美味储藏箱以后，在刷资源期间，所有工人都将成为农民。',
    '0 = None': '0 = 无修饰符',
    'fa = Fast Attacks': 'fa = 快速攻击',
    'lc = Large Cache': 'lc = 大储藏箱',
    'ssc = Small Savory Cache': 'ssc = 小美味储藏箱',
    'swc = Small Wooden Cache': 'swc = 小木头储藏箱',
    'smc = Small Metal Cache': 'smc = 小金属储藏箱',
    'src = Small Research Cache': 'src = 小研究储藏箱',
    'p = Prestigous': 'p = 重铸',
    'hc = Huge Cache': 'hc = 巨大储藏箱',
    'lsc = Large Savory Cache': 'lsc = 大美味储藏箱',
    'lwc = Large Wooden Cache': 'lwc = 大木头储藏箱',
    'lmc = Large Metal Cache': 'lmc = 大金属储藏箱',
    'lrc = Large Research Cache': 'lrc = 大研究储藏箱',
    'TF: Gather Selection': '定时刷图：采集',
    'Select which resource to Gather.': '选择采集的资源。',
    'Default': '默认',
    'Run Prismatic Palace when its unlocked.': '当棱镜宫殿解锁后，运行之。',
    '1 to disable. When to run the map Melting Point. Use it like this: 50,91. The first number is what zone Melting Point should be run at, the second number is what Cell to run it at. In this example AutoMaps would run Melting Point at z50 cell 91. Must define both values. Works in the challenges Melt and Trappapalooza.': '1则关闭此选项。用于设置运行熔点地图的时机。可以输入两个数值，格式类似 50,91 这样。第一个数字用于设置运行熔点地图的区域，第二个数字用于设置运行熔点地图的格子。前面的例子中，将在区域50的格子91处运行熔点地图。必须设置两个数值才能生效。用于熔化挑战和捕手道达人挑战。',
    'Enable Bog Running for Quagmire.': '允许在泥淖挑战中运行黑色泥沼地图。',
    'What zones to run Black Bogs at. Can use 40,50,60.': '设置运行黑色泥沼地图的区域。可以输入多个数值，格式类似 40,50,60 这样。',
    'How many Black Bogs to at specified zones. Can use 8,9,10. I.e if BB: Zone had 40,50 and this setting had 8,10, It would run 8 Black Bogs at z40 and 10 Black Bogs at z50.': '在相应的区域运行黑色泥沼地图的次数。可以输入多个数值，格式类似 8,9,10 这样。例如：黑色泥沼：区域设为40,50，此项设为8,10，则在区域40运行8次黑色泥沼，然后在区域50运行10次黑色泥沼。',
    'Max Map Bonus for Spire': '尖塔前获得最大地图奖励',
    'Get max map bonus before running the Spire.': '是否在进入尖塔前获得最大的地图奖励。',
    'Farm Before Spire': '尖塔前刷资源',
    'Farm level 200/199(or BW) maps for X minutes before continuing onto attempting Spire.': '在进入尖塔前，用相应的分钟数刷200/199级地图(或仿生仙境)。',
    'Set 0 to disable entirely (default).': '设为0则完全关闭此选项(默认值)。',
    'Setting to -1/Infinite does not work here, set a very high number instead.': '设为-1/无穷大在这里无效，请设为一个大数字。',
    'Ignore Spires Until': '尖塔无效层',
    'Spire specific settings like end-at-cell are ignored until at least this zone is reached (0 to disable).': '尖塔的相关设置直到相应层数前无效(设为0则关闭此选项)。',
    'Does not work with Run Bionic Before Spire.': '如果进入尖塔前刷的是仿生仙境，则此项无效。',
    'Exit Spire After Cell': '尖塔退出格',
    'Optional/Rare. Exits the Spire early, after completing cell X. example: 40 for Row 4. (use 0 or -1 to disable': '可选/罕有用。在哪一格退出尖塔。例如：设为40则在完成第四行以后退出尖塔。(设为0或-1则关闭此选项',
    'Spire Breed Timer': '尖塔繁殖计时',
    'ONLY USE IF YOU USE VANILLA GA': '除非使用通常的遗传学家助手设置，否则不要使用此项！',
    'Set a time for your GA in spire. Recommend not touching GA during this time.': '设置尖塔内的繁殖计时。建议这段时间内不要改变遗传学家助手的设置。',
    'Nurseries pre-Spire': '尖塔托儿所',
    'Set the maximum number of Nurseries to build for Spires. Overrides No Nurseries Until z and Max Nurseries so you can keep them seperate! Will build nurseries before z200 for Spire 1, but only on the zone of Spires 2+ to avoid unnecessary burning. Disable with -1.': '设置在进入尖塔前的托儿所数量上限。先于建筑选项卡的托儿所起始区和托儿所上限生效，这样您就可以单独管理尖塔的设置了！在进入尖塔1之前，会在区域200之前购买托儿所，但在那之后的尖塔只会在尖塔相应的区域建造托儿所，以避免托儿所被无意义地烧掉。设为-1则关闭此选项。',
    'Buy Gear in Spire': '尖塔购买装备',
    'Will buy Weapons and Armor in Spire regardless of your H:D ratio. Respects your max gear level and ignore spires setting.': '在尖塔中无视生命伤害比购买装备。装备等级限制仍然有效，但尖塔相关设置则无效。',
    'Skip Spires': '跳过尖塔',
    'Will disregard your H:D ratio after Farm Before Spire is done (if set). Useful to die in spires if farming takes too long': '当完成尖塔前刷资源以后，无视生命伤害比进入尖塔。如果刷资源花费时间过长，可以强行死在尖塔中以跳过尖塔',
    'Raids Maps for prestiges at zone specified. Example: 495, will raid Maps at 501-505 sequentially. Once all gear is obtained from the maps, it will revert back to regular farming. Use P Raiding HD to determine how many extra maps you wish you raid. Extremely helpful for spire. Best used in poison zones.': '在特定区域袭劫地图以获得重铸升级。例如：输入495，则将在区域501至区域505袭劫地图。当获得了所有重铸升级后，将回到正常的刷资源模式。使用重铸袭劫生命伤害比来设定袭劫的地图数量。对于通过尖塔的帮助非常大。最好在毒区域中使用。',
    'P Raiding Cell': '重铸袭劫格子',
    'P Raiding HD': '重铸袭劫生命伤害比',
    'P Raiding Poison': '重铸袭劫毒上限',
    'P Raiding Ice': '重铸袭劫冰上限',
    'Hardcore P Raiding': '重铸硬核袭劫',
    'List of maximum zones to Praid corresponding to the list specified in Praiding zones.  e.g. if P raiding zones setting is 491,495 and this setting is 495,505, AT will P raid up to 495 from 491, and 505 from 495. Set to -1 to always buy highest available prestige map.  If no corrsponding value, or value is invalid, defaults to max available (up to +': '根据重铸袭劫区域的数值。限制重铸袭劫地图的最大等级。例如：如果重铸袭劫区域设为 491,495 ，而此选项设为 495,505 ，那么脚本将会从区域491开始重铸袭劫，并且地图最大等级为495，然后从区域495开始，地图最大等级变为505。设为-1则永远制造最高等级的地图。如果两个选项数值对应不上，或者是数值不合法，则默认设为最高等级 (最高等级为区域层数加',
    'BW Raiding': '仿生袭劫',
    'Raids BW at zone specified in BW Raiding Z/max.': '切换是否在特定区域袭劫仿生仙境地图。',
    'BW Raiding Cell': '仿生袭劫格子',
    'Raids BWs at zone specified. Example: 495, will raid all BWs for all gear starting from 495. Will skip lower BWs if you have enough damage. Once all gear is obtained, will return to regular farming. Accepts comma separated lists, and raids up to the value in the corrsponding position in the Max BW to raid setting. So if this is set to 480,495 and Max BW to Raid is set to 500,515 AT will BW raid up to 500 from 480, and 515 from 495. Make sure these lists are the same length or BW raiding may fail.': '在特定区域袭劫仿生仙境地图。例如：输入495，则将在区域495袭劫所有仿生仙境地图以获得装备升级。如果伤害值足够，则会忽略低级的仿生仙境地图。当获得了所有装备升级后，将回到正常的刷资源模式。可以以括号分隔的形式输入多个数字，袭劫的最大区域与袭劫最大区域选项的设置对应。所以，如果此项设为 480,495 而日常仿生袭劫最大区域设为 500,515 ，那么脚本将会从区域480开始仿生袭劫，并且地图最大等级为500，然后从区域495开始，地图最大等级变为515。请让两者的数值能够一一对应，否则仿生袭劫可能失效。',
    'Raids BWs until zone specified. Example: 515, will raid all BWs for all gear until 515. Will skip lower BWs if you have enough damage. Once all gear is obtained, will return to regular farming. Now accepts comma separated lists - see description of Z to BW raid setting for details.': '限制仿生袭劫地图的最大等级。例如：设为515，则会仿生袭劫地图直到515级。如果伤害值足够，则会忽略低级的仿生仙境地图。当获得了所有装备升级后，将回到正常的刷资源模式。可以以括号分隔的形式输入多个数字，具体设置规则见仿生袭劫区域选项的相关说明。',
    'Raids Maps for prestiges at zone specified. Example: 495, will raid Maps at 501. Once all gear is obtained from the map, it will revert back to regular farming. Extremely helpful for spire. Best used in poison zones.': '在特定区域袭劫地图以获得重铸升级。例如：输入495，则将在区域501袭劫地图。当获得了所有重铸升级后，将回到正常的刷资源模式。对于通过尖塔的帮助非常大。最好在毒区域中使用。',
    'Praiding': '宇宙2重铸袭劫',
    'MASTER BUTTON': '总开关',
    'Toggle Prestige Raiding. Use PR: Zone, PR: Raid and PR: Cell to Raid Prestiges in higher Maps.': '切换是否开启宇宙2重铸袭劫。详细设置宇宙2重铸袭劫：区域、宇宙2重铸袭劫：地图、宇宙2重铸袭劫：格子后可以在高等级地图中袭劫重铸升级。',
    'I.e: World is 95, PR: Zone is [95,105], PR: Raid is [105,115], PR: Cell is 1. Will go into map creation at cell 1, create maps 101, 102, 103, 104, 105 with Prestige option. If you can\'t afford P maps, it will try without. If still unable to afford will buy the highest maps first without buying 101 and 102 for example. Raiding will take longer if you can\'t afford it. Once all maps are created it will run the lowest created then move onto the next till all created maps are finished. If you have enabled PR: Recycle it will then recycle those maps. There may be more options in the future depending on content added.': '例如：当前为区域95，宇宙2重铸袭劫：区域设为 95,105 ，宇宙2重铸袭劫：地图设为 105,115 ，宇宙2重铸袭劫：格子设为1。那么将会在格子1开始进入地图界面，并以重铸修饰符制造101，102，103，104，105级的地图。如果碎片不够制造重铸修饰符地图，那么将改为制造无修饰符的地图。如果仍然不够碎片，那么将会从最高级的地图开始制造，直到碎片耗尽。碎片不够可能导致宇宙2重铸袭劫花费更久时间。所有地图都制造好了以后，将从最低级的地图开始运行，然后按顺序运行，直到所有地图运行完毕。如果您开启了宇宙2重铸袭劫：回收，那么此时所有地图将被回收。基于今后添加的内容，未来可能有更多选项。',
    'Zones to Prestige Raid. Can use 95,105,115!': '宇宙2重铸袭劫的区域。可以输入多个数值，格式类似 95,105,115 这样！',
    'What Maps to Raid. Corrosponds to PR: Zone, so first value will corrospond to first value in PR: Zone. Can use 105,115,125!': '宇宙2重铸袭劫的地图。与宇宙2重铸袭劫：区域选项一一对应，可以输入多个数值，格式类似 105,115,125 这样！',
    'PR: Cell': '宇宙2重铸袭劫：格子',
    'What Cell to start Prestige Raiding at. Recommend below your BW Raiding cell if used together. -1 to Raid at cell 1.': '在哪一个格子开始宇宙2重铸袭劫。如果与仿生袭劫格子一起使用，建议设置的比仿生袭劫格子低。设为-1则在格子1开始袭劫。',
    'PR: Frag': '宇宙2重铸袭劫：正常碎片',
    'PR: Frag Min': '宇宙2重铸袭劫：最小碎片',
    'PR: Frag Max': '宇宙2重铸袭劫：最大碎片',
    'PR: Frag / PR: Frag Min / PR: Frag Max': '宇宙2重铸袭劫：正常碎片 / 宇宙2重铸袭劫：最小碎片 / 宇宙2重铸袭劫：最大碎片',
    'Farm for fragments to afford the maps you want to create. PR: Frag Min is used for absolute minimum frag costs (which includes no Prestige special, perfect sliders, random map and the difficulty and size options, however it will try to afford those options first!) and prioritises buying the most maps for a smoother sequential raid. PR: Frag Max is used for the ultimate Raiding experience. This option will probably take the most time to farm but may save you time in the actual raid. I would recommend using Min Mode if you don\'t have frag drop or explorer effic on your heirloom and Max if you are confident in your Fragment gains.': '切换如何刷碎片以制造地图。宇宙2重铸袭劫：最小碎片只获得最少的碎片来制造地图(意味着地图基本上无修饰符，无完美滑块，选项全随机，但仍然会尽可能的尝试这些选项)，优先购买尽可能多的地图以使袭劫过程更平滑。宇宙2重铸袭劫：最大碎片则相反，将所有选项全部开至最大。此项可能需要更多时间来刷资源，但袭劫则可能节省一些时间。请根据您的碎片收益情况进行选择。',
    'PR: Recycle': '宇宙2重铸袭劫：回收',
    'Recycle maps created in Prestige Raiding.': '切换是否回收宇宙2重铸袭劫制造的地图。',
    'Turn WS On!': '请开启风层数叠加！',
    'Turn on Windstacking Stance in Combat to see the settings!': '战斗选项卡下将自动阵型切换为风层数叠加以看到相关选项！（此项无实际作用）',
    'Windstack Min Zone': '风层数叠加最小区域',
    'For use with Windstacking Stance, enables windstacking in zones above and inclusive of the zone set. (Get specified windstacks then change to D, kill bad guy, then repeat). This is designed to force S use until you have specified stacks in wind zones, overriding scryer settings. All windstack settings apart from WS MAX work off this setting.': '用于风阵型，在相应数值以上的区域才触发风层数叠加。(达到特定的风层数，然后切换为D阵型，击杀敌人，再重复此流程。)此项先于占卜阵型生效。但后面两个日常风层数叠加的设置会使此选项无效。',
    'Windstack H:D': '风层数叠加生命伤害比',
    'For use with Windstacking Stance, fiddle with this to maximise your stacks in wind zones.': '用于风阵型。此选项可以用来最大化风区域的风层数。当生命伤害比高于相应数值时不会使用风阵型。当低于的时候会使用。',
    'Windstack Stacks': '风层数叠加层数',
    'For use with Windstacking Stance. Amount of windstacks to obtain before switching to D stance. Default is 200, but I recommend anywhere between 175-190.  In Wind Enlightenment it will add 100 stacks to your total automatically. So if this setting is 200 It will assume you want 300 stacks instead during enlightenment.': '用于风阵型。达到相应风层数后，再切换到D阵型。默认值为200，但个人建议设置为175至190之间的数字。如果开启了风之启迪，则自动在此数值上追加100。所以如果您将此项设置为200，那么在风之启迪开启时，会自动叠加到300层。',
    'Wind Damage Cutoff': '风装备界限',
    'Set this value to optimise your windstacking. Can work without AS3, but not recommended. AT normally uses 4 as its cutoff. I.e if the cutoff is above 4 it will buy max equipment. If you set this to 160, it will not get more damage till you are above x160. Essentially, the higher the value, the less damage AT wants to get, this will enable you to windstack to incredibly high amounts. -1 to disable/go back to default. Must set your windstacking min zone to use.': '设置数值来优化风层数叠加。可以在没有风阵型的情况下生效，但不建议。脚本通常使用4作为装备界限数值，例如：界限数值超过4的时候，会购买最大数量的装备。如果您将此项设为160，则只在界限数值超过160的时候才会购买。简而言之，此数值越高，脚本升级装备就越少，此项可以让您将风层数叠加到非常高。设为-1则关闭此选项，恢复默认设置。必须设置日常风层数叠加最小区域才能正常使用。',
    'Wind Map Cutoff': '风地图界限',
    'Set this value to optimise your windstacking. Can work without AS3, but not recommended. AT normally uses 4 as its cutoff. I.e if the cutoff is above 4 it will get map bonus. If you set this to 160, it will not get more map bonus till you are above x160. Essentially, the higher the value, the less damage AT wants to get, this will enable you to windstack to incredibly high amounts. -1 to disable/go back to default. Must set your windstacking min zone to use.': '设置数值来优化风层数叠加。可以在没有风阵型的情况下生效，但不建议。脚本通常使用4作为地图界限数值，例如：界限数值超过4的时候，会去获得地图奖励。如果您将此项设为160，则只在界限数值超过160的时候才会去获得奖励。简而言之，此数值越高，脚本获得地图奖励就越少，此项可以让您将风层数叠加到非常高。设为-1则关闭此选项，恢复默认设置。必须设置日常风层数叠加最小区域才能正常使用。',
    'WS MAX': '风层数叠加上限',
    'For maximising Windstacking an entire run. Withholds damage to try and get your max windstacks every wind zone. Not recommended for normal usage. Good for BPs.': '设置风层数叠加层数的上限。每个风区域会控制伤害，尽可能达到最大风层数。不建议在通常情况下使用。仅建议用于刷骨头传送门的数值。',
    'WSM H:D': '风层数叠加上限生命伤害比',
    'Fiddle with this to maximise your WSM settings. Default is 0.00025.': '此项可以用来最大化风层数叠加上限的数值。默认值为0.00025。',
    'ATGA MASTER BUTTON': '自动遗传学家总开关',
    'AT Geneticassist. Do not use vanilla GA, as it will conflict otherwise. May get fucky with super high values.': '切换是否启用自动遗传学家。请不要同时启用通常的遗传学家助手，否则可能会冲突。数值过大时可能会出问题。',
    'ATGA: Gen %': '自动遗传学家：通常 %',
    'ATGA: Gen ': '自动遗传学家：通常 ',
    'ATGA: Geneassist ': '自动遗传学家：遗传学家助手 ',
    'ATGA will only hire geneticists if they cost less than this value. E.g if this setting is 1 it will only buy geneticists if they cost less than 1% of your food. Default is 1%.': '自动遗传学家只会在花费低于此百分比时雇佣遗传学家。例如：如果此项设为1，则只在遗传学家花费低于食物总量1%时雇佣遗传学家。默认值为1%。',
    'ATGA: Timer': '自动遗传学家：计时',
    'ATGA Timer': '自动遗传学家计时',
    'This is the default time your ATGA will use.': '自动遗传学家使用的默认计时。',
    'ATGA: T: Before Z': '自动遗传学家：计时：前生效区域',
    'ATGA Timer: Before Z': '自动遗传学家计时：前生效区域',
    'ATGA will use the value you define in ATGA: T: BZT before the zone you have defined in this setting, overwriting your default timer. Useful for Liq or whatever.': '在此区域之前，将使用自动遗传学家计时：前生效区域计时中的数值，忽略默认计时。对液化等有帮助。',
    'ATGA: T: BZT': '自动遗传学家：计时：前生效区域计时',
    'ATGA Timer: Before Z Timer': '自动遗传学家计时：前生效区域计时',
    'ATGA will use this value before the zone you have defined in ATGA: T: Before Z, overwriting your default timer. Useful for Liq or whatever. Does not work on challenges.': '在自动遗传学家计时：前生效区域中设定的区域之前，使用此项的计时，忽略默认计时。对液化等有帮助。在挑战中无效。',
    'ATGA: T: After Z': '自动遗传学家：计时：后生效区域',
    'ATGA Timer: After Z': '自动遗传学家计时：后生效区域',
    'ATGA will use the value you define in ATGA: T: AZT after the zone you have defined in this setting, overwriting your default timer. Useful for super push runs or whatever. Does not work on challenges.': '在此区域之后，将使用自动遗传学家计时：后生效区域计时中的数值，忽略默认计时。对极限冲层等有帮助。在挑战中无效。',
    'ATGA: T: AZT': '自动遗传学家：计时：后生效区域计时',
    'ATGA Timer: After Z Timer': '自动遗传学家计时：后生效区域计时',
    'ATGA will use this value after the zone that has been defined in ATGA: T: After Z, overwriting your default timer. Useful for super push runs or whatever.': '在自动遗传学家计时：后生效区域中设定的区域之后，使用此项的计时，忽略默认计时。对极限冲层等有帮助。',
    'ATGA: T: Spire': '自动遗传学家：计时：尖塔',
    'ATGA Timer: Spire': '自动遗传学家计时：尖塔',
    'ATGA will use this value in Spires. Respects your ignore Spires setting. Do not use this if you use the setting in the Spire tab! (As that uses vanilla GA) Nothing overwrites this except Daily Spire.': '尖塔中使用相应数值计时。会考虑您的尖塔无效层设置。请不要与尖塔选项卡下的繁殖计时同时使用！除了日常尖塔以外，优先于其他任何选项生效。',
    'ATGA: T: Daily Spire': '自动遗传学家：计时：日常尖塔',
    'ATGA Timer: Daily Spire': '自动遗传学家计时：日常尖塔',
    'ATGA will use this value in Daily Spires. Respects your ignore Spires setting. Do not use this if you use the setting in the Spire tab! (As that uses vanilla GA) Nothing overwrites this.': '日常挑战中，尖塔中使用相应数值计时。会考虑您的尖塔无效层设置。请不要与尖塔选项卡下的繁殖计时同时使用！优先于其他任何选项生效。',
    'ATGA: Manual': '自动遗传学家：手动日常',
    'ATGA: Auto No Spire': '自动遗传学家：自动无塔',
    'ATGA: Auto Dailies': '自动遗传学家：自动日常',
    'ATGA: Manual / ATGA: Auto No Spire / ATGA: Auto Dailies': '自动遗传学家：手动日常 / 自动遗传学家：自动无塔 / 自动遗传学家：自动日常',
    'EXPERIMENTAL': '实验性功能',
    'ATGA Timer: Auto Dailies': '自动遗传学家计时：自动日常',
    'ATGA will use automatically set breed timers in plague and bogged, overwriting your default timer.': '切换是否在天灾和泥沼日常挑战中使用相应数值计时，忽略默认计时。',
    'Set No Spire to not override in spire, respecting ignore spire settings.': '设为自动无塔则不会忽略尖塔的设置，会考虑您的尖塔无效层设置。',
    'ATGA: T: Dailies': '自动遗传学家：计时：日常',
    'ATGA Timer: Normal Dailies': '自动遗传学家计时：普通日常',
    'ATGA will use this value for normal Dailies such as ones without plague etc, overwriting your default timer. Useful for pushing your dailies that extra bit at the end. Overwrites Default, Before Z and After Z.': '非天灾等的日常挑战中使用相应数值计时，忽略默认计时。对日常挑战极限冲层有帮助。忽略默认、前生效区域和后生效区域的设置。',
    'ATGA: T: D: Hard': '自动遗传学家：计时：困难日常',
    'ATGA Timer: Hard Dailies': '自动遗传学家计时：困难日常',
    'ATGA will use this value in Dailies that are considered Hard. Such Dailies include plaged, bloodthirst and Dailies with a lot of negative mods. Overwrites Default, Before Z and After Z and normal Daily ATGA Timer.': '在困难的日常挑战中使用相应数值计时，例如有天灾，嗜血或者是负面效果太多的日常挑战。忽略默认、前生效区域、后生效区域和普通日常的设置。',
    'ATGA: T: C': '自动遗传学家：计时：挑战',
    'ATGA Timer: ': '自动遗传学家计时：',
    'ATGA will use this value in C2s. Overwrites Default, Before Z and After Z.': '挑战2中使用相应数值计时。忽略默认、前生效区域和后生效区域的设置。',
    'ATGA: T: C: Hard': '自动遗传学家：计时：困难挑战',
    'ATGA Timer: Hard ': '自动遗传学家计时：困难',
    'ATGA will use this value in C2s that are considered Hard. Electricity, Nom, Toxicity. Overwrites Default, Before Z and After Z and C2 ATGA': '在困难的挑战2中使用相应数值计时，例如电流、美味、毒性等。忽略默认、前生效区域、后生效区域和挑战2的设置。',
    'Turn on Archaeology settings.': '切换是否启用考古学设置。',
    'First string to use in Archaeology. Put the zone you want to stop using this string and start using the second string (Make sure the second string has a value) at the start. I.e: 70,10a,': '考古学中使用的第一个字符串。将想要切换到第二个字符串的区域输入到最前面(并确保第二字符串有相应内容)。例如：70,10a,',
    'Second string to use in Archaeology. Put the zone you want to stop using this string and start using the third string (Make sure the third string has a value) at the start. I.e: 94,10a,': '考古学中使用的第二个字符串。将想要切换到第三个字符串的区域输入到最前面(并确保第三字符串有相应内容)。例如：94,10a,',
    'Third string to use in Archaeology. Make sure this is just your Archaeology string and nothing else. I.e: 10a,': '考古学中使用的第三个字符串。请确保您只输入了相应字符串，不要输入其他内容。例如：10a,',
    'Turn on Mayhem settings.': '切换是否启用暴乱设置。',
    'M: Attack': '暴乱：攻击',
    'Turn this on to ignore your farm settings so It will do maps if you cannot survive the hits you have defined in Maps.': '启用此项后将忽略通常的刷资源设定，在低于地图选项卡下设定的伤害承受次数时就运行地图。',
    'M: Health': '暴乱：生命值',
    'Turn this on to ignore your farm settings so It will do maps if your HD is above the target you have defined in Maps.': '启用此项后将忽略通常的刷资源设定，在高于地图选项卡下设定的生命伤害比时就运行地图。',
    'M: Attack Boss': '暴乱：攻击首领',
    'What cut-off to use when farming for the boss using M: Attack. If this setting is 100, the script will farm till you can kill the boss in 100 average hits.': '当使用暴乱：攻击时，为了击杀首领刷资源的界限值。如果此项设为100，则会刷资源，直到可以在平均100次攻击内击杀首领。',
    'M: Attack Map': '暴乱：攻击地图',
    'What cut-off to use when farming maps using M: Attack and M: Smart Map. If this setting is 10, the script will do maps you can kill cells in 10 average hits.': '当使用暴乱：攻击和暴乱：智能地图时地图的界限值。如果此项设为10，则会选择可以在平均10次攻击内通过格子的地图。',
    'M: Health Cut-off': '暴乱：生命值界限',
    'What cut-off to use when using M: Health.': '当使用暴乱：生命值时的界限值。',
    'M: Maps Off': '暴乱：关闭地图',
    'M: Highest Map': '暴乱：最高地图',
    'M: Smart Map': '暴乱：智能地图',
    'M: Maps Off / M: Highest Map / M: Smart Map': '暴乱：关闭地图 / 暴乱：最高地图 / 暴乱：智能地图',
    'Control what maps you do to farm M: Attack and/or M: Health. M: Highest map always selects the highest map you have whether it be from Praiding, Time Farming or any you have manually created. M: Smart Map attempts to create a map best suited to the situation. Will calculate if you can survive and kill the map, and will try to buy all the necessary map attributes such as FA.': '控制在暴乱：攻击及暴乱：生命值激活时选择的地图。暴乱：最高地图总是选择最高级的地图，无论是重铸袭劫、定时刷图还是手动制造的地图。暴乱：智能地图会尝试制造最适合当前情况的地图。会计算您是否能够承受住伤害并通过地图，并且在有必要的时候会使用特殊修饰符。',
    'Better AutoFight OFF': '关闭改良自动战斗',
    'Better Auto Fight': '开启改良自动战斗',
    'Vanilla': '通常自动战斗',
    'Better AutoFight OFF / Better Auto Fight / Vanilla': '关闭改良自动战斗 / 开启改良自动战斗 / 通常自动战斗',
    '3-Way Button, Recommended. Will automatically handle fighting.': '建议开启。将控制自动战斗。',
    'BAF = Old Algo (Fights if dead, new squad ready, new squad breed timer target exceeded, and if breeding takes under 0.5 seconds': '开启改良自动战斗时，在军队阵亡、新的军队准备就绪、新的军队繁殖计时超过设置数值、繁殖计时低于0.5秒的情况下进行战斗',
    'BAF3 = Uses vanilla autofight and makes sure you fight on portal.': '通常自动战斗则使用通常的自动战斗方式，但保证传送后能够立刻开始战斗。',
    'WARNING: If you autoportal with BetterAutoFight disabled, the game may sit there doing nothing until you click FIGHT. (not good for afk': '注意：如果关闭自动战斗，传送后可能会卡住不动，需要手动点击战斗按钮才恢复正常。(可能影响挂机模式',
    'Auto Stance OFF': '关闭自动阵型',
    'Auto Stance': '开启自动阵型',
    'D Stance': '常时D阵型',
    'Auto Stance OFF / Auto Stance / D Stance / Windstacking': '关闭自动阵型 / 开启自动阵型 / 使用D阵型 / 风层数叠加',
    'Autostance': '自动阵型',
    'Automatically swap stances to avoid death.': '自动切换阵型以避免死亡。',
    'Keeps you in D stance regardless of Health.': '无视生命值，常时使用D阵型。',
    'For use after nature (z230), and will keep you in D stance unless you are windstacking (Only useful if transfer is maxed out and wind empowerment is high). Manages your Heirloom swapping and stance to obtain wind stacks efficiently. You must set your High Dmg and Low Dmg Heirlooms, Windstack H:D or WSMAX H:D where relevant for this to work.': '用于230层以后，除非您正在进行风层数叠加，否则常时使用D阵型(只在层数传递率已满且风赋能等级较高时有用)。合理设置高伤传家宝和低伤传家宝可以较有效率地获得风层数。必须设置高伤传家宝和低伤传家宝、风层数叠加生命伤害比或风层数叠加上限生命伤害比等相关设置才能正常工作。',
    'Safety First': '安全为先',
    'Ignore Void Strength': '忽略虚空暴击',
    'Ignore All Crits': '忽略所有暴击',
    'Safety First / Ignore Void Strength / Ignore All Crits': '安全为先 / 忽略虚空暴击 / 忽略所有暴击',
    'No longer switches to B against corrupted precision and/or void strength.': '当面对腐化精准及/或虚空暴击敌人时，不再切换到B阵型。',
    'Basically we now treat \'crit things\' as regular in both autoStance and': '事实上在自动阵型中我们已经不再区分这两种敌人与普通敌人了',
    '. In fact it no longer takes precision / strength into account and will manage like a normal enemy, thus retaining X / D depending on your needs. If you\'re certain your block is high enough regardless if you\'re fighting a crit guy in a crit daily, use this! Alternatively, manage the stances yourself.': '，只会考虑X阵型或D阵型。如果您进入了一个有着暴击敌人的日常挑战，且您确信格挡足够高，那么可以考虑此项。否则没有必要开启此项。',
    'AutoAbandon': '开启自动放弃士兵',
    'Don\'t Abandon': '关闭自动放弃士兵',
    'Only Rush Voids': '只在速刷虚空时放弃',
    'AutoAbandon / Don\'t Abandon / Only Rush Voids': '开启自动放弃士兵 / 关闭自动放弃士兵 / 只在速刷虚空时放弃',
    'Autoabandon': '自动放弃士兵',
    'Considers abandoning trimps for void maps/prestiges.': '当进入虚空地图或获取重铸升级时考虑放弃士兵。',
    'Will not abandon troops, but will still agressively autostance even if it will kill you (WILL NOT ABANDON TRIMPS TO DO VOIDS).': '不会放弃士兵，将采取激进的自动阵型，即使这样会导致士兵阵亡(不会在进入虚空地图时放弃士兵)。',
    'Considers abandoning trimps for void maps, but not prestiges, still autostances aggressively.': '当进入虚空地图时考虑放弃士兵，获取重铸升级时则不考虑，仍然采取激进的自动阵型。',
    'Made for Empower daily, and you might find this helpful if you\'re doing Workplace Safety feat. Then again with that I strongly recommend doing it fully manually. Anyway, don\'t blame me whatever happens.': '用于赋能日常挑战，对于完成安全生产壮举也有帮助，不过仍然建议手动完成它。自动完成的话，可能会发生意料之外的情况，请知悉。',
    'Note': '注意',
    'AT will no longer be able to fix when your scryer gets stuck!': '当使用占卜阵型卡住时将无法自动放弃从而脱离死循环！',
    'Trimpicide': '预期放弃士兵',
    'If a new fight group is available and anticipation stacks aren\'t maxed, Trimpicide and grab a new group. Will not abandon in spire. Recommended ON.': '当新的军队准备就绪且当前军队预期层数未满时，放弃士兵。不会在尖塔中放弃士兵。建议启用。',
    'Dynamic Gyms': '动态健身房',
    'Designed to limit your block to slightly more than however much the enemy attack is. If MaxGyms is capped or GymWall is set, those will still work, and this will NOT override those (works concurrently), but it will further limit them. In the future it may override, but the calculation is not easy to get right so I dont want it undo-ing other things yet.': '将格挡限制为刚好比敌人攻击高一点。如果设置了健身房最大值或健身房墙，会尽可能满足这两个值的范围。但如果需要，也会忽略这两个值的数值。',
    'AutoRoboTrimp': '自动脆皮机器人',
    'Use RoboTrimps ability starting at this level, and every 5 levels thereafter. (set to 0 to disable. default 60.) 60 is a good choice for mostly everybody.': '脆皮机器人从相应层数开始激活，并且之后每5层激活一次。(设为0则关闭此选项。默认值为60。)60适用于大多数情况。',
    'Fight Always': '常时战斗',
    'U1: -1 to disable. Sends trimps to fight if they\'re not fighting, regardless of BAF. Has 2 uses. Set to 0 to always send out trimps. Or set a number higher than 0 to enable the H:D function. If the H:D ratio is below this number it will send them out. I.e, this is set to 1, it will send out trimps regardless with the H:D ratio is below 1.': '宇宙1：设为-1则关闭此选项。当脆皮没有在战斗时，自动让它们开始战斗，无视改良自动战斗的设置。此项有两种用法。设为0则常时进行战斗。设为大于0的数值则激活生命伤害比功能，当生命伤害比低于此数值时进行战斗。例如，将此项设为1，则将在生命伤害比低于1时进行战斗。',
    'Poison Calc': '毒赋能计算',
    'Experimental.': '实验性功能。',
    'Adds poison to the battlecalc. May improve your poison zone speed.': '将毒赋能效果加入计算。可能会使毒区域的通过时间更短。',
    'Ice Calc': '冰赋能计算',
    'Always calculates your ice to be a consistent level instead of going by the enemy debuff. Stops H:D spazzing out.': '使用一个常量来计算冰赋能效果，而不是随着敌人身上的效果来计算。可以防止生命伤害比数值抽风。',
    'Antistack Calc': '预期层数计算',
    'Always calcs your damage as having full antistacks. Useful for windstacking.': '计算伤害时假设已获得最大预期层数。在风层数叠加时会很有用。',
    'U2: -1 to disable. Sends trimps to fight if they\'re not fighting, regardless of BAF. Has 2 uses. Set to 0 to always send out trimps. Or set a number higher than 0 to enable the H:D function. If the H:D ratio is below this number it will send them out. I.e, this is set to 1, it will send out trimps regardless with the H:D ratio is below 1.': '宇宙2：设为-1则关闭此选项。当脆皮没有在战斗时，自动让它们开始战斗，无视改良自动战斗的设置。此项有两种用法。设为0则常时进行战斗。设为大于0的数值则激活生命伤害比功能，当生命伤害比低于此数值时进行战斗。例如，将此项设为1，则将在生命伤害比低于1时进行战斗。',
    'Equality Calc Off': '关闭平等计算',
    'EC: On': '开启平等计算',
    'EC: Health': '平等计算：生命值',
    'Equality Calc Off / EC: On / EC: Health': '关闭平等计算 / 开启平等计算 / 平等计算：生命值',
    'Adds Max Equality stacks to the battlecalc. Assumes you use Equality Scaling. Turning this on allows in-game Equality Scaling to adjust your Health accordingly. EC: Health only decreases enemies attack in the calculation which may improve speed.': '将最大的平等层数加入计算。计算时假设您已经开启平等缩放。开启此项后可以根据生命值直接调整平等缩放的层数。平等计算：生命值在计算过程中只减少敌人攻击力，可能会提高计算速度。',
    'Enable Scryer Stance': '开启占卜者阵型',
    'Activates all other scrying settings, and overrides AutoStance when scryer conditions are met. Leave regular Autostance on while this is active. Scryer gives 2x Resources (Non-Helium/Nullifium) and a chance for Dark Essence. Once this is on, priority for Scryer decisions goes as such': '启用所有其他的占卜者阵型设置，满足占卜者阵型条件时，忽略自动阵型的设置。占卜者阵型可以获得2倍资源(非氦及虚空物质)，且可以获得黑暗精华。开启后，占卜者阵型优先级按照以下规律来考虑',
    'NEVER USE, FORCE USE, OVERKILL, MIN/MAX ZONE': '永不使用，强制使用，超杀，最低/最高区域',
    'NO OTHER BUTTONS WILL DO ANYTHING IF THIS IS OFF.': '如果此项关闭，其他所有占卜者阵型的按钮都将无效。',
    'Use When Overkill': '超杀时使用阵型',
    'Overrides everything! Toggles stance when we can Overkill in S, giving us double loot with no speed penalty (minimum one overkill, if you have more than 1, it will lose speed': '忽略其他任何相关设置！当可以在占卜者阵型下超杀敌人时，切换阵型，以此在速度不变的前提下获得双倍资源(按超杀1格计算，如果超杀格子超过1格则可能减速',
    'This being on, and being able to overkill in S will override ALL other settings': '开启此项后，只要可以在占卜者阵型下超杀敌人时，将忽略最低/最高区域设置',
    'Except never use in spire': '唯一的例外是尖塔设为永不使用',
    '. This is a boolean logic shortcut that disregards all the other settings including Min and Max Zone. If you ONLY want to use S during Overkill, as a workaround: turn this on and Min zone: to 9999 and everything else off(red).': '。如果您只想在超杀时使用占卜者阵型，那可以如下进行设置：开启此项，并将最低区域设为9999，其他所有选项关闭(按钮红色)。',
    'Min Zone': '最低区域',
    'Minimum zone to start using scryer in.(inclusive) Recommend:(60 or 181). Overkill ignores this. This needs to be On & Valid for the': '开始使用占卜者阵型的最低区域(包含该数值)。建议值：(60或181)。超杀选项忽略此项设置。如果关闭超杀选项，则需要启用此项并设置合理的数值后，其他占卜者阵型中的 ',
    'MAYBE': '可能使用',
    'option on all other Scryer settings to do anything if Overkill is off. Tip: Use 9999 to disable all Non-Overkill, Non-Force, scryer usage.': '选项才能生效。提示：设为9999可以使所有非超杀和非强制的设置中不使用占卜者阵型。',
    'Max Zone': '最高区域',
    '0 or -1 to disable (Recommended': '设为0或-1则关闭此选项(建议',
    'Overkill ignores this. Zone to STOP using scryer at (not inclusive). Turning this ON with a positive number stops': '超杀选项忽略此项设置。停止使用占卜者阵型的最高区域(不包含该数值)。设为正数后，其他占卜者阵型中的',
    'use of all other Scryer settings.': '选项在相应区域停止使用阵型。',
    'World Min & Max Only': '只在世界上启用',
    'Forces Scryer to only work in world regardless of other settings.': '强制占卜者阵型只在世界上启用，忽略下方任何设置。',
    'Maps: NEVER': '地图：永不使用',
    'Maps: FORCE': '地图：强制使用',
    'Maps: MAYBE': '地图：可能使用',
    'Maps: NEVER / Maps: FORCE / Maps: MAYBE': '地图：永不使用 / 地图：强制使用 / 地图：可能使用',
    'NEVER': '永不使用',
    'Means what it says!!!': '如字面所示！！！',
    'FORCE': '强制使用',
    'means Scryer will ALWAYS activate in Maps': '意味着地图中将总是使用占卜者阵型',
    'means that Overkill and Min/Max use are allowed.': '意味着超杀设置及最低/最高区域设置生效。',
    'This setting requires use on Corrupteds to be on after corruption/magma.': '在腐化/岩浆区域后的地图设置由腐化选项控制。',
    'Recommend MAYBE.': '建议设为可能使用。',
    'VoidMaps: NEVER': '虚空地图：永不使用',
    'VoidMaps: FORCE': '虚空地图：强制使用',
    'VoidMaps: MAYBE': '虚空地图：可能使用',
    'VoidMaps: NEVER / VoidMaps: FORCE / VoidMaps: MAYBE': '虚空地图：永不使用 / 虚空地图：强制使用 / 虚空地图：可能使用',
    'means Scryer will ALWAYS activate in Void Maps': '意味着虚空地图中将总是使用占卜者阵型',
    'P Maps: NEVER': '重铸地图：永不使用',
    'P Maps: FORCE': '重铸地图：强制使用',
    'P Maps: MAYBE': '重铸地图：可能使用',
    'P Maps: NEVER / P Maps: FORCE / P Maps: MAYBE': '重铸地图：永不使用 / 重铸地图：强制使用 / 重铸地图：可能使用',
    'means Scryer will ALWAYS activate in maps higher than your zone': '意味着高于当前区域等级的地图中将总是使用占卜者阵型',
    'Recommend NEVER.': '建议设为永不使用。',
    'BW: NEVER': '仿生仙境：永不使用',
    'BW: FORCE': '仿生仙境：强制使用',
    'BW: MAYBE': '仿生仙境：可能使用',
    'BW: NEVER / BW: FORCE / BW: MAYBE': '仿生仙境：永不使用 / 仿生仙境：强制使用 / 仿生仙境：可能使用',
    'means Scryer will ALWAYS activate in BW Maps': '意味着仿生仙境地图中将总是使用占卜者阵型',
    'This setting requires use in Maps to be on.': '此项需要地图选项设为使用。',
    'Spire: NEVER': '尖塔：永不使用',
    'Spire: FORCE': '尖塔：强制使用',
    'Spire: MAYBE': '尖塔：可能使用',
    'Spire: NEVER / Spire: FORCE / Spire: MAYBE': '尖塔：永不使用 / 尖塔：强制使用 / 尖塔：可能使用',
    'means Scryer will ALWAYS activate in the Spire': '意味着尖塔中将总是使用占卜者阵型',
    'This setting requires use on Corrupteds to be on for corrupted enemies.': '此项需要腐化选项设为使用才能对腐化敌人生效。',
    'Boss: NEVER (All Levels': '首领：永不(所有',
    'Boss: NEVER (Above VoidLevel': '首领：永不(虚空以上',
    'Boss: MAYBE': '首领：可能使用',
    'Boss: NEVER (All Levels) / Boss: NEVER (Above VoidLevel) / Boss: MAYBE': '首领：永不(所有) / 首领：永不(虚空以上) / 首领：可能使用',
    'NEVER (All Levels': '永不(所有',
    'will NEVER use S in cell 100 of the world!!!': '永远不会在世界上的格子100启用占卜者阵型！！！',
    'NEVER (Above VoidLevel': '永不(虚空以上',
    'will NEVER use S in cell 100 of the world ABOVE the zone that your void maps are set to run at (Maps).': '超过虚空地图运行的区域(地图选项卡下设定)之后，永远不会在世界上的格子100启用占卜者阵型。',
    'treats the cell no differently to any other, Overkill and Min/Max Scryer is allowed.': '将此格子与其他格子同等对待，意味着超杀设置及最低/最高区域设置生效。',
    'Recommend NEVER (There is little benefit to double NON-HELIUM resources and a small chance of DE).': '建议设为永不使用(设为使用也无法获得多少资源和黑暗精华)。',
    'Corrupted: NEVER': '腐化：永不使用',
    'Corrupted: FORCE': '腐化：强制使用',
    'Corrupted: MAYBE': '腐化：可能使用',
    'Corrupted: NEVER / Corrupted: FORCE / Corrupted: MAYBE': '腐化：永不使用 / 腐化：强制使用 / 腐化：可能使用',
    'means Scryer will ALWAYS activate against Corrupted enemies': '意味着面对腐化敌人时将总是使用占卜者阵型',
    'Magma maps and Corrupted Voidmaps are currently classified as corrupted': '岩浆区域的地图和腐化虚空地图目前被视为全是腐化敌人',
    'and NEVER here will override Maps and Voidmaps use of Scryer': '而如果设为永不使用，则地图中和虚空地图中都将不会使用占卜者阵型',
    'Healthy: NEVER': '健康：永不使用',
    'Healthy: FORCE': '健康：强制使用',
    'Healthy: MAYBE': '健康：可能使用',
    'Healthy: NEVER / Healthy: FORCE / Healthy: MAYBE': '健康：永不使用 / 健康：强制使用 / 健康：可能使用',
    'means Scryer will ALWAYS activate against Healthy enemies': '意味着面对健康敌人时将总是使用占卜者阵型',
    'Corrupted Voidmaps are currently classified as Healthy (same as corrupted': '腐化虚空地图目前被视为全是健康敌人(同时全是腐化敌人',
    'Scry in Poison': '毒区域占卜者阵型',
    'Decides what you do in Poison.': '设置毒区域中的行为。',
    '= Maybe': '则等同于可能使用',
    '= Never': '则等同于永不使用',
    '= Max Zone you want it scrying': '则等同于使用占卜者阵型的最高区域',
    'Scry in Wind': '风区域占卜者阵型',
    'Decides what you do in Wind.': '设置风区域中的行为。',
    'Scry in Ice': '冰区域占卜者阵型',
    'Decides what you do in Ice.': '设置冰区域中的行为。',
    'Die To Use S': '阵亡以使用占卜者阵型',
    '1 to disable.': '1则关闭此选项。',
    'Turning this on will switch you back to S even when doing so would kill you. Happens in scenarios where you used Skip Corrupteds that took you into regular Autostance X/H stance, killed the corrupted and reached a non-corrupted enemy that you wish to use S on, but you havent bred yet and you are too low on health to just switch back to S. So you\'d rather die, wait to breed, then use S for the full non-corrupted enemy, to maximize DE. NOTE: Use at your own risk.': '开启后在会导致阵亡的情况下仍然切换到占卜者阵型。在以下的情况会有用：您设置了腐化永不使用，在腐化格子切换到了X/H阵型，在击杀腐化敌人后碰到了一个非腐化的敌人，您想要切换为占卜者阵型，但此时繁殖计时不足，生命值无法让您自动切换回占卜者阵型。此时您更希望让士兵阵亡，等待繁殖，然后在此敌人身上再切换回占卜者阵型，以获得最多的黑暗精华。注意：使用此项风险自负。',
    'Use this input to set the minimum zone that scryer activates in (You can use decimal values to specify what cell this setting starts from': '输入相应数值来设定占卜者阵型启用的最小区域(还可以输入小数以设定启用的格子',
    'Remaining Essence Only': '只在剩余精华时启用',
    'Why scry when theres no essence? Turns off scrying when the remaining enemies with essence drops to 0.': '没有黑暗精华时何必开启占卜者阵型？当前地图无敌人拥有黑暗精华后不使用占卜者阵型。',
    'Auto Generator': '自动维度发生器',
    'Turn this on to use these settings.': '开启此项以使用下面的功能。',
    'Gain Mi / Gain Fuel / Hybrid': '得岩浆岩 / 得燃料 / 混合型',
    'MODE BEFORE FUELING': '得燃料前的模式',
    'Which mode to use before fueling. This is the mode which the generator will use if you fuel after z230.': '切换得燃料前使用的模式。区域230后生效。',
    'Start Fuel Z': '得燃料起始区域',
    'Start fueling at this zone instead of 230. I would suggest you have a value lower than your max, for obvious reasons. Recommend starting at a value close-ish to your max supply. Use 230 to use your': '从此区域开始得燃料，而不是从区域230开始。最好设为低于最大区域的数值。建议设为接近供给对应最大区域的数值。设为230则直接使用',
    'BEFORE FUEL': '得燃料前',
    'setting.': '的设置。',
    'End Fuel Z': '得燃料结束区域',
    'End fueling at this zone. After this zone is reached, will follow your preference. -1 to fuel infinitely.': '从此区域起停止得燃料。到达相应区域后，按照其他选项的设置来决定模式。设为-1则常时得燃料。',
    'MODE AFTER FUELING': '得燃料后的模式',
    'Which mode to use after fueling.': '切换得燃料后使用的模式。',
    'Daily: Normal': '日常：普通',
    'Daily: Fuel': '日常：得燃料',
    'Daily: Hybrid': '日常：混合型',
    'Daily: Normal / Daily: Fuel / Daily: Hybrid': '日常：普通 / 日常：得燃料 / 日常：混合型',
    'Normal': '普通',
    'Uses the AutoGen settings.': '使用其他选项的设置。',
    'Fuel': '得燃料',
    'Fuels the entire Daily.': '日常挑战全程使用得燃料。',
    'Uses Hybrid for the entire Daily.': '日常挑战全程使用混合型。',
    'C2: Normal': '挑战2：普通',
    'C2: Fuel': '挑战2：得燃料',
    'C2: Hybrid': '挑战2：混合型',
    'C2: Normal / C2: Fuel / C2: Hybrid': '挑战2：普通 / 挑战2：得燃料 / 挑战2：混合型',
    'Fuels the entire C2.': '挑战2全程使用得燃料。',
    'Uses Hybrid for the entire C2.': '挑战2全程使用混合型。',
    'Spend Magmite OFF': '关闭分配岩浆岩',
    'Spend Magmite (Portal': '分配岩浆岩(传送时',
    'Spend Magmite Always': '常时分配岩浆岩',
    'Spend Magmite OFF / Spend Magmite (Portal) / Spend Magmite Always': '关闭分配岩浆岩 / 分配岩浆岩(传送时) / 常时分配岩浆岩',
    'Auto Spends any unspent Magmite immediately before portaling. (Or Always, if toggled). Part 1 buys any permanent one-and-done upgrades in order from most expensive to least. Part 2 then analyzes Efficiency vs Capacity for cost/benefit, and buys Efficiency if its BETTER than Capacity. If not, if the PRICE of Capacity is less than the price of Supply, it buys Capacity. If not, it buys Supply. And then it repeats itself until you run out of Magmite and cant buy anymore.': '根据选项，在不同情况下自动分配岩浆岩。首先尝试从最贵到最便宜购买一次性升级。然后对比效率与容量的性价比，如果效率性价比更高，则购买之，否则对比容量和供给的成本，购买成本更低的升级。然后一直重复此过程，直到岩浆岩不足以购买任何升级为止。',
    'Ratio Spending': '按比例分配',
    'Spends Magmite in a Ratio you define.': '按照后面定义的比例分配岩浆岩。',
    'Use -1 or 0 to not spend on this. Any value above 0 will spend.': '设为-1或0则不分配岩浆岩。设为0以上的数值则会分配。',
    'Throttle Supply (or Capacity': '控制供给的分配(或容量',
    'Positive number NOT 1 e.g. 2.5: Consider Supply when its cost * 2.5 is < Capacity, instead of immediately when < Cap. Effectively throttles supply for when you don\'t need too many.': '设为非1的正数时，例如2.5，则当供给成本的2.5倍低于容量成本时才购买供给。当不需要太多供给时，可以有效地控制。',
    'Negative number (-1 is ok) e.g. -2.5: Consider Supply if it costs < Capacity * 2.5, buy more supplys! Effectively throttling capacity instead.': '设为负数(包括-1也可以)时，例如-2.5，则则当供给成本低于容量成本的2.5倍时才购买供给。此时反过来控制容量。',
    'Set to 1: DISABLE SUPPLY only spend magmite on Efficiency, Capacity and Overclocker. Always try to get supply close to your HZE.': '设为1：完全不购买供给，只考虑其他三项。请在供给接近最高通过区域时再设为这个。',
    'Set to 0: IGNORE SETTING and use old behaviour (will still try to buy overclocker': '设为0：此项无效，按照1：1的比例计算(同时会尝试购买超频',
    'Normal & No OC': '普通且无超频',
    'OneTime Only': '只购买一次性升级',
    'OneTime & OC': '一次性升级且有超频',
    'Normal / Normal & No OC / OneTime Only / OneTime & OC': '普通 / 普通且无超频 / 只购买一次性升级 / 一次性升级且无超频',
    'Spends Magmite Normally as Explained in Magmite spending behaviour.': '如岩浆岩分配方式所述，分配岩浆岩。',
    'Same as normal, except skips OC afterbuying 1 OC upgrade.': '与普通效果类似，但在购买1次超频升级后不再购买超频升级。',
    'Only Buys the One off upgrades except skips OC afterbuying 1 OC upgrade.': '只购买一次性升级，在购买1次超频升级后不再购买超频升级。',
    'Buys all One off upgrades, then buys OC only.': '购买所有一次性升级，然后只购买超频升级。',
    'Magmite spending behaviour': '岩浆岩分配方式',
    '1. Buy one-and-done upgrades, expensive first, then consider 1st level of Overclocker;': '1、购买一次性升级，从最贵的开始，然后尝试升级1级超频；',
    '2. Buy Overclocker IF AND ONLY IF we can afford it;': '2、当且仅当岩浆岩足够时升级超频；',
    '2.5. Exit if OneTimeOnly': '2.5、如果设置了只购买一次超频升级，那么之后不再考虑超频升级',
    '3. Buy Efficiency if it is better than capacity;': '3、如果效率比容量更好，则购买效率；',
    '4. Buy Capacity or Supply depending on which is cheaper, or based on SupplyWall': '4、对比容量和供给的成本，考虑控制分配的数值，购买成本更低的升级(译者注：不用点进去了，图更看不懂)',
    'MagmiteExplain': '岩浆岩分配方式解释',
    'Enter the name of your high damage heirloom. This is your heirloom that you will use normally.': '输入您较高伤害的传家宝名称。这将是正常情况下使用的传家宝。',
    'Enter the name of your low damage heirloom. This is the heirloom that you will use for windstacking.': '输入您较低伤害的传家宝名称。这将是用于风层数叠加的传家宝。',
    'Heirloom Swapping': '传家宝切换',
    'Heirloom swapping master button. Turn this on to allow heirloom swapping and its associated settings.': '传家宝切换总开关。开启后相应的切换选项才能生效。',
    'HS: Zone': '传家宝切换：区域',
    'Which zone to swap from your first heirloom you have defined to your second heirloom you have defined. I.e if this value is 75 it will switch to the second heirloom': '传家宝从第一切换到第二的区域。例如：此项设为75则将切换到第二传家宝',
    'on z': '于区域',
    'First Heirloom to use': '使用的第一传家宝',
    'Enter the name of your first heirloom. This is the heirloom that you will use before swapping to the second heirloom at the zone you have defined in the HS: Zone.': '输入第一传家宝的名称。在传家宝切换：区域之前使用。',
    'Second Heirloom to use': '使用的第二传家宝',
    'Enter the name of your second heirloom. This is the heirloom that you will use after swapping from the first heirloom at the zone you have defined in the HS: Zone.': '输入第二传家宝的名称。在传家宝切换：区域之后使用。',
    'Auto Heirlooms': '自动筛选传家宝',
    'Auto Heirlooms master button. Turn this on to enable all Auto Heirloom settings.': '自动筛选传家宝总开关。开启后相应的传家宝选项才能生效。',
    'The Modifier points will be explained here.': '传家宝修饰符分值解释如下。',
    'The more points an heirloom has, the better chance it has of being kept. If empty is selected, it will muliplty the score by 4. If any is selected, it will multiply the score of the heirloom by 2.': '传家宝的修饰符分值越高，就越优先被保留下来。每有一个修饰符选择了空，就将总分乘以4倍。',
    'E.g Mod 1 = CC (+6 if dropped, 1st modifier': '例如：修饰符 1 = 暴击率(掉落时+6分',
    'Mod 2 = CD (+5 if dropped, 2nd modifier': '修饰符 2 = 暴击伤害(掉落时+5分',
    'Mod 3 = PB (+4 if dropped, 3rd modifier': '修饰符 3 = 瘟疫使者(掉落时+4分',
    'Mod 4 = Empty (x4 if dropped, +0 if not': '修饰符 4 = 空(掉落时x4倍，否则不加分',
    'Mod 5 = Empty (x4 if dropped, +0 if not': '修饰符 5 = 空(掉落时x4倍，否则不加分',
    'If an heirloom dropped with these exact modifiers, it would get a score of 192 (6+5+4*4*4=240). The highest point heirlooms will be kept.': '如果掉落了以上修饰符的传家宝，则总分为240 [(6+5+4)*4*4=240]。优先保留分值较高的传家宝。',
    'Shields': '盾牌',
    'Staffs': '权杖',
    'Cores': '核心',
    'None / Shields / Staffs / Cores / All': '无 / 盾牌 / 权杖 / 核心 / 全部',
    'Keeps Shields and nothing else.': '只保留盾牌。',
    'Keeps Staffs and nothing else.': '只保留权杖。',
    'Keeps Cores and nothing else.': '只保留核心。',
    'Keeps 4 Shields and 3 Staffs and 3 Cores. If you have protected heirlooms in your inventory it will overrite one slot. E.g if one heirloom is protected, you will keep 4 Shields and 3 Staffs and 2 Cores.': '保留4个盾牌，3个权杖和3个核心。如果携带栏有保护的传家宝则会少保留相应的数量。例如：如果拥有一个保护的传家宝，则只会保留保留4个盾牌，3个权杖和2个核心。',
    'Rarity to Keep': '保留稀有度选项',
    'Auto Heirlooms. Keeps the selected rarity of heirloom, recycles all others.': '只保留与此项稀有度相同的传家宝，回收其余稀有度的传家宝。',
    'Any': '任何',
    'Common': '普通',
    'Uncommon': '罕见',
    'Rare': '稀有',
    'Epic': '史诗',
    'Legendary': '传奇',
    'Magnificent': '华丽',
    'Ethereal': '超凡',
    'Magmatic': '岩浆',
    'Plagued': '天灾',
    'Radiating': '辐射',
    'Auto Heirlooms. Enables in-depth shield settings.': '开启进一步设置盾牌传家宝的选项。',
    'Shield: Modifier': '盾牌：修饰符',
    'empty': '空',
    'playerEfficiency': '玩家效率',
    'trainerEfficiency': '训练师效率',
    'storageSize': '存储上限',
    'breedSpeed': '脆皮繁殖速度',
    'trimpHealth': '脆皮生命值',
    'trimpAttack': '脆皮攻击力',
    'trimpBlock': '脆皮格挡',
    'critDamage': '暴击伤害',
    'critChance': '暴击率',
    'voidMaps': '虚空地图掉落概率',
    'plaguebringer': '瘟疫使者效果',
    'prismatic': '棱镜护盾',
    'gammaBurst': '伽马爆发',
    'Auto Heirlooms. Keeps Shields with selected Mod. Modifier 1 is worth 6 points.': '优先保留有相应修饰符的盾牌。修饰符 1价值6分。',
    'Auto Heirlooms. Keeps Shields with selected Mod. Modifier 2 is worth 5 points.': '优先保留有相应修饰符的盾牌。修饰符 2价值5分。',
    'Auto Heirlooms. Keeps Shields with selected Mod. Modifier 3 is worth 4 points.': '优先保留有相应修饰符的盾牌。修饰符 3价值4分。',
    'Auto Heirlooms. Keeps Shields with selected Mod. Modifier 4 is worth 3 points.': '优先保留有相应修饰符的盾牌。修饰符 4价值3分。',
    'Auto Heirlooms. Keeps Shields with selected Mod. Modifier 5 is worth 2 points.': '优先保留有相应修饰符的盾牌。修饰符 5价值2分。',
    'Auto Heirlooms. Keeps Shields with selected Mod. Modifier 6 is worth 1 points.': '优先保留有相应修饰符的盾牌。修饰符 6价值1分。',
    'Auto Heirlooms. Enables in-depth staff settings.': '开启进一步设置权杖传家宝的选项。',
    'Staff: Modifier': '权杖：修饰符',
    'metalDrop': '金属掉落加成',
    'foodDrop': '食物掉落加成',
    'woodDrop': '木头掉落加成',
    'gemsDrop': '宝石掉落加成',
    'fragmentsDrop': '碎片掉落加成',
    'minerSpeed': '矿工效率',
    'FarmerSpeed': '农民效率',
    'LumberjackSpeed': '伐木工效率',
    'DragimpSpeed': '脆皮龙宝石效率',
    'ExplorerSpeed': '探险家碎片效率',
    'ScientistSpeed': '科学家效率',
    'FluffyExp': '绒绒经验值',
    'Auto Heirlooms. Keeps Staffs with selected Mod. Modifier 1 is worth 6 points.': '优先保留有相应修饰符的权杖。修饰符 1价值6分。',
    'Auto Heirlooms. Keeps Staffs with selected Mod. Modifier 2 is worth 5 points.': '优先保留有相应修饰符的权杖。修饰符 2价值5分。',
    'Auto Heirlooms. Keeps Staffs with selected Mod. Modifier 3 is worth 4 points.': '优先保留有相应修饰符的权杖。修饰符 3价值4分。',
    'Auto Heirlooms. Keeps Staffs with selected Mod. Modifier 4 is worth 3 points.': '优先保留有相应修饰符的权杖。修饰符 4价值3分。',
    'Auto Heirlooms. Keeps Staffs with selected Mod. Modifier 5 is worth 2 points.': '优先保留有相应修饰符的权杖。修饰符 5价值2分。',
    'Auto Heirlooms. Keeps Staffs with selected Mod. Modifier 6 is worth 1 points.': '优先保留有相应修饰符的权杖。修饰符 6价值1分。',
    'Auto Heirlooms. Enables in-depth core settings.': '开启进一步设置核心传家宝的选项。',
    'Cores: Modifier': '核心：修饰符',
    'fireTrap': '火焰陷阱伤害',
    'poisonTrap': '剧毒陷阱伤害',
    'lightningTrap': '闪电陷阱伤害',
    'runestones': '符石掉率',
    'strengthEffect': '力量塔效果',
    'condenserEffect': '冷凝塔效果',
    'Auto Heirlooms. Keeps Cores with selected Mod. Modifier 1 is worth 5 points.': '优先保留有相应修饰符的核心。修饰符 1价值5分。',
    'Auto Heirlooms. Keeps Cores with selected Mod. Modifier 2 is worth 4 points.': '优先保留有相应修饰符的核心。修饰符 2价值4分。',
    'Auto Heirlooms. Keeps Cores with selected Mod. Modifier 3 is worth 3 points.': '优先保留有相应修饰符的核心。修饰符 3价值3分。',
    'Auto Heirlooms. Keeps Cores with selected Mod. Modifier 4 is worth 2 points.': '优先保留有相应修饰符的核心。修饰符 4价值2分。',
    'AutoGoldenUpgrades': '自动金色升级选项',
    'Buys Golden Upgrades in Fillers. Helium buys all Helium golden upgrades. Battle buys all Battle golden upgrades. Void buys 8 Void golden upgrades (max number you can buy) then buys helium golden upgrades. Void + Battle buys 8 voids then battle.': '按照相应选项购买金色升级。选择氦则只购买金色氦升级。选择战斗则只购买金色战斗升级。选择虚空则在购买8次金色虚空升级(最大数量)后开始购买金色氦升级。选择虚空+战斗则在购买8次金色虚空升级(最大数量)后开始购买金色战斗升级。',
    'Off': '关闭',
    'Void + Battle': '虚空+战斗',
    'Daily AutoGoldenUpgrades': '日常自动金色升级',
    'Buys Golden Upgrades in Dailies. Helium buys all Helium golden upgrades. Battle buys all Battle golden upgrades. Void buys 8 Void golden upgrades (max number you can buy) then buys helium golden upgrades. Void + Battle buys 8 voids then battle.': '日常挑战中，按照相应选项购买金色升级。选择氦则只购买金色氦升级。选择战斗则只购买金色战斗升级。选择虚空则在购买8次金色虚空升级(最大数量)后开始购买金色氦升级。选择虚空+战斗则在购买8次金色虚空升级(最大数量)后开始购买金色战斗升级。',
    'C2 AutoGoldenUpgrades': '挑战2自动金色升级',
    'Buys Golden Upgrades in C2s. Helium buys all Helium golden upgrades. Battle buys all Battle golden upgrades. Void buys 8 Void golden upgrades (max number you can buy) then buys helium golden upgrades. Void + Battle buys 8 voids then battle.': '挑战2中，按照相应选项购买金色升级。选择氦则只购买金色氦升级。选择战斗则只购买金色战斗升级。选择虚空则在购买8次金色虚空升级(最大数量)后开始购买金色氦升级。选择虚空+战斗则在购买8次金色虚空升级(最大数量)后开始购买金色战斗升级。',
    'Void Battle': '虚空战斗切换区域',
    'Buys Battle goldens instead of Helium at this zone and onwards. This option only appears when selecting void.': '从此区域开始，改为购买战斗升级。只在自动金色升级选择虚空时出现。',
    'Daily Void Battle': '日常虚空战斗切换区域',
    'Buys Battle goldens instead of Helium at this zone and onwards in Dailies. This option only appears when selecting void.': '日常挑战中，从此区域开始，改为购买战斗升级。只在日常自动金色升级选择虚空时出现。',
    'Helium Battle': '氦战斗切换次数',
    'Buys Battle goldens instead of helium after this many helium goldens have been purchased and onwards. This option only appears when selecting helium.': '在购买相应次数的金色氦升级以后，改为购买战斗升级。只在自动金色升级选择氦时出现。',
    'Daily Helium Battle': '日常氦战斗切换次数',
    'Buys Battle goldens instead of helium after this many helium goldens have been purchased and onwards in Dailies. This option only appears when selecting helium.': '日常挑战中，在购买相应次数的金色氦升级以后，改为购买战斗升级。只在日常自动金色升级选择氦时出现。',
    'Battle Helium': '战斗氦切换次数',
    'Buys helium goldens instead of Battle after this many Battle goldens have been purchased and onwards. This option only appears when selecting battle.': '在购买相应次数的金色战斗升级以后，改为购买氦升级。只在自动金色升级选择战斗时出现。',
    'Daily Battle Helium': '日常战斗氦切换次数',
    'Buys helium goldens instead of Battle after this many battle goldens have been purchased and onwards in Dailies. This option only appears when selecting battle.': '日常挑战中，在购买相应次数的金色战斗升级以后，改为购买氦升级。只在日常自动金色升级选择战斗时出现。',
    'Buys Golden Upgrades in Fillers. Radon buys all Radon golden upgrades. Battle buys all Battle golden upgrades. Void buys 8 Void golden upgrades (max number you can buy) then buys helium golden upgrades. Void + Battle buys 8 voids then battle.': '按照相应选项购买金色升级。选择氡则只购买金色氡升级。选择战斗则只购买金色战斗升级。选择虚空则在购买8次金色虚空升级(最大数量)后开始购买金色氡升级。选择虚空+战斗则在购买8次金色虚空升级(最大数量)后开始购买金色战斗升级。',
    'Buys Golden Upgrades in Dailies. Radon buys all Radon golden upgrades. Battle buys all Battle golden upgrades. Void buys 8 Void golden upgrades (max number you can buy) then buys helium golden upgrades. Void + Battle buys 8 voids then battle.': '日常挑战中，按照相应选项购买金色升级。选择氡则只购买金色氡升级。选择战斗则只购买金色战斗升级。选择虚空则在购买8次金色虚空升级(最大数量)后开始购买金色氡升级。选择虚空+战斗则在购买8次金色虚空升级(最大数量)后开始购买金色战斗升级。',
    'Buys Golden Upgrades in C2s. Radon buys all Radon golden upgrades. Battle buys all Battle golden upgrades. Void buys 8 Void golden upgrades (max number you can buy) then buys helium golden upgrades. Void + Battle buys 8 voids then battle.': '挑战2中，按照相应选项购买金色升级。选择氡则只购买金色氡升级。选择战斗则只购买金色战斗升级。选择虚空则在购买8次金色虚空升级(最大数量)后开始购买金色氡升级。选择虚空+战斗则在购买8次金色虚空升级(最大数量)后开始购买金色战斗升级。',
    'Buys Battle goldens instead of Radon at this zone and onwards. This option only appears when selecting void.': '从此区域开始，改为购买战斗升级。只在自动金色升级选择虚空时出现。',
    'Buys Battle goldens instead of Radon at this zone and onwards in Dailies. This option only appears when selecting void.': '日常挑战中，从此区域开始，改为购买战斗升级。只在日常自动金色升级选择虚空时出现。',
    'Radon Battle': '氡战斗切换次数',
    'Buys Battle goldens instead of Radon after this many Radon goldens have been purchased and onwards. This option only appears when selecting radon.': '在购买相应次数的金色氡升级以后，改为购买战斗升级。只在自动金色升级选择氡时出现。',
    'Daily Radon Battle': '日常氡战斗切换次数',
    'Buys Battle goldens instead of Radon after this many Radon goldens have been purchased and onwards in Dailies. This option only appears when selecting radon.': '日常挑战中，在购买相应次数的金色氡升级以后，改为购买战斗升级。只在日常自动金色升级选择氡时出现。',
    'Battle Radon': '战斗氡切换次数',
    'Buys Radon goldens instead of Battle after this many Battle goldens have been purchased and onwards. This option only appears when selecting battle.': '在购买相应次数的金色战斗升级以后，改为购买氡升级。只在自动金色升级选择战斗时出现。',
    'Daily Battle Radon': '日常战斗氡切换次数',
    'Buys Radon goldens instead of Battle after this many battle goldens have been purchased and onwards in Dailies. This option only appears when selecting battle.': '日常挑战中，在购买相应次数的金色战斗升级以后，改为购买氡升级。只在日常自动金色升级选择战斗时出现。',
    'Spend Nature Tokens': '自动分配自然符记',
    'Automatically spend or convert nature tokens.': '切换是否自动分配或转换自然符记。',
    'Token Threshold': '符记阈值',
    'If Tokens would go below this value it will not convert tokens.': '符记将低于此数值时不转换符记。',
    'Spend/convert Poison tokens': '分配/转换毒符记',
    'Empowerment': '赋能',
    'Transfer': '传递率',
    'Convert to Wind': '转换为风',
    'Convert to Ice': '转换为冰',
    'Convert to Both': '二者都转换',
    'Spend/convert Wind tokens': '分配/转换风符记',
    'Convert to Poison': '转换为毒',
    'Spend/convert Ice tokens': '分配/转换冰符记',
    'Enlight: Auto': '启迪：自动',
    'Enables Automatic Enlightenment. Use the settings to define how it works.': '切换是否启用自动启迪。使用以下选项来进一步设置。',
    'E: F: Poison': '启迪：毒',
    'Activate Poison Enlight when Enlight cost is below this Thresh in Fillers. Consumes Tokens. -1 to disable.': '当毒启迪花费低于此数值时启用毒启迪。自动花费符记。设为-1则关闭此选项。',
    'E: F: Wind': '启迪：风',
    'Activate Wind Enlight when Enlight cost is below this Thresh in Fillers. Consumes Tokens. -1 to disable.': '当风启迪花费低于此数值时启用风启迪。自动花费符记。设为-1则关闭此选项。',
    'E: F: Ice': '启迪：冰',
    'Activate Ice Enlight when Enlight cost is below this Thresh in Fillers. Consumes Tokens. -1 to disable.': '当冰启迪花费低于此数值时启用冰启迪。自动花费符记。设为-1则关闭此选项。',
    'E: D: Poison': '启迪：日常：毒',
    'Activate Poison Enlight when Enlight cost is below this Thresh in Dailies. Consumes Tokens. -1 to disable.': '日常挑战中，当毒启迪花费低于此数值时启用毒启迪。自动花费符记。设为-1则关闭此选项。',
    'E: D: Wind': '启迪：日常：风',
    'Activate Wind Enlight when Enlight cost is below this Thresh in Dailies. Consumes Tokens. -1 to disable.': '日常挑战中，当风启迪花费低于此数值时启用风启迪。自动花费符记。设为-1则关闭此选项。',
    'E: D: Ice': '启迪：日常：冰',
    'Activate Ice Enlight when Enlight cost is below this Thresh in Dailies. Consumes Tokens. -1 to disable.': '日常挑战中，当冰启迪花费低于此数值时启用冰启迪。自动花费符记。设为-1则关闭此选项。',
    'E: C: Poison': '启迪：挑战2：毒',
    'Activate Poison Enlight when Enlight cost is below this Thresh in C2s. Consumes Tokens. -1 to disable.': '挑战2中，当毒启迪花费低于此数值时启用毒启迪。自动花费符记。设为-1则关闭此选项。',
    'E: C: Wind': '启迪：挑战2：风',
    'Activate Wind Enlight when Enlight cost is below this Thresh in C2s. Consumes Tokens. -1 to disable.': '挑战2中，当风启迪花费低于此数值时启用风启迪。自动花费符记。设为-1则关闭此选项。',
    'E: C: Ice': '启迪：挑战2：冰',
    'Activate Ice Enlight when Enlight cost is below this Thresh in C2s. Consumes Tokens. -1 to disable.': '挑战2中，当冰启迪花费低于此数值时启用冰启迪。自动花费符记。设为-1则关闭此选项。',
    'Enhance Grids': '强化地图区域显示',
    'Apply slight visual enhancements to world and map grids that highlights with drop shadow all the exotic, powerful, skeletimps and other special imps.': '强化地图区域的显示，使奇异外皮，脆皮骷髅等特殊脆皮有特殊的显示图标。',
    'Enable Breed Timer': '启用繁殖计时',
    'Enables the display of the hidden breedtimer. Turn this off to reduce memory.': '切换是否直接显示隐藏的繁殖计时。关闭此项可减少内存占用。',
    'Enable AutoMap Status': '启用自动地图状态',
    'Enables the display of the map status. Turn this off to reduce memory.': '切换是否显示自动地图的状态。关闭此项可减少内存占用。',
    'Go AFK Mode': '进入挂机模式',
    'Action Button). Go AFK uses a Black Screen, and suspends ALL the Trimps GUI visual update functions (updateLabels) to improve performance by not doing unnecessary stuff. This feature is primarily just a CPU and RAM saving mode. Everything will resume when you come back and press the Back button. Console debug output is also disabled. The blue color means this is not a settable setting, just a button. You can now also click the Zone # (World Info) area to go AFK now.': '主动点击按钮)。启用挂机模式后，游戏界面变为黑色，关闭所有通常的图像显示功能，可能提升游戏运行效率。此功能用于减少CPU和内存的性能占用。点击我回来了按钮以后一切将恢复正常。控制台输出同时也被禁止。此按钮为蓝色，这意味着它不是设置，只是按钮。您还可以点击界面中的区域 ###(世界信息)来进入挂机模式。',
    'Show Changelog': '显示更新日志',
    'Action Button). Shows the changelog popup message that AT loads on startup again, in case you missed it. The blue color means this is not a settable setting, just a button.': '主动点击按钮)。再次显示载入脚本时显示过的更新日志。此按钮为蓝色，这意味着它不是设置，只是按钮。',
    'General Spam': '显示通常脚本信息',
    'General Spam = Notification Messages, Auto He/Hr': '通常脚本信息包括通知信息，自动氦/小时等',
    'Upgrades Spam': '显示升级脚本信息',
    'Equipment Spam': '显示装备脚本信息',
    'Maps Spam': '显示地图脚本信息',
    'Maps Spam = Buy,Pick,Run Maps,Recycle,CantAfford': '地图脚本信息包括购买、选择、运行地图，回收地图，碎片不够等',
    'Other Spam': '显示其它脚本信息',
    'Other Spam = mostly Better Auto Fight (disable with: MODULES["fight"].enableDebug=false ), Trimpicide & AutoBreed/Gene Timer changes, AnalyticsID, etc - a catch all.': '其它脚本信息包括改良自动战斗(可以在控制台输入MODULES["fight"].enableDebug=false关闭)，预期放弃士兵，自动繁殖计时变化，分析ID变化等等。',
    'Building Spam': '显示建筑脚本信息',
    'Building Spam = all buildings, even storage': '建筑脚本信息包括所有建筑，连存储建筑也计入',
    'Job Spam': '显示工作脚本信息',
    'Job Spam = All jobs, in scientific notation': '工作脚本信息包括所有工作，以科学记数法显示',
    'Starting Zone Spam': '显示区域开始脚本信息',
    'Disables \'Starting new Zone ###\' , RoboTrimp MagnetoShreik, and any future Graph Spam that comes from graph logs.': '区域开始脚本信息包括进入区域###的信息，脆皮机器人启用电磁尖啸，以及图表产生的相关信息。',
    'Magmite/Magma Spam': '显示岩浆脚本信息',
    'Everything in Magmite Module and Buy Magmamancers': '与岩浆相关的所有信息，及雇佣岩浆巫师',
    'AutoPerks Spam': '显示自动特权脚本信息',
    'Everything in related to AutoPerks': '与自动分配特权相关的所有信息',
    'Nature Spam': '显示自然脚本信息',
    'Everything in related to Nature': '与自然相关的所有信息',
    'Import AutoTrimps': '导入脚本设置',
    'Import your AutoTrimps Settings. Asks you to name it as a profile afterwards.': '导入脆皮脚本的设置。导入完成后还会让您进行设置文件的命名。',
    'Export AutoTrimps': '导出脚本设置',
    'Export your AutoTrimps Settings as a output string text formatted in JSON.': '导出脆皮脚本的设置。',
    'Reset to Default': '恢复为默认设置',
    'Reset everything to the way it was when you first installed the script.': '将脚本的设置恢复到初始状态。',
    'Gives you an AT settings String that you can use to import. Use if you are less than z60.': '生成可导入的脚本设置。如果您目前区域低于60，可以使用它。',
    '550+ AT Settings': '区域550以上的设置',
    'Gives you an AT settings String that you can use to import. Use if you are z550+': '生成可导入的脚本设置。如果您目前区域高于550，可以使用它',
    'Cleanup Saved Settings': '清除过时的设置数据',
    'Deletes old values from previous versions of the script from your AutoTrimps Settings file.': '将之前版本过时的设置数据从设置文件中删除。',
    'Type a number below. You can also use shorthand such as 2e5 or 200k. Accepts negative numbers as validated inputs.': '在下方输入数字。您还可以使用例如2e5或200k之类的缩写。可以输入负数。',
    'Type a number below. You can also use shorthand such as 2e5 or 200k. Put -1 for Infinite.': '在下方输入数字。您还可以使用例如2e5或200k之类的缩写。输入-1则设为无穷大。',
    'Apply': '应用',
    'Type your input below': '在下方输入',
    'WARNING: Your void maps are set to complete after your autoPortal, and therefore will not be done at all! Please Change Your Settings Now. This Box Will Not Go away Until You do. Remember you can choose \'Custom\' autoPortal along with challenges for complete control over when you portal.': '注意：您的虚空地图区域设置到了自动传送门的区域之后，因此将完全无效！请修改设置。在修改之前，这个窗口将会一直弹出。请记住，您可以选择自动传送门选项中的自定义选项以彻底控制传送的时机。',
    'Estimated autoPortal level': '预计自动传送门区域',
    'Void Maps Conflict': '虚空地图冲突',
    'After Daily He/Hr': '算上日常加成后的氦/小时',
    'After Daily Rn/Hr': '算上日常加成后的氡/小时',
    'Hidden Next Group Breed Timer': '隐藏的繁殖计时',
    'How long your next army has been breeding for, or how many anticipation stacks you will have if you send a new army now.': '显示下一队士兵已经繁殖了多久，或者是如果现在让士兵开始战斗，预期能达到多少层。',
    'Army Count': '军队规模',
    'Settings Profile': '设置文件',
    '<Delete Profile': '<删除设置文件',
    'Save New...': '另存为新的设置文件',
    'ExportAutoTrimps': '导出脚本设置',
    'This is your AUTOTRIMPS save string. There are many like it but this one is yours. Save this save somewhere safe so you can save time next time.': '以下是您的脚本设置数据字符串。只属于您，独一无二。保存好它，这样下次就能省不少事了。',
    'This is your AUTOTRIMPS z550+ save string. Use this string to import the settings.': '以下是区域550以上的脚本设置数据字符串。导入相应字符串后即可导入相应设置。',
    'This is your AUTOTRIMPS z60 save string. Use this string to import the settings.': '以下是区域60以下的脚本设置数据字符串。导入相应字符串后即可导入相应设置。',
    'ImportAutoTrimps': '导入脚本设置',
    'Import your AUTOTRIMPS save string! It\'ll be fine, I promise.': '导入您的脚本设置数据字符串！它会能用的，我保证。',
    'spireImport': '尖塔导入',
    'Import your SPIRE string!': '导入您的尖塔的字符串！',
    'CleanupAutoTrimps': '清除过时的设置数据',
    'Autotrimps saved-settings have been attempted to be cleaned up. If anything broke, refreshing will fix it, but check that your settings are correct! (prestige in particular': '已完成之前版本过时数据的清理。如果脚本工作不正常，只须刷新就能修复，但这之后请检查一下相关设置是否正确！(特别是重铸相关的设置',
    'Thats all the help you get.': '详情见上图。',
    'Name': '名称',
    '%C': '加成：挑战',
    '%HZE': '区域比',
    'Total': '总计',
    'Loading New AutoTrimps Profile...': '正在载入新的脚本设置文件……',
    'Current Settings will be lost': '当前的设置将丢失',
    'NOTICE': '注意',
    'Switching to new AutoTrimps settings profile!!!!': '将切换为新的脚本设置文件！！！！',
    'All current settings': '所有当前的设置 ',
    'WILL': '将',
    'be lost after this point.': '在此之后丢失。',
    'You might want to cancel, to go back and save your existing settings first....': '如果有需要，您可以先取消，然后保存当前的设置文件……',
    'Confirm and Switch Profiles': '确认切换',
    'Loading AutoTrimps Default Profile...': '正在载入默认的脚本设置文件……',
    'Current Settings will be lost!': '当前的设置将丢失！',
    'Switching to Default AutoTrimps settings profile!!!!': '将切换为默认的脚本设置文件！！！！',
    'This will': '这将 ',
    'Reset': '重置',
    'the script to factory settings.': '脚本设置为出厂设置。',
    'Reset to Default Profile': '重置为默认',
    'Enter New Settings Profile Name': '输入新的设置文件的名称',
    'What would you like the name of the Settings Profile to be?': '新的设置文件应该叫什么名字？',
    'WARNING': '注意',
    'Delete Profile???': '删除设置文件？？？',
    'You are about to delete the': '您将要删除的是 ',
    'settings profile.': '设置文件。',
    'This will not switch your current settings though. Continue ?': '这并不会影响您当前的设置。确定继续吗？',
    'Delete Profile': '删除设置文件',
    'Generic message': '一般消息',
    'Autotrimps has been successfully reset to its defaults!': '脚本设置已重置为默认设置！',
    'Out of Map Credits': '地图代币耗尽',
    'Prestige Raiding': '重铸袭劫',
    'Getting Spire Map Bonus': '尖塔前获得地图奖励',
    'Skipping Spire': '跳过尖塔',
    'Max Map Bonus After Zone': '之后区域一直获得最大地图奖励',
    'Want Health & Damage': '需要更多生命值和伤害',
    'Want more health': '需要更多生命值',
    'Advancing': '前进中',
    'Prestige Skipped': '跳过重铸',
    'He/hr': '氦/小时',
    'Mayhem Attack': '暴乱攻击',
    'Mayhem Health': '暴乱生命值',
    'Questing': '运行任务',
    'Time Farming Bogs': '定时刷图黑色泥沼',
    'Bogs': '泥沼',
    'Rn/hr': '氡/小时',
    'TRIMPS - AFK': '脆皮 - 挂机中',
    'Current zone: -': '当前区域：-',
    'Current helium: -': '当前氦：-',
    'Status: -': '状态：-',
    'I\'m Back': '我回来了',
    'Current Zone': '当前区域',
    'Current': '当前',
    'Current Status: Off': '当前状态：关闭',
    'Current Status: Out of Map Credits': '当前状态：地图代币耗尽',
    'Current Status: Prestige Raiding': '当前状态：重铸袭劫',
    'Current Status: BW Raiding': '当前状态：仿生袭劫',
    'Current Status: Getting Spire Map Bonus': '当前状态：尖塔前获得地图奖励',
    'Current Status: Skipping Spire': '当前状态：跳过尖塔',
    'Current Status: Max Map Bonus After Zone': '当前状态：之后区域一直获得最大地图奖励',
    'Current Status: ': '当前状态：',
    'Current Status: Prestige': '当前状态：重铸',
    'Current Status: Want Health & Damage': '当前状态：需要更多生命值和伤害',
    'Current Status: Want more health': '当前状态：需要更多生命值',
    'Current Status: Advancing': '当前状态：前进中',
    'Current Status: Mayhem Attack': '当前状态：暴乱攻击',
    'Current Status: Mayhem Health': '当前状态：暴乱生命值',
    'Current Status: Praiding': '当前状态：宇宙2重铸袭劫',
    'Current Status: Questing': '当前状态：运行任务',
    'Current Status: Time Farming': '当前状态：定时刷图',
    'Current Status: Time Farming Bogs': '当前状态：定时刷图黑色泥沼',
    'Current Status: Black Bogs': '当前状态：黑色泥沼',
    'Zeker0 (z1-': '脚本预设(区域1-',
    'Zeker0 (z60-': '脚本预设(区域60-',
    'Zeker0 (z101-': '脚本预设(区域101-',
    'Zeker0 (z181-': '脚本预设(区域181-',
    'Zeker0 (z230-': '脚本预设(区域230-',
    'Zeker0 (z300-': '脚本预设(区域300-',
    'Zeker0 (z400-': '脚本预设(区域400-',
    'Zeker0 (z450-': '脚本预设(区域450-',
    'Zeker0 (z501-': '脚本预设(区域501-',
    'Zeker0 (z550+': '脚本预设(区域550+',
    'CUSTOM ratio': '自定义比例',
    'Allocate Perks': '分配特权',
    'Dump Perk': '主加特权',
    'Ratio Preset': '分配比例预设',
    'Automatic Perk Allocation Error': '自动分配特权错误',
    'A Respec would be required and is NOT available. You used it already, try again next portal. Press': '需要洗点才可以进行自动分配特权，但您已经洗点过了，请在下次传送后再重试。按 ',
    'esc': 'esc',
    'to close this tooltip.': '键以关闭此提示框。',
    'Zek (z1-': '脚本预设(区域1-',
    'Zek (Melt': '脚本预设(熔点',
    'Zek (Quag': '脚本预设(泥淖',
    'Auto Portaling NOW!': '即将使用自动传送门！',
    'Hit Delay Portal to WAIT 1 more zone.': '点击延迟传送按钮则在下个区域再度询问。',
    'NOTICE: Auto-Portaling in 5 seconds....': '注意：5秒内将使用自动传送门……',
    'Delay Portal': '延迟传送',
    //脚本3相关结束

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    'Researching': '研究中',
    'Are you sure you want to reset? This will really actually reset your game. You won\'t get anything cool. It will be gone.': '确定要重置吗？这真的会重置你的游戏。你不会因此得到任何酷酷的东西。你的存档会消失的。',
    'This is not the soft-reset you\'re looking for. This will delete your save.': '这不是你要找的软重置。这将删除您的所有存档。',
    'Activate firing mode, turning the job buttons red, and forcing them to fire trimps rather than hire them. The newly unemployed Trimps will start breeding instead of working, but you will not receive a refund on resources.': '激活解雇模式，工作类目下的按钮将变为红色，点击按钮将解雇脆皮，而不是雇佣它们。新失业的脆皮将开始繁殖，你也不会获得任何资源返还。',
    'Max wood': '木头上限',
    'Science Per Second': '每秒获得科学点',
    'Farmers': '农民',
    'Lumberjacks': '伐木工',
    'Item Block': '物品格挡',
    'Breeding': '繁殖中',
    'Corrupted Precision': '腐化精准',
    'Void Strength': '虚空暴击',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    'You': '你',
    'Food Per Second': '每秒获得食物',
    'Disable firing mode': '关闭解雇模式',
    'Firing': '解雇模式',
    'Soldiers': '士兵',
    'Item Attack': '物品攻击',
    'Min': '最小',
    'Building': '建造中',
    'Mining': '挖矿中',
    '': '',
    '': '',
    //未分类：
    'primary': '主要',
    'secondary': '次要',
    'exotic': '奇异',
    'helium': '氦',
    'essence': '精华',
    'token': '符记',
    'magma': '岩浆',
    'events': '事件',
    'repeated': '重复',
    'unique': '独特',
    'trimp': '脆皮',
    'enemy': '敌人',
    'food': '食物',
    'wood': '木头',
    'metal': '金属',
    'fragments': '碎片',
    'gems': '宝石',
    'science': '科学',
    'Fire': '火焰',
    'Frost': '冰霜',
    'Wind': '风',
    'Ice': '冰',
    //传家宝
    'miner': '矿工',
    'lumber': '木材',
    'farming': '农业',
    'Poison': '毒',
    'Knowledge': '知识',
    'Condenser': '冷凝',
    'Strength': '力量',
    'Lightning': '闪电',
    'Monday': '周一',
    'Tuesday': '周二',
    'Wednesday': '周三',
    'Thursday': '周四',
    'Friday': '周五',
    'Saturday': '周六',
    'Sunday': '周日',
    'Corrupt': '腐化',
    'Healthy': '健康的',
    'Nu': '虚空物质',
    '': '',
    //传家宝效果
    'Ss': '尖塔石头',
    '': '',
    '': '',
    '': '',
    '': '',
    //特权
    'Food/Wood/Metal': '食物/木头/金属',
    'cache': '储藏箱',
    'bone': '骨头',
    'Tribute X': '贡品 X',
    'enabled': '启用',
    //修饰符

    'Fast Attacks': '快速攻击',
    'Large Cache': '大储藏箱',
    'Huge Cache': '巨大储藏箱',
    'Small Savory Cache': '小美味储藏箱',
    'Small Wooden Cache': '小木头储藏箱',
    'Small Metal Cache': '小金属储藏箱',
    'Small Research Cache': '小研究储藏箱',
    'Large Savory Cache': '大美味储藏箱',
    'Large Wooden Cache': '大木头储藏箱',
    'Large Metal Cache': '大金属储藏箱',
    'Large Research Cache': '大研究储藏箱',
    'Fast Attacks (FA': '快速攻击 (FA',
    'Large Cache (LC': '大储藏箱 (LC',
    'Huge Cache': '巨大储藏箱',
    'Huge Cache (HC': '巨大储藏箱 (HC',
    'Small Savory Cache (SSC': '小美味储藏箱 (SSC',
    'Small Wooden Cache (SWC': '小木头储藏箱 (SWC',
    'Small Metal Cache (SMC': '小金属储藏箱 (SMC',
    'Small Research Cache (SRC': '小研究储藏箱 (SRC',
    'Large Savory Cache (LSC': '大美味储藏箱 (LSC',
    'Large Wooden Cache (LWC': '大木头储藏箱 (LWC',
    'Large Metal Cache (LMC': '大金属储藏箱 (LMC',
    'Large Research Cache (LRC': '大研究储藏箱 (LRC',
    'Prestigious': '重铸',
    '- Earn 10 seconds of food production each time you complete this map.': '- 每次完成地图时获得10秒的食物产量',
    '- Earn 10 seconds of metal production each time you complete this map.': '- 每次完成地图时获得10秒的金属产量',
    '- Earn 10 seconds of wood production each time you complete this map.': '- 每次完成地图时获得10秒的木材产量',
    '- Earn 20 seconds of food production each time you complete this map.': '- 每次完成地图时获得20秒的食物产量',
    '- Earn 20 seconds of metal production each time you complete this map.': '- 每次完成地图时获得20秒的金属产量',
    '- Earn 20 seconds of wood production each time you complete this map.': '- 每次完成地图时获得20秒的木材产量',
    'Abandon Soldiers': '放弃士兵',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    //1.2.标题
    'Trap X': '陷阱 X',
    'Barn X': '谷仓 X',
    'Shed X': '窝棚 X',
    'Forge X': '锻造厂 X',
    'Hut X': '小屋 X',
    'House X': '宅院 X',
    'Mansion X': '豪宅 X',
    'Hotel X': '宾馆 X',
    'Resort X': '度假村 X',
    'Gym X': '健身房 X',
    'Nursery X': '托儿所 X',
    'Farmer X': '农民 X',
    'Lumberjack X': '伐木工 X',
    'Miner X': '矿工 X',
    'Scientist X': '科学家 X',
    'Trainer X': '训练师 X',
    'Explorer X': '探险家 X',
    'Magmamancer X': '岩浆巫师 X',
    'Amalgamator X': '合并者 X',
    'AutoGolden': '自动黄金升级',
    'Rename Preset': '重命名预设',
    'Pierce': '穿透',
    'Fast': '快速',
    'Decay': '衰变',
    'Empowerments of Nature': '自然赋能',
    'Switch Daily': '选择日常挑战',
    'Empower': '赋能',
    'Pressure': '压力',
    'Unliving': '亡灵化',
    'Bloodthirst': '嗜血',
    'Fire Trap': '火焰陷阱',
    'Frost Trap': '冰霜陷阱',
    'Shift Up': '上移',
    'Shift Down': '下移',
    'Sell Trap/Tower': '出售陷阱/塔',
    'Queue': '队列',
    'Heirloom': '传家宝',
    'Trustworthy Trimps': '可信的脆皮',
    'World Info': '世界信息',
    'Threat': '威胁',
    'Enemies': '敌人',
    'Runestones': '符石',
    'Trimps Per Second': '每秒脆皮',
    'Max Trimps': '脆皮上限',
    'Import Perk Preset': '导入特权预设',
    'Export Perk Setup': '导出特权设置',
    //专精
    'Quick Gen': '快速发生',
    'Condenser Tower': '冷凝塔',
    'Condenser Tower II': '冷凝塔 II',
    'Knowledge Tower': '知识塔',
    'Knowledge Tower II': '知识塔 II',
    'Poison Trap': '剧毒陷阱',
    'Poison Trap II': '剧毒陷阱 II',
    'Lightning Trap': '闪电陷阱',
    'Lightning Trap II': '闪电陷阱 II',
    'Frost Trap IV': '冰霜陷阱 IV',
    'Strength Tower': '力量塔',
    'Strength Tower II': '力量塔 II',
    'Strength Tower III': '力量塔 III',
    'Fire Trap III': '火焰陷阱 III',
    'Trap Layout 1': '陷阱布局 1',
    'Trap Layout 2': '陷阱布局 2',
    'Configure Generator State': '配置发生器状态',
    'Spire Settings': '尖塔设置',
    'Map Corruption': '地图腐化',
    'Food/Wood/Metal Loot Breakdown': '食物/木头/金属 劫掠明细',
    'Breezy': '微风',
    'Confirm Respec Masteries': '确认专精洗点',
    //成就
    'Gym X10': '健身房 X10',
    'Your Email': '你的电子邮箱',
    'Not AutoSaving': '不自动保存',
    'Register a PlayFab Account': '注册一个PlayFab账号',
    'Can only be run once!': '只能运行一次!',
    'Reward does not count toward Bone Portals or affect best He/Hr stat.': '奖赏不计入骨头购买传送门数据，也不计入最好的氦/小时统计。',
    '': '',
    '': '',
    '': '',
    '': '',
    //成就结束
    'Toxic': '毒性',
    'Block': '格挡',
    'Save Perk Preset': '保存额外特权预设',
    'Rename Perk Preset': '重命名额外特权预设',
    'Load Perk Preset': '加载额外特权预设',
    'Health': '生命值',
    'Attack': '攻击力',
    'Void Map': '虚空地图',
    'Corruption': '腐败',
    'The Magma': '岩浆',
    'Error': '出错啦',
    '': '',
    '': '',

    //未分类20190806
    'Recycle Map': '回收地图',
    'Research first': '研究优先',
    'Challenge': '挑战',
    'Gathering': '收集中',
    'Chopping': '伐木中',
    'Trimps': '脆皮',
    'Auto Saving': '自动保存',
    'Void Maps (': '虚空地图 (',
    'This is a building in your queue, you\'ll need to click "Build" to build it. Clicking an item in the queue will cancel it for a full refund.': '这是您队列中的一个建筑物，您需要单击“建造”来构建它。 单击队列中的项目将取消它以获得全额退款。',
    'Download as File': '下载为文件',
    'Import your save string! It\'ll be fun, I promise.': '导入存档字符串！ 我保证，这会很有趣。',
    'Unlock at Z': '解锁于区域',
    'Trimps Official Discord': '脆皮官方Discord',
    'Helium Canisters': '氦罐',
    'Loot off': '劫掠 关闭',
    'Combat off': '战斗 关闭',
    'Unlocks off': '解锁 关闭',
    'Story off': '故事 关闭',
    'Offline Progress': '离线进度',
    'Locked': '未解锁',
    'Reward': '奖励',
    'better get some more achievements': '更好地获得更多的成就',
    'Level': '等级',
    'Sweet, thanks.': '甜蜜，谢谢。',
    'Base': '基础',
    'Item Health': '物品生命',
    'Found a Skeletimp!': '找到了一个Skeletimp！',
    'AutoFight': '自动战斗',
    'No Modifier': '没有变化',
    'Producing': '生产',
    'Housing/Tick': '房屋/Tick',
    'Dimensional Generator': '维度发生器',
    'Runestones per Second': '符石每秒',
    'Sell All': '全部出售',
    'Upgrade (': '升级 (',
    'View Perks': '查看特权',
    'Pause Spire': '暂停尖塔',
    'Clear Spire III to unlock the Lightning Trap and Knowledge Tower, then raise your Spire\'s Threat to 1100 and build your eleventh Floor.': '清除尖塔 III去解锁闪电陷阱和知识塔，然后将尖塔的威胁提高到1100并建立你的第11层。',
    'Exotic Imp-orts will be unlocked permanently once purchased, and will stick around through portals. Each has a 3% chance to spawn per square and better loot than normal enemies. Collect them all!': '一旦购买，奇异外皮将永久解锁，并将通过传送门保持不变。 每个方块产生3％的几率和比普通敌人更好的战利品。 全部收集它们！',
    'You\'ve got a new Trap and Tower, your Spire is still growing, and your power is growing with it! Your Trimps are slightly annoyed that they have to clean up the occasional Bad Guy that makes it through the Spire and into the town, but they can handle it. They all agree that life in general is just more fun when there\'s a giant Spire grinding Bad Guys at the entrance to their town.': '你有一个新的陷阱和塔，你的尖塔仍在增长，你的力量正在增长！ 你的脆皮有点恼火，他们不得不清理偶尔通过尖塔并进入城镇的坏家伙，但他们可以处理它。 他们都同意，当他们的城镇入口处有一个巨大的尖塔磨坏人们时，生活总体上会更有趣。',
    'While you\'re feeling comfortable maintaining your Spire\'s defenses with the tools you have, you still feel like there\'s something missing. Your Scientists say that they could perhaps create one more Trap and Tower, but again they\'ll need to study a Core from an even higher Spire.': '虽然你觉得使用你拥有的工具来维持尖塔的格挡感觉很舒服，但你仍然觉得有些东西缺失了。 你的科学家说，他们或许可以创造一个更多的陷阱和塔，但他们再次需要从更高的尖塔学习核心。',
    'Sell a Trap/Tower': '出售一个陷阱/塔',
    'Shrink Window': '收缩窗口',
    ' Lv': ' 等级',
    'Chrome and Firefox are currently the only fully supported browsers.': 'Chrome和Firefox当前是唯一受完全支持的浏览器。',
    'click here to send a message on Reddit': '单击此处在Reddit上发送消息',
    'community-created Trimps Wiki!': '社区创建的脆皮 Wiki！',
    'If you need to contact the developer for any reason,': '如果出于任何原因需要与开发人员联系，',
    'If you want to read about or discuss the finer details of Trimps mechanics, check out the': '如果您想阅读或讨论脆皮力学的更多细节，请查看',
    'Need help, found a bug or just want to talk about Trimps? Check out the': '需要帮助，发现错误或只是想谈论脆皮？ 看看',
    'or come hang out in the new': '或参加新的功能',
    'or find Greensatellite in the Trimps Discord.': '或在脆皮 Discord中找到Greensatellite。',
    'If you would like to make a donation to help support the development of Trimps, you can now do so with PayPal! If you want to contribute but can\'t afford a donation, you can still give back by joining the community and sharing your feedback or helping others. Thank you either way, you\'re awesome!': '如果您想捐款以支持脆皮的开发，现在就可以使用PayPal！ 如果您想捐款但负担不起，您仍然可以通过加入社区，分享您的反馈或帮助他人来回馈社会。 无论哪种方式，谢谢你，你真棒！',
    'This is your save string. There are many like it but this one is yours. Save this save somewhere safe so you can save time next time.': '这是您的存档字符串。 有很多类似的东西，但这是你的。 将此保存到安全的地方，以便下次节省时间继续玩。',
    'Send your poor Trimps to certain doom in the battlefield. You\'ll get cool stuff though, they\'ll understand. (Hotkey: F': '将您可怜的脆皮带到战场上的某些厄运。 他们会明白，但是您会得到很棒的东西。 （热键：F',
    'You have been in this Zone ': '你一直在这个区域',
    'Amount': '数量',
    'Line Total': '总行数',
    'Allow the Trimps to start fighting on their own whenever their town gets overcrowded (Hotkey: A': '每当镇上人满为患时，让脆皮自己开始战斗（热键：A',
    'our Trimps were a few minutes away from burning the place down': '我们的脆皮距离烧毁这个地方只有几分钟的路程',
    'Lost Time': '失去的时间',
    'Neat': '利落',
    'It\'s kind of heavy for your Trimps, but they\'ll manage. Adds 3 attack to each soldier per level': '这对你的脆皮来说有点重，但他们会处理的。每升一级增加3个攻击',
    '- Bone': '- 骨头',
    '- Enemy': '- 敌人',
    '- Events': '- 事件',
    '- Exotic': '- 奇异',
    '- Primary': '- 主要',
    '- Repeated': '- 重复',
    '- Secondary': '- 次要的',
    '- Unique': '- 独特',
    'Here you can finely tune your message settings, to see only what you want from each category. Mouse over the name of a filter for more info.': '在这里，你可以微调你的消息设置，只看到你想从每个类别。鼠标移到过滤器的名称上以获取更多信息。',
    'Repeated': '重复的',
    'Unique': '独特的',
    'Confirm': '确认',
    'Bone': '骨头',
    'Enemy': '敌人',
    'Events': '事件',
    'Exotic': '奇异',
    'Primary': '主要',
    'Secondary': '次要的',
    '- Log all unlocks that only drop once per portal, such as Gyms or Miners.': '- 记录每个传送门仅释放一次的所有解锁，如健身房或矿工。',
    '- Log all unlocks that drop more than once per run, such as Speedfarming or Coordination.': '- 记录每次运行多次下降的所有解锁，例如耕作加速或协作。',
    '- Log all combat messages involving the enemy.': '- 记录所有与敌人有关的战斗信息。',
    '- Log all combat messages involving your Trimps.': '-记录所有涉及脆皮的战斗消息。',
    '- Log Bone drops from Skeletimps.': '- 记录来自骷髅脆皮的骨头掉落',
    '- Log drops and messages from temporary events, such as holidays.': '- 记录掉落和来自临时事件（例如假期）的消息。',
    '- Log Helium rewards.': '- 记录氦奖励。',
    '- Log the common loot items: Food, Wood, and Metal.': '- 记录常见的战利品：食物，木材和金属。',
    '- Log the less common loot items: Gems, Fragments, Territory Bonus, and others.': '-记录不太常见的战利品：宝石，碎片，领土奖金等。',
    '- Log the rewards granted by Exotic Imports.': '-记录奇异外皮授予的奖励。',
    'This Bad Guy is fast and attacks first': '这个坏家伙速度快并且首先攻击',
    'Buy Chronoimp (50 bones': '购买 脆皮时者（50骨头',
    'Buy Feyimp (50 bones': '购买 脆皮小妖（50骨头',
    'Buy Flutimp (50 bones': '购买 脆皮飘兽（50骨头',
    'Buy Jestimp (50 bones': '购买 脆皮弄臣（50骨头',
    'Buy Magnimp (50 bones': '购买 脆皮磁王（50骨头',
    'Buy Tauntimp (50 bones': '购买 脆皮咚咚（50骨头',
    'Buy Titimp (50 bones': '购买 脆皮泰坦（50骨头',
    'Buy Venimp (50 bones': '购买 脆皮爱神（50骨头',
    'Buy Whipimp (50 bones': '购买 脆皮鞭者（50骨头',
    'Buy Goblimp (50 bones': '购买 脆皮地精（50骨头',
    'Grants an extra 0.3% of current 脆皮': '额外捐赠当前脆皮的0.3％',
    'Wood Per Second': '木头每秒产量',
    'Metal Per Second': '金属每秒产量',
    'Max Food': '食物上限',
    'Max Metal': '金属上限',
    'Max Wood': '木头上限',
    'Apparently your scientists are vegetarians. Hurray, more Turkimp for you!': '显然，您的科学家是素食主义者。 祝您好运！',
    'That Turkimp was delicious, and you have leftovers. If you set yourself to gather Food, Wood, or Metal while this buff is active, you can share with your workers to increase their gather speed by': 'Turkimp真好吃，而且剩饭剩菜了。如果您在这种抛光状态下设置自己收集食物，木材或金属，则可以与您的工人分享以提高他们的收集速度。',
    'You can only purchase 1 Barn at a time.': '您一次只能购买1个谷仓。',
    'You can only purchase 1 Forge at a time.': '您一次只能购买1个锻造厂。',
    'You can only purchase 1 Shed at a time.': '您一次只能购买1个窝棚。',
    'but you wish you had a few more achievements': '但你希望自己能再有一些成就',
    'you\'d do fine with a few more achievements': '您会再取得一些成就',
    'building,': '建筑,',
    'CRIT!!': '暴击!!',
    'CRIT!': '暴击!',
    'Crit!': '暴击!',
    'Got it!': '得到它！',
    'What\'s New': '最新消息',
    'You stumble across a large locked chest, unlike anything you\'ve ever seen. The lock looks rusty, you smack it with a rock, and it falls right off. Immediately the ground shakes and cracks beneath your feet, intense heat hits your face, and Magma boils up from the core.': '您偶然发现了一个巨大的上锁的胸部，这与您见过的任何东西都不一样。 锁看上去生锈了，用石头砸了一下，马上就掉了。 地面立即在您的脚下震动并破裂，强烈的热量击中您的脸，岩浆从核心沸腾。',
    'Where one minute ago there was dirt, grass, and noxious fog, there are now rivers of molten rock (and noxious fog). You\'d really like to try and repair the planet somehow, so you decide to keep pushing on. It\'s been working out well so far, there was some useful stuff in that chest!': '一分钟前有泥土，草丛和有害雾气的地方，现在有熔岩河（有毒雾气）。 您真的很想尝试以某种方式修复地球，因此您决定继续前进。 到目前为止，效果一直很好，那个箱子里有一些有用的东西！',
    'The heat is tough on your Trimps, causing each Zone to reduce their attack and health by 20% more than the last. 10% of your Nurseries will permanently close after each Zone to avoid Magma flows, and Corruption has seeped into both Void and regular Maps, further increasing their difficulty.': '热浪对您的脆皮不利，导致每个区域的攻击力和生命值都比上一个区域减少20％。 每个区域结束后，您的苗圃中有10％将永久关闭，以避免岩浆流动，并且腐败渗透到了虚空地图和常规地图中，进一步增加了难度。',
    'Though you\'ve seen the Corruption grow since the planet broke, you can now see a giant spire pumping out tons of the purple goo. Things seem to be absorbing it at a higher rate now.': '尽管自从行星破裂以来您已经看到了腐败的增长，但是现在您可以看到一个巨大的尖顶抽出大量的紫色粘胶。 现在看来，事物正在以更高的速度吸收它。',
    'Bring it on': '来吧',
    'Improbabilities and Void Maps are now more difficult.': '乌有者发生虚空地图现在都比较困难。',
    'Improbabilities and Void Maps now drop 2x helium.': '乌有者和虚空图现在会掉落2倍的氦气。',
    'However, the chest contained plans and materials for the': '然而，箱子里装着的计划和材料',
    'Travel to the Map Chamber. Maps are filled with goodies, and for each max level map you clear you will gain a 20% stacking damage bonus for that Zone (stacks up to 10 times). (Hotkey: M': '去地图室。地图充满了好东西，每清除一张最高等级地图，你将获得该区域20%的堆叠伤害加成(堆叠最多10次)。(热键:M',
    'Your Spire Traps and Towers have also produced': '您的尖顶陷阱和防御塔也已产生',
    '! In addition, all Zones are now wort': '!此外，所有的区域现在都是wort',
    'Runestones while you were away!': '符石在你离开时！',
    'Spire II': '尖塔 II',
    'if your Trimps have a tendency to slack off when you turn your back.': '如果您的脆皮在转身时有放松的趋势。',
    'Hotkeys: S or': '热键：S 或',
    'MagnetoShriek is NOT active and will not fire.': '电磁尖啸未激活，将不会发射。',
    'Maps (': '地图 (',
    'Welcome': '欢迎',
    "Welcome to Trimps! This game saves using Local Storage in your browser. Clearing your cookies or browser settings will cause your save to disappear! Please make sure you regularly back up your save file by either using the 'Export' button in the bar below or the 'Online Saving' option under 'Settings'.": '欢迎来到脆皮！此游戏存档位于浏览器的本地存储(Local Storage)。清除浏览器数据会丢失存档！请注意备份存档，点击下方"导出"按钮或在"设置"里开启在线存档。',
    'Would you like to enable online saving before you start?': '在开始前，你是否打算开启在线存档？',
    'Enable Online Saving': '开启在线存档',
    'Don\'t Enable': '不开启',
    'Login': '登录',
    'PlayFab Login': 'PlayFab 登录',
    'PlayFab Username': 'PlayFab 用户名',
    'Login to PlayFab': '登录到PlayFab',
    'Password': '密码',
    'Remember Account Info': '记住账号信息',
    '6-30 Chars': '6-30 字符',
    'Recover Account Info': '找回账号信息',
    'Register Playfab Account': '注册Playfab账号',
    'While connected to PlayFab, every time you manually save and': '当连接到PlayFab时，每次手动保存和',
    'once per 30 minutes when auto-saving': '每隔30分钟自动保存时',
    'your file will also be sent to PlayFab\'s servers.': '你的存档也会同步发送到PlayFab的服务器。',
    "Data will be cleared from PlayFab's servers after 3 months of inactivity, this is not a permanent save!": 'PlayFab服务器会清除3个月不活跃的数据，这不是永久性的保存！',
    'Confirm Password': '重复密码',
    'Register': '注册',
    'For recovery, not required': '找回账号用，非必需',
    'Housing': '房屋',
    'Territory Bonus': '领土奖励',
    'Select a Mod': '选择一个模式',
    'Challenge has no end point, and grants an': '挑战没有终点，并在完成时获得',
    'additional': '额外的',
    'which cost helium': '需要消耗氦',
    '. Make sure you can earn back what you spend!': '。请确保你有能力去赚回你花费的氦气!',
    'Make Purchase': '购买',
    'Run Map': '运行地图',
    'Customize your settings for running maps!': '自定义你的地图运行设置！',
    'Back': '后退',
    'Electrified': '触电',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
	"Your Trimps killed a lot of Bad Guys back there. It seems like you're getting the hang of this. However, the world is large, and there are many more Zones to explore. Chop chop.": "你的脆皮在那里杀死了很多坏人。 看起来你似乎已经弄清楚这是怎么一回事了。 然而这个世界很大，依然有去多区域需要探索，“砍”“砍”...",
	"By your orders, your scientists have begun to try and figure out how large this planet is.": "根据您的命令，您的科学家们已经开始尝试了解这个星球有多大。",
	"You order your Trimps to search the area for the keys to your ship, but nobody finds anything. Bummer.": "您命令脆皮在该地区搜索您的船只的钥匙，但没有人找到任何东西。真令人失望。",
	"Do you see that thing at the end of this zone? It's huge! It's terrifying! You've never seen anything like it before, but you know that it is a Blimp. How did you know that? Stop knowing things and go kill it.": "你看到尽头的那个东西了吗？多么的巨大！多么的可怕！ 你以前从未见过这样的东西,但是你知道这是一个脆皮飞艇。你是怎么知道的？别问为什么了，去杀死它！",
	"Slow and steady wins the race. Unless you're racing someone who is actually trying.": "慢而稳事必成， 除非跟你竞争的人比你更努力。",
	"You can't shake the feeling that you've been here before. Déjà-vu?": "你不能排除那种你以前来过这里的感觉，似曾相识。",
	"Looks like another Blimp up ahead. Hard to tell from far away, but it looks like it has more heads than the last one.": "看起来像另一个脆皮飞艇。但很难说，特别是从这么远的地方，不过它看起来比上次那个多了一个头。",
	"You're unstoppable as long as nothing stops you. Unfortunately, it seems like something really wants to stop you.": "你不可阻挡，只要没人阻拦你。 不幸的是，看起来有些东西像是真的想阻止你。",
	"Did you see that green light flash by? Weird. Oh well.": "你看到绿光一闪而过吗？奇怪。噢，好吧。",
	"Another day, another Blimp at the end of the zone": "另一天,又是一个脆皮飞艇在区域的尽头。",
	"Seriously? Another Blimp so soon?": "你是认真的吗？又一个脆皮飞艇！",
	"You climb a large cliff and look out over the new zone. Red dirt, scorched ground, and devastation. Is that a Dragimp flying around out there?!": "你爬上一个巨大的悬崖，俯瞰着一片新的区域。红色的泥土，烧焦的地面，一片荒芜。 那是一头龙在飞来飞去吗？！",
	"There seems to be a strange force urging you to keep going. The atmosphere is becoming... angrier. Part of you wants to turn around and go back, but most of you wants to keep going.": "似乎有一种奇怪的力量鼓励你继续前行。气氛变得有点，愤怒的感觉。 你的身体的一部分想转身回去,但其他大部分想继续前行。",
	"You look behind and see your kingdom. You have gems, a colony, and territory. You wonder if enough Trimps have already fallen in battle. After contemplation, one word falls out of your mouth as you begin to move forward. 'Nah'": "你回头看看你的王国，你拥有宝石、殖民地和领土。 你在想你的脆皮是不是已经在战斗中牺牲了。 沉思之后， 两个字从你的嘴里蹦了出来 “算了”",
	"You can sense that you're close to your goal.": "你感觉到你离你的目标已经不远了。",
	"The portal device you found shines green in the lab. Such a familiar shade...": "你找到的传送门装置在实验室里闪着绿光。 多么熟悉的画面...",
	"You have already attempted this Daily Challenge!": "你已经尝试过这个日常挑战！",
	"Done": "完成",
	"World": "世界",
	"A green background indicates that you could afford a map at this Extra Zone amount with your selected Special Modifier and Perfect Sliders. A gold background indicates that you could afford that map with your selected Special Modifier and some combination of non-perfect sliders.": "绿色背景表示您可以使用所选的特殊修饰符和“完美滑块”以该“额外区域”数量购买地图。 金色背景表示您可以使用所选的特殊修改器和一些不完美的滑块组合来负担该地图。",
	"A huge storm has formed and daylight has become a luxury you have mostly forgotten about. Your Trimps seem to want to go back home, but you're pretty sure you're supposed to keep going this way, so you do. You're very close to the anomaly.": "一场巨大的风暴已经形成，白昼已经成为一种你几乎忘记的奢侈品。你的脆皮似乎想回家，但你很确定你们应该继续向前走，所以你们继续前行。你已经离异常现象非常近了。",
	"There it is. The anomaly is at the end of the zone. You can see it but you don't know what you're seeing. Where did that... thing... come from?! This is highly Improbable.": "它……就在那里。那个异常现象，就在这个区域的尽头。你能看得见它，但是你不知道你正在看的这个东西究竟是什么。这个……东西……是从哪来的？！这个东西太无序了。",
	"A loud boom echoes in the distance, and one of your Trimps runs up to you with outstretched arms, looking quite frightened. He probably just wants some armor and weapons! You hand him some gear, and he accepts it with excitement.": "远处传来一阵响亮的隆隆声，然后一只脆皮伸出双手向你跑来，看起来他有些害怕。他可能只是想要一些武器和护甲！你递给他一些装备，他兴奋地接受了。",
	"Do you see that thing at the end of this Zone? It's huge! It's terrifying! You've never seen anything like it before, but you know that it is a Blimp. How did you know that? Stop knowing things and go kill it.": "你看到尽头的那个东西了吗？多么的巨大！多么的可怕！ 你以前从未见过这样的东西,但是你知道这是一个脆皮飞艇。你是怎么知道的？别问为什么了，去杀死它！",
	"You step over the corpse of the Blimp as it rapidly deflates, and one of your Trimps chuckles at the sound produced. You all cross the sulfuric river to the next Zone, and can feel the presence of an ancient knowledge. Better explore.": "你踩过了脆皮飞艇的尸体，它迅速的瘪了下去。你的其中一个脆皮听到这个声音，顿时咯咯地笑了起来。你们穿过了含硫的河流，来到了下一个区域，在这里你们感受到古代知识的存在。进行更好的探索吧。",
	"Your settlement is getting crowded, there's Trimps in the streets, and you're taking heat. You feel a sudden strong desire to create a map, though you're not quite sure how that would help.": "你住的地方变得越来越拥挤，街道上到处都是脆皮，你感觉自己越来越热。你突然有强烈的愿望想要创建一个地图，尽管你不太确定这会有什么帮助。",
	"Your scientists have finally concluded their report on the analysis of the size of the world. According to the report, they're pretty sure it's infinitely large, but you're pretty sure they just got bored of checking.": "你的科学家们终于完成了他们关于这世界大小的分析报告。根据报告，它们很确信这个世界是无限大的，但你也很确信它们只是对这项检查厌倦了。",
	"You were trying to help bring back some of the Equipment your Trimps left on the ground in that last Zone, and you got a splinter. This planet is getting dangerous, stay alert.": "你试图帮助带回脆皮在上一个区域留在地上的一些装备，并且你得到了一个碎片。这个星球正在变得危险起来，保持警惕。",
	"Another day, another Blimp at the end of the Zone.": "另一天,又是一个脆皮飞艇在区域的尽头。",
	"You climb a large cliff and look out over the new Zone. Red dirt, scorched ground, and devastation. Is that a Dragimp flying around out there?!": "你爬上一个巨大的悬崖，俯瞰着一片新的区域。红色的泥土，烧焦的地面，一片荒芜。 那是一头龙在飞来飞去吗？！",
	"Strange, the sky seems to be getting darker. You ask one of your Trimps for the time, but he doesn't know what a clock is.": "奇怪，天空看起来变的更黑了。你询问其中一只脆皮现在是什么时间，但是它都不知道什么是时钟。",
	"You're a rebel. The universe pointed you into that portal, but you kept pushing forward. You feel... less like you've been here before.": "你是个叛逆者。宇宙指引你进入那个传送门，但是你执意向前推进。你感觉……自己好像没有来过这里。",
	"It seems like the further you press on, the less you know. You still feel an urge to use the portal, though the urge has begun to dwindle.": "似乎你越向前进，你知道的就越少。你仍然有使用传送门的冲动，但是这冲动已经开始减少了。",
	"Your Trimps came up with a pretty catchy battle song that got stuck in your head. None of them survived the next fight though, and you can't remember most of it. Life's tough.": "你的脆皮创造了一首非常吸引人的战歌，这首歌一直萦绕在你的脑海中。但是他们没有一人在下一场战斗中活下来，而且其中大部分的脆皮你也记不得了。生活是真的艰难。",
	"You climb over a large hill that was separating this Zone from the last. The sky is pitch black and lightning crackles in the distance. This is a site of heavy corruption.": "你爬过一座将两个地区分开的大山。天空一片漆黑，远处有闪电划过。这里是一个腐化严重的地方。",
	"You start to wonder how long you've been doing the same thing over and over. There must be something you can do to start to break the cycle. Perhaps you could alter the portal...": "想知道自己一遍遍地重复同样的事情已经多久了。你一定能做些什么来打破这个循环。或许你能对传送门做些修改……",
	"You can't help but notice that the Trimps seem to be the only creatures on this planet not immediately hostile towards outsiders. You ask a nearby Trimp soldier what he thinks you are, and he drools a bit.": "你不禁注意到，脆皮可能是这个星球上唯一不会立刻对外界敌对的生物。你询问附近的一个脆皮士兵，他认为你是什么？然后他有点流口水(迷恋？)。",
	"The world seems so barren out this far. You feel like you're finally starting to get ahead of the curve, but you know by now not to get comfortable.": "这个世界看起来如此贫瘠。你觉得自己终于开始走在前面了，但你现在知道，这并不能让你感到舒服。",
	"Each day and night seems to grow longer than the one before. Is time slowing down? Argh! You fall to your knees with a splitting headache and a strong desire to use the portal. After a few minutes, it passes and you forget what happened. What are we talking about?": "白天和黑夜似乎都比以前更长了。是时间变慢了吗？啊！你跪倒在地，头痛欲裂，并有一种强烈的想使用传送门的渴望。几分钟后，这个感觉消退了，你也忘记了刚才发生了什么。我们刚才在讨论什么来着？",
	"All traces of hills and mountains have long since been trudged past. The world is flat and hostile. You wish your Trimps were better conversationalists.": "回头望去，越过的山的痕迹越来越长。这个世界是平的，并充满了敌意。你希望你的脆皮们能更健谈一些。",
	"As your Trimps scavenge every last bit of helium from that Blimp, one of them begins freaking out. He runs around waving his little arms and making funny noises for a while, eats some dirt, then takes a little nap. You wonder if that's normal. Yeah... probably fine.": "当脆皮们从脆皮飞艇身上提取最后一点氦时，其中一只开始发狂。他跑来跑去，挥舞着他的小胳膊，其中一段时间发出了有趣的声音，吃了一些泥土，然后就开始小睡。你很好奇他是否还正常。是的……可能他还算不错。.",
	"It's been a long time since you've found any blueprints in the maps. You start to wonder where those things even come from.": "你很久没有在地图上找到蓝图了。你开始怀疑这些东西是从哪里来的。",

    //原样
    '': '',
    '': '',


    'Radon Per Hour': '氡每小时',
    'Select a Map!': '选择一个地图！',
    'Click to toggle a challenge mode for your challenges!': '单击以切换到挑战模式，迎接您的挑战!',
    'In Challenge': '在挑战',
    'mode, you can re-run some challenges in order to earn a permanent attack, health, and Helium bonus for your Trimps. MOST Challenge': '模式中, 你可以重新进行一些挑战来为你的脆皮获得永久的攻击、生命和氦气加成。大多数挑战',
    's will grant': '将给予',
    '1% attack and health and 0.10% increased Helium for every 10 Zones reached. Every 100 Zones, the attack and health bonus will increase by an additional 1%, and the Helium bonus will increase by': '每达到10区域获得1%攻击和生命和0.10%氦气增加。每100区域，攻击和生命奖励将递增1%，氦气奖励递增',
    'Trimps lose half of their attack, health and block but gain 2x resources from loot (not including Helium) and have a chance to find Dark Essence above Z180 in the world. This formation must be active for the entire fight to receive any bonus from enemies, and must be active for the entire map to earn a bonus from a Cache.': '脆皮失去一半的生命、攻击和防御，但是获得 2 倍资源掉落(不包括氦)。在区域180之后的世界里，有机会获得黑暗精华。 这个阵型必须在整个战斗中保持活跃，掉落奖励加成才能生效；同样，必须在整个地图保持活跃，奖励加成才能对地图修饰符的奖励生效',
    'You will earn a bonus from this enemy!': '你将会从这个敌人处获得奖励加成!',
    'You recently switched to Scryer Formation and will': '你刚刚切换到占卜者阵型，',
    'not': '不',
    'earn a bonus from this enemy.': '会从这个敌人处获得奖励加成',
}


//需处理的前缀
var cnPrefix = {
    "-60 AT Settings": "区域60以下的设置",
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "：",
    ", ": "，", //段前标点
    "food:": "食物:",
    "wood:": "木头:",
    "metal:": "金属:",
    "science:": "科学点:",
    "fragments:": '碎片:',
    "gems:": '宝石:',
    "helium:": '氦:',
    "Enemy attack increased by ": '敌人攻击力增加',
    "Enemy health in maps increased by ": '地图上的敌人生命值增加',
    "Enemy attack in maps increased by ": '地图上的敌人攻击力增加 ',
    "of all Helium, ": "所有的氦，",
    " Nu from Heirlooms earned during the run": "上次传送后传家宝回收的虚空物质",
    "Mapping in ": "运行地图：", //离线地图
    "Big Wall,": "巨墙，", //地图名称
    "Whispering ": "私语", //地图名称
    "Sandy ": "沙之", //地图名称
    "Little ": "小", //地图名称
    "Big ": "巨", //地图名称
    "Rancid ": "腐臭", //地图名称
    "Tired ": "疲劳", //地图名称
    "Laughing ": "欢笑", //地图名称
    "Weeping ": "哭泣", //地图名称
    "Windy ": "风之", //地图名称
    "Terrible ": "可怖", //地图名称
    "Nasty ": "卑鄙", //地图名称
    "Dirty ": "肮脏", //地图名称
    "Red ": "红色", //地图名称
    "Black ": "黑色", //地图名称
    "Singing ": "歌之", //地图名称
    "Fiery ": "燃烧", //地图名称
    "Rocky ": "岩之", //地图名称
    "Haunted ": "闹鬼", //地图名称
    "Forgotten ": "遗忘", //地图名称
    "Miserable ": "不幸", //地图名称
    "Cursed ": "诅咒", //地图名称
    "Tainted ": "污染", //地图名称
    "Blessed ": "祝福", //地图名称
    "Sacred ": "神圣", //地图名称
    "Abandoned ": "遗弃", //地图名称
    "Natural ": "自然", //地图名称
    "Enchanted ": "魔能", //地图名称
    "Magical ": "魔力", //地图名称
    "Calm ": "静谧", //地图名称
    "Rugged ": "崎岖", //地图名称
    "Violent ": "暴虐", //地图名称
    "Weird ": "古怪", //地图名称
    "Secret ": "神秘", //地图名称
    "Forbidden ": "禁忌", //地图名称
    "Bewitched ": "蛊惑", //地图名称
    "Dark ": "黑暗", //地图名称
    "Light ": "光明", //地图名称
    "Magnificent ": "华丽", //地图名称
    "Evil ": "邪恶", //地图名称
    "Holy ": "圣洁", //地图名称
    "Hallowed ": "崇高", //地图名称
    "Desecrated ": "亵渎", //地图名称
    "Silent ": "无声", //地图名称
    "Eternal ": "永恒", //地图名称
    "Underground ": "地下", //地图名称
    "Temperate ": "温和", //地图名称
    "Chilly ": "冰冷", //地图名称
    "Muddy ": "泥之", //地图名称
    "Dank ": "潮湿", //地图名称
    "Steamy ": "雾气", //地图名称
    "Humid ": "湿润", //地图名称
    "Dry ": "干燥", //地图名称
    "Putrid ": "难闻", //地图名称
    "Foul ": "污秽", //地图名称
    "Dangerous ": "危险", //地图名称
    "Marred ": "破损", //地图名称
    "Blighted ": "损毁", //地图名称
    "Crystal ": "晶体", //地图名称
    "Frozen ": "冻结", //地图名称
    "Simple ": "纯粹", //地图名称
    "Timeless ": "永存", //地图名称
    "Deadly ": "致命", //地图名称
    "Poisonous ": "毒性", //地图名称
    "Heinous ": "极恶", //地图名称
    "Destructive ": "破灭", //地图名称
    "Creek,": "海湾，", //地图名称
    "Coast,": "海岸，", //地图名称
    "Swamp,": "沼泽，", //地图名称
    "Forest,": "森林，", //地图名称
    "Mountain,": "山脉，", //地图名称
    "Beach,": "海滩，", //地图名称
    "Hill,": "山丘，", //地图名称
    "Butte,": "孤峰，", //地图名称
    "Ridge,": "山脊，", //地图名称
    "Mesa,": "方山，", //地图名称
    "Valley,": "山谷，", //地图名称
    "Peak,": "顶峰，", //地图名称
    "Canyon,": "峡谷，", //地图名称
    "Plateau,": "高原，", //地图名称
    "Crag,": "峭壁，", //地图名称
    "Crater,": "陨坑，", //地图名称
    "Oaks,": "橡林，", //地图名称
    "Volcano,": "火山，", //地图名称
    "Glacier,": "冰川，", //地图名称
    "Brook,": "小溪，", //地图名称
    "Cave,": "洞穴，", //地图名称
    "Sea,": "大海，", //地图名称
    "Ocean,": "大洋，", //地图名称
    "Lake,": "湖泊，", //地图名称
    "Jungle,": "丛林，", //地图名称
    "Island,": "岛屿，", //地图名称
    "Ruins,": "遗迹，", //地图名称
    "Temple,": "神殿，", //地图名称
    "Bog,": "泥沼，", //地图名称
    "Grove,": "果林，", //地图名称
    "Thicket,": "树丛，", //地图名称
    "Woods,": "树林，", //地图名称
    "Oasis,": "绿地，", //地图名称
    "Mineshaft,": "深井，", //地图名称
    "Tunnel,": "隧道，", //地图名称
    "Depths,": "深渊，", //地图名称
    "Cavern,": "山洞，", //地图名称
    "Gardens,": "花园，", //地图名称
    "Nightmare,": "梦魇，", //地图名称
    "Void,": "虚空，", //地图名称
    "Descent,": "落穴，", //地图名称
    "Pit,": "深坑，", //地图名称
    "The Black Bog,": "黑色泥沼，", //地图名称
    "The Block,": "障碍区，", //地图名称
    "The Wall,": "高墙，", //地图名称
    "The Prison,": "监狱，", //地图名称
    "Imploding Star,": "爆炸之星，", //地图名称
    "Prismatic Palace,": "棱镜宫殿，", //地图名称
    "Melting Point,": "熔点，", //地图名称
    "Trimple Of Doom,": "末日神殿，", //地图名称
    "Tricky Paradise,": "整蛊天堂，", //地图名称
    "Dimension of Anger,": "愤怒维度，", //地图名称
    "Dimension of Rage,": "暴怒维度，", //地图名称
    "C3s": "挑战3", //脚本3挑战设置
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    " ": "",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
    "/sec": "/秒", //主界面
    "/hr": "/时", //主界面
    "Creek": "海湾", //地图名称
    "Coast": "海岸", //地图名称
    "Swamp": "沼泽", //地图名称
    "Forest": "森林", //地图名称
    "Mountain": "山脉", //地图名称
    "Beach": "海滩", //地图名称
    "Hill": "山丘", //地图名称
    "Butte": "孤峰", //地图名称
    "Ridge": "山脊", //地图名称
    "Mesa": "方山", //地图名称
    "Valley": "山谷", //地图名称
    "Peak": "顶峰", //地图名称
    "Canyon": "峡谷", //地图名称
    "Plateau": "高原", //地图名称
    "Crag": "峭壁", //地图名称
    "Crater": "陨坑", //地图名称
    "Oaks": "橡林", //地图名称
    "Volcano": "火山", //地图名称
    "Glacier": "冰川", //地图名称
    "Brook": "小溪", //地图名称
    "Cave": "洞穴", //地图名称
    "Sea": "大海", //地图名称
    "Ocean": "大洋", //地图名称
    "Lake": "湖泊", //地图名称
    "Jungle": "丛林", //地图名称
    "Island": "岛屿", //地图名称
    "Ruins": "遗迹", //地图名称
    "Temple": "神殿", //地图名称
    "Bog": "泥沼", //地图名称
    "Grove": "果林", //地图名称
    "Thicket": "树丛", //地图名称
    "Woods": "树林", //地图名称
    "Oasis": "绿地", //地图名称
    "Mineshaft": "深井", //地图名称
    "Tunnel": "隧道", //地图名称
    "Depths": "深渊", //地图名称
    "Cavern": "山洞", //地图名称
    "Gardens": "花园", //地图名称
    "Nightmare": "梦魇", //地图名称
    "Void": "虚空", //地图名称
    "Descent": "落穴", //地图名称
    "Pit": "深坑", //地图名称
    ": Whispering ": "：私语", //地图名称
    ": Sandy ": "：沙之", //地图名称
    ": Little ": "：小", //地图名称
    ": Big ": "：巨", //地图名称
    ": Rancid ": "：腐臭", //地图名称
    ": Tired ": "：疲劳", //地图名称
    ": Laughing ": "：欢笑", //地图名称
    ": Weeping ": "：哭泣", //地图名称
    ": Windy ": "：风之", //地图名称
    ": Terrible ": "：可怖", //地图名称
    ": Nasty ": "：卑鄙", //地图名称
    ": Dirty ": "：肮脏", //地图名称
    ": Red ": "：红色", //地图名称
    ": Black ": "：黑色", //地图名称
    ": Singing ": "：歌之", //地图名称
    ": Fiery ": "：燃烧", //地图名称
    ": Rocky ": "：岩之", //地图名称
    ": Haunted ": "：闹鬼", //地图名称
    ": Forgotten ": "：遗忘", //地图名称
    ": Miserable ": "：不幸", //地图名称
    ": Cursed ": "：诅咒", //地图名称
    ": Tainted ": "：污染", //地图名称
    ": Blessed ": "：祝福", //地图名称
    ": Sacred ": "：神圣", //地图名称
    ": Abandoned ": "：遗弃", //地图名称
    ": Natural ": "：自然", //地图名称
    ": Enchanted ": "：魔能", //地图名称
    ": Magical ": "：魔力", //地图名称
    ": Calm ": "：静谧", //地图名称
    ": Rugged ": "：崎岖", //地图名称
    ": Violent ": "：暴虐", //地图名称
    ": Weird ": "：古怪", //地图名称
    ": Secret ": "：神秘", //地图名称
    ": Forbidden ": "：禁忌", //地图名称
    ": Bewitched ": "：蛊惑", //地图名称
    ": Dark ": "：黑暗", //地图名称
    ": Light ": "：光明", //地图名称
    ": Magnificent ": "：华丽", //地图名称
    ": Evil ": "：邪恶", //地图名称
    ": Holy ": "：圣洁", //地图名称
    ": Hallowed ": "：崇高", //地图名称
    ": Desecrated ": "：亵渎", //地图名称
    ": Silent ": "：无声", //地图名称
    ": Eternal ": "：永恒", //地图名称
    ": Underground ": "：地下", //地图名称
    ": Temperate ": "：温和", //地图名称
    ": Chilly ": "：冰冷", //地图名称
    ": Muddy ": "：泥之", //地图名称
    ": Dank ": "：潮湿", //地图名称
    ": Steamy ": "：雾气", //地图名称
    ": Humid ": "：湿润", //地图名称
    ": Dry ": "：干燥", //地图名称
    ": Putrid ": "：难闻", //地图名称
    ": Foul ": "：污秽", //地图名称
    ": Dangerous ": "：危险", //地图名称
    ": Marred ": "：破损", //地图名称
    ": Blighted ": "：损毁", //地图名称
    ": Crystal ": "：晶体", //地图名称
    ": Frozen ": "：冻结", //地图名称
    ": Simple ": "：纯粹", //地图名称
    ": Timeless ": "：永存", //地图名称
    ": Timeless ": "：永存", //地图名称
    ": Deadly ": "：致命", //地图名称
    ": Poisonous ": "：毒性", //地图名称
    ": Heinous ": "：极恶", //地图名称
    ": Destructive ": "：破灭", //地图名称
    "Bone": "骨头", //骨头
    "Bones": "骨头", //骨头
    "Liquimp!": "液化者！", //击杀消息末尾
    "Liquimp group!": "液化者集团！", //击杀消息末尾
    "Presimpt!": "脆皮小礼！", //击杀消息末尾
    "Presimpt group!": "脆皮小礼集团！", //击杀消息末尾
    "Turkimp!": "脆皮火鸡！", //击杀消息末尾
    "Turkimp group!": "脆皮火鸡集团！", //击杀消息末尾
    "Randimp!": "脆皮百变怪！", //击杀消息末尾
    "Randimp group!": "脆皮百变怪集团！", //击杀消息末尾
    "Squimp!": "脆皮乌贼！", //击杀消息末尾
    "Squimp group!": "脆皮乌贼集团！", //击杀消息末尾
    "Elephimp!": "脆皮象！", //击杀消息末尾
    "Elephimp group!": "脆皮象集团！", //击杀消息末尾
    "Turtlimp!": "脆皮龟！", //击杀消息末尾
    "Turtlimp group!": "脆皮龟集团！", //击杀消息末尾
    "Chimp!": "脆皮黑猩猩！", //击杀消息末尾
    "Chimp group!": "脆皮黑猩猩集团！", //击杀消息末尾
    "Penguimp!": "脆皮企鹅！", //击杀消息末尾
    "Penguimp group!": "脆皮企鹅集团！", //击杀消息末尾
    "Snimp!": "脆皮鹬！", //击杀消息末尾
    "Snimp group!": "脆皮鹬集团！", //击杀消息末尾
    "Gorillimp!": "脆皮大猩猩！", //击杀消息末尾
    "Gorillimp group!": "脆皮大猩猩集团！", //击杀消息末尾
    "Blimp!": "脆皮飞艇！", //击杀消息末尾
    "Blimp group!": "脆皮飞艇集团！", //击杀消息末尾
    "Dragimp!": "脆皮龙！", //击杀消息末尾
    "Dragimp group!": "脆皮龙集团！", //击杀消息末尾
    "Improbability!": "乌有者！", //击杀消息末尾
    "Improbability group!": "乌有者集团！", //击杀消息末尾
    "Omnipotrimp!": "全能者！", //击杀消息末尾
    "Omnipotrimp group!": "全能者集团！", //击杀消息末尾
    "Mutimp!": "脆皮变异者！", //击杀消息末尾
    "Mutimp group!": "脆皮变异者集团！", //击杀消息末尾
    "Hulking Mutimp!": "脆皮大型变异者！", //击杀消息末尾
    "Hulking Mutimp group!": "脆皮大型变异者集团！", //击杀消息末尾
    "Feyimp!": "脆皮小妖！", //击杀消息末尾
    "Feyimp group!": "脆皮小妖集团！", //击杀消息末尾
    "Tauntimp!": "脆皮咚咚！", //击杀消息末尾
    "Tauntimp group!": "脆皮咚咚集团！", //击杀消息末尾
    "Whipimp!": "脆皮鞭者！", //击杀消息末尾
    "Whipimp group!": "脆皮鞭者集团！", //击杀消息末尾
    "Venimp!": "脆皮爱神！", //击杀消息末尾
    "Venimp group!": "脆皮爱神集团！", //击杀消息末尾
    "Magnimp!": "脆皮磁王！", //击杀消息末尾
    "Magnimp group!": "脆皮磁王集团！", //击杀消息末尾
    "Skeletimp!": "脆皮骷髅！", //击杀消息末尾
    "Skeletimp group!": "脆皮骷髅集团！", //击杀消息末尾
    "Megaskeletimp!": "脆皮超级骷髅！", //击杀消息末尾
    "Megaskeletimp group!": "脆皮超级骷髅集团！", //击杀消息末尾
    "Pumpkimp!": "脆皮南瓜怪！", //击杀消息末尾
    "Pumpkimp group!": "脆皮南瓜怪集团！", //击杀消息末尾
    "Shrimp!": "脆皮虾！", //击杀消息末尾
    "Shrimp group!": "脆皮虾集团！", //击杀消息末尾
    "Mountimp!": "脆皮山怪！", //击杀消息末尾
    "Mountimp group!": "脆皮山怪集团！", //击杀消息末尾
    "Frimp!": "脆皮森精！", //击杀消息末尾
    "Frimp group!": "脆皮森精集团！", //击杀消息末尾
    "Chickimp!": "脆皮小鸡！", //击杀消息末尾
    "Chickimp group!": "脆皮小鸡集团！", //击杀消息末尾
    "Hippopotamimp!": "脆皮河马！", //击杀消息末尾
    "Hippopotamimp group!": "脆皮河马集团！", //击杀消息末尾
    "Onoudidimp!": "脆皮蜗牛！", //击杀消息末尾
    "Onoudidimp group!": "脆皮蜗牛集团！", //击杀消息末尾
    "Kittimp!": "脆皮小猫！", //击杀消息末尾
    "Kittimp group!": "脆皮小猫集团！", //击杀消息末尾
    "Grimp!": "脆皮护林者！", //击杀消息末尾
    "Grimp group!": "脆皮护林者集团！", //击杀消息末尾
    "Golimp!": "脆皮魔像！", //击杀消息末尾
    "Golimp group!": "脆皮魔像集团！", //击杀消息末尾
    "Seirimp!": "脆皮矿精！", //击杀消息末尾
    "Seirimp group!": "脆皮矿精集团！", //击杀消息末尾
    "Slagimp!": "脆皮炉渣怪！", //击杀消息末尾
    "Slagimp group!": "脆皮炉渣怪集团！", //击杀消息末尾
    "Moltimp!": "脆皮熔金怪！", //击杀消息末尾
    "Moltimp group!": "脆皮熔金怪集团！", //击杀消息末尾
    "Lavimp!": "脆皮火岩怪！", //击杀消息末尾
    "Lavimp group!": "脆皮火岩怪集团！", //击杀消息末尾
    "Flowimp!": "脆皮花妖！", //击杀消息末尾
    "Flowimp group!": "脆皮花妖集团！", //击杀消息末尾
    "Kangarimp!": "脆皮袋鼠！", //击杀消息末尾
    "Kangarimp group!": "脆皮袋鼠集团！", //击杀消息末尾
    "Gnomimp!": "脆皮侏儒！", //击杀消息末尾
    "Gnomimp group!": "脆皮侏儒集团！", //击杀消息末尾
    "Slosnimp!": "脆皮慢鹬！", //击杀消息末尾
    "Slosnimp group!": "脆皮慢鹬集团！", //击杀消息末尾
    "Entimp!": "脆皮树人！", //击杀消息末尾
    "Entimp group!": "脆皮树人集团！", //击杀消息末尾
    "Squirrimp!": "脆皮松鼠！", //击杀消息末尾
    "Squirrimp group!": "脆皮松鼠集团！", //击杀消息末尾
    "Gravelimp!": "脆皮碎石怪！", //击杀消息末尾
    "Gravelimp group!": "脆皮碎石怪集团！", //击杀消息末尾
    "Cthulimp!": "脆皮克苏鲁！", //击杀消息末尾
    "Cthulimp group!": "脆皮克苏鲁集团！", //击杀消息末尾
    "Shadimp!": "脆皮暗影怪！", //击杀消息末尾
    "Shadimp group!": "脆皮暗影怪集团！", //击杀消息末尾
    "Voidsnimp!": "脆皮虚空鹬！", //击杀消息末尾
    "Voidsnimp group!": "脆皮虚空鹬集团！", //击杀消息末尾
    "Goblimp!": "脆皮地精！", //击杀消息末尾
    "Goblimp group!": "脆皮地精集团！", //击杀消息末尾
    "Flutimp!": "脆皮飘兽！", //击杀消息末尾
    "Flutimp group!": "脆皮飘兽集团！", //击杀消息末尾
    "Jestimp!": "脆皮弄臣！", //击杀消息末尾
    "Jestimp group!": "脆皮弄臣集团！", //击杀消息末尾
    "Titimp!": "脆皮泰坦！", //击杀消息末尾
    "Titimp group!": "脆皮泰坦集团！", //击杀消息末尾
    "Chronoimp!": "脆皮时者！", //击杀消息末尾
    "Chronoimp group!": "脆皮时者集团！", //击杀消息末尾
    "Megablimp!": "脆皮超级飞艇！", //击杀消息末尾
    "Megablimp group!": "脆皮超级飞艇集团！", //击杀消息末尾
    "Mitschimp!": "脆皮巨猩猩！", //击杀消息末尾
    "Mitschimp group!": "脆皮巨猩猩集团！", //击杀消息末尾
    "Brickimp!": "脆皮砖汉！", //击杀消息末尾
    "Brickimp group!": "脆皮砖汉集团！", //击杀消息末尾
    "Indianimp!": "脆皮印第安人！", //击杀消息末尾
    "Indianimp group!": "脆皮印第安人集团！", //击杀消息末尾
    "Warden!": "典狱长！", //击杀消息末尾
    "Warden group!": "典狱长集团！", //击杀消息末尾
    "Robotrimp!": "脆皮机器人！", //击杀消息末尾
    "Robotrimp group!": "脆皮机器人集团！", //击杀消息末尾
    "Mechimp!": "脆皮机甲！", //击杀消息末尾
    "Mechimp group!": "脆皮机甲集团！", //击杀消息末尾
    "Destructimp!": "脆皮破灭者！", //击杀消息末尾
    "Destructimp group!": "脆皮破灭者集团！", //击杀消息末尾
    "Terminatimp!": "脆皮终结者！", //击杀消息末尾
    "Terminatimp group!": "脆皮终结者集团！", //击杀消息末尾
    "Autoimp!": "脆皮汽车！", //击杀消息末尾
    "Autoimp group!": "脆皮汽车集团！", //击杀消息末尾
    "Artimp!": "脆皮机器艺术家！", //击杀消息末尾
    "Artimp group!": "脆皮机器艺术家集团！", //击杀消息末尾
    "Neutrimp!": "脆皮中子怪！", //击杀消息末尾
    "Neutrimp group!": "脆皮中子怪集团！", //击杀消息末尾
    "Fusimp!": "脆皮聚变怪！", //击杀消息末尾
    "Fusimp group!": "脆皮聚变怪集团！", //击杀消息末尾
    "Hydrogimp!": "脆皮氢怪！", //击杀消息末尾
    "Hydrogimp group!": "脆皮氢怪集团！", //击杀消息末尾
    "Carbimp!": "脆皮碳怪！", //击杀消息末尾
    "Carbimp group!": "脆皮碳怪集团！", //击杀消息末尾
    "Prismimp!": "脆皮棱镜怪！", //击杀消息末尾
    "Prismimp group!": "脆皮棱镜怪集团！", //击杀消息末尾
    "Rainbimp!": "脆皮彩虹兽！", //击杀消息末尾
    "Rainbimp group!": "脆皮彩虹兽集团！", //击杀消息末尾
    "Lightimp!": "脆皮光怪！", //击杀消息末尾
    "Lightimp group!": "脆皮光怪集团！", //击杀消息末尾
    "Meltimp!": "脆皮熔怪！", //击杀消息末尾
    "Meltimp group!": "脆皮熔怪集团！", //击杀消息末尾
    "Sweltimp!": "脆皮酷热者！", //击杀消息末尾
    "Sweltimp group!": "脆皮酷热者集团！", //击杀消息末尾
    "Darknimp!": "脆皮暗罪者！", //击杀消息末尾
    "Darknimp group!": "脆皮暗罪者集团！", //击杀消息末尾
    "C2s": "挑战2", //脚本3
    " autoStance2": "", //脚本3阵型设置
    ":  Value Input": "：输入值", //脚本3各设置界面
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^x?\d+(\.\d+)?(e[+\-]?\d+)?\s*\-?$/, //12.34e+4
    /^\s*$/, //纯空格
    /^\s*[A-Za-z]\s*$/, //带单字母的纯空格
    /^[e\s\d\(]+$/,
    /^\d+(\.\d+)?(e[+\-]?\d+)?\s*工作空间$/,
    /^\d+(\.\d+)?(e[+\-]?\d+)?\s*\/秒$/,
    /^\d+\s*工头$/,
    /^\d+\s*级地图$/,
    /^\d+\s*岩浆岩$/,
    /^\d+\s*Mi$/,
    /^(\d+\s*分\s*)?\d+\s*秒$/,
    /^(\d+\s*时\s*)?\d+\s*分$/,
    /^(\d+\s*天\s*)?\d+\s*时$/,
];

var cnExcludePostfix = [
    /:?\s*x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /:?\s*x?\d+(\.\d+)?[A-Za-z]{0,2}$/, //: 12.34K, x1.5
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
var cnRegReplace = new Map([
    [/^(.*)A green shimmer erupts then disappears, and you hit the ground. You look pretty hungry...$/, '$1一团绿光闪过，您落到了地面上。您看起来饿极了……'], //源始消息
    [/^employed(\s+)$/, '已雇佣$1'], //主界面
    [/^Check\sTraps(.+)$/, '检查陷阱$1'], //主界面
    [/^(.+) Foremen$/, '$1 工头'], //主界面
    [/^Essence(\s+)$/, '精华$1'], //主界面
    [/^Respec \((\d*) Free!$/, '洗点($1次免费！'], //主界面
    [/^([\d\s]+)Tokens$/, '$1符记'], //主界面
    [/^(\s+)Poison(\s+)$/, '$1毒$2'], //主界面
    [/^(\s+)Wind(\s+)$/, '$1风$2'], //主界面
    [/^(\s+)Ice(\s+)$/, '$1冰$2'], //主界面
    [/^Trade(.*)$/, '交易$1'], //主界面
    [/^(\s+)Fight(\s+)$/, '$1战斗$2'], //主界面
    [/^(\s+)AutoFight Off(\s+)$/, '$1关闭自动战斗$2'], //主界面
    [/^(\s+)Void Maps(\s+)$/, '$1虚空地图$2'], //主界面
    [/^(\s+)Portal(\s+)$/, '$1传送门$2'], //主界面
    [/^(\s+)Repeat Off(\s+)$/, '$1关闭重复$2'], //主界面
    [/^(\s+)Finish Daily(\s+)$/, '$1完成日常$2'], //主界面
    [/^(\s+)Exit Spire(\s+)$/, '$1退出尖塔$2'], //主界面
    [/^(\s+)Level$/, '$1地图等级'], //主界面
    [/^(\s+)Create(\s+)$/, '$1制造$2'], //主界面
    [/^(\s+)Loot(\s+)$/, '$1劫掠$2'], //主界面
    [/^(\s+)Size(\s+)$/, '$1尺寸$2'], //主界面
    [/^(\s+)Difficulty(\s+)$/, '$1难度$2'], //主界面
    [/^(\s+)Biome(\s+)$/, '$1生物群落$2'], //主界面
    [/^(\s+)Special Modifier(\s+)$/, '$1特殊修饰符$2'], //主界面
    [/^(\s+)Unlock at Z$/, '$1解锁于区域'], //主界面
    [/^(\s+)Perfect Sliders(\s+)$/, '$1完美滑块$2'], //主界面
    [/^(\s+)Extra Zones(\s+)$/, '$1额外区域$2'], //主界面
    [/^(\s+)Run Map(\s+)$/, '$1运行地图$2'], //主界面
    [/^(\s+)Recycle Map(\s+)$/, '$1回收地图$2'], //主界面
    [/^(\s+)You can earn achievements by doing stuff. Each achievement will boost the amount of damage your Trimps can deal, and later achievements grant a larger bonus. You can learn more about an achievement by hovering your mouse over it.$/, '$1满足特定的条件可以获得成就。每个成就都可以增加您的脆皮造成的伤害，越往后的成就加成越高。您可以将鼠标停留在某个成就上来了解它的详细信息。'], //主界面
    [/^\| What's New(\s+)$/, '|更新内容$1'], //主界面
    [/^(\s+)Save$/, '$1保存'], //主界面
    [/^Each Trap allows you to catch (.*) thing(s*).$/, '每个陷阱可以让您抓住$1个东西。'], //建筑
    [/^Has room for (.*) more lovely Trimp(s*). All Trimp housing has enough workspaces for only half of the Trimps that can live there.$/, '可以容纳$1个可爱的脆皮。所有的小屋都有着充足的办公区域，因为只有一半的脆皮可以住在那里。'], //建筑
    [/^A better house for your Trimps! Each house supports up to (.*) more Trimp(s*).$/, '脆皮们有更好的宅院可以住了！每个宅院可以容纳$1个脆皮。'], //建筑
    [/^A pretty sick mansion for your Trimps to live in. Each Mansion supports (.*) more Trimp(s*).$/, '脆皮们有棒极了的豪宅可以住了！每个豪宅可以容纳$1个脆皮。'], //建筑
    [/^A fancy hotel for many Trimps to live in. Complete with room service and a mini bar. Supports (.*) Trimp(s*).$/, '一个可以容纳大量脆皮的奢华宾馆。提供客房服务，并有一个小酒吧。每个宾馆可以容纳$1个脆皮。'], //建筑
    [/^A huge resort for your Trimps to live in. Sucks for the ones still stuck in huts. Supports (.*) Trimp(s*).$/, '一个巨大的度假村，可供脆皮居住。还住在小屋里的脆皮简直弱爆了。每个度假村可以容纳$1个脆皮。'], //建筑
    [/^A Gateway to another dimension, where your Trimps can sleep and work. Supports (.*) Trimp(s*).$/, '一个通往其他维度的裂隙，脆皮们可以在那边正常睡觉和工作。每个维度裂隙可以容纳$1个脆皮。'], //建筑
    [/^Use your crazy, helium-cooled, easy-to-aim wormhole generator to create easy-to-travel links to other colonizable planets where your Trimps can sleep and work. Each supports (.*) Trimps.$/, '使用疯狂氦冷易瞄的虫洞发生器，建立易于通行的链接，通向其他的宜居星球，脆皮们可以在那边正常睡觉和工作。每个虫洞可以容纳$1个脆皮。'], //建筑
    [/^Each collector allows you to harvest more of the power of your home star, allowing your Trimps to colonize a larger chunk of your solar system. Each supports (.*) Trimp(s*).$/, '每个汲能设施都可以让您从母星汲取更多的能量，支持脆皮们在太阳系中占领更多的地盘。每个汲能设施可以容纳$1个脆皮。'], //建筑
    [/^Create a gigantic Warpstation, capable of housing tons of Trimps and instantly transporting them back to the home planet when needed. Supports (.*) Trimps.$/, '建造一个巨型的跃迁核心，可以容纳超大量的脆皮，并且在有需要的时候可以将它们传送回母星。每个跃迁核心可以容纳$1个脆皮。'], //建筑
    [/^A building where your Trimps can work out. Each Gym increases the amount of damage each trimp can block by (.*).$/, '脆皮们解决问题的一个地方。每个健身房增加每个脆皮可以格挡的伤害量，数值为$1。'], //建筑
    [/^You have purchased (.*) total Nurseries.$/, '您总共建造了$1个托儿所。'], //建筑
    [/^Train one of your Trimps in the ancient art of farming. Each Farmer harvests (.*) food per second.$/, '使用古老的耕作艺术训练一个脆皮。每个农民每秒收获$1食物。'], //工作
    [/^Show a Trimp how to cut one of those weird trees down. Each Lumberjack hauls back (.*) logs per second.$/, '向一个脆皮展示如何砍伐那些怪树。每个伐木工每秒拉回$1木头。'], //工作
    [/^Send your misbehaving Trimps to the mines for some therapeutic work. Each Miner can find and smelt (.*) bars of metal per second.$/, '把品行不端的脆皮丢到矿井里干点“放松”的活。每个矿工每秒收获$1金属。'], //工作
    [/^It takes some patience, but you can teach these Trimps to do some research for you. Each Scientist records (.*) units of pure science each second.$/, '虽然可能费点事，但您可以让脆皮们替您做些研究。每个科学家每秒收获$1科学点。'], //工作
    [/^Each trainer will increase the base amount your soldiers can block by (.*)%.$/, '每个训练师可以使士兵的基础格挡数值增加$1%。'], //工作
    [/^Each trainer will increase the base amount your soldiers can block by (.*)%. \((.*)% increased by (.*)% thanks to (.*)$/, '每个训练师可以使士兵的基础格挡数值增加$1%。(基础数值为$2%，由于您拥有$4，效果增加了$3%'], //工作
    [/^Each explorer will find an average of (.*) fragments each second.$/, '每个探险家每秒发现$1碎片。'], //工作
    [/^Owning (.*) Geneticist(s*) multiplies your breed speed by (.*), and adds (.*) Health.$/, '您目前有$1个遗传学家，繁殖速度减少$3，生命值增加$4。'], //工作
    [/^For each 10 minutes you spend in a Zone with Magmamancers up to (.*) minutes, your Magmamancer bonus will increase by 20% \(compounding\). Your current bonus is$/, '每在有岩浆巫师的区域停留10分钟(最多$1分钟)，岩浆巫师的加成就提升20%(效果叠乘)。您目前的加成为 '], //工作
    [/^and counting your Magmamancermancy  Masteries you've been on this Zone for over (.*) minutes \(Max\).$/, '算上岩浆巫术的几个专精效果，您已经在此区域停留了超过$1分钟(效果达到最大)'], //工作
    [/^and counting your Magmamancermancy  Masteries you've been on this Zone for (.*) minute(s*). In (.*) minute(s*), this bonus will increase to (.*)%.$/, '算上岩浆巫术的几个专精效果，您已经在此区域停留了$1分钟。再经过$3分钟，加成将提升为$5%。'], //工作
    [/^and counting your Magmamancermancy  Mastery you've been on this Zone for over (.*) minutes \(Max\).$/, '算上岩浆巫术专精效果，您已经在此区域停留了超过$1分钟(效果达到最大)'], //工作
    [/^and counting your Magmamancermancy  Mastery you've been on this Zone for (.*) minute(s*). In (.*) minute(s*), this bonus will increase to (.*)%.$/, '算上岩浆巫术专精效果，您已经在此区域停留了$1分钟。再经过$3分钟，加成将提升为$5%。'], //工作
    [/^and you've been on this Zone for over (.*) minutes \(Max\).$/, '您已经在此区域停留了超过$1分钟(效果达到最大)'], //工作
    [/^and you've been on this Zone for (.*) minute(s*). In (.*) minute(s*), this bonus will increase to (.*)%.$/, '您已经在此区域停留了$1分钟。再经过$3分钟，加成将提升为$5%。'], //工作
    [/^Your next Magmamancer will increase the total bonus by (.*)% \(compounding, hold Ctrl to see formula$/, '下一个岩浆巫师可以使总加成提升$1%(效果叠乘，按下Ctrl键可看到详细公式'], //工作
    [/^. Completing Spires II through V will each divide this ratio by 10. If your ratio ever falls below (.*):1, an Amalgamator will leave. Your current ratio is$/, ' 时，它们将自动出现。从尖塔 II开始到尖塔 V，自上次传送后每通过一个尖塔，此比值就除以10。如果比值低于$1:1，一名合并者将离开。您目前的比值为 '], //工作
    [/^You have (.*) Meteorologist(s*), but (.*) w(as|ere) hired on this Zone and (is|are) not yet available.$/, '您目前有$1个气象学家，但其中$3个是当前区域雇佣的，还没法开始工作。'], //工作
    [/^(.*) Meteorologist(s*) (is|are) currently collecting, granting (.*)% extra Radon.$/, '目前有$1个气象学家正在工作，氡的加成为$4%。'], //工作
    [/^(.*)That Chickimp dropped (.*) food!$/, '$1脆皮小鸡掉落了 $2 食物！'], //特定敌人
    [/^(.*)You hear nearby Kittimps running away in fear and decide to check out their former home. There, you find a prey pile with (.*) food!$/, '$1附近的脆皮小猫害怕地跑开了，您决定去它们的窝里看看。接着您在那发现了 $2 食物！'], //特定敌人
    [/^(.*)That Grimp dropped (.*) wood!$/, '$1脆皮护林者掉落了 $2 木头！'], //特定敌人
    [/^(.*)The Golimp fell to pieces! You manage to grab (.*) fragments before it begins pulling itself together.$/, '$1脆皮魔像被打碎了！在它重新凝聚成形之前，您拿走了 $2 碎片。'], //特定敌人
    [/^(.*)The Golimp fell to pieces! You manage to grab (.*) bars of metal before it begins pulling itself together.$/, '$1脆皮魔像被打碎了！在它重新凝聚成形之前，您拿走了 $2 金属。'], //特定敌人
    [/^(.*)That Seirimp dropped (.*) metal! Neat-O.$/, '$1脆皮矿精掉落了 $2 金属！真棒。'], //特定敌人
    [/^(.*)That Slagimp fell over, and (.*) gems popped out! How about that\?!$/, '$1脆皮炉渣怪倒下了， $2 宝石冒了出来！什么情况？！'], //特定敌人
    [/^(.*)The Moltimp thanked you for the combat, and handed you (.*) bars of metal! Then he died.$/, '$1脆皮熔金怪感谢您与它作战，并交给您 $2 金属！然后它就凉了。'], //特定敌人
    [/^(.*)The Entimp is no more. You manage to salvage (.*) logs of wood from his trunk!$/, '$1脆皮树人再也不会动了。您从它的树干上获取了 $2 木头！'], //特定敌人
    [/^(.*)Time for some stew! You scored (.*) food from that $/, '$1该炖点什么吃了！您获得了 $2 食物，因为您烹饪了那只'], //特定敌人
    [/^(.*)You sift through the Gravelimp, and manage to find (.*) bars of metal! Good on you!$/, '$1您筛了一下碎石怪留下的东西，找到了 $2 金属！真不错！'], //特定敌人
    [/^(.*)That Blimp dropped (.*) Food, Wood and Metal! That should be useful.$/, '$1脆皮飞艇掉落了 $2 食物，木头和金属！一定能用得上的。'], //特定敌人
    [/^(.*)You were able to extract (.*) Helium Canisters from that $/, '$1您提取了 $2 氦，取自'], //特定敌人
    [/^(.*)You were able to extract (.*) Radon Vials from that $/, '$1您提取了 $2 氡，取自'], //特定敌人
    [/^(.*)Cthulimp and the map it came from crumble into the darkness. You find yourself instantly teleported to the next Void map.$/, '$1脆皮克苏鲁及它藏身的地图遁入了黑暗。您被传送到了下一张虚空地图。'], //特定敌人
    [/^(.*)Cthulimp and the map it came from crumble into the darkness. You find yourself instantly teleported to the next Void map with an extra (.*) Helium!$/, '$1脆皮克苏鲁及它藏身的地图遁入了黑暗。您被传送到了下一张虚空地图，并额外获取了 $2 氦！'], //特定敌人
    [/^(.*)Cthulimp and the map it came from crumble into the darkness. You find yourself instantly teleported to the next Void map with an extra (.*) Radon!$/, '$1脆皮克苏鲁及它藏身的地图遁入了黑暗。您被传送到了下一张虚空地图，并额外获取了 $2 氡！'], //特定敌人
    [/^(.*)Cthulimp and the map it came from crumble into the darkness. You find yourself instantly teleported to the world .$/, '$1脆皮克苏鲁及它藏身的地图遁入了黑暗。您被传送回世界。'], //特定敌人
    [/^(.*)Cthulimp and the map it came from crumble into the darkness. You find yourself instantly teleported to the world  with an extra (.*) Helium!$/, '$1脆皮克苏鲁及它藏身的地图遁入了黑暗。您被传送回世界，并额外获取了 $2 氦！'], //特定敌人
    [/^(.*)Cthulimp and the map it came from crumble into the darkness. You find yourself instantly teleported to the world  with an extra (.*) Radon!$/, '$1脆皮克苏鲁及它藏身的地图遁入了黑暗。您被传送回世界，并额外获取了 $2 氡！'], //特定敌人
    [/^(.*)Cthulimp and the map it came from crumble into the darkness. You find yourself instantly teleported to your map chamber.$/, '$1脆皮克苏鲁及它藏身的地图遁入了黑暗。您被传送回地图界面。'], //特定敌人
    [/^(.*)Cthulimp and the map it came from crumble into the darkness. You find yourself instantly teleported to your map chamber with an extra (.*) Helium!$/, '$1脆皮克苏鲁及它藏身的地图遁入了黑暗。您被传送回地图界面，并额外获取了 $2 氦！'], //特定敌人
    [/^(.*)Cthulimp and the map it came from crumble into the darkness. You find yourself instantly teleported to your map chamber with an extra (.*) Radon!$/, '$1脆皮克苏鲁及它藏身的地图遁入了黑暗。您被传送回地图界面，并额外获取了 $2 氡！'], //特定敌人
    [/^(.*)Before you even realized you were in a new Void Map, Fluffy snuck to the end and quickly stole all the loot.$/, '$1在您刚发现进入了新的虚空地图时，绒绒已经悄悄地把所有东西都顺走了。'], //特定敌人
    [/^(.*)Before you even realized you were in a new Void Map, Fluffy snuck to the end and quickly stole all the loot. You gained another (.*) Helium!$/, '$1在您刚发现进入了新的虚空地图时，绒绒已经悄悄地把所有东西都顺走了。您额外获得了 $2 氦！'], //特定敌人
    [/^(.*)Before you even realize what's happening, Fluffy has entered and cleared the remaining (.*) Void Maps and quickly stole all the loot!$/, '$1在您还没搞清楚情况的时候，绒绒已经通过了剩下的 $2 张虚空地图，并迅速把所有东西都顺走了！'], //特定敌人
    [/^(.*)Before you even realize what's happening, Scruffy has entered and cleared the remaining (.*) Void Maps and quickly stole all the loot!$/, '$1在您还没搞清楚情况的时候，污污已经通过了剩下的 $2 张虚空地图，并迅速把所有东西都顺走了！'], //特定敌人
    [/^(.*)Before you even realize what's happening, Fluffy has entered and cleared the remaining (.*) Void Maps and quickly stole all the loot! After earning a bonus on each of +(.*)% Helium, you've earned an additional (.*) Helium!$/, '$1在您还没搞清楚情况的时候，绒绒已经通过了剩下的 $2 张虚空地图，并迅速把所有东西都顺走了！由于每张地图可以额外获得 $3% 氦，您最后额外获得了 $4 氦！'], //特定敌人
    [/^(.*)Before you even realize what's happening, Scruffy has entered and cleared the remaining (.*) Void Maps and quickly stole all the loot! After earning a bonus on each of +(.*)% Radon, you've earned an additional (.*) Radon!$/, '$1在您还没搞清楚情况的时候，污污已经通过了剩下的 $2 张虚空地图，并迅速把所有东西都顺走了！由于每张地图可以额外获得 $3% 氡，您最后额外获得了 $4 氡！'], //特定敌人
    [/^(.*)That Dragimp dropped (.*) gems!$/, '$1脆皮龙掉落了 $2 宝石！'], //特定敌人
    [/^(.*)Mitschimp dropped (.*) wood!$/, '$1脆皮巨猩猩掉落了 $2 木头！'], //特定敌人
    [/^(.*)That Prismimp dropped (.*) gems, how sweet of it!$/, '$1脆皮棱镜怪掉落了 $2 宝石，多可爱！'], //特定敌人
    [/^(.*)You feel bad about slaying an incredibly rare Rainbimp, but at least he dropped (.*) gems! Totally worth.$/, '$1杀掉稀有的脆皮彩虹兽让人感觉不太好，但它掉落了 $2 宝石！还是值得的。'], //特定敌人
    [/^(.*)The Lightimp's light floats up and away, unbothered by the fact that you just killed its body. Since it doesn't want the body anymore, you break it down in to (.*) gems!$/, '$1脆皮光怪的光亮向上飘走了，看起来一点也没有被失去身体的事实打扰到。既然它自己也不在乎，您索性将它的身体打碎，获得了 $2 宝石！'], //特定敌人
    [/^(.*)What a surprise, the Meltimp is melting! You find a healthy stack of (.*) metal where it used to be!$/, '$1真意外，脆皮熔怪熔化了！您在它熔化的地方发现了 $2 金属！'], //特定敌人
    [/^(.*)That Sweltimp chucked (.*) bars of metal right at your head! You'll take it though, thanks guy!$/, '$1脆皮酷热者把 $2 金属扔向了您的头！您将这些带走了，谢了伙计！'], //特定敌人
    [/^(.*)Indianimp dropped (.*) metal!$/, '$1脆皮印第安人掉落了 $2 金属！'], //特定敌人
    [/^(.*)Robotrimp discombobulated. Loot inspection reveals: (.*) wood and (.*) food. Splendiferous.$/, '$1脆皮机器人，思维，混乱。战利品，检查，发现： $2 木头， $3 食物。极好。'], //特定敌人
    [/^(.*)Mechimp disengaged. Reward encountered: (.*) bars of metal. Huzzah.$/, '$1脆皮机甲，脱离，战斗。奖励： $2 金属。撒花。'], //特定敌人
    [/^(.*)Destructimp shorted out. Salvage results: (.*) bars of metal. Acceptable.$/, '$1脆皮破灭者，已短路。修复，结果： $2 金属。差强，人意。'], //特定敌人
    [/^(.*)Terminatimp Terminated. Findings: (.*) bars of metal. Hasta la Vista.$/, '$1脆皮终结者，已终结。发现： $2 金属。后会，有期。'], //特定敌人
    [/^(.*)Autoimp force quit. Memory dump provides (.*) bars of metal and no clues. It's a feature!$/, '$1脆皮汽车，强制，关闭。内存，转存，获得， $2 金属。但没有，线索。这是，特性。'], //特定敌人
    [/^(.*)The Artimp wordlessly sputters, whirrs, beeps, then drops (.*) perfect cubes of metal on the ground. Cubist art is your favorite!$/, '$1脆皮机器艺术家发出了噼啪、嗡嗡、嘟嘟的声音，最后在地上留下了一个完美的立方，里面装着 $2 金属。立方主义是您的最爱！'], //特定敌人
    [/^(.*)The Neutrimp gasps, shimmers, squeaks, then poofs into a quickly dispersing purple cloud. You spend a few moments trying to make sense of what you've just seen, but look around and find (.*) wood and (.*) metal instead!$/, '$1脆皮中子怪气喘吁吁，微微闪光，嘎吱作响，然后噗的一声变成了一团迅速分散的紫色烟雾。您半天没搞明白到底发生了什么，最后您放弃了，而在旁边发现了 $2 木头和 $3 金属！'], //特定敌人
    [/^(.*)The Fusimp explodes, leaving behind (.*) bars of metal and a nice dose of radiation.$/, '$1脆皮聚变怪爆炸了，留下了 $2 金属，和大量辐射。'], //特定敌人
    [/^(.*)Before you can blink, the Hydrogimp vaporizes. That's fine though, it left (.*) food for you!$/, '$1脆皮氢怪在您眨眼前就漏光了气。好在它还为您留下了 $2 食物！'], //特定敌人
    [/^(.*)The Carbimp begins to crackle and shrink. Within a few seconds, all that's left is (.*) wood.$/, '$1脆皮碳怪噼啪作响，迅速缩小。不一会儿，只剩下了 $2 木头。'], //特定敌人
    [/^(.*)You managed to steal (.*) Helium Canisters from that Improbability. That'll teach it.$/, '$1您从乌有者身上顺走了 $2 氦。让它长长记性。'], //特定敌人
    [/^(.*)You managed to steal (.*) Radon Vials from that Improbability. That'll teach it.$/, '$1您从乌有者身上顺走了 $2 氡。让它长长记性。'], //特定敌人
    [/^(.*)You managed to steal (.*) Helium Canister from that Omnipotrimp. That'll teach it.$/, '$1您从全能者身上顺走了 $2 氦。让它长长记性。'], //特定敌人
    [/^(.*)You managed to steal (.*) Radon Vial from that Omnipotrimp. That'll teach it.$/, '$1您从全能者身上顺走了 $2 氡。让它长长记性。'], //特定敌人
    [/^(.*)The Omnipotrimp explodes, killing all of your soldiers!$/, '$1全能者爆炸了，杀死了所有士兵！'], //特定敌人
    [/^(.*)Radioactive waste spills to the ground as the Mutimp falls. You send a few Trimps to grab the shiny stuff in the toxic sludge, which ends up being (.*) bars of metal!$/, '$1脆皮变异者倒下后，体内的核废料溅得到处都是。您让一些脆皮去收集那堆有毒烂泥里面闪闪发光的东西，最后获得了 $2 金属！'], //特定敌人
    [/^(.*)Radioactive waste spills to the ground as the Hulking Mutimp falls. You send a few Trimps to grab the shiny stuff in the toxic sludge, which ends up being (.*) bars of metal!$/, '$1脆皮大型变异者倒下后，体内的核废料溅得到处都是。您让一些脆皮去收集那堆有毒烂泥里面闪闪发光的东西，最后获得了 $2 金属！'], //特定敌人
    [/^(.*)You have completed The Black Bog! 1 stack of Exhausted and Motivated have been removed from your Trimps.$/, '$1您通过了黑色泥沼！脆皮同时减少了1层疲惫不堪和1层积极前进。'], //特定敌人
    [/^(.*)That Randimp dropped (.*) gems! What a bro!$/, '$1脆皮百变怪掉落了 $2 宝石！真是好兄弟！'], //特定敌人
    [/^(.*)That Goblimp dropped (.*) gems! What a bro!$/, '$1脆皮地精掉落了 $2 宝石！真是好兄弟！'], //特定敌人
    [/^Drops (.*)x Gems$/, '掉落 $1 倍的宝石'], //特定敌人
    [/^(.*)That Randimp gave you (.*) gems! Thanks $/, '$1脆皮百变怪交给您 $2 宝石！谢了'], //特定敌人
    [/^(.*)That Feyimp gave you (.*) gems! Thanks $/, '$1脆皮小妖交给您 $2 宝石！谢了'], //特定敌人
    [/^(.*)You stole (.*) fragments from that Randimp! It really didn't look like she needed them though, don't feel bad.$/, '$1您从脆皮百变怪那顺走了 $2 碎片！反正她看起来也不需要，别有负罪感。'], //特定敌人
    [/^(.*)You stole (.*) fragments from that Flutimp! It really didn't look like she needed them though, don't feel bad.$/, '$1您从脆皮飘兽那顺走了 $2 碎片！反正她看起来也不需要，别有负罪感。'], //特定敌人
    [/^(.*)It's nice, warm, and roomy in that dead Randimp. You found (.*) Trimp inside, and it looks hella bored.$/, '$1死去的脆皮百变怪体内环境舒适，温暖，而且宽敞。您在里面发现了 $2 个脆皮，它看起来很无聊。'], //特定敌人
    [/^(.*)It's nice, warm, and roomy in that dead Randimp. You found (.*) Trimps inside, and they all seem content to stay living there!$/, '$1死去的脆皮百变怪体内环境舒适，温暖，而且宽敞。您在里面发现了 $2 个脆皮，它们看起来很乐意继续在里面生活下去！'], //特定敌人
    [/^(.*)It's nice, warm, and roomy in that dead Randimp.  There's enough room for (.*) Trimp to live inside, though it will be quite lonely.$/, '$1死去的脆皮百变怪体内环境舒适，温暖，而且宽敞。里面可以住下 $2 个脆皮，不过这样它会很孤单。'], //特定敌人
    [/^(.*)It's nice, warm, and roomy in that dead Randimp.  There's enough room for (.*) Trimps to live inside!$/, '$1死去的脆皮百变怪体内环境舒适，温暖，而且宽敞。里面可以住下 $2 个脆皮！'], //特定敌人
    [/^(.*)It's nice, warm, and roomy in that dead Tauntimp. You found (.*) Trimp inside, and it looks hella bored.$/, '$1死去的脆皮咚咚体内环境舒适，温暖，而且宽敞。您在里面发现了 $2 个脆皮，它看起来很无聊。'], //特定敌人
    [/^(.*)It's nice, warm, and roomy in that dead Tauntimp. You found (.*) Trimps inside, and they all seem content to stay living there!$/, '$1死去的脆皮咚咚体内环境舒适，温暖，而且宽敞。您在里面发现了 $2 个脆皮，它们看起来很乐意继续在里面生活下去！'], //特定敌人
    [/^(.*)It's nice, warm, and roomy in that dead Tauntimp.  There's enough room for (.*) Trimp to live inside, though it will be quite lonely.$/, '$1死去的脆皮咚咚体内环境舒适，温暖，而且宽敞。里面可以住下 $2 个脆皮，不过这样它会很孤单。'], //特定敌人
    [/^(.*)It's nice, warm, and roomy in that dead Tauntimp.  There's enough room for (.*) Trimps to live inside!$/, '$1死去的脆皮咚咚体内环境舒适，温暖，而且宽敞。里面可以住下 $2 个脆皮！'], //特定敌人
    [/^(.*)Seeing the Randimp(s*) fall is causing all of your Trimps to work (.*)% harder!$/, '$1看着脆皮百变怪挂掉，脆皮们工作努力程度增加了 $3% ！'], //特定敌人
    [/^(.*)Seeing the Whipimp(s*) fall is causing all of your Trimps to work (.*)% harder!$/, '$1看着脆皮鞭者挂掉，脆皮们工作努力程度增加了 $3% ！'], //特定敌人
    [/^(.*)The ground up Randimp now increases your Trimps' breed speed by (.*)%!$/, '$1脆皮百变怪倒下了，但它可以让脆皮繁殖速度增加 $2% ！'], //特定敌人
    [/^(.*)The ground up Venimp now increases your Trimps' breed speed by (.*)%!$/, '$1脆皮爱神倒下了，但它可以让脆皮繁殖速度增加 $2% ！'], //特定敌人
    [/^(.*)That Randimp gave you (.*) food!$/, '$1从脆皮百变怪那获得 $2 食物！'], //特定敌人
    [/^(.*)That Randimp gave you (.*) wood!$/, '$1从脆皮百变怪那获得 $2 木头！'], //特定敌人
    [/^(.*)That Randimp gave you (.*) metal!$/, '$1从脆皮百变怪那获得 $2 金属！'], //特定敌人
    [/^(.*)That Randimp gave you (.*) science!$/, '$1从脆皮百变怪那获得 $2 科学点！'], //特定敌人
    [/^(.*)That Randimp gave you (.*) gems!$/, '$1从脆皮百变怪那获得 $2 宝石！'], //特定敌人
    [/^(.*)That Jestimp gave you (.*) food!$/, '$1从脆皮弄臣那获得 $2 食物！'], //特定敌人
    [/^(.*)That Jestimp gave you (.*) wood!$/, '$1从脆皮弄臣那获得 $2 木头！'], //特定敌人
    [/^(.*)That Jestimp gave you (.*) metal!$/, '$1从脆皮弄臣那获得 $2 金属！'], //特定敌人
    [/^(.*)That Jestimp gave you (.*) science!$/, '$1从脆皮弄臣那获得 $2 科学点！'], //特定敌人
    [/^(.*)That Jestimp gave you (.*) gems!$/, '$1从脆皮弄臣那获得 $2 宝石！'], //特定敌人
    [/^(.*)That Randimp made your Trimps super strong!$/, '$1脆皮百变怪使脆皮们变得更强！'], //特定敌人
    [/^(.*)That Titimp made your Trimps super strong!$/, '$1脆皮泰坦使脆皮们变得更强！'], //特定敌人
    [/^(.*)That Titimp made your Trimps super strong!\(Titimp wishes to remind you that his name is pronounced "Tie Timp"$/, '$1脆皮泰坦使脆皮们变得更强！(脆皮泰坦提醒您，它的名字不是“太躺”，跟“躺赢”也没有关系'], //特定敌人
    [/^(.*)That Randimp dropped (.*) food, (.*) wood, (.*) metal, and (.*) science!$/, '$1脆皮百变怪掉落了 $2 食物， $3 木头， $4 金属，和 $5 科学点！'], //特定敌人
    [/^(.*)That Randimp dropped (.*) food, (.*) wood, (.*) metal, (.*) science, and (.*) gems!$/, '$1脆皮百变怪掉落了 $2 食物， $3 木头， $4 金属， $5 科学点，和 $6 宝石！'], //特定敌人
    [/^(.*)That Chronoimp dropped (.*) food, (.*) wood, (.*) metal, and (.*) science!$/, '$1脆皮时者掉落了 $2 食物， $3 木头， $4 金属，和 $5 科学点！'], //特定敌人
    [/^(.*)That Chronoimp dropped (.*) food, (.*) wood, (.*) metal, (.*) science, and (.*) gems!$/, '$1脆皮时者掉落了 $2 食物， $3 木头， $4 金属， $5 科学点，和 $6 宝石！'], //特定敌人
    [/^(.*)You killed a Randimp! The strong magnetic forces now increase your loot by (.*)%!$/, '$1您击杀了一个脆皮百变怪！它的强大磁力使您战利品数量增加 $2% ！'], //特定敌人
    [/^(.*)You killed a Magnimp! The strong magnetic forces now increase your loot by (.*)%!$/, '$1您击杀了一个脆皮磁王！它的强大磁力使您战利品数量增加 $2% ！'], //特定敌人
    [/^(.*)Your Trimps managed to pull 1 perfectly preserved bone from that $/, '$1脆皮们获得了1块保存完好的骨头，取自'], //特定敌人
    [/^(.*)That was a pretty big Skeletimp. Your Trimps scavenged the remains and found 2 perfectly preserved bones!$/, '$1这个脆皮骷髅相当巨大。脆皮们搜寻了残骸，找到了2块保存完好的骨头！'], //特定敌人
    [/^A big, wooden shield. Adds (.*) health to each soldier per level.$/, '一面大木盾，每级增加每名士兵 $1 生命值。'], //装备
    [/^A big, wooden shield. Adds (.*) block to each soldier per level.$/, '一面大木盾，每级增加每名士兵 $1 格挡。'], //装备
	[/^Better than nothing. Adds (.*) attack to each soldier per level$/, '聊胜于无。每级增加每名士兵 $1 攻击力'], //装备
    [/^At least their feet will be safe. Adds (.*) health to each soldier per level$/, '至少能保护到脚。每级增加每名士兵 $1 生命值'], //装备
    [/^It's kind of heavy for your Trimps, but they'll manage. Adds (.*) attack to each soldier per level$/, '对脆皮来说有点重，但它们能搞定。每级增加每名士兵 $1 攻击力'], //装备
    [/^Provides a decent amount of protection to the Trimps' heads, adding (.*) health to each soldier per level.$/, '为脆皮头部提供不错的防护，每级增加每名士兵 $1 生命值。'], //装备
    [/^This thing is big and pointy. It adds (.*) attack to each soldier per level$/, '这玩意又大又尖。每级增加每名士兵 $1 攻击力'], //装备
    [/^Pants designed specificially for the little Trimps! Adds (.*) health to each soldier per level.$/, '专为脆皮的小身板设计的裤子！每级增加每名士兵 $1 生命值。'], //装备
    [/^This weapon is pretty intimidating, but your Trimps think they can handle it. Adds (.*) attack to each soldier per level$/, '这武器相当吓人，但脆皮觉得它们能用得好。每级增加每名士兵 $1 攻击力'], //装备
    [/^These shoulderguards will help keep your Trimps' necks and shoulders safe, and they look cool too. Adds (.*) health to each soldier per level$/, '这些护肩可以保护脆皮的脖子和肩膀，而且看起来挺酷的。每级增加每名士兵 $1 生命值'], //装备
    [/^This sword looks sweet. Seriously, if you could see it you'd think it looked sweet. Trust me. Adds (.*) attack to each soldier per level$/, '这把剑看起来真可爱。真的，要是您看得到的话，您也会这么觉得。相信我。每级增加每名士兵 $1 攻击力'], //装备
    [/^Some real, heavy duty armor. Everyone looks badass in heavy duty armor. Adds (.*) health to each soldier per level$/, '真正的重型护甲。穿上这些的脆皮看起来吊爆了。每级增加每名士兵 $1 生命值'], //装备
    [/^A powerful ranged weapon. Your Trimps can do some damage with this sucker. Adds (.*) attack to each soldier per level$/, '强大的远程武器。这玩意用来搞事情会很称手。每级增加每名士兵 $1 攻击力'], //装备
    [/^A cozy and thick padded jacket that goes under the breastplate. Your Trimps think they're great! Adds (.*) health to each soldier per level.$/, '一件穿戴舒适，可以穿戴在胸甲内的厚棉衣。脆皮们爱死它了！每级增加每名士兵 $1 生命值。'], //装备
    [/^(.*)You found plans for a shield! It even tells you how to upgrade it, if you have enough wood. That was nice of that Bad Guy.$/, '$1您发现了盾牌的蓝图！它甚至还有升级的说明，只需要木头就可以完成。那敌人真好。'], //世界解锁等
    [/^(.*)You found plans for Boots! Swell!$/, '$1您发现了靴子的蓝图！太棒了！'], //世界解锁等
    [/^(.*)You found plans for a Dagger! Fancy!$/, '$1您发现了匕首的蓝图！真意外！'], //世界解锁等
    [/^(.*)You found plans for a mace!$/, '$1您发现了狼牙棒的蓝图！'], //世界解锁等
    [/^(.*)You found plans for a helmet!$/, '$1您发现了头盔的蓝图！'], //世界解锁等
    [/^(.*)You found plans for a Polearm!$/, '$1您发现了战戟的蓝图！'], //世界解锁等
    [/^(.*)You found plans for Pants!$/, '$1您发现了裤子的蓝图！'], //世界解锁等
    [/^(.*)You found plans for a Battleaxe!$/, '$1您发现了战斧的蓝图！'], //世界解锁等
    [/^(.*)You found plans for Shoulderguards!$/, '$1您发现了护肩的蓝图！'], //世界解锁等
    [/^(.*)You found plans for a Greatsword!$/, '$1您发现了巨剑的蓝图！'], //世界解锁等
    [/^(.*)You found plans for a Breastplate!$/, '$1您发现了胸铠的蓝图！'], //世界解锁等
    [/^(.*)You found an ancient book titled Bloodlust. You should look at it or something.$/, '$1您发现了一本古书，标题为《嗜血》。您应该看看它。'], //世界解锁等
    [/^(.*)Hey, this book might be for you!$/, '$1嗨！这本书可能会适合您！'], //世界解锁等
    [/^(.*)Hey look, plans for a new Gym!$/, '$1看哪，这是健身房的蓝图！'], //世界解锁等
    [/^(.*)You find a small handcut gem that seems to coat you in a bubble of light when you hold it! You should have your Scientists research some way to polish it.$/, '$1您发现了一块手工切割的小宝石，握着它的时候，您的周围笼罩着一层光！您应该让科学家研究一下怎么抛光它。'], //世界解锁等
    [/^(.*)This book is for your Trainers!$/, '$1这本书是给训练师们的！'], //世界解锁等
    [/^(.*)Your equipment isn't going to cut it in this Universe. Better get someone to ugprade it for you!$/, '$1在这个宇宙中您的装备不足以切开它。最好找人升级一下您的装备！'], //世界解锁等
    [/^(.*)Time to colonize the galaxy.$/, '$1我们的征途是星辰大海。'], //世界解锁等
    [/^(.*)Trimp cave paintings predicted the existence of a book such as this one, you had no idea it actually existed. It smells dusty.$/, '$1脆皮的洞穴壁画指出了有这么一本书存在，但您没想到它真的存在。它闻起来满是灰尘。'], //世界解锁等
    [/^(.*)You've found an ancient relic that looks like some sort of mechanical dish. Perhaps you could train your Trimps to use this to your advantage!$/, '$1您发现了一个机械圆盘形状的古代遗物。或许可以训练脆皮们将它利用起来！'], //世界解锁等
    [/^(.*)This book will help your Trimps make more Trimps!$/, '$1这本书可以帮助脆皮们造更多的脆皮！'], //世界解锁等
    [/^(.*)Your Scientists let you know that your Trimps won't understand the book, but they offer to hold on to it for you for later. How nice of them!$/, '$1科学家们表示脆皮们看不懂这本书的内容，但它们主动提出替您保管以备后用。它们真好！'], //世界解锁等
    [/^(.*)You found an ancient book about mining. With some research you should be able to teach the Trimps to mine!$/, '$1您发现了一本古书，内容是关于采矿的。稍微研究一下应该就可以教会脆皮们采矿了！'], //世界解锁等
    [/^(.*)Your Trimps simply do not understand what this book is talking about. It's blowing their minds. What is a 'Miner'\?!$/, '$1脆皮们完全不懂这本书在说什么。这本书弄得它们晕头转向。到底什么是“矿工”的？！'], //世界解锁等
    [/^(.*)You found a book about proper physical training!$/, '$1您发现了一本书，内容是关于适当的体育锻炼！'], //世界解锁等
    [/^(.*)You found a book about Einstrimp!$/, '$1您发现了一本书，内容是关于爱因X坦脆皮的！'], //世界解锁等
    [/^(.*)Your Trimps think they're too good at Science to read your dumb book. They're already working on Portal technology!$/, '$1脆皮们觉得它们都是民科大神，对您的书完全不屑一顾。它们早都开始研究传送门科技了！'], //世界解锁等
    [/^(.*)You found a book detailing the intricacies of solo exploration!$/, '$1您发现了一本书，详细说明了独自探险之类的复杂内容！'], //世界解锁等
    [/^(.*)You found a book called Speedscience! What do you think it could possibly do\?!$/, '$1您发现了一本书，叫做《研究加速》！您觉得它能有什么样的用途？！'], //世界解锁等
    [/^(.*)You found a book called Speedscience, but you haven't found anyone to read it. Such a shame.$/, '$1您发现了一本书，叫做《研究加速》，但您找不到人来读它。真可惜。'], //世界解锁等
    [/^(.*)You found a book called Megascience! It seems to fade in and out of reality.$/, '$1您发现了一本书，叫做《超级研究》！它似乎在现实世界中时隐时现。'], //世界解锁等
    [/^(.*)You found blueprints detailing how to upgrade your Warpstation. Blimey!$/, '$1您发现了一个蓝图，详细说明了升级跃迁核心的方法。天哪！'], //世界解锁等
    [/^(.*)You find a smouldering book that looks like it was pushed from the core of this planet. Inside are drawings of Trimps performing rituals with Gems and Magma. It's very hot to the touch, but you take it with you as you haven't had new reading material in a while.$/, '$1您发现了一本冒烟的书，看起来就像是刚从行星核心被扔出来一样。书里面画着用宝石和岩浆进行仪式的脆皮。它摸起来仍然很烫，但您考虑到很久没有新的东西看了，还是把它带走了。'], //世界解锁等
    [/^(.*)This book really doesn't help too much while you're dealing with the minerlessness of this dimension. Better let your scientists hold this one for you for a bit.$/, '$1这本书目前派不上什么用场，您还在忙着对付这个没有矿工的维度。还是让科学家们先帮您保管着吧。'], //世界解锁等
    [/^(.*)You found a book called Speedfarming! It looks delicious!$/, '$1您发现了一本书，叫做《耕作加速》！它看起来很好吃！'], //世界解锁等
    [/^(.*)You found a book called Megafarming! It indicates that you should actually water your crops. Brilliant!$/, '$1您发现了一本书，叫做《超级耕作》！它指出您应该灌溉作物。太聪明了！'], //世界解锁等
    [/^(.*)You found a book called Speedlumber! It looks long.$/, '$1您发现了一本书，叫做《砍伐加速》！它看起来很长。'], //世界解锁等
    [/^(.*)You found a book called Megalumber! The quote on the back reads 'How much wood could a Wood Trimp chop if a Wood Trimp could chop wood\?'$/, '$1您发现了一本书，叫做《超级砍伐》！后面的引语这么写着“若木脆皮可劈木，几何木可脆皮劈？”'], //世界解锁等
    [/^(.*)You found a book called Speedminer!$/, '$1您发现了一本书，叫做《采矿加速》！'], //世界解锁等
    [/^(.*)Your Scientist stares blankly at you for a moment, then slowly and quietly places the new book on the shelves.$/, '$1您的科学家茫然地看了您一会儿，然后慢慢地，安静地把这本新书放到了书架上。'], //世界解锁等
    [/^(.*)Your Scientists stare blankly at you for a moment, then slowly and quietly place the new book on the shelves.$/, '$1您的科学家们茫然地看了您一会儿，然后慢慢地，安静地把这本新书放到了书架上。'], //世界解锁等
    [/^(.*)You don't have any Scientists to not know how to handle this book, so everything's chill.$/, '$1您没有科学家，没有人知道怎么处理这本书，所以一切都僵住了。'], //世界解锁等
    [/^(.*)You found a book called Megaminer! The front is really shiny and has a Trimp on it. Creepy, it seems to follow your eyes.$/, '$1您发现了一本书，叫做《超级采矿》！它的封面闪闪发光，上面还有一个脆皮。等等，好可怕，这玩意似乎在跟着您的视线动。'], //世界解锁等
    [/^(.*)Your scientists appreciate the fact that you've managed to find another useless book, but they make sure to let you know it's still useless.$/, '$1对于您又搞到一本没用的书这事，科学家们还是很欣赏的，但它们还是要让您知道，这本书没啥用。'], //世界解锁等
    [/^(.*)Your Trimps report a strange bronze object on the floor, and you decide to come look at it. It looks freaky, so you ask one of your Trimps to pick it up first. He instantly starts itching his face and babbling off a bunch of science stuff, so you let another Trimp touch it and he does the same. This seems to make your Trimps smarter than Scientists, but may cause side effects.$/, '$1脆皮们在地上发现了一个奇怪的铜制物件，您决定去看看。它看起来很怪异，所以您让一个脆皮将它拿起来试试。它立刻开始挠自己的脸，并且开始胡言乱语一堆跟科学有关的，您让另一个脆皮触碰了那个物件，然后它跟第一位也一样了。看起来它能让脆皮变得比科学家还聪明，但是可能会造成副作用。'], //世界解锁等
    [/^(.*)You found a crafting foreman! He will build buildings automatically for you!$/, '$1您发现了一个正在锻造的工头！它会为您自动建造建筑！'], //世界解锁等
    [/^(.*)You look down and see a green gem that seems to stare back. You pick it up and feel adrenaline surge through your body. Probably best to bring this back to the lab for some research.$/, '$1您往下看，看到一块绿色的宝石，看起来它是在回瞪着您。您将它拾了起来，立刻感到精神变得亢奋了。或许最好将它带回去做进一步的研究。'], //世界解锁等
    [/^(.*)You look down and see a blue gem that seems to stare back. You pick it up and are immediately overwhelmed by feelings of intense power. You figure this could be used to focus your Portal Generator in this Universe.$/, '$1您往下看，看到一块蓝色的宝石，看起来它是在回瞪着您。您将它拾了起来，立刻被强大的力量感淹没了。您觉得这可以用来集中这个宇宙的传送门发生器的能量。'], //世界解锁等
    [/^(.*)You found a map to a strange place. Better go kill stuff in it!$/, '$1您发现了通往一个奇怪地方的地图。是时候大开杀戒了！'], //世界解锁等
    [/^(.*)This map is hot to the touch. Better go inside!$/, '$1这张地图非常烫手。最好进去看看！'], //世界解锁等
    [/^(.*)You find an ancient book titled Coordination. Exciting.$/, '$1您发现了一本古书，标题为《协作》。真是激动人心。'], //世界解锁等
    [/^(.*)You found a book discussing tactics for better blocking!$/, '$1您发现了一本书，里面详细讨论了更好地进行格挡的手段！'], //世界解锁等
    [/^(.*)This egg looks crazy. Seriously, guys, come look at this crazy egg!$/, '$1这个蛋看起来很疯狂。真的，兄弟们，来看看这个疯狂的蛋！'], //世界解锁等
    [/^(.*)There is something strange about this map. It doesn't seem to reflect any light at all, just pure darkness.$/, '$1这张地图很不对劲。看来它无法反射任何的光亮，完全就是纯粹的黑暗。'], //世界解锁等
    [/^(.*)You found your first map! Travel to your map chamber to check it out.$/, '$1您发现了第一张地图！进入地图界面来瞧瞧。'], //世界解锁等
    [/^(.*)You found (.*) map fragments!$/, '$1您发现了$2地图碎片！'], //世界解锁等
    [/^(.*)You have cleared enough land to support (.*) more Trimps!$/, '$1您清理了足够多的土地，可以多容纳$2脆皮！'], //世界解锁等
    [/^(.*)There sure is a lot of metal just tossed around in this Spire! You just found (.*) more!$/, '$1尖塔里真是随地都有很多金属！您发现了$2金属！'], //世界解锁等
    [/^(.*)You found a map to the Bionic Wonderland. Sounds fun!$/, '$1您发现了通往仿生仙境的地图。有点意思！'], //地图解锁等
    [/^(.*)You found a map to an even more advanced version of the Bionic Wonderland! Looks scary... Your scientists remind you that you can only carry 3 of these incredibly heavy, metallic maps at a time.$/, '$1您发现了通往更高级的仿生仙境的地图！看起来有点可怕……您的科学家提醒您，您只能同时携带3张仿生仙境的地图，因为它们由金属制造而成，实在太重了。'], //地图解锁等
    [/^(.*)Hey look, another baby RoboTrimp! You decide to add him to your collection. You now deal (.*)% extra damage thanks to your pets, and MagnetoShriek now removes (.*)% of an Improbability's attack$/, '$1您发现了另一个小脆皮机器人！您决定也带上它。您的脆皮现在可以额外造成$2%伤害，而且电磁尖啸现在可以将首领的攻击力降低$3%'], //地图解锁等
    [/^(.*)You found an Heirloom!$/, '$1您发现了一个传家宝！'], //地图解锁等
    [/^(.*)After barely escaping a fierce boulder, you check out the relic you found in there. It glows extremely bright for a few seconds before disappearing, and you look at your storages to see that your Food, Wood, and Metal have been doubled!$/, '$1在将将从一块狂暴巨石手下逃生后，您检查了一下在那里发现的遗物。它突然发出了无法直视的强光，过了一会儿，它消失了。之后，您检查了一下存储建筑，发现食物、木头和金属都翻倍了！'], //地图解锁等
    [/^(.*)At the end of that very hot map, you find a tiny, dehydrated Smithy building. You bring it back to your town and drop it in a glass of water, and a full-sized Smithy instantly appears!$/, '$1在那极热地图的最后，您发现了一个微小而脱水的铁匠铺。您将它带回了城镇，把它放进了一杯水里，突然，一个正常尺寸的铁匠铺就这么出现了！'], //地图解锁等
    [/^(.*)You have slain the Warden and taken his keys. How weird would it be if they fit in that key hole on the portal\?$/, '$1您把典狱长给宰了，并拿走了他的钥匙。如果这钥匙能够用在传送门上的钥匙孔的话……那得有多奇怪？'], //地图解锁等
    [/^(.*)You've never been here before. Like, ever. This entire place felt cold and unfamiliar. Where are you\? Why have so many Trimps had to fall to get here\? You're suddenly angry, it's time to take a stand.$/, '$1您从未来过这里。从来都没有。这里很冷，很陌生。您在哪？凭什么要死了那么多脆皮才能到这里？您突然感觉非常愤怒，是时候站出来了。'], //地图解锁等
    [/^(.*)You have permanantly unlocked a new Perk, Relentlessness, which will remain unlocked through portals.$/, '$1您永久解锁了无情特权，通过传送门后仍然保留。'], //地图解锁等
    [/^(.*)The world feels a little bit less angry as you fire off your handy Portal Generator. You can tell that somewhere in some dimension, a Megablimp is no more. In front of you, a green, shining box appears on the ground. In tiny writing on the box, you can make out the words 'Time portal. THIS SIDE UP'.$/, '$1您启动了传送门发生器，整个世界都感觉不那么愤怒了一些。您冥冥之中感知到在某个维度的某处，一个脆皮超级飞艇不复存在了。在您的面前出现了一个闪耀的绿色盒子，从盒子上的小字中，您读出了以下的内容：“时空传送门，此面向上”。'], //地图解锁等
    [/^(.*)The world feels a little bit less angry as you fire off your handy Portal Generator. You can tell that somewhere in some dimension, a Megablimp is no more. In front of you, a blue, shining box appears on the ground. In tiny writing on the box, you can make out the words 'Time portal. THIS SIDE UP'.$/, '$1您启动了传送门发生器，整个世界都感觉不那么愤怒了一些。您冥冥之中感知到在某个维度的某处，一个脆皮超级飞艇不复存在了。在您的面前出现了一个闪耀的蓝色盒子，从盒子上的小字中，您读出了以下的内容：“时空传送门，此面向上”。'], //地图解锁等
    [/^(.*)The world feels a little bit less angry as you fire off your handy Portal Generator. You can tell that somewhere in some dimension, a Megablimp is no more. In front of you, 45 Helium and a green, shining box appear on the ground. In tiny writing on the box, you can make out the words 'Time portal. THIS SIDE UP'.$/, '$1您启动了传送门发生器，整个世界都感觉不那么愤怒了一些。您冥冥之中感知到在某个维度的某处，一个脆皮超级飞艇不复存在了。在您的面前出现了45氦，以及一个闪耀的绿色盒子，从盒子上的小字中，您读出了以下的内容：“时空传送门，此面向上”。'], //地图解锁等
    [/^(.*)The world feels a little bit less angry as you fire off your handy Portal Generator. You can tell that somewhere in some dimension, a Megablimp is no more. In front of you, 45 Radon and a blue, shining box appear on the ground. In tiny writing on the box, you can make out the words 'Time portal. THIS SIDE UP'.$/, '$1您启动了传送门发生器，整个世界都感觉不那么愤怒了一些。您冥冥之中感知到在某个维度的某处，一个脆皮超级飞艇不复存在了。在您的面前出现了45氡，以及一个闪耀的蓝色盒子，从盒子上的小字中，您读出了以下的内容：“时空传送门，此面向上”。'], //地图解锁等
    [/^(.*)Don't ever let anyone tell you that you didn't just kill that Megablimp. Because you did. As he melts away into nothingness, you notice a green, shining box on the ground. In tiny writing on the box, you can make out the words 'Time portal. THIS SIDE UP'.$/, '$1如果还有人说什么您没有击坠过脆皮超级飞艇的话，现在可以让他闭嘴了。因为您刚刚做到了。当飞艇一点一点融入虚无时，您在地上发现了一个闪耀的绿色盒子。从盒子上的小字中，您读出了以下的内容：“时空传送门，此面向上”。'], //地图解锁等
    [/^(.*)Don't ever let anyone tell you that you didn't just kill that Megablimp. Because you did. As he melts away into nothingness, you notice a blue, shining box on the ground. In tiny writing on the box, you can make out the words 'Time portal. THIS SIDE UP'.$/, '$1如果还有人说什么您没有击坠过脆皮超级飞艇的话，现在可以让他闭嘴了。因为您刚刚做到了。当飞艇一点一点融入虚无时，您在地上发现了一个闪耀的蓝色盒子。从盒子上的小字中，您读出了以下的内容：“时空传送门，此面向上”。'], //地图解锁等
    [/^(.*)You were able to extract 45 Helium Canisters from that Blimp! Now that you know how to do it, you'll be able to extract Helium from normal Blimps.$/, '$1您从飞艇上提取了45氦！从现在起您也可以从普通飞艇那边提取氦了。'], //地图解锁等
    [/^(.*)You were able to extract 45 Radon Vials from that Blimp! Now that you know how to do it, you'll be able to extract Radon from normal Blimps.$/, '$1您从飞艇上提取了45氡！从现在起您也可以从普通飞艇那边提取氡了。'], //地图解锁等
    [/^(.*)Oh goodness, another Prism to polish!$/, '$1哇！又一个可以抛光的棱镜！'], //地图解锁等
    [/^(.*)That thing dropped a book. Doesn't look like an ordinary book. Looks... blockier...$/, '$1那家伙掉落了一本书。看起来，不像寻常的书。看起来……更结实……'], //地图解锁等
    [/^(.*)It's all shiny and stuff. You're pretty sure you've never seen a book this shiny.$/, '$1您很确信从未见过这么闪闪发亮的书。全是亮晶晶的东西。'], //地图解锁等
    [/^(.*)You found a book that will teach you how to upgrade your Shield!$/, '$1您发现了一本书，看起来阅读后可以学会升级盾牌！'], //地图解锁等
    [/^(.*)You found a book that will teach you how to upgrade your Dagger!$/, '$1您发现了一本书，看起来阅读后可以学会升级匕首！'], //地图解锁等
    [/^(.*)You found a book that will teach you how to upgrade your Boots!$/, '$1您发现了一本书，看起来阅读后可以学会升级靴子！'], //地图解锁等
    [/^(.*)You found a book that will teach you how to upgrade your Mace!$/, '$1您发现了一本书，看起来阅读后可以学会升级狼牙棒！'], //地图解锁等
    [/^(.*)You found a book that will teach you how to upgrade your Helmet!$/, '$1您发现了一本书，看起来阅读后可以学会升级头盔！'], //地图解锁等
    [/^(.*)You found a book that will teach you how to upgrade your Polearm!$/, '$1您发现了一本书，看起来阅读后可以学会升级战戟！'], //地图解锁等
    [/^(.*)You found a book that will teach you how to upgrade your Pants!$/, '$1您发现了一本书，看起来阅读后可以学会升级裤子！'], //地图解锁等
    [/^(.*)You found a book that will teach you how to upgrade your Battleaxe!$/, '$1您发现了一本书，看起来阅读后可以学会升级战斧！'], //地图解锁等
    [/^(.*)You found a book that will teach you how to upgrade your Shoulderguards!$/, '$1您发现了一本书，看起来阅读后可以学会升级护肩！'], //地图解锁等
    [/^(.*)You found a book that will teach you how to upgrade your Greatsword!$/, '$1您发现了一本书，看起来阅读后可以学会升级巨剑！'], //地图解锁等
    [/^(.*)You found a book that will teach you how to upgrade your Breastplate!$/, '$1您发现了一本书，看起来阅读后可以学会升级胸铠！'], //地图解锁等
    [/^(.*)You found a book that will teach you how to upgrade your Arbalest!$/, '$1您发现了一本书，看起来阅读后可以学会升级强弩！'], //地图解锁等
    [/^(.*)You found a book that will teach you how to upgrade your Gambeson!$/, '$1您发现了一本书，看起来阅读后可以学会升级棉甲！'], //地图解锁等
    [/^(.*)The copy of 'Speedexplorer' under these bushes will certainly be useful!$/, '$1树丛下发现的那份“探险家加速”复制品肯定能派上用场的！'], //地图解锁等
    [/^(.*)The (.*) copies of 'Speedexplorer' under these bushes will certainly be useful!$/, '$1树丛下发现的$2份“探险家加速”复制品肯定能派上用场的！'], //地图解锁等
    [/^(.*)Holy cowimp! A unique map!$/, '$1哦豁！一张独特地图！'], //地图解锁等
    [/^(.*)You just made a map to The Block!$/, '$1您制造了障碍区地图！'], //地图解锁等
    [/^(.*)Oh snap! Another unique map!$/, '$1天秀啊！又一张独特地图！'], //地图解锁等
    [/^(.*)You just made a map to The Wall!$/, '$1您制造了高墙地图！'], //地图解锁等
    [/^(.*)You just made a map to Big Wall!$/, '$1您制造了巨墙地图！'], //地图解锁等
    [/^(.*)You found The Prison! You have a bad feeling about going in...$/, '$1您发现了监狱地图！您感觉进去后会有什么不好的事发生……'], //地图解锁等
    [/^(.*)You just made a map to Big Wall!$/, '$1您制造了巨墙地图！'], //地图解锁等
    [/^(.*)You found a map to an Imploding Star inside of a supercooled dimension. The temperature there is perfect!$/, '$1您在一个超冷的维度中发现了爆炸之星地图。那儿的温度刚刚好！'], //地图解锁等
    [/^(.*)You found plans for a Mansion! Your Trimps will be pretty stoked$/, '$1您发现了豪宅的蓝图！脆皮们一定会很兴奋的'], //地图解锁等
    [/^(.*)You found plans for a hotel! \(A decent hotel, too$/, '$1您发现了宾馆的蓝图！(相当棒的宾馆'], //地图解锁等
    [/^(.*)This extremely technical book will teach anyone who can understand the big words how to make bigger huts.$/, '$1这本书极其专业，可以让理解能力强大的人学会建造更大的小屋。'], //地图解锁等
    [/^(.*)This book talks about adding a second floor to your homes! Mind... blown...$/, '$1这本书讲述了建造第二层宅院的方法！神智……不清了……'], //地图解锁等
    [/^(.*)This book will teach you how to make your Trimps share their mansions!$/, '$1这本书可以教会您让脆皮们共同居住在豪宅中的方法！'], //地图解锁等
    [/^(.*)This book will teach you how to build smaller hotel rooms!$/, '$1这本书可以教会您将宾馆房间建造得更小的方法！'], //地图解锁等
    [/^(.*)Wow! This book! It's so Resortsfull!$/, '$1哇哦！这本书可太多金了！'], //地图解锁等
    [/^(.*)You found plans for a huge resort!$/, '$1您发现了度假村的蓝图！它可真大……'], //地图解锁等
    [/^(.*)You found a key to Dimension ZZZ!$/, '$1您发现了通往ZZZ维度的钥匙！'], //地图解锁等
    [/^(.*)You found a crystal powerful enough to create wormholes!$/, '$1您发现了一块充满能量的水晶，利用它的能量可以制造出黑洞！'], //地图解锁等
    [/^(.*)You found plans for some sort of overly complicated solar panel.$/, '$1您发现了某种可以利用恒星能源的设施蓝图，它看起来超级复杂。'], //地图解锁等
    [/^(.*)A book that teaches your Foremen a new skill. Riveting.$/, '$1这本书可以教会工头们新的技能。真是引人入胜。'], //地图解锁等
    [/^(.*)You found blueprints for some sort of nursery that can harness more power from gems.$/, '$1您发现了某种托儿所的蓝图，它可以利用宝石的更多能量。'], //地图解锁等
    [/^(.*)You found (.*) gems! Terrific!$/, '$1您发现了$2宝石！真是妙极了！'], //地图解锁等
    [/^(.*)As expected, there was no Metal here.$/, '$1正如您所料，这里并没有金属。'], //地图解锁等
    [/^(.*)You just found (.*) bars of metal! Convenient!$/, '$1您发现了$2金属！太实用了！'], //地图解锁等
    [/^(.*)That guy just left (.*) food on the ground! Sweet!$/, '$1那家伙在地上留下了$2食物！真是太好啦！'], //地图解锁等
    [/^(.*)You just found (.*) wood! That's pretty neat!$/, '$1您发现了$2木头！很好很强大！'], //地图解锁等
    [/^This book will teach your soldiers how to utilize the buddy system. Fighting will now require (.*)% more Trimps \(rounded up\), but attack and health will grow for each new Trimp.$/, '这本书可以教会士兵如何利用伙伴的力量。从现在起，战斗所需要的脆皮数量增加$1%(向上取整)，脆皮的攻击力和生命值也相应地提升。'], //其他升级等
    [/^(.*)You just made a map to the Dimension of Anger! Should be fun!$/, '$1您制造了愤怒维度地图！应该会很有趣的！'], //其他升级等
    [/^(.*)You just made a map to the Dimension of Rage! Sounds like a great time!$/, '$1您制造了暴怒维度地图！听起来不错哦！'], //其他升级等
    [/^Your next Shield will grant (.*) block.$/, '下一级盾牌增加$1格挡。'], //其他升级等
    [/^Your next Shield will grant (.*) health.$/, '下一级盾牌增加$1生命值。'], //其他升级等
    [/^Your next Dagger will grant (.*) attack.$/, '下一级匕首增加$1攻击力。'], //其他升级等
    [/^Your next Boots will grant (.*) health.$/, '下一级靴子增加$1生命值。'], //其他升级等
    [/^Your next Mace will grant (.*) attack.$/, '下一级狼牙棒增加$1攻击力。'], //其他升级等
    [/^Your next Helmet will grant (.*) health.$/, '下一级头盔增加$1生命值。'], //其他升级等
    [/^Your next Polearm will grant (.*) attack.$/, '下一级战戟增加$1攻击力。'], //其他升级等
    [/^Your next Pants will grant (.*) health.$/, '下一级裤子增加$1生命值。'], //其他升级等
    [/^Your next Battleaxe will grant (.*) attack.$/, '下一级战斧增加$1攻击力。'], //其他升级等
    [/^Your next Shoulderguards will grant (.*) health.$/, '下一级护肩增加$1生命值。'], //其他升级等
    [/^Your next Greatsword will grant (.*) attack.$/, '下一级巨剑增加$1攻击力。'], //其他升级等
    [/^Your next Breastplate will grant (.*) health.$/, '下一级胸铠增加$1生命值。'], //其他升级等
    [/^Your next Arbalest will grant (.*) attack.$/, '下一级强弩增加$1攻击力。'], //其他升级等
    [/^Your next Gambeson will grant (.*) health.$/, '下一级棉甲增加$1生命值。'], //其他升级等
    [/^(.*)It's time to get some Trimps up in here.$/, '$1是时候抓点脆皮了。'], //其他升级等
    [/^(.*)Maybe there's something meaty and delicious here to Trap.$/, '$1也许您可以用陷阱抓到一些嘎嘣脆肉味的东西。'], //其他升级等
    [/^(.*)Ah wood, the building material of kings. The building material of everyone else too, but still.$/, '$1木头，建筑材料之王，王之建筑材料。当然也是其他人的建筑材料，但王也是啊。'], //其他升级等
    [/^(.*)You'll need some wood to build stuff...$/, '$1您需要木头才能建造其他东西……'], //其他升级等
    [/^(.*)You almost forgot how to build a Barn, but now you remember. Proud of you!$/, '$1您都快忘了怎么建造谷仓了，总之您还是想起来了。为您自己感到骄傲！'], //其他升级等
    [/^(.*)The food stores are getting pretty full, maybe you should start thinking about a Barn.$/, '$1食物的存储快满了，您可能该考虑谷仓了。'], //其他升级等
    [/^(.*)Wet wood won't work! Better get a Shed going.$/, '$1湿木头是没法用的！最好赶紧建造一个窝棚。'], //其他升级等
    [/^(.*)A nice Shed would allow you to keep more wood on hand.$/, '$1一个好窝棚可以存放更多木头。'], //其他升级等
    [/^(.*)What better place to store metal than a building that can smelt it\?$/, '$1还有什么地方比冶炼金属的地方能更好地存储它呢？'], //其他升级等
    [/^(.*)A nice Forge would allow you to store more metal.$/, '$1一个好锻造厂可以存储更多金属。'], //其他升级等
    [/^(.*)You caught your very first Trimp in this new dimension! It can smell other Trimps on you and looks confused. You promptly send him off to work!$/, '$1您在新的维度中抓到了第一个脆皮！可它在您身上闻到了其他脆皮的气味，一脸懵逼。您赶紧把它派去干活了。'], //其他升级等
    [/^(.*)There's a weird impish little creature in the trap. A Trimp, you decide to call it. Since you're so creative, you could probably train this Trimp to help out.$/, '$1陷阱里有一个看起来很皮的脆弱小动物，您决定叫它 脆皮 。既然您都这么有创造力了，不如干脆考虑训练脆皮来帮您干活好了。'], //其他升级等
    [/^(.*)Where would you be in life without Science\? Not this dimension, that's for sure.$/, '$1假如没有科学，生活会变得怎样？至少您就不会在这个维度了，肯定的。'], //其他升级等
    [/^(.*)This planet feels so familiar, yet so foreign. Maybe it's time to start sciencing things.$/, '$1这颗行星又熟悉又陌生。或许是时候研究点什么了。'], //其他升级等
    [/^(.*)As you finally step out into the Battle Zones, the first thing you notice is that your Heirlooms feel weaker here. Oh well, 1000 more times into the fray...$/, '$1当您迈入战斗区域时，首先发现的是传家宝弱了很多。好吧，至少得先来个千人斩了……'], //其他升级等
    [/^(.*)War... what is it good for\? Exploration, or something.$/, '$1战争……人是为何要战争呢？为了探索，还是为了什么……'], //其他升级等
    [/^(.*)The newly established Trimp zoning committee is too busy drooling to approve anything, so you take it on yourself to start building some Huts.$/, '$1新成立的脆皮区委会忙着流口水，没空审批，还是您自己来建造小屋吧。'], //其他升级等
    [/^(.*)Doesn't seem like all of these little guys will fit in your ship. Luckily, you remember how to make small huts for shelter.$/, '$1这么多小家伙是没法全塞进您的飞船的。幸好，您记得如何建造小屋。'], //其他升级等
    [/^(.*)The TZC has finally approved a House blueprint. To your surprise, it looks fairly decent! You decide to immediately build some.$/, '$1脆皮区委会终于批准了宅院的蓝图。但令您吃惊的是，它看起来竟然相当棒。于是您决定马上造一些。'], //其他升级等
    [/^(.*)It's starting to get pretty crowded up in here. Maybe you should start building some better housing.$/, '$1这里开始变得拥挤起来了。您应该开始建造一些更好的房子。'], //其他升级等
    [/^(.*)Your Trimps look really bored.$/, '$1脆皮们看起来很无聊。'], //其他升级等
    [/^(.*)Better hurry up to the fighting Zones so you don't have to sit around here all day watching Trimps breed.$/, '$1还是赶紧去战斗区域吧，不然整天没事干就只能看脆皮们繁殖了。'], //其他升级等
    [/^(.*)Apparently the Trimps breed if they're not working. Doesn't look pleasant.$/, '$1很显然，如果脆皮没有在干活，它们就开始繁殖了。看着不怎么舒服。'], //其他升级等
    [/^(.*), Z$/, '$1，区域'], //统计等
    [/^Progress: (.*) \/$/, '进度：$1 /'], //成就等
    [/^Complete Zone (\d+) in Universe$/, '通过区域 $1 于宇宙'], //成就等
    [/^Reach (.*) displayed damage$/, '面板伤害值达到 $1'], //成就等
    [/^Have  (.*) total Trimps$/, '脆皮总数达到 $1'], //成就等
    [/^Use the Portal (.*) time(s*)$/, '使用 $1 次传送门'], //成就等
    [/^Row Finished! \((.*) total$/, '此类成就全部完成！(数量一共为 $1 '], //成就等
    [/^Clear  (.*) total Zones$/, '一共通过 $1 个区域'], //成就等
    [/^Clear  (.*) total Maps$/, '一共通过 $1 张地图'], //成就等
    [/^Gather (.*) total Helium$/, '一共获取了 $1 氦'], //成就等
    [/^Gather (.*) total Radon$/, '一共获取了 $1 氡'], //成就等
    [/^Reach (.*) Helium Per Hour$/, '氦每小时最高达到 $1 '], //成就等
    [/^Collect (.*) Heirloom(s*)$/, '一共收集了 $1 个传家宝'], //成就等
    [/^Collect (.*) Gem(s*)$/, '一共收集了 $1 宝石'], //成就等
    [/^Earn (.*) Helium from the Daily Challenge$/, '从日常挑战中获取 $1 氦'], //成就等
    [/^Reach Z(.*) after losing no more than one fight per Zone.$/, '在到达区域 $1 之前，每个区域至多只战败一次。'], //成就等
    [/^Reach U2 Z(.*) without ever entering a Map.$/, '不进入地图的前提下，通过宇宙2的区域 $1 。'], //成就等
    [/^Reach U2 Z(.*) without your Shield falling below (.*)%.$/, '棱镜护盾从未低于 $2% 的前提下，通过宇宙2的区域 $1 。'], //成就等
    [/^Progress: Your Shield has already hit (.*)% this run.$/, '进度：护盾曾经低至 $1% ，因此无法完成了。'], //成就等
    [/^Clear The Block in less than (.*) hour(s*) from start of run$/, '使用传送门后，在 $1 小时内通过障碍区'], //成就等
    [/^Clear The Block in less than (.*) hour(s*) (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在 $1 小时 $3 分钟 $5 秒内通过障碍区'], //成就等
    [/^Progress: Best run is (.*) min(s*)$/, '进度：最快为 $1 分钟'], //成就等
    [/^Progress: Too slow! Best run is (.*) min(s*)$/, '进度：因太慢失败了！最快为 $1 分钟'], //成就等
    [/^Row Finished! \(Best run is (.*) min(s*)$/, '此类成就全部完成！(最快为 $1 分钟'], //成就等
    [/^Progress: Best run is (.*) hour(s*)$/, '进度：最快为 $1 小时'], //成就等
    [/^Progress: Too slow! Best run is (.*) hour(s*)$/, '进度：因太慢失败了！最快为 $1 小时'], //成就等
    [/^Row Finished! \(Best run is (.*) hour(s*)$/, '此类成就全部完成！(最快为 $1 小时'], //成就等
    [/^Progress: Best run is (.*) minutes (.*) seconds$/, '进度：最快为 $1 分钟 $2 秒'], //成就等
    [/^Progress: Too slow! Best run is (.*) minutes (.*) seconds$/, '进度：因太慢失败了！最快为 $1 分钟 $2 秒'], //成就等
    [/^Row Finished! \(Best run is (.*) minutes (.*) seconds$/, '此类成就全部完成！(最快为 $1 分钟 $2 秒'], //成就等
    [/^Progress: Best run is (\d+)$/, '进度：最快为 $1'], //成就等
    [/^Progress: Too slow! Best run is (\d+)$/, '进度：因太慢失败了！最快为 $1'], //成就等
    [/^Row Finished! \(Best run is (\d+)$/, '此类成就全部完成！(最快为 $1'], //成就等
    [/^Progress: Best run is (.*) hour(s*) (.*) minute(s*) (.*) second(s*)$/, '进度：最快为 $1 小时 $3 分钟 $5 秒'], //成就等
    [/^Progress: Too slow! Best run is (.*) hour(s*) (.*) minute(s*) (.*) second(s*)$/, '进度：因太慢失败了！最快为 $1 小时 $3 分钟 $5 秒'], //成就等
    [/^Row Finished! \(Best run is (.*) hour(s*) (.*) minute(s*) (.*) second(s*)$/, '此类成就全部完成！(最快为 $1 小时 $3 分钟 $5 秒'], //成就等
    [/^Clear The Wall in less than (.*) hour(s*) from start of run$/, '使用传送门后，在 $1 小时内通过高墙'], //成就等
    [/^Clear The Wall in less than (.*) hour(s*) (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在 $1 小时 $3 分钟 $5 秒内通过高墙'], //成就等
    [/^Clear DoA in less than (.*) hour(s*) from start of run$/, '使用传送门后，在 $1 小时内通过愤怒维度'], //成就等
    [/^Clear DoA in less than (.*) min(s*) from start of run$/, '使用传送门后，在 $1 分钟内通过愤怒维度'], //成就等
    [/^Clear DoA in less than (.*) hour(s*) (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在 $1 小时 $3 分钟 $5 秒内通过愤怒维度'], //成就等
    [/^Clear DoA in less than (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在 $1 分钟 $3 秒内通过愤怒维度'], //成就等
    [/^Clear ToD in less than (.*) hour(s*) from start of run$/, '使用传送门后，在 $1 小时内通过末日神殿'], //成就等
    [/^Clear ToD in less than (.*) hour(s*) (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在 $1 小时 $3 分钟 $5 秒内通过末日神殿'], //成就等
    [/^Clear Prison in less than (.*) hour(s*) from start of run$/, '使用传送门后，在 $1 小时内通过监狱'], //成就等
    [/^Clear Prison in less than (.*) min(s*) from start of run$/, '使用传送门后，在 $1 分钟内通过监狱'], //成就等
    [/^Clear Prison in less than (.*):(.*) from start of run$/, '使用传送门后，在 $1:$2 内通过监狱'], //成就等
    [/^Clear Prison in less than (.*) hour(s*) (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在 $1 小时 $3 分钟 $5 秒内通过监狱'], //成就等
    [/^Clear Prison in less than (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在 $1 分钟 $3 秒内通过监狱'], //成就等
    [/^Clear Prison in less than (.*):(.*):(.*) from start of run$/, '使用传送门后，在 $1:$2:$3 内通过监狱'], //成就等
    [/^Clear Bionic Wonderland in less than (.*) hour(s*) from start of run$/, '使用传送门后，在 $1 小时内通过仿生仙境'], //成就等
    [/^Clear Bionic Wonderland in less than (.*):(.*) from start of run$/, '使用传送门后，在 $1:$2 内通过仿生仙境'], //成就等
    [/^Clear Bionic Wonderland in less than (.*) hour(s*) (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在 $1 小时 $3 分钟 $5 秒内通过仿生仙境'], //成就等
    [/^Clear Bionic Wonderland in less than (.*):(.*):(.*) from start of run$/, '使用传送门后，在 $1:$2:$3 内通过仿生仙境'], //成就等
    [/^Clear Imploding Star in less than (.*) hour(s*) from start of run$/, '使用传送门后，在 $1 小时内通过爆炸之星'], //成就等
    [/^Clear Imploding Star in less than (.*) min(s*) from start of run$/, '使用传送门后，在 $1 分钟内通过爆炸之星'], //成就等
    [/^Clear Imploding Star in less than (.*):(.*) from start of run$/, '使用传送门后，在 $1:$2 内通过爆炸之星'], //成就等
    [/^Clear Imploding Star in less than (.*) hour(s*) (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在 $1 小时 $3 分钟 $5 秒内通过爆炸之星'], //成就等
    [/^Clear Imploding Star in less than (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在 $1 分钟 $3 秒内通过爆炸之星'], //成就等
    [/^Clear Imploding Star in less than (.*):(.*):(.*) from start of run$/, '使用传送门后，在 $1:$2:$3 内通过爆炸之星'], //成就等
    [/^Clear the Spire in less than (.*) hour(s*) from start of run$/, '使用传送门后，在 $1 小时内通过尖塔'], //成就等
    [/^Clear the Spire in less than (.*) min(s*) from start of run$/, '使用传送门后，在 $1 分钟内通过尖塔'], //成就等
    [/^Clear the Spire in less than (.*):(.*) from start of run$/, '使用传送门后，在 $1:$2 内通过尖塔'], //成就等
    [/^Clear the Spire in less than (.*) hour(s*) (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在 $1 小时 $3 分钟 $5 秒内通过尖塔'], //成就等
    [/^Clear the Spire in less than (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在 $1 分钟 $3 秒内通过尖塔'], //成就等
    [/^Clear the Spire in less than (.*):(.*):(.*) from start of run$/, '使用传送门后，在 $1:$2:$3 内通过尖塔'], //成就等
    [/^Clear Spire II in less than (.*) hour(s*) from start of run$/, '使用传送门后，在 $1 小时内通过尖塔 II'], //成就等
    [/^Clear Spire II in less than (.*) min(s*) from start of run$/, '使用传送门后，在 $1 分钟内通过尖塔 II'], //成就等
    [/^Clear Spire II in less than (.*):(.*) from start of run$/, '使用传送门后，在 $1:$2 内通过尖塔 II'], //成就等
    [/^Clear Spire II in less than (.*) hour(s*) (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在 $1 小时 $3 分钟 $5 秒内通过尖塔 II'], //成就等
    [/^Clear Spire II in less than (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在 $1 分钟 $3 秒内通过尖塔 II'], //成就等
    [/^Clear Spire II in less than (.*):(.*):(.*) from start of run$/, '使用传送门后，在 $1:$2:$3 内通过尖塔 II'], //成就等
    [/^Clear Spire III in less than (.*) hour(s*) from start of run$/, '使用传送门后，在 $1 小时内通过尖塔 III'], //成就等
    [/^Clear Spire III in less than (.*) min(s*) from start of run$/, '使用传送门后，在 $1 分钟内通过尖塔 III'], //成就等
    [/^Clear Spire III in less than (.*):(.*) from start of run$/, '使用传送门后，在 $1:$2 内通过尖塔 III'], //成就等
    [/^Clear Spire III in less than (.*) hour(s*) (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在 $1 小时 $3 分钟 $5 秒内通过尖塔 III'], //成就等
    [/^Clear Spire III in less than (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在 $1 分钟 $3 秒内通过尖塔 III'], //成就等
    [/^Clear Spire III in less than (.*):(.*):(.*) from start of run$/, '使用传送门后，在 $1:$2:$3 内通过尖塔 III'], //成就等
    [/^Clear Spire IV in less than (.*) hour(s*) from start of run$/, '使用传送门后，在 $1 小时内通过尖塔 IV'], //成就等
    [/^Clear Spire IV in less than (.*) min(s*) from start of run$/, '使用传送门后，在 $1 分钟内通过尖塔 IV'], //成就等
    [/^Clear Spire IV in less than (.*):(.*) from start of run$/, '使用传送门后，在 $1:$2 内通过尖塔 IV'], //成就等
    [/^Clear Spire IV in less than (.*) hour(s*) (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在 $1 小时 $3 分钟 $5 秒内通过尖塔 IV'], //成就等
    [/^Clear Spire IV in less than (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在 $1 分钟 $3 秒内通过尖塔 IV'], //成就等
    [/^Clear Spire IV in less than (.*):(.*):(.*) from start of run$/, '使用传送门后，在 $1:$2:$3 内通过尖塔 IV'], //成就等
    [/^Clear Spire V in less than (.*) hour(s*) from start of run$/, '使用传送门后，在 $1 小时内通过尖塔 V'], //成就等
    [/^Clear Spire V in less than (.*) min(s*) from start of run$/, '使用传送门后，在 $1 分钟内通过尖塔 V'], //成就等
    [/^Clear Spire V in less than (.*):(.*) from start of run$/, '使用传送门后，在 $1:$2 内通过尖塔 V'], //成就等
    [/^Clear Spire V in less than (.*) hour(s*) (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在 $1 小时 $3 分钟 $5 秒内通过尖塔 V'], //成就等
    [/^Clear Spire V in less than (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在 $1 分钟 $3 秒内通过尖塔 V'], //成就等
    [/^Clear Spire V in less than (.*):(.*):(.*) from start of run$/, '使用传送门后，在 $1:$2:$3 内通过尖塔 V'], //成就等
    [/^Clear Big Wall in less than (.*) hour(s*) from start of run$/, '使用传送门后，在 $1 小时内通过巨墙'], //成就等
    [/^Clear Big Wall in less than (.*) min(s*) from start of run$/, '使用传送门后，在 $1 分钟内通过巨墙'], //成就等
    [/^Clear Big Wall in less than (.*):(.*) from start of run$/, '使用传送门后，在 $1:$2 内通过巨墙'], //成就等
    [/^Clear Big Wall in less than (.*) hour(s*) (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在 $1 小时 $3 分钟 $5 秒内通过巨墙'], //成就等
    [/^Clear Big Wall in less than (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在 $1 分钟 $3 秒内通过巨墙'], //成就等
    [/^Clear Big Wall in less than (.*):(.*):(.*) from start of run$/, '使用传送门后，在 $1:$2:$3 内通过巨墙'], //成就等
    [/^Clear Prismatic Palace in less than (.*) hour(s*) from start of run$/, '使用传送门后，在 $1 小时内通过棱镜宫殿'], //成就等
    [/^Clear Prismatic Palace in less than (.*) min(s*) from start of run$/, '使用传送门后，在 $1 分钟内通过棱镜宫殿'], //成就等
    [/^Clear Prismatic Palace in less than (.*):(.*) from start of run$/, '使用传送门后，在 $1:$2 内通过棱镜宫殿'], //成就等
    [/^Clear Prismatic Palace in less than (.*) hour(s*) (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在 $1 小时 $3 分钟 $5 秒内通过棱镜宫殿'], //成就等
    [/^Clear Prismatic Palace in less than (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在 $1 分钟 $3 秒内通过棱镜宫殿'], //成就等
    [/^Clear Prismatic Palace in less than (.*):(.*):(.*) from start of run$/, '使用传送门后，在 $1:$2:$3 内通过棱镜宫殿'], //成就等
    [/^Clear Melting Point in less than (.*) hour(s*) from start of run$/, '使用传送门后，在 $1 小时内通过熔点'], //成就等
    [/^Clear Melting Point in less than (.*) min(s*) from start of run$/, '使用传送门后，在 $1 分钟内通过熔点'], //成就等
    [/^Clear Melting Point in less than (.*):(.*) from start of run$/, '使用传送门后，在 $1:$2 内通过熔点'], //成就等
    [/^Clear Melting Point in less than (.*) hour(s*) (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在 $1 小时 $3 分钟 $5 秒内通过熔点'], //成就等
    [/^Clear Melting Point in less than (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在 $1 分钟 $3 秒内通过熔点'], //成就等
    [/^Clear Melting Point in less than (.*):(.*):(.*) from start of run$/, '使用传送门后，在 $1:$2:$3 内通过熔点'], //成就等
    [/^Have over (.*) traps at once$/, '同时拥有超过 $1 个陷阱'], //成就等
    [/^Spend over (.*) total He on Wormholes$/, '在虫洞上一共花费 $1 氦'], //成就等
    [/^Kill (.*) enemies in your Spire$/, '在您的尖塔中一共击杀 $1 敌人'], //成就等
    [/^Beat the Spire with no respec and (.*) or less He Spent$/, '在氦花费不超过 $1 ，且未在传送后进行特权洗点的前提下通过尖塔'], //成就等
    [/^Beat Spire II with no respec and (.*) or less He spent$/, '在氦花费不超过 $1 ，且未在传送后进行特权洗点的前提下通过尖塔 II'], //成就等
    [/^Complete Wither with (.*) stacks of Hardened$/, '在拥有 $1 层硬化的前提下，完成凋零挑战'], //成就等
    [/^(\s+)Making up lost time...(\s+)$/, '$1补偿时间中……$2'], //离线等
    [/^(\d+) Level map$/, '$1级的地图'], //离线等
    [/^(\d+) map(s*)$/, '$1张地图'], //离线等
    [/^You have (.+) Fragments.$/, '您有$1碎片。'], //离线等
    [/^Z (.+) map$/, '地图等级$1'], //离线等
    [/^(.+) Frags$/, '花费$1碎片'], //离线等
    [/^(.+) items$/, '有$1个物品'], //离线等
    [/^Welcome back! You were offline for (\d+) second(s*).$/, '欢迎回来！您离线了$1秒。'], //离线等
    [/^Welcome back! You were offline for (\d+) minute(s*) and (\d+) second(s*).$/, '欢迎回来！您离线了$1分钟$3秒。'], //离线等
    [/^Welcome back! You were offline for (\d+) minute(s*).$/, '欢迎回来！您离线了$1分钟。'], //离线等
    [/^Welcome back! You were offline for (\d+) hour(s*) and (\d+) minute(s*).$/, '欢迎回来！您离线了$1小时$3分钟。'], //离线等
    [/^Welcome back! You were offline for (\d+) hour(s*).$/, '欢迎回来！您离线了$1小时。'], //离线等
    [/^Welcome back! You were offline for (\d+) day(s*) and (\d+) hour(s*).$/, '欢迎回来！您离线了$1天$3小时。'], //离线等
    [/^(.+) \/ (.+) ticks \($/, '$1 \/ $2 \('], //离线等
    [/^(.+) items remain$/, '剩余$1个物品'], //离线等
    [/^(.+) seconds processed in (.+) seconds \((.+)L\/F, (.+)x speed$/, '在$2秒内处理了$1秒的进度(每帧处理$3次循环，速度为$4倍'], //离线等
    [/^Estimated completion in(.+)$/, '预计完成时间：$1'], //离线等
    [/^While you were away, your Trimps were able to produce (.+) food, (.+) wood, (.+) metal, (.+) gems, and (.+) fragments(\.?)$/, '您不在时，脆皮获取了$1食物，$2木头，$3金属，$4宝石和$5碎片。'], //离线等
    [/^While you were away, your Trimps were able to produce (.+) food, (.+) wood, (.+) metal, and (.+) gems(\.?)$/, '您不在时，脆皮获取了$1食物，$2木头，$3金属和$4宝石。'], //离线等
    [/^While you were away, your Trimps were able to produce (.+) food, (.+) wood, (.+) metal, and (.+) fragments(\.?)$/, '您不在时，脆皮获取了$1食物，$2木头，$3金属和$4碎片。'], //离线等
    [/^While you were away, your Trimps were able to produce (.+) food, (.+) wood, (.+) gems, and (.+) fragments(\.?)$/, '您不在时，脆皮获取了$1食物，$2木头，$3宝石和$4碎片。'], //离线等
    [/^While you were away, your Trimps were able to produce (.+) food, (.+) metal, (.+) gems, and (.+) fragments(\.?)$/, '您不在时，脆皮获取了$1食物，$2金属，$3宝石和$4碎片。'], //离线等
    [/^While you were away, your Trimps were able to produce (.+) wood, (.+) metal, (.+) gems, and (.+) fragments(\.?)$/, '您不在时，脆皮获取了$1木头，$2金属，$3宝石和$4碎片。'], //离线等
    [/^While you were away, your Trimps were able to produce (.+) food, (.+) wood, and (.+) metal(\.?)$/, '您不在时，脆皮获取了$1食物，$2木头和$3金属。'], //离线等
    [/^While you were away, your Trimps were able to produce (.+) food, (.+) wood, and (.+) gems(\.?)$/, '您不在时，脆皮获取了$1食物，$2木头和$3宝石。'], //离线等
    [/^While you were away, your Trimps were able to produce (.+) food, (.+) wood, and (.+) fragments(\.?)$/, '您不在时，脆皮获取了$1食物，$2木头和$3碎片。'], //离线等
    [/^While you were away, your Trimps were able to produce (.+) food, (.+) metal, and (.+) gems(\.?)$/, '您不在时，脆皮获取了$1食物，$2金属和$3宝石。'], //离线等
    [/^While you were away, your Trimps were able to produce (.+) food, (.+) metal, and (.+) fragments(\.?)$/, '您不在时，脆皮获取了$1食物，$2金属和$3碎片。'], //离线等
    [/^While you were away, your Trimps were able to produce (.+) food, (.+) gems, and (.+) fragments(\.?)$/, '您不在时，脆皮获取了$1食物，$2宝石和$3碎片。'], //离线等
    [/^While you were away, your Trimps were able to produce (.+) wood, (.+) metal, and (.+) gems(\.?)$/, '您不在时，脆皮获取了$1木头，$2金属和$3宝石。'], //离线等
    [/^While you were away, your Trimps were able to produce (.+) wood, (.+) metal, and (.+) fragments(\.?)$/, '您不在时，脆皮获取了$1木头，$2金属和$3碎片。'], //离线等
    [/^While you were away, your Trimps were able to produce (.+) wood, (.+) gems, and (.+) fragments(\.?)$/, '您不在时，脆皮获取了$1木头，$2宝石和$3碎片。'], //离线等
    [/^While you were away, your Trimps were able to produce (.+) metal, (.+) gems, and (.+) fragments(\.?)$/, '您不在时，脆皮获取了$1金属，$2宝石和$3碎片。'], //离线等
    [/^While you were away, your Trimps were able to produce (.+) food, and (.+) wood(\.?)$/, '您不在时，脆皮获取了$1食物和$2木头。'], //离线等
    [/^While you were away, your Trimps were able to produce (.+) food, and (.+) metal(\.?)$/, '您不在时，脆皮获取了$1食物和$2金属。'], //离线等
    [/^While you were away, your Trimps were able to produce (.+) food, and (.+) gems(\.?)$/, '您不在时，脆皮获取了$1食物和$2宝石。'], //离线等
    [/^While you were away, your Trimps were able to produce (.+) food, and (.+) fragments(\.?)$/, '您不在时，脆皮获取了$1食物和$2碎片。'], //离线等
    [/^While you were away, your Trimps were able to produce (.+) wood, and (.+) metal(\.?)$/, '您不在时，脆皮获取了$1木头和$2金属。'], //离线等
    [/^While you were away, your Trimps were able to produce (.+) wood, and (.+) gems(\.?)$/, '您不在时，脆皮获取了$1木头和$2宝石。'], //离线等
    [/^While you were away, your Trimps were able to produce (.+) wood, and (.+) fragments(\.?)$/, '您不在时，脆皮获取了$1木头和$2碎片。'], //离线等
    [/^While you were away, your Trimps were able to produce (.+) metal, and (.+) gems(\.?)$/, '您不在时，脆皮获取了$1金属和$2宝石。'], //离线等
    [/^While you were away, your Trimps were able to produce (.+) metal, and (.+) fragments(\.?)$/, '您不在时，脆皮获取了$1金属和$2碎片。'], //离线等
    [/^While you were away, your Trimps were able to produce (.+) gems, and (.+) fragments(\.?)$/, '您不在时，脆皮获取了$1宝石和$2碎片。'], //离线等
    [/^While you were away, your Trimps were able to produce (.+) food(\.?)$/, '您不在时，脆皮获取了$1食物。'], //离线等
    [/^While you were away, your Trimps were able to produce (.+) wood(\.?)$/, '您不在时，脆皮获取了$1木头。'], //离线等
    [/^While you were away, your Trimps were able to produce (.+) metal(\.?)$/, '您不在时，脆皮获取了$1金属。'], //离线等
    [/^While you were away, your Trimps were able to produce (.+) gems(\.?)$/, '您不在时，脆皮获取了$1宝石。'], //离线等
    [/^While you were away, your Trimps were able to produce (.+) fragments(\.?)$/, '您不在时，脆皮获取了$1碎片。'], //离线等
    [/^(\s+)Bone Trader(\s+)$/, '$1骨法商人$2'], //骨头等
    [/^(\s+)You have$/, '$1您有 '], //骨头等
    [/^(\s+)You can earn bones as you progress through the world by killing Skeletimps and Megaskeletimps.(\s+)$/, '$1您可以在世界进度推进时，击杀脆皮骷髅或脆皮超级骷髅来获得骨头。$2'], //骨头等
    [/^(\s+)The Bone Trader trades bones for... bonuses(\s+)$/, '$1用骨头与骨法商人换点...“骨”利$2'], //骨头等
    [/^(\s+)Close(\s+)$/, '$1关闭$2'], //骨头等
    [/^(\s+)12 hours(\s+)$/, '$112小时$2'], //骨头等
    [/^(\s+)36 hours(\s+)$/, '$136小时$2'], //骨头等
    [/^(\s+)One of your storage structures will be more expensive than the amount you can receive from this boost. Spend some resources first to get the most benefit!(\s+)$/, '$1您有一个存储建筑花费超过了能获得的资源。先花费一些相应的资源，以使收益最大化！$2'], //骨头等
    [/^(\s+)Buy 12 Hours \(20 bones\)(\s+)$/, '购买12小时的产量(20骨头)'], //骨头等
    [/^(\s+)Buy 36 Hours \(40 bones\)(\s+)$/, '购买36小时的产量(40骨头)'], //骨头等
    [/^(\s+)Buy Bone Portal \(100 bones\)(\s+)$/, '购买骨头传送门(100骨头)'], //骨头等
    [/^(.*) Helium, (.*)x each Token, (.*) Fluffy Exp$/, '$1氦，各$2自然符记，$3绒绒经验'], //骨头等
    [/^(.*) Helium, (.*)x each Token$/, '$1氦，各$2自然符记'], //骨头等
    [/^(.*) Helium, (.*) Fluffy Exp$/, '$1氦，$2绒绒经验'], //骨头等
    [/^(.*) Radon, (.*) Scruffy Exp$/, '$1氡，$2污污经验'], //骨头等
    [/^(.*)(?<!and (.*)\%)(?<!Current)(?<!30 total)(?<!Battle)(?<!Cool For)(?<!AutoGold) Helium$/, '$1氦'], //骨头等
    [/^(.*)(?<!Current)(?<!Helium \/)(?<!Battle)(?<!Raging)(?<!AutoGold) Radon$/, '$1氡'], //骨头等
    [/^(\s+)Buy Heirloom \(30 bones\)(\s+)$/, '$1购买传家宝(30骨头)$2'], //骨头等
    [/^(\s+)Get(\s)one(\s)Heirloom(\s)at(\s)the(\s)chances(\s)above,(\s)based(\s)on(\s)highest(\s)zone(\s+)$/, '$1传家宝稀有度基于最高通过区域而定，具体概率如上所示$12'], //骨头等
    [/^Map At Z(\d+)\+$/, '进图区域：$1+'], //自动进图
    [/^Map At Z(\d+)(\+*) \((\D)$/, '区域$1$2进图($3'], //自动进图
    [/^(\s+)Heirlooms are powerful items that can drop with a variety of bonuses and a variety of rarities. You will earn one Heirloom every time a Void Map is completed, and you have a better chance to get higher rarities if you complete the Void Map at higher zones. Once you have an Heirloom, you can click the icon below to select it.$/, '$1传家宝具有强大的能量，拥有多种加成和稀有度。每通过一张虚空地图，您就可以获得一个传家宝，且区域越高，越可能获得更高稀有度的传家宝。拥有传家宝以后，可以在下方点击图标选中。'], //传家宝
    [/^(\s+)Once you\'ve selected an Heirloom, you can see all of its stats on the right side of this screen.$/, '$1选中传家宝后，右侧将显示它的属性。'], //传家宝
    [/^(\s+)You can only carry a few Heirlooms \(other than the two you have equipped\) back through the Portal with you when you use it.$/, '$1您只能携带有限数量的传家宝(除了您装备的传家宝以外)通过传送门。'], //传家宝
    [/^(\s+)Equipped Shield$/, '$1已装备的盾牌'], //传家宝
    [/^(\s+)Equipped Core$/, '$1已装备的核心'], //传家宝
    [/^(\s+)Equipped Staff$/, '$1已装备的权杖'], //传家宝
    [/^(\s+)Carried$/, '$1携带栏'], //传家宝
    [/^(\s+)Temporary$/, '$1临时栏'], //传家宝
    [/^(\s+)You Found an Heirloom!(\s+)$/, '$1您发现了一个传家宝！$2'], //传家宝
    [/^([0-9a-zA-Z\.\%\s]*)Fire Trap Damage$/, '$1火焰陷阱伤害'], //传家宝
    [/^([0-9a-zA-Z\.\%\s]*)Poison Trap Damage$/, '$1剧毒陷阱伤害'], //传家宝
    [/^([0-9a-zA-Z\.\%\s]*)Lightning Trap Damage$/, '$1闪电陷阱伤害'], //传家宝
    [/^Increases the damage dealt by Lightning Trap, Shocked, and its column boost to Fire and Poison Traps by (.*)%.$/, '将闪电陷阱、震荡效果造成的伤害，及对同一列火焰陷阱和剧毒陷阱的加成增加 $1% 。'], //传家宝
    [/^Increases the damage dealt by Lightning Trap and Shocked by (.*)%.$/, '将闪电陷阱及震荡效果造成的伤害增加 $1% 。'], //传家宝
    [/^([0-9a-zA-Z\.\%\s]*)Runestone Drop Rate$/, '$1符石掉率'], //传家宝
    [/^([0-9a-zA-Z\.\%\s]*)Strength Tower Effect$/, '$1力量塔效果'], //传家宝
    [/^Increases the damage dealt by Fire Traps on the same Floor as a Strength Tower by (.*)%. Does not increase the world bonus to Trimps.$/, '将与力量塔同一行的火焰陷阱伤害增加 $1% 。对力量塔的世界加成无影响。'], //传家宝
    [/^([0-9a-zA-Z\.\%\s]*)Condenser Effect$/, '$1冷凝塔效果'], //传家宝
    [/^Increases the amount of Poison damage compounded by the Condenser Tower by (.*)%. Does not increase the world bonus to Trimps.$/, '将冷凝塔复合的毒伤害增加 $1% 。对冷凝塔的世界加成无影响。'], //传家宝
    [/^([0-9a-zA-Z\.\%\s]*)Metal Drop Rate$/, '$1金属掉落加成'], //传家宝
	[/^([0-9a-zA-Z\.\%\s]*)Food Drop Rate$/, '$1食物掉落加成'], //传家宝
    [/^([0-9a-zA-Z\.\%\s]*)Wood Drop Rate$/, '$1木头掉落加成'], //传家宝
	[/^([0-9a-zA-Z\.\%\s]*)Gem Drop Rate$/, '$1宝石掉落加成'], //传家宝
	[/^([0-9a-zA-Z\.\%\s]*)Fragment Drop Rate$/, '$1碎片掉落加成'], //传家宝
	[/^([0-9a-zA-Z\.\%\s]*)Farmer Efficiency$/, '$1农民效率'], //传家宝
	[/^([0-9a-zA-Z\.\%\s]*)Lumberjack Efficiency$/, '$1伐木工效率'], //传家宝
	[/^([0-9a-zA-Z\.\%\s]*)Miner Efficiency$/, '$1矿工效率'], //传家宝
	[/^([0-9a-zA-Z\.\%\s]*)Dragimp Efficiency$/, '$1脆皮龙宝石效率'], //传家宝
	[/^([0-9a-zA-Z\.\%\s]*)Explorer Efficiency$/, '$1探险家碎片效率'], //传家宝
	[/^([0-9a-zA-Z\.\%\s]*)Scientist Efficiency$/, '$1科学家效率'], //传家宝
	[/^([0-9a-zA-Z\.\%\s]*)Pet \(Fluffy\) Exp$/, '$1绒绒经验值'], //传家宝
    [/^([0-9a-zA-Z\.\%\s]*)Pet \(Scruffy\) Exp$/, '$1污污经验值'], //传家宝
	[/^([0-9a-zA-Z\.\%\s]*)Player Efficiency$/, '$1玩家效率'], //传家宝
	[/^([0-9a-zA-Z\.\%\s]*)Trainer Efficiency$/, '$1训练师效率'], //传家宝
	[/^([0-9a-zA-Z\.\%\s]*)Storage Size$/, '$1存储上限'], //传家宝
    [/^([0-9a-zA-Z\.\%\s]*)Breed Speed$/, '$1脆皮繁殖速度'], //传家宝
	[/^([0-9a-zA-Z\.\%\s]*)Trimp Health$/, '$1脆皮生命值'], //传家宝
	[/^([0-9a-zA-Z\.\%\s]*)Trimp Attack$/, '$1脆皮攻击力'], //传家宝
	[/^([0-9a-zA-Z\.\%\s]*)Trimp Block$/, '$1脆皮格挡'], //传家宝
	[/^([0-9a-zA-Z\.\%\s]*)Crit Damage, additive$/, '$1暴击伤害(效果叠加)'], //传家宝
	[/^([0-9a-zA-Z\.\%\s]*)Crit Chance, additive$/, '$1暴击率(效果叠加)'], //传家宝
	[/^([0-9a-zA-Z\.\%\s]*)Void Map Drop Chance$/, '$1虚空地图掉落概率'], //传家宝
    [/^([0-9a-zA-Z\.\%\s]*)Plaguebringer$/, '$1瘟疫使者效果'], //传家宝
    [/^(.*)% of all non-lethal damage and nature stacks you afflict on your current enemy are copied onto the next enemy. Plaguebringer damage cannot bring an enemy below 5% health, but nature stacks will continue to accumulate.$/, '将对目前敌人造成的所有非致命伤害及累积的三种自然层数的 $1% 对下一个敌人生效。瘟疫使者的伤害效果无法将敌人的生命值降到5%以下，但自然层数无限制。'], //传家宝
    [/^(?!Item)([0-9a-zA-Z\.\%\s]*)Prismatic Shield$/, '$1棱镜护盾'], //传家宝
    [/^([0-9a-zA-Z\.\%\s]*)Gamma Burst$/, '$1伽马爆发'], //传家宝
    [/^Each attack by your Trimps adds 1 stack of Charging. When Charging reaches 5 stacks, your Trimps will release a burst of energy, dealing (.*)% of their attack damage. Stacks reset after releasing a Burst or when your Trimps die.$/, '脆皮每次攻击时增加1层“蓄能”。当蓄能层数到达5层时，脆皮将释放积蓄的能量，对敌人造成 $1% 攻击力的伤害。当能量释放或者脆皮死亡后，层数重置。'], //传家宝
    [/^Time Portal( Mk\. )?([IVXLCDM]*)$/, '时空传送门$1$2'], //挑战界面
    [/^(\s+)Total(\s+)$/, '$1总计$2'], //挑战界面
    [/^(\s+)Current Run(\s+)$/, '$1上次传送后$2'], //挑战界面
    [/^is Z(.*) \(Capped to (.*) by Obsidian\), earning you (.*)% Challenge$/, '为区域$1(被黑曜石限制为区域$2)，使您获得$3%的挑战'], //挑战界面
    [/^is Z(.*) \(Capped to (.*) by Obsidian\), earning you (.*)% extra attack and health, and (.*)% more Helium from all sources.$/, '为区域$1(被黑曜石限制为区域$2)，使您获得$3%的额外攻击力和生命值，以及$4%的额外氦获取量。'], //挑战界面
    [/^is Z(.*), earning you (.*)% Challenge$/, '为区域$1，使您获得$2%的挑战'], //挑战界面
    [/^is Z(.*), earning you (.*)% extra attack and health, and (.*)% more Helium from all sources.$/, '为区域$1，使您获得$2%的额外攻击力和生命值，以及$3%的额外氦获取量。'], //挑战界面
    [/^bonus, and adding (.*)% to your total Challenge$/, '加成，且增加$1%至总挑战'], //挑战界面
    [/^Zones above Z(.*) are worth 5x more Challenge$/, '区域$1以上的区域可以提供5倍的挑战'], //挑战界面
    [/^(.*)Your challenge has been abandoned.$/, '$1您放弃了挑战。'], //挑战界面
    [/^You will gain (.*)% attack and health, and (.*)% Helium$/, '您将获得$1%攻击力和生命值，及$2%的氦获取量'], //挑战界面
    [/^You will gain (.*)% to your bonus$/, '您将获得$1%的加成'], //挑战界面
    [/^s. You will gain (.*)% attack and health, and (.*)% Helium$/, '。您将获得$1%攻击力和生命值，及$2%的氦获取量'], //挑战界面
    [/^for every (.*) Zone(s*) reached.$/, '于每到达$1个区域。'], //挑战界面
    [/^s. You will gain (.*)% attack and health, and (.*)% Helium for every (.*) Zone(s*) reached.$/, '。您将获得$1%攻击力和生命值，及$2%的氦获取量于每到达$1个区域。'], //挑战界面
    [/^Every (.*) Zone(s*) reached,$/, '且每到达$1个区域，'], //挑战界面
    [/^this bonus will increase by (.*)% attack and health, and (.*)% Helium.$/, '以上加成还将增加$1%攻击力和生命值，及$2%的氦获取量。'], //挑战界面
    [/^this bonus will increase by (.*)%.$/, '以上加成还将增加$1%。'], //挑战界面
    [/^You are currently at Zone (.*),$/, '您目前在区域$1，'], //挑战界面
    [/^You are currently at Zone (.*).$/, '您目前在区域$1。'], //挑战界面
    [/^your previous highest for this challenge was Zone (.*). If you abandon the challenge now, you'll add (.*)% to your total Challenge$/, '此挑战您之前最高到达的区域为区域$1。如果您现在放弃挑战，将增加$2%加成到总挑战'], //挑战界面
    [/^your previous highest for this challenge was Zone (.*). If you use the portal now, you'll add (.*)% to your total Challenge$/, '此挑战您之前最高到达的区域为区域$1。如果您现在使用传送门，将增加$2%加成到总挑战'], //挑战界面
    [/^bonus, bringing it to (.*)%.$/, '加成，将它提升到$1%。'], //挑战界面
    [/^bonus, bringing it to (.*)%. Your new Challenge$/, '加成，将它提升到$1%。您的新挑战'], //挑战界面
    [/^bonus will be (.*)%.$/, '加成将变为$1%。'], //挑战界面
    [/^your best for this challenge is Zone (.*). If you abandon the challenge now, your total Challenge$/, '此挑战最高到达的区域为区域$1。如果您现在放弃挑战，您的总挑战'], //挑战界面
    [/^your best for this challenge is Zone (.*). If you use the portal now, your total Challenge$/, '此挑战最高到达的区域为区域$1。如果您现在使用传送门，您的总挑战'], //挑战界面
    [/^bonus will stay at (.*)%.$/, '加成将保持$1%不变。'], //挑战界面
    [/^You'll need to reach at least Zone (.*) before you'll add anything to your current Challenge$/, '至少在到达区域$1后，您才可以增加挑战'], //挑战界面
    [/^bonus of (.*)%.$/, '的加成，目前为$1%。'], //挑战界面
    [/^If you abandon the challenge now, you'll add (.*)% to your Challenge$/, '如果您现在放弃挑战，将增加$1%加成到挑战'], //挑战界面
    [/^If you use the portal now, you'll add (.*)% to your Challenge$/, '如果您现在使用传送门，将增加$1%加成到挑战'], //挑战界面
    [/^bonus, bringing the total to (.*)%.$/, '加成，将总加成变为$1%。'], //挑战界面
    [/^bonus, bringing the total to (.*)%. Your new Challenge$/, '加成，将总加成变为$1%。您的新挑战'], //挑战界面
    [/^(.*)You have completed the$/, '$1您完成了 '], //通用挑战完成消息
    [/^(.*)You have completed the Balance challenge! You have been rewarded with (.*) Helium, and you may repeat the challenge.$/, '$1您完成了平衡挑战！您获取了 $2 氦，现在您又可以重新挑战了。'], //平衡挑战完成信息
	[/^(.*)You can research science again!$/, '$1您又可以进行科学研究了！'], //科学家挑战放弃消息
    [/^(.*)You have completed the 'Meditate' challenge! The dimension has returned to normal, and you have unlocked a new perk!$/, '$1您完成了 冥想 挑战！这个维度恢复到了正常，而且您解锁了一个新的特权！'], //冥想挑战完成消息
    [/^(.*)You have completed the Decay challenge! All stats have been returned to normal, and you can now create more powerful Gardens maps at will!$/, '$1您完成了 衰变 挑战！一切都恢复了正常，而且您可以随意制造更强大的花园地图了！'], //衰变挑战完成消息
    [/^(.*)You have completed the 'Trapper' challenge! Your Trimps now remember how to breed, and you have unlocked a new perk!$/, '$1您完成了 捕手 挑战！您的脆皮想起来如何繁殖了，而且您解锁了一个新的特权！'], //捕手挑战完成消息
    [/^(.*)You have completed the Electricity challenge! You have been rewarded with (.*) Helium, and you may repeat the challenge.$/, '$1您完成了电流挑战！您获取了 $2 氦，现在您又可以重新挑战了。'], //电流挑战完成信息
    [/^(.*)You have completed the 'Frugal' challenge! You can once again find equipment upgrades in maps, and Megabooks now increase gather rates by an extra 10%!$/, '$1您完成了 节俭 挑战！您又可以获得重铸升级了，而且超级升级的资源获取速度额外提升10%！'], //节俭挑战完成信息
    [/^(.*)You have completed the Life challenge! You have been rewarded with (.*) Helium, and you may repeat the challenge.$/, '$1您完成了生命挑战！您获取了 $2 氦，现在您又可以重新挑战了。'], //生命挑战完成信息
    [/^(.*)You have completed the Mapocalypse challenge! You have unlocked the 'Siphonology' Perk, and have been rewarded with (.*) Helium.$/, '$1您完成了天启地图挑战！您解锁了 虹吸学 特权，并且获取了 $2 氦。'], //天启地图挑战完成信息
    [/^(.*)You have completed the 'Coordinate' challenge! The Bad Guys on this world no longer fight together, and have regained their speed. You have unlocked the 'Coordinated' perk!$/, '$1您完成了 协同 挑战！世界上的敌人不再协同作战了，并且又可以获得快速效果了。您解锁了 协同 特权！'], //协同挑战完成信息
    [/^Bionic Wonderland((?!level)[\s\(ZIVXLCDM]*)$/, '仿生仙境$1'], //粉碎挑战等
    [/^(.*)You have completed the Crushed challenge! You have been rewarded with (.*) Helium.$/, '$1您完成了粉碎挑战！您获取了 $2 氦。'], //粉碎挑战完成信息
    [/^(.*)You have completed the Slow challenge! You have found the patterns for the Gambeson and the Arbalest!$/, '$1您完成了迟缓挑战！您学会了制造棉甲和强弩！'], //迟缓挑战完成信息
    [/^(.*)You have completed the Nom challenge! You have been rewarded with (.*) Helium, and you may repeat the challenge.$/, '$1您完成了美味挑战！您获取了 $2 氦，现在您又可以重新挑战了。'], //美味挑战完成信息
    [/^(.*)You have completed the Mapology challenge! You have unlocked the 'Resourceful' Perk! Cheaper stuff!$/, '$1您完成了地图学挑战！您解锁了 足智多谋 特权！物美价廉！'], //地图学挑战完成信息
    [/^(.*)You have completed the Toxicity challenge! You have been rewarded with (.*) Helium, and you may repeat the challenge.$/, '$1您完成了毒性挑战！您获取了 $2 氦，现在您又可以重新挑战了。'], //毒性挑战完成信息
    [/^(.*)You have completed the Devastation challenge! Your world has been returned to normal, and you have unlocked the Overkill perk!$/, '$1您完成了破坏挑战！世界恢复了正常，而且您解锁了 超杀 特权！'], //破坏挑战完成信息
    [/^(.*)You have completed the Watch challenge! You have been rewarded with (.*) Helium, and you may repeat the challenge.$/, '$1您完成了守望挑战！您获取了 $2 氦，现在您又可以重新挑战了。'], //守望挑战完成信息
    [/^(.*)You have completed the Lead challenge! You have been rewarded with (.*) Helium, and you may repeat the challenge.$/, '$1您完成了领导挑战！您获取了 $2 氦，现在您又可以重新挑战了。'], //领导挑战完成信息
    [/^Travel to a dimension where enemies have 3X attack and Corruption runs rampant, beginning at Z60. The Corruption in this dimension grants helium, but 50% less than normal. Improbabilities and Void Maps will still not gain strength or double reward until Z(\d+). Completing$/, '前往一个敌人攻击力为3倍，且腐化更加泛滥，从区域60就开始的维度。此维度中腐化格子给予氦，但只有正常维度的一半。乌有者及虚空地图直到区域$1之前，既不会因此变强，也不会有双倍奖励。在此挑战激活的前提下通过 '], //腐化挑战等
    [/^You have the Corrupted challenge active. Travel to a dimension where enemies have 3X attack and Corruption runs rampant, beginning at Z60. The Corruption in this dimension grants helium, but 50% less than normal. Improbabilities and Void Maps will still not gain strength or double reward until Z(\d+). Completing$/, '您目前正在进行腐化挑战。前往一个敌人攻击力为3倍，且腐化更加泛滥，从区域60就开始的维度。此维度中腐化格子给予氦，但只有正常维度的一半。乌有者及虚空地图直到区域$1之前，既不会因此变强，也不会有双倍奖励。在此挑战激活的前提下通过 '], //腐化挑战等
    [/^(.*)You have completed the Corrupted challenge! You have been rewarded with (.*) Helium, and you may repeat the challenge.$/, '$1您完成了腐化挑战！您获取了 $2 氦，现在您又可以重新挑战了。'], //腐化挑战完成信息
    [/^(.*)You have completed the Domination challenge! You have been rewarded with (.*) Helium, and you may repeat the challenge.$/, '$1您完成了统治挑战！您获取了 $2 氦，现在您又可以重新挑战了。'], //统治挑战完成信息
    [/^Against your better judgement, travel to a dimension that's simply just not very friendly. Liquimps are unable to liquify, enemies have (.*)x attack and health, and equipment is (.*)x more expensive. Every 10 Zones, enemy attack and health will increase by another 10x.$/, '前往一个对您完全不友好的维度，您知道的，这不是什么好主意。此维度中无法进行液化，敌人的攻击力和生命值为正常的 $1 倍，装备成本为正常的 $2 倍。每通过10层，敌人的攻击力和生命值还会再增加10倍。'], //抹杀挑战等
    [/^You have the Obliterated challenge active. "Against your better judgement, travel to a dimension that's simply just not very friendly. Liquimps are unable to liquify, enemies have (.*)x attack and health, and equipment is (.*)x more expensive. Every 10 Zones, enemy attack and health will increase by another 10x.$/, '您目前正在进行抹杀挑战。前往一个对您完全不友好的维度，您知道的，这不是什么好主意。此维度中无法进行液化，敌人的攻击力和生命值为正常的 $1 倍，装备成本为正常的 $2 倍。每通过10层，敌人的攻击力和生命值还会再增加10倍。'], //抹杀挑战等
    [/^If you thought Obliterated was not very friendly, wait until you see this dimension! Liquimps are unable to liquify, enemies have (.*)x attack and health, and equipment is (.*)x more expensive. Every 2 Zones, enemy attack and health will increase by another 3x.$/, '如果抹杀挑战已经让您感受到世界的恶意，那么这个挑战可能会让您怀疑人生。此维度中无法进行液化，敌人的攻击力和生命值为正常的 $1 倍，装备成本为正常的 $2 倍。每通过2层，敌人的攻击力和生命值还会再变为之前的3倍。'], //灭绝挑战等
    [/^You have the Eradicated challenge active. "If you thought Obliterated was not very friendly, wait until you see this dimension! Liquimps are unable to liquify, enemies have (.*)x attack and health, and equipment is (.*)x more expensive. Every 2 Zones, enemy attack and health will increase by another 3x.$/, '您目前正在进行灭绝挑战。如果抹杀挑战已经让您感受到世界的恶意，那么这个挑战可能会让您怀疑人生。此维度中无法进行液化，敌人的攻击力和生命值为正常的 $1 倍，装备成本为正常的 $2 倍。每通过2层，敌人的攻击力和生命值还会再变为之前的3倍。'], //灭绝挑战等
    [/^(.*)You have completed the Unbalance challenge! You have unlocked the Equality Perk!$/, '$1您完成了不平衡挑战！您解锁了 平等 特权！'], //不平衡挑战完成信息
    [/^(.*)Oh no, you failed the Bublé challenge! You have been rewarded with (.*) extra Radon, and you may try again.$/, '$1太糟了，布累挑战失败了！您获取了 $2 氡，现在您又可以重新挑战了。'], //布累挑战失败信息
    [/^(.*)You have completed the Bublé challenge! You're a hero among Trimps! You have been rewarded with (.*) extra Radon, and you may repeat the challenge.$/, '$1您完成了布累挑战！您是脆皮英雄！您获取了 $2 氡，现在您又可以重新挑战了。'], //布累挑战成功信息
    [/^Your Trimps have (\d+) Duel Points.$/, '脆皮有 $1 点决斗点数。'], //决斗挑战等
    [/^The Bad Guys have (\d+) Duel Points.$/, '敌人有 $1 点决斗点数。'], //决斗挑战等
    [/^Your Trimps have (\d+) Duel Points. Your Trimps have 3x attack for being over 50 points.$/, '脆皮有 $1 点决斗点数。因为脆皮决斗点数大于50，它们获得了3倍攻击力。'], //决斗挑战等
    [/^The Bad Guys have (\d+) Duel Points. The Bad Guys have 3x attack for being over 50 points.$/, '敌人有 $1 点决斗点数。因为敌人决斗点数大于50，它们获得了3倍攻击力。'], //决斗挑战等
    [/^Your Trimps have (\d+) Duel Points. Your Trimps always attack first and have 10x health for being below 10 points.$/, '脆皮有 $1 点决斗点数。因为脆皮决斗点数小于10，它们获得了抢先攻击的效果和10倍生命值。'], //决斗挑战等
    [/^The Bad Guys have (\d+) Duel Points. The Bad Guys always attack first and have 10x health for being below 10 points.$/, '敌人有 $1 点决斗点数。因为敌人决斗点数小于10，它们获得了抢先攻击的效果和10倍生命值。'], //决斗挑战等
    [/^Your Trimps have (\d+) Duel Points. Your Trimps have 10x health for being below 20 points.$/, '脆皮有 $1 点决斗点数。因为脆皮决斗点数小于20，它们获得了10倍生命值。'], //决斗挑战等
    [/^The Bad Guys have (\d+) Duel Points. The Bad Guys have 10x health for being below 20 points.$/, '敌人有 $1 点决斗点数。因为敌人决斗点数小于20，它们获得了10倍生命值。'], //决斗挑战等
    [/^Your Trimps have (\d+)% Crit Chance based on enemy stacks.$/, '根据敌人的决斗点数，脆皮获得 $1 点暴击概率。'], //决斗挑战等
    [/^The Bad Guys have (\d+)% Crit Chance based on your stacks.$/, '根据脆皮的决斗点数，敌人获得 $1 点暴击概率。'], //决斗挑战等
    [/^(.*)You have completed the Duel challenge! You have unlocked the Criticality Perk!$/, '$1您完成了决斗挑战！您解锁了 暴击限界 特权！'], //决斗挑战完成信息
    [/^(.*)You have completed the Melt challenge! You have been rewarded with (.*) Radon, and you may repeat the challenge.$/, '$1您完成了熔化挑战！您获取了 $2 氡，现在您又可以重新挑战了。'], //熔化挑战完成信息
    [/^(.*)You have completed the 'Trappapalooza' challenge! Your Trimps now remember how to breed, and you have unlocked a new perk!$/, '$1您完成了捕手道达人挑战！您的脆皮想起来如何繁殖了，而且您解锁了一个新的特权！'], //捕手道达人挑战完成信息
    [/^(.*)You have completed the Quagmire challenge! You have gained an extra (.*) Radon, and your world has been returned to normal.$/, '$1您完成了泥淖挑战！您额外获取了 $2 氡，世界恢复了正常。'], //泥淖挑战完成信息
    [/^Your Trimps are Motivated, increasing all Loot gained \(including Radon\) by (.*)%.$/, '脆皮们积极前进，所有资源获取(包括氡)增加 $1% 。'], //泥淖挑战等
    [/^Your Trimps are exhausted, having only (.*)% of their normal damage and breed speed.$/, '脆皮们疲惫不堪，攻击力和繁殖速度只有正常的 $1%。'], //泥淖挑战等
    [/^Your Trimps are not at all exhausted, and have (.*)% more damage and breed speed.$/, '脆皮们完全不疲惫，攻击力和繁殖速度增加 $1%。'], //泥淖挑战等
    [/^(.*)You have completed the Wither challenge! Your world has been returned to normal, and you have unlocked the Tenacity perk!$/, '$1您完成了凋零挑战！世界恢复了正常，而且您解锁了 坚持 特权！'], //凋零挑战完成信息
    [/^Your Trimps have (\d+) stack(s*) of Hardened, increasing their Health by (.*)%.$/, '脆皮有 $1 层硬化，增加了 $3% 生命值。'], //凋零挑战等
    [/^The Bad Guys have (\d+) stack(s*) of Horror, increasing their Attack by (.*)%.$/, '敌人有 $1 层恐惧，增加了 $3% 攻击力。'], //凋零挑战等
    [/^(.*)You have completed the Revenge challenge! Your world has been returned to normal, and you have unlocked the Overkill perk!$/, '$1您完成了复仇挑战！世界恢复了正常，而且您解锁了 超杀 特权！'], //复仇挑战成功信息
    [/^(.*)You have failed the Revenge Challenge! Better luck next time!$/, '$1复仇挑战失败了！祝您下次好运！'], //复仇挑战失败信息
    [/^Your Trimps have been killed by enemy overkill damage (\d+) time(s*)$/, '脆皮因敌人溢出伤害而死亡了 $1 次'], //复仇挑战等
    [/^Your Trimps have (.*)x Attack and Health, but you will fail the challenge if they get (\d+) more stack(s*)!$/, '脆皮的攻击力和生命值变为 $1 倍，但如果再增加 $2 次，那么挑战将失败！'], //复仇挑战等
    [/^Quest: Quintuple \(x5\) your food. Progress: Quest Complete!$/, '任务内容：将食物变为5倍。进度：任务完成！'], //任务挑战等
    [/^Quest: Quintuple \(x5\) your food. Progress: (.*) \/ (.*) food$/, '任务内容：将食物变为5倍。进度： $1 / $2 食物'], //任务挑战等
    [/^Quest: Quintuple \(x5\) your wood. Progress: Quest Complete!$/, '任务内容：将木头变为5倍。进度：任务完成！'], //任务挑战等
    [/^Quest: Quintuple \(x5\) your wood. Progress: (.*) \/ (.*) wood$/, '任务内容：将木头变为5倍。进度： $1 / $2 木头'], //任务挑战等
    [/^Quest: Quintuple \(x5\) your metal. Progress: Quest Complete!$/, '任务内容：将金属变为5倍。进度：任务完成！'], //任务挑战等
    [/^Quest: Quintuple \(x5\) your metal. Progress: (.*) \/ (.*) metal$/, '任务内容：将金属变为5倍。进度： $1 / $2 金属'], //任务挑战等
    [/^Quest: Quintuple \(x5\) your gems. Progress: Quest Complete!$/, '任务内容：将宝石变为5倍。进度：任务完成！'], //任务挑战等
    [/^Quest: Quintuple \(x5\) your gems. Progress: (.*) \/ (.*) gems$/, '任务内容：将宝石变为5倍。进度： $1 / $2 宝石'], //任务挑战等
    [/^Quest: Quintuple \(x5\) your science. Progress: Quest Complete!$/, '任务内容：将科学点变为5倍。进度：任务完成！'], //任务挑战等
    [/^Quest: Quintuple \(x5\) your science. Progress: (.*) \/ (.*) science$/, '任务内容：将科学点变为5倍。进度： $1 / $2 科学点'], //任务挑战等
    [/^Quest: Double your food. Progress: Quest Complete!$/, '任务内容：将食物变为2倍。进度：任务完成！'], //任务挑战等
    [/^Quest: Double your food. Progress: (.*) \/ (.*) food$/, '任务内容：将食物变为2倍。进度： $1 / $2 食物'], //任务挑战等
    [/^Quest: Double your wood. Progress: Quest Complete!$/, '任务内容：将木头变为2倍。进度：任务完成！'], //任务挑战等
    [/^Quest: Double your wood. Progress: (.*) \/ (.*) wood$/, '任务内容：将木头变为2倍。进度： $1 / $2 木头'], //任务挑战等
    [/^Quest: Double your metal. Progress: Quest Complete!$/, '任务内容：将金属变为2倍。进度：任务完成！'], //任务挑战等
    [/^Quest: Double your metal. Progress: (.*) \/ (.*) metal$/, '任务内容：将金属变为2倍。进度： $1 / $2 金属'], //任务挑战等
    [/^Quest: Double your gems. Progress: Quest Complete!$/, '任务内容：将宝石变为2倍。进度：任务完成！'], //任务挑战等
    [/^Quest: Double your gems. Progress: (.*) \/ (.*) gems$/, '任务内容：将宝石变为2倍。进度： $1 / $2 宝石'], //任务挑战等
    [/^Quest: Double your science. Progress: Quest Complete!$/, '任务内容：将科学点变为2倍。进度：任务完成！'], //任务挑战等
    [/^Quest: Double your science. Progress: (.*) \/ (.*) science$/, '任务内容：将科学点变为2倍。进度： $1 / $2 科学点'], //任务挑战等
    [/^Quest: Complete 5 Maps at Zone level. Progress: Quest Complete!$/, '任务内容：通过5张等级为区域层数的地图。进度：任务完成！'], //任务挑战等
    [/^Quest: Complete 5 Maps at Zone level. Progress: (.*) \/$/, '任务内容：通过5张等级为区域层数的地图。进度： $1 /'], //任务挑战等
    [/^Quest: One-shot 5 world enemies \(Overkill is disabled in World until complete\). Progress: Quest Complete!$/, '任务内容：秒杀世界上的5名敌人(直到任务完成为止，超杀在世界上暂时失效)。进度：任务完成！'], //任务挑战等
    [/^Quest: One-shot 5 world enemies \(Overkill is disabled in World until complete\). Progress: (.*) \/$/, '任务内容：秒杀世界上的5名敌人(直到任务完成为止，超杀在世界上暂时失效)。进度： $1 /'], //任务挑战等
    [/^(.*)You have completed your quest! You've completed (.*) \/ (.*) quests.$/, '$1任务完成！您已经完成了 $2 / $3 个任务。'], //任务挑战等
    [/^(.*)Oh no, you failed your quest! You've completed (.*) \/ (.*) quests.$/, '$1任务失败，真糟糕！您已经完成了 $2 / $3 个任务。'], //任务挑战等
    [/^(.*)You have a new quest!$/, '$1新的任务来了！内容为 '], //任务挑战等
    [/^(.*)You have completed the Quest challenge! Your World has been returned to normal and you have unlocked the Greed Perk!$/, '$1您完成了任务挑战！世界恢复了正常，而且您解锁了 贪婪 特权！'], //任务挑战完成信息
    [/^Decreases all Enemy Attack by (.*)%. You currently have (.*)% to Enemy Attack.$/, '减少敌人 $1% 攻击力。您目前使敌人攻击力变化： $2% 。'], //考古学挑战等
    [/^Increases all Attack by (.*)%. You currently have (.*)% to Attack.$/, '增加脆皮 $1% 攻击力。您目前使脆皮攻击力变化： $2% 。'], //考古学挑战等
    [/^Increases all Radon by (.*)%. You currently have (.*)% to Radon.$/, '增加 $1% 氡获取量。您目前使氡获取量变化： $2% 。'], //考古学挑战等
    [/^Increases all Resource Gain \(Food, Wood, Metal, Science, and Gems\) by (.*)%. You currently have (.*)% to Resource Gain.$/, '增加 $1% 非氡资源获取量(食物、木头、金属、科学点和宝石)。您目前使非氡资源获取量变化： $2% 。'], //考古学挑战等
    [/^Increases all Breed Speed by (.*)%. You currently have (.*)% to Breed Speed.$/, '增加 $1% 繁殖速度。您目前使繁殖速度变化： $2% 。'], //考古学挑战等
    [/^You have discovered (\d+) of these Relics and (\d+) total Relics. Each Relic has a max of 50 positive levels at a time. Cost increases based on total purchased Relics.$/, '您一共发现了 $1 个此类型的遗物，总共发现了 $2 个遗物。每个遗物最大为50级，且花费随着遗物发现总数而上升。'], //考古学挑战等
    [/^(.*)You have completed the Archaeology challenge! You have gained an extra (.*) Radon, and your world has been returned to normal.$/, '$1您完成了考古学挑战！您额外获取了 $2 氡，世界恢复了正常。'], //考古学挑战完成信息
    [/^You have completed Mayhem (\d+) time(s*). Your Trimps have \+(.*)% Attack, Health, and Radon, and your next run of Mayhem will spawn Bad Guys with (.*)x Attack and Health.$/, '您共完成了 $1 次暴乱挑战。挑战总奖励为增加 $3% 脆皮攻击力、生命值、氡获取量，下轮的敌人攻击力和生命值将增加 $4 倍。'], //暴乱挑战等
    [/^The Final Enemy of this Zone has (\d+) stacks of Mayhem, granting \+(.*)% Damage and Health. Complete Maps to lower these stacks.$/, '此区域最后一格的敌人目前有 $1 层暴乱，增加 $2% 攻击力和生命值。通过地图来减少层数。'], //暴乱挑战等
    [/^(.*)You have completed the Mayhem Challenge! Your Trimps have gained \+(.*)% Radon in Universe 2 and Damage and Health in Universe 1 and 2, and future runs of this Challenge will be 3x more difficult. You have now completed Mayhem (\d+) time(s*). Your new total Mayhem bonus is \+$/, '$1您完成了暴乱挑战！宇宙2中的氡，及宇宙1和宇宙2中的脆皮攻击力和生命值增加了 $2% ，后续挑战的难度将变为现在的3倍。您共完成了 $3 次暴乱挑战。暴乱挑战总奖励为 '], //暴乱挑战完成信息
    [/^Your Trimps learn to harvest special Herbs while collecting Food! Increases Trimp Attack by a number based on your total stored food. Grants \+30% Attack at (.*) Food, or \+300% at (.*). At your current total of (.*) Food,$/, '您的脆皮现在可以在采集食物时同时采集百草！根据食物存储量增加攻击力。在 $1 食物时增加30%攻击力，在 $2 食物时增加300%攻击力。您当前共有 $3 食物，'], //神农专精
	[/^you are gaining \+([\d+\.]+)% Trimp Attack$/, '您获得了 +$1% 攻击力'], //神农专精
	[/^you would gain \+([\d+\.]+)% Trimp Attack$/, '您可获得 +$1% 攻击力'], //神农专精
	[/^Each cleared Zone through Z(\d+) \(half of your highest Zone reached\) will drop all available equipment prestiges from maps.$/, '直到区域 $1 (最高通过区域的一半)之前，所有通过的区域都可以掉落地图中所有的装备重铸升级。'], //锻铁术 I专精
    [/^Reduce the time in between fights and attacks by an additional 100ms through Z(\d+) \((\d+)% of your highest Zone reached\).$/, '直到区域 $1 (最高通过区域的$2%)之前，将战斗间隔和攻击间隔减少100ms。'], //风驰电掣 II专精
	[/^Each cleared Zone through Z(\d+) \(75% of your highest Zone reached\) will drop all available equipment prestiges from maps.$/, '直到区域 $1 (最高通过区域的75%)之前，所有通过的区域都可以掉落地图中所有的装备重铸升级。'], //锻铁术 II专精
	[/^Each cleared Zone through Z(\d+) \(90% of your highest Zone reached\) will drop all available equipment prestiges from maps.$/, '直到区域 $1 (最高通过区域的90%)之前，所有通过的区域都可以掉落地图中所有的装备重铸升级。'], //锻铁术 III专精
	[/^Increase your Liquification bonus by 5%, as if you had completed 1 extra Spire. You have completed ([\d+\.]+) unique Spire(s*), giving you ([\d+\.]+)% of your highest Zone reached \(through Z(\d+)\). This mastery (is increasing|would increase)  your bonus to ([\d+\.]+)% of your highest Zone reached \(through Z(\d+)\).$/, '增加液化效果 5% ，等同于额外完成了1个尖塔。您完成了 $1 个尖塔，液化效果持续到最高通过区域的 $3% (区域 $4 )，此专精将液化效果提高到最高通过区域的 $6% (区域 $7 )。'], //液化 I专精
	[/^Increase your Liquification bonus by 5%, as if you had completed 1 extra Spire. Counting your Fluffy bonus as half of a Spire, you have completed ([\d+\.]+) unique Spire(s*), giving you ([\d+\.]+)% of your highest Zone reached \(through Z(\d+)\). This mastery (is increasing|would increase)  your bonus to ([\d+\.]+)% of your highest Zone reached \(through Z(\d+)\).$/, '增加液化效果 5% ，等同于额外完成了1个尖塔。加上绒绒的半个尖塔额外加成，您完成了 $1 个尖塔，液化效果持续到最高通过区域的 $3% (区域 $4 )，此专精将液化效果提高到最高通过区域的 $6% (区域 $7 )。'], //液化 I专精
	[/^Increase your Liquification bonus by 5%, as if you had completed 1 extra Spire. Counting your two Fluffy bonuses as one Spire, you have completed ([\d+\.]+) unique Spire(s*), giving you ([\d+\.]+)% of your highest Zone reached \(through Z(\d+)\). This mastery (is increasing|would increase)  your bonus to ([\d+\.]+)% of your highest Zone reached \(through Z(\d+)\).$/, '增加液化效果 5% ，等同于额外完成了1个尖塔。加上绒绒的1个尖塔额外加成，您完成了 $1 个尖塔，液化效果持续到最高通过区域的 $3% (区域 $4 )，此专精将液化效果提高到最高通过区域的 $6% (区域 $7 )。'], //液化 I专精
    [/^last Portal,  (earning you a bonus of|which would earn you a bonus of) (.*)% extra Helium and (\d+) Void Maps.$/, '，自上次传送后氦获得 $2% 额外的加成，并且获得 $3 张虚空地图。'], //虚空特化 I专精
    [/^last Portal,  (earning you a bonus of|which would earn you a bonus of) (.*)% extra Radon and (\d+) Void Maps.$/, '，自上次传送后氡获得 $2% 额外的加成，并且获得 $3 张虚空地图。'], //虚空特化 I专精
	[/^Increase your Liquification bonus by another 5%, as if you had completed 1 extra Spire. Counting Liquification I as one Spire, you have completed the equivalent of ([\d+\.]+) unique Spire(s*), giving you ([\d+\.]+)% of your highest Zone reached \(through Z(\d+)\). This mastery (is increasing|would increase)  your bonus to ([\d+\.]+)% of your highest Zone reached \(through Z(\d+)\).$/, '再增加液化效果 5% ，等同于额外完成了1个尖塔。加上液化 I的1个尖塔额外加成，您已相当于完成了 $1 个尖塔，液化效果持续到最高通过区域的 $3% (区域 $4 )，此专精将液化效果提高到最高通过区域的 $6% (区域 $7 )。'], //液化 II专精
	[/^Increase your Liquification bonus by another 5%, as if you had completed 1 extra Spire. Counting Liquification I as one Spire and your Fluffy bonus as half of a Spire, you have completed the equivalent of ([\d+\.]+) unique Spire(s*), giving you ([\d+\.]+)% of your highest Zone reached \(through Z(\d+)\). This mastery (is increasing|would increase)  your bonus to ([\d+\.]+)% of your highest Zone reached \(through Z(\d+)\).$/, '再增加液化效果 5% ，等同于额外完成了1个尖塔。加上液化 I的1个尖塔额外加成和绒绒的半个尖塔额外加成，您已相当于完成了 $1 个尖塔，液化效果持续到最高通过区域的 $3% (区域 $4 )，此专精将液化效果提高到最高通过区域的 $6% (区域 $7 )。'], //液化 II专精
	[/^Increase your Liquification bonus by another 5%, as if you had completed 1 extra Spire. Counting Liquification I as one Spire and your two Fluffy bonuses as another, you have completed the equivalent of ([\d+\.]+) unique Spire(s*), giving you ([\d+\.]+)% of your highest Zone reached \(through Z(\d+)\). This mastery (is increasing|would increase)  your bonus to ([\d+\.]+)% of your highest Zone reached \(through Z(\d+)\).$/, '再增加液化效果 5% ，等同于额外完成了1个尖塔。加上液化 I的1个尖塔额外加成和绒绒的1个尖塔额外加成，您已相当于完成了 $1 个尖塔，液化效果持续到最高通过区域的 $3% (区域 $4 )，此专精将液化效果提高到最高通过区域的 $6% (区域 $7 )。'], //液化 II专精
    [/^last Portal, (earning you a bonus of|which would earn you a bonus of) (\d+) more Void Maps \((\d+) including Void Specialization I\).$/, '，自上次传送后获得 $2 张虚空地图(加上虚空特化 I的效果，共可获得 $3 张虚空地图)。'], //虚空特化 II专精
    [/^Fluffy gains \+25% more Exp per Zone for each completed Evolution. Fluffy has Evolved (\d+) time(s*), (earning|which would earn) you a bonus of \+(.*)% Exp.$/, '绒绒每进化一次，每区域就多获得25%经验值。绒绒目前进化了 $1 次，多获得 $4% 经验值。'], //绒绒专注专精
    [/^Scruffy gains \+25% more Exp per Zone for each completed Evolution. Scruffy has Evolved (\d+) time(s*), (earning|which would earn) you a bonus of \+(.*)% Exp.$/, '污污每进化一次，每区域就多获得25%经验值。污污目前进化了 $1 次，多获得 $4% 经验值。'], //污污专注专精
    [/^Your Shield currently has a bonus of ([\d+\.]+)%, so this Mastery (is giving you|would give you) \+([\d+\.]+)% additional Crit Chance.$/, '您的盾牌目前暴击率为 $1% ，因此该专精额外增加 $3% 暴击率。'], //蓄力暴击专精
    [/^2. If Fluffy's level 6 bonus is active, allows Void Maps to infinitely stack. HOWEVER, this requires  the bonus Helium does not increase past the amount that Fluffy can normally stack, which for you would cap the bonus to a (\d+) stack. To clarify, a 100 stack or a (\d+) stack map would both grant (.*)% bonus Helium to each map in the stack, but the entire stack will still be completed instantly and each map in the stack will receive the maximum bonus.$/, '2. 只要绒绒的6级加成激活了，虚空地图就可以无限融合。但前提条件是氦加成不能超过绒绒融合的上限。对您来说，这个上限为 $1 次。换句话说，融合100次的虚空地图或者融合 $2 次的虚空地图都给予每张虚空地图 $3% 的氦加成，不过，所有融合后的地图仍然可以一起完成，并且融合的每张地图都可以获得最大的加成。'], //虚空大师专精
    [/^2. If Fluffy's level 6 bonus is active, allows Void Maps to infinitely stack. HOWEVER, this requires  the bonus Radon does not increase past the amount that Fluffy can normally stack, which for you would cap the bonus to a (\d+) stack. To clarify, a 100 stack or a (\d+) stack map would both grant (.*)% bonus Radon to each map in the stack, but the entire stack will still be completed instantly and each map in the stack will receive the maximum bonus.$/, '2. 只要绒绒的6级加成激活了，虚空地图就可以无限融合。但前提条件是氡加成不能超过绒绒融合的上限。对您来说，这个上限为 $1 次。换句话说，融合100次的虚空地图或者融合 $2 次的虚空地图都给予每张虚空地图 $3% 的氡加成，不过，所有融合后的地图仍然可以一起完成，并且融合的每张地图都可以获得最大的加成。'], //虚空大师专精
    [/^On your current run, you have cleared through Spire (.*), so this Mastery is granting (\d+) extra Healthy cell(s*). On your current Zone, you're finding (\d+) Healthy cells.$/, '自上次传送后您通过了尖塔 $1 ，此专精可获得 $2 个额外健康格子。目前区域中有 $4 个健康格子。'], //健康之力 II专精
    [/^Hyperspeed II's bonus will now function up to 75% of your Highest Zone Reached \(through Z(\d+)\) rather than a measly$/, '风驰电掣 II专精的效果上限提升为最高通过区域的75%(区域 $1 )，而不是只有之前的'], //液化 III专精
    [/^Hyperspeed II's bonus will also now function up to 75% of your Highest Zone Reached \(through Z(\d+)\) rather than a measly$/, '风驰电掣 II专精的效果上限同时提升为最高通过区域的75%(区域 $1 )，而不是只有之前的'], //液化 III专精
	[/^Counting Liquification I and II as two Spires, you have completed the equivalent of ([\d+\.]+) unique Spire(s*), giving you ([\d+\.]+)% of your highest Zone reached \(through Z(\d+)\). This mastery (is increasing|would increase)  your bonus to ([\d+\.]+)% of your highest Zone reached \(through Z(\d+)\).$/, '加上液化 I和液化 II的2个尖塔额外加成，您已相当于完成了 $1 个尖塔，液化效果持续到最高通过区域的 $3% (区域 $4 )，此专精将液化效果提高到最高通过区域的 $6% (区域 $7 )。'], //液化 III专精
	[/^Counting Liquification I and II as two Spires and your Fluffy bonus as half of a Spire, you have completed the equivalent of ([\d+\.]+) unique Spire(s*), giving you ([\d+\.]+)% of your highest Zone reached \(through Z(\d+)\). This mastery (is increasing|would increase)  your bonus to ([\d+\.]+)% of your highest Zone reached \(through Z(\d+)\).$/, '加上液化 I和液化 II的2个尖塔额外加成和绒绒的半个尖塔额外加成，您已相当于完成了 $1 个尖塔，液化效果持续到最高通过区域的 $3% (区域 $4 )，此专精将液化效果提高到最高通过区域的 $6% (区域 $7 )。'], //液化 III专精
	[/^Counting Liquification I and II as two Spires and your two Fluffy bonuses as another, you have completed the equivalent of ([\d+\.]+) unique Spire(s*), giving you ([\d+\.]+)% of your highest Zone reached \(through Z(\d+)\). This mastery (is increasing|would increase)  your bonus to ([\d+\.]+)% of your highest Zone reached \(through Z(\d+)\).$/, '加上液化 I和液化 II的2个尖塔额外加成和绒绒的1个尖塔额外加成，您已相当于完成了 $1 个尖塔，液化效果持续到最高通过区域的 $3% (区域 $4 )，此专精将液化效果提高到最高通过区域的 $6% (区域 $7 )。'], //液化 III专精
    [/^bonus of (.*)%. Removing this Mastery would reduce your bonus by (.*)%, bringing your total Challenge$/, '的加成为 $1% 。去掉这个专精以后加成将减少 $2% ， 总挑战'], //梅斯梅尔专精
    [/^bonus down to (.*)%.$/, '加成减少为 $1% 。'], //梅斯梅尔专精
    [/^bonus of (.*)%. Purchasing this Mastery would increase your bonus by (.*)%, bringing your total Challenge$/, '的加成为 $1% 。购买这个专精以后加成将增加 $2% ， 总挑战'], //梅斯梅尔专精
    [/^bonus up to (.*)%.$/, '加成增加为 $1% 。'], //梅斯梅尔专精
    [/^Reduce the Zone that Fluffy can start earning Experience at by 3. With (\d+) level(s*) in Classy, Fluffy will start earning Experience at Z(\d+).$/, '绒绒提前3个区域开始获得经验值。上等特权提升 $1 级后，绒绒将从区域 $3 开始获得经验值。'], //上等特权
	[/^Use your experiences in understanding the attention span of Trimps to increase the damage dealt by all soldiers based on how long it took to get an army together. Increases damage by 2% per level per second up to (\d+) seconds. Maximum of 10 levels.$/, '脆皮的注意力持续时间您已了如指掌，所以您可以利用它增加脆皮的攻击力。军队每需要1秒进行繁殖，每级预期特权就可以使脆皮增加2%攻击力。繁殖时间上限为 $1 秒。最高10级。'], //预期特权
    [/^Increase Helium gain by (.*)%.$/, '使氦的获取量增加$1%。'], //金色升级等
    [/^Increase Radon gain by (.*)%.$/, '使氡的获取量增加$1%。'], //金色升级等
    [/^Increase Trimp attack and health by (.*)%.$/, '使脆皮的攻击力和生命值增加$1%。'], //金色升级等
    [/^Decrease the minimum amount of enemies between Void Map drops by (.*)%.$/, '使每张虚空地图掉落所需的敌人数减少$1%。'], //金色升级等
    [/^Your Generator currently grants (.*) Max Trimps per tick at (.*) fuel \(the amount of fuel needed to tick\). Purchase this to increase the Generator's efficiency by 10% \(additive$/, '您的维度发生器目前每次消耗 $2 燃料(每次消耗的燃料数量)，并可以获得 $1 脆皮上限。升级此项可以维度发生器的工作效率增加10%(叠加'], //维度发生器等
    [/^Your Generator can currently store (.*) fuel. Purchase this to increase the fuel capacity by (.*). The more fuel you have in storage, the more housing you'll create per tick!$/, '您的维度发生器目前可以存储 $1 燃料，升级后可以多存储 $2 。存储的燃料越多，每次产生的住房也就越多！'], //维度发生器等
    [/^The Magma at Zone (\d+) contains 0.2 fuel per cell, and each Zone after that can drop 0.01 more. Your generator can currently only harvest a max of (.*) per cell, meaning some fuel after Z(.*) will be unharvestable. Purchase this upgrade to increase the amount you can harvest per cell by$/, '岩浆从区域 $1 开始，每个格子有0.2燃料，且之后每多一个区域，就多0.01燃料。您的维度发生器目前在每个格子最多可以获得 $2 燃料，这意味着从区域 $3 开始，部分燃料会被浪费掉。升级此项后可以将每个格子获取燃料的上限增加 '], //维度发生器等
    [/^Your current Overclocker effectiveness is (.*)%. Next level, your Overclocker effectiveness will be (.*)%.$/, '您的超频效果目前为 $1% 。下一级的超频效果为 $2% 。'], //维度发生器等
    [/^(.*) Trimp(s*) just ceased to be.$/, '$1个脆皮去世了。'], //死亡消息
    [/^(.*) Trimp(s*) just bit the dust.$/, '$1个脆皮战死沙场了。'], //死亡消息
    [/^(.*) Trimp(s*) just took a dirt nap.$/, '$1个脆皮入土为安了。'], //死亡消息
    [/^(.*) Trimp(s*) just expired.$/, '$1个脆皮逝世了。'], //死亡消息
    [/^(.*) Trimp(s*) just kicked the bucket.$/, '$1个脆皮翘辫子了。'], //死亡消息
    [/^(.*) Trimp(s*) just evaporated.$/, '$1个脆皮消失了。'], //死亡消息
    [/^(.*) Trimp(s*) just needed more armor.$/, '$1个脆皮护甲不足，没了。'], //死亡消息
    [/^(.*) Trimp(s*) just exploded.$/, '$1个脆皮炸了。'], //死亡消息
    [/^(.*) Trimp(s*) just melted.$/, '$1个脆皮熔化了。'], //死亡消息
    [/^(.*) Trimp(s*) just fell over.$/, '$1个脆皮摔死了。'], //死亡消息
    [/^(.*) Trimp(s*) just swam the river Styx.$/, '$1个脆皮渡过了冥河。'], //死亡消息
    [/^(.*) Trimp(s*) just turned into jerky.$/, '$1个脆皮变成了脆皮干。'], //死亡消息
    [/^(.*) Trimp(s*) just forgot to put armor on.$/, '$1个脆皮忘记穿护甲，凉了。'], //死亡消息
    [/^(.*) Trimp(s*) just croaked.$/, '$1个脆皮咽下了最后一口气。'], //死亡消息
    [/^(.*) Trimp(s*) just flatlined.$/, '$1个脆皮心电图成了直线。'], //死亡消息
    [/^(.*) Trimp(s*) just won't follow you to battle again.$/, '$1个脆皮无法继续与您并肩作战了。'], //死亡消息
    [/^(.*) Trimp(s*) just died. Lame.$/, '$1个脆皮挂了。弱爆了。'], //死亡消息
    [/^(.*) Trimp(s*) just lagged out.$/, '$1个脆皮卡死了。'], //死亡消息
    [/^(.*) Trimp(s*) just imp-loded.$/, '$1个脆皮皮爆了。'], //死亡消息
    [/^(.*)You slew a(n*) $/, '$1您击杀了一个'], //击杀消息
    [/^(.*)You killed a(n*) $/, '$1您杀死了一个'], //击杀消息
    [/^(.*)You destroyed a(n*) $/, '$1您毁灭了一个'], //击杀消息
    [/^(.*)You extinguished a(n*) $/, '$1您消灭了一个'], //击杀消息
    [/^(.*)You liquidated a(n*) $/, '$1您清算了一个'], //击杀消息
    [/^(.*)You vaporized a(n*) $/, '$1您蒸发了一个'], //击杀消息
    [/^(.*)You demolished a(n*) $/, '$1您摧毁了一个'], //击杀消息
    [/^(.*)You ruined a(n*) $/, '$1您破坏了一个'], //击杀消息
    [/^(.*)You wrecked a(n*) $/, '$1您击毁了一个'], //击杀消息
    [/^(.*)You obliterated a(n*) $/, '$1您抹消了一个'], //击杀消息
    [/^(.*)Due to an error occuring, saving has been disabled to prevent corruption$/, '$1由于发生错误，为了防止崩溃，已禁止存档'], //其他消息等
    [/^(.*)Game Saved!$/, '$1游戏已存档！'], //其他消息等
    [/^(.*)For some reason, your game is not saving. Make sure you export and back up your save!$/, '$1由于某些原因，游戏未能存档。请手动导出游戏存档并妥善保管！'], //其他消息等
    [/^(.*)Sorry, it looks like your browser storage has been corrupted. Please clear your storage by going to Tools -> Clear Recent History -> Cookies and set time range to 'Everything'. This will remove the corrupted browser storage across all sites.$/, '$1很抱歉，您的浏览器缓存已崩溃。请清除浏览器缓存后再重试。'], //其他消息等
    [/^(.*)It looks like your import code isn't working properly. Please make sure that your export code is saved in a text file compatible with all of the characters. If you believe this code should be working, you can Email it to Trimpsgame@gmail.com and I will do my best to restore it for you!$/, '$1您的导入代码似乎有问题。请确认您的代码输入完整没有遗漏。如果您确定代码本身没有问题的话，请将代码发至 Trimpsgame@gmail.com ，我会尽全力为您修复的。'], //其他消息等
    [/^(.*)Your browser is preventing Trimps from accessing localStorage, and you will not be able to save or load your progress. Please check your browser settings to ensure that 3rd party cookies are not disabled, and that you're not using any addons that might interrupt storage!$/, '$1浏览器阻止了游戏读取本地缓存，因此您无法存档或者读档。请检查浏览器设置及插件设置！'], //其他消息等
    [/^(.*)You can't import a save from the beta version to this version!$/, '$1您无法将beta版本游戏的存档导入此版本的游戏中！'], //其他消息等
    [/^(.*)Your save file is from a newer version of Trimps \(v(.*)\) than what your computer is running \(v(.*)\). Refresh or restart your browser!$/, '$1您的游戏版本为$3，而您的存档版本则为更新的$2。请刷新或重启浏览器！'], //其他消息等
    [/^(.*)I'm so terribly sorry, but your previous save game \(version (.*)\) does not work in the new version. This should be the last reset!$/, '$1非常抱歉，但之前$2版本的存档无法在新版本中使用。这绝对是最后一次了！'], //其他消息等
    [/^(.*)Note: You are playing on the beta\/dev version. You will be unable to export your save from this version to the live version, and this server may go down or change without warning. Thank you for helping test!$/, '$1注意：您目前的游戏为beta/开发专用版本。此版本中的存档无法导入正式版游戏中，而且服务器可能在没有预先通知的情况下关闭或变动。感谢您帮忙测试！'], //其他消息等
    [/^Lv:(\s)$/, '等级：'], //其他消息等
    [/^(.*) stack(s*) of Equality are active, reducing the Attack of Trimps and Bad Guys by (.*)%.$/, '已激活$1层平等，同时将您的脆皮和敌人的攻击力减少$3%。'], //其他消息等
    [/^Max \((.*)$/, '最大($1'], //其他消息等











    [/^(.*)AutoTrimps - Zek Fork Loaded!$/, '$1自动脆皮脚本 - Zek Fork 已成功载入！'], //脚本3载入消息
    [/^(.*)Adding dark-graph.css file$/, '$1黑暗图表已开启'], //脚本3图表消息
    [/^(.*)Removing dark-graph.css file$/, '$1黑暗图表已关闭'], //脚本3图表消息
    [/^(.*)Theme change - AutoTrimps styles updating...$/, '$1游戏主题改变 - 自动脆皮脚本样式更新中……'], //脚本3图表消息
    [/^(.*)Starting Zone$/, '$1进入区域'], //脚本3图表消息
    [/^((?!SS).*) Seconds$/, '$1 秒'], //脚本3图表
    [/^Portal (.*): Daily$/, '传送门 $1：日常'], //脚本3图表
    [/^Portal (.*): Discipline$/, '传送门 $1：纪律'], //脚本3图表
    [/^Portal (.*): Metal$/, '传送门 $1：金属'], //脚本3图表
    [/^Portal (.*): Size$/, '传送门 $1：尺寸'], //脚本3图表
    [/^Portal (.*): Balance$/, '传送门 $1：平衡'], //脚本3图表
    [/^Portal (.*): Scientist$/, '传送门 $1：科学家'], //脚本3图表
    [/^Portal (.*): Meditate$/, '传送门 $1：冥想'], //脚本3图表
    [/^Portal (.*): Decay$/, '传送门 $1：衰变'], //脚本3图表
    [/^Portal (.*): Trimp$/, '传送门 $1：脆皮'], //脚本3图表
    [/^Portal (.*): Trapper$/, '传送门 $1：捕手'], //脚本3图表
    [/^Portal (.*): Electricity$/, '传送门 $1：电流'], //脚本3图表
    [/^Portal (.*): Frugal$/, '传送门 $1：节俭'], //脚本3图表
    [/^Portal (.*): Life$/, '传送门 $1：生命'], //脚本3图表
    [/^Portal (.*): Mapocalypse$/, '传送门 $1：天启地图'], //脚本3图表
    [/^Portal (.*): Coordinate$/, '传送门 $1：协同'], //脚本3图表
    [/^Portal (.*): Crushed$/, '传送门 $1：粉碎'], //脚本3图表
    [/^Portal (.*): Slow$/, '传送门 $1：迟缓'], //脚本3图表
    [/^Portal (.*): Nom$/, '传送门 $1：美味'], //脚本3图表
    [/^Portal (.*): Mapology$/, '传送门 $1：地图学'], //脚本3图表
    [/^Portal (.*): Toxicity$/, '传送门 $1：毒性'], //脚本3图表
    [/^Portal (.*): Devastation$/, '传送门 $1：破坏'], //脚本3图表
    [/^Portal (.*): Watch$/, '传送门 $1：守望'], //脚本3图表
    [/^Portal (.*): Lead$/, '传送门 $1：领导'], //脚本3图表
    [/^Portal (.*): Corrupted$/, '传送门 $1：腐化'], //脚本3图表
    [/^Portal (.*): Domination$/, '传送门 $1：统治'], //脚本3图表
    [/^Portal (.*): Obliterated$/, '传送门 $1：抹杀'], //脚本3图表
    [/^Portal (.*): Eradicated$/, '传送门 $1：灭绝'], //脚本3图表
    [/^Portal (.*): Unlucky$/, '传送门 $1：不幸'], //脚本3图表
    [/^Portal (.*): Downsize$/, '传送门 $1：精简'], //脚本3图表
    [/^Portal (.*): Transmute$/, '传送门 $1：变形'], //脚本3图表
    [/^Portal (.*): Unbalance$/, '传送门 $1：不平衡'], //脚本3图表
    [/^Portal (.*): Bublé$/, '传送门 $1：布累'], //脚本3图表
    [/^Portal (.*): Duel$/, '传送门 $1：决斗'], //脚本3图表
    [/^Portal (.*): Melt$/, '传送门 $1：熔化'], //脚本3图表
    [/^Portal (.*): Trappapalooza$/, '传送门 $1：捕手道达人'], //脚本3图表
    [/^Portal (.*): Quagmire$/, '传送门 $1：泥淖'], //脚本3图表
    [/^Portal (.*): Wither$/, '传送门 $1：凋零'], //脚本3图表
    [/^Portal (.*): Revenge$/, '传送门 $1：复仇'], //脚本3图表
    [/^Portal (.*): Quest$/, '传送门 $1：任务'], //脚本3图表
    [/^Portal (.*): Archaeology$/, '传送门 $1：考古学'], //脚本3图表
    [/^Portal (.*): Mayhem$/, '传送门 $1：暴乱'], //脚本3图表
    [/^Daily P Raiding Z(.*)$/, '日常重铸袭劫区域$1'], //脚本3日常设置
    [/^Daily Max P Raid Z(.*)$/, '日常重铸袭劫最大区域$1'], //脚本3日常设置
    [/^Daily Farm Frags Z(.*)$/, '日常刷碎片区域$1'], //脚本3日常设置
    [/^Dy Raid bef farm Z(.*)$/, '日常刷碎片前袭劫区域$1'], //脚本3日常设置
    [/^Daily Z to BW Raid(.*)$/, '日常仿生袭劫区域$1'], //脚本3日常设置
    [/^Daily Max BW to raid(.*)$/, '日常仿生袭劫最大区域$1'], //脚本3日常设置
    [/^DHS: High Damage(.*)$/, '日常传家宝：高伤$1'], //脚本3日常设置
    [/^DHS: Low Damage(.*)$/, '日常传家宝：低伤$1'], //脚本3日常设置
    [/^(.*)Theme change - AutoTrimps styles updated.$/, '$1游戏主题改变 - 自动脆皮脚本样式已更新。'], //脚本3消息
    [/^Trimple Z(.*)$/, '末日神殿区域$1'], //脚本3地图设置
    [/^Time Farming((?! Bogs).*)$/, '定时刷图$1'], //脚本3地图设置
    [/^TF: Time(.*)$/, '定时刷图：数值$1'], //脚本3地图设置
    [/^TF: Map Level(.*)$/, '定时刷图：地图等级$1'], //脚本3地图设置
    [/^Melting Point((?! \(Zone).*)$/, '熔点$1'], //脚本3地图设置
    [/^BB: Zone(.*)$/, '黑色泥沼：区域$1'], //脚本3地图设置
    [/^BB: Amount(.*)$/, '黑色泥沼：数量$1'], //脚本3地图设置
    [/^P Raiding Z(.*)$/, '重铸袭劫区域$1'], //脚本3袭劫设置
    [/^Max P Raid Zones(.*)$/, '重铸袭劫最大区域$1'], //脚本3袭劫设置
    [/^Farm Fragments Z(.*)$/, '刷碎片区域$1'], //脚本3袭劫设置
    [/^Raid before farm Z(.*)$/, '刷碎片前袭劫区域$1'], //脚本3袭劫设置
    [/^Z to BW Raid(.*)$/, '仿生袭劫区域$1'], //脚本3袭劫设置
    [/^Max BW to raid(.*)$/, '仿生袭劫最大区域$1'], //脚本3袭劫设置
    [/^PR: Zone(.*)$/, '宇宙2重铸袭劫：区域$1'], //脚本3袭劫设置
    [/^PR: Raid(.*)$/, '宇宙2重铸袭劫：地图$1'], //脚本3袭劫设置
    [/^First String(.*)$/, '第一字符串$1'], //脚本3挑战设置
    [/^Second String(.*)$/, '第二字符串$1'], //脚本3挑战设置
    [/^Third String(.*)$/, '第三字符串$1'], //脚本3挑战设置
    [/^Throttle Supply \(or Capacity\)(.*)$/, '控制供给的分配(或容量)$1'], //脚本3岩浆设置
    [/^WS: High Damage(.*)$/, '风层数叠加：高伤$1'], //脚本3传家宝设置
    [/^WS: Low Damage(.*)$/, '风层数叠加：低伤$1'], //脚本3传家宝设置
    [/^HS: First(.*)$/, '传家宝切换：第一$1'], //脚本3传家宝设置
    [/^HS: Second(.*)$/, '传家宝切换：第二$1'], //脚本3传家宝设置
    [/^To Fight now would add: (.*) seconds to the breed timer.$/, '现在开始战斗将增加$1秒繁殖计时。'], //脚本3繁殖模块设置
    [/^(.*)Building (.*) Warpstations$/, '$1建造$2个跃迁核心'], //脚本3建筑模块设置
    [/^(.*)Building Barn$/, '$1建造谷仓'], //脚本3建筑模块设置
    [/^(.*)Building Shed$/, '$1建造窝棚'], //脚本3建筑模块设置
    [/^(.*)Building Forge$/, '$1建造锻造厂'], //脚本3建筑模块设置
    [/^(.*)Building Hut$/, '$1建造小屋'], //脚本3建筑模块设置
    [/^(.*)Building House$/, '$1建造宅院'], //脚本3建筑模块设置
    [/^(.*)Building Mansion$/, '$1建造豪宅'], //脚本3建筑模块设置
    [/^(.*)Building Hotel$/, '$1建造宾馆'], //脚本3建筑模块设置
    [/^(.*)Building Resort$/, '$1建造度假村'], //脚本3建筑模块设置
    [/^(.*)Building Gateway$/, '$1建造维度裂隙'], //脚本3建筑模块设置
    [/^(.*)Building Wormhole$/, '$1建造虫洞'], //脚本3建筑模块设置
    [/^(.*)Building Collector$/, '$1建造汲能设施'], //脚本3建筑模块设置
    [/^(.*)Building Gym$/, '$1建造健身房'], //脚本3建筑模块设置
    [/^(.*)Building Smithy$/, '$1建造铁匠铺'], //脚本3建筑模块设置
    [/^(.*)Building Tribute$/, '$1建造贡品'], //脚本3建筑模块设置
    [/^(.*)Building Nursery$/, '$1建造托儿所'], //脚本3建筑模块设置
    [/^(.*)Building Microchip$/, '$1建造微型芯片'], //脚本3建筑模块设置
    [/^(.*)Upgrading Dagadder - Prestige$/, '$1升级诗歌匕首-重铸次数'], //脚本3装备模块设置
    [/^(.*)Upgrading Megamace - Prestige$/, '$1升级巨型狼牙棒-重铸次数'], //脚本3装备模块设置
    [/^(.*)Upgrading Polierarm - Prestige$/, '$1升级画戟-重铸次数'], //脚本3装备模块设置
    [/^(.*)Upgrading Axeidic - Prestige$/, '$1升级强酸战斧-重铸次数'], //脚本3装备模块设置
    [/^(.*)Upgrading Greatersword - Prestige$/, '$1升级双手巨剑-重铸次数'], //脚本3装备模块设置
    [/^(.*)Upgrading Bootboost - Prestige$/, '$1升级增速靴-重铸次数'], //脚本3装备模块设置
    [/^(.*)Upgrading Hellishmet - Prestige$/, '$1升级地狱头盔-重铸次数'], //脚本3装备模块设置
    [/^(.*)Upgrading Pantastic - Prestige$/, '$1升级护腿-重铸次数'], //脚本3装备模块设置
    [/^(.*)Upgrading Smoldershoulder - Prestige$/, '$1升级闷火护肩-重铸次数'], //脚本3装备模块设置
    [/^(.*)Upgrading Bestplate - Prestige$/, '$1升级精良胸铠-重铸次数'], //脚本3装备模块设置
    [/^(.*)Upgrading Harmbalest - Prestige$/, '$1升级高强弩-重铸次数'], //脚本3装备模块设置
    [/^(.*)Upgrading GambesOP - Prestige$/, '$1升级强棉甲-重铸次数'], //脚本3装备模块设置
    [/^(.*)Upgrading Supershield - Prestige$/, '$1升级超级盾牌-重铸次数'], //脚本3装备模块设置
    [/^(.*)Upgrading Gymystic #$/, '$1升级健身学-次数'], //脚本3装备模块设置
    [/^(.*)Leveling equipment Boots$/, '$1升级装备：靴子'], //脚本3装备模块设置
    [/^(.*)Leveling equipment Helmet$/, '$1升级装备：头盔'], //脚本3装备模块设置
    [/^(.*)Leveling equipment Pants$/, '$1升级装备：裤子'], //脚本3装备模块设置
    [/^(.*)Leveling equipment Shoulderguards$/, '$1升级装备：护肩'], //脚本3装备模块设置
    [/^(.*)Leveling equipment Breastplate$/, '$1升级装备：胸铠'], //脚本3装备模块设置
    [/^(.*)Leveling equipment Gambeson$/, '$1升级装备：棉甲'], //脚本3装备模块设置
    [/^(.*)Leveling equipment Shield$/, '$1升级装备：盾牌'], //脚本3装备模块设置
    [/^(.*)Leveling equipment Boots \(AlwaysLvl$/, '$1升级装备：靴子(常时等级'], //脚本3装备模块设置
    [/^(.*)Leveling equipment Helmet \(AlwaysLvl$/, '$1升级装备：头盔(常时等级'], //脚本3装备模块设置
    [/^(.*)Leveling equipment Pants \(AlwaysLvl$/, '$1升级装备：裤子(常时等级'], //脚本3装备模块设置
    [/^(.*)Leveling equipment Shoulderguards \(AlwaysLvl$/, '$1升级装备：护肩(常时等级'], //脚本3装备模块设置
    [/^(.*)Leveling equipment Breastplate \(AlwaysLvl$/, '$1升级装备：胸铠(常时等级'], //脚本3装备模块设置
    [/^(.*)Leveling equipment Gambeson \(AlwaysLvl$/, '$1升级装备：棉甲(常时等级'], //脚本3装备模块设置
    [/^(.*)Leveling equipment Shield \(AlwaysLvl$/, '$1升级装备：盾牌(常时等级'], //脚本3装备模块设置
    [/^(.*)Leveling equipment Dagger$/, '$1升级装备：匕首'], //脚本3装备模块设置
    [/^(.*)Leveling equipment Mace$/, '$1升级装备：狼牙棒'], //脚本3装备模块设置
    [/^(.*)Leveling equipment Polearm$/, '$1升级装备：战戟'], //脚本3装备模块设置
    [/^(.*)Leveling equipment Battleaxe$/, '$1升级装备：战斧'], //脚本3装备模块设置
    [/^(.*)Leveling equipment Greatsword$/, '$1升级装备：巨剑'], //脚本3装备模块设置
    [/^(.*)Leveling equipment Arbalest$/, '$1升级装备：强弩'], //脚本3装备模块设置
    [/^(.*)Successfully loaded existing profile(.*)$/, '$1成功载入现有的设置文件$2'], //脚本3导入导出模块设置
    [/^(.*)Successfully created new profile(.*)$/, '$1成功创建新的设置文件$2'], //脚本3导入导出模块设置
    [/^(.*)Successfully deleted profile #(.*)$/, '$1成功删除设置文件编号$2'], //脚本3导入导出模块设置
    [/^(.*)Successfully imported new AT settings...$/, '$1成功导入新的脚本设置……'], //脚本3导入导出模块设置
    [/^Successfully Imported Autotrimps Settings File!(.*)$/, '成功导入脚本设置文件！$1'], //脚本3导入导出模块设置
    [/^(.*)Successfully reset AT settings to Defaults...$/, '$1成功将脚本设置重置为默认设置……'], //脚本3导入导出模块设置
    [/^(.*)Importing new AT settings file...$/, '$1正在导入新的脚本设置……'], //脚本3导入导出模块设置
    [/^(.*)Firing (.*) Farmers$/, '$1解雇 $2 农民'], //脚本3工作设置
    [/^(.*)Hiring (.*) Farmers$/, '$1雇佣 $2 农民'], //脚本3工作设置
    [/^(.*)Firing (.*) Lumberjacks$/, '$1解雇 $2 伐木工'], //脚本3工作设置
    [/^(.*)Hiring (.*) Lumberjacks$/, '$1雇佣 $2 伐木工'], //脚本3工作设置
    [/^(.*)Firing (.*) Miners$/, '$1解雇 $2 矿工'], //脚本3工作设置
    [/^(.*)Hiring (.*) Miners$/, '$1雇佣 $2 矿工'], //脚本3工作设置
    [/^(.*)Firing (.*) Scientists$/, '$1解雇 $2 科学家'], //脚本3工作设置
    [/^(.*)Hiring (.*) Scientists$/, '$1雇佣 $2 科学家'], //脚本3工作设置
    [/^(.*)Firing (.*) Trainers$/, '$1解雇 $2 训练师'], //脚本3工作设置
    [/^(.*)Hiring (.*) Trainers$/, '$1雇佣 $2 训练师'], //脚本3工作设置
    [/^(.*)Firing (.*) Explorers$/, '$1解雇 $2 探险家'], //脚本3工作设置
    [/^(.*)Hiring (.*) Explorers$/, '$1雇佣 $2 探险家'], //脚本3工作设置
    [/^(.*)Firing (.*) Geneticists$/, '$1解雇 $2 遗传学家'], //脚本3工作设置
    [/^(.*)Hiring (.*) Geneticists$/, '$1雇佣 $2 遗传学家'], //脚本3工作设置
    [/^(.*)Firing (.*) Meteorologists$/, '$1解雇 $2 气象学家'], //脚本3工作设置
    [/^(.*)Hiring (.*) Meteorologists$/, '$1雇佣 $2 气象学家'], //脚本3工作设置
    [/^(.*)Bought (.*) Magmamancers. Total Owned(.*)$/, '$1雇佣 $2 岩浆巫师。岩浆巫师总数为$3'], //脚本3工作设置
    [/^(.*)Auto Spending (.*) Magmite on: Efficiency #$/, '$1自动分配 $2 岩浆岩以升级：效率，次数'], //脚本3岩浆设置
    [/^(.*)Auto Spending (.*) Magmite on: Capacity #$/, '$1自动分配 $2 岩浆岩以升级：容量，次数'], //脚本3岩浆设置
    [/^(.*)Auto Spending (.*) Magmite on: Supply #$/, '$1自动分配 $2 岩浆岩以升级：供给，次数'], //脚本3岩浆设置
    [/^(.*)Auto Spending (.*) Magmite on: Overclocker #$/, '$1自动分配 $2 岩浆岩以升级：超频，次数'], //脚本3岩浆设置
    [/^(.*)Auto Spending (.*) Magmite on: Slowburn$/, '$1自动分配 $2 岩浆岩以升级：慢烧'], //脚本3岩浆设置
    [/^(.*)Auto Spending (.*) Magmite on: Shielding$/, '$1自动分配 $2 岩浆岩以升级：防护'], //脚本3岩浆设置
    [/^(.*)Auto Spending (.*) Magmite on: Storage$/, '$1自动分配 $2 岩浆岩以升级：存储'], //脚本3岩浆设置
    [/^(.*)Auto Spending (.*) Magmite on: Hybridization$/, '$1自动分配 $2 岩浆岩以升级：混合'], //脚本3岩浆设置
    [/^(.*)Auto Spending (.*) Magmite on: Supervision$/, '$1自动分配 $2 岩浆岩以升级：管理'], //脚本3岩浆设置
    [/^(.*)Auto Spending (.*) Magmite on: Simulacrum$/, '$1自动分配 $2 岩浆岩以升级：复制'], //脚本3岩浆设置
    [/^(.*)Auto Spending (.*) Magmite on: Overclocker$/, '$1自动分配 $2 岩浆岩以升级：超频'], //脚本3岩浆设置
    [/^(.*)Leftover magmite$/, '$1剩余岩浆岩'], //脚本3岩浆设置
    [/^Farming for Spire (.*)h left$/, '尖塔前刷资源，剩余$1小时'], //脚本3地图设置
    [/^Farming for Spire (.*)m:(.*)s left$/, '尖塔前刷资源，剩余$1分$2秒'], //脚本3地图设置
    [/^Void Maps: (\d*) remaining$/, '虚空地图：剩余$1'], //脚本3地图设置
    [/^Void Maps: (\d*) \((\d*) stacked\) remaining$/, '虚空地图：剩余$1(融合了$2)'], //脚本3地图设置
    [/^Farming: (.*)x$/, '刷资源：生命伤害比 $1'], //脚本3地图设置
    [/^Want (.*)x(\s*)more damage$/, '需要更多伤害，倍数 $1'], //脚本3地图设置
    [/^(\s+)He$/, '氦'], //脚本3地图设置
    [/^(.*)Set the map special modifier to: Fast Attacks. Cost: (.*)% of your fragments.$/, '$1使用地图特殊修饰符：快速攻击。花费碎片总数的$2%。'], //脚本3地图设置
    [/^(.*)Set the map special modifier to: Large Cache. Cost: (.*)% of your fragments.$/, '$1使用地图特殊修饰符：大储藏箱。花费碎片总数的$2%。'], //脚本3地图设置
    [/^(.*)Set the map special modifier to: Small Savory Cache. Cost: (.*)% of your fragments.$/, '$1使用地图特殊修饰符：小美味储藏箱。花费碎片总数的$2%。'], //脚本3地图设置
    [/^(.*)Set the map special modifier to: Small Wooden Cache. Cost: (.*)% of your fragments.$/, '$1使用地图特殊修饰符：小木头储藏箱。花费碎片总数的$2%。'], //脚本3地图设置
    [/^(.*)Set the map special modifier to: Small Metal Cache. Cost: (.*)% of your fragments.$/, '$1使用地图特殊修饰符：小金属储藏箱。花费碎片总数的$2%。'], //脚本3地图设置
    [/^(.*)Set the map special modifier to: Small Research Cache. Cost: (.*)% of your fragments.$/, '$1使用地图特殊修饰符：小研究储藏箱。花费碎片总数的$2%。'], //脚本3地图设置
    [/^(.*)Set the map special modifier to: Prestigious. Cost: (.*)% of your fragments.$/, '$1使用地图特殊修饰符：重铸。花费碎片总数的$2%。'], //脚本3地图设置
    [/^(.*)Set the map special modifier to: Huge Cache. Cost: (.*)% of your fragments.$/, '$1使用地图特殊修饰符：巨大储藏箱。花费碎片总数的$2%。'], //脚本3地图设置
    [/^(.*)Set the map special modifier to: Large Savory Cache. Cost: (.*)% of your fragments.$/, '$1使用地图特殊修饰符：大美味储藏箱。花费碎片总数的$2%。'], //脚本3地图设置
    [/^(.*)Set the map special modifier to: Large Wooden Cache. Cost: (.*)% of your fragments.$/, '$1使用地图特殊修饰符：大木头储藏箱。花费碎片总数的$2%。'], //脚本3地图设置
    [/^(.*)Set the map special modifier to: Large Metal Cache. Cost: (.*)% of your fragments.$/, '$1使用地图特殊修饰符：大金属储藏箱。花费碎片总数的$2%。'], //脚本3地图设置
    [/^(.*)Set the map special modifier to: Large Research Cache. Cost: (.*)% of your fragments.$/, '$1使用地图特殊修饰符：大研究储藏箱。花费碎片总数的$2%。'], //脚本3地图设置
    [/^(.*)Got perma-stuck on cell (\d*) during scryer stance. Are your scryer settings correct\? Entering map to farm to fix it.$/, '$1使用占卜者阵型时卡在格子$2了。占卜者阵型的设置是否正确？请进入地图刷资源来解决。'], //脚本3地图设置
    [/^(.*)Can't afford the map we designed, #$/, '$1碎片不够，无法制造所需的地图，等级'], //脚本3地图设置
    [/^(.*)...selected our highest map instead # (.*) Level$/, '$1……取而代之，我们选择地图$2，等级'], //脚本3地图设置
    [/^(.*)Retrying, Buying a Map, level: #$/, '$1重新尝试，制造一张地图，等级：'], //脚本3地图设置
    [/^(.*)Buying a Map, level: #$/, '$1制造一张地图，等级：'], //脚本3地图设置
    [/^(.*)Too many maps, recycling now$/, '$1地图过多，开始回收'], //脚本3地图设置
    [/^(.*)AutoMaps unable to recycle to buy map!$/, '$1脚本无法回收并制造地图！'], //脚本3地图设置
    [/^(.*)Retrying map buy after recycling lowest level map$/, '$1回收最低级地图后重新尝试制造地图'], //脚本3地图设置
    [/^(.*)Running selected (.*) Level: (.*) Name: The Black $/, '$1运行选择的$2，等级：$3，名称：黑色'], //脚本3地图设置
    [/^(.*)Running selected (.*) Level: (.*) Name: Bionic Wonderland(.*)$/, '$1运行选择的$2，等级：$3，名称：仿生仙境$4'], //脚本3地图设置
    [/^(.*)Running selected (.*) Level: (.*) Name: The Block$/, '$1运行选择的$2，等级：$3，名称：障碍区'], //脚本3地图设置
    [/^(.*)Running selected (.*) Level: (.*) Name: The Wall$/, '$1运行选择的$2，等级：$3，名称：高墙'], //脚本3地图设置
    [/^(.*)Running selected (.*) Level: (.*) Name: Big Wall$/, '$1运行选择的$2，等级：$3，名称：巨墙'], //脚本3地图设置
    [/^(.*)Running selected (.*) Level: (.*) Name: The Prison$/, '$1运行选择的$2，等级：$3，名称：监狱'], //脚本3地图设置
    [/^(.*)Running selected (.*) Level: (.*) Name: Imploding Star$/, '$1运行选择的$2，等级：$3，名称：爆炸之星'], //脚本3地图设置
    [/^(.*)Running selected (.*) Level: (.*) Name: Prismatic Palace$/, '$1运行选择的$2，等级：$3，名称：棱镜宫殿'], //脚本3地图设置
    [/^(.*)Running selected (.*) Level: (.*) Name: Melting Point$/, '$1运行选择的$2，等级：$3，名称：熔点'], //脚本3地图设置
    [/^(.*)Running selected (.*) Level: (.*) Name: Trimple Of Doom$/, '$1运行选择的$2，等级：$3，名称：末日神殿'], //脚本3地图设置
    [/^(.*)Running selected (.*) Level: (.*) Name: Tricky Paradise$/, '$1运行选择的$2，等级：$3，名称：整蛊天堂'], //脚本3地图设置
    [/^(.*)Running selected (.*) Level: (.*) Name: Dimension of Anger$/, '$1运行选择的$2，等级：$3，名称：愤怒维度'], //脚本3地图设置
    [/^(.*)Running selected (.*) Level: (.*) Name: Dimension of Rage$/, '$1运行选择的$2，等级：$3，名称：暴怒维度'], //脚本3地图设置
    [/^(.*)Running selected (.*) Level: (.*) Name$/, '$1运行选择的$2，等级：$3，名称'], //脚本3地图设置
    [/^(.*)Running selected (.*) Void:  Name$/, '$1运行选择的$2，虚空地图：名称'], //脚本3地图设置
    [/^(\s+)Rn/, '氡'], //脚本3地图设置
    [/^(.*)Check complete for frag map$/, '$1完成检查碎片地图'], //脚本3地图设置
    [/^(.*)frag map bought$/, '$1碎片地图已制造'], //脚本3地图设置
    [/^(.*)running frag map$/, '$1运行碎片地图'], //脚本3地图设置
    [/^(.*)Check complete for 5th map$/, '$1完成检查第五地图'], //脚本3地图设置
    [/^(.*)5th map bought$/, '$1第五地图已制造'], //脚本3地图设置
    [/^(.*)Check complete for 4th map$/, '$1完成检查第四地图'], //脚本3地图设置
    [/^(.*)4th map bought$/, '$1第四地图已制造'], //脚本3地图设置
    [/^(.*)Check complete for 3rd map$/, '$1完成检查第三地图'], //脚本3地图设置
    [/^(.*)3rd map bought$/, '$1第三地图已制造'], //脚本3地图设置
    [/^(.*)Check complete for 2nd map$/, '$1完成检查第二地图'], //脚本3地图设置
    [/^(.*)2nd map bought$/, '$1第二地图已制造'], //脚本3地图设置
    [/^(.*)Check complete for 1st map$/, '$1完成检查第一地图'], //脚本3地图设置
    [/^(.*)1st map bought$/, '$1第一地图已制造'], //脚本3地图设置
    [/^(.*)Failed to Prestige Raid. Looks like you can't afford to or have no equips to get!$/, '$1重铸袭劫失败。您可能碎片不足无法制造地图，或者是已经没有可获取的装备了！'], //脚本3地图设置
    [/^(.*)running map$/, '$1运行地图'], //脚本3地图设置
    [/^(.*)Upgraded Empowerment of Ice$/, '$1升级了冰赋能'], //脚本3自然设置
    [/^(.*)Upgraded Empowerment of Poison$/, '$1升级了毒赋能'], //脚本3自然设置
    [/^(.*)Upgraded Empowerment of Wind$/, '$1升级了风赋能'], //脚本3自然设置
    [/^(.*)Upgraded Ice transfer rate$/, '$1升级了冰层数传递率'], //脚本3自然设置
    [/^(.*)Upgraded Poison transfer rate$/, '$1升级了毒层数传递率'], //脚本3自然设置
    [/^(.*)Upgraded Wind transfer rate$/, '$1升级了风层数传递率'], //脚本3自然设置
    [/^(.*)Converted Ice tokens to Poison$/, '$1将冰符记转换为毒符记'], //脚本3自然设置
    [/^(.*)Converted Ice tokens to Wind$/, '$1将冰符记转换为风符记'], //脚本3自然设置
    [/^(.*)Converted Poison tokens to Ice$/, '$1将毒符记转换为冰符记'], //脚本3自然设置
    [/^(.*)Converted Poison tokens to Wind$/, '$1将毒符记转换为风符记'], //脚本3自然设置
    [/^(.*)Converted Wind tokens to Ice$/, '$1将风符记转换为冰符记'], //脚本3自然设置
    [/^(.*)Converted Wind tokens to Poison$/, '$1将风符记转换为毒符记'], //脚本3自然设置
    [/^(.*)Activated Robotrimp MagnetoShriek Ability @ z$/, '$1脆皮机器人电磁尖啸激活于区域'], //脚本3其他设置
    [/^(.*)Beginning Prestige Raiding...$/, '$1开始重铸袭劫……'], //脚本3其他设置
    [/^(.*)Map Loop$/, '$1地图循环'], //脚本3其他设置
    [/^(.*)Failed to Prestige Raid. Looks like you can't afford to or you are too weak or you have limited yourself in a P\/I zone.$/, '$1重铸袭劫失败。您可能碎片不足无法制造地图，或者是太过于弱小，或者是设置了毒上限/冰上限并进入了相应的区域。'], //脚本3其他设置
    [/^(.*)Prestige raiding successful!$/, '$1重铸袭劫已成功完成！'], //脚本3其他设置
    [/^(.*)Turning AutoMaps back on$/, '$1重新启用自动地图'], //脚本3其他设置
    [/^(.*)Beginning Praiding$/, '$1开始宇宙2重铸袭劫'], //脚本3其他设置
    [/^(.*)Failed to prestige raid. Looks like you can't afford to.$/, '$1重铸袭劫失败。您可能碎片不足无法制造地图。'], //脚本3其他设置
    [/^(.*)Buying perfect sliders fragment farming map$/, '$1制造完美滑块的刷碎片地图'], //脚本3其他设置
    [/^(.*)Buying imperfect sliders fragment farming map$/, '$1制造非完美滑块的刷碎片地图'], //脚本3其他设置
    [/^(.*)Can't afford fragment farming map yet$/, '$1碎片不足，无法制造刷碎片地图'], //脚本3其他设置
    [/^(.*)Prestige raiding successful! - recycling Praid map$/, '$1重铸袭劫已成功完成！回收相应的袭劫地图'], //脚本3其他设置
    [/^(.*)Beginning BW Raiding...$/, '$1开始仿生袭劫……'], //脚本3其他设置
    [/^(.*)Failed to BW raid. Looks like you don't have a BW to raid...$/, '$1仿生袭劫失败。您还未获得仿生仙境地图……'], //脚本3其他设置
    [/^(.*)...Successfully BW raided!$/, '$1……仿生袭劫已成功完成！'], //脚本3其他设置
    [/^(.*)Beginning Daily BW Raiding...$/, '$1开始日常仿生袭劫……'], //脚本3其他设置
    [/^(.*)Failed to Daily BW raid. Looks like you don't have a BW to raid...$/, '$1日常仿生袭劫失败。您还未获得仿生仙境地图……'], //脚本3其他设置
    [/^(.*)...Successfully Daily BW raided!$/, '$1……日常仿生袭劫已成功完成！'], //脚本3其他设置
    [/^(.*)World Zone matches a Praiding Zone!$/, '$1世界区域满足重铸袭劫区域条件！'], //脚本3其他设置
    [/^(.*)Failed to prestige raid. Looks like you can't afford to..$/, '$1重铸袭劫失败。您可能碎片不足无法制造地图……'], //脚本3其他设置
    [/^(.*)World Zone matches a Daily Praiding Zone!$/, '$1世界区域满足日常重铸袭劫区域条件！'], //脚本3其他设置
    [/^(.*)Beginning Daily Prestige Raiding...$/, '$1开始日常重铸袭劫……'], //脚本3其他设置
    [/^(.*)Failed to Daily Prestige Raid. Looks like you can't afford to..$/, '$1日常重铸袭劫失败。您可能碎片不足无法制造地图……'], //脚本3其他设置
    [/^(.*)Daily Prestige Raiding successful! - recycling Praid map$/, '$1日常重铸袭劫已成功完成！回收相应的袭劫地图'], //脚本3其他设置
    [/^Current Status: Farming for Spire (.*)h left$/, '当前状态：尖塔前刷资源，剩余$1小时'], //脚本3挂机设置
    [/^Current Status: Farming for Spire (.*)m:(.*)s left$/, '当前状态：尖塔前刷资源，剩余$1分$2秒'], //脚本3挂机设置
    [/^Current Status: Void Maps: (\d*) remaining$/, '当前状态：虚空地图：剩余$1'], //脚本3挂机设置
    [/^Current Status: Void Maps: (\d*) \((\d*) stacked\) remaining$/, '当前状态：虚空地图：剩余$1(融合了$2)'], //脚本3挂机设置
    [/^Current Status: Farming: (.*)x$/, '当前状态：刷资源：生命伤害比 $1'], //脚本3地图设置
    [/^Current Status: Want (.*)x(\s*)more damage$/, '当前状态：需要更多伤害，倍数 $1'], //脚本3地图设置
    [/^(.*)AutoPerks: Your existing fixed-perks reserve Helium$/, '$1自动特权：当前不修改特权总共花费氦数量'], //脚本3自动特权设置
    [/^(.*)AutoPerks: Major Error: Make sure all ratios are set properly.$/, '$1自动特权：错误：请确保所有比例设置合理。'], //脚本3自动特权设置
    [/^(.*)AutoPerks: Auto-Allocate Finished.$/, '$1自动特权：自动分配完毕。'], //脚本3自动特权设置
    [/^(.*)Beginning AutoPerks1 calculate how to spend (.*) Helium... This could take a while...$/, '$1自动特权1开始计算如何分配$2氦……可能要花费一些时间……'], //脚本3自动特权设置
    [/^(.*)AutoPerks: Major Error - Not enough helium to buy fixed perks.$/, '$1自动特权：错误：氦不足以购买不修改特权。'], //脚本3自动特权设置
    [/^(.*)Perk ratios must be positive values.$/, '$1特权比例必须为正数。'], //脚本3自动特权设置
    [/^(.*)All Perk Ratios were 0, or some other error.$/, '$1所有特权比例都为0，或者是有其他错误。'], //脚本3自动特权设置
    [/^(.*)AutoPerks1: Pass One Complete. Loops ran$/, '$1自动特权1：第一阶段完成。循环次数'], //脚本3自动特权设置
    [/^(.*)AutoPerks1: Dump Perk Looting level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权1：主加特权劫掠，主加后特权等级：$2，花费：$3氦。'], //脚本3自动特权设置
    [/^(.*)AutoPerks1: Dump Perk Toughness level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权1：主加特权坚韧，主加后特权等级：$2，花费：$3氦。'], //脚本3自动特权设置
    [/^(.*)AutoPerks1: Dump Perk Power level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权1：主加特权力量，主加后特权等级：$2，花费：$3氦。'], //脚本3自动特权设置
    [/^(.*)AutoPerks1: Dump Perk Motivation level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权1：主加特权鼓舞，主加后特权等级：$2，花费：$3氦。'], //脚本3自动特权设置
    [/^(.*)AutoPerks1: Dump Perk Pheromones level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权1：主加特权信息素，主加后特权等级：$2，花费：$3氦。'], //脚本3自动特权设置
    [/^(.*)AutoPerks1: Dump Perk Artisanistry level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权1：主加特权手艺娴熟，主加后特权等级：$2，花费：$3氦。'], //脚本3自动特权设置
    [/^(.*)AutoPerks1: Dump Perk Carpentry level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权1：主加特权木工，主加后特权等级：$2，花费：$3氦。'], //脚本3自动特权设置
    [/^(.*)AutoPerks1: Dump Perk Resilience level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权1：主加特权弹性，主加后特权等级：$2，花费：$3氦。'], //脚本3自动特权设置
    [/^(.*)AutoPerks1: Dump Perk Coordinated level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权1：主加特权协同，主加后特权等级：$2，花费：$3氦。'], //脚本3自动特权设置
    [/^(.*)AutoPerks1: Dump Perk Resourceful level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权1：主加特权足智多谋，主加后特权等级：$2，花费：$3氦。'], //脚本3自动特权设置
    [/^(.*)AutoPerks1: Dump Perk Overkill level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权1：主加特权超杀，主加后特权等级：$2，花费：$3氦。'], //脚本3自动特权设置
    [/^(.*)AutoPerks1: Dump Perk Cunning level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权1：主加特权灵巧，主加后特权等级：$2，花费：$3氦。'], //脚本3自动特权设置
    [/^(.*)AutoPerks1: Dump Perk Curious level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权1：主加特权好奇，主加后特权等级：$2，花费：$3氦。'], //脚本3自动特权设置
    [/^(.*)AutoPerks1: Dump Perk Classy level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权1：主加特权上等，主加后特权等级：$2，花费：$3氦。'], //脚本3自动特权设置
    [/^(.*)AutoPerks1: Dump Perk Toughness_II level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权1：主加特权坚韧 II，主加后特权等级：$2，花费：$3氦。'], //脚本3自动特权设置
    [/^(.*)AutoPerks1: Dump Perk Power_II level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权1：主加特权力量 II，主加后特权等级：$2，花费：$3氦。'], //脚本3自动特权设置
    [/^(.*)AutoPerks1: Dump Perk Motivation_II level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权1：主加特权鼓舞 II，主加后特权等级：$2，花费：$3氦。'], //脚本3自动特权设置
    [/^(.*)AutoPerks1: Dump Perk Carpentry_II level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权1：主加特权木工 II，主加后特权等级：$2，花费：$3氦。'], //脚本3自动特权设置
    [/^(.*)AutoPerks1: Dump Perk Looting_II level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权1：主加特权劫掠 II，主加后特权等级：$2，花费：$3氦。'], //脚本3自动特权设置
    [/^(.*)AutoPerks1: Pass two complete. Round 2 cleanup spend of $/, '$1自动特权1：第二阶段完成。第二阶段花费'], //脚本3自动特权设置
    [/^(.*)Beginning AutoPerks2 calculate how to spend (.*) Helium... This could take a while...$/, '$1自动特权2开始计算如何分配$2氦……可能要花费一些时间……'], //脚本3自动特权设置
    [/^(.*)AutoPerks2: Pass One Complete. Loops ran$/, '$1自动特权2：第一阶段完成。循环次数'], //脚本3自动特权设置
    [/^(.*)AutoPerks2: Dump Perk Looting level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权2：主加特权劫掠，主加后特权等级：$2，花费：$3氦。'], //脚本3自动特权设置
    [/^(.*)AutoPerks2: Dump Perk Toughness level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权2：主加特权坚韧，主加后特权等级：$2，花费：$3氦。'], //脚本3自动特权设置
    [/^(.*)AutoPerks2: Dump Perk Power level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权2：主加特权力量，主加后特权等级：$2，花费：$3氦。'], //脚本3自动特权设置
    [/^(.*)AutoPerks2: Dump Perk Motivation level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权2：主加特权鼓舞，主加后特权等级：$2，花费：$3氦。'], //脚本3自动特权设置
    [/^(.*)AutoPerks2: Dump Perk Pheromones level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权2：主加特权信息素，主加后特权等级：$2，花费：$3氦。'], //脚本3自动特权设置
    [/^(.*)AutoPerks2: Dump Perk Artisanistry level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权2：主加特权手艺娴熟，主加后特权等级：$2，花费：$3氦。'], //脚本3自动特权设置
    [/^(.*)AutoPerks2: Dump Perk Carpentry level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权2：主加特权木工，主加后特权等级：$2，花费：$3氦。'], //脚本3自动特权设置
    [/^(.*)AutoPerks2: Dump Perk Resilience level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权2：主加特权弹性，主加后特权等级：$2，花费：$3氦。'], //脚本3自动特权设置
    [/^(.*)AutoPerks2: Dump Perk Coordinated level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权2：主加特权协同，主加后特权等级：$2，花费：$3氦。'], //脚本3自动特权设置
    [/^(.*)AutoPerks2: Dump Perk Resourceful level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权2：主加特权足智多谋，主加后特权等级：$2，花费：$3氦。'], //脚本3自动特权设置
    [/^(.*)AutoPerks2: Dump Perk Overkill level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权2：主加特权超杀，主加后特权等级：$2，花费：$3氦。'], //脚本3自动特权设置
    [/^(.*)AutoPerks2: Dump Perk Cunning level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权2：主加特权灵巧，主加后特权等级：$2，花费：$3氦。'], //脚本3自动特权设置
    [/^(.*)AutoPerks2: Dump Perk Curious level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权2：主加特权好奇，主加后特权等级：$2，花费：$3氦。'], //脚本3自动特权设置
    [/^(.*)AutoPerks2: Dump Perk Classy level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权2：主加特权上等，主加后特权等级：$2，花费：$3氦。'], //脚本3自动特权设置
    [/^(.*)AutoPerks2: Dump Perk Toughness_II level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权2：主加特权坚韧 II，主加后特权等级：$2，花费：$3氦。'], //脚本3自动特权设置
    [/^(.*)AutoPerks2: Dump Perk Power_II level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权2：主加特权力量 II，主加后特权等级：$2，花费：$3氦。'], //脚本3自动特权设置
    [/^(.*)AutoPerks2: Dump Perk Motivation_II level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权2：主加特权鼓舞 II，主加后特权等级：$2，花费：$3氦。'], //脚本3自动特权设置
    [/^(.*)AutoPerks2: Dump Perk Carpentry_II level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权2：主加特权木工 II，主加后特权等级：$2，花费：$3氦。'], //脚本3自动特权设置
    [/^(.*)AutoPerks2: Dump Perk Looting_II level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权2：主加特权劫掠 II，主加后特权等级：$2，花费：$3氦。'], //脚本3自动特权设置
    [/^(.*)AutoPerks2: Pass Two Complete. Cleanup Spent Any Leftover Helium: (.*) He.$/, '$1自动特权2：第二阶段完成。花费了剩余的$2氦。'], //脚本3自动特权设置
    [/^(.*)AutoPerks-Respec Buying: Siphonology$/, '$1自动特权-洗点后购买：虹吸学'], //脚本3自动特权设置
    [/^(.*)AutoPerks-Respec Buying: Anticipation$/, '$1自动特权-洗点后购买：预期'], //脚本3自动特权设置
    [/^(.*)AutoPerks-Respec Buying: Meditation$/, '$1自动特权-洗点后购买：冥想'], //脚本3自动特权设置
    [/^(.*)AutoPerks-Respec Buying: Relentlessness$/, '$1自动特权-洗点后购买：无情'], //脚本3自动特权设置
    [/^(.*)AutoPerks-Respec Buying: Range$/, '$1自动特权-洗点后购买：范围'], //脚本3自动特权设置
    [/^(.*)AutoPerks-Respec Buying: Agility$/, '$1自动特权-洗点后购买：敏捷'], //脚本3自动特权设置
    [/^(.*)AutoPerks-Respec Buying: Bait$/, '$1自动特权-洗点后购买：诱饵'], //脚本3自动特权设置
    [/^(.*)AutoPerks-Respec Buying: Trumps$/, '$1自动特权-洗点后购买：王牌'], //脚本3自动特权设置
    [/^(.*)AutoPerks-Respec Buying: Packrat$/, '$1自动特权-洗点后购买：囤积成瘾'], //脚本3自动特权设置
    [/^(.*)AutoPerks-Respec Buying: Looting$/, '$1自动特权-洗点后购买：劫掠'], //脚本3自动特权设置
    [/^(.*)AutoPerks-Respec Buying: Toughness$/, '$1自动特权-洗点后购买：坚韧'], //脚本3自动特权设置
    [/^(.*)AutoPerks-Respec Buying: Power$/, '$1自动特权-洗点后购买：力量'], //脚本3自动特权设置
    [/^(.*)AutoPerks-Respec Buying: Motivation$/, '$1自动特权-洗点后购买：鼓舞'], //脚本3自动特权设置
    [/^(.*)AutoPerks-Respec Buying: Pheromones$/, '$1自动特权-洗点后购买：信息素'], //脚本3自动特权设置
    [/^(.*)AutoPerks-Respec Buying: Artisanistry$/, '$1自动特权-洗点后购买：手艺娴熟'], //脚本3自动特权设置
    [/^(.*)AutoPerks-Respec Buying: Carpentry$/, '$1自动特权-洗点后购买：木工'], //脚本3自动特权设置
    [/^(.*)AutoPerks-Respec Buying: Resilience$/, '$1自动特权-洗点后购买：弹性'], //脚本3自动特权设置
    [/^(.*)AutoPerks-Respec Buying: Coordinated$/, '$1自动特权-洗点后购买：协同'], //脚本3自动特权设置
    [/^(.*)AutoPerks-Respec Buying: Resourceful$/, '$1自动特权-洗点后购买：足智多谋'], //脚本3自动特权设置
    [/^(.*)AutoPerks-Respec Buying: Overkill$/, '$1自动特权-洗点后购买：超杀'], //脚本3自动特权设置
    [/^(.*)AutoPerks-Respec Buying: Capable$/, '$1自动特权-洗点后购买：能力'], //脚本3自动特权设置
    [/^(.*)AutoPerks-Respec Buying: Cunning$/, '$1自动特权-洗点后购买：灵巧'], //脚本3自动特权设置
    [/^(.*)AutoPerks-Respec Buying: Curious$/, '$1自动特权-洗点后购买：好奇'], //脚本3自动特权设置
    [/^(.*)AutoPerks-Respec Buying: Classy$/, '$1自动特权-洗点后购买：上等'], //脚本3自动特权设置
    [/^(.*)AutoPerks-Respec Buying: Toughness_II$/, '$1自动特权-洗点后购买：坚韧 II'], //脚本3自动特权设置
    [/^(.*)AutoPerks-Respec Buying: Power_II$/, '$1自动特权-洗点后购买：力量 II'], //脚本3自动特权设置
    [/^(.*)AutoPerks-Respec Buying: Motivation_II$/, '$1自动特权-洗点后购买：鼓舞 II'], //脚本3自动特权设置
    [/^(.*)AutoPerks-Respec Buying: Carpentry_II$/, '$1自动特权-洗点后购买：木工 II'], //脚本3自动特权设置
    [/^(.*)AutoPerks-Respec Buying: Looting_II$/, '$1自动特权-洗点后购买：劫掠 II'], //脚本3自动特权设置
    [/^(.*)AutoPerks-Respec Error Couldn't Afford Asked Perk: Siphonology$/, '$1自动特权-洗点错误，氦不足以购买特权：虹吸学'], //脚本3自动特权设置
    [/^(.*)AutoPerks-Respec Error Couldn't Afford Asked Perk: Anticipation$/, '$1自动特权-洗点错误，氦不足以购买特权：预期'], //脚本3自动特权设置
    [/^(.*)AutoPerks-Respec Error Couldn't Afford Asked Perk: Meditation$/, '$1自动特权-洗点错误，氦不足以购买特权：冥想'], //脚本3自动特权设置
    [/^(.*)AutoPerks-Respec Error Couldn't Afford Asked Perk: Relentlessness$/, '$1自动特权-洗点错误，氦不足以购买特权：无情'], //脚本3自动特权设置
    [/^(.*)AutoPerks-Respec Error Couldn't Afford Asked Perk: Range$/, '$1自动特权-洗点错误，氦不足以购买特权：范围'], //脚本3自动特权设置
    [/^(.*)AutoPerks-Respec Error Couldn't Afford Asked Perk: Agility$/, '$1自动特权-洗点错误，氦不足以购买特权：敏捷'], //脚本3自动特权设置
    [/^(.*)AutoPerks-Respec Error Couldn't Afford Asked Perk: Bait$/, '$1自动特权-洗点错误，氦不足以购买特权：诱饵'], //脚本3自动特权设置
    [/^(.*)AutoPerks-Respec Error Couldn't Afford Asked Perk: Trumps$/, '$1自动特权-洗点错误，氦不足以购买特权：王牌'], //脚本3自动特权设置
    [/^(.*)AutoPerks-Respec Error Couldn't Afford Asked Perk: Packrat$/, '$1自动特权-洗点错误，氦不足以购买特权：囤积成瘾'], //脚本3自动特权设置
    [/^(.*)AutoPerks-Respec Error Couldn't Afford Asked Perk: Looting$/, '$1自动特权-洗点错误，氦不足以购买特权：劫掠'], //脚本3自动特权设置
    [/^(.*)AutoPerks-Respec Error Couldn't Afford Asked Perk: Toughness$/, '$1自动特权-洗点错误，氦不足以购买特权：坚韧'], //脚本3自动特权设置
    [/^(.*)AutoPerks-Respec Error Couldn't Afford Asked Perk: Power$/, '$1自动特权-洗点错误，氦不足以购买特权：力量'], //脚本3自动特权设置
    [/^(.*)AutoPerks-Respec Error Couldn't Afford Asked Perk: Motivation$/, '$1自动特权-洗点错误，氦不足以购买特权：鼓舞'], //脚本3自动特权设置
    [/^(.*)AutoPerks-Respec Error Couldn't Afford Asked Perk: Pheromones$/, '$1自动特权-洗点错误，氦不足以购买特权：信息素'], //脚本3自动特权设置
    [/^(.*)AutoPerks-Respec Error Couldn't Afford Asked Perk: Artisanistry$/, '$1自动特权-洗点错误，氦不足以购买特权：手艺娴熟'], //脚本3自动特权设置
    [/^(.*)AutoPerks-Respec Error Couldn't Afford Asked Perk: Carpentry$/, '$1自动特权-洗点错误，氦不足以购买特权：木工'], //脚本3自动特权设置
    [/^(.*)AutoPerks-Respec Error Couldn't Afford Asked Perk: Resilience$/, '$1自动特权-洗点错误，氦不足以购买特权：弹性'], //脚本3自动特权设置
    [/^(.*)AutoPerks-Respec Error Couldn't Afford Asked Perk: Coordinated$/, '$1自动特权-洗点错误，氦不足以购买特权：协同'], //脚本3自动特权设置
    [/^(.*)AutoPerks-Respec Error Couldn't Afford Asked Perk: Resourceful$/, '$1自动特权-洗点错误，氦不足以购买特权：足智多谋'], //脚本3自动特权设置
    [/^(.*)AutoPerks-Respec Error Couldn't Afford Asked Perk: Overkill$/, '$1自动特权-洗点错误，氦不足以购买特权：超杀'], //脚本3自动特权设置
    [/^(.*)AutoPerks-Respec Error Couldn't Afford Asked Perk: Cunning$/, '$1自动特权-洗点错误，氦不足以购买特权：灵巧'], //脚本3自动特权设置
    [/^(.*)AutoPerks-Respec Error Couldn't Afford Asked Perk: Curious$/, '$1自动特权-洗点错误，氦不足以购买特权：好奇'], //脚本3自动特权设置
    [/^(.*)AutoPerks-Respec Error Couldn't Afford Asked Perk: Classy$/, '$1自动特权-洗点错误，氦不足以购买特权：上等'], //脚本3自动特权设置
    [/^(.*)AutoPerks-Respec Error Couldn't Afford Asked Perk: Toughness_II$/, '$1自动特权-洗点错误，氦不足以购买特权：坚韧 II'], //脚本3自动特权设置
    [/^(.*)AutoPerks-Respec Error Couldn't Afford Asked Perk: Power_II$/, '$1自动特权-洗点错误，氦不足以购买特权：力量 II'], //脚本3自动特权设置
    [/^(.*)AutoPerks-Respec Error Couldn't Afford Asked Perk: Motivation_II$/, '$1自动特权-洗点错误，氦不足以购买特权：鼓舞 II'], //脚本3自动特权设置
    [/^(.*)AutoPerks-Respec Error Couldn't Afford Asked Perk: Carpentry_II$/, '$1自动特权-洗点错误，氦不足以购买特权：木工 II'], //脚本3自动特权设置
    [/^(.*)AutoPerks-Respec Error Couldn't Afford Asked Perk: Looting_II$/, '$1自动特权-洗点错误，氦不足以购买特权：劫掠 II'], //脚本3自动特权设置
    [/^(.*)A Respec would be required and is not available. You used it already, try again next portal.$/, '$1需要洗点才可以进行自动分配特权，但您已经洗点过了，请在下次传送后再重试。'], //脚本3自动特权设置
    [/^(.*)AutoPerks RESPEC Required for: Siphonology$/, '$1自动特权需要洗点特权：虹吸学'], //脚本3自动特权设置
    [/^(.*)AutoPerks RESPEC Required for: Anticipation$/, '$1自动特权需要洗点特权：预期'], //脚本3自动特权设置
    [/^(.*)AutoPerks RESPEC Required for: Meditation$/, '$1自动特权需要洗点特权：冥想'], //脚本3自动特权设置
    [/^(.*)AutoPerks RESPEC Required for: Relentlessness$/, '$1自动特权需要洗点特权：无情'], //脚本3自动特权设置
    [/^(.*)AutoPerks RESPEC Required for: Range$/, '$1自动特权需要洗点特权：范围'], //脚本3自动特权设置
    [/^(.*)AutoPerks RESPEC Required for: Agility$/, '$1自动特权需要洗点特权：敏捷'], //脚本3自动特权设置
    [/^(.*)AutoPerks RESPEC Required for: Bait$/, '$1自动特权需要洗点特权：诱饵'], //脚本3自动特权设置
    [/^(.*)AutoPerks RESPEC Required for: Trumps$/, '$1自动特权需要洗点特权：王牌'], //脚本3自动特权设置
    [/^(.*)AutoPerks RESPEC Required for: Packrat$/, '$1自动特权需要洗点特权：囤积成瘾'], //脚本3自动特权设置
    [/^(.*)AutoPerks RESPEC Required for: Looting$/, '$1自动特权需要洗点特权：劫掠'], //脚本3自动特权设置
    [/^(.*)AutoPerks RESPEC Required for: Toughness$/, '$1自动特权需要洗点特权：坚韧'], //脚本3自动特权设置
    [/^(.*)AutoPerks RESPEC Required for: Power$/, '$1自动特权需要洗点特权：力量'], //脚本3自动特权设置
    [/^(.*)AutoPerks RESPEC Required for: Motivation$/, '$1自动特权需要洗点特权：鼓舞'], //脚本3自动特权设置
    [/^(.*)AutoPerks RESPEC Required for: Pheromones$/, '$1自动特权需要洗点特权：信息素'], //脚本3自动特权设置
    [/^(.*)AutoPerks RESPEC Required for: Artisanistry$/, '$1自动特权需要洗点特权：手艺娴熟'], //脚本3自动特权设置
    [/^(.*)AutoPerks RESPEC Required for: Carpentry$/, '$1自动特权需要洗点特权：木工'], //脚本3自动特权设置
    [/^(.*)AutoPerks RESPEC Required for: Resilience$/, '$1自动特权需要洗点特权：弹性'], //脚本3自动特权设置
    [/^(.*)AutoPerks RESPEC Required for: Coordinated$/, '$1自动特权需要洗点特权：协同'], //脚本3自动特权设置
    [/^(.*)AutoPerks RESPEC Required for: Resourceful$/, '$1自动特权需要洗点特权：足智多谋'], //脚本3自动特权设置
    [/^(.*)AutoPerks RESPEC Required for: Overkill$/, '$1自动特权需要洗点特权：超杀'], //脚本3自动特权设置
    [/^(.*)AutoPerks RESPEC Required for: Cunning$/, '$1自动特权需要洗点特权：灵巧'], //脚本3自动特权设置
    [/^(.*)AutoPerks RESPEC Required for: Curious$/, '$1自动特权需要洗点特权：好奇'], //脚本3自动特权设置
    [/^(.*)AutoPerks RESPEC Required for: Classy$/, '$1自动特权需要洗点特权：上等'], //脚本3自动特权设置
    [/^(.*)AutoPerks RESPEC Required for: Toughness_II$/, '$1自动特权需要洗点特权：坚韧 II'], //脚本3自动特权设置
    [/^(.*)AutoPerks RESPEC Required for: Power_II$/, '$1自动特权需要洗点特权：力量 II'], //脚本3自动特权设置
    [/^(.*)AutoPerks RESPEC Required for: Motivation_II$/, '$1自动特权需要洗点特权：鼓舞 II'], //脚本3自动特权设置
    [/^(.*)AutoPerks RESPEC Required for: Carpentry_II$/, '$1自动特权需要洗点特权：木工 II'], //脚本3自动特权设置
    [/^(.*)AutoPerks RESPEC Required for: Looting_II$/, '$1自动特权需要洗点特权：劫掠 II'], //脚本3自动特权设置
    [/^(.*)AutoPerks-NoRespec Adding: Siphonology$/, '$1自动特权-无洗点提升：虹吸学'], //脚本3自动特权设置
    [/^(.*)AutoPerks-NoRespec Adding: Anticipation$/, '$1自动特权-无洗点提升：预期'], //脚本3自动特权设置
    [/^(.*)AutoPerks-NoRespec Adding: Meditation$/, '$1自动特权-无洗点提升：冥想'], //脚本3自动特权设置
    [/^(.*)AutoPerks-NoRespec Adding: Relentlessness$/, '$1自动特权-无洗点提升：无情'], //脚本3自动特权设置
    [/^(.*)AutoPerks-NoRespec Adding: Range$/, '$1自动特权-无洗点提升：范围'], //脚本3自动特权设置
    [/^(.*)AutoPerks-NoRespec Adding: Agility$/, '$1自动特权-无洗点提升：敏捷'], //脚本3自动特权设置
    [/^(.*)AutoPerks-NoRespec Adding: Bait$/, '$1自动特权-无洗点提升：诱饵'], //脚本3自动特权设置
    [/^(.*)AutoPerks-NoRespec Adding: Trumps$/, '$1自动特权-无洗点提升：王牌'], //脚本3自动特权设置
    [/^(.*)AutoPerks-NoRespec Adding: Packrat$/, '$1自动特权-无洗点提升：囤积成瘾'], //脚本3自动特权设置
    [/^(.*)AutoPerks-NoRespec Adding: Looting$/, '$1自动特权-无洗点提升：劫掠'], //脚本3自动特权设置
    [/^(.*)AutoPerks-NoRespec Adding: Toughness$/, '$1自动特权-无洗点提升：坚韧'], //脚本3自动特权设置
    [/^(.*)AutoPerks-NoRespec Adding: Power$/, '$1自动特权-无洗点提升：力量'], //脚本3自动特权设置
    [/^(.*)AutoPerks-NoRespec Adding: Motivation$/, '$1自动特权-无洗点提升：鼓舞'], //脚本3自动特权设置
    [/^(.*)AutoPerks-NoRespec Adding: Pheromones$/, '$1自动特权-无洗点提升：信息素'], //脚本3自动特权设置
    [/^(.*)AutoPerks-NoRespec Adding: Artisanistry$/, '$1自动特权-无洗点提升：手艺娴熟'], //脚本3自动特权设置
    [/^(.*)AutoPerks-NoRespec Adding: Carpentry$/, '$1自动特权-无洗点提升：木工'], //脚本3自动特权设置
    [/^(.*)AutoPerks-NoRespec Adding: Resilience$/, '$1自动特权-无洗点提升：弹性'], //脚本3自动特权设置
    [/^(.*)AutoPerks-NoRespec Adding: Coordinated$/, '$1自动特权-无洗点提升：协同'], //脚本3自动特权设置
    [/^(.*)AutoPerks-NoRespec Adding: Resourceful$/, '$1自动特权-无洗点提升：足智多谋'], //脚本3自动特权设置
    [/^(.*)AutoPerks-NoRespec Adding: Overkill$/, '$1自动特权-无洗点提升：超杀'], //脚本3自动特权设置
    [/^(.*)AutoPerks-NoRespec Adding: Cunning$/, '$1自动特权-无洗点提升：灵巧'], //脚本3自动特权设置
    [/^(.*)AutoPerks-NoRespec Adding: Curious$/, '$1自动特权-无洗点提升：好奇'], //脚本3自动特权设置
    [/^(.*)AutoPerks-NoRespec Adding: Classy$/, '$1自动特权-无洗点提升：上等'], //脚本3自动特权设置
    [/^(.*)AutoPerks-NoRespec Adding: Toughness_II$/, '$1自动特权-无洗点提升：坚韧 II'], //脚本3自动特权设置
    [/^(.*)AutoPerks-NoRespec Adding: Power_II$/, '$1自动特权-无洗点提升：力量 II'], //脚本3自动特权设置
    [/^(.*)AutoPerks-NoRespec Adding: Motivation_II$/, '$1自动特权-无洗点提升：鼓舞 II'], //脚本3自动特权设置
    [/^(.*)AutoPerks-NoRespec Adding: Carpentry_II$/, '$1自动特权-无洗点提升：木工 II'], //脚本3自动特权设置
    [/^(.*)AutoPerks-NoRespec Adding: Looting_II$/, '$1自动特权-无洗点提升：劫掠 II'], //脚本3自动特权设置
    [/^(.*)AutoPerks - A Respec is required. Trying respec...$/, '$1自动特权-需要洗点。尝试洗点中……'], //脚本3自动特权设置
    [/^(.*)RAutoPerks: Your existing fixed-perks reserve Radon$/, '$1宇宙2自动特权：当前不修改特权总共花费氡数量'], //脚本3自动特权设置
    [/^(.*)RAutoPerks: Major Error: Make sure all ratios are set properly.$/, '$1宇宙2自动特权：错误：请确保所有比例设置合理。'], //脚本3自动特权设置
    [/^(.*)RAutoPerks: Auto-Allocate Finished.$/, '$1宇宙2自动特权：自动分配完毕。'], //脚本3自动特权设置
    [/^(.*)Beginning RAutoPerks1 calculate how to spend (.*) Radon... This could take a while...$/, '$1宇宙2自动特权1开始计算如何分配$2氡……可能要花费一些时间……'], //脚本3自动特权设置
    [/^(.*)RAutoPerks: Major Error - Not enough radon to buy fixed perks.$/, '$1宇宙2自动特权：错误：氡不足以购买不修改特权。'], //脚本3自动特权设置
    [/^(.*)RAutoPerks1: Pass One Complete. Loops ran$/, '$1宇宙2自动特权1：第一阶段完成。循环次数'], //脚本3自动特权设置
    [/^(.*)RAutoPerks1: Dump Perk Looting level post-dump: (.*) Radon Dumped: (.*) Rn.$/, '$1宇宙2自动特权1：主加特权劫掠，主加后特权等级：$2，花费：$3氡。'], //脚本3自动特权设置
    [/^(.*)RAutoPerks1: Dump Perk Toughness level post-dump: (.*) Radon Dumped: (.*) Rn.$/, '$1宇宙2自动特权1：主加特权坚韧，主加后特权等级：$2，花费：$3氡。'], //脚本3自动特权设置
    [/^(.*)RAutoPerks1: Dump Perk Power level post-dump: (.*) Radon Dumped: (.*) Rn.$/, '$1宇宙2自动特权1：主加特权力量，主加后特权等级：$2，花费：$3氡。'], //脚本3自动特权设置
    [/^(.*)RAutoPerks1: Dump Perk Motivation level post-dump: (.*) Radon Dumped: (.*) Rn.$/, '$1宇宙2自动特权1：主加特权鼓舞，主加后特权等级：$2，花费：$3氡。'], //脚本3自动特权设置
    [/^(.*)RAutoPerks1: Dump Perk Pheromones level post-dump: (.*) Radon Dumped: (.*) Rn.$/, '$1宇宙2自动特权1：主加特权信息素，主加后特权等级：$2，花费：$3氡。'], //脚本3自动特权设置
    [/^(.*)RAutoPerks1: Dump Perk Artisanistry level post-dump: (.*) Radon Dumped: (.*) Rn.$/, '$1宇宙2自动特权1：主加特权手艺娴熟，主加后特权等级：$2，花费：$3氡。'], //脚本3自动特权设置
    [/^(.*)RAutoPerks1: Dump Perk Carpentry level post-dump: (.*) Radon Dumped: (.*) Rn.$/, '$1宇宙2自动特权1：主加特权木工，主加后特权等级：$2，花费：$3氡。'], //脚本3自动特权设置
    [/^(.*)RAutoPerks1: Dump Perk Prismal level post-dump: (.*) Radon Dumped: (.*) Rn.$/, '$1宇宙2自动特权1：主加特权棱镜化，主加后特权等级：$2，花费：$3氡。'], //脚本3自动特权设置
    [/^(.*)RAutoPerks1: Dump Perk Equality level post-dump: (.*) Radon Dumped: (.*) Rn.$/, '$1宇宙2自动特权1：主加特权平等，主加后特权等级：$2，花费：$3氡。'], //脚本3自动特权设置
    [/^(.*)RAutoPerks1: Dump Perk Criticality level post-dump: (.*) Radon Dumped: (.*) Rn.$/, '$1宇宙2自动特权1：主加特权暴击限界，主加后特权等级：$2，花费：$3氡。'], //脚本3自动特权设置
    [/^(.*)RAutoPerks1: Dump Perk Resilience level post-dump: (.*) Radon Dumped: (.*) Rn.$/, '$1宇宙2自动特权1：主加特权弹性，主加后特权等级：$2，花费：$3氡。'], //脚本3自动特权设置
    [/^(.*)RAutoPerks1: Dump Perk Tenacity level post-dump: (.*) Radon Dumped: (.*) Rn.$/, '$1宇宙2自动特权1：主加特权坚持，主加后特权等级：$2，花费：$3氡。'], //脚本3自动特权设置
    [/^(.*)RAutoPerks1: Pass two complete. Round 2 cleanup spend of $/, '$1宇宙2自动特权1：第二阶段完成。第二阶段花费'], //脚本3自动特权设置
    [/^(.*)Beginning RAutoPerks2 calculate how to spend (.*) Radon... This could take a while...$/, '$1宇宙2自动特权2开始计算如何分配$2氡……可能要花费一些时间……'], //脚本3自动特权设置
    [/^(.*)RAutoPerks2: Pass One Complete. Loops ran$/, '$1宇宙2自动特权2：第一阶段完成。循环次数'], //脚本3自动特权设置
    [/^(.*)RAutoPerks2: Dump Perk Looting level post-dump: (.*) Radon Dumped: (.*) Rn.$/, '$1宇宙2自动特权2：主加特权劫掠，主加后特权等级：$2，花费：$3氡。'], //脚本3自动特权设置
    [/^(.*)RAutoPerks2: Dump Perk Toughness level post-dump: (.*) Radon Dumped: (.*) Rn.$/, '$1宇宙2自动特权2：主加特权坚韧，主加后特权等级：$2，花费：$3氡。'], //脚本3自动特权设置
    [/^(.*)RAutoPerks2: Dump Perk Power level post-dump: (.*) Radon Dumped: (.*) Rn.$/, '$1宇宙2自动特权2：主加特权力量，主加后特权等级：$2，花费：$3氡。'], //脚本3自动特权设置
    [/^(.*)RAutoPerks2: Dump Perk Motivation level post-dump: (.*) Radon Dumped: (.*) Rn.$/, '$1宇宙2自动特权2：主加特权鼓舞，主加后特权等级：$2，花费：$3氡。'], //脚本3自动特权设置
    [/^(.*)RAutoPerks2: Dump Perk Pheromones level post-dump: (.*) Radon Dumped: (.*) Rn.$/, '$1宇宙2自动特权2：主加特权信息素，主加后特权等级：$2，花费：$3氡。'], //脚本3自动特权设置
    [/^(.*)RAutoPerks2: Dump Perk Artisanistry level post-dump: (.*) Radon Dumped: (.*) Rn.$/, '$1宇宙2自动特权2：主加特权手艺娴熟，主加后特权等级：$2，花费：$3氡。'], //脚本3自动特权设置
    [/^(.*)RAutoPerks2: Dump Perk Carpentry level post-dump: (.*) Radon Dumped: (.*) Rn.$/, '$1宇宙2自动特权2：主加特权木工，主加后特权等级：$2，花费：$3氡。'], //脚本3自动特权设置
    [/^(.*)RAutoPerks2: Dump Perk Prismal level post-dump: (.*) Radon Dumped: (.*) Rn.$/, '$1宇宙2自动特权2：主加特权棱镜化，主加后特权等级：$2，花费：$3氡。'], //脚本3自动特权设置
    [/^(.*)RAutoPerks2: Dump Perk Equality level post-dump: (.*) Radon Dumped: (.*) Rn.$/, '$1宇宙2自动特权2：主加特权平等，主加后特权等级：$2，花费：$3氡。'], //脚本3自动特权设置
    [/^(.*)RAutoPerks2: Dump Perk Criticality level post-dump: (.*) Radon Dumped: (.*) Rn.$/, '$1宇宙2自动特权2：主加特权暴击限界，主加后特权等级：$2，花费：$3氡。'], //脚本3自动特权设置
    [/^(.*)RAutoPerks2: Dump Perk Resilience level post-dump: (.*) Radon Dumped: (.*) Rn.$/, '$1宇宙2自动特权2：主加特权弹性，主加后特权等级：$2，花费：$3氡。'], //脚本3自动特权设置
    [/^(.*)RAutoPerks2: Dump Perk Tenacity level post-dump: (.*) Radon Dumped: (.*) Rn.$/, '$1宇宙2自动特权2：主加特权坚持，主加后特权等级：$2，花费：$3氡。'], //脚本3自动特权设置
    [/^(.*)RAutoPerks2: Pass Two Complete. Cleanup Spent Any Leftover Radon: (.*) He.$/, '$1宇宙2自动特权2：第二阶段完成。花费了剩余的$2氡。'], //脚本3自动特权设置
    [/^(.*)RAutoPerks-Respec Buying: Range$/, '$1宇宙2自动特权-洗点后购买：范围'], //脚本3自动特权设置
    [/^(.*)RAutoPerks-Respec Buying: Agility$/, '$1宇宙2自动特权-洗点后购买：敏捷'], //脚本3自动特权设置
    [/^(.*)RAutoPerks-Respec Buying: Bait$/, '$1宇宙2自动特权-洗点后购买：诱饵'], //脚本3自动特权设置
    [/^(.*)RAutoPerks-Respec Buying: Trumps$/, '$1宇宙2自动特权-洗点后购买：王牌'], //脚本3自动特权设置
    [/^(.*)RAutoPerks-Respec Buying: Packrat$/, '$1宇宙2自动特权-洗点后购买：囤积成瘾'], //脚本3自动特权设置
    [/^(.*)RAutoPerks-Respec Buying: Overkill$/, '$1宇宙2自动特权-洗点后购买：超杀'], //脚本3自动特权设置
    [/^(.*)RAutoPerks-Respec Buying: Looting$/, '$1宇宙2自动特权-洗点后购买：劫掠'], //脚本3自动特权设置
    [/^(.*)RAutoPerks-Respec Buying: Toughness$/, '$1宇宙2自动特权-洗点后购买：坚韧'], //脚本3自动特权设置
    [/^(.*)RAutoPerks-Respec Buying: Power$/, '$1宇宙2自动特权-洗点后购买：力量'], //脚本3自动特权设置
    [/^(.*)RAutoPerks-Respec Buying: Motivation$/, '$1宇宙2自动特权-洗点后购买：鼓舞'], //脚本3自动特权设置
    [/^(.*)RAutoPerks-Respec Buying: Pheromones$/, '$1宇宙2自动特权-洗点后购买：信息素'], //脚本3自动特权设置
    [/^(.*)RAutoPerks-Respec Buying: Artisanistry$/, '$1宇宙2自动特权-洗点后购买：手艺娴熟'], //脚本3自动特权设置
    [/^(.*)RAutoPerks-Respec Buying: Carpentry$/, '$1宇宙2自动特权-洗点后购买：木工'], //脚本3自动特权设置
    [/^(.*)RAutoPerks-Respec Buying: Prismal$/, '$1宇宙2自动特权-洗点后购买：棱镜化'], //脚本3自动特权设置
    [/^(.*)RAutoPerks-Respec Buying: Equality$/, '$1宇宙2自动特权-洗点后购买：平等'], //脚本3自动特权设置
    [/^(.*)RAutoPerks-Respec Buying: Criticality$/, '$1宇宙2自动特权-洗点后购买：暴击限界'], //脚本3自动特权设置
    [/^(.*)RAutoPerks-Respec Buying: Resilience$/, '$1宇宙2自动特权-洗点后购买：弹性'], //脚本3自动特权设置
    [/^(.*)RAutoPerks-Respec Buying: Tenacity$/, '$1宇宙2自动特权-洗点后购买：坚持'], //脚本3自动特权设置
    [/^(.*)RAutoPerks-Respec Buying: Greed$/, '$1宇宙2自动特权-洗点后购买：贪婪'], //脚本3自动特权设置
    [/^(.*)RAutoPerks-Respec Error Couldn't Afford Asked Perk: Range$/, '$1宇宙2自动特权-洗点错误，氡不足以购买特权：范围'], //脚本3自动特权设置
    [/^(.*)RAutoPerks-Respec Error Couldn't Afford Asked Perk: Agility$/, '$1宇宙2自动特权-洗点错误，氡不足以购买特权：敏捷'], //脚本3自动特权设置
    [/^(.*)RAutoPerks-Respec Error Couldn't Afford Asked Perk: Bait$/, '$1宇宙2自动特权-洗点错误，氡不足以购买特权：诱饵'], //脚本3自动特权设置
    [/^(.*)RAutoPerks-Respec Error Couldn't Afford Asked Perk: Trumps$/, '$1宇宙2自动特权-洗点错误，氡不足以购买特权：王牌'], //脚本3自动特权设置
    [/^(.*)RAutoPerks-Respec Error Couldn't Afford Asked Perk: Packrat$/, '$1宇宙2自动特权-洗点错误，氡不足以购买特权：囤积成瘾'], //脚本3自动特权设置
    [/^(.*)RAutoPerks-Respec Error Couldn't Afford Asked Perk: Overkill$/, '$1宇宙2自动特权-洗点错误，氡不足以购买特权：超杀'], //脚本3自动特权设置
    [/^(.*)RAutoPerks-Respec Error Couldn't Afford Asked Perk: Looting$/, '$1宇宙2自动特权-洗点错误，氡不足以购买特权：劫掠'], //脚本3自动特权设置
    [/^(.*)RAutoPerks-Respec Error Couldn't Afford Asked Perk: Toughness$/, '$1宇宙2自动特权-洗点错误，氡不足以购买特权：坚韧'], //脚本3自动特权设置
    [/^(.*)RAutoPerks-Respec Error Couldn't Afford Asked Perk: Power$/, '$1宇宙2自动特权-洗点错误，氡不足以购买特权：力量'], //脚本3自动特权设置
    [/^(.*)RAutoPerks-Respec Error Couldn't Afford Asked Perk: Motivation$/, '$1宇宙2自动特权-洗点错误，氡不足以购买特权：鼓舞'], //脚本3自动特权设置
    [/^(.*)RAutoPerks-Respec Error Couldn't Afford Asked Perk: Pheromones$/, '$1宇宙2自动特权-洗点错误，氡不足以购买特权：信息素'], //脚本3自动特权设置
    [/^(.*)RAutoPerks-Respec Error Couldn't Afford Asked Perk: Artisanistry$/, '$1宇宙2自动特权-洗点错误，氡不足以购买特权：手艺娴熟'], //脚本3自动特权设置
    [/^(.*)RAutoPerks-Respec Error Couldn't Afford Asked Perk: Carpentry$/, '$1宇宙2自动特权-洗点错误，氡不足以购买特权：木工'], //脚本3自动特权设置
    [/^(.*)RAutoPerks-Respec Error Couldn't Afford Asked Perk: Prismal$/, '$1宇宙2自动特权-洗点错误，氡不足以购买特权：棱镜化'], //脚本3自动特权设置
    [/^(.*)RAutoPerks-Respec Error Couldn't Afford Asked Perk: Equality$/, '$1宇宙2自动特权-洗点错误，氡不足以购买特权：平等'], //脚本3自动特权设置
    [/^(.*)RAutoPerks-Respec Error Couldn't Afford Asked Perk: Criticality$/, '$1宇宙2自动特权-洗点错误，氡不足以购买特权：暴击限界'], //脚本3自动特权设置
    [/^(.*)RAutoPerks-Respec Error Couldn't Afford Asked Perk: Resilience$/, '$1宇宙2自动特权-洗点错误，氡不足以购买特权：弹性'], //脚本3自动特权设置
    [/^(.*)RAutoPerks-Respec Error Couldn't Afford Asked Perk: Tenacity$/, '$1宇宙2自动特权-洗点错误，氡不足以购买特权：坚持'], //脚本3自动特权设置
    [/^(.*)RAutoPerks-Respec Error Couldn't Afford Asked Perk: Greed$/, '$1宇宙2自动特权-洗点错误，氡不足以购买特权：贪婪'], //脚本3自动特权设置
    [/^(.*)RAutoPerks RESPEC Required for: Range$/, '$1宇宙2自动特权需要洗点特权：范围'], //脚本3自动特权设置
    [/^(.*)RAutoPerks RESPEC Required for: Agility$/, '$1宇宙2自动特权需要洗点特权：敏捷'], //脚本3自动特权设置
    [/^(.*)RAutoPerks RESPEC Required for: Bait$/, '$1宇宙2自动特权需要洗点特权：诱饵'], //脚本3自动特权设置
    [/^(.*)RAutoPerks RESPEC Required for: Trumps$/, '$1宇宙2自动特权需要洗点特权：王牌'], //脚本3自动特权设置
    [/^(.*)RAutoPerks RESPEC Required for: Packrat$/, '$1宇宙2自动特权需要洗点特权：囤积成瘾'], //脚本3自动特权设置
    [/^(.*)RAutoPerks RESPEC Required for: Overkill$/, '$1宇宙2自动特权需要洗点特权：超杀'], //脚本3自动特权设置
    [/^(.*)RAutoPerks RESPEC Required for: Looting$/, '$1宇宙2自动特权需要洗点特权：劫掠'], //脚本3自动特权设置
    [/^(.*)RAutoPerks RESPEC Required for: Toughness$/, '$1宇宙2自动特权需要洗点特权：坚韧'], //脚本3自动特权设置
    [/^(.*)RAutoPerks RESPEC Required for: Power$/, '$1宇宙2自动特权需要洗点特权：力量'], //脚本3自动特权设置
    [/^(.*)RAutoPerks RESPEC Required for: Motivation$/, '$1宇宙2自动特权需要洗点特权：鼓舞'], //脚本3自动特权设置
    [/^(.*)RAutoPerks RESPEC Required for: Pheromones$/, '$1宇宙2自动特权需要洗点特权：信息素'], //脚本3自动特权设置
    [/^(.*)RAutoPerks RESPEC Required for: Artisanistry$/, '$1宇宙2自动特权需要洗点特权：手艺娴熟'], //脚本3自动特权设置
    [/^(.*)RAutoPerks RESPEC Required for: Carpentry$/, '$1宇宙2自动特权需要洗点特权：木工'], //脚本3自动特权设置
    [/^(.*)RAutoPerks RESPEC Required for: Prismal$/, '$1宇宙2自动特权需要洗点特权：棱镜化'], //脚本3自动特权设置
    [/^(.*)RAutoPerks RESPEC Required for: Equality$/, '$1宇宙2自动特权需要洗点特权：平等'], //脚本3自动特权设置
    [/^(.*)RAutoPerks RESPEC Required for: Criticality$/, '$1宇宙2自动特权需要洗点特权：暴击限界'], //脚本3自动特权设置
    [/^(.*)RAutoPerks RESPEC Required for: Resilience$/, '$1宇宙2自动特权需要洗点特权：弹性'], //脚本3自动特权设置
    [/^(.*)RAutoPerks RESPEC Required for: Tenacity$/, '$1宇宙2自动特权需要洗点特权：坚持'], //脚本3自动特权设置
    [/^(.*)RAutoPerks RESPEC Required for: Greed$/, '$1宇宙2自动特权需要洗点特权：贪婪'], //脚本3自动特权设置
    [/^(.*)RAutoPerks-NoRespec Adding: Range$/, '$1宇宙2自动特权-无洗点提升：范围'], //脚本3自动特权设置
    [/^(.*)RAutoPerks-NoRespec Adding: Agility$/, '$1宇宙2自动特权-无洗点提升：敏捷'], //脚本3自动特权设置
    [/^(.*)RAutoPerks-NoRespec Adding: Bait$/, '$1宇宙2自动特权-无洗点提升：诱饵'], //脚本3自动特权设置
    [/^(.*)RAutoPerks-NoRespec Adding: Trumps$/, '$1宇宙2自动特权-无洗点提升：王牌'], //脚本3自动特权设置
    [/^(.*)RAutoPerks-NoRespec Adding: Packrat$/, '$1宇宙2自动特权-无洗点提升：囤积成瘾'], //脚本3自动特权设置
    [/^(.*)RAutoPerks-NoRespec Adding: Overkill$/, '$1宇宙2自动特权-无洗点提升：超杀'], //脚本3自动特权设置
    [/^(.*)RAutoPerks-NoRespec Adding: Looting$/, '$1宇宙2自动特权-无洗点提升：劫掠'], //脚本3自动特权设置
    [/^(.*)RAutoPerks-NoRespec Adding: Toughness$/, '$1宇宙2自动特权-无洗点提升：坚韧'], //脚本3自动特权设置
    [/^(.*)RAutoPerks-NoRespec Adding: Power$/, '$1宇宙2自动特权-无洗点提升：力量'], //脚本3自动特权设置
    [/^(.*)RAutoPerks-NoRespec Adding: Motivation$/, '$1宇宙2自动特权-无洗点提升：鼓舞'], //脚本3自动特权设置
    [/^(.*)RAutoPerks-NoRespec Adding: Pheromones$/, '$1宇宙2自动特权-无洗点提升：信息素'], //脚本3自动特权设置
    [/^(.*)RAutoPerks-NoRespec Adding: Artisanistry$/, '$1宇宙2自动特权-无洗点提升：手艺娴熟'], //脚本3自动特权设置
    [/^(.*)RAutoPerks-NoRespec Adding: Carpentry$/, '$1宇宙2自动特权-无洗点提升：木工'], //脚本3自动特权设置
    [/^(.*)RAutoPerks-NoRespec Adding: Prismal$/, '$1宇宙2自动特权-无洗点提升：棱镜化'], //脚本3自动特权设置
    [/^(.*)RAutoPerks-NoRespec Adding: Equality$/, '$1宇宙2自动特权-无洗点提升：平等'], //脚本3自动特权设置
    [/^(.*)RAutoPerks-NoRespec Adding: Criticality$/, '$1宇宙2自动特权-无洗点提升：暴击限界'], //脚本3自动特权设置
    [/^(.*)RAutoPerks-NoRespec Adding: Resilience$/, '$1宇宙2自动特权-无洗点提升：弹性'], //脚本3自动特权设置
    [/^(.*)RAutoPerks-NoRespec Adding: Tenacity$/, '$1宇宙2自动特权-无洗点提升：坚持'], //脚本3自动特权设置
    [/^(.*)RAutoPerks-NoRespec Adding: Greed$/, '$1宇宙2自动特权-无洗点提升：贪婪'], //脚本3自动特权设置
    [/^(.*)RAutoPerks - A Respec is required. Trying respec...$/, '$1宇宙2自动特权-需要洗点。尝试洗点中……'], //脚本3自动特权设置
    [/^(.*)My HeliumHr was: (.*) & the Best HeliumHr was: (.*) at zone$/, '$1当前氦每小时为$2，自上次传送后最高的氦每小时为$3，出现区域为'], //脚本3传送门设置
    [/^(.*)C2 Runner: Running C2 Challenge Size$/, '$1挑战2自动运行：运行尺寸挑战'], //脚本3传送门设置
    [/^(.*)C2 Runner: Running C2 Challenge Slow$/, '$1挑战2自动运行：运行迟缓挑战'], //脚本3传送门设置
    [/^(.*)C2 Runner: Running C2 Challenge Watch$/, '$1挑战2自动运行：运行守望挑战'], //脚本3传送门设置
    [/^(.*)C2 Runner: Running C2 Challenge Discipline$/, '$1挑战2自动运行：运行纪律挑战'], //脚本3传送门设置
    [/^(.*)C2 Runner: Running C2 Challenge Balance$/, '$1挑战2自动运行：运行平衡挑战'], //脚本3传送门设置
    [/^(.*)C2 Runner: Running C2 Challenge Meditate$/, '$1挑战2自动运行：运行冥想挑战'], //脚本3传送门设置
    [/^(.*)C2 Runner: Running C2 Challenge Metal$/, '$1挑战2自动运行：运行金属挑战'], //脚本3传送门设置
    [/^(.*)C2 Runner: Running C2 Challenge Lead$/, '$1挑战2自动运行：运行领导挑战'], //脚本3传送门设置
    [/^(.*)C2 Runner: Running C2 Challenge Nom$/, '$1挑战2自动运行：运行美味挑战'], //脚本3传送门设置
    [/^(.*)C2 Runner: Running C2 Challenge Electricity$/, '$1挑战2自动运行：运行电流挑战'], //脚本3传送门设置
    [/^(.*)C2 Runner: Running C2 Challenge Toxicity$/, '$1挑战2自动运行：运行毒性挑战'], //脚本3传送门设置
    [/^(.*)First Stage: Bought Max Looting II$/, '$1第一阶段：购买最大数量的劫掠 II特权'], //脚本3传送门设置
    [/^(.*)C2 Runner: All C2s above Threshold!$/, '$1挑战2自动运行：所有挑战2均高于阈值！'], //脚本3传送门设置
    [/^(.*)All available Dailies already completed.$/, '$1当前全部的日常挑战都完成了。'], //脚本3传送门设置
    [/^(.*)Portaling into Daily for: (.*) now!$/, '$1传送并进行日常挑战：日期$2！'], //脚本3传送门设置
    [/^(.*)Second Stage: Bought Max Looting II$/, '$1第二阶段：购买最大数量的劫掠 II特权'], //脚本3传送门设置
    [/^(.*)Finished challenge2 because we are on zone$/, '$1该挑战2结束，因为我们到达了区域'], //脚本3传送门设置
    [/^(.*)My RadonHr was: (.*) & the Best RadonHr was: (.*) at zone$/, '$1当前氡每小时为$2，自上次传送后最高的氡每小时为$3，出现区域为'], //脚本3传送门设置
    [/^(.*)First Stage: Bought Max Greed$/, '$1第一阶段：购买最大数量的贪婪特权'], //脚本3传送门设置
    [/^(.*)First Stage: Bought Max Looting$/, '$1第一阶段：购买最大数量的劫掠特权'], //脚本3传送门设置
    [/^(.*)Second Stage: Bought Max Greed$/, '$1第二阶段：购买最大数量的贪婪特权'], //脚本3传送门设置
    [/^(.*)Second Stage: Bought Max Looting$/, '$1第二阶段：购买最大数量的劫掠特权'], //脚本3传送门设置
    [/^(.*)AutoStance B\/$/, '$1自动阵型 B/阵型'], //脚本3阵型设置
    [/^(.*)Upgraded Miners$/, '$1购买升级：矿工'], //脚本3升级设置
    [/^(.*)Upgraded Scientists$/, '$1购买升级：科学家'], //脚本3升级设置
    [/^(.*)Upgraded Coordination$/, '$1购买升级：协作'], //脚本3升级设置
    [/^(.*)Upgraded Speedminer$/, '$1购买升级：采矿加速'], //脚本3升级设置
    [/^(.*)Upgraded Speedlumber$/, '$1购买升级：砍伐加速'], //脚本3升级设置
    [/^(.*)Upgraded Speedfarming$/, '$1购买升级：耕作加速'], //脚本3升级设置
    [/^(.*)Upgraded Speedscience$/, '$1购买升级：研究加速'], //脚本3升级设置
    [/^(.*)Upgraded Speedexplorer$/, '$1购买升级：探险家加速'], //脚本3升级设置
    [/^(.*)Upgraded Megaminer$/, '$1购买升级：超级采矿'], //脚本3升级设置
    [/^(.*)Upgraded Megalumber$/, '$1购买升级：超级砍伐'], //脚本3升级设置
    [/^(.*)Upgraded Megafarming$/, '$1购买升级：超级耕作'], //脚本3升级设置
    [/^(.*)Upgraded Megascience$/, '$1购买升级：超级研究'], //脚本3升级设置
    [/^(.*)Upgraded Efficiency$/, '$1购买升级：效率'], //脚本3升级设置
    [/^(.*)Upgraded TrainTacular$/, '$1购买升级：格挡提升'], //脚本3升级设置
    [/^(.*)Upgraded Trainers$/, '$1购买升级：训练师'], //脚本3升级设置
    [/^(.*)Upgraded Explorers$/, '$1购买升级：探险家'], //脚本3升级设置
    [/^(.*)Upgraded Blockmaster$/, '$1购买升级：格挡大师'], //脚本3升级设置
    [/^(.*)Upgraded Battle$/, '$1购买升级：战斗'], //脚本3升级设置
    [/^(.*)Upgraded Bloodlust$/, '$1购买升级：嗜血'], //脚本3升级设置
    [/^(.*)Upgraded Bounty$/, '$1购买升级：赏金'], //脚本3升级设置
    [/^(.*)Upgraded Egg$/, '$1购买升级：蛋'], //脚本3升级设置
    [/^(.*)Upgraded Anger$/, '$1购买升级：愤怒'], //脚本3升级设置
    [/^(.*)Upgraded Formations$/, '$1购买升级：阵型'], //脚本3升级设置
    [/^(.*)Upgraded Dominance$/, '$1购买升级：支配阵型'], //脚本3升级设置
    [/^(.*)Upgraded Barrier$/, '$1购买升级：屏障阵型'], //脚本3升级设置
    [/^(.*)Upgraded UberHut$/, '$1购买升级：超级小屋'], //脚本3升级设置
    [/^(.*)Upgraded UberHouse$/, '$1购买升级：超级宅院'], //脚本3升级设置
    [/^(.*)Upgraded UberMansion$/, '$1购买升级：超级豪宅'], //脚本3升级设置
    [/^(.*)Upgraded UberHotel$/, '$1购买升级：超级宾馆'], //脚本3升级设置
    [/^(.*)Upgraded UberResort$/, '$1购买升级：超级度假村'], //脚本3升级设置
    [/^(.*)Upgraded Trapstorm$/, '$1购买升级：自动陷阱'], //脚本3升级设置
    [/^(.*)Upgraded Gigastation$/, '$1购买升级：千兆核心'], //脚本3升级设置
    [/^(.*)Upgraded Shieldblock$/, '$1购买升级：盾牌格挡'], //脚本3升级设置
    [/^(.*)Upgraded Potency$/, '$1购买升级：繁殖效率'], //脚本3升级设置
    [/^(.*)Upgraded Magmamancers$/, '$1购买升级：岩浆巫师'], //脚本3升级设置
    [/^(.*)Upgraded Rage$/, '$1购买升级：暴怒'], //脚本3升级设置
    [/^(.*)Upgraded Prismatic$/, '$1购买升级：棱镜护盾'], //脚本3升级设置
    [/^(.*)Upgraded Prismalicious$/, '$1购买升级：优质棱镜'], //脚本3升级设置
    [/^(.*)Error: LocalStorage is full, or error. Attempt to delete some portals from your graph or restart browser.$/, '$1浏览器数据存储已满，或者出错。请删除一些图表中传送门的数据或重启浏览器。'], //脚本3公用设置












    [/^(\d+) Barns, (\d+) Sheds, and (\d+) Forges.$/, '$1个谷仓，$2个窝棚和$3个锻造厂。'],
    [/^([\d\.]+) Secs$/, '$1 秒'],
    [/^(.+) copies of Coordination$/, '$1 份协调'],
    [/^(.+) Mins? (.+) Secs?$/, '$1 分 $2 秒'],
    [/^(.+) Days? (.+) Hours?$/, '$1 天 $2 小时'],
    [/^(.+) Years? (.+) Days?$/, '$1 年 $2 天'],
    [/^(.+) Min (.+) Sec$/, '$1 分 $2 秒'],
    [/^(.+) Secs \/ (.+) Secs$/, '$1 秒 \/ $2 秒'],
    [/^Collect  (.+) Gem$/, '收集 $1 宝石'],
    [/^([\d\.]+) Trimp$/, '$1 脆皮'],
    [/^([\d\.]+) Trimps$/, '$1 脆皮'],
    [/^([\s\d]+)\((\d+) Secs?$/, '$1 \($2 秒'],
    [/^([\s\d]+)\((\d+) Mins? (\d+) Secs?$/, '$1 \($2 分 $3 秒'],
    [/^Min (.+) Max$/, '最小 $1，最高'],
    [/^(\d+) workspace$/, '$1 工作空间'],
    [/^(\d+) Mins (\d+) Secs$/, '$1 分 $2 秒'],
    [/^(\d+) Min (\d+) Secs$/, '$1 分 $2 秒'],
    [/^(\d+) Hours (\d+) Mins$/, '$1 时 $2 分'],
    [/^(\d+) Hour (\d+) Mins$/, '$1 时 $2 分'],
    [/^(\d+) Hours (\d+) Min$/, '$1 时 $2 分'],
    [/^(\d+) Hour (\d+) Min$/, '$1 时 $2 分'],
    [/^Spirestones: (.+) \/$/, '尖塔石头: $1 \/'],
    [/^You see (.+) canisters of Helium left on the ground and pick them up. Useful!$/, '你看到$1的氦气罐留在地上并捡起来。 很有用！'],
    [/^(\d+\%) Map Loot$/, '$1 地图资源获取'],
    [/^(\d+\%) Trimp Damage$/, '$1 脆皮伤害'],
    [/^(\d+\%) Helium$/, '$1 氦'],
    [/^(\d+\%) Radon$/, '$1 氡'],
    [/^- (.+) Seconds$/, '- $1 秒'],
    [/^(.+) workspaces$/, '$1 工作台'],
    [/^\+([\d\.]+)\% Damage$/, '\+$1\% 伤害'],
    [/^Zone (\d+), Cell$/, '区域 $1, 格子'],
    [/^Golden Battle (.+)$/, '金色战斗 $1'],
    [/^Golden Helium (.+)$/, '金色氦 $1'],
    [/^Golden Void (.+)$/, '金色虚空 $1'],
    [/^Fire Trap ([I,V,X,L,C,D,M]+)$/, '火焰陷阱 $1'],
    [/^Frost Trap ([I,V,X,L,C,D,M]+)$/, '冰霜陷阱 $1'],
    [/^Strength Tower ([I,V,X,L,C,D,M]+)$/, '力量塔 $1'],
    [/^Poison Trap ([I,V,X,L,C,D,M]+)$/, '剧毒陷阱 $1'],
    [/^Lightning Trap ([I,V,X,L,C,D,M]+)$/, '闪电陷阱 $1'],
    [/^Condenser Tower ([I,V,X,L,C,D,M]+)$/, '冷凝塔 $1'],
    [/^Knowledge Tower ([I,V,X,L,C,D,M]+)$/, '知识塔 $1'],
	[/^Add \((.+) Nu$/, '添加 ($1虚空物质'],
	[/^Replace \((.+) Nu$/, '替换 ($1虚空物质'],
	[/^You have spent (.+) Helium on this Perk$/, '你已经花费 $1 氦在这个附带特权上'],
	[/^You have been in this Zone for (\d+) mins$/, '你已经在该区域待了$1分钟'],
	[/^You found (.+) Dark Essence!$/, '你找到了$1黑暗精华'],
	[/^You found (.+) Tokens of Poison!$/, '你找到了$1毒符记'],
	[/^You found (.+) Tokens of Ice!$/, '你找到了$1冰符记'],
	[/^You found (.+) Tokens of Wind!$/, '你找到了$1风符记'],
	[/^Trimps have (.+) more attack on even numbered Zones$/, '脆皮在偶数区域增加$1攻击'],
	[/^Trimps have (.+) less attack on odd numbered Zones$/, '脆皮在奇数区域减少$1攻击'],
	[/^Equipment is (.+) cheaper.$/, '装备的价格下降$1'],
	[/^Your Trimps have -(.+) Crit Chance.$/, '脆皮的暴击概率减少$1'],
	[/^Your Trimps have (\d.+) Crit Chance.$/, '脆皮的暴击概率增加$1'],
	[/^Your Trimps breed (.+) slower$/, '减少$1的脆皮繁殖速度'],
	[/^Gain a stack after killing an enemy, reducing breed speed by (.+) \(compounding\). Stacks cap at (.+), and reset after clearing a Zone.$/, '每杀死一个敌人叠一层减益效果,减少$1 (叠乘)的繁殖速度。最高叠$2层,每打通一个区域效果重置。'],
	[/^Gain (.+) less Metal, Food, Wood, and Gems from all sources$/, '所有来源的金属，食物，木材和宝石收益减少$1'],
	[/^Enemies instantly deal (.+) of their attack damage when killed.$/, '当敌人被杀死时，会瞬间造成相当于其攻击伤害$1的伤害'],
	[/^Enemies have a 25% chance to crit for (.+) of normal damage.$/, '敌人有25%的机率产生重击，为普通伤害的$1'],
	[/^Enemies instantly deal (.+) of their attack damage when killed unless your block is as high as your maximum health.$/, '当敌人被杀死时，会瞬间造成相当于其攻击伤害$1的伤害，除非你的防御和超过生命值上限'],
	[/^Enemies have a (.+) chance to reflect an attack, dealing (.+) of damage taken back to your Trimps.$/, '敌人有$1的概率反弹一次攻击，将此次伤害的$2返还给你的脆皮。'],
	[/^Enemies stack a debuff with each attack, reducing Trimp attack by (.+) per stack. Stacks cap at 9 and reset on Trimp death.$/, '敌人的每次攻击叠加一层负面效果，每层效果减少脆皮$1的攻击。最高叠加9次，直到脆皮死亡后重置。'],
	[/^Enemies stack a debuff with each attack, damaging Trimps for (.+) of total health per turn per stack, resets on Trimp death.$/, '敌人的每次攻击叠加一个负面效果，每层效果在每回合对脆皮造成$1总血量的伤害，直到脆皮死亡后重置。'],
	[/^Enemies have a (.+) chance to dodge your attacks on even Zones.$/, '在偶数层，敌人有$1的概率闪躲你的攻击，'],
	[/^Enemies have a (.+) chance to dodge your attacks on odd Zones.$/, '在奇数层，敌人有$1的概率闪躲你的攻击，'],
	[/^Trimp max damage increased by (.+) \(additive\).$/, '脆皮最大伤害增加$1(附加的)'],
	[/^Gain (.+) more resources from gathering$/, '收集获得的资源增加$1'],
	[/^(.+) of Bad Guys in the first (\d+) rows of the World will be mutated into Mutimps.$/, '世界前$2行的敌人有$1概率突变为Mutimps'],
	[/^A building where your Trimps can work out. Each Gym increases the amount of damage each trimp can block by (.+) and increases the base block of all Gyms by 15% \(compounding\).$/, '一个你可以锻炼脆皮的建筑。每个健身房都可以增加每个脆皮$1格挡的伤害量，并且提高所有健身房15%(复合)基础格挡'],
	[/^(\d+)% Map Bonus$/, '$1% 地图奖励'],
	[/^(\d+) remaining enemy?(ies)? in your current Zone are holding Dark Essence. Your current enemy at this Zone would be worth (.+) Essence if it were holding any.$/, '当前区域剩余 $1 敌人拥有黑暗精华。如果当前敌人拥有黑暗精华，它会掉落 $3'],
]);
