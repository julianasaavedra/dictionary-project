import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props){
    return (
        <div className="Meaning">
            <h3>{props.meaning.partOfSpeech}</h3>
            <p>{props.meaning.definitions[0].definition}</p>
            {props.meaning.definitions.map(function (definition, index){
                return(
                    <div key={index}>
                        <p>
                            <strong>Definition: </strong>{definition.definition}
                            <br />
                            <strong>Synonyms: </strong><Synonyms synonyms={definition.synonyms} />
                            <br />
                            <em><strong>Example: </strong> {definition.example}</em>
                        </p>
                    </div>
                );
            })}
        </div>
    );

}