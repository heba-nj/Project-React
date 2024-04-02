import './Button.css';
const PrimaryButton = (props) => {
    return (
        <div className="button main-btn">
            <a href="browse.html">{props.children}</a>
        </div>
    )
}
const SecondaryButton = (props) => {
    return (
        <div className="button sec-btn">
            <a href="browse.html">{props.children}</a>
        </div>
    )
}
export default PrimaryButton;
export {SecondaryButton};
