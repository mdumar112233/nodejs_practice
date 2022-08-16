import {join} from 'path';
export const home = (req, res) => {
    // res.send('This is home page');
    // res.sendFile(join(process.cwd(), 'views', 'home.html'));

    // template engine
    res.render('index', {'title': 'Home','name': 'arif'});
}

export const about = (req, res) => {
    // res.send('This is about page');
    // res.sendFile(join(process.cwd(), 'views', 'about.html'));

    // template engine
    res.render('about', {'title': 'about'})
}



