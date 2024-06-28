import React, {useState} from 'react';
import {IPostMutation, TApiPost} from "../../types";

interface Props {
    onSubmit: (newDish: TApiPost) => void;
    post?: TApiPost;
}

const PostForm: React.FC<Props> = ({onSubmit, post}) => {
    const initialState = post ? {
        ...post,
    } : {
        date: '',
        title: '',
        body: '',
    };

    const [newPost, setNewPost] = useState<IPostMutation>(initialState);

    const postChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;

        setNewPost(prevState => ({
            ...prevState,
            [name]: value,
            date: new Date().toString(),
        }));
    };

    const onFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        onSubmit({
            ...newPost,
        });
    };

    return (
        <form className="card p-3" onSubmit={onFormSubmit}>
            <div className="form-group">
                <label className="text-danger" htmlFor="title">Title</label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    className="form-control m-2"
                    value={newPost.title}
                    onChange={postChange}
                    required
                />
            </div>

            <div className="form-group">
                <label className="text-primary" htmlFor="body">More Info:</label>
                <textarea
                    name="body"
                    id="body"
                    className="form-control m-2"
                    value={newPost.body}
                    onChange={postChange}
                    required
                />
            </div>
            <div className="d-flex">
                <button className="btn btn-success mt-4 ms-auto" type="submit">
                    {post ? 'Save' : 'Create'}
                </button>
            </div>
        </form>
    );
};
export default PostForm;