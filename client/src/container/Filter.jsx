
import React from "react";
import styled from "styled-components";
import "./filter.css"

const Container = styled.div`
display: flex;
padding: 7px;
flex-direction: column;
align-items: center;
width: 50vh;
height: 100vh;
border-right: 1px solid gray;
`

const Linear = styled.li`
display: flex; 
flex-direction: column;
justify-content: space-between;
margin: 7px;
list-style: none;
&:hover{
  cursor: pointer ;
}

`
const Thing = styled.li`
margin: 5px;
transition: transform .1s;
&:hover{
  transform: scale(1.1);
}`






const Filter = () => {

  return (
    <Container>
      <h6>Filter by categories</h6>
      <Linear>

        <Thing> <li>electronic </li></Thing>
        <Thing> <li>groceries </li></Thing>
        <Thing> <li>fashion and style </li></Thing>
        <Thing> <li>Home esentials </li></Thing>
        <Thing> <li>footwears</li></Thing>

      </Linear>


    </Container>

  );
};

export default Filter;
