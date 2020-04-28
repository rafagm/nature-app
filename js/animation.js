(function() {
    var elements;
    var windowHeight;
    var positionFromTop;

    addEventListener();
  
    function addEventListener() {
        window.addEventListener('scroll', checkPosition);
        window.addEventListener('load', () => {
            init();
            checkPosition();
        });
    }

    function init() {
      elements = Array.from(document.querySelectorAll('.u-hidden'));
      windowHeight = window.innerHeight;
    }
  
    function checkPosition() {
      for (var i = 0;  elements && i < elements.length; i++) {
        var element = elements[i];
        positionFromTop = elements[i].getBoundingClientRect().top;
        var over = positionFromTop >= 0;
  
        if (canRunAnimation(over, element)) {
            runAnimation(element, i);
        }
      }
    }

    function canRunAnimation(over, element) {
        if (over) return positionFromTop - windowHeight <= -element.clientHeight;
        else return positionFromTop - windowHeight > element.clientHeight;
    }

    function runAnimation(element, i) {
        element.classList.add('u-animation-moveInLeftFromOut');
        element.classList.remove('u-hidden');

        elements.splice(i,1);
        if (elements.length == 0)
            window.removeEventListener("scroll", checkPosition);
    }
  
   
  })();