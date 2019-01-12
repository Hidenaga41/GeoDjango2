import { red, pink, indigo } from "material-ui/colors";
import { createMuiTheme } from "material-ui";

const myTheme = createMuiTheme({
    palette: {
        contrastThreshold: 3,
        primary: indigo,
        secondary: pink,
        error: red,
    },
    typography: {
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
});

export default myTheme;