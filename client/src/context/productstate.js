import { useState } from "react";
import notecontext from "./productcontext";

const ProductState =(props)=>{
 const initialnotes = [];
 const [products,setproducts] = useState(initialnotes)

 //getproducts
 const fetchProduct = async () => {
    const response = await fetch("http://localhost:5000/api/product/getproduct/6226fde26b0a988d54431a0e", {
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

  const selectedproduct = async ()=>{
    const response = await fetch("http://localhost:5000/api/product/selectedproduct/6253de6fc092a109f00d628f", {
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

  return (
    <notecontext.Provider value={{ fetchProduct , selectedproduct, products }}>
      {props.children}
    </notecontext.Provider>
  );

}
export default ProductState;