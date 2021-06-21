import express from "express";
import * as todoRoutes from "./todo.route"

const router = express.Router();

// const defaultRoute = [
//     {
//         path:"/todo",
//         route: todoRoutes
//     }
// ]

// defaultRoute.forEach(r=>{
router.use("/todo", todoRoutes)
// })

export default router;
