// bài 1:cho người dùng nhập vào 3 số nguyên, viết chương trình suất 3 số nguyên theo thứ tự tăng dần
function arrange(){
    var a= parseInt(document.getElementById('a').value);
    var b= parseInt(document.getElementById('b').value);
    var c= parseInt(document.getElementById('c').value);
    var temp;
     // chuyển số bé nhất vào a
     if(a>b){
        temp=a;
        a=b;
        b=temp;
    }
 
    if(a>c){
        temp=a;
        a=c;
        c=temp;
    }
 
    // chuyển số bé nhì vào b
   if(b>c){
        temp=b;
        b=c;
        c=temp;
    }
    document.getElementById('output1').innerHTML = "Sắp xếp theo thứ tự tăng dần: " + a + ", " + b + ", " + c;

}

//bài 2: Viết chương trình chào hỏi
function chao_hoi(){
    var member = document.getElementById("member").value;

    // Tạo chuỗi chào hỏi dựa trên lựa chọn
    var greeting = "";
    switch (member) {
        case "B":
            greeting = "Xin chào Bố!";
            break;
        case "M":
            greeting = "Xin chào Mẹ!";
            break;
        case "A":
            greeting = "Xin chào Anh trai!";
            break;
        case "E":
            greeting = "Xin chào Em gái!";
            break;
        default:
            greeting = "Xin chào!";
            break;
    }

    // Hiển thị kết quả
    document.getElementById("output2").innerHTML = greeting;
}
// <!-- bài 3: viết chương trình suất ra có bao nhiêu số lẻ và bao nhiêu số chẵn -->
function odd_even(){
    var d = parseInt(document.getElementById('d').value);
    var e = parseInt(document.getElementById('e').value);
    var f = parseInt(document.getElementById('f').value);
    var sumOdd=0;
    var sumEven=0;
    if (d%2==0){
        sumEven++;
    }
    else sumOdd++;
    if (e%2==0){
        sumEven++;
    }
    else sumOdd++;
    if (f%2==0){
        sumEven++;
    }
    else sumOdd++;
    document.getElementById('output3').innerHTML = "có " + sumEven + " số chẵn và " + sumOdd + " số lẻ " ;

}
// bài 4: nhập 3 cạnh của tam giác và cho biết đó là tam giác gì 
function triangle(){
 var g = parseInt(document.getElementById('g').value);
 var h = parseInt(document.getElementById('h').value);
 var i = parseInt(document.getElementById('i').value);
 // Kiểm tra bất đẳng thức tam giác
 if (g + h > i && h + i > g && i + g > h) {
    var triangleType = "";

    // Kiểm tra tam giác đều
    if (g === h && h === i) {
        triangleType = "tam giác đều";
    }
    // Kiểm tra tam giác cân
    else if (h === i || h === g || g === i) {
        triangleType = "tam giác cân";
    }
    // Kiểm tra tam giác vuông
    else if (g**2 + h**2 === i**2 || h**2 + i**2 === g**2 || i**2 + g**2 === h**2) {
        triangleType = "tam giác vuông";
    }
    // Các trường hợp còn lại là tam giác thường
    else {
        triangleType = "tam giác thường";
    }

    document.getElementById('output4').innerHTML = triangleType;
} else {
    document.getElementById('output4').innerHTML = "Ba cạnh này không tạo thành tam giác.";
}
}