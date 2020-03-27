$('a[href="#"]').on("click",(function(e){e.preventDefault()})),$(document).ready((function(){let e=$(".menu-item");console.log(e),e.on("click",(function(e){e.preventDefault();let t=$(this).attr("href");$(".visible").toggleClass("visible"),$(t).toggleClass("visible"),$(".menu-active").toggleClass("menu-active"),$(this).toggleClass("menu-active")}))}));
//# sourceMappingURL=main.js.map
