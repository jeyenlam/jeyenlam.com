import { ReactNode } from "react"

const PageLayout: React.FC<{children: ReactNode}> = ({children}) => {
  return (
    <div className='mt-16 p-2 xl:p-10 flex-col w-full h-full justify-center items-center text-sm sm:text-base'>
      {children}
    </div>
  )
}

export default PageLayout