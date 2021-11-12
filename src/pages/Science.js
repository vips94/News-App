import React,{useEffect, useState} from 'react';
import NewsCard from '../components/NewsCard';
import classes from './Science.module.scss';

// const data = [
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
//             "name": "CNET"
//         },
//         "author": "Eric Mack",
//         "title": "Astronomers discover a hidden black hole by spotting jiggles in a nearby star - CNET",
//         "description": "For the first time, a new method has been used to discover a small black hole beyond the Milky Way.",
//         "url": "https://www.cnet.com/news/astronomers-discover-a-hidden-black-hole-by-spotting-jiggles-in-a-nearby-star/",
//         "urlToImage": "https://www.cnet.com/a/img/TUhD2O-y2zFwGxHJi-GkkfxXZBM=/1200x630/2021/11/11/a665c8ee-5155-48e0-8e34-158349bec012/eso2116a.jpg",
//         "publishedAt": "2021-11-12T01:58:52Z",
//         "content": "This artist's impression shows a compact black hole 11 times as massive as the sun and the five-solar-mass star orbiting it. The distortion of the star's shape is due to the strong gravitational forc… [+2740 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "YouTube"
//         },
//         "author": null,
//         "title": "Retired GP discovers new species of dinosaur in the UK | ABC News - ABC News (Australia)",
//         "description": "Retired doctor Jeremy Lockwood has discovered a new species of dinosaur that roamed the Isle of Wight in Southern England 125 million years ago.Subscribe: ht...",
//         "url": "https://www.youtube.com/watch?v=BWLxGz3WbQc",
//         "urlToImage": "https://i.ytimg.com/vi/BWLxGz3WbQc/hqdefault.jpg",
//         "publishedAt": "2021-11-12T00:56:10Z",
//         "content": null
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
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "Bollyinside.com"
//         },
//         "author": null,
//         "title": "Would you eat tomato sauce from Mars? - BollyInside",
//         "description": "PHILADELPHIA – Heinz partnered up with the Aldrin Space Institute at Florida Institute of Technology to see how tomatoes grow in Martian soil. The soil is",
//         "url": "https://www.bollyinside.com/news/would-you-eat-tomato-sauce-from-mars",
//         "urlToImage": "https://www.bollyinside.com/wp-content/uploads/2021/10/Amazon-wants-to-turn-your-cell-phone-into-a-satellite.png",
//         "publishedAt": "2021-11-11T21:40:47Z",
//         "content": "PHILADELPHIA Heinz partnered up with the Aldrin Space Institute at Florida Institute of Technology to see how tomatoes grow in Martian soil. The soil is not actually from Mars, but we understand what… [+1803 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "The Shillong Times"
//         },
//         "author": "Agencies",
//         "title": "Global warming 'unprecedented' since last ice age: Study - The Shillong Times",
//         "description": "New York, Nov 11 : The current global temperatures on Earth are unprecedented in the last 24,000 years, since the last ice age, according to a new study.In the study, a team from University of Arizona created maps of global temperature changes for ev",
//         "url": "https://theshillongtimes.com/2021/11/12/global-warming-unprecedented-since-last-ice-age-study/",
//         "urlToImage": "https://theshillongtimes.com/wp-content/uploads/2021/11/7d6acf662bd97af2de64a4b8643f2c0c.jpg",
//         "publishedAt": "2021-11-11T20:30:30Z",
//         "content": "New York, Nov 11 : The current global temperatures on Earth are unprecedented in the last 24,000 years, since the last ice age, according to a new study.\r\nIn the study, a team from University of Ariz… [+2020 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "YouTube"
//         },
//         "author": null,
//         "title": "Fireball meteor lights up NC sky during SpaceX launch (Compilation) - CBS 17",
//         "description": "Fireball meteor lights up NC sky during SpaceX launch (Compilation)",
//         "url": "https://www.youtube.com/watch?v=N_e155paUTM",
//         "urlToImage": "https://i.ytimg.com/vi/N_e155paUTM/maxresdefault.jpg",
//         "publishedAt": "2021-11-11T20:16:52Z",
//         "content": null
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "WION"
//         },
//         "author": "WION Web Team",
//         "title": "Oxygen on Moon`s surface may keep billions alive for 100,000 years - WION",
//         "description": "If a new study could be believed, Moons surface has enough oxygen to keep billions of people alive for around 100,000 years.",
//         "url": "https://www.wionews.com/world/oxygen-on-moons-surface-may-keep-billions-alive-for-100000-years-428560",
//         "urlToImage": "https://cdn.wionews.com/sites/default/files/styles/story_page/public/2021/10/08/215058-untitled-design.png",
//         "publishedAt": "2021-11-11T17:20:14Z",
//         "content": "If a new study could be believed, Moon's surface has enough oxygen to keep billions of people alive for around 100,000 years.\r\nMoon's regolith is made up of approximately 45 per cent oxygen. The rego… [+1176 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "ANI News"
//         },
//         "author": null,
//         "title": "Near-earth asteroid might be lost fragment of moon: Study - ANI News",
//         "description": "Washington [US], November 11 (ANI): According to a new paper by a team of astronomers led by the University of Arizona, a near-Earth asteroid named Kamo`oalewa could be a fragment of our moon.",
//         "url": "https://www.aninews.in/news/science/space/near-earth-asteroid-might-be-lost-fragment-of-moon-study20211111215424",
//         "urlToImage": "https://aniportalimages.s3.amazonaws.com/media/details/__sized__/asteroid_sep2320211111161413-thumbnail-154x87-70.jpg",
//         "publishedAt": "2021-11-11T16:24:00Z",
//         "content": "ANI | Updated: Nov 11, 2021 21:54 IST\r\nWashington [US], November 11 (ANI): According to a new paper by a team of astronomers led by the University of Arizona, a near-Earth asteroid named Kamo`oalewa … [+3453 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "Daily Mail"
//         },
//         "author": "Jonathan Chadwick",
//         "title": "Scientists develop a biodegradable vegan GLITTER from fruit - Daily Mail",
//         "description": "The vegan glitter is made from made from cellulose nanocrystals, which can bend light in such a way to create various vivid colours, University of Cambridge scientists report.",
//         "url": "https://www.dailymail.co.uk/sciencetech/article-10191393/Scientists-develop-biodegradable-vegan-GLITTER-fruit.html",
//         "urlToImage": "https://i.dailymail.co.uk/1s/2021/11/11/15/50359979-0-image-a-31_1636644892304.jpg",
//         "publishedAt": "2021-11-11T16:18:35Z",
//         "content": "Scientists have developed an environmentally-friendly 'vegan' glitter from cellulose the main building block of cell walls in plants, fruits and vegetables.\r\nThe biodegradable glitter, developed at t… [+9125 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "AZoNano"
//         },
//         "author": null,
//         "title": "Novel Imaging Technique Takes High Resolution 3D Images of Cells - AZoNano",
//         "description": "A team of researchers at the Swiss Federal Institute of Technology has developed a high-performance Scanning Ion Conductance Microscope (SICM) using the latest advances in nanopositioning, nanopore fabrication, microelectronics and controls engineering.",
//         "url": "https://www.azonano.com/news.aspx?newsID=38224",
//         "urlToImage": "https://d1otjdv2bf0507.cloudfront.net/images/news/ImageForNews_38224_16366468127979942.jpg",
//         "publishedAt": "2021-11-11T16:08:00Z",
//         "content": "A team of researchers at the Swiss Federal Institute of Technology has developed a high-performance Scanning Ion Conductance Microscope (SICM) using the latest advances in nanopositioning, nanopore f… [+5608 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "Sambadenglish.com"
//         },
//         "author": "Sambad English Bureau",
//         "title": "NASA's Parker Solar Probe faces space dust, debris on way to Sun - Sambad English",
//         "description": "New York: NASA's ambitious Parker Solar Probe spacecraft, studying the Sun at close proximity, is being bombarded with space dust and debris on its way to the Sun, according to a study.Scientists at the Laboratory for Atmospheric and Space Physics (L",
//         "url": "https://sambadenglish.com/nasas-parker-solar-probe-faces-space-dust-debris-on-way-to-sun/",
//         "urlToImage": "https://sambadenglish.com/wp-content/uploads/2021/11/Parker-Solar-Probe.jpg",
//         "publishedAt": "2021-11-11T15:54:31Z",
//         "content": "New York: NASA’s ambitious Parker Solar Probe spacecraft, studying the Sun at close proximity, is being bombarded with space dust and debris on its way to the Sun, according to a study.\r\nScientists a… [+2326 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "Republic World"
//         },
//         "author": "Harsh Vardhan",
//         "title": "NASA shares stunning image of 'Snowman Nebula' taken by Hubble Telescope; See pic - Republic World",
//         "description": "NASA has shared another Hubble image of a glittering nebula that resembles a 'snowman' hovering in space, 6,000 light-years away from Earth.",
//         "url": "https://www.republicworld.com/technology-news/science/nasa-shares-stunning-image-of-snowman-nebula-taken-by-hubble-telescope-see-pic.html",
//         "urlToImage": "https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/5b9jpdjznma13pr2_1636637243.jpeg",
//         "publishedAt": "2021-11-11T14:23:00Z",
//         "content": "Despite the Hubble telescope being inactive for the past few days, NASA has kept its legacy alive by sharing marvellous images snapped from various corners of the universe. Currently, on a Nebula Nov… [+1978 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "Eurasiantimes.com"
//         },
//         "author": "Aashish Dangwal",
//         "title": "Satellite Killer? US Raises Alarm Over Mysterious Object Orbiting Near China’s New Shijian-21 Spacecraft - EurAsian Times",
//         "description": "China achieved a milestone in space technology last month when it launched the Shijian-21 satellite. Beijing claims this satellite is tasked with verifying space debris mitigation technology. ‘World’s First’ Helicopter With Ejection Seat – Russia’s Deadly Ka-…",
//         "url": "https://eurasiantimes.com/satellite-killer-us-raises-alarm-over-mysterious-object-orbiting-near-chinas-new-shijian-21-spacecraft/",
//         "urlToImage": "https://eurasiantimes.com/wp-content/uploads/2021/09/space-weapon-shutterstock-e1631692955664.jpg",
//         "publishedAt": "2021-11-11T13:41:13Z",
//         "content": "China achieved a milestone in space technology last month when it launched the Shijian-21 satellite. Beijing claims this satellite is tasked with verifying space debris mitigation technology.\r\nWorlds… [+5885 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "Daily Mail"
//         },
//         "author": "Ian Randall",
//         "title": "Fossils: Giant ammonites lived in England and Mexico 80 million years ago - Daily Mail",
//         "description": "The team found the ammonites P. seppenradensis and its smaller cousin, P. leptophylla, on both sides of the Atlantic, with widths ranging from 0.3-4.8 feet (0.1-1.48 m).",
//         "url": "https://www.dailymail.co.uk/sciencetech/article-10190493/Fossils-Giant-ammonites-lived-England-Mexico-80-million-years-ago.html",
//         "urlToImage": "https://i.dailymail.co.uk/1s/2021/11/11/12/50352427-0-image-a-32_1636634736014.jpg",
//         "publishedAt": "2021-11-11T13:28:02Z",
//         "content": "Giant, human-sized ammonites extinct relatives of cuttlefish and squid with coiled shells and tentacles lived on both sides of the Atlantic 80 million years ago.\r\nThis is the conclusion of experts le… [+9846 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "Republic World"
//         },
//         "author": "Harsh Vardhan",
//         "title": "NASA releases incredible video on Venus-bound DAVINCI mission; Watch - Republic World",
//         "description": "NASA has released a trailer of the 2029 mission DAVINCI, providing insight on how the probes plan to solve the mysteries surrounding Venus.",
//         "url": "https://www.republicworld.com/technology-news/science/nasa-releases-incredible-video-on-venus-bound-davinci-mission-watch.html",
//         "urlToImage": "https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/rsn5rajrel4fb6sk_1636634418.jpeg",
//         "publishedAt": "2021-11-11T13:25:00Z",
//         "content": "The time is approaching when NASA will send a probe to map the planet with the most harrowing conditions in the entire solar system, our next-door neighbour Venus. Aiming for launch at this decade's … [+2149 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "International Business Times, India Edition"
//         },
//         "author": "Anju Ashok",
//         "title": "Law of Irreversibility: Teeth Discovered in Frog May Reverse it - IBTimes India",
//         "description": "These discoveries give tantalizing evidence that Dollo's Law of Irreversibility, a century-old evolutionary theory, is flawed.",
//         "url": "https://www.ibtimes.co.in/law-irreversibility-teeth-discovered-frog-may-reverse-it-842614",
//         "urlToImage": "https://data1.ibtimes.co.in/en/full/767136/frog.png",
//         "publishedAt": "2021-11-11T13:13:14Z",
//         "content": "Speculation surrounding black tigers is no longer a secret, explains study\r\nResearch published in the Journal Evolution revealed an astonishing finding in frogs. Around 230 million years ago, the pro… [+2716 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "LatestLY"
//         },
//         "author": "Team Latestly",
//         "title": "#NASA's Ambitious Parker Solar Probe Spacecraft, Studying the Sun at Close ... - Latest Tweet by IANS India - LatestLY",
//         "description": "The latest Tweet by IANS India states, '#NASA's ambitious Parker Solar Probe spacecraft, studying the Sun at close proximity, is being bombarded with space dust and debris on its way to the Sun, according to a study.'",
//         "url": "https://www.latestly.com/socially/india/news/nasas-ambitious-parker-solar-probe-spacecraft-studying-the-sun-at-close-latest-tweet-by-ians-india-3044910.html",
//         "urlToImage": "https://st1.latestly.com/wp-content/uploads/2021/06/TW-IANS-India-3-784x441.png",
//         "publishedAt": "2021-11-11T12:40:18Z",
//         "content": "#NASA's (@NASA) ambitious Parker Solar Probe spacecraft, studying the Sun at close proximity, is being bombarded with space dust and debris on its way to the Sun, according to a study. pic.twitter.co… [+567 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "Thecherawchronicle.com"
//         },
//         "author": "Gaylord Greenwood",
//         "title": "NASA warns: an asteroid the same size as the Eiffel Tower is coming (... - Cheraw Chronicle",
//         "description": "NASA said that an asteroid the size of the Eiffel Tower is currently heading towards...",
//         "url": "https://www.thecherawchronicle.com/nasa-warns-an-asteroid-the-same-size-as-the-eiffel-tower-is-coming/",
//         "urlToImage": null,
//         "publishedAt": "2021-11-11T12:36:14Z",
//         "content": "NASA said that an asteroid the size of the Eiffel Tower is currently heading towards Earth. However, do not panic: according to the US Space Agency, the rock will lose our planet by 3.8 million km.Th… [+1020 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "Tech Xplore"
//         },
//         "author": "Science X staff",
//         "title": "Algorithms mimic the process of biological evolution to learn efficiently - Tech Xplore",
//         "description": "Uncovering the mechanisms of learning via synaptic plasticity is a critical step towards understanding how our brains function and building truly intelligent, adaptive machines. Researchers from the University of Bern propose a new approach in which algorithm…",
//         "url": "https://techxplore.com/news/2021-11-algorithms-mimic-biological-evolution-efficiently.html",
//         "urlToImage": "https://scx2.b-cdn.net/gfx/news/2021/when-algorithms-get-cr.jpg",
//         "publishedAt": "2021-11-11T12:15:25Z",
//         "content": "Artificial evolution of synaptic plasticity rules in spiking neuronal networks. (A) Sketch of cortical microcircuits consisting of pyramidal cells (orange) and inhibitory interneurons (blue). Stimula… [+5571 chars]"
//     }
// ]

const Science = (props)=>{
    const[articles,setArticles] = useState();

    useEffect(()=>{
        fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=science&apiKey=0235418f21104fc480a17de240746f70`)
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
        <div className={classes.science}>
            <div className={classes.science__logo}>
                <h1>SCIENCE<br/>NEWS</h1>
                <p>{}</p>
            </div>
            <div className={classes.science__content}>
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

export default Science;