!function(){const e=document.getElementById("to-top");function t(){window.pageYOffset||document.documentElement.scrollTop>100?e.className="button button--totop":e.className="button button--totop hide"}t(),window.addEventListener("scroll",t)}(),function(){function e(e){return document.querySelector('[for="'+e+'"]').innerText.replace("*:","")}function t(t){let n="",o=!0,l=document.getElementById(t);return""===l.value?(o=!1,n="Please fill in the "+e(t)+" field"):l.value.length<3&&(o=!1,n=e(t)+" field should be at least 3 characters long"),{isValid:o,error:n}}function n(e,t){let n=document.getElementById(e+"-row"),o=document.createElement("div");o.innerText=t,n.className="form__row error",n.insertBefore(o,document.getElementById(e))}document.getElementById("form").addEventListener("submit",function(e){!function(){let e=document.querySelectorAll(".form__row"),t=0,n=e.length;for(;t<n;t++){e[t].className="form__row";let n=e[t].querySelector("div");n&&e[t].removeChild(n)}}();const o=function(){let e={fields:{name:t("name"),lastname:t("lastname"),message:t("message")}},n=e.fields;return e.isValid=n.name.isValid&&n.lastname.isValid&&n.message.isValid,e}();if(!o.isValid){e.preventDefault();for(let e in o.fields)o.fields.hasOwnProperty(e)&&(o.fields[e].isValid||n(e,o.fields[e].error))}})}(),function(){const e=document.getElementById("app"),t=document.getElementById("nav-open"),n=document.getElementById("nav-close"),o=window.matchMedia("(min-width: 60rem)");function l(){e.className="app viewnav"}function i(){e.className="app"}function a(){o.matches?(e.className="app",t.removeEventListener("click",l),n.removeEventListener("click",i)):(t.addEventListener("click",l),n.addEventListener("click",i))}try{a(),o.addListener(function(){a()})}catch(e){}}();