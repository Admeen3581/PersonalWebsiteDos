/**
 * @author Adam Long
 * @copyright 2024 - All rights reserved
 */

//Imports
import {NavBarProps} from "@/lib/props";

export const resourceElements: NavBarProps[] = [
    {
        title: 'Downloadables',
        href: '/downloadables',
        desc: 'Downloadable assets for clients and other purposes.',
    },
    {
        title: 'This Repo',
        href: 'https://github.com/Admeen3581/PersonalWebsiteDos',
        desc: 'GitHub link to the source code for this website.',
    },
];

export const contactElements: NavBarProps[] = [
    {
        title: 'Off the clock',
        href: '/casual',
        desc: 'Social platform links for friends & family members.',
    },
    {
        title: 'On the clock',
        href: '/professional',
        desc: 'Contact information for co-workers & business partners.',
    },
];

export const showcaseElements: NavBarProps[] = [
    {
        title: 'Work Experience',
        href: '/experience',
        desc: 'An overview of my past roles and the professional experience I\'ve gained.',
    },
    {
        title: 'Education',
        href: '/education',
        desc: 'Details of my academic background and my contributions to TXST',
    },
    {
        title: 'Gallery',
        href: '/gallery',
        desc: 'A collection of my projects, travels, and milestones that define my journey.',
    },
    {
        title: 'Blog',
        href: '/blogs',
        desc: 'Sharing insights, ideas, and experiences through written reflections.',
    },
];

export const aboutMeElements: NavBarProps[] = [
    {
        title: 'Philosophies',
        href: '/philosophies',
        desc: 'A summary of guiding principles that shape my approach to life.',
    },
    {
        title: 'Interests',
        href: '/interests',
        desc: 'The activities that fuel my curiosity and passion.',
    },
];