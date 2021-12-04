import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          "中古时期":
            "In the Middle Ages, the village of Xia Yuan lived this group of happy little lowb, one day a group of idle lowb came to play in the water pool under the nearby Shijia Mountain, and when they finished playing on the shore, a small partner suddenly found a path in the trees that did not exist before ...",
          "他们沿着小路走进去":
            "They walked along the path, along the way full of light red peach blossoms, through the flower road, they came across see a huge stone cave.There are ten stone doors in the cave, the stone doors are engraved with \"Peach Stone Road\", \"Solomon Port\", \"Lucheng Pass\", \"String Dock\", etc.",
          "lowb们走近发现":
            "The lowb's approached and found that there was a small stone hole under a stone door, just the same size as the lowb coin inside the pocket, the lowb's tried to throw a little lowb inside; throwing and throwing, they found that a stone door suddenly opened, around a few lowb's directly disappeared.",
          "投中过石门的lowb口袋里多了一枚发光的令牌":
            "Later they found that for every ten people who voted lowb, a stone door would open, and the lowb who had thrown the stone door disappeared.",
          "lowb们在原地懵逼了":
            "lowb people in place dumbfounded, do not know how long, until a distant sun sprinkled, they do not know where the disappeared pals went, of course, will not know the subsequent story is slowly unfolding ...",
          "在很久很久之前":
            "A long, long time ago, there was a group of loser punks living on the Loser Land. Their biggest hobby is picking up lowb.",
          "直到有一天":
            "However, behind this seemingly peaceful life, a crisis is quietly coming ...",
          "朋克元年六月":
            "Punk first year in June, in a chance adventure, a punk found a square mine. He excitedly greeted his friends to come together to dig lowb in the mine.",
          "很快大家发现":
            "Soon everyone found that the closer to the center of the mine, the more lowb dug out. Everyone scrambled to get closer to the center, and even attacked each other driven by greed.",   
          "是离开游戏":
            "Is it to leave the game, back to the loser life; or to fight for their lives, to become a winner punk? The punks are about to start their choice.",   
          "在序章中游戏玩家可以用lowb参与抽奖":
            "Welcome to loser continent, here is the first stop of Peachland Stone Gate. Here there will be ten stone doors, each stone door before you can put lowb. There are five prize pools (10k, 50k, 100k, 2000k, 500k). When participants of one prize pool reaching 10 people, the stone door will open. The winner will take away the lowb of all the others (for multiple winners they will share equally). Note that different prize pools are independent of each other, for example, the 10k prize pool cannot share the lowb of the 50k prize pool, and if no one wins the prize, the lowb will be returned and the platform will charge 3% of the fee. Participants in each round will be rewarded with an equal amount of Uyang stone points, and the role of Uyang stone will be reflected in the subsequent loser continent. The winner of each round will receive the corresponding level of stone gate token, the token will be used as the only pass token (nft) of the loser world. The token can be cumulative, the specific rules for obtaining the token will be given gradually in the follow-up. ",
          "游戏为链上操作":
            "(1) The game is based on blockchain, all actions will consume action points. When action points are insufficient, players will not be able to perform any operation. When the action point is less than 10, please exchange 1000 gold coins for 100 action points in time.",
          "卢瑟大陆为回合制游戏":
            "(2) Laser Land is a turn-based game, each turn can only move once. S1 season will contain 188 turns, in the whole game, players will try to walk to the location of the treasure chest by two hundred times.",
          "所有玩家同享一个系统时间":
            "(3) All players share a system time, and the system advances one turn approximately every half hour. Players can plan the direction of movement for each turn in advance, but only when the system time reaches the corresponding turn can they open the chest.",
          "当玩家独自打开宝箱时独享宝箱中的金币":
            "(4) When a player opens a treasure chest alone, the gold in the chest is shared, and when multiple players walk to the treasure chest in the same turn, the gold is shared.",
          "待游戏结束后":
            "(5) At the end of the game, players will share the prize pool in proportion to the gold they have received.",
          "Peachland Stone Gate": "Peachland Stone Gate",
          "Loser Land": "Loser Land",
          "LoserVault": "Loser Vault",
          "卢瑟大陆": "Loser Land (Chapter 1：Squid Game)",
          "序章": "Prologue：Punk Era",
          "第一章": "Chapter 1：Squid Game",
          "Game Introduction": "Game Introduction",
          "Enrollment Entrance": "Enrollment Entrance",
          "Coming Soon": "Coming Soon ...",
          "nickname": "Your Nickname",
          "submit": "Submit",
          "submitted": "Submitted",
          "website": "Game Page",
          "switch": "Please switch to Binance Smart Chain.",
          "rank": "SquidGame Ranking",
          "distributed": "lowb distributed: ",
          "currentRound": "current round: ",
          "perRound": "lowb per round: ",
          "第一阶段": "Phase 1 (9.7-9.14)： Enrollment for Loser Punk owners",
          "第二阶段": "Phase 2 (9.15-)： Go Reddit to enroll the game",
          "论坛报名玩家": "Reddit registration players will only receive 50% of the gold reward in final, and the remaining 50% will be distributed equally among all participating loser punk owners.",
          "第二阶段报名": "The top three players in the second phase of registration will receive Loser Punk and thus be able to advance to the next chapter of the game.",
          "首次进入游戏后你将看到游戏账户": "After entering the game for the first time you will see the game , go ",
          "回帖你的游戏账户可以进行报名": " and replying with your game account will allow you to register. It will take about 24 hours to process your request.",
          "LoserPoker是一个网页H5游戏": "LoserCoin Chess Game now in test phase, click http://lbgame-h5.loserpoker.net to explore!",
          "为了绝对的公平": "Use your wallet to log in, you can get free game tokens and win free $LOWB.",
          "金豆每日凌晨0点准时刷新": "Check below thread for free token rules.",
          "哦对了": "Sorry English version still under development, will release asap, stay tuned!",
          "LowbCraft是一款类似经典游戏《我的世界》的区块链游戏": "LowbCraft is a blockchain game similar to the classic game 'Minecraft'. The economic system within the game will revolve around Lowb, with a tense and exciting gun battle mode, as well as a casual entertainment mode that is a favorite of many players.",
          "它的出现将会带给LoserCoin不一样的生态与活力": "It will bring a different ecology and vitality to LoserCoin, and the development team is working around the clock to make it, so stay tuned!",
          "lowb借币做空": "Borrow to Short LOWB",
          "借币池状态": "Pool Info",
          "APR": "APR",
          "lowb价格": "LOWB Price",
          "usdt质押数量": "Staking USDT Amount",
          "usdt清算数量": "Liquidated USDT",
          "loanList": "Loan List",
          "风险度": "Risk Level",
          "质押USDT数量": "Staked USDT",
          "loanInfo": "Loan Info",
          "借出lowb数量": "LOWB Borrowed",
          "借币费用": "Borrowing Fee",
          "总计待还款": "Pending Repayment",
          "当前余额不足": "The current balance is insufficient to repay.",
          "立即还款": "Repay Now",
          "钱包余额": "Wallet Balance",
          "USDT可用数量": "Available USDT",
          "lowb可用数量": "Available lowb",
          "批准质押额度": "Approve USDT",
          "确认借币数量": "Stake USDT & Borrow LOWB",
          "approve": "Approve",
          "质押借币": "Staking to Borrow",
          "质押数量": "Staking Amount",
          "最大可借": "Maximum to Borrow",
          "lowb借币机制介绍": "Introduction of LOWB Lending Mechanism",
          "用户可以抵押": "Users can stake usdt assets to borrow a quantity of lowb equal to 85% of the collateral value.",
          "借币费的计算公式": "Formula of Borrowing Fee: borrowing fee = value of lowb lent * (current block - lent block) * (interest rate base point / 100000000000).",
          "风险度的计算公式": "Formula for calculating risk level: risk level = (borrowed coins value + borrowing fee) * lowb price / staked usdt.",
          "用户归还全部的": "The user can get back the staked usdt after returning all the lowb with the incurred borrowing fee.",
          "但是当风险度超过95%时": "However, when the risk level exceeds 95%, anyone can initiate a forced liquidation, forfeit the borrower's usdt to the contract and receive a commission of $2.",
          "被强制清算后": "After the forced liquidation, the user does not need to return the borrowed lowb, but also can not redeem the staked usdt. So the user should pay attention to control the risk level and avoid the forced liquidation when the price rises sharply.",
          "如何借币做空": "How to Borrow LOWB for Shorting",
          "假设lowb的价格为1美元": "Suppose the price of lowb is $1. User A stakes 100 usdt and borrows 80 lowb on the first day. After borrowing, user A immediately sells lowb and gets 80 usdt. (At this time, it is equivalent to using 20 usdt shorting 80 lowb, which is 4 times leverage.",
          "第二天": "The next day, lowb falls to $0.75, at which point the user spends 60 usdt to repurchase 80 lowb. After returning 80lowb and 1 day's interest of 0.1 lowb, user A gets back 100 usdt, netting 20 usdt.",
          "另一种可能是第二天": "Another possibility is that the next day lowb rose to $1.2, at which point the risk level rose to 96%, exceeding the liquidation threshold. After liquidation, the user cannot get back the pledged usdt and has a net loss of 20 usdt."
        }
      },
      zh: {
        translations: {
            "中古时期":
              "中古时期，夏园村生活这一群快乐的小lowb，一天一群闲散的lowb来到附近石家山下的水潭戏水，等他们玩完在岸上嬉戏的时候，一个小伙伴忽然发现树乱出现一条从前都没有的路...",
            "他们沿着小路走进去":
              "他们沿着小路走进去，沿途满是淡红的桃花，穿过花路，他们遇到看到一个巨大的石洞。洞中有十扇石门，石门山分别刻着\"桃石路\"、\"罗门港\"、\"芦城关\"、\"弦坞\"等",
            "lowb们走近发现":
              "lowb们走近发现，有个石门下有个小石洞，石洞刚好可以放lowb与okt等硬币，lowb们试着往里面投一点lowb与okt；当几个人投了之后，发现有扇石门突然开了；",
            "投中过石门的lowb口袋里多了一枚发光的令牌":
              "投中过石门的lowb口袋里多了一枚发光的令牌(nft)，不久之后令牌指引他们进入到了门内。后来他们发现，每十个人投了硬币之后，就会有一扇石门打开，投中过该石门的人就消失了；",
            "lowb们在原地懵逼了":
              "lowb们在原地懵逼了，不知道过了多久，直到远处的一道残阳洒下，他们不知道消失的小伙伴去了哪里，当然也不会知道后续的故事正在徐徐展开...",
            "在很久很久之前":
              "在很久很久之前，卢瑟大陆上生活着一群失败朋克。他们最大的爱好是白嫖，白嫖以及白嫖。每天的生活就是到处捡地上的lowb。",
            "直到有一天":
              "然而，在这看似平静的生活背后，一股危机正悄然来袭...",    
            "朋克元年六月":
              "朋克元年六月，在一次偶然的冒险中，一只朋克发现了一处方形的矿山。他兴奋地招呼朋友们一起来矿山挖lowb。",
            "很快大家发现":
              "很快大家发现，越靠矿山中心，挖出的lowb越多。大家争相向中心处靠近，在贪欲的驱使下甚至相互攻击。",   
            "是离开游戏":
              "是离开游戏，回到失败的生活；还是以命相搏，成为成功朋克？朋克们即将开始他们的抉择。",   
            "在序章中游戏玩家可以用lowb参与抽奖":
              "在序章中游戏玩家可以用lowb参与抽奖，每十个人开一次奖，中奖者可以获得石门令牌的nft，令牌将作为后面游戏的入口，同时参与抽奖的玩家还可以获得乌阳石的积分，乌阳石将作为后面游戏中的金币",
            "游戏为链上操作":
              "（1）游戏为链上操作，所有行动都会消耗行动点，当行动点不足时，玩家将无法进行任何操作。当行动点小于10时，请及时用1000金币兑换100行动点。",
            "卢瑟大陆为回合制游戏":
              "（2）卢瑟大陆为回合制游戏，每个回合只能移动一次。S1赛季将包含188回合，在整局游戏中，玩家将通过两百次的操作尽量多地走到宝箱的位置。",
            "所有玩家同享一个系统时间":
              "（3）所有玩家同享一个系统时间，系统约每半小时前进一回合。玩家可以提前规划每个回合的移动方向，但只有等系统时间到达相应的回合才能打开宝箱。",
            "当玩家独自打开宝箱时独享宝箱中的金币":
              "（4）当玩家独自打开宝箱时独享宝箱中的金币，当玩家多名玩家在同一回合走到宝箱处时则共享金币。",
            "待游戏结束后":
              "（5）待游戏结束后，玩家按照所得金币按比例瓜分奖池。",
            "Peachland Stone Gate": "桃源石门",
            "Loser Land": "卢瑟大陆",
            "LoserVault": "借币做空",
            "卢瑟大陆": "卢瑟大陆 （第一章：鱿鱼游戏）",
            "序章": "序章：朋克纪元",
            "第一章": "第一章：鱿鱼游戏",
            "Game Introduction": "游戏说明",
            "Enrollment Entrance": "报名入口",
            "Coming Soon": "即将开放",
            "nickname": "填写昵称",
            "submit": "提交",
            "submitted": "报名成功",
            "website": "游戏网址",
            "switch": "请切换至BSC链进行注册。",
            "rank": "鱿鱼币排行榜",
            "distributed": "发放总量：",
            "currentRound": "当前回合：",
            "perRound": "每回合平均产出：",
            "第一阶段": "第一阶段(9.7-9.14)： loserpunk持有者报名",
            "第二阶段": "第二阶段(9.15-)： 论坛报名",
            "论坛报名玩家": "论坛报名玩家在最终结算时只能获得50%的金币奖励，剩余的50%将平分给所有参与游戏的loser punk的持有者。",
            "第二阶段报名": "第二阶段报名且最终金币总数前三名的玩家将会获得Loser Punk，从而能提前进入下一章的游戏。",
            "首次进入游戏后你将看到游戏账户": "首次进入游戏后你将看到游戏账户，在",
            "回帖你的游戏账户可以进行报名": "回帖你的游戏账户可以进行报名。报名一般会在24小时内人工处理完成。",
            "LoserPoker是一个网页H5游戏": "LoserPoker是一个网页H5游戏，里面集合了二人麻将、找刺激、捕鱼、斗地主、中国龙、跑得快等6款游戏，相比于人们所熟知的QQ游戏大厅，LoserPoker更简单粗暴。无需账号密码登录，连接钱包，即可感受它的刺激玩法。",
            "为了绝对的公平": "为了绝对的公平，每个钱包地址登录就送2万金豆，凭金豆即可开始您中意的游戏。您可以通过游戏首页右上角的排行榜查看前20名战绩。",
            "金豆每日凌晨0点准时刷新": "金豆每日凌晨0点准时刷新，同时结算前一天您所赚到的金豆，并通过游戏内的邮件系统，发送您金豆转化的Lowb，您可以在游戏的商城界面中选择Bsc、Oec、Mati三链中的任一链提现您赚到的Lowb。",
            "哦对了": "哦对了，如果您还觉得不过瘾，我们还为您准备了比赛场，支持斗地主、二人麻将、跑得快3个游戏，冠军金豆更多哦！即将上线经典游戏：中国象棋与德州扑克，敬请期待！",
            "LowbCraft是一款类似经典游戏《我的世界》的区块链游戏": "LowbCraft是一款类似经典游戏《我的世界》的区块链游戏，游戏内的经济系统将围绕着Lowb展开，有紧张刺激的枪战模式，也有风景党最爱的休闲娱乐模式。",
            "它的出现将会带给LoserCoin不一样的生态与活力": "它的出现将会带给LoserCoin不一样的生态与活力，开发组正在夜以继日地爆肝制作中，敬请期待！",
            "lowb借币做空": "lowb借币做空",
            "借币池状态": "借币池状态",
            "APR": "年化利率",
            "lowb价格": "lowb价格",
            "usdt质押数量": "usdt质押数量",
            "usdt清算数量": "usdt清算数量",
            "loanList": "借贷列表",
            "风险度": "风险度",
            "质押USDT数量": "质押USDT数量",
            "loanInfo": "借款信息",
            "借出lowb数量": "借出lowb数量",
            "借币费用": "借币费用",
            "总计待还款": "总计待还款",
            "当前余额不足": "当前余额不足，无法还款。",
            "立即还款": "立即还款",
            "钱包余额": "钱包余额",
            "USDT可用数量": "USDT可用数量",
            "lowb可用数量": "lowb可用数量",
            "approve": "批准",
            "批准质押额度": "批准质押额度",
            "确认借币数量": "确认借币数量",
            "质押借币": "质押借币",
            "质押数量": "质押数量",
            "最大可借": "最大可借",
            "lowb借币机制介绍": "lowb借币机制介绍",
            "用户可以抵押": "用户可以抵押usdt资产借出相当于抵押价值85%数量的lowb。",
            "借币费的计算公式": "借币费的计算公式：利息=借出lowb数量*(当前区块-借出区块)*(利率基点/100000000000)。",
            "风险度的计算公式": "风险度的计算公式：风险度=(借币数量+借币费)*lowb价格/质押usdt数量。",
            "用户归还全部的": "用户归还全部的lowb以及所产生的借币费后，可以取回质押的usdt。",
            "但是当风险度超过95%时": "但是当风险度超过95%时，任何人可以发起强制清算，没收借币人的usdt至合约中并获取2美元的佣金。",
            "被强制清算后": "被强制清算后，用户不需要归还所借lowb，但是也无法赎回质押的usdt。所以用户需注意控制风险，避免币价剧烈上升时的被强制清算。",
            "如何借币做空": "如何借币做空",
            "假设lowb的价格为1美元": "假设lowb的价格为1美元，用户A在第一天质押100usdt并借取了80lowb，借取后用户A立即抛售lowb并获得了80usdt。（此时相当于是20usdt做空80lowb，是4倍杠杆。）",
            "第二天": "第二天，lowb跌到了0.75美元，此时用户花60usdt回购了80lowb。在归还80lowb以及1天的利息0.1lowb后，用户A拿回了100usdt，净赚20usdt。",
            "另一种可能是第二天": "另一种可能是第二天lowb涨到了1.2美元，此时用户A借币的风险度上升到96%，超过清算阈值。清算后用户无法取回质押的usdt，净亏20usdt。"
        }
      }
    },
    fallbackLng: "en",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
