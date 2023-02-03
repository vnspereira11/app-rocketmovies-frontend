import { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";

import { api } from "../../services/api";

import { Container, Content, New } from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Note } from "../../components/Note";

export function Home() {
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}`);
      setNotes(response.data);
    }
    fetchNotes();

  }, [search]);
  
  return (
    <Container>
      <Header>
        <Input 
          placeholder="Pesquisar pelo título" 
          onChange={(e) => setSearch(e.target.value)}
        />
      </Header> 
      <main>
        <Content>
          <header>
            <h1>Meus filmes</h1>
            <New to="/new">
              <FiPlus />
              Adicionar filme
            </New>
          </header>
					<div className="notes">
            {
              notes.map(note => (
                <Note 
                  key={String(note.id)}
                  data={note}
                />
              ))
            }
            </div>
        </Content>
      </main>
      </Container>       
    );
};