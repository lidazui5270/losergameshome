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
            "Until one day, a cherry appeared on the ground. A little punk couldn't help but be curious and stole the forbidden fruit, and then everything changed ...",
          "在序章中游戏玩家可以用lowb参与抽奖":
            "Welcome to loser continent, here is the first stop of Peachland Stone Gate. Here there will be ten stone doors, each stone door before you can put lowb. There are five prize pools (10k, 50k, 100k, 2000k, 500k). When participants of one prize pool reaching 10 people, the stone door will open. The winner will take away the lowb of all the others (for multiple winners they will share equally). Note that different prize pools are independent of each other, for example, the 10k prize pool cannot share the lowb of the 50k prize pool, and if no one wins the prize, the lowb will be returned and the platform will charge 3% of the fee. Participants in each round will be rewarded with an equal amount of Uyang stone points, and the role of Uyang stone will be reflected in the subsequent loser continent. The winner of each round will receive the corresponding level of stone gate token, the token will be used as the only pass token (nft) of the loser world. The token can be cumulative, the specific rules for obtaining the token will be given gradually in the follow-up. ",
          "在序章中我们将邀请":
            "In the prologue we will invite loser punk and part of the game holders to participate in the game test, players participating in the test can divide about 500,000 lowb rewards per day, the rewards will be distributed at the end of the prologue.",
          "游戏后端将部署在OEC测试链":
            "The back-end of the game will be deployed in the OEC test chain, and the test content mainly includes finding and solving game bugs, improving game interaction experience, etc.",
          "Peachland Stone Gate": "Peachland Stone Gate",
          "Loser Land": "Loser Land",
          "卢瑟大陆": "Loser Land (Prologue：Punk Era)",
          "Game Introduction": "Game Introduction",
          "Enrollment Entrance": "Enrollment Entrance",
          "Coming Soon": "Coming Soon ..."
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
              "直到有一天，地上出现了一颗樱桃。一只小朋克忍不住好奇，偷食了禁果，随后，一切都变了……",    
            "在序章中游戏玩家可以用lowb参与抽奖":
              "在序章中游戏玩家可以用lowb参与抽奖，每十个人开一次奖，中奖者可以获得石门令牌的nft，令牌将作为后面游戏的入口，同时参与抽奖的玩家还可以获得乌阳石的积分，乌阳石将作为后面游戏中的金币",
            "在序章中我们将邀请":
              "在序章中我们将邀请loser punk和部分game的持有者参与游戏测试，参与测试的玩家每天可瓜分约50万lowb的奖励，奖励将在序章结束后发放。",
            "游戏后端将部署在OEC测试链":
              "游戏后端将部署在OEC测试链，测试内容主要包括发现并解决游戏漏洞，改进游戏交互体验等。",
            "Peachland Stone Gate": "桃源石门",
            "Loser Land": "卢瑟大陆",
            "卢瑟大陆": "卢瑟大陆 （序章：朋克纪元）",
            "Game Introduction": "游戏说明",
            "Enrollment Entrance": "报名入口",
            "Coming Soon": "即将开放"
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
