const faqItems = document.querySelectorAll("[data-faq-item]");

if (faqItems.length) {
  faqItems.forEach((item) => {
    const trigger = item.querySelector(".faq__trigger");
    const answer = item.querySelector(".faq__answer");

    if (!trigger || !answer) {
      return;
    }

    trigger.addEventListener("click", () => {
      const isOpen = item.classList.contains("faq__item--open");

      // Закрываем все вопросы
      faqItems.forEach((faqItem) => {
        faqItem.classList.remove("faq__item--open");

        const faqTrigger = faqItem.querySelector(".faq__trigger");
        const faqAnswer = faqItem.querySelector(".faq__answer");

        if (faqTrigger) {
          faqTrigger.setAttribute("aria-expanded", "false");
        }

        if (faqAnswer) {
          faqAnswer.setAttribute("aria-hidden", "true");
        }
      });

      // Если нажатый вопрос был закрыт — открываем его
      if (!isOpen) {
        item.classList.add("faq__item--open");

        trigger.setAttribute("aria-expanded", "true");
        answer.setAttribute("aria-hidden", "false");
      }
    });
  });
}
