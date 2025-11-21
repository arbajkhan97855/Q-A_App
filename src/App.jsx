
// import './App.css';
import { Loginpage } from './formpage/login/login';
import {  Route, Routes } from 'react-router-dom';
import { Singuppage } from './formpage/singup/singup';
import Header from './pages/Headerpage/header';
import { ProEdit } from './formpage/profile/profile-edit';
import { Javaquestion } from './pages/homepage/javascript/jsquestion';
import { Reactquestion } from './pages/homepage/reactjs/react-queston';
import { ContProvider } from './contaxtapi/apidata';
import { ScoreCart } from './pages/homepage/scorecard/Score-cart';
import Footer from './pages/Footerpage/footer';
import { AdminHomePage } from './Admin-paner/AdminPages/Admin-home';
import { AdminLogin } from './Admin-paner/Admin-form/Login/a-login';
import { AdminUserPage } from './Admin-paner/AdminPages/Admin-user';
import { AdminScorePage } from './Admin-paner/AdminPages/Admin-score';
import { EditQuestionPage } from './Admin-paner/Admin-form/Edit/answer-edit/Admin-answer-edit';
import { EditScorecartPage } from './Admin-paner/Admin-form/Edit/scorecart-edit/Admin-score';
import { EditUserPage } from './Admin-paner/Admin-form/Edit/user-edit/Admin-user-edit';
import { UserAddpage } from './Admin-paner/Admin-form/Add/user-add/Admin-user-add';
import { ScoreAddpage } from './Admin-paner/Admin-form/Add/scorecart-add/Admin-score-add';
import { QuestionAddpage } from './Admin-paner/Admin-form/Add/answer-add/Admin-question-add';


// start command- npm start
function App() {
  return (
      <>
      <ContProvider>
      <Routes>
        <Route element={<Loginpage/>} path='/'/>
        <Route element={<Singuppage/>} path='/singup'/>
        <Route element={<ProEdit/>} path='/edit'/>
        <Route element={<AdminHomePage/>} path='/admin-home'/>
        <Route element={<AdminLogin/>} path='/admin-login'/>
        <Route element={<AdminUserPage/>} path='/admin-user'/>
        <Route element={<AdminScorePage/>} path='/admin-score'/>
        <Route element={<UserAddpage/>} path='/admin-user-add'/>
        <Route element={<ScoreAddpage/>} path='/admin-score-add'/>
        <Route element={<QuestionAddpage/>} path='/admin-question-add'/>
        <Route element={<EditQuestionPage/>} path='/admin-home/:id'/>
        <Route element={<EditScorecartPage/>} path='/admin-score/:scorcart'/>
        <Route element={<EditUserPage/>} path='/admin-user/:userid'/>
        <Route element={<Header/>} path='/header'/>
        <Route element={<Footer/>} path='/footer'/>
        <Route element={<Javaquestion/>} path='/jsquestion'/>
        <Route element={<Reactquestion/>} path='/reactquestion'/>
        <Route element={<ScoreCart/>} path='/scorecart'/>
      </Routes>
      </ContProvider>
    
      </>
  );
}

export default App;
