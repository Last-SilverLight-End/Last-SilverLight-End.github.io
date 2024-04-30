import Header from '@components/Header_renew';
import MainName from '@components/mainName';


import type { NextPage } from 'next';
import styles2 from '../styles/introduce_renew.module.css';

const Home: NextPage = () => {
  return (
    <div>
      <div >
        <Header/>
      </div>  
      <div>
        <MainName/>
      </div>
      <div className ={styles2.layout}>
        <div className ={styles2.introduce1}>
          <h1>asdf</h1>
        </div>
        <div className ={styles2.introduce2}>
          <h1>asdf</h1>
        </div>
      </div>
      
    </div>
    
  )
    
};

export default Home;
