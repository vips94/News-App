import React,{useEffect, useState} from 'react';
import NewsCard from '../components/NewsCard';
import classes from './TopHeadlines.module.scss';

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
//             "name": "Hindustan Times"
//         },
//         "author": "HT Entertainment Desk",
//         "title": "Swara Bhasker hits back at Twitter user who told her ‘my maid looks much better’ - Hindustan Times",
//         "description": "Swara Bhasker got a disparaging comment on a picture she posted, in which she wore a saree. Here is how she reacted. | Bollywood",
//         "url": "https://www.hindustantimes.com/entertainment/bollywood/swara-bhasker-hits-back-at-twitter-user-who-told-her-my-maid-looks-much-better-101636685460838.html",
//         "urlToImage": "https://images.hindustantimes.com/img/2021/11/12/1600x900/swara_bhasker_1636685879943_1636685895974.jpg",
//         "publishedAt": "2021-11-12T03:40:00Z",
//         "content": "Swara Bhasker clapped back at a Twitter user who criticised her selfie in a saree and commented that their household help looks much better. She hoped that the person respected their domestic helps l… [+1710 chars]"
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
//             "id": null,
//             "name": "The News Minute"
//         },
//         "author": null,
//         "title": "Chennai rains: How control rooms attend to rain-related complaints, allay public fear - The News Minute",
//         "description": "The phones at the Greater Chennai Corporation’s control room have been ringing non-stop since Saturday night, November 6. Forty-five people — volunteers and corporation officials — have been manning these calls. Since the deluge on November 6, the three integ…",
//         "url": "https://www.thenewsminute.com/article/chennai-rains-how-control-rooms-attend-rain-related-complaints-allay-public-fear-157511",
//         "urlToImage": "https://www.thenewsminute.com/sites/default/files/Chennai_Corporation_Controlroom_TNrains_12112021_1200x800.jpg",
//         "publishedAt": "2021-11-12T03:00:40Z",
//         "content": "Since November 6, the three integrated call centres under the Chennai Corporation have received over 16,000 calls on inundation, wall collapse and waterlogging, among others.The phones at the Greater… [+4543 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "Hindustan Times"
//         },
//         "author": "hindustantimes.com",
//         "title": "'Exaggerated to him, not to me': Salman Khurshid on Ghulam Nabi Azad's take on Hindutva - Hindustan Times",
//         "description": "Ghulam Nabi Azad must have said it in a casual moment when he had nothing serious thoughtful consideration of it, Salman Khurshid said. | Latest News India",
//         "url": "https://www.hindustantimes.com/india-news/exaggerated-to-him-not-me-salman-khurshid-on-ghulam-nabi-s-take-on-hindutva-101636685699137.html",
//         "urlToImage": "https://images.hindustantimes.com/img/2021/11/12/1600x900/PTI11-10-2021-000237B-0_1636685733501_1636685744393.jpg",
//         "publishedAt": "2021-11-12T02:58:28Z",
//         "content": "Senior Congress leader Salman Khurshid has stood by his observation on Hindutva that has kicked up a row and clarified that his remark in his new book was on Hindutva and not on Hinduism. After Congr… [+2303 chars]"
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
//             "id": null,
//             "name": "Moneycontrol"
//         },
//         "author": null,
//         "title": "Joe Biden administration settles for automatic job authorisation for spouses of H-1B visa holders - Moneycontrol",
//         "description": "The settlement in this regard was reached by the Department of Homeland Security in a class-action lawsuit, which was filed by the American Immigration Lawyers Association (AILA) on behalf of immigrant spouses this summer.",
//         "url": "https://www.moneycontrol.com/news/world/joe-biden-administration-settles-for-automatic-job-authorisation-for-spouses-of-h-1b-visa-holders-7710271.html",
//         "urlToImage": "https://images.moneycontrol.com/static-mcnews/2017/04/C9r282XVYAA2tsH-770x433.jpg",
//         "publishedAt": "2021-11-12T02:30:40Z",
//         "content": "In yet another immigration-friendly move, the Biden administration has agreed to provide automatic work authorisation permits to spouses of H-1B visas holders, a step that would benefit thousands of … [+1924 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "NDTV News"
//         },
//         "author": null,
//         "title": "Covaxin Found To Be 77.8% Effective Against Covid In Lancet Study - NDTV",
//         "description": "Covaxin, a vaccine developed by government's medical research agency and Bharat Biotech International Ltd., was found to have a 77.8% efficacy rate against symptomatic Covid-19 in a long-awaited analysis published in The Lancet.",
//         "url": "https://www.ndtv.com/india-news/coronavirus-covaxin-found-to-be-77-8-effective-against-covid-in-lancet-study-2607756",
//         "urlToImage": "https://c.ndtvimg.com/2021-11/oos1o02_covaxin-india-generic-bloomberg_625x300_12_November_21.jpg",
//         "publishedAt": "2021-11-12T02:00:15Z",
//         "content": "No severe-vaccine-related deaths or adverse events were recorded during a randomized trial.\r\nCovaxin, a vaccine developed by government's medical research agency and Bharat Biotech International Ltd.… [+2167 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "Hindustan Times"
//         },
//         "author": "AFP",
//         "title": "SpaceX capsule with crew of four docks with International Space Station - Hindustan Times",
//         "description": "The ISS had been operating with just one Nasa astronaut in the US segment to welcome the incoming crew after the astronauts of the earlier Crew-2 mission splashed down in the Gulf of Mexico on Sunday. | World News",
//         "url": "https://www.hindustantimes.com/world-news/spacex-capsule-with-crew-of-four-docks-with-international-space-station-101636682246249.html",
//         "urlToImage": "https://images.hindustantimes.com/img/2021/11/12/1600x900/SPACE-US-ISS-NASA-CREW3-0_1636682278135_1636682286849.jpg",
//         "publishedAt": "2021-11-12T01:59:44Z",
//         "content": "A SpaceX capsule carrying four astronauts docked with the International Space Station on Thursday, kicking off a six-month stay on the orbiting outpost.\r\nThis mission known as Crew-3 is part of Nasa'… [+2189 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "BloombergQuint"
//         },
//         "author": "Darshan A Nakhwa",
//         "title": "All You Need To Know Going Into Trade On November 12 - BloombergQuint",
//         "description": "Stocks in the news, big brokerage calls of the day, complete trade setup and much more!",
//         "url": "https://www.bloombergquint.com/markets/all-you-need-to-know-going-into-trade-on-november-12-2",
//         "urlToImage": "https://gumlet.assettype.com/thequint-fit%2F2021-02%2Fa7f00ec0-d89e-4df6-bb56-6a61e5cc80fb%2FiStock_1171688448.jpg?w=1200&auto=format%2Ccompress&ogImage=true",
//         "publishedAt": "2021-11-12T01:46:32Z",
//         "content": "Earnings: Coal India, Hero Motocorp, Hindalco Industries, ONGC, Grasim Industries, Bharat Forge, Borosil, Apollo Hospitals Enterprise, BEML, National Aluminium Co., PI Industries, Alkem Laboratories,… [+1304 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "Hindustan Times"
//         },
//         "author": "HT Entertainment Desk",
//         "title": "Vicky Kaushal reveals what made him steer away from engineering: ‘I was a rat in the race’ - Hindustan Times",
//         "description": "Vicky Kaushal said that during an industrial visit in his second year of engineering college, he realised that an office job was not for him. \"I just was very sure of something that I don’t belong here,” he said. | Bollywood",
//         "url": "https://www.hindustantimes.com/entertainment/bollywood/vicky-kaushal-reveals-what-made-him-steer-away-from-engineering-i-was-a-rat-in-the-race-101636625386435.html",
//         "urlToImage": "https://images.hindustantimes.com/img/2021/11/11/1600x900/vicky_kaushal_1636625630277_1636625648200.jpg",
//         "publishedAt": "2021-11-12T01:38:51Z",
//         "content": "Actor Vicky Kaushal, who studied engineering, realised that an office job was not his cup of tea during an industrial visit in his second year of college. Vicky said that when he saw people working o… [+1692 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "News18"
//         },
//         "author": "Lifestyle Desk",
//         "title": "World Pneumonia Day 2021: Steps You Can Take to Protect Yourself from This Respiratory Disease - News18",
//         "description": "World Pneumonia Day 2021: Apart from getting the pneumonia vaccine, there are a couple of healthy habits which can help you to keep your immune system strong",
//         "url": "https://www.news18.com/news/lifestyle/world-pneumonia-day-2021-steps-you-can-take-to-protect-yourself-from-this-respiratory-disease-4431662.html",
//         "urlToImage": "https://images.news18.com/ibnlive/uploads/2021/11/world-pneumonia-day-2021-1-163663358816x9.jpg",
//         "publishedAt": "2021-11-12T01:35:20Z",
//         "content": "Pneumonia is a lung infection, caused by upper respiratory tract infections in the nose and throat. It can happen to anyone at any age, but babies under the age of 2 and adults over 65 years are at h… [+2068 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "NDTV News"
//         },
//         "author": null,
//         "title": "\"Extraordinary Convergence\": Taliban Welcomes India's Afghanistan Meet - NDTV",
//         "description": "Taliban on Thursday welcomed the Delhi Regional Security Dialogue on Afghanistan and said the world should not be worried about Afghan soil being used against anyone.",
//         "url": "https://www.ndtv.com/india-news/trying-to-take-solid-steps-in-governance-taliban-on-indias-afghanistan-meet-report-2607665",
//         "urlToImage": "https://c.ndtvimg.com/2021-11/u90sli8g_ajit-doval-meeting-on-afghanistan-650_625x300_10_November_21.jpg",
//         "publishedAt": "2021-11-12T01:15:00Z",
//         "content": "NSAs of eight countries including India took part in Delhi Regional Security Dialogue on Afghanistan\r\nKabul: Taliban on Thursday welcomed the Delhi Regional Security Dialogue on Afghanistan and said … [+1478 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "The Indian Express"
//         },
//         "author": "Ananthakrishnan G",
//         "title": "Char Dham road: BrahMos needs to be taken to LAC, need wide roads, says govt - The Indian Express",
//         "description": "AG in SC: We are vulnerable, have to defend country, do whatever we can",
//         "url": "https://indianexpress.com/article/india/char-dham-road-debate-lac-supreme-court-7618852/",
//         "urlToImage": "https://images.indianexpress.com/2021/02/UKD-2.jpg",
//         "publishedAt": "2021-11-12T01:03:52Z",
//         "content": "Alluding to the Chinese military build-up across the Line of Actual Control, the Centre told the Supreme Court Thursday that wider roads are needed in the Char Dham mountain region of Uttarakhand to … [+5028 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "The Indian Express"
//         },
//         "author": "Anisha Dutta",
//         "title": "ADR report: Over 55% donations to regional parties from ‘unknown’ sources, most via electoral bonds - The Indian Express",
//         "description": "While the total donations received by 25 regional parties in FY 2019-20 added up to Rs 803.24 crore, Rs 445.7 crore was attributed to “unknown” sources, the report said.",
//         "url": "https://indianexpress.com/article/india/adr-report-party-donations-electoral-bonds-7618972/",
//         "urlToImage": "https://images.indianexpress.com/2021/11/election-commission-1200-1-1.jpg",
//         "publishedAt": "2021-11-12T00:57:36Z",
//         "content": "Over 55% of the donations received by regional parties in FY 2019-20 came from unknown sources, the Association for Democratic Reforms (ADR) said in a report Thursday. According to the report, electo… [+2514 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "The Indian Express"
//         },
//         "author": "Lalmani Verma",
//         "title": "Amit Shah takes charge, to chair crucial pre-poll meet in Varanasi today - The Indian Express",
//         "description": "Highlighting the importance of the meeting, the party has put up over 1,000 hoardings in the city, with Radha Mohan Singh reaching Varanasi Thursday to oversee the preparations.",
//         "url": "https://indianexpress.com/article/cities/lucknow/amit-shah-up-elections-varanasi-7618836/",
//         "urlToImage": "https://images.indianexpress.com/2021/10/Amit-Shah-7.jpg",
//         "publishedAt": "2021-11-12T00:55:40Z",
//         "content": "Making it clear that he will be supervising BJPs preparations for the UP assembly elections scheduled to be held within months, Union Home Minister Amit Shah will chair a meeting in Varanasi Friday o… [+2702 chars]"
//     },
//     {
//         "source": {
//             "id": "the-times-of-india",
//             "name": "The Times of India"
//         },
//         "author": "Sagar Malviya and Writankar Mukherjee",
//         "title": "Companies to hike price of discretionary items by 8-10% - Economic Times",
//         "description": "The cost challenge comes at a time when retailers across segments breached the pre-pandemic sales mark during the festive season and are trying to sustain the momentum in the next few quarters.",
//         "url": "https://economictimes.indiatimes.com/industry/services/retail/companies-to-hike-price-of-discretionary-items-by-8-10/articleshow/87656716.cms",
//         "urlToImage": "https://img.etimg.com/thumb/msid-87656730,width-1070,height-580,imgsize-82962,overlay-economictimes/photo.jpg",
//         "publishedAt": "2021-11-12T00:19:00Z",
//         "content": "Companies and retailers selling discretionary products such as apparel, electronics, liquor and cosmetics said they will increase prices by 8-10% to offset rising raw material and supply chain costs … [+4133 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "Hindustan Times"
//         },
//         "author": "Hindustantimes",
//         "title": "Bombay HC to hear today defamation suit filed by Sameer Wankhede's father against Nawab Malik - Hindustan Times",
//         "description": "Mumbai: NCB zonal director Sameer Wankhede's father filed a police complaint against Maharashtra minister Nawab Malik on Monday, pointing out that ‘false’ and ‘derogatory’ allegations regarding caste have been raised. | Mumbai news",
//         "url": "https://www.hindustantimes.com/cities/mumbai-news/bombay-hc-to-hear-today-defamation-suit-filed-by-sameer-wankhede-s-father-against-nawab-malik-101636674023438.html",
//         "urlToImage": "https://images.hindustantimes.com/img/2021/11/12/1600x900/8fb24a82-4248-11ec-b1ea-9df134a746cb_1636675540539_1636675549982.jpg",
//         "publishedAt": "2021-11-12T00:11:59Z",
//         "content": "The Bombay high court will on Friday hear out the defamation suit filed by Narcotics Control Bureau (NCB) zonal director Sameer Wankhede's father, Dhyandev, against Maharashtra cabinet minister Nawab… [+2598 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "The Indian Express"
//         },
//         "author": "Aashish Aryan",
//         "title": "As hate content spiked, cost cuts at Facebook hit its review team - The Indian Express",
//         "description": "To reduce expenses, three potential levers were proposed internally at the social media company — reviewing fewer user reports, reviewing fewer proactively detected pieces of content, and reviewing fewer appeals.",
//         "url": "https://indianexpress.com/article/india/facebook-hate-speech-india-content-review-7618845/",
//         "urlToImage": "https://images.indianexpress.com/2021/10/2021-10-25T110020Z_1637749082_RC2ZGQ9D62ZD_RTRMADP_3_FACEBOOK-DOCUMENTS-GLOBAL-1.jpg",
//         "publishedAt": "2021-11-11T23:47:00Z",
//         "content": "As inflammatory and divisive content increased across most markets including India, it was the global team responsible for reviewing hate speech at Facebook that faced cost cuts. This is flagged in i… [+4924 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "Dtnext.in"
//         },
//         "author": "100010509524078",
//         "title": "Partial lunar eclipse on November 19 - DTNext",
//         "description": "“The partial phase of the eclipse will begin at 12.48 p.m. and will end at 4.17 p.m.,” the IMD said on Thursday.",
//         "url": "http://www.dtnext.in/News/National/2021/11/12045453/1328376/Partial-lunar-eclipse-on-November-19.vpf",
//         "urlToImage": "https://img.dtnext.in/Articles/2021/Nov/202111120454530164_Partial-lunar-eclipse-on-November-19_SECVPF.gif",
//         "publishedAt": "2021-11-11T23:25:14Z",
//         "content": "The partial phase of the eclipse will begin at 12.48 p.m. and will end at 4.17 p.m., the IMD said on Thursday.\r\nNew Delhi:A partial eclipse of the moon will occur on November 19 and a small span of t… [+409 chars]"
//     }
// ]

const TopHeadlines = (props)=>{
    const[articles,setArticles] = useState();

    useEffect(()=>{
        fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=0235418f21104fc480a17de240746f70`)
        .then((response) => {
          return response.json();
        })
        .then((myJson) =>{
          setArticles(myJson.articles);
        })
    }
    // setArticles(data)}
    ,[articles,props.country]
    );

    // const event = new Date(articles[0].publishedAt);

    // const options = { month: 'long', day: 'numeric',weekday:'long' };

    // const date = event.toLocaleDateString(undefined, options);

    return(
        <div className={classes.topHeadlines}>
           <div className={classes.topHeadlines__logo}>
                <h1>TOP<br/>NEWS</h1>
                <p>{}</p>
            </div>
            <div className={classes.topHeadlines__content}>
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

export default TopHeadlines;