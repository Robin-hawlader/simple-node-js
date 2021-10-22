const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors())

app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello from my first ever node')
});

const users = [
    { id: 0, Name: 'Sabana', email: "sabana@gmail.com", Mobile: '01788888888' },
    { id: 1, Name: 'Sabnur', email: "sabnur@gmail.com", Mobile: '01788888888' },
    { id: 2, Name: 'salman', email: "salman@gmail.com", Mobile: '01788888888' },
    { id: 3, Name: 'Sorna', email: "sorna@gmail.com", Mobile: '01788888888' },
    { id: 4, Name: 'Soniya', email: "soniya@gmail.com", Mobile: '01788888888' },
]


app.get('/user', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.Name.toLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users)
    }
});

app.get('/user/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user)
})

app.listen(port, () => {
    console.log("lintening to port", port)
})