function new_product(e)
{
    // e.preventDefault();
    // var prodName  =  prompt("enter your product name");
    // var prodPict  =  prompt("enter url of product pic");
    // var prodBrand  =  prompt("enter your product  brand name");
    // var prodPrice  =  prompt("enter your product price");

     var prodName  =  $("#name1").val();
     var prodPict  =  $("#pict1").val();
     var prodBrand  =  $("#brand1").val();
     var prodPrice  =  $("#price1").val();

    //  console.log(prodName+prodPict+prodBrand+prodPrice);
    

     var cln=$("#c1").clone();
     var a= Math.floor(Math.random()*100);   //Math.floor is used to convert it into int value so that there is no decimal values.
     cln.attr("id","r1"+a);                  // due to decimal it conflict with the decimal used for define class
     $("#a1").append(cln);


     $("#r1"+a+" #pn1").text(prodName);    
     $("#r1"+a+" #im1").attr("src",prodPict);
     $("#r1"+a+" #st1").text(prodBrand);
     $("#r1"+a+" #pr1").text(prodPrice);

     $("#name1").val("");
     $("#pict1").val("");
     $("#brand1").val("");
     $("#price1").val("");

     $("#formContainer").css("display","none");
}

function show_form()
{
   // $("#formContainer").css("visibility","visible");  
   $("#formContainer").show()
}

