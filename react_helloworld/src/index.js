import React from 'react';
import ReactDOM from 'react-dom';
import ShoppingList from './components/shopping';
import './index.css';

function formatName(user){
    return user.firstName+' '+user.lastName;
}
const user={
    firstName:'Harper',
    lastName:'Perez'
};

const element=(<h1>Hello,{formatName(user)}!</h1>);
ReactDOM.render(<ShoppingList name="Mark" />, document.getElementById('root'));

ReactDOM.render(element, document.getElementById('list'));