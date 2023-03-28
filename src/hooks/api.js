import axios from 'axios';

export const fetchReference = () => {
    return axios.post('https://veiculos.fipe.org.br/api/veiculos/ConsultarTabelaDeReferencia', {
    }, {
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
};

export const fetchBrands = async (vehicleType) => {
    return await axios.post('https://veiculos.fipe.org.br/api/veiculos/ConsultarMarcas', {
        "codigoTabelaReferencia": sessionStorage.getItem("actualRefe"),
        "codigoTipoVeiculo": vehicleType
    }, {
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
};

export const fetchModels = async (vehicleType, vehicleBrand) => {
    return await axios.post('https://veiculos.fipe.org.br/api/veiculos/ConsultarModelos', {
        "codigoTabelaReferencia": sessionStorage.getItem("actualRefe"),
        "codigoTipoVeiculo": vehicleType,
        "codigoMarca": vehicleBrand
    }, {
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
};

export const fetchYears = async (vehicleType, vehicleBrand, VehicleModel) => {
    return await axios.post('https://veiculos.fipe.org.br/api/veiculos/ConsultarAnoModelo', {
        "codigoTabelaReferencia": sessionStorage.getItem("actualRefe"),
        "codigoTipoVeiculo": vehicleType,
        "codigoMarca": vehicleBrand,
        "codigoModelo": VehicleModel
    }, {
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
};

export const fetchVehicle = async (type, brand, model, year, refe) => {
    let arYear = year.split("-");
    let attType = [] ;
    attType.push("carro");
    attType.push("moto");
    attType.push("caminhão");
    return await axios.post('https://veiculos.fipe.org.br/api/veiculos/ConsultarValorComTodosParametros', {
        "codigoTabelaReferencia": refe,
        "codigoTipoVeiculo": type,
        "codigoMarca": brand,
        "codigoModelo": model,
        "ano": year,
        "anoModelo": arYear[0],
        "codigoTipoCombustivel": arYear[1],
        "tipoConsulta": "tradicional",
        "tipoVeiculo": attType[(parseInt(type)-1)],
    }, {
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
};