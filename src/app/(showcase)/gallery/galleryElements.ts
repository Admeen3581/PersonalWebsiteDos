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
        title: "Sunset Over the Lake",
        desc: "A tranquil moment capturing the vibrant hues of a sunset reflecting off the calm water.",
        imgRef: "/pictures/templateImage.jpg",
        imgAlt: "Sunset scene over a serene lake with vibrant colors in the sky.",
    },
    {
        title: "Mountains in the Mist",
        desc: "An awe-inspiring view of misty mountains rising through the clouds, showcasing nature's majesty.",
        imgRef: "/pictures/templateImage.jpg",
        imgAlt: "A mist-covered mountain range viewed from a high vantage point.",
    },
    {
        title: "City Lights at Night",
        desc: "The bustling cityscape glowing with lights under a starry night sky.",
        imgRef: "/pictures/templateImage.jpg",
        imgAlt: "A city at night with buildings illuminated and a clear starry sky.",
    },
    {
        title: "Adventurous Mountain Biking",
        desc: "A thrilling ride through rugged trails surrounded by lush greenery and rugged terrain.",
        imgRef: "/pictures/templateImage.jpg",
        imgAlt: "A mountain biking trail in a forested area with rocks and trees.",
    },
    {
        title: "Elegant Woodwork Design",
        desc: "A close-up of intricate woodworking craftsmanship showcasing skill and creativity.",
        imgRef: "/pictures/templateImage.jpg",
        imgAlt: "A detailed view of an ornate piece of woodwork.",
    },
    {
        title: "Drone's Eye View",
        desc: "An aerial perspective revealing breathtaking patterns and landscapes from above.",
        imgRef: "/pictures/templateImage.jpg",
        imgAlt: "An aerial view of a stunning natural or urban landscape taken by a drone.",
    },
];