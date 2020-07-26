const accordion = () =>{
    const accordion = document.getElementById('accordion-two'),
    panelCollapse = accordion.querySelectorAll('.panel-collapse');

  
    accordion.addEventListener('click', (event) => {
        let target = event.target;

      const panelDefault = target.closest('.panel-default');
      const collapse = panelDefault.querySelector('.panel-collapse');
      panelCollapse.forEach((index) => {
        index.classList.remove('in');
      });
      collapse.classList.add('in');
    });
  };
export default accordion;