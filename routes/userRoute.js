import express from "express";
import { create ,deleteUser,getAll, getOne, update} from "../controller/userController.js";
// import  create from "../api/create.js";
// import  getAll from "../api/getall.js";
// import  getOne from "../api/getone.js";
// import  update from "../api/update.js";
// import  deleteUser from "../api/delete.js";


const route=express.Router();
route.post("/create",create);
route.get("/getall",getAll);
route.get("/getone/:id",getOne);
route.put("/update/:id",update);
route.delete("/delete/:id",deleteUser);


export default route;