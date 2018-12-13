
function hideAllCards() {
    $('div.station').hide();
}

// function hideAllOptions() {
//     $('div.station-sub').hide();
// }

function goSelectorCenter() {
    hideAllCards();
    hideNavDrawer();
    // scrollTop('center-top'); 
    $('div#port-center').show();
}

function goDnsjPort() {
    hideAllCards();
    hideNavDrawer();
    // scrollTop('dnsj-top');
    $('div#dnsj-port').show();

    dnsjModel = DnsjJack();
    // wj_1();
}

function goDnlaPort() {
    hideAllCards();
    hideNavDrawer();
    // scrollTop('dnla-top');
    $('div#dnla-port').show();

    dnlaModel = DnlaJack();
}

function goCalculatorPort() {
    hideAllCards();
    hideNavDrawer();
    $('div#calculator-port').show();
}

function goAboutPort() {
    hideAllCards();
    hideNavDrawer();
    $('div#about-port').show();
}

function goScrewNutPort() {
    hideAllCards();
    hideNavDrawer();
    $('div#screwnut-port').show();
}

function hideNavDrawer() {
    var sideNavSelector = ".mdl-layout__drawer";
    var sideNavSelector1 = ".mdl-layout__obfuscator";

    if ($(sideNavSelector).hasClass('is-visible')) {
        $(sideNavSelector).toggleClass("is-visible");
        $(sideNavSelector1).toggleClass("is-visible");
    }
}

//**********   MAIN Functions  **********//
function calcRound(Num, Places) {
    if (Places > 0) {
        if ((Num.toString().length - Num.toString().lastIndexOf('.')) > (Places + 1)) {
            var Rounder = Math.pow(10, Places);
            return Math.round(Num * Rounder) / Rounder;
        }
        else return Num;
    }
    else return Math.round(Num);
}


function clearInputs(portId){
    //Calculator Port
    if (portId == 'cal-unit-conversion') {
        $("div#" + portId + " div.mdl-textfield").removeClass('is-dirty');

        $("div#" + portId + " input[name=conversion-load-lbs]").val("");
        $("div#" + portId + " input[name=conversion-load-n]").val("");
        $("div#" + portId + " input[name=conversion-distance-in]").val("");
        $("div#" + portId + " input[name=conversion-distance-mm]").val("");
        $("div#" + portId + " input[name=conversion-power-hp]").val("");
        $("div#" + portId + " input[name=conversion-power-kW]").val("");
        $("div#" + portId + " input[name=conversion-torque-in-lbf]").val("");
        $("div#" + portId + " input[name=conversion-torque-Nm]").val("");
        $("div#" + portId + " input[name=conversion-speed-in-sec]").val("");
        $("div#" + portId + " input[name=conversion-speed-mm-sec]").val("");
        $("div#" + portId + " input[name=conversion-weight-lbs]").val("");
        $("div#" + portId + " input[name=conversion-weight-kg]").val("");
        $("div#" + portId + " input[name=conversion-dutycycle-in-hr]").val("");
        $("div#" + portId + " input[name=conversion-dutycycle-m-hr]").val("");
    }
    if (portId == 'cal-horsepower') {
        $("div#" + portId + " div.mdl-textfield").removeClass('is-dirty');

        $("div#" + portId + " input[name=cal-hp-inlbs]").val("");
        $("div#" + portId + " input[name=cal-hp-rpm]").val("");
        $("div#" + portId + " input[name=cal-hp]").val("");
    }
    if (portId == 'cal-critical-speed') {
        $("div#" + portId + " div.mdl-textfield").removeClass('is-dirty');

        $("div#" + portId + " input[name=cal-crit-speed-rotdia]").val("");
        $("div#" + portId + " input[name=cal-crit-speed-length]").val("");
        $("div#" + portId + " input[name=cal-crit-speed-speed]").val("");
        $("div#" + portId + " input[name=cal-crit-speed-speed-safe]").val("");
    }
    if (portId == 'cal-column-strength-screw') {
        $("div#" + portId + " div.mdl-textfield").removeClass('is-dirty');
        
        $("div#" + portId + " input[name=cal-screw-coln-stre-length]").val("");
        $("div#" + portId + " input[name=cal-screw-coln-stre-rotdia]").val("");
        $("div#" + portId + " input[name=cal-screw-coln-stre-load]").val("");
    }
    if (portId = 'cal-column-strength-jack-acme') {
        $("div#" + portId + " div.mdl-textfield").removeClass('is-dirty');
        
        $("div#" + portId + " input[name=cal-acme-jack-coln-stre-rotdia]").val("");
        $("div#" + portId + " input[name=cal-acme-jack-coln-stre-length]").val("");
        $("div#" + portId + " input[name=cal-acme-jack-coln-stre-maxlen]").val("");
        $("div#" + portId + " input[name=cal-acme-jack-coln-stre-load]").val("");
    }
    if (portId = 'cal-column-strength-jack-ball') {
        $("div#" + portId + " div.mdl-textfield").removeClass('is-dirty');

        $("div#" + portId + " input[name=cal-ball-jack-coln-stre-rotdia]").val("");
        $("div#" + portId + " input[name=cal-ball-jack-coln-stre-length]").val("");
        $("div#" + portId + " input[name=cal-ball-jack-coln-stre-maxlen]").val("");
        $("div#" + portId + " input[name=cal-ball-jack-coln-stre-load]").val("");
    }
    //DNLA Port
    if (portId = 'dnla-selector') {
        $("div#" + portId + " div.mdl-textfield").removeClass('is-dirty');
        
        $("div#" + portId + " input[name=la-dynamic-load]").val("");
        $("div#" + portId + " input[name=la-stroke]").val("");
        $("div#" + portId + " input[name=la-speed]").val("");
        $("div#" + portId + " input[name=la-dutycycle]").val("");
        $("div#" + portId + " input[name=la-number-required]").val("");
    
        $("div#power-source-options").hide();
        $("div#capacitor-options").hide();
    }
    //DNSJ Port
    if (portId = 'dnsj-selector') {
        $("div#" + portId + " div.mdl-textfield").removeClass('is-dirty');
        
        $("div#" + portId + " input[name=dynamic-load]").val("");
        $("div#" + portId + " input[name=static-load]").val("");
        $("div#" + portId + " input[name=stroke]").val("");
        $("div#" + portId + " input[name=speed]").val("");
        $("div#" + portId + " input[name=sj-number-req]").val("");

        $("div#" + portId + " select#configurationList").val("U");
        $("div#" + portId + " select#translatingList").val("TE");
        $("div#" + portId + " select#loadColumtList").val("onefix-onefree");
        $("div#" + portId + " select#loadOptList").val("Tension");
        
        $("div#" + portId + " div#load-column-options").hide();
        $('.input-jack-details').hide();
        $('.next-arrow').show();
    }
}




