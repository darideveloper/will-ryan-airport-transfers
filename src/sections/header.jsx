import Logo from '../assets/logo'
import Menu from '../assets/menu'

export default function Header () {

  return (
    <header className="bg-blue pt-6 pb-0 sm:pb-5">
      <div className="container flex flex-col items-center justify-center lg:flex-row lg:justify-between">
        
        <Logo 
          image='logo.png'
          alt='cancun concierge logo'
          width='160px'
        />
        <Menu
          menuItems={[
            {text: "Home", link: "https://cancunconciergedmc.com/en/"},
            {text: "Services", link: "#"},
            {text: "Transportation", link: "#"},
            {text: "Social Responsability", link: "#"},
            {text: "Los Cabos", link: "#"},
          ]}
        />
      </div>
    </header>
  )
}