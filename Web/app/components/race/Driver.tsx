import { TDriverProps } from "../types"

const Driver = (props: TDriverProps) => {
    const {name, car} = props;
    return (
        <div>
            <p>{name} - {car}</p>
        </div>
    )
}

export default Driver;