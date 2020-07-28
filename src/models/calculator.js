const calculator = () => {
    const onoffCheckbox = document.querySelector('.onoffswitch-checkbox'),
      collapseTwo = document.getElementById('collapseTwo'),
      childrenCollapseTwo = collapseTwo.children[0].children,
      accordion = document.getElementById('accordion'),
      calcResult = document.getElementById('calc-result'),
      myonoffswitchTwo = document.getElementById('myonoffswitch-two'),
      inputCollapse = document.getElementById('collapseFour').children[0].children[1],
      buttonCollapse = document.getElementById('collapseFour').children[0].children[2];
      let  index = 0;

      accordion.addEventListener('click', () => {
        if (onoffCheckbox.checked) {
          childrenCollapseTwo[5].classList.add('hidden');
          childrenCollapseTwo[4].classList.add('hidden');
          childrenCollapseTwo[3].classList.add('hidden');

        let result = 10000;
        index = result;

          if (childrenCollapseTwo[1].children[1].value === '2 метра') {
            index = result + result * 0.2;
          }if (childrenCollapseTwo[2].children[1].value === '2 штуки') {
            index +=result* 0.3;
          }else if (childrenCollapseTwo[2].children[1].value === '3 штуки') {
            index += result * 0.5;
          }if (myonoffswitchTwo.checked) {
            index += 1000;
          }
        } else {
            childrenCollapseTwo[5].classList.remove('hidden');
            childrenCollapseTwo[4].classList.remove('hidden');
            childrenCollapseTwo[3].classList.remove('hidden');

        let result = 16000;
        index = result;

          if (childrenCollapseTwo[1].children[1].value === '2 метра') {
            index += result * 0.2;
          }if (childrenCollapseTwo[2].children[1].value === '2 штуки') {
            index += result * 0.3;
          }else if (childrenCollapseTwo[2].children[1].value === '3 штуки') {
            index += result * 0.5;
          }if (childrenCollapseTwo[4].children[1].value === '2 метра') {
            index += result * 0.2;
          }if (childrenCollapseTwo[5].children[1].value === '2 штуки') {
            index += result * 0.3;
          }else if (childrenCollapseTwo[5].children[1].value === '3 штуки') {
            index += result * 0.5;
          }if (myonoffswitchTwo.checked) {
            index += 3000;
          }
        }
        calcResult.value = index;

        if (inputCollapse.value === '') {
          buttonCollapse.disabled = true;
        }

        inputCollapse.addEventListener('input', () => {
            inputCollapse.value = inputCollapse.value.replace(/[^0-9]/, '');

          if (inputCollapse.value === '') {
            buttonCollapse.disabled = true;
          } else {
            buttonCollapse.disabled = false;
          }

        });
        
      });

};
export default calculator;