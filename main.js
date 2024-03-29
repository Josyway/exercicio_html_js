const form = document.getElementById("form-validator");


form.addEventListener('submit', function (e) {
	e.preventDefault();
    

    const primeiroNumero = document.getElementById("primeiro_numero");
    const segundoNumero = document.getElementById("segundo_numero");
    const mensagemSucesso = `O numero: <b>${primeiro_numero.value}</b> é menor que:  <b>${segundo_numero.value}</b>`;
    const mensagemErro = `O segundo numero precasa ser maior que o primeiro numero`;
    

    if (segundoNumero.value > primeiroNumero.value) {
        const containerMensagemSucesso = document.querySelector(".success-message");
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        const containerMensagemErro = document.querySelector(".error-message");
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'none';
        
        primeiroNumero.value = '';
        segundoNumero.value = '';
    }else{ 
        const containerMensagemErro = document.querySelector(".error-message");
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';
        const containerMensagemSucesso = document.querySelector(".success-message");
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'none';

        }
    })
    console.log(form);
    
