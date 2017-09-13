$(document).ready(function() {
    $("#valider").click(function() {
        var name = $("#name").val();
        var numerogsm = $("#numerogsm").val();
        var numerofix = $("#majnumfix").text();
        var email = $("#email").val();
        var naissance = $("#naissance").val();
        var password = $("#password").val();
        var cpassword = $("#cpassword").val();
        //vérif et messages d'erreur
        if (name == '' || email == '' || password == '' || cpassword == '' || naissance=='') {
            alert("Des champs sont vides !");
        } else if ((password.length) < 8) {
            alert("Mot de passe trop court, minimum 8 caracrères");
        } else if (!(password).match(cpassword)) {
            alert("Les mots de passe ne correspondent pas");
        } else {
            //post qqch si site complet
            $.post({
                name_: name,
                numerogsm_: numerogsm,
                numerofix_: numerofix,
                email_: email,
                naissance_: naissance,
                password_: password

            }, function(data) {
                if (data == 'Vous vous êtes enregistés') {
                $("form")[0].reset();
            }
            alert(data);
            });

            //Ajouter une ligne
            $("ul").append($('<li class="list-group-item">').html( name+" "+ email+ " "+ numerogsm+ " "+ numerofix + " " + naissance));

            //Vider le fomulaire à la fin
            $('#name').val('');
            $('#numerogsm').val('');
            $('#email').val('');
            $('#naissance').val('');
            $('#password').val('');
            $('#cpassword').val('');

        }
    });
    $("[type='number']").keypress(function (evt) {
        evt.preventDefault();
    });
    $("[type=range]").on("change mousemove",function(){
        var newv=$(this).val();
        $(this).next().text(newv);
    });
    $( "#add" ).click(function() {
        document.getElementById("majnumfax").innerHTML = parseInt(document.getElementById("majnumfax").innerHTML)+1;
    });
});