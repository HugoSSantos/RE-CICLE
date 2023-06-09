import {Router} from 'express';
import { prisma } from '../prisma';

const route = Router();

route.get("/centrais", async (req, res) => {

    const centrais = await prisma.central.findMany({

    })

    return res.status(200).json(centrais)
})

export default route;