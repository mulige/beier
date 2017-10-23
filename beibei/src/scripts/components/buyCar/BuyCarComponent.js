
import EmptyCar from "./EmptyCar"

import  Navsfooter  from "../NavsFooter"

class BuyCarComponent extends React.Component {
    constructor(props,context) {
        super(props,context)
        this.state ={

        }
    }
    render() {
        return (
            <div className="buycar">

                <EmptyCar />
                <Navsfooter color="/buycar"/> 
            </div>
        )
    }
}

export default BuyCarComponent