import { Router } from "express";
import  {all, save}  from "../../app/controllers/productoController";

const router = Router();

const environment = 'productos'
const prefix = '/api/v1/' + environment 

console.log(`${prefix}/all`)
router.get(`${prefix}/all`, all);
router.post(`${prefix}/save`,save);




export default router
