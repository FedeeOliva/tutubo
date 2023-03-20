import { render, screen } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom/extend-expect';
import '../__mocks__/intersectionObserverMock';
import '../__mocks__/matchMediaMock'


test('<App/> se renderiza', () => {
	render(<App/>)
	const elem = screen.getByText(/tutubo/i);
	expect(elem).toBeInTheDocument();
});