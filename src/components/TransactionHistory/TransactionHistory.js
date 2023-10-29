import { Container, Line,  Td, Thead, Tr, Wrapper } from "./Transaction.styled"

export const TransactionHistory = ({items}) => {
    return (
        <Container >
        <Thead>
          <Tr>
            <Wrapper>Type</Wrapper>
            <Wrapper>Amount</Wrapper>
            <Wrapper>Currency</Wrapper>
          </Tr>
        </Thead>
      
        <tbody>
        {items.map(({id, type, amount, currency}) => {
                     return (
                        <Line key={id}>
                         <Td>{type}</Td>
                        <Td>{amount}</Td>
                         <Td>{currency}</Td>
                         </Line>
                 )

    })}
        </tbody>
      </Container>
    )

}

