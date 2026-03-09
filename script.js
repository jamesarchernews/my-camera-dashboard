function toggleSetup() { document.getElementById('setup-panel').classList.toggle('hidden'); }

function applyIPs() {
    for(let i=1; i<=4; i++) {
        let val = document.getElementById('ip'+i).value;
        if(val) {
            // This forces the "http://" protocol if you forgot to type it
            if(!val.startsWith('http')) { val = 'http://' + val; }
            document.getElementById('cam'+i).src = val;
        }
    }
    toggleSetup();
}

function zoom(el) { el.classList.toggle('zoom'); }
