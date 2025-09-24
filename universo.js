const mapaImagem = document.querySelector('section img');
const popupContainer = document.getElementById('popup-container');
const imagemAmpliada = document.getElementById('imagem-ampliada');
const fecharPopup = document.querySelector('.fechar-popup');

mapaImagem.addEventListener('click', function() {
    const caminhoImagem = mapaImagem.getAttribute('src');
    imagemAmpliada.setAttribute('src', caminhoImagem);
    popupContainer.style.display = 'flex';
});

fecharPopup.addEventListener('click', function() {
    popupContainer.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == popupContainer) {
     popupContainer.style.display = 'none';
    }
});