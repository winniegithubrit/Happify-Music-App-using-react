import React,{useState} from "react";
import './App.css';
function SearchSong({handleSearch}){
  const[search,setSearch]=useState("")
 function  handleSubmit(e){
e.preventDefault()
handleSearch(search)
  }
  return(
     <div className="search">
      <form onSubmit={handleSubmit}>
        <input type="text"placeholder="search song..." value={search}onChange={e=>setSearch(e.target.value)}/>
        <button type='submit'>SEARCH</button>
      </form>


    </div>
  )
    
  
}
export default SearchSong