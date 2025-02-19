import { ReactNode } from "react"

const PageLayout: React.FC<{children: ReactNode}> = ({children}) => {
  return (
    <div className='pt-10 sm:pt-auto sm:pl-20 mt-16 px-4 flex-col w-full h-full justify-center items-center text-sm sm:text-base'>
      {children}
    </div>
  )
}

export default PageLayout