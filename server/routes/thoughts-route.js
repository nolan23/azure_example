const router = require('express').Router()
const Thought = require('../models/Thought')

router.get('/',(req,res,next)=>{
    Thought.find({},(err,thoughts)=>{
        if(err) next(err)
        else res.json(thoughts)
    })
})

const data=[
    "aku",
    "sayang",
    "samamu",
    "guh",
    "<3",
]
router.post('/seed', (req,res,next)=>{
    for(let x=0;x<data.length;x++){
        const newThought = new Thought({
            thought:data[x],
            dateCreated:new Date(),
        })
        newThought.save(err=>{
            if (err) console.log(err)
            else console.log('thought saved!')
        })
    }
    res.send('Lets run the GET after this to see if the thoughts got seeded successfully')
})

router.post('/create',(req,res,next)=>{
    const{thought}=req.body
    const newThought = new Thought({
        thought,
        dateCreated:new Date()
    })
    newThought.save(err=>{
        if(err) next(err)
        else res.json({newThought,msg:'thought successfully saved!'})
    })
})

router.delete('/',(req,res,next)=>{
    Thought.deleteMany({},err=>{
        if(err)next(err)
        else res.send('Successfully deleted all thoughts')
    })
})

module.exports = router