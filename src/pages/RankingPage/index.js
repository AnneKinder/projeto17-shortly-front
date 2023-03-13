import styled from "styled-components"
import Logo from "../../components/Logo"
import Trophy from "../../components/Trophy"
import NavBarIn from "../../components/NavBarIn"
import RankList from "../../components/RankList"



export default function RankingPage(){
    return(
        <Container>
            <NavBarIn />
            <Logo />
            <Trophy />
            <RankList />           
        </Container>
    )
}

const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;

`