export const updObject = (oldObject, updValues) => {
    return {
        ...oldObject,
        ...updValues
    }
};