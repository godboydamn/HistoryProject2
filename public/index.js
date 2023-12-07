const buttonKazan = document.getElementById('buttonKazan1');

buttonKazan.addEventListener('click', function() {
    window.open('https://clck.ru/FJDGc', '_blank');
});

function swapPhotos(event) {
    const clickedGroup = event.currentTarget;
    const oldPhoto = clickedGroup.querySelector('.oldPhoto');
    const newPhoto = clickedGroup.querySelector('.newPhoto');
    const line = clickedGroup.querySelector('.line');
    const img = clickedGroup.querySelector('.img');

    const zIndexOldPhoto = window.getComputedStyle(oldPhoto).getPropertyValue('z-index');

    oldPhoto.style.zIndex = zIndexOldPhoto === '1' ? '0' : '1';
    newPhoto.style.zIndex = zIndexOldPhoto === '1' ? '1' : '0';

    const oldPhotoTop = window.getComputedStyle(oldPhoto).getPropertyValue('top');
    const oldPhotoLeft = window.getComputedStyle(oldPhoto).getPropertyValue('left');
    const newPhotoTop = window.getComputedStyle(newPhoto).getPropertyValue('top');
    const newPhotoLeft = window.getComputedStyle(newPhoto).getPropertyValue('left');

    const lineSrc = line.getAttribute('src');
    const imgSrc = img.getAttribute('src');

    line.setAttribute('src', imgSrc);
    img.setAttribute('src', lineSrc);

    oldPhoto.style.top = newPhotoTop;
    oldPhoto.style.left = newPhotoLeft;
    newPhoto.style.top = oldPhotoTop;
    newPhoto.style.left = oldPhotoLeft;
}


