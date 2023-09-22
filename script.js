let convet_btn = document.getElementById("conv-btn");
let clear_form = document.getElementById("clear-form");
let type_field = document.getElementById("type-field");
let result_val = document.getElementById("result-val");
let temp = document.getElementById("temp");

// result
let reset = () => {
    type_field.value = "";
    result_val.value = "";
    result_val.style.display = "none";
};

// °F = °C * 9/5 + 32
// 0C = (f-32) * 18
let convert = () => {
    let t = temp.value;
    if (temp.value === "Farinhite") {
        let fari = type_field.value;
        let cel = (parseFloat(fari) - 32) * 18;
        result_val.value = `${cel} °C `;
    } else {
        let cel = type_field.value;
        let fari = parseFloat(cel) * 1.8 + 32;
        result_val.value = `${fari} °F `;
    }
};

let toggle_result = () => {
    let flag = 1;
    if (type_field.value == "") {
        alert("Please enter a temperature in °C/°F");
    } else if (flag == 1) {
        result_val.style.display = "inline";
        flag = 0;
    } else {
        result_val.style.display = "none";
        flag = 1;
    }
};

convet_btn.addEventListener("click", convert);
convet_btn.addEventListener("click", toggle_result);
clear_form.addEventListener("click", reset);