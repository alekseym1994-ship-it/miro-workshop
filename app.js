
const logEl = document.getElementById('log');
const runBtn = document.getElementById('runBtn');

function log(msg) {
  logEl.textContent += (msg + "\n");
}

async function init() {
  try {
    await miro.board.ui.onReady();
    log("Готово. Можно создавать воркшоп.");
    runBtn.disabled = false;
  } catch (e) {
    log("Ошибка инициализации SDK: " + e.message);
  }
}

runBtn.addEventListener('click', async () => {
  runBtn.disabled = true;
  log("Создание фреймов...");
  try {
    await generateWorkshop();
    log("✅ Готово! Шаблон создан.");
  } catch (e) {
    log("❌ Ошибка: " + e.message);
  } finally {
    runBtn.disabled = false;
  }
});

init();
