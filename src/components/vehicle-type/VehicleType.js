import { useState } from 'react';
import './VehicleType.scss'

function VehicleType({typeFn}) {

    let [active, setActive] = useState(1)

    const handleType = (type) => {
        typeFn(type);
        setActive(type);
    }

    return (
        
        <div className="row justify-content-md-center">
            <div className="col-lg-7 col-md-12">
                <div className="d-grid gap-2">
                    <div className="btn-group btn-group-lg" role="group" aria-label="Large button group">
                        <button type="button" className={["btn", "btn-outline-light", (active === 1 ? "active" : "" )].join(" ")} onClick={() => handleType(1)}>Carro</button>
                        <button type="button" className={["btn", "btn-outline-light", (active === 2 ? "active" : "" )].join(" ")} onClick={() => handleType(2)}>Moto</button>
                        <button type="button" className={["btn", "btn-outline-light", (active === 3 ? "active" : "" )].join(" ")} onClick={() => handleType(3)}>Caminhão</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VehicleType