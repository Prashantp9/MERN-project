import styled from "styled-components"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";



const Rate = () => {

 
  const Container = styled.div`
    margin-left: 20px;
    height:  20%;
    width: 80%;
    display: flex;
    justify-content:center;
    align-items: center;
    ;
    `
    const View = styled.div`
    font-family: 'Urbanist', sans-serif;
    display: flex ;
    justify-content:center;
    height: 27px;
    width:110px ;
    border:1px solid gray;
    margin-right: 5px;
    background-color:rgb(204,3,30) ;
    color: white ;
    border-radius: 5px;
    &:hover{
      cursor: pointer;
    }
    `
    const Like =styled.div`
     display: flex ;
    justify-content:center;
    align-items: center;
    height: 27px;
    width:33px ;
    border:1px solid gray;
    background-color:rgb(204,3,30) ;
    color: white ;
    border-radius: 5px;
    &:hover{
      cursor: pointer;
    }
    `
  return (
    <Container>

      <View>
        <Link to="/product" style={{textDecoration: "none",color: "white"}}><p>view product</p></Link>
      </View>
      <Like>
       <FavoriteBorderIcon/>

      </Like>


    </Container>
  )
}

export default Rate