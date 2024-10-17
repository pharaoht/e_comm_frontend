const htmlSemanticFormValues = {
    default: {
        type: 'radio',
        id: 'default',
        name: 'sort',
        title: 'default',
        htmlFor: 'default',
        text: 'Default',
        value: ''
    },
    newest: {
        type: 'radio',
        id: 'newest',
        name: 'sort',
        title: 'Newest',
        htmlFor:'newest',
        text: 'Newest',
        value: 'new'
    },
    lowPrice: {
        type: 'radio',
        id: 'low_price',
        name: 'sort',
        title: 'Lowest Price',
        htmlFor:'low_price',
        text:'Lowest Price',
        value: 'plow'
    },
    highPrice: {
        type: 'radio',
        id: 'high_price',
        name: 'sort',
        text: 'Highest Price',
        title: 'Highest Price',
        htmlFor:'high_price',
        value: 'phigh'
    },
}

export const h = htmlSemanticFormValues;

