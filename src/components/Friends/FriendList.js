import { ContainerUl, List, Span } from "./Friend.styled"

export const FriendList = ({friends}) => {
    return (
        <ContainerUl >
            {friends.map(friend => {
                return (
                    <List key={friend.id}>
                    <Span prop={friend.isOnline}></Span>
                    <img  src={friend.avatar} alt="User avatar" width="48" />
                    <p >{friend.name}</p>
                   </List>
                )
              
            })}
       
        </ContainerUl>
    )
  
    }