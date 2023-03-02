import styled from "styled-components";
import logo from "../../assets/images/logo.png"

export default function Logo(){
    return(
        <LogoSty>
         <img alt="logo" src={logo} />
        </LogoSty>
    )
}

const LogoSty = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    img{
        height: 150px;
    }

`