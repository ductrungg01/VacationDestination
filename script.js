var detailsForm = document.querySelector('#destination_details_form');

detailsForm.addEventListener('submit', hanldFormSubmit);

function hanldFormSubmit(event){
    event.preventDefault();

    var desName = event.target.elements['name'].value;
    var desLocation = event.target.elements['location'].value;
    var desPhoto = event.target.elements['photo'].value;
    var desDescription = event.target.elements['description'].value;

    for (var i = 0; i < detailsForm.length; i++){
        detailsForm.elements[i].value = "";
    }

    // create card here
    var wishListContainer = document.getElementById('destinations_container');
    
    if (wishListContainer.children.length === 0) {
        document.getElementById('title').innerHTML = 'My Wish List';
    }
}

function createDestinationCard(name, location, photoUrl, desc){
    var card = document.createElement(div);
    card.className = 'card';

    var img = document.createElement('img');
    img.setAttribute('alt', name);
    
    var constantPhotoUrl="images/signpost.jpg";

    if (photoUrl.length === 0){
        img.setAttribute('src', constantPhotoUrl);
    } else {
        img.setAttribute('src', photoUrl);
    }
    card.appendChild(img);

    var cardBody = document.createElement(div);
    cardBody.className = 'card-body';

    var cardTitle = document.createElement('h3');
    cardTitle.innerHTML = name;
    cardBody.appendChild(cardTitle);

    var subtitle = document.createElement('h4');
    subtitle.innerHTML = location;
    cardBody.appendChild(subtitle);

    if (desDescription.length !== 0){
        var cardText = document.createElement("p");
        cardText.className = "card-text";
        cardText.innerText = desDescription;
        cardBody.appendChild(cardText);
    }

    var cardDeleteButton = document.createElement('button');
    cardDeleteButton.innerHTML = "Remove";

    cardDeleteButton.addEventListener('click', removeDestination);
    cardBody.appendChild(cardDeleteButton);

    card.appendChild(cardBody);

    return card;
}