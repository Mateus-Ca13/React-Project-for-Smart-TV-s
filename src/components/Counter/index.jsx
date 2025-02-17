import { useState } from "react"
import styled from "styled-components"
import Selectable from "../Selectable";

const StyledCounter = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

.display {
    background-color: var(--cyan);
    padding: 0.5em;
    width: 100%;
    border-radius: 0.5em;
    margin-bottom: 1em;
    color: white;
}

.buttons{
    display: flex;
    gap: 0.2em;
    width: 100%;

    button{
        width: 100%;
        border-radius: 0.5em;
        font-size: 1em;
        padding: 0.2em 1em;
        border: 0;
    }
}

`

function Counter() {
    const [value, setValue] = useState(0);
    return (
        <StyledCounter>
            <div className="display">{value}</div>  
            <div className="buttons">
                <Selectable initial id={"add_button"}><button onClick={()=>setValue(prev => prev + 1)}>Add</button></Selectable>
                <Selectable id={"reset_button"}><button onClick={()=>setValue(0)}>Reset</button></Selectable>
            </div>
        </StyledCounter>
    )
}

export default Counter;
