import React from 'react'

export const metadata = {
    title: "Property Pulse | Find The Perfect Rental",
    description: "Find your dream rental property",
    keywords: "Rental, find rentals, find properties"
};

const MainLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <div>{children}</div>
      </body>
    </html>
  )
};

export default MainLayout;