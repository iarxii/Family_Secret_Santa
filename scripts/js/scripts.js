// *****snackbar
function showSnackbar(message) {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");

    // Add the "show" class to DIV
    x.className = "show";

    // pass the message into #snackbar
    x.innerHTML = message;

    // After 3 seconds, remove the show class from DIV
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}

// draw scripting
function start() {
    var namesArray = ["Thabang", "Samukelisiwe", "Siyabonga", "Mercy", "Mpho", "Mphonyana", "Mama", "Masila", "Mandla", "Gogo D"];
    var arrayLength = namesArray.length;

    var shuffledArray = shuffleArray(namesArray);

    namesArray.forEach(name => {
        switch (name) {
            case "Thabang":
                // document.getElementById("out-1").innerHTML = namesArray[randomInteger(0, (arrayLength - 1))];
                document.getElementById("out-1").innerHTML = shuffledArray[0];
                break;
            case "Samukelisiwe":
                // document.getElementById("out-2").innerHTML = namesArray[randomInteger(0, (arrayLength - 1))];
                document.getElementById("out-2").innerHTML = shuffledArray[1];
                break;
            case "Siyabonga":
                // document.getElementById("out-3").innerHTML = namesArray[randomInteger(0, (arrayLength - 1))];
                document.getElementById("out-3").innerHTML = shuffledArray[2];
                break;
            case "Mercy":
                // document.getElementById("out-4").innerHTML = namesArray[randomInteger(0, (arrayLength - 1))];
                document.getElementById("out-4").innerHTML = shuffledArray[3];
                break;
            case "Mpho":
                // document.getElementById("out-5").innerHTML = namesArray[randomInteger(0, (arrayLength - 1))];
                document.getElementById("out-5").innerHTML = shuffledArray[4];
                break;
            case "Mphonyana":
                // document.getElementById("out-6").innerHTML = namesArray[randomInteger(0, (arrayLength - 1))];
                document.getElementById("out-6").innerHTML = shuffledArray[5];
                break;
            case "Mama":
                // document.getElementById("out-7").innerHTML = namesArray[randomInteger(0, (arrayLength - 1))];
                document.getElementById("out-7").innerHTML = shuffledArray[6];
                break;
            case "Masila":
                // document.getElementById("out-8").innerHTML = namesArray[randomInteger(0, (arrayLength - 1))];
                document.getElementById("out-8").innerHTML = shuffledArray[7];
                break;
            case "Mandla":
                // document.getElementById("out-9").innerHTML = namesArray[randomInteger(0, (arrayLength - 1))];
                document.getElementById("out-9").innerHTML = shuffledArray[8];

                break;
            case "Gogo D":
                // document.getElementById("out-10").innerHTML = namesArray[randomInteger(0, (arrayLength - 1))];
                document.getElementById("out-10").innerHTML = shuffledArray[9];

                break;

            default:
                break;
        }
    });
}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffleArray(array) {
    let curId = array.length;
    // There remain elements to shuffle
    while (0 !== curId) {
        // Pick a remaining element
        let randId = Math.floor(Math.random() * curId);
        curId -= 1;
        // Swap it with the current element.
        let tmp = array[curId];
        array[curId] = array[randId];
        array[randId] = tmp;
    }
    return array;
}