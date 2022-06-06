/* retorna o primaiero elemento que corresponde 
aos seletores específicos*/

let $TituloPagina = document.querySelector("#titulo");

/* a propriedade text.content 
define ou retorna o conteúdo de texto*/

$TituloPagina.textContent = "ETEC Professor Basilides de Godoy";

let $tabela = document.querySelector("#tabela-aluno");
// console.log($tabela);

let $RegistroAlunos = document.querySelectorAll(".aluno");
console.log($RegistroAlunos);

for(let j=0; j<$RegistroAlunos.length; j++){
    let $contagem = $RegistroAlunos[j];
    let $nome = $contagem.querySelector(".td-nome").textContent;
    let $n1 = $contagem.querySelector(".td-n1").textContent;
    let $n2 = $contagem.querySelector(".td-n2").textContent;
    let $n3 = $contagem.querySelector(".td-n3").textContent;
    let $tabela = document.querySelector("#tabela-aluno");
    $tabela.appendChild($alunotr);

    let $mediaFinal = $calcularMedia($n1, $n2, $n3);

    let $media = $contagem.querySelector(".td-media");
    $media.textContent = $mediaFinal.toFixed(1);

    if($media.textContent < 6){
        $media.style.color = "red";
        $media.style.fontWeight = "bold";
    }

    else{
        $media.style.color = "blue";
        $media.style.fontWeight = "bold";
    }

    let $situacao = $contagem.querySelector(".td-situacao");
    $situacao.textContent = mostrarSituacao($mediaFinal)[0];
    $situacao.classList.add(mostrarSituacao($mediaFinal)[1]);

}

function $calcularMedia(x, y, z){
    return(parseFloat(x) + parseFloat(y) + parseFloat(z)) / 3;
}

function mostrarSituacao(x){
    let $resultado = [];

    if(x < 6){
        $resultado.push("Reprovado");
        $resultado.push("reprovado");
    }

    else{
        $resultado.push("Aprovado");
        $resultado.push("aprovado");
    }

    return $resultado;
}
