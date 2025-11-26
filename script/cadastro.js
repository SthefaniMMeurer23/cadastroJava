let nome = document.querySelector('#nome');
let labelNome = document.querySelector('#labelNome');
let validNome = false;

let usuario = document.querySelector('#usuario');
let labelUsuario = document.querySelector('#labelUsuario');
let validUsuario = false;

let senha = document.querySelector('#senha');
let labelSenha = document.querySelector('#labelSenha');
let validSenha = false;

let confirmSenha = document.querySelector('#confirmaSenha');
let labelConfirmSenha= document.querySelector('#labelConfirmSenha');
let validConfirmSenha = false;

let msgError = document.querySelector('#msgError');
let msgSuccess = document.querySelector('#msgSuccess');

nome.addEventListener('keyup', ()=>{
    if (nome.value.length <= 2 ) {
        labelNome.setAttribute('style', 'color: red')
        labelNome.innerHTML = 'Nome: Insira um nome válido'
    }else{
        labelNome.setAttribute('style', 'color: green')
        labelNome.innerHTML = 'Nome : '
        validNome = true;
    }

})

usuario.addEventListener('keyup',()=>{
    if (usuario.value.length <= 4){
        labelUsuario.setAttribute('style', 'color: red')
        labelUsuario.innerHTML = 'Usuario: Insira um usuario valido'
    }else{
        labelUsuario.setAttribute('style' , 'color: green')
        labelUsuario.innerHTML= 'Usuario:'
        validUsuario = true;
    }
})

senha.addEventListener('keyup', ()=>{
    if
})