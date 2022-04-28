const Form = document.querySelector('form')
const input = document.querySelector('input')

const msgOne = document.querySelector('#msg-1')
const msgTwo= document.querySelector('#msg-2')

Form.addEventListener('submit',(event)=>{
    event.preventDefault() 
 // هذي الخاصية تستخدم عشان لما اضغط ع البتن مايسوي ريفرش للصفحة
    const Search = input.value
   
console.log('Searching!')
console.log(Search)

msgOne.textContent = 'Looding....'
msgTwo.textContent = ''
fetch('/weather?address='+ Search ).then((res)=>{
     res.json().then((data)=>{
            if(data.err){
              return  msgOne.textContent = data.error
            }else{
                msgOne.textContent = data.address
                msgTwo.textContent = 'Place:  '+data.forecast.name + '  Country:  '+data.forecast.country + '   tempruture:  '
                   + data.forecast.temp
               
                
            }
        })
    
}) })
  