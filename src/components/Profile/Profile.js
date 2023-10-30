
import { Container, Img,  ListItem, ListUl, Text, Wrapper } from './Profile.styled';


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
        <ListItem>
          <span >Followers</span>
          <span >{followers}</span>
        </ListItem>
        <ListItem>
          <span >Views</span>
          <span >{views}</span>
        </ListItem>
        <ListItem>
          <span >Likes</span>
          <span >{likes}</span>
        </ListItem>
      </ListUl>
    </Container>
    )
    