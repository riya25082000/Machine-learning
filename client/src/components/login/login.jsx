import React from "react";
import loginImg from "../../login.jpeg";

export class Login extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
        return (
            <div className="base-container" ref={this.props.containerRef} >
                <div className="header">Login</div>
                <form action='../../../../login' method='post'>
                <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
          <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" />
            </div>
              </div>
            </div>
            <div className="footer">
          <button type="submit" className="btn">
            Login
          </button>
                    </div>
                    </form>
            </div>
        );
}
}
