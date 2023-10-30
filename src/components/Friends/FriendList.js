import { ContainerUl, ListItem, Span } from './Friend.styled';
import { FriendListItem } from './friendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ContainerUl>
      {friends.map(({ id, isOnline, avatar, name }) => {
        return (
          <FriendListItem
            id={id}
            isOnline={isOnline}
            avatar={avatar}
            name={name}
          />

          //     <ListItem key={id}>
          //     <Span prop={isOnline}></Span>
          //     <img  src={avatar} alt="User avatar" width="48" />
          //     <p >{name}</p>
          //    </ListItem>
        );
      })}
    </ContainerUl>
  );
};
