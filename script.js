const btn = document.getElementById("inspire-btn");
let quotesplace = document.getElementById("quotes")
let quotes = ['My mother always used to say: The older you get, the better you get, unless you’re a banana.',
             'Gentlemen, you cant fight in here. This is the war room',
            'Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.']


btn.addEventListener('click', function() {

    const randomIndex = Math.floor(Math.random() * quotes.length)

    quotesplace.innerText = quotes[randomIndex];

    
})

