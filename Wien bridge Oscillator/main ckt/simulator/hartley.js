var  r4, r3;
var r1, r2;
var c1,c2, c3;
var r5,r6,r7,r8,r9,r10;
var c4,c5;
var freq
var myvar
//function voltChange() {
//    vs = document.getElementById("vdc").value;
//    document.getElementById("vdct").value = vs;
//}
function r1Change() {
    r1 = parseFloat(document.getElementById("r1in").value);
    document.getElementById("r1").value = r1;
}
function r2Change() {
    r2 = parseFloat(document.getElementById("r2in").value);
    document.getElementById("r2").value = r2;
}
function r3Change() {
    r3 = parseFloat(document.getElementById("r3in").value);
    document.getElementById("r3").value = r3;
}
function r4Change() {
    r4 = parseFloat(document.getElementById("r4in").value);
    document.getElementById("r4").value = r4;
}
function r5Change() {
    r5 = parseFloat(document.getElementById("r5in").value);
    document.getElementById("r5").value = r5;
}
function r6Change() {
    r6 = parseFloat(document.getElementById("r6in").value);
    document.getElementById("r6").value = r6;
}
function r7Change() {
    r7 = parseFloat(document.getElementById("r7in").value);
    document.getElementById("r7").value = r7;
}
function r8Change() {
    r8 = parseFloat(document.getElementById("r8in").value);
    document.getElementById("r8").value = r8;
}
function r9Change() {
    r9 = parseFloat(document.getElementById("r9in").value);
    document.getElementById("r9").value = r9;
}
function r10Change() {
    r10 = parseFloat(document.getElementById("r10in").value);
    document.getElementById("r10").value = r10;
}
function c1Change() {
    c1 = parseFloat(document.getElementById("c1in").value);
    document.getElementById("c1").value = c1;
}
function c2Change() {
    c2 = parseFloat(document.getElementById("c2in").value);
    document.getElementById("c2").value = c2;
}
function c3Change() {
    c3 = parseFloat(document.getElementById("c3in").value);
    document.getElementById("c3").value = c3;
}
function c4Change() {
    c4 = parseFloat(document.getElementById("c4in").value);
    document.getElementById("c4").value = c4;
}
function c5Change() {
    c5 = parseFloat(document.getElementById("c5in").value);
    document.getElementById("c5").value = c5;
}



function calculateFreq(r1,r2,c1,c2){
    var OpFreq=1/(2*Math.PI*Math.sqrt(r1*r2*c1*c2)*Math.pow(10,-12));
    return OpFreq;

}

function checkOutput(){
    var Ans=document.getElementById("Check").value;
    var correctAns=calculateFreq(r1,r2,c1,c2).toFixed(3);
    //console.log(Ans);
    //console.log(correctAns);
    if (parseFloat(correctAns)===parseFloat(Ans) ){
        alert("Your Output is Correct!");
    }
    else {
        alert("InCorrect Output!!!");
    }
}

function checkNull(){
   if (document.getElementById("r1").value == "") {
        alert("Enter the value of r1");
        document.getElementById("r1").style.borderColor = "red";
        return false;
    }

    else if (document.getElementById("r2").value == "") {
        alert("Enter the value of r2");
        document.getElementById("r2").style.borderColor = "red";
        return false;
    }
    else if (document.getElementById("r3").value == "") {
        alert("Enter the value of r3");
        document.getElementById("r3").style.borderColor = "red";
        return false;
    }
    else if (document.getElementById("r4").value == "") {
        alert("Enter the value of r4");
        document.getElementById("r4").style.borderColor = "red";
        return false;
    }
    else if (document.getElementById("r5").value == "") {
        alert("Enter the value of r5");
        document.getElementById("r5").style.borderColor = "red";
        return false;
    }
    else if (document.getElementById("r6").value == "") {
        alert("Enter the value of r6");
        document.getElementById("r6").style.borderColor = "red";
    }
    else if (document.getElementById("r7").value == "") {
        alert("Enter the value of r7");
        document.getElementById("r7").style.borderColor = "red";
        return false;
    }
    else if (document.getElementById("r8").value == "") {
        alert("Enter the value of r8");
        document.getElementById("r8").style.borderColor = "red";
        return false;
    }
    else if (document.getElementById("r9").value == "") {
        alert("Enter the value of r9");
        document.getElementById("r9").style.borderColor = "red";
        return false;
    }
    else if (document.getElementById("r10").value == "") {
        alert("Enter the value of r10");
        document.getElementById("r10").style.borderColor = "red";
        return false;
    }
    else if (document.getElementById("c1").value == "") {
        alert("Enter the value of c1");
        document.getElementById("c1").style.borderColor = "red";
        return false;
    }
    else if (document.getElementById("c2").value == "") {
        alert("Enter the value of c2");
        document.getElementById("c2").style.borderColor = "red";
        return false;
    }
    else if (document.getElementById("c3").value == "") {
        alert("Enter the value of c3");
        document.getElementById("c3").style.borderColor = "red";
        return false;
    }
    else if (document.getElementById("c4").value == "") {
        alert("Enter the value of c4");
        document.getElementById("c4").style.borderColor = "red";
        return false;
    }
    else if (document.getElementById("c5").value == "") {
        alert("Enter the value of c5");
        document.getElementById("c5").style.borderColor = "red";
        return false;
    }
    else{
        return true;
    }


}

function plotGraph(){
    if (checkNull()===true){


    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ['1', '2', '3', '4', '5', '6', '7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29'],
            datasets: [{
                label: 'voltage',
                fill: false,
                borderColor: 'rgb(30,50,180)',
                data: [0, 0.35, 0, -0.35, 0, 0.6, 0, -0.6, 0, 0.8, 0, -0.8, 0, 0.4, 0.85, 0.4,0,-0.4,-0.85,-0.4,0,0.5,1,0.5, 0,-0.5,-1,-0.5,0]
            }]
        },
        options: {
                legend: {
                    display: true,
                        labels: {
                            fontColor: 'black',
                            fontStyle:'bold',
                            fontSize:18,
                    }
                },
                scales: {
                    xAxes: [ {
                        ticks:{
                            fontSize:14,
                            fontColor:'black',
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Time axis',
                            fontColor:'black',
                            fontFamily:'sans-serif',
                            fontStyle:'bold',
                            fontSize:18
                            }
                    }],
                    yAxes: [{
                        ticks: {
                            max:1,
                            min:-1,
                            stepSize:0.2,
                            beginAtZero: true,
                            fontSize:14,
                            fontColor:'black',
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Output Voltage',
                            fontColor:'black',
                            fontFamily:'sans-serif',
                            fontStyle:'bold',
                            fontSize:18
                            }
                    }]
                }
            }
        });

    //----------------CHART UPDATION--------------//
    function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update(0);
    }

    function removeData(chart) {
        chart.data.labels.shift();
        chart.data.datasets.forEach((dataset) => {
            dataset.data.shift();
        });
        chart.update(0);
    }
    var xVal = myChart.data.labels.length;
    var yVal = 15;
    freq = calculateFreq(r1,r2,c1,c2);
    var fs=1.5*Math.round(freq);
    
    function updateChart(){                     
        removeData(myChart);
        yVal = parseFloat(Math.sin(2*Math.PI*freq*xVal));
        addData(myChart,xVal.toFixed(3),yVal);
        xVal=xVal+1/fs;
        //console.log(yVal); 

    }
    myvar =setInterval(function(){updateChart()}, 1000); 

    }              

}
//--------------------------text box and output clearing---------------------------//

function cleard() {
    $("input:text").val("");
    $("#myChart").remove()
    var canvas=document.createElement('canvas')
    var div = document.getElementById("tblwrap")
    canvas.id="myChart"
    canvas.style.height="350px"
    canvas.style.width="100%"
    canvas.style.position="relative"
    canvas.style.top="50px"
    div.appendChild(canvas)
    clearInterval(myvar)

    
}
