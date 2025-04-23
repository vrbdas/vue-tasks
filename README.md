# Vue Tasks App

Это простое Vue 3-приложение, упакованное в Docker-контейнер, которое можно запустить через Docker Desktop без использования терминала.

---

## 🚀 Быстрый старт

1. **Установите** [Docker Desktop](https://www.docker.com/products/docker-desktop) и запустите его.
2. **Скачайте образ приложения** из раздела [Releases](https://github.com/vrbdas/vue-tasks-app/releases).
3. **Импортируйте образ** в Docker Desktop:
   - Перейдите во вкладку `Images`
   - Нажмите `Load` или `Import TAR`
   - Выберите скачанный файл `vue-tasks-app.tar`
4. **Запустите контейнер**:
   - Найдите `vue-tasks-app` в списке образов
   - Нажмите `Run`
   - После запуска откройте браузер и перейдите на:  
     🔗 **http://localhost:8080**

---

## 🛠️ Технологии

- Vue 3 (Composition API)
- Vite
- Docker

---

## 📁 Структура проекта

```text
vue-tasks-app/
├── Dockerfile
├── .dockerignore
├── .gitignore
├── README.md
└── ... (исходные файлы Vue)
```

---

## 📦 Скачать образ

Вы можете скачать готовый `.tar` архив с образом из [страницы релизов](https://github.com/vrbdas/vue-tasks-app/releases):

➡️ **[Скачать vue-tasks-app.tar](https://github.com/vrbdas/vue-tasks-app/releases/latest)**

---

## 📄 Лицензия

MIT
