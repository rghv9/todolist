//using on() as it add listners for future elements also to "ul" as presently there only ul

$("ul").on("click","li",function(){
 
 $(this).toggleClass("completed");

});
//work for spans inside ul (as ul is present from starting)
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove;
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which===13){
		//text retreving
		var todoText=$(this).val();
		//text setter 
		$(this).val("");
		//create new li
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span>  "+todoText+"</li>");
	}
  	
});

$(".fa-plus").click(function(){
	$("input").fadeToggle(100);
});