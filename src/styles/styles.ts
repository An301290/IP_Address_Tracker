export const boxStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: "100%",
    alignItems: "center",
};

export const paperStyle = {
    display: 'flex',
    alignItems: 'center',
    width: {xs: '100%', sm: 400, md: 500},
    height: {xs: 'auto', sm: 60, md: 50},
    borderRadius: '4px',
};

export const inputBaseStyle = {
    ml: 1,
    flex: 1,
};

export const iconButtonStyle = {
    p: '10px',
    backgroundColor: '#333',
    width: {xs: '20%', sm: 40, md: 50},
    height: {xs: 'auto', sm: 60, md: 50},
    color: 'white',
    '&:hover': {
        backgroundColor: '#555',
    },
    borderRadius: '0 4px 4px 0',
};
