import { Request, Response } from "express";
import { matchedData } from "express-validator";
import Producto from './../model/producto';

export async function all(req: Request, res: Response) {
    try {
        const roles = await Producto.findAll();
            return res.status(200).send({
            status: 'OK',
            code: 200,
            data: roles
        }) 
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            status: 'Error',
            code: 500,
            message: 'Internal Server Error'
        }) 
    }   
}

export async function save(req: Request, res: Response) {
    try {
        const info = req.body;
        const data = await Producto.create({...info});
        return res.status(200).json({
            status: 'OK',
            code: 200,
            message: 'Producto Creado Correctamente',
            data,
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            status: 'Error',
            code: 500,
            message: 'Internal Server Error',
            error: error
        })
    }
}

