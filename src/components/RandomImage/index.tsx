import {useEffect, useState} from 'react';
import {ImageWrap, Image} from './styles';

function getRandomImage() {
	const randomId = Math.trunc(Math.random() * 2000);
	return `https://robohash.org/${randomId}`;
}
const errorImageUrl =
	'https://e7.pngegg.com/pngimages/530/168/png-clipart-adam-sandler-click-film-michael-newman-adam-sandler-hand-click.png';

interface Props {
	name?: string;
	value: string;
	onSetRandomImage: (imageUrl: string) => void;
}
const RandomImage = ({name, value: initValue, onSetRandomImage}: Props) => {
	const [imageUrl, setImageUrl] = useState(initValue);

	const handleRandomImage = () => {
		if (onSetRandomImage) {
			const newImageUrl = getRandomImage();
			onSetRandomImage(newImageUrl);
		}
	};

	const handleErrorImage = () => setImageUrl(errorImageUrl);

	useEffect(() => {
		if (initValue) {
			setImageUrl(initValue);
		}
	}, [initValue]);

	return (
		<ImageWrap>
			<Image
				src={imageUrl || errorImageUrl}
				title="Click to random image url"
				alt="Oops, Maybe the url was broken"
				onClick={handleRandomImage}
				onError={handleErrorImage}
				data-testId={name || imageUrl}
			/>
		</ImageWrap>
	);
};

export default RandomImage;
