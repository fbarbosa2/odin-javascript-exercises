const leapYears = function(year) {
    isLeap = false;
    if(year % 4){
        isLeap = true;
    }

    if(year % 100 && year % 400){
        isLeap = true;
    }
    return isLeap;
};

// Do not edit below this line
module.exports = leapYears;
