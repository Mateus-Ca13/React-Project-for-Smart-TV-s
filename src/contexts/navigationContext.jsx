/* eslint-disable react/prop-types */
import { createContext, useCallback, useState } from "react";

const navigationContext = createContext();

const NavigationContextProvider = ({children})=>{

    const [focusedElement, setFocusedElement] = useState(null) // Index do elemento Selectable que está em foco.
    const [selectablesList, setSelectablesList] = useState({}) // Hashmap de elementos Selectable disponíveis. 
    const [keyHandler, setKeyHandler] = useState(null) // Função que fará a lógica de seleção dos botões dentro de uma interface

    const configureAsSelectable = (ref)=>{
        setSelectablesList((prev) => ({...prev, [ref.id]: ref})); // Guarda um elemento como selecionável para futuras lógicas de controle
    }

    const removeFromSelectables = (id)=>{ //Remove um elemento selecionável pelo seu id.
        setSelectablesList((prev)=>{
            const newMap = {...prev}/
            delete newMap[id]
            return newMap;
        })
    }

    const setInitialFocus = useCallback((ref)=>{ // Seta o elemento inicial em foco
        if(!focusedElement){
            setFocusedElement(ref)
        }else{
            throw new Error("Apenas um elemento com a prop initial é permitido por interface.")
        }
    },[])

    const resetNavigationState = useCallback(()=>{
        setFocusedElement(null);
        setSelectablesList([]);
    },[])

    return <navigationContext.Provider value={{
        focusedElement,
        setFocusedElement,
        selectablesList,
        setSelectablesList,
        keyHandler,
        setKeyHandler,
        configureAsSelectable,
        resetNavigationState,
        setInitialFocus,
        removeFromSelectables
    }}>
        {children}
        </navigationContext.Provider>
};

export { navigationContext, NavigationContextProvider };