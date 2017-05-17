javascript: {
    let metas = document.getElementsByTagName('meta');
    for (let i in metas) {
        if (metas[i].getAttribute('property') == 'og:image') {
            location = metas[i].getAttribute('content').split('?')[0];
            break;
        }
    }
};
