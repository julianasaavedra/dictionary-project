import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css"

export default function Dictionary(props){
    let [keyword, setKeyword]=useState(props.defaultKeyword);
    let [definition, setDefinition]=useState(null);
    let [loaded, setLoaded] = useState (false);

    function handleResult(response){
        console.log(response.data[0]);
        console.log(response.data[0].meanings[0].definitions[0].definition);
        setDefinition(response.data[0]);

    }

    function search(){
        let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResult);
    }
    
    function hanleSubmit(event){
        event.preventDefault();
        search();
        
    }
 
    function load(){
        setLoaded(true);
        search();
    }

    function handleChange(event){
        setKeyword(event.target.value);
    }
    if(loaded){
        return(
            <div className="Dictionary">
                <section>
                    <h1>
                        What word do you want to look up?
                    </h1>
                    <form onSubmit={hanleSubmit}>
                        <input type="search" placeholder="Search for a word" autoFocus={true} onChange={handleChange}/>
                    </form>
                    <div className="hint">
                        Suggested words: Sunrise, Encyclpedia, Electronics...
                    </div>
                </section>
                <Results results={definition}/>
            </div>
        ) 
    }else{
        load();
        return "Loading";
    }
}