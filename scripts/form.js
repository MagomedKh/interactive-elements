// Mask
const phone = document.querySelector("#inputPhone");

const im2 = new Inputmask("+7(999) 999-99-99");
im2.mask(phone);

// Validate
const validation = new window.JustValidate('#form');

validation
   .addField('#inputName', [
      {
         rule: 'minLength',
         value: 3,
         errorMessage: 'Минимальная длина 3 симвала',
      },
      {
         rule: 'maxLength',
         value: 30,
         errorMessage: 'Максимальная длина 30 символов',
      },
      {
         rule: 'required',
         errorMessage: 'Вы не ввели имя',
      },
   ])

   .addField('#inputPhone', [
      {
         validator: (value) => {
            const phoneValue = phone.inputmask.unmaskedvalue()
            return Boolean(Number(phoneValue) && phoneValue.length === 10)
         },
         errorMessage: 'Некорректный номер телефона',
      },
      {
         rule: 'required',
         errorMessage: 'Вы не ввели телефон',
      },
   ])

   .addField('#inputEmail', [
      {
         rule: 'required',
         errorMessage: 'Вы не ввели e-mail',
      },
      {
         rule: 'email',
         errorMessage: 'Некорректный e-mail',
      },
   ]);


// After submit
document.querySelector('.form__btn').onclick = () => {
   setTimeout(() => {
      if (validation.isValid) {
         document.querySelector('#form').reset()
         validation.showSuccessLabels({ '#inputName': 'Оформлено' })
      }
   }, 1)
}



