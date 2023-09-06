import { createUser } from "@/app/libs/prisma/user/functions";
import { 
    NextRequest, 
    NextResponse 
} from "next/server";

export async function POST (req: NextRequest) {
    const data = await req.json();
    const user = await createUser(data.id, data.username);
    
    if(user) {
        return NextResponse.json({message: "user registered", status: 200});
    }
    return NextResponse.json({message: "nothing happened", status: 200});
}