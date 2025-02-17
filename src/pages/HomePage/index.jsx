import styled from "styled-components"
import Counter from "../../components/Counter"
import CardsList from "../../components/CardsList"
import { useContext } from "react"
import { navigationContext } from "../../contexts/navigationContext"
import HomePageHandler from "../../keyPressHandlers/HomePageHandler"
import useNavigationHandler from "../../hooks/useNavigationHandler"

const StyledHomePage = styled.main`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

button {
    margin-top: 1em;
}
`

function HomePage() {

    const { selectablesList, focusedElement} = useContext(navigationContext);
    useNavigationHandler(HomePageHandler)

    return (
        <StyledHomePage>
           <Counter/> 
           <CardsList />
           <button onClick={()=>console.log(selectablesList, focusedElement)}>Selecionados</button>
        </StyledHomePage>
    )
}

export default HomePage;
