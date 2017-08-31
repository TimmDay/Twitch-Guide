// BUTTONS

//initial conditions
$("#arrow2").addClass('hidden');
$("#arrow3").addClass('hidden');

//first button
$("#btn-all").click(function(){
    $("#arrow1").removeClass('hidden');
    $("#arrow2").addClass('hidden');
    $("#arrow3").addClass('hidden');
});

//second button
$("#btn-online").click(function(){
    $("#arrow1").addClass('hidden');
    $("#arrow2").removeClass('hidden');
    $("#arrow3").addClass('hidden');
});

//third button
$("#btn-offline").click(function(){
    $("#arrow1").addClass('hidden');
    $("#arrow2").addClass('hidden');
    $("#arrow3").removeClass('hidden');
});