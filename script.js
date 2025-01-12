// تفعيل شريط البحث
document.querySelector('.search-bar button').addEventListener('click', function(event) {
    event.preventDefault();
    const searchQuery = document.querySelector('.search-bar input').value;
    if (searchQuery) {
        alert(`تم البحث عن: ${searchQuery}`);
    } else {
        alert('من فضلك أدخل نصًا للبحث');
    }
});

// تفعيل نموذج الاتصال
document.querySelector('.contact form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.querySelector('.contact input[type="text"]').value;
    const email = document.querySelector('.contact input[type="email"]').value;
    const message = document.querySelector('.contact textarea').value;

    if (name && email && message) {
        alert('تم إرسال رسالتك بنجاح!');
    } else {
        alert('من فضلك أكمل جميع الحقول');
    }
});
