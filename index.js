$(function() {
    $('.container').on('submit', '#js-shopping-list-form', (event) => {
        event.preventDefault();

        let itemInput = $('#shopping-list-entry').val();

        $('.shopping-list').append('<li><span class="shopping-item">apples</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>');
        $('.shopping-item').last().text(itemInput);


    })



    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked')
    })

    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
        $(this).closest('li').remove()
    })


})