javascript: {
    const FFVADs = document.getElementsByClassName('FFVAD');
    let output = '';
    for (let i of FFVADs) {
        output += `<img src="${i.src}">`;
    }
    document.write(output);
}
