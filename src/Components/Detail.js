import { useLocation } from "react-router-dom";

export function Detail(){
    const location = useLocation();
    const data = location.state?.data;
    return (
        <div className="details d-flex">
            <div>
            <img src= {data.url} alt={data.name} />
            </div>
            <div>
            <h1> {data.name}</h1>
            <p>{data.description}</p>
            </div>
        </div>
    )
}