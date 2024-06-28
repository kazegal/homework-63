import {useState} from 'react';
import axiosApi from "../../axios";
import {TApiPost} from "../../types";
import PostForm from "../PostForm/PostForm";
import {useNavigate} from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";

const NewPost = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const onCreate = async (data: TApiPost) => {
        setLoading(true);
        try {
            await axiosApi.post('/posts.json', data);
            navigate('/');
        } finally {
            setLoading(false);
            navigate('/');
        }
    };

    let form = (
        <div className="mt-5">
            <h4 className="text-center mt-5 mb-5">Add New Post</h4>
            <PostForm onSubmit={onCreate}/>
        </div>
    );

    if (loading) {
        form = <Spinner/>
    }

    return (
        <>
            {form}
        </>
    );
};

export default NewPost;