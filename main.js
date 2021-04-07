
button.addEventListener('click', infos);
function infos(){
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var city = document.getElementById('city').value;
    alert('first name : ' + firstname + '\n' + 'last name : ' + lastname + '\n' + 'city : ' + city);
}
