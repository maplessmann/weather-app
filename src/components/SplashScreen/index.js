import Logo from 'images/cloud.svg'

import './SplashScreen.scss'

const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <img className="logo" src={Logo} alt="Logo" />
    </div>
  )
}

export default SplashScreen
