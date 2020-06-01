import  createMuiTheme from "@material-ui/core/styles/createMuiTheme";

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#9c1111',
        },
        secondary:{
            main: '#0a0a0a',
            light: '#696869'
        },
        background: {
            main: '#19191a',
            veryLight: '#e2e2e2'
        },
    },
    typography: {
        fontFamily: [
            'Fjalla One',
            'Roboto',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
    }
})