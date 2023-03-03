import styled from "styled-components";
import logo from "../../assets/images/logo.png"

export default function Logo(){
    return(
        <Container>
         <img alt="logo" src={logo} />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    img{
        width: 28%;
    }

`