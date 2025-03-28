import React, { useContext, useEffect, useState } from "react";
import "./home.css";
import Content from "../content/content";
import "./navbar.css"
import Form_User from "../Form_PopUp/Form_User";
import { ResponseContext } from "../ResponseContext";
function Home() {
    // const context = useContext(ResponseContext)
    // const [content, setContent] = useState("");
    const [plan, setPlan] = useState([]);
    const [title, setTitle] = useState("");
    const [planId, setPlanId] = useState(0);
    function handle(id) {
        plan.forEach((plan) => {
            if (plan.id === id) {
                setTitle(plan.content);
                setPlanId(id);
            }
        })
    }
    const handlePlanList = (data) => {
        setPlan((prev) => [
            ...prev,
            data
        ]);
        console.log(plan)
    }
    const handleReponseAPi = (data) => {
        console.log("Dữ liệu nhận được từ API:", data);
        setTitle(data); // Cập nhật nội dung từ API
        
    };
    return (
        <div className="main">
            <div className="container1">
                <div className="navbar1">
                    <div className="navbar_title">
                        <button className="title_button"><i class="fa-solid fa-bars"></i></button>
                        <h1>Nav bar</h1>
                    </div>
                    <ul className="navbar_list">
                        {plan.map((plan) => (
                            <li onClick={() => handle(plan.id)} key={plan.id}  className={`navbar_item ${planId === plan.id ? "active" : ""}`}>
                                <p>{plan.title}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <Content title={title}/>
                <Form_User responseApi={handleReponseAPi} planList={handlePlanList}/>
            </div>
        
        </div>
    );
}

export default Home;
