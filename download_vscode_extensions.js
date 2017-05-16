javascript: {
	const vss_extension = JSON.parse(document.getElementsByClassName('vss-extension')[0].innerHTML);

	const publisher = vss_extension.publisher.publisherName;
	const extension = vss_extension.extensionName;
	const version = vss_extension.versions[0].version;

	let newURL = `https://${publisher}.gallery.vsassets.io/_apis/public/gallery/publisher/${publisher}`;
	newURL += `/extension/${extension}/${version}/assetbyname/Microsoft.VisualStudio.Services.VSIXPackage`;

	fetch(newURL).then(res => res.blob()).then(myBlob => {
		const a = document.createElement('a');
		a.href = window.URL.createObjectURL(myBlob);
		a.download = `${publisher}_${extension}_${version}.vsix`;
		a.click();
	});
}
/*
	https://code.visualstudio.com/docs/editor/extension-gallery#_common-questions
	http://stackoverflow.com/questions/7526849/
*/
