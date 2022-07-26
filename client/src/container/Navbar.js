    import React from 'react'
    import "./Navbar.css"
    import Badge from '@mui/material/Badge';
    import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
    import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
    import styled from "styled-components"
    import StorefrontIcon from '@mui/icons-material/Storefront';
    import { Link } from 'react-router-dom';
    import {useSelector} from "react-redux"








    function Navbar(props) {

        const quantity = useSelector(state=>state.cart.quantity)
        const count = useSelector(state=>state.whishlist.counter)


        

        return (
            <>
                <div>
                    <nav className={`customnav-${props.mode}`}>
                        <div className="navcontainer">
                            <StorefrontIcon className="logo" />
                            <h5 className={`navcntxt-${props.mode}`} >storemanger</h5>
                            <Link to="/orders" className={`navcntxtlow-${props.mode}`}>products</Link>
                            <a href="/" className={`navcntxtlow-${props.mode} mx-3`}>about</a>

                            <Link className='navlink' style={{color: props.mode == "light" ? "black": "white"}} to="/register">Register</Link>
                            <Link className='navlink' style={{color: props.mode == "light" ? "black": "white"}}  to="/signin">Sign In</Link>
                            <div id="rightbox" className="rightcontainer">

                                <div className="checker form-check form-switch">
                                    <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                    <label id="modename" className="form-check-label" for="flexSwitchCheckDefault">Mode</label>
                                </div>
                                <Badge className='mx-2 badges' badgeContent={count} color="secondary">
                                   <Link to="/bookmark"> <BookmarkBorderOutlinedIcon color="white" /></Link>
                                </Badge>
                                <Badge className= "badges"badgeContent={quantity} color="secondary">
                                 <Link to="/cart"><ShoppingCartOutlinedIcon color="white" /></Link>
                                </Badge>
                            </div>
                        </div>
                    </nav>

                </div>
            </>
        )
    }

    export default Navbar