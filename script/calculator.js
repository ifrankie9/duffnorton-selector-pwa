
var ucLoadLbs = 0;
var ucLoadNewton = 0;
var ucDistInch = 0;
var ucDistMm = 0;
var ucPowHp = 0;
var ucPowKw = 0;
var ucTorqInLbf = 0;
var ucTorqNm = 0;
var ucSpeeInchSec = 0;
var ucSpeeMmSec = 0;
var ucWeiLbs = 0;
var ucWeiKg = 0;
var ucCycInHr = 0;
var ucCycMHr = 0;

var hpinlbs = 0;
var hprpm = 0;
var hphp = 0;

var cspeedlength = 0;
var cspeedrotdia = 0;
var cspeedspeed = 0;
var cspeedsafespeed = 0;
var csfactor = 1.47;

var colnstrescrewlength = 0;
var colnstrescrewrotdia = 0;
var colnstrescrewLoad = 0;
var colnstrescrewfactor = 2;

var colnstreacmejackrotdia = 0;
var colnstreacmejacklength = 0;
var colnstreacmejackradius = 0;
var colnstreacmejackmaxlen = 0;
var colnstreacmejacktrslen = 0;
var colnstreacmejackfactor = 2.1;
var colnstreacmejackyieldfactor = 35000;
var colnstreacmejackycc = 0;
var colnstreacmejackmaxsledratio = 200;
var colnstreacmejackmodelast = 29000000;
var colnstreacmejackload = 0;
var colnstreacmejackyieldstrength = 0;

var colnstreballjackrotdia = 0;
var colnstreballjacklength = 0;
var colnstreballjackradius = 0;
var colnstreballjackmaxlen = 0;
var colnstreballjacktrslen = 0;
var colnstreballjackfactor = 2.1;
var colnstreballjackyieldfactor = 35000;
var colnstreballjackycc = 0;
var colnstreballjackmaxsledratio = 200;
var colnstreballjackmodelast = 29000000;
var colnstreballjackload = 0;
var colnstreballjackyieldstrength = 0;

var endFxFr = "./content/images/guides/calculator/endFixedFree.png";
var endSS = "./content/images/guides/calculator/endSimpleSimple.png";
var endFxS = "./content/images/guides/calculator/endFixedSimple.png";
var endFxFx = "./content/images/guides/calculator/endFixedFixed.png";

var endjackFxFr = "./content/images/guides/calculator/loadOneFixOneFree.png";
var endjackPnEd = "./content/images/guides/calculator/loadPinnedEnd.png";
var endjackFxGd = "./content/images/guides/calculator/loadOneFixOneGuide.png";


function goUnitConversion() {
    hideAllOptions();
    $('div#cal-unit-conversion').show();
    // scrollTop('top');
}

function goHorsepower() {
    hideAllOptions();
    $('div#cal-horsepower').show();
}

function goCritSpeed() {
    hideAllOptions();
    $('div#cal-critical-speed').show();
}

function goColnStrengthAcmeJack() {
    hideAllOptions();
    $('div#cal-column-strength-jack-acme').show();
}

function goColnStrengthBallJack() {
    hideAllOptions();
    $('div#cal-column-strength-jack-ball').show();
}

function goColnStrengthScrew() {
    hideAllOptions();
    $('div#cal-column-strength-screw').show();
}

function goCalculators() {
    hideAllOptions();
    $('div#calc-center').show();
    scrollTop('top');
}

function hideAllOptions() {
    $('div#calc-center').hide();
    $('div#cal-unit-conversion').hide();
    $('div#cal-horsepower').hide();
    $('div#cal-critical-speed').hide();
    $('div#cal-column-strength-jack-acme').hide();
    $('div#cal-column-strength-jack-ball').hide();
    $('div#cal-column-strength-screw').hide();
}

//**********  Conversion Calculator Port  **********//
function unitCalculate(portId) {
    ucLoadLbs = $("div#" + portId + " input[name=conversion-load-lbs]").val();
    ucLoadNewton = $("div#" + portId + " input[name=conversion-load-n]").val();
    ucDistInch = $("div#" + portId + " input[name=conversion-distance-in]").val();
    ucDistMm = $("div#" + portId + " input[name=conversion-distance-mm]").val();
    ucPowHp = $("div#" + portId + " input[name=conversion-power-hp]").val();
    ucPowKw = $("div#" + portId + " input[name=conversion-power-kW]").val();
    ucTorqInLbf = $("div#" + portId + " input[name=conversion-torque-in-lbf]").val();
    ucTorqNm = $("div#" + portId + " input[name=conversion-torque-Nm]").val();
    ucSpeeInchSec = $("div#" + portId + " input[name=conversion-speed-in-sec]").val();
    ucSpeeMmSec = $("div#" + portId + " input[name=conversion-speed-mm-sec]").val();
    ucWeiLbs = $("div#" + portId + " input[name=conversion-weight-lbs]").val();
    ucWeiKg = $("div#" + portId + " input[name=conversion-weight-kg]").val();
    ucCycInHr = $("div#" + portId + " input[name=conversion-dutycycle-in-hr]").val();
    ucCycMHr = $("div#" + portId + " input[name=conversion-dutycycle-m-hr]").val();

    if ((ucLoadLbs == "") && (ucLoadNewton != "")) {
        if (validateUnitConverInput()) {
            updateUCLoadLbf();
        }
    }
    else if ((ucLoadLbs != "") && (ucLoadNewton == "")) {
        if (validateUnitConverInput()) {
            updateUCLoadNewton();
        }
    }
    else if ((ucLoadLbs != "") && (ucLoadNewton != "")) {
        if (validateUnitConverInput()) {
            updateUCLoadNewton();
        }
    }
    if ((ucDistInch == "") && (ucDistMm != "")) {
        if (validateUnitConverInput()) {
            updateUCDistanceInch();
        }
    }
    else if ((ucDistInch != "") && (ucDistMm == "")) {
        if (validateUnitConverInput()) {
            updateUCDistanceMm();
        }
    }
    else if ((ucDistInch != "") && (ucDistMm != "")) {
        if (validateUnitConverInput()) {
            updateUCDistanceMm();
        }
    }
    if ((ucPowHp == "") && (ucPowKw != "")) {
        if (validateUnitConverInput()) {
            updateUCPowerHp();
        }
    }
    else if ((ucPowHp != "") && (ucPowKw == "")) {
        if (validateUnitConverInput()) {
            updateUCPowerKw();
        }
    }
    else if ((ucPowHp != "") && (ucPowKw != "")) {
        if (validateUnitConverInput()) {
            updateUCPowerKw();
        }
    }
    if ((ucTorqInLbf == "") && (ucTorqNm != "")) {
        if (validateUnitConverInput()) {
            updateUCTorqInLbf();
        }
    }
    else if ((ucTorqInLbf != "") && (ucTorqNm == "")) {
        if (validateUnitConverInput()) {
            updateUCTorqNm();
        }
    }
    else if ((ucTorqInLbf != "") && (ucTorqNm != "")) {
        if (validateUnitConverInput()) {
            updateUCTorqNm();
        }
    }
    if ((ucSpeeInchSec == "") && (ucSpeeMmSec != "")) {
        if (validateUnitConverInput()) {
            updateUCSpeedinsec();
        }
    }
    else if ((ucSpeeInchSec != "") && (ucSpeeMmSec == "")) {
        if (validateUnitConverInput()) {
            updateUCSpeedmmsec();
        }
    }
    else if ((ucSpeeInchSec != "") && (ucSpeeMmSec != "")) {
        if (validateUnitConverInput()) {
            updateUCSpeedmmsec();
        }
    }
    if ((ucWeiLbs == "") && (ucWeiKg != "")) {
        if (validateUnitConverInput()) {
            updateUCWeightlbs();
        }
    }
    else if ((ucWeiLbs != "") && (ucWeiKg == "")) {
        if (validateUnitConverInput()) {
            updateUCWeightkg();
        }
    }
    else if ((ucWeiLbs != "") && (ucWeiKg != "")) {
        if (validateUnitConverInput()) {
            updateUCWeightkg();
        }
    }
    if ((ucCycInHr == "") && (ucCycMHr != "")) {
        if (validateUnitConverInput()) {
            updateUCDutyinhr();
        }
    }
    else if ((ucCycInHr != "") && (ucCycMHr == "")) {
        if (validateUnitConverInput()) {
            updateUCDutymhr();
        }
    }
    else if ((ucCycInHr != "") && (ucCycMHr != "")) {
        if (validateUnitConverInput()) {
            updateUCDutymhr();
        }
    }

    $("div#" + portId + " div.mdl-textfield").addClass('is-dirty');

    $("div#" + portId + " input[name=conversion-load-lbs]").val(ucLoadLbs);
    $("div#" + portId + " input[name=conversion-load-n]").val(ucLoadNewton);
    $("div#" + portId + " input[name=conversion-distance-in]").val(ucDistInch);
    $("div#" + portId + " input[name=conversion-distance-mm]").val(ucDistMm);
    $("div#" + portId + " input[name=conversion-power-hp]").val(ucPowHp);
    $("div#" + portId + " input[name=conversion-power-kW]").val(ucPowKw);
    $("div#" + portId + " input[name=conversion-torque-in-lbf]").val(ucTorqInLbf);
    $("div#" + portId + " input[name=conversion-torque-Nm]").val(ucTorqNm);
    $("div#" + portId + " input[name=conversion-speed-in-sec]").val(ucSpeeInchSec);
    $("div#" + portId + " input[name=conversion-speed-mm-sec]").val(ucSpeeMmSec);
    $("div#" + portId + " input[name=conversion-weight-lbs]").val(ucWeiLbs);
    $("div#" + portId + " input[name=conversion-weight-kg]").val(ucWeiKg);
    $("div#" + portId + " input[name=conversion-dutycycle-in-hr]").val(ucCycInHr);
    $("div#" + portId + " input[name=conversion-dutycycle-m-hr]").val(ucCycMHr);
}

function validateUnitConverInput() {

    var vloadLbs = ucLoadLbs;
    var vloadN = ucLoadNewton;
    var vdisinch = ucDistInch;
    var vdismm = ucDistMm;
    var vpowhp = ucPowHp;
    var vpowkw = ucPowKw;
    var vtorinlbf = ucTorqInLbf;
    var vtornm = ucTorqNm;
    var vspeinchsec = ucSpeeInchSec;
    var vspemmsec = ucSpeeMmSec;
    var vweilbs = ucWeiLbs;
    var vweikg = ucWeiKg;
    var vcycinhr = ucCycInHr;
    var vcycmhr = ucCycMHr;

    if (vloadLbs < 0) {
        alert("Please enter a positive number for pounds.");
        return(false);
    }
    if (vloadN < 0) {
        alert("Please enter a positive number for Newtons.");
        return(false);
    }
    if (vdisinch < 0) {
        alert("Please enter a positive number Inches.");
        return(false);
    }
    if (vdismm < 0) {
        alert("Please enter a positive number Milimeters.");
        return(false);
    }
    if (vpowhp < 0) {
        alert("Please enter a positive number for Horse Power.");
        return(false);
    }
    if (vpowkw < 0) {
        alert("Please enter a positive number for kilowatts.");
        return(false);
    }
    if (vtorinlbf < 0) {
        alert("Please enter a positive number for inch-pounds.");
        return(false);
    }
    if (vtornm < 0) {
        alert("Please enter a positive number for Newton-meters.");
        return(false);
    }
    if (vspeinchsec < 0) {
        alert("Please enter a positive number for inch/sec.");
        return(false);
    }
    if (vspemmsec < 0) {
        alert("Please enter a positive number for mm/sec.");
        return(false);
    }
    if (vweilbs < 0) {
        alert("Pleae enter a positive number for pounds.");
        return(false);
    }
    if (vweikg < 0) {
        alert("Please enter a positive number for kilograms.");
        return(false);
    }
    if (vcycinhr < 0) {
        alert("Please enter a positive number for inch/hr.");
        return(false);
    }
    if (vcycmhr < 0) {
        alert("Please enter a positive number for m/hr.");
        return(false);
    }

    if ((isNaN(vloadLbs) || isNaN(vloadN) || isNaN(vdisinch) || isNaN(vdismm) || isNaN(vpowhp) || isNaN(vpowkw) || isNaN(vtorinlbf) || isNaN(vtornm) || isNaN(vspeinchsec) || isNaN(vspemmsec) || isNaN(vweilbs) || isNaN(vweikg) || isNaN(vcycinhr) || isNaN(vcycmhr)) && (vloadLbs != "" || vloadN != "" || vpowhp != "" || vpowkw != "" || vtorinlbf != "" || vtornm != "" || vspeinchsec != "" || vspemmsec != "" || vweilbs != "" || vweikg != "" || vcycinhr != "" || vcycmhr != "" )) {
        alert("Please enter a valid number.");
        testresult = false;
    }
    else {
        testresult = true;
    }
    return (testresult);
}

function updateUCLoadNewton() {
    ucLoadNewton = calcRound((ucLoadLbs * 4.44822), 1);
}

function updateUCLoadLbf() {
    ucLoadLbs = calcRound((ucLoadNewton * 0.224809), 1);
}

function updateUCDistanceInch() {
    ucDistInch = calcRound((ucDistMm * 0.0393701), 1);
}

function updateUCDistanceMm() {
    ucDistMm = calcRound((ucDistInch * 25.4), 1);
}

function updateUCPowerKw() {
    ucPowKw = calcRound((ucPowHp * 0.73549875), 1);
}

function updateUCPowerHp() {
    ucPowHp = calcRound((ucPowKw * 1.341022), 1);
}

function updateUCTorqNm() {
    ucTorqNm = calcRound((ucTorqInLbf * 0.113), 1);
}

function updateUCTorqInLbf() {
    ucTorqInLbf = calcRound((ucTorqNm * 8.8507), 1);
}

function updateUCSpeedmmsec() {
    ucSpeeMmSec = calcRound((ucSpeeInchSec * 25.4), 1);
}

function updateUCSpeedinsec() {
    ucSpeeInchSec = calcRound((ucSpeeMmSec * 0.0393701), 1);
}

function updateUCWeightlbs() {
    ucWeiLbs = calcRound((ucWeiKg * 2.20462), 1);
}

function updateUCWeightkg() {
    ucWeiKg = calcRound((ucWeiLbs * 0.453592), 1);
}

function updateUCDutyinhr() {
    ucCycInHr = calcRound((ucCycMHr * 39.3701), 1);
}

function updateUCDutymhr() {
    ucCycMHr = calcRound((ucCycInHr * 0.0254), 1);
}

//**********  HP Calculator Port  **********//
function validateHp() {
    var vhpInLbf = hpinlbs;
    var vhpRpm = hprpm;
    var vhpHp = hphp;

    if(vhpInLbf < 0) {
        alert("Please enter a positive number.");
        return(False);
    }
    else if(vhpRpm < 0) {
        alert("Please enter a positive number.");
        return(False);
    }
    else if(isNaN(vhpInLbf)) {
        alert("Please enter a positive number.");
        return(False);
    }
    else if(isNaN(vhpRpm)) {
        alert("Please enter a positive number.");
        return(False);
    }
    else {
        testresult = true;
    }
    return (testresult);
}

function hpCalculate(portId) {

    hpinlbs = $("div#" + portId + " input[name=cal-hp-inlbs]").val();
    hprpm = $("div#" + portId + " input[name=cal-hp-rpm]").val();
    hphp = $("div#" + portId + " input[name=cal-hp]").val();

    if ((hpinlbs != "") && (hprpm == "")) {
        alert("Please enter a positive number for Torque and RPM.");    
    }
    else if ((hpinlbs == "") && (hprpm != "")) {
        alert("Please enter a positive number for Torque and RPM.");    
    }
    else if ((hpinlbs != "") && (hprpm != "")) {
        if (validateHp()) {
            updateHp();
        }    
    }

    $("div#" + portId + " div.mdl-textfield").addClass('is-dirty');  
    $("div#" + portId + " input[name=cal-hp]").val(hphp);

}

function updateHp() {
    hphp = calcRound(((hpinlbs * hprpm) / 63025), 2);
}

//**********  Critical Speed Calculator Port  **********//
function validateCritSpeed() {
    var vcritspeedlength = cspeedlength;
    var vcritspeedrootdia = cspeedrotdia;

    if(vcritspeedlength < 0) {
        alert("Please enter a positive number.");
        return(False);
    }
    else if(vcritspeedrootdia < 0) {
        alert("Please enter a positive number.");
        return(False);
    }
    else if(isNaN(vcritspeedlength)) {
        alert("Please enter a positive number.");
        return(False);
    }
    else if(isNaN(vcritspeedrootdia)) {
        alert("Please enter a positive number.");
        return(False);
    }
    else {
        testresult = true;
    }
    return (testresult);
}

function critSpeedCalculate(portId) {

    cspeedlength = $("div#" + portId + " input[name=cal-crit-speed-length]").val();
    cspeedrotdia = $("div#" + portId + " input[name=cal-crit-speed-rotdia]").val();
    cspeedspeed = $("div#" + portId + " input[name=cal-crit-speed-speed]").val();
    cspeedsafespeed = $("div#" + portId + " input[name=cal-crit-speed-speed-safe]").val();

    if ((cspeedlength != "") && (cspeedrotdia == "")) {
        alert("Please enter a positive number for Length and Root Diameter.");    
    }
    else if ((cspeedlength == "") && (cspeedrotdia != "")) {
        alert("Please enter a positive number for Length and Root Diameter.");    
    }
    else if ((cspeedlength != "") && (cspeedrotdia != "")) {
        if (validateCritSpeed()) {
            updateCritSpeed();
        }    
    }

    $("div#" + portId + " div.mdl-textfield").addClass('is-dirty');  
    $("div#" + portId + " input[name=cal-crit-speed-speed]").val(cspeedspeed);
    $("div#" + portId + " input[name=cal-crit-speed-speed-safe]").val(cspeedsafespeed);
}

function updateCritSpeed() {
    cspeedspeed = calcRound(((csfactor * 4760000 * cspeedrotdia) / (cspeedlength * cspeedlength)), 0);
    cspeedsafespeed = calcRound((cspeedspeed * 0.8), 0)
}

function updateBearingImage() {
    var bearingImage = $('#bearing-img');
    var bearingfigSelect = document.getElementById('bearingSupportList');
    if (bearingfigSelect.options[bearingfigSelect.selectedIndex].value == "FxFr"){
        bearingImage.attr('src', endFxFr);
        csfactor = 0.36;
    }
    else if (bearingfigSelect.options[bearingfigSelect.selectedIndex].value == "SS"){
        bearingImage.attr('src', endSS);
        csfactor = 1;
    }
    else if (bearingfigSelect.options[bearingfigSelect.selectedIndex].value === "FxS"){
        bearingImage.attr('src', endFxS);
        csfactor = 1.47;
    }
    else if (bearingfigSelect.options[bearingfigSelect.selectedIndex].value === "FxFx"){
        bearingImage.attr('src', endFxFx);
        csfactor = 2.23;
    }
}

//**********  Screw Nut Column Strength Calculator Port  **********//
function validateScrewColnStrength() {
    var vcslength = colnstrescrewlength;
    var vcsrootdia = colnstrescrewrotdia;

    if(vcslength < 0) {
        alert("Please enter a positive number.");
        return(False);
    }
    else if(vcsrootdia < 0) {
        alert("Please enter a positive number.");
        return(False);
    }
    else if(isNaN(vcslength)) {
        alert("Please enter a positive number.");
        return(False);
    }
    else if(isNaN(vcsrootdia)) {
        alert("Please enter a positive number.");
        return(False);
    }
    else {
        testresult = true;
    }
    return (testresult);
}

function calculateScrewcolnStrength(portId) {

    colnstrescrewlength = $("div#" + portId + " input[name=cal-screw-coln-stre-length]").val();
    colnstrescrewrotdia = $("div#" + portId + " input[name=cal-screw-coln-stre-rotdia]").val();
    colnstrescrewload = $("div#" + portId + " input[name=cal-screw-coln-stre-load]").val();

    if ((colnstrescrewlength != "") && (colnstrescrewrotdia == "")) {
        alert("Please enter a positive number for Length and Root Diameter.");    
    }
    else if ((colnstrescrewlength == "") && (colnstrescrewrotdia != "")) {
        alert("Please enter a positive number for Length and Root Diameter.");    
    }
    else if ((colnstrescrewlength != "") && (colnstrescrewrotdia != "")) {
        if (validateScrewColnStrength()) {
            updateScrewColnStre();
        }    
    }

    $("div#" + portId + " div.mdl-textfield").addClass('is-dirty');  
    $("div#" + portId + " input[name=cal-screw-coln-stre-load]").val(colnstrescrewLoad);
}

function updateScrewColnStre() {
    colnstrescrewLoad = calcRound(((colnstrescrewfactor * 14030000 * (colnstrescrewrotdia * colnstrescrewrotdia * colnstrescrewrotdia * colnstrescrewrotdia)) / (colnstrescrewlength * colnstrescrewlength)), 0);
}

function updateColnBearingImage() {
    var colnBearingImage = $('#screw-coln-bearing-img');
    var colnBearingfigSelect = document.getElementById('columnBearingSupportList');
    if (colnBearingfigSelect.options[colnBearingfigSelect.selectedIndex].value == "FxFr"){
        colnBearingImage.attr('src', endFxFr);
        colnstrescrewfactor = 0.25;
    }
    else if (colnBearingfigSelect.options[colnBearingfigSelect.selectedIndex].value == "SS"){
        colnBearingImage.attr('src', endSS);
        colnstrescrewfactor = 1;
    }
    else if (colnBearingfigSelect.options[colnBearingfigSelect.selectedIndex].value === "FxS"){
        colnBearingImage.attr('src', endFxS);
        colnstrescrewfactor = 2;
    }
    else if (colnBearingfigSelect.options[colnBearingfigSelect.selectedIndex].value === "FxFx"){
        colnBearingImage.attr('src', endFxFx);
        colnstrescrewfactor = 4;
    }
}

//**********  Jack Acme Column Strength Calculator Port  **********//
function validateAcmeJackColnStrength() {
    var vcslength = colnstreacmejacklength;
    var vcsrootdia = colnstreacmejackrotdia;

    if(vcslength < 0) {
        alert("Please enter a positive number.");
        return(False);
    }
    else if(vcsrootdia < 0) {
        alert("Please enter a positive number.");
        return(False);
    }
    else if(isNaN(vcslength)) {
        alert("Please enter a positive number.");
        return(False);
    }
    else if(isNaN(vcsrootdia)) {
        alert("Please enter a positive number.");
        return(False);
    }
    else {
        testresult = true;
    }
    return (testresult);
}

function calculateJackcolnStrength(portId){

    colnstreacmejackrotdia = $("div#" + portId + " input[name=cal-acme-jack-coln-stre-rotdia]").val();
    colnstreacmejacklength = $("div#" + portId + " input[name=cal-acme-jack-coln-stre-length]").val();

    if ((colnstreacmejacklength != "") && (colnstreacmejackrotdia == "")) {
        alert("Please enter a positive number for Length and Root Diameter.");    
    }
    else if ((colnstreacmejacklength == "") && (colnstreacmejackrotdia != "")) {
        alert("Please enter a positive number for Length and Root Diameter.");    
    }
    else if ((colnstreacmejacklength != "") && (colnstreacmejackrotdia != "")) {
        if (validateAcmeJackColnStrength()) {
            updateAcmeJackColnStreJack();
        }    
    }

    $("div#" + portId + " div.mdl-textfield").addClass('is-dirty');
    $("div#" + portId + " input[name=cal-acme-jack-coln-stre-maxlen]").val(colnstreacmejackmaxlen);
    $("div#" + portId + " input[name=cal-acme-jack-coln-stre-load]").val(colnstreacmejackload);
}

function updateAcmeJackColnStreJack() {
    colnstreacmejackradius = calcRound((colnstreacmejackrotdia * 0.25), 4);
    colnstreacmejackyieldstrength = calcRound((2 * Math.PI * colnstreacmejackmodelast), 4);

    if (colnstreacmejackrotdia < 0.5){
        colnstreacmejackyieldfactor = 35000;
        colnstreacmejackycc = calcRound((Math.sqrt(colnstreacmejackyieldstrength / colnstreacmejackyieldfactor)), 4);
    }
    else if (((colnstreacmejackrotdia < 1) && (colnstreacmejackrotdia > 0.5)) ||
                ((colnstreacmejackrotdia < 5) && (colnstreacmejackrotdia > 4))){
                colnstreacmejackyieldfactor = 90000;
                colnstreacmejackycc = calcRound((Math.sqrt(colnstreacmejackyieldstrength / colnstreacmejackyieldfactor)), 4);
    }
    else if ((colnstreacmejackrotdia < 4) && (colnstreacmejackrotdia > 1)){
        colnstreacmejackyieldfactor = 70000;
        colnstreacmejackycc = calcRound((Math.sqrt(colnstreacmejackyieldstrength / colnstreacmejackyieldfactor)), 4);
    }
    else if (colnstreacmejackrotdia > 5){
        colnstreacmejackyieldfactor = 100000;
        colnstreacmejackycc = calcRound((Math.sqrt(colnstreacmejackyieldstrength / colnstreacmejackyieldfactor)), 4);
    }

    colnstreacmejackmaxlen = calcRound((colnstreacmejackradius * colnstreacmejackmaxsledratio / colnstreacmejackfactor), 0);
    colnstreacmejacktrslen = calcRound((colnstreacmejackradius * colnstreacmejackycc / colnstreacmejackfactor), 0);

    if (colnstreacmejacklength < colnstreacmejacktrslen){
        colnstreacmejackload = calcRound((Math.PI * colnstreacmejackyieldfactor * Math.pow(colnstreacmejackrotdia, 2) / 4) - (Math.pow(colnstreacmejackfactor, 2) * Math.pow(colnstreacmejackyieldfactor,2) * Math.pow(colnstreacmejacklength, 2) / (Math.PI * colnstreacmejackmodelast)), 0);
    }
    else if (colnstreacmejacklength < colnstreacmejackmaxlen){
        colnstreacmejackload = calcRound((Math.pow(Math.PI, 3) * colnstreacmejackmodelast * Math.pow(colnstreacmejackrotdia, 4) / (64 * Math.pow(colnstreacmejackfactor, 2) * Math.pow(colnstreacmejacklength, 2))), 0);
    }
}

function updateAcmeColnEndFixImage() {
    var colnEndFixImage = $('#jack-acme-coln-endfix-img');
    var colnEndfixfigSelect = document.getElementById('endFixityAcmeList');
    if (colnEndfixfigSelect.options[colnEndfixfigSelect.selectedIndex].value == "FxFr"){
        colnEndFixImage.attr('src', endjackFxFr);
        colnstreacmejackfactor = 2.1;
    }
    else if (colnEndfixfigSelect.options[colnEndfixfigSelect.selectedIndex].value == "PnEd"){
        colnEndFixImage.attr('src', endjackPnEd);
        colnstreacmejackfactor = 1;
    }
    else if (colnEndfixfigSelect.options[colnEndfixfigSelect.selectedIndex].value === "FxGd"){
        colnEndFixImage.attr('src', endjackFxGd);
        colnstreacmejackfactor = 0.8;
    }
}

//**********  Jack Ball Column Strength Calculator Port  **********//
function validateBallJackColnStrength() {
    var vcslength = colnstreballjacklength;
    var vcsrootdia = colnstreballjackrotdia;

    if(vcslength < 0) {
        alert("Please enter a positive number.");
        return(False);
    }
    else if(vcsrootdia < 0) {
        alert("Please enter a positive number.");
        return(False);
    }
    else if(isNaN(vcslength)) {
        alert("Please enter a positive number.");
        return(False);
    }
    else if(isNaN(vcsrootdia)) {
        alert("Please enter a positive number.");
        return(False);
    }
    else {
        testresult = true;
    }
    return (testresult);
}

function calculateJackcolnStrength(portId){

    colnstreballjackrotdia = $("div#" + portId + " input[name=cal-ball-jack-coln-stre-rotdia]").val();
    colnstreballjacklength = $("div#" + portId + " input[name=cal-ball-jack-coln-stre-length]").val();

    if ((colnstreballjacklength != "") && (colnstreballjackrotdia == "")) {
        alert("Please enter a positive number for Length and Root Diameter.");    
    }
    else if ((colnstreballjacklength == "") && (colnstreballjackrotdia != "")) {
        alert("Please enter a positive number for Length and Root Diameter.");    
    }
    else if ((colnstreballjacklength != "") && (colnstreballjackrotdia != "")) {
        if (validateBallJackColnStrength()) {
            updateBallJackColnStreJack();
        }    
    }

    $("div#" + portId + " div.mdl-textfield").addClass('is-dirty');
    $("div#" + portId + " input[name=cal-ball-jack-coln-stre-maxlen]").val(colnstreballjackmaxlen);
    $("div#" + portId + " input[name=cal-ball-jack-coln-stre-load]").val(colnstreballjackload);
}

function updateBallJackColnStreJack() {

    colnstreballjackradius = calcRound((colnstreballjackrotdia * 0.25), 4);
    colnstreballjackyieldstrength = calcRound((2 * Math.pow(Math.PI, 2) * colnstreballjackmodelast), 4);
    colnstreballjackyieldfactor = 100000;
    colnstreballjackycc = calcRound((Math.sqrt(colnstreballjackyieldstrength / colnstreballjackyieldfactor)), 4);

    colnstreballjackmaxlen = calcRound((colnstreballjackradius * colnstreballjackmaxsledratio / colnstreballjackfactor), 2);
    colnstreballjacktrslen = calcRound((colnstreballjackradius * colnstreballjackycc / colnstreballjackfactor), 0);

    if (colnstreballjacklength < colnstreballjacktrslen){
        colnstreballjackload = calcRound((Math.PI * colnstreballjackyieldfactor * Math.pow(colnstreballjackrotdia, 2) / 4) - (Math.pow(colnstreballjackfactor, 2) * Math.pow(colnstreballjackyieldfactor,2) * Math.pow(colnstreballjacklength, 2) / (Math.PI * colnstreballjackmodelast)), 0);
    }
    else if (colnstreballjacklength < colnstreballjackmaxlen){
        colnstreballjackload = calcRound((Math.pow(Math.PI, 3) * colnstreballjackmodelast * Math.pow(colnstreballjackrotdia, 4) / (64 * Math.pow(colnstreballjackfactor, 2) * Math.pow(colnstreballjacklength, 2))), 0);
    }
}

function updateBallColnEndFixImage() {
    var colnEndFixImage = $('#jack-ball-coln-endfix-img');
    var colnEndfixfigSelect = document.getElementById('endFixityBallList');
    if (colnEndfixfigSelect.options[colnEndfixfigSelect.selectedIndex].value == "FxFr"){
        colnEndFixImage.attr('src', endjackFxFr);
        colnstreballjackfactor = 2.1;
    }
    else if (colnEndfixfigSelect.options[colnEndfixfigSelect.selectedIndex].value == "PnEd"){
        colnEndFixImage.attr('src', endjackPnEd);
        colnstreballjackfactor = 1;
    }
    else if (colnEndfixfigSelect.options[colnEndfixfigSelect.selectedIndex].value === "FxGd"){
        colnEndFixImage.attr('src', endjackFxGd);
        colnstreballjackfactor = 0.8;
    }
}

