
   var btnEntrar = document.getElementById('btnEntrar').value;
    var inputEmail = document.getElementById('inputEmail').value;
    var inputPassword = document.getElementById('inputPassword').value;

    



                    function login(){

                        if(inputEmail===''&& inputPassword===''){
                
                            alert('PorFavor Preencha todos os campos');
    

                        }



                    }

           
   btnEntrar.addEventListener('click',login);