function type(a){
    return typeof a
}

function sum(a,b) {
    return a * b 
}

function isArray(a) {
    return a instanceof Array
}

function getMeta(){
    return import.meta
}

export { type,sum,getMeta }
export default isArray