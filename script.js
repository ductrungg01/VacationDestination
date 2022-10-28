var detailsForm = document.querySelector('#destination_details_form');

detailsForm.addEventListener('submit', hanldFormSubmit);

function hanldFormSubmit(event){
    event.preventDefault();

    var desName = event.target.elements['name'].value;
    var desLocation = event.target.elements['location'].value;
    var desPhoto = event.target.elements['photo'].value;
    var desDescription = event.target.elements['description'].value;

    
    alert(desName);
}