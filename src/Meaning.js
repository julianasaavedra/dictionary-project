import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css"

export default function Meaning(props){
    return (
        <div className="Meaning">
            <h3>{props.meaning.partOfSpeech}</h3>
            <p>{props.meaning.definitions[0].definition}</p>
            {props.meaning.definitions.map(function (definition, index){
                return(
                    <div key={index}>
                        <div className="definition">
                            Definition: {definition.definition}
                        </div>
                        <div className="synonyms">
                            <Synonyms synonyms={definition.synonyms} />
                        </div>
                        <div className="example">
                            Example: {definition.example}
                        </div>
                    </div>
                );
            })}
        </div>
    );

}