import styled from "styled-components";

export default function LinkList() {
    return (
        <Container>
            
            <UserSty>
                <span style={{fontWeight: 700}}>Nome </span>-  500 links  -  1.700.220 visualizações
            </UserSty>

            <ListItem>
                <p> Short URL </p>
                <p> Original URL </p>
                <p> Views </p>
            </ListItem>
            
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
const UserSty = styled.div`
    display: flex;;
    font-family: 'Lexend Deca';
    font-weight: 500;
    font-size: 22px;
    line-height: 28px;
    color: #000000;
    margin-bottom: 10px;
   
`
const ListItem = styled.div`
    display: flex ;
    flex-direction: column;
    justify-content: space-between;
    width: 96%;
    height: 105px;
    background-color: #FFFFFF;
    margin: 18px 0 18px 18px;
    padding:18px;
    border: 1px solid rgba(120, 177, 89, 0.25);
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 24px;

`

