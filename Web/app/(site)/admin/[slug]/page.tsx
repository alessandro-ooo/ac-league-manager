
const Admin = ({ params }: { params: { slug: string } }) => {
    
    return (
        <div>
            {params.slug == "server" && 
                <ServerSettingsForm />
            }
        </div>
    )
} 

export default Admin