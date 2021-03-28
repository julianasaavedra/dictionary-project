import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props){
    let [keyword, setKeyword]=useState(props.defaultKeyword);
    let [definition, setDefinition]=useState(null);
    let [loaded, setLoaded] = useState (false);
    let [photos, setPhotos] =useState(null);

    function handleDictionaryResult(response){
        setDefinition(response.data[0]);

    }

    function handlePexelsResult(response){
        setPhotos(response.data.photos);
    }
    function search(){
        let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleDictionaryResult);
        let pexelsApiKey="563492ad6f917000010000013e7e40f7bbbb4b669ae4efd3320496dc";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
        let headers={"Authorization":`Bearer ${pexelsApiKey}`};
        axios.get(pexelsApiUrl, {headers:headers}).then(handlePexelsResult);
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
                <Photos photos={photos} />
            </div>
        ) 
    }else{
        load();
        return "Loading";
    }
}