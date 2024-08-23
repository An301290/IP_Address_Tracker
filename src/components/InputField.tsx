import React from 'react';
import {Box, Typography, Paper} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {boxStyle, paperStyle, inputBaseStyle, iconButtonStyle} from '../styles/styles';

const InputField = () => {
    return (
        <Box sx={boxStyle}>
            <Typography mt={5} mb={5} variant="h4" color={"white"} align="center" fontFamily="Rubik, sans-serif">
                IP Address Tracker
            </Typography>
            <form>
                <Paper
                    component="form"
                    sx={paperStyle}
                >
                    <InputBase
                        sx={inputBaseStyle}
                        placeholder="Search for any IP address or domain"
                    />
                    <IconButton sx={iconButtonStyle}>
                        <ArrowForwardIosIcon fontSize="small"/>
                    </IconButton>

                </Paper>
            </form>
        </Box>

    );
};

export default InputField;