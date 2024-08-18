$(document).ready(function () {
    $('input').keydown(function () {
        if (event.key === 'Enter') {
            $('#js-name').hide();
            $('#js-openingMessage').hide();
            $('#js-greeting').text('Hello ' + $('#js-name').val());
            $('#js-dot1').fadeIn(1000, function () {
                $('#js-dot2').fadeIn(1000, function () {
                    $('#js-dot3').fadeIn(1000, function () {
                        $('#js-welcomeMessage').fadeIn(1000, function () {
                            $("#js-welcomeMessage").css({'display': 'flex', 'justify-content': 'center'})
                            $('#js-instructions').fadeIn(1000, function () {
                                 $('#js-instructions').css({
                                   'display': "flex",
                                   "justify-content": "center",
                                 });
                                $('.earth').fadeIn(1000, function () {
                                    $(".earthPosition").css({
                                      'display': "flex",
                                      "justify-content": "center",
                                    });
                                });
                            });
                        });
                    });
                });
            });  
        }
    });

    setInterval(timeOfDay, 1000);

    function timeOfDay() {
        let d = new Date();
        document.getElementById('timeOfDay').innerHTML =
            d.getHours() + ":" +
            d.getMinutes() + ":" +
            d.getSeconds();

        console.log(d.getSeconds());
    }
});
