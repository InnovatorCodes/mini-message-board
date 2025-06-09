const { Router }= require('express');
const allMessages=require('../controllers/allMessages');

const indexRouter=Router();

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

indexRouter.get('/', (req,res,next)=>{
    req.messages=messages;
    next();
  }, allMessages);

module.exports=indexRouter;

