function LoginPage() {
  return (
    <div className="login-container">
      <h1>Sign In</h1>

      <form>
        <div className="input-group">
          <label htmlFor="email">Username or Email</label>
          <input type="email" id="email" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="text" id="password" />
        </div>
        <button>Sign In</button>
      </form>

      <p className="forgot-password">Forgot your password?</p>

      <div className="login-options">
        <div>
          <p>Continue with Google</p>
        </div>
        <div>
          <p>Continue with Facebook</p>
        </div>
        <div>
          <p>Continue with Twitter</p>
        </div>
      </div>

      <p>Not a member? <p>Sign up now</p></p>
    </div>
  );
}

export default LoginPage;
