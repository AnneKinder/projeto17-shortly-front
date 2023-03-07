import styled from "styled-components";
import { useState } from "react";

export default function UrlList() {

    let [originalUrl, setOriginalUrl] = useState("original url")
    let [shortUrl, setShortUrl] = useState("short url")
    let [visitQty, setVisitQty] = useState("quantity")

    let [test, setTest] = useState("testing?")

    return (
        <Container>
     
            <ItemSty>
            <div className="urlArea">
                <div className="info"> {originalUrl} </div>  
                <div className="info"> {shortUrl} </div>    
                <div className="info"> Quantidade de visitantes: {visitQty}</div>                 
            </div>
            <div className="trashBtn"><ion-icon name="trash"></ion-icon></div>
            </ItemSty>
                       
         </Container>
    )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const ItemSty = styled.div`
    display: flex;
    justify-content:center;
    height: 60px;
    width: 100%;
    margin-bottom: 40px;
    
        .urlArea{
            display: flex;
            justify-content: space-around;
            align-items: center;
            font-family: 'Lexend Deca';
            font-weight: 400;
            font-size: 14px;
            color: #FFFFFF;
            background-color: #80CC74;
            width: 51.5%;
            box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
            border-radius: 12px 0px 0px 12px;
        }

        .trashBtn{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 9%;
            height: 60px;
            background: #FFFFFF;
            box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
            border-radius: 0px 12px 12px 0px;
            font-size: 25px;
            color: #EA4F4F;
        }  
`

