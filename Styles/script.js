$(document).ready(function () {

    // Botão de menu mobile
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $(this).find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item a'); // Corrigido: referenciar os links dentro dos itens de navegação

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop();

        // Sombra no header
        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '0 2px 10px rgba(0, 0, 0, 0.1)');
        }

        // Verificar qual seção está visível
        let activeSectionIndex = 0;

        sections.each(function (i) {
            const section = $(this);
            const sectionTop = section.offset().top - 100;
            const sectionBottom = sectionTop + section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false; // parar o .each
            }
        });

        // Ativar item do menu correspondente
        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    // ScrollReveal para animação
    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%',
    });
    ScrollReveal().reveal('.dish', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

});
document.querySelectorAll('.dish').forEach((item) => {
    item.style.position = 'relative'; // Garante que o z-index funcione corretamente
  
    item.addEventListener('mouseenter', () => {
      item.style.transform = 'scale(1.05)';
      item.style.transition = 'transform 0.3s ease';
      item.style.zIndex = '2'; // Não precisa ser muito alto
    });
  
    item.addEventListener('mouseleave', () => {
      item.style.transform = 'scale(1)';
      item.style.transition = 'transform 0.3s ease';
      item.style.zIndex = '1';
    });
  });
  