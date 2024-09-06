import React, {useState} from 'react';
import 'leaflet/dist/leaflet.css';
import {Box} from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import InputField from "./components/InputField";
import Map from "./components/Map";
import DisplayField from "./components/DisplayField";

function App() {
    const [data, setData] = useState<any>({});
    const [ipAddress, setIpAddress] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const [validApiAddress, setValidApiAddress] = useState<boolean>(false);

    const handleChangedIpAddress = async (ip: string) => {
        setLoading(true);
        setError('');
        try {
            const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_YhRH17cSlXGumTDNH3JsW2LbOAKDh&ipAddress=${ip}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            console.log("result", result);
            setData(result);
            setIpAddress(ip);
            setLoading(false);
        } catch (error: any) {
            console.error('Error fetching IP data:', error);
            setError(error.message || 'An error occurred');
        } finally {
            setLoading(false);
        }
    };
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIpAddress(event.target.value);
    };

    const isValidIpAddress = (ip: string): boolean => {
        const ipRegex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        return ipRegex.test(ip);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (isValidIpAddress(ipAddress)) {
            handleChangedIpAddress(ipAddress);
            setValidApiAddress(false)
        } else {
            setError('Invalid IP address format');
            setValidApiAddress(!validApiAddress)
        }
        setIpAddress("");
    };
    if (loading) {
        return <Box><LinearProgress/></Box>;
    }

    return (
        <Box sx={{
            height: '100vh',
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#4E56B7',
            backgroundSize: 'cover',
            position: 'relative',
        }}>
            <Box sx={{flex: '0 0 35%'}}>
                <InputField ipAddress={ipAddress} handleInputChange={handleInputChange} handleSubmit={handleSubmit}
                            validApiAddress={validApiAddress} error={error}/>
            </Box>
            < DisplayField data={data}/>
            <Box sx={{flex: '0 0 65%'}}>
                <Map data={data}/>
            </Box>
        </Box>
    );
}

export default App;









