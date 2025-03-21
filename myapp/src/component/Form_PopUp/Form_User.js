import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Form_User = () => {
    const [userData, setUserData] = useState({
        name: "",
        job: "",
        currentLevel: "beginner",
        goal: ""
    });

    const [inputLevel, setInputLevel] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleLevelChange = (e) => {
        const selectedValue = e.target.value;
        setUserData({ ...userData, currentLevel: selectedValue });

        if (selectedValue === "other") {
            setInputLevel(true);
        } else {
            setInputLevel(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:8080/api/question/format", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });
        if (!response.ok) {
            throw new Error("Gửi dữ liệu thất bại!");
        }

        console.log("Gửi thành công:", response.text());
        setShowModal(false);
    };

    return (
        <div className="container mt-4">
            <button className="btn btn-primary" onClick={() => setShowModal(true)}>
                Mở Form
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
                                        <button type="submit" className="btn btn-primary">
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
