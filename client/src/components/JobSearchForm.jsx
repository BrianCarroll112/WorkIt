import React, { Component } from 'react';

class JobSearchForm extends Component {
  constructor(props){
    super(props)

    this.state = {
      job_title: null,
      location: null,
      salary: null,
    }
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  async handleSubmit(e) {
    e.preventDefault();
    let array = this.props.jobsArray.filter(job => true);
    const { job_title, location, salary } = this.state;
    job_title ? array = array.filter(job => job.job_title === this.state.job_title): console.log(array);
    location ? array = array.filter(job => job.location === this.state.location): console.log(array);
    salary ? array = array.filter(job => job.salary >= this.state.salary): console.log(array);
    await this.props.setRenderedArray(array)
    this.props.setFirstView();
  }

  render() {
    return(
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <select name="job_title" onChange={(e) => this.handleChange(e)}>
            <option value={null}>Select Job Title</option>
            <option value="Web Developer">Web Developer</option>
            <option value="Software Engineer">Software Engineer</option>
          </select>
          <select name="location" onChange={(e) => this.handleChange(e)}>
            <option value={null}> Select Location </option>
            <option value="New York, NY"> NYC </option>
            <option value="Boston, MA"> Boston </option>
            <option value="Denver, CO"> Denver </option>
          </select>
          <input value={null} placeholder="Minimum Salary" name="salary" type="number" onChange={(e) => this.handleChange(e)} />
          <input type="submit" value="Filter"/>
        </form>
        <button onClick={(props) => {
            this.props.getJobs()
            this.props.setFirstView()}}
        >Reset</button>
      </div>
    )
  }
};

export default JobSearchForm;
