# Clock With Timezones

Веб-приложение для отрисовки аналоговых часов и цифровых с возможностью просматривать другие часовые пояса используя выпадающий список.

Краткое решение задачи:
Я реализовал компонет с логикой смены времени через uts-0 со смещением на выбранный часов пояс в интервале когда должно обновляться время на часах. Если же часовых поясов нет, то показывается текущий часовой пояс. Получение часовых поясов происходит через fetch и записью в state Redux.

# Stack

- [React](https://ru.legacy.reactjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [Redux](https://redux.js.org)
- [Sass](https://sass-lang.com)

# Assets

Папка содержащая в себе svg элементы, корвертированые в tsx для обработки webpack'ом.

# Components

- ClocksWithDropDown - Компонент необходимый для отрисовки цифровых и аналоговых компонентов, так же есть компонент DropDown. Использует Redux для получения часовых поясов, которые затем помещаются в выпадающий список. Показывает всегда локальное время, если есть список часовых поясов пересчитывает время на первый в списке пояс. Пересчет времени происходит путем вычисления разници с UTC-0.
- DropDown - Выпадающий список.
- Loader - Компонент загрузки, получает булевую загрузку, а так же children который будет отрисовываться в случие конца загрузки.
- App - Главный компонент, который дает команду на запрос часовых поясов, а так же содержит в себе контейнер уведомлений.

# Store

- Store - Компонент для иницилизации Redux.

# Styles

- NotifyStyles - Стили для отрисовки уведомлений.

# TimeZonesStore

- TimeZones - Redux состояние содержащие в себе часовые пояса, и функцию для их получения. Содержит функцию для вызова уведомлений.

# Hook.ts

Файл для переопределния функций вызова Redux для TypeScript

## Configs

- .editorconfig
- .prettierignore
- .prettierrc.js
- eslint.config.js
- tsconfig.json
- webpack.config.js

## Features

- [React-Clock](https://www.npmjs.com/package/react-clock) - использовал для отрисовывания аналоговых часов.
- [UnicornEslint](https://www.npmjs.com/package/react-clock) - плагин для eslint
- [React-toastify](https://www.npmjs.com/package/react-toastify) - использовал для красивых уведомлений

## Installation

```sh
cd cloksWithTimeZones

npm i
or
yarn

npm run start
or
yarn start
```
