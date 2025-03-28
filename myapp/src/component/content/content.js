import "./content.css"
function Content({ title }) {
    return (
        !title ? (

            <div className="content">
                <div className="logo">
                    <img src="https://img.freepik.com/free-vector/flat-design-english-logo-design_23-2149512649.jpg?t=st=1742527657~exp=1742531257~hmac=1186df2caacfe5948798b6e57923bf17e4f5bdfe7ff43772cae7a0f4f5c159aa&w=826" />
                </div>
                <div className="title">
                    <h1>Chào mừng đến với hệ thống hỗ trợ lập kế hoạch</h1>
                </div>
                <div className="text">
                    <p>Nhấn vào đây để tạo kế hoạch!!</p>
                </div>
            </div>
        ) : (
            <div className="content-plan">
                <div className="plan-text">
                    {title}
                </div>
            </div>
        )
    );
}


export default Content;