export const set_cookie = (req, res) => {
    res.cookie('umarname', 'umar faruk')
    res.send('cookie set..')
}

export const get_cookie = (req, res) => {
    console.log(req.cookies)
    res.send('cookie get..')
}

export const delete_cookie = (req, res) => {
    res.send('cookie delete..')
}