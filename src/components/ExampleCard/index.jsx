/* eslint-disable react/prop-types */
import { useState } from "react"
import styled from "styled-components"
import Selectable from "../Selectable";

const StyledCard = styled.div`
display: flex;
flex-direction: column;
max-width: 300px;
background-color: #e7e5c7;
border-radius: 1em;
padding: 0.5em;
height: 100%;

.content {
    transition: 1s all;
    overflow: hidden;
}

h4{
    margin: 0.2em;
    text-overflow: ellipsis;

}

button {
    border: none;
    background-color: var(--background-grey);
    color: white;
    border-radius: 0.8em
}
`;

function ExampleCard({ title, description, id }) {

    const [hidden, setHidden] = useState(true);

    return (
       <StyledCard>
        <h4>{title}</h4>
        <span className="content" style={{height: hidden? '0vh' : '15vh'  }} >{description}</span>
        <Selectable id={id}><button onClick={()=>{setHidden(!hidden)}}>{hidden? 'Ver mais': 'Ver menos'}</button></Selectable>
       </StyledCard> 
    )
}


export default ExampleCard
