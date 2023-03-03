import styled from "styled-components"
import trophy from "../../assets/images/trophy.png"

export default function Trophy(){
    return(
        <Container>
         <img alt="logo" src={trophy} />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 40px 0 55px 0;

    img{
        width:13%;
    }

`