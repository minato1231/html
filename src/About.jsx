import React from "react";
import image1 from "./img/icons/scope.svg"
import image2 from "./img/icons/friendly.svg"
import image3 from "./img/icons/joystic.svg"
import image4 from "./img/icons/twitch.svg"

function About() {
    return (
        <div className="about">
            <div class="container">
                <div class="about-card">
                    <img src={image1} alt="" class="about-card_img" />
                    <p class="about-card_title">Регулярные турниры и тренировки</p>
                </div><div class="about-card">
                    <img src={image2} alt="" class="about-card_img" />
                    <p class="about-card_title">Дружелюбное комьюнити</p>
                </div><div class="about-card">
                    <img src={image3} alt="" class="about-card_img" />
                    <p class="about-card_title">Популярные дисциплины</p>
                </div><div class="about-card">
                    <img src={image4} alt="" class="about-card_img" />
                    <p class="about-card_title">Бесплатное оборудование для стримов</p>
                </div>
            </div>
        </div>
    )
}

export default About;