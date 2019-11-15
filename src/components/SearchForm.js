import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";

export default function SearchForm(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([])
  const handleChange = event => {
    setSearchTerm(event.target.value)
  }

  useEffect(()=>{
    const results = props.characterData.filter(person =>
      person.name.toLowerCase().includes(searchTerm))
   setSearchResults(results);
  },[searchTerm] )


  return (
    <div className="search-form">
      <h2>Enter a character name here BUUUUUURP morty</h2>
      <input 
        value={searchTerm}
        onChange={handleChange}
        type="text"
        placeholder="Search for your favorite weirdo"
      />
      
    
    {searchResults 
    .map(person => {
    return (
      <CharacterCard
      key={person.id}
      name={person.name}
      species={person.species}
      type={person.type}/>
    )
  })} 
    </div>

  )
}


