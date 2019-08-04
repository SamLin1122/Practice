$("ul").on("click","li",function () {
  $(this).toggleClass("completed");
});
$("ul").on("click","span", function (e) {
  $(this).parent().slideUp(500,function(){
    this.remove();
  })
})
$("input[type='text']").keypress(function(e){
  if(e.which===13){
  $("ul").append(`<li><span><i class="far fa-trash-alt"></i></span>${this.value}</li>`);
  $(this).val("");
};
})
$(".fa-plus").on("click",function(){
  $("input[type='text']").fadeToggle();
})