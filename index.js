const obj = { 
    //req: number to get to unlock
    //achieved: always 0, set to 1 when achieved
    //precise: 0 checks if number is bigger than target, 1 is exactly target
    //unlocks: new buttons/targets
    '11': [10, 0, 0],
    '12': [1000, 0, 0],
    '13': [1000000, 0, 0],
    '14': [1e+100, 0, 0, [44]],
    '15': [1.0000000000000006e+100, 0, 1],
    '21': [0.6328125, 0, 1, [22, 45]],
    '22': [0.796875, 0, 1, [23]],
    '23': [0.5390625, 0, 1, ['b5', 15]],
    '31': [69, 0, 1],
    '32': [1337, 0, 1],
    '33': [9001, 0, 1, ['b3', 32]],
    '41': [1534, 0, 1, [42]],
    '42': [1022, 0, 1, [14, 43, 46]],
    '43': [1821, 0, 1],
    '44': [1296, 0, 1],
    '45': [Infinity, 0, 0, ['row2', 'b4']],
    '46': [1313.6816711425781, 0, 1]
}

function check() {
    const count = Number(document.getElementById("count").textContent);
    for (const [key, value] of Object.entries(obj)) {
        if ((value[2] ? count === value[0] : count >= value[0]) && !value[1]) {
            const ach = document.getElementById(key);
            if (!ach.classList.contains('L')){
                console.log(`${key} achieved (req ${value[0]})`);
                ach.classList.replace('ach', 'achC');
                value[1] = 1;
                if (value[3]) {
                    let unl;
                    for (let val of value[3]) {
                        unl = document.getElementById(val);
                        unl.classList.remove('L');
                    }
                }
            }
        }
    }
}

function count(op, num) {
    ops = ['', '+', '*', '/', '**']
    const count = document.getElementById("count");
    if (op==0) { count.textContent = '1'; return; }
    eval(`count.textContent = Number(count.textContent) ${ops[op]} num;`);
    check();
}