import TicketCard from '../components/TicketCard'
import axios from 'axios'
import { useState, useEffect, useContext } from "react"


const Dashboard = () => {
  const [tickets, setTickets] = useState(null)

  useEffect(async () => {
    const response = await axios.get('http://localhost:8000/tickets')

    const dataObject = response.data.data

    // taking returned object and returning it in an array
    const arrayOfKeys = Object.keys(dataObject)
    const arrayOfData = Object.keys(dataObject).map((key) => dataObject[key])
    // console.log('arrayOfKeys:', arrayOfKeys)
    // console.log('arrayOfData:', arrayOfData)

    // creating a new array 'formattedArray' so we can re-format the returned array of objects
    const formattedArray = []
    arrayOfKeys.forEach((key, index) => {
      const formattedData = { ...arrayOfData[index]} 
      formattedData['documentId'] = key
      formattedArray.push(formattedData)
      // console.log('formattedArray:', formattedArray)
    })

  }, [])

  const colors = [
    'rgb(186,255,201)',
    'rgb(255,223,186)',
    'rgb(186,255,255)',
    'rgb(255,179,186)',
    'rgb(255,255,186)',
  ]
  
  // Set object lets us store unique property values once from our data
  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category))
  ]
  console.log("Testing Categories:", uniqueCategories)

  return (
    <div className="dashboard">
      <h1>Projects</h1>
      <div className="ticket-container">
        {tickets && uniqueCategories?.map((uniqueCategory, categoryIndex) => (
          <div key={categoryIndex}>
            <h3>{uniqueCategory}</h3>
            {tickets.filter(ticket => ticket.category === uniqueCategory)
              .map((filteredTicket, _index) => (
                <TicketCard 
                  id={_index}
                  color={colors[categoryIndex] || colors[0]}
                  ticket={filteredTicket}
                />
              ))
            }
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dashboard