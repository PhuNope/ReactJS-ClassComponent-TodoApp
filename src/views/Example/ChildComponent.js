import React from "react";
import "./Demo.scss";

class ChildComponent extends React.Component {
  state = {
    showJobs: false,
  };

  handleShowHide = () => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };

  handleOnClickDelete = (job) => {
    console.log(">>> handleOnClickDelete: ", job);
    this.props.deleteJob(job);
  };

  render() {
    let { arrJobs } = this.props;
    let { showJobs } = this.state;

    return (
      <>
        {showJobs === false && (
          <div>
            <button className="btn-show" onClick={() => this.handleShowHide()}>
              Show
            </button>
          </div>
        )}
        {showJobs && (
          <>
            <div className="job-lists">
              {arrJobs.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.title} - {item.salary} $ <></>
                    <span onClick={() => this.handleOnClickDelete(item)}>
                      X
                    </span>
                  </div>
                );
              })}
            </div>
            <div>
              <button onClick={() => this.handleShowHide()}>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}

export default ChildComponent;
