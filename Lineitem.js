import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
const Lineitem = ({item,handleClick,deleted}) => {
  return (
    <li className="item" >
    <input type="checkbox"
    onChange={()=>handleClick(item.id)}
     checked={item.checked}/>
    <label
    style={(item.checked)?{textDecoration:'line-through'}:null}
    onDoubleClick={()=>handleClick(item.id)}>{item.item}</label>
    <FaTrashAlt
    role = "button"
    tabIndex="0"
    onClick={()=>deleted(item.id)} 
    />
    </li> 
  )
}

export default Lineitem