'use strict';

const input1p = document.getElementById('input1');
const outputp = document.getElementById('output');
let input2;
let operator;
let syousuu = 0;
let toBeErased = 0;

function kazu(n) {
    if (toBeErased == 1) {
        toBeErased = 0; 
        input1p.value = "";
    }
    if (operator =="=") {
        input1p.value = "";
    }
    if (n ==".") {
        if (syousuu == 1) return;
        if (input1p.value == "") input1p.value = "0.";
        else input1p.value = input1p.value + ".";
        syousuu = 1;
        return;
    }
    if (n =="0") {
        if (input1p.value == "0") {
            return;
        }
    }
    if (n =="00") {
        if (input1p.value == "0") {return;}
        else if (input1p.value == "") {
            input1p.value = "0";
            return;}
    }
    if (input1p.value == "0") {input1p.value = ""};
    input1p.value = input1p.value + n;
}

function kigou(k) {
    if (operator !== "") {equal();}
    operator = k;
    input2 = input1p.value;
    syousuu = 0;
    toBeErased = 1;
}

function equal() {
    if (operator == "+") { input1p.value = Number(input2) + Number(input1p.value); }
    else if (operator == "-") { input1p.value = Number(input2) - Number(input1p.value); }
    else if (operator == "×") { input1p.value = Number(input2) * Number(input1p.value); }
    else if (operator == "÷") { input1p.value = Number(input2) / Number(input1p.value); }
    operator = "";
    toBeErased = 1;
}

function ac() {
    input1p.value = "";
    input2 = "";
    operator = "";
    syousuu = 0;
    toBeErased = 0;
}