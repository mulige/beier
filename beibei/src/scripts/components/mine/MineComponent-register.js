
import store from '../../redux/store'
import $ from 'jquery'
import  MineComponent  from "./MineComponent"
import  MineComponent_login  from "./MineComponent-login"
import  {connect} from 'react-redux'

class MineComponent_register extends React.Component {
    constructor(props,context) {
        super(props,context)
        this.state ={
            userID:'',
            password:''
        }
    }
    handelClick(){
        let that = this
        $.ajax({
            url:'http://datainfo.duapp.com/shopdata/userinfo.php',
            data:{
                status:'register',
                userID:that.state.userID,
                password:that.state.password
            },dataType:'json',
            success(results){
                console.log(results)
                // that.props.register({name:results.userID})
               if(results==1){
                   alert('注册成功！')
                    window.location.href="#/mine"
               }
               else if(results==0){
                   alert("该用户名已经被注册！")
                   window.location.href="#/mineR"
               }
               else{
                   alert('数据库错误')
                   window.location.href="#/mineR"
               }
            }
        })
    }
    //瓜娃子，改个锤子的value，this贼难弄哟
    // changeUserID(e){
    //     console.log(this)
    //     this.setState({
    //         userID:e.target.value,
    //         password:e.target.value
    //     })
    // }
    changeValue(type,e){
        let obj = {}
        obj[type]=e.target.value
        this.setState(obj)
        
    }  

    render() {
        return (
            <div className="mine_register">
                
                <input onChange={this.changeValue.bind(this,'userID')} type="text" className="userPhoneName" placeholder="请输入手机号"/>
                      <button className="btnFind">获取验证码</button>
                      <label htmlFor="" className="iconfont icon-yinger DL-yzm"></label>
                
                <input type="text" className="userPhonePassword iconfont icon-yinger" placeholder="请输入短信验证码"/>
                      <label htmlFor="" className="iconfont icon-yinger DX-yzm"></label>
                <input onChange={this.changeValue.bind(this,'password')} type="text" className="userYanzheng" placeholder="请设置密码(6-16个字符)"/>
                      <label htmlFor="" className="iconfont icon-yinger SZ-mm"></label>
                <div className="fastBtn"><button onClick={this.handelClick.bind(this)} className="fastLogin">免费注册</button></div>
                <p className="agreement">
                    <h4>注册贝贝,即表示您同意</h4>
                    <h4><span>( 贝贝网使用协议 )和( 社区使用协议 )</span></h4>
                </p>
              
            </div>
        )
    }
}
// const mapStateToProps = (state)=>{
//     return state
// }
// export default connect(mapStateToProps)(MineComponent_register)
export default MineComponent_register