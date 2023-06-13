import {Router} from 'express';
import { prisma } from '../prisma';

const route = Router();

route.get("/", (req, res) => {

    return res.status(200).json({"message": "Para executar digite /"})
})


//Busca geral
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

// Busca individual
route.get("/centrais/:id", async (req, res) =>{
    const centralId = req.params.id;

    const central = await prisma.central.findMany({
        select:{
            id_central: true,
            razao_social: true,
            CNPJ: true,
            CEP: true,
            catador: true,
            endereco: true,
            numero: true
        },
        where:{
            id_central: centralId
        }
    })

    return res.status(200).json(central)
});

route.get("/catadores/:id", async (req, res) => {

    const catadorId = req.params.id;

    const catador = await prisma.catador.findMany({
        select:{
            id_catador: true,
            nome: true,
            centralId: true,
            quadranteId: true
        },
        where:{
            id_catador: catadorId
        }
    })

    return res.status(200).json(catador)

});

route.get("quadrantes/:id", async (req, res) => {
    
    const quadranteId = req.params.id;

    const quadrante = await prisma.quadrante.findMany({
        select:{
            id_quadrante: true,
            quadrante: true,
            CEP: true,
            pontuacao: true,
            catador: true
        },
        where: {
            id_quadrante: quadranteId
        }
    })

    return res.status(200).json(quadrante)
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
// route.put("/centrais/:id");

// route.put("/quadrantes/:id");

// route.put("/catadores/:id");


export default route;