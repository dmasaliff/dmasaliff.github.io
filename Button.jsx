/* eslint-disable react/prop-types */
function Button(props) {
    return (
    <button className="p-3 px-6 text-xl rounded mt-5" onClick={props.onClick}>{props.button}</button>
    )
}

export default Button