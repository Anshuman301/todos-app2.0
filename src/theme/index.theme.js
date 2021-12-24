import {extendTheme } from "@chakra-ui/react"
import typography from "./foundations/typography";
import breakpoints from "./foundations/breakpoints";
import styles from "./styles.global";
const theme = extendTheme({
    breakpoints,
    ...typography,
    config : {
        initialColorMode: 'light',
        useSystemColorMode: false,
    },
    styles
})

export default theme;