import React from 'react';

import ItemsList from '../data/ItemsList';


const ItemsData = () =>{
    
    const COMPANY = [
        {
        id:'u1',
        name: 'Facebook',
        image: 'https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        price: '$2500 USD',
        discount: '+$250 USD (2.33%)'
        },
        {
        id:'u2',
        name: 'Google',
        image: 'https://images.unsplash.com/photo-1594663653925-365bcbf7ef86?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
        price: '$2500 USD',
        discount: '+$250 USD (2.33%)'
        },
        {
        id:'u3',
        name: 'Apple',
        image: 'https://images.unsplash.com/photo-1514543250559-83867827ecce?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1011&q=80',
        price: '$2500 USD',
        discount: '-$250 USD (2.33%)'
        },
        {
        id:'u4',
        name: 'Amazon',
        image: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        price: '$2500 USD',
        discount: '+$250 USD (2.33%)'
        },
        {
        id:'u5',
        name: 'Microsoft',
        image: 'https://images.unsplash.com/photo-1594236136129-76e3615646b3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=968&q=80',
        price: '$2500 USD',
        discount: '+$250 USD (2.33%)'
        }
];

    return <ItemsList items = {COMPANY} />
};

export default ItemsData;