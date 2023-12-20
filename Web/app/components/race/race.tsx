import { getAdminCookie } from "@/app/libs/cookies/functions";
import { TRaceProps } from "../types"

const Race = (props: TRaceProps) => {

    const {data} = props;
    const isAdmin = getAdminCookie();

    return (
        <div>
            {data.map((item, i) => {
                return (
                    <div key={item.id}>
                        <p>{item.race}</p>
                        {Number(isAdmin) > 0 &&
                            <button >Start server</button>
                        }
                    </div>
                )
            })}
        </div>
    )
}

export default Race