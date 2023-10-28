import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

type LoaderProps = {
    isLoading: boolean
}
function Loader({isLoading}: LoaderProps) {
    return (
        <div className=' w-full h-[100%] flex items-center justify-center bg-[rgba(0,0,0,.5)] z-50 top-0 bottom-0 fixed'>
            <ClimbingBoxLoader
                color={'#00A7AC'}
                loading={isLoading}
                size={15}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
}

export default Loader;