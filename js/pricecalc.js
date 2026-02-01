var formelements = document.getElementById("illu-auto-calc").getElementsByTagName("input");
console.log(formelements);
var a 

function si(x, active_state){
        document.getElementById(formelements[x].id).disabled = active_state;
        if (x == 14){
            //Nothing!!
        }else{
        document.getElementById(formelements[x].id).checked = active_state;    
        }
}

function splitac(a){
    var acs = document.getElementById("splitcalc");

    if (a == true) {
        acs.disabled = true;
        console.log("disabled");
    } else {
        acs.disabled = false;
        console.log("not disabled");
    }
}

function pricechange(x, new_price, new_label){
    var input = document.getElementById(formelements[x].id);
    var np = input.nextSibling
    
    if (new_price == null) {
        np.nextSibling.textContent = "—";
        input.value = 0;
    }else if (new_price == "FREE") {
        np.nextSibling.textContent = new_price;
        input.value = 0;
    }else{
        np.nextSibling.textContent = "+ $ "+ new_price;
        input.value = new_price;
    }
    if (new_label != null) {
        input.nextSibling.textContent = new_label;
    }
}

function princechangecounter(x, id_new_price, new_price, new_label){
    var input = document.getElementById(formelements[x].id);
    var np = document.getElementById(id_new_price);

    if (new_price == null || new_price == 1) {
        np.textContent = "—";
        input.value = 1;
    }else if (new_price == "FREE") {
        np.textContent = new_price;
        input.value = 1;
    }else if(new_price == 0){
        np.textContent = "—";
        input.value = 0;
        np.setAttribute("value", 0);
    }else{
        np.textContent = "+ $ "+ new_price;
        input.value = new_price;
    }
    if (new_label != null) {
        input.textContent = new_label;
    }
}

var up_price = document.getElementById("upfrontprice");
var sd_price = document.getElementById("sdprice");
var s_price = document.getElementById("splits");
var total_price;
var new_total_price;

function pricecalc(){
    var multchara = document.getElementById("illu-characters").value;
    var extra_1 = Number(document.getElementById("extra-1-l").getAttribute("value"));
    var extra_2 = Number(document.getElementById("extra-2-l").getAttribute("value"));
    var extra_3 = Number(document.getElementById("extra-3-l").getAttribute("value"));
    var splits_v = Number(document.getElementById("splitcalc").value);
    console.log("Number of splits " + splits_v);
    total_price = [0];
    for (let a = 0; a < formelements.length; a++) {
        if (formelements[a].checked == true) {
            console.log(formelements[a]);
            total_price.push(formelements[a].value);
            console.log(total_price);
        }

        var bck;
        if (total_price[3] == null) {
            bck = 0;
        }else{
            bck = Number(total_price[3]);
        }
        tp = ((total_price.reduce((a,b)=>Number(a)+Number(b)) - bck) * multchara) + bck + (extra_1 + extra_2 + extra_3);

        up_price.textContent = tp;
        sd_price.textContent = Math.round(tp/2) + " / " + Math.round(tp/2);

        var tax = Math.round(tp/10);
        s_price.textContent = (Math.round(tp/splits_v) + tax) + " Per Split";
    }
}

for (a = 0; a < formelements.length; a++){
formelements[a].addEventListener("click", function(){
    if(this.id == "it-1"){
        console.log("Doodle Pressed!");
        
        for(h = 8; h < 23; h++){
            si(h,false);
        }
        for(h = 3; h < 8; h++){
            si(h,true);
            pricechange(h);
            splitac(false);
        }
        pricechange(8, "FREE", "NO SHADING");
        pricechange(9, "15", "MONOCHROME");
        pricechange(10, "25", "COLOR");
        pricechange(11, "FREE");
        pricechange(12, "15");
        pricechange(13, "35");
        princechangecounter(14,"extra-1-l","0");
        princechangecounter(15,"extra-2-l","0");
        princechangecounter(16,"extra-3-l","0");
        princechangecounter(17,"illu-chara-countr","1");
        pricechange(18, "45");
        pricechange(19, "15");
        pricechange(20, "15");
        pricechange(21, "15");
        pricechange(22, "15");

    }else if(this.id =="it-2"){
        console.log("Sketch Pressed!");
        si(3,false);
        for(h = 3; h < 23; h++){
            si(h,false);
            splitac(false);
        }
        //Starting from "Potrait"
        pricechange(3, "FREE");
        pricechange(4, "25");
        pricechange(5, "FREE");
        pricechange(6, "15");
        pricechange(7, "45");
        pricechange(8, "FREE", "NO SHADING");
        pricechange(9, "25", "MONOCHROME");
        pricechange(10, "55", "COLOR");
        pricechange(11, "FREE");
        pricechange(12, "35");
        pricechange(13, "45");
        princechangecounter(14,"extra-1-l","0");
        princechangecounter(15,"extra-2-l","0");
        princechangecounter(16,"extra-3-l","0");
        princechangecounter(17,"illu-chara-countr","1");
        pricechange(18, "75");
        pricechange(19, "25");
        pricechange(20, "35");
        pricechange(21, "35");
        pricechange(22, "35");

    }else if(this.id == "it-3"){
        console.log("Illustration Pressed!");
        si(3,false);
        for(h = 3; h < 23; h++){
            si(h,false);
            splitac(false);
        }
        pricechange(3, "FREE");
        pricechange(4, "55");
        pricechange(5, "FREE");
        pricechange(6, "35");
        pricechange(7, "85");
        pricechange(8, "FREE", "STANDARD");
        pricechange(9, "45", "STYLIZED");
        pricechange(10, "85", "PREMIUM");
        pricechange(11, "FREE");
        pricechange(12, "45");
        pricechange(13, "75");
        princechangecounter(14,"extra-1-l","0");
        princechangecounter(15,"extra-2-l","0");
        princechangecounter(16,"extra-3-l","0");
        princechangecounter(17,"illu-chara-countr","1");
        pricechange(18, "175");
        pricechange(19, "45");
        pricechange(20, "85");
        pricechange(21, "75");
        pricechange(22, "65");
    }
    pricecalc();
});
};

var characounter;
var labelcharacounter;
var settingcounter;
function CharaCount(a){
// First, the main choices
    characounter = document.getElementById("illu-characters");
    labelcharacounter  = document.getElementById("illu-chara-countr");
    switch (a) {
        case 1:
            characounter.stepUp();
            break;
    
        case 0:
            characounter.stepDown();
            break;
    }

    labelcharacounter.textContent = "X " + characounter.value;

    if (characounter.value == 1 || characounter == null) {
        labelcharacounter.textContent = "—";
    } 

    pricecalc();
}

function SplitCount(a){
// First, the main choices
    characounter = document.getElementById("splitcalc");
    switch (a) {
        case 1:
            characounter.stepUp();
            break;
    
        case 0:
            characounter.stepDown();
            break;
    }

    pricecalc();
}

function CharaCountWithPrices(a, id, id2, value){
// First, the main choices
    characounter = document.getElementById(id);
    labelcharacounter = document.getElementById(id2);
    var new_value;
    switch (a) {
        case 1:
            characounter.stepUp();
            break;
    
        case 0:
            characounter.stepDown();
            break;
    }

    if(formelements[0].checked == true){
        new_value = value * 1;
    }else if (formelements[1].checked == true) {
        new_value = value * 2;
    }else if(formelements[2].checked == true){
        new_value = value * 4;
    }

    if((characounter.value) <= 0){
        labelcharacounter.textContent = "—";
        labelcharacounter.setAttribute("value", (characounter.value) * new_value);
    }else{
        labelcharacounter.textContent = "+ $ " + ((characounter.value) * new_value);
        labelcharacounter.setAttribute("value", (characounter.value) * new_value);
    }

    if (characounter == null) {
        labelcharacounter.textContent = "—";
    } 

    pricecalc();
}

for (let a = 0; a < 2; a++) {

}