const express = require('express')
const path = require('node:path')

const app = express()
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
    res.render('index', {messages: messages})
})
app.get('/newpage', (req, res)=>{
    res.render('new')
})
app.use(express.urlencoded({ extended: true }));

app.post('/new', (req, res)=> {
    messages.push({text: req.body.mes, user: req.body.user, added: new Date()})
    res.redirect('/')
    
})
app.get('/message/:id', (req, res)=>{
    res.render('messagedet', {value: messages[req.params.id].text})
})
app.listen(2333, ()=>{
    console.log('yeeee')
})
