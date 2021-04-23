import React, { useEffect, useState } from 'react'
import axios from 'axios';
import style from '../../styles/history.module.css'
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";


function HistoryParts() {
    // const [dataIsLogin, setDataIsLogin] = useState([]);
    const [user, setUser] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(null);
    const [currentPage, setCurrentPage] = useState(null);

    let [queryLimit, setQueryLimit] = useState("4");
    let [queryOrder, setQueryOrder] = useState("asc");
    let [querySort, setQuerySort] = useState("createdAt");

    const sort = [
        {
            label: "Type",
            value: "type",
        },
        {
            label: "Added",
            value: "createdAt",
        },
        {
            label: "Amount",
            value: "amount",
        },
    ];
    const order = [
        {
            label: "Ascending",
            value: "ASC",
        },
        {
            label: "Descending",
            value: "DESC",
        },
    ];
    const limit = [
        {
            label: "Limit 1",
            value: "1",
        },
        {
            label: "Limit 2",
            value: "2",
        },
        {
            label: "Limit 4",
            value: "4",
        },
        {
            label: "Limit 5",
            value: "5",
        },
    ];





    const handleClickPage = (index) => {
        setPage(index + 1);
    };

    let token;
    if (typeof window !== "undefined") {
        token = localStorage.getItem("token");
    }

    useEffect(() => {
        const id = localStorage.getItem('id')
        // http://localhost:8080/api/v1/transaction/user/7?page=1&perPage=2&sortBy=createdAt&order=asc
        const url = `${process.env.api}/transaction/user/${id}?page=${page}&perPage=${queryLimit}&order=${queryOrder}&sortBy=${querySort}`;
        // console.log(url);
        axios.get(url, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
            .then((res) => {
                const data = res.data.data
                // console.log(res.data);
                setUser(data)
                setTotalPage(res.data.totalPage)
                setCurrentPage(res.data.currentPage)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [page, queryLimit, queryOrder, querySort]);


    return (
        <div className={style['card-history']}>
            <h3>Transaction History</h3>
            {user.map((item, index) => {
                return (
                    <div className={[['d-flex'], ['mb-3'], ['justify-content-between'], style['card-transaction-history']].join(" ")} key={index}>
                        <img src={`${process.env.api_img}${item.image}`}
                            alt="Picture Transaction"
                            width={70}
                            height={70} />
                        <div className={style['text-transaction']} >
                            <h5>{item.firstname} {item.lastname}</h5>
                            <p>{item.type}</p>
                        </div>
                        <div>
                            <h6 className={`${item.type === "Transfer" ? style['amount-transfer'] : style['amount-receiver']}`} >
                                {
                                    item.type === "Transfer"
                                        ? `-Rp${item.amount}`
                                        : `+Rp${item.amount}`
                                }
                            </h6>
                        </div>
                    </div>
                );
            })}
            {/* Paginasi */}
            <div className="row pl-2 pl-lg-0 mt-5">
                <div className="col-12 d-flex justify-content-center">
                    {parseInt(totalPage) > 1 ? (
                        <Pagination aria-label="Page navigation example">
                            <PaginationItem>
                                <PaginationLink first onClick={(e) => setPage(1)} />
                            </PaginationItem>
                            {Array.from(Array(totalPage).keys()).map((data, index) => {
                                return (
                                    <PaginationItem active={currentPage === index + 1}>
                                        <PaginationLink onClick={(e) => handleClickPage(index)}>
                                            {index + 1}
                                        </PaginationLink>
                                    </PaginationItem>
                                );
                            })}
                            <PaginationItem>
                                <PaginationLink
                                    last
                                    onClick={(e) => setPage(totalPage)}
                                />
                            </PaginationItem>
                        </Pagination>
                    ) : (
                        ""
                    )}
                </div>
            </div>
            {/* Akhir Pagnisai */}
            {/* awal sorting */}
            <div className="row mt-5 justify-content-center">
                <div className="col-3">
                    <select
                        onChange={(event) => setQuerySort(event.target.value)}
                        className="w-100 custom-select font-weight-normal"
                    >
                        {sort.map((item, index) => {
                            return (
                                <option value={item.value} key={index}>
                                    {item.label}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div className="col-3">
                    <select
                        onChange={(event) => {
                            setQueryOrder(event.target.value);
                        }}
                        className="w-100 custom-select"
                    >
                        {order.map((item, index) => {
                            return (
                                <option value={item.value} key={index}>
                                    {item.label}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div className="col-3">
                    <select
                        onChange={(event) => {
                            setQueryLimit(event.target.value);
                        }}
                        className="w-100 custom-select"
                    >
                        {limit.map((item, index) => {
                            return (
                                <option value={item.value} key={index}>
                                    {item.label}
                                </option>
                            );
                        })}
                    </select>
                </div>
            </div>
            {/* akkhir sorting */}
        </div>
    )
}

export default HistoryParts
