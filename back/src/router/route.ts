import {Router} from 'express';
import { prisma } from '../prisma';

const route = Router();

//Busca
route.get("/centrais", async (req, res) => {

    const centrais = await prisma.central.findMany()
    console.log(centrais)

    return res.status(200).json(centrais)
});

route.get("/catadores",async (req, res) => {

    const catadores = await prisma.catador.findMany()
    console.log(catadores)

    return res.status(200).json(catadores)    
});

route.get("/quadrantes", async (req, res) => {

    const quadrantes = await prisma.quadrante.findMany()
    console.log(quadrantes)

    return res.status(200).json(quadrantes)
});

//Cadastro
route.post("/centrais", async (req, res) => {

    const body: any = req.body;

    const central = await prisma.central.create({
        data:{
            razao_social: body.razao_social,
            CEP: body.CEP,
            endereco: body.endereco,
            numero: body.numero,
            CNPJ: body.CNPJ
        }
    })

    return res.status(200).json(central)
});

route.post("/quadrantes", async (req, res) => {

    const body = req.body;

    const quadrante = await prisma.quadrante.create({
        data:{
            quadrante: body.quadrante,
            CEP: body.CEP,
            pontuacao: body.pontuacao
        }
    })
    return res.status(200).json(quadrante)
});

route.post("/catadores", async (req, res) => {
    
    const body = req.body;

    const catador = await prisma.catador.create({
        data:{
            nome: body.nome,
            CPF: body.CPF,
            CEP: body.CEP,
            endereco: body.endereco,
            numero: body.numero,
            centralId: body.centralId,
            quadranteId: body.quadranteId
        }
    })
})

//Update

export default route;