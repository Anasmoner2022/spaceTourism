import Explore from "../components/Explore"
import Header from "../components/Header"
import "../styles/Home.css"
const Home = () => {
  return (
    <div className="max-w-[80em] mx-auto">
        <Header />
        <main className="grid-container">
            <div>
                <h1 className="text-light text-500 font-sansCond uppercase tracking-wider">So, you want to travel to
                <span className="block text-900 sm:text-[9.375rem]  font-serif text-white">Space</span></h1>
                <p>Let’s face it; if you want to go to space, you might as well genuinely go to
                    outer space and not hover kind of on the edge of it. Well sit back, and relax
                because we’ll give you a truly out of this world experience! </p>
            </div>
            <div>
                <Explore title="Explore"></Explore>
            </div>
        </main>
    </div>
  )
}

export default Home