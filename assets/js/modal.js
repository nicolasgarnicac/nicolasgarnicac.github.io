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
                let modalTitle = document.createElement('H2');
                let modalBtn = document.createElement('button');
                let modalBtnGithub = document.createElement('button');
                let modalFooter = document.createElement('div');



                // Assign rigt values based on the Id
                body.className = "noScroll";
                modal.className = "modal";
                modal.setAttribute("id", project.id);
                modal.style.width = "85%";
                modal.style.height = "90%";
                modal.style.overflow = "hidden";
                modal.style.padding = "0px";
                modalContainer.className = "modal-container";

                // HEADER
                modalBtn.textContent = "X";
                modalBtn.style.color = "White";
                modalBtn.className= "close-modal";
                modalBtn.setAttribute("id", "close-modal");
                modalBtn.style.height="30px";
                modalBtn.style.width="30px";
                modalBtn.style.textAlign="center";
                modalBtn.style.backgroundColor = "#a2a2a2";

                modalTitle.textContent = project.title;
                modalHeader.appendChild(modalTitle);
                modalHeader.appendChild(modalBtn);
                modalHeader.className = "modal-header";
                modalHeader.style.height = "14%";
                modalHeader.style.width = "100%";
                modalHeader.style.marginLeft = "auto";
                modalHeader.style.marginRight = "auto";
                modalHeader.style.paddingLeft = '5%';
                modalHeader.style.paddingRight = '5%';
                modalHeader.style.paddingTop = '2%';
                modalHeader.style.backgroundColor = "#a2a2a2";
                modalTitle.style.color="white";

                


                // CONTENT
                modalContent.style.width = "90%";
                modalContent.style.height = "70%";
                modalContent.style.overflowX = "hidden";
                modalContent.style.overflowY = "auto";
                modalContent.style.marginLeft = "auto";
                modalContent.style.marginRight = "auto";
                modalContent.style.paddingTop = "2%";
                modalContent.style.paddingRight = "2%"; 

                // FOOTER
                modalBtnGithub.textContent = 'View code';
                modalBtnGithub.className = "button primary small icon brands fa-github";
                modalFooter.style.width = "90%";
                modalFooter.style.height = "15%";
                modalFooter.style.marginLeft = "auto";
                modalFooter.style.marginRight = "auto";
                // modalFooter.style.borderBottom = '2px solid blue';
                modalFooter.style.backgroundColor = '';
                modalFooter.appendChild(modalBtnGithub);
                modalFooter.style.paddingTop= "15px"
                modalFooter.style.paddingBottom= "15px"
                
                //Load an HTML file with the project content
                var xhr = new XMLHttpRequest();

                // set the onload function
                xhr.onload = function() {
                
                  // set the content of the div to the response text
                  modal.appendChild(modalHeader);
                  modal.appendChild(modalContent);
                  modal.appendChild(modalFooter);
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

    // // Agregar evento touchstart
    // item.addEventListener('touchstart', function() {
    //     alert("ringo ringo")
    // });
})