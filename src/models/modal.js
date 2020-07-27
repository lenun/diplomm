const modal = () => {
  const
    popupCall = document.querySelector('.popup-call'),
    callButton = document.querySelectorAll('.call-btn');



  callButton.forEach((event) => {
    event.addEventListener('click', (elem) => {
      elem.preventDefault();
      popupCall.style.display = 'block';
    });
  });

   popupCall.addEventListener('click', (event) => {
     let target = event.target;

    if(target.classList.contains('popup-close')){
      popupCall.style.display= 'none';
    } else{
      target = target.closest('.popup-content');
    if(!target){
      popupCall.style.display= 'none';
    }
  }
  });
}
  export default modal;