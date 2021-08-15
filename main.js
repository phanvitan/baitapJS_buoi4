
// *************  BÀI 1 : Sắp xếp thứ tự từ nhỏ đến lớn ***************

// * Khối 1: inputs
//  * numbers
//  * 
//  * Khối 2: các bước xử lý
//  * B1: tìm thẻ html và lấy giá trị
//  * B2: Xây dựng các điều kiện
//  * B3: Hiển thị lên UI
//  
//  * Khối 3: output
//  */

document.getElementById("btnSXTT").onclick = function(){

    var num1 = document.getElementById("input1").value;
    console.log(num1);
    var num2 = document.getElementById("input2").value;
    console.log(num2);
    var num3 = document.getElementById("input3").value;
    console.log(num3);

    if(num1 <= num2){
        if(num2 <= num3){
        document.getElementById("txtResultSXTT").innerHTML = "<br>"+num1+"<="+num2+"<="+num3;
        }else{
            if (num1 <= num3){
                document.getElementById("txtResultSXTT").innerHTML = "<br>"+num1+"<="+num3+"<="+num2;
            }else{
                document.getElementById("txtResultSXTT").innerHTML = "<br>"+num3+"<="+num1+"<="+num2;
            }
        }
    }
    else{
        if(num2 >= num3){
            document.getElementById("txtResultSXTT").innerHTML = "<br>"+num3+"<="+num2+"<="+num1;         
        }
        else{
            if (num1>=num3) {
                document.getElementById("txtResultSXTT").innerHTML = "<br>"+num2+"<="+num3+"<="+num1;
            }
            else{
                document.getElementById("txtResultSXTT").innerHTML = "<br>"+num2+"<="+num1+"<="+num3;
            }
        }
    }    
}

// *************  BÀI 2 : Chào các TV trong GĐ ***************

function calcHELLO(){
    var who = document.getElementById("selectPerson").value;
    console.log(who);
    
    if(who == "Bố"){
        document.getElementById("txtResultHELLO").innerHTML = "<br>Kính chào "+who+"!";
    }else{
        if(who == "Mẹ"){
            document.getElementById("txtResultHELLO").innerHTML = "<br>Kính chào "+who+"!";
        }else{
            if(who == "Anh Trai"){
                document.getElementById("txtResultHELLO").innerHTML = "<br>Thân chào "+who+"!";
        }else{
            if (who == "Em Gái") {
                document.getElementById("txtResultHELLO").innerHTML = "<br>Thân chào "+who+"!";
            }else{
                document.getElementById("txtResultHELLO").innerHTML = "<br>Chào "+who+"!";
            }  
        }
        }
    }
}

// *************  BÀI 3 : SỐ CHẴN - SỐ LẺ ***************

document.getElementById("btnChanle").onclick = function(){
    var numA1 = document.getElementById("inputNum1").value;
    console.log(numA1);
    var So1 = numA1 % 2;
    console.log(So1);
    var numA2 = document.getElementById("inputNum2").value;
    console.log(numA2);
    var So2 = numA2 % 2;
    console.log(So2);
    var numA3 = document.getElementById("inputNum3").value;
    console.log(numA3);
    var So3 = numA3 % 2;
    console.log(So3);

    var SoChan = 0;
    var SoLe = 0;

    if(So1 == 0){
        SoChan++;
    }else{
        SoLe++;
    }

    if(So2 == 0){
        SoChan++;
    }else{
        SoLe++;
    }

    if(So3 == 0){
        SoChan++;
    }else{
        SoLe++;
    }

    console.log(SoChan);
    console.log(SoLe);

    document.getElementById("txtResultChanle").innerHTML =
      "<br> có " + SoChan + " số chẵn " + " và " + SoLe + " số lẻ "

}


// *************  BÀI 4 : HÌNH TAM GIÁC ***************

document.getElementById("btnTAMGIAC").onclick = function(){

    var canh1 = document.getElementById("canh1").value;
    console.log(canh1);
    var canh2 = document.getElementById("canh2").value;
    console.log(canh2);
    var canh3 = document.getElementById("canh3").value;
    console.log(canh3);
    var pitago1 = canh1 * canh1;
    console.log(pitago1);
    var pitago2 = canh2 * canh2;
    console.log(pitago2);
    var pitago3 = canh3 * canh3;
    console.log(pitago3);

    if(canh1 == canh2 && canh2 == canh3){
        document.getElementById("txtResultTAMGIAC").innerHTML = "<br>Tam giác đều";
    }else{
        if(canh1 == canh2 || canh1 == canh3 || canh2 == canh3){
            document.getElementById("txtResultTAMGIAC").innerHTML = "<br>Tam giác cân";
        }else{
            if(pitago1 == pitago2 + pitago3 || pitago2 == pitago1 + pitago3 || pitago3 == pitago2 + pitago1){
        document.getElementById("txtResultTAMGIAC").innerHTML = "<br>Tam giác vuông";
            }else{
                document.getElementById("txtResultTAMGIAC").innerHTML = "<br>Tam giác thường";
            }   
        }
    }
}
