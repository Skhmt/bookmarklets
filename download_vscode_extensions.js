javascript: {
	const vss_extension = JSON.parse(document.getElementsByClassName('vss-extension')[0].innerHTML);

	const publisher = vss_extension.publisher.publisherName;
	const extension = vss_extension.extensionName;
	const version = vss_extension.versions[0].version;

	const newURL = `https://${publisher}.gallery.vsassets.io/_apis/public/gallery/publisher/${publisher}/extension/${extension}/${version}/assetbyname/Microsoft.VisualStudio.Services.VSIXPackage`;

    /* http://stackoverflow.com/questions/7526849/how-do-i-change-a-filename-on-download-with-javascript */

    let a = document.createElement('a');
	let xhr = new XMLHttpRequest();

	xhr.open('GET', newURL, true);
	xhr.responseType = 'blob';
	xhr.onload = () => {
        const file = new Blob([xhr.response], { type : 'application/octet-stream' });
        a.href = window.URL.createObjectURL(file);
        a.download = `${publisher}_${extension}_${version}.vsix`;
        a.click();
	};
    xhr.send();

};
