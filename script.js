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


var slideIndex = 0;
showSlides();

function showSlides() {
    var slides = document.getElementsByClassName('slide');
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 3000); 
}

document.getElementById('prevBtn').addEventListener('click', function() {
    slideIndex -= 2;
    showSlides();
});

document.getElementById('nextBtn').addEventListener('click', function() {
    showSlides();
});