import React,{useState} from "react";
import './App.css';
//function SearchSong that takes the handleSearch as a prop which is then passed to the search form with an onsubmit event listener
function SearchSong({handleSearch}){
  const[search,setSearch]=useState("")
 function  handleSubmit(e){
e.preventDefault()
handleSearch(search)
  }
  return(
    //rendering the search form containing search input and search button
     <div className="search">
      <form onSubmit={handleSubmit}>
        <input type="text"placeholder="search song..." value={search}onChange={e=>setSearch(e.target.value)}/>
        <button type='submit'>SEARCH</button>
      </form>


    </div>
  )
    
  
}
export default SearchSong