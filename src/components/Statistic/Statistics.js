import { Container, Head, List, ListUl } from "./Statistic.styled"



export const Statistics = ({stats}) => {
return (
    <Container >
    <Head >Upload stats</Head>
  
    < ListUl>
       {stats.map(card => {
        return (
        <List key={card.id}>
          <span >{card.label}</span>
         <span >{card.percentage}</span>
          </List>
        )
        })}
        
   
    </ListUl>
  </Container>
)  
}
 
