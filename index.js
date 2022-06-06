
require('dotenv').config()
const express = require('express');
const app = express();
const path = require('path');
// // const { domainToASCII } = require('url');
const port =  process.env.PORT || 3000 ;
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.use(express.urlencoded());



const portfolio = [
    {
    id: 1 ,
    nome: "Tênis Nike Air Max 90 Essential",
    imagem: "https://images.lojanike.com.br/500x500/produto/tenis-nike-air-max-90-essential-masculino-AJ1285-700-1.png",
    tamanho: "40",
    cor:"Caramelo",
    descrição:"",
    tipo:"",
    peso:"",
    material:""
    },
    {
    id :2,
    nome: "Tênis Nike Air Force 1 Low Retro",
    imagem: "https://images.lojanike.com.br/500x500/produto/tenis-nike-air-force-1-low-retro-qs-masculino-AH1067-004-1.png",
    tamanho: "40",
    cor:"Preto",
    descrição:"",
    tipo:"",
    peso:"",
    material:""
    },
    {
    id:3,
    nome: "Tênis Nike Air Jordan",
    imagem: "https://images.lojanike.com.br/500x500/produto/tenis-nike-air-jordan-i-mid-unissex-554724-061-1.png",
    tamanho: "40",
    cor:"Vermelho",
    descrição:"",
    tipo:"",
    peso:"",
    material:""
    },
    ]
    
    
let tenis = '';


app.get('/', (req, res) => {
    
    res.render('index' , {portfolio, tenis});
})

app.get('/produtos', (req, res) => {
     
    res.render('produtos', {portfolio , tenis});

})
app.post("/cadastro", (req, res) => { 
    const tenis = req.body;
    tenis.id = portfolio.length + 1;
    portfolio.push(tenis);
    // message = `Novo tenis criado com sucesso`
    res.redirect("/produtos");
});

app.get("/detalhes/:id", (req, res) => {
    const id = +req.params.id;
    tenis = portfolio.find(tenis => tenis.id === id);
    res.redirect("/cadastro");
  })

  app.get("/delete/:id", (req, res) => { 

    const id = +req.params.id - 1;
    delete portfolio[id];
   
    res.redirect("/produtos") ;
});




  app.listen(3000, () => 
    
    console.log('Servidor rodando em: http://localhost:3000/')

);

