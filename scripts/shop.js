let teacherCost = 5;
let trainingCost = 50;

$(document).ready(function() {
    $(".teacherTraining").hide();
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
                $(".teacherTraining").show();
            };
        };
    });
    $("#trainTeacherBtn").click(function(){
        if (money >= trainingCost){
            money -= trainingCost;
            trainingCost **= 1.3;
            trainingCost = Math.floor(trainingCost);
            st
            $("#moneyDisplay").text("Money: " + money);
            $("#trainTeachersBtn").text("Train Teacher (Cost: " + trainingCost + ")" );
        };
    });
});