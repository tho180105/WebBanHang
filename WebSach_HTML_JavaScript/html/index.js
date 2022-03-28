function chaymarquee(){
    document.getElementById("chaymarquee").innerHTML="<marquee behavior='scroll' direction='left' scrollamount=10; hspace='100' ><img src='/images/banner4.png'></marquee>"
}
function chaymarquee1(){
    document.getElementById("chaymarquee1").innerHTML="<marquee behavior='scroll' direction='left' scrollamount=10; hspace='100' ><img src='/images/banner4.png'></marquee>"
}
function realchay(){
    setTimeout('chaymarquee()',);
    setTimeout('chaymarquee1()',15100);

}
var i=1;
        var value;
        // Hàm Show
        function show()
        {
            combo();
        }    
        // Hàm  T
        function lui(check)
        { 
            i++;
            if(i==5)
            {
                i=1;
            }
            giatri();
            combo(check);
        }
        // Hàm lùi
        function tien(check)
        {
            i--;
            giatri();
            combo(check);
        }
        // Hàm xóa
        function xoa()
        {
            var j=1;
            while(j<5)
            {
                document.getElementById("n"+j).style.background='inherit';
                j++;
            }
        }
        // Hàm tính i
        function tinhi(so)
        {
            i=so;
            giatri();
        }
        // Hàm gắn i song hành cùng value
        function giatri()
        {
            if(i==1)
            {
                value='/images/4.jpg';
            }
            else if( i==2)
            {
                value='/images/1.jpg';
            }
            else if( i==3)
            {
                value='/images/3.jpg';
            }
            else 
            {
                i=4;
                value='/images/banner1test3.png';
            }
        }
        // Hàm rút gọn
        function combo(check)
        {
            xoa();
            // document.getElementById("hinh").style.animation="texthienra 2s normal";
            document.getElementById("n"+i).style.background='red';
            document.getElementById("hinh").innerHTML="<img src='"+value +"' height='360px;' width='599px;' id='thu' /> " ;
            if(check=="t")
            {
                document.getElementById("thu").style.animation="texthienra1 2s normal";
            }
            else if(check=="l")
            {
                document.getElementById("thu").style.animation="texthienra 2s normal";
            }
            else
            {
                document.getElementById("thu").style.animation="texthienra2 2s normal";
            }
            document.getElementById("n"+i).style.animation="texthienra 4s normal";
        }

        // var vtlai_remove_fads=false;
        // function vtlai_check_adswidth()
        //     {
                // if(vtlai_remove_fads)
                // {
                //     document.getElementById("left_ads_float").style.display='none';
                //     document.getElementById("right_ads_float").style.display='none';
                //     document.getElementById("dongho").style.display='none';
                //     return;
                // }else if(document.cookie.indexOf("vtlai_remove_float_ads")!=-1)
                // {
                //     vtlai_remove_fads=true;
                //     vtlai_check_adswidth();
                //     return;
                // }
                // else
                // {
                    // var lwidth=parseInt(document.body.clientWidth);
                    // if(lwidth<1110)
                    // {
                    //     document.getElementById("left_ads_float").style.display='none';
                    //     document.getElementById("right_ads_float").style.display='none';
                    //     document.getElementById("dongho").style.display='none';
                    // }
                    // else
                    // {
                    //     document.getElementById("left_ads_float").style.display='block'
                    //     document.getElementById("right_ads_float").style.display='block';
                    //     document.getElementById("dongho").style.display='block';
                    // }
                    // setTimeout("vtlai_check_adswidth()",1000);   
                // }
            // }
            ///dong ho
            function showClock(){
        var now=new Date();
        var h=now.getHours();
        var m=now.getMinutes();
        var s=now.getSeconds();

        
        if(h<10){
            h="0"+h;
        }
        if(m<10)
        {
            m ="0"+m;
        }
        if(s<10)
        {
            s ="0"+s;
        }
        document.getElementById("dongho").innerHTML=h+":"+m+":"+s;
        setInterval("showClock()",1000);
    }

