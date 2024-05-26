const http = require('http');
const { supabase } = require('./config/supabase');

const server = http.createServer( async (req, res) => {
    let result;
    const {data, error} = await supabase.from('user').select('*')

    if(error) {
        console.error('[SUPABASE ERROR] >>>>>', error);
        res.writeHead(500)
        result = error;
    } else {
        res.writeHead(500)
        result = data;
    }
    res.end(JSON.stringify(result))
});
const port = process.env.PORT || '5000';

server.listen(port, () => {console.log(`Server running on port ${port}`)})