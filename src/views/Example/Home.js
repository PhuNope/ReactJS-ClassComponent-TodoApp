import React from "react";
// import { withRouter } from "react-router-dom";
import Color from "../HOC/Color";
import logo from "../../assets/images/tom-cat.png";
import { connect } from "react-redux";

class Home extends React.Component {
  // componentDidMount() {
  //   setTimeout(() => {
  //     this.props.history.push("/todos");
  //   }, 3000);
  // }

  hanldeDeleteUser = (user) => {
    console.log(">>> check user delete: ", user);
    this.props.deleteUserRedux(user);
  };

  hanldeCreateUser = () => {
    this.props.addUserRedux();
  };
  render() {
    console.log(">>> check props redux: ", this.props.dataRedux);

    let listUsers = this.props.dataRedux;

    return (
      <>
        <div>Hello world from Homepage</div>
        <div>
          <img
            src={logo}
            style={{ width: "400px", height: "400px", marginTop: "20px" }}
            alt=""
          />
        </div>

        <div>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <div key={item.id}>
                  {index + 1} - {item.name} &nbsp;
                  <span onClick={() => this.hanldeDeleteUser(item)}>X</span>
                </div>
              );
            })}

          <button onClick={() => this.hanldeCreateUser()}>Add new</button>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { dataRedux: state.users };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserRedux: (userDelete) => {
      dispatch({ type: "DELETE_USER", payload: userDelete });
    },
    addUserRedux: () => {
      dispatch({ type: "CREATE_USER" });
    },
  };
};

// export default withRouter(Home);
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));
