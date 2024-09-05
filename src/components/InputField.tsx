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
    validApiAddress: boolean
    error: string
};


const InputField: React.FC<InputProps> = ({handleInputChange, handleSubmit, validApiAddress, error}) => {
    return (
        <Box sx={boxStyle}>
            <Typography mt={5} mb={5} variant="h4" color={"white"} align="center" fontFamily="Rubik, sans-serif">
                IP Address Tracker
            </Typography>
            <Paper
                sx={paperStyle}
            >
                <InputBase
                    sx={inputBaseStyle}
                    placeholder="Search for any IP address or domain"
                    onChange={handleInputChange}
                    error={validApiAddress}
                />

                <form onClick={handleSubmit}>
                    <IconButton sx={iconButtonStyle} type="submit">
                        <ArrowForwardIosIcon fontSize="small"/>
                    </IconButton>
                </form>
            </Paper>
            {validApiAddress && (
                <Typography color={validApiAddress ? "white" : "textPrimary"}>{error}</Typography>
            )}
        </Box>

    );
};

export default InputField;