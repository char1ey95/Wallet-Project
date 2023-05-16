import { useSelector } from 'react-redux'
import { MainForm } from '../../common/form'
import { AssetsHeader, AssetsAmounts, AssetsFunctions } from './styled'

export const Assets = () => {
    const account = useSelector(state => state)
    console.log(account)
    return(
        <>
            <AssetsHeader />
            <AssetsAmounts />
            <AssetsFunctions />
        </>
    )
}