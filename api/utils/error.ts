export const createError = (message:any)=>{
    const error = new Error();
    error.message = message;
    return error;
}