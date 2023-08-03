const express = require('express');
const cors = require('cors')
const app = express();

/*const LoginProfiles = [
  
    {
        id: 1,
        username: "admin",
        password: "passwd123",
        isAdmin: true,
    },
    {
        id: 2,
        username: "staff",
        password: "123456",
        isAdmin: false,
    },
    {
        id: 3,
        username: "vice",
        password: "abrakadabra",
        isAdmin: false,
    },
  {
        id: 4,
        username: "super",
        password: "69843",
        isAdmin: true,
    },
  {
        id: 5,
        username: "user",
        password: "123",
        isAdmin: false,
    }
  ];
  
  app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const profile = LoginProfiles.find(profile => profile.username === username && profile.password === password);
    if (profile) {
      const token = jwt.sign({ username }, 'secret_key');
      res.json({ token });
    } else {
      res.status(401).send('Invalid credentials');
    }
  });*/
  

app.use(cors());

app.use('/login', (req, res) => {
  res.send({
    token: 'test123'
  });
});

app.listen(8000, () => console.log('API is running on http://localhost:8000/login'));