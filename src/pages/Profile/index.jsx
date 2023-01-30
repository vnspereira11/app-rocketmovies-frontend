import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Container, Form, Avatar } from "./styles";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export function Profile() {
  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft /> 
          Voltar         
        </Link>
      </header>
      <Form>
        <Avatar>
          <img 
            src="https://github.com/vnspereira11.png"
            alt="Foto do usuáro"
          />
          <label htmlFor="avatar">
            <FiCamera />
            <input 
              id="avatar"
              type="file"
            />
          </label>
        </Avatar>
        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
        />
        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />
        <Input
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
        />
        <Input
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
        />
        <Button title="Salvar"/>
      </Form>
    </Container>
  );
};