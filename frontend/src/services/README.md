# Структура папки Services

## Api.js

- Добавляем все роуты используемые приложением для взаимодействия с back end'ом;
- Добавляем вариации конфигов;
- Настраиваем axios и его методы (GET - getData, POST - postData, PUT - putData и их модификации конфигов postFormData).

## Любые файлы для расширения

Если в дальнейшем будет необходимо делать запросы, например, для проверки зарегестрирован ли уже телефон,
то создаем файл, называем его общим названием, так чтобы в него можно положить любые подобные запросы.
