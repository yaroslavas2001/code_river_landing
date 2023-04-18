import TitleBlock from "../../../components/title_block/TitleBlock";
import style from "./ChooseLooksSection.module.css"
// slider item
import BoothsImage from "./../../../assets/image/slider/boots.jpg"
import FaceImage from "./../../../assets/image/slider/face.jpg"
import FootImage from "./../../../assets/image/slider/foot.jpg"
import MountainsImage from "./../../../assets/image/slider/mountains.jpg"
import LongSleveImage from "./../../../assets/image/slider/long_sleeve.jpg"
import Slider from "../../../components/slider/Slider";
let ChooseLooksSection = () => {
    let sliderList = [
        { image: FootImage, alt: "foot code river" },
        { image: LongSleveImage, alt: "long sleeve code river" },
        { image: MountainsImage, alt: "mountains code river" },
        { image: FaceImage, alt: "face code river" },
        { image: BoothsImage, alt: "boots code river" },
        // { image: FootImage, alt: "foot code river" },
        // { image: LongSleveImage, alt: "long sleeve code river" },
        // { image: MountainsImage, alt: "mountains code river" },
        // { image: FaceImage, alt: "face code river" },
        // { image: BoothsImage, alt: "boots code river" },
    ]
    return (
        <TitleBlock title="CHOOSE LOOKS">
            <div className={style.slidebar__block}>
                <Slider sliderList={sliderList} ></Slider>
            </div>
        </TitleBlock>
    );
}

export default ChooseLooksSection;
