import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function NavBarIn() {

    const navigate = useNavigate()
    const name = 'USER'

    return (
        <Container>

            <div className="left">
                <div className="action">Seja bem-vindo(a), {name}</div>
            </div>

            <div className="right">
                <div className="action" onClick={()=>navigate("/home")}>Home</div>
                {/* <div className="action" onClick={()=>navigate("/users/me")}>My Rank</div> */}
                <div className="action" onClick={()=>navigate("/ranking")}>Ranking</div>
                <div className="action" onClick={()=>alert("Logout")}>Sair</div>
            </div>
          
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items:center;
    width: 100%;
    height: 60px;
    background-color: #FFFFFF;
    box-sizing: border-box;
    padding-right:170px;

    .left{
        display: flex;
        align-items:center;
        padding-left: 100px;
    }

    .right{
        display: flex;
        align-items:center;

        div{
            cursor: pointer;
        }
    }

    .action{
        color: #9C9C9C;
        padding-left: 50px;
    }

`


