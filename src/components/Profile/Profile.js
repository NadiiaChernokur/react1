
import { Container, Img, List, ListUl, Text, Wrapper } from './Profile.styled';


export const Profile = ({username, tag, location, avatar, stats: {followers, views, likes}}) => (

    <Container >
      <Wrapper >
        <Img
          src={avatar}
          alt="User avatar"
         
        />
        <Text >{username}</Text>
        <Text >@{tag}</Text>
        <Text >{location}</Text>
      </Wrapper>
    
      <ListUl >
        <List>
          <span >Followers</span>
          <span >{followers}</span>
        </List>
        <List>
          <span >Views</span>
          <span >{views}</span>
        </List>
        <List>
          <span >Likes</span>
          <span >{likes}</span>
        </List>
      </ListUl>
    </Container>
    )
    