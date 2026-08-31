//! Настройки
// Для кнопок передать:
// data-metric="name" - cta_signup
// data-location="name" - cta_program

//! Наши значения

// CTA "Записаться":
// - cta_signup
// - ID: 603019871
// CTA "Получить программу":
// - cta_program
// - ID: 603022739
//* Дополнительно добавить:
// телефон
// написать в вотс
// расписание
// отдельно для преподов

//! Пример объекта отправки

/* Записаться
    {
        section: 'teachers',
        teacher: 'ivan'
    }
*/

/* Получить программу
    {
        section: 'program',
        program: 'all'
    }
*/

//? КОД
// const COUNTER_ID_signup = 603019871;
// const COUNTER_ID_pogram = 603022739;
const COUNTER_ID = 112032088;

// Кнопки «Записаться»
const signupButtons = document.querySelectorAll('[data-metric="cta_signup"]');

if (signupButtons.length > 0) {
  signupButtons.forEach((button) => {
    console.log(button);

    const test = {
      section: button.dataset.section,

      ...(button.dataset.teacher && {
        teacher: button.dataset.teacher,
      }),
    };

    console.log(test);

    button.addEventListener("click", () => {
      ym(COUNTER_ID, "reachGoal", "cta_signup", {
        section: button.dataset.section,

        ...(button.dataset.teacher && {
          teacher: button.dataset.teacher,
        }),
      });

      console.log("Цель 'Записаться' достигнута");
    });
  });
}

// Кнопки «Получить программу»
const programButtons = document.querySelectorAll('[data-metric="cta_program"]');

if (programButtons.length > 0) {
  programButtons.forEach((button) => {
    button.addEventListener("click", () => {
      ym(COUNTER_ID, "reachGoal", "cta_program", {
        section: button.dataset.section,
        program: button.dataset.program,
      });

      console.log("Цель 'Получить программу' достигнута");
    });
  });
}

// Кнопки «Номер телефона»
const phoneButtons = document.querySelectorAll('[data-metric="phone_click"]');

if (phoneButtons.length > 0) {
  phoneButtons.forEach((button) => {
    button.addEventListener("click", () => {
      ym(COUNTER_ID, "reachGoal", "phone_click", {
        section: button.dataset.section,
      });

      console.log("Цель 'Позвонить' достигнута");
    });
  });
}

// Кнопки «WhatsApp»
const whatsappButtons = document.querySelectorAll(
  '[data-metric="whatsapp_click"]',
);

if (whatsappButtons.length > 0) {
  whatsappButtons.forEach((button) => {
    button.addEventListener("click", () => {
      ym(COUNTER_ID, "reachGoal", "whatsapp_click", {
        section: button.dataset.section,
        ...(button.dataset.placement && {
          placement: button.dataset.placement,
        }),
      });

      console.log("Цель 'Написать в WA' достигнута");
    });
  });
}
