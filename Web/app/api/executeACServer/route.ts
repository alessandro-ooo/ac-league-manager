import { createINI } from "@/app/libs/file/functions";
import { exec } from "child_process";
import { NextRequest, NextResponse } from "next/server";

export async function POST (request: NextRequest) {
    const id = await request.json();
    await createINI(Number(id));
    exec('start /d "../Assetto Corsa Server/" acServer.exe')
    return NextResponse.json({message: "ok", status: 200});
}
