

let url = 'https://Filltext.com/?rows=10&fname={firstName}&lname={lastName}&category=["category1","category2","category3"]&pretty=true';

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
