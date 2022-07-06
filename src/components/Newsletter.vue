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
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 32px;
  font-weight: 700;
}

p {
  text-align: center;
  font-size: 20px;
  font-weight: 400;
}

.info {
  margin-bottom: 42px;
}

@media only screen and (max-width: 768px) {
  .field {
    flex-direction: column;
    padding: 0 16px;
  }
}

.field {
  width: 100%;
  max-width: 600px;
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
  width: 100%;
  padding: 32px 24px;
  border: none;
  color: white;
  background-color: var(--eerie-black);
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
}
</style>
