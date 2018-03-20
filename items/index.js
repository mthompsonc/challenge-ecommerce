import React, { Component } from 'react';
import { catalog } from './../data/mock.json';

const Items = ({name, imageURL, currency, price } ) => catalog.map((data) =>
    <div className="products">
        <img className="img" src={data.imageURL} alt= "imagen"/>
        <p className="text"> {data.name} </p>
        <p className="text"> {data.currency} {data.price} </p>
        <button className="btn" onClick={this.add}>Add to cart</button>
    </div>);

export default Items;