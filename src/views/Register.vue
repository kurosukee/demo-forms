<template>
  <div id="register">
    <h1>登録フォーム</h1>
    <section>
      <ui-textfield
        outlined
        required
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
      <ui-select
        id="full-func-js-select"
        v-model="birthOfMonth"
        :options="options"
        :class="{ 'demo-select-custom-colors': controls.customColor }"
        :disabled="controls.disabled"
        @selected="onSelected($event)"
      >
        誕生月
      </ui-select>
    </section>
    <section>
      <ui-form-field>
        <ui-checkbox
          v-model="agree"
          input-id="agree"
          value="agree"
          required
        ></ui-checkbox>
        <label for="agree">利用規約に同意する</label>
      </ui-form-field>
    </section>
    <div class="alert-message">{{ message }}</div>
    <ui-button raised @click="register">登録する</ui-button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
const options = [
  {
    label: '選択してください',
    value: '選択してください'
  },
  {
    label: '1月',
    value: '1月'
  },
  {
    label: '2月',
    value: '2月',
  },
  {
    label: '3月',
    value: '3月',
  },
  {
    label: '4月',
    value: '4月',
  },
  {
    label: '5月',
    value: '5月',
  },
  {
    label: '6月',
    value: '6月',
  },
  {
    label: '7月',
    value: '7月',
  },
  {
    label: '9月',
    value: '9月',
  },
  {
    label: '10月',
    value: '10月',
  },
  {
    label: '11月',
    value: '11月',
  },
  {
    label: '12月',
    value: '12月',
  },
];

export default {
  name: 'Register',
  components: {
    // HelloWorld
  },
  data() {
    return {
      options,
      selected: '',
      message: '',
      controls: {
        rtl: false,
        customColor: false,
        disabled: false
      }
    };
  },
  methods: {
    onSelected(selected) {
      this.selected = selected.value;
    },
    register() {
      if (!this.name) {
        this.message = "お名前は必須項目です"
        return
      }
      if (!this.password) {
        this.message = "パスワードは必須項目です"
        return
      }
      sessionStorage.setItem('name', this.name);
      sessionStorage.setItem('password', this.password);
      sessionStorage.setItem('birthOfMonth', this.birthOfMonth);
      sessionStorage.setItem('agree', this.agree);
      // this.$router.push('/content')
      window.location.href = 'content';
    },
  }
}
</script>
