
import styled from "styled-components";
import {mobile} from "../Responsive"
import { useDispatch, useSelector } from "react-redux";
import { Add, Remove } from "@mui/icons-material";
import { useState } from "react";
import { addproduct } from "../Redux/cart";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  margin-bottom: 1rem;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
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

const BookMark = () => {

   
  const [productquantity, setquantity] = useState(0)

  const handlequantity = (type) =>{
    if(type === "dec"){
      setquantity(productquantity-1)
    }
    else if(type === "inc"){
      setquantity(productquantity+1)
    }
}
   
   const dispatch = useDispatch()
   function handlecart(id){
       const Nproduct =  products.filter((items)=>{
          return   items._id == id
        }) 
        dispatch(addproduct({ ...Nproduct[0] , productquantity }))
  }

   const whishlist = useSelector(state=>state.whishlist)
  //  console.log(whishlist.counter)
  const products = whishlist.products
  return (
    <Container>
      <Wrapper>
        <Title>FAVOURITES</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Your Wishlist</TopText>
          </TopTexts>
        </Top>
        <Bottom>
          <Info>
            {products.map( items=>(
            

            <Product>
              <ProductDetail>
                <Image src={items.img} />
                <Details>
                  <ProductName>
                    <b>Product:</b> {items.title}
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> {items._id}
                  </ProductId>
                  <ProductSize>
                   
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
               <ProductPrice>Rs{items.price}.00 </ProductPrice>
              <input onClick={()=> handlecart(items._id)} className="btn-primary" style={{"height":"2rem"}}type="button" value="Add to cart" />
              </PriceDetail>
              <AmountContainer>
              <Remove onClick={()=> handlequantity("dec")} />
              <Amount>{productquantity}</Amount>
              <Add  onClick={()=> handlequantity("inc")}/>
            </AmountContainer>
            </Product>
            ))}
            <Hr />
           
          </Info>
         
        </Bottom>
      </Wrapper>
      
    </Container>
  );
};

export default BookMark;