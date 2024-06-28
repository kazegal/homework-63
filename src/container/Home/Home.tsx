import {useEffect, useState} from 'react';
import axiosApi from "../../axios";
import {Link} from "react-router-dom";
import {IPost} from "../../types";
import Spinner from "../../components/Spinner/Spinner";


const Home = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        void fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await axiosApi.get('/posts.json');
            if (response.data) {
                const posts: IPost[] = Object.keys(response.data).map((key) => (
                    {
                        id: key,
                        date: response.data[key].date,
                        title: response.data[key].title,
                    }
                ));
                setPosts(posts);
            }
        } finally {
            setLoading(false);
            console.log('Success!');
        }
    };

    const postCount = () => {
        if (posts.length === 0) {
            return (
                <>
                    <h2 className="text-center mt-5">No Posts yet...</h2>
                    <h3 className="text-center mt-3">Please Add Post!</h3>
                </>
            );
        }
    };

    return (
        <>
            {postCount()}
            {
                loading ? (<Spinner/>) : posts.map((post) => (
                    <div className="card mt-4 mb-4 p-3 w-75 m-auto" key={post.id}>
                        <div className="d-flex justify-content-between">
                            <h5 className="fw-bold text-capitalize">{post.title}</h5>
                            <span
                                className='ms-auto text-success'>{post.date}</span>
                        </div>
                        <div className="ms-auto">
                            <Link className="btn btn-warning mt-5 me-2" to={`/posts/${post.id}/`}>Read more... </Link>
                        </div>
                    </div>
                ))
            }
        </>
    );
};

export default Home;