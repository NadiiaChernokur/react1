import { Container, Head, ListItem, ListUl } from './Statistic.styled';

export const Statistics = ({ stats, title }) => {
  return (
    <Container>
      <Head>{title ? `${title}` : ''}</Head>

      <ListUl>
        {stats.map(card => {
          return (
            <ListItem key={card.id}>
              <span>{card.label}</span>
              <span>{card.percentage}</span>
            </ListItem>
          );
        })}
      </ListUl>
    </Container>
  );
};
