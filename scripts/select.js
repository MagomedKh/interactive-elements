(function () {
   const element = document.querySelector('.select');
   const choices = new Choices(element, {
      searchEnabled: false,
      itemSelectText: '',
   });

   const selectTitle = document.querySelector('.choices__item--selectable')
   const select = document.querySelector('.choices')
   const selectList = document.querySelector('.choices__list')

   // selectList.addEventListener('click', () => {
   //    selectTitle.getAttribute(dataValue, 'Материал')
   //    selectTitle.textContent = selectTitle.dataValue

   //    if (element.target.dataValue === 'Древесина') {
   //       selectTitle = 'Материал'
   //    }
   // })
   // selectTitle.textContent = 'Материал'

   // select.addEventListener('click', function () {

   // })
   //    if (select.classList.contains('is-open')) {
   //       console.log('sdaf')
   //       document.querySelector('.choices__list').classList.add('choices--borderRadius')
   //       // document.querySelector('.choices__item.choices__item--selectable').textContent = 'Материал'
   //       // isSelectOpen = true
   //    } else {

   //    }
   // })
})()
