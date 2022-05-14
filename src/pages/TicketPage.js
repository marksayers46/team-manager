import { useState } from 'react'


const TicketPage = () => {
  const [formData, setFormData] = useState({
    status: 'not started',
    progress: 0,
    timestamp: new Date().toISOString()
  })

const editMode = false

const categories = ['test1', 'test2', 'test3', 'test4']

const handleSubmit = (e) => {
  e.preventDefault()
  console.log('submitted')
}

const handleChange = (e) => {
  const value = e.target.value
  const name = e.target.name 

  setFormData((prevState) => ({
    ...prevState,
    [name]: value
    })
  )
} 
console.log(formData)

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

            <label htmlFor="description">Description</label>
            <input 
              id="description"
              type="text"
              name="description"
              onChange={handleChange}
              required={true}
              value={formData.description}
            />

            <label>Category</label>
            <select 
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              {categories?.map((category, _index) => (
                <option key={_index} value={category}>{category}</option>
              ))}
            </select>

            <label htmlFor="new-category">New Category</label>
            <input 
              id="new-category"
              type="text"
              name="category"
              onChange={handleChange}
              required={true}
              value={formData.category}
            />

            <div className="multiple-input-container">
            <label>Priority</label>
              <input 
                id="priority-1"
                name="priority"
                type="radio"
                onChange={handleChange}
                value={1}
                checked={formData.priority === 1} 
              />
              <label htmlFor="priority-1">1</label>
              
              <input 
                id="priority-2"
                name="priority"
                type="radio"
                onChange={handleChange}
                value={2}
                checked={formData.priority === 2} 
              />
              <label htmlFor="priority-2">2</label>
              
              <input 
                id="priority-3"
                name="priority"
                type="radio"
                onChange={handleChange}
                value={3}
                checked={formData.priority === 3} 
              />
              <label htmlFor="priority-3">3</label>
              
              <input 
                id="priority-4"
                name="priority"
                type="radio"
                onChange={handleChange}
                value={4}
                checked={formData.priority === 4} 
              />
              <label htmlFor="priority-4">4</label>
              
              <input 
                id="priority-5"
                name="priority"
                type="radio"
                onChange={handleChange}
                value={5}
                checked={formData.priority === 5} 
              />
              <label htmlFor="priority-5">5</label>
            </div>
            
            {editMode &&
            <>
            <input
              type="range"
              id="progress"
              name="progress"
              value={formData.progress}
              min="0"
              max="100"
              onChange={handleChange}
            />
            <label htmlFor="progress">Progress</label>
            

            <label>Status</label>
            <select
              name="status"
              value={formData.status}
              handleChange={handleChange}
            >
              <option value="done">Done</option>
              <option value="working on it">Working on it</option>
              <option value="stuck">Stuck</option>
              <option value="not started">Not Started</option>
            </select>
            </>
            }

            <input type="submit"/>
          </section>

          <section>
            <label htmlFor="owner">Owner</label>
            <input 
              
            />
          </section>

        </form>
      </div>
    </div>
  )
}

export default TicketPage