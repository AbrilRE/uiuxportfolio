
function openModal(id) {
    document.getElementById(id).style.animation = "growUp 1s 1";
    setTimeout(function () {
        document.getElementById(id).style.display = 'block';
    }, 500)
}

function closeModal(idClose) {
    document.getElementById(idClose).style.animation = "growBack 1s 1";
    setTimeout(function () {
        document.getElementById(idClose).style.display = 'none';
    }, 900)

}

const options = document.getElementsByClassName('.option');
options.addEventListener("click", function close() {document.getElementById('submenu').style.display = 'none';});

function openSubmenu() {
    const submenu = document.getElementById('submenu');

    if (submenu.style.display == 'flex') {
        submenu.style.display = 'none';
    }

    else {
        submenu.style.display = 'flex';
    }
}

function openMobileMenu(){
    const menu = document.getElementById('mobilemenu');
    const options = document.getElementById('mobilemenuoptions');

    if (options.style.display == 'flex') {
        options.style.display = 'none';
        menu.style.height = '4vh';
    }

    else {
        options.style.display = 'flex';
        menu.style.height = '23vh';
    }
}

