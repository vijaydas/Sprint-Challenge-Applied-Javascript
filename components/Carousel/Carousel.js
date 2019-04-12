class Carousel {
  constructor(element) {
    this.element = element;
    
    // this.data = this.element.dataset
    // console.log(this.data);
    
    // buttons
    this.goLeftButton = this.element.querySelector(".left-button");
    this.goRightButton = this.element.querySelector(".right-button");

    // images
    this.images = this.element.querySelectorAll("img");
    this.currentIndex = 0;
    this.images[this.currentIndex].style.display = "flex";
    
    // left right listeners
    this.goLeftButton.addEventListener('click', () => this.moveLeft);
    this.goRightButton.addEventListener('click', () => this.moveRight);
  }

  moveLeft() {
      this.currentIndex -- ;

      this.images[this.currentIndex].style.display = "flex";
  }

  moveRight() {
      this.currentIndex += 1;

      this.images[this.currentIndex].style.display = "flex";
  }


}

let carousel = document.querySelector(".carousel");
new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
