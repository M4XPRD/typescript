**Секции tsconfig.json**
  - extends
  - files
  - include/exclude
  - compilerOptions
  - references
  - typeAcquisition

# Базовые настройки

1. Include отвечает за те папки, которые должны обрабатываться TypeScript.

2. Exclude отвечает за папки, которые TypeScript игнорирует.

3. Files отвечает за конкретные файлы, которые TypeScript должен обработать.

4. Extends подключает дополнительные возможности, например, мы делаем новый конфиг для разработки `tsconfig-dev.json`:

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "sourceMap": true,
    "watch": true,
  },
}
```

5. Команда `tsc --help` вызывает хелпер с вариантами запуска.