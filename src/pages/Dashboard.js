import TicketCard from '../components/TicketCard'


const colors = [
  'rgb(186,255,201)',
  'rgb(255,223,186)',
  'rgb(186,255,255)',
  'rgb(255,179,186)',
  'rgb(255,255,186)',
]

// dummy data
const tickets = [
  {
    category: 'Q1 2022',
    color: "blue",
    title: 'Team-Manager',
    owner: 'Mark Sayers',
    avatar: 'https://avatars.githubusercontent.com/u/50345632?v=4',
    status: 'done',
    priority: 5,
    progress: 100,
    description:
      'Control team projects & check/update status',
    timestamp: '2022-02-11T07:36:17+0000',
  },
  {
    category: 'Q1 2022',
    color: 'red',
    title: 'React Grocery List',
    owner: 'Mark Sayers',
    avatar: 'https://avatars.githubusercontent.com/u/50345632?v=4',
    status: 'stuck',
    priority: 4,
    progress: 70,
    description:
      'Not your every day todo list app, built to be more dynamically UI/UX friendly.',
    timestamp: '2022-02-13T07:36:17+0000',
  },
  {
    category: 'Q2 2022',
    color: 'red',
    title: 'Delicious',
    owner: 'Mark Sayers',
    avatar: 'https://avatars.githubusercontent.com/u/50345632?v=4',
    status: 'working on it',
    priority: 3,
    progress: 80,
    description:
      'More than just a recipe app! We provide solutions to make any food-related vision a reality.',
    timestamp: '2022-02-16T07:36:17+0000',
  },
  {
    category: 'Q2 2022',
    color: 'blue',
    title: 'Personal Portfolio',
    owner: 'Mark Sayers',
    avatar: null,
    status: '',
    priority: 0,
    progress: 100,
    description:
      'Portfolio built with JavaScript/jQuery.',
    timestamp: '2022-02-21T07:36:17+0000',
  },
]

// Set object lets us store unique property values once from our above hard coded data
const uniqueCategories = [
  ...new Set(tickets?.map(({ category }) => category))
]
console.log("Testing Categories:", uniqueCategories)

const Dashboard = () => {

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