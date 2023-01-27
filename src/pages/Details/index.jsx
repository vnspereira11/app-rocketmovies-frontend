import { FiArrowLeft, FiClock } from 'react-icons/fi';
import { Container, Content } from "./styles";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Rating } from "../../components/Rating";
import { Input } from "../../components/Input";
import { Tag } from "../../components/Tag";


export function Details() {
  return (
    <Container>
      <Header>
        <Input placeholder="Pesquisar pelo título" />
      </Header>     
      <main>
        <Content>
          <ButtonText icon={FiArrowLeft} title="Voltar"/>
          <div className="movie">
              <h1>Closer</h1>
              <Rating grade="5" isBigSize />
          </div>

          <div className="author">
              <img src="https://github.com/vnspereira11.png" alt="Foto do usuário" />
              <span>Por Vanessa Pereira</span>
              <FiClock />
              <span>15/12/22 às 11:00</span>
          </div>

          <div className="tags">
              <Tag title="Drama"/>                                    
              <Tag title="Drama"/>                                    
            </div>       
            
          <div className="description">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos molestiae soluta distinctio ducimus, amet deleniti officiis nam consectetur nihil, pariatur obcaecati, illo eum ipsa? Fugit repellat praesentium repudiandae aut. Consectetur.              
            </p>
          </div>    
        </Content>
      </main>   
               
    </Container>
  );
}; 