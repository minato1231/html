import logo from './logo.svg';
import './App.css';
import Menu from './navMenu';
import Header from './header';
import About from './About';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Header/>
      <About/>

      
      <div class="games">
        <div class="games-container container">
          <h2 class="section-title">Во что мы играем</h2>

          <div class="games-card game1">
            <div class="games-card_content">
              <h3 class="game-title">CS:GO</h3>
              <hr class="game-divider" />
              <p class="game-description section-text">Известный онлайн шутер от 1-го лица. Наш клан имеет несколько серверов и кланового тренера по CS. А еще мы даем скины</p>
            </div>
            <div class="games-card_img">

            </div>
          </div>

          {/* тут остальные карточки(их ученик должен сделать в дз) */}

          <div class="games-card game2">
            <div class="games-card_img img2">

            </div>
            <div class="games-card_content">
              <h3 class="game-title">Dota2</h3>
              <hr class="game-divider" />
              <p class="game-description section-text">Моба номер 1 в мире. Для соклановцев доступны гайды на персонажей и различные внутриигровые вещи</p>
            </div>

          </div>
          <div class="games-card game3">
            <div class="games-card_content">
              <h3 class="game-title">Apex legends</h3>
              <hr class="game-divider" />
              <p class="game-description section-text">Одна из лучших королевских битв. Наш клан всегда в топ 3</p>
            </div>
            <div class="games-card_img img3">

            </div>
          </div>


        </div>


      </div>
      <div class="note">
        <div class="container">
          <h2 class="section-title">Мы часто соревнуемся</h2>
          <p class="section-text">Наша команда регулярно учавствует в онлайн и оффлан турнирах. Лучшим игрокам по итогам турниров выплачиваются премии</p>
        </div>
      </div>

      <div class="discord">
        <div class="container">
          <h2 class="section-title">А еще у нас уютный дискорд сервер</h2>

        </div>
      </div>

      <div class="contact-section">
        <div class="container contact-section-container">
          <h2 class="section-title">Го к нам</h2>
          <hr />
          <div class="conact-btn">
            <p class="contact-title">Кликай тут</p>
            <a href="form.html" class="contact-link">Записаться</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
