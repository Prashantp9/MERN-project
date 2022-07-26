import React from 'react'
import "./filterf.css"
import { useState } from 'react'
import { useDispatch } from "react-redux";
import { filteredproduct } from "../Redux/filter"

const Filterf = (props) => {

	const dispatch = useDispatch()
	const [filter, setfilter] = useState({})
	
	
	const AddFilter =()=>{
		console.log(filter)
		dispatch(filteredproduct({...filter}))
	}   
	
	const handleFilter = (e)=>{
		const value = e.target.value;
		setfilter({
			[e.target.name] : value,
		})
	}
    
	
	AddFilter();

	const products = props.products;
	// console.log("filter",products)
	
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
	// console.log(farray)
	


	  
  return (
    
  
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
	</div>

	
	</div>

   
  )
}

export default Filterf