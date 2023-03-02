import styled from "styled-components"
import Logo from "../../components/Logo"
import NavBarIn from "../../components/NavBarIn/ĩndex"
import NavBarOut from "../../components/NavBarOut"


export default function LandingPage(){
    return(
        <ContainerSty>
        <NavBarOut />
        {/* <NavBarIn /> */}
        <Logo />
        <div>Ranking Image</div>
        <div>Ranking list</div>
        </ContainerSty>
    )
}

const ContainerSty = styled.div`
   
`