
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
      <button>My Network [{networkCount}]</button>
      <button>Jobs [{jobCount}]</button>
      <button>Messaging [{messageCount}]</button>
      <button>Notifications [{notificationsCount}] </button>
      <button> Me </button>
    </div>
  )
}

export default App
