import styled from "styled-components"
import Logo from "../../components/Logo"
import NavBarIn from "../../components/NavBarIn"
import UrlList from "./UrlList"


export default function UserPage(){
    return(
        <Container>
            <NavBarIn />
            <Logo />
            <UrlList />   
        </Container>
    )
}

const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
`