console.log("Slider For 5 images or for fixed number of images");

let right = document.getElementById('right');
let left = document.getElementById('left');

right.addEventListener('click', change);
left.addEventListener('click', change);

function change() {
    if(this.id == 'right'){
        console.log('Right Clicked');
        let src = document.getElementById('img-01').src;
        if(src == 'http://127.0.0.1:5500/images/img1.jpg'){
            document.getElementById('img-01').src = 'images/img2.jpg';
        }
        else if(src == 'http://127.0.0.1:5500/images/img2.jpg'){
            document.getElementById('img-01').src = 'images/img3.jpg';
        }
        else if(src == 'http://127.0.0.1:5500/images/img3.jpg'){
            document.getElementById('img-01').src = 'images/img4.jpg';
        }
        else if(src == 'http://127.0.0.1:5500/images/img4.jpg'){
            document.getElementById('img-01').src = 'images/img5.jpeg';
        }
        else{
            document.getElementById('img-01').src = 'images/img1.jpg';
        }
    }
    else{
        console.log('Left Clicked');
        let src = document.getElementById('img-01').src;
        if(src == 'http://127.0.0.1:5500/images/img1.jpg'){
            document.getElementById('img-01').src = 'images/img5.jpeg';
        }
        else if(src == 'http://127.0.0.1:5500/images/img2.jpg'){
            document.getElementById('img-01').src = 'images/img1.jpg';
        }
        else if(src == 'http://127.0.0.1:5500/images/img3.jpg'){
            document.getElementById('img-01').src = 'images/img2.jpg';
        }
        else if(src == 'http://127.0.0.1:5500/images/img4.jpg'){
            document.getElementById('img-01').src = 'images/img3.jpg';
        }
        else{
            document.getElementById('img-01').src = 'images/img4.jpg';
        }
    }
}