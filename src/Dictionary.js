import React, {useState} from "react";
import "./Dictionary.css"

export default function Dictionary(){
    let [keyword, setKeyword]=useState(null);
    
    function search(event){
        event.preventDefault();
        alert(`Searching for ${keyword}`);
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
        </div>
    ) 

}