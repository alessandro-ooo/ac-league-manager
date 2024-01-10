
import { TRaceSettings } from "@/app/components/types";
import { deleteRace } from "@/app/libs/prisma/cfg/functions";
import { NextRequest, NextResponse } from "next/server";

export async function POST (request: NextRequest) {
    const data: TRaceSettings = await request.json();
    const response = await deleteRace(data.id);
    return NextResponse.json({message: response});
}