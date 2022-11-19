import Header from '../Header'
import JobsFilterSection from '../JobsFilterSection'
import './index.css'

const Jobs = () => (
  <>
    <Header />
    <div className="job-profile-container">
      <JobsFilterSection />
    </div>
  </>
)

export default Jobs
