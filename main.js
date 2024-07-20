// const mysql = require('mysql2');

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'teste'
// });

// connection.connect( function(err){
//     console.log('Conexão bem sucedida!');
// });

// connection.query('SELECT * FROM users', function (err, rows, fields){
//     if(!err){
//         console.log('Resultado:', rows);
//     } else {
//         console.log('Erro: Consulta não realizada!');
//     }
// });

// con.connect((err) => {
//     if (err) throw err;
//     console.log('Conectado ao Banco!');
//     let inputUsername = document.getElementById('username').value;
//     let inputPassword = document.getElementById('password').value;

//     var sql = 'INSERT INTO users (username, password) VALUES ?';
//     var values = [
//         [inputUsername, inputPassword]
//     ]
//     con.query(sql, [values], (err, result) => {
//         if (err) throw err;
//         console.log('Registro Inserido com Sucesso!' + result.affectedRows);
//     });
// });


function cadastrar() {

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let email = document.getElementById('email').value;

    if ((username || password || email) == "") {
        alert('Digite um usuario, senha e e-mail válidos!');
    } else {
        let users = [];

        if (localStorage.users) {
            users = JSON.parse(localStorage.getItem('users'));
        }

        users.push({
            username: username,
            password: md5(password),
            email: email
        });
        // console.log(users);
        localStorage.users = JSON.stringify(users);

        alert('Usuario cadastrado com sucesso!');

        const a = document.querySelector('#btn_cadastro');
        a.href = "./index.html";
    }
}

function autenticacao() {
    const users = JSON.parse(localStorage.getItem('users'));

    const username = document.getElementById('username').value;
    const password = md5(document.getElementById('password').value);

    let auth = false;

    users.map((user) => {
        if (user.username === username && user.password === password) {
            auth = true;
        }
    });

    if (auth) {
        alert("Bem-vindo " + username);
        return acesso();
    }
    return alert("Usuário ou senha inválidos");
}

const button = document.querySelector('#botao-login');

// const addLoading = () => {
//     button.innerHTML = '<img src="./img/loading.png" class="loading">';
// }

// const removeLoading = () => {
//     button.innerHTML = 'Login';
// }


function limpaform() {
    document.getElementById('username').value = "";
    document.getElementById('password').value = "";
}



function acesso() {
    window.location.href = './system.html';
}

const handleSubmit = (event) => {
    event.preventDefault();
    limpaform();
}


const dados_formulario = document.querySelector('form').addEventListener('submit', handleSubmit, cadastrar, autenticacao);
dados_formulario();

function mostrarSenha() {
    var inputPass = document.getElementById('password');
    var btnShowPass = document.getElementById('btn-senha');

    if (inputPass.type === 'password') {
        inputPass.setAttribute('type', 'text');
        btnShowPass.classList.replace('bi-eye-fill', 'bi-eye-slash-fill');
    } else {
        inputPass.setAttribute('type', 'password');
        btnShowPass.classList.replace('bi-eye-slash-fill', 'bi-eye-fill');
    }
}

function salvarCadastro() {

    let itemCode = document.getElementById('ipt-code').value;
    let itemDescription = document.getElementById('ipt-description').value;
    let itemCost = document.getElementById('ipt-cost').value;
    let itemMkp = document.getElementById('ipt-mkp').value;

    let products = [];

    if (localStorage.products) {
        products = JSON.parse(localStorage.getItem('prodcuts'));
    }

    products.push({
        code: itemCode,
        description: itemDescription,
        cost: itemCost,
        MarkUp: itemMkp
    });
    // console.log(users);
    localStorage.products = JSON.stringify(products);

    alert('Produto cadastrado com sucesso!');

    document.getElementById('ipt-code').value = "";
    document.getElementById('ipt-description').value = "";
    document.getElementById('ipt-cost').value = "";
    document.getElementById('ipt-mkp').value = "";

    const a = document.querySelector('#btn-salvar');
    a.href = "./cadastrodeprodutos.html";
}


function showEst(){
    const result = document.getElementById('show-code');
    result.innerHTML = '';
    if(localStorage.products){
        products = JSON.parse(localStorage.getItem('products'));
    }

    for(var i in products){
        let p = document.createElement('p');
        p.innerHTML = products[i];
        result.append(p)
    }
}






