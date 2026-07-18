// Форма обратной связи
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#contactForm');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const data = new FormData(form);
        const formData = Object.fromEntries(data.entries());
        
        // Отправка данных на почту (заглушка)
        fetch('/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            alert('Сообщение отправлено!');
            form.reset();
        })
        .catch(error => console.error('Ошибка:', error));
    });
});
