import React from 'react'
import  {NavLink} from 'react-router-dom'
//array de links qe se usarán
const links = [
    {url: '/search', text: '🔍 Todo'},
    {url: '/news', text: '📰 Noticias'},
    {url: '/image', text: '📷 Imágenes'},
    {url: '/videos', text: '🎥 Videos'},
]
const Links = () => {
  return (
    <div className="flex sm:justify-around justify-between item-center mt-4">
        {links.map(({url, text})=>(
            <NavLink to={url} className="m-2 mb-0" activeClassName="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2">
                {text}
            </NavLink>
        ))}
    </div>
  )
}

export default Links