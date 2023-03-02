import styled from "styled-components";

export default function NavBarOut() {
    return (
        <NavBarOutSty>
            <div className="action">Entrar</div>
            <div className="action">Cadastrar-se</div>
        </NavBarOutSty>
    )
}

const NavBarOutSty = styled.div`
    display: flex;
    justify-content: end;
    align-items:center;
    width: 100%;
    height: 60px;
    background-color: lightgreen;
    box-sizing: border-box;
    padding-right:170px;

    .action{
        color: #9C9C9C;
        padding-left: 50px;
        cursor: pointer;
    }

`

