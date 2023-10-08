
import './App.css'

function App() {
  

  return (
    <>
<ProfileCard FirstName="John" LastName="Lee" Age={12} Hobby="I loves cooking for my free time"/>
<ProfileCard FirstName="John" LastName="Doe" Age={28} Hobby="I lvoe raednig evrye day"/>
<ProfileCard FirstName="Peter" LastName="Griffin" Age={84} Hobby="I code every chance I have"/>
    </>
  )

  interface ProfileProps{
    FirstName: string, LastName: string, Age:number, Hobby:string;
  }

  function ProfileCard(prop:ProfileProps) {
   return <div style={{background: 'navy', color:'snow', margin: '50px', textAlign:'left', paddingLeft:'10px', paddingTop:'1px'}}>
    <h3 style={{}}>Full Name: {prop.FirstName} {prop.LastName}</h3> 
      <p style={{fontSize:'20px', textAlign:'left', marginBottom:'-5px'}}><span style={{fontWeight:'bold'}}>Age:</span> {prop.Age}</p> 
          <div style={{paddingBottom:'5px'}}>
         <p> <span style={{fontWeight:'bold'}}>Hobby:</span> {prop.Hobby}</p>
        </div>
      </div>

  }
}

export default App