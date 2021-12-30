import {extendTheme } from "@chakra-ui/react"
import typography from "./foundations/typography";
import breakpoints from "./foundations/breakpoints";
import styles from "./styles.global";
import { pxToRem } from "../utils/theme.utils";
const theme = extendTheme({
    breakpoints,
    ...typography,
    textStyles: {
        h2:{
            fontSize:[pxToRem(48)],
            fontWeight: 'bold',
            lineHeight: 1.5,
        },
        h4:{
            fontSize:[pxToRem(40)],
            fontWeight: 'bold',
            lineHeight: 1.5,
        },
        h5: {
            fontSize: [pxToRem(28)],
            fontWeight: 'bold',
            lineHeight: 1.5,
        },
        h6:{
            fontSize:[pxToRem(24)],
            fontWeight: 'normal',
            lineHeight: 1.25
        },
        p: {
            fontSize: [pxToRem(20)],
            fontWeight: 'normal',
            lineHeight: 1.25
        }
    },
    config : {
        initialColorMode: 'light',
        useSystemColorMode: false,
    },
    styles
})

export default theme;