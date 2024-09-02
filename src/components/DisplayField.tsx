import React from 'react';
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import {dividerStyle, paperStyle, paperStyleDisplayField} from "../styles/styles";


const DisplayField = () => {
    return (
        <Paper
            component="form"
            sx={paperStyleDisplayField}
        >
            <InputBase
                sx={{ml: 1, flex: 1}}
                placeholder="IP Address"
            />
            <Divider sx={dividerStyle} orientation="vertical"/>
            <InputBase
                sx={{ml: 1, flex: 1}}
                placeholder="Location"
            />
            <Divider sx={dividerStyle} orientation="vertical"/>
            <InputBase
                sx={{ml: 1, flex: 1}}
                placeholder="Time Zone"
            />
            <Divider sx={dividerStyle} orientation="vertical"/>
            <InputBase
                sx={{ml: 1, flex: 1}}
                placeholder="ISP"
            />
        </Paper>

    );
};

export default DisplayField;