import React from "react";

import WaytoWorkWithUs from "../WayToWorkWithUs/WayToWorkWithUs";

const cardsTemplate = [
  {
    text: "Ми уточнюємо інформацію, що до Ваших побажань",
  },
  {
    text: "Ми підбираємо для Вас список пропозицій",
  },
  {
    text: "Після цього, Ви обираєте вакансію",
  },
  {
    text: "Ви надсилаєте фото документів, та анкетну інформацію для складання договору",
  },
  {
    text: "Ми бронюємо для Вас місце, та реєструємо в базі роботодавця",
  },
  {
    text: "Ми складаємо Вам маршрутний лист, з адресою та деталями поїздки",
  },
  {
    text: "Ви їдете до Польщі. Там Вас зустрічає координатор,та консультуватиме що до подальших дій",
  },
  {
    text: "Підписуєте трудовий договорір, з роботодавцем та приступаєте до роботи",
  },
];

const TemplateCardsWorkWithUs = () => {
  return (
    <>
      <WaytoWorkWithUs cardsTemplate={cardsTemplate} />
    </>
  );
};

export default TemplateCardsWorkWithUs;
