
// function subscribe() {
//     document.getElementById('btn').innerHTML= 'Subscribed';

//     document.getElementById('btn').style.backgroundColor = '#262626';

// }

// document.getElementById('btn').addEventListener('click', function() {
//     document.getElementById('btn').innerHTML = 'Subscribed 😊';
// },true);

// function like() {
//     document.getElementById('like').innerHTML =' <i class="fa-solid fa-thumbs-up"></i> Liked';
//     document.getElementById('like').style.backgroundColor = '#262626';
// }

document.getElementById('like').addEventListener('click', function() {
    document.getElementById('like').innerHTML =' <i class="fa-solid fa-thumbs-up"></i> Liked';
},true);

document.getElementById('btn').addEventListener('mouseenter', function() {
    document.getElementById('btn').style.fontSize = '10px'; 
    document.getElementById('btn').innerHTML = 'subscribe please';

    document.getElementById('btn').addEventListener('click', function() {
        document.getElementById('btn').innerHTML = 'Subscribed 😊';
        document.getElementById('btn').style.fontSize = '18px'; 
    });
},true);

// document.getElementById(
//     "like").addEventListener(
//         "mouseenter", enter);
// function enter() {
//     document.getElementById(
//         "like").style.color = "black";
// }
