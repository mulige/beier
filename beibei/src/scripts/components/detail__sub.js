


class DetailSub extends React.Component{
    constructor(props,context) {
        
        super(props,context)
        this.state = {

        }
    }
    render() {
        return (
            <div className="detail__info--show">
            
                <div id="detail__size--info"></div>
                <div id="detail__img--info"></div>
            </div>
        )
    }
    componentDidMount(){
        document.getElementById("detail__size--info").innerHTML = this.props.info.detail_html.props
        document.getElementById("detail__img--info").innerHTML = this.props.info.detail_html.desc
    }
    
}


  export default DetailSub