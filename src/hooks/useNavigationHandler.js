import { useContext, useEffect, useRef } from "react";
import { navigationContext } from "../contexts/navigationContext";

const useNavigationHandler = ( customKeyHandler )=>{

    const {setKeyHandler, keyHandler, selectablesList, focusedElement, setFocusedElement} = useContext(navigationContext);
    
    const stateRef = useRef({
        focusedElement,
        setFocusedElement,
        selectablesList,
    });

    useEffect(() => { // Recebe os valores mais recentes presentes no contexto global
        stateRef.current = {
            focusedElement,
            setFocusedElement,
            selectablesList,
        };
    }, [focusedElement, setFocusedElement, selectablesList]);
    
    useEffect(()=>{ //Executado na troca de interfaces, para resetar contextos e vincular um novo handleKeyPress ao EventListener.



        if (keyHandler !== customKeyHandler) {
            setKeyHandler(customKeyHandler);
            
          }
        
        const handleKeyPress = (event) =>{ // Aqui gerenciamos reações "padrões". Caso não sirvam, delegamos ao Handler específico
 
            if(customKeyHandler){
                customKeyHandler(event.key, stateRef.current.focusedElement, stateRef.current.setFocusedElement, stateRef.current.selectablesList);
            }
        }
            window.addEventListener("keydown", handleKeyPress); //na construção do hook, setamos o eventListener. Na desmontagem, removemos o eventListener.
            return ()=> {window.removeEventListener("keydown",handleKeyPress)};

    }, [customKeyHandler])

}

export default useNavigationHandler;