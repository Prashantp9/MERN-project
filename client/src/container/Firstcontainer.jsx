import React from 'react'
import styled from "styled-components"
import {mobile} from "../Responsive"





const Firstcontainer = () => {
   const Container = styled.div`
   ${mobile({height: "20px" , fontSize: "10px" })}
   height: 30px;
   background-color: teal;
   color: white;
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 14px;
   font-weight: 500;`
  return (
    <div>
     <Container>
       free shipping on order above 300/-
     </Container>
    </div>
  )
}

export default Firstcontainer;