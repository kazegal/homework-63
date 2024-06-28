import {useEffect, useState} from 'react';
import axiosApi from "../../axios";
import Spinner from "../../components/Spinner/Spinner";

interface Props {
    id: string;
    title: string;
    subtitle: string;
    title2: string;
    text: string;
}

const About = () => {
    const [about, setAbout] = useState<Props[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        void fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await axiosApi.get('/about.json');
            if (response.data) {
                const about: Props[] = Object.keys(response.data).map((key) => (
                    {
                        id: key,
                        title: response.data[key].title,
                        subtitle: response.data[key].subtitle,
                        title2: response.data[key].title2,
                        text: response.data[key].text,
                    }
                ));
                setAbout(about);
            }
        } finally {
            setLoading(false);
            console.log('Success!');
        }
    };
    return (
        <>
            {
                loading ? (<Spinner/>) : about.map((info) => (
                    <div key={info.id}>
                        <h2 className="text-center mt-5 mb-4">About</h2>
                        <div className="row d-flex justify-content-around m-5">
                            <div className="card col-5 p-2">
                                <h5>{info.title}</h5>
                                <p>{info.subtitle}</p>
                            </div>
                            <div className="card col-5 p-2">
                                <h5>{info.title2}</h5>
                                <p>{info.text}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>

    );
};

export default About;