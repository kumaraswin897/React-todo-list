import React from 'react'
import Listitem from './Listitem';

const Content = ({items,handleClick,deleted}) => { 
   
        return (
          <main>
          {(items.length)?(

          <Listitem
          items={items}
          handleClick={handleClick}
          deleted={deleted}
          />

          
        ):
        (
          <p>Your list is empty</p>
        )
          } 
          
        
          </main> 
        
        );
}


export default Content