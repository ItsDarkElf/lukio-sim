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
            teacherCost **= 1.2;
            teacherCost = Math.floor(teacherCost);
            teachers += 1;
            maxStudents = teachers ** 1.3;
            maxStudents = Math.ceil(maxStudents);
            $("#moneyDisplay").text("Money: " + money);
            $("#teachersDisplay").text("Teachers: " + teachers);
            $("#hireTeacherBtn").text("Hire Teacher (Cost: " + teacherCost + ")" );
            if (teachers > 0){
                $("#trainTeachersBtn").show();
            };
        };
    });
    $("#trainTeachersBtn").click(function(){
        if (money >= trainingCost){
            money -= trainingCost;
            trainingCost **= 1.3;
            trainingCost = Math.floor(trainingCost);
            training += 1;
            $("#moneyDisplay").text("Money: " + money);
            $("#trainTeachersBtn").text("Train Teacher (Cost: " + trainingCost + ")" );
        };
    });
});