let tarefas = [];

let input = document.getElementById("lista_input");
let botao = document.getElementById("lista_botao");
let lista = document.getElementById("lista_print");

botao.addEventListener("click", function(){
    let input_push = input.value.trim();
    if (input_push == ""){
        return
    }
    else{
    tarefas.push(input_push);

    input.value="";
    mostrar_lista();
}
})

function mostrar_lista(){
    lista.innerHTML = "";

    tarefas.forEach(function(tarefa, index) {

        let div = document.createElement("div") ;

        let item = document.createElement("li");
        item.innerText = tarefa;

        let X = document.createElement("button");
        X.innerText = "X";

        X.addEventListener("click", function(){
            tarefas.splice(index, 1);
            mostrar_lista();
        })
        div.append(item);
        div.append(X);
        lista.append(div);
    });
}
