

function SecmeIslemi(){
    let AreasOfInterest = document.getElementsByName("IlgiAlanlari");
    for(let Beginning = 0; Beginning<AreasOfInterest.length; Beginning++){
        AreasOfInterest[Beginning].checked = true;
    }
}

function KaldirmaIslemi(){
    let AreasOfInterest = document.getElementsByName("IlgiAlanlari");
    for(let Beginning = 0; Beginning<AreasOfInterest.length; Beginning++){
        AreasOfInterest[Beginning].checked = false;
    }
}