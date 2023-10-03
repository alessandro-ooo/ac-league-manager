import { TVehiclesProps } from "../types";

const Vehicles = (props: TVehiclesProps) => {
    const { data } = props;

    return (
        <div>
            {data.map((item, i) => {
                return <a id={i.toString()}>{item.name}</a>
            })}
        </div>
    )
}

export default Vehicles;