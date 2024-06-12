document.getElementById('learnMoreBtn').addEventListener('click', function() {
    var moreInfo = document.getElementById('moreInfo');
    if (moreInfo.style.display === 'none') {
        moreInfo.style.display = 'block';
    } else {
        moreInfo.style.display = 'none';
    }
});


function entrar(){
    let user = document.getElementById('user').value
    let senha = document.getElementById('senha').value

    if (user == '1234' && senha == '1234'){
        window.location.href = 'index.html'
    }
    else{
        alert('Usuário e/ou senha estão incorretas')
    }
}


function showSlides(n) {
    var slides = document.getElementsByClassName('slide');
    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = n;
    }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex].style.display = 'block';
}

document.getElementById('prevBtn').addEventListener('click', function() {
    showSlides(slideIndex - 1);
});

document.getElementById('nextBtn').addEventListener('click', function() {
    showSlides(slideIndex + 1);
});

function voltar(){
    window.location.href = 'index.html';
};