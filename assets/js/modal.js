
let project = document.getElementById("project");
let modal = document.getElementById("myModal");
let span = document.getElementById("btn-close");

document.addEventListener('DOMContentLoaded',  popup)

function popup () {

        project.onclick = function () {
            modal.style.display = "block";
        }
        
        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
        }
        
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
            modal.style.display = "none";
            }
        } 

}


