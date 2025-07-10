# vue-tasks

Тестовое задание Frontend-разработчика - Приложение для управления задачами с использованием Vue.js и Docker.

## 📘 Как запустить `vue-tasks` через Docker

### 📦 1. Установите Docker

Скачайте и установите Docker Desktop:
👉 https://www.docker.com/products/docker-desktop

После установки откройте терминал (или PowerShell) и проверьте:
```bash
docker --version
```
Если вы видите версию — значит Docker работает ✅

---

### 🗂 2. Скачайте готовый Docker-образ

Перейдите на страницу релизов проекта:
👉 https://github.com/vrbdas/vue-tasks/releases

Скачайте файл: `vue-tasks.tar`

---

### 🧱 3. Загрузите образ в Docker

В терминале перейдите в папку с файлом:
```bash
cd путь_до_папки
```

Загрузите образ:
```bash
docker load -i vue-tasks.tar
```

---

### 🚀 4. Запустите приложение

```bash
docker run -d -p 8080:80 vue-tasks
```

- Приложение откроется на http://localhost:8080
- `-d` — запуск в фоновом режиме  
- `-p 8080:80` — делает приложение доступным на порту 8080

---

### ✅ Готово!

Откройте браузер и перейдите на:  
👉 http://localhost:8080
