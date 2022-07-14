const express = require("express");
const projectRouter = express.Router();
const project = require("../models/Project");

projectRouter.post("/tableproject", async (req, res) => {
  const { ProjectName, CostCode, Details, Owner } = req.body;

  if (!ProjectName || !CostCode || !Details || !Owner) {
    res.status(422).json("please fill the all data");
  }

  try {
    const postproject = await project.findOne({ ProjectName: ProjectName });
    console.log(postproject);
    if (postproject) {
      res.status(422).json("this user is already present");
    } else {
      const addproject = new project({
        ProjectName,
        CostCode,

        Details,
        Owner,
      });
      await addproject.save();
      res.status(201).json(addproject);
    }
  } catch {
    res.status(422).json(error);
  }
});

projectRouter.get("/getproject", async (req, res) => {
  try {
    const getproject = await project.find();
    res.status(201).json(getproject);
    
  } catch (error) {
    res.status(422).json(error);
  }
});

projectRouter.get("/getproject/:id", async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;
    const projectuser = await project.findById({ _id: id });
    res.status(201).json(projectuser);
  } catch (error) {
    res.status(422).json(error);
  }
});
projectRouter.get("/getprojectasset", async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;
    const projectuser = await project.findOne(id)
    res.status(201).json(projectuser);
  } catch (error) {
    res.status(422).json(error);
  }
});

projectRouter.patch("/getprojectedit/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updateproject = await project.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(201).json(updateproject);
  } catch (error) {
    res.status(422).json(error);
  }
});

projectRouter.delete("/getprojectdelet/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const getprojectdelet = await project.findByIdAndDelete({ _id: id });
    res.status(201).json(getprojectdelet);
  } catch (error) {
    res.status(422).json(error);
  }
});



module.exports = projectRouter;
