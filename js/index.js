document.getElementById('btn-login').addEventListener('click', function(){

    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;

    if (phoneNumber === '01778554143' && pinNumber === '1111'){
        window.location.href = '/home.html'
    }
    else{
        alert('Correct your input.')
    }
})