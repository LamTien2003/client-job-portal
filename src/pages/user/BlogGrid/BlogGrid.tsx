import { useEffect } from 'react';
import { toast } from 'react-toastify';

const BlogGrid = () => {

    useEffect(() => {
        toast.success('Test thông bao');
    }, []);
    return (
        <div>
            <h1>
                Trang Blog Grid
            </h1>
        </div>
    )
}

export default BlogGrid
