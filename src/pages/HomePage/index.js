import styled from "styled-components"
import Logo from "../../components/Logo"
import NavBarIn from "../../components/NavBarIn"
import NewLink from "../../components/NewLink"

export default function HomePage(){
    return(
        <Container>
            <NavBarIn />
            <Logo />
            <NewLink />
            <div> last shortened links</div>
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