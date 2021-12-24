const styles =  {
    global: (props) => {
        console.log(props);
        return {
            html : {
                fontSize: props.colorMode === 'light' ? `calc(1vw + 1vh + .5vmin)`: `calc(1vw + 1vh + .5vmin)`,
            },
            body: {
                color: props.colorMode === 'light' ? 'green.700' : 'blue.600',
                bgGradient: props.colorMode === 'light' ? 'linear(to-t, green.200, green.500)' : 'linear(to-tr, gray.800 50%, gray.900 25%)'
            },
            '.globalSideBg': {
                bgGradient: props.colorMode === 'light' ? 'linear(to-tr, orange.100, orange.200)' : 'linear(to-t, teal.900, teal.800)'
            }
        }
    }
}

export default styles;