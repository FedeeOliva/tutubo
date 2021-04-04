import React from 'react';
import {render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import Navbar from '../components/Navbar';
import { ThemeProvider } from 'emotion-theming';
import {themeDark} from '../config/theme';

const setKeyword = jest.fn();
const setTheme = jest.fn();

test('<Navbar/> Se realiza correctamente la busqueda',()=>{
	render(
		<ThemeProvider theme={themeDark}>
			<Navbar
				setKeyword={setKeyword}
				setTheme={setTheme}
				/>
		</ThemeProvider>
		)
	const input = screen.getByTestId('search-input');
	const submit = screen.getByTestId('search-submit');

	//No ejecutarse sin texto
	userEvent.click(submit);	
	expect(setKeyword).not.toHaveBeenCalled();

	//ejecutarse con texto
	userEvent.type(input, 'busqueda');
	expect(input).toHaveValue('busqueda')
	userEvent.click(submit);	
	expect(setKeyword).toHaveBeenCalled();
	expect(setKeyword).toHaveBeenCalledTimes(1);
	expect(setKeyword).toHaveBeenLastCalledWith('busqueda');
	expect(input).toHaveValue('')

	//ejecutarse con enter
	userEvent.type(input, 'busqueda{enter}');
	expect(setKeyword).toHaveBeenCalledTimes(2);
	expect(setKeyword).toHaveBeenLastCalledWith('busqueda');
	expect(input).toHaveValue('')
})


