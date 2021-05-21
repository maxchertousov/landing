Подробное описание (развертывания проекта)[https://git.apptimizm.pro/templates/nuxt-landing-template/wikis/deployment]


Запуск: ***docker-compose up*** или ***npm run dev***. Сервер поднимается на порту 3000


Страницы лендинга находятся в папке pages, например:  
/         - pages/index.vue  
/contacts - pages/contacts.vue  
/about    - pages/about.vue  

Шапка и подвал лендинга находятся в файле layouts/default.vue

Используемые компоненты складываются в папку сomponents

Стили находятся в папке styles и подключаются в файле nuxt.config.js в секции css
```
css: ["@/styles/main.sass"],
```

Заголовок лендинга настраивается в файле nuxt.config.js в атрибуте title раздела head. Там же добавляются внешние скрипты, например, метрики.
```
script: [
  { src: '//an.yandex.ru/system/context.js', async: true },
]
```

**Предупреждение:**

нельзя мержить ветку дев в мастер, все ветки должны создаваться от мастера и мержиться в дев, после тестирования ветка мержиться в мастер


> в мастере и деве в файле components/WidgetPochta/index.vue находятся разные коды виджетов для дева и для прода 