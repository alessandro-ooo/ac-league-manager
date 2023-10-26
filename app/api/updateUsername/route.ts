import { updateUserName } from "@/app/libs/prisma/user/functions";
import { NextRequest, NextResponse } from "next/server";

export async function POST (request: NextRequest) {
    const data = await request.json();
    try {
        updateUserName(data.name, data.currentName);
        return NextResponse.json({message: "update done", status: 200});
    }
    catch (err) {
        if(err) {
            return NextResponse.json({message: err, status: 400});
        }
    }
}