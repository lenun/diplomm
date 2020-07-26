const discount= () => {
    const
      popupDiscount = document.querySelector('.popup-discount'),
      discountBtn = document.querySelectorAll('.discount-btn');
  
  
    discountBtn.forEach((event) => {
      event.addEventListener('click', () => {
        popupDiscount.style.display = 'block';
      });
    });
  
    popupDiscount.addEventListener('click', (event) => {
      let target = event.target;
  
      if (target.classList.contains('popup-close')) {
        popupDiscount.style.display = '';
      } else {
        target = target.closest('.popup-content');
        if (!target) {
          popupDiscount.style.display = '';
        }
      }
    });
  };
  export default discount;