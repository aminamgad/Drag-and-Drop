let btn = document.getElementById('btn');
let inp = document.getElementById('inp');
let boxes = document.querySelectorAll('.box');
let drag = null;

function addData() {
    if (inp.value != '') {
        let value = inp.value;
        let p = document.createElement('p');
         p.innerHTML = value;
         p.classList.add('item');
         p.draggable = true;
         boxes[0].appendChild(p);
        // boxes.forEach(box => {
        //     box.appendChild(p);
        // });
        inp.value = '';
        inp.focus();
        dragItem();
    }else{
        console.log('aha');
    }
}

function dragItem() {
    let items = document.querySelectorAll('.item');
    items.forEach(item => {
        item.addEventListener('dragstart', function(){
            console.log('drag start');
            item.style.opacity = '0.5';
            drag = item;
        })
        item.addEventListener('dragend', function(){
            console.log('drag end');
            item.style.opacity = '1';
            drag = null;
        })
        boxes.forEach(box => {
            box.addEventListener('dragover', function (e) {
                e.preventDefault();
                this.style.background='#090';
                this.style.color='#fff';
            })
            box.addEventListener('dragleave', function () {
                this.style.background='gold';
                this.style.color='#222';
            })
            box.addEventListener('drop', function () {
                this.append(drag);
                this.style.background='gold';
                this.style.color='#222';

            })
        })
    })
}