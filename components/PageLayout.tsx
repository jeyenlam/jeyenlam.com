import { ReactNode } from "react"

const PageLayout: React.FC<{children: ReactNode}> = ({children}) => {
  return (
    <div className='lg:my-28 flex justify-center text-sm lg:text-sm'>
      {children}
    </div>
  )
}

export default PageLayout