import Explore from "../components/Explore"
import Header from "../components/Header"
const Home = () => {
  return (
      <>
          <Header />
          <main className="grid text-center place-items-center gap-y-1 px-4 h-screen md:pb-[20vh] md:place-items-end md:text-left md:gap-x-8 md:grid-cols-[1fr_repeat(2,_minmax(0,_30rem))_1fr]">
              {/* First Section */}
              <div className="md:col-start-2 md:col-span-1">
                  <h1 className="text-light text-2xl md:text-4xl lg:text-4xl font-sansCond uppercase tracking-wider">
                      So, you want to travel to
                      <span className="block text-6xl md:text-7xl lg:text-[9.375rem] font-serif text-white mt-5">
                          Space
                      </span>
                  </h1>
                  <p className="text-light max-w-[50ch] mt-4">
                      Let’s face it; if you want to go to space, you might as well genuinely go to
                      outer space and not hover kind of on the edge of it. Well, sit back, and relax
                      because we’ll give you a truly out-of-this-world experience!
                  </p>
              </div>

              {/* Second Section */}
              <div className="md:col-start-3 md:col-span-1 flex justify-center">
                  <Explore title="Explore" />
              </div>
          </main>
      </>



    
  )
}

export default Home