import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Notification = () => {

    return(
        <div className=''>
            <ToastContainer 
                position="bottom-right"
                limit={3}
                toastClassName="!w-[300px] !max-w-full !overflow-hidden"
                />
        </div>
    )
}

export default Notification