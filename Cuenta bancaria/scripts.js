function mostrarInformacion(){

    fetch('data.json')
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
        document.getElementById('tituloBanco').innerHTML=data.banco;
        document.getElementById('sucursal').innerHTML=data.sucursal;
        document.getElementById('nombreCliente').innerHTML=data.titular;
        document.getElementById('cuentaCliente').innerHTML=data.nro_cuenta;
        document.getElementById('saldoCliente').innerHTML=data.saldo[0].monto + " " + data.saldo[0].moneda + "<br>" + data.saldo[1].monto + " " + data.saldo[1].moneda;
        document.getElementById('numeroCbu').innerHTML=data.cbu;
    });
}
