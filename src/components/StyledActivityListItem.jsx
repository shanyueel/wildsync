import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import {ReactComponent as HeartIcon} from "assets/icons/HeartIcon.svg"
import {ReactComponent as LocationIcon} from "assets/icons/LocationIcon.svg"
import {ReactComponent as CalendarIcon} from "assets/icons/CalendarIcon.svg"
import {ReactComponent as CheckIcon} from "assets/icons/CheckIcon.svg"
import { useSelector } from "react-redux";
import { transferTimestamp } from "utils/date-fns";


const ActivityListItem = ({className, activity, sideUsed}) => {
  const user = useSelector(state => state.user)

  const difficultySwitch = (difficulty) => {
    switch(difficulty){
      case "beginner":
        return "簡單";
      case "medium":
        return "中等";
      case "advanced":
        return "進階";
      case "expert":
        return "專家";
      case "master":
        return "大師";
      default:
        return
    }
  }

  const sliceIntroduction = (introduction) => {
    let introductionSlice = introduction
    if(introductionSlice?.length > 50) introductionSlice = introduction.slice(0,50)
    return introductionSlice
  }
  
  return(
    <div className={className}>

      <div className="l-activity-card__info">
        <div className="l-activity-card__title">
          <Link className="o-activity-card__avatar" to="/user/1" >
            <img  src={activity?.holder?.photoURL} alt="user avatar"/>
          </Link>
          <Link className="o-activity-card__name" to="/activity/1">
            <h3>{activity?.name}</h3>
          </Link>
          {
            user?.attendedActivities?.includes(activity?.id) &&
            <div className="o-activity-card__attendance">
              <CheckIcon/><h4>已參加</h4>
            </div>
          }
          
        </div>

        <div className="c-activity-card__brief">
          <h4 className="o-activity-card__location"><LocationIcon/>{activity?.location}</h4>
          <h4 className="o-activity-card__date">
            <CalendarIcon/>
            {transferTimestamp(activity?.time?.[0])} - {/* sideUsed && <br/> */}{transferTimestamp(activity?.time?.[1])}
          </h4>
        </div>

        <ul className="c-activity-card__highlights">
          <li><span>難度 : </span>{difficultySwitch(activity?.difficulty)}</li>
          <li><span>時長 : </span>{activity?.activityTimeLength} hr</li>
          <li><span>費用 : </span>{activity?.cost?.[0]} - {activity?.cost?.[1]}</li>
          <li><span>人數 : </span>{activity?.attendance?.length} / {activity?.attendanceLimit}</li>
        </ul>

        <p className="o-activity-card__introduction">
          {sliceIntroduction(activity?.introduction)} ...<Link to="/activity/1">深入了解</Link>
        </p>

      </div>

      <div className="l-activity-card__cover">
        <Link to={`/activity/${activity?.id}`}>
          <img className="o-activity__image" src={activity?.coverURL} alt="activity cover" />
        </Link>
      </div>
      
      <div className="o-activity-card__like">
        <input id="like" type="checkbox"/>
        <label htmlFor="like"><HeartIcon /></label>
      </div>
      
    </div>
  )
}

const StyledActivityListItem = styled(ActivityListItem)`
  position: relative;
  display: flex;
  width: 100%;
  height: 7.5rem;
  border-radius: 1rem;
  background-color: ${({theme})=>theme.backgroundColor.default};
  box-shadow: 0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1);
  overflow: hidden;

  .l-activity-card__info{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    height: fit-content;
    padding: .75rem;

    .l-activity-card__title{
      display: flex;
      align-items: center;

      .o-activity-card__avatar img{
        width: 1.75rem;
        height: 1.75rem;
        border-radius: 1rem;
      }

      .o-activity-card__name h3{
        margin-left: .25rem;
        font-weight: 700;
      }

      .o-activity-card__attendance{
        display: flex;
        gap: .25rem;
        margin-left: .25rem;
        padding: .125rem;
        border-radius: .75rem;
        border: 1px solid ${({theme})=>theme.color.default};

        svg{
          width: .75rem;
          height: .75rem;
          fill: ${({theme})=>theme.color.default};
        }

        h4{
          display: none;
        }

      }
    }

    .o-activity-card__date,
    .o-activity-card__location{
      display: flex;
      align-items: center;

      svg{
        display: none;
      }
    }
    
    .o-activity-card__location{
      margin-top: .5rem;
    }

    .o-activity-card__date{
      margin-top: .25rem;
      font-weight: 400;
    }

    .c-activity-card__highlights{
      display: flex;
      flex-wrap: wrap;
      gap: .25rem;
      margin-top: .5rem;

      li{
        padding: .25rem .75rem;
        border-radius: 10px;
        font-size: .75rem;
        color: white;
        background-color: ${({theme})=>theme.color.default};

        span,
        &:last-child{
          display: none;
        }
      }
    }

    .o-activity-card__introduction{
      display: none;

      a{
        font-size: .75rem;
        font-weight: 700;
        text-decoration: underline;
        color: ${({theme})=> theme.color.default};
      }
    }
  }

  .o-activity-card__like{
    position: absolute;
    top: .5rem;
    right: .75rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .25rem;
    border-radius: 50%;
    background-color: white;
    
    input[type="checkbox"]{
      display: none;
    }

    svg{
      width: 1.75rem;
      height: 1.75rem;
      padding: .2rem;
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

  .l-activity-card__cover{
    position: relative;
    height: 100%;
    aspect-ratio: 1 / 1;

    .o-activity__image{
      width: 100%;
      height: 100%;
      border-radius: 0 1rem 1rem 0;
      object-fit: cover;
    }
  }

  @media screen and (min-width: 480px) {
    height: 9rem;

    .l-activity-card__info{
      padding: 1rem;

      .l-activity-card__title .o-activity-card__attendance{
        padding: .25rem .5rem;

        h4{
          display: block;
          color: ${({theme})=>theme.color.default}
        }
      }
      
      .o-activity-card__date, 
      .o-activity-card__location{
        align-self: start;
        
        svg{
          display: block;
          width: 1rem;
          height: 1rem;
          fill: ${({theme})=>theme.color.default};
          margin-right: .25rem;
        }
      }

      .o-activity-card__date{
        margin-top: .5rem;
      }

      .c-activity-card__highlights{
        margin-top: .75rem;

        li{
          border-radius: .75rem;
          padding: .25rem .75rem;
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
  }

  @media screen and (min-width: 672px) {
    height: 10rem;

    .l-activity-card__info{
      .c-activity-card__brief{
        display: flex;
        gap: .5rem;
      }

      .c-activity-card__highlights{
        li:last-child{
          display: block;
        }
      }

      .o-activity-card__introduction{
        display: block;
        margin-top: .75rem;
      }
    }
  }

  /* ${(props)=> props.sideUsed && css`
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
        
        .c-activity-card__highlights{
          display: none;
        }
      }
    }  

  `} */
`

export default StyledActivityListItem