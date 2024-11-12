import React from "react";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import Title from "../../components/Title";
import Label from "../../components/Label";

const Api = () => {

    const params = useParams()
    const url = `https://api.publicapis.org/entries`
    const id = params.id
    const [cleanDataDetail, setcleanDataDetail] = useState([])
      
    useEffect(() => {
        LoaderAllItems(setcleanDataDetail, url, id)
    }, [id, url, setcleanDataDetail])

    
    return (
        <div className="container">
            <Navbar />
            <Title/>
            <Card/>
            <Label/>
        </div>
    )
}