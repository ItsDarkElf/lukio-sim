let multiplier = 1;
let money = 0;
let maxFunding = 0;
let funding = 0;
let maxStudents = 10;
let students = 0;
let teachers = 0;

$(document).ready(function() {
    $(".buttonImg").css("width", "25%");
    $(".buttonImg").css("height", "25%");
    $(".buttonImg").click(function(){
        money += 1*multiplier;
        console.log("Money: " + money);
        $("#moneyDisplay").text("Money: " + money);
        $(".buttonImg").css("width", "26%");
        $(".buttonImg").css("height", "26%");
        setTimeout(function(){
            $(".buttonImg").css("width", "25%");
            $(".buttonImg").css("height", "25%");
        }, 100);
    });
    let incomeLoop = true;
    setInterval(() => {
        const income1 = money;
        setTimeout(function(){
            const income2 = money;
            $("#incomeDisplay").text("Income: " + (income2 - income1) + "/sec");
        }, 1000);
    }, 1000);
    setInterval(() => {
        students += teachers;
        if (students > maxStudents){
            students = maxStudents;
        };
        maxFunding = students * 10;
        funding = Math.ceil(students / 2);
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
});