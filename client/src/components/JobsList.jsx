import React, { Component } from 'react';

class JobsList extends Component {
  constructor(props) {
    super(props)

  }

  async componentDidMount() {
    await this.props.getJobs();
    await this.props.getCompanies();
    this.props.setFirstView()
  }

  render() {
  return(
    <div>
      { this.props.renderedJobsArray.map(job => {
        const company = this.props.companiesArray.find(company => company.id === job.companyId);
        return (
        <div
        className="job-results"
        key={job.id}
        id={job.id}
        onClick={this.props.showJob}>
         <div className='noth5'>{job.experience_level} {job.job_title}</div>
         <div className='noth6'>{company ? company.name : 'Company Name'} - {job.location}</div>
        </div>
      )})}
    </div>
  )}

}

export default JobsList;
