import { cn } from '@/lib/utils'
import React, { HTMLAttributes } from 'react'

interface PhoneProps extends HTMLAttributes<HTMLDivElement>{
    imgSrc: string
    dark?: boolean
}
const Phone = ({ imgSrc, className, dark = false, ...props }: PhoneProps) => {
  return (
    <div className={cn("relative pointer-eventd-none z-50 overflow-hidden", className)}  {...props}>
        <img src={dark ? "/phone-template-dark-edges.png"
            : "/phone-template-white-edges.png"
        } alt="phone img" />
        <div className='absolute -z-10 inset-0'>
            <img src={imgSrc} alt="overlay img" />

        </div>
    </div>
  )
}

export default Phone