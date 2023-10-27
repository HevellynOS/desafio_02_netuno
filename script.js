var selectEstado = document.querySelector("#estado");

fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        data.forEach(function(estado) {
            var option = document.createElement("option");
            option.value = estado.sigla;
            option.text = estado.nome;
            selectEstado.appendChild(option);
        });
    })
    .catch(function(error) {
        console.log("Error: " + error); 
    });

    var menu = document.querySelector(".menu-mobile");
    var menuIcon = document.querySelector(".menu-mobile-icon");
    var items = document.querySelector(".show-menu-mobile");
    var button = document.querySelector(".button-mobile");
    var topBar = document.querySelector(".top-bar");
    var logo = document.querySelector(".logo");



menuIcon.addEventListener("click", function() {
    menuIcon.style.display = "none";
    menu.appendChild(items);
    menu.appendChild(button);

    logo.style.marginRight = "0";
    var iconClose = document.createElement("div");
    iconClose.style.backgroundImage = "url('assets/x-solid.svg')";
    iconClose.style.backgroundRepeat = "no-repeat";
    iconClose.style.position = "absolute";
    iconClose.style.width = "30px";
    iconClose.style.height = "30px";
    iconClose.style.top = "20px";
    iconClose.style.right = "20px";
    
    iconClose.addEventListener("click", function() {
        iconClose.style.display = "none";
        menuIcon.style.display = "block";
        items.style.display = "none";
        button.style.display = "none";
    });

    menu.appendChild(iconClose);

    items.style.display = "block";
    button.style.display = "block";
    
    topBar.style.flexDirection = "column";
    topBar.style.padding = "10px";
    topBar.style.paddingTop = "20px";
    topBar.style.gap = "5px"
    topBar.style.boxShadow = "10px 0 5px black";
    
    topBar.style.borderBottom = "none";

    menu.style.fontSize = "2rem";
    menu.style.flexDirection = "column";
    menu.style.display = "flex";
    menu.style.alignItems = "center";
    menu.style.justifyContent = "space-between";
    menu.style.width = "100%"
    menu.style.gap = "10px"


    
});
