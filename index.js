const obj = {
    '11': [10, 0, 0],
    '12': [1000, 0, 0],
    '13': [1000000, 0, 0],
    '21': [69, 0, 1],
    '22': [9001, 0, 1],
    '31': [196606, 0, 1],
    '32': [Infinity, 0, 0]
}

function check() {
    const count = Number(document.getElementById("count").textContent);
    for (const [key, value] of Object.entries(obj)) {
        if ((value[2] ? count === value[0] : count >= value[0]) && !value[1]) {
            console.log(`${key} achieved (req ${value[0]})`);
            const ach = document.getElementById(key);
            ach.classList.replace('ach', 'achC');
            value[1] = 1;
        }
    }
}

function count(op, num) {
    const count = document.getElementById("count");
    switch (op) {
        case ('add'):
            count.textContent = Number(count.textContent) + num;
            break;
        case ('mul'):
            count.textContent = Number(count.textContent) * num;
            break;
    }
    
    console.log("updated");
    check();
}
function reset() {
    const count = document.getElementById("count");
    count.textContent = '1';
    console.log("reset");
}