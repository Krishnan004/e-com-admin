import React from 'react'
import {Link} from 'react-router-dom'

const Notify = ({notify, setNotify }) => {
    return (
        <div>
            {notify&&
            <div className="p-4 flex flex-col items-center fixed top-0 left-1/2 z-10 bg-white border border-black rounded-xl">
                <p className="text-xl">You are not authenticate ? </p>
                <div className="flex gap-2">
                    <button id="button" onClick={()=>setNotify(false)}>cancel</button>
                    <Link to="/login">
                    <button id="button">login</button>
                    </Link>
                </div>
            </div>
            }
        </div>
    )
}

export default Notify
