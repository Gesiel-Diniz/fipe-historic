import styles from './ActualFipe.module.scss';
import { useEffect, useState } from 'react';
import comb from "./images/comb.svg";

function ActualFipe({actual}) {

	const temp = {
		AnoModelo: 1998,
		CodigoFipe: "",
		Combustivel: "",
		DataConsulta: "",
		Marca: "",
		MesReferencia: "",
		Modelo: "",
		Valor: ""
	}

	const [data, setData] = useState(temp)

	useEffect(() => {
		if(actual != null){
			setData(actual)
		}
	}, [actual])

    return (
        <div className="col-lg-12 col-md-12">
            <div className="alert alert-light">
            	<div className={["row", styles.rows].join(" ")}>
            		<div>
	               		<span> MARCA: <strong>{data.Marca}</strong></span>
            		</div>
	               	<div>
	                	<span> MODELO: <strong>{data.Modelo}</strong></span>
            		</div>
	                <div>
	                	<span> COMBUSTÍVEL: <strong>{data.Combustivel}</strong></span>
            		</div>
	                <div>
	                	<span> VALOR: <strong>{data.Valor}</strong></span>
            		</div>
	                <div>
	                	<span> ANO: <strong>{data.AnoModelo}</strong></span>
            		</div>
	                <div>
	                	<span> CODIGO FIPE: <strong>{data.CodigoFipe}</strong></span>
            		</div>
	                <div>
	                	<span> MÊS: <strong>{data.MesReferencia}</strong></span>
            		</div>
            	</div>
            </div>
        </div> 
    )
}

export default ActualFipe