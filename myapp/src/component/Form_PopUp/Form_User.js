import React, { useContext, useEffect, useState } from "react";
const Form_User = ({responseApi , planList}) => {
    const [userData, setUserData] = useState({
        name: "",
        job: "",
        currentLevel: "beginner",
        goal: ""
    });

    const [inputLevel, setInputLevel] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [prompts, setPrompt] =useState("");    
    

    const handleLevelChange = (e) => {
        const selectedValue = e.target.value;
        setUserData({ ...userData, currentLevel: selectedValue });

        if (selectedValue === "other") {
            setInputLevel(true);
        } else {
            setInputLevel(false);
        }
    };
    const [body, setBody] = useState({
        model:"llama3.2:1b",
        prompt: "",
        stream: false
    })

    const handleButtonSetBody = () => {
        setPrompt("Tôi là "+userData.job + ".Tôi đang ở trình độ " + userData.currentLevel + ".Tôi muốn đạt được " + userData.goal + ".Hãy giúp tôi lập kế hoạch học tiếng anh để đạt được mục tiêu trên của tôi");
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        body.prompt = prompts;
        console.log(JSON.stringify(body))
        try {
            const responses = await fetch("http://192.168.62.180:8080/api/generate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            });
            if (!responses.ok) {
                throw new Error("Gửi dữ liệu thất bại!");
            }   else {
                const data = await responses.json();
                const contentData = data.response
                responseApi(contentData);
                console.log(contentData)
                if (responseApi) {
                    responseApi(data.response); // Gửi dữ liệu lên Home
                }
                // context.setReponse(contentData)
                const newPlan = {
                    id: Date.now(),
                    title: userData.goal, 
                    content: contentData
                };
                planList(newPlan);
            } 

        } catch (error) {
            console.error(error)
        }
        setShowModal(false);
    };
    useEffect(() => {
       
    }, [responseApi])
    return (
        <div className="form">
            <button className="btn btn-primary" onClick={() => setShowModal(true)}>
                Tạo kế hoạch
            </button>

            {showModal && (
                <div className="modal fade show d-block" tabIndex="-1">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Thông tin người học</h5>
                                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label className="form-label">Họ và tên</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={userData.name}
                                            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Nghề nghiệp</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={userData.job}
                                            placeholder="Ví dụ: Học Sinh..."
                                            onChange={(e) => setUserData({ ...userData, job: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Trình độ hiện tại</label>
                                        <select className="form-select" value={userData.currentLevel} onChange={handleLevelChange} required>
                                            <option value="beginner">Beginner - Mới bắt đầu</option>
                                            <option value="intermediate">Intermediate - Trung cấp</option>
                                            <option value="advanced">Advanced - Nâng cao</option>
                                            <option value="other">Other - Khác</option>
                                        </select>
                                    </div>
                                    {inputLevel && (
                                        <div className="mb-3">
                                            <input
                                                type="text"
                                                placeholder="Ví dụ: 500+ TOEIC, IELTS 7.0, ..."
                                                className="form-control"
                                                value={userData.currentLevel === "other" ? "" : userData.currentLevel}
                                                onChange={(e) => setUserData({ ...userData, currentLevel: e.target.value })}
                                                required
                                            />
                                        </div>
                                    )}
                                    <div className="mb-3">
                                        <label className="form-label">Mục tiêu học tập</label>
                                        <textarea
                                            className="form-control"
                                            value={userData.goal}
                                            onChange={(e) => setUserData({ ...userData, goal: e.target.value })}
                                            placeholder="Ví dụ: Thi IELTS 7.0, giao tiếp tự tin, phỏng vấn xin việc..."
                                            required
                                        />
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
                                            Đóng
                                        </button>
                                        <button type="submit" className="btn btn-primary" onClick={handleButtonSetBody}>
                                            Tiếp tục
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {showModal && <div className="modal-backdrop fade show"></div>}
        </div>
    );
};

export default Form_User;
