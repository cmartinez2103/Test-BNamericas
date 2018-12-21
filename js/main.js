(function() {
    document.getElementById("addUser").addEventListener("click", openWrapper);
    document.getElementById("addUser").addEventListener("click", openSidebar);
    var close = document.getElementsByClassName("btn-close");

    for (var i = 0; i < close.length; i++) {
        close[i].addEventListener('click', closeWrapper);
    }

    function openWrapper() {
        document.getElementById("wrapperSidebar").classList.remove("close-wrapper");
        document.getElementById("wrapperSidebar").classList.add("open-wrapper");
    }
    function openSidebar() {
        setTimeout(function(){
            document.getElementById("aside").classList.add("open-sidebar");
        }, 800);
      }

    function closeWrapper() {
        document.getElementById("aside").classList.remove("open-sidebar");
        setTimeout(function(){
            document.getElementById("wrapperSidebar").classList.add("close-wrapper");
            document.getElementById("wrapperSidebar").classList.remove("open-wrapper");
        }, 1000);
    }



    //VALIDACIÓN
    document.getElementById("email").addEventListener("focusout", validEmail);

    function validEmail() {
        var $email = document.getElementById("email").value;
        var $emailInput = document.getElementById("email");
        console.log($email);

        var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;

        if ($email == '' || !re.test($email)){

            console.log('invalido');
            $emailInput.classList.add("invalid");
            $emailInput.classList.remove("valid");
            return false;
        }else{
            console.log('valido');
            $emailInput.classList.add("valid");
            $emailInput.classList.remove("invalid");
        }
    }

 })();
