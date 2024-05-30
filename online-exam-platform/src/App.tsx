
import './App.css'
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import Registration from "./pages/Registration.tsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-tabs/style/react-tabs.css';
import {useState} from "react";
function App() {

  const [token,setToken]=useState<string>("")
  return (
    <div className={'main'}>
      <Tabs defaultIndex={1} onSelect={(index) => console.log(index)}>
        <TabList>
          <Tab>Registration</Tab>
          <Tab>Title 2</Tab>
        </TabList>

        <TabPanel>
          <Registration token={token} setToken={setToken} />
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default App
