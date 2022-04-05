//1)Korištenjem ugnježđenog setTimeout, nakon početne 2s odgode potrebno je svake sekunde ispisati stotice od 500 do 1000,
// a nakon toga svake 2 sekunde ispisati do 1500.

function ispisiBrojeve() {
    let temp = 500;
    setTimeout(function ispisi() {
        console.log(temp);
        if (temp < 1000) {
            setTimeout(ispisi,1000);
        }
        else if(temp < 1500){
            setTimeout(ispisi,2000);
        }
        temp+=100;
    }, 2000);
}

ispisiBrojeve();