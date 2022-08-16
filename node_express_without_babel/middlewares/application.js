export const myLogged = (req, res, next) => {
    console.log('This is varifyed')
    next();
}