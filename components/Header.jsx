import { useTheme } from "../hooks/useTheme"

export default function Header() {
  const [isDark, setIsDark] =  useTheme()
  
  return (
    <header className={`header-container ${isDark? 'dark': ''}`}>
      <div className="header-content">
        <h2 className="title">
          <a href="/">
          <i class="fa-solid fa-globe"></i> &nbsp;
          CountriesPedia
          </a>
        </h2>
        <p className="theme-changer" onClick={() => {
          setIsDark(!isDark)
          localStorage.setItem('isDarkMode', !isDark)
        }}>
          <i className={`fa-solid fa-${isDark ? 'sun': 'moon'}` }/>
          &nbsp;&nbsp;{isDark? 'Light': 'Dark'} Mode
        </p>
      </div>
    </header>
  )
}
