import React from 'react';
import {render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import BtnSwitch from '../components/BtnSwitch';

const setTheme = jest.fn();

test('<BtnSwitch/> Cambia el theme', () => {
	render(
		<BtnSwitch
			setTheme={setTheme}
			/>
		)

	const switchTheme = screen.getByTestId('switch-theme');
	userEvent.click(switchTheme);
	expect(setTheme).toHaveBeenCalled();
	expect(setTheme).toHaveBeenCalledTimes(2);
	expect(setTheme).toHaveBeenLastCalledWith(false);

	userEvent.click(switchTheme);
	expect(setTheme).toHaveBeenCalledTimes(3);
	expect(setTheme).toHaveBeenLastCalledWith(true);	
})