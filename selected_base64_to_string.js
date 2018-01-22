javascript: {
	const selectedText = window.getSelection().toString();
	try {
		const plainText = atob(selectedText);

		let goToURL = prompt('The following text was converted from base64 to text. Would you like to visit it as a URL?', plainText);
		if (goToURL) window.location = goToURL;
	}
	catch (e) {
		alert(`The selected text was not correctly encoded in base64:\n${selectedText}`)
	}
}
