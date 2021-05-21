<template lang="pug">
  .items
    .item-green
      p Лук
      p Морковь
      p Томаты
      p Сушёный картофель
      p Чеснок
      p Капуста
      p Фасоль
      p Пастернак
      p Белые грибы
      img(src="../assets/box-item-1.png" alt="")
    .item-cream
      p Соль
      p Чёрный перец
      p Паприка
      p Кунжут
      p Семена льна
      p Инулин
      img(src="../assets/box-item-2.png" alt="")
    .item-green
      p Укроп
      p Петрушка
      p Лён
      p Базилик
      img(src="../assets/box-item-3.png" alt="")
    .item-cream
      p Кешью
      p Грецкие орехи
      p Миндаль
      p Смесь токоферолов
      img(src="../assets/box-item-4.png" alt="")
    //нижняя линия
    .item-cream
      p Какао порошок
      p Чаи: каркаде, ромашка и мята.
      p Экстракт зеленого чая
      p Экстракты имбиря и лимона
      img(src="../assets/box-item-5.png" alt="")
    .item-green
      p Льняное масло
      p Кокосовое масло
      p Аскорбиновая кислота
      p Лимонная кислота
      p Мёд
      img(src="../assets/box-item-6.png" alt="")
    .item-cream
      p Кокосовая мука
      p Рисовая мука
      p Льняная мукам
      p Гречневая крупа
      img(src="../assets/box-item-7.png" alt="")
    .item-green
      p Сушёный лимон
      p Сушёное яблоко
      p Фруктоза
      img(src="../assets/box-item-8.png" alt="")
</template>

<style lang="sass" scoped>
  .items
    display: grid
    grid-template-columns: repeat(auto-fill, minmax(273px, 1fr))
    grid-gap: 30px
    margin-bottom: 50px
    .item-green
      padding: 30px 16px 30px 30px
      background-color: #F4FFF3
      width: 100%
      max-width: 274px
      height: 466px
      position: relative
      p
        font-size: 16px
        line-height: 150%
        color: #373737
        margin-bottom: 20px
      img
        position: absolute
        bottom: 10px
        right: 0
    .item-cream
      padding: 30px 16px 30px 30px
      position: relative
      background-color: #FFF8E8
      width: 100%
      max-width: 274px
      height: 466px
      p
        font-size: 16px
        line-height: 150%
        color: #373737
        margin-bottom: 20px
      img
        position: absolute
        bottom: 20px
        right: 10px
</style>