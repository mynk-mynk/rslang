# rslang

# APP Architecture
1) index.html - содержит базовую разметку (<html>, <head>, пустой <body> или внутри только один тег <div id="app"></div> (так вроде в реакте делают); внизу подключатся index.ts (пункт 3))
2) style.css -  содержит все стили приложения
3) index.ts - базовый ts-файл, который запускает все приложение
4) assets - папка для хранения картинок, шрифтов и тд (внутри подпапки "images", "fonts", "icons", можно еще что-то добавить)
5) views - содержит папку "components", в которой будут храниться повтряющиеся компоненты (например, карточка со словом в словаре). Также будет содержать html-файлы: template.html - шаблонный файл с header + navbar + footer; html-файлы на каждую отдельную страницу приложения
6) models - содержит файлы-классы с данными нашего приолжения (User, Word). Они называются с большой буквы по названию сущности (например, Word.ts) и содержат свойства этой сущности в конструкторе.
7) controllers - содержит всю логику приложения (файлы-классы по работе с моделями). Можно называть с большой буквы и чтобы не путать с моделями на конце добавлять Controller (например, WordController.ts)

По поводу Observer есть такая статья, чтобы понимать, кто создает события, а кто на них подписывается в структуре MVC: https://medium.com/@patrickackerman/the-observer-pattern-with-vanilla-javascript-8f85ea05eaa8#:~:text=In%20our%20MVC%20implementation%2C%20our,the%20view%20through%20the%20controller.&text=With%20the%20Observer%20pattern%2C%20we,view%20into%20an%20%E2%80%9Cobserver%E2%80%9D.