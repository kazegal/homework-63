import {useCallback, useEffect, useState} from 'react';
import {Link, Outlet, useNavigate, useParams} from "react-router-dom";
import axiosApi from "../../axios";
import {IPost} from "../../types";

const ReadMore = () => {
    const {id} = useParams();
    const [readMore, setReadMore] = useState<IPost | null>(null);
    const navigate = useNavigate();

    const fetchData = useCallback(async (id: string) => {
        try {
            const postResponse = await axiosApi.get<IPost>(`/posts/${id}.json`);
            setReadMore(postResponse.data);
        } finally {
        }
    }, []);

    useEffect(() => {
        if (id) {
            void fetchData(id);
        }
    }, [fetchData, id]);

    const deletePost = useCallback(async () => {
        try {
            await axiosApi.delete(`/posts/${id}.json`)
        } finally {
            console.log('Deleted!');
            navigate('/');
        }
    }, [id, navigate]);

    return readMore && (
        <>
            <div className="card m-auto mt-5">
                <div className="card-header d-flex">
                    <span className="ms-auto">{readMore.date}</span>
                </div>
                <p className="card-title text-center fw-bold text-capitalize mt-4">{readMore.title}</p>
                <p className="card-body">{readMore.body}</p>
                <div className="card-footer d-flex">
                    <div className="ms-auto">
                        <Link className="btn btn-primary mt-5 me-2" to="/">Back</Link>
                        <Link className="btn btn-success mt-5 me-2" to={`/posts/${id}/edit-post/`}>Edit</Link>
                        <button className="btn btn-danger mt-5" onClick={deletePost}>Delete</button>
                    </div>
                </div>
            </div>
            <Outlet/>
        </>

    );
};

export default ReadMore;