import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import {ReactComponent as FlameIcon} from "assets/icons/FlameIcon.svg"
import {ReactComponent as HeartIcon} from "assets/icons/HeartIcon.svg"


const HorizontalActivityCard = ({className, sideUsed}) => {
  return(
    <div className={className}>
      
      <Link to="/activity/1">
        <img className="o-activity__image" src="https://clutchpoints.com/_next/image?url=https%3A%2F%2Fwp.clutchpoints.com%2Fwp-content%2Fuploads%2F2023%2F06%2Ffinals.jpg&w=3840&q=75" alt="activity cover" />
      </Link>
      <div className="l-activity-card__info">
        <Link to="/activity/1"> 
          <h3 className="o-activity-card__title">麟趾-鹿林山健行</h3>
        </Link>
        <h4 className="o-activity-card__location">南投縣信義鄉</h4>
        <h4 className="o-activity-card__date">2023.07.01 08:30 -{sideUsed && <br/>}2023.07.02 18:00</h4>

        <ul className="c-activity-card__detail-info">
          <li><span>難度 - </span>中等</li>
          <li><span>時間 - </span>半天</li>
          <li><span>費用 - </span>2000元</li>
        </ul>

        <div className="c-activity-card__basic-info">
          <div className="l-activity-card__holder">
            <img className="o-activity-card__holder-avatar" src="https://static.vecteezy.com/system/resources/previews/009/734/564/original/default-avatar-profile-icon-of-social-media-user-vector.jpg" alt="user avatar"></img>
            <h4 className="o-activity-card__holder-name">Jimmy</h4>
          </div>
          <div className="o-activity-card__holder-activeness">
            <FlameIcon />
            <h4 className="o-activity-card__holder-activeness-count">5734</h4>
          </div>
        </div>
      </div>
      
        <div className="o-activity-card__favorite-button">
          <input id="favorite" type="checkbox"/>
          <label htmlFor="favorite"><HeartIcon /></label>
        </div>
      
    </div>
  )
}

const StyledHorizontalActivityCard = styled(HorizontalActivityCard)`
  position: relative;
  display: flex;
  width: 100%;
  height: 8rem;
  border-radius: 1rem;
  background-color: ${({theme})=>theme.backgroundColor.default};
  box-shadow: 0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1);
  overflow: hidden;

  .o-activity__image{
    width: 8rem;
    height: 100%;
    border-radius: 1rem 0 0 1rem;
    object-fit: cover;
  }

  .l-activity-card__info{
    padding: .75rem;
    width: 100%;
    height: fit-content;

    .o-activity-card__title{
      font-weight: 700;
    }

    .o-activity-card__location{
      margin-top: .5rem;
    }

    .o-activity-card__date{
      margin-top: .25rem;
      font-weight: 400;
    }

    .c-activity-card__detail-info{
      display: flex;
      flex-wrap: wrap;
      gap: .25rem;
      margin-top: .5rem;

      li{
        border-radius: .75rem;
        padding: .25rem .75rem;
        font-size: .5rem;
        color: white;
        background-color: ${({theme})=>theme.color.default};

        span{
          display: none;
        }
      }
    }

    .c-activity-card__basic-info{
      margin-top: .25rem;
      display: flex;
      gap: 1rem;
      
      .l-activity-card__holder{
        display: flex;

        .o-activity-card__holder-avatar{
          width: 1.5rem;
          height: 1.5rem;
          border-radius: 1rem;
        }

        .o-activity-card__holder-name{
          margin-left: .25rem;
        }
      }


      .o-activity-card__holder-activeness{
        display: flex;
        align-items: center;
        margin: 0 .5rem;
        
        svg{
          width: 1.25rem;
          height: 1.25rem;
          fill: ${({theme})=> theme.color.alert}
        }

        .o-activity-card__holder-activeness-count{
          margin-left: .25rem;
        }
      } 
    }
  }

  .o-activity-card__favorite-button{
    position: absolute;
    top: 1rem;
    right: 1rem;
    border-radius: 50%;
    padding: .25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    
    
    input[type="checkbox"]{
      display: none;
      
    }

    svg{
      width: 1rem;
      height: 1rem;
      fill: transparent;
      stroke: ${({theme})=>theme.color.alert};
      stroke-width: 50;
      cursor: pointer;
    }

    &:has(input:checked) label{
      svg{
        fill: ${({theme})=>theme.color.alert};
      }
    }
  }

  @media screen and (min-width: 480px) {
    height: 12rem;

    .o-activity__image{
      width: 12rem;
    }
   
    .l-activity-card__info{
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 1rem 1rem 1rem 1.5rem;
      height: 100%;

      h3{
        font-size: 1.25rem;
      }

      h4{
        font-size: 1rem;
      }
      
      .o-activity-card__date, .o-activity-card__location{
        align-self: start;
      }

      .o-activity-card__date{
        margin-top: .5rem;
      }

      .c-activity-card__detail-info{
        display: flex;
        flex-wrap: wrap;
        gap: .25rem;
        margin-top: .75rem;

        li{
          border-radius: .75rem;
          padding: .25rem .75rem;
          font-size: .5rem;
          color: white;
          background-color: ${({theme})=>theme.color.default};

          span{
            display: inline;
            color: white;
            background-color: ${({theme})=>theme.color.default};
          }
        }
      }

      .c-activity-card__basic-info{
        margin-top: .5rem;
      }
    }

    .o-activity-card__favorite-button{
      svg{
        width: 1.25rem;
        height: 1.25rem;
        stroke-width: 40;
      }
    }
  }

  ${(props)=> props.sideUsed && css`
    @media screen and (min-width: 1024px) {
      height: 7.5rem;

      .o-activity__image{       
        width: 7.5rem;
      }

      .l-activity-card__info{
        .o-activity-card{
          &__title{
            font-size: 1rem;
          }

          &__location, &__date{
            font-size: .75rem;
          }

          &__date{
            margin-top: .25rem;
          }
        }
        
        .c-activity-card__detail-info{
          display: none;
        }

        .c-activity-card__basic-info{
          
        }
      }
    }  

  `}
`

export default StyledHorizontalActivityCard