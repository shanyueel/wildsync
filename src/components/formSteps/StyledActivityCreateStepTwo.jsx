import styled from "styled-components";
import clsx from "clsx";

import StyledRadioInput from "components/inputs/StyledRadioInput";
import StyledTextInput from "components/inputs/StyledTextInput";
import StyledRangeInput from "components/inputs/StyledRangeInput";
import StyledDateTimeInput from "components/inputs/StyledDateTimeInput";
import StyledTextArea from "components/inputs/StyledTextArea";

const ActivityCreateStepTwo = ({ className, formContent, onFormChange}) => {
  const activityDifficultyOptions = require('data/activityDifficultyOptions.json')
  
  return(
    <div className={clsx(className,"scrollbar") }>
      
      <StyledRadioInput 
        title="難易程度" 
        inputId="difficulty"
        formContent={formContent}
        onFormChange={onFormChange} 
        radioOptions={activityDifficultyOptions}
      />
      <StyledTextInput 
        numberUsed 
        title="實際活動時長" 
        placeholder="實際活動時長 (扣除前後通勤、用餐時間)" 
        unit="小時" 
        inputId="activityTimeLength" 
        formContent={formContent} 
        onFormChange={onFormChange}
      />
      <StyledRangeInput 
        title="預估費用"
        inputId="cost"
        minPlaceholder="最低費用" 
        maxPlaceholder="最高費用" 
        unit="$" 
        formContent={formContent}
        onFormChange={onFormChange}
      />
      <StyledTextInput 
        numberUsed 
        title="人數限制" 
        placeholder="報名人數上限 (不含主辦人)" 
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
        placeholder="請簡單介紹活動內容 (字數限制: 100字)" 
        inputId="introduction"
        wordLimit={100}
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