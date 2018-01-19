import React from 'react';
import ReactDOM from 'react-dom';
 class ShoppingList extends React.Component{
     render(){
         return (
             <div className="shoppinglist">
                <h1>ShoppingList for{this.props.name}</h1>
                <ul>
                <li>Instagram</li>
              
                <li>Oculus</li>
                </ul>
             </div>
             
             
         );
     }
 }
 export default ShoppingList;