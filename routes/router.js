const { Router }= require('express');
const asyncHandler = require("express-async-handler");

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

const allMessages = asyncHandler((req, res)=>{
  res.render('index', {messages: messages})
})

const newMessage = asyncHandler((req, res)=>{
  res.render('form');
})

const postMessage = asyncHandler((req,res)=>{
  messages.push({text: req.body.text, user: req.body.name, added: new Date() });
  res.redirect('/')
})

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 404;
    // So the error is neat when stringified. NotFoundError: message instead of Error: message
    this.name = "NotFoundError";
  }
}

const showMessage = asyncHandler((req,res)=>{
  const id=req.params.id
  if(id<messages.length){
    const message=messages[id];
    res.render('message', {message: message})
  }
  else{
    throw new NotFoundError('Message Not Found');
  }
})

router.get('/', allMessages);

router.get('/new', newMessage)
router.post('/new', postMessage);

router.get('/messages/:id', showMessage)
router.use((req,res)=>{
  throw new NotFoundError('Page Not Found');
})
module.exports=router;

