import VehicleData from "@/app/components/dashboard/VehicleData";
import FiltersForm from "@/app/components/forms/FiltersForm";

import { filter } from "@/app/libs/prisma/car/cars"

const Explore = async ({ params }: { params: { slug: string } }) => {
    const livery = await filter(params.slug[0], params.slug[1]);
    return (
        <div>
            <FiltersForm />

            {livery.map((item, i) => {

                return (
                    <div>
                        <VehicleData lid={item.lid} name={item.name} />                        
                   </div>
                )
            })}
        </div>
    )
}


export default Explore
