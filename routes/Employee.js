const express = require("express");
const employeeRouter = express.Router();
const employee = require("../models/EmployeeSchema")


employeeRouter.post("/tableemployee", async(req,res)=>{
    console.log(req.body);

    const { Name,EmployeeID,Department,PhoneNumber,Address} = req.body

    if(
        !Name || !EmployeeID || !Department || !PhoneNumber || !Address
    ){
        res.status(422).json("please fill the all data")
    }

    try{
        const preemployee = await employee.findOne({ Name:Name });
        console.log(preemployee)

        if(preemployee){
            res.status(422).json("this user is already present")
        }
        else{
            const addemployee = new employee({
                Name,EmployeeID,Department,PhoneNumber,Address  
            });
            await addemployee.save();
            res.status(201).json(addemployee);
            console.log(addemployee)
        }
    }catch(error){
        res.status(422).json(error)
    }


})

employeeRouter.get("/getemployee",async (req,res)=>{
    try{
        const employeeUser = await employee.find();
        res.status(201).json(employeeUser);
        console.log(employeeUser);
    }catch(error){
        res.status(422).json(error);
    }
});

employeeRouter.get("/getemployee/:id", async (req, res) => {
    try {
      console.log(req.params);
      const {id} = req.params;
      const employeeuser = await employee.findById({_id:id});
      console.log(employeeuser)
      res.status(201).json(employeeuser)
    } catch (error) {
      res.status(422).json(error);
    }
  });

  employeeRouter.patch("/getemployeeedit/:id",async(req,res)=>{
    try{
        const {id} = req.params;

        const updateemployee = await employee.findByIdAndUpdate(id,req.body,{
            new:true
        })
        console.log(updateemployee);
        res.status(201).json(updateemployee)
    }catch(error){
        res.status(422).json(error)
    }

    employeeRouter.delete("/getemployeedelet/:id",async(req,res)=>{
        try{
            const {id} = req.params;
            const getemployeedelet = await employee.findByIdAndDelete({_id:id})
                    console.log(getemployeedelet);
                    res.status(201).json(getemployeedelet)
            }catch(error){
                res.status(422).json(error)
            }
        
    })
})

  

module.exports = employeeRouter;