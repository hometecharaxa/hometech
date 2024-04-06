// Armazenar os clientes em um array (simulando um banco de dados)
var clientes = [];

// Função para inserir cliente
document.getElementById('form-inserir').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    
    // Criar um novo objeto cliente
    var novoCliente = {
        id: clientes.length + 1,
        nome: nome,
        email: email
    };
    
    // Adicionar o novo cliente ao array de clientes
    clientes.push(novoCliente);
    
    // Limpar os campos do formulário
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    
    // Atualizar a lista de clientes na página de listagem
    atualizarListaClientes();
});

// Função para atualizar a lista de clientes na página de listagem
function atualizarListaClientes() {
    var listaClientes = document.getElementById('clientes-list');
    listaClientes.innerHTML = ''; // Limpar a lista antes de adicionar os clientes atualizados
    
    clientes.forEach(function(cliente) {
        var itemLista = document.createElement('div');
        itemLista.innerHTML = '<p>ID: ' + cliente.id + ', Nome: ' + cliente.nome + ', E-mail: ' + cliente.email + ' <button onclick="removerCliente(' + cliente.id + ')">Remover</button></p>';
        listaClientes.appendChild(itemLista);
    });
}

// Função para remover cliente
function removerCliente(id) {
    // Filtrar o cliente com o ID especificado e remover do array de clientes
    clientes = clientes.filter(function(cliente) {
        return cliente.id !== id;
    });
    
    // Atualizar a lista de clientes na página de listagem
    atualizarListaClientes();
}
