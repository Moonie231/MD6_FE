import {useState} from "react";
import {storage} from "../../service/firebase";
import {ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import {useEffect} from "react";
import {editFood, findByIdFood} from "../../service/foodsService";
import swal from "sweetalert";
import {getCategories} from "../../service/categoryService";


export default function EditFood() {
    const {idFood} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(findByIdFood(idFood)).then((value) => {
            setUrls(value.payload.img);
        });
    }, []);

    const foods = useSelector(state => {
        return state.foods.food
    })
    const categories = useSelector((state) => {
        return state.categories.categories;
    });

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
            images.map((img) => {
                const storageRef = ref(storage, `images/${img.name}`);
                const uploadTask = uploadBytesResumable(storageRef, img);
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
                        await getDownloadURL(uploadTask.snapshot.ref).then(
                            (downloadURLs) => {
                                setUrls("");
                                setUrls(downloadURLs);
                            }
                        );
                    }
                );
            });
        }
        Promise.all(promises)
            .then(() => swal("All images uploaded"))
            .catch((err) => console.log(err));
    };
    const handleEdit = (values) => {
        let data = [{ ...values,img: urls},idFood];
        dispatch(editFood(data)).then((value) => {
            swal("Edit Success !!!");
            navigate('/merchants/my-shop/'+localStorage.getItem('idMerchant'))
        });
    };
    useEffect(() => {
        dispatch(getCategories());
    }, []);

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
                            id_Category: foods.id_Category,
                        }}
                        onSubmit={(values) => {
                            values.img = urls[0]
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
                                <Field type="text" className="form-control" id="exampleInput" name={'description'}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInput" className="form-label">Price</label>
                                <Field type="text" className="form-control" id="exampleInput" name={'price'}/>
                            </div>
                            <div className="ml-3 form-group">
                                <label htmlFor="exampleInputPassword">Image</label>
                                <br/>
                                        <img src={urls} alt={urls} style={{width:400, height: 400}}/>

                                <br/>
                                <input type='file' onChange={handleChange}>
                                </input>
                                <button className="btn btn-info" style={{marginLeft: 10}} type='button'
                                        onClick={handleUpload}>Up
                                </button>
                            </div>
                            <div className="col-12">
                                <Field
                                    as="select"
                                    name={"id_Category"}
                                    className="form-control"
                                    id="id_Category"
                                >
                                    <option selected>Category</option>
                                    {categories !== undefined &&
                                        categories.map((item, index) => (
                                            <option value={item.idCategory}>
                                                {item.nameCategory}
                                            </option>
                                        ))}
                                </Field>
                            </div>
                            <button type="submit" className="btn btn-info" style={{marginLeft: "40%"}}>Save</button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </>
    )
}