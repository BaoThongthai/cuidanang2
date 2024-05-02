document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('.php-email-form');
    const loading = form.querySelector('.loading');
    const error = form.querySelector('.error-message');
    const success = form.querySelector('.sent-message');

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        loading.style.display = 'block';
        error.style.display = 'none';
        success.style.display = 'none';

        // Lấy giá trị từ các ô input
        const name = form.querySelector('#name').value;
        const email = form.querySelector('#email').value;
        const sodienthoai = form.querySelector('#sodienthoai').value;

        // Tạo đối tượng JSON từ các giá trị lấy được
        const data = {
            name: name,
            email: email,
            sodienthoai: sodienthoai
        };

        // Gửi đối tượng JSON lên server
        fetch('https://662a2fff67df268010a2eab5.mockapi.io/thongtinkhachhang', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            loading.style.display = 'none';
            if (responseData.success) {
                success.style.display = 'block';
                form.reset();
            } else {
                success.style.display = 'block';
                form.reset();
            }
        })
        .catch(error => {
            loading.style.display = 'none';
            console.error('There was an error!', error);
        });
    });
});
