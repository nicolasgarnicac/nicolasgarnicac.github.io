import data from './projects.json' assert {type: 'json'} ;
const image = document.querySelectorAll('[data-modal]');
const body = document.querySelector('body')

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
                let modalTitle = document.createElement('H1');
                let modalBtn = document.createElement('button');
                let modalBtnGithub = document.createElement('button');
                let modalDescription = document.createElement('p');
                let modalFooter = document.createElement('div');



                // Assign rigt values based on the Id
                modalContainer.className = "modal-container";
                modal.className = "modal";
                modal.setAttribute("id", project.id);
                modalHeader.className = "modal-header";
                modalTitle.textContent = project.title;
                modalBtn.textContent = "X";
                modalBtn.className= "close-modal";
                modalBtn.setAttribute("id", "close-modal");
                modalBtnGithub.textContent = 'GitHub';
                modalDescription.textContent = project.description;
                body.className = "noScroll";
                modalBtnGithub.className = "button primary icon solid fa-online";
                modalHeader.appendChild(modalTitle);
                modalHeader.appendChild(modalBtn);
                
                //Load an HTML file with the project content
                var xhr = new XMLHttpRequest();

                // set the onload function
                xhr.onload = function() {
                
                  // set the content of the div to the response text
                  modal.appendChild(modalHeader);
                  modal.appendChild(modalDescription);
                  modal.appendChild(modalContent)
                  modal.appendChild(modalFooter)
                  modalContent.innerHTML = xhr.responseText;
                  modalFooter.appendChild(modalBtnGithub);
                };
            
                // open the request
                xhr.open('GET', project.project_html, true);
            
                // send the request
                xhr.send();

                modalContainer.appendChild(modal);

                container.appendChild(modalContainer);

                modalBtnGithub.addEventListener("click", function() {
                    window.open(project.GitHub_link,"_blank");
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