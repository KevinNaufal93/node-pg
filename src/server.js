const http = require('http');
const url = require('url');
const { supabase } = require('./config/supabase');
const userController = require('./controller/userController');

const server = http.createServer(async(req, res) => {

    const parsedUrl = url.parse(req.url, true)
    const { pathname, query } = parsedUrl
    const { method } = req

    switch (true) {
        case method === 'GET' && pathname === '/users':
            const fetchUser = await userController.getUsers(req, res);
            break;
        default:
            res.statusCode = 404;
            res.end('Not found');
    }
    
})

const port = process.env.PORT || '5000';

server.listen(port, () => {console.log(`Server running on port ${port}`)})