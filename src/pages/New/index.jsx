import { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Container, Form, Wrapper } from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { NoteItem } from "../../components/NoteItem";


export function New() {

const [title, setTitle] = useState("");
const [rating, setRating] = useState("");
const [description, setDescription] = useState("");

const [tags, setTags] = useState([]);
const [newTag, setNewTag] = useState("");

const navigate = useNavigate();

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  };

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  };

  async function handleNewNote() {

    if (!title || !description) {
      return alert("Preencha os campos em branco para continuar.");
    };

    const validRating = rating >= 0 && rating <= 5 && rating !== "";

    if (!validRating) {
      return alert("Preencha uma nota entre 0 e 5 para continuar.");      
    };

    if(newTag) {
      return alert("Existe um marcador preenchido que não foi adicionado. Adicione ou remova o marcador para continuar.");
    };

    await api.post("/notes", {
      title,
      rating,
      description,
      tags
    });

    alert("Filme cadastrado com sucesso!");
    navigate(-1);
  };

  function handleDiscardNewNote() {
    const discard = window.confirm("Deseja sair e descartar as alterações?");

    if(discard) {
      navigate(-1);
    };
  };

    return (
      <Container>
        <Header>
          <Input placeholder="Pesquisar pelo título"/>
        </Header>
        <main>
          <Form>
            <header>
              <Link to ="/">
                <FiArrowLeft />
                Voltar
              </Link>
              <h1>Novo filme</h1>
            </header>
            <Wrapper>
              <Input 
                placeholder="Título" 
                onChange={e => setTitle(e.target.value)}
              />
              <Input 
                placeholder="Sua nota (de 0 a 5)" 
                onChange={e => setRating(e.target.value)}
              />
            </Wrapper>
            <Textarea 
              placeholder="Observações" 
              onChange={e => setDescription(e.target.value)}
            />
            <Section title="Marcadores">
              <div className="tags">
                {
                  tags.map((tag, index) => (
                    <NoteItem
                      key={String(index)}                      
                      value={tag}                      
                      onClick={() => handleRemoveTag(tag)}
                    />  
                  ))
                }                                                   
                <NoteItem 
                  isNew 
                  placeholder="Novo marcador"
                  value={newTag}
                  onChange={e => setNewTag(e.target.value)}
                  onClick={handleAddTag}
                />                           
              </div>
            </Section>
            <div className="call-to-action">
              <Button 
                title="Descartar alterações"
                onClick={handleDiscardNewNote} 
              />
              <Button 
                title="Salvar alterações" 
                onClick={handleNewNote}
              />
            </div>
          </Form>
        </main>            
      </Container>
    );
};