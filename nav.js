const http = require('http');

const app = http.createServer((req, res) => {
    console.log(req.url, req.method);
    res.setHeader('Content-type', 'text/html');


    if (req.url === '/home' ) {
        res.setHeader('Location', '/home');
        res.write('<h1>Welcome Home</h1>')
        return res.end();
    }
    else if (req.url === '/about' ) {
        res.setHeader('Location', '/about');
        res.write('<h1>About Me</h1>');
        return res.end();
    } else if (req.url === '/contact') {
        res.setHeader('Location', '/contact');
           res.write('<h1>contact Us</h1>');
        return res.end();
    } else if (req.url === '/admin' ) {
        res.setHeader('Location', '/admin');
        res.write('<h1>Hello Admin</h1>');
        return res.end();
    } else if (req.url === '/user' ) {
        res.setHeader('Location', '/user');
        res.write('<h1>User</h1>');
        return res.end();
    }

    res.write(`   
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

   <head>
            <li><a href="/about">about</a></li>
            <li><a href="/contact">contact</a></li>
            <li><a href="/admin">admin</a></li>
            <li><a href="/user">user</a></li>
        </ul>
    </nav>
   </head>

</body>
</html>
    `)
  



});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`url here http://localhost:${PORT}`)
});