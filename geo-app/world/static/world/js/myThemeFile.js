import { createMuiTheme } from 'material-ui/styles';
import { indigo100 } from 'material-ui/styles/colors';
import { pink100 } from 'material-ui/styles/colors';
import { red100 } from 'material-ui/styles/colors';




const myTheme = createMuiTheme({
    palette: {
        contrastThreshold: 3,
        primary: indigo100,
        secondary: pink100,
        error: red100,
        tonalOffset: 0.2,
    },
});

export default myTheme;