import { footerHeader, footerLinkTypes } from "../types/footer.types";

export const footerHeaderKeys = {
    shop: 'Shop',
    corporate: 'Corporate Info',
    help: 'Help'
} as const

export const footerLinks: Array<footerLinkTypes> = [
    { label: 'Women', href: '/womens' },
    { label: 'Men', href: '/mens' },
    { label: 'Student Discount', href: '/' },
    { label: 'Magazine', href: '/' },
    { label: 'Career at P&M', href: '/' },
    { label: 'About P&M group', href: '/' },
    { label: 'Sustainability P&M Group', href: '/eco' },
    { label: 'Press', href: '/' },
    { label: 'Investor Relations', href: '/' },
    { label: 'Corporate Governance', href: '/' },
    { label: 'Customer Service', href: '/' },
    { label: 'My Account', href: '/' },
    { label: 'Find a Store', href: '/' },
    { label: 'Legal & Privacy', href: '/' },
    { label: 'Contact', href: '/' },
    { label: 'Gift Card Terms and Conditions', href: '/' },
    { label: 'CA Supply Chains Act', href: '/' },
    { label: 'Do Not Sell Or Share My Personal Data', href: '/' },
    { label: 'Our Commitment to Accessibility', href: '/' },
    { label: 'Report a scam', href: '/' },
    { label: 'Cookie Notice', href: '/' },
    { label: 'Cookie Settings', href: '/' }
] as const

export const footerHeaders: Array<footerHeader> = [
    { title: footerHeaderKeys.shop },
    { title: footerHeaderKeys.corporate },
    { title: footerHeaderKeys.help }
] as const




