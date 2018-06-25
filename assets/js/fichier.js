// FONCTION CHANGEMENT D'IMAGE LORSQU'ON RENTRE DANS LA ZONE DE L'IMAGE
function swapImage(id){
    // CHANGEMENT DE LA SOURCE DE L'IMAGE
    document.getElementById(id).src = 'assets/img/' + id + '_2.jpg';
}
// FONCTION CHANGEMENT D'IMAGE LORSQU'ON SORT DE LA ZONE DE L'IMAGE
function reverseImage(id){
    // CHANGEMENT DE LA SOURCE DE L'IMAGE
    document.getElementById(id).src = 'assets/img/' + id + '.jpg';
}
