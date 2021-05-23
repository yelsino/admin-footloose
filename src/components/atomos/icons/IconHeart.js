import { BsFillHeartFill } from "react-icons/bs";
const IconHeart = (props) => {
	return (
		<BsFillHeartFill
			className={`text-gray-300  text-2xl hover:text-primario-red cursor-pointer  ${
				props.style ? props.style : ""
			}`}
		></BsFillHeartFill>
	);
};

export default IconHeart;
