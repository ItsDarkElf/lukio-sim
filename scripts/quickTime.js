let quickTimeEvents = ["budjetCuts", "teacherStrike", "studentProtest", "graduationBonus","shcoolShooting"];

$(document).ready(function() {
    $("#quickTimeDisplay").hide();
    setInterval(() => {
        if (quickTimeEvents[Math.floor(Math.random()*10)] == "budjetCuts"){
            $("#quickTimeDisplay").text("Budjettisi on leikattu! Menetit puolet rahoituksestasi!");
            $("#quickTimeDisplay").fadeIn(500);
            console.log("Budjettisi on leikattu! Menetit puolet rahoituksestasi!");
            funding = Math.floor(funding / 2);
            setTimeout(() => {
                $("#quickTimeDisplay").fadeOut(500);
            }, 5000);
        }else if (quickTimeEvents[Math.floor(Math.random()*10)] == "teacherStrike"){
            $("#quickTimeDisplay").text("Opettajasi ovat lakossa! Opettajasi katoavat 10 sekunniksi!");
            $("#quickTimeDisplay").fadeIn(500);
            const originalTeachers = Math.floor(teachers * 0.75);
            teachers -= Math.floor(teachers * 0.75);
            setTimeout(() => {
                $("#quickTimeDisplay").fadeOut(500);
            }, 5000);
            setTimeout(() => {
                teachers += originalTeachers;
            }, 5000);
        }else if (quickTimeEvents[Math.floor(Math.random()*10)] == "studentProtest"){
            $("#quickTimeDisplay").text("Opiskelijasi protestoivat! Menetit 10% opiskelijoistasi!");
            $("#quickTimeDisplay").fadeIn(500);
            students -= students*0.1;
            if (students < 0){
                students = 0;
            };
            setTimeout(() => {
                $("#quickTimeDisplay").fadeOut(500);
            }, 5000);
        }else if (quickTimeEvents[Math.floor(Math.random()*10)] == "graduationBonus"){
            $("#quickTimeDisplay").text("Opiskelijasi valmistuivat! Sait bonuksen rahoituksestasi!");
            $("#quickTimeDisplay").fadeIn(500);
            money += Math.ceil(funding*0.2);
            if (funding < 10){
                money += 100;
            };
            setTimeout(() => {
                $("#quickTimeDisplay").fadeOut(500);
            }, 5000);
        }else if(quickTimeEvents[Math.floor(Math.random()*10)] == "shcoolShooting"){
            $("#quickTimeDisplay").text("Kouluusi iski ampumavälikohtaus! Menetit osan opiskelijoistasi ja opettajistasi!");
            $("#quickTimeDisplay").fadeIn(500);
            students -= Math.floor(students * 0.2);
            teachers -= Math.floor(teachers * 0.2);
            if (students < 0){
                students = 0;
            };
            if (teachers < 0){
                teachers = 0;
            };
            setTimeout(() => {
                $("#quickTimeDisplay").fadeOut(500);
            }, 5000);
        };
    }, 10000);
});