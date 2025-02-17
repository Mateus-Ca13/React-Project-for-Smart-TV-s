import styled from "styled-components"
import ExampleCard from "../../components/ExampleCard"

const StyledCardsList = styled.section`
display: flex;
align-items: start;
justify-content: center;
width: 100%;
gap: 1em;
margin-top: 1em;
height: max-content;

@media screen and (max-width: 768px) {
  flex-direction: column;
  
}
`

function CardsList() {

    const cards = [
        {
          "id": "card_101",
          "title": "Gestão de Projetos",
          "description": "Soluções eficientes para planejamento, execução e monitoramento de projetos empresariais."
        },
        {
          "id": "card_102",
          "title": "Análise de Dados",
          "description": "Transforme dados brutos em insights estratégicos para a tomada de decisão."
        },
        {
          "id": "card_103",
          "title": "Segurança da Informação",
          "description": "Proteja ativos digitais com estratégias avançadas de cibersegurança e conformidade."
        }
      ]

    return (
        <StyledCardsList>
            {cards.map((card)=>{return <ExampleCard key={card.id} id={card.id} title={card.title} description={card.description}/>})}
        </StyledCardsList>
    )
}

export default CardsList
