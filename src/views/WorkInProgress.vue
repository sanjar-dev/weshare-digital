<template>
  <div class="wip-wrapper container center">
    <div class="wip">
      <img src="../assets/weshare_drawn.png" alt="" />
      <div class="description">
        <h3>Идет техническая работа...</h3>
        <p>Мы все еще работаем над сайтом.</p>
      </div>
    </div>
  </div>
</template>

<style>
.wip-wrapper {
  height: 60vh;
}

.wip-wrapper img {
  width: 250px;
}

.wip {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.wip .description {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;
}

.wip .description h3 {
  font-size: 32px;
}
.wip .description p {
  font-size: 20px;
}
</style>
