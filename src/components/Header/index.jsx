import { Container, Search, Profile, Logout } from "./styles";

export function Header({ children }) {
    return (
        <Container>   
          
            <h1>RocketMovies</h1>               
            
            <Search>
                {children}
            </Search>
            
            <Profile>
                <div>
                    <strong>Vanessa Pereira</strong>
                    <Logout>sair</Logout>
                </div>
                <img src="https://github.com/vnspereira11.png" alt="Foto do usuário" />
            </Profile>
        </Container>
    )
};