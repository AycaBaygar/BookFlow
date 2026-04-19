import { useState } from "react";
import "./Login.css";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email.trim() || !password.trim()) {
      return;
    }
    onLogin();
  };

  return (
    <main className="login-stage">
      <section className="phone-shell" aria-label="BookFlow giriş ekranı">
        <div className="phone-notch" aria-hidden="true" />

        <div className="phone-content">
          <header className="login-header">
            <h1 className="brand">BookFlow</h1>
            <p className="tagline">Kitap Dünyanı Keşfet</p>
          </header>

          <p className="prompt">Giriş yapmak için devam et</p>

          <form onSubmit={handleSubmit} className="login-form">
            <label className="field-wrap" htmlFor="email">
              <span className="field-label">Email</span>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="ornek@mail.com"
                autoComplete="email"
                required
              />
            </label>

            <label className="field-wrap" htmlFor="password">
              <span className="field-label">Şifre</span>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="••••••••••"
                autoComplete="current-password"
                required
              />
            </label>

            <button type="submit" className="login-button">
              Giriş Yap
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
