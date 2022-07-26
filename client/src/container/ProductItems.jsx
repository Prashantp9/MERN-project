import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import Rate from "./Rate";
import { useEffect, useState, useContext} from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import notecontext from "../context/productcontext"
import BookmarkIcon from '@mui/icons-material/Bookmark';


// const Container = styled.div`
//  flex: 1;
//  padding: 15px;
//  margin: 1px 1px 1px 5px;
//  width: 250px;
//  max-width: 250px;
//  height: 350px;
//  display: flex;
//  align-items: center;
//  justify-content: center;
//  flex-direction: column;
//  background-color: f0f0f0;
//  `
const Image = styled.img` 
    transition: transform .1s;
    height: 11rem;
     width: 11rem;
     margin: 15px ;
  &:hover{
  transform: scale(1.1);
  }
 `;

const Container = styled.div`
 margin: 4px ;
`;

const Info = styled.div`
  padding: 10px;
`;
const Card = styled.div`
  margin-right: 36px ;
   width: 100%;
   height: 100%;
  
`;
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
    const Bottomline = styled.div`
    display: flex;
    justify-content: space-around;
    ` 

const ProductItems =(props) => {
 

  const cat = props.cat
  const filter = props.filter.categories
  
  const initialproducts = []
  const[products,setproducts] = useState(initialproducts)
  const fetchProduct = async () => {
    const response = await fetch( props.manage ? `http://localhost:5000/api/product?category=${filter}`:"http://localhost:5000/api/product/getproduct/6226fde26b0a988d54431a0e" , 
    // "http://localhost:5000/api/product/getproduct/6226fde26b0a988d54431a0e"
	{
      // Default options are marked with *
      method: "GET",
      headers: {  
        'Content-Type': 'application/json',
        'auth-token':
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMjZmZGUyNmIwYTk4OGQ1NDQzMWEwZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NjcyMjg2MX0.WAGcIIGXWoGeV05Z_QJfPRKk7t5VK39yOxcnEiThu0Y"

      }


    });
    const json = await response.json()
    setproducts(json)


  }

 
 
  // const context = useContext(notecontext);
  // const { fetchProduct, products }=context;
  useEffect(()=>{
    fetchProduct();
  },[cat])

 

   

 
  
    const  renderList  = products.map((product)=>{
      const {_id , title, img, price} = product
      return(
        <Container>
        <Card>
          <Image
            src={img}
            key={_id}
          />
  
          <Info>
           <p className="card-text">{title.slice(0,12).toUpperCase()}</p>
            <h5>₹{price}.00</h5>
            <Bottomline>
            <View>
        <Link to={`/product/${_id}`} style={{textDecoration: "none",color: "white"}}><p>view product</p></Link>
       </View> 
       <BookmarkIcon style={{"color": "rgb(204,3,30)"}}></BookmarkIcon>
       
       </Bottomline>
          
          </Info>
        </Card>
      </Container>
      )
      })
     
   
   



    
  return (
    <>
    {renderList}
    </>
   
  );
};

export default ProductItems;
