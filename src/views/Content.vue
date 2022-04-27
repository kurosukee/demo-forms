<template>
  <div id="content">
    <h1>心理テスト</h1>
    <section>
      <ui-card outlined>
        <a v-ripple>
          <h2 :class="[$tt('headline5'), 'demo-card-article__title']">
            ぬいぐるみ
          </h2>
          <p class="demo-card-article__snippet">
            ある日、あなたは夢の中で誰もいない世界を歩いていました。<br>
            しばらくすると、目の前に小さな女の子がぬいぐるみを抱いて立っています。<br>
            さて、それは何のぬいぐるみだったでしょう？
          </p>
        </a>
        <ui-list-divider></ui-list-divider>
        <ui-card-actions full-bleed>
          <ui-button class="demo-card-action" @click="choice('rabbit')">
            うさぎ
          </ui-button>
        </ui-card-actions>
        <ui-list-divider></ui-list-divider>
        <ui-card-actions full-bleed>
          <ui-button class="demo-card-action" @click="choice('bear')">
            くま
          </ui-button>
        </ui-card-actions>
        <ui-list-divider></ui-list-divider>
        <ui-card-actions full-bleed>
          <ui-button class="demo-card-action" @click="choice('dog')">
            いぬ
          </ui-button>
        </ui-card-actions>
        <ui-list-divider></ui-list-divider>
        <h3>結果</h3>
        <p class="demo-card-article__snippet">
          {{ message }}
        </p>
      </ui-card>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Content',
  components: {
    // HelloWorld
  },
  data() {
    return {
      message: ''
    }
  },
  methods: {
    choice(value) {
      switch (value) {
        case 'dog':
          this.message = "「イヌ」を選んだ人が求めるのは「尽くされる癒し」\nここでのぬいぐるみは癒しの象徴で、女の子が持っているモノにはあなたの欲望が表れています。\nつまり、このテストでは「あなたがどんなタイプの癒しを求めているか？」がわかるのです。\nイヌは「従順」や「献身」の象徴で、あなたは、誰かがあなたに従ってくれたり、誰かに尽くされているときに喜びを感じるみたい。\nいわゆる「サービス」が好きで、ホテルでのんびり過ごしたり、レストランや買い物でぜいたくしたりすると満足できそう。\nその一方で、尽くしてくれた人には「お返し」をする礼儀正しいところもあるので、必ずしも尽くされることを求めるばかりではないようです。\n"
          break
        case 'bear':
          this.message = "「クマ」を選んだ人が求めるのは「守られる癒し」\n\nここでのぬいぐるみは癒しの象徴で、女の子が持っているモノにはあなたの欲望が表れています。\n\nつまり、このテストでは「あなたがどんなタイプの癒しを求めているか？」がわかるのです。\n\nクマは母親など「あなたを守ってくれるモノ」の象徴で、あなたは、誰かに守られている時にリラックスできるみたい。\n\n少し幼い一面が残っているようですが、逆にあなた自身も強い母性本能を持っていることでしょう。\n\nいずれあなたも誰かを守る存在になり、誰かを癒してあげることになりそうです。\n"
          break
        case 'rabbit':
          this.message = "「ウサギ」を選んだ人が求めるのは「世話してあげる癒し」\n\nここでのぬいぐるみは癒しの象徴で、女の子が持っているモノにはあなたの欲望が表れています。\n\nつまり、このテストでは「あなたがどんなタイプの癒しを求めているか？」がわかるのです。\n\nウサギは「弱いモノ」や「受け身」の象徴で、あなたは、どちらかというと世話されるより世話する方が好きみたい。\n\nあねご肌だったり親分肌だったりして、人の世話をしたり誰かのためになることをして自分が癒されるタイプですね。\n\n動物好きの人や子ども好きの人が多そうです。"
          break
        default:
          this.message = ""
          break
      }
    }
  }
}
</script>
