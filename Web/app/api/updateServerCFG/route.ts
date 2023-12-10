import { updateCFG } from "@/app/libs/prisma/cfg/functions";
import { NextRequest, NextResponse } from "next/server";

export async function POST (request: NextRequest) {
    const data = await request.json();
    const upd = await updateCFG(data);
    return NextResponse.json({message: "update done", status: 200});
}