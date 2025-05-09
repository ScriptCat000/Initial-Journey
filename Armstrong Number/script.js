const checkBtn = document.getElementById("check");

checkBtn.addEventListener('click', ()=> {
    const result = document.getElementById("result");
    const userInput = document.getElementById("user-input").value;
    const numInput = Number(userInput);

    const splitted = String(numInput).split("").map(Number);

    let sum = 0;
    for (i = 0; i < splitted.length; i ++){
        sum += Math.pow(splitted[i], splitted.length);
    }
    if (sum === numInput){
        result.textContent = `${userInput} is an Armstrong Number`;
    }
    else {
        result.textContent = `${userInput} is not an Armstrong Number`;
    }
});