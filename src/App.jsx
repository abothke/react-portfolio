import './App.css'
import Button from './assets/components/button/Button'
import Header from './assets/components/header/Header'
import CardElement from './assets/components/cardelement/CardElement'
import Footer from './assets/components/footer/Footer'
import Tile from './assets/components/tiles/Tile'

function App() {
  return (
    <>
    <Header/>
    <main>
    <div id='hero-text' className='flex-center-center column'>
    <h2>Hi, I am <span>John Smith</span></h2>
    <h3>A Front End Developer</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt recusandae, consequuntur natus dignissimos accusantium nam suscipit numquam facilis voluptates obcaecati?</p>
    </div>
    <Button
    title='resume'
    section='#resume'
    />
    <h2>Projects</h2>
    <div id="cards">
    <CardElement
    title='Project 1'
    desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, provident.'
    highlight='JavaScript React Sass'
        />
  <CardElement
    title='Project 2'
    desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, provident.'
    highlight='JavaScript React Sass'
        />
          <CardElement
    title='Project 3'
    desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, provident.'
    highlight='JavaScript React Sass'
        />
        </div>
        <h2>Skills</h2>
        <div id='skills' className='flex-center-center'>
          <Tile
          skill='HTML'
          />
          <Tile
          skill='css'
          />
          <Tile
          skill='JavaScript'
          />
          <Tile
          skill='React'
          />
          <Tile
          skill='SASS'
          />
          <Tile
          skill='Tailwind CSS'
          />
          <Tile
          skill='Git'
          />
          <Tile
          skill='UX/UI'
          />
        </div>
        <h2>Contact</h2>
        <Button
        title='email me'
        />
    </main>
    <Footer/>
    </>
  )
}

export default App
