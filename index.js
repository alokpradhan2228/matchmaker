
function MatchMaker() {
    var x = document.getElementById('input1').value;
    var y = document.getElementById('input2').value;
    var z = document.getElementById('input3').value;

    var a = document.getElementById('input1').value;
    var b = document.getElementById('input2').value;
    var c = document.getElementById('input3').value;
    if (x === '' || y === '' || z === '' || a === '' || b === '' || c === '') {
        alert("please enter value");
        return;
    }
    if (x === a || x === b || x === c) {
        var li1 = document.createElement('li');
        li1.innerText = x;
        document.getElementById('show').appendChild(li1);
    }
    if (y === a || y === b || y === c) {
        var li2 = document.createElement('li');
        li2.innerText = y;
        document.getElementById('show').appendChild(li2);
    }
    if (z === a || z === b || z === c) {
        var li3 = document.createElement('li');
        li3.innerText = z;
        document.getElementById('show').appendChild(li3);
    }
}
document.getElementById('btn').onclick = MatchMaker;