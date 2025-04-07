import { forwardRef } from "react"
// eslint-disable-next-line react/display-name
const Input = forwardRef((props,ref) => {
    return (
        <input type="text" placeholder='Ketik disini...' className="py-5 font-arial text-2xl" ref={ref}/>
    )
});

export default Input