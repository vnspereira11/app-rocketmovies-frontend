import { useNavigate } from "react-router-dom";
import { Container, Search, Profile, Logout } from "./styles";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

export function Header({ children }) {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();

  function handleSignOut() {
    navigate("/");
    signOut();
  };

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
          <Logout onClick={handleSignOut}>sair</Logout>
            
      </Container>
    );
};