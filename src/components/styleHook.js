import { makeStyles } from '@mui/styles';

const globalUseStyles = makeStyles(() => ({
    mintButton: {
        color: '#fff',
        background: '#006b94',
        border: '1px solid #006b94',
        marginTop: 10,
        fontSize: 20,
        letterSpacing: 10,
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

export default globalUseStyles