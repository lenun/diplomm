const addBlock = () => {
    const 
        button = document.querySelector('.add-sentence-btn'),
      shadowBlock = document.querySelectorAll('.shadow-block');
  
    button.addEventListener('click', () => {
      button.style.display = 'none';
  
      shadowBlock.forEach((event) => {
        event.style.display = 'block';
        event.closest('.col-xs-12').classList.remove('hidden');
        event.closest('.col-xs-12').classList.remove('visible-sm-block');
      });
    });
  };
  export default addBlock;