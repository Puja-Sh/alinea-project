import React from 'react';

//import ItemsData from '../data/ItemsData';
import Items from '../components/element/Items';

import './ItemsList.css';

const ItemsList = props => {
   
    return (
        <ul className="brand-list">
            {props.items.map(brand => <Items
                    key={brand.id}
                    name={brand.name}
                    image={brand.image}
                    price={brand.price}
                    discount={brand.discount}
                />
            )}
        </ul>
    );
};

export default ItemsList;