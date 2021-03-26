import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css"

export default function Dictionary(){
    let [keyword, setKeyword]=useState(null);
    let [definition, setDefinition]=useState(null);

    function handleResult(response){
        console.log(response.data[0]);
        console.log(response.data[0].meanings[0].definitions[0].definition);
        setDefinition(response.data[0]);

    }
    
    function search(event){
        event.preventDefault();
        let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResult);
    }
 
    function handleChange(event){
        setKeyword(event.target.value);
    }

    return(
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" placeholder="Type a word" autoFocus={true} onChange={handleChange}/>
                <input type="submit" className="btn btn search" />
            </form>
            <Results results={definition}/>
        </div>
    ) 

}