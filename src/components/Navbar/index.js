import React, {useState} from 'react';
import BtnSwitch from '../BtnSwitch';
import {Navbar, NavbarBrand, Form,
NavbarContainer, FormInput, Submit,
InputGroup,BtnCerrar, BtnAbrir} from './style';
const NavbarComponent = ({setKeyword, setTheme}) => {

	const [search, setSearch] = useState('');
	const [abrir, setAbrir] = useState(false)

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
	        <Form 
	        	onSubmit={handleSubmit}
	        	style={abrir? {top: 0, zIndex: 10} : null}
	        	>
	        	<BtnCerrar
	        		onClick={() => setAbrir(false)}
	        		>
	        		<i className="fas fa-arrow-left"></i>
	        	</BtnCerrar>
	        	<InputGroup>	        		
		            <FormInput
		            	data-testid="search-input"
		               	type="search" 
		                placeholder="Buscar..." 
		                name="inputBusqueda"
		                onChange={handleChange}
		                value={search}
		            />		            
		            <Submit 
		            	data-testid="search-submit"
		            	type="submit">
		                <i className="fas fa-search"></i>
		            </Submit>
	            </InputGroup>
	        </Form>
	        <BtnSwitch 
	        	setTheme={setTheme}
	        />
	        <BtnAbrir
	        	onClick={() => setAbrir(true)}
	        	>
	        	<i className="fas fa-search"></i>
	        </BtnAbrir>
        </NavbarContainer>
    </Navbar>
  )
}

export default NavbarComponent;