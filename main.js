const CampoUm = document.getElementById('number-one');
const CampoDois = document.getElementById('number-two');
const form = document.getElementById('form-validate');
let ValidateOk = false;

function ValidaCampos(CampoUm, CampoDois) {
    return parseFloat(CampoDois.value) > parseFloat(CampoUm.value);
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    ValidateOk = ValidaCampos(CampoUm, CampoDois);

    if (ValidateOk) {
        const containerMsgSucess = document.querySelector('.sucess-message');
        containerMsgSucess.innerHTML = `O valor do Campo B: <b>${CampoDois.value}</b> é maior que o valor do Campo A: <b>${CampoUm.value}</b>!`;
        containerMsgSucess.style.display = 'block';
        CampoUm.value = '';
        CampoDois.value = '';
        CampoDois.style.border = '1px solid green';
    } else {
        document.querySelector('.message-error').style.display = 'block';
    }
});

CampoDois.addEventListener('keyup', function(e) {
    ValidateOk = ValidaCampos(CampoUm, CampoDois);
    if (ValidateOk) {
        CampoDois.classList.remove('error');
        document.querySelector('.message-error').style.display = 'none';
    } else {
        document.querySelector('.message-error').style.display = 'block';
        CampoDois.style.border = '1px solid red';
    }
});