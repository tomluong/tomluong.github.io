$('div[expandable]').hide();
$('a.expand').on('click', function (e) {
  e.preventDefault();
  const $this = $(this);
  $(`div[expandable="${$this.attr('data-expand')}"]`).show();
  $this.hide();
})
