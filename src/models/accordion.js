const accordion = () =>{
  const accordionTwo = document.getElementById('accordion-two'),
  panelCollapse = accordionTwo.querySelectorAll('.panel-collapse');


  accordionTwo.addEventListener('click', (event) => {
      let target = event.target;

    const panelDefault = target.closest('.panel-default');
    const collapse = panelDefault.querySelector('.panel-collapse');
    panelCollapse.forEach((index) => {
      index.classList.remove('in');
    });
    collapse.classList.add('in');
  });

  const accordion = document.getElementById('accordion'),
  panelHeadings = accordion.querySelectorAll('.panel-heading'),
  collapses = accordion.querySelectorAll('.collapse'),
  constructBtn = accordion.querySelectorAll('.construct-btn');

  panelHeadings.forEach((item, index) => {
    item.addEventListener('click', (event) => {
      event.preventDefault();

      collapses.forEach((item) => {
        item.classList.remove('in');
      });
      collapses[index].classList.add('in');
    });
  });

  constructBtn.forEach((item, index) => {
    item.addEventListener('click', (event) => {
      event.preventDefault();

      collapses.forEach((item) => {
        item.classList.remove('in');
      });
      if (index !== 3) {
        collapses[index + 1].classList.add('in');
      }
    });
  });

};
export default accordion;