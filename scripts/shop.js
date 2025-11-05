let teacherCost = 15;
let trainingCost = 100;
let training = 1;
let classrooms = 1;
let classroomCost = 500;

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
            $("#teachersDisplay").text("Opettajat: " + teachers);
            $("#hireTeacherBtn").text("Palkkaa Opettaja: "+teachers+"\n"+"(Hinta: " + teacherCost + ")" );
            if (teachers > 0){
                $("#trainTeachersBtn").show();
            };
        };
    });
    $("#trainTeachersBtn").click(function(){
        if (money >= trainingCost){
            money -= trainingCost;
            trainingCost *= 1.1;
            trainingCost = Math.floor(trainingCost);
            training += 1;
            $("#trainTeachersBtn").text("Kouluta Opettajiasi: "+training+"\n"+"(Hinta: " + trainingCost + ")" );
        };
    });
    $("#buyClassroom").click(function(){
        if (money >= classroomCost){
            money -= classroomCost;
            classroomCost *= 1.1;
            classroomCost = Math.floor(classroomCost);
            classrooms += 1;
            $("#buyClassroom").text("Osta uusi luokkatila: "+classrooms+"\n"+"(Hinta: " + classroomCost + ")" );
        };
    });
});