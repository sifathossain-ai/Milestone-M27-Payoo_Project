document.getElementById('btn-show-cashout').addEventListener('click', function(){

    document.getElementById('cashout-div').classList.remove('hidden');

    document.getElementById('money-div').classList.add('hidden');
});


document.getElementById('btn-show-addmoney').addEventListener('click', function(){

    document.getElementById('money-div').classList.remove('hidden');

    document.getElementById('cashout-div').classList.add('hidden');
});