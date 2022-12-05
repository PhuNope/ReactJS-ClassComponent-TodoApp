import React from "react";
import axios from "axios";
import "./ListUser.scss";
import { withRouter } from "react-router-dom";

class ListUser extends React.Component {
  state = {
    listUsers: [],
  };

  async componentDidMount() {
    // axios.get("https://reqres.in/api/users?page=2").then((users) => {
    //   console.log(">>> check res: ", users.data.data);
    // });

    let users = await axios.get("https://reqres.in/api/users?page=1");
    this.setState({
      listUsers: users && users.data && users.data.data ? users.data.data : [],
    });
  }

  handleViewDetailUser = (user) => {
    this.props.history.push(`/user/${user.id}`);
  };

  render() {
    let { listUsers } = this.state;

    return (
      <div className="list-user-container">
        <div className="title">Fetch all list users</div>

        <div className="list-user-content">
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <div
                  className="child"
                  key={item.id}
                  onClick={() => this.handleViewDetailUser(item)}
                >
                  {index + 1} - {item.first_name} {item.last_name}
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default withRouter(ListUser);
