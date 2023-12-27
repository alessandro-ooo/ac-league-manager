"use client"
import { getAdminCookie } from "@/app/libs/cookies/functions";
import { TRaceProps } from "../types"

const clickButton = async (id: number) => {
    console.log("click btn")
    const res = await fetch('/api/executeACServer', {
        method: 'POST',
    });
    return;
} 

const Race = (props: TRaceProps) => {

    const {data} = props;
    // const isAdmin = getAdminCookie();
    const isAdmin = 2;

    return (
        <div>
            {data.map((item, i) => {
                return (
                    <div key={item.id}>
                        <p>{item.race}</p>
                        {Number(isAdmin) > 0 &&
                            <button onClick={() => clickButton(item.id)}>Start server</button>
                        }
                    </div>
                )
            })}
        </div>
    )
}

export default Race