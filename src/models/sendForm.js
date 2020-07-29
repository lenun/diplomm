const sendForm = () => {

    const 
    errorMessage = 'Что-то пошло не так',
    successMessage = 'Мы скоро с Вами свяжемся!',
  
    form = document.querySelectorAll('form'),
    directorForm = document.querySelector(".director-form"),

    myonoffswitch = document.getElementById('myonoffswitch'),
    myonoffswitchTwo = document.getElementById('myonoffswitch-two'),
    calcResult = document.getElementById('calc-result'),
    collapseTwo = document.getElementById('collapseTwo'),
    selects = collapseTwo.querySelectorAll('select'),
    collapseFour = document.getElementById('collapseFour'),

    userName = document.getElementsByName('user_name'),
    userPhone = document.getElementsByName('user_phone'),
    input = document.querySelectorAll('input'),

  
    
    statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font=size: 3rem;';
  
    const postData = (body) => {
      return fetch('./server.php', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
      });
  };
  
  
    userName.forEach((event) => {
        event.addEventListener('input', function()  {
            this.value = this.value.replace(/([^А-ЯЁa-яё\s])|([A-Za-z])/gi, '');
        });
    });
  
    userPhone.forEach((event) => {
        event.addEventListener('input', function() {
            this.value = this.value.replace(/([^+\d])| /g, '');
        });
    });
 


  
  
    form.forEach((elem) => {
        elem.addEventListener('submit', (event) => {
            event.preventDefault(); 
            elem.appendChild(statusMessage);
  
            const formData = new FormData(elem);
            let body = {};
            formData.forEach((val, key) => {
                body[key] = val;


        if (elem.closest('.popup-consultation')) {

            body['question'] = directorForm.querySelector('input').value;
                  
        }
                
        if (elem.closest('.popup-call')) {
 
        if (myonoffswitch.checked === true) {
            body['num of cameras'] = 'one';

        } else {
            body['num of cameras'] = 'two';
        }
        if (myonoffswitchTwo.checked === true) {
            body['well'] = 'yes';
          } else {
            body['well'] = 'no';
          }
          
        if (myonoffswitch.checked === false) {

            body['Dianeter of the second well'] = selects[2].value;
            body['num of wells of the second type'] = selects[3].value;
          }

          body['Dianeter of the first well'] = selects[0].value;
          body['num of wells of the first type'] = selects[1].value;
          body['total'] = calcResult.value;
        }

        body['Distance to home'] = collapseFour.querySelector('input').value;
            });
         
  
  
            const cheak = () =>{
              input.forEach( (item) => {
        
              if(item.tagName.toLowerCase() === 'input') {
                  item.value = '';
                  }
              });
            };
  
            postData(body)
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error('статус не равен 200');
                }
                statusMessage.textContent = successMessage;
                cheak();
        
            })
            .catch((error) => {
              
                statusMessage.textContent = errorMessage;
                cheak();
            });
        });
    });
  
   
  };
export default sendForm;
