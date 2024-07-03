function openModal(imageSrc) {
    var modal = document.querySelector('.modal');
    var modalImage = document.querySelector('.modal-content');
    var closeButton = document.querySelector('.close');

    modal.style.display = "block";
    modalImage.src = imageSrc;

    closeButton.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}