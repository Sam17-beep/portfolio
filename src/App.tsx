import styles from './App.module.css'
import Header from './components/Header/Header'
import Body from './components/Body/Body'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className={styles.background}>
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default App
