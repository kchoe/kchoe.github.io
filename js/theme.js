
    // Open/Closes the sidebar menu
    function menuClose(){
        var menu = document.getElementById("sidebar-wrapper");
        menu.className = menu.className.replace("active", "");
    }

    function menuOpen(){
        var menu = document.getElementById("sidebar-wrapper");
        menu.className += "active";
    }