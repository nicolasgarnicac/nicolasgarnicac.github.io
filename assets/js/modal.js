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
                    let modalBtnGithub = document.createElement('button');

                    // Assign rigt values based on the Id
                    body.className = "noScroll";
                    modal.className = "modal";
                    modal.setAttribute("id", project.id);
                    modal.style.width = "95%";
                    modal.style.height = "95%";
                    modal.style.overflow = "hidden";
                    modal.style.padding = "0px";
                    modal.style.backgroundColor = "hsl(0, 7%, 97%)";
                    modalContainer.className = "modal-container";
                    modal.style.cursor = "default";

                    // HEADER

                    // Closing button
                    modalBtn.textContent = "×";
                    modalBtn.style.color = "white";
                    modalBtn.style.backgroundColor = "rgba(255, 255, 255, 0.0)";
                    modalBtn.className = "close-modal";
                    modalBtn.setAttribute("id", "close-modal");
                    modalBtn.style.height = "30px";
                    modalBtn.style.width = "30px";
                    modalBtn.style.textAlign = "center";
                    modalBtn.style.borderRadius = "30%";
                    modalBtn.style.fontSize = "35px"
                    // modalBtn.style.fontWeight = "bold";
                    modalBtn.style.border = "none";

                    modalTitle.textContent = project.title;
                    modalHeader.appendChild(modalTitle);
                    modalHeader.appendChild(modalBtn);
                    modalHeader.className = "modal-header";
                    modalHeader.style.height = "12%";
                    modalHeader.style.width = "100%";
                    modalHeader.style.paddingLeft = '5%';
                    modalHeader.style.paddingRight = '2%';
                    // modalHeader.style.paddingBottom = '2%';
                    modalHeader.style.backgroundImage = "linear-gradient(to left, #244869, #3b6668, #966976)";
                    modalTitle.style.color = "#d6f3f8";
                    modalTitle.style.height = "100%";
                    modalTitle.style.paddingTop = "3%"
                    modalTitle.style.fontSize = "1.5em";

                    // CONTENT
                    modalContent.style.width = "100%";
                    modalContent.style.height = "100%";
                    modalContent.style.overflowX = "hidden";
                    modalContent.style.overflowY = "auto";
                    modalContent.style.marginLeft = "auto";
                    modalContent.style.marginRight = "auto";
                    modalContent.style.paddingTop = "2%";
                    modalContent.style.paddingLeft = "2%";
                    modalContent.style.backgroundColor = "hsl(0, 7%, 97%)";
                    
                    //Load an HTML file with the project content
                    var xhr = new XMLHttpRequest();

                    // set the onload function
                    xhr.onload = function() {

                        // set the content of the div to the response text
                        modal.appendChild(modalHeader);
                        modal.appendChild(modalContent);
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