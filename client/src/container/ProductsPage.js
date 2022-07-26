import styled from "styled-components"
import ProductItems from "./ProductItems"
import Filter from "./Filter"
import { useEffect,useContext} from "react"
import notecontext from "../context/productcontext"
import Filterf from "./Filterf"
//filter imports
import "./filterf.css"
import { useState } from 'react'
import { useDispatch } from "react-redux";
import { filteredproduct } from "../Redux/filter"


const Container = styled.div`
 margin-left: 1.5rem;
 display: grid;
 grid-template-columns: 1fr 1fr 1fr 1fr 1fr  ;
 grid-column-gap: 1rem;
 `



const Productlist = styled.div`
  display: flex;
  flex-direction: column;
  `


const ProductsPage = () => {
//   const context = useContext(notecontext);
  const initialproducts = [];
  const [products,setProducts] = useState(initialproducts)
  const [Manage,SetManage]= useState(false)
//const { fetchProduct, products }=context;/

const fetchProduct = async () => {
    const response = await fetch("http://localhost:5000/api/product/getproduct/6226fde26b0a988d54431a0e", 
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
    setProducts(json)


  }
  useEffect(() => {
    fetchProduct();
  }, [])



  //filterpage js
  const dispatch = useDispatch()
	const [filter, setfilter] = useState({})
	
	
	const AddFilterr =()=>{
		// dispatch(filteredproduct({...filter}))
		SetManage(true)
		console.log("this is working")
	}   


	
	const handleFilter = (e)=>{
		const value = e.target.value;
		setfilter({
			[e.target.name] : value,
		})
		
	}
    
	
	

  const FCategories = []
	const FilterCategories = ()=>{
		
		for(let i=0;i < products.length; i++){
			let producta = products[i].categories
			for(let j=0;j < producta.length; j++){
				FCategories.push(producta[j])
			}
		}
	}
	products && FilterCategories()
	function removeDuplicates(arr) {
        return arr.filter((item,
            index) => arr.indexOf(item) === index);
    }
	const farray = removeDuplicates(FCategories)
  //end
 
 
 
  
  // console.log("products:", products)

  return (
    <Productlist>

    {/* <Filterf  products={products}/> */}
    <div className="container1">
      <div className="searchbox">
		<div className="widthcontainter">
		<div className="inputarea">
			<input type="text" placeholder='search' />
		</div>
		<div className="searchbutton">
			<button className='buttonP'>search</button>
		</div>
		</div>
	  </div>
	  <div className="filter">
<div className="filterarea">
	<select  name="categories" className='buttonP margin' onChange={handleFilter}>
		{farray.map((items)=>{
			return(
			<option>{items}</option>
			)
		})}
		
	</select>
	<select className='buttonP margin' name="category" id="">
		<option disabled >sort products</option>
		<option value="newest">newest</option>
		<option value="">price</option>
	</select>
	<select className='buttonP margin' name="category" id="">
		<option value="">electronic</option>
		<option value="">fashion</option>
		<option value="">breakfast</option>
	</select>
	<select className='buttonP margin' name="category" id="">
		<option value="">electronic</option>
		<option value="">fashion</option>
		<option value="">breakfast</option>
	</select>
	</div>
	<input type="button" onClick={AddFilterr} className="buttonP" value="Apply" />
	</div>

	
	</div>

      <Container>


        <ProductItems  manage={Manage}  cat={AddFilterr}  filter ={filter} />


      </Container>

    </Productlist>
  )
}

export default ProductsPage;
 // const dispatch = useDispatch()
  // const products = useSelector((state) => state.allProducts.products)

  // const fetchProduct = async () => {
  //   const response = await fetch("http://localhost:5000/api/product/getproduct/6226fde26b0a988d54431a0e", {
  //     // Default options are marked with *
  //     method: "GET",
  //     headers: {  
  //       'Content-Type': 'application/json',
  //       'auth-token':
  //         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMjZmZGUyNmIwYTk4OGQ1NDQzMWEwZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NjcyMjg2MX0.WAGcIIGXWoGeV05Z_QJfPRKk7t5VK39yOxcnEiThu0Y"

  //     }


  //   });
  //   const json = await response.json()
  //   dispatch(setProducts(json))


  // }