let multiplier = 1;
let money = 0;
let maxFunding = 0;
let funding = 0;
let maxStudents = 10;
let students = 0;
let teachers = 0;

if (Cookies.get('multiplier') != undefined){ multiplier = parseFloat(Cookies.get('multiplier'))};
if (Cookies.get('money') != undefined){ money = parseFloat(Cookies.get('money'))};
if (Cookies.get('maxFunding') != undefined){ maxFunding = parseFloat(Cookies.get('maxFunding'))};
if (Cookies.get('funding') != undefined){ funding = parseFloat(Cookies.get('funding'))};
if (Cookies.get('maxStudents') != undefined){ maxStudents = parseFloat(Cookies.get('maxStudents'))};
if (Cookies.get('students') != undefined){ students = parseFloat(Cookies.get('students'))};
if (Cookies.get('teachers') != undefined){ teachers = parseFloat(Cookies.get('teachers'))};

multiplier = Math.floor(multiplier);
money = Math.floor(money);
maxFunding = Math.floor(maxFunding);
funding = Math.floor(funding);
maxStudents = Math.floor(maxStudents);
students = Math.floor(students);
teachers = Math.floor(teachers);

$(document).ready(function() {
    if (teachers >= 1){
        $("#trainTeachersBtn").show();
        $("#hireTeacherBtn").text("Hire Teacher (Cost: " + teacherCost + ")" );
        $("#trainTeachersBtn").text("Train Teacher (Cost: " + trainingCost + ")" );
        $("#teachersDisplay").text("Teachers: " + teachers)
    };
    $(".buttonImg").css("width", "25%");
    $(".buttonImg").css("height", "25%");
    $(".buttonImg").click(function(){
        money += 1*multiplier+students;
        console.log("Money: " + money);
        $("#moneyDisplay").text("Money: " + money);
        $(".buttonImg").css("width", "26%");
        $(".buttonImg").css("height", "26%");
        setTimeout(function(){
            $(".buttonImg").css("width", "25%");
            $(".buttonImg").css("height", "25%");
        }, 100);
    });
    setInterval(() => {
        const income1 = money;
        setTimeout(function(){
            const income2 = money;
            $("#incomeDisplay").text("Income: " + (income2 - income1) + "/sec");
        }, 1000);
    }, 1000);
    setInterval(() => {
        maxStudents = teachers * 5 * training;
        students += teachers;
        if (students > maxStudents){
            students = maxStudents;
        };
        maxFunding = students * 10;
        funding += Math.ceil(students / 2);
        if (funding > maxFunding){
            funding = maxFunding;
        };
        $("#studentsDisplay").text("Students: " + students);
        $("#fundingDisplay").text("Funding: " + funding);
    }, 2000);
    setInterval(() => {
        money += funding;
        $("#moneyDisplay").text("Money: " + money);
    }, 1250);
    setInterval(() => {
        Cookies.set('money', money, { expires: 3 });
        Cookies.set('maxFunding', maxFunding, { expires: 3 });
        Cookies.set('funding', funding, { expires: 3 });
        Cookies.set('maxStudents', maxStudents, { expires: 3 });
        Cookies.set('students', students, { expires: 3 });
        Cookies.set('teachers', teachers, { expires: 3 });
        Cookies.set('multiplier', multiplier, { expires: 3 });
        Cookies.set('training', training, { expires: 3 });
        Cookies.set('teacherCost', teacherCost, { expires: 3 });
        Cookies.set('trainingCost', trainingCost, { expires: 3 });
    }, 1000);
});