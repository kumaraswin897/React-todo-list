import React from 'react'
import Lineitem from './Lineitem'

const Listitem = ({items,handleClick,deleted}) => {
  return (
    
    <ul>
          { items.map((item)=>(
          <Lineitem
          item={item}
          key={item.id}
          handleClick={handleClick}
          deleted={deleted}/>
           
            ))
          }
    </ul>
        )
    }

export default Listitem