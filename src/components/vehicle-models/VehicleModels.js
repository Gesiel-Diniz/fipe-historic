import { useEffect, useState } from "react";
import { fetchModels } from "../../hooks/api";
import SearchSelect from '../custom-search-select/SearchSelect';

function VehicleModels({type, brand, modelFn}) {

    let[arrModels, setArrModels] = useState(null)
    let dataOption = [{value: 0, label: "Selecione"}]
    
    useEffect(() => {
        async function fetchData() {
            setArrModels(await fetchModels(type, brand));
        }
        if(brand != null){
            fetchData();
        }
    },[type, brand])

    if(arrModels != null){
        
        arrModels.data.Modelos.map((model) => {
            dataOption = [...dataOption, {value: model.Value, label: model.Label}];
            return model;
        });
    }

    return (
        <div className="col-lg-5 col-md-12">
            <SearchSelect classes={"form-select form-select-lg mb-3"} datas={dataOption} fun={modelFn}/>
        </div> 
    )
}

export default VehicleModels