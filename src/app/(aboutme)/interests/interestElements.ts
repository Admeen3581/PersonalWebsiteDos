/**
 * @author Adam Long
 * @copyright 2024 - All rights reserved.
 */

export interface InterestProps {
    variant : number,
    title : string,
    desc : string,
    imgRef : string,
    imgRef2? : string,
    imgRef3? : string,
    imgAlt? : string,
}

export const interestElements: InterestProps[] = [
    {
        variant: 1,
        title: "Drone Photography",
        desc: "Capturing stunning aerial shots offers a new perspective on the world. Drone photography is a mix of technical skill and artistic vision. It’s an amazing way to explore landscapes and tell visual stories.",
        imgRef: "https://i.imgur.com/UFY6xy9.jpg",
        imgAlt: "Drone capturing an aerial view of mountains",
    },
    {
        variant: 2,
        title: "Waterskiing",
        desc: "Gliding over the water at high speeds is both thrilling and meditative. Waterskiing allows me to connect with nature while challenging my athleticism and coordination. It's a sport of balance, endurance, and pure fun.",
        imgRef : "https://i.imgur.com/ihmSxWm.jpg",
        imgRef2 : 'https://i.imgur.com/J25TwkG.jpg',
        imgRef3 : 'https://i.imgur.com/JpPTxVT.jpg',
        imgAlt: "Adam waterskiing",
    },
    {
        variant: 3,
        title: "Leading/Leadership",
        desc: "Guiding a team towards a common goal is one of my most fulfilling activities. Leadership is about listening, adapting, and inspiring. It’s where I get to blend strategy with empathy.",
        imgRef: "https://i.imgur.com/sl7fGJA.jpg",
        imgAlt: "Leader speaking in front of a group",
    },
    {
        variant: 6,
        title: "Software Development",
        desc: "Turning ideas into reality through software development is deeply fulfilling. Designing systems that solve real-world problems or improve efficiency fuels my passion for technology. Every project is a learning experience.",
        imgRef: "https://i.imgur.com/bGcYVev.jpg",
        imgAlt: "Software diagrams and a developer working",
    },
    {
        variant: 1,
        title: "Motorsport",
        desc: "The thrill of speed and precision driving in motorsport fascinates me. Whether behind the wheel or watching from the sidelines, the combination of skill, engineering, and adrenaline is unmatched. Motorsport fuels my competitive spirit.",
        imgRef: "https://i.imgur.com/vZBu1wm.jpg",
        imgAlt: "Race car speeding on a track",
    },
    {
        variant: 2,
        title: "Traveling America",
        desc: "Exploring the diverse landscapes and cultures of America broadens my perspective. Every trip brings new adventures, whether it’s hiking a mountain or discovering a hidden gem in a small town. Traveling fuels my curiosity.",
        imgRef: "https://i.imgur.com/BF3nA33.jpg",
        imgRef2: "https://i.imgur.com/Dc1eSBM.jpg",
        imgRef3: "https://i.imgur.com/ZlScSKw.jpg",
        imgAlt: "Scenic road trip through the American countryside",
    },
    {
        variant: 4,
        title: "Mountain Biking",
        desc: "Conquering trails and rugged terrains on a bike is an exhilarating escape. Mountain biking combines physical endurance with technical skill. It’s my way of staying active and exploring nature.",
        imgRef: "https://i.imgur.com/QxTHnv2.jpg",
        imgAlt: "Mountain biker on a forest trail",
    },
    {
        variant: 5,
        title: "Woodworking",
        desc: "Crafting furniture and decorative items from raw wood is a satisfying process. Woodworking allows me to combine creativity with precision, resulting in tangible, lasting creations. It's both relaxing and rewarding.",
        imgRef: "https://i.imgur.com/iOeCZHf.jpg",
        imgAlt: "Woodworking tools and a half-finished project",
    },
    {
        variant: 2,
        title: "Technical Theatre",
        desc: "Building sets, managing lighting, and coordinating backstage magic bring stories to life. My experience in technical theatre taught me the value of teamwork and precision. Every production is a unique problem-solving adventure.",
        imgRef: "https://i.imgur.com/vBcv4KW.jpg",
        imgRef2: "https://i.imgur.com/iKXzQpF.jpg",
        imgRef3: "https://i.imgur.com/uRt1cZ3.jpg",
        imgAlt: "Stage with theatrical lighting and set pieces",
    },
];
