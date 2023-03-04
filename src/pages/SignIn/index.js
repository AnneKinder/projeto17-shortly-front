import styled from "styled-components";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../contexts/auth";
import axios from "axios";
import NavBarOut from "../../components/NavBarOut";
import Logo from "../../components/Logo";

export default function SignIn() {
//   const URLPOST = "https://shortly-api.onrender.com/"
//   const navigate = useNavigate();
//   const { setToken, setUser } = useContext(AuthContext);
  const [loginUser, setLoginUser] = useState({ email: "", password: "" });

  function handleSignIn(e) {
    e.preventDefault();

    // axios
    //   .post(`${URLPOST}`, loginUser)
    //   .then((res) => {
    //     setToken(res.data.token);
    //     setUser(res.data);
    //     navigate("/home");
    //   })
    //   .catch((err) => {
    //     alert(err.response.data.message);
    //   });
  }

  return (
    <Container>
        <NavBarOut />
        <Logo />
        <form onSubmit={handleSignIn}>
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            onChange={(email) =>
              setLoginUser({ ...loginUser, email: email.target.value })
            }
            value={loginUser.email}
          />
          <input
            name="password"
            type="password"
            placeholder="Senha"
            required
            onChange={(password) =>
              setLoginUser({ ...loginUser, password: password.target.value })
            }
            value={loginUser.password}
          />
          <button type="submit">Entrar</button>
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