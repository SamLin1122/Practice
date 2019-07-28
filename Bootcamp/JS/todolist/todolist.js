$("ul").on("click","li",function () {
  $(this).toggleClass("completed");
});
$("ul").on("click","span", function (e) {
  console.log(this)
  $(this).parent().slideUp(500,function(){
    this.remove();
  })
  // e.stopPropagation();
})
$("input[type='text']").keypress(function(e){
  if(e.which===13){
  $("ul").append(`<li><span><i></i></span>${this.value}</li>`);
  $("span i").addClass("far");
  $("span i").addClass("fa-trash-alt");
  $(this).val("");
};
})
$(".fa-plus").on("click",function(){
  $("input[type='text']").fadeToggle();
})