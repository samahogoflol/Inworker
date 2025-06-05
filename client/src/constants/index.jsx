import valeoMain from "../images/vacanciesMainImg/valeoMain.jpg";
import valeoRoom from "../images/hostelsFoto/valeo/valeoRoom.png";
import valeoRoom1 from "../images/hostelsFoto/valeo/valeoRoom1.png";
import valeoRoom2 from "../images/hostelsFoto/valeo/valeoRoom2.png";

import bolsiusMain from "../images/vacanciesMainImg/bolsiusMain.jpg";
import bolsiusroom from "../images/hostelsFoto/bolsius/room1.png";
import bolsiusroom1 from "../images/hostelsFoto/bolsius/room2.jpg";

import magniceMain from "../images/vacanciesMainImg/magniceMain.jpg";
import magniceRoom from "../images/hostelsFoto/magnice/magniceRoom1.png";
import magniceRoom1 from "../images/hostelsFoto/magnice/magniceRoom2.png";
import magniceRoom2 from "../images/hostelsFoto/magnice/magniceRoom3.png";

import mondelezMain from "../images/vacanciesMainImg/mondelezMain.jpg";

import instantaMain from "../images/vacanciesMainImg/instantaMain.jpg";

import fishPackingMain from "../images/vacanciesMainImg/fishPackingMain.jpg";

import whirpoolLodzMain from "../images/vacanciesMainImg/whirpoolLodzMain.jpg";

import barlinekMain from "../images/vacanciesMainImg/barlinekMain.jpg";

import philipsMain from "../images/vacanciesMainImg/philipsMain.jpg";

import normaGroupMain from "../images/vacanciesMainImg/normaGroupMain.jpg";

import wedelMain from "../images/vacanciesMainImg/wedelMain.jpg";

import wroclawUDT from "../images/vacanciesMainImg/wroclawUDT.jpg";

import reviewMlawa1 from "../images/reviews/lgMlawa/reviewMlawa1.jpg";
import reviewMlawa2 from "../images/reviews/lgMlawa/reviewMlawa2.jpg";
import reviewMlawa3 from "../images/reviews/lgMlawa/reviewMlawa3.jpg";

const salaryZlecenia = "26.4 ZL нетто/годину💸 (Від 60.000 грн на місяць)";
const salaryUmowaOPrace = "4600 ZL/brutto в місяць💸 (Від 60.000 грн на місяць)";
const studentsSalary = "30.5 ZL нетто/годину💸 (від 70.000 грн на місяць)";

export const allVacancies = [
  {
    rewievs: {
      name: "Катерина",
      images: [reviewMlawa1, reviewMlawa2, reviewMlawa3],
      date: "11.01.2025",
      vacancy: "Valeo",
      review:
        "Дякую за допомогу з пошуком роботи! Менеджери завжди на зв’язку, допомагали на кожному етапі. Житло чисте та зручне, а умови на роботі навіть кращі, ніж очікувала. Дуже задоволена та рекомендую!",
    },
    title: "Пакування автомобільних фар",
    pageTitle: " ✨ Запрошуємо на вакансію : Пакувальник автомобільних фар для таких автомобілей як : 'Mersedes' 'Audi' 'BMW' ✨ ",
    img: {
      hostelFoto: [valeoRoom, valeoRoom1, valeoRoom2],
      vacancyFoto: valeoMain,
    },
    name: "Valeo",
    city: "Chrzanów (30 км від Краків)",
    contract: "Umowa o pracę",
    salary: {
      salaryPerHour: salaryZlecenia,
      studentsSalary: studentsSalary,
      salaryPerMonth: salaryUmowaOPrace,
      night: "+20% до ставки 🌙",
      overtime: "+50% до ставки ⏱️",
      weekendWork: "+100% до ставки 🎉",
    },
    workingHours: "8-10 годин в день (5 днів на тиждень)",
    premiums: "500 зл брутто за продуктивність та відсутність прогулів 💸",
    responsibilities: {
      firstProcess:
        " Процес Montaż: Ви будете частиною команди з 6 осіб, що займається перевіркою фар. Кожен виконує свою частину роботи, щоб забезпечити високу якість кінцевого продукту. 🛠️✨",
      secondProcess:
        " Процес Kontrola Jakości: Остаточний контроль якості готових фар. Спокійний темп, перевірка, наклеювання штрих-коду та упаковка. 📦🔍",
      thirdProcess: null,
      fourthProcess: null,
      fifthProcess: null,
    },
    hostel: "Безкоштовно. 2-4 людини в кімнаті",
    requirements: {
      gender: "Чоловіки, Жінки, Пари 👩",
      experience: "Беремо кандидатів навіть без досвіду роботи в Польщі 🌱",
      proficiency: "Не обов’язково",
      added: "БЕЗКОШТОВНИЙ робочий одяг (футболка, перчатки, робоче взуття) 👕",
    },
  },

  {
    rewievs: {
      name: "Наталія",
      images: [],
      date: "08.12.2023",
      vacancy: " 'Bolsius' - виготовлення свічок",
      review:
        "Все пройшло просто чудово! Переїзд, оформлення документів та поселення – все швидко та без проблем. Робота цікава, колектив доброзичливий. Моя подяка менеджерам за підтримку!",
    },
    title: "Пакування свічок",
    pageTitle: " ✨ Запрошуємо на вакансію : Виготовлення свічок та ароматизаторів ✨",
    img: {
      hostelFoto: [bolsiusroom, bolsiusroom1],
      vacancyFoto: bolsiusMain,
    },
    name: "Bolsius",
    city: "Krotoszyn (120 км від Вроцлав)",
    contract: "Umowa zlecenia",
    salary: {
      salaryPerHour: salaryZlecenia,
      studentsSalary: studentsSalary,
      salaryPerMonth: salaryUmowaOPrace,
      night: "+20% до ставки 🌙",
      overtime: "+50% до ставки ⏱️",
      weekendWork: "+100% до ставки 🎉",
    },
    workingHours: "8-10 годин в день (5-6 днів на тиждень)",
    premiums: "500 зл брутто за продуктивність та відсутність прогулів 💸",
    responsibilities: {
      firstProcess: " Пакування свічок по картонним коробкам ✨",
      secondProcess: " Візуальний контроль якості виготовленної продукції 🔍",
      thirdProcess: " Слідкувати за чистотою на робочому місці ✨",
      fourthProcess: null,
      fifthProcess: null,
    },
    hostel: "Безкоштовно. 2-4 людини в кімнаті",
    requirements: {
      gender: "Чоловіки, Жінки, Пари 👩",
      experience: "Беремо кандидатів навіть без досвіду роботи в Польщі 🌱",
      proficiency: "Не обов’язково",
      added: "БЕЗКОШТОВНИЙ робочий одяг (футболка, перчатки, робоче взуття) 👕",
    },
  },

  {
    rewievs: {
      name: "Катерина",
      images: [],
      date: "14.04.2022",
      vacancy: "' Пакування одягу 'Nike' ",
      review:
        "Все дуже сподобалося! Завдяки команді швидко оформили документи, допомогли з транспортом і поселенням. На роботу вийшов уже наступного тижня. Компанія та умови проживання — супер. Дуже вдячний!",
    },
    title: "Пакування одягу",
    pageTitle: " ✨ Запрошуємо на вакансію : Пакування одягу на сучайний склад! ✨ ",
    img: {
      hostelFoto: [magniceRoom, magniceRoom1, magniceRoom2],
      vacancyFoto: magniceMain,
    },
    name: "H&M",
    city: "Wrocław ",
    contract: "Umowa zlecenia",
    salary: {
      salaryPerHour: salaryZlecenia,
      studentsSalary: studentsSalary,
      salaryPerMonth: salaryUmowaOPrace,
      night: "+20% до ставки 🌙",
      overtime: "+50% до ставки ⏱️",
      weekendWork: "+100% до ставки 🎉",
    },
    workingHours: "8-12 годин в день (5 днів на тиждень)",
    premiums: "500 зл брутто за продуктивність та відсутність прогулів 💸",
    responsibilities: {
      firstProcess: " Сортування, маркування, упаковка одягу 📦",
      secondProcess: " Збір та комплектація замовлень 🧺",
      thirdProcess: " Розпаковка/перепаковка товару 📥",
      fourthProcess: " Розміщення товарів на полицях, вішалках 🗂️",
      fifthProcess: null,
    },
    hostel: "Безкоштовно. 2-4 людини в кімнаті",
    requirements: {
      gender: "Чоловіки, Жінки, Пари 👩",
      experience: "Беремо кандидатів навіть без досвіду роботи в Польщі 🌱",
      proficiency: "Не обов’язково",
      added: "БЕЗКОШТОВНИЙ робочий одяг (футболка, перчатки, робоче взуття) 👕",
    },
  },

  {
    rewievs: {
      name: "Катерина",
      images: [],
      date: "14.04.2022",
      vacancy: "Mondelez - пакування кондитерських виробів",
      review:
        "Рекомендую цю компанію! Підтримка від менеджерів була на кожному етапі, а житло — комфортне та з усіма зручностями. Почала працювати на складі, і все відповідає опису вакансії. Дякую за чудову організацію!",
    },
    title: "Пакування кондитерських виробів",
    pageTitle: " ✨ Запрошуємо на вакансію : Виготовлення та пакування кондитерських виробів ✨ ",
    img: {
      hostelFoto: [],
      vacancyFoto: mondelezMain,
    },
    name: "Mondelez",
    city: "Skarbimierz (60 км від Вроцлав)",
    contract: "Umowa o pracę",
    salary: {
      salaryPerHour: salaryZlecenia,
      studentsSalary: studentsSalary,
      salaryPerMonth: salaryUmowaOPrace,
      night: "+20% до ставки 🌙",
      overtime: "+50% до ставки ⏱️",
      weekendWork: "+100% до ставки 🎉",
    },
    workingHours: "8-10 годин в день (5 днів на тиждень)",
    premiums: "500 зл брутто за продуктивність та відсутність прогулів 💸",
    responsibilities: {
      firstProcess: "Робота на виробничій лінії з різними видами продукції 🍫",
      secondProcess: " Укладка цукерок на лінії 🍬",
      thirdProcess: " Обслуговування конвеєрної лінії та упаковка готової продукції 📦",
      fourthProcess: null,
      fifthProcess: null,
    },
    hostel: "Безкоштовно. 2-4 людини в кімнаті",
    requirements: {
      gender: "Чоловіки, Жінки, Пари 👩",
      experience: "Беремо кандидатів навіть без досвіду роботи в Польщі 🌱",
      proficiency: "Не обов’язково",
      added: "БЕЗКОШТОВНИЙ робочий одяг (футболка, перчатки, робоче взуття) 👕",
    },
  },

  {
    rewievs: {
      name: "Наталія",
      images: [],
      date: "28.11.2024",
      vacancy: " Instanta - пакування чаю та кави",
      review:
        "Дуже задоволений вибором компанії для роботи в Польщі! Мене оформили швидко, підтримка менеджерів на висоті. Житло дуже комфортне, а умови праці відмінні. Рекомендую!",
    },
    title: "Пакування чаю та кави",
    pageTitle: "✨ Запрошуємо на вакансію : Пакування чаю та кави ✨",
    img: {
      hostelFoto: [],
      vacancyFoto: instantaMain,
    },
    name: "Instanta",
    city: "Żory (50 км від Катовіце)",
    contract: "Umowa zlecenia",
    salary: {
      salaryPerHour: salaryZlecenia,
      studentsSalary: studentsSalary,
      salaryPerMonth: salaryUmowaOPrace,
      night: "+20% до ставки 🌙",
      overtime: "+50% до ставки ⏱️",
      weekendWork: "+100% до ставки 🎉",
    },
    workingHours: "8-12 годин в день (5 днів на тиждень)",
    premiums: "500 зл брутто за продуктивність та відсутність прогулів 💸",
    responsibilities: {
      firstProcess: " Сортування, пакування кави, чаю 📦",
      secondProcess: " Слідкувати за чистотою на робочому місці 🧺",
      thirdProcess: " Візуальний контроль якості товару 📥",
      fourthProcess: null,
      fifthProcess: null,
    },
    hostel: "Безкоштовно. 2-4 людини в кімнаті",
    requirements: {
      gender: "Чоловіки, Жінки, Пари 👩",
      experience: "Беремо кандидатів навіть без досвіду роботи в Польщі 🌱",
      proficiency: "Не обов’язково",
      added: "БЕЗКОШТОВНИЙ робочий одяг (футболка, перчатки, робоче взуття) 👕",
    },
  },

  {
    rewievs: {
      name: "Андрій",
      images: [],
      date: "13.04.2025",
      vacancy: "Graal",
      review:
        "Чудова підтримка від менеджерів, які надають допомогу на всіх етапах. Оформлення пройшло легко, робота і житло відповідають обіцянкам. Співпрацею дуже задоволений!",
    },
    title: "Пакування лосося",
    pageTitle: " ✨ Запрошуємо на вакансію : Пакувальник червоної риби ✨ ",
    img: {
      hostelFoto: [],
      vacancyFoto: fishPackingMain,
    },
    name: "Graal",
    city: "Slupsk",
    contract: "Umowa zlecenia",
    salary: {
      salaryPerHour: salaryZlecenia,
      studentsSalary: studentsSalary,
      salaryPerMonth: salaryUmowaOPrace,
      night: "+20% до ставки 🌙",
      overtime: "+50% до ставки ⏱️",
      weekendWork: "+100% до ставки 🎉",
    },
    workingHours: "10-12 годин в день (5-6 днів на тиждень)",
    premiums: "700 зл брутто за продуктивність та відсутність прогулів 💸",
    responsibilities: {
      firstProcess: " Пакування свіжої та копченої продукції 🐟",
      secondProcess: " Контроль якості ✅",
      thirdProcess: " Дотримання техніки безпеки 🦺",
      fourthProcess: null,
      fifthProcess: null,
    },
    hostel: "Безкоштовно. 2-4 людини в кімнаті",
    requirements: {
      gender: "Чоловіки, Жінки, Пари 👩",
      experience: "Беремо кандидатів навіть без досвіду роботи в Польщі 🌱",
      proficiency: "Не обов’язково",
      added: "БЕЗКОШТОВНИЙ робочий одяг (футболка, перчатки, робоче взуття) 👕",
    },
  },

  {
    rewievs: {
      name: "Сергій",
      images: [],
      date: "07.02.2025",
      vacancy: "Whirpool",
      review:
        "Робота з цією компанією — одне задоволення! Менеджери дійсно піклуються про працівників, допомогли з документами та квитками. Житло комфортне, робота цікава. Дякую!",
    },
    title: "Виготовлення побутової техніки",
    pageTitle: " ✨ Запрошуємо на вакансію : Виготовлення побутової техніки ✨",
    img: {
      hostelFoto: [],
      vacancyFoto: whirpoolLodzMain,
    },
    name: "Whirpool",
    city: "Lodz",
    contract: "Umowa zlecenia",
    salary: {
      salaryPerHour: salaryZlecenia,
      studentsSalary: studentsSalary,
      salaryPerMonth: salaryUmowaOPrace,
      night: "+20% до ставки 🌙",
      overtime: "+50% до ставки ⏱️",
      weekendWork: "+100% до ставки 🎉",
    },
    workingHours: "8-12 годин в день (5-6 днів на тиждень)",
    premiums: "500 зл брутто за продуктивність та відсутність прогулів 💸",
    responsibilities: {
      firstProcess: " Монтаж компонентів: корзинки, провода, таймери, кнопки, ущільнювачі 📌",
      secondProcess: " Контроль якості: візуальний огляд, наклеювання етикеток, пакування готових виробів 🗂️",
      thirdProcess:
        " Процес монтажу: підготовка і встановлення компонентів у сушильні машини/плити на конвеєрі, контроль виконаної операції 🦺",
      fourthProcess: " Підтримка чистоти на робочому місці 🧺",
      fifthProcess: "",
    },
    hostel: "Безкоштовно. 2-4 людини в кімнаті",
    requirements: {
      gender: "Чоловіки, Жінки, Пари 👩",
      experience: "Беремо кандидатів навіть без досвіду роботи в Польщі 🌱",
      proficiency: "Не обов’язково",
      added: "Безкоштовний робочий одяг : 2 футболки, штани, кофти, рукавички, зручне робоче взуття 👕",
    },
  },

  {
    rewievs: {
      name: "Ілона",
      images: [],
      date: "09.05.2025",
      vacancy: "Barlinek",
      review:
        "Дякую за чудову організацію роботи в Польщі! З менеджерами завжди на зв’язку, вони відповіли на всі мої питання. Робота подобається, житло чисте та сучасне. Рекомендую!",
    },
    title: "Виготовлення паркетної дошки",
    pageTitle: " ✨ Запрошуємо на вакансію : Виробництво паркетних дошок. Світовий лідер виробництва в цій галузі ✨ ",
    img: {
      hostelFoto: [],
      vacancyFoto: barlinekMain,
    },
    name: "Barlinek",
    city: "Barlinek (30 км від Гожув Великопольскій)",
    contract: "Umowa zlecenia",
    salary: {
      salaryPerHour: salaryZlecenia,
      studentsSalary: studentsSalary,
      salaryPerMonth: salaryUmowaOPrace,
      night: "+20% до ставки 🌙",
      overtime: "+50% до ставки ⏱️",
      weekendWork: "+100% до ставки 🎉",
    },
    workingHours: "8-12 годин в день (5 днів на тиждень)",
    premiums: "500 зл брутто за продуктивність та відсутність прогулів 💸",
    responsibilities: {
      firstProcess: " Відділ нарізки сировини: сортування нарізаного сировини та відправка на сушку ✅ ",
      secondProcess:
        "Відділ контролю якості : сортування, чистка верхнього шару дошок. Менше фізичних зусиль, більше уваги та концентрації 🔍",
      thirdProcess: " Склад готової продукції: упаковка та підготовка продукції до перевезення. 📦",
      fourthProcess: null,
      fifthProcess: null,
    },
    hostel: "Безкоштовно. 2-4 людини в кімнаті",
    requirements: {
      gender: "Чоловіки, Жінки, Пари 👩",
      experience: "Беремо кандидатів навіть без досвіду роботи в Польщі 🌱",
      proficiency: "Не обов’язково",
      added: "БЕЗКОШТОВНИЙ робочий одяг (футболка, штани, рукавички, зручне робоче взуття) 👕",
    },
  },

  {
    rewievs: {
      name: "Інна",
      images: [],
      date: "22.04.2025",
      vacancy: "Philips",
      review:
        "Дякую за допомогу з пошуком роботи! Менеджери завжди на зв’язку, допомагали на кожному етапі. Житло чисте та зручне, а умови на роботі навіть кращі, ніж очікувала. Дуже задоволена та рекомендую!",
    },
    title: "Пакування лампочок 'Philips'",
    pageTitle: " ✨ Запрошуємо на роботу: Пакувальник лампочок та освітлювальних елементів ✨ ",
    img: {
      hostelFoto: [],
      vacancyFoto: philipsMain,
    },
    name: "Philips",
    city: "Ketzin (250 км від Варшави)",
    contract: "Umowa zlecenia",
    salary: {
      salaryPerHour: salaryZlecenia,
      studentsSalary: studentsSalary,
      salaryPerMonth: salaryUmowaOPrace,
      night: "+20% до ставки 🌙",
      overtime: "+50% до ставки ⏱️",
      weekendWork: "+100% до ставки 🎉",
    },
    workingHours: "8-12 годин в день (5-6 днів на тиждень)",
    premiums: "500 зл брутто за продуктивність та відсутність прогулів 💸",
    responsibilities: {
      firstProcess: " Візуальний контроль якості продукції 💡 ",
      secondProcess: " Пакування готової продукції по коробкам 📦 ",
      thirdProcess: " Участь в збиранні освітлювалних приборів 🔍",
      fourthProcess: null,
      fifthProcess: null,
    },
    hostel: "Безкоштовно. 2-4 людини в кімнаті",
    requirements: {
      gender: "Чоловіки, Жінки, Пари 👩",
      experience: "Беремо кандидатів навіть без досвіду роботи в Польщі 🌱",
      proficiency: "Не обов’язково",
      added: "БЕЗКОШТОВНИЙ робочий одяг (футболка, перчатки, робоче взуття) 👕",
    },
  },

  {
    rewievs: {
      name: "Анатолій",
      images: [],
      date: "18.02.2025",
      vacancy: "Norma Group",
      review:
        "Рекомендую цю компанію! Все пройшло гладко, умови праці хороші, і житло відповідає опису. Дякую менеджерам за оперативність і постійну підтримку!",
    },
    title: "Виготовлення та пакування деталей до автомобілей",
    pageTitle: " ✨ Запрошуємо на роботу: Пакувальник автомобільних деталей (ручки, зажими, двірники, емблеми і т.п.) ✨ ",
    img: {
      hostelFoto: [],
      vacancyFoto: normaGroupMain,
    },
    name: "Norma Group",
    city: " Pilica (50 км від Катовіце)",
    contract: "Umowa zlecenia",
    salary: {
      salaryPerHour: salaryZlecenia,
      studentsSalary: studentsSalary,
      salaryPerMonth: salaryUmowaOPrace,
      night: "+20% до ставки 🌙",
      overtime: "+50% до ставки ⏱️",
      weekendWork: "+100% до ставки 🎉",
    },
    workingHours: "8-12 годин в день (5-6 днів на тиждень)",
    premiums: "500 зл брутто за продуктивність та відсутність прогулів 💸",
    responsibilities: {
      firstProcess: " Вставляти металеві деталі в обладнання 🔹",
      secondProcess: "  Після обробки – діставати, перевіряти якість 🔍",
      thirdProcess: " Упаковувати деталі після перевірки 📦",
      fourthProcess: null,
      fifthProcess: null,
    },
    hostel: "Безкоштовно. 2-4 людини в кімнаті",
    requirements: {
      gender: "Чоловіки, Жінки, Пари 👩",
      experience: "Беремо кандидатів навіть без досвіду роботи в Польщі 🌱",
      proficiency: "Не обов’язково",
      added: "БЕЗКОШТОВНИЙ робочий одяг (футболка, перчатки, робоче взуття) 👕",
    },
  },

  {
    rewievs: {
      name: "Володимир",
      images: [],
      date: "04.11.2024",
      vacancy: "Wedel",
      review:
        "Нарешті знайшла роботу за кордоном, де все організовано як слід! Кожен етап — від оформлення документів до поселення — пройшов легко. Дякую за підтримку та чесний підхід!",
    },
    title: "Пакування кондитерських виробів",
    pageTitle: " ✨ Запрошуємо на роботу: Пакування кондитерських виробів ✨ ",
    img: {
      hostelFoto: [],
      vacancyFoto: wedelMain,
    },
    name: "Valeo",
    city: "Warszawa",
    contract: "Umowa zlecenia",
    salary: {
      salaryPerHour: salaryZlecenia,
      studentsSalary: studentsSalary,
      salaryPerMonth: salaryUmowaOPrace,
      night: "+20% до ставки 🌙",
      overtime: "+50% до ставки ⏱️",
      weekendWork: "+100% до ставки 🎉",
    },
    workingHours: "8-12 годин в день (5-6 днів на тиждень)",
    premiums: "800 зл брутто за продуктивність та відсутність прогулів 💸",
    responsibilities: {
      firstProcess: " Сортування, зважування, та пакування кондитерських виробів 🍫 ",
      secondProcess: "Слідкувати за чистотою на робочому місці 🔍 ",
      thirdProcess: null,
      fourthProcess: null,
      fifthProcess: null,
    },
    hostel: "Безкоштовно. 2-4 людини в кімнаті",
    requirements: {
      gender: "Чоловіки, Жінки, Пари 👩",
      experience: "Беремо кандидатів навіть без досвіду роботи в Польщі 🌱",
      proficiency: "Не обов’язково",
      added: "БЕЗКОШТОВНИЙ робочий одяг (футболка, перчатки, робоче взуття) 👕",
    },
  },

  {
    rewievs: {
      name: "Сергій",
      images: [],
      date: "14.05.2025",
      vacancy: "Pantos UDT",
      review:
        "Не очікував, що все буде настільки просто. Мені допомогли з усім — від документів до адаптації на місці. Робота нормальна, житло — комфортне. Рекомендую тим, хто шукає надійну підтримку за кордоном.",
    },
    title: "Карщик UDT",
    pageTitle: " ✨ Запрошуємо на роботу карщиків з правами UDT. Досвід не обов’язковий ✨ ",
    img: {
      hostelFoto: [],
      vacancyFoto: wroclawUDT,
    },
    name: "Pantos UDT",
    city: "Wrocław",
    contract: "Umowa zlecenia",
    salary: {
      salaryPerHour: "29.5 ZL нетто/годину💸 (Від 70.000 грн на місяць)",
      studentsSalary: studentsSalary,
      salaryPerMonth: salaryUmowaOPrace,
      night: "+20% до ставки 🌙",
      overtime: "+50% до ставки ⏱️",
      weekendWork: "+100% до ставки 🎉",
    },
    workingHours: "8-12 годин в день (5-6 днів на тиждень)",
    premiums: "450 зл брутто за продуктивність та відсутність прогулів 💸",
    responsibilities: {
      firstProcess: " Робота на фронтальному навантажувачі – 80% часу 📦",
      secondProcess: " Завантаження/розвантаження товару 🚚",
      thirdProcess: "  Виконання замовлень на відправку 📑",
      fourthProcess: " Інвентаризація, контроль безпеки 📊 ",
      fifthProcess: "",
    },
    hostel: "Безкоштовно. 2-4 людини в кімнаті",
    requirements: {
      gender: "Чоловіки, Жінки, Пари 👩",
      experience: "Беремо кандидатів навіть без досвіду роботи в Польщі 🌱",
      proficiency: "Не обов’язково",
      added: "БЕЗКОШТОВНИЙ робочий одяг (футболка, штани, робоче взуття) 👕",
    },
  },

  {
    rewievs: {
      name: "Катерина",
      images: [],
      date: "14.04.2022",
      vacancy: "Valeo",
      review: "Робота не тяжка, все як і сказав мені менеджер, житло гарне",
    },
    aboutCompany: "🔧 Запрошуємо на роботу: Оператор машин у автомобільному виробництві! 🚗💡",
    title: "Пакування автомобільних фар",
    pageTitle: "Пакувальник автомобільних фар для таких автомобілей як : 'Mersedes' 'Audi' 'BMW'",
    img: {
      hostelFoto: [],
      vacancyFoto: valeoMain,
    },
    name: "Valeo",
    city: "Chrzanów (30 км від Краків)",
    contract: "Umowa o pracę",
    salary: {
      salaryPerHour: salaryZlecenia,
      studentsSalary: studentsSalary,
      salaryPerMonth: salaryUmowaOPrace,
      night: "+20% до ставки 🌙",
      overtime: "+50% до ставки ⏱️",
      weekendWork: "+100% до ставки 🎉",
    },
    workingHours: "8-10 годин в день (5 днів на тиждень)",
    premiums: "500 зл брутто за продуктивність та відсутність прогулів 💸",
    responsibilities: {
      firstProcess: " Сортування, маркування, упаковка одягу 📦",
      secondProcess: " Збір та комплектація замовлень 🧺",
      thirdProcess: " Розпаковка/перепаковка товару 📥",
      fourthProcess: " Розміщення товарів на полицях, вішалках 🗂️",
      fifthProcess: "",
    },
    hostel: "Безкоштовно. 2-4 людини в кімнаті",
    requirements: {
      gender: "Чоловіки, Жінки, Пари 👩",
      experience: "Беремо кандидатів навіть без досвіду роботи в Польщі 🌱",
      proficiency: "Не обов’язково",
      added: "БЕЗКОШТОВНИЙ робочий одяг (футболка, перчатки, робоче взуття) 👕",
    },
  },

  {
    rewievs: {
      name: "Катерина",
      images: [],
      date: "14.04.2022",
      vacancy: "Valeo",
      review: "Робота не тяжка, все як і сказав мені менеджер, житло гарне",
    },
    aboutCompany: "🔧 Запрошуємо на роботу: Оператор машин у автомобільному виробництві! 🚗💡",
    title: "Пакування автомобільних фар",
    pageTitle: "Пакувальник автомобільних фар для таких автомобілей як : 'Mersedes' 'Audi' 'BMW'",
    img: {
      hostelFoto: [],
      vacancyFoto: valeoMain,
    },
    name: "Valeo",
    city: "Chrzanów (30 км від Краків)",
    contract: "Umowa o pracę",
    salary: {
      salaryPerHour: salaryZlecenia,
      studentsSalary: studentsSalary,
      salaryPerMonth: salaryUmowaOPrace,
      night: "+20% до ставки 🌙",
      overtime: "+50% до ставки ⏱️",
      weekendWork: "+100% до ставки 🎉",
    },
    workingHours: "8-10 годин в день (5 днів на тиждень)",
    premiums: "500 зл брутто за продуктивність та відсутність прогулів 💸",
    responsibilities: {
      firstProcess: " Сортування, маркування, упаковка одягу 📦",
      secondProcess: " Збір та комплектація замовлень 🧺",
      thirdProcess: " Розпаковка/перепаковка товару 📥",
      fourthProcess: " Розміщення товарів на полицях, вішалках 🗂️",
      fifthProcess: "",
    },
    hostel: "Безкоштовно. 2-4 людини в кімнаті",
    requirements: {
      gender: "Чоловіки, Жінки, Пари 👩",
      experience: "Беремо кандидатів навіть без досвіду роботи в Польщі 🌱",
      proficiency: "Не обов’язково",
      added: "БЕЗКОШТОВНИЙ робочий одяг (футболка, перчатки, робоче взуття) 👕",
    },
  },

  {
    rewievs: {
      name: "Катерина",
      images: [],
      date: "14.04.2022",
      vacancy: "Valeo",
      review: "Робота не тяжка, все як і сказав мені менеджер, житло гарне",
    },
    aboutCompany: "🔧 Запрошуємо на роботу: Оператор машин у автомобільному виробництві! 🚗💡",
    title: "Пакування автомобільних фар",
    pageTitle: "Пакувальник автомобільних фар для таких автомобілей як : 'Mersedes' 'Audi' 'BMW'",
    img: {
      hostelFoto: [],
      vacancyFoto: valeoMain,
    },
    name: "Valeo",
    city: "Chrzanów (30 км від Краків)",
    contract: "Umowa o pracę",
    salary: {
      salaryPerHour: salaryZlecenia,
      studentsSalary: studentsSalary,
      salaryPerMonth: salaryUmowaOPrace,
      night: "+20% до ставки 🌙",
      overtime: "+50% до ставки ⏱️",
      weekendWork: "+100% до ставки 🎉",
    },
    workingHours: "8-10 годин в день (5 днів на тиждень)",
    premiums: "500 зл брутто за продуктивність та відсутність прогулів 💸",
    responsibilities: {
      firstProcess: " Сортування, маркування, упаковка одягу 📦",
      secondProcess: " Збір та комплектація замовлень 🧺",
      thirdProcess: " Розпаковка/перепаковка товару 📥",
      fourthProcess: " Розміщення товарів на полицях, вішалках 🗂️",
      fifthProcess: "",
    },
    hostel: "Безкоштовно. 2-4 людини в кімнаті",
    requirements: {
      gender: "Чоловіки, Жінки, Пари 👩",
      experience: "Беремо кандидатів навіть без досвіду роботи в Польщі 🌱",
      proficiency: "Не обов’язково",
      added: "БЕЗКОШТОВНИЙ робочий одяг (футболка, перчатки, робоче взуття) 👕",
    },
  },

  {
    rewievs: {
      name: "Катерина",
      images: [],
      date: "14.04.2022",
      vacancy: "Valeo",
      review: "Робота не тяжка, все як і сказав мені менеджер, житло гарне",
    },
    aboutCompany: "🔧 Запрошуємо на роботу: Оператор машин у автомобільному виробництві! 🚗💡",
    title: "Пакування автомобільних фар",
    pageTitle: "Пакувальник автомобільних фар для таких автомобілей як : 'Mersedes' 'Audi' 'BMW'",
    img: {
      hostelFoto: [],
      vacancyFoto: valeoMain,
    },
    name: "Valeo",
    city: "Chrzanów (30 км від Краків)",
    contract: "Umowa o pracę",
    salary: {
      salaryPerHour: salaryZlecenia,
      studentsSalary: studentsSalary,
      salaryPerMonth: salaryUmowaOPrace,
      night: "+20% до ставки 🌙",
      overtime: "+50% до ставки ⏱️",
      weekendWork: "+100% до ставки 🎉",
    },
    workingHours: "8-10 годин в день (5 днів на тиждень)",
    premiums: "500 зл брутто за продуктивність та відсутність прогулів 💸",
    responsibilities: {
      firstProcess: " Сортування, маркування, упаковка одягу 📦",
      secondProcess: " Збір та комплектація замовлень 🧺",
      thirdProcess: " Розпаковка/перепаковка товару 📥",
      fourthProcess: " Розміщення товарів на полицях, вішалках 🗂️",
      fifthProcess: "",
    },
    hostel: "Безкоштовно. 2-4 людини в кімнаті",
    requirements: {
      gender: "Чоловіки, Жінки, Пари 👩",
      experience: "Беремо кандидатів навіть без досвіду роботи в Польщі 🌱",
      proficiency: "Не обов’язково",
      added: "БЕЗКОШТОВНИЙ робочий одяг (футболка, перчатки, робоче взуття) 👕",
    },
  },

  {
    rewievs: {
      name: "Катерина",
      images: [],
      date: "14.04.2022",
      vacancy: "Valeo",
      review: "Робота не тяжка, все як і сказав мені менеджер, житло гарне",
    },
    aboutCompany: "🔧 Запрошуємо на роботу: Оператор машин у автомобільному виробництві! 🚗💡",
    title: "Пакування автомобільних фар",
    pageTitle: "Пакувальник автомобільних фар для таких автомобілей як : 'Mersedes' 'Audi' 'BMW'",
    img: {
      hostelFoto: [],
      vacancyFoto: valeoMain,
    },
    name: "Valeo",
    city: "Chrzanów (30 км від Краків)",
    contract: "Umowa o pracę",
    salary: {
      salaryPerHour: salaryZlecenia,
      studentsSalary: studentsSalary,
      salaryPerMonth: salaryUmowaOPrace,
      night: "+20% до ставки 🌙",
      overtime: "+50% до ставки ⏱️",
      weekendWork: "+100% до ставки 🎉",
    },
    workingHours: "8-10 годин в день (5 днів на тиждень)",
    premiums: "500 зл брутто за продуктивність та відсутність прогулів 💸",
    responsibilities: {
      firstProcess: " Сортування, маркування, упаковка одягу 📦",
      secondProcess: " Збір та комплектація замовлень 🧺",
      thirdProcess: " Розпаковка/перепаковка товару 📥",
      fourthProcess: " Розміщення товарів на полицях, вішалках 🗂️",
      fifthProcess: "",
    },
    hostel: "Безкоштовно. 2-4 людини в кімнаті",
    requirements: {
      gender: "Чоловіки, Жінки, Пари 👩",
      experience: "Беремо кандидатів навіть без досвіду роботи в Польщі 🌱",
      proficiency: "Не обов’язково",
      added: "БЕЗКОШТОВНИЙ робочий одяг (футболка, перчатки, робоче взуття) 👕",
    },
  },

  {
    rewievs: {
      name: "Катерина",
      images: [],
      date: "14.04.2022",
      vacancy: "Valeo",
      review: "Робота не тяжка, все як і сказав мені менеджер, житло гарне",
    },
    aboutCompany: "🔧 Запрошуємо на роботу: Оператор машин у автомобільному виробництві! 🚗💡",
    title: "Пакування автомобільних фар",
    pageTitle: "Пакувальник автомобільних фар для таких автомобілей як : 'Mersedes' 'Audi' 'BMW'",
    img: {
      hostelFoto: [],
      vacancyFoto: valeoMain,
    },
    name: "Valeo",
    city: "Chrzanów (30 км від Краків)",
    contract: "Umowa o pracę",
    salary: {
      salaryPerHour: salaryZlecenia,
      studentsSalary: studentsSalary,
      salaryPerMonth: salaryUmowaOPrace,
      night: "+20% до ставки 🌙",
      overtime: "+50% до ставки ⏱️",
      weekendWork: "+100% до ставки 🎉",
    },
    workingHours: "8-10 годин в день (5 днів на тиждень)",
    premiums: "500 зл брутто за продуктивність та відсутність прогулів 💸",
    responsibilities: {
      firstProcess: " Сортування, маркування, упаковка одягу 📦",
      secondProcess: " Збір та комплектація замовлень 🧺",
      thirdProcess: " Розпаковка/перепаковка товару 📥",
      fourthProcess: " Розміщення товарів на полицях, вішалках 🗂️",
      fifthProcess: "",
    },
    hostel: "Безкоштовно. 2-4 людини в кімнаті",
    requirements: {
      gender: "Чоловіки, Жінки, Пари 👩",
      experience: "Беремо кандидатів навіть без досвіду роботи в Польщі 🌱",
      proficiency: "Не обов’язково",
      added: "БЕЗКОШТОВНИЙ робочий одяг (футболка, перчатки, робоче взуття) 👕",
    },
  },
];
