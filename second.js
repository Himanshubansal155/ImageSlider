console.log("Slider For N number of Images");

var imageStore = ["", 'images/img1.jpg', 'images/img2.jpg', 'images/img3.jpg', 'images/img4.jpg', 'images/img5.jpeg'];

let right = document.getElementById('right');
let left = document.getElementById('left');
let imageFile = document.getElementById('imageFile');
let submit = document.getElementById('submit');
let buttonSlider = document.getElementById('buttonSlider');
let modalImage = document.getElementById('modalImage');
let image = document.getElementById('img-01');

addSmallButton();

image.addEventListener('click', fullScreenImage);

right.addEventListener('click', change);
left.addEventListener('click', change);
submit.addEventListener('click', ()=>{
    imageStore.push(URL.createObjectURL(imageFile.files[0]));
    alert("Image Added Successfully");
    addSmallButton();
});

function change() {
    let alt = image.alt;
    let newAlt
    if (this.id == 'right') {
        imageStore.forEach((element, index) => {
            if (alt == index & index < imageStore.length - 1) {
                newAlt = parseInt(alt) + 1;
            } else if (alt == imageStore.length - 1 & index == 1) {
                newAlt = 1;
            }
        });
    } else {
        imageStore.forEach((element, index) => {
            if (alt == index & index != 1) {
                newAlt = parseInt(alt) - 1;
            } else if (index == 1 & alt == 1) {
                newAlt = imageStore.length - 1;
            }
        });
    }
    image.alt = newAlt;
    image.src = imageStore[newAlt];
    addSmallButton();
}

function addSmallButton() {
    let html = "";
    console.log(imageStore);
    imageStore.forEach((element, index) => {
        if (index > 0) {
            html += `<button class="sliderButton" id="${index}" onclick="currentSlide(${index})">o</button>`;
        }
    });
    console.log(html);
    buttonSlider.innerHTML = html;
}

function currentSlide(index) {
    let src = imageStore[index];
    document.getElementById('img-01').src = src;
}
function fullScreenImage() {
    let src = this.src;
    modalImage.src = src;
    document.getElementById('modal').style.display = 'block';
}