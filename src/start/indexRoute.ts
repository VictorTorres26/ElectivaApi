import { Router } from "express";
import roles from "./routes/role";

const router = Router();

router.use(roles);



export default router