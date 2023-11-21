
function openModal(id){
    document.getElementById(id).style.animation = "growUp 1s 1";
    setTimeout(function(){
        document.getElementById(id).style.display = 'block';
    }, 500)
}

function closeModal(idClose){
    document.getElementById(idClose).style.animation = "growBack 1s 1";
    setTimeout(function(){
        document.getElementById(idClose).style.display = 'none';
    }, 900)

}