import styled from "styled-components"
import {mobile} from "../Responsive"

const Container = styled.div`
  ${mobile({})}
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;


 
`
const Image = styled.img`
${mobile({height: "30vh"})}
 width: 100%;
 height: 100%;
 object-fit: cover; `
const Title = styled.h1`
 `
const Info = styled.div`
position: absolute;
top: 0;
left: 0;
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: white;


  `
const Button = styled.button`
background-color: unset;
border-radius: 5px`


const CategoriesItems = ({items}) => {
  return (
    <Container>
       <Image src={items.img}/>
       <Info>
           <Title>{items.title}</Title>
           <Button> SHOP NOW </Button>
       </Info>
    </Container>
  )
}

export default CategoriesItems