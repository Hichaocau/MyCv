
// click options => open info item
function changeInfo(){
  const listInfo = document.querySelectorAll('.info')
  const listOptions = document.querySelectorAll('.options__list-item')
  
  
  listOptions.forEach( (option, index) => {
    option.addEventListener('click', () => {

      listOptions.forEach(option2 => {
        option2.classList.remove('active')
      })

      option.classList.add('active')

      listInfo.forEach(item => {
        item.classList.add('none')
      })
      listInfo[index].classList.remove('none')
    })
  })
}

changeInfo()


// slick slider
$(document).ready(function(){
  $('.info__slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      dots: true,
      prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="fa-solid fa-chevron-left"></i></button>`,
      nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="fa-solid fa-chevron-right"></i></button>`,
      responsive: [
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 741,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ],
  });
});