import styled from "styled-components";
import { useState } from "react";

export default function NewLink() {

    let [newLink, setNewLink] = useState("")


    return (
        <Container>
            <input 
                name='newlink'
                type='text'
                placeholder="Links que cabem no bolso"
                onChange= { (e) => {
                    setNewLink(e.target.value)
                }}
                value={newLink}            
            />
            <button>Encurtar link</button>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    width: 100%;
    height:100px;
    justify-content: center;
    margin: 40px 0 55px 0;

    button{
        margin-top: 5px;
        margin-left: 60px;
    }


   
 `

