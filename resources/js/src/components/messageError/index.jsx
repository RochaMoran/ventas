import React from 'react'

export default function MessageError({error}) {
  return (
    <>
        {
            error && <p className='message-error'>{error}</p>
        }
    </>
  )
}
