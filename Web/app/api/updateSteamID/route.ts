import { updateUserSteamID } from "@/app/libs/prisma/user/functions";
import { NextRequest, NextResponse } from "next/server";

export async function POST (request: NextRequest) {
    const data = await request.json();
    try {
        updateUserSteamID(data.id.toString(), parseInt(data.steamid));
        return NextResponse.json({message: "update done", status: 200});
    }
    catch (err) {
        if(err) {
            return NextResponse.json({message: err, status: 400});
        }
    }
}