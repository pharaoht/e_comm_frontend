import { linkTypes } from '../types/navbar.types';
import women from '@/images/women.jpg';
import man from '@/images/man.jpg';
import kid from '@/images/kid.jpg';
import things from '@/images/things.jpg';
import { ShoppingCart, Person, Favorite, ArrowForward } from '@mui/icons-material';

export const linkData: Array<linkTypes> = [
    {
        href: '/eco',
        label: 'Sustainability',
        icon: null,
        image: null,
    },
    {
        href: '/newsletter',
        label: 'Newsletter',
        icon: null,
        image: null,
    }
] as const;

export const linkDataTwo: Array<linkTypes> = [
    {
        href: '/sign-up',
        label: 'Sign up',
        icon: <Person fontSize='medium'/>,
        image: null,
    },
    {
        href: '/favorites',
        label: 'Favorites',
        icon: <Favorite fontSize='small'/>,
        image: null,
    },
    {
        href: '/cart',
        label: 'Cart',
        icon: <ShoppingCart fontSize='small'/>,
        image: null,
    }
] as const;

export const mobileLinks: Array<linkTypes> = [
    {
        href: '/womens',
        label: 'Women',
        icon: <ArrowForward fontSize='medium' />,
        image: women
    },
    {
        href: '/mens',
        label: 'Men',
        icon: <ArrowForward fontSize='medium' />,
        image: man
    },
    {
        href: '/kids',
        label: 'Kids',
        icon: <ArrowForward fontSize='medium' />,
        image: kid
    },
    {
        href: '/accessories',
        label: 'Accessories',
        icon: <ArrowForward fontSize='medium' />,
        image: things
    },
] as const;
