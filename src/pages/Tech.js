import React,{useState,useEffect} from 'react';
import NewsCard from '../components/NewsCard';
import classes from './Tech.module.scss';

// const data = [
//     {
//         "source": {
//             "id": "mashable",
//             "name": "Mashable"
//         },
//         "author": "Amanda Yeo",
//         "title": "You may have received a free $100 Microsoft gift card. Check your spam folder. - Mashable",
//         "description": "This might help with your Christmas shopping.",
//         "url": "https://mashable.com/article/microsoft-free-gift-cards",
//         "urlToImage": "https://helios-i.mashable.com/imagery/articles/007X4HnfxcsX3Bivbzp7n8x/hero-image.fill.size_1200x675.v1636678989.jpg",
//         "publishedAt": "2021-11-12T01:39:57Z",
//         "content": null
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "Sportskeeda"
//         },
//         "author": "Shane Foley",
//         "title": "What Legendary Pokemon are in Pokemon Brilliant Diamond and Shining Pearl? - Sportskeeda",
//         "description": "Pokemon Brilliant Diamond and Shining Pearl will be releasing very soon, and the game is already boasting quite a number of Legendary Pocket Monsters.",
//         "url": "https://www.sportskeeda.com/pokemon/what-legendary-pokemon-pokemon-brilliant-diamond-shining-pearl",
//         "urlToImage": "https://staticg.sportskeeda.com/editor/2021/11/a57e3-16366748215089-1920.jpg",
//         "publishedAt": "2021-11-12T00:55:43Z",
//         "content": "Pokemon Brilliant Diamond and Shining Pearl will be releasing very soon, and the game is already boasting quite a number of Legendary Pocket Monsters.\r\nOf course, the original Generation IV games had… [+2516 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "Android Central"
//         },
//         "author": "Derrek Lee",
//         "title": "New WhatsApp update gives you more control over your privacy - Android Central",
//         "description": "WhatsApp is rolling out with a new beta update that adds a new privacy option for certain settings.",
//         "url": "https://www.androidcentral.com/whatsapp-new-last-seen-privacy-option",
//         "urlToImage": "https://www.androidcentral.com/sites/androidcentral.com/files/styles/large/public/article_images/2020/01/whatsapp-dark-theme.jpg",
//         "publishedAt": "2021-11-11T22:25:19Z",
//         "content": "A new WhatsApp beta update is rolling out, with a new privacy feature that will make it easier to avoid certain contacts or hide your information from specific users.\r\nSpotted by WABetaInfo, the upda… [+1400 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "Gizmodo.com"
//         },
//         "author": "Sam Rutherford",
//         "title": "USB-C iPhone Sells for $86,001, Proving Apple Is Leaving Money On the Table - Gizmodo",
//         "description": "Clearly the market for an iPhone with USB-C exists. Is Apple listening?",
//         "url": "https://gizmodo.com/usb-c-iphone-sells-for-86-001-proving-apple-is-leavin-1848042351",
//         "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/c1ca1f3f1487090291bdadfdbe0ce24f.png",
//         "publishedAt": "2021-11-11T22:10:00Z",
//         "content": "What started out as a simple engineering project has now turned into a major windfall for the devices creator after an auction for the worlds first USB-C iPhone ended with a winning bid of $86,001.\r\n… [+2193 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "Windows Central"
//         },
//         "author": "Miles Dompier",
//         "title": "Xbox Game Studios Publishing is the company's secret weapon for new exclusives - Windows Central",
//         "description": "Xbox Games Studios Publishing has an incredibly bright future ahead. In fact, it'll likely be Xbox's secret weapon for new exclusive games. We discuss all the XGSP titles we currently know about as well as reveal one brand new Xbox codename.",
//         "url": "https://www.windowscentral.com/xbox-game-studios-publishing-secret-weapon-new-exclusives",
//         "urlToImage": "https://www.windowscentral.com/sites/wpcentral.com/files/styles/large/public/field/image/2021/11/xbox-games-studio-publishing.jpg",
//         "publishedAt": "2021-11-11T19:26:23Z",
//         "content": "Since the announcement of the Bethesda acquisition last year, fans and industry analysts have speculated on the wild possibilities of future Xbox acquisitions. While some have painted a picture of Xb… [+7742 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "GSMArena.com"
//         },
//         "author": "Ro",
//         "title": "Motorola Moto G Power 2022 leaks extensively, Moto G71 5G certified - GSMArena.com news - GSMArena.com",
//         "description": "The Moto G Power 2022 will run on Helio G37 SoC and a 5,000 mAh battery.",
//         "url": "https://www.gsmarena.com/motorola_moto_g_power_2022_leaks_in_full_moto_g71_5g_passes_3c_certification-news-51799.php",
//         "urlToImage": "https://fdn.gsmarena.com/imgroot/news/21/11/motorola-moto-g-power-2022-leak/-952x498w6/gsmarena_000.jpg",
//         "publishedAt": "2021-11-11T19:03:01Z",
//         "content": "Motorola's Moto G Power from this year is getting a successor. The so-called Moto G Power 2022 starred in a massive leak, confirming its specs and design.\r\nAlleged Moto G Power 2022\r\nThe handset is b… [+930 chars]"
//     },
//     {
//         "source": {
//             "id": "engadget",
//             "name": "Engadget"
//         },
//         "author": "https://www.engadget.com/about/editors/igor-bonifacic",
//         "title": "Panic's Playdate handheld is delayed until 2022 - Engadget",
//         "description": "Panic has pushed back the launch of its Playdate portable to 2022..",
//         "url": "https://www.engadget.com/panic-playdate-delay-2022-185543603.html",
//         "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2020-10/bcf12df0-1afe-11eb-af95-ec43e5f5e58a",
//         "publishedAt": "2021-11-11T18:58:05Z",
//         "content": "Valves Steam Deck\r\n isnt the only handheld that wont ship in 2021. Panic has pushed back\r\n the launch of its Playdate portable\r\n to 2022. The company announced the delay Thursday, attributing it to a… [+956 chars]"
//     },
//     {
//         "source": {
//             "id": "wired",
//             "name": "Wired"
//         },
//         "author": "Lily Hay Newman",
//         "title": "Hackers Targeted Apple Devices in Hong Kong for Widespread Attack - WIRED",
//         "description": "Visitors to pro-democracy and media sites in the region were infected with malware that could download files, steal data, and more.",
//         "url": "https://www.wired.com/story/ios-macos-hacks-hong-kong-watering-hole/",
//         "urlToImage": "https://media.wired.com/photos/618d5eb914b9051fa88515ca/191:100/w_1280,c_limit/Security-Apple-HK-Protests-1233758531.jpg",
//         "publishedAt": "2021-11-11T18:25:00Z",
//         "content": "Since at least late August, sophisticated hackers used flaws in macOS and iOS to install malware on Apple devices that visited Hong Kongbased media and pro-democracy websites. The so-called watering … [+3619 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "Neowin"
//         },
//         "author": "https://www.facebook.com/usama.jawad.96",
//         "title": "Closer Look: Windows Update in Windows 11 - Neowin",
//         "description": "Microsoft has reorganized the UI for Windows Update in Windows 11, which now also shows you how long it'll take to install an update. The company claims that it has also reduced the size of updates.",
//         "url": "https://www.neowin.net/news/closer-look-windows-update-in-windows-11/",
//         "urlToImage": "https://cdn.neow.in/news/images/uploaded/2021/11/1636608579_wu4_story.jpg",
//         "publishedAt": "2021-11-11T18:16:00Z",
//         "content": "Windows 11 has been out for well over a month, but since it's still quite new and is being rolled out in a staggered manner, it's worth it to know what you're getting into before you decide to upgrad… [+4254 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "Gizchina.com"
//         },
//         "author": null,
//         "title": "Exynos 2200 GPU performance is much better than the Snapdragon 888 - Gizchina.com",
//         "description": "Exynos 2200 GPU performance is much better than the Snapdragon 888. The Samsung Exynos 2200 AMD GPU shows a 34% performance improvement.",
//         "url": "https://www.gizchina.com/2021/11/11/exynos-2200-gpu-performance-is-much-better-than-the-snapdragon-888/",
//         "urlToImage": "https://www.gizchina.com/wp-content/uploads/images/2021/11/Samsung-Exynos-1024x576.png",
//         "publishedAt": "2021-11-11T18:11:18Z",
//         "content": "The Samsung Exynos 2200 AMD GPU shows a 34% performance improvement over the previous graphics card. The Samsung Exynos 2200 GPU benchmark results are here and show some significant performance impro… [+2768 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "XDA Developers"
//         },
//         "author": "Kishan Vyas",
//         "title": "Fitbit finally adds the ECG app to Charge 5, introduces Daily Readiness Score - XDA Developers",
//         "description": "The Fitbit Charge 5 is receiving a new update that finally brings the ECG app and Daily Readiness Score. Read on.",
//         "url": "https://www.xda-developers.com/fitbit-finally-adds-the-ecg-app-to-charge-5-introduces-daily-readiness-score/",
//         "urlToImage": "https://www.xda-developers.com/files/2021/08/Fitbit-Charge-5-feature-image.jpg",
//         "publishedAt": "2021-11-11T17:54:00Z",
//         "content": "Last month Fitbit rolled out a big update to the Fitbit Luxe, bringing Always-on Display, SpO2 monitoring, the ability to change the font, and more. Now the company has released a new update for its … [+1667 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "Windows Central"
//         },
//         "author": "Robert Carnevale",
//         "title": "'Internet Browser' may be removed from the Xbox Store — grab it now or risk missing out - Windows Central",
//         "description": "Developer Finebits OÜ and Microsoft seem to be at a bit of a crossroads, leaving one particular app in jeopardy. If you want it, grab it now, before it's too late.",
//         "url": "https://www.windowscentral.com/internet-browser-may-be-removed-xbox-store-grab-now-or-risk-missing-out",
//         "urlToImage": "https://www.windowscentral.com/sites/wpcentral.com/files/styles/large/public/field/image/2018/07/xbox-one-x-xbox-one-s-stack.jpg",
//         "publishedAt": "2021-11-11T17:51:09Z",
//         "content": "Developer Finebits OÜ's app, Internet Browser, enables you to not only surf the web on your Xbox console, but also download any files you find on said web. However, Microsoft has requested that Fineb… [+1045 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "BGR"
//         },
//         "author": "Jacob Siegal",
//         "title": "Google’s new Gmail widget for iPhone has everyone talking - BGR",
//         "description": "Google announced three new features for its iOS apps this week, including an updated Gmail widgets that shows recent emails.",
//         "url": "https://bgr.com/tech/googles-new-gmail-widget-for-iphone-has-everyone-talking/",
//         "urlToImage": "https://bgr.com/wp-content/uploads/2020/11/Gmail-Widget-iPhone.jpg?quality=82&strip=all",
//         "publishedAt": "2021-11-11T17:49:00Z",
//         "content": "Ever since Apple launched iOS 14 last year, app developers have been loading up our screens with widgets. Some are more useful than others, but it’s clear that many developers are still figuring out … [+2198 chars]"
//     },
//     {
//         "source": {
//             "id": "the-verge",
//             "name": "The Verge"
//         },
//         "author": "Antonio G. Di Benedetto, Cameron Faulkner",
//         "title": "The PS5 is available now at Best Buy (update: sold out) - The Verge",
//         "description": "Best Buy has released a wave of PlayStation 5 consoles during its latest console restock. Now’s your chance to grab one ahead of the holidays, so get in the queue as quickly as possible.",
//         "url": "https://www.theverge.com/2021/11/11/22639500/playstation-5-ps5-restock-available-best-buy-queue",
//         "urlToImage": "https://cdn.vox-cdn.com/thumbor/3r_9jS6Nm_SkLMLo7HhJ0hPTZNc=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22509875/acastro_210511_1777_psRestock_0006.jpg",
//         "publishedAt": "2021-11-11T17:40:16Z",
//         "content": "A surprise console drop ahead of your weekend\r\nIf you buy something from a Verge link, Vox Media may earn a commission. See our ethics statement.\r\nIllustration by Alex Castro / The Verge\r\nUpdate Nove… [+2090 chars]"
//     },
//     {
//         "source": {
//             "id": "techcrunch",
//             "name": "TechCrunch"
//         },
//         "author": "Aisha Malik",
//         "title": "Twitter no longer crops image previews on the web - TechCrunch",
//         "description": "Twitter will no longer automatically crop image previews on the web after rolling out full-size image previews on mobile earlier this year. On Twitter for the web, images will now display in full without any cropping. Instead of gambling on how an image will …",
//         "url": "http://techcrunch.com/2021/11/11/twitter-no-longer-crops-image-previews-on-the-web/",
//         "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/10/twitter-2021-10-d.jpg?w=711",
//         "publishedAt": "2021-11-11T17:29:42Z",
//         "content": "Twitter will no longer automatically crop image previews on the web after rolling out full-size image previews on mobile earlier this year. On Twitter for the web, images will now display in full wit… [+1755 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "Gizchina.com"
//         },
//         "author": null,
//         "title": "Xiaomi 12 display will be one of the best in the market - Gizchina.com",
//         "description": "Xiaomi 12 display will be one of the best in the market. . Network sources say that the Xiaomi 12 will again rely on a 2K AMOLED panel.",
//         "url": "https://www.gizchina.com/2021/11/11/xiaomi-12-display-will-be-one-of-the-best-in-the-market/",
//         "urlToImage": "https://www.gizchina.com/wp-content/uploads/images/2021/08/Mi-11-Ultra-2-1024x683.jpg",
//         "publishedAt": "2021-11-11T16:48:29Z",
//         "content": "There is every reason to believe that the history of last year will repeat itself and Xiaomi will be the first to present the flagship of the new season. We will have to talk about Xiaomi 12 as the f… [+2402 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "iMore"
//         },
//         "author": "Oliver Haslam",
//         "title": "iPhone thieves are using this trick to disable Find My on stolen devices - iMore",
//         "description": "People stealing iPhones is nothing new, but this new scam disables Find My so the iPhone can be erased with ease.",
//         "url": "https://www.imore.com/iphone-thieves-are-using-trick-disable-find-my-stolen-devices",
//         "urlToImage": "https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2020/01/iphone-x-passcode.jpg",
//         "publishedAt": "2021-11-11T16:42:25Z",
//         "content": "People stealing iPhones is absolutely nothing new, unfortunately. But people using Find My to disable their devices is usually a good port of call because it prevents them from being accessed or set … [+3143 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "9to5google.com"
//         },
//         "author": null,
//         "title": "Samsung says that Galaxy S21’s Android 12 Beta is done, stable update is just around the corner - 9to5Google",
//         "description": "Samsung has seemingly confirmed that it's done with Android 12 Beta releases on the Galaxy S21, with the stable update being next in line.",
//         "url": "https://9to5google.com/2021/11/11/samsung-says-that-galaxy-s21s-android-12-beta-is-done-stable-update-is-just-around-the-corner/",
//         "urlToImage": "https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2021/09/Android-12-logo-Samsung-Galaxy-S21-Ultra-1.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
//         "publishedAt": "2021-11-11T16:15:00Z",
//         "content": "Samsung launched its Android 12 Beta well ahead of the schedule anyone expected, and it seems that’s going to result in the stable rollout launching earlier than it did last year. According to a Sams… [+1464 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "YouTube"
//         },
//         "author": null,
//         "title": "Hermes: The Most EXPENSIVE Apple Watch Series 7 - AppleInsider",
//         "description": "I go hands-on with the most expensive Apple Watch Series 7. The Hermes model that can cost upwards of $1200, depending on your size and band choices. Here we...",
//         "url": "https://www.youtube.com/watch?v=63Kl8cgyc7g",
//         "urlToImage": "https://i.ytimg.com/vi/63Kl8cgyc7g/maxresdefault.jpg",
//         "publishedAt": "2021-11-11T16:12:06Z",
//         "content": null
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "YouTube"
//         },
//         "author": null,
//         "title": "Grand Theft Auto III – The Definitive Edition Comparison Video - PlayStation Universe",
//         "description": "It all starts in Liberty City. Originally released on October 22, 2001, Grand Theft Auto III first pioneered our approach to building highly immersive and de...",
//         "url": "https://www.youtube.com/watch?v=p1cxEezwaIM",
//         "urlToImage": "https://i.ytimg.com/vi/p1cxEezwaIM/maxresdefault.jpg",
//         "publishedAt": "2021-11-11T16:11:20Z",
//         "content": null
//     }
// ]

const Tech = (props)=>{

    const[articles,setArticles] = useState();
    const[date,setDate] = useState("");

    useEffect(()=>{
        //fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=technology&apiKey=0235418f21104fc480a17de240746f70`)
        fetch(`https://saurav.tech/NewsAPI/top-headlines/category/technology/${props.country}.json`)
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

    const [didMount, setDidMount] = useState(false); 

    useEffect(() => {
    setDidMount(true);
    return () => setDidMount(false);
    }, [])

    if(!didMount) {
    return null;
    }

    return(
        <div className={classes.techNews}>
            <div className={classes.techNews__logo}>
                <h1>TECHNNOLOGY <br/>NEWS</h1>
                <p>{date}</p>
            </div>
            <div className={classes.techNews__content}>
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

export default Tech;