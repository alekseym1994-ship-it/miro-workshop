// app.js
const logEl = document.getElementById('log');
const runBtn = document.getElementById('runBtn');

function log(msg){ logEl.textContent += msg + "\n"; }

// SDK v2: miro.onReady(...)
miro.onReady(async () => {
  log("SDK готов ✅");
  runBtn.disabled = false;
});

runBtn.addEventListener('click', async () => {
  runBtn.disabled = true;
  log("Создаю фреймы...");
  try {
    await generateWorkshop();          // функция из workshop_generator.js
    log("Готово! Шаблон создан ✅");
  } catch (e) {
    log("❌ Ошибка: " + (e?.message || e));
  } finally {
    runBtn.disabled = false;
  }
});
