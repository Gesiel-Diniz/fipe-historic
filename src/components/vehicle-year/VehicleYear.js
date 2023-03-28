import { useEffect, useState } from "react";
import { fetchYears } from "../../hooks/api";
import SearchSelect from '../custom-search-select/SearchSelect';

function VehicleYear({type, brand, model, yearFn}) {
 
    let[arrYears, setArrYears] = useState(null)
    let dataOption = [{value: null, label: "Selecione"}]

    useEffect(() => {
        async function fetchData() {
            setArrYears(await fetchYears(type, brand, model));
        }
        if(type != null && brand != null && model != null){
            fetchData();
        }
    },[type, brand, model])

    if(type != null && brand != null && model != null && arrYears != null && arrYears.data.codigo == null){

        arrYears.data.map((year) => {
            if(year.Label === 32000){
                year.Label = "Zero Km"
            }
            dataOption = [...dataOption, {value: year.Value, label: year.Label}];
            return year;
        });
    }


    return (
        <div className="col-lg-3 col-md-12">
            <SearchSelect classes={"form-select form-select-lg mb-3"} datas={dataOption} fun={yearFn}/>
        </div>
    )
}

export default VehicleYear