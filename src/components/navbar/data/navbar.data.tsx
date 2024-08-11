import { linkTypes } from '../types/navbar.types';
import { ShoppingCart, Person, Favorite, Menu } from '@mui/icons-material';

export const linkData: Array<linkTypes> = [
    {
        href: '/eco',
        label: 'Sustainability',
        icon: <Menu fontSize='medium'/>,
        specialCondition: true
    },
    {
        href: '/newsletter',
        label: 'Newsletter',
        icon: null,
        specialCondition: false,
    }
];

export const linkDataTwo: Array<linkTypes> = [
    {
        href: '/sign-up',
        label: 'Sign up',
        icon: <Person fontSize='medium'/>,
        specialCondition: false,
    },
    {
        href: '/favorites',
        label: 'Favorites',
        icon: <Favorite fontSize='small'/>,
        specialCondition: false,
    },
    {
        href: '/cart',
        label: 'Cart (0)',
        icon: <ShoppingCart fontSize='small'/>,
        specialCondition: false,
    }
];
