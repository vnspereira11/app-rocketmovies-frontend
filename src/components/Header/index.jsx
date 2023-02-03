import { Container, Search, Profile, Logout } from "./styles";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

export function Header({ children }) {
  const { signOut, user } = useAuth();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  return (
      <Container>   
          
        <h1>RocketMovies</h1>               
              
        <Search>
          {children}
        </Search>
        
          <Profile to="/profile">
            <strong>{user.name}</strong>
            <img src={avatarUrl} alt={user.name} />
          </Profile>
          <Logout onClick={signOut}>sair</Logout>
            
      </Container>
    );
};