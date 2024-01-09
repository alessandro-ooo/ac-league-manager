"use client"
import { getAdminCookie } from "@/app/libs/cookies/functions";
import { TRaceProps } from "../types"
import { createINI } from "@/app/libs/file/functions";

const clickButton = async (id: number) => {
    const res = await fetch('/api/executeACServer', {
        method: 'POST',
        body: JSON.stringify(id)
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
                            <div>
                                <button onClick={() => clickButton(item.id)}>Start server</button>
                                <button onClick={() => clickButton(item.id)}>Edit server</button>
                            </div>
                        }
                    </div>
                )
            })}
        </div>
    )
}

export default Race