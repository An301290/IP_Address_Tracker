import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import '@fontsource/rubik';
import App from './App';

const theme = createTheme({
    typography: {
        fontFamily: 'Rubik, sans-serif',
    },
});

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <ThemeProvider theme={theme}>
        <App/>
    </ThemeProvider>,
);

