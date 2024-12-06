/**
 * @author Adam Long
 * @copyright 2024 - All rights reserved.
 */


export interface ContactProps {
    href : string,
    icon : string,
    title : string,
}

export const contactElements : ContactProps[] = [
    {
        href: "mailto:adam.jacob.long@gmail.com",
        icon: '/icons/envelope-plus.png',
        title: "Personal Email adam.jacob.long @gmail.com"
    },
    {
        href: "mailto:admeen.long@txstate.edu",
        icon: '/icons/envelope-plus.png',
        title: "School Email admeen.long @txstate.edu"
    },
    {
        href: "https://www.linkedin.com/in/adamlong18/",
        icon: '/icons/linkedin.png',
        title: "LinkedIn @ AdamLong"
    },
    {
        href: "tel:+16149651784",
        icon: '/icons/phone-call.png',
        title: "Mobile Number (614)-965-1784"
    },
    {
        href: "https://github.com/Admeen3581/",
        icon: '/icons/github.png',
        title: "GitHub @ Admeen3581"
    },
    {
        href: "venmo://paycharge?txn=pay&recipients=USERNAME&amount=10&note=Thanks!",
        icon: '/icons/venmo.png',
        title: "Venmo @ Admeen3581"
    },
];