export const required = (value) => {
    if (value) return undefined
    return 'Field is Required'
}


export const maxLengthCreator = (maxLength) => (value) => {
    if (value && value.length > maxLength) return `Must be ${maxLength} symbol or less`
    return undefined
}
