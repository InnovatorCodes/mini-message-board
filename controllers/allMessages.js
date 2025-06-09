const allMessages= async (req, res)=>{
    const messages=req.messages;
    res.render('index', {messages: messages})
}
module.exports=allMessages;