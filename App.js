import logo from './logo.svg';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import './App.css'
import { useState,useEffect } from 'react';
import Additem from './Additem';
import Searchitem from './Searchitem';

function App() {
  const [items,setItems] = useState( []
    );//[] which is used to, if there is no object in the localstorage,this not wont be showed.it has to show empty array
    useEffect(()=>{
      JSON.parse(localStorage.getItem("todo_list"))
    },[])
    //useeffect only loads at very first time
  /*const numbers=[1,2,3,4,5]
  const itemss=numbers.filter(n=> n>3).map(n=>({number:n}))
  console.log(itemss)*/
   const handleClick=(id)=>{
    const listItems=items.map((item)=>
      item.id===id ? {...item,checked:!item.checked} : item)/*! used to indicate if true means false,if false means true*/
    setItems(listItems)
    localStorage.setItem("todo_list",JSON.stringify(listItems))
  }
  const deleted = (id) =>{
    const listItems=items.filter((item)=>
      item.id!==id)
    setItems(listItems)
    localStorage.setItem("todo_list",JSON.stringify(listItems))
    
  }
  const[newItem,setNewItem]=useState('') 
  const[search,setSearch]=useState('')
  const addItem=(item)=>{ 
  const id=items.length ? items[items.length-1].id+1 : 1
  const addNewItem={id,checked:false,item}
  const listItems=[...items,addNewItem]
  setItems(listItems)
  localStorage.setItem("todo_list",JSON.stringify(listItems))
  }
   const handleSubmit = (e)=>{
       e.preventDefault()/* form will be automattically reload.so we have to prevent the default loading*/
       if(!newItem) return;/* if there is no items in the newItem,it will return .which means doesn't return anything*/
       console.log("submitt")
       addItem(newItem)
       setNewItem(' ')
   }

  return(
    <>
        <div className='App'>
        <Header  />
        <Additem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
        />
        <Searchitem
        search={search}
        setSearch={setSearch}
        />
        <Content  
        
        items={items.filter(item =>((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleClick={handleClick}
        deleted={deleted}
        />
        <Footer
          length = {items.length} 
        />
        </div>
     </>
  );

 }
export default App;
