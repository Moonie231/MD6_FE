import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend} from "chart.js"
import {Bar} from "react-chartjs-2";
import {useParams} from "react-router-dom";
import {statisticsByMonth, statisticsByWeek, statisticsByYear} from "../../service/merchantService";

ChartJS.register(
    BarElement, CategoryScale, LinearScale, Tooltip, Legend
)
export default function StatisticsByTime() {
    const {id} = useParams()
    const [statusWeek, setStatusWeek] = useState(true)
    const [statusMonth, setStatusMonth] = useState(false)
    const [statusYear, setStatusYear] = useState(false)
    const statisticsWeek = useSelector((state) => {
        let money = 0;
        state.merchant.statisticsByWeek.map((item) => {
            money += item.totalMoney;
        })
        let obj = {
            list: state.merchant.statisticsByWeek,
            sum: money
        }
        return obj
    })
    const statisticsMonth = useSelector((state) => {
        let money = 0;
        state.merchant.statisticsByMonth.map((item) => {
            money += item.totalMoney;
        })
        let obj = {
            list: state.merchant.statisticsByMonth,
            sum: money
        }
        return obj
    })
    const statisticsYear = useSelector((state) => {
        let money = 0;
        state.merchant.statisticsByYear.map((item) => {
            money += item.totalMoney;
        })
        let obj = {
            list: state.merchant.statisticsByYear,
            sum: money
        }
        return obj
    })
    const handleWeek = async (event) => {
        let data = [id, event.target.value]
        dispatch(statisticsByWeek(data)).then((data) => {
        })


    }
    const handleMonth = async (event) => {

        let data = [id, event.target.value]
        dispatch(statisticsByMonth(data)).then((data) => {
        })

    }

    const dataWeek = {
        labels: statisticsWeek.list.map((item) => {
            return item.week
        }),
        datasets: [
            {
                label: 'Week',
                data: statisticsWeek.list.map((item) => {
                    return item.totalMoney
                }),
                backgroundColor: 'rgb(240,134,40)',
                borderColor: 'black',
                borderWidth: 1,
            }
        ]
    }
    const dataMonth = {
        labels: statisticsMonth.list.map((item) => {
            return item.month
        }),
        datasets: [
            {
                label: 'Precious',
                data: statisticsMonth.list.map((item) => {
                    return item.totalMoney
                }),
                backgroundColor: 'rgb(240,134,40)',
                borderColor: 'black',
                borderWidth: 1,
            }
        ]
    }
    const dataYear = {
        labels: statisticsYear.list.map((item) => {
            return item.year
        }),
        datasets: [
            {
                label: 'Year',
                data: statisticsYear.list.map((item) => {
                    return item.totalMoney
                }),
                backgroundColor: 'rgb(240,134,40)',
                borderColor: 'black',
                borderWidth: 1,
            }
        ]
    }

    const dispatch = useDispatch()
    useEffect(() => {
        let dataWeek = [id, 1]
        let dataMonth = [id, 2023]
        dispatch(statisticsByWeek(dataWeek)).then((data) => {
        })
        dispatch(statisticsByMonth(dataMonth)).then((data) => {
        })
        dispatch(statisticsByYear(id)).then((data) => {
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
            <div style={{textAlign: 'center', marginTop: 80}}>
                <button className="btn btn-dark" onClick={() => {
                    setStatusWeek(!statusWeek)
                    setStatusMonth(false)
                    setStatusYear(false)
                    let dataMonth = [id, 2023]
                    dispatch(statisticsByMonth(dataMonth)).then((data) => {
                    })
                }
                }>Week
                </button>
                <button style={{marginLeft: 10}} className="btn btn-dark" onClick={() => {
                    setStatusMonth(!statusMonth)
                    setStatusYear(false)
                    setStatusWeek(false)
                    let dataWeek = [id, 1]
                    dispatch(statisticsByWeek(dataWeek)).then((data) => {
                    })
                }
                }>Month
                </button>
                <button style={{marginLeft: 10}} className="btn btn-dark" onClick={() => {
                    setStatusYear(!statusYear)
                    setStatusWeek(false)
                    setStatusMonth(false)
                    let dataWeek = [id, 1]
                    dispatch(statisticsByWeek(dataWeek)).then((data) => {
                    })
                    let dataMonth = [id, 2023]
                    dispatch(statisticsByMonth(dataMonth)).then((data) => {
                    })
                }
                }>Year
                </button>
            </div>
            {statusWeek &&
                <div className="container" style={{height:630}}>
                    <h4>Statistics Week</h4>
                    <h4>Total:{statisticsWeek.sum}</h4>
                    <h4>Month:
                        <select onChange={handleWeek}>
                            <option value="1">January</option>
                            <option value="2">February</option>
                            <option value="3">March</option>
                            <option value="4">April</option>
                            <option value="5">May</option>
                            <option value="6">June</option>
                            <option value="7">July</option>
                            <option value="8">August</option>
                            <option value="9">September</option>
                            <option value="10">October</option>
                            <option value="11">November</option>
                            <option value="12">December</option>
                        </select>
                    </h4>
                    <div>
                        <Bar style={{height: 500}} data={dataWeek}
                             options={options}
                        ></Bar>
                    </div>
                </div>

            }
            {statusMonth &&
                <div className="container" style={{height:630}}>
                    <h4>Statistics Precious</h4>
                    <h4>Total:{statisticsMonth.sum}</h4>
                    <h4>Year: <select onChange={handleMonth}>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                    </select></h4>

                    <div>
                        <Bar style={{height: 500}} data={dataMonth}
                             options={options}
                        ></Bar>
                    </div>
                </div>

            }
            {statusYear &&
                <div className="container" style={{height:630}}>
                    <h4>Statistics Year</h4>
                    <h4>Total:{statisticsYear.sum}</h4>
                    <div>
                        <Bar style={{height: 500}} data={dataYear}
                             options={options}
                        ></Bar>
                    </div>
                </div>
            }
        </>
    )
}


