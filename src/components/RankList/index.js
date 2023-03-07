import styled from "styled-components";

export default function RankList() {

    const array = [
        {
            name: "Anne",
            qty:500,
            views: 430
        },
        {
            name: "Ellen",
            qty:2,
            views: 6
        },
        {
            name: "Klaus",
            qty:67,
            views: 13
        },
        {
            name: "Clayton",
            qty:1000,
            views: 500
        },
        {
            name: "Janinha",
            qty:10,
            views: 30
        },

    ]


    return (
        <Container>
            {array.map((item) => (
                <ItemSty>
                <div className="name"> <span style={{fontWeight: 700}}>1. {item.name} </span>-  {item.qty} links  -  {item.views} visualizações</div>
                </ItemSty>
            ))}
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

