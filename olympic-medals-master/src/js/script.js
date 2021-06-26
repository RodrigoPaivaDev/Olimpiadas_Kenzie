


const urlSite = "https://kenzie-olimpiadas.herokuapp.com/paises"
fetch(urlSite)
.then(response => response.json())
.then(data => tratarDadosMedalhas(data))



let sectionQuadroMedalhas = document.querySelector('.quadroMedalhas')



function criarTemplateLinha(colocacao, country, flag_url, medal_gold, medal_silver, medal_bronze){

    //criando linha do quadro
    let linha = document.createElement('div');

    //adicioando class para a class linha
    linha.classList.add('linha');

    //coluna rank
    let colunaRank = criaColunaRank(`${colocacao}º `);
    let colunaCountry = criaColunaCountry(country, flag_url)
    let gold = criaMedalGold(medal_gold)
    let silver = criaMedalSilver(medal_silver)
    let bronze = criaMedalBronze(medal_bronze)
    let totalMedalhas = (medal_gold + medal_silver + medal_bronze)
    let total = criaMedalTotal(totalMedalhas)

    //add elementos para linha
    linha.appendChild(colunaRank)
    linha.appendChild(colunaCountry)
    linha.appendChild(gold)
    linha.appendChild(silver)
    linha.appendChild(bronze)
    linha.appendChild(total)
    
    //add elementos para a section principal
    sectionQuadroMedalhas.appendChild(linha)

}

//funcção que se conecta com a API
function tratarDadosMedalhas(arrayPaises){
    let paisesOrdenados = ordenarPaises(arrayPaises) //recebe a funcao declarada la em baixo
    for(let i = 0; i < paisesOrdenados.length; i++){
        let pais = paisesOrdenados[i]
        //cria o template
        criarTemplateLinha(
            i+1,
            pais.country,
            pais.flag_url,
            pais.medal_gold,
            pais.medal_silver,
            pais.medal_bronze,
        )
    }
}


//funcao de ordenar paises
function ordenarPaises(arrayPaises){
    let newArrayPaises = arrayPaises.map(somarTotal).sort((a,b) => b.medal_gold - a.medal_gold)
    return newArrayPaises;
}

//ordena de acordo com a soma das medalhas
function somarTotal(pais){
    return pais;
}







//função que cria a coluna rank
function criaColunaRank(rank){
        //cria coluna rank 
        let colunaRank = document.createElement('div') 
        colunaRank.classList.add('coluna', 'coluna-rank')
    
        //cria span da coluna rank
        let colunaRankSpan = document.createElement('span')
        colunaRankSpan.innerText = rank
        colunaRank.appendChild(colunaRankSpan)

        return colunaRank;
}

//função que cria a coluna country
function criaColunaCountry(country, urlImagem){
    //cria coluna country 
    let colunaCountry = document.createElement('div') 
    colunaCountry.classList.add('coluna', 'country')

    //cria span da coluna country
    let colunaCountrySpan = document.createElement('span')
    colunaCountrySpan.innerText = country
    

    //cria span da coluna imagem
    let colunaCountryImagem = document.createElement('img')
    colunaCountryImagem.src = urlImagem
    colunaCountryImagem.alt = country

    colunaCountry.appendChild(colunaCountryImagem)
    colunaCountry.appendChild(colunaCountrySpan)

    return colunaCountry;
}


//função que cria a coluna medal-gold
function criaMedalGold(gold){
    //cria coluna medal gold 
    let coluna = document.createElement('div') 
    coluna.classList.add('coluna', 'medal-gold')

    //cria span da coluna medal gold 
    let colunaSpan = document.createElement('span')
    colunaSpan.innerText = gold
    coluna.appendChild(colunaSpan)

    return coluna;
}

//função que cria a coluna medal-silver
function criaMedalSilver(silver){
     //cria coluna medal-silver
     let coluna = document.createElement('div') 
     coluna.classList.add('coluna', 'medal-silver')
 
     //cria span da coluna medal-silver
     let colunaSpan = document.createElement('span')
     colunaSpan.innerText = silver
     coluna.appendChild(colunaSpan)
 
     return coluna;
}

//função que cria a coluna medal-bronze
function criaMedalBronze(bronze){
    //cria coluna medal-bronze 
    let coluna = document.createElement('div') 
    coluna.classList.add('coluna', 'medal-bronze')

    //cria span da coluna medal-bronze
    let colunaSpan = document.createElement('span')
    colunaSpan.innerText = bronze
    coluna.appendChild(colunaSpan)

    return coluna;
}

//função que cria a coluna total
function criaMedalTotal(total){
    //cria coluna total 
    let colunaTotal = document.createElement('div') 
    colunaTotal.classList.add('coluna', 'total')

    //cria span da coluna total
    let colunaTotalSpan = document.createElement('span')
    colunaTotalSpan.innerText = total
    colunaTotal.appendChild(colunaTotalSpan)

    return colunaTotal;
}