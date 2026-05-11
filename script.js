const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabName = button.getAttribute('data-tab');

        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        button.classList.add('active');
        const activeSection = document.getElementById(tabName);
        if (activeSection) {
            activeSection.classList.add('active');
        }
    });
});

window.addEventListener('load', () => {
    console.log('HQ Sports News loaded.');
});
