function over(){
    document.hinh.src="/images/matsau.jpg";
};
function out(){
   document.hinh.src="/images/banner1.jpg";
   
};

function tinhtien()
{
    var tienship=0;
   if(document.getElementById("shipfee1").innerHTML==" 10.000đ")
   {
    tienship=10000;
   }
   else
   {
       tienship=0;
   }
   var quantity =document.getElementById("quantity").value;
   var unitprice=document.getElementById("product").getAttribute("data-price");
   var subtotal =quantity*unitprice+tienship;
   var tnl=new Intl.NumberFormat(subtotal);
   document.getElementById("thanhtien").innerHTML=tnl.format(subtotal)+" đ";
}
function checkshipfee(value)
{
    if(value==true)
    {
    document.getElementById("shipfee1").innerHTML=" 0.000đ";
    }
    else{

    document.getElementById("shipfee1").innerHTML=" 10.000đ";
    }
}

function tangsoluong()
{
    document.getElementById("quantity").value=Number(document.getElementById("quantity").value)+Number(1);
}
function giamsoluong()
{
    if(document.getElementById("quantity").value==0){
        document.getElementById("quantity").value=0
    }
    else
    {
        document.getElementById("quantity").value=Number(document.getElementById("quantity").value)-Number(1);
    }
}
/////............................Slide show .................
function hinhsanpham(value)
{
    if(value==1)
    {
        document.hinh.src="/images/matsau.jpg";
    }
    else if(value==2)
    {
        document.hinh.src="/images/banner1.jpg";
    }
    else 
    {
        document.hinh.src="/images/361592_toa-sang-jessica-jung.jpg";

    }
}
 function liketym() 
 {
   
    if(document.getElementById("liketym").style.background!='red')
    {
        document.getElementById("liketym").style.background='red';
    }
    else
    {
        document.getElementById("liketym").style.background='silver';
    }
 }
 function readed() 
 {
   
    if(document.getElementById("readed").style.background!='red')
    {
        document.getElementById("readed").style.background='red';
    }
    else
    {
        document.getElementById("readed").style.background='silver';
    }
 }
 var checkhutym=0;
 var checkhu=0;
 function hieuung()
 {
    checkhutym++;
     if(checkhutym%2!=0){
        document.getElementById("dalike").innerHTML="<p id='dalike1' style='background-color: green;border-radius: 5px;'>Đã thích </p> " ;
        document.getElementById("dalike1").style.animation="texthienra 2s normal";
        setTimeout("document.getElementById('dalike').innerHTML=null",2000);
     }
     else
     {
        document.getElementById("dalike").innerHTML="<p id='dalike1' style='background-color: green;border-radius: 5px;'>Bỏ thích </p> " ;
        document.getElementById("dalike1").style.animation="texthienra 2s normal";
        setTimeout("document.getElementById('dalike').innerHTML=null",2000);
     }
 }
 function hieuung1()
 {
     checkhu++;
     if(checkhu%2!=0){
        document.getElementById("daread").innerHTML="<p id='daread1' style='background-color: green;border-radius: 5px;'>Đã Đọc </p> " ;
        document.getElementById("daread1").style.animation="texthienra 2s normal";
        setTimeout("document.getElementById('daread').innerHTML=null",2000);

     }
     else
     {
        document.getElementById("daread").innerHTML="<p id='daread1' style='background-color: green;border-radius: 5px;'>Chưa Đọc </p> " ;
        document.getElementById("daread1").style.animation="texthienra 2s normal";
        setTimeout("document.getElementById('daread').innerHTML=null",2000);
     }
 }
 var p = document.querySelector('p');
        var tet = new Date("Apr 23,2022 24:00:00").getTime();
        //Tổng số giây 
        var countDown = setInterval(run,1000);
        function run(){
 
            var now = new Date().getTime();
            //Số s đến thời gian hiện tại
            var timeRest = tet - now;
            //Số s còn lại để đến tết;
            var day = Math.floor(timeRest/(1000*60*60*24));
            //Số ngày còn lại
            var hours = Math.floor(timeRest%(1000*60*60*24)/(1000*60*60));
            if(hours<10)
            {
                hours="0"+hours;
            }
            // Số giờ còn lại
            var minute = Math.floor(timeRest%(1000*60*60)/(1000*60));
            if(minute<10)
            {
                minute="0"+minute;
            }
            // Số phút còn lại
            var sec = Math.floor(timeRest%(1000*60)/(1000));
            if(sec<10)
            {
                sec="0"+sec;
            }
            // Số giây còn lại
            p.innerHTML ="<div class='timenguoc'>" +day+" DAY </div>"  +
            "<span id='timenguoc1'>"+hours+'h'+"</span>"+' : '+
            "<span id='timenguoc2'>" + minute + 'm '+"</span>"+': '+
            "<span id='timenguoc3'>" + sec +'s '+"</span>";
             
                        if(timeRest <= 0){
                        clearInterval(counDown);
                        p.innerHTML = "HPNY";
                        }              
    }