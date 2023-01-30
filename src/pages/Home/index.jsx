import { FiPlus } from "react-icons/fi";
import { Container, Content } from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { ButtonText } from "../../components/ButtonText";
import { Note } from "../../components/Note";

export function Home() {
  return (
    <Container>
      <Header>
        <Input placeholder="Pesquisar pelo título" />
      </Header> 
      <main>
        <Content>
          <header>
            <h1>Meus filmes</h1>
            <ButtonText icon={FiPlus} title="Adicionar filme"/>
          </header>
					<div className="notes">
						<Note data={{ 
							title: "Closer", 
							rating: "5",
							description: "Lorem lorem lorem lorem Lorem lorem lorem lorem Lorem lorem lorem lorem Lorem lorem lorem lorem Lorem lorem lorem lorem Lorem lorem lorem lorem Lorem lorem lorem lorem",
							tags: [
								{id: "1", name: "Drama"},
								{id: "2", name: "Romance"},
							] 
						}}
						/>
					</div>
        </Content>
      </main>
      </Container>       
    );
};