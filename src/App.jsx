import React, { useCallback, useRef } from "react";


function App() {
    let [password, setPassword] = React.useState(8)
    let [passwordLength, setPasswordLength] = React.useState(8);

    const handleLengthIncrese = (e) => {
        e.preventDefault()

        setPasswordLength(passwordLength + 1)
    }

    const handleLengthDecrese = (e) => {
        e.preventDefault()
        if (passwordLength === 8) return;

        setPasswordLength(passwordLength - 1)
    }

    //  ************ UseCallback Hook ************
    const handlePasswordGererate = React.useCallback(() => {
        const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*_-"
        let pass = ""
        for (let i = 0; i < passwordLength; i++) {
            pass = pass + chars[Math.floor(Math.random() * chars.length)]
        }
        setPassword(pass)
    }, [passwordLength])

    //   ************ UseRef Hook ************
    const passwordRef = React.useRef(null)

    const copyPasswordToClipboard = useCallback(() => {
        passwordRef.current?.select();
        window.navigator.clipboard.writeText(password)
    }, [password])


    //   ************ UseEffect Hook ************
    React.useEffect(() => {
        handlePasswordGererate()
    }, [passwordLength])

    return (
        <>

            <div className="h-auto w-full max-w-lg mx-auto shadow-md rounded-lg bg-gray-900 shadow-lg pt-6 mt-12 py-16 shadow-gray-500/50 justify-center flex-col  

            bg-[url(/img/logo.png)] bg-[auto_150px] bg-no-repeat bg-top bg-center h-screen w-screen ">


                <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 mt-32 bg-gray-900 shadow-lg shadow-gray-500/20 justify-center flex-col">

                    <h1 className='text-white text-center text font-bold text-3xl h-10 mb-4 '>
                        Password Generator </h1>

                    <div className='flex shadow rounded-lg overflow-hidden mb-4 flex items-center justify-center flex-col gap-y-5 '>
                        <input type="text" className='h-10 w-96 bg-gray-400 outline-none border border-slate-800 rounded-lg px-5 text-center' value={password} placeholder="Password" readOnly
                            ref={passwordRef}
                        />


                        <button
                            onClick={copyPasswordToClipboard}
                            className='rounded-lg outline-none hover:bg-slate-500 bg-slate-700 text-white px-3 py-0.5 shrink-0'>Copy</button>


                        <div className='flex items-center justify-center gap-x-2'>
                            <button className='h-10 px-5 text-xl font-bold bg-slate-700 hover:bg-slate-500 text-slate-200 rounded-lg outline-none' onClick={handleLengthIncrese}>+</button>
                            <input type="text" className='h-10 px-5 bg-gray-400 text-center outline-none border border-slate-800 rounded-lg' value={passwordLength} readOnly />
                            <button className='h-10 px-5 text-xl font-bold bg-slate-700 hover:bg-slate-500 text-slate-200 rounded-lg outline-none' onClick={handleLengthDecrese}>-</button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default App