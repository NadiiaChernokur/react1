import { ListItem, Span } from './Friend.styled';

export const FriendListItem = ({ id, isOnline, avatar, name }) => {
  return (
    <ListItem key={id}>
      <Span prop={isOnline}></Span>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </ListItem>
  );
};
