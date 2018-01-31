import $ from 'jquery';

const init = () => {
  $.fn.timeline = target => {
    const selectors = {
      id: $(target),
      item: $(target).find('.timeline-item'),
      activeClass: 'timeline-item--active',
      img: '.timeline__img',
    };
    selectors.item.eq(0).addClass(selectors.activeClass);
    selectors.id.css(
      'background-image',
      `url(${selectors.item
        .first()
        .find(selectors.img)
        .attr('src')})`
    );
    const itemLength = selectors.item.length;
    $(window).scroll(({ currentTarget }) => {
      let max;
      let min;
      const pos = $(currentTarget).scrollTop();
      selectors.item.each((i, currentElement) => {
        min = $(currentElement).offset().top;
        max = $(currentElement).height() + $(currentElement).offset().top;
        if (
          i === itemLength - 2 &&
          pos > min + $(currentElement).height() / 2
        ) {
          selectors.item.removeClass(selectors.activeClass);
          selectors.id.css(
            'background-image',
            `url(${selectors.item
              .last()
              .find(selectors.img)
              .attr('src')})`
          );
          selectors.item.last().addClass(selectors.activeClass);
        } else if (pos <= max - 40 && pos >= min) {
          selectors.id.css(
            'background-image',
            `url(${$(currentElement)
              .find(selectors.img)
              .attr('src')})`
          );
          selectors.item.removeClass(selectors.activeClass);
          $(currentElement).addClass(selectors.activeClass);
        }
      });
    });
  };
};

export default init;
