import { TDialog } from "../types";

const Dialog = (props: TDialog) => {
    const {children} = props;

    return (    
        <div>
            {children}
        </div>
    )
}

export default Dialog;