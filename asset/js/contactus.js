window.addEventListener("load", initialize);

function initialize() {

    valid = "rgb(177,242,167)";
    invalid = "rgb(252,182,182)";
    initial = "white";
    loadForm();
}

function setStyle(style) {
    txtname.style.background = style;
    txtemail.style.background = style;
    txtcontactnumber.style.background = style;
    txtcompany.style.background = style;
    txtdescription.style.background = style;
}

function loadForm() {
    txtname.value = "";
    txtemail.value = "";
    txtcontactnumber.value = "";
    txtcompany.value = "";
    txtdescription.value = "";
    setStyle(initial);
}

function inputFieldValidation(id, pattern) {
    var string = id.value;
    var pattrn = new RegExp(pattern);
    var result = pattrn.test(string);
    if (result) {
        id.style.background = valid;
    } else {
        id.style.background = invalid;
    }
}
