import {Link, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {addAddress, deleteAddress, editAddress, getAddress} from "../../service/userService";
import swal from "sweetalert";

export default function Address() {
    let {idUser} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    let address = useSelector(state => {
        return state.user.address
    })

    useEffect(() => {
        dispatch(getAddress(idUser))
    }, [])
    return (
        <>
            <div className={'container'}>
                <div className="" role="main">
                    <div style={{display: 'contents'}}>
                        <div className="" style={{flexDirection: 'column', display: 'flex'}}>
                            <div className=""
                                 style={{
                                     borderBottom: '1px solid #efefef',
                                     padding: '22px 30px',
                                     height: '80px',
                                     boxSizing: 'border-box',
                                     display: 'flex',
                                     alignItems: 'center'
                                 }}>
                                <div className="" style={{flex: 1}}>
                                    <div className="" style={{
                                        fontSize: '1.125rem',
                                        fontWeight: 500,
                                        lineHeight: '1.5rem',
                                        color: '#333'
                                    }}>
                                        Địa chỉ của tôi
                                    </div>
                                    <div className="" style={{
                                        fontSize: '.875rem',
                                        lineHeight: '1.0625rem',
                                        color: '#555',
                                        marginTop: '3px'
                                    }}></div>
                                </div>
                                <div>
                                    <div className="" style={{marginLeft: ' 10px', display: 'block'}}>
                                        <div style={{display: 'flex'}}>
                                                <button className='' style={{
                                                    height: 40,
                                                    padding: 20,
                                                    fontSize: '.875rem',
                                                    fontWeight: 400,
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    outline: 0,
                                                    background: '#ee4d2d',
                                                    cursor: 'pointer',
                                                    lineHeight: 1,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    color: '#fff',
                                                    transition: 'opacity .2s ease',
                                                    borderRadius: 2,
                                                    userSelect: 'none',
                                                    boxShadow: '0 1px 1px 0 rgb(0 0 0 / 9%)'
                                                }}
                                                        onClick={() => {
                                                            swal("New Address", {
                                                                content: "input",
                                                                showCancelButton: true,
                                                                confirmButtonText: 'Lưu',
                                                                cancelButtonText: 'Hủy',
                                                            })
                                                                .then(async (result) => {
                                                                    console.log(result)
                                                                    if (result) {
                                                                        let data = {
                                                                            nameAddress: result,
                                                                            id_User: localStorage.getItem("idUser")
                                                                        }
                                                                        await dispatch(addAddress(data)).then(async () =>{
                                                                            await dispatch(getAddress(localStorage.getItem('idUser'))).then(() => {
                                                                                navigate('/users/address/'+localStorage.getItem('idUser'))
                                                                            })

                                                                        });
                                                                        swal("Add ok!", {
                                                                            icon: "success",
                                                                        });
                                                                    } else {
                                                                        swal("No address");
                                                                    }
                                                                });
                                                        }}>
                                                    <div className="" style={{
                                                        justifyContent: 'space-between',
                                                        alignItems: 'center',
                                                        display: 'flex'
                                                    }}>
                                                        <div className="" style={{
                                                            marginRight: 10,
                                                            alignItems: 'center',
                                                            display: 'flex'
                                                        }}>
                                                            <svg enable-background="new 0 0 10 10" viewBox="0 0 10 10"
                                                                 x="0" y="0" className=""
                                                                 style={{
                                                                     overflow: 'hidden',
                                                                     display: 'inline-block',
                                                                     width: '1em',
                                                                     height: '1em',
                                                                     fill: 'currentColor',
                                                                     position: 'relative'
                                                                 }}>
                                                                <polygon
                                                                    points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5"></polygon>
                                                            </svg>
                                                        </div>
                                                        <div>Thêm địa chỉ mới</div>
                                                    </div>
                                                </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="" style={{background: '#f5f5f5'}}>
                                <div className="" style={{padding: '12px 30px 0', background: '#fff'}}>
                                    <div className=""
                                         style={{marginBottom: 8, fontSize: '1.125rem', lineHeight: ' 1.75rem'}}>Địa chỉ
                                    </div>
                                    {address.map(item => (
                                        <div className=""
                                             style={{
                                                 padding: '18px 0 20px',
                                                 borderBottom: '1px solid rgba(0,0,0,.09)',
                                                 background: '#fff',
                                                 display: 'flex'
                                             }}>
                                            <div className="" style={{minWidth: 0, width: '100%', display: 'block'}}>
                                                <div role="heading" className="" style={{
                                                    marginBottom: 4,
                                                    justifyContent: 'space-between',
                                                    display: 'flex'
                                                }}>
                                                    <div className="" style={{marginRight: 8, display: "flex"}}>
                                                    <span className=""
                                                          style={{
                                                              color: 'rgba(0,0,0,.87)',
                                                              fontSize: '1rem',
                                                              lineHeight: '1.5rem',
                                                              fonWeight: 500,
                                                              minWidth: 0,
                                                              display: 'inline-flex',
                                                              aligItems: 'center',
                                                          }}>
                                                        <div className=""
                                                             style={{textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>
                                                            {item.username}</div></span>
                                                        <div style={{
                                                            borderLeft: '0.5px solid rgba(0,0,0,.26)',
                                                            margin: ' 0 8px'
                                                        }}></div>
                                                        <div role="row"
                                                             className="" style={{
                                                            fontSize: '.875rem',
                                                            lineHeight: '1.25rem',
                                                            color: 'rgba(0,0,0,.54)',
                                                            whiteSpace: 'nowrap',
                                                            display: 'flex',
                                                            alignItems: 'center'
                                                        }}>
                                                            {item.phone}</div>
                                                    </div>
                                                    <div className="" style={{justifyContent: 'flex-end'}}>
                                                            <button className=""
                                                                    style={{
                                                                        justifyContent: 'flex-end',
                                                                        border: 0,
                                                                        background: '#ee4d2d',
                                                                        outline: 'none',
                                                                        padding: 4,
                                                                        color: 'white',
                                                                        textTransform: 'none',
                                                                        overflow: 'visible',
                                                                        marginRight: 10
                                                                    }}
                                                                    onClick={() => {
                                                                        swal("Edit Your Address", {
                                                                            content: "input",
                                                                            inputValue: '132',
                                                                            showCancelButton: true,
                                                                            confirmButtonText: 'Lưu',
                                                                            cancelButtonText: 'Hủy',
                                                                        })
                                                                            .then(async (result) => {
                                                                                console.log(result)
                                                                                if (result) {
                                                                                    let data = [{nameAddress: result}, item.idAddress]
                                                                                    await dispatch(editAddress(data)).then(async () =>{
                                                                                        await dispatch(getAddress(localStorage.getItem('idUser'))).then(() => {
                                                                                            navigate('/users/address/'+localStorage.getItem('idUser'))
                                                                                        })

                                                                                    });
                                                                                    swal("Edit ok!", {
                                                                                        icon: "success",
                                                                                    });
                                                                                } else {
                                                                                    swal("Your address is safe!");
                                                                                }
                                                                            });
                                                                    }}
                                                            >
                                                                Edit
                                                            </button>
                                                        <button className=""
                                                                style={{
                                                                    justifyContent: 'flex-end',
                                                                    border: 0,
                                                                    background: '#ee4d2d',
                                                                    outline: 'none',
                                                                    padding: 4,
                                                                    color: 'white',
                                                                    textTransform: 'none',
                                                                    overflow: 'visible',
                                                                }}
                                                                onClick={() => {
                                                                    swal({
                                                                        title: "Are you sure?",
                                                                        text: "Once deleted, you will not be able to recover this imaginary file!",
                                                                        icon: "warning",
                                                                        buttons: true,
                                                                        dangerMode: true,
                                                                    })
                                                                        .then((willDelete) => {
                                                                            if (willDelete) {
                                                                                swal("Poof! Your imaginary file has been deleted!", {
                                                                                    icon: "success",
                                                                                });
                                                                                dispatch(deleteAddress(item.idAddress)).then(() => {
                                                                                    navigate('/users/address/'+ idUser)
                                                                                    dispatch(getAddress(idUser)).then(() => {
                                                                                    })

                                                                                })
                                                                            } else {
                                                                                swal("Your imaginary file is safe!");
                                                                            }
                                                                        });
                                                                }}>
                                                            Delete
                                                        </button>
                                                    </div>
                                                </div>
                                                <div role="heading" className="">
                                                    <div className="">
                                                        <div className="">
                                                            <div role="row" className="">{item.nameAddress}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}