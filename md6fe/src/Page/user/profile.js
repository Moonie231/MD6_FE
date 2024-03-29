import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {editProfile, getProfile} from "../../service/userService";
import swal from "sweetalert";
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useEffect, useState} from "react";
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import {storage} from "../../service/firebase";

const validateSchema = Yup.object().shape({
    username: Yup.string()
        .min(2, "Too short!")
        .max(50, "Too long!")
        .required("Required"),
    phone: Yup.string()
        .min(2, "Too short!")
        .max(50, "Too long!")
        .required("Required"),
})
export default function ProfileUser() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    let {idUser} = useParams()
    const [urls, setUrls] = useState("");
    useEffect(() => {
        dispatch(getProfile(idUser)).then((e) => {
            console.log(e.payload.avatar)
            setUrls(e.payload.avatar)
        })
    }, [])

    const user = useSelector((state) => {
        console.log(state.user.profile)
        return state.user.profile
    })


    const [avatar, setAvatar] = useState([]);

    const [progress, setProgress] = useState(0);
    const handleChange = (e) => {
        for (let i = 0; i < e.target.files.length; i++) {
            const newImage = e.target.files[i];
            newImage["id"] = Math.random();
            setAvatar((prevState) => [...prevState, newImage]);
        }
    };

    const handleUpload = () => {
        const promises = [];
        if (avatar.length > 0) {
            avatar.map((img) => {
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
                                setUrls(downloadURLs);
                            }
                        );
                    }
                );
            });
        }
        Promise.all(promises)
            .then(() => swal("All avatar uploaded"))
            .catch((err) => console.log(err));
    };

    const handleEdit = async (values) => {
        let data = [{...values, avatar: urls}, idUser];
        console.log(data)
        await dispatch(editProfile(data)).then((value) => {
            swal("Edit Success !!!");
            navigate("/");
        });
    };

    return (
        <>
            <div className="container">
                <section className="contact spad">
                    <div className="container">

                        <div className="row">
                            <div className="col-lg-4">
                                <div className="contact__text">
                                    <img src={urls} style={{borderRadius: "23px", width: '250px', height: '250px'}}/>
                                    <div className="col-md-12">
                                        <div style={{float: "left", width: "100%"}}>
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
                                            <br/>
                                            <button
                                                type="button" style={{backgroundColor: "rgb(240,134,40)"}}
                                                className="site-btn"
                                                onClick={handleUpload}
                                            >
                                                Up
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="contact__form">
                                    <Formik
                                        initialValues={{
                                            username: user.username,
                                            email: user.email,
                                            phone: user.phone,
                                        }}
                                        validationSchema={validateSchema}
                                        onSubmit={(values) => {
                                            values.avatar = urls[0]
                                            handleEdit(values)
                                        }}
                                        enableReinitialize={true}
                                    >
                                        <Form>
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <label htmlFor="email">Email</label>
                                                    <Field type="text" class="form-control"
                                                           name={'email'} id="email"
                                                           placeholder="email" disabled/>
                                                </div>
                                                <div className="col-lg-12">
                                                    <label for="username">Name Merchant</label>
                                                    <Field type="text" class="form-control"
                                                           name={'username'} id="username"
                                                           placeholder="Name"/>
                                                    <alert className="text-danger">
                                                        <ErrorMessage name={"username"}></ErrorMessage>
                                                    </alert>
                                                </div>
                                                <div className="col-lg-12">
                                                    <label htmlFor="phone">Phone</label>
                                                    <Field type="text" class="form-control" name={'phone'}
                                                           id="phone" placeholder="Phone"/>
                                                    <alert className="text-danger">
                                                        <ErrorMessage name={"phone"}></ErrorMessage>
                                                    </alert>
                                                </div>
                                                <div className="col-lg-12">
                                                    <button type="submit" className="site-btn"
                                                            style={{backgroundColor: "rgb(240,134,40)"}}>Save
                                                    </button>
                                                </div>
                                            </div>
                                        </Form>
                                    </Formik>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}