
import { TRaceSettings } from "@/app/components/types";
import { updateRace } from "@/app/libs/prisma/cfg/functions";
import { NextRequest, NextResponse } from "next/server";

export async function POST (request: NextRequest) {
    const data: TRaceSettings = await request.json();
    await updateRace(data.id, data.race, data.datetime);
    return NextResponse.json({message: "update done", status: 200});
}