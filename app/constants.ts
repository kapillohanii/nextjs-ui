import {
    State,
    Variant
} from "./types";

export const rows: State[] = [{
    id: 'a',
    index: 1,
    filters: [{
        label: 'onsale',
        isActive: false
    }, {
        label: 'sold',
        isActive: false
    }, {
        label: 'bestseller',
        isActive: true
    }],
    variants: [{
        imageUrl: 'https://m.media-amazon.com/images/I/41alKvN9GwL._AC_UF1000,1000_QL80_.jpg',
        imageCaption: 'No Longer Human'
    }]
},
{
    id: 'b',
    index: 2,
    filters: [{
        label: 'onsale',
        isActive: false
    }, {
        label: 'sold',
        isActive: true
    }, {
        label: 'bestseller',
        isActive: true
    }],
    variants: [{
        imageUrl: 'https://images-eu.ssl-images-amazon.com/images/I/71PGrWUKyeL._AC_UL210_SR210,210_.jpg',
        imageCaption: 'Macus Aurelius - Meditaions'
    }]
},
{
    id: 'c',
    index: 3,
    filters: [{
        label: 'onsale',
        isActive: true
    }, {
        label: 'sold',
        isActive: true
    }, {
        label: 'bestseller',
        isActive: false
    }],
    variants: [{
        imageUrl: 'https://eastindiapublishing.com/cdn/shop/files/CrimeandPunishment-01.png?v=1706581156',
        imageCaption: 'Crime and Punishment'
    }]
},
{
    id: 'd',
    index: 4,
    filters: [{
        label: 'onsale',
        isActive: true
    }, {
        label: 'sold',
        isActive: false
    }, {
        label: 'bestseller',
        isActive: false
    }],
    variants: [{
        imageUrl: 'https://m.media-amazon.com/images/I/81tdbrewW0L._AC_UF1000,1000_QL80_.jpg',
        imageCaption: 'Kafka On The Shore'
    }]
},
{
    id: 'e',
    index: 5,
    filters: [{
        label: 'onsale',
        isActive: false
    }, {
        label: 'sold',
        isActive: true
    }, {
        label: 'bestseller',
        isActive: false
    }],
    variants: [{
        imageUrl: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781626860605/the-art-of-war-9781626860605_lg.jpg',
        imageCaption: 'Sun Tzu - Art of War'
    }]
},
];



export const designs: Variant[] = [{
    imageUrl: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781626860605/the-art-of-war-9781626860605_lg.jpg',
    imageCaption: 'Sun Tzu - Art of War'
},
{
    imageUrl: 'https://eastindiapublishing.com/cdn/shop/files/CrimeandPunishment-01.png?v=1706581156',
    imageCaption: 'Crime and Punishment'
},
{
    imageUrl: 'https://m.media-amazon.com/images/I/81tdbrewW0L._AC_UF1000,1000_QL80_.jpg',
    imageCaption: 'Kafka On The Shore'
},
{
    imageUrl: 'https://m.media-amazon.com/images/I/41alKvN9GwL._AC_UF1000,1000_QL80_.jpg',
    imageCaption: 'No Longer Human'
},
{
    imageUrl: 'https://images-eu.ssl-images-amazon.com/images/I/71PGrWUKyeL._AC_UL210_SR210,210_.jpg',
    imageCaption: 'Macus Aurelius - Meditaions',
},
{
    imageUrl: 'https://m.media-amazon.com/images/I/416JeZoF8tL._SY445_SX342_.jpg',
    imageCaption: 'Paulo Coelho - The Alchemist',
},
{
    imageUrl: 'https://m.media-amazon.com/images/I/51Z9p5AecCL._SY445_SX342_.jpg',
    imageCaption: 'To Kill a Mockingbird',
},
{
    imageUrl: 'https://m.media-amazon.com/images/I/7108sdEUEGL._SY522_.jpg',
    imageCaption: 'The Catcher In The Rye',
},
{
    imageUrl: 'https://m.media-amazon.com/images/I/71f6DRbcrsL._SY522_.jpg',
    imageCaption: 'The Color Purple',
},
{
    imageUrl: 'https://m.media-amazon.com/images/I/41PFYq5BJbL._SY445_SX342_.jpg',
    imageCaption: 'Morgan Housel - Pyschology of Money',
},

]