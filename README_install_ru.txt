
# Workshop Board Generator — RU (Chats Redesign)

Это приложение добавляет кнопку «Создать воркшоп по чатам» прямо в интерфейс Miro.
Нажимаешь — и шаблон из 10 фреймов разворачивается на текущей доске (горизонтальная лента, минималистичный стиль).

## Как установить (без консоли)
1) Хостинг (нужно HTTPS):
   - Размести `index.html`, `app.js`, `workshop_generator.js`, `icon-48.png`, `icon-96.png` на любом публичном хостинге (GitHub Pages, Netlify, Vercel).
2) Обнови `manifest.json`:
   - Замени `APP_BASE_URL` на свой URL (например, `https://your-domain.example/miro-workshop`).
3) Импорт в Miro:
   - Профиль → Apps & Integrations → Developer Team → Create app → Import from manifest.
4) Запуск на доске:
   - Открой доску → в Apps появится «Создать воркшоп по чатам» → нажми, затем кнопку **Создать воркшоп** в панели приложения.

## Требуемые права
- boards:read, boards:write — уже прописаны.

## Если нет желания с хостингом
- Используй готовый консольный скрипт (F12/Console) из файла `miro_workshop_generator_ru.js` — он работает без хостинга.
