document.querySelectorAll('.external').forEach((a) => {
    a.addEventListener('click', () => {
        chrome.tabs.create({
            url: a.href
        });
    })
});




