import {useState} from "react";
import {storage} from "../../service/firebase";
import {ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import {useEffect} from "react";
import {editFood, findByIdFood} from "../../service/foodsService";


export default function EditFood() {
    const {idFood} = useParams();
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const user = useSelector(state => {
        return state.users.currentUser
    })

    useEffect(() => {
        dispatch(findByIdFood(idFood)).then((value) => {
            setUrls([value.payload.img]);
        });
    }, [])

    const foods = useSelector(state => {
        return state.foods.food
    })


    const handleEdit = async (values) => {
        let newFood = {...values};
        await dispatch(editFood(newFood));
        await navigate('/')
    }
    const [images, setImages] = useState([]);
    const [urls, setUrls] = useState([]);
    const [progress, setProgress] = useState(0);
    const handleChange = (e) => {
        for (let i = 0; i < e.target.files.length; i++) {
            const newImage = e.target.files[i];
            newImage["id"] = Math.random();
            setImages((prevState) => [...prevState, newImage]);
        }
    };
    const handleUpload = () => {
        const promises = [];
        if (images.length > 0) {
            images.map((image) => {
                const storageRef = ref(storage, `images/${image.name}`);
                const uploadTask = uploadBytesResumable(storageRef, image);
                promises.push(uploadTask);
                uploadTask.on(
                    "state_changed",
                    (snapshot) => {
                        const progress = Math.round(
                            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                        );
                        setProgress(progress);
                    },
                    (error) => {
                        console.log(error);
                    },
                    async () => {
                        await getDownloadURL(uploadTask.snapshot.ref).then((downloadURLs) => {
                            setUrls([])
                            setUrls(prevState => [...prevState, downloadURLs])
                            console.log("File available at", downloadURLs);
                        });
                    }
                );
            });
        }
        Promise.all(promises)
            .then(() => alert("All images uploaded"))
            .catch((err) => console.log(err));
    }

    return (
        <>
            <div className="row">
                <div className="offset-3 col-6 mt-5">
                    <h1 style={{textAlign: 'center'}}>Edit Food</h1>
                    <Formik
                        initialValues={{
                            idFood: idFood,
                            nameFood: foods.nameFood,
                            description: foods.description,
                            price: foods.price,

                        }}
                        onSubmit={(values) => {
                            values.image = urls[0]
                            handleEdit(values)
                        }}
                        enableReinitialize={true}
                    >
                        <Form>
                            <div className="mb-3">
                                <label htmlFor="exampleInput" className="form-label">NameFood</label>
                                <Field type="text" className="form-control" id="exampleInput" name={'nameFood'}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInput" className="form-label">Description</label>
                                <Field type="text" className="form-control" id="exampleInput" name={'role'}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInput" className="form-label">Price</label>
                                <Field type="text" className="form-control" id="exampleInput" name={'time'}/>
                            </div>
                            <div className="ml-3 form-group">
                                <label htmlFor="exampleInputPassword">Img</label>
                                <br/>
                                {urls.map(item => (
                                    <>
                                        <img src={item} alt="" style={{width: 50}}/>
                                    </>
                                ))}

                                <br/>
                                <input type='file' onChange={handleChange}>
                                </input>
                                <button className="btn btn-outline-success" style={{marginRight: 10}} type='button'
                                        onClick={handleUpload}>Up
                                </button>

                            </div>
                            <button type="submit" className="btn btn-primary">Save</button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </>
    )
}