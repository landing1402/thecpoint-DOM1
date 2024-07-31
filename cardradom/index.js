
let quantity = 1;
const quantityValue = document.getElementById('quantityValue');

document.getElementById('plusButton').addEventListener('click', function() {
    quantity++;
    updateDisplay();
});

document.getElementById('minusButton').addEventListener('click', function() {
    if (quantity > 1) {
        quantity--;
        updateDisplay();
        }
});


document.getElementById('deleteButton').addEventListener('click',
    function(){
        const card = document.getElementById('card');
        card.remove();
    });

    function updateDisplay( ){
        quantityValue.textContent = quantity;
    }


    document.getElementById('plusButton').addEventListener('click', function() {
        quantity++;
        updateDisplay();
    });
    
    document.getElementById('minusButton').addEventListener('click', function() {
        if (quantity > 1) {
            quantity--;
            updateDisplay();
            }
    });
    
    
    document.getElementById('deleteButton').addEventListener('click',
        function(){
            const card2 = document.getElementById('card2');
            card.remove();
        });

        function updateDisplay( ){
            quantityValue.textContent = quantity;
        }
    


        document.getElementById('plusButton').addEventListener('click', function() {
            quantity++;
            updateDisplay();
        });
        
        document.getElementById('minusButton').addEventListener('click', function() {
            if (quantity > 1) {
                quantity--;
                updateDisplay();
                }
        });
        
        
        document.getElementById('deleteButton').addEventListener('click',
            function(){
                const card3 = document.getElementById('card3');
                card.remove();
            });

    
    function updateDisplay( ){
        quantityValue.textContent = quantity;
    }

