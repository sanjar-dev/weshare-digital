<template>
  <div class="info center">
    <h1>Подписаться на новостную рассылку</h1>
    <p>Новые продукты, предстоящие новости и скидки.</p>
  </div>
  <div class="field">
    <input type="text" placeholder="Электронная почта" />
    <button>Подписаться</button>
  </div>
</template>

<style scoped>
h1 {
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 32px;
  font-weight: 700;
}

p {
  font-size: 20px;
  font-weight: 400;
}

.info {
  margin-bottom: 42px;
}

.field {
  width: 600px;
  height: 80px;
  display: flex;
}

input[type="text"] {
  width: 100%;
  padding: 32px;
  border: none;
  background-color: var(--cultured-2);
  color: var(--sonic-silver);
  font-size: 20px;
}

input[type="text"]:focus {
  outline: none;
}

button {
  width: 75%;
  border: none;
  color: white;
  background-color: var(--eerie-black);
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
}
</style>
