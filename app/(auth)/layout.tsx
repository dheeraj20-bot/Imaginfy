import React from 'react'

const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <main className='auth text-4xl'>
        {children}
    </main>
  )
}

export default Layout