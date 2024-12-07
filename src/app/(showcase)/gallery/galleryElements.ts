/**
 * @author Adam Long
 * @copyright 2024 - All rights reserved.
 */

//Import


interface GalleryProps {
    title : string,
    desc : string,
    imgRef : string,
    imgAlt : string,
}

export const galleryElements : GalleryProps[] = [
    {
        title: "Senior Photo Shoot",
        desc: "Took my senior pictures in high school. First official photo shoot I've done.",
        imgRef: "https://i.imgur.com/QU0QU9u.jpg",
        imgAlt: "senior picture",
    },
    {
        title: "Motorsport Garage",
        desc: "Pictures of opposition teams in GT3.",
        imgRef: "https://i.imgur.com/e8KBh2g.jpg",
        imgAlt: "Ferrari & Audi GT3 cars",
    },
    {
        title: "Graduation",
        desc: "Me and the boys stunting graduation.",
        imgRef: "https://i.imgur.com/zzPE2ge.jpg",
        imgAlt: "Graduation photo with me and good friends",
    },
    {
        title: "Independence Pass",
        desc: "The highest elevation point in the continental United States.",
        imgRef: "https://i.imgur.com/Q8XWI3Z.jpg",
        imgAlt: "independence pass - family picture.",
    },
    {
        title: "Baby picture",
        desc: "One of my first baby pictures.",
        imgRef: "https://i.imgur.com/pQotdfn.png",
        imgAlt: "baby picture",
    },
    {
        title: "Waterskiing - 2022",
        desc: "One of my first times waterskiing with the team at TXST.",
        imgRef: "https://i.imgur.com/uwriWHK.jpg",
        imgAlt: "TXST Waterski practice - 2022",
    },
];