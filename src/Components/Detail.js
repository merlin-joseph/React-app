import { useLocation } from "react-router-dom";

export function Detail(){
    const location = useLocation();
    const data = location.state?.data;
    return (
        <div className="details">
            <img src= {data.url} alt={data.title} />
            <h1> {data.name}</h1>
            <p>selected:{data.quantity}</p>
        </div>
    )
}