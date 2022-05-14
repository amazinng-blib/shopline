import React from "react";

const Login = () => {
  const [mail, setMail] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="login-container">
      <div className="dots-1 dots">
        <div className="dots-container">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="text">
        <p>
          Be the first to know & try out new <br /> amazing features
        </p>
        <form className="input">
          <input
            type="mail"
            placeholder="Your mail here"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
          <button type="submit" className="btn" onSubmit={handleSubmit}>
            Keep me Informed
          </button>
        </form>
      </div>
      <div className="dots-2 dots">
        <div className="dots-container">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Login;
