/* eslint-disable no-unused-vars */

function HomePageHandler(key, focusedElement, setFocusedElement, selectablesList) {
    console.log(key, selectablesList, focusedElement)
    
    switch(key){
        case "ArrowRight": 
            switch(focusedElement.id){
                case "add_button":
                setFocusedElement(selectablesList.reset_button)
                break;
                default:
                //
                break;
            }
            break;
        //=============================
        case "ArrowUp": 
            switch(focusedElement.id){
                case "card_103":
                setFocusedElement(selectablesList.card_102)
                break;
                case "card_102":
                setFocusedElement(selectablesList.card_101)
                break;
                case "card_101":
                setFocusedElement(selectablesList.add_button)
                break;
            }

            break;
        //=============================
        case "ArrowDown": 
            switch(focusedElement.id){
                case "reset_button":
                case "add_button":
                setFocusedElement(selectablesList.card_101)
                break;
                case "card_101":
                setFocusedElement(selectablesList.card_102)
                break;
                case "card_102":
                setFocusedElement(selectablesList.card_103)
                break;
            }

            break;
        //=============================
        case "ArrowLeft": 
            switch(focusedElement.id){
                case "reset_button":
                setFocusedElement(selectablesList.add_button)
                break;
            }

            break;
        //=============================
        case "Enter": 
            focusedElement.ref.children[0].click()
            break;
        //=============================
        case "Escape": 


            break;
        default:

        
            break;
    }
}

export default HomePageHandler;
