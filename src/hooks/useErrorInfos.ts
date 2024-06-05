import { useState } from "react"

const useErrorInfos = () => {
    const [showError, setShowError] = useState<boolean>(false)

    return {showError, setShowError}
}

export default useErrorInfos