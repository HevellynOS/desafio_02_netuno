var selectEstado = document.querySelector("#estado");

fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then(function(response){
        return response.json();  
    })
    .then(function(data){
        data.forEach(function(estado){
            var option = document.createElement("option");
            option.value = estado.sigla;
            option.text = estado.nome;
            selectEstado.appendChild(option);
        });
    })
    .catch(function(error){
        console.log("Errorrr" = error);
    })