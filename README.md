# naive-ui-locale-ru

Russian locale for https://github.com/TuSimple/naive-ui

# Installation

```bash
npm install --save naive-ui-locale-ru
```

# Usage

```vue
<template>
    <n-config-provider :locale="ruRU" :date-locale="dateRuRU">
        <app />
    </n-config-provider>
</template>

<script>
import { NConfigProvider } from 'naive-ui'
import { ruRU, dateRuRU } from 'naive-ui-locale-ru'

export default {
    components: {
        NConfigProvider,
    },
    data() {
        return {
            ruRU,
            dateRuRU,  
        };
    },    
};
</script>
```

# License

MIT
