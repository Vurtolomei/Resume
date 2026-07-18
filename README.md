<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Системный аналитик | Артём Смирнов</title>
    <link rel="stylesheet" href="styles/main.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
</head>
<body>
    <!-- Header -->
    <header class="header">
        <div class="container">
            <nav class="nav">
                <div class="nav__logo">Артём Смирнов</div>
                <ul class="nav__links">
                    <li><a href="#about">О себе</a></li>
                    <li><a href="#experience">Опыт</a></li>
                    <li><a href="#skills">Компетенции</a></li>
                    <li><a href="#contacts">Контакты</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <div class="hero__content">
                <h1>Профессиональный системный аналитик</h1>
                <p>Помогаю бизнесу автоматизировать процессы и достигать стратегических целей</p>
                <a href="#contacts" class="btn">Связаться со мной</a>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about">
        <div class="container">
            <h2>О себе</h2>
            <div class="about__content">
                <p>Эксперт в системной аналитике с 4,5-летним опытом создания сложных IT-решений. Специализируюсь на проектировании архитектуры систем и автоматизации бизнес-процессов.</p>
            </div>
        </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="experience">
        <div class="container">
            <h2>Профессиональный опыт</h2>
            <div class="experience__items">
                <div class="experience__item">
                    <h3>Иннотех</h3>
                    <p><strong>Главный системный аналитик</strong> (2022 - настоящее время)</p>
                    <ul>
                        <li>Управление требованиями и фасилитация</li>
                        <li>Моделирование архитектуры</li>
                        <li>Проектирование интеграций</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="skills">
        <div class="container">
            <h2>Ключевые компетенции</h2>
            <div class="skills__list">
                <div class="skills__item">Моделирование бизнес-процессов</div>
                <div class="skills__item">Системный анализ</div>
                <div class="skills__item">Agile методологии</div>
                <div class="skills__item">Проектирование API</div>
                <div class="skills__item">Базы данных</div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contacts" class="contacts">
        <div class="container">
            <h2>Контакты</h2>
            <div class="contacts__info">
                <p><strong>Email:</strong> tossimba@icloud.com</p>
                <p><strong>Telegram:</strong> @TossImba</p>
                <p><strong>Телефон:</strong> +7 (906) 5121854</p>
            </div>
            
            <!-- Форма обратной связи -->
            <form class="feedback-form" onsubmit="sendMessage(event)">
                <input type="text" name="organization" placeholder="Название организации" required>
                <textarea name="message" placeholder="Ваше сообщение" required></textarea>
                <button type="
