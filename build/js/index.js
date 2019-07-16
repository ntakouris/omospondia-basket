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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBzZXR1cEV4cGFuZGFibGVCb3hlcygpe1xuXG4gICAgdmFyIGZvY3VzSXRlbSA9IGZ1bmN0aW9uKGJhc2UpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IGJhc2UucXVlcnlTZWxlY3RvcihcIi5leHBhbmQtY29udGVudFwiKTtcbiAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoXCJleHBhbmRlZC1jb250ZW50XCIpO1xuICAgICAgICAgICAgYmFzZS5jbGFzc0xpc3QudG9nZ2xlKFwiZXhwYW5kZWQtaXRlbVwiKVxuICAgICAgICB9XG4gICAgfVxuICAgIHZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGZvY3VzSXRlbShldmVudC50YXJnZXQpO1xuICAgIH07XG5cbiAgICB2YXIgcHJvcGFnYXRlTGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBmb2N1c0l0ZW0oZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQpO1xuICAgIH1cblxuICAgIHZhciBlbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJpdGVtXCIpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZWxlbWVudHNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgdmFyIGJhbGxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImJhbGxcIik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBiYWxscy5sZW5ndGg7IGkrKykge1xuICAgICAgICBiYWxsc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHByb3BhZ2F0ZUxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICB2YXIgaGVhZGluZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiaXRlbS1oZWFkaW5nXCIpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaGVhZGluZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaGVhZGluZ3NbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcm9wYWdhdGVMaXN0ZW5lcik7XG4gICAgfVxufVxuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oZSl7IFxuICAgIHNldHVwRXhwYW5kYWJsZUJveGVzKCk7XG59Il0sImZpbGUiOiJpbmRleC5qcyJ9