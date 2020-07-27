const sendForm = () => {

    const 
      errorMessage = 'Что-то пошло не так',
      successMessage = 'Мы скоро с Вами свяжемся!',
  
    form = document.querySelectorAll('form'),
    userName = document.getElementsByName('user_name'),
    userPhone = document.getElementsByName('user_phone'),
    userQuest = document.getElementsByName('user_quest'),
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
export default sendForm;//
