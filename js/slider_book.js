// alert ("radi ");
let sliderImages = document.querySelectorAll('.slide'),
    arrowLeft = document.querySelector('#arrow-left'),
    arrowRight = document.querySelector('#arrow-right'),
    sliderDescription = document.querySelectorAll('.new-promotion'),
    sliderBook = document.querySelectorAll('.most-read-titles'),
    sliderPromotion = document.querySelectorAll('.next-promotion'),
    arrowLeftBook = document.querySelector('#arrow-left-book'),
    arrowRightBook = document.querySelector('#arrow-right-book'),
    arrowLeftPromotion = document.querySelector('#arrow-left-promotion'),
    arrowRightPromotion = document.querySelector('#arrow-right-promotion'),
    current=0;


    function reset() {
        for(let i=0; i<sliderImages.length; i++) {
            sliderImages[i].style.display = 'none';
        }
    }
    function resetDescription() {
        for (let i=0; i<sliderDescription.length; i++) {
            sliderDescription[i].style.display='none';
        }
    }
    function resetBook() {
        for(let i=0; i<sliderBook.length; i++) {
            sliderBook[i].style.display='none';
        }
    }
    function resetPromotion() {
        for(let i=0; i<sliderPromotion.length; i++) {
            sliderPromotion[i].style.display='none';
        }
    }
    function startDescription() {
        resetDescription();
        sliderDescription[0].style.display='block';
    }
    function startBook() {
        resetBook();
        sliderBook[0].style.display='flex';
    }
    function startSlide() {
        reset();
        sliderImages[0].style.display='block'
    }
    function startPromotion() {
        resetPromotion();
        sliderPromotion[0].style.display='block';
    }
    function sliderLeft() {
        reset();
        resetDescription();
        sliderImages[current - 1].style.display = 'block';
        sliderDescription[current - 1].style.display='block';
        current--;
    }
    function sliderLeftBook() {
        resetBook();
        sliderBook[current - 1].style.display='flex';
        current--;
    }
    function sliderLeftPromotion() {
        resetPromotion();
        sliderPromotion[current - 1].style.display='block';
        current--;
    }
    function sliderRight() {
        reset();
        resetDescription();
        sliderImages[current + 1].style.display='block';
        sliderDescription[current + 1].style.display='block';
        current++;
    }
    function sliderRightBook() {
        resetBook();
        sliderBook[current + 1].style.display='flex';
        current++;
    }
    function sliderRightPromotion() {
        resetPromotion();
        sliderPromotion[current + 1].style.display='block';
        current++;
    }
    arrowLeft.addEventListener('click', function() {
        if(current===0) {
            current=sliderImages.length;
            current=sliderDescription.length;
        }
        sliderLeft();
    });
    arrowLeftBook.addEventListener('click', function() {
        if(current===0) {
            current=sliderBook.length;
        }
        sliderLeftBook();
    })
    arrowLeftPromotion.addEventListener('click', function() {
        if(current===0) {
            current=sliderPromotion.length;
        }
        sliderLeftPromotion();
    })
    arrowRight.addEventListener('click', function() {
        if(current===sliderImages.length-1 && current===sliderDescription.length-1) {
            current=-1
        }
        sliderRight();
    });
    arrowRightBook.addEventListener('click', function() {
        if (current===sliderBook.length-1) {
            current=-1;
        }
        sliderRightBook();
    })
    arrowRightPromotion.addEventListener('click', function() {
        if(current===sliderPromotion.length-1) {
            current=-1;
        }
        sliderRightPromotion();
    })
   

    startSlide();
    startDescription();
    startBook();
    startPromotion();