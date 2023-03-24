import {useEffect, useState} from "react";
import {storage} from "../../service/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik, useFormik} from "formik";
import {addFood} from "../../service/foodsService";
import {getCategories} from "../../service/categoryService";
import swal from "sweetalert";
import * as Yup from "yup";
const validateSchema = Yup.object().shape({
    nameFood: Yup.string()
        .min(2, "Too short!")
        .max(50, "Too long!")
        .required("Required"),
    description: Yup.string()
        .min(2, "Too short!")
        .max(500, "Too long!")
        .required("Required"),
});

export default function AddFood() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAdd = async (values) => {
        let data = {...values};
        dispatch(addFood(data));
        navigate('/merchants/my-shop/'+localStorage.getItem('idMerchant'))
    }
    const categories = useSelector((state) => {
        return state.categories.categories;
    });

    const [images, setImages] = useState([]);
    const [urls, setUrls] = useState([]);
    const [progress, setProgress] = useState(0);
    const handleChange = (e) => {
        for (let i = 0; i < e.target.files.length; i++) {
            const newImage = e.target.files[i];
            if (!newImage) {
                console.log('image is required');
                return false;
            }
            if (!newImage.name.match(/\.(jpg|jpeg|png|gif)$/)) {
                console.log('select valid image.');
                return false;
                newImage["id"] = Math.random();
                setImages((prevState) => [...prevState, newImage]);
            }
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
                        await getDownloadURL(uploadTask.snapshot.ref).then((downloadURLs) => {
                            setUrls(prevState => [...prevState, downloadURLs])
                            console.log("File available at", downloadURLs);
                        });
                    }
                );
            });
        }
        Promise.all(promises)
            .then(() => swal("All images uploaded"))
            .catch((err) => console.log(err));
    }
    useEffect(() => {
        dispatch(getCategories());
    }, []);


    return (
        <>
            <div className="container" style={{backgroundColor: 'lightgray', marginTop: 40}}>
            <div className="row">
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s"
                             style={{maxWidth: "600px"}}>
                            <h2 className="mb-3">Add Food</h2>
                        </div>
                        <div className="row g-4">
                            <div className="col-md-4 wow fadeInUp" data-wow-delay="0.1s" style={{height:360,marginTop:30}}>
                                <img className="position-relative rounded w-100 h-100" src={urls[0]} alt={urls[0]}/>
                            </div>
                            <div className="col-md-8">
                                <div className="wow fadeInUp" data-wow-delay="0.5s">
                                    <Formik
                                        initialValues={{
                                            nameFood: "",
                                            description: "",
                                            price: "",
                                            quantityFood: "",
                                            id_Category: "",
                                            id_Merchant: localStorage.getItem('idMerchant')
                                        }}
                                         validationSchema={validateSchema}
                                        onSubmit={(values) => {
                                            values.img = urls[0]
                                            handleAdd(values);
                                        }}
                                    >
                                        <Form>
                                            <div className="row g-3">
                                                <div className="col-12">
                                                    <div className="form-floating">
                                                        <label htmlFor="nameFood">NameFood</label>
                                                        <Field type="text" class="form-control" name={'nameFood'}
                                                               id="nameFood" placeholder=""/>
                                                        <alert className="text-danger">
                                                            <ErrorMessage name={"nameFood"}></ErrorMessage>
                                                        </alert>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-floating">
                                                        <label htmlFor="price">Price</label>
                                                        <Field type="number" class="form-control" name={'price'}
                                                               id="price" placeholder=""/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-floating">
                                                        <label htmlFor="description">Description</label>
                                                        <Field as={'textarea'} class="form-control" name={'description'}
                                                               id="description" placeholder=""
                                                               style={{height: '150px'}}/>
                                                        <alert className="text-danger">
                                                            <ErrorMessage name={"description"}></ErrorMessage>
                                                        </alert>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-floating">
                                                        <label htmlFor="quantityFood">Quantity Food</label>
                                                        <Field type="number" class="form-control" name={'quantityFood'}
                                                               id="quantityFood" placeholder=""/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <label htmlFor="category">Category</label>
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
                                                <div className="col-md-6" style={{height:-100}}>
                                                    <label htmlFor="exampleFormControlFile1">
                                                    </label>
                                                    <input
                                                        type="file"
                                                        className="form-control-file"
                                                        id="exampleFormControlFile1"
                                                        multiple
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className="col-md-6" style={{marginTop: 30}}>
                                                    <button
                                                        type="button"
                                                        className="btn btn-info"
                                                        onClick={() => dispatch(handleUpload)}
                                                    >
                                                        Up
                                                    </button>
                                                </div>
                                                <div className="col-12" style={{marginTop: 10}}>
                                                    <button className="btn btn-info" type="submit">Add</button>
                                                </div>
                                            </div>
                                        </Form>
                                    </Formik>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}