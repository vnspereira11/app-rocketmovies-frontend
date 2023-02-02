import { Container, Search, Profile, Logout } from "./styles";
import { useAuth } from "../../hooks/auth";

export function Header({ children }) {
  const { signOut } = useAuth();

  return (
      <Container>   
          
        <h1>RocketMovies</h1>               
              
        <Search>
          {children}
        </Search>
        
          <Profile to="/profile">
            <strong>Vanessa Pereira</strong>
            <img src="https://github.com/vnspereira11.png" alt="Foto do usuário" />
          </Profile>
          <Logout onClick={signOut}>sair</Logout>
            
      </Container>
    );
};