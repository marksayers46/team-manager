import TicketCard from '../components/TicketCard'


const tickets = [
  {
    category: 'Q1 2022',
    color: "blue",
    title: 'NFT Safety 101 Video',
    owner: 'Mark Sayers',
    avatar: 'https://avatars.githubusercontent.com/u/50345632?v=4',
    status: 'done',
    priority: 5,
    progress: 100,
    description:
      'Make a video showcasing how to work with NFTs safely, including how to know if one is not genuine.',
    timestamp: '2022-02-11T07:36:17+0000',
  },
  {
    category: 'Q1 2022',
    color: 'red',
    title: 'Build and Sell an AI Model',
    owner: 'Mark Sayers',
    avatar: 'https://avatars.githubusercontent.com/u/50345632?v=4',
    status: 'working on it',
    priority: 4,
    progress: 70,
    description:
      'Show how easy it is to work with machine Learning and show people how to make money by building and selling an AI API',
    timestamp: '2022-02-13T07:36:17+0000',
  },
  {
    category: 'Q2 2022',
    color: 'red',
    title: 'My top tools for 2022',
    owner: 'Mark Sayers',
    avatar: 'https://avatars.githubusercontent.com/u/50345632?v=4',
    status: 'stuck',
    priority: 3,
    progress: 35,
    description:
      'Share my top tools for 2022 with everyone in a 15 minute video.',
    timestamp: '2022-02-16T07:36:17+0000',
  },
  {
    category: 'Q2 2022',
    color: 'blue',
    title: 'Frogger in React',
    owner: 'Mark Sayers',
    avatar: null,
    status: '',
    priority: 0,
    progress: 0,
    description:
      'Make a video showing how to build the popular retro game Frogger in React.',
    timestamp: '2022-02-21T07:36:17+0000',
  },
]

const colors = [
  'rgb(255,179,186)',
  'rgb(255,223,186)',
  'rgb(255,255,186',
  'rgb(186,255,201',
  'rgb(186,255,255'
]

const uniqueCategories = [
  ...new Set(tickets?.map(({ category }) => category))
]
console.log(uniqueCategories)

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