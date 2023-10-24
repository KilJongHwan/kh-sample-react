// Component 합성 : 여러 개의 컴포넌트를 조합하여 하나의 컴포넌트를 만드는 것
import image from "./images/images.jpg";

function Heading(props) {
    return <h1>{props.text}</h1>
}
function Paragraph(props) {
    return <p>{props.text}</p>
}
function ImgUrl(props) {
    // eslint-disable-next-line jsx-a11y/img-redundant-alt
    return <img style={{height: "300px"}} src={image} alt="image test"/>
}

const Section = (props) => {
    return (
        <>
            <Heading text = {props.title}/>
            <Paragraph text = {props.content}/>
            <ImgUrl url={props.url}/>
        </>
    );
}

export default Section;