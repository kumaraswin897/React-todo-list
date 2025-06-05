import React from 'react'

const Searchitem = ({search,setSearch}) => {
  return (
   <form className='searchForm' onSubmit={(e)=>e.preventDefault()}>
   <label htmlFor='search'></label>
   <input id='search'
   type='text'
   placeholder='Search all items'
   role='searchbox'
   value={search}
   onChange={(e)=>setSearch(e.target.value)}
   ></input>
   </form>
  )
}

export default Searchitem