function toggleDropdown() {
    const container = document.getElementById('container');
    container.classList.toggle('expanded');
}

// Close dropdown if clicking outside container or menu button
document.addEventListener('click', function (e) {
    const container = document.getElementById('container');
    const button = document.querySelector('.more-button');

    if (!container.contains(e.target) || !button.contains(e.target)) {
        container.classList.remove('expanded');
    }
});

// Search filter function
function filterFunction () {
    const input = document.getElementById('searchInput');
    const filter = input.value.toUpperCase();
    const dropdown = document.getElementById('moreDropdown');
    const links = dropdown.getElementsByTagName('a');

    for (let i = 0; i < links.length; i++) {
        
    }
}
