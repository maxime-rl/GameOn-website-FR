'use strict';

// DOM Elements
let commentErrorLocation = document.querySelector('.error-location');

// Validation Pattern
const namePattern = /^([A-Za-zÀ-ÿ][-,a-z. ']+[ ]*)+$/;
const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const numberPattern = /^[0-9]*$/;

/**
 * Management of form inputs check
 * Use object : commentsForm
 */
class CheckedForm {
	constructor(first, last, email, birthdate, quantity, cgu) {
		this.first = first;
		this.last = last;
		this.email = email;
		this.birthdate = birthdate;
		this.quantity = quantity;
		this.cgu = cgu;
	}

	checkedFirstName() {
		if (this.first.value.trim().length == '') {
			commentsForm.setErrorFor(this.first, 'Veuillez renseigner votre Prénom');
			return false;
		}

		if (this.first.value.trim().length < 2) {
			commentsForm.setErrorFor(
				this.first,
				'Veuillez entrer 2 caractères ou plus pour le champ du Prénom'
			);
			return false;
		}

		if (!namePattern.test(this.first.value.trim())) {
			commentsForm.setErrorFor(this.first, "Votre Prénom n'est pas valide");
			return false;
		} else {
			this.first.value = this.first.value.trim();
			commentsForm.removeErrorFor(this.first);
			return true;
		}
	}

	checkedLastName() {
		if (this.last.value.trim().length == '') {
			commentsForm.setErrorFor(this.last, 'Veuillez renseigner votre Nom');
			return false;
		}

		if (this.last.value.trim().length < 2) {
			commentsForm.setErrorFor(
				this.last,
				'Veuillez entrer 2 caractères ou plus pour le champ du Nom'
			);
			return false;
		}

		if (!namePattern.test(this.last.value.trim())) {
			commentsForm.setErrorFor(this.last, "Votre Nom n'est pas valide");
			return false;
		} else {
			this.last.value = this.last.value.trim();
			commentsForm.removeErrorFor(this.last);
			return true;
		}
	}

	checkedEmail() {
		if (!emailPattern.test(this.email.value.trim())) {
			commentsForm.setErrorFor(
				this.email,
				'Veuillez entrer une adresse email valide'
			);
			return false;
		} else {
			this.email.value = this.email.value.trim();
			commentsForm.removeErrorFor(this.email);
			return true;
		}
	}

	checkedBirthdate() {
		let currentYear = new Date().getFullYear();
		let minAge = currentYear - 18;
		let maxAge = currentYear - 130;
		// user birth year
		let userBirthYear = this.birthdate.value.split('-')[0];

		if (this.birthdate.value == '') {
			commentsForm.setErrorFor(
				this.birthdate,
				'Vous devez indiquer votre date de naissance'
			);
			return false;
		}

		if (userBirthYear > minAge) {
			commentsForm.setErrorFor(
				this.birthdate,
				'Vous devez avoir 18 ans pour pouvoir participer'
			);
			return false;
		}

		if (userBirthYear < maxAge) {
			commentsForm.setErrorFor(
				this.birthdate,
				"Veuillez entrer une date d'anniversaire valide"
			);
			return false;
		} else {
			commentsForm.removeErrorFor(this.birthdate);
			return true;
		}
	}

	checkedQuantity() {
		if (this.quantity.value == '') {
			commentsForm.setErrorFor(
				this.quantity,
				'Veuillez indiquer votre nombre de participation'
			);
			return false;
		}

		if (isNaN(this.quantity.value)) {
			commentsForm.setErrorFor(
				this.quantity,
				'Veuillez indiquer une valeur numérique'
			);
			return false;
		}

		if (!numberPattern.test(this.quantity.value.trim())) {
			commentsForm.setErrorFor(
				this.quantity,
				'Veuillez indiquer un nombre entier et positif'
			);
			return false;
		}

		if (quantity.value >= 100) {
			commentsForm.setErrorFor(
				this.quantity,
				'Veuillez indiquer une valeur inférieure à 100'
			);
			return false;
		} else {
			this.quantity.value = this.quantity.value.trim();
			commentsForm.removeErrorFor(this.quantity);
			return true;
		}
	}

	checkedLocation() {
		const locations = document.querySelectorAll(
			`input[type=radio][name="location"]`
		);
		let checkLocation;
		// options iteration
		for (let i = 0; i < locations.length; i++) {
			if (locations[i].checked) {
				checkLocation = locations[i].value;
			}
		}
		// listen radio input with id
		document.body.addEventListener('change', function (e) {
			let target = e.target;
			switch (target.id) {
				case 'location1':
					commentErrorLocation.innerText = '';
					break;
				case 'location2':
					commentErrorLocation.innerText = '';
					break;
				case 'location3':
					commentErrorLocation.innerText = '';
					break;
				case 'location4':
					commentErrorLocation.innerText = '';
					break;
				case 'location5':
					commentErrorLocation.innerText = '';
					break;
				case 'location6':
					commentErrorLocation.innerText = '';
					break;
			}
		});

		if (checkLocation != null) {
			return true;
		} else {
			commentErrorLocation.innerText = 'Veuillez choisir une ville';
			return false;
		}
	}

	checkedCgu() {
		if (!this.cgu.checked) {
			commentsForm.setErrorFor(
				this.cgu,
				"Veuillez accepter les conditions d'utilisation"
			);
			return false;
		} else {
			commentsForm.removeErrorFor(this.cgu);
			return true;
		}
	}
}

const checkedFormInscription = new CheckedForm(
	first,
	last,
	email,
	birthdate,
	quantity,
	cgu
);
