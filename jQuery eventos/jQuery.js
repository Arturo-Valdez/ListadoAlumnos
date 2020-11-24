$(document).ready(function(){/*aparecer texto desde jQuery*/
    $('#clase').html('<strong>Programacion Web</strong>');
    $('#clase').css('font-size', '30px')

    $('#grupo').html('<strong>Grupo 5to. A</strong>');
    $('#grupo').css('font-size', '22px')

    $('#alumno').html('Profesor:<strong> José Nabor Ramírez Morfín</strong>');
    $('#alumno').css('font-size', '15px')

    $('#listado').html('<strong>Listado de alumnos</strong>');
    $('#listado').css('font-size', '25px')
    $('p').css('text-align', 'center')
});
$(document).ready(function(){
    $('ol li:nth-child(odd)').css('background-color', 'rgba(0,0,0,0.1)')
    $('li').css('cursor', 'pointer')
    $('ol il').css('margin','auto')
    $('ol li').css('transition','all 0.5s')
    $('ol').css('width','70%')
    $('ol').css('height','50%')
    $('ol').css('margin','auto')
    $('ol').css('border','solid 0.1px')
});
$('.datos').css('background','#808000')
$('.datos').css('width','70%')
$('.datos').css('color','#fff')
$('.datos').css('height','50%')
$('.datos').css('margin','auto')
$('li').click(function () { 

    $('.datos').html('<strong>Resultado: </strong>'+$(this).text());
    //$('.datos').html('<strong>Resultado:</strong>');
});


