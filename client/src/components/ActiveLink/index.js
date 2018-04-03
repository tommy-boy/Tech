import { withRouter } from 'next/router'

const ActiveLink = ({ children, router, href }) => {
    
  const style = {
    color: router.pathname === href? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.87)',
    fontWeight:'bold', 
    textDecoration: 'none',
    whiteSpace: 'nowrap'
  }

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a href={href} onClick={handleClick} style={style}>
      {children}
    </a>
  )
}

export default withRouter(ActiveLink)