const express= require('express');
const app=express();
const path=require('path');
const mongoose=require('mongoose');
const methodOverride= require('method-override')
const Collections=require('./models/Collections');
mongoose.connect('mongodb://127.0.0.1:27017/booksCollection')
.then(()=>{
    console.log("mongoose connection Worked!")

})
.catch((err)=>{
    console.log("mongoose connection error!!",err)
})
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'));
app.get('/books', async (req,res)=>{
    const books = await Collections.find({})
    console.log(books);
    res.render('books/index', { books })
})
app.get('/books/new', (req,res)=>{
    console.log(res);
    res.render('books/new')
})
app.post('/books', async (req,res)=>{
    const newBook= new Collections(req.body);
    await newBook.save()
    res.redirect(`/books/${newBook._id}`);
})
app.get('/books/:id', async (req,res)=>{
    const { id }= req.params;
    const books= await Collections.findById(id);
    console.log(books);
    res.render('Books/id', { books })
})
app.get('/books/:id/edit', async (req,res)=>{
    const { id }= req.params;
    const EditBook=await Collections.findById(id);
    res.render('books/edit', { EditBook })
})
app.put('/books/:id',async(req,res)=>{
    const {id}=req.params;
    const updateBook=await Collections.findByIdAndUpdate(id,req.body,{runValidators: true,new:true})
    res.redirect(`/books/${updateBook._id}`)
})
app.delete('/books/:id',async (req,res)=>{
    const {id}= req.params;
    const DeleteBook=await Collections.findByIdAndDelete(id);
    res.redirect('/books')
})

app.listen(3000, ()=>{
    console.log("listening to port 3000!!");
})