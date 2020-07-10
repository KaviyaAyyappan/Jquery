function domSearch(selector) {
   

    let container=$("selector");
    // let divContainer=("<div>");
    // divContainer.addClass("add-control");
    // let label1=("<label>Enter Text:<input></label>");
    // let addBtn=("<a>Add</a>");
    // addBtn.addClass("button");
    // addBtn.attr("style,display:inline-block");

    $("div#content").addClass("items-control");
    var new_div=$("<div>").addClass("add-control").append(  
                $("<label>Enter Text:").append(  
                $("<input>") ) )
    var addbtn=("<a>Add</a>");
    var total =new_div.append(addbtn);
    container.appendTo(total);

    }
    