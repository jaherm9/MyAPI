// 79 Mongoose Create Data Using Model

const StudentModel = require("../models/StudentsModel");

// CRUD

// CREATE
exports.InsertStudents = (req,res)=>{
    let reqBody=req.body;


StudentModel.create(reqBody, (err, data)=>{
    if(err){
        res.status(400).json({status:"fail", data:err})
    }
    else{
        res.status(201).json({status:"success", data:data})
    }

})
}

// READ
// 80 Mongoose Read Data Using Model
exports.ReadStudents = (req, res)=>{
    let Query = {}
    let Projection = "Name Roll Class"

    StudentModel.find(Query, Projection, (err, data)=>{

        if(err){
            res.status(400).json({status:"fail", data:err})
        }
        else{
            res.status(201).json({status:"success", data:data})
        }
    })

}


// U=Update
// 81 Mongoose Update Data Using Model
exports.UpdateStudent=(req, res)=>{
    let id = req.params.id;
    let Query = {_id:id};
    let reqBody=req.body;

    StudentModel.updateOne(Query, reqBody, (err, data)=>{
        if(err){
            res.status(400).json({status:"fail", data:err})
        }
        else{
            res.status(200).json({status:"success", data:data})
        }
    })
}

// D=Delete
// 82 Mongoose Delete Data Using Model
exports.DeleteStudent=(req, res)=>{
    let id = req.params.id;
    let Query = {_id:id};

    StudentModel.remove(Query, (err,data)=>{
        if(err){
            res.status(400).json({status:"fail", data:err})
        }
        else{
            res.status(200).json({status:"success", data:data})
        }
    })
}