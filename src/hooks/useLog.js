import React from 'react'

export default function useLog(message, updateArray=[]) {
  React.useEffect(() => {
    console.log(message)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...updateArray])
}
