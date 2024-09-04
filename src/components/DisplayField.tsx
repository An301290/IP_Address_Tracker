import React from 'react';
import {Box, Paper} from '@mui/material';
import InputBase from "@mui/material/InputBase";
import InputLabel from "@mui/material/InputLabel";
import Divider from "@mui/material/Divider";
import {dividerStyle, paperStyle, paperStyleDisplayField} from "../styles/styles";

type DisplayFieldProps = {
    data: {
        ip: string;
        isp: string;
        location?: {
            city?: string;
            country?: string;
            timezone?: string;
        }
    }
};

const DisplayField: React.FC<DisplayFieldProps> = ({data}) => {
    const city = data.location?.city ?? '';
    const country = data.location?.country ?? '';
    const timeZone = data.location?.timezone ?? '';
    return (
        <Paper
            component="form"
            sx={paperStyleDisplayField}>
            <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <InputLabel htmlFor="ip">IP Address</InputLabel>
                <InputBase
                    sx={{ml: 1, flex: 1}}
                    value={data.ip}
                    readOnly={true}
                />
            </Box>
            <Divider sx={dividerStyle} orientation="vertical"/>
            <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <InputLabel htmlFor="location">Location</InputLabel>
                <InputBase
                    sx={{ml: 1, flex: 1}}
                    value={`${city}, ${country}`}
                    readOnly={true}
                />
            </Box>
            <Divider sx={dividerStyle} orientation="vertical"/>
            <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <InputLabel htmlFor="timezone">Time Zone</InputLabel>
                <InputBase
                    sx={{ml: 1, flex: 1}}
                    value={timeZone}
                    readOnly={true}
                />
            </Box>
            <Divider sx={dividerStyle} orientation="vertical"/>
            <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <InputLabel htmlFor="isp">ISP</InputLabel>
                <InputBase
                    sx={{ml: 1, flex: 1}}
                    value={data.isp}
                    readOnly={true}
                />
            </Box>
        </Paper>

    );
};

export default DisplayField;