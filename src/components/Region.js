import axios from "axios";

const {useState} = require("react");


const Region = ({name, id, link, regionId, regions, setRegions}) => {

    const [isOpen, setIsOpen] = useState(false)

    const openHandler = (e) => {
        e.preventDefault()
        setIsOpen(true)
    }

    const closeHandler = (e) => {
        e.preventDefault()
        setIsOpen(false)
        //needs a confirmation popup.
    }

    const finishHandler = async (e) => {
        e.preventDefault()
        try {

            const response = await axios.put(`http://localhost:3000/api/territories/${id}`, {userId: null})
            if (response.status === 200) {
                let tempRegions = regions.filter((region) => {
                    return region.id !== id;
                })
                setRegions(tempRegions)
            }


        } catch (err) {
            console.log(`Error: ${err}`)
        }
    }

    if (!isOpen) {
        return (
            <div>
                <div>{regionId}</div>
                <div>{name}</div>
                <button onClick={(e) => openHandler(e)}>Open</button>
            </div>
        )
    }

    return (
        <>
            <div>
                <div>{regionId}</div>
                <div>{name}</div>
                <button onClick={(e) => closeHandler(e)}>Close</button>
            </div>
            <div>
                Open Region
                <button onClick={(e) => finishHandler(e)}>Submit</button>
                <button onClick={(e) => finishHandler(e)}>Cancel</button>
            </div>
        </>
    )

}

export default Region