import qs from 'qs';

export const functionApi = () => {

    const fetchVehicle = (type, brand, model, year) => {

        let arYear = year.split("-");
        let attType = [] ;
        attType.push("carro");
        attType.push("moto");
        attType.push("caminhão");

        return fetch("https://veiculos.fipe.org.br/api/veiculos/ConsultarValorComTodosParametros", {
        method: "POST",
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        },
        body: qs.stringify({
            "codigoTabelaReferencia": 294,
            "codigoTipoVeiculo": type,
            "codigoMarca": brand,
            "codigoModelo": model,
            "ano": year,
            "anoModelo": arYear[0],
            "codigoTipoCombustivel": arYear[1],
            "tipoConsulta": "tradicional",
            "tipoVeiculo": attType[(parseInt(type)-1)],
            })
        })  
        .then((resp) => resp.json())
        .then((data) => {
            return data.result;
        }).catch((err) => console.log(err))
}



    return {
        fetchVehicle
    }

}