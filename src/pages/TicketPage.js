
const TicketPage = () => {

const editMode = false

  return (
    <div className="ticket">
      <h1>{editMode ? 'Update Ticket' : 'Create Ticket'}</h1>
    </div>
  )
}

export default TicketPage