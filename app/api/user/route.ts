import { 
    createUser 
} from "@/app/libs/prisma/user/functions";
import { cookies } from "next/headers";

import { 
    NextRequest, 
    NextResponse 
} from "next/server";

export async function POST (req: NextRequest) {
    const data = await req.json();
    const user = await createUser(data.id, data.username);
    
    if(user) {
        cookies().set('name', user.name);
        return NextResponse.json({message: "user registered", status: 200});
    }
    return NextResponse.json({message: "nothing happened", status: 200});
}

// export async function GET (req: NextRequest) {
//     // const data = await req.json();
//     console.log("FETCHING")
//     const { searchParams } = new URL(req.url);
//     const id = searchParams.get("id");
//     const user = await checkUser(id);

//     if(user) {
//         cookies().set('name', user.name);
//         return NextResponse.json({message: "user registered", status: 200});
//     }

//     if(user == null) {
        
//         return NextResponse.json({message: "user not registered", status: 404});
//     }
//     return NextResponse.json({message: "nothing happened", status: 200});
// }