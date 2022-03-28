function offgiohang()
            {
                document.getElementById("left_ads_float").style.display="none";
            }
            function ongiohang()
            {
                document.getElementById("left_ads_float").style.display="block";
            }

function them(button)
{
    var bb =button.parentElement.cloneNode(true);
    var btnxoa=bb.getElementsByTagName("button")[0];
    btnxoa.innerText ="Xóa";
    btnxoa.setAttribute("onclick","xoa(this);tinhtong();");
    document.getElementById("cart1").appendChild(bb);
    document.getElementById("left_ads_float").style.display="";
    thanhtoan();
}
    
function xoa(button)
{
    var bb=button.parentElement;
    document.getElementById("cart1").removeChild(bb);
    thanhtoan();
}
function xoaall(){
    document.getElementById("cart1").innerHTML=null;
    thanhtoan();
}
function tinhtong()
{
    var cart = document.getElementById("cart1");
    var rows = cart.getElementsByTagName("span");
    var tong=0;
    for(var i=0;i<rows.length;i++)
    {
        var price =rows[i].innerText;
        price=parseInt(price);
        tong+=price;
    }
    document.getElementById("tong").innerText=tong+".000 đ";
}

document.getElementById("left_ads_float").style.display="none";
var vtlai_remove_fads=false;
function vtlai_check_adswidth()
    {
        if(vtlai_remove_fads)
        {
            document.getElementById("left_ads_float").style.display='none';
            document.getElementById("left_ads_float1").style.display='none';
            document.getElementById("cart").style.display='none';
            return;
        }else if(document.cookie.indexOf("vtlai_remove_float_ads")!=-1)
        {
            vtlai_remove_fads=true;
            vtlai_check_adswidth();
            return;
        }
        else
        {
            var lwidth=parseInt(document.body.clientWidth);
            if(lwidth<1110)
            {
                document.getElementById("left_ads_float1").style.display='none';
                document.getElementById("left_ads_float").style.display='none';
                document.getElementById("cart").style.display='none';
            }
            else
            {
                document.getElementById("left_ads_float1").style.display='block'
                document.getElementById("left_ads_float").style.display='block'
                document.getElementById("cart").style.display='block';
            }
            setTimeout("vtlai_check_adswidth()",10);
        }
    }

function thanhtoan()
{
    var a=document.getElementById('thanhtoan1');
    if(document.getElementById("cart1").innerHTML=="")
    {
        a.disabled = true;
    }
    else
    {
        a.disabled=false;
    }
}


///boloc
var bl=document.getElementsByClassName("reallistbook1-1box");
    var tongsobox=bl.length;
function getvalue(value)
{
    switch(value){
        case "1":
            for(var i=0;i<tongsobox;i++)
            {
                    var giatriss= bl[i].getElementsByTagName("span")[0].innerText;
                    var bb=bl[i]
                    if(giatriss>0.000){
                        document.getElementById("listbook").getElementsByClassName("reallistbook1-1box")[i].style.display="";
                    }
            } 
            break;
        case "2":
            for(var i=0;i<tongsobox;i++)
                {
                        document.getElementById("listbook").getElementsByClassName("reallistbook1-1box")[i].style.display="";
                        var giatriss= bl[i].getElementsByTagName("span")[0].innerText;
                        var bb=bl[i]
                        if(giatriss>=50.000){
                            document.getElementById("listbook").getElementsByClassName("reallistbook1-1box")[i].style.display="none";
                        }
                } 
            break;

            case "3":
            for(var i=0;i<tongsobox;i++)
                {       document.getElementById("listbook").getElementsByClassName("reallistbook1-1box")[i].style.display="";
                        var giatriss= bl[i].getElementsByTagName("span")[0].innerText;
                        var bb=bl[i]
                        if(giatriss<50.000 || giatriss>100.000){
                            document.getElementById("listbook").getElementsByClassName("reallistbook1-1box")[i].style.display="none";
                        }
                } 
                break;

            case "4":
            for(var i=0;i<tongsobox;i++)
                {       document.getElementById("listbook").getElementsByClassName("reallistbook1-1box")[i].style.display="";
                        var giatriss= bl[i].getElementsByTagName("span")[0].innerText;
                        var bb=bl[i]
                        if(giatriss<100.000 ||giatriss>200){
                            document.getElementById("listbook").getElementsByClassName("reallistbook1-1box")[i].style.display="none";
                        }
                } 
                break;
            case "5":
            for(var i=0;i<tongsobox;i++)
                {       document.getElementById("listbook").getElementsByClassName("reallistbook1-1box")[i].style.display="";
                        var giatriss= bl[i].getElementsByTagName("span")[0].innerText;
                        var bb=bl[i]
                        if(giatriss<200.000){
                            document.getElementById("listbook").getElementsByClassName("reallistbook1-1box")[i].style.display="none";
                        }
                } 
                break;
    }
}