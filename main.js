a = document.querySelectorAll(".item")
b = document.querySelectorAll(".text")



a.forEach(function(i, index, array){

    array.forEach(function(f){
        f.setAttribute("on", 0)
    });

    i.onclick = function(){

        array.forEach(function(f){
            f.setAttribute("on", 0)
            console.log(f.getAttribute("on"))
        })

        this.setAttribute("on", 1)
        if (this.classList.contains("effects_on_click")){
            pass
        }
        else {
            this.classList.add("effects_on_click")
        }


        console.log(this.getAttribute("on"))

        array.forEach(function(k){
            if (k.getAttribute("on") == 0){
                console.log(k.getAttribute("on"), k)
                r = k.querySelector(".text")
                r.style.visibility = "collapse"
                k.classList.remove("effects_on_click")
            }
            else {
                console.log(k.getAttribute("on"), k)
                r = k.querySelector(".text")
                r.style.visibility = "visible"
            }
        })

    };

    console.log(i, index, array)
});

