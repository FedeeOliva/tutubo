import React, {useState} from 'react';
import {Navbar, NavbarBrand, Form,
NavbarContainer, FormInput, Submit} from './style';
const NavbarComponent = ({setKeyword}) => {

	const [search, setSearch] = useState('');


	const handleChange = e => {
		setSearch(e.target.value);
	}
	const handleSubmit = e => {
		e.preventDefault();
		if( search.trim() === '') return;		
		setKeyword(search);
		setSearch('');
	}

  return (

    <Navbar>
    	<NavbarContainer>
	    	<NavbarBrand>
	                <i className="fab fa-youtube"></i>
	                TuTubo
	        </NavbarBrand>
	        <Form onSubmit={handleSubmit}>
	            <FormInput
	               	type="search" 
	                placeholder="Search" 
	                name="inputBusqueda"
	                onChange={handleChange}
	                value={search}
	            />
	            <Submit type="submit">
	                <i className="fas fa-search"></i>
	            </Submit>
	        </Form>
        </NavbarContainer>
    </Navbar>
  )
}

export default NavbarComponent;