let completo = true
let contadorImagem = 1
function validacaoForms(){
    document.querySelectorAll('.text-inputs').forEach(function(el) {
        if(el.value == ""){
            alert(`Erro! O campo ${el.id} não pode ser vazio`)
            completo = false
        }
        else{
            completo = true
        }
     
    })

    if(completo == true){
        alert("Mensagem enviada!")
    }
}

function mudarCarrosel(trigger){
    
    if(trigger.id == "left"){
        if(contadorImagem > 1){
            contadorImagem -= 1

        }
    }
    else if (trigger.id == "right"){
        if(contadorImagem < 4){
            contadorImagem += 1

        }
    }

    document.getElementById("imgCarrosel").src = `img/carrousel${contadorImagem}.webp`

}
