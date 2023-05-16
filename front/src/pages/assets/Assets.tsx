import { AssetsHeader, AssetsAmounts, AssetsFunctions } from "./styled"
import { Popup } from "../../common/popup"
import { useState } from "react"

export const Assets = () => {
	const [open, setOpen] = useState(false)

	return (
		<>
			{open ? <Popup /> : <></>}
			<AssetsHeader setOpen={setOpen} open={open} />
			<AssetsAmounts/>
			<AssetsFunctions />
		</>
	)
}