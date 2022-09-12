import React from "react";
import PropTypes from "prop-types";
import {Article} from "./Article";

export const Content = ({ title }) => {
    const data = [
        {
            subTitle: '15 полезных однострочных выражений JavaScript',
            text: 'Улучшение JavaScript-кода за пару минут перевод 15 Helpful JavaScript One-Liners',
            id: 1,
        },
        {
            subTitle: 'Полиморфизм простыми словами',
            text: 'Скорее всего вы уже встречались с понятием “полиморфизм” и даже помните примеры с наследованием, но они показывают далеко не всё',
            id: 2,
        },
        {
            subTitle: 'Начало работы с Node.js',
            text: 'Node Hero: Глава 1',
            id: 3,
        },
        {
            subTitle: 'Нейросети с нуля для JavaScript разработчиков (Часть 1: Перцептрон)',
            text: 'Перевод статьи Elyx0: Neural networks from scratch for Javascript linguists (Part1 The Perceptron).',
            id: 4,
        },
        {
            subTitle: '8 практичных хитростей веб-разработчика применить немедленно!',
            text: 'HTML, CSS и JS хинты, которые полезно знать перевод 8 Tricks for Web Developers You Can Put Into Practice Immediately',
            id: 5,
        },
        {
            subTitle: 'Насколько JavaScript сильный?',
            text: 'Погружение в тему неявных преобразований. Где и как возникают и вычисляются неявные преобразования в JavaScript?',
            id: 6,
        },
        {
            subTitle: 'Изучите CSS-переменные за 5 минут',
            text: 'Перевод статьи Per Harald Borgen: Learn CSS Variables in 5 minutes.',
            id: 7,
        },
        {
            subTitle: 'Создание MEVN-приложения (Часть 1/2)',
            text: 'Создание full-stack приложения на основе Vue.js и Express.js (+MongoDB)',
            id: 8,
        },
        {
            subTitle: 'Реактивность Vue.js',
            text: ' Реактивность фреймворка Vue.js и использование метода Vue.set',
            id: 9,
        },
        {
            subTitle: 'Микроптимизации производительности и JavaScript',
            text: 'Недавно в комментариях на Hexlet я поучаствовал в дискуссии на тему «Что важнее — оптимизации производительности или качество кода?» Если…',
            id: 10,
        },
        {
            subTitle: 'Девшахта-подкаст',
            text: '#108: Производительность кода — это важнейший критерий качества?',
            id: 11,
        },
        {
            subTitle: 'Одна из самых красивых идей в информатике: Y-Combinator',
            text: 'Перевод статьи Lucas Fernandes da Costa “Y: The Most Beautiful Idea in Computer Science explained in JavaScript”',
            id: 12,
        },
    ];
    return (
        <main>
            <section className="posts">
                <div className="container">
                    <h1>{title}</h1>
                    <ul className="list">
                        {data.map(({ subTitle, text, id }) => {
                            return (
                                <Article key={id} subTitle={subTitle} text={text} />
                            )
                        })}
                    </ul>
                </div>
            </section>
        </main>
    )
}