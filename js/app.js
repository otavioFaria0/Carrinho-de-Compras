// Variáveis globais para controle do carrinho, inicializadas com valores padrão
let carrinhoValor = 1400; 
let celulares = 1;
let fones = 0;
let oculus = 0;
let carrinhoCelular = 1400; 
let carrinhoFone = 0;
let carrinhoOculus = 0;

produtosAdicionados = []; // Array para armazenar produtos adicionados ao carrinho


function adicionar() { // Botão adicionar

    // Obtém os valores dos campos de produto e quantidade
    let produto=document.getElementById('produto').value
    let quantidade = Number(document.getElementById('quantidade').value)
    console.log('add '+quantidade+' de '+produto);
    validarCampos(quantidade);
    
    // Identifica o produto selecionado e atualiza os dados e a tela do carrinho
      //Fone de ouvido
    if (produto === 'Fone de ouvido - R$100' && quantidade >= 1) {

        // Atualiza os valores do carrinho e quantidade de fones
        carrinhoFone+=100*quantidade;
        carrinhoValor+=100*quantidade;
        fones+=Number(quantidade);

        // Verifica se o produto já foi adicionado anteriormente na Array
        if (produtosAdicionados.includes('Fone de ouvido')) {
            atualizarCarrinho('fone','Fone de ouvido', fones, carrinhoFone);
            atualizarValorTotal(carrinhoValor);
            console.log('Produto já adicionado anteriormente.');

        } else { // Produto adicionado pela primeira vez
            atualizarCarrinho('fone','Fone de ouvido', fones, carrinhoFone);
            console.log('Produto adicionado pela primeira vez.');
            produtosAdicionados.push('Fone de ouvido');
            atualizarValorTotal(carrinhoValor);
        }
    } //Celular
    else if (produto === 'Celular - R$1400' && quantidade >= 1) {
        carrinhoCelular+=1400*quantidade;
        carrinhoValor+=1400*quantidade;
        celulares+=Number(quantidade);
       if (produtosAdicionados.includes('Celular')) {
            atualizarCarrinho('celular','Celular', celulares, carrinhoCelular);
            atualizarValorTotal(carrinhoValor);
        } else {
            atualizarCarrinho('celular','Celular', celulares, carrinhoCelular);
            console.log('Produto adicionado pela primeira vez.');
            produtosAdicionados.push('Celular');
            atualizarValorTotal(carrinhoValor);
        }
        //Oculus
    } else if (produto === 'Oculus VR - R$5000' && quantidade >= 1) {
        carrinhoOculus+=5000*quantidade;
        carrinhoValor+=5000*quantidade;
        oculus+=Number(quantidade);
        if (produtosAdicionados.includes('oculus')) {
            atualizarCarrinho('oculus','Oculus VR', oculus, carrinhoOculus);
            atualizarValorTotal(carrinhoValor);
            } else {
            atualizarCarrinho('oculus','Oculus VR', oculus, carrinhoOculus);
            console.log('Produto adicionado pela primeira vez.');
            produtosAdicionados.push('Oculus VR');
            atualizarValorTotal(carrinhoValor);
            }
    }
    console.log('Valor do carrinho: R$'+carrinhoValor+' | Celulares: '+celulares+' | Fones: '+fones+' | Oculus: '+oculus);      
}

function remover() { // Botão remover

    // Obtém os valores dos campos de produto e quantidade
    let produto=document.getElementById('produto').value
    let quantidade = Number(document.getElementById('quantidade').value)
    validarCampos(quantidade);

      //Fone de ouvido
    if (produto === 'Fone de ouvido - R$100' && quantidade >= 1) {

        // Verifica se a quantidade a ser removida é maior do que a quantidade no carrinho
        if (quantidade > fones) {
            alert('Não é possível remover mais produtos do que os adicionados ao carrinho.');
            return;

        } else { // Contabiliza a remoção do produto dos dados
        console.log('removeu '+quantidade+' de '+produto);    
        carrinhoFone-=100*quantidade;
        carrinhoValor-=100*quantidade;
        fones-=Number(quantidade);
        console.log('Valor do carrinho: R$'+carrinhoValor+' | Celulares: '+celulares+' | Fones: '+fones+' | Oculus: '+oculus);
        
        // Atualiza o produto na tela do carrinho
        atualizarCarrinho('fone','Fone de ouvido', fones, carrinhoFone);
        atualizarValorTotal(carrinhoValor);
        } 
        if (fones === 0) { // Remove o produto da Array e da tela se a quantidade chegar a zero
            produtosAdicionados = produtosAdicionados.filter(item => item !== 'Fone de ouvido'); 
            removerDoCarrinho('fone');
        }
    }
    //Celular
    if (produto === 'Celular - R$1400' && quantidade >= 1) {
        if (quantidade > celulares) {
            alert('Não é possível remover mais produtos do que os adicionados ao carrinho.');
            return;
        } else {
        console.log('removeu '+quantidade+' de '+produto);    
        carrinhoCelular-=1400*quantidade;
        carrinhoValor-=1400*quantidade;
        celulares-=Number(quantidade);
        console.log('Valor do carrinho: R$'+carrinhoValor+' | Celulares: '+celulares+' | Fones: '+fones+' | Oculus: '+oculus);

        atualizarCarrinho('celular','Celular', celulares, carrinhoCelular);
        atualizarValorTotal(carrinhoValor);
        } 
        if (celulares === 0) {
            produtosAdicionados = produtosAdicionados.filter(item => item !== 'Celular');
            removerDoCarrinho('celular');
        }
    }
    //Oculus
    if (produto === 'Oculus VR - R$5000' && quantidade >= 1) {
        if (quantidade > oculus) {
            alert('Não é possível remover mais produtos do que os adicionados ao carrinho.');
            return;
        } else {
        console.log('removeu '+quantidade+' de '+produto);    
        carrinhoOculus-=5000*quantidade;
        carrinhoValor-=5000*quantidade;
        oculus-=Number(quantidade);
        console.log('Valor do carrinho: R$'+carrinhoValor+' | Celulares: '+celulares+' | Fones: '+fones+' | Oculus: '+oculus);
        atualizarCarrinho('oculus','Oculus VR', oculus, carrinhoOculus);
        atualizarValorTotal(carrinhoValor);
        }
        if (oculus === 0) {
            produtosAdicionados = produtosAdicionados.filter(item => item !== 'Oculus VR');
            removerDoCarrinho('oculus');
        }    
    }
}

// Função para atualizar o produto na exibição da tela do carrinho
function atualizarCarrinho(idProduto,produtoNome, varQuantidadeProduto, varCarrinhoProduto) {
    let produto =document.getElementById(`${idProduto}`); 
    produto.innerHTML = `
        <section class="carrinho__produtos__produto">
            <span class="texto-azul">${varQuantidadeProduto}x</span>
            ${produtoNome}
            <span class="texto-azul">R$${varCarrinhoProduto}</span>
        </section>
    `;  
}

// Função para remover o produto da exibição no carrinho
function removerDoCarrinho(idProduto) {
    let produto =document.getElementById(`${idProduto}`); 
    produto.innerHTML = '';
}

// Função para atualizar o valor total do carrinho com todos os produtos
function atualizarValorTotal(valorTotal) {
    let valorTotalElemento = document.getElementById('valor-total');
    valorTotalElemento.innerText = `R$${valorTotal}`;
}

// Função para limpar o carrinho e resetar todas as variáveis
function limpar() { // Botão limpar
    document.getElementById('produto').value = 'Fone de ouvido - R$100';
    document.getElementById('quantidade').value = '';
    carrinhoValor = 0;
    celulares = 0;
    fones = 0;
    oculus = 0;
    console.log('Carrinho limpo. Valor do carrinho: R$'+carrinhoValor);
    document.getElementById('fone').innerHTML = '';
    document.getElementById('celular').innerHTML = '';
    document.getElementById('oculus').innerHTML = '';
    atualizarValorTotal(`${carrinhoValor}`);
    produtosAdicionados = [];
}

// Função para validar os campos de entrada
function validarCampos(quantidade) {
if (quantidade === '' || quantidade <= 0) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }
}