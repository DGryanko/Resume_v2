### Добавление `id` на модалки проектов
1. Добавить  атрибут `id` на модалки проектов со следующими значениями. Id модалки отвечает названию проекта.

    `personal-project-full-stack`
    `personal-project-wedding-project`
    `personal-project-pro-test`
    `personal-project-goit`
    `team-project-questify`
    `team-project-it-test`

### Добавление `id` на кнопки открытия проектов
2. Добавить  атрибут `id` на кнопки открытия проектов со следующими значениями. Id модалки отвечает названию проекта.

    `personal-project-full-stack-btn`
    `personal-project-wedding-project-btn`
    `personal-project-pro-test-btn`
    `personal-project-goit-btn`
    `team-project-questify-btn`
    `team-project-it-test-btn`

3. Скопировать скрипт `project-modals.js` в папку `js`
4. Подключить скрипт в `index.html` ПЕРЕД скриптом `modals.js`. Эти 2 скрипта работают вместе.
5. Проверить чтобы в `index.html` нигде не было класса `modal-active`. Если есть - то удалить.
6. Проверить открываются ли модалки при клике на кнопки


### Дополнительно (можно не делать)
Если вы ходите чтобы при клике на фон модалка ищезала то можно сделать следующее

1. На контейнер модалки при клике на который модалку скрывать не нужно добавляете класс `modal-area-content`
2. На фон модалки при клике на который скрывать модалку нужно добавляете класс `modal-area-bgd`