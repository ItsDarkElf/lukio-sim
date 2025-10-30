let teacherCost = 5;
let trainingCost = 50;
let training = 1;

if (Cookies.get('teacherCost') != undefined){teacherCost = parseFloat(Cookies.get('teacherCost'))};
if (Cookies.get('trainingCost') != undefined){trainingCost = parseFloat(Cookies.get('trainingCost'))};
if (Cookies.get('training') != undefined){training = parseFloat(Cookies.get('training'))};

teacherCost = Math.floor(teacherCost);
trainingCost = Math.floor(trainingCost);
training = Math.floor(training);

$(document).ready(function() {
    $("#trainTeachersBtn").hide();
    $("#hireTeacherBtn").click(function(){
        if (money >= teacherCost){
            money -= teacherCost;
            teacherCost *= 1.1;
            teacherCost = Math.ceil(teacherCost);
            teachers += 1;
            maxStudents = teachers ** 1.1;
            maxStudents = Math.ceil(maxStudents);
            $("#moneyDisplay").text("Rahasi: " + money);
            $("#teachersDisplay").text("Opettajat: " + teachers);
            $("#hireTeacherBtn").text("Palkkaa Opettaja (Hinta: " + teacherCost + ")" );
            if (teachers > 0){
                $("#trainTeachersBtn").show();
            };
        };
    });
    $("#trainTeachersBtn").click(function(){
        if (money >= trainingCost){
            money -= trainingCost;
            trainingCost *= 1.05;
            trainingCost = Math.floor(trainingCost);
            training += 1;
            $("#moneyDisplay").text("Rahasi: " + money);
            $("#trainTeachersBtn").text("Kouluta Opettajiasi (Hinta: " + trainingCost + ")" );
        };
    });
});