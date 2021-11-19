import { Button } from '@mui/material';
import { green } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/system';

const globalUseStyles = makeStyles(() => ({
    mintButton: {
        color: '#fff',
        background: '#006b94',
        border: '1px solid #006b94',
        marginTop: 10,
        fontSize: 20,
        letterSpacing: 1,
        textTransform: "none",
        fontWeight: 700,
        '&:hover': {
            background: '#00445f',
            color: '#fff',
            borderColor: "#00445f"
        },
        '&:disabled': {
            color: 'transparent',
            background: '#004964',
            border: '1px solid #004964',
        },
        '& span': {
            color: "#fff",
            width: 20,
            height: 20
        }
    },
    userCard: {
        marginTop: 20,
        marginRight: "auto",
        marginLeft: "auto",
        width: 360
    },
    coverImage: {
        width: "100%"
    },
    addressText: {
        fontWeight: 900,
        textAlign: "center",
        fontSize: 22,
        paddingTop: 15,
        paddingBottom: 15
    },
    balanceText: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 15,
        display: "flex",
        alignItems: "baseline",
        fontWeight: 900,
        justifyContent: "center",
        "& span": {
            fontSize: 18
        }
    },
}));


export const ConnectButton = styled(Button)(({ theme }) => ({
    color: "#fff",
    borderRadius: 30,
    fontSize: 20,
    fontWeight: 900,
    textTransform: "none",
    backgroundColor: green[600],
    '&:hover': {
        backgroundColor: green[800],
    },
    '&:disabled': {
        color: "#fff",
        backgroundColor: green[600],
    }
}));

export const ActionButton = styled(Button)(({ theme }) => ({
    color: "#fff",
    fontSize: 16,
    fontWeight: 700,
    textTransform: "none",
    backgroundColor: green[600],
    borderColor: `${green[800]} !important`,
    '&:hover': {
        backgroundColor: green[800],
    },
}));

export default globalUseStyles