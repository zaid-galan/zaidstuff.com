function generate(){
    const website = document.getElementById("website").value;
    const name1 = document.getElementById("name1").value;
    const name2 = document.getElementById("name2").value;
    const name3 = document.getElementById("name3").value;
    const randomNum1 = Math.floor(Math.random() * 1004);
    const randomNum2 = Math.floor(Math.random() * 1004);
    const randomNum3 = Math.floor(Math.random() * 1004);
    const randomNum4 = Math.floor(Math.random() * 1004);
    const randomNum5 = Math.floor(Math.random() * 1004);
    const randomNum6 = Math.floor(Math.random() * 1004);
    const randomNum7 = Math.floor(Math.random() * 1004);
    if (website === "" || name1 === "" || name2 === "" || name3 === "") {
        alert("Please fill in all fields.");
        return;
    }
    if (randomNum1 === 1004) {
        randomNum1 = '&';
    } else if (randomNum1 === 1003) {
        randomNum1 = '%';
    } else if (randomNum1 === 1002) {
        randomNum1 = '!';
    } else if (randomNum1 === 1001) {
        randomNum1 = '@';
    } else if (randomNum1 === 1000) {
        randomNum1 = '#';
    } else if (randomNum1 === 999) {
        randomNum1 = '$';
    } else if (randomNum1 === 998) {
        randomNum1 = '%';
    } else if (randomNum1 === 997) {
        randomNum1 = '^';
    } else if (randomNum1 === 996) {
        randomNum1 = '&';
    } else if (randomNum1 === 995) {
        randomNum1 = '*';
    }
    if (randomNum2 === 1004) {
        randomNum2 = '&';
    } else if (randomNum2 === 1003) {
        randomNum2 = '%';
    } else if (randomNum2 === 1002) {
        randomNum2 = '!';
    } else if (randomNum2 === 1001) {
        randomNum2 = '@';
    } else if (randomNum2 === 1000) {
        randomNum2 = '#';
    } else if (randomNum2 === 999) {
        randomNum2 = '$';
    } else if (randomNum2 === 998) {
        randomNum2 = '%';
    } else if (randomNum2 === 997) {
        randomNum2 = '^';
    } else if (randomNum2 === 996) {
        randomNum2 = '&';
    } else if (randomNum2 === 995) {
        randomNum2 = '*';
    }
    if (randomNum3 === 1004) {
        randomNum3 = '&';
    } else if (randomNum3 === 1003) {
        randomNum3 = '%';
    } else if (randomNum3 === 1002) {
        randomNum3 = '!';
    } else if (randomNum3 === 1001) {
        randomNum3 = '@';
    } else if (randomNum3 === 1000) {
        randomNum3 = '#';
    } else if (randomNum3 === 999) {
        randomNum3 = '$';
    } else if (randomNum3 === 998) {
        randomNum3 = '%';
    } else if (randomNum3 === 997) {
        randomNum3 = '^';
    } else if (randomNum3 === 996) {
        randomNum3 = '&';
    } else if (randomNum3 === 995) {
        randomNum3 = '*';
    }
    if (randomNum4 === 1004) {
        randomNum4 = '&';
    } else if (randomNum4 === 1003) {
        randomNum4 = '%';
    } else if (randomNum4 === 1002) {
        randomNum4 = '!';
    } else if (randomNum4 === 1001) {
        randomNum4 = '@';
    } else if (randomNum4 === 1000) {
        randomNum4 = '#';
    } else if (randomNum4 === 999) {
        randomNum4 = '$';
    } else if (randomNum4 === 998) {
        randomNum4 = '%';
    } else if (randomNum4 === 997) {
        randomNum4 = '^';
    } else if (randomNum4 === 996) {
        randomNum4 = '&';
    } else if (randomNum4 === 995) {
        randomNum4 = '*';
    }
    if (randomNum5 === 1004) {
        randomNum5 = '&';
    } else if (randomNum5 === 1003) {
        randomNum5 = '%';
    } else if (randomNum5 === 1002) {
        randomNum5 = '!';
    } else if (randomNum5 === 1001) {
        randomNum5 = '@';
    } else if (randomNum5 === 1000) {
        randomNum5 = '#';
    } else if (randomNum5 === 999) {
        randomNum5 = '$';
    } else if (randomNum5 === 998) {
        randomNum5 = '%';
    } else if (randomNum5 === 997) {
        randomNum5 = '^';
    } else if (randomNum5 === 996) {
        randomNum5 = '&';
    } else if (randomNum5 === 995) {
        randomNum5 = '*';
    }
    if (randomNum6 === 1004) {
        randomNum6 = '&';
    } else if (randomNum6 === 1003) {
        randomNum6 = '%';
    } else if (randomNum6 === 1002) {
        randomNum6 = '!';
    } else if (randomNum6 === 1001) {
        randomNum6 = '@';
    } else if (randomNum6 === 1000) {
        randomNum6 = '#';
    } else if (randomNum6 === 999) {
        randomNum6 = '$';
    } else if (randomNum6 === 998) {
        randomNum6 = '%';
    } else if (randomNum6 === 997) {
        randomNum6 = '^';
    } else if (randomNum6 === 996) {
        randomNum6 = '&';
    } else if (randomNum6 === 995) {
        randomNum6 = '*';
    }
    if (randomNum7 === 1004) {
        randomNum7 = '&';
    } else if (randomNum7 === 1003) {
        randomNum7 = '%';
    } else if (randomNum7 === 1002) {
        randomNum7 = '!';
    } else if (randomNum7 === 1001) {
        randomNum7 = '@';
    } else if (randomNum7 === 1000) {
        randomNum7 = '#';
    } else if (randomNum7 === 999) {
        randomNum7 = '$';
    } else if (randomNum7 === 998) {
        randomNum7 = '%';
    } else if (randomNum7 === 997) {
        randomNum7 = '^';
    } else if (randomNum7 === 996) {
        randomNum7 = '&';
    } else if (randomNum7 === 995) {
        randomNum7 = '*';
    }
    const password = `${website}${name1}${randomNum1}${name2}${randomNum2}${name3}${randomNum3}${randomNum4}${randomNum5}${randomNum6}${randomNum7}`;
    document.getElementById("website").value = "";
    document.getElementById("name1").value = "";
    document.getElementById("name2").value = "";
    document.getElementById("name3").value = "";
    document.getElementById("password").value = password;
}
function copyPassword() {
    const password = document.getElementById("password").value;
    navigator.clipboard.writeText(password).then(() => {
        alert("Password copied to clipboard!");
    }, () => {
        alert("Failed to copy password.");
    });
}