const express =require('express');
const app=express();
const bodyParser = require('body-parser')
const PORT=3000;

let blogList=[];//mimic the database using an array

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//CREATE
app.post('/blogs',(req,res)=>{
    blogList.push({
        title: req.body.title , 
        content : req.body.content,
        id: Math.floor(Math.random()*1000), // mimic a unique id for each blog
    });
    return res.status(201).json({
        success:true,
    })
});

//READ
app.get('/blogs/:id',(req,res)=>{
    const result = blogList.filter( (blog)=> blog.id == req.params.id);
    return res.status(202).json({
        data:result,
        success:true,
    })
})

app.get('/blogs',(req,res)=>{
    return res.status(200).json({
        data:blogList,
        success:true,
    })
});

//DELETE
app.delete('/blogs/:id',(req,res)=>{
    let unique;
    for(let i=0;i<blogList.length;i++)
    {
        if(blogList[i].id==req.params.id)
        {
            unique=i;
            break;
        }
    }
    blogList.splice(unique, 1);
    return res.status(203).json({
        success:true,
    })
})

app.listen(PORT, ()=>{
    console.log("SERVER STARTED ON PORT",PORT);
});



