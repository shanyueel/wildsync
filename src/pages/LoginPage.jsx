import styled from "styled-components"
import { useDispatch } from "react-redux"
import { setPathname } from "reducers/pathnameSlice"

import StyledNavbar from "components/StlyedNavbar"
import StyledFooter from "components/StyledFooter"
import StyledTextInput from "components/StyledTextIpnut"
import StyledButton from "components/StyledButton"
import StyledTextLink from "components/StyledTextLink"

import {ReactComponent as WildSyncLogo} from "assets/icons/WildSyncLogo.svg"
import loginImage from "assets/images/loginImage.png"

const LoginPage = ({className})=>{
  const dispatch = useDispatch();
  dispatch(setPathname())

  return(
    <div className={className}>
      <StyledNavbar />
      <div className="l-web-container">
        <div className="l-login-area">
          <div className="l-login-area__main">
            <div className="l-login-area__title">
              <WildSyncLogo className="o-login-area__logo"/>
              <h1 className="o-login-area__brand">Wild Sync</h1>
            </div>
            <div className="l-login-area__input">
              <StyledTextInput title='信箱' placeholder="請輸入信箱"/>
              <StyledTextInput title='密碼' placeholder="請輸入密碼"/>
              <StyledButton className="o-login-area__button" title="登入"/>
              <StyledTextLink className="o-login-area__register-link" text="尚未註冊?" destination="/register" />
            </div>
          </div>
          <div className="l-login-area__image">
          </div>
        </div>
      </div>
      <StyledFooter/>
    </div>

  )
}

const StyledLoginPage = styled(LoginPage)`
  .l-login-area{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 90%;
    height: 34rem;
    margin: 0 auto;
    border-radius: .5rem;

    
    .l-login-area__main{
      padding: 4rem 2.5rem;

      .l-login-area__title{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 2rem;

        .o-login-area__logo{
          width: 8rem;
          fill: ${({theme}) => theme.color.default};
        }
        .o-login-area__brand{
          margin-top: 1rem;
          font-size: 2rem;
          color: ${({theme}) => theme.color.default};
        }
      }

      .l-login-area__input{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;

        .o-login-area__button{
          margin-top: 1.5rem;
        }

        .o-login-area__register-link{
          margin-top: 1.5rem;
          line-height: 2rem;
          color: ${({theme})=>theme.color.default};
          text-decoration: underline;
        }
      }
    }
    
    .l-login-area__image{
      display: none;
    }
  }

  @media screen and (min-width: 768px) {
    .l-login-area{
      display: flex;
      height: 36rem;
      width: 85%;
      box-shadow: 0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1);
      background-color: ${({theme}) => theme.backgroundColor.default};
      .l-login-area__main{
        width: 45%;

        .l-login-area__title{
          margin-bottom: 2.5rem;
        }
      }

      .l-login-area__image{
        width:55%;
        background-image: url(${loginImage});
        background-size: cover;
        background-position: center;
        display: block;
        border-radius: 0 .5rem .5rem 0;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    .l-login-area{
      width: 80%;
      height: 40rem;
      max-width: 1120px;


    }
  }
`

export default StyledLoginPage