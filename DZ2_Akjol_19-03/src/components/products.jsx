import React from 'react';
import Product from "./product.jsx";

const Products = () => {
    const products = [
        { clas:'color1', name:"IPHONE14",price:'$1050.00', title: '',url:'https://telefon.kg/image/cache/catalog/new/Phones/Apple/iPhone%2014/Plus/1-500x500.jpg'},
        { clas:'color2', name:"IPHONE13pro",price:'$990.00',url:'https://login.kg/image/cache/catalog/new/Phones/Apple/IPhone%2013/Pro/4-500x500.jpg'},
        { clas:'color3', name:"IPHONE X",price:'$294.00',url:'https://cdn-icons-png.flaticon.com/512/644/644458.png'}
    ]
    return (
        <div>
            {products.map(item=><Product key={item.name} product={item}/>)}
        </div>
    );
};

export default Products;