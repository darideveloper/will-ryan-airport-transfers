import CancunLogo from '../assets/cancun-logo'
import Menu from '../assets/menu'

export default function Header () {
  return (
    <header className="bg-blue pt-6 pb-0 sm:pb-5">
      <div className="container flex flex-col items-center justify-center lg:flex-row lg:justify-between">
        
        <CancunLogo />
        <Menu
          menuItems={[
            {text: "Home", link: "#"},
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