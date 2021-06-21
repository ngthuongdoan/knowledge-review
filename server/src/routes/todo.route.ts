import express from "express";

const router = express.Router();

router
    .get("/", (req: express.Request, res: express.Response)=>{
    console.log(req);
    res.status(200).send({
        message:"abc"
    })
})

export default router;
