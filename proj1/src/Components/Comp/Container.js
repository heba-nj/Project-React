import './Container.css';

const Container = (props) => {
    return (
        <div className='container main-con'>{props.children}</div>
    )
}
export default Container;