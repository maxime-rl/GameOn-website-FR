'use strict';

// DOM Elements
const modalBtn = document.querySelectorAll('.modal-btn');
const closeBtn = document.querySelectorAll('.close, .btn-close');
const modalbg = document.querySelector('.bground');
const modalSuccessMessage = document.querySelector('.reservation-accepted');

/**
 * Management the opening and closing of a modal
 */
class Modal {
	constructor(open, close, modalBackground, modalSuccessMessage) {
		this.open = open;
		this.close = close;
		this.modalBackground = modalBackground;
		this.modalSuccessMessage = modalSuccessMessage;
	}

	openModal() {
		this.open.forEach((btn) => {
			btn.addEventListener('click', () => {
				this.modalBackground.style.display = 'block';
			});
		});
	}

	closeModal() {
		this.close.forEach((btn) => {
			btn.addEventListener('click', () => {
				this.modalBackground.style.display = 'none';
				this.modalSuccessMessage.style.display = 'none';
			});
		});
	}
}

const modalInscription = new Modal(
	modalBtn,
	closeBtn,
	modalbg,
	modalSuccessMessage
);

modalInscription.openModal();
modalInscription.closeModal();
