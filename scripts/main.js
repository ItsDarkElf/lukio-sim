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
    $(".buttonImg").css("width", "25%");
    $(".buttonImg").css("height", "25%");
    $(".buttonImg").click(function(){
        money += 1*multiplier+students;
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
            $("#incomeDisplay").text("Tuottosi: " + (income2 - income1) + "/sek");
        }, 1000);
    }, 1000);
    setInterval(() => {
        maxStudents = teachers * training;
        students += teachers;
        if (students > maxStudents){
            students = maxStudents;
        };
        maxFunding = students * 10;
        funding += Math.ceil(students / 2);
        if (funding > maxFunding){
            funding = maxFunding;
        };
        $("#studentsDisplay").text("Oppilaasi: " + students);
        $("#fundingDisplay").text("Rahoituksesi: " + funding);
    }, 2000);
    setInterval(() => {
        money += funding;
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

$(document).ready(function() {
    setTimeout(() => {
        if (teachers >= 1){
            $("#trainTeachersBtn").show();
            $("#hireTeacherBtn").text("Palkkaa Opettaja (Hinta: " + teacherCost + ")" );
            $("#trainTeachersBtn").text("Kouluta Opettajiasi (Hinta: " + trainingCost + ")" );
            $("#teachersDisplay").text("Opettajasi: " + teachers)
        };
    }, 100);
    setInterval(() => {
        if (money >= (10**60)){
            $("#moneyDisplay").text("Rahasi: " + Math.round(money / (10**58))/100 + " Dekiljoonaa");
        }else if (money >= (10**54)){
            $("#moneyDisplay").text("Rahasi: " + Math.round(money / (10**52))/100 + " Noviljoonaa");
        }else if (money >= (10**48)){
            $("#moneyDisplay").text("Rahasi: " + Math.round(money / (10**46))/100 + " Oktiljoonaa");
        }else if (money >= (10**42)){
            $("#moneyDisplay").text("Rahasi: " + Math.round(money / (10**40))/100 + " Septiljoonaa");
        }else if (money >= (10**36)){
            $("#moneyDisplay").text("Rahasi: " + Math.round(money / (10**34))/100 + " Sekstiljoonaa");
        }else if (money >= (10**30)){
            $("#moneyDisplay").text("Rahasi: " + Math.round(money / (10**28))/100 + " Kvintiljoonaa");
        }else if (money >= (10**24)){
            $("#moneyDisplay").text("Rahasi: " + Math.round(money / (10**22))/100 + " Kvadriljoonaa");
        }else if (money >= (10**18)){
            $("#moneyDisplay").text("Rahasi: " + Math.round(money / (10**16))/100 + " Triljoonaa");
        }else if (money >= (10**12)){
            $("#moneyDisplay").text("Rahasi: " + Math.round(money / (10**10))/100 + " Biljoonaa");
        }else if (money >= (10**9)){
            $("#moneyDisplay").text("Rahasi: " + Math.round(money / (10**7))/100 + " Miljardia");
        }else if (money >= (10**6)){
            $("#moneyDisplay").text("Rahasi: " + Math.round(money / (10**4))/100 + " Miljoonaa");
        }else if (money >= (10**3)){
            $("#moneyDisplay").text("Rahasi: " + Math.round(money/10)/100 + " Tuhatta");
        }else{
            $("#moneyDisplay").text("Rahasi: " + money);
            $("title").text("Lukio Simulator | " + money + "€");
        }
    }, 250);
});