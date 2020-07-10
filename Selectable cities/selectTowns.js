function attachEvents() 
{
  //selection of list ond change background
  $('ul#items li').click(function(){
    
    if($(this).attr("li-selected"))
    {
      
      $(this).removeAttr("li-selected");
      $(this).css('background-color','');
      
      
    }
    else
    {
      $(this).attr("li-selected",'true');
      $(this).css('background-color','#DDD');
    }
    
  });
  
  //Button function for selected cities
  $('#showTownsButton').click(function()
   {
         $('#selectedTowns').text("Selected Towns:" + $("ul#items li[li-selected=true]").toArray().map(li=>li.textContent).join(","));
   });
}

   
    