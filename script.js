$('.form').find('input, textarea').on('keyup blur focus', function (e) {
    console.log('form focus');
    var $this = $(this),
        label = $this.prev('label');

    if (e.type === 'keyup') {
        if ($this.val() === '') {
            label.removeClass('active highlight');
        } else {
            label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
        if( $this.val() === '' ) {
            label.removeClass('active highlight');
        } else {
            label.removeClass('highlight');
        }
    } else if (e.type === 'focus') {

        if( $this.val() === '' ) {
            label.removeClass('highlight');
        }
        else if( $this.val() !== '' ) {
            label.addClass('highlight');
        }
    }

});

$('.tab a').on('click', function (e) {
    console.log('tab click');
    e.preventDefault();

    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');

    target = $(this).attr('href');

    $('.tab-content > div').not(target).hide();

    $(target).fadeIn(600);

});

//////////////////Кнопка отправления на регистрацию
var FirstName = document.getElementById("FirstName");
var LastName = document.getElementById("LastName");
var Email = document.getElementById("Email");
var Password = document.getElementById("Password");
var RegBtn = document.getElementById("reg_btn");
const reg_confirm = () => {
    var registration_json = JSON.stringify({
        FirstName: FirstName.value,
        LastName: LastName.value,
        Email: Email.value,
        Password: Password.value
    })
}


/////////////////////клик через fetch
$('#reg_btn').on('click',function reg() {
    console.log('registrtion in process');
    fetch('http://localhost:33828/api/account/registration',
        {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json, text, */*'
            },
            method: "POST",
            body: JSON.stringify({
                FirstName: FirstName.value,
                LastName: LastName.value,
                Email: Email.value,
                Password: Password.value
            })
        })
        .then(res => {
            console.log(res);
            console.log('Я тут!!');
            // document.location.href = './Mes_form.html'
        })
        .catch(error => {
            console.log('Ошибка:', error.message);
            console.log('Я тут в ошибке!!');
            // document.location.href = './Mes_form.html'
        })
})

// fetch('http://localhost:33828/api/account/registration',
//     {
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json, text, */*'
//         },
//         method: "POST",
//         body: JSON.stringify({
//             FirstName: FirstName.value,
//             LastName: LastName.value,
//             Email: Email.value,
//             Password: Password.value
//         })
//     })
//     .then(res => {
//         console.log(res);
//         console.log('Я тут!!');
//         // document.location.href = './Mes_form.html'
//     })
//     .catch(error => {
//         console.log('Ошибка:', error.message);
//         console.log('Я тут в ошибке!!');
//         // document.location.href = './Mes_form.html'
//     })


var LEmail = document.getElementById("LEmail");
var LPassword = document.getElementById("LPassword");
var LogBtn = document.getElementById("login_btn1");
const log_confirm = () => {
    var login_json = JSON.stringify({
        Email: LEmail.value,
        Password: LPassword.value
    })
    console.log(login_json)
}
//LogBtn.onclick = log_confirm;




$('#login_btn').on('click',function reg() {
    fetch('http://localhost:5000/api/account/login',
        {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'text'
            },
            method: "POST",
            redirect: "follow",

            body: JSON.stringify({
                Email: LEmail.value,
                Password: LPassword.value
            })
        })
        .then(response => {
            console.log(response);
            // localStorage
            return response.json()
        })
        .then(data => {
            // document.location.href = `./Mes_form.html`
        })
        .catch(error => {
            console.log('Ошибка:', error.message);
            alert("Error");
        })
    //window.localStorage.setItem('token', jsonData.token); -хранение в переменной token моего токена для всего документа
    function changeurl(){eval(self.location="/Mes_form.html");}
    window.setTimeout("changeurl();",3000);

})




// function LogIn(){
//
//     var login_json = JSON.stringify({
//             Email: LEmail.value,
//             Password: LPassword.value
//         })
//     }
//     $.ajax({
//         type: "POST",
//         url: "http://192.168.1.67:5000/api/account/login",
//         // передача в качестве строки
//         // кодирование выполняется "вручную"
//         data: login_json,
//
//     })
// };

////////////////////клик через AJAX
//
//     function getajax (){
//         alert("asdkfn")
//         var registration_json = JSON.stringify({
//             FirstName: FirstName.value,
//             LastName: LastName.value,
//             Email: Email.value,
//             Password: Password.value
//         }
//         $.ajax({
//             type: "POST",
//             url: "http://192.168.1.67:5000/api/account/registration",
//             // передача в качестве строки
//             // кодирование выполняется "вручную"
//             data: registration_json,
//
//         })
//     }
//     function aler() {
//         alert("привет")
//
//     }
//     $(function() {
//         $('#asdf').on('click', aler);
//     })

////////////////////////////////
///////////////////////////////

//RegBtn.onclick = reg_confirm;
// $("form").submit(function(e) {
//     e.preventDefault(); // Избегать выполнения стандартной отправки формы.
// });
// $.ajax({
// url: 'https://192.168.1.67:5000/api/account/registration',
// type: "POST",
// data: reg_confirm,
// crossDomain: true,
// success: function() { alert("Success"); },
// error: function() { alert('Failed!'); },
// contentType: "application/json; charset=utf-8"

// });