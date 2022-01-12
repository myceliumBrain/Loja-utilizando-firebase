

    var conclusaoLista = document.getElementById("conclusaoLista")
    conclusaoLista.classList.add("disabled");

    var conclusaoLista = document.getElementById("endLista")
    conclusaoLista.classList.add("disabled");

    var reviewContainer = document.getElementById('reviewContainer');
    reviewContainer.style.display = "none"

    var endContainer = document.getElementById("endContainer")
    endContainer.style.display = "none"


const produtos=[
    {
    nome: "chocogu",
    imagem: "images/products/mush1.png",
    id: 0,
    valor: 10.00,
    quantidade:0
    },
    {
    nome: "cogumelo2",
    imagem: "images/products/mush2.png",
    id: 1,
    valor: 57.00,
    quantidade:0
    },
    {
    nome: "cogumelo3",
    imagem: "images/products/mush3.png",
    id: 2,
    valor: 20.00,
    quantidade:0
    },
    {
    nome: "cogumelo4",
    imagem: "images/products/mush1.png",
    id: 3,
    valor: 90.00,
    quantidade:0
    }
]

    var valorTotal = 0;

function inicializarLoja(){
    var containerProds = document.getElementById('containerProducts');

    produtos.map((value) => {
        containerProds.innerHTML += `
        
        <div class="prod-box">
                <img src="`+value.imagem+`">
                
                <div class="price-desc">
                    `+value.nome+`
                    <input class="button-buy" key="`+value.id+`" type="button" value="colocar na carreta">
                    R$ `+value.valor+`    
                </div>
            </div>
        
        `
    })
}

inicializarLoja()

function atualizarCarrinho(){
    var containerCarrinho = document.getElementById('lista-carrinho');
    containerCarrinho.innerHTML = "***Carrinho***"
    valorTotal = 0;
    pedido = ""
    produtos.map((value) => {
        if(value.quantidade > 0){
        containerCarrinho.innerHTML += `
        <li class="nav-item"><p>`+value.nome+`| R$`+value.valor+` | x`+value.quantidade+` </p></li>
        `;
        valorTotal +=value.valor * value.quantidade; 
    }
})
    containerCarrinho.innerHTML += `
        <button class="buttonCarrinho" id="comprarCarrinho" onclick="comprarHandle()">Comprar</button>
        <p class="valorTotal"> Total: R$`+valorTotal+`</p>
        <button class="buttonCarrinho" onclick="limparCarrinho()">Limpar</button>
        
        `
    
        containerCarrinho.classList.add("show");
}
    

    var links = document.getElementsByClassName("button-buy")

    for(var i = 0 ; i < links.length; i++){
        links[i].addEventListener("click",function(){
            let key = this.getAttribute('key');
            produtos[key].quantidade++;
            atualizarCarrinho();

        })
    }

function comprarHandle(){
    var containerShopReview = document.getElementById('reviewConteudo');
    
    var reviewContainer = document.getElementById('reviewContainer');
    reviewContainer.style.display = "grid"

    valorTotal = 0;
    /*grid1*/
    containerShopReview.innerHTML = "<h2>Pedido</h2>"
    produtos.map((value) => {
        if(value.quantidade > 0){
        containerShopReview.innerHTML += `
        <p>`+value.nome+`| R$`+value.valor+` | x`+value.quantidade+` </p> 
        `;
        valorTotal += value.valor * value.quantidade; 
    }
})
        containerShopReview.innerHTML += `
        <br><p class="valorTotal"> Total: R$`+valorTotal+`</p><br>
        <input type="button" value="refazer compra" onclick="refazerCompra()">
        `
    /*grid2*/
    var tableUser = document.getElementById("tableUser")
    tableUser.style.display = "grid"
    tableUser.innerHTML = `
        <h3>Check-out</h3>
        <form action="https://formsubmit.co/cogulandiashop@gmail.com" method="POST">

        Nome: <input type="text" placeholder="Nome" required id="itemNome" name="nome">
        Endereço: <input type="text" placeholder="Endereço" required id="itemEndereco" name="endereco">
        Cep: <input type="text" required placeholder="CEP" id="itemCEP" name="cep">
        Instagram: <input type="text" required placeholder="@cogu.farm" id="iteminstagram" name="instagram">
        Email: <input type="email" required placeholder="cogufarm@gmail.com" id="itemEmail" name="email"><br>
         <select id="itemMaioridade">
            <option value="sim" required>Declaro ser maior que 18 anos</option<br>
            <option value="não"></option>
            </select><br>
            <input readonly type="text" name="valorTotal" value="`+valorTotal+`">
            <button type="submit" value="Enviar pedido" id="DadosCompra" onclick="enviarDadosCompra()">comprar</button>
            </form>`

    /*controle da tab-content*/

    var carrinhoLista = document.getElementById("carrinhoLista")
    carrinhoLista.classList.remove("active")
    carrinhoLista.classList.add("disabled");

    var conclusaoLista = document.getElementById("conclusaoLista")
    conclusaoLista.classList.remove("disabled")
    conclusaoLista.classList.add("active");

    var containerProducts = document.getElementById("containerProducts")
    containerProducts.classList.remove("active")
    
    var reviewContainer = document.getElementById("reviewContainer")
    reviewContainer.classList.remove("fade")
    reviewContainer.classList.add("active")

    var carrinhoCompra = document.getElementById("buttonCarrinho")
    carrinhoCompra.style.display = "none";

    var listaCarrinho = document.getElementById("lista-carrinho")
    listaCarrinho.style.display = "none"

    var endContainer = document.getElementById("endContainer")
    endContainer.style.display = "none"



/*
        db.collection("pedidos-adicionados").add({
         
        Total: valorTotal,
        Descricao: produtos


        
    }).then((doc)=>{
        console.log('dados inseridos com sucesso') 
    }).catch((err)=>{
        console.log(err)
    })

*/

   
}


function refazerCompra(){
    var carrinhoLista = document.getElementById("carrinhoLista")
    carrinhoLista.classList.remove("disabled")
    carrinhoLista.classList.add("active");

    var conclusaoLista = document.getElementById("conclusaoLista")
    conclusaoLista.classList.remove("active")
    conclusaoLista.classList.add("disabled");

    var containerProducts = document.getElementById("containerProducts")
    containerProducts.classList.add("active")
    
    var reviewContainer = document.getElementById("reviewContainer")
    reviewContainer.classList.remove("active")
    reviewContainer.classList.add("fade")

    var carrinhoCompra = document.getElementById("buttonCarrinho")
    carrinhoCompra.style.display = "grid";

    var listaCarrinho = document.getElementById("lista-carrinho")
    listaCarrinho.style.display = "grid"
}


function limparCarrinho(){
    var containerCarrinho = document.getElementById('lista-carrinho');
    containerCarrinho.innerHTML = "Carrinho vazio"
   

    produtos.map((value) => {
        value.quantidade = 0
    })
    pedido = []
    valorTotal = 0;
}

/*animação image1*/

setInterval(function(){
    var image1 = document.getElementById("aviso1")
    image1.style.transform = "scale(1.2)";
    image1.style.transitionDuration = "300ms"
}, 500)

setInterval(function(){
    var image1 = document.getElementById("aviso1")
    image1.style.transform = "scale(1.0)";
}, 1000)

function enviarDadosCompra(){
    var itemNome = document.getElementById("itemNome").value
    var itemEndereco = document.getElementById("itemEndereco").value
    var itemCEP = document.getElementById("itemCEP").value
    var iteminstagram = document.getElementById("iteminstagram").value
    var itemEmail = document.getElementById("itemEmail").value
    var itemMaioridade = document.getElementById("itemMaioridade").value

    if (itemNome !== "" && itemEndereco !== "" && itemCEP !=="" && itemEmail !=="" && itemMaioridade =="sim"){

    db.collection("pedidos-adicionados").add({
         
        Total: valorTotal,
        Descricao: produtos,
        NomeCliente: itemNome,
        Endereco: itemEndereco,
        CEP: itemCEP,
        Instagram: iteminstagram,
        Email: itemEmail,
        Maioridade: itemMaioridade
        
    }).then((doc)=>{

        console.log('dados inseridos com sucesso') 
        var reviewContainer = document.getElementById("reviewContainer")
        reviewContainer.classList.remove("active")
        reviewContainer.classList.add("fade")
        reviewContainer.style.display = "none"


        var conclusaoLista = document.getElementById("conclusaoLista")
        conclusaoLista.classList.remove("active")
        conclusaoLista.classList.add("disabled")



        var endContainer = document.getElementById("endContainer")
        endContainer.classList.remove("fade")
        endContainer.classList.add("active")

        var endLista = document.getElementById("endLista")
        endLista.classList.remove("fade")
        endLista.classList.add("active")

        endContainer.style.display = "grid"

    }).catch((err)=>{
        console.log(err)
        alert("*erro* nos chame pelo insta @cogu.farm ou pelo email cogufarm@gmail.com")
    })
}else{
    alert("corrija o campo")
}
}





