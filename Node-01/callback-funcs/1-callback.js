function sayName(text,callback) {
          setTimeout(() => {
            console.log(text); 
            callback(); 
          }, 3000);  
}

function saySurname() {
    console.log(" Surname");
}

// sayName("Tommy",saySurname);
// saySurname();
sayName("Tomyy",function () {console.log("Surname2");});