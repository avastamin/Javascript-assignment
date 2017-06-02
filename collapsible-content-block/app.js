const contentToggleButton = document.querySelector('.collapsible__toggle');
const toggleContent = document.querySelector('.collapsible__content');

contentToggleButton.addEventListener('click', function () {
    toggleContent.classList.toggle('visible');
});