'use strict';

// DOM Elements
let formData = document.querySelectorAll('.formData');

/**
 * Management of form error comments
 */
class Comments {
	constructor(formData) {
		this.formData = formData;
	}

	setErrorFor(input, errorComment) {
		this.formData = input.parentElement;
		this.formData.setAttribute('data-error-visible', 'true');
		this.formData.setAttribute('data-error', errorComment);
	}

	removeErrorFor(input) {
		this.formData = input.parentElement;
		this.formData.removeAttribute('data-error-visible');
		this.formData.removeAttribute('data-error');
	}
}

const commentsForm = new Comments(formData);
