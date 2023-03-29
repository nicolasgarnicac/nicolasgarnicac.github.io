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
                modal.style.width = "60%";
                modal.style.height = "95%";
                modalContent.style.width = "75%";
                modalContent.style.height = "78%";
                modalContent.style.overflowX = "hidden";
                modalContent.style.overflowY = "scroll";
                modal.className = "modal";
                modal.setAttribute("id", project.id);
                modalHeader.className = "modal-header";
                modalHeader.style.height = "12%";
                modalHeader.style.width = "85%";
                modalFooter.style.width = "85%";
                modalFooter.style.height = "10%";
                modalTitle.textContent = project.title;
                modalBtn.textContent = "X";
                modalBtn.className= "close-modal";
                modalBtn.setAttribute("id", "close-modal");
                modalBtnGithub.textContent = 'View code';
                modalDescription.textContent = project.description;
                body.className = "noScroll";
                modalBtnGithub.className = "button icon brands fa-github";
                modalHeader.appendChild(modalTitle);
                modalHeader.appendChild(modalBtn);
                modalContent.style.marginLeft = "auto";
                modalContent.style.marginRight = "auto";
                modalHeader.style.marginLeft = "auto";
                modalHeader.style.marginRight = "auto";
                modalFooter.style.marginLeft = "auto";
                modalFooter.style.marginRight = "auto";
                
                //Load an HTML file with the project content
                var xhr = new XMLHttpRequest();

                // set the onload function
                xhr.onload = function() {
                
                  // set the content of the div to the response text
                  modal.appendChild(modalHeader);
                  modal.appendChild(modalFooter);
                  modalFooter.appendChild(modalBtnGithub);
                  modal.appendChild(modalDescription);
                  modal.appendChild(modalContent);
                  modalContent.innerHTML = xhr.responseText;
                  
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