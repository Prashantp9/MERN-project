import React from 'react'
import styled from "styled-components"
import CategoriesItems from './CategoriesItems'
import { categories } from './data'
import {mobile} from "../Responsive"


const Container = styled.div`
  ${mobile({flexDirection: "column", margin: "0 0 0 0px"})}
   
   display: flex;
   padding: 20px;
   justify-content: space-between;
   background-color:#e5e5e5 ;

`

const Categories = () => {
  return (
    <Container>
       {categories.map(items=>(
           <CategoriesItems items={items}/>
       ))} 
    </Container>

  )
}

export default Categories