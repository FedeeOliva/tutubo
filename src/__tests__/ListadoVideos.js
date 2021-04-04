import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { ThemeProvider } from 'emotion-theming';
import {themeDark} from '../config/theme';
import ListadoVideos from '../components/ListadoVideos';
import {apiResponse} from '../__mocks__/RespuestaApi';

test('<ListadoVideos/>', () => {
});