const mongoose=require('mongoose');
const collections = require('./models/Collections');
mongoose.connect('mongodb://127.0.0.1:27017/booksCollection')
.then(()=>{
    console.log("mongoose connection Worked!")

})
.catch((err)=>{
    console.log("mongoose connection error!!",err)
})
// const c=new collections({
//     title:"The Alchemist",
//     author:"Paulo coelho",
//     genre:"Adventure",
//     description:"The Alchemist is a classic novel in which a boy named Santiago embarks on a journey seeking treasure in the Egyptian pyramids after having a recurring dream about it and on the way meets mentors, falls in love, and most importantly, learns the true importance of who he is and how to improve himself and focus on what really matters in life."
// })
// c.save().then(res=>{
//     console.log(res)

// })
// .catch(e=>{
//     console.log(e)
// })

const bookcollections=[
    {
        title:"The Alchemist",
        author:"Paulo Coelho",
        genre: "Adventure",
        description: "The Alchemist is a classic novel in which a boy named Santiago embarks on a journey seeking treasure in the Egyptian pyramids after having a recurring dream about it and on the way meets mentors, falls in love, and most importantly, learns the true importance of who he is and how to improve himself and focus on what really matters in life."
    },
    {
        title:"Thinking fast and slow",
        author:"Daniel Kahneman",
        genre:"Non-fiction",
        description:"Thinking Fast and Slow shows you how two systems in your brain are constantly fighting over control of your behavior and actions, and teaches you the many ways in which this leads to errors in memory, judgment and decisions, and what you can do about it."
    },
    {
        title:"Best Self",
        author:"Mike Bayer",
        genre:"Self-help",
        description:"Best Self will help you become the hero you've always wanted to be by teaching you how to be honest with yourself about what you desire, identify your toxic anti-self, and discover the traits of the greatest possible version of you that you can imagine."
    },
    {
        title:"12 rules for life",
        author:"Jordan Peterson",
        genre:"Self-help",
        description:"12 Rules For Life is a stern, story-based, and entertaining self-help manual for young people that lays out a set of simple principles that can help us become more disciplined, behave better, act with integrity, and balance our lives while enjoying them as much as we can."
    },
    {
        title:"The 48 Laws of Power",
        author:"Robert Greene",
        genre:"self-help",
        description:"The 48 Laws Of Power draws on many of history's most famous power quarrels to show you what power looks like, how you can get it, what to do to defend yourself against the power of others and, most importantly, how to use it well and keep it."
    },
    {
        title:"The Fault In Our Stars",
        author:"John Green",
        genre:"fiction",
        description:"Despite the tumor-shrinking medical miracle that has bought her a few years, Hazel has never been anything but terminal, her final chapter inscribed upon diagnosis. But when a gorgeous plot twist named Augustus Waters suddenly appears at Cancer Kid Support Group, Hazel's story is about to be completely rewritten."
    }


]
collections.insertMany(bookcollections)
.then(res=>{
    console.log(res)
})
.catch(err=>{
    console.log(err)
})