function validateForm() {
    var name = document.getElementById("name").value;
    var phone = document.getElementsByClassName("input1")[0].value;
    var email = document.getElementsByClassName("input1")[1].value;
    var checkbox = document.getElementsByClassName("input-checkbox")[0].checked;
    var message = document.getElementsByClassName("big-text")[0].value;

    if (name === "" || phone === "" || email === "" || message === "" || !checkbox) {
        alert("Пожалуйста, заполните все обязательные поля и подтвердите согласие на получение информации.");
        return false;
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Пожалуйста, введите корректный адрес электронной почты.");
        return false;
    }

    var phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        alert("Пожалуйста, введите корректный номер телефона из 10 цифр.");
        return false;
    }

    
    alert("Форма отправлена успешно!");
    return true;
}

document.querySelector(".form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    validateForm();
});