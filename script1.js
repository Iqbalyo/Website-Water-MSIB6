document.getElementById('openPopup').addEventListener('click', function() {
    document.getElementById('logoutPopup').style.display = 'flex';
});

document.getElementById('cancelLogout').addEventListener('click', function() {
    document.getElementById('logoutPopup').style.display = 'none';
});

document.getElementById('confirmLogout').addEventListener('click', function() {
    window.location.href = 'index.html';
});
