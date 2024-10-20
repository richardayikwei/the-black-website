$(document).ready(function () {
    $('input').keydown(function (e) {
        if (e.key === 'Enter') {
            $('#js-name').hide();
            $('#js-openingMessage').hide();
            $('#js-greeting').text('Hello ' + $('#js-name').val());
            $('#js-dot1').fadeIn(1000, function () {
                $('#js-dot2').fadeIn(1000, function () {
                    $('#js-dot3').fadeIn(1000, function () {
                        $('.js-welcomeMessage').fadeIn(5000, function () {
                            
                            $(".js-welcomeMessage").addClass(
                              "js-welcomeMessage1"
                            );

                             $(".js-welcomeMessage").text(
                               "Welcome to the black website."
                             );

                            $('.js-instructions').fadeIn(1000, function () {

                                 $('.js-instructions').addClass(
                                   'js-instructions1'
                                 )
                                 $(".js-instructions").text(
                                   "The elements of this webpage are hidden in the void. Hover to find them."
                                 );
                                
                                $('.earth').fadeIn(1000, function () {
                                    $(".earth").addClass('earth1');
                                    $(".earthPosition").addClass('earthPosition1');
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
            d.getHours().toString().padStart(2, '0') + ":" +
            d.getMinutes().toString().padStart(2, '0') + ":" +
            d.getSeconds().toString().padStart(2, '0');
    }
});
