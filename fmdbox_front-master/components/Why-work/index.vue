<template lang="pug">
  .screen
    section.wrap.container
      h2 Почему это работает?
    .top
      .container
        .left
          .wraper
            img(src="./assets/top.png" alt="")
        .right
          .item
            img(src="./assets/item-1.png" alt="")
            p <span>FMD диета</span> омолаживает и оздоравливает организм за счет включения механизмов, работающих при лечебном голодании.
          .item
            img(src="./assets/item-2.png" alt="")
            p Диета увеличивает процесс <span>аутофагии</span> (клеточного самоочищения организма), обеспечивая организму естественный процесс детоксикации.
          .item
            img(src="./assets/item-3.png" alt="")
            p Доказано, что соблюдение диеты снижает <span>ИФР-1</span> (инсулиноподобный фактор роста - гормон, напрямую влияющий на процессы старения и с вязанные с ним заболевания в организме). За счет снижения ИФР-1 снижаются риски развития болезни Альцгеймера и деменции, увеличивается продолжительность жизни.
    .bottom
      .container
        .left
          p Диета испытана в исследованиях, доказавших ее эффективность: уменьшается количество висцерального жира, снижается артериальное давление и масса тела. Наибольшую эффективность показало применение диеты 1 раз в месяц на протяжение 3-х месяцев
          .buttons
            a(href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6816332/#!po=0.694444" target="_blank") Статья на PMC
              img(src="./assets/button-arrow.png" alt="")
            a(href="https://pubmed.ncbi.nlm.nih.gov/10854629/" target="_blank") Статья на pubmed
              img(src="./assets/button-arrow.png" alt="")
            a(href="https://pubmed.ncbi.nlm.nih.gov/18198415/" target="_blank") Статья на pubmed
              img(src="./assets/button-arrow.png" alt="")
            a(href="https://pubmed.ncbi.nlm.nih.gov/24820016/" target="_blank") Статья на pubmed
              img(src="./assets/button-arrow.png" alt="")
        .right
          .wraper
            img(src="./assets/bottom.png" alt="")
</template>

<style lang="sass" scoped>
  .screen
    padding: 100px 0 150px 0
    .wrap.container
      h2
        margin-bottom: 50px
    .top
      background: linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(185, 219, 226, 0.25) 56.39%, rgba(110, 192, 153, 0.25) 71.11%, rgba(64, 188, 128, 0) 99.3%)
      .container
        padding-left: 0
        padding-right: 0
        display: flex
        .left
          width: 50%
          .wraper
            border: 2px solid rgba(64, 188, 128, 0.25)
            max-width: 465px
            border-radius: 200px 0px 0px 0px
            padding-bottom: 25px
            display: flex
            img
              width: 100%
              height: 100%
              margin: -25px 0 0 -25px
              object-fit: contain
              object-position: center
        .right
          width: 50%
          padding: 140px 0 0 70px
          .item
            display: flex
            align-items: flex-start
            margin-bottom: 50px
            p
              font-weight: normal
              font-size: 16px
              line-height: 150%
              color: #373737
              margin-left: 30px
              span
                font-weight: 700
    .bottom
      background: linear-gradient(90deg, rgba(254, 223, 210, 0.58) 0.83%, #FFF8E8 36.12%, rgba(254, 202, 164, 0) 50%, rgba(255,255,255,1) 100%,)
      .container
        padding-left: 0
        padding-right: 0
        display: flex
        .left
          padding: 130px 114px 0 0
          width: 50%
          p
            font-size: 16px
            line-height: 150%
            color: #373737
            margin-bottom: 50px
          .buttons
            display: flex
            flex-direction: column
            align-items: flex-start
            a
              display: flex
              align-items: center
              justify-content: center
              width: 290px
              height: 60px
              cursor: pointer
              background-color: transparent
              border: 1px solid #E39D75
              margin-bottom: 20px
              font-weight: 500
              font-size: 16px
              line-height: 150%
              text-transform: uppercase
              color: #E39D75
              transition: $time linear
              &:hover
                background-color: #e39d75
                color: #ffffff
              img
                margin-left: 20px
        .right
          width: 50%
          padding: 74px 0 0 88px
          .wraper
            border: 2px solid rgba(227, 157, 117, 0.45)
            max-width: 490px
            display: flex
            padding-top: 25px
            img
              width: 100%
              height: 100%
              object-fit: contain
              object-position: center
              margin: 0 0 -25px -25px
  @include breakpoint(medium)
    .screen
      .wrap.container
        h2
      .top
        background: #ffffff
        .container
          flex-direction: column
          .left
            width: 100%
            padding-left: 15px
            padding-right: 15px
            .wraper
              margin: 0 auto
          .right
            background: linear-gradient(180deg, rgba(185, 219, 226, 0.25) 6.39%, rgba(110, 192, 153, 0.25) 51.11%, rgba(64, 188, 128, 0) 99.3%)
            width: 100%
            padding-left: 15px
            padding-right: 15px
            padding-top: 48px
            padding-bottom: 40px
      .bottom
        background: #ffffff
        .container
          flex-direction: column-reverse
          .left
            background: linear-gradient(180deg, #FFF8E8 0%, rgba(254, 202, 164, 0) 100%)
            width: 100%
            padding-right: 0
            display: flex
            flex-direction: column
            align-items: center
            padding-left: 15px
            padding-right: 15px
            .buttons
          .right
            width: 100%
            padding-top: 50px
            padding-left: 15px
            padding-right: 15px
            .wraper
              margin: 0 auto
  @include breakpoint(small)
    .screen
      padding-top: 30px
      padding-bottom: 30px
      .wrap.container
        h2
          margin-bottom: 40px
      .top
        .container
          .left
            .wraper
              padding-bottom: 12px
              img
                margin: -12px 0 0 -12px
          .right
            .item
              margin-bottom: 20px
              p
                font-size: 12px
                margin-left: 16px
              img
                width: 40px
                height: 40px
      .bottom
        .container
          .left
            padding-top: 30px
            p
              font-size: 14px
          .right
            .wraper
              padding-top: 12px
              img
                margin: 0 0 -12px -12px
</style>