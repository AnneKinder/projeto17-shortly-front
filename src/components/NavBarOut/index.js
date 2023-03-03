import styled from "styled-components";

export default function NavBarOut() {
    return (
        <Container>
            <div className="action">Entrar</div>
            <div className="action">Cadastrar-se</div>
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

