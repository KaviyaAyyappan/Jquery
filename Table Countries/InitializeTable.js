function initializeTable() 
{
    $("#createLink").click(createCountry);
    addCountry("sweden","stockholm");
    addCountry("germany","Berlin");
    addCountry("France","Paris");
    fixRowLinks();

    function addCountry(country,capital)
    {
        let tr= $("<tr>")
        .append ($("<td>").text(country))
        .append ($("<td>").text(capital))
        .append($("<td>")
            .append($("<a href='#'>[Up]</a>").on('click',moveUp))
            .append($("<a href='#'>[Down]</a>").on('click',moveDown))
            .append($("<a href='#'>[Delete]</a>").on('click',deleteRow)));
            tr.appendTo($('#countriesTable'));
           
    }
    

    function createCountry()
    {
        let country=$('#newCountryText').val();
        let capital=$('#newCapitalText').val();
        addCountry(country,capital,true);
        $('#newCountryText').val('');
        $('#newCapitalText').val('');

    }

    function deleteRow()
    {
        let tr=$(this).parent().parent();
      
            tr.remove();
            fixRowLinks();
        
        
    }
    function moveUp()
    {
        let tr=$(this).parent().parent();
            tr.insertBefore(tr.prev());
            fixRowLinks();
       
    }
    function moveDown()
    {
        let tr=$(this).parent().parent();
            tr.insertAfter(tr.next());
            fixRowLinks;
       
    }
    function fixRowLinks()
    {

        $('#countriesTable a').css('display','inline');
        $('#countriesTable tr:nth-child(3) td a:contains("Up")').css('display','none');
        $('#countriesTable tr:last-child td a:contains("Down")').css('display','none');
       

    }


 
}
    