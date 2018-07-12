$('.form').find('input, textarea').on('keyup blur focus', function (e) {

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

    e.preventDefault();

    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');

    target = $(this).attr('href');

    $('.tab-content > div').not(target).hide();

    $(target).fadeIn(600);

});

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
    console.log(registration_json)
}
RegBtn.onclick = reg_confirm;

var LEmail = document.getElementById("LEmail");
var LPassword = document.getElementById("LPassword");
var LogBtn = document.getElementById("login_btn");
const log_confirm = () => {
    var login_json = JSON.stringify({
        Email: LEmail.value,
        Password: LPassword.value
    })
    console.log(login_json)
}
LogBtn.onclick = log_confirm;




