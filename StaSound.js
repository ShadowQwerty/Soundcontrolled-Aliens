function StaSound() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    senser = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/AzqSNiZ6L/model.json', modelReady);
}
function modelReady() {
    console.log("Model is A ok to classify sound");
    senser.classify(Result_show);
}
function Result_show(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("hears").innerHTML = "I can hear:" + results[0].label;
        document.getElementById("confidence").innerHTML = "Accuracy:" + ((results[0].confidence) * 100).toFixed(2) + "%";
        var r = Math.floor(Math.random() * 255) + 1;
        var g = Math.floor(Math.random() * 255) + 1;
        var b = Math.floor(Math.random() * 255) + 1;
        document.getElementById("hears").style.color = "rgb(" + r + "," + g + "," + b + ")";
        document.getElementById("confidence").style.color = "rgb(" + r + "," + g + "," + b + ")";
        img1 = document.getElementById("alien1");
        img2 = document.getElementById("alien2");
        img3 = document.getElementById("alien3");
        img4 = document.getElementById("alien4");
        if (results[0].label == "BeatBox") {
            img1.src = "aliens-01.gif";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.png";
        }
        else if (results[0].label == "Mwahahah") {
            img2.src = "aliens-02.gif";
            img1.src = "aliens-01.png";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.png";
        } else if (results[0].label == "Clapping") {
            img3.src = "aliens-03.gif";
            img1.src = "aliens-01.png";
            img2.src = "aliens-02.png";
            img4.src = "aliens-04.png";
        } else if (results[0].label == "Background Noise") {
            img4.src = "aliens-04.gif";
            img1.src = "aliens-01.png";
            img3.src = "aliens-03.png";
            img2.src = "aliens-02.png";
        }

    }
}
