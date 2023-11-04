let mobile_icon = document.getElementById('mobile-icon');
let main_menu = document.getElementById('main-menu');

mobile_icon.addEventListener('click', () => {
    main_menu.classList.toggle('hidden');
})