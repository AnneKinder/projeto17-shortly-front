import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import NavBarOut from "../../components/NavBarOut"
import Logo from "../../components/Logo"

export default function SignUp() {
 // const navigate = useNavigate();

  let [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function sendData(e) {
    e.preventDefault();

    if (form.password != form.confirmPassword) {
      alert("As senhas não conferem. Por favor, redigite.");
    } else {
        alert("Criar usuário/axios")
    //   axios
    //     .post("http://localhost:5000/signup", form)
    //     .then((res) => {
    //       alert("Usuário criado");
    //       navigate("/");
    //     })
    //     .catch((err) => alert(err.response.data));
    }
  }

  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <Container>
      <NavBarOut />
      <Logo />
      <form onSubmit={sendData}>
        <input
          name="name"
          type="text"
          placeholder="Nome"
          required
          onChange={handleForm}
          value={form.name}
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          onChange={handleForm}
          value={form.email}
        />
        <input
          name="password"
          type="password"
          placeholder="Senha"
          required
          onChange={handleForm}
          value={form.password}
        />

        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirmar senha"
          required
          onChange={handleForm}
          value={form.confirmPassword}
        />
        <button type="submit"> Cadastrar </button>
      </form>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Lexend Deca", sans-serif;
`;