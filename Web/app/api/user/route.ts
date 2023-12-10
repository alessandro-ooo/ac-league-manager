import { checkCFG, inject } from "@/app/libs/prisma/cfg/functions";
import { 
    createUser, userCount 
} from "@/app/libs/prisma/user/functions";
import { cookies } from "next/headers";

import { 
    NextRequest, 
    NextResponse 
} from "next/server";

export async function POST (request: NextRequest) {
    const data = await request.json();
    const count: number = await userCount();
    const user = await createUser(data.id, data.username, (count == 0 ? 2 : 0));
    cookies().set('admin', (count == 0 ? "2" : "0"));

    if(count == 0) {
        const exists: number = await checkCFG();
        if(exists == 0) {
            console.log(" - warn - no server settings found.");
            inject();
        }
    }

    if(user) {
        cookies().set('username', user.name);
        return NextResponse.json({message: "OK", status: 200});
    }
    return NextResponse.json({message: "nothing happened", status: 204});
}