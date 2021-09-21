import { useEffect } from 'react'
import { useMoleBusdPrice } from 'hooks/useBUSDPrice'

const useGetDocumentTitlePrice = () => {
  const molePriceBusd = useMoleBusdPrice()
  useEffect(() => {
    const molePriceBusdString = molePriceBusd ? molePriceBusd.toFixed(2) : ''
    document.title = `Mole Swap - ${molePriceBusdString}`
  }, [molePriceBusd])
}
export default useGetDocumentTitlePrice
