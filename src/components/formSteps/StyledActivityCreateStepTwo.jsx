import styled from "styled-components";
import clsx from "clsx";

import StyledRadioInput from "components/inputs/StyledRadioInput";
import StyledTextInput from "components/inputs/StyledTextInput";
import StyledRangeInput from "components/inputs/StyledRangeInput";
import StyledDateTimeInput from "components/inputs/StyledDateTimeInput";
import StyledTextArea from "components/inputs/StyledTextArea";

const difficultyOptions = [
  { 
    name: "difficulty",
    label: "入門",
    id: "beginner"
  },
  { 
    name: "difficulty",
    label: "中等",
    id: "medium"
  },
  { 
    name: "difficulty",
    label: "進階",
    id: "advanced"
  },
  { 
    name: "difficulty",
    label: "專家",
    id: "expert"
  },
  { 
    name: "difficulty",
    label: "大師",
    id: "master"
  }
]

const ActivityCreateStepTwo = ({ className, formContent, onFormChange}) => {
  return(
    <div className={clsx(className,"scrollbar") }>
      
      <StyledRadioInput 
        title="難易程度" 
        formContent={formContent}
        onFormChange={onFormChange} 
        radioOptions={difficultyOptions}
      />
      <StyledTextInput 
        numberUsed 
        title="活動時長" 
        placeholder="請輸入活動時長" 
        unit="小時" 
        inputId="outdoorLength" 
        formContent={formContent} 
        onFormChange={onFormChange}
      />
      <StyledRangeInput 
        title="預估費用"
        minPlaceholder="最低費用" 
        maxPlaceholder="最高費用" 
        unit="$" 
        inputName="Cost"
        minInputId="minCost"
        maxInputId="maxCost"
        formContent={formContent}
        onFormChange={onFormChange}
      />
      <StyledTextInput 
        numberUsed 
        title="人數限制" 
        placeholder="報名人數上限" 
        unit="人" 
        inputId="attendanceLimit" 
        formContent={formContent} 
        onFormChange={onFormChange}
      />
      <StyledDateTimeInput
        title="申請截止時間" 
        inputId="deadline"
        formContent={formContent}
        onFormChange={onFormChange} 
      />
      <StyledTextArea
        title="活動簡介" 
        placeholder="請輸入活動簡介" 
        inputId="introduction" 
        formContent={formContent} 
        onFormChange={onFormChange} 
      />

    </div>
  )
}

const StyledActivityCreateStepTwo = styled(ActivityCreateStepTwo)`
      display: flex;
      flex-direction: column;
      gap: .75rem;
      width: 100%;
      height: 100%;
      overflow-y: scroll;
`

export default StyledActivityCreateStepTwo