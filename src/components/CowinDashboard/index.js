// Write your code here
import React, { Component } from 'react'
import Loader from 'react-loader-spinner'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'
import './index.css'

const API_URL = 'https://apis.ccbp.in/covid-vaccination-data'

class CowinDashboard extends Component {
  state = {
    isLoading: true,
    isError: false,
    vaccinationData: {},
  }

  componentDidMount() {
    this.fetchVaccinationData()
  }

  fetchVaccinationData = async () => {
    try {
      const response = await fetch(API_URL)
      if (response.ok) {
        const data = await response.json()
        this.setState({ vaccinationData: data, isLoading: false })
      } else {
        this.setState({ isError: true, isLoading: false })
      }
    } catch (error) {
      this.setState({ isError: true, isLoading: false })
    }
  }

  renderLoadingView = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderFailureView = () => (
    <div className="failure-view">
      <img src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png" alt="failure view" />
      <h1>Something Went Wrong</h1>
    </div>
  )

  renderSuccessView = () => {
    const { vaccinationData } = this.state
    return (
      <>
        <VaccinationCoverage data={vaccinationData.last_7_days_vaccination} />
        <VaccinationByGender data={vaccinationData.vaccination_by_gender} />
        <VaccinationByAge data={vaccinationData.vaccination_by_age} />
      </>
    )
  }

  render() {
    const { isLoading, isError } = this.state

    return (
      <div className="dashboard-container">
        <header className="header">
          <img src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png" alt="website logo" />
          <h1>CoWIN Vaccination in India</h1>
        </header>
        {isLoading ? this.renderLoadingView() : isError ? this.renderFailureView() : this.renderSuccessView()}
      </div>
    )
  }
}

export default CowinDashboard
