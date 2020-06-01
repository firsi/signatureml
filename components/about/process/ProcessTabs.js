import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import SwipeableViews from "react-swipeable-views"

import { ContentStrategy } from "./ContentStratgy"
import { DesignStrategy } from "./DesignStrategy"
import { Assurance } from "./Assurance"

export const ProcessTabs = () => {
    const [index, setIndex] = React.useState(0);

    const handleChange = (event, value) => {
        setIndex(value);
    }
    const handleChangeIndex = (index) => {
        setIndex(index)
    }
    return (<>
        <Tabs value={index} onChange={handleChange} >
            <Tab label="Content Strategy" />
            <Tab label="Design Strategy" />
            <Tab label="Assurance qualité" />
        </Tabs>
        <SwipeableViews index={index} onChangeIndex={handleChangeIndex}>
            <ContentStrategy />
            <DesignStrategy />
            <Assurance />
        </SwipeableViews>
    </>)
}
