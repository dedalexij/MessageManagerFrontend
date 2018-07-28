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



$(function(){
    var wrapper = $( ".file_upload" ),
        inp = wrapper.find( "input" ),
        btn = wrapper.find( "button" ),
        lbl = wrapper.find( "div" );

    btn.focus(function(){
        inp.focus()
    });
    // Crutches for the :focus style:
    inp.focus(function(){
        wrapper.addClass( "focus" );
    }).blur(function(){
        wrapper.removeClass( "focus" );
    });

    var file_api = ( window.File && window.FileReader && window.FileList && window.Blob ) ? true : false;

    inp.change(function(){
        var file_name;
        if( file_api && inp[ 0 ].files[ 0 ] )
            file_name = inp[ 0 ].files[ 0 ].name;
        else
            file_name = inp.val().replace( "C:\\fakepath\\", '' );

        if( ! file_name.length )
            return;

        if( lbl.is( ":visible" ) ){
            lbl.text( file_name );
            btn.text( "Выбрать" );
        }else
            btn.text( file_name );
    }).change();

});
$( window ).resize(function(){
    $( ".file_upload input" ).triggerHandler( "change" );
});

var Phone = document.getElementById("Phone");
var SMessage = document.getElementById("SmsMessage");
//var SmsSenderBtn = document.getElementById("SmsSenderBtn");
var Guid = function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}



$('#SmsSenderBtn').on('click',function reg() {
    fetch('http://localhost:5000/api/message/send/sms',
        {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'text'
            },
            method: "POST",
            redirect: "follow",

            body: JSON.stringify({
                Phone: Phone.value,
                Message: SMessage.value,
                Guid: Guid.value
            })
        })
        .then(response => {
            console.log(response);
            return response.json()
        })
        .catch(error => {
            console.log('Ошибка:', error.message);
            alert("Error");
        })


})

var SenderEmail = document.getElementById("SenderEmail");
var RecipientEmail = document.getElementById("RecipientEmail");
var Theme = document.getElementById("Theme");
var EMessage = document.getElementById("Message");
// EmailSenderBtn = document.getElementById("EmailSenderBtn");
var Guid = function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}
nsole.log(email_message_json)
}


$('#EmailSenderBtn').on('click',function reg() {
    fetch('http://localhost:5000/api/message/send/email',
        {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'text'
            },
            method: "POST",
            redirect: "follow",

            body: JSON.stringify({
                SenderEmail: SenderEmail.value,
                RecipientEmail: RecipientEmail.value,
                Theme: Theme.value,
                EMessage: EMessage.value,
                Guid: Guid.value
            })
        })
        .then(response => {
            console.log(response);
            return response.json()
        })
        .catch(error => {
            console.log('Ошибка:', error.message);
            alert("Error");
        })


})