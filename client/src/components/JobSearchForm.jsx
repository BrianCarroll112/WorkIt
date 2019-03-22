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
    console.log('props', this.props);
    console.log('array', array);
    await this.props.setRenderedArray(array)
    this.props.setFirstView();
  }

  render() {
    return(
      <div className='search-page'>
        <form className='search-filters' onSubmit={(e) => this.handleSubmit(e)}>
          <select className='select-filters' name="job_title" onChange={(e) => this.handleChange(e)}>
            <option className="job-option" value={null}>Select Job Title</option>
            <option className="job-option" value="Web Developer">Web Developer</option>
            <option className="job-option" value="Software Engineer">Software Engineer</option>
          </select>

          <select className='select-filters' name="location" onChange={(e) => this.handleChange(e)}>
            <option className="job-option" value={null}> Select Location </option>
            <option className="job-option" value="New York, NY"> NYC </option>
            <option className="job-option" value="Boston, MA"> Boston </option>
            <option className="job-option" value="Denver, CO"> Denver </option>
          </select>
          <input className='salary-filter' value={null} placeholder="Minimum Salary" name="salary" type="number" onChange={(e) => this.handleChange(e)} />
        </form>
        <div className="button-filters">
          <button className='click-filters' type="submit" value="Filter">Filter</button>
          <button className='click-filters' onClick={(props) => {
            this.props.getJobs()
            this.props.setFirstView()}}>Reset</button>
        </div>
      </div>
    )
  }
};

export default JobSearchForm;
