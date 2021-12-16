export const pxToRem = (px) => {
    const remValue = (px * 100)/(1080 + 1024 + 512)
    return `${remValue}rem`
}