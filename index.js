// code your solution here
function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun();
saturdayFun("bathe my dog");

function mondayWork(activity1 = 'go to the office'){
    return `This Monday, I will ${activity1}.`;
}
mondayWork();
mondayWork("work from home");

function wrapAdjective(quo = "*"){
    return function(adjective = 'awesome'){
        return `You are ${quo}${adjective}${quo}!`
    }
}