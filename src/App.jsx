import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ShoppingList from "./ShoppingList";


const data=[
  {id:1, item:'eggs', quantity:12,completed:false},
  {id:2, item:'Milk', quantity:1,completed:true},
  {id:3, item:'Bread', quantity:4,completed:false},
  {id:4, item:'Carrots', quantity:6,completed:true},
];

function App() {
  return (
    <>
      <div>
        <ShoppingList items={data}> 
        
        </ShoppingList>
      </div>
    </>
  )
}

export default App
