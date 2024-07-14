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

    if (username && password == "" || (username || password) == "") {
        alert('Digite um usuario e uma senha!');
    } else {
        let users = [];

        if (localStorage.users) {
            users = JSON.parse(localStorage.getItem('users'));
        }

        users.push({
            username: username,
            password: md5(password)
        });
        console.log(users);
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
        return alert("Bem-vindo " + username);
    }
    return alert("Usuário ou senha invalido");
}

const button = document.querySelector('#botao-login');

const addLoading = () => {
    button.innerHTML = '<img src="./img/loading.png" class="loading">';
}

const removeLoading = () => {
    button.innerHTML = 'Login';
}

// function limpaform() {
//     document.getElementById('username').value = "";
//     document.getElementById('password').value = "";
// }

// function acesso() {
//     window.location.href = './system.html';
// }

const handleSubmit = (event) => {
    event.preventDefault();
    acesso();
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