import data from './projects.json' assert { type: 'json' };
const image = document.querySelectorAll('[data-modal]');
const body = document.querySelector('body')

console.log(image);

// get project info
let projectsList = data.list;
// click event for the project images
image.forEach(item => {
    // console.log(item.id)
    item.addEventListener('click', (e) => {
            projectsList.forEach(project => {
                if (e.target.id == project.id) {
                    // create modal inside click event
                    let container = e.target.querySelector('section');
                    let modalContainer = document.createElement('div');
                    let modal = document.createElement('div');
                    let modalHeader = document.createElement('div');
                    let modalContent = document.createElement('div');
                    let modalTitle = document.createElement('H2');
                    let modalBtn = document.createElement('button');
                    let modalBtnGithub = document.createElement('a');

                    // Assign rigt values based on the Id
                    body.className = "noScroll";

                    modalContainer.className = "modal-container";

                    modal.className = "modal";
                    modal.setAttribute("id", project.id);

                    // HEADER

                    // Closing button
                    modalBtn.textContent = "×";
                    modalBtn.className = "close-modal";
                    modalBtn.setAttribute("id", "close-modal");
            

                   
                    modalHeader.appendChild(modalTitle);
                    modalHeader.appendChild(modalBtn);
                    modalHeader.className = "modal-header";

                    modalTitle.className = "modal-title"
                    modalTitle.textContent = project.title;


                    // CONTENT
                    modalContent.style.width = "100%";
                    modalContent.style.height = "100%";
                    modalContent.style.overflowX = "hidden";
                    modalContent.style.overflowY = "auto";
                    modalContent.style.marginLeft = "auto";
                    modalContent.style.marginRight = "auto";
                    modalContent.style.paddingTop = "2%";
                    modalContent.style.paddingLeft = "2%";
                    modalContent.style.backgroundColor = "hsl(0, 3%, 92%)";
                    
                    // GITHUB BUTON
                    modalBtnGithub.className= "btn-github";
                    modalBtnGithub.href = project.GitHub_link;
                    modalBtnGithub.target="_blank";
                    var iconElement = document.createElement("i");
                    iconElement.className = "fab fa-github github-icon";
                    iconElement.style.fontSize = "large";
                    iconElement.style.padding = "5%";

                    // Append the icon element to the anchor element
                    modalBtnGithub.appendChild(iconElement);

                    // Append the text node "View code" to the anchor element
                    modalBtnGithub.appendChild(document.createTextNode("View code"));



                    //Load an HTML file with the project content
                    var xhr = new XMLHttpRequest();

                    // set the onload function
                    xhr.onload = function() {

                        // set the content of the div to the response text
                        modal.appendChild(modalHeader);
                        modal.appendChild(modalContent);
                        modal.appendChild(modalBtnGithub);
                        //   modal.appendChild(modalFooter);
                        modalContent.innerHTML = xhr.responseText;

                    };

                    // open the request
                    xhr.open('GET', project.project_html, true);

                    // send the request
                    xhr.send();
                    // window.location.href = project.project_html

                    modalContainer.appendChild(modal);

                    container.appendChild(modalContainer);
                    


                    modalBtnGithub.addEventListener("click", function() {
                        window.open(project.GitHub_link, "_blank");
                    });

                    // Close button
                    modalBtn.addEventListener('click', () => {
                        console.log(`clickee ${e.target.id} y me trajo el projecto ${project.title}`);
                        container.innerHTML = "";
                        body.classList.remove("noScroll");
                    })
                }
            })


        })
 
})