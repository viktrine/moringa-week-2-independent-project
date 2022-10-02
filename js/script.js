function myFunction(event) {
    event.preventDefault();
    // get variables
    var exampleInputYear = parseInt(document.getElementById('exampleInputYear').value);
    var exampleInputMonth = parseInt(document.getElementById('exampleInputMonth').value);
    var exampleInputDay = parseInt(document.getElementById('exampleInputDay').value);
    var gendermale = document.getElementById('gendermale').checked;
    var genderfemale = document.getElementById('genderfemale').checked;

    //  create akan name arrays
    var akanFemaleName =  ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    var akanMaleName =  ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];


    if (checkValidDay(exampleInputDay) && checkValidMonth(exampleInputMonth)) {
        if (gendermale) {
            var gender = "male";
        } else if (genderfemale) {
            var gender = "female";
        } else {
            alert("Kindly select gender");
        }

        // change to fixed to get an integer index
        var dayOfWeek =((((getCentury(exampleInputYear)/4) -2*getCentury(exampleInputYear)-1) + ((5*getYear(exampleInputYear)/4) ) + ((26*(exampleInputMonth+1)/10)) + exampleInputDay ) % 7).toFixed();
        
        // get the name based on gender and dayOfWeek
        if(gender === "male"){
            var akanName = akanMaleName[dayOfWeek];
        }else if(gender === "female"){
            var akanName = akanFemaleName[dayOfWeek];
        }else{
            var akanName = "Unkonwn";
        }
        // clear already existing code and add new according to calculation
        document.getElementById('akan').clear;
        document.getElementById('akan').textContent=akanName;
    } else {
        alert("Kindly enter valid day and month");
    }
}

// check valid day
function checkValidDay(day) {
    if (day <= 0 || day > 31) {
        return false;
    } else {
        return true;
    }
}

// check valid day
function checkValidMonth(month) {
    if (month <= 0 || month > 12) {
        return false;
    } else {
        return true;
    }
}

// get century
function getCentury(fullYear){
    return fullYear.toString()[0]+fullYear.toString()[1];
}

// get century
function getYear(fullYear){
    return fullYear.toString()[2]+fullYear.toString()[3];
}