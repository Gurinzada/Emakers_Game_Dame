import { useState } from 'react'

const usePasswordToggle = () => {
    const [type, setType] = useState<string>("password")

    const focusInputPassword = () => {
        setType('text')
    }

    const blurPassword = () => {
        setType('password')
    }

    return { type, focusInputPassword, blurPassword }
}

export default usePasswordToggle
