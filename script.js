document.getElementById("ageForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const dob = new Date(document.getElementById("dob").value);
    const today = new Date();

if(dob =="Invalid Date" || dob >today){
    document.getElementById("result").textContent =" Please enter a valid past date.";
    return;
}
let years = today.getFullYear() - dob.getFullYear();
let months = today.getMonth() - dob.getMonth();
let days = today.getDate() -dob.getDate();

if (days < 0) {
    months--;
    const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += previousMonth.getDate();
}
if (months < 0){
    years--;
    months += 12;
}
document.getElementById("result").textContent = 
`You are ${years} year(s), ${months} month(s), and ${days} day(s) old.` ;

});