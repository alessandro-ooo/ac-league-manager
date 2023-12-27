
import { TRaceProps } from "@/app/components/types";
import { exec } from "child_process";
import { NextRequest, NextResponse } from "next/server";

export async function POST (request: NextRequest) {
    console.log( "route")
    exec('start /d "../Assetto Corsa Server/" acServer.exe')
    return NextResponse.json({message: "ok", status: 200});
}
