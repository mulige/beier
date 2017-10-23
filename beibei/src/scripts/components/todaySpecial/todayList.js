import $ from 'jquery'

class Todaliat extends React.Component{
    constructor(props,context) {
        super(props,context)
        this.state={
            goods:[],
            good:[],
        }
    } 
    today_listGetItem(){
        let that=this
        let arr=[]
        $.ajax({
            url:"http://sapi.beibei.com/item/category-1.html?callback=BeibeiItemCategoryGet",
            data:"GET",
            dataType:"jsonp",
            jsonpCallback:"BeibeiItemCategoryGet",
            success:function(result){
                result.main_categorys.forEach((item,i)=>{
                    arr.push(result.main_categorys[i])
                })
                that.setState({
                    goods:arr,
                })
                // console.log(good)
                // console.log(arr)
                // console.log(result)
            }
            })
        }
        todayListShowItem(){
            let items=[]
            let good=[]
            this.state.goods.forEach((item,i)=>{
                items.push(
                    <div className="today_list-listLogs">
                        <div className="today_list-title">{this.state.goods[i].category_name}</div>
                       
                        </div>
                
                        )
                    item.subdivision_categorys.forEach((item1,i)=>{
                        
                            items.push(
                                <div className="today_list-content">
                                <a href="#" className="today_list-content-item">
                                    <img src={item1.img} alt=""/>
                                    <p>{item1.title}</p>
                                </a>
                                </div>
                            )
                        
                        })
            })
            return items
        }
    render() {
        return (
                <div>
                    <div className="today_list-headerSearch">
                        <span className="iconfont icon-sousuo2-my001 "></span>
                        <input type="text" placeholder="发现你喜欢的商品"/>
                    </div>
                    {this.todayListShowItem()}
                </div>
        )   
    }
    componentWillMount(){
        this.today_listGetItem()
    }
}

export default Todaliat