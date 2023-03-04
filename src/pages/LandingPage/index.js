import styled from "styled-components"
import Logo from "../../components/Logo"
import NavBarOut from "../../components/NavBarOut"
import RankList from "../../components/RankList"
import Trophy from "../../components/Trophy"


export default function LandingPage(){
    return(
        <Container>
        <NavBarOut />
        <Logo />
        <Trophy />
        <RankList />
        <div className="text">Crie sua conta para usar nosso serviço!</div>
        </Container>
    )
}

const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;

   .text{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 45px;
    margin-top: 90px;
   }
`