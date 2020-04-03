function readData() {
    var dd = document.getElementById("dd").value; //get value date input
    var dd = document.getElementById("mm").value; //get value month input
    var dd = document.getElementById("yy").value; //get value year input
    var male = document.getElementById("male").checked; //return true if male button selected and false if unselected
    var female = document.getElementById("female").checked; //return true if female button selected and false if unselected
    var days = document.getElementById["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] //array for days
    var maleNames = document.getElementById["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yao", "Kofi", "Kwame"] //array for maleNames
    var femaleNames = document.getElementById["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"] //array for femaleNames
    var birthDate = new Date(mm + '/' + dd + '/' + yy);

    var daysOfTheWeek = birthDate.getDate(); //calculation of days of the week.
    if (dd <=0 || dd>31) {// ensures the user put a date and validates the dates.
            document.getElementById("error").innerText = "Please enter a valid date" // shows an error message
            document.getElementById("error")
    }    else if ((mm === "January" || mm === "March" || mm === "May" || mm === "July" || mm === "August" || mm === "October" || mm === "December") && (dd <= 0 || dd > 30)){
            document.getElementById("error").innerText = "Please enter a valid date!" 
            document.getElementById("error")
    }   else if (mm === "---"){
            document.getElementById("error").innerText = "Please select a month!" 
            document.getElementById("error")
    }   else if (yy <= 0 || yy > 2020){
            document.getElementById("error").innerText = "Please Enter a valid year!"
            document.getElementById("error")
    }   else if ((mm === "February") && (dd <= 0 || dd > 29) && (0 == yy % 4)){
            document.getElementById("error").innerText = "Please enter a valid date!"
            document.getElementById("error")
    }   else if ((mm === "February") && (dd <= 0 || dd > 28) && (0 != yy % 4)){
            document.getElementById("error").innerText = "Please enter a valid date!"
            document.getElementById("error")
    }   else if (male === true){
            document.getElementById("result").innerHTML = "You were born on a " + days[dayOfTheWeek] + ".\n" + "Your Akan name is " + maleNames[dayOfTheWeek] + "!"
            document.getElementById("result").style
    }   else if (female === true){
            document.getElementById("result").innerHTML = "You were born on a " + days[dayOfTheWeek] + ".\n" + "Your Akan name is " + femaleNames[dayOfTheWeek] + "!"
            document.getElementById("result")
    }    else if ((female === false) && (male === false)){
            document.getElementById("error").innerText = "Please select gender!"
            document.getElementById("error")
    }
} 


