
const ProgressDisplay = ({ progress }) => {
  return (
    <div className='progress-container'>
      <div className='progress-bar'>
        <label htmlFor=""></label>
        <progress value={progress}></progress>
      </div>
    </div>
  )
}

export default ProgressDisplay