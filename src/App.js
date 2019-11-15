import React, { useState, useEffect } from "react";
import {Route } from 'react-router-dom';
import axios from 'axios';

import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";

export default function App(props) {
  const [personData, setPersonData] = useState([]);

  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    axios 
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        setPersonData(response.data.results);
        // console.log('response is set to state!', response.data.results);
      })
      .catch(error =>{
        console.log("The data was now returned", error);
      });
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);
  return (
    <main>
      <Header />
      <Route exact path='/' component={WelcomePage}/>
      <Route 
      path='/characters'       
      render={ () =><CharacterList {...props} characterData={personData} />}
      />

    </main>
  );
}
