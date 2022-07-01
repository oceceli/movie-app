const copy = (event) => {
    const text = event.path[2].innerText;
    if(navigator.clipboard.writeText(text)) {
        alert('Kopyalandı: ' + text);
    }
}

export default {
    copy,
}