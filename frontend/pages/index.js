import Home from './home/index'
import {jobCardArray,cardArray} from '../constant/constant';
import axios from 'axios'

export async function getStaticProps() {
  let highestSalaryJobs = [];
  let localPopularJobArray = []
  console.log("inside get static props");

  let highestJobResponse = axios.get("/api/dashboard/list")
    let popularJobResponse = axios.get("/api/dashboard/keywordAndCountJobs")

    let responses = await Promise.all([highestJobResponse,popularJobResponse])
      //Response one data(Highest Salary jobs)
      let data1 = responses[0].data.data
      let index = 0
      data1.forEach((element,i)=>{
        if(index==7) index = 0
        else index++ 
          let localPopularJob = { 
            jobIcon:jobCardArray[index].jobIcon, 
            locationIcon:jobCardArray[index].locationIcon, 
            experienceIcon:jobCardArray[index].experienceIcon, 
            jobName:element.title,
            jobLocationHead:element.placeholders.location,
            salaryRange:element.placeholders.salary,
            jobLocationBottom:element.placeholders.location,
            jobExperience:element.placeholders.experience,
            postedJob:element.footerPlaceholderLabel,
            backgroundColor:jobCardArray[index].backgroundColor
          }
          highestSalaryJobs.push(localPopularJob)
      })  
      // let localHighestSalary = highestSalaryJobs.slice(0, 8)

      //Response two data(Popular jobs)
      let localPopularJobs = responses[1].data.data
      console.log("localPopularJobs",localPopularJobs);
      let popularJobindex = 0
      
      localPopularJobs.forEach((element)=>{
        if(popularJobindex==7) popularJobindex = 0
        else popularJobindex++ 
        let populaJobObj = { 
          url: cardArray[popularJobindex].url, 
          keywordName: element.keyword,
          totalJob: element.totalJobs,
          height:0, 
          width:0,
          backgroundColor: cardArray[popularJobindex].backgroundColor
        }
        localPopularJobArray.push(populaJobObj)
      })
    // })
    console.log("highestSalaryJobs get static props",highestSalaryJobs.length);
    console.log("localPopularJobArray get static props",localPopularJobArray.length);
  return {
    props:{
      highestSalaryJobs:highestSalaryJobs,
      localPopularJobArray:localPopularJobArray,
    }
  }
}

export default function Index(props) {
  return (
    <div>
      <Home highestSalaryJobs={props.highestSalaryJobs}  localPopularJobArray={props.localPopularJobArray}/>
    </div>
  )
}
