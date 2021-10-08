function random(min, max, val) {

    var func = {
        "whole" : function() {
            let result = Math.floor(Math.random() * (max - min + 1)) + min ;
            document.getElementById('result-whole').innerHTML = result;
            document.getElementById('result-reflect-whole').innerHTML = result;
        },
        "decimal" : function() {
            let result = (Math.random() * (max - min + 1)) + min;        
            document.getElementById('result-decimal').innerHTML = result.toFixed(1);
            document.getElementById('result-reflect-decimal').innerHTML = result.toFixed(1);
        },
        "even" : function() {
            let result = Math.floor(Math.random() * (max - min + 1)) + min;
            if(result % 2 == 0) {
                document.getElementById('result-even').innerHTML = result;
                document.getElementById('result-reflect-even').innerHTML = result;
            }
            else {
                result += 1;
                document.getElementById('result-even').innerHTML = result;
                document.getElementById('result-reflect-even').innerHTML = result;
            }
        },
        "odd" : function() {
            let result = Math.floor(Math.random() * (max - min + 1)) + min;
            if(result % 2 == 0) {
                result -= 1;
                document.getElementById('result-odd').innerHTML = result;
                document.getElementById('result-reflect-odd').innerHTML = result;
            }
            else {
                document.getElementById('result-odd').innerHTML = result;
                document.getElementById('result-reflect-odd').innerHTML = result;
            }
        }         
    }
    if( val == "whole" ) {
        func.whole();
    } else if( val == "decimal") {
        func.decimal();
    } else if( val == "even") {
        func.even();
    } else {
        func.odd();
    }


}

function whole() {
    let Min = parseInt(document.getElementById('min-whole').value);
    let Max = parseInt(document.getElementById('max-whole').value);

    //console.log(typeof Min);
    if(isNaN(Min) || isNaN(Max)) {
        alert("Min and Max value not found");
    } else if( Min == Max ) {
        alert("Min and Max have equal value");
    } else if( Min > Max ) {
        alert("Min value is greathan Max value");
    } 
    else {
        random(Min, Max, "whole");
    }
}
function decimal() {
    let Min = parseInt(document.getElementById('min-decimal').value);
    let Max = parseInt(document.getElementById('max-decimal').value);
    
    //console.log(typeof Min);

    if(isNaN(Min) || isNaN(Max)) {
        alert("Min and Max value not found");
    } else if( Min == Max ) {
        alert("Min and Max have equal value");
    } else if( Min > Max ) {
        alert("Min value is greathan Max value");
    } 
    else {
        random(Min, Max, "decimal");
    }
}
function even() {
    let Min = parseInt(document.getElementById('min-even').value);
    let Max = parseInt(document.getElementById('max-even').value);
    
    //console.log(typeof Min);

    if(isNaN(Min) || isNaN(Max)) {
        alert("Min and Max value not found");
    } else if( Min == Max ) {
        alert("Min and Max have equal value");
    } else if( Min > Max ) {
        alert("Min value is greathan Max value");
    } 
    else {
        random(Min, Max, "even");
    }
}
function odd() {
    let Min = parseInt(document.getElementById('min-odd').value);
    let Max = parseInt(document.getElementById('max-odd').value);
    
    //console.log(typeof Min);

    if(isNaN(Min) || isNaN(Max)) {
        alert("Min and Max value not found");
    } else if( Min == Max ) {
        alert("Min and Max have equal value");
    } else if( Min > Max ) {
        alert("Min value is greathan Max value");
    } 
    else {
        random(Min, Max, "odd");
    }
}
/*
function random(min, max) {
    let result = Math.floor(Math.random() * (max - min + 1)) + min ;
     document.getElementById('result-whole').innerHTML = result;
     document.getElementById('result-reflect-whole').innerHTML = result;
}

    var func = {
        "whole" : function() {
            let result = Math.floor(Math.random() * (max - min + 1)) + min ;
            document.getElementById('result-whole').innerHTML = result;
            document.getElementById('result-reflect-whole').innerHTML = result;
        }
    }
    if( val == "whole" ) {
        func.whole();
    }

*/

var toggle = document.getElementById('toggle');
var sidebar = document.getElementById('sidebar');

document.onclick = function(e) {
    if(e.target.id !== 'toggle' && e.target.id !== 'sidebar' && e.target.id !== 'main'){
        toggle.classList.remove('active');
        sidebar.classList.remove('active');
    }
}
toggle.onclick = function() {
    toggle.classList.toggle('active');
    sidebar.classList.toggle('active');
}