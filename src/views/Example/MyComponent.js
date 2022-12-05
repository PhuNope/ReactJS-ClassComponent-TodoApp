import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
  state = {
    arrJobs: [
      {
        id: "abcJob1",
        title: "developer",
        salary: "500",
      },
      {
        id: "abcJob2",
        title: "tester",
        salary: "400",
      },
      {
        id: "abcJob3",
        title: "project manager",
        salary: "1000",
      },
    ],
  };

  addNewJob = (job) => {
    console.log("check job from parent: ", job);
    let curentJobs = this.state.arrJobs;
    curentJobs.push(job);
    this.setState({
      arrJobs: curentJobs,
    });
  };

  deleteJob = (job) => {
    let curentJobs = this.state.arrJobs;
    curentJobs = curentJobs.filter((item) => item.id !== job.id);
    this.setState({
      arrJobs: curentJobs,
    });
  };

  render() {
    console.log(">>> call render: ", this.state);

    return (
      <>
        <AddComponent addNewJob={this.addNewJob}></AddComponent>

        <ChildComponent
          arrJobs={this.state.arrJobs}
          deleteJob={this.deleteJob}
        ></ChildComponent>
      </>
    );
  }
}

export default MyComponent;
