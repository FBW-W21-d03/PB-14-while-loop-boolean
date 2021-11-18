// 1.)
/*
Endlosschleifen in der Informatik sind Schleifen, die nach jeder Abarbeitung erneut abgearbeitet werden, falls die Ausführung nicht durch äußere Einflüsse abgebrochen wird. Äußere Einflüsse sind dabei solche, die im regulären Ablauf des Programms nicht vorgesehen sind, beispielsweise das Abschalten des Computers. Es gibt jedoch auch Programme mit absichtlichen Endlosschleifen, bspw. Ereignisschleifen (englisch event loop oder message dispatcher), darunter solche, die ohne aktives Warten auskommen.
*/

//2.) -1-
let isLoggedIn = true;
// -2-
while (isLoggedIn == true) {
    console.log("du bist angemeldet") ;µ   
}
