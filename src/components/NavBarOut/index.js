import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function NavBarOut() {

    const navigate = useNavigate()

    return (
        <Container>
            <div className="action" onClick={()=>navigate("/signin")}>Entrar</div>
            <div className="action" onClick={()=>navigate("/signup")}>Cadastrar-se</div>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: end;
    align-items:center;
    width: 100%;
    height: 60px;
    box-sizing: border-box;
    padding-right:170px;

    .action{
        color: #9C9C9C;
        padding-left: 50px;
        cursor: pointer;
    }

`

