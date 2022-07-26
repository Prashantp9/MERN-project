
  import styled from "styled-components";
  import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
  import Categories from "./Categories";
  import { mobile } from "../Responsive"
  import StyleProducts from "./StyleProducts"


  const Searchcontainer = styled.div` 
    ${mobile({height: "4vh" })}
    display: flex;
    height: 5vh;
    align-items: center;
    background-color: 
#25063e ;

  `;

  const Inputcontainer = styled.div`
    ${mobile({
      height: "22px",width: "60%" , margin: "0 0 0 60px",
      })}
    color: white;
    display: flex;
    height: 4vh;
    width: 30%;
    border-radius: 4px;
    border: 1px solid gray;
    opacity: 0.5;
    justify-content: center;
    margin-left: 450px; ;
  `;

  const Container = styled.div`
    ${mobile({height:"30vh",width:"100%",flexDirection:"column"})}
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: #e5e5e5;
    position: relative;
  `;

  

  

  const Slide = styled.div`
  ${mobile({height:"30vh",width:"100vw",})}
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: 
#25063e ;
color: grey;
  `;

  const ImgContainer = styled.div`
  ${mobile({height:"100%"})}
    display: flex;
    height: 100%;
    flex: 1;
  `;

  const Image = styled.img`
  ${mobile({height:"176px",marginTop: "5px"})}
    height: 80%;
  `;

  const InfoContainer = styled.div`
  ${mobile({height: "100%",width: "30%",padding: "6px"})}
    padding: 50px;
  `;

  const Title = styled.h1`
  ${mobile({fontSize: "12px"})}
    font-size: 70px;
  `;

  const Desc = styled.p`
  ${mobile({fontSize: "10px",margin: "0px"})}
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
  `;


 const Searchlogo = styled.label`
   ${mobile({})}`


  const Slider = () => {

 


    return (
      <div>
        <Searchcontainer>
          <Inputcontainer>
            <input type="text" className="navinput" style={{color: "white",background: "unset" ,width: " 100%" }} />
            <Searchlogo>
            <SearchOutlinedIcon
              style={{  color: "white", cursor: "pointer"}}
              className="mx-1"
            />
            </Searchlogo>
          </Inputcontainer>
        </Searchcontainer>
        <Container>
         
          
              <Slide bg={"rgb(240,240,240)"}>
                <ImgContainer>
                  <Image src="https://images.unsplash.com/photo-1581591524425-c7e0978865fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
                </ImgContainer>
                <InfoContainer>
                  <Title>camera</Title>
                  <Desc>Digital Cameras from Top brands like Canon, Sony, Fujifilm, GoPro and Many more ! Buy Best Digital Cameras </Desc>
                  
                </InfoContainer>
              </Slide>
            
         
        </Container>
        <Categories />
        <StyleProducts/>
      </div>
    );
  };

  export default Slider;
