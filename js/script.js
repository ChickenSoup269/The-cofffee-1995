/* dùng cho thanh search, xe mua hàng và menu hiện ra */
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

/* js cho dấu ba gạch */
function myFunction(x) {
    x.classList.toggle("change");
  }
    /* js cho nội dung dấu đi và hiện ra */
  window.addEventListener('scroll', reveal);
  function reveal(){
  var reveals = document.querySelectorAll('.reveal');

  for(var i = 0; i < reveals.length; i++){

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('active');
    }
    else{
      reveals[i].classList.remove('active');
    }
  }
}
/* js cho menu khi cuộn */
window.addEventListener("scroll", function(){
             var header = document.querySelector("header");
             header.classList.toggle("sticky", window.scrollY > 0);
         })
         document.getElementById('ZX').addEventListener('click',
         function(){
            document.querySelector('.bg-modal').style.display = 'flex';
         });
         document.querySelector('.dong').addEventListener('click',
         function(){
            document.querySelector('.bg-modal').style.display = 'none';
         }) 
         /* modal 2 */
         document.getElementById('ZX1').addEventListener('click',
         function(){
            document.querySelector('.bg-modal2').style.display = 'flex';
         });
         document.querySelector('.dong2').addEventListener('click',
         function(){
            document.querySelector('.bg-modal2').style.display = 'none';
         }) 
         /* modal 3 */
         document.getElementById('ZX2').addEventListener('click',
         function(){
            document.querySelector('.bg-modal3').style.display = 'flex';
         });
         document.querySelector('.dong3').addEventListener('click',
         function(){
            document.querySelector('.bg-modal3').style.display = 'none';
         })
         /* modal 4 */
         document.getElementById('ZX3').addEventListener('click',
         function(){
            document.querySelector('.bg-modal4').style.display = 'flex';
         });
         document.querySelector('.dong4').addEventListener('click',
         function(){
            document.querySelector('.bg-modal4').style.display = 'none';
         })
         /* modal 5 */
         document.getElementById('ZX4').addEventListener('click',
         function(){
            document.querySelector('.bg-modal5').style.display = 'flex';
         });
         document.querySelector('.dong5').addEventListener('click',
         function(){
            document.querySelector('.bg-modal5').style.display = 'none';
         })
         /* modal 6 */
         document.getElementById('ZX5').addEventListener('click',
         function(){
            document.querySelector('.bg-modal6').style.display = 'flex';
         });
         document.querySelector('.dong6').addEventListener('click',
         function(){
            document.querySelector('.bg-modal6').style.display = 'none';
         })

         
         // js phát hiện lỗi sai
           /* Đối tượng */ 
  function Validator(options){


   //  lơ chuột đi sẽ hiện lỗi
   function validate(inputElement, rule) {

       var errorMessage = rule.test(inputElement.value);
       var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
                
       if(errorMessage) {
           errorElement.innerText = errorMessage;
           inputElement.parentElement.classList.add('invalid');
       }
       else {
           errorElement.innerText = '';
           inputElement.parentElement.classList.remove('invalid');
       }
   }
   //  lấy element của forms
   var formElement = document.querySelector(options.form);

   if (formElement) {
      
       options.rules.forEach(function (rule) {

           var inputElement = formElement.querySelector(rule.selector);

           if (inputElement) {
               //  xử lý trường hợp lơ chuột ra ngoài
               inputElement.onblur = function () {
                 
                 validate(inputElement, rule);

               }
               //  xử lý mỗi khi nhập vào input
               inputElement.oninput = function () {
                   var errorElement = inputElement.parentElement.querySelector('.form-message');
                   errorElement.innerText = '';
                   inputElement.parentElement.classList.remove('invalid');
               }
           }

       });
   }
}
/* định nghĩa rules */
//  nguyen tắc của các rule
Validator.isRequired = function(selector, message){
 return {
     selector: selector, 
     test: function(value) {
       return value.trim() ? undefined : message || 'vui lòng nhập vào đây'
     }
 };
}
Validator.isEmail = function(selector, message){
   return {
       selector: selector,
       test: function (value) {
           var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
           return regex.test(value) ? undefined : message || 'Vui lòng nhập email';
       }
   };
}

