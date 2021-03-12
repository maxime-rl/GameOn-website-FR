'use strict';

// DOM Elements
const form = document.querySelector('form');

// change : form inputs
form.addEventListener('change', function (e) {
	switch (e.target.id) {
		case 'first':
			checkedFormInscription.checkedFirstName();
			break;
		case 'last':
			checkedFormInscription.checkedLastName();
			break;
		case 'email':
			checkedFormInscription.checkedEmail();
			break;
		case 'birthdate':
			checkedFormInscription.checkedBirthdate();
			break;
		case 'quantity':
			checkedFormInscription.checkedQuantity();
			break;
		case 'cgu':
			checkedFormInscription.checkedCgu();
			break;
	}
});

// listen to submit form
form.addEventListener('submit', function (e) {
	e.preventDefault();
	if (
		checkedFormInscription.checkedFirstName() &&
		checkedFormInscription.checkedLastName() &&
		checkedFormInscription.checkedEmail() &&
		checkedFormInscription.checkedBirthdate() &&
		checkedFormInscription.checkedQuantity() &&
		checkedFormInscription.checkedLocation() &&
		checkedFormInscription.checkedCgu()
	) {
		modalSuccessMessage.style.display = 'flex';
		this.reset();
	}
});
