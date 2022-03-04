import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import { Menu } from './components/Menu/Menu';
import { ContextContainer } from './context/CategoriesContext';
import Home from './pages/Home/Home';
import { Joke } from './pages/Joke/Joke';
import JokeCategory from './pages/JokeCategory/JokeCategory';
import SearchJoke from './pages/SearchJoke/SearchJoke';

function App() {
    return (
        <ContextContainer>
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/jokes/:jokeId" exact element={<Joke />} />
                    <Route path="/categories/:category" exact element={<JokeCategory />} />
                    <Route path="/search/" exact element={<SearchJoke />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </ContextContainer>
    );
}

export default App;
