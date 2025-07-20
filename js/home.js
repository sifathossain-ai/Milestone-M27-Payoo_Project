
document.getElementById('btn-add-money').addEventListener('click', function () {


    const getMoney = document.getElementById('input-money').value;
    const getPin = document.getElementById('input-pin').value;

    if (getPin === '1111') {
        console.log("Money successfully added.");

        const getBalance = document.getElementById('balance').innerText;

        const totalBalance = parseInt(getBalance) + parseInt(getMoney);
        document.getElementById('balance').innerText = totalBalance;

    }
    else {
        alert('Fail to add money.');
    }
    // console.log(getMoney, getPin);
});

document.getElementById('btn-cash-out').addEventListener('click', function(){

    const getMoney = document.getElementById('input-m').value;
    const getPin = document.getElementById('input-p').value;

    if (getPin === '1111') {
        console.log("Money successfully added.");

        const getBalance = document.getElementById('balance').innerText;

        const totalBalance = parseInt(getBalance) - parseInt(getMoney);
        document.getElementById('balance').innerText = totalBalance;

    }
    else {
        alert('Fail to add money.');
    }
});