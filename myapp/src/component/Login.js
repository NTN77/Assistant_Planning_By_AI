import { useState } from "react";
// import { useNavigate } from "react-router-dom";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    // const navigate = useNavigate();
    if (email === "admin@example.com" && password === "123456") {
      alert("Đăng nhập thành công!");
    } else {
      setError("Email hoặc mật khẩu không đúng!");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Đăng Nhập</h2>
      <input
        type="email"
        placeholder="Nhập email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={styles.input}
      />
      <input
        type="password"
        placeholder="Nhập mật khẩu"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
      />
      {error && <p style={styles.error}>{error}</p>}
      <button onClick={handleLogin} style={styles.button}>
        Đăng Nhập
      </button>
    </div>
  );
}

const styles = {
  container: { maxWidth: 300, margin: "50px auto", textAlign: "center" },
  input: { width: "100%", padding: 10, marginBottom: 10, borderRadius: 5 },
  button: { padding: 10, width: "100%", cursor: "pointer", backgroundColor: "#28a745", color: "white", border: "none", borderRadius: 5 },
  error: { color: "red" },
};

export default Login;
