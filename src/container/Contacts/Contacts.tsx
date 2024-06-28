import {useEffect, useState} from 'react';
import axiosApi from "../../axios";
import Spinner from "../../components/Spinner/Spinner";

interface Props {
    id: string;
    email: string;
    phone: string;
}

const Contacts = () => {
    const [contacts, setContacts] = useState<Props[]>([]);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        void fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await axiosApi.get('/contacts.json');
            if (response.data) {
                const contacts: Props[] = Object.keys(response.data).map((key) => (
                    {
                        id: key,
                        email: response.data[key].email,
                        phone: response.data[key].phone,
                    }
                ));
                setContacts(contacts);
            }
        } finally {
            setLoading(false);
            console.log('Success!');
        }
    };
    return (
        <>
            {
                loading ? (<Spinner/>) : contacts.map((info) => (
                    <>
                        <h2 className="text-center mt-5 mb-4">Contacts</h2>
                        <div className="row d-flex justify-content-around m-5" key={info.id}>
                            <div className="card col-5 p-2 text-center">
                                <span>Our email:<span className="fw-bold">{info.email}</span></span>
                                <p>Our phone: {info.phone}</p>
                            </div>
                        </div>
                    </>
                ))
            }
        </>
    );
};

export default Contacts;