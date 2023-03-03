import styled from "styled-components";

export default function RankList() {
    return (
        <Container>
            <ItemSty>
            <div className="name"> <span style={{fontWeight: 700}}>1. Nome </span>-  500 links  -  1.700.220 visualizações</div>
            </ItemSty>
         </Container>
    )
}

const Container = styled.div`
    width: 80%;
    padding:50px;
    background: #FFFFFF;
    border: 1px solid rgba(120, 177, 89, 0.25);
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 24px 24px 0px 0px;

`
const ItemSty = styled.div`
    display: flex;;
    font-family: 'Lexend Deca';
    font-weight: 500;
    font-size: 22px;
    line-height: 28px;
    color: #000000;
    margin-bottom: 10px;
   

`

