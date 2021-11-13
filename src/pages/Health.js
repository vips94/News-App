import React,{useState,useEffect} from 'react';
import NewsCard from '../components/NewsCard';
import classes from './Health.module.scss';

// const data = [
//     {
//         "source": {
//             "id": null,
//             "name": "SciTechDaily"
//         },
//         "author": null,
//         "title": "COVID-19: The Older You Are, the More Antibodies You Have – Better Protection Against Delta Variant - SciTechDaily",
//         "description": "With the emergence of SARS-CoV-2 variants worldwide, the pandemic's spread is accelerating. A research team led by Joelle Pelletier and Jean-François Masson, both professors in Université de Montréal's Department of Chemistry, wanted to find out whether natur…",
//         "url": "https://scitechdaily.com/covid-19-the-older-you-are-the-more-antibodies-you-have-better-protection-against-delta-variant/",
//         "urlToImage": "https://scitechdaily.com/images/Antibodies-Surrounding-SARS-CoV-2-Particle.jpg",
//         "publishedAt": "2021-11-12T04:11:21Z",
//         "content": "An artistic rendering of antibodies surrounding a SARS-CoV-2 particle.\r\nWith the emergence of SARS-CoV-2 variants worldwide, the pandemic’s spread is accelerating. A research team led by Joelle Pelle… [+3926 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "YouTube"
//         },
//         "author": null,
//         "title": "No, deer can't spread COVID-19 to humans - THV11",
//         "description": "An NPR article suggested deer could carry SARS-CoV-2 and spread it to humans. We VERIFY.https://www.thv11.com/article/news/verify/no-deer-cant-spread-covid-1...",
//         "url": "https://www.youtube.com/watch?v=kWxN34AOc4I",
//         "urlToImage": "https://i.ytimg.com/vi/kWxN34AOc4I/hqdefault.jpg",
//         "publishedAt": "2021-11-12T04:09:30Z",
//         "content": null
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "YouTube"
//         },
//         "author": null,
//         "title": "BeatO: Health Application Helps to Prevent, Control, & Reverse Diabetes - Republic World",
//         "description": "BeatO: Health Application Helps to Prevent, Control, & Reverse Diabetes#BeatO #Diabetes #RepublicTV Diabetes continues to be one of the most prevalent non-co...",
//         "url": "https://www.youtube.com/watch?v=94c986u7RBM",
//         "urlToImage": "https://i.ytimg.com/vi/94c986u7RBM/maxresdefault.jpg",
//         "publishedAt": "2021-11-12T03:20:26Z",
//         "content": null
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "Hindustan Times"
//         },
//         "author": "Deutsche Welle",
//         "title": "Undiagnosed diabetes a COVID risk in Africa, WHO warns - Hindustan Times",
//         "description": "Data from 13 African countries has found a 10.2% case fatality rate in COVID-19 patients with diabetes, compared with 2.5% for COVID-19 patients overall. | Health",
//         "url": "https://www.hindustantimes.com/lifestyle/health/undiagnosed-diabetes-a-covid-risk-in-africa-who-warns-101636682779424.html",
//         "urlToImage": "https://images.hindustantimes.com/img/2021/11/12/1600x900/rw_1636682841506_1636682862957.jpg",
//         "publishedAt": "2021-11-12T02:13:15Z",
//         "content": "Data from 13 African countries has found a 10.2% case fatality rate in COVID-19 patients with diabetes, compared with 2.5% for COVID-19 patients overall.\r\nDeath rates from COVID-19 infections are hig… [+2384 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "Zoom"
//         },
//         "author": "Kirti Pandey",
//         "title": "Grab the “golden hour” of sleep, study reveals sweet spot window that will help you live longer - Times Now",
//         "description": "Want to live a long and healthy life? The time you go to bed may affect your risk for heart disease, researchers say. Train your body to grab this heart health sweet spot for falling asleep between 10 pm to 11 pm.",
//         "url": "https://www.timesnownews.com/health/article/grab-the-golden-hour-of-sleep-study-reveals-sweet-spot-window-live-longer-heart-health-longevity-circadian-rhythm/831195",
//         "urlToImage": "https://imgk.timesnownews.com/story/Time_for_exercising_clock_and_yoga_mat_outdoor.jpg?tr=w-560,h-292,fo-top",
//         "publishedAt": "2021-11-12T01:59:15Z",
//         "content": "<ul><li>Sleep can be an elusive thing for some and an easy thing for others. Sleep timings are also at the mercy of ones work schedules. </li></ul>\r\n<ul><li>In all this melee, it is ones health that … [+6727 chars]"
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
//             "name": "News-Medical.Net"
//         },
//         "author": null,
//         "title": "Protein in the blood could predict type 2 diabetes many years before diagnosis - News-Medical.Net",
//         "description": "A large study led by Lund University in Sweden has identified a protein in the blood that could predict type 2 diabetes up to nineteen years before the onset of the disease.",
//         "url": "https://www.news-medical.net/news/20211111/Protein-in-the-blood-could-predict-type-2-diabetes-many-years-before-diagnosis.aspx",
//         "urlToImage": "https://www.news-medical.net/image-handler/picture/2014/7/Insulin-620x480.jpg",
//         "publishedAt": "2021-11-12T00:15:00Z",
//         "content": "A large study led by Lund University in Sweden has identified a protein in the blood that could predict type 2 diabetes up to nineteen years before the onset of the disease. The study is published in… [+2957 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "The Lancet"
//         },
//         "author": null,
//         "title": "100 years of insulin: a technical success but an access failure - The Lancet",
//         "description": "The isolation of insulin in 1921 and its subsequent delivery to a 14-year-old boy\nin a diabetic coma in Toronto in 1922 was a ground-breaking scientific and clinical\nachievement that has transformed diabetes care and is celebrated in this themed issue\nof The …",
//         "url": "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(21)02479-X/fulltext",
//         "urlToImage": "//els-jbs-prod-cdn.jbs.elsevierhealth.com/cms/asset/d2df0535-05d9-4dc6-822b-1b7d8f2c373b/fx1.jpg",
//         "publishedAt": "2021-11-12T00:11:59Z",
//         "content": "We use cookies to help provide and enhance our service and tailor content and ads. To update your cookie settings, please visit the Cookie Preference Center for this site.Copyright © 2021 Elsevier In… [+157 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "Ksusentinel.com"
//         },
//         "author": "ksuadmin",
//         "title": "5 natural remedies to cure colds and flu – KSU | The Sentinel Newspaper - KSU | The Sentinel Newspaper",
//         "description": "Sometimes the home remedies and natural can become your best ally to cure the symptoms of flu and the cold . For this reason, in this article we are going to detail some of the home remedies master of",
//         "url": "https://ksusentinel.com/2021/11/11/5-natural-remedies-to-cure-colds-and-flu/",
//         "urlToImage": "https://ksusentinel.com/wp-content/uploads/2021/11/2580566-5-natural-remedies-to-cure-colds-and-flu-780x470.jpg",
//         "publishedAt": "2021-11-11T23:46:04Z",
//         "content": "Sometimes the home remedies and natural can become your best ally to cure the symptoms of flu and the cold . For this reason, in this article we are going to detail some of the home remedies master o… [+2448 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "YouTube"
//         },
//         "author": null,
//         "title": "The pandemic may not end anytime soon, but these tools can help stem its impact - PBS NewsHour",
//         "description": "The number of new COVID-19 infections in the United States is rising once again despite booster shot rollouts, a new vaccine for children and a promising pil...",
//         "url": "https://www.youtube.com/watch?v=egELMELPHcg",
//         "urlToImage": "https://i.ytimg.com/vi/egELMELPHcg/hqdefault.jpg",
//         "publishedAt": "2021-11-11T23:35:06Z",
//         "content": null
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "Express"
//         },
//         "author": "Liam Doyle",
//         "title": "Osteoporosis symptoms: FIVE supplements to combat osteoporosis - Daily Express",
//         "description": "OSTEOPOROSIS is one of several conditions people may develop in older age and presents with a wide variety of potentially debilitating symptoms. Express.co.uk has compiled a list of the best supplements to help combat them.",
//         "url": "https://www.express.co.uk/life-style/health/1520237/Osteoporosis-symptoms-best-supplements-for-osteoporosis-evg",
//         "urlToImage": "https://cdn.images.express.co.uk/img/dynamic/11/750x445/1520237.jpg",
//         "publishedAt": "2021-11-11T23:14:54Z",
//         "content": null
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "Hindustan Times"
//         },
//         "author": "HT Correspondent",
//         "title": "16-yr-old girl dies of dengue in Mohali, 105 infected in Chandigarh tricity area - Hindustan Times",
//         "description": "The girl was a resident of Mubarakpur in Dera Bassi and was undergoing treatment at the Government Medical College and Hospital (GMCH) in Sector 32, Chandigarh",
//         "url": "https://www.hindustantimes.com/cities/chandigarh-news/16yrold-girl-dies-of-dengue-in-mohali-105-infected-in-chandigarh-tricity-area-101636668520496.html",
//         "urlToImage": "https://images.hindustantimes.com/img/2021/11/11/1600x900/95388ab8-433b-11ec-9093-36a2136aa648_1636668519497.jpg",
//         "publishedAt": "2021-11-11T22:08:40Z",
//         "content": "A 16-year-old girl succumbed to dengue in Mohali on Thursday, taking the districts death toll to 36 for this year. The girl was a resident of Mubarakpur in Dera Bassi and was undergoing treatment at … [+306 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "Devdiscourse"
//         },
//         "author": "Reuters",
//         "title": "Brazil plays down 'mad cow' risk in suspect Rio cases - Devdiscourse",
//         "description": "Federal biomedical institute Fiocruz, which is investigating the possibility of Bovine Spongiform Encephalitis - the official name for mad cow disease - said the two patients are suspected of having the \"sporadic\" form of Creutzfeldt-Jakob disease not related…",
//         "url": "https://www.devdiscourse.com/article/health/1804064-brazil-plays-down-mad-cow-risk-in-suspect-rio-cases",
//         "urlToImage": "https://www.devdiscourse.com/remote.axd?https://devdiscourse.blob.core.windows.net/devnews/17_01_2021_18_26_48_6804299.jpg?width=920&format=jpeg",
//         "publishedAt": "2021-11-11T20:51:19Z",
//         "content": "Brazil's Agriculture Ministry said that two cases reported on Thursday of a neurodegenerative disorder in patients in Rio de Janeiro state were not related to beef consumption, tamping down fears of … [+2139 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "Healio"
//         },
//         "author": null,
//         "title": "Inflammatory diets may increase risk for incident dementia - Healio",
//         "description": "Diets with higher inflammatory potential appeared linked to increased risk for incident dementia, according to results of a population-based study published in Neurology. &ldquo;We do not well understand the mechanism via which diet may affect brain health,&r…",
//         "url": "https://www.healio.com/news/neurology/20211111/inflammatory-diets-may-increase-risk-for-incident-dementia",
//         "urlToImage": "https://www.healio.com/~/media/slack-news/neurology/miscellaneous/infographics/neuro1121charisis_graphic_01.jpg",
//         "publishedAt": "2021-11-11T20:47:28Z",
//         "content": "We were unable to process your request. Please try again later. If you continue to have this issue please contact customerservice@slackinc.com.Back to Healio\r\nDiets with higher inflammatory potential… [+2480 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "EurekAlert"
//         },
//         "author": null,
//         "title": "It takes more than one mutant copy of the PIK3CA gene to make breast cancer more aggressive - EurekAlert",
//         "description": "Breast cancers that have an overactive PI3K enzyme, involved in cell growth and division, tend to be more aggressive and to spread and divide more like stem cells. But a new study by Ralitsa Madsen of University College London and colleagues publishing Novemb…",
//         "url": "https://www.eurekalert.org/news-releases/933803",
//         "urlToImage": "https://earimediaprodweb.azurewebsites.net/Api/v1/Multimedia/b7bb9eef-c892-485e-ac98-66d8ea745047/Rendition/thumbnail/Content/Public",
//         "publishedAt": "2021-11-11T19:11:09Z",
//         "content": "image: Counterintuitive relationship between PIK3CA genotype and transcriptomic stemness and PI3K signaling scores in human breast cancer.view more \r\nCredit: Ralitsa Madsen, CC-BY 4.0 (https://creati… [+3388 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "The Lancet"
//         },
//         "author": null,
//         "title": "Efficacy, safety, and lot-to-lot immunogenicity of an inactivated SARS-CoV-2 vaccine (BBV152): interim results of a randomised, double-blind, controlled, phase 3 trial - The Lancet",
//         "description": "BBV152 was highly efficacious against laboratory-confirmed symptomatic COVID-19 disease\nin adults. Vaccination was well tolerated with no safety concerns raised in this interim\nanalysis.",
//         "url": "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(21)02000-6/fulltext",
//         "urlToImage": "//els-jbs-prod-cdn.jbs.elsevierhealth.com/cms/asset/72136a68-908b-4771-8d37-a97b1ffbe198/gr1.jpg",
//         "publishedAt": "2021-11-11T19:07:20Z",
//         "content": "We use cookies to help provide and enhance our service and tailor content and ads. To update your cookie settings, please visit the Cookie Preference Center for this site.Copyright © 2021 Elsevier In… [+157 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "Dailypioneer.com"
//         },
//         "author": "The Pioneer",
//         "title": "22 mn kids miss 1st dose of measles vax as Covid hogged limelight: WHO - Daily Pioneer",
//         "description": "In 2020, when Covid-19 was at its peak, more than 22 million infants — the largest number in two decades — globally did not receive the first dose of measles vaccine, according to a report published in MMWR.\n\nAlthough measles cases actually declined globally …",
//         "url": "https://www.dailypioneer.com/2021/page1/22-mn-kids-miss-1st-dose-of-measles-vax-as-covid-hogged-limelight--who.html",
//         "urlToImage": "https://www.dailypioneer.com/images/logo.jpg",
//         "publishedAt": "2021-11-11T18:53:03Z",
//         "content": "In 2020, when Covid-19 was at its peak, more than 22 million infants the largest number in two decades globally did not receive the first dose of measles vaccine, according to a report published in M… [+2400 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "VegNews"
//         },
//         "author": "Anna Starostinetskaya",
//         "title": "Eating Fat from Plants Instead of Meat Drops Stroke Risk by 12 Percent, New Study Suggests - VegNews",
//         "description": "Researchers find that consuming plant-based fats versus meat-derived fats resulted in a decreased risk of stroke.",
//         "url": "https://vegnews.com/2021/11/plant-based-fat-vs-meat-fat",
//         "urlToImage": "https://vegnews.com/media/W1siZiIsIjI1NzIwL1ZlZ05ld3MuQXZvY2Fkb0hhbmRzLmpwZyJdLFsicCIsImNvbnZlcnQiLCItY3JvcCAyOTk5eDE1NzQrMCs5MiArcmVwYWdlIC1yZXNpemUgMTIwMHg2MzBeIix7ImZvcm1hdCI6ImpwZyJ9XSxbInAiLCJvcHRpbWl6ZSJdXQ/VegNews.AvocadoHands.jpg?sha=bc9d3b5c88e795ac",
//         "publishedAt": "2021-11-11T18:09:44Z",
//         "content": "A new study found that the source of dietary fat plays a key role in stroke risk. Researchers studied self-reported dietary patterns of more than 117,000 health professionals as part of the longest-r… [+3991 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "Medical Xpress"
//         },
//         "author": "Thor Christensen",
//         "title": "Plaque-lined arteries put future health of young American Indians at risk - Medical Xpress",
//         "description": "Young American Indians with early signs of plaque in their arteries may be especially vulnerable to heart attacks, strokes and other cardiovascular conditions later in life, according to new research that calls for earlier interventions.",
//         "url": "https://medicalxpress.com/news/2021-11-plaque-lined-arteries-future-health-young.html",
//         "urlToImage": "https://scx2.b-cdn.net/gfx/news/2021/aha-news-plaque-lined.jpg",
//         "publishedAt": "2021-11-11T17:30:02Z",
//         "content": "Young American Indians with early signs of plaque in their arteries may be especially vulnerable to heart attacks, strokes and other cardiovascular conditions later in life, according to new research… [+4478 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "Orissapost.com"
//         },
//         "author": "Post News Network",
//         "title": "Post-Covid fatigue is most prevalent in diabetes patients: Study - OrissaPOST",
//         "description": "People with Type-2 diabetes who also suffered Covid-19 are more likely to experience severe fatigue than those who did not have the infectious disease, according to a new study released Thursday. Post-Covid syndrome or Long Covid has emerged as a major roadbl…",
//         "url": "https://www.orissapost.com/post-covid-fatigue-is-most-prevalent-in-diabetes-patients-study/",
//         "urlToImage": "https://www.orissapost.com/wp-content/uploads/2020/07/Diabetes.jpg",
//         "publishedAt": "2021-11-11T17:00:43Z",
//         "content": "People with Type-2 diabetes who also suffered Covid-19 are more likely to experience severe fatigue than those who did not have the infectious disease, according to a new study released Thursday.\r\nPo… [+3067 chars]"
//     }
// ]

const Health = (props)=>{
    const[articles,setArticles] = useState();
    const[date,setDate] = useState("");

    useEffect(()=>{
        fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=health&apiKey=0235418f21104fc480a17de240746f70`)
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

    // const event = new Date(articles[0].publishedAt);

    // const options = { month: 'long', day: 'numeric',weekday:'long' };

    // const date = event.toLocaleDateString(undefined, options);
    return(
        <div className={classes.health}>
            <div className={classes.health__logo}>
                <h1>HEALTH <br/>NEWS</h1>
                <p>{date}</p>
            </div>
            <div className={classes.health__content}>
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

export default Health;