const form = document.querySelector('form');

form.addEventListener('submit', function(event){

    const password = document.getElementById('password').value;
    const confirmedPassword = document.getElementById('confirmed-password').value;

    if (password !== confirmedPassword){
        alert("As senhas não coincidem!");
        event.preventDefault();
    }
});