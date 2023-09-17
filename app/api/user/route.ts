import { 
    createUser 
} from "@/app/libs/prisma/user/functions";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { 
    NextRequest, 
    NextResponse 
} from "next/server";

export async function POST (request: NextRequest) {
    const data = await request.json();
    const user = await createUser(data.id, data.username);
    
    if(user) {
        cookies().set('username', user.name);
        redirect('/dashboard');
        // return NextResponse.json({message: "all good", status: 200});

    }
    return NextResponse.json({message: "nothing happened", status: 204});
}