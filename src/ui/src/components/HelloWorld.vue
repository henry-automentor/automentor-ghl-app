<template>
  <div class="automentor-app-container">
    <div class="automentor-app-header">
      <h1>Automentor SMS</h1>
    </div>
    <div class="automentor-install-button">
      <FormKit
        type="button"
        help="DELETE this button for prod"
        @click="startAuth()"
      >
        Install APP
      </FormKit>
    </div>
    <div class="automentor-settings-wrapper">
      <div class="automentor-settings-form">
        <FormKit
          type="text"
          name="bird_api_key"
          id="bird_api_key"
          label="Bird API Key"
          help="Set your Bird API Key"
          placeholder="xxxx-xxxx-xxxxx"
        />
        <FormKit
          type="text"
          name="phone"
          id="phone"
          label="Phone"
          help="Set your Bird Phone Number"
          placeholder="+1 (555) 555-5555"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    startAuth() {
      // http://localhost:3000
      const redirectUrl = `${window.location.href}/authorize-handler`;
      const scopes = "locations.readonly locations.write";
      const appClientId = "664be06bb63d8a28afcf85ca-lwfmmmlr";

      window.open(
        `https://marketplace.gohighlevel.com/oauth/chooselocation?response_type=code&redirect_uri=${redirectUrl}&client_id=${appClientId}&scope=${scopes}`
      );
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.automentor-install-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
}

.automentor-settings-wrapper {
  display: flex;
  justify-content: center;
}

.automentor-settings-form {
  max-width: 380px;
  display: flex;
  flex-direction: column;
  text-align: left;
  background: white;
  padding: 24px;
  box-shadow: 1px 4px 5px rgba(0, 0, 0, 0.3);
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
