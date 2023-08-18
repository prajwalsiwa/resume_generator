import React, { useContext } from 'react'
import { FormContext } from '../../context/FormContext';
import PdfDocument from './PdfDocument';


const ShowPersonalInfo = ({personalInfo})=>{

  return (
    <div>
      {personalInfo?.name}
      {personalInfo?.address}
      {personalInfo?.contact}
      {personalInfo?.email}
      {personalInfo?.profession}
    </div>
  )
}
const ShowSummaryInfo = ({summaryInfo}) => {
  return(
    <div>
      {summaryInfo?.summary}
    </div>
  )
}
const ShowSocioInfo = ({SocioInfo}) => {
  return(
    <div>
      {SocioInfo?.socialmedia}
    </div>
  )
}

const RightPane = () => {
  const {formData, setFormData} = useContext(FormContext);

  console.log("rrr", formData);
  return (
    // <PdfDocument />
    <div className='border border-danger rounded col-md-7'>
      preview
      {
        formData?.personalInfo?<ShowPersonalInfo personalInfo={formData.personalInfo} />: <></>
      }

      {
        formData?.summaryInfo?<ShowSummaryInfo  summaryInfo={formData.summaryInfo} />:<></>
      }
      {
        formData?.SocioInfo?<ShowSocioInfo  SocioInfo={formData.SocioInfo} />:<></>
      }
      
     </div>
  )
}

export default RightPane
