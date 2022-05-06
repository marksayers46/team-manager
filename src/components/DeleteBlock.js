
const deleteTicket = () => {
  console.log('deleted')
}

const DeleteBlock = () => {
  return (
    <div className="delete-block">
      <div className="delete-icon" onClick={deleteTicket}>X</div>
    </div>
  )
}

export default DeleteBlock