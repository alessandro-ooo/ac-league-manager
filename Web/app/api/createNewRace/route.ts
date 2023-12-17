import { createRace } from "@/app/libs/prisma/cfg/functions";
import { NextRequest, NextResponse } from "next/server";

export async function POST (request: NextRequest) {
    const data = await request.json();
    await createRace(data.race, data.datetime);
    return NextResponse.json({message: "race created", status: 200});
}