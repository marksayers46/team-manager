import { useState } from 'react'


const TicketPage = () => {
  const [formData, setFormData] = useState({
    status: 'not started',
    progress: 0,
    timestamp: new Date().toISOString()
  })

const editMode = false

const handleSubmit = (event) => {
  event.preventDefault()
  console.log('submitted')
}

const handleChange = () => {
  console.log('changed')
} 

  return (
    <div className="ticket">
      <h1>{editMode ? 'Update Ticket' : 'Create Ticket'}</h1>
      <div className="ticket-container">
        <form onSubmit={handleSubmit}>
          <section>
            <label htmlFor="title">Title</label>
            <input 
              id="title"
              type="text"
              name="title"
              onChange={handleChange}
              required={true}
              value={formData.title}
            />
          </section>
        </form>
      </div>
    </div>
  )
}

export default TicketPage