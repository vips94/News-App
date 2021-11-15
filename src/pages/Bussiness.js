import React,{useState,useEffect} from 'react';
import NewsCard from '../components/NewsCard';
import classes from './Bussiness.module.scss';

// const data = [{
//     "source": {
//         "id": null,
//         "name": "Livemint"
//     },
//     "author": "Bloomberg",
//     "title": "Increasing prices of your morning coffee, biscuits are troubling RBI. Here's why - Mint",
//     "description": "Companies from Hindustan Unilever Ltd., the Indian arm of Unilever Plc, to Nestle India Ltd. have pointed to profit-squeeze from higher input costs and supply chain strains",
//     "url": "https://www.livemint.com/companies/news/increasing-prices-of-your-morning-coffee-biscuits-are-troubling-rbi-here-s-why-11636681467462.html",
//     "urlToImage": "https://images.livemint.com/img/2021/11/12/600x338/Coffee_1636684019085_1636684250712.jpg",
//     "publishedAt": "2021-11-12T02:31:30Z",
//     "content": "A clutch of Indian companies have turned increasingly vocal about their inflation concerns, setting the stage for raising prices that could test the central banks resolve to keep borrowing costs lowe… [+3822 chars]"
// },
// {
//     "source": {
//         "id": null,
//         "name": "Livemint"
//     },
//     "author": "Livemint",
//     "title": "MSCI India Index rejig: IRCTC, Zomato, Tata Power, 6 other stocks added; 2 deleted - Mint",
//     "description": "The changes in constituents for the MSCI India Domestic Index will take place as of the close of November 30",
//     "url": "https://www.livemint.com/market/stock-market-news/msci-india-index-rejig-announced-irctc-zomato-tata-power-mindtree-among-stock-additions-11636682474955.html",
//     "urlToImage": "https://images.livemint.com/img/2021/11/12/600x338/zerodha-kD0F--621x414@LiveMint_1636682579343.jpg",
//     "publishedAt": "2021-11-12T02:13:50Z",
//     "content": "MSCI Inc, a leading provider of research-based indexes and analytics, has announced the results of the November 2021 Semi-Annual Index Review for the MSCI Equity Indexes and all the changes announced… [+1512 chars]"
// },
// {
//     "source": {
//         "id": null,
//         "name": "CNBCTV18"
//     },
//     "author": "CNBCTV18.com",
//     "title": "Tata Steel, Sun Pharma, Zee, NMDC and more: Top stocks to watch out for on Nov 12 - CNBCTV18",
//     "description": "Indian benchmark indices may witness a higher opening on Friday. SGX Nifty50 futures were up 0.3 percent at 17,976.5 as of 6:55 am, hinting at a higher start.",
//     "url": "https://www.cnbctv18.com/photos/market/stocks/tata-steel-sun-pharma-nmdc-and-more-top-stocks-to-watch-out-for-on-nov-12-indiabulls-housing-hindalco-zee-oil-and-natural-gas-corporation-burger-king-hero-motocorp-11433882.htm",
//     "urlToImage": "https://images.cnbctv18.com/wp-content/uploads/2019/03/AP19065653679531-1019x573.jpg",
//     "publishedAt": "2021-11-12T01:52:00Z",
//     "content": "<li>\r\nCoal India, Grasim Industries, Hero MotoCorp, Hindalco Industries, Oil and Natural Gas Corporation, Amara Raja Batteries, Ashok Leyland, Bharat Forge, Granules India, National Aluminium Company… [+2278 chars]"
// },
// {
//     "source": {
//         "id": null,
//         "name": "BloombergQuint"
//     },
//     "author": "Darshan A Nakhwa",
//     "title": "All You Need To Know Going Into Trade On November 12 - BloombergQuint",
//     "description": "Stocks in the news, big brokerage calls of the day, complete trade setup and much more!",
//     "url": "https://www.bloombergquint.com/markets/all-you-need-to-know-going-into-trade-on-november-12-2",
//     "urlToImage": "https://gumlet.assettype.com/thequint-fit%2F2021-02%2Fa7f00ec0-d89e-4df6-bb56-6a61e5cc80fb%2FiStock_1171688448.jpg?w=1200&auto=format%2Ccompress&ogImage=true",
//     "publishedAt": "2021-11-12T01:46:32Z",
//     "content": "Earnings: Coal India, Hero Motocorp, Hindalco Industries, ONGC, Grasim Industries, Bharat Forge, Borosil, Apollo Hospitals Enterprise, BEML, National Aluminium Co., PI Industries, Alkem Laboratories,… [+1304 chars]"
// },
// {
//     "source": {
//         "id": null,
//         "name": "Indiainfoline"
//     },
//     "author": "India Infoline News Service",
//     "title": "Top stocks in focus: Tata Steel, RailTel, Indiabulls Housing Finance, ZEEL, JB Chemicals & Pharma - Indiainfoline",
//     "description": "Check out the stocks that will be in focus during trade today based on recent and latest news developments.",
//     "url": "https://www.indiainfoline.com/article/news-top-story/top-stocks-in-focus-tata-steel-railtel-indiabulls-housing-finance-zeel-jb-chemicals-pharma-121111200294_1.html",
//     "urlToImage": "https://content.indiainfoline.com/_media/iifl/img/misc/2019-08/22/full/stocks-in-focus-1566451994-79251350.jpg",
//     "publishedAt": "2021-11-12T01:41:00Z",
//     "content": "Tata Steel recorded a sharply higher profit at Rs12,547.7cr in Q2FY22 against Rs1,665.1cr in Q2FY21, revenue shot up to Rs60,282.8cr from Rs38,939.9cr yoy.RailTel Corporation of India: The Content on… [+1211 chars]"
// },
// {
//     "source": {
//         "id": null,
//         "name": "Hindustan Times"
//     },
//     "author": "hindustantimes.com",
//     "title": "Anti-Covid pill likely to get approved in India soon, DCGI reviewing data - Hindustan Times",
//     "description": "Adults who are at risk of Covid can take this pill to avoid severe symptoms or hospitalisation. However, experts have warned that anti-Covid pills are not alternatives to vaccines. | Latest News India",
//     "url": "https://www.hindustantimes.com/india-news/anticovid-pill-likely-to-get-approved-in-india-soon-dcgi-reviewing-data-101636680456713.html",
//     "urlToImage": "https://images.hindustantimes.com/img/2021/11/12/1600x900/HEALTH-CORONAVIRUS-USA-MERCK---CO-0_1636680679624_1636680823783.JPG",
//     "publishedAt": "2021-11-12T01:37:46Z",
//     "content": "The Drugs Controller General of India is reviewing the clinical data of molnupiravir, the world's first anti-Covid pill approved in the United Kingdom, for the treatment of Covid-19 in adults in Indi… [+1584 chars]"
// },
// {
//     "source": {
//         "id": null,
//         "name": "Livemint"
//     },
//     "author": "Asit Manohar",
//     "title": "Fino Payments Bank IPO listing today. Experts predict this much premium - Mint",
//     "description": "Fino Payments Bank shares may list in the range of  ₹590 to  ₹644 per stock levels, believe stock market experts",
//     "url": "https://www.livemint.com/market/ipo/fino-payments-bank-ipo-listing-today-experts-predict-this-much-premium-11636676728869.html",
//     "urlToImage": "https://images.livemint.com/img/2021/11/12/600x338/Fino_Payments_Bank_IPO_listing_date_Web_1636676855467_1636676900794.PNG",
//     "publishedAt": "2021-11-12T00:32:58Z",
//     "content": "Fino Payments Bank IPO listing date: Shares of the fintech firm are going to list at Indian bourses today. According to stock market experts, listing of the public issue worth 1,200.29 crore may repl… [+2219 chars]"
// },
// {
//     "source": {
//         "id": "the-times-of-india",
//         "name": "The Times of India"
//     },
//     "author": "Sagar Malviya and Writankar Mukherjee",
//     "title": "Companies to hike price of discretionary items by 8-10% - Economic Times",
//     "description": "The cost challenge comes at a time when retailers across segments breached the pre-pandemic sales mark during the festive season and are trying to sustain the momentum in the next few quarters.",
//     "url": "https://economictimes.indiatimes.com/industry/services/retail/companies-to-hike-price-of-discretionary-items-by-8-10/articleshow/87656716.cms",
//     "urlToImage": "https://img.etimg.com/thumb/msid-87656730,width-1070,height-580,imgsize-82962,overlay-economictimes/photo.jpg",
//     "publishedAt": "2021-11-12T00:19:00Z",
//     "content": "Companies and retailers selling discretionary products such as apparel, electronics, liquor and cosmetics said they will increase prices by 8-10% to offset rising raw material and supply chain costs … [+4133 chars]"
// },
// {
//     "source": {
//         "id": null,
//         "name": "Hindustan Times"
//     },
//     "author": "Utkarsh Anand",
//     "title": "SC asks Future Group to stop sale of retail assets to Reliance - Hindustan Times",
//     "description": "The apex court fixed the matter for a detailed hearing on November 17 | Latest News India",
//     "url": "https://www.hindustantimes.com/india-news/sc-asks-future-group-to-stop-sale-of-retail-assets-to-reliance-101636673389819.html",
//     "urlToImage": "https://images.hindustantimes.com/img/2021/11/11/1600x900/2S59M75I_1636673977585_1636673990238.jpg",
//     "publishedAt": "2021-11-11T23:41:58Z",
//     "content": "The Supreme Court on Wednesday asked the Future Group to not proceed with a proposed $3.4 billion sale of its retail assets to Reliance Industries Ltd (RIL) till its legal wrangle with Amazon.com.Inc… [+3088 chars]"
// },
// {
//     "source": {
//         "id": null,
//         "name": "Investing.com"
//     },
//     "author": "Reuters",
//     "title": "Oil bounces around, settles up despite strong dollar, near $83/barrel By Reuters - Investing.com",
//     "description": "Oil bounces around, settles up despite strong dollar, near $83/barrel",
//     "url": "https://www.investing.com/news/commodities-news/oil-prices-steady-after-falling-on-signs-us-may-release-more-reserves-2676032",
//     "urlToImage": "https://i-invdn-com.investing.com/news/Crudeoil_800x533_L_1629203302.jpg",
//     "publishedAt": "2021-11-11T21:07:00Z",
//     "content": "(Corrects closing prices and price gains for Brent and WTI in paragraph 2)\r\nBy Laura Sanicola\r\n(Reuters) -Oil prices settled slightly higher on Thursday, as the market grappled with a stronger U.S. d… [+2441 chars]"
// },
// {
//     "source": {
//         "id": null,
//         "name": "Livemint"
//     },
//     "author": "Tarush Bhalla",
//     "title": "BharatPe plans scheme to enrol merchant partners as investors - Mint",
//     "description": "BharatPe will be rolling out this programme to its more than 7.5 million existing merchant partners and will also extend it to new merchants who will join the platform",
//     "url": "https://www.livemint.com/companies/news/bharatpe-to-create-100-mn-equity-pool-to-make-merchant-partners-shareholders-11636637172982.html",
//     "urlToImage": "https://images.livemint.com/img/2021/11/11/600x338/Ashneer_Grover_Co-Founder_and_MD_BharatPe_1636646842961_1636646853959.jpg",
//     "publishedAt": "2021-11-11T19:27:27Z",
//     "content": "BENGALURU :\r\nBharatPe plans to make its merchant partners stakeholders in the company with the start of a $100 million Merchant Shareholding Programme (MSP) to encourage and reward loyalty among its … [+3762 chars]"
// },
// {
//     "source": {
//         "id": null,
//         "name": "Hindustan Times"
//     },
//     "author": "Hindustantimes",
//     "title": "Indian-American man hires woman off Craigslist to slap him every time he uses Facebook; Elon Musk approves - Hindustan Times",
//     "description": "Maneesh Sethi’s peculiar act was advertised in Craigslist back in 2012 and has started doing the rounds on social media nine years later after Tesla CEO Elon Musk reacted to it | World News",
//     "url": "https://www.hindustantimes.com/world-news/indianamerican-man-hires-woman-off-craigslist-to-slap-him-every-time-he-uses-facebook-elon-musk-approves-101636650133528.html",
//     "urlToImage": "https://images.hindustantimes.com/img/2021/11/11/1600x900/Screenshot_2021-11-11_at_10.33.37_PM_1636650236423_1636650245816.png",
//     "publishedAt": "2021-11-11T17:08:00Z",
//     "content": "Maneesh Sethi, an Indian-American entrepreneur hired a slapper off Craigslist to slap him every time he opened Facebook. Sethi, founder of wearable devices brand Pavlok, hired a woman named Kara, for… [+1930 chars]"
// },
// {
//     "source": {
//         "id": null,
//         "name": "Moneycontrol"
//     },
//     "author": null,
//     "title": "Rivian rockets past General Motors to become second most valuable carmaker - Moneycontrol.com",
//     "description": "The California company’s market valuation exceeded Ford’s in its first day a public company Wednesday. Its shares rose 10% at the opening bell Thursday pushing its valuation over $90 billion.",
//     "url": "https://www.moneycontrol.com/news/automobile/rivian-rockets-past-general-motors-to-become-second-most-valuable-carmaker-7709831.html",
//     "urlToImage": "https://images.moneycontrol.com/static-mcnews/2021/11/Rivian-R1T-1-770x433.jpg",
//     "publishedAt": "2021-11-11T16:41:14Z",
//     "content": "Rivian Automotive, a company that has delivered about 150 electric pickup trucks mostly to employees, has surpassed General Motors to become the nations second most valuable automaker.\r\nThe Californi… [+1560 chars]"
// },
// {
//     "source": {
//         "id": null,
//         "name": "Moneycontrol"
//     },
//     "author": null,
//     "title": "Indiabulls Housing Finance Q2 net profit down 11% to Rs 286 crore - Moneycontrol.com",
//     "description": "The lender's profit after tax stood at Rs 323 crore in the same quarter of the previous fiscal.",
//     "url": "https://www.moneycontrol.com/news/business/earnings/indiabulls-housing-finance-q2-net-profit-down-11-to-rs-286-crore-7709791.html",
//     "urlToImage": "https://images.moneycontrol.com/static-mcnews/2019/10/Indiabulls_housing_finance-770x435.jpg",
//     "publishedAt": "2021-11-11T16:31:19Z",
//     "content": "Mortgage financier Indiabulls Housing Finance on Thursday reported an 11 per cent dip in its net profit at Rs 286 crore in the quarter ended September due to a decline in its loan book. The lender's … [+2305 chars]"
// },
// {
//     "source": {
//         "id": null,
//         "name": "Livemint"
//     },
//     "author": "Harsha Jethmalani",
//     "title": "Pidilite sails past a tough Q2 as demand revives - Mint",
//     "description": "Going forward, the Pidilite management remains cautiously optimistic on continuing robust demand conditions",
//     "url": "https://www.livemint.com/market/mark-to-market/for-pidilite-demand-outlook-to-strengthen-its-bond-with-investors-11636619909271.html",
//     "urlToImage": "https://images.livemint.com/img/2021/11/11/600x338/Painter--621x414_1636647828218.jpg",
//     "publishedAt": "2021-11-11T16:25:51Z",
//     "content": "There is some relief for investors of Pidilite Industries Ltd, which has been struggling with severe cost inflation for a while. In the September quarter, the company recorded robust sales growth. On… [+4133 chars]"
// },
// {
//     "source": {
//         "id": null,
//         "name": "Moneycontrol"
//     },
//     "author": null,
//     "title": "Gautam Adani to invest $70 billion in renewable energy, produce cheapest hydrogen - Moneycontrol",
//     "description": "Adani Green Energy Ltd (AGEL), the world's largest solar power developer, is targeting 45 gigawatts of renewable energy capacity by 2030 and will invest $20 billion to develop a 2 GW per year solar manufacturing capacity by 2022-23.",
//     "url": "https://www.moneycontrol.com/news/business/gautam-adani-to-invest-70-billion-in-renewable-energy-produce-cheapest-hydrogen-7709671.html",
//     "urlToImage": "https://images.moneycontrol.com/static-mcnews/2021/06/Gautam-Adani-770x433.jpg",
//     "publishedAt": "2021-11-11T15:52:32Z",
//     "content": "Billionaire Gautam Adani on Thursday said his logistics-to-energy conglomerate will invest $70 billion over the next decade to become the world's largest renewable energy company and produce the chea… [+5116 chars]"
// },
// {
//     "source": {
//         "id": null,
//         "name": "Bitcoin.com"
//     },
//     "author": null,
//     "title": "Indonesia's Islamic Authority Declares Cryptocurrency Haram, Forbidden for Muslims – Regulation Bitcoin News - Bitcoin News",
//     "description": "Indonesia's top Islamic body, the country’s authority on Shariah compliance, has reportedly declared cryptocurrency haram.",
//     "url": "https://news.bitcoin.com/indonesias-islamic-authority-cryptocurrency-haram-forbidden-for-muslims/",
//     "urlToImage": "https://static.news.bitcoin.com/wp-content/uploads/2021/11/indonesia.jpg",
//     "publishedAt": "2021-11-11T15:32:56Z",
//     "content": "Indonesia’s top Islamic body, the country’s authority on Shariah compliance, has reportedly declared cryptocurrency haram, forbidden for Muslims under Islamic law. The Indonesian Ulema Council explai… [+2897 chars]"
// },
// {
//     "source": {
//         "id": null,
//         "name": "TelecomTALK"
//     },
//     "author": "https://www.facebook.com/TelecomTalk/",
//     "title": "TRAI to Implement ‘New Tariff Regime' 2.0 from April 1, 2022 - TelecomTalk",
//     "description": "The Telecom Regulatory Authority of India (TRAI) has come up with the deadline to implement the New Tariff Order (NTO) 2.0 from December 1, 2021 to April 1, 2022.",
//     "url": "https://telecomtalk.info/trai-new-pricing-regime-april-2022-effect/478592/",
//     "urlToImage": "https://telecomtalk.info/wp-content/uploads/2021/11/Trai.jpg",
//     "publishedAt": "2021-11-11T15:12:41Z",
//     "content": "The Telecom Regulatory Authority of India (TRAI) has come up with the deadline to implement the New Tariff Order (NTO) 2.0 from December 1, 2021, to April 1, 2022. The decision of TRAI will provide a… [+1757 chars]"
// },
// {
//     "source": {
//         "id": "the-times-of-india",
//         "name": "The Times of India"
//     },
//     "author": "PTI",
//     "title": "Indian-origin partner at McKinsey arrested; charged with insider-trading - Economic Times",
//     "description": "Dikshit, a partner at a global management consulting firm, has been charged with  illegally trading in advance of a corporate acquisition by one of the firm's clients in September,  the Securities and Exchange Commission (SEC) said in a statement on Wednesday.",
//     "url": "https://economictimes.indiatimes.com/news/international/business/indian-origin-partner-at-mckinsey-arrested-charged-with-insider-trading/articleshow/87651710.cms",
//     "urlToImage": "https://img.etimg.com/thumb/msid-87651719,width-1070,height-580,imgsize-1296294,overlay-economictimes/photo.jpg",
//     "publishedAt": "2021-11-11T14:55:00Z",
//     "content": "Puneet Dikshit, a 40-year-old Indian-origin partner at management consulting giant, McKinsey &amp; Company, has been arrested and charged with insider-trading and making illegal profits totalling ove… [+5595 chars]"
// },
// {
//     "source": {
//         "id": null,
//         "name": "Moneycontrol"
//     },
//     "author": null,
//     "title": "SEBI notifies rules governing related-party transactions - Moneycontrol.com",
//     "description": "The regulator has tweaked the definition of 'related party' and 'related-party transactions’ (RPTs), according to a notification issued on Tuesday.",
//     "url": "https://www.moneycontrol.com/news/business/markets/sebi-notifies-rules-governing-related-party-transactions-7709551.html",
//     "urlToImage": "https://images.moneycontrol.com/static-mcnews/2021/09/SEBI_Reuters-770x433.jpg",
//     "publishedAt": "2021-11-11T14:29:08Z",
//     "content": "Markets regulator SEBI has made sweeping changes to strengthen the monitoring and enforcement of norms pertaining to related-party transactions.\r\nThe regulator has tweaked the definition of 'related … [+3478 chars]"
// }]
    

const Bussiness = (props)=>{
    const[articles,setArticles] = useState();
    const[date,setDate] = useState("");

    useEffect(()=>{
        //fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=business&apiKey=0235418f21104fc480a17de240746f70`)
        fetch(`https://saurav.tech/NewsAPI/top-headlines/category/business/${props.country}.json`)
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
    // setArticles(data);
    // if(articles){
    //     const event = new Date(articles[0].publishedAt);
    //     const options = { month: 'long', day: 'numeric',weekday:'long'};
    //     const today = event.toLocaleDateString(undefined, options);
    //     setDate(today);
    // }
    // }  
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
        <div className={classes.bussinessNews}>
            <div className={classes.bussinessNews__logo}>
                <h1>BUSSINESS <br/>NEWS</h1>
                <p>{date}</p>
            </div>
            <div className={classes.bussinessNews__content}>
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

export default Bussiness;