const $botao = document.querySelector("#adicionar-aluno");

$botao.addEventListener("click", function(){
    event.preventDefault();

    let $dadosForm = document.querySelector("#form-aluno");
    let $dadosAluno = novoAluno($dadosForm);
});

function novoAluno(formulario){
   if(formulario.querySelector("#nome").value == ""){
        alert("Obrigatório informar o nome do aluno!!")
        formulario.querySelector("#nome").focus();
    }
    else if(formulario.querySelector("#nome").value.length<8){
        alert("Favor informar o nome completo do aluno!")
        formulario.querySelector("#nome").focus();
    }
    else if(formulario.querySelector("#n1").value == ""){
        alert("Obrigatório informar a primeira nota do aluno!!")
        formulario.querySelector("#n1").focus();
    }
    else if(isNaN(parseFloat(formulario.querySelector("#n1").value))){
        alert("Inserir apenas valores numéricos no campo nota 1");
        formulario.querySelector("#n1").value = "";
        formulario.querySelector("#n1").focus();
    }
}