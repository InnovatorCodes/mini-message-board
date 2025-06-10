const { Router }= require('express');

const router=Router();

const messages = [
  {
    text: "Hi there!",
    user: "Rohith",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Rohith",
    added: new Date()
  }
];

router.get('/', allMessages);

router.get('/new', newMessage)
router.post('/new', postMessage);

async function allMessages(req, res){
  res.render('index', {messages: messages})
}

async function newMessage(req, res){
  res.render('form');
}

async function postMessage(req,res){
  messages.push({text: req.body.text, user: req.body.name, added: new Date() });
  console.log(messages.length);
  res.redirect('/')
}

module.exports=router;

