const Validate = {
    email(input){
        Validate.clearError(input);
        let conteudoEmail = input.value;
        let formatoEmail = /^\w+([.-_]?\w+)*@\w+([.-_]?\w+)*(\.\w{2,3})+$/;
        let error = null;
        if(!formatoEmail.test(conteudoEmail)){
            error = 'Email inválido';
            Validate.displayError(input,error);
            return;
        }
        conteudoEmail.value = conteudoEmail;
    },
    displayError(input,error){
        let div = document.createElement('div');
        //adiciona a classe error a essa div
        div.classList.add('error');
        //adiciona a msg de erro dentro do conteúdo da div
        div.innerHTML = error;
        //adiciona a classe dentro do pai do input
        input.parentNode.appendChild(div);
        //dá foco no input q está com a mensagem de erro
        input.focus();
    },
    clearError(input){
        //pega o input com a classe error
        const errorDiv = input.parentNode.querySelector('.error');
            if(errorDiv){
                //remove esse input
                errorDiv.remove();
            }
    }
}