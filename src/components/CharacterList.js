import React from "react";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

function CharacterList(props){
  // console.log('here props is: ', props)
  // const [personData, setPersonData] = useState([]);

  // // TODO: Add useState to track data from useEffect

  // useEffect(() => {
  //   axios 
  //     .get('https://rickandmortyapi.com/api/character/')
  //     .then(response => {
  //       setPersonData(response.data.results);
  //       console.log(response.data);
  //     })
  //     .catch(error =>{
  //       console.log("The data was now returned", error);
  //     });
  //   // TODO: Add API Request here - must run in `useEffect`
  //   //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  // }, []);

  return (
    <section className="character-list">
      <SearchForm characterData={props.characterData}/>

    
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
    </section>
  );
}


export default CharacterList; 