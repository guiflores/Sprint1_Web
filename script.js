document.addEventListener('DOMContentLoaded', function() {
    var learnMoreBtn = document.getElementById('learnMoreBtn');
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', function() {
            var moreInfo = document.getElementById('moreInfo');
            if (moreInfo.style.display === 'none') {
                moreInfo.style.display = 'block';
            } else {
                moreInfo.style.display = 'none';
            }
        });
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


document.addEventListener('DOMContentLoaded', function() {
    var slideIndex = 0;

    function showSlides() {
        var slides = document.getElementsByClassName('slide');
        var dots = document.getElementsByClassName('dot');
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        for (var i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(' active', '');
        }
        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].className += ' active';
        setTimeout(showSlides, 3000); 
    }

    if (document.getElementsByClassName('slide').length > 0) {
        showSlides();

        document.getElementById('prevBtn').addEventListener('click', function() {
            showSlides(slideIndex -= 2); 
        });

        document.getElementById('nextBtn').addEventListener('click', function() {
            showSlides(slideIndex); 
        });

        document.getElementById('backToHomeBtn').addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }
});

function voltar(){
    window.location.href = 'index.html';
};