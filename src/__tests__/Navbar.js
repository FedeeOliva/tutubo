import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider } from "emotion-theming";
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import NavbarComponent from '../components/Navbar';
import {themeDark} from '../config/theme';
import mediaQuery from "css-mediaquery";

// function createMatchMedia(width) {
//   return (query) => {
//     return {
//       matches: mediaQuery.match(query, { width }),
//       media: "",
//       addListener: () => {},
//       removeListener: () => {},
//       onchange: () => {},
//       addEventListener: () => {},
//       removeEventListener: () => {},
//       dispatchEvent: () => true,
//     };
//   };
// }

// function resizeScreenSize(width) {
//   window.matchMedia = createMatchMedia(width);
// }


describe('Navbar tests', ()=> {
    const setKeyword = jest.fn();
    const setTheme = jest.fn()

    beforeEach(()=>{
        render(
        <ThemeProvider theme={themeDark}>
            <NavbarComponent setKeyword={setKeyword} setTheme={setTheme}/>
        </ThemeProvider>)
    });

    test('Shouldn\'t search for empty query',()=>{        
        const searchButton = screen.getByRole('button', {name:/busqueda/i})        
        userEvent.click(searchButton);
        expect(searchButton).toHaveStyle('display: block')
        expect(setKeyword).not.toBeCalled()
    })

    test('Should search for a query when the search button is clicked', () =>{
        const inputSearch = screen.getByPlaceholderText('Buscar...')
        const searchButton = screen.getByTestId('search-submit')
        userEvent.type(inputSearch, "search" )
        userEvent.click(searchButton);
        expect(setKeyword).toHaveBeenCalled();
    })

    test('Should search for a query when the enter button is pressed', () =>{
        const inputSearch = screen.getByPlaceholderText('Buscar...')
        userEvent.type(inputSearch, "search{enter}" )
        expect(setKeyword).toBeCalled()
    })

})