function toggleSetup() {
    const panel = document.getElementById('setup-panel');
    panel.classList.toggle('hidden');
}

function saveFeeds() {
    for (let i = 1; i <= 4; i++) {
        const val = document.getElementById(`cam${i}`).value;
        if (val) {
            document.getElementById(`view${i}`).src = val;
        }
    }
    toggleSetup();
}

function toggleExpand(element) {
    if (element.classList.contains('expanded')) {
        element.classList.remove('expanded');
    } else {
        const current = document.querySelector('.expanded');
        if (current) current.classList.remove('expanded');
        element.classList.add('expanded');
    }
}
