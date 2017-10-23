


class EmptyCompontent extends React.Component{
    constructor(props,context) {
        super(props,context)
        this.state ={

        }
    }
    render() {
        return(
            <div className="EmptyCarshow">
                <img src="https://b0.hucdn.com/party/2016/8/upload_7557af7a9f322613d77290d8c9a72a8a_208x213.png" alt=""/>
                <p>购物车空空如也，快来挑好货吧</p>
            </div>
        )
        
        

    }
}
export default EmptyCompontent