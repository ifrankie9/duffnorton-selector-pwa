
var upTransImage = "./content/images/guides/worm-jack/configUprightTranslating.png";
var invTransImage = "./content/images/guides/worm-jack/configInvertedTranslating.png";
var upRotateImage = "./content/images/guides/worm-jack/configUprightRotating.png";
var invRotateImage = "./content/images/guides/worm-jack/configInvertedRotating.png";
var doubleClevisImage = "./content/images/guides/worm-jack/configDoubleClevis.png";

var jackAcme = "./content/images/guides/worm-jack/jackTypeAcme.png";
var jackBall = "./content/images/guides/worm-jack/JackTypeBall.png";

var topPlate = "./content/images/guides/worm-jack/translatingTopPlate.png";
var threadEnd = "./content/images/guides/worm-jack/translatingThreadedEnd.png";
var clevisEnd = "./content/images/guides/worm-jack/translatingClevisEnd.png";

var tensionLoad= "./content/images/guides/worm-jack/loadTypeTension.png";
var compressionLoad= "./content/images/guides/worm-jack/loadTypeCompression.png";
var tensionCompressionLoad= "./content/images/guides/worm-jack/loadTypeTensionCompression.png";

var keyed = "./content/images/guides/worm-jack/keyedYes.png";
var notKeyed = "./content/images/guides/worm-jack/keyedNo.png";

var oneFixOneFree= "./content/images/guides/worm-jack/loadCompOneFixOneFree.png";
var pinnedEnd= "./content/images/guides/worm-jack/loadCompPinnedEnds.png";
var oneFixOneGuide= "./content/images/guides/worm-jack/loadCompOneFixOneGuide.png";

var unitStateOpened = false;

var dynLoad = 0;
var staLoad = 0;
var travelLength = 0;
var travelSpeed = 0;


function updateScrewTypeImage() {
    var screwTypeImage = document.getElementById('screwtype-img');
    var acmeScrewOption = document.getElementById('acme-screw-extra-option');
    if (screwTypeImage.getAttribute('src') === jackAcme){
        screwTypeImage.src = jackBall;
        acmeScrewOption.style.visibility = "hidden";
    }
    else if (screwTypeImage.getAttribute('src') === jackBall){
        screwTypeImage.src = jackAcme;
        acmeScrewOption.style.visibility = "visible";
    }
}

function updateConfigurationImage() {
    var configImage = document.getElementById('configuration-img');
    var configSelect = document.getElementById('configurationList');
    var transEndSelect = document.getElementById('trans-end-options');
    var keyedSelect = document.getElementById('keyed-options');
    
    if (configSelect.options[configSelect.selectedIndex].value == "U"){
        configImage.src = upTransImage;
        transEndSelect.style.display = "block";
        keyedSelect.style.display = "block";
    }
    else if (configSelect.options[configSelect.selectedIndex].value == "I"){
        configImage.src = invTransImage;
        transEndSelect.style.display = "block";
        keyedSelect.style.display = "block";
    }
    else if (configSelect.options[configSelect.selectedIndex].value === "UR"){
        configImage.src = upRotateImage;
        transEndSelect.style.display = "none";
        keyedSelect.style.display = "none";
    }
    else if (configSelect.options[configSelect.selectedIndex].value === "IR"){
        configImage.src = invRotateImage;
        transEndSelect.style.display = "none";
        keyedSelect.style.display = "none";
    }
    else if (configSelect.options[configSelect.selectedIndex].value === "CC"){
        configImage.src = doubleClevisImage;
        transEndSelect.style.display = "none";
        keyedSelect.style.display = "none";
    }
}

function updateTranslatingImage() {
    var transEndImage = document.getElementById('translating-img');
    var transEndfigSelect = document.getElementById('translatingList');
    // var strUser = transEndfigSelect.options[transEndfigSelect.selectedIndex].value;
    if (transEndfigSelect.options[transEndfigSelect.selectedIndex].value == "TE"){
        transEndImage.src = threadEnd;
    }
    else if (transEndfigSelect.options[transEndfigSelect.selectedIndex].value == "TP"){
        transEndImage.src = topPlate;
    }
    else if (transEndfigSelect.options[transEndfigSelect.selectedIndex].value === "CE"){
        transEndImage.src = clevisEnd;
    }
}

function updateKeyOptionImage() {
    var keyedImage = document.getElementById('keyOption-img');
    if (keyedImage.getAttribute('src') === keyed){
        keyedImage.src = notKeyed;
    }
    else if (keyedImage.getAttribute('src') === notKeyed){
        keyedImage.src = keyed;
    }
}

function updateLoadOptImage() {
    var loadOptImage = document.getElementById('loadOpt-img');
    var loadOptfigSelect = document.getElementById('loadOptList');
    var loadColumnSelect = document.getElementById('load-column-options')
    
    if (loadOptfigSelect.options[loadOptfigSelect.selectedIndex].value == "Tension"){
        loadOptImage.src = tensionLoad;
        loadColumnSelect.style.display = "none";
    }
    else if (loadOptfigSelect.options[loadOptfigSelect.selectedIndex].value == "Compression"){
        loadOptImage.src = compressionLoad;
        loadColumnSelect.style.display = "block";
    }
    else if (loadOptfigSelect.options[loadOptfigSelect.selectedIndex].value === "TensionCompression"){
        loadOptImage.src = tensionCompressionLoad;
        loadColumnSelect.style.display = "block";
    }
}

function updateLoadColumImage() {
    var loadColumImage = document.getElementById('LoadColum-img');
    var loadClumfigSelect = document.getElementById('loadColumtList');

    if (loadClumfigSelect.options[loadClumfigSelect.selectedIndex].value == "onefix-onefree"){
        loadColumImage.src = oneFixOneFree;
    }
    else if (loadClumfigSelect.options[loadClumfigSelect.selectedIndex].value == "pinned-end"){
        loadColumImage.src = pinnedEnd;
    }
    else if (loadClumfigSelect.options[loadClumfigSelect.selectedIndex].value === "onefix-oneguide"){
        loadColumImage.src = oneFixOneGuide;
    }
}

function validateNumberInput() {
    var vdynload = dynLoad;
    var vstaload = staLoad;
    var vtrlength = travelLength;
    var vtrspeed = travelSpeed;

    if (vdynload < 0) {
        alert("Please enter a positive number for Dynamic Load.")
        return(false);
    }
    else if (vstaload < 0) {
        alert("Please enter a positive number for Static Load.")
        return(false);
    }
    else if (vtrlength < 0) {
        alert("Please enter a positive number for Stroke Length.")
        return(false);
    }
    else if (vtrspeed < 0) {
        alert("Please enter a positive number for Lifting Speed.")
        return(false);
    }
    else if ((isNaN(vdynload) || isNaN(vstaload) || isNaN(vtrlength) || isNaN(vtrspeed)) && (vdynload != "" || vstaload != "" || vtrlength != "" || vtrspeed != "")) {
        alert("Please enter a valid number.");
        testresult = false;
    }
    else {
        testresult = true;
    }
    return (testresult);

}

function showjackOptions(portId) {
    dynLoad = $("div#" + portId + " input[name=dynamic-load]").val();
    staLoad = $("div#" + portId + " input[name=static-load]").val();
    travelLength = $("div#" + portId + " input[name=stroke]").val();
    travelSpeed = $("div#" + portId + " input[name=speed]").val();
    
    if ((dynLoad == "") || (staLoad == "") || (travelLength == "") || (travelSpeed == "")) {
        alert("Please enter positive numbers for Dynamic Load, Static Load, Stroke and Lifting Speed.");    
    }   
    else if ((dynLoad != "") && (staLoad != "") && (travelLength != "") && (travelSpeed != "")) {
        if (validateNumberInput()) {
            $('.input-jack-details').show();
            $('.next-arrow').hide();
        }    
    }
}
