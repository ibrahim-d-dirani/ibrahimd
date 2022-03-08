
var json = [
];

function filtering(cat) {
    var arr1 = json.filter(d => d.category == cat);

    show(arr1);
}

function show(arr) {


    var div = '';
    arr.forEach(obj => {
        div += "<div class='person'><label class='name'>";
        var name = "";
        Object.entries(obj).forEach(([key, value]) => {
            if (key == 'fname') {
                div += value;
                name += value.substring(0, 1);
            } else if (key == 'lname') {
                div += " " + value + "</label>";
                name += " " + value.substring(0, 1);
                div += "<div class='abreviation'>" + name + "</div>";
            } else
            if (key == 'category')
                div += "<div class='category'>" + value + "</div>";

        });
        div += "</div>";
    });

    document.getElementById('result').innerHTML = div;
}

function getJSON() {
    var num = document.getElementById("numRow").value;
    var catvalue = document.getElementById("cat").value;

    var cats = catvalue.split(",");
    var arrcat = '[';
    var btns = "";
    for (var i = 0; i < cats.length; i++) {
        arrcat += '"' + cats[i] + '"';
        btns += "<button onclick=\"filtering('" + cats[i] + "')\">" + cats[i] + "</button>";
        if (i != cats.length - 1)
            arrcat += ',';
    }
    arrcat += "]";
    btns += "<button onclick=\"show(json)\">Reset</button>";

    document.getElementById("btns").innerHTML = btns;
    let url = 'https://Filltext.com/?rows=' + num + '&fname={firstName}&lname={lastName}&category=' + arrcat + '&pretty=true';

    json = [];
    fetch(url)
            .then(res => res.json())
            .then((out) => {
                for (var i = 0; i < out.length; i++)
                    json.push(out[i]);
                show(json);
            })
            .catch(err => {
                throw err
            });

}