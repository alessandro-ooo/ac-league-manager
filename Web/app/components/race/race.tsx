"use client"
import { getAdminCookie } from "@/app/libs/cookies/functions";
import { TRaceProps } from "../types"
import { createINI } from "@/app/libs/file/functions";
import { useRouter } from 'next/navigation'

const startServer = async (id: number) => {
    const res = await fetch('/api/executeACServer', {
        method: 'POST',
        body: JSON.stringify(id)
    });
    return;
} 

const deleteServer = async (id: number) => {
    const res = await fetch('/api/deleteRace', {
        method: 'POST',
        body: JSON.stringify(id)
    });
    return;
} 

const Race = (props: TRaceProps) => {

    const {data} = props;
    // const isAdmin = getAdminCookie();
    const isAdmin = 2;
    const router = useRouter();

    return (
        <div>
            {data.map((item, i) => {
                return (
                    <div key={item.id}>
                        <p>{item.race}</p>
                        <div>
                            <button onClick={() => startServer(item.id)}>Sign in</button>
                        {Number(isAdmin) > 0 &&
                            <div>
                                <button onClick={() => startServer(item.id)}>Start server</button>
                                <button onClick={() => router.push('/admin/editrace/' + item.id)}>Edit server</button>
                                <button onClick={() => deleteServer(item.id)}>Delete server</button>
                            </div>
                        }
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Race