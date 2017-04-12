/**
 * created by zhao at 2017-3-20
 */
import * as ActionTypes from '../../../main/reducer/ActionTypes'
import * as helpAction from '../../../../redux/common/helpAction'
let errMsg = "";
let  vail=(obj)=>{
    if(obj.name == ""){
        errMsg = "姓名不能为空";
     }else if(obj.identity == ""){
        errMsg = "身份证号码不能为空";
      }else if(obj.cardNo == ""){
        errMsg = "银行卡号码不能为空";
      }else if(obj.mobile == ""){
         errMsg = "银行卡预留手机号码不能为空";
      }
      if(errMsg!=""){
        MsgBox.alert(errMsg, "提示");
         return;
      }
}

const receiveData = data => ({
    type : ActionTypes.CHEK_INFO,
    data : data
})
//检查四要素信息
export const checkInfo = (obj) => dispatch => {
    vail(obj)
    let url = "userDeblocking/fourElementsVerification";
    dispatch(helpAction.fetchPosts(url, url, {})).then((data)=>{
            dispatch(receiveData(data));
    })
}
