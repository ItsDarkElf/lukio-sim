let day = 1;

$(document).ready(function(){
    setInterval(() => {
        day += 1;
        $("#dayDisplay").text("Päivä: " + day);
    }, 60000);
});