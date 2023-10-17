function cargarContenido(){
cargarCotizacioes(mostrarCotizacion);

cargarElementos();
cargarTextos();
}

async function cargarCotizacioes(callback){

    let promesa1 = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    callback(await promesa1.json());

    let promesa2 = await fetch('https://open.er-api.com/v6/latest/USD')
    let datos2 = await promesa2.json();
    document.getElementById('UsdEur').append(datos2.rates.EUR + ' (EUR)');
    document.getElementById('UsdArs').append(datos2.rates.ARS + ' (ARS)');
    document.getElementById('imgEspera').style.visibility = 'hidden';
    
}

function mostrarCotizacion(datos){
    document.getElementById('BitcoinUsd').append(datos.bpi.USD.rate + ' (Usd)');
}

function cargarElementos(){
    document.getElementById('imgLogo').setAttribute('src', 'logo.jpg');
    document.getElementById('imgLogo').setAttribute('style','width: 100px; height: 100px;');
    document.getElementById('titulo').textContent= 'cotizaciones online';
    document.getElementById('imgEspera').setAttribute('src', 'loading.gif');
    document.getElementById('imgEspera').setAttribute('style', 'width: 50px; height: 50px;');

}

function cargarTextos(){
    document.getElementById('UsdEur').append('Usd a Eur ');
    document.getElementById('UsdArs').append('Usd a Ars ');
    document.getElementById('BitcoinUsd').append('Bitcoin a Usd ');

}
