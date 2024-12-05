/**
 * @author Adam Long
 * @copyright 2024 - All rights reserved.
 */

//Import
import {FaFacebook} from '@radix-ui/react-icons'

export interface ContactProps {
    href : string,
    icon : object,
    title : string,
}

export const contactElements : ContactProps[] = [
    {
        href: "https://facebook.com",
        icon: FaFacebook,
        title: "Facebook"
    },
    {
        href: "https://linkedin.com",
        icon: FaLinkedin,
        title: "LinkedIn"
    },
    {
        href: "https://github.com",
        icon: FaGithub,
        title: "GitHub"
    },
    {
        href: "https://twitter.com",
        icon: FaTwitter,
        title: "Twitter"
    },
    {
        href: "https://instagram.com",
        icon: FaInstagram,
        title: "Instagram"
    },
    {
        href: "mailto:someone@example.com",
        icon: FaEnvelope,
        title: "Email"
    },
];