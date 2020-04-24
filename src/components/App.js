import React from 'react'

import NavBar from './NavBar'
import GifListContainer from '../containers/GifListContainer.js'

// the App component should render out the GifListContainer component 
// https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g

const App = () => {
  return (
    <div>
        < NavBar color='black' title="Giphy Search" />
        < GifListContainer />
    </div>
  )
}

export default App

// export default class App extends React.Component {

//   render() {
//     return (
//       <div>
//           < NavBar color='black' title="Giphy Search" />
//           < GifListContainer />
//       </div>
//     )

//   }
// }
