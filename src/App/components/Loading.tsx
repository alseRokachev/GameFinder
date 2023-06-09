import Lottie from "lottie-react";
import AnimationData from '../assets/93857-abstract-modular-cube-1.json'
export const Loading = () => {
	return (
		<div className={'min-h-[90vh] w-full flex items-center justify-center'}>
			<Lottie animationData={AnimationData} className={'w-1/6'}/>
		</div>
	)
}