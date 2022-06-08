

require('dotenv').config();
const express = require("express");
const port = process.env.PORT || 3000;
const res = require("express/lib/response");
const app = express();
const path = require("path");
const { runInNewContext } = require("vm");
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());



const portfolio = [
    {
    id:1 ,
    nome: "Tênis Nike Air Max 90 Essential",
    imagem: "https://images.lojanike.com.br/500x500/produto/tenis-nike-air-max-90-essential-masculino-AJ1285-700-1.png",
    tamanho: "40",
    cor:"Caramelo",
    descricao:"Tenis Air Max 90 Essential é simbolo de conforto , amortecimento de alta qualidade e uma beleza unica.",
    tipo:"Casual",
    material:"Camurça"
    },
    {
    id :2,
    nome: "Tênis Nike Air Force 1 Low Retro",
    imagem: "https://images.lojanike.com.br/500x500/produto/tenis-nike-air-force-1-low-retro-qs-masculino-AH1067-004-1.png",
    tamanho: "40",
    cor:"Preto",
    descricao:"Tênis Air Force 1 Low Retro é representação de conforto e estilo , despojado e macio.",
    tipo:"Casual",
    material:"Nylon",
    },
    {
    id:3,
    nome: "Tênis Nike Air Jordan",
    imagem: "https://images.lojanike.com.br/500x500/produto/tenis-nike-air-jordan-i-mid-unissex-554724-061-1.png",
    tamanho: "40",
    cor:"Vermelho",
    descricao:"Tênis Air Jordan , cobinação perfeita do old school com o design atlético, bom para passeio excelente pro bascket.",
    tipo:"BascketBall",
    material:"Couro"
    },
    ]
    
    
let tenis = undefined;
let message = "";

app.get('/', (req, res) => {
    
    res.render('index' , {portfolio, tenis , message});
})

app.get('/produtos', (req, res) => {
     
    res.render('produtos', {portfolio , tenis,  message});

})

app.post("/cadastro", (req, res) => { 
    const tenis = req.body;
    tenis.id = portfolio.length + 1;
    portfolio.push(tenis);
    message = `Novo tenis criado com sucesso`
    res.redirect("/produtos");
});

app.get("/detalhes/:id", (req, res) => {
    const id = +req.params.id;
    tenis = portfolio.find(tenis => tenis.id === id);
    res.redirect("/cadastro");
  });

  
  app.post("/update/:id", (req, res) => {

    const id = +req.params.id - 1;
    const newTenis = req.body;
    newTenis.id = id + 1;
    portfolio[id] = newTenis;
    tenis = undefined;
    message = `Seu tenis foi editado com sucesso`
    
    res.redirect("/produtos");

  });
 

  app.get("/delete/:id", (req, res) => { 

    const id = +req.params.id - 1;
    delete portfolio[id];
    message = `Tênis deletado`
    res.redirect("/produtos") ;
});




  app.listen( port, () => 
    
    console.log(`Servidor rodando em: http://localhost:${port}`)

);

