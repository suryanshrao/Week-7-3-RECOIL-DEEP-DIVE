
import { RecoilRoot, useRecoilValue } from 'recoil'
import { jobsAtom, mesageAtom, networkAtom, notificationsAtom } from './store/atoms/context'

function App() {
  return (
    <RecoilRoot>
      <MainApp/>
    </RecoilRoot>
   
  )
}

function MainApp(){
  const networkCount = useRecoilValue(networkAtom);
  const jobCount = useRecoilValue(jobsAtom);
  const messageCount = useRecoilValue(mesageAtom);
  const notificationsCount = useRecoilValue(notificationsAtom);

  return (
    <div>
      <button>Home</button>
      <button>My Network [{networkCount >= 99 ? "99 +": networkCount}]</button>
      <button>Jobs [{jobCount >= 99 ? "99 +": jobCount}]</button>
      <button>Messaging [{messageCount >= 99 ? "99 +": messageCount}]</button>
      <button>Notifications [{notificationsCount >= 99 ? "99 +": notificationsCount}] </button>
      <button> Me </button>
    </div>
  )
}

export default App
