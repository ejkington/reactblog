
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlesPage from './pages/ArticlePage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h1>My Blog!</h1>
      <div id="page-body">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <AboutPage />
          <ArticlesPage />
          <ArticlesListPage />
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
