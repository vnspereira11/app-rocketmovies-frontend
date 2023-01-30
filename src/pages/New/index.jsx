import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Container, Form, Wrapper } from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { NoteItem } from "../../components/NoteItem";


export function New() {
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
                        <Input placeholder="Título" />
                        <Input placeholder="Sua nota (de 0 a 5)" />
                    </Wrapper>
                    <Textarea placeholder="Observações" />
                    <Section title="Marcadores">
                        <div className="tags">
                            <NoteItem value="React" />                        
                            <NoteItem isNew placeholder="Novo marcador"/>                           
                        </div>
                    </Section>
                    <div className="call-to-action">
                        <Button title="Descartar alterações" />
                        <Button title="Salvar alterações" />
                    </div>
                </Form>
            </main>            
        </Container>
    );
};