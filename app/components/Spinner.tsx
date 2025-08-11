import React from 'react'
import { Loader2 } from 'lucide-react'

const Spinner = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-3">
      <Loader2 className="h-8 w-8 animate-spin text-white" />
      <span className="text-white text-2xl font-semibold tracking-widest animate-pulse">
        The Verse ..
      </span>
    </div>
  )
}

export default Spinner
