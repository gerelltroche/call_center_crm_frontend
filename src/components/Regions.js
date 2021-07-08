import {useEffect, useState} from "react";
import axios from "axios";
import Region from './Region'

const Regions = ({ user }) => {

    const [isloading, setIsLoading] = useState(false)
    const [regions, setRegions] = useState([])

    useEffect(() => {
        const getOwnedRegionHandler = async () => {
            try {
                setIsLoading(true)
                const response = await axios.get(`http://localhost:3000/api/territories/owned/${user.id}`)
                await setRegions(response.data)
                setIsLoading(false)
            } catch (err) {
                console.log(`Error: ${err}`)
                setIsLoading(false)
            }
            setIsLoading(false)
        }
        getOwnedRegionHandler()
    }, [user.id])

    if (isloading) {
        return (
            <div>
                <p>Loading Regions...</p>
            </div>
        )
    }

    return (
        <div>
            {regions ? regions.map((region, ) => {
                return <Region
                    regions={regions}
                    setRegions={setRegions}
                    key={region.id}
                    name={region.territoryName}
                    id={region.id}
                    regionId={region.territoryNumber}
                />
            }) : <p>No regions found.</p>
            }
        </div>
    )
}

export default Regions