import express, { Request, Response } from "express";
import { Produto } from "./Produto";
import { Endereco } from "./Endereco";
import { Fabricante } from "./Fabricante";

const app = express();
const PORT = process.env.PORT ?? 3000;
app.use(express.json());

const produtos: Produto[] =[];
let PrId = 1; //definiir id como um e dps sempre chamar novo para o prox ao cadastrar new pedido;


//cadastrar
function cadastrarProduto(req: Request, res: Response):void{
    try{
        let data:any = req.body;
    
        if (data.preco <= 0){
            throw new Error("O preco deve ser maior que zero");//verifica preco
        }
        if (!data.fabricante.nome){
            throw new Error("O fabrigante deve ter um nome");// verifica se fabricante tem nome
        }
        if(!data.fabricante.endereco.cidade || !data.fabricante.endereco.pais){
            throw new Error("O fabricante deve ter um endereco valido")//verifica cidade e pais
        }


        let endereco = new Endereco( data.fabricante.endereco.cidade,data.fabricante.endereco.pais);
        let fab = new Fabricante(data.fabricante.nome,endereco);
        let produto = new Produto(PrId++, data.nome,data.preco,fab);//mpedir id duplicado;

        produtos.push(produto);
        res.status(201).json(produto);

    }catch(e: unknown){
        res.status(400).json({Message: "Necessário informar as informações do produto."});
    }
}
//listar 
function listarProdutos(req: Request, res : Response): void{
    
    res.status(200).json({produtos});
    
}
//busca id
function buscarPorID(req: Request, res: Response): void {
    try {
        let id: any = req.params.id;
        const produto = produtos.find(p=>p.id === parseInt(id)); //parseInt para converter string em numero

        if (!produto) {
            res.status(404).json({ Message: "Produto não encontrado" });
            return;
        }

        res.status(200).json(produto);

    }catch(e: unknown){
        res.status(404).json({Message: "informe um ID válido"});
    }
    }
    //ataualizar produto
    function atualizarProduto(req: Request, res: Response): void{
        try {
            let id: any = req.params.id;
            let data: any = req.body;   
            const produtoIndex = produtos.findIndex(p => p.id === parseInt(id));

            if (produtoIndex === -1) {
                res.status(404).json({ Message: "Produto não encontrado" });
                return;
            }
            let endereco = new Endereco( data.fabricante.endereco.cidade, data.fabricante.endereco.pais);
            let fab = new Fabricante(data.fabricante.nome, endereco);
            let produto = new Produto(parseInt(id), data.nome, data.preco, fab);
            produtos[produtoIndex] = produto;
            res.status(200).json(produto);
        }catch(e: unknown){
            res.status(400).json({Message: "Necessário informar um ID válido"});
        }
    }


//remover produto 

function removerProduto(req: Request, res: Response): void{
    try {
        let id: any = req.params.id;
        const produtoIndex = produtos.findIndex(p => p.id === parseInt(id));  

        if (produtoIndex === -1) {
            res.status(404).json({ Message: "Produto não encontrado" });
            return;
        }   
        produtos.splice(produtoIndex, 1);
        res.status(200).json({ Message: "Produto removido com sucesso" }); 


    }catch(e: unknown){
        res.status(400).json({Message: "Necessário informar um ID válido"});
    }
}
app.get('/api/produto/:id', buscarPorID);
app.post('/api/produto',cadastrarProduto);
app.get('/api/produto', listarProdutos);
app.put('/api/produto/:id', atualizarProduto);
app.delete('/api/produto/:id', removerProduto);
app.listen(PORT, () => console.log(`API rodando na URL : http://localhost:${PORT}`));