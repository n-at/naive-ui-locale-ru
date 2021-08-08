import ru from "date-fns/locale/ru";

const dateRuRU = {
    name: 'ru-RU',
    locale: ru,
};

const ruRU = {
    name: 'ru-RU',
    global: {
        undo: 'Отменить',
        redo: 'Повторить',
        confirm: 'ОК'
    },
    Popconfirm: {
        positiveText: 'ОК',
        negativeText: 'Отмена'
    },
    Cascader: {
        placeholder: 'Пожалуйста выберите',
        loading: 'Загрузка',
        loadingRequiredMessage: (label) =>
            `Пожалуйста загрузите все подчиненные элементы перед выбором ${label}.`
        },
    Time: {
        dateFormat: 'dd.MM.yyyy',
        dateTimeFormat: 'dd.MM.yyyy hh:mm:ss'
    },
    DatePicker: {
        yearFormat: 'yyyy',
        monthFormat: 'MMM',
        dayFormat: 'eeeeee',
        clear: 'Очистить',
        now: 'Сейчас',
        confirm: 'ОК',
        selectTime: 'Выберите время',
        selectDate: 'Выберите дату',
        datePlaceholder: 'Выберите дату',
        datetimePlaceholder: 'Выберите дату и время',
        startDatePlaceholder: 'Начальная дата',
        endDatePlaceholder: 'Конечная дата',
        startDatetimePlaceholder: 'Начальная дата и время',
        endDatetimePlaceholder: 'Конечная дата и время',
        monthBeforeYear: true,
        firstDayOfWeek: 0,
        today: 'Сегодня'
    },
    DataTable: {
        checkTableAll: 'Выбрать все',
        uncheckTableAll: 'Отменить выбор',
        confirm: 'ОК',
        clear: 'Очистить'
    },
    Transfer: {
        sourceTitle: 'Источник',
        targetTitle: 'Приемник'
    },
    Empty: {
        description: 'Нет данных'
    },
    Select: {
        placeholder: 'Пожалуйста выберите'
    },
    TimePicker: {
        placeholder: 'Выберите время',
        positiveText: 'OK',
        negativeText: 'Отмена',
        now: 'Сейчас'
    },
    Pagination: {
        goto: 'Перейти к',
        selectionSuffix: 'стр'
    },
    DynamicTags: {
        add: 'Добавить'
    },
    Log: {
        loading: 'Загрузка'
    },
    Input: {
        placeholder: 'Введите значение'
    },
    InputNumber: {
        placeholder: 'Введите значение'
    },
    DynamicInput: {
        create: 'Создать'
    },
    ThemeEditor: {
        title: 'Редактор темы',
        clearAllVars: 'Очистить все переменные',
        clearSearch: 'Очистить поиск',
        filterCompName: 'Фильтр имен компонентов',
        filterVarName: 'Фильтр имен переменных',
        import: 'Импорт',
        export: 'Экспорт',
        restore: 'Восстановить умолчания'
    }
};

export { ruRU, dateRuRU };
