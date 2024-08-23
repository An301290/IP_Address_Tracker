import React from 'react';
import 'leaflet/dist/leaflet.css';
import {Box} from '@mui/material';
import backgroundImage from "../src/assets/images/pattern-bg-desktop.png";
import InputField from "./components/InputField";
import Map from "./components/Map";

function App() {
    return (
        <Box sx={{
            height: '100vh',
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover'
        }}>
            <Box sx={{flex: '0 0 30%'}}>
                <InputField/>
            </Box>
            <Box sx={{flex: '1 0 70%'}}>
                <Map/>
            </Box>
        </Box>
    );
}

export default App;









