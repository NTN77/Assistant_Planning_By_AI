import React, { useEffect, useState } from "react";
import "./home.css";
import Content from "../content/content";
import "./navbar.css"
import Form_User from "../Form_PopUp/Form_User";
function Home() {
    const [plan, setPlan] = useState([]);
    const [title, setTitle] = useState("");
    function handle(id) {
        plan.forEach((plan) => {
            if (plan.id === id) {
                setTitle(plan.content);
            }
        })
    }
    async function getPlan() {
        const url = "http://192.168.123.180:11434/api/generate";
        try {
          const response = await fetch(url, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
    
          if (response.ok) {
            const data = await response.json();
            setPlan(data);
          } else {
            throw new Error("Failed to fetch plans");
          }
        } catch (error) {
        }
      }
    useEffect(() => {
        getPlan();
    }, [])
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
                            <li onClick={() => handle(plan.id)} key={plan.id}  className="navbar_item">
                                <p>{plan.title}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <Content title={title}/>
                <Form_User/>
            </div>
        </div>
    );
}

export default Home;