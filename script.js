function generateNumber() {
    let name = document.getElementById('userName').value; 
    let userAge = parseInt(document.getElementById('myAge').value); 
    let userGender = document.querySelector('input[name="gender"]:checked').value;
    let raceNumber = Math.floor(Math.random() * 1000); 

    if (userAge > 18 && userGender === 'male') {
        raceNumber += 1000; 
    }
    if (userAge > 18 && userGender === 'male'){
        document.getElementById("dogAge").innerHTML = `${name}'s race will begin at 9:30am, your race number is: ${raceNumber}`;
    } else if (userAge > 18 && userGender === 'female'){
        document.getElementById("dogAge").innerHTML = `${name}'s race will begin at 11:00am, your race number is: ${raceNumber}`;
    }
    else if (userAge < 18){
        document.getElementById("dogAge").innerHTML = `${name}'s race will begin at 12:30pm, your race number is: ${raceNumber}`;
    }
}
