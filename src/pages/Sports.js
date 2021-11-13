import React,{useEffect, useState} from 'react';
import NewsCard from '../components/NewsCard';
import classes from './Sports.module.scss';

// const data = [
//     {
//         "source": {
//             "id": null,
//             "name": "Cricbuzz"
//         },
//         "author": null,
//         "title": "Stoinis' power-hitting against Rauf the game-changer, says Wade | Cricbuzz.com - Cricbuzz - Cricbuzz",
//         "description": "Stoinis and Wade plucked 62 off what turned out to be the final four overs to help Australia into the finale with six balls to spare",
//         "url": "https://www.cricbuzz.com/cricket-news/119821/stoinis-power-hitting-against-rauf-the-game-changer-says-wade",
//         "urlToImage": "http://www.cricbuzz.com/a/img/v1/600x400/i1/c218067/australia-needed-62-off-final.jpg",
//         "publishedAt": "2021-11-12T03:41:33Z",
//         "content": "Australia needed 62 off final five overs - Stoinis and Wade did it in four. © AFP\r\nAfter helping Australia cross the finish line, Matthew Wade commended his batting partner Marcus Stoinis for the way… [+3379 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "NDTV News"
//         },
//         "author": "Agence France-Presse",
//         "title": "PAK vs AUS: Pakistan's Mohammad Rizwan Had 'Two Days In Intensive Care' Before T20 World Cup Semis - NDTVSports.com",
//         "description": "Pakistan's Mohammad Rizwan top-scored with 67 in the T20 World Cup semi-final against Australia despite spending two days in a hospital intensive care unit due to a chest infection, the team doctor said.",
//         "url": "https://sports.ndtv.com/icc-t20-world-cup-2021/pakistan-vs-australia-pakistans-mohammad-rizwan-had-two-days-in-intensive-care-before-t20-world-cup-semis-2607785",
//         "urlToImage": "https://c.ndtvimg.com/2021-11/vmon8b2_mohammad-rizwan-afp_625x300_12_November_21.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
//         "publishedAt": "2021-11-12T03:10:19Z",
//         "content": "Pakistan's Mohammad Rizwan top-scored with 67 in Thursday's T20 World Cup semi-final against Australia despite spending two days in a hospital intensive care unit due to a chest infection, the team d… [+1578 chars]"
//     },
//     {
//         "source": {
//             "id": "the-times-of-india",
//             "name": "The Times of India"
//         },
//         "author": "Dwaipayan Datta",
//         "title": "New Zealand's Devon Conway breaks right hand in frustration, out of T20 World Cup final and India tour - Times of India",
//         "description": "Cricket News: The never-say-die attitude of Australia, coupled with some trademark shoddy fielding by Pakistan that has haunted them in the past, saw to it that Aar",
//         "url": "https://timesofindia.indiatimes.com/sports/cricket/icc-mens-t20-world-cup/t20-world-cup-australia-beat-pakistan-to-set-up-final-clash-with-new-zealand/articleshow/87657732.cms",
//         "urlToImage": "https://static.toiimg.com/thumb/msid-87657720,width-1070,height-580,imgsize-52992,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
//         "publishedAt": "2021-11-12T02:51:00Z",
//         "content": "T20 World Cup: Australia beat Pakistan to set up final clash with New Zealand"
//     },
//     {
//         "source": {
//             "id": "espn-cric-info",
//             "name": "ESPN Cric Info"
//         },
//         "author": "Deivarayan Muthu",
//         "title": "Matthew Wade, the new finisher, finishes off Pakistan in grand style - ESPNcricinfo",
//         "description": "How Thursday became Wade's night out in Dubai",
//         "url": "https://www.espncricinfo.com/story/mens-t20-world-cup-semi-final-australia-vs-pakistan-matthew-wade-the-new-finisher-finishes-off-pakistan-in-grand-sty-1288887",
//         "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/330400/330430.jpg",
//         "publishedAt": "2021-11-11T22:43:00Z",
//         "content": "Sign up for ESPN+ and catch all the action from the Men's T20 World Cup live in the USA. Match highlights of the second semi-final is available in English, and in Hindi (USA only)."
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "Bavarian Football Works"
//         },
//         "author": "Samrin_TwinkleFCB",
//         "title": "Three Observations from Germany’s 9-0 win over Liechtenstein - Bavarian Football Works",
//         "description": "Liechtenstein went down a man early; Germany took the opportunity to run the score up and entertain their fans with nine goals.",
//         "url": "https://www.bavarianfootballworks.com/2021/11/11/22777080/three-observations-from-germanys-9-0-win-over-liechtenstein-muller-baku-goretzka-sane-reus-flick",
//         "urlToImage": "https://cdn.vox-cdn.com/thumbor/AhM_iXu-emtjBSgGwbg6Q-Sm8tc=/0x352:3265x2061/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23006909/1352747934.jpg",
//         "publishedAt": "2021-11-11T22:10:54Z",
//         "content": "Germany, on a day they paid tribute to their former coach, Joachim Löw, put on a show for the crowd in Wolfsburg. The early red card for Liechtenstein allowed their current manager, Hansi Flick, to t… [+2104 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "Zoom"
//         },
//         "author": "TN Sports Desk",
//         "title": "From Imran Khan to Sachin Tendulkar: How cricket fraternity reacted after Australia upstaged Pakistan to enter WC final - Times Now",
//         "description": "From legendary all-rounder Imran Khan to Master Blaster Sachin Tendulkar - here's how the cricket fraternity reacted after Aaron Finch-led Australia upstaged Babar Azam's Pakistan to enter the final of the ICC T20 World Cup on Thursday.",
//         "url": "https://www.timesnownews.com/sports/cricket/article/from-shoaib-akhtar-to-yuvraj-singh-how-cricket-fraternity-after-australia-upstaged-pakistan-to-enter-t20-wc-final/831167",
//         "urlToImage": "https://imgk.timesnownews.com/story/pak-vs-aus-pak-exit-ap.jpg?tr=w-560,h-292,fo-top",
//         "publishedAt": "2021-11-11T18:10:00Z",
//         "content": "<ul><li>Aaron Finch-led Australia defeated Babar Azam's Pakistan in the 2nd semi-final of the T20 World Cup 2021</li></ul>\r\n<ul><li>Several members of the cricket fraternity have reacted to Pakistan'… [+1945 chars]"
//     },
//     {
//         "source": {
//             "id": "espn-cric-info",
//             "name": "ESPN Cric Info"
//         },
//         "author": "S Rajesh",
//         "title": "Eoin Morgan will make decision on his future himself, says Chris Silverwood - ESPNcricinfo",
//         "description": "Removal of set batter, with lesser hitters to come, could have made the difference",
//         "url": "https://www.espncricinfo.com/story/men-s-t20-world-cup-semi-final-luck-index-hasan-ali-s-drop-costs-pakistan-15-priceless-runs-1288869",
//         "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/330400/330434.jpg",
//         "publishedAt": "2021-11-11T18:02:00Z",
//         "content": "NewsRemoval of set batter, with lesser hitters to come, could have made the difference"
//     },
//     {
//         "source": {
//             "id": "espn-cric-info",
//             "name": "ESPN Cric Info"
//         },
//         "author": "ESPNcricinfo staff",
//         "title": "World Cup finalists to meet again in three-match T20I series in March - ESPNcricinfo.com",
//         "description": "Australia to send a team without Test players as the series will coincide with Australia's three-Test tour of Pakistan",
//         "url": "https://www.espncricinfo.com/story/australia-new-zealand-news-2021-2022-world-cup-finalists-to-meet-again-in-three-match-t20i-series-in-march-1288889",
//         "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/328900/328900.6.jpg",
//         "publishedAt": "2021-11-11T18:02:00Z",
//         "content": "NewsAustralia to send a team without Test players as the series will coincide with Australia's three-Test tour of Pakistan"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "Barca Blaugranes"
//         },
//         "author": "Gill Clark",
//         "title": "‘It’s like they are 32. It’s crazy!’ - Morata praises Barcelona’s Gavi & Pedri - Barca Blaugranes",
//         "description": "The striker’s been impressed with the youngsters",
//         "url": "https://www.barcablaugranes.com/2021/11/11/22776069/its-like-they-are-32-its-crazy-morata-praises-barcelonas-gavi-pedri",
//         "urlToImage": "https://cdn.vox-cdn.com/thumbor/0TgUkKsQFr-iQOKBiQgiFiN5ZO4=/0x0:3603x1886/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23005078/1235890651.jpg",
//         "publishedAt": "2021-11-11T18:00:00Z",
//         "content": "Spain striker Alvaro Morata has been full of praise for Barcelona youngsters Pedri and Gavi who have both made an instant impact for the national team.\r\nGavi has once again been called up to the seni… [+1024 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "Hindustan Times"
//         },
//         "author": "PTI",
//         "title": "Rohit Sharma to skip entire New Zealand Test series, Virat Kohli opts out of first game; new support staff checks in - Hindustan Times",
//         "description": "Vice-captain Ajinkya Rahane will lead the side in the opening Test in Kanpur as Kohli extends his break after opting out of the three-match T20 series starting November 17 in Jaipur. | Cricket",
//         "url": "https://www.hindustantimes.com/cricket/rohit-sharma-to-skip-entire-new-zealand-test-series-virat-kohli-opts-out-of-first-game-new-support-staff-checks-in-101636651264747.html",
//         "urlToImage": "https://images.hindustantimes.com/img/2021/11/11/1600x900/rohit-getty-test_1636552586755_1636651474758.jpg",
//         "publishedAt": "2021-11-11T17:25:46Z",
//         "content": "India's newly-appointed T20 captain Rohit Sharma is set to be rested from the two-match Test series against New Zealand while Virat Kohli will miss the opening match as a \"mentally and physically exh… [+2881 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "Manchester Evening News"
//         },
//         "author": "Liam Wood",
//         "title": "Manchester United 'confident' over Brendan Rodgers appointment and latest next manager rumours - Manchester Evening News",
//         "description": "Manchester United are set to stand by Ole Gunnar Solskjaer - amid mounting pressure over his position.",
//         "url": "https://www.manchestereveningnews.co.uk/sport/football/football-news/man-united-next-manager-rodgers-22135785",
//         "urlToImage": "https://i2-prod.manchestereveningnews.co.uk/sport/article21956919.ece/ALTERNATES/s1200/0_GettyImages-1348595746.jpg",
//         "publishedAt": "2021-11-11T17:20:00Z",
//         "content": "Under-pressure Manchester United manager Ole Gunnar Solskjaer remains on thin ice at Old Trafford.\r\nHaving finished as runners-up last term, the Norwegian signed a contract extension and was backed i… [+3356 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "WION"
//         },
//         "author": "WION Web Team",
//         "title": "`He could be the back-up to Hardik Pandya`: Laxman names IPL star who can be India`s next utility all-rounder - WION",
//         "description": "For Indias upcoming three-match Twenty20 series at home against New Zealand, the Indian cricket board (BCCI) has made a number of changes to the squad that featured in the T20 World Cup 2021. Virat Kohli has been rested along with pacemen Jasprit Bumrah and M…",
//         "url": "https://www.wionews.com/sports/he-could-be-the-back-up-to-hardik-pandya-laxman-names-ipl-star-who-can-be-indias-next-utility-all-rounder-428558",
//         "urlToImage": "https://cdn.wionews.com/sites/default/files/styles/story_page/public/2021/11/11/221151-hardik-pandya-vvs-laxman.jpg, VVS Laxman\" typeof=\"foaf:Image\" />",
//         "publishedAt": "2021-11-11T17:07:53Z",
//         "content": "For India's upcoming three-match Twenty20 series at home against New Zealand, the Indian cricket board (BCCI) has made a number of changes to the squad that featured in the T20 World Cup 2021. Virat … [+2629 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "mundoalbiceleste.com"
//         },
//         "author": null,
//         "title": "Argentina coach Lionel Scaloni press conference, Lionel Messi likely to play - mundoalbiceleste.com",
//         "description": "Argentina national team coach Lionel Scaloni held a press conference on Thursday where he spoke about Lionel Messi, Julian Alvarez, the team and the World Cup qualifiers. Lionel Scaloni commented on Lionel Messi's injury and if he will play against Uruguay. S…",
//         "url": "https://mundoalbiceleste.com/2021/11/11/argentina-coach-lionel-scaloni-press-conference-lionel-messi-likely-to-play/",
//         "urlToImage": "https://mundoalbiceleste.com/wp-content/uploads/2021/11/scalonipress.jpg",
//         "publishedAt": "2021-11-11T16:58:51Z",
//         "content": "Argentina national team coach Lionel Scaloni held a press conference on Thursday where he spoke about Lionel Messi, Julian Alvarez, the team and the World Cup qualifiers.\r\nLionel Scaloni commented on… [+2020 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "NDTV News"
//         },
//         "author": "Asian News International",
//         "title": "T20 World Cup: Babar Azam Breaks Record For Scoring Most Runs In Maiden T20 World Cup - NDTV Sports",
//         "description": "T20 World Cup 2021: Pakistan skipper and batter Babar Azam has broken the record of scoring the most runs by any player in their first T20 World Cup on Thursday.",
//         "url": "https://sports.ndtv.com/icc-t20-world-cup-2021/t20-world-cup-2021-pakistan-vs-australia-babar-azam-breaks-record-for-scoring-most-runs-in-maiden-t20-world-cup-2607433",
//         "urlToImage": "https://c.ndtvimg.com/2021-11/rrd4l4js_babar-azam_625x300_11_November_21.jpg",
//         "publishedAt": "2021-11-11T15:41:11Z",
//         "content": null
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "The Quint"
//         },
//         "author": "Nikhila Henry",
//         "title": "Rape Threat to Kohli’s Baby: 'Poor Sight, Son to Apologise,’ Father of IIT Grad - The Quint",
//         "description": "Father of Ramnagesh Akubathini, who allegedly tweeted a rape threat targeting Virat Kohli's daughter will apologise for his mistake, his father A Srinivas said. The IIT graduate and software engineer has poor eyesight, his father pleaded.",
//         "url": "https://www.thequint.com/news/india/rape-threat-to-virat-kohlis-daughter-son-will-apologise-father-of-jailed-iit-graduate-ramnagesh-akubathini",
//         "urlToImage": "https://images.thequint.com/thequint%2F2021-11%2Fa97a4924-b5f9-4bca-9bac-66ee95d48964%2Fvk.jpg?w=1200&auto=format%2Ccompress&ogImage=true",
//         "publishedAt": "2021-11-11T15:29:04Z",
//         "content": "A Srinivas from Hyderabad is a distraught father who discovered Twitter only when his son, 23-year-old Ramnagesh Akubathini, got arrested on Wednesday, 10 November, for having tweeted a rape threat t… [+926 chars]"
//     },
//     {
//         "source": {
//             "id": "the-times-of-india",
//             "name": "The Times of India"
//         },
//         "author": "PTI",
//         "title": "Virat Kohli has achieved a lot, but Babar Azam's ability to react to ball is second to none: Hayden - Times of India",
//         "description": "Cricket News: Pakistan's Australian batting consultant Matthew Hayden has no doubt that Virat Kohli has so far achieved a lot more than the younger Babar Azam but t",
//         "url": "https://timesofindia.indiatimes.com/sports/cricket/icc-mens-t20-world-cup/virat-kohli-has-achieved-a-lot-but-babar-azams-ability-to-react-to-ball-is-second-to-none-hayden/articleshow/87652166.cms",
//         "urlToImage": "https://static.toiimg.com/thumb/msid-87652139,width-1070,height-580,imgsize-63408,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
//         "publishedAt": "2021-11-11T15:26:00Z",
//         "content": "Babar Azam breaks record for scoring most runs in maiden T20 World CupPakistan skipper and batter Babar Azam has broken the record of scoring the most runs by any player in their first T20 World Cup … [+11 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "NDTV News"
//         },
//         "author": "Press Trust of India",
//         "title": "Entire Focus Is On Sports, Biopic Can Wait Until I Win More Medals: Neeraj Chopra - NDTV Sports",
//         "description": "Olympic champion Neeraj Chopra said that biopic on him can wait until he wins some more medals.",
//         "url": "https://sports.ndtv.com/athletics/entire-focus-is-on-sports-biopic-can-wait-until-i-win-more-medals-neeraj-chopra-2607393",
//         "urlToImage": "https://c.ndtvimg.com/2021-11/021mr9mg_neeraj-chopra_625x300_11_November_21.jpg",
//         "publishedAt": "2021-11-11T15:01:00Z",
//         "content": "Olympic champion Neeraj Chopra doesn't want a biopic on him until he wins some more medals. That will ensure the film becomes a hit, he says matter-of-factly. Ever since the Haryana-born javelin thro… [+3021 chars]"
//     },
//     {
//         "source": {
//             "id": "espn-cric-info",
//             "name": "ESPN Cric Info"
//         },
//         "author": "ESPNcricinfo staff",
//         "title": "Recent Match Report - WI Women vs PAK Women 2nd ODI 2021/22 - ESPNcricinfo",
//         "description": "Chasing 154, Pakistan were 111 for 5 at one stage but lost their last five wickets for five runs",
//         "url": "https://www.espncricinfo.com/series/west-indies-women-in-pakistan-2021-22-1288205/pakistan-women-vs-west-indies-women-2nd-odi-1288210/match-report",
//         "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/330200/330240.6.jpg",
//         "publishedAt": "2021-11-11T14:50:07Z",
//         "content": "ReportChasing 154, Pakistan were 111 for 5 at one stage but lost their last five wickets for five runs"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "Cricbuzz"
//         },
//         "author": null,
//         "title": "Vikram Rathour, Paras Mhambrey, T Dilip set to be India support staff | Cricbuzz.com - Cricbuzz - Cricbuzz",
//         "description": "The three will assist Rahul Dravid with the India Men's team",
//         "url": "https://www.cricbuzz.com/cricket-news/119816/vikram-rathour-paras-mhambrey-t-dilip-set-to-be-india-support-staff-cricbuzzcom",
//         "urlToImage": "//m.cricbuzz.com/a/img/v1/600x400/i1/c218003/rathour-has-already-had-one-term-as-the-batting-coach-of-the-team.jpg",
//         "publishedAt": "2021-11-11T14:49:29Z",
//         "content": "The Board of Control for Cricket in India (BCCI) is set to appoint T Dilip, Paras Mhambrey and Vikram Rathour as fielding, bowling and batting coaches of the Indian team. All will work under head coa… [+1310 chars]"
//     },
//     {
//         "source": {
//             "id": "marca",
//             "name": "Marca"
//         },
//         "author": "MARCA",
//         "title": "Five landing spots for Cristiano Ronaldo if he departs Manchester United in summer - MARCA.com",
//         "description": "A slow start to the 2021/22 campaign means Manchester United sit sixth in the Premier League table and it is still doubtful whether the Red Devils will manage to bounce back and se",
//         "url": "https://www.marca.com/en/football/manchester-united/2021/11/11/618d1fc7ca47419e298b45e4.html",
//         "urlToImage": "https://phantom-marca.unidadeditorial.es/a5174a8a4d511853cbabce017acbe304/resize/1200/f/jpg/assets/multimedia/imagenes/2021/11/11/16366385149173.jpg",
//         "publishedAt": "2021-11-11T13:51:54Z",
//         "content": "A slow start to the 2021/22 campaign means Manchester United sit sixth in the Premier League table and it is still doubtful whether the Red Devils will manage to bounce back and secure a top four spo… [+1975 chars]"
//     }
// ]

const Sports = (props)=>{
    const[articles,setArticles] = useState();
    const[date,setDate] = useState("");

    useEffect(()=>{
        fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=sports&apiKey=0235418f21104fc480a17de240746f70`)
        .then((response) => {
          return response.json();
        })
        .then((myJson) =>{
          setArticles(myJson.articles);
          if(articles){
            const event = new Date(articles[0].publishedAt);
            const options = { month: 'long', day: 'numeric',weekday:'long'};
            const today = event.toLocaleDateString(undefined, options);
            setDate(today);
        }
        })
    }
    // setArticles(data)}
    ,[articles,props.country,date]
    );

    return(
        <div className={classes.sports}>
            <div className={classes.sports__logo}>
                <h1>SPORTS <br/>NEWS</h1>
                <p>{date}</p>
            </div>
            <div className={classes.sports__content}>
                <ul>
                    {
                    articles && articles.map((item,index)=>{
                        return(
                            <li key={index}><NewsCard item={item}/></li>
                        );
                    })
                    }
                </ul>
            </div>
            
        </div>
    );
}

export default Sports;