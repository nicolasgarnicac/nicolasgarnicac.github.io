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
                let modalTitle = document.createElement('H1');
                let modalBtn = document.createElement('button');
                let modalDescription = document.createElement('p');

                // Assign rigt values based on the Id
                modalContainer.className = "modal-container";
                modal.className = "modal";
                modal.setAttribute("id", project.id);
                modalHeader.className = "modal-header";
                modalTitle.textContent = project.title;
                modalBtn.textContent = "X";
                modalBtn.className= "close-modal";
                modalBtn.setAttribute("id", "close-modal");
                modalDescription.textContent = project.description;
                body.className = "noScroll";

                modalHeader.appendChild(modalTitle);
                modalHeader.appendChild(modalBtn);

                modal.appendChild(modalHeader);
                modal.appendChild(modalDescription);

                modalContainer.appendChild(modal);

                container.appendChild(modalContainer);
                
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

// const modal = document.getElementById('modal-container');
// const close =  document.getElementById('close-modal');

// open.addEventListener('click', () =>{
//     modal.classList.add('show');
// })

// close.addEventListener('click', () => {
//     modal.classList.remove('show');
// })