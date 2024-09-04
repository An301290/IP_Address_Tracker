import React from 'react';
import {Box, Typography, Paper} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {boxStyle, paperStyle, inputBaseStyle, iconButtonStyle} from '../styles/styles';

type InputProps = {
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    ipAddress: string;

};


const InputField: React.FC<InputProps> = ({handleInputChange, handleSubmit, ipAddress}) => {
    return (
        <Box sx={boxStyle}>
            <Typography mt={5} mb={5} variant="h4" color={"white"} align="center" fontFamily="Rubik, sans-serif">
                IP Address Tracker
            </Typography>
            <form onClick={handleSubmit}>
                <Paper
                    component="form"
                    sx={paperStyle}
                >
                    <InputBase
                        sx={inputBaseStyle}
                        placeholder="Search for any IP address or domain"
                        onChange={handleInputChange}
                    />
                    <IconButton sx={iconButtonStyle} type="submit">
                        <ArrowForwardIosIcon fontSize="small"/>
                    </IconButton>

                </Paper>
            </form>
        </Box>

    );
};

export default InputField;