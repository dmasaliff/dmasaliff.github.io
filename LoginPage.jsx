import {useState} from 'react';
import '../LoginPage.css';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Lakukan logika autentikasi di sini
    if (username === 'user' && password === 'password') {
      // Contoh berhasil login
      console.log('Login berhasil!');
      setError('');
      // Redirect ke halaman lain atau set state login di aplikasi utama
    } else {
      // Contoh gagal login
      setError('Username atau password salah .');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username atau Email:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
      <p className="signup-link">
        Belum punya akun? <a href="/register">Daftar di sini</a>
      </p>
    </div>
  );
}

export default LoginPage;