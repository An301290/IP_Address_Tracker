import backgroundImage from "./assets/images/pattern-bg-desktop.png";


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

export const paperStyleDisplayField = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: {xs: 'column', sm: 'row'},
    width: {xs: '50%', sm: 700, md: 800},
    height: {xs: '40%', sm: 100, md: 90},
    borderRadius: '5px',
    position: 'fixed',
    zIndex: 9999,
    top: {xs: '180px', sm: 200, md: 200},
    left: {xs: '90px', sm: 'calc(50% - 350px)', md: 'calc(50% - 400px)'},
};

export const dividerStyle = {
    height: 45, m: 0.5, display: {xs: 'none', sm: 'block'}
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
