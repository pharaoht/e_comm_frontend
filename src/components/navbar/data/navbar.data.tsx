import { linkTypes } from '../types/navbar.types';
import { ShoppingCart, Person, Favorite } from '@mui/icons-material';

export const linkData: Array<linkTypes> = [
    {
        href: '/eco',
        label: 'Sustainability',
        icon: null
    },
    {
        href: '/newsletter',
        label: 'Newsletter',
        icon: null
    }
];

export const linkDataTwo: Array<linkTypes> = [
    {
        href: '/sign-up',
        label: 'Sign up',
        icon: <Person fontSize='medium'/>
    },
    {
        href: '/favorites',
        label: 'Favorites',
        icon: <Favorite fontSize='small'/>
    },
    {
        href: '/cart',
        label: 'Cart (0)',
        icon: <ShoppingCart fontSize='small'/>
    }
];
