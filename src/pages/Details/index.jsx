import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { useAuth } from "../../hooks/auth"; 
import { api } from "../../services/api";

import { FiArrowLeft, FiClock } from 'react-icons/fi';

import { Container, Content } from "./styles";

import { Header } from "../../components/Header";
import { Rating } from "../../components/Rating";
import { Input } from "../../components/Input";
import { Tag } from "../../components/Tag";      

export function Details() {
  const [data, setData] = useState(null);

  const params = useParams();
  const { user } = useAuth();

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }
    fetchNote();
  }, []);

  return (
    <Container>
      <Header>
        <Input placeholder="Pesquisar pelo título" />
      </Header>  
      { 
        data &&
        <main>
          <Content>
            <a href="/">
              <FiArrowLeft />
              Voltar
            </a>
            <div className="movie">
                <h1>{data.title}</h1>
                <Rating grade={data.rating} isBigSize />
            </div>
            <div className="author">
                <img src="https://github.com/vnspereira11.png" alt="Foto do usuário" />
                <span>Por {user.name}</span>
                <FiClock />
                <span>{data.created_at}</span>
            </div>
            {
              data.tags &&
              <div className="tags">
                {
                  data.tags.map(tag => (
                    <Tag 
                      key={String(tag.id)}
                      title={tag.name}                   
                    />                          
                  ))   
                }                                 
              </div>       
            }  
            <div className="description">
              <p>{data.description}</p>
            </div>    
          </Content>
        </main>   
      }      
    </Container>
  );
}; 