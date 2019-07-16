function setupExpandableBoxes(){

    var focusItem = function(base) {
        var target = base.querySelector(".expand-content");
        if (target) {
            target.classList.toggle("expanded-content");
            base.classList.toggle("expanded-item")
        }
    }
    var listener = function(event) {
        focusItem(event.target);
    };

    var propagateListener = function(event) {
        focusItem(event.target.parentElement);
    }

    var elements = document.getElementsByClassName("item");
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', listener);
    }

    var balls = document.getElementsByClassName("ball");
    for (var i = 0; i < balls.length; i++) {
        balls[i].addEventListener('click', propagateListener);
    }

    var headings = document.getElementsByClassName("item-heading");
    for (var i = 0; i < headings.length; i++) {
        headings[i].addEventListener('click', propagateListener);
    }
}

window.onload = function(e){ 
    setupExpandableBoxes();
}