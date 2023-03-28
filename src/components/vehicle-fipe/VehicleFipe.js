import './VehicleFipe.scss'

import { useEffect, useState } from 'react';
import VehicleBrands from '../vehicle-brands/VehicleBrands';
import VehicleModels from '../vehicle-models/VehicleModels';
import VehicleType from '../vehicle-type/VehicleType'
import VehicleYear from '../vehicle-year/VehicleYear';
import VehicleSearch from '../vehicle-search/VehicleSearch';
import { fetchReference } from '../../hooks/api';
import { fetchVehicle } from "../../hooks/api";
import HistoricChart from '../historic-chart/HistoricChart';
import ActualFipe from '../actual-fipe/ActualFipe';
import Loading from '../loading/Loading';


var getNumMonth = (strMonth) => {
    switch (strMonth) {
        case 'janeiro':
            return 1
        case 'fevereiro':
            return 2
        case 'março':
            return 3
        case 'abril':
            return 4
        case 'maio':
            return 5
        case 'junho':
            return 6
        case 'julho':
            return 7
        case 'agosto':
            return 8
        case 'setembro':
            return 9
        case 'outubro':
            return 10
        case 'novembro':
            return 11
        case 'dezembro':
            return 12
        default:
            console.log("Error in getNumMonth");
    }
}

function VehicleFipe() {

    const [type, setType] = useState(null);
    const [brand, setBrand] = useState(null);
    const [model, setModel] = useState(null);
    const [year, setYear] = useState(null);
    const [result, setResult] = useState(null);
    const [actual, setActual] = useState(null);
    

    useEffect(() => {
        async function fetchData() {
            const refe = await fetchReference();
            sessionStorage.setItem("actualRefe", refe.data[0].Codigo);
            setType(1);
        }
        fetchData();
    }, []);

    const handleType = (typeSelection) => {
        setType(typeSelection);
        setBrand(null);
        setModel(null);
        setYear(null);
    }
    const handleBrand = (brands) => {
        //console.log(e.target.value);
        setBrand(brands);
        setModel(null);
        setYear(null);
    }
    const handleModel = (models) => {
        setModel(models);
        setYear(null);
    }
    const handleYear = (years) => {
        setYear(years);
    }
    const handleSearch = async () => {

        if(brand != null && model != null && year != null){
            
            setResult(false);

            let arr = [];
            let numInit = sessionStorage.getItem("actualRefe");
            for (let ref = (numInit - 11); ref <= numInit; ref++) {
                
                let fipe = await fetchVehicle(type, brand, model, year, ref);


                if (fipe !== null && fipe.data.codigo == null) {

                    if(parseInt(numInit) === ref) {
                        setActual(fipe.data)
                    }

                    let month = fipe.data.MesReferencia.split(" ")[0];
                    let year = fipe.data.MesReferencia.split(" ")[2];
                    let data = new Date(year + "-" + getNumMonth(month) + "-15")
                    let price = parseFloat(fipe.data.Valor.split(",")[0].split(" ")[1]);
                    arr.push({ x: data, y: price });
                }
            }

          setResult(arr);

        }

    }

    return (
        <div className="vehicle-search">
            <div className="container text-center">
                <div className="row justify-content-md-center">
                    <div className="col-md-auto title">
                        <h1>Busque o valor do veículo aqui</h1>
                    </div>
                </div>
                <VehicleType typeFn={handleType} />
                <div className="row">
                    <VehicleBrands type={type} brandFn={handleBrand} />
                    <VehicleModels type={type} brand={brand} modelFn={handleModel} />
                    <VehicleYear type={type} brand={brand} model={model} yearFn={handleYear} />
                    <VehicleSearch searchFn={handleSearch} />
                </div>
                <div className="row" style={{display: result === false ? 'block' : 'none' }}>
                    <Loading  />
                </div>
                <div className="row" style={{display: result != null && result ? 'block' : 'none' }}>
                    <ActualFipe actual={actual} />
                    <HistoricChart result={result} />
                </div>
            </div>
        </div>
    )
}

export default VehicleFipe