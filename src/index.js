import './less/index.less'
window.addEventListener("DOMContentLoaded", () => {

    // Your code goes here!
    // * [ ] Here are some event types you could try to use:
    //   * [ ] `mouseover`
    //   * [ ] `keydown`
    //   * [ ] `wheel`
    //   * [ ] `load`
    //   * [ ] `focus`
    //   * [ ] `resize`
    //   * [ ] `scroll`
    //   * [ ] `select`
    //   * [ ] `dblclick`
    //   * [ ] `drag / drop`

    //1
    let homeLink = document.querySelector('a');

    homeLink.addEventListener('mouseover', event => {
        event.target.style.textDecoration = 'underline';
    });

    //2
    let busLink = document.querySelector('form');
    console.log(busLink);

    busLink.addEventListener('keydown', event => {
        if (event.key === 'Enter') {

            event.target.style.backgroundColor = 'purple';
        }
    });

    //3
    document.addEventListener('wheel', (event) => {
        if (event.deltaY < 0) {
        document.querySelector('.container .intro h2').style.backgroundColor = 'purple';
        } else if (event.deltaY > 0) {
        console.log('Scrolling Down');
        }
    });
    //4
    document.addEventListener('DOMContentLoaded', (event) => {
        document.querySelector('.content-section .text-content h2').style.backgroundColor = 'purple';
    });

    //5
    const nameInput = document.querySelector('form #name');
    console.log(nameInput);
    const messageTextarea = document.getElementById('message');

    nameInput.addEventListener('focus', (event) => {
    nameInput.style.backgroundColor = 'red';
    });

    messageTextarea.addEventListener('focus', (event) => {
    messageTextarea.style.backgroundColor = 'red';
    });

    //6
    window.addEventListener('resize', (event) => {
        document.querySelector('.main-navigation .nav').style.backgroundColor = 'yellow';
    });

    //7
    window.addEventListener('scroll', (event) => {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'lightgreen';
        } else {
            header.style.backgroundColor = 'lightblue';
        }
    });

    //8
    const myInput = document.querySelector('form #name');
        
    myInput.addEventListener('select', (event) => {
        const selectedText = window.getSelection().toString();
        const adventureAwaitsSection = document.querySelector('.content-section.inverse-content h2');
        adventureAwaitsSection.style.backgroundColor = 'green';

    })

    //9
    const myButton = document.querySelector('.btn');

    myButton.addEventListener('dblclick', () => {
        alert('You double-clicked the button!');
    });

    //10
    const myLink = document.querySelector('a');

    myLink.addEventListener('click', (event) => {
    event.preventDefault();

    alert('Link click prevented!');
    });

    const dragContainer = document.getElementById('drag-container');
    const dropPhoto = document.getElementById('drop');

    dragContainer.addEventListener('dragstart', (event) => {
    console.log('drag started!');
    });

    dropPhoto.addEventListener('dragenter', (event) => {
    event.preventDefault();
    console.log('drag entered the drop target');
    dropPhoto.classList.add('highlight');
    });

    dropPhoto.addEventListener('dragleave', (event) => {
    console.log('drag left the drop target');
    dropPhoto.classList.remove('highlight');
    });

    dropPhoto.addEventListener('dragover', (event) => {
    event.preventDefault();
    });

    dropPhoto.addEventListener('drop', (event) => {
    event.preventDefault();
    console.log('drop finished');
    const draggedElement = document.getElementById('drag');
    dropPhoto.appendChild(draggedElement);
    });

    dragContainer.addEventListener('dragend', (event) => {
    console.log('drag ended');
    dropPhoto.classList.remove('highlight');
    });
});