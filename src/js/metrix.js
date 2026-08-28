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
const COUNTER_ID_signup = 603019871;
const COUNTER_ID_pogram = 603022739;

// Кнопки «Записаться»
const signupButtons = document.querySelectorAll('[data-metric="cta_signup"]');

if (signupButtons.length > 0) {
  signupButtons.forEach((button) => {
    button.addEventListener("click", () => {
      ym(COUNTER_ID_signup, "reachGoal", "cta_signup", {
        section: button.dataset.section,
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
      ym(COUNTER_ID_pogram, "reachGoal", "cta_program", {
        section: button.dataset.section,
        program: button.dataset.program,
      });

      console.log("Цель 'Получить программу' достигнута");
    });
  });
}
