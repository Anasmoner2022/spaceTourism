import Logo from "./Logo"
import Tabs from "./Tabs"

const Header = () => {
  return (
      <header className="primary-header flex">
          <Logo />
          <nav>
            <Tabs />
          </nav>
        </header>
  )
}

export default Header