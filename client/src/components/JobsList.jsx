import React, { Component } from 'react';

class JobsList extends Component {
  constructor(props) {
    super(props)

  }

  async componentDidMount() {
    await this.props.getJobs();
    await this.props.getCompanies();
  }

  render() {
  return(
    <div>
      { this.props.jobsArray.map(job => {
        console.log(job);
        const company = this.props.companiesArray.find(company => company.id == job.companyId);
        return (
          <div key={job.id} id={job.id} onClick={this.props.showJob}>
            <h5>{job.experience_level} {job.job_title}</h5>
            <h6>{} - {job.location}</h6>
          </div>
      )})}
    </div>
  )}

}

export default JobsList;
