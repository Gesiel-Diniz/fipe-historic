import 'react-select-search/style.css'
import SearchSelect from '../custom-search-select/SearchSelect';
import { useEffect, useState } from 'react';
import { fetchBrands } from '../../hooks/api';

function VehicleBrands({type, brandFn}) {

    let [arrBrands, setArrBrands] = useState(null)
    let dataOption = [{value: 0, label: "Selecione"}]
    useEffect(() => {
        async function fetchData() {
            setArrBrands(await fetchBrands(type));
        }
        if(type != null){
            fetchData();    
        }
    },[type])

    if(arrBrands != null){
        arrBrands.data.map((brand) => {
            dataOption = [...dataOption, {value: brand.Value, label: brand.Label}];
            return brand;
        });
    }

    return (
        <div className="col-lg-3 col-md-12">
            <SearchSelect classes={"form-select form-select-lg mb-3"} datas={dataOption} fun={brandFn}/>
        </div>  
    )
}

export default VehicleBrands