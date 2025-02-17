/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { useContext, useEffect, useRef, useState } from 'react';
import { navigationContext } from '../../contexts/navigationContext'
import styled from 'styled-components';

const StyledSelectable = styled.div`
    padding: 4px;
    border: 2px solid transparent;
    transition: border-color 0.3s ease;
`;

function Selectable({ children, id, initial }) {

    const {configureAsSelectable, setInitialFocus, focusedElement, removeFromSelectables} = useContext(navigationContext);
    const selectableRef = useRef(null);
    const [inFocus, setInFocus] = useState(false)

    useEffect(()=>{
        if(focusedElement) id === focusedElement.id? setInFocus(true): setInFocus(false);     
    },[focusedElement])


    useEffect(()=>{
        if (selectableRef.current) {
            configureAsSelectable({id: id, ref: selectableRef.current }); // São setados com id e referência para ser utilizados posteriormente

            if(initial){setInitialFocus({id: id, ref: selectableRef.current })} // Define o foco no elemento no render da interface
        }

        return () =>{removeFromSelectables(id)} // Remove o item do hashmap quando seu elemento for apagado
    }, []);
    

    return (
        <StyledSelectable ref={selectableRef} className={inFocus? "inFocus" : ""}>
        {children}
        </StyledSelectable>
    )
}

export default Selectable;
