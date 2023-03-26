import { render, screen } from '@testing-library/react';
import { ThemeProvider } from "emotion-theming";
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import NavbarComponent from '../components/Navbar';
import {themeDark} from '../config/theme';



describe('Navbar tests', ()=> {
    const setKeyword = jest.fn();
    const setTheme = jest.fn()
    beforeEach(()=>{
        render(
        <ThemeProvider theme={themeDark}>
            <NavbarComponent setKeyword={setKeyword} setTheme={setTheme}/>
        </ThemeProvider>)
    });

    test('Shouldn\'t search for empty query',async ()=>{        
        const searchButton = screen.getByRole('button', {name:/busqueda/i})  
        await userEvent.click(searchButton);
        expect(setKeyword).not.toBeCalled()
    })

    test('Shouldn\'t search for blank spaces',async ()=>{        
        const searchButton = screen.getByRole('button', {name:/busqueda/i})        
        const inputSearch = screen.getByPlaceholderText('Buscar...')  
        await userEvent.type(inputSearch, '   ')
        await userEvent.click(searchButton);
        expect(setKeyword).not.toBeCalled()
    })

    test('Should search for a query when the search button is clicked', async () =>{
        const inputSearch = screen.getByPlaceholderText('Buscar...')
        const searchButton = screen.getByTestId('search-submit')
        await userEvent.type(inputSearch, "search" )
        await userEvent.click(searchButton);
        expect(setKeyword).toHaveBeenCalled();
        expect(setKeyword).toHaveBeenCalledWith('search')
    })

    test('Should search for a query when the enter button is pressed', async () =>{
        const inputSearch = screen.getByPlaceholderText('Buscar...')
        await userEvent.type(inputSearch, "search{enter}" )
        expect(setKeyword).toBeCalled()
        expect(setKeyword).toHaveBeenCalledWith('search')
    })

})