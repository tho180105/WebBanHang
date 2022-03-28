function kiemtra(){
    if(document.getElementById("email").value=="")
    {   
        // document.getElementById('loi1').innerHTML='Không thể để trống Email' ;
        alert('Không thể để trống Email');
    }

    if(document.getElementById("matkhau").value=="")
    {
        // document.getElementById("loi2").innerHTML="Không thể để trống Mật khẩu";
        alert('Không thể để trống Mật khẩu');

    }else 
    {
        // document.getElementById("buttonkiemtra").innerHTML="<a> Đăng ký </a>";
        document.getElementById("linkdk").href="/html/index.html";
    }
    // alert(a.nodeName);
}


///
function validate() {
      
    if( document.myForm.EMail.value == "" ) {
        alert( "Please provide your Email!" );
        document.myForm.EMail.focus() ;
        return false;
     } 
     if( document.myForm.Name.value == "" ) {
       alert( "Please provide your password!" );
       document.myForm.Name.focus() ;
       return false;
    }
    if( document.myForm.Country.value == "-1" ) {
        alert( "Please provide your country!" );
        return false;
     }
    alert("Đăng ký thành công !")

    return( true );
 }
 function validateEmail() {
       var emailID = document.myForm.EMail.value;
       atpos = emailID.indexOf("@");
       dotpos = emailID.lastIndexOf(".");
       
       if (atpos < 1 || ( dotpos - atpos < 2 )) {
          alert("Please enter correct email ID")
          document.myForm.EMail.focus() ;
          return false;
       }
       return( true );
      }