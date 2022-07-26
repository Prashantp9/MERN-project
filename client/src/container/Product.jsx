import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import { useState, useContext ,useEffect} from "react";

import {mobile} from "../Responsive"
import notecontext from "../context/productcontext";
import { useLocation } from "react-router-dom";
import { addproduct } from "../Redux/cart";
import { whishlistproduct } from "../Redux/whishlist"
import { useDispatch } from "react-redux";
import BookmarkIcon from '@mui/icons-material/Bookmark';
 
const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection:"column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const Filtercolorm = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.div`
  margin-left: 17px;
  padding: 9px;
`;

const FilterSizeOption = styled.option`
 `;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #f8f4f4;
  }
`;



const Product = () => {
  let counta = 0 ;
  const addwhishlist = ()=>{
    // setcount(count + 1)
    counta =+ 1
    dispatch(whishlistproduct({...product,counta}))
  }
  
  
  
  
  const dispatch = useDispatch()
  
  const [product, setproduct] = useState({})
  const [productquantity, setquantity] = useState(0)
  
  
  // const context = useContext(notecontext)
  // const { products ,selectedproduct }= context;
  // useEffect(() => {
    //   selectedproduct()
    // }, [])
    // console.log(products)
    console.log(product)

    const Location = useLocation()
    const id = Location.pathname.split("/")[2]

    useEffect(()=>{
      const selectedproduct = async ()=>{
        const response = await fetch(`http://localhost:5000/api/product/selectedproduct/${id}`, {
          // Default options are marked with *
          method: "GET",
          headers: {  
            'Content-Type': 'application/json',
            'auth-token':
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMjZmZGUyNmIwYTk4OGQ1NDQzMWEwZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NjcyMjg2MX0.WAGcIIGXWoGeV05Z_QJfPRKk7t5VK39yOxcnEiThu0Y"
    
          }
    
    
        });
        const json = await response.json()
        setproduct(json)
      }
      selectedproduct();
    },[id])

    const handlequantity = (type) =>{
           if(type === "dec"){
             setquantity(productquantity-1)
           }
           else if(type === "inc"){
             setquantity(productquantity+1)
           }
    }

    
    const handlecart = ()=>{
      dispatch(addproduct({ ...product , productquantity }))
    }

   
    

  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>
             {product.description}
          </Desc>
          <Price>{product.price}</Price>
          <FilterContainer>
            {/* <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color.map((c)=>{
                <Filtercolorm color={c}></Filtercolorm>
              })
              }
               
            
            </Filter> */}
            
            <Filter>
              {/* <FilterTitle>Size</FilterTitle>
              <FilterSize>
                {product.size.map((s)=>{
                  <FilterSizeOption>{s}</FilterSizeOption>
                })}
              </FilterSize> */}
              
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={()=> handlequantity("dec")} />
              <Amount>{productquantity}</Amount>
              <Add  onClick={()=> handlequantity("inc")}/>
            </AmountContainer>
            <Button onClick={handlecart}>ADD TO CART</Button>
            <BookmarkIcon onClick={addwhishlist} id="bookmark" style={{"height": "3rem","width":"3rem"}}
             ></BookmarkIcon>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default Product;