import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {editProfile, getProfile} from "../../service/merchantService";
import swal from "sweetalert";
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useEffect, useState} from "react";
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import {storage} from "../../service/firebase";

const validateSchema = Yup.object().shape({
    nameMerchant: Yup.string()
        .min(2, "Too short!")
        .max(50, "Too long!")
        .required("Required"),
    address: Yup.string()
        .min(2, "Too short!")
        .max(50, "Too long!")
        .required("Required"),
    phone: Yup.string()
        .min(2, "Too short!")
        .max(50, "Too long!")
        .required("Required"),
})
export default function Profile() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    let {idMerchant} = useParams()
    const [urls, setUrls] = useState("");
    useEffect(() => {
        dispatch(getProfile(idMerchant)).then((e) => {
            console.log(e.payload.image)
            setUrls(e.payload.image)
        })
    }, [])

    const merchant = useSelector((state) => {
        return state.merchant.profile
    })

    const [images, setImages] = useState([]);

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
                                console.log(downloadURLs)
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

    const handleEdit = async (values) => {
        let data = [{...values, image: urls}, idMerchant];
        console.log(data)
        await dispatch(editProfile(data)).then((value) => {
            swal("Edit Success !!!");
            navigate("/");
        });
    };

    return (
        <>
            <section className="h-100 gradient-form" style={{backgroundColor: ''}}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-xl-10">
                            <div className="card rounded-3 text-black">
                                <div className="row g-0">

                                    <div className="col-lg-6">
                                        <div className="card-body p-md-5 mx-md-4">
                                            <div className="text-center">
                                                <img src="/img/logo.png" alt=""/>
                                                <h4 className="mt-1 mb-5 pb-1"></h4>
                                            </div>
                                            <Formik
                                                initialValues={{
                                                    nameMerchant: merchant.nameMerchant,
                                                    address: merchant.address,
                                                    phone: merchant.phone,
                                                    image: merchant.image
                                                }}
                                                validationSchema={validateSchema}
                                                onSubmit={(values) => {
                                                    values.image = urls[0]
                                                    handleEdit(values)
                                                }}
                                                enableReinitialize={true}
                                            >
                                                <Form>
                                                    <div className="row g-3">
                                                        <div className="col-12">
                                                            <div className="form-floating">
                                                                <label for="nameMerchant">Name Merchant</label>
                                                                <Field type="text" class="form-control"
                                                                       name={'nameMerchant'} id="nameMerchant"
                                                                       placeholder="Name"/>
                                                                <alert className="text-danger">
                                                                    <ErrorMessage name={"nameMerchant"}></ErrorMessage>
                                                                </alert>
                                                            </div>
                                                            <div className="form-floating">
                                                                <label htmlFor="address">Address</label>
                                                                <Field type="text" class="form-control" name={'address'}
                                                                       id="address" placeholder="Address"/>
                                                            </div>
                                                            <div className="form-floating">
                                                                <label htmlFor="phone">Phone</label>
                                                                <Field type="text" class="form-control" name={'phone'}
                                                                       id="phone" placeholder="Phone"/>
                                                                <alert className="text-danger">
                                                                    <ErrorMessage name={"phone"}></ErrorMessage>
                                                                </alert>
                                                            </div>
                                                            <div className="col-md-12">
                                                                <div>
                                                                    <label htmlFor="exampleFormControlFile1">
                                                                        <strong>Upload Image Here</strong>
                                                                    </label>
                                                                    <input
                                                                        type="file"
                                                                        className="form-control-file"
                                                                        id="exampleFormControlFile1"
                                                                        multiple
                                                                        onChange={handleChange}
                                                                    />
                                                                </div>
                                                                <div>
                                                                    <button
                                                                        type="button"
                                                                        className="btn btn-info w-100 py-3"
                                                                        onClick={handleUpload}
                                                                    >
                                                                        Up
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <button className="btn btn-info w-100 py-3" style={{backgroundColor:"rgb(240,134,40)"}}
                                                                    type="submit">Save changes
                                                            </button>
                                                        </div>
                                                    </div>
                                                </Form>
                                            </Formik>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                                        <img style={{width: '460px', height: '100%'}} src={urls} alt={urls}/>
                                        <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}