
const spinner = `
<div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
`








document.querySelector('.run-upload').addEventListener('click', ()=>{
    document.querySelector('input').click()
})

document.querySelector('input').addEventListener('change', ({target})=>{
    const docName= target.value.split('\\')[2]
    const checkHTML = `
        <div class="check-container">
            <img src="1.svg" alt="">
            ${docName}
             <button id="check" onclick="check()" class="btn waves-effect waves-light" type="submit" name="action">Проверить
    <i class="material-icons right">send</i>
  </button>
        </div>
    `

    document.querySelector('.uploader').innerHTML = checkHTML
})

function check (){
    document.querySelector('.uploader').innerHTML = spinner
    setTimeout(()=>{
        document.body.innerHTML = '<h1>ВСЕ Х*ЙНЯ</h1>'
    }, 5000)
}
