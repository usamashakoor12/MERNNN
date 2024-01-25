const express = require("express");
const users = require("../models/userSchema");
const router = express.Router();

// router.get("/", (req,res)=>{
//     console.log("connect");
// });


//register user data

router.post("/register",async (req,res)=>{
    // console.log(req.body);
    const {name, email, age, mobile, work, add, desc} = req.body

    if (!name || !email || !age || !mobile || !work || !add || !desc) {
        res.status(422).json("Please Fill Datails")
    }

    try {
        const preuser = await users.findOne({email:email})

        if (preuser) {
            res.status(422).json("Already Existing")
        }else{
            const adduser = new users({
                name, email, age, mobile, work, add, desc
            });

            await adduser.save()
            res.status(201).json(adduser)
            console.log(adduser);
        }
        
    } catch (error) {
        res.status(422).json(error)
    }
});

// get user data
router.get("/getdata",async(req, res)=>{
try {
    const userdata  = await users.find()
    res.status(201).json(userdata);
    console.log(userdata);
} catch (error) {
    res.status(422).json(error)
}
});

// get individual user

router.get("/getuser/:id",async(req,res)=>{
    try {
console.log(req.params);
const {id} = req.params

const userIndividual = await users.findById({_id: id})
console.log(userIndividual);
res.status(201).json(userIndividual)

    } catch (error) {
        res.status(422).json(error)
    }
})

//update user
router.patch("/updateuser/:id",async(req, res)=>{
    try {
        const {id} = req.params

        const updateduser = await users.findByIdAndUpdate(id,req.body,{
            new: true
        });

        console.log(updateduser);
        res.status(201).json(updateduser)
        
    } catch (error) {
        res.status(422).json(error)
    }
});

// delete user 
router.delete("/deleteuser/:id", async(req, res)=>{
    try {
        const {id} = req.params

        const deleteuser = await users.findByIdAndDelete({_id:id})
        console.log(deleteuser);
        res.status(201).json(deleteuser)
        
    } catch (error) {
        res.status(422).json(error)
    }
})

module.exports = router;