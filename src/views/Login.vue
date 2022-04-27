<template>
  <div id="login">
    <h1>ログインフォーム</h1>
    <section>
      <ui-textfield
        outlined
        v-model="name"
      >
        お名前
      </ui-textfield>
    </section>
    <section>
      <ui-textfield
        input-type="password"
        required
        pattern=".{4,}"
        helper-text-id="pw-validation-msg"
        v-model="password"
        :attrs="{autocomplete: 'current-password'}"
      >
        パスワード
      </ui-textfield>
    </section>
    <section>
      <ui-button raised @click="login">ログイン</ui-button>
      <div class="alert-message">{{ message }}</div>
    </section>
    <router-link to="/register">※登録はこちら</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Login',
  components: {
    // HelloWorld
  },
  data() {
    return {
      selected: '',
      controls: {
        rtl: false,
        customColor: false,
        disabled: false
      },
      message: '',
    };
  },
  methods: {
    onSelected(selected) {
      this.selected = selected.value;
    },
    login() {
      let store_name = sessionStorage.getItem('name');
      let store_password = sessionStorage.getItem('password');
      console.log(store_name, store_password, this.name, this.password)
      if (store_name == this.name && store_password == this.password) {
        // this.$router.push('/content')
        window.location.href = 'content';
        return
      }
      this.message = '認証に失敗しました'
    }
  }
}
</script>
