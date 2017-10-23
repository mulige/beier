import Jsonp from "jsonp";

import { Link } from "react-router";

import DetailSub from "./detail__sub";
class Detail extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      detail_info: "",
      resttime: "",
      tuan__info: []
    };
  }
  render() {
    let pri = ""; //价格
    let oldpri = ""; //原价
    let bgurl = ""; //背景图片
    let duanluo = ""; //标题下面的介绍
    let nicksrc = ""; //用户的头像
    let nickname = ""; //用户名
    let nickadress = ""; //地址
    let nicknum = ""; //人数
    let nickbtn = ""; //按钮的信息
    let nickTitle = "";
    let nickendtime = "";
    let bottomprice = "";
    let requieNum = "";
    let dinfo = "";
    if (this.state.detail_info) {
      dinfo = this.state.detail_info;
      pri = dinfo.pintuan_area_info.group_price;
      oldpri = dinfo.origin_price;
      bgurl = dinfo.future_title_icon.icon;
      duanluo = dinfo.desc;
      bottomprice = dinfo.price;
    }
    if (this.state.tuan__info.recom_fightgroups) {
      // console.log(this.state.tuan__info.count!=0)
      // console.log(this.state.tuan__info.recom_fightgroups[0].nick)
      nicksrc = this.state.tuan__info.recom_fightgroups[0].avatar;
      nickname = this.state.tuan__info.recom_fightgroups[0].nick;
      nickadress = this.state.tuan__info.recom_fightgroups[0].address;
      nicknum = this.state.tuan__info.recom_fightgroups[0].member_num_left;
      nickbtn = this.state.tuan__info.recom_fightgroups[0].button_tip;
      nickTitle = this.state.tuan__info.recom_title;
      nickendtime = this.state.tuan__info.recom_fightgroups[0].gmt_end;
      requieNum = this.state.tuan__info.recom_fightgroups[0].require_num;
    }

    return (
      <div className="detail__box">
        {/**/}
        {/*这里是详情页上面的图片的位置*/}
        <div className="detail__banner">
          <ul className="swiper-wrapper">{this.showDetailBanner()}</ul>
          <div className="swiper-pagination" />
        </div>
        {/*下面的介绍*/}
        <div className="detail__info">
          {/*价格位置的数据*/}
          <div className="detail__price">
            <p>
              ￥<span className="price__show">{this.formatNum(pri)[0]}</span>
              {this.formatNum(pri)[1]}
              <s>￥{this.formatNum(oldpri)[0]}</s>
              {this.showDetailYou()}
            </p>
            {/*时间信息*/}
            <p>
              {this.state.detail_info ? (
                <span>{this.getRestTime(this.state.detail_info.gmt_end)}</span>
              ) : (
                <span />
              )}
              <span style={{ float: "right" }}>
                {this.state.detail_info.sold_num}
                {this.state.detail_info.sold_num_text}
              </span>
            </p>
          </div>
          <h3 className="detail__title">
            <span
              className="title__bg"
              style={{
                backgroundImage: "url(" + bgurl + ")  ",
                backgroundSize: "contain",
                backgroundPosition: "left center"
              }}
            />
            {this.state.detail_info.title}
          </h3>
          <p className="detail__desc">{duanluo}</p>
          {/*下面的关于团购的信息*/}
          <div className="tuan__info">
            <p className="tuan__info--title">{nickTitle}</p>
            <div className="taun__info--user">
              <div className="tuan__user--nick">
                <img src={nicksrc} />
                <span>
                  <b>{nickname}</b>
                  <i>{nickadress}</i>
                </span>
              </div>
              <div className="tuan__user--num">
                <div className="num__left">
                  <span>
                    仅差<b style={{ color: "#ff4965" }}>{nicknum}</b>人成团
                  </span>
                  {this.state.tuan__info ? (
                    <span>剩余{this.getRestTime(nickendtime, 1)}</span>
                  ) : (
                    ""
                  )}
                </div>

                <button type="button">{nickbtn}</button>
              </div>
            </div>
            {/*是否满足开团的要求*/}
            <p style={{ backgroundColor: "#fff" }}> 开团后邀请好友参团，人数不足自动退款</p>
            {/*承诺*/}
            <div className="detail__promise">{this.showPromise()}</div>
          </div>
        </div>
        {/*店家的信息*/}
        {this.state.detail_info.wpshop_detail ? (
          <div className="detail__sellInfo">
            <h3
              className="detail__sellInfo--title"
              style={{
                backgroundImage:
                  "url(" + dinfo.wpshop_detail.wpshop_avatar + ")"
              }}
            >
              {this.state.detail_info.wpshop_detail.wpshop_name}
            </h3>
            <div className="detail__sellInfo--info">
              <div className="detailInfo__left">
                <p>
                  <span>{dinfo.wpshop_detail.wpshop_counts[0].desc}</span>
                  <span>{dinfo.wpshop_detail.wpshop_counts[0].title}</span>
                </p>
                <p>
                  <span>{dinfo.wpshop_detail.wpshop_counts[1].desc}</span>
                  <span>{dinfo.wpshop_detail.wpshop_counts[1].title}</span>
                </p>
                <p>
                  <span>{dinfo.wpshop_detail.wpshop_counts[2].desc}</span>
                  <span>{dinfo.wpshop_detail.wpshop_counts[2].title}</span>
                </p>
              </div>
              <ul className="detailInfo__right">
                <li>
                  {dinfo.wpshop_detail.wpshop_rates[0].title}
                  <span
                    style={{ color: dinfo.wpshop_detail.wpshop_rates[0].color }}
                  >
                    {dinfo.wpshop_detail.wpshop_rates[0].rate}
                  </span>
                  <span
                    style={{ color: dinfo.wpshop_detail.wpshop_rates[0].color }}
                  >
                    {dinfo.wpshop_detail.wpshop_rates[0].level}
                  </span>
                </li>
                <li>
                  {dinfo.wpshop_detail.wpshop_rates[1].title}
                  <span
                    style={{ color: dinfo.wpshop_detail.wpshop_rates[1].color }}
                  >
                    {dinfo.wpshop_detail.wpshop_rates[1].rate}
                  </span>
                  <span
                    style={{ color: dinfo.wpshop_detail.wpshop_rates[1].color }}
                  >
                    {dinfo.wpshop_detail.wpshop_rates[1].level}
                  </span>
                </li>
                <li>
                  {dinfo.wpshop_detail.wpshop_rates[2].title}
                  <span
                    style={{ color: dinfo.wpshop_detail.wpshop_rates[2].color }}
                  >
                    {dinfo.wpshop_detail.wpshop_rates[2].rate}
                  </span>
                  <span
                    style={{ color: dinfo.wpshop_detail.wpshop_rates[2].color }}
                  >
                    {dinfo.wpshop_detail.wpshop_rates[2].level}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          ""
        )}

        {/*下面的详情
           {
            this.state.detail_info?<DetailSub info={this.state.detail_info}/>:""
           }*/}


        {/*底部的内容*/}
        <footer className="detail__footer">
          <div className="detail__footer--link">
            <Link>
              <span className="iconfont icon-shoucang" />
              <span>收藏</span>
            </Link>
            <Link>
              <span className="iconfont icon-yingerche" />
              <span>购物车</span>
            </Link>
          </div>
          <div className="detail__footer--btn">
            <div className="detail__old--price">
              <span>
                ￥<span>{this.formatNum(bottomprice)[0]}</span>
                {this.formatNum(bottomprice)[1]}
              </span>
              <span>单独购买</span>
            </div>
            <div className="detail__tuan--price">
              <span className="bigandSmallprice">
                ￥<span>{this.formatNum(pri)[0]}</span>
                {this.formatNum(pri)[1]}
              </span>
              <span className="detail__tuan--num">
                <span>{requieNum}</span>人团
              </span>
            </div>
          </div>
        </footer>
      </div>
    );
  }

  //求剩余的时间的函数
  getRestTime(endTime, type) {
    let nowTime = Date.now();
    let day = new Date(endTime * 1000 - nowTime).getDay();
    let hour = new Date(endTime * 1000 - nowTime).getHours();
    let min = new Date(endTime * 1000 - nowTime).getMinutes();
    let sec = new Date(endTime * 1000 - nowTime).getSeconds();
    if (String(hour).length < 2) {
      hour = "0" + hour;
    }
    if (String(min).length < 2) {
      min = "0" + min;
    }
    if (String(sec).length < 2) {
      sec = "0" + sec;
    }

    let resttime = day + "天" + hour + "小时" + min + "分" + sec + "秒后结束";
    let resttime1 = hour + ":" + min + ":" + sec;
    if (type) {
      return resttime1;
    }
    return resttime;
  }

  //promise里面的数据
  showPromise() {
    let promise = this.state.detail_info.platform_show_promises;
    let arr = [];
    if (promise) {
      promise.forEach((item, i) => {
        if (i > 3) {
          return;
        }
        arr.push(
          <span className="detail__promise--item">
            <i style={{ backgroundImage: "url(" + item.icon + ")" }} />
            {item.text}
          </span>
        );
      });
    }

    return arr;
  }

  //获取当前页面商品的数据的数据的函数
  getDetailList() {
    let that = this;

    let iid = this.props.location.query.iid;

    $.ajax({
      url:
        "http://sapi.beibei.com/item/detail/v1/" +
        iid +
        ".html?callback=BeibeiItemDetailV1Get",
      data: "GET",
      dataType: "jsonp",
      jsonpCallback: "BeibeiItemDetailV1Get",
      success: function(results) {
        that.setState({
          detail_info: results
        });
      }
    });
  }
  formatNum(num) {
    let num1 = String(num / 100);
    if (num1.indexOf(".") > -1) {
      let arr = num1.split(".");
      arr[1] = "." + arr[1];
      return arr;
    } else {
      let arr = [];
      arr.push(num1);
      arr.push("");
      return arr;
    }
  }

  //获取详细信息里面的参与团购的人数

  getTuanInfo() {
    let that = this;

    let iid = this.props.location.query.iid;
    $.ajax({
      url:
        "http://dsapi.beibei.com/fightgroup/visitor_recom/" +
        iid +
        "-1.html?callback=BeibeiFightgroupRecommendGet",
      data: "GET",
      dataType: "jsonp",
      jsonpCallback: "BeibeiFightgroupRecommendGet",
      success: results => {
        that.setState({
          tuan__info: results
        });
      }
    });
    
  }

  //显示图片的位置
  showDetailBanner() {
    let arr = [];
    let imgs = this.state.detail_info.detail_imgs;
    if (imgs) {
      imgs.forEach(img => {
        arr.push(
          <li className="swiper-slide">
            <a>
              <img src={img} />
            </a>
          </li>
        );
      });
    }
    return arr;
  }

  //下面的包邮的信息

  showDetailYou() {
    let arr = [];
    if (this.state.detail_info) {
      let info__you = this.state.detail_info.detail_labels;

      info__you.forEach(item => {
        arr.push(
          <span className="you__info" style={{ backgroundColor: "#FF4965" }}>
            {item}
          </span>
        );
      });
    }
    return arr;
  }

  //在这里对swiper进行实例化
  componentDidMount() {
    this.getDetailList();
    this.getTuanInfo();
    this.state.swiper = new Swiper(".detail__banner", {
      // freeMode : false,
      // slidesPerView : 'auto',
      // freeModeSticky : true ,
      updateOnImagesReady: true,
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true, //修改swiper的父元素时，自动初始化swiper
      pagination: ".swiper-pagination"
    });
  }
  componentDidUpdate() {
    this.state.swiper.update();
    //对swiper进行刷新，防止不能拉动的问题
  }
}

export default Detail;
