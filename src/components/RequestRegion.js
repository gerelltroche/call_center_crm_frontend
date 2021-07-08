const RequestRegion = ({ id, request, setRequest }) => {

    const requestHandler = (e) => {
        e.preventDefault()
        setRequest('pending')
        console.log()
    }

    const cancelRequestHandler = (e) => {
        e.preventDefault()
        setRequest('idle')
    }

    const acceptConfirmationHandler = (e) => {
        e.preventDefault()
        setRequest('idle')
    }

    if (request === 'idle') {
        return (
            <button onClick={(e) => {requestHandler(e)}}>Request Region</button>
        )
    }

    if (request === 'pending') {
        return (
            <div>
                <p>Your request for more territories is currently pending.</p>
                <button onClick={(e) => {cancelRequestHandler(e)}}>Cancel Request</button>
            </div>
        )
    }

    if (request === 'accepted') {
        return (
            <div>
                <p>Your request for more territories was accepted.</p>
                <button onClick={(e) => {acceptConfirmationHandler(e)}}>Ok</button>
            </div>
        )
    }
}

export default RequestRegion