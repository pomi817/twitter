new PrettyScroll('.js-sidebar', {
    container: '.js-container',
    breakpoint: 575, // stop running the js when the window size is smaller than 575px
    offsetTop: 20, // space between the sticky element and the top of the window
    offsetBottom: 20, // space between the sticky element and the bottom of the window
    condition: () => true // you can disable the sticky behavior by returning false, it will be executed when you scroll.
});

new PrettyScroll('.js-sidebar2', {
  container: '.js-container',
  breakpoint: 575, // stop running the js when the window size is smaller than 575px
  offsetTop: 20, // space between the sticky element and the top of the window
  offsetBottom: 20, // space between the sticky element and the bottom of the window
  condition: () => true // you can disable the sticky behavior by returning false, it will be executed when you scroll.
});





