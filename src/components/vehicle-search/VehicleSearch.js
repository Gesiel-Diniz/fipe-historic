

function VehicleSearch({searchFn }) {

    return (
        <div className="col-lg-1 col-md-12">
            <div className="d-grid gap-2">
                <button type="button" className="btn btn-light btn-lg" onClick={searchFn} >Buscar</button>
            </div>
        </div>
    )
}

export default VehicleSearch