import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {statisticsByFood, statisticsByStatus, statisticsByUser} from "../../service/merchantService";
import {Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend} from "chart.js"
import {Bar} from "react-chartjs-2";
import {useParams} from "react-router-dom";

ChartJS.register(
    BarElement, CategoryScale, LinearScale, Tooltip, Legend
)
export default function StatisticsByUser() {
    const {id}=useParams()
    const [statusWeek,setStatusWeek]=useState(true)
    const [statusMonth,setStatusMonth]=useState(false)
    const [statusYear,setStatusYear]=useState(false)
    const statisticsUser = useSelector((state) => {
        console.log(state.merchant.statisticsByUser)
        let money=0;
        state.merchant.statisticsByUser.map((item)=>{
            money += item.totalMoney;
        })
        let obj = {
            list: state.merchant.statisticsByUser,
            sum:money
        }
        return obj
    })
    const statisticsStatus = useSelector((state) => {
        let money=0;
        state.merchant.statisticsByStatus.map((item)=>{
            money += item.totalMoney;
        })
        let obj = {
            list: state.merchant.statisticsByStatus,
            sum:money
        }
        return obj
    })
    const statisticsFood = useSelector((state) => {
        let money=0;
        state.merchant.statisticsByFood.map((item)=>{
            money += item.totalMoney;
        })
        let obj = {
            list: state.merchant.statisticsByFood,
            sum:money
        }
        return obj
    })
    const dataUser = {
        labels: statisticsUser.list.map((item) => {
            return item.email
        }),
        datasets: [
            {
                label: 'Users',
                data: statisticsUser.list.map((item) => {
                    return item.totalMoney
                }),
                backgroundColor: 'rgb(240,134,40)',
                borderColor: 'black',
                borderWidth: 1,
            }
        ]
    }
    const dataStatus = {
        labels: statisticsStatus.list.map((item) => {
            return item.status
        }),
        datasets: [
            {
                label: 'Status Order',
                data: statisticsStatus.list.map((item) => {
                    return item.totalMoney
                }),
                backgroundColor: 'rgb(240,134,40)',
                borderColor: 'black',
                borderWidth: 1,
            }
        ]
    }
    const dataFood = {
        labels: statisticsFood.list.map((item) => {
            return item.nameFood
        }),
        datasets: [
            {
                label: 'Foods Order ',
                data: statisticsFood.list.map((item) => {
                    return item.price
                }),
                backgroundColor: 'rgb(240,134,40)',
                borderColor: 'black',
                borderWidth: 1,
            }
        ]
    }
    const dispatch = useDispatch()
    useEffect( () => {
         dispatch(statisticsByUser(id)).then((data) => {
        })
         dispatch(statisticsByStatus(id)).then((data) => {
        })
        dispatch(statisticsByFood(id)).then((data) => {
        })

    }, []);
    const options = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        legend: {
            display: false
        },
        responsive: true,
        maintainAspectRatio: false,
        barThickness: 70
    }
    return (
        <>
            <div  style={{textAlign:'center',marginTop:80}}>
                <button className="btn btn-dark" onClick={()=>{
                    setStatusWeek(!statusWeek)
                    setStatusMonth(false)
                    setStatusYear(false)
                }
                }>User</button>
                <button style={{marginLeft:10}} className="btn btn-dark" onClick={()=>{
                    setStatusMonth(!statusMonth)
                    setStatusYear(false)
                    setStatusWeek(false)
                }
                }>Status</button>
                <button style={{marginLeft:10}} className="btn btn-dark" onClick={()=>{
                    setStatusYear(!statusYear)
                    setStatusWeek(false)
                    setStatusMonth(false)
                }
                }>Food</button>
            </div>
            {statusWeek &&
                <div className="container" style={{height:630}}>
                    <h4>Statistics User</h4>
                    <h4>Total:{statisticsUser.sum}</h4>
                    <div>
                        <Bar style={{height:500}} data={dataUser}
                             options={options}
                        ></Bar>
                    </div>
                </div>

            }
            {statusMonth &&
                <div className="container" style={{height:630}}>
                    <h4>Statistics Status</h4>
                    <div>
                        <Bar style={{height:500}} data={dataStatus}
                             options={options}
                        ></Bar>
                    </div>
                </div>

            }
            {statusYear &&
                <div className="container" style={{height:630}}>
                    <h4  >Statistics Food</h4>
                    <div>
                        <Bar style={{height:500}} data={dataFood}
                             options={options}
                        ></Bar>
                    </div>
                </div>
            }
        </>
    )
}


