let edm = document.getElementById("edm");

edm.addEventListener("click", function () {
    let mainElements = document.getElementsByClassName("main-screen");

    for (let i = 1; i < mainElements.length; i++) {
       if( mainElements[i].style.backgroundColor == "white")
       {
            mainElements[i].style.backgroundColor = "#212121";
            mainElements[i].style.color = "#fff";
       }else{
            mainElements[i].style.backgroundColor = "white";
            mainElements[i].style.color = "#212121";
       }
        console.log("Clicked");
    }

    
});

function myFunction() {
     // Get the checkbox
     
     let checkBox = document.getElementById("chk");
     // Get the output text
     let menu = document.getElementsByClassName("menu")
     console.log(checkBox);
     // If the checkbox is checked, display the output text
     if (checkBox.checked == true){
          //console.log(checkBox.checked);
       menu.style.display = "block";
     } else {
          // console.log("hi");
       menu.style.display = "none";
     }
   }
