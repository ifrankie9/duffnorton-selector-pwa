var envChoose = "./content/images/guides/linear-jack/envChoose.png";
var envIP50 = "./content/images/guides/linear-jack/envIP50.png";
var envIP52 = "./content/images/guides/linear-jack/envIP52.png";
var envIP66 = "./content/images/guides/linear-jack/envIP66.png";
var envIP66s = "./content/images/guides/linear-jack/envIP66S.png";
var envIP66sCMLA = "./content/images/guides/linear-jack/envIP66S-CMLA.png";
var lsNotSelect = "./content/images/guides/linear-jack/optionLimitSwitchNotSelect.png";
var lsSelect = "./content/images/guides/linear-jack/optionLimitSwitchSelect.png";
var clutchNotSelect = "./content/images/guides/linear-jack/optionClutchNotSelect.jpg";
var clutchSelect = "./content/images/guides/linear-jack/optionClutchSelect.jpg";
var unitStateOpened = false;

// function changeImage() {
//     var environImage = document.getElementById('environment-img');
//     environImage.src = (environImage.getAttribute('src') === ip50)? ip52 : ip50;
// };

function updateEnvironmentImage() {
    var environImage = document.getElementById('environment-img');
    var vdc12power = document.getElementById('12-vdc');
    var vdc24power = document.getElementById('24-vdc');
    var vac115power = document.getElementById('115-vac');
    var vac220power = document.getElementById('220-vac');
    var vac460power = document.getElementById('460-vac');
    var limitSwitchImage = document.getElementById('ls-img');
    var clutchImage = document.getElementById('clutch-img');
    var circuitCheck = document.getElementById('cir-checkbox');
    var vac460label = document.getElementById('460-vac-label');
    var vac220label = document.getElementById('220-vac-label');
    var vac115label = document.getElementById('115-vac-label');
    var vdc12label = document.getElementById('12-vdc-label');
    var vdc24label = document.getElementById('24-vdc-label');

    showPowerOpt();

    if (environImage.getAttribute('src') === envChoose){
        environImage.src = envIP50;
        vac460label.style.color = "#AFB8BC";
        vdc12power.disabled = false;
        vdc24power.disabled = false;
        vac115power.disabled = false;
        vac220power.disabled = false;
        vac460power.disabled = true;
        vac460power.checked = false;
        limitSwitchImage.src = lsNotSelect;
        clutchImage.src = clutchNotSelect;
        ableLsClutchImage();
        showCapacitorOpt();
        circuitCheck.style.display = "none";
    }
    else if (environImage.getAttribute('src') === envIP50){
        environImage.src = envIP52;
        vdc12power.checked = true;
        vdc12power.disabled = false;
        vdc24power.disabled = false;
        vac115power.disabled = false;
        vac220power.disabled = false;
        vac460power.disabled = true;
        ableLsClutchImage();
        circuitCheck.style.display = "none";
    }
    else if (environImage.getAttribute('src') === envIP52){
        environImage.src = envIP66;
        vac115label.style.color = "#AFB8BC";
        vac220label.style.color = "#AFB8BC";
        vdc12power.disabled = false;
        vdc24power.disabled = false;
        vac115power.disabled = true;
        vac220power.disabled = true;
        vac460power.disabled = true;
        limitSwitchImage.src = lsSelect;
        clutchImage.src = clutchNotSelect;
        disableLsClutchImage();
        circuitCheck.style.display = "none";
    }
    else if (environImage.getAttribute('src') === envIP66){
        environImage.src = envIP66s;
        vdc12power.disabled = false;
        vdc24power.disabled = false;
        vac115power.disabled = true;
        vac220power.disabled = true;
        vac460power.disabled = true;
        limitSwitchImage.src = lsSelect;
        clutchImage.src = clutchSelect;
        disableLsClutchImage();
        circuitCheck.style.display = "none";
    }
    else if (environImage.getAttribute('src') === envIP66s){
        environImage.src = envIP66sCMLA;
        vdc12label.style.color = "#AFB8BC";
        vdc24label.style.color = "#AFB8BC";
        vac460label.style.color = "black";
        vac115label.style.color = "black";
        vdc12power.checked = false;
        vdc12power.disabled = true;
        vdc24power.disabled = true;
        vac115power.disabled = false;
        vac220power.disabled = true;
        vac460power.disabled = false;
        limitSwitchImage.src = lsNotSelect;
        clutchImage.src = clutchSelect;
        ableLsDisableClutchImage();
        hideCapacitorOpt();
        circuitCheck.style.display = "block";
        // document.getElementById('duty-input').innerHTML = "% - Percentage";
    }
    else if (environImage.getAttribute('src') === envIP66sCMLA){
        environImage.src = envIP50;
        vdc12label.style.color = "black";
        vdc24label.style.color = "black";
        vac220label.style.color = "black";
        vac460label.style.color = "#AFB8BC";
        vdc12power.disabled = false;
        vdc24power.disabled = false;
        vac115power.disabled = false;
        vac220power.disabled = false;
        vac460power.disabled = true;
        limitSwitchImage.src = lsNotSelect;
        clutchImage.src = clutchNotSelect;
        ableLsClutchImage();
        circuitCheck.style.display = "none";
    }
}

function updateLsOptionImage() {
    var limitSwitchImage = document.getElementById('ls-img');
    if (limitSwitchImage.getAttribute('src') === lsNotSelect){
        limitSwitchImage.src = lsSelect;
    }
    else if (limitSwitchImage.getAttribute('src') === lsSelect){
        limitSwitchImage.src = lsNotSelect;
    }
}

function updateClutchOptionImage() {
    var clutchImage = document.getElementById('clutch-img');
    if (clutchImage.getAttribute('src') === clutchNotSelect){
        clutchImage.src = clutchSelect;
    }
    else if (clutchImage.getAttribute('src') === clutchSelect){
        clutchImage.src = clutchNotSelect;
    }
}

function disableLsClutchImage(){
    var limitSwitchImage = document.getElementById('ls-img');
    var clutchImage = document.getElementById('clutch-img');
    limitSwitchImage.style.pointerEvents = 'none';
    clutchImage.style.pointerEvents = 'none';
}

function ableLsClutchImage(){
    var limitSwitchImage = document.getElementById('ls-img');
    var clutchImage = document.getElementById('clutch-img');
    limitSwitchImage.style.pointerEvents = 'auto';
    clutchImage.style.pointerEvents = 'auto';
}

function ableLsDisableClutchImage(){
    var limitSwitchImage = document.getElementById('ls-img');
    var clutchImage = document.getElementById('clutch-img');
    limitSwitchImage.style.pointerEvents = 'auto';
    clutchImage.style.pointerEvents = 'none';
}

function unitChange(checkbox){
    if (unitStateOpened){
        document.getElementById('load-input').innerHTML = "Number of Lbs";
        document.getElementById('travel-input').innerHTML = "Number of Inches";
        document.getElementById('speed-input').innerHTML = "inch/sec";
        document.getElementById('duty-input').innerHTML = "inches/hr";
        unitStateOpened = false;
    }
    else {
        document.getElementById('load-input').innerHTML = "Number of N";
        document.getElementById('travel-input').innerHTML = "Number of mm";
        document.getElementById('speed-input').innerHTML = "mm/sec";
        document.getElementById('duty-input').innerHTML = "m/hr";
        unitStateOpened = true;
    }
}

function showPowerOpt() {
    var powerSourceSelect = document.getElementById('power-source-options');
    var dutyCycleSelect = document.getElementById('duty-cycle-options');
    powerSourceSelect.style.display="flex";
    // dutyCycleSelect.style.visibility = "visible";
}

function showCapacitorOpt() {
    var capacitorSelect = document.getElementById('capacitor-options');
    var environImage = document.getElementById('environment-img');
    if (environImage.getAttribute('src') === envIP66sCMLA) {
        capacitorSelect.style.display = 'none';
    }
    else if (environImage.getAttribute('src') !== envIP66sCMLA) {
        capacitorSelect.style.display = 'block';
    }
}

function hideCapacitorOpt() {
    var capacitorSelect = document.getElementById('capacitor-options');
    capacitorSelect.style.display = 'none';
}
