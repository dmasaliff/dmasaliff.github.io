/* eslint-disable react/prop-types */
function Title(props) {
    return(
    <h1 className="py-5 font-bold font-arial text-4xl">Halo {props.name} Anda masuk ke halaman {props.page}</h1>
    )  
}

export default Title