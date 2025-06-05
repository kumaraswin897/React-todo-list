import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react'

const Additem = ({newItem,setNewItem,handleSubmit}) => {
  const inputRef=useRef()
  return (
    <form className='addForm' onSubmit={handleSubmit}>
    <label htmlFor='addItem'></label>
    <input id='addItem'
        autoFocus
        ref={inputRef}
        type='text' placeholder='Additem'
        required
        value={newItem}
        onChange={(e)=>{setNewItem(e.target.value)}}
    ></input>
    <button 
        type="submit"
        aria-label='Add Item'
        onClick={()=>inputRef.current.focus()}
        >
        <FaPlus/>
    </button>
    </form>
  )
}

export default Additem
