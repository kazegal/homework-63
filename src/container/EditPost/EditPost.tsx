import {useCallback, useEffect, useState} from 'react';
import axiosApi from "../../axios";
import {useNavigate, useParams} from "react-router-dom";
import {IPost, TApiPost} from "../../types";
import PostForm from "../PostForm/PostForm";
import Spinner from "../../components/Spinner/Spinner";

const EditPost = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState<IPost | null>(null);

    const fetchData = useCallback(async (id: string) => {
        try {
            const postResponse = await axiosApi.get<IPost>(`/posts/${id}.json`);
            setPost(postResponse.data);
        } finally {
        }
    }, []);

    useEffect(() => {
        if (id) {
            void fetchData(id);
        }
    }, [fetchData, id]);

    const updateDish = async (data: TApiPost) => {
        try {
            await axiosApi.put(`/posts/${id}.json`, data);
            navigate('/');
        } finally {
            console.log('Saved!');
        }
    };

    return (
        <div>
            <h4 className="text-center mt-5 mb-5">Edit Post</h4>
            {post ?
                <PostForm onSubmit={updateDish} post={post}/> :
                <Spinner/>
            }
        </div>
    );
};

export default EditPost;