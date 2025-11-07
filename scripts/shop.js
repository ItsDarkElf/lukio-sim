let teacherCost = 15;
let trainingCost = 100;
let training = 1;
let classrooms = 1;
let classroomCost = 200;

if (Cookies.get('teacherCost') != undefined){teacherCost = parseFloat(Cookies.get('teacherCost'))};
if (Cookies.get('trainingCost') != undefined){trainingCost = parseFloat(Cookies.get('trainingCost'))};
if (Cookies.get('training') != undefined){training = parseFloat(Cookies.get('training'))};
if (Cookies.get('classrooms') != undefined){classrooms = parseFloat(Cookies.get('classrooms'))};
if (Cookies.get('classroomCost') != undefined){classroomCost = parseFloat(Cookies.get('classroomCost'))};

teacherCost = Math.floor(teacherCost);
trainingCost = Math.floor(trainingCost);
training = Math.floor(training);

$(document).ready(function() {
    $("#trainTeachersBtn").hide();
    $("#hireTeacherBtn").click(function(){
        if (money >= teacherCost){
            money -= teacherCost;
            teachers += 1;
            teacherCost = teachers * 15 * 1.1;
            teacherCost = Math.ceil(teacherCost);
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
            training += 1;
            trainingCost = training * 100 * 1.1;
            trainingCost = Math.floor(trainingCost);
            $("#trainTeachersBtn").text("Kouluta Opettajiasi: "+training+"\n"+"(Hinta: " + trainingCost + ")" );
        };
    });
    $("#buyClassroom").click(function(){
        if (money >= classroomCost){
            money -= classroomCost;
            classrooms += 1;
            classroomCost = classrooms * 200 * 1.1;
            classroomCost = Math.floor(classroomCost);
            $("#buyClassroom").text("Osta uusi luokkatila: "+classrooms+"\n"+"(Hinta: " + classroomCost + ")" );
        };
    });
});