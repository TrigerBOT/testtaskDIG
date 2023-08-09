import React, { Component } from 'react';
import Card from '../Card/Card';
import './CardContainer.scss';
const  CardContainer = ()=> {
 
        return (
            <div className='card__container'>
               <Card  isHave={true} />
                <Card isHave={true} />
                <Card isHave={false}  />
                <Card isHave={true}  />
                <Card  isHave={true} />
              
            </div>
        );
    
}

export default CardContainer;