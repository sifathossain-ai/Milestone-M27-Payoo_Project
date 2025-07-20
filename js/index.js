document.getElementById('btn-login').addEventListener('click', function(){
    console.log("I got Clicked");

    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;

    console.log(phoneNumber, pinNumber);

    if (phoneNumber === '01778554143' && pinNumber === '@sifat143#'){
        console.log("Your login the page.")
    }
    else{
        alert('Correct your inputs.')
    }
})