# compilerOptions

1. `"target"`, `"lib"` позволяет использовать синтаксис разных версий JS и добавляет полифиллы.

2. `"outDir"` - выходная директория.

3. `"isolatedModules"` отвечает за глобальные переменные.

4. `"esModuleInterop"` позволяет импортировать CommonJS-пакеты и позволяет избегать `require`.

5. `"forceConsistentCasingInFileNames"` не даёт возможности делать импорты из соседних файлов, не учитывая регистр.

6. `"strict"` включает строгий режим.

7. `"module"` определяет модульную систему после сборки.

8. `"moduleResolution"` - это стратегия выбора модулей. `classic` считается legacy.

9. `"allowSyntheticDefaultImports"` используется, когда в некоторых библиотеках нет импорта по-умолчанию.

```js

// вместо такого импорта
import * as React from 'react';
// можно писать такой
import React from 'react';
```

10. `"downlevelIteration"` используется, когда в выбранной спецификации (например, ES5)  нет определённых возможностей (например, `for/of`) и нужно создать рабочий аналог для старого синтаксиса.