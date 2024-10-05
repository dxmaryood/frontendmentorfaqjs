const faqSection = document.querySelectorAll('.faq-section');

faqSection.forEach(faq => {
    const faqReveal = faq.querySelector('.faq-reveal');
    faqReveal.style.height = '0'; // Initially hide the FAQ answer
});

faqSection.forEach (faq => {
    const plusIcon = faq.querySelector('.icon-plus');
    const minusIcon = faq.querySelector('.icon-minus');
    const faqReveal = faq.querySelector('.faq-reveal');

   plusIcon.addEventListener('click', () => {
    faqReveal.style.height = `${faqReveal.scrollHeight}px`;
    plusIcon.style.display = 'none';
    minusIcon.style.display = 'block'
   });

   minusIcon.addEventListener('click', () => {
    faqReveal.style.height = '0'; // Collapse to zero height
    plusIcon.style.display = 'block';
    minusIcon.style.display = 'none';
   });
});
