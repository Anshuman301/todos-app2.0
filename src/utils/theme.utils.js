export const pxToRem = (px) => {
    const remValue = (px * 100)/(1080 + 1024 + 512)
    return `${remValue}rem`
}

export const pxToVw = (px) => {
    const vwValue = (px * 100)/1080
    return `${vwValue}vw`
}

export const pxToVh = (px) => {
    const vhValue = (px * 100)/1024
    return `${vhValue}vh`
}